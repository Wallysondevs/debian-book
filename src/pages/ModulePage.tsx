import { Suspense, lazy } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { modules } from "@/data/modules";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Terminal, Lightbulb, BookOpen } from "lucide-react";
import { useProgress } from "@/lib/course";
import { LEVEL_LABEL, LEVEL_COLOR } from "@/lib/levels";
import type { Module, Command, Tip, Exercise, PracticeLab, Reference } from "@/types/module";

interface ModulePageProps {
  moduleId: string;
}

function CommandCard({ cmd }: { cmd: Command }) {
  return (
    <Card className="term-window term-window--debian my-3">
      <div className="term-titlebar">
        <div className="flex items-center gap-1.5">
          <span className="term-dot" style={{ background: "#ff5f57" }} />
          <span className="term-dot" style={{ background: "#febc2e" }} />
          <span className="term-dot" style={{ background: "#28c840" }} />
        </div>
        <span className="font-mono text-[10px] text-white/70">debian@trixie:~$</span>
      </div>
      <CardContent className="term-body term-scanlines p-4">
        <p className="text-sm text-[hsl(var(--debian-dim))] mb-2">{cmd.description}</p>
        <CodeBlock language="bash" code={cmd.command} />
        {cmd.example && (
          <p className="text-xs text-[hsl(var(--debian-dim))] mt-2">
            Exemplo: <code className="text-[hsl(var(--debian-blue))]">{cmd.example}</code>
          </p>
        )}
        {cmd.flags && cmd.flags.length > 0 && (
          <div className="mt-2">
            <p className="text-xs font-semibold text-[hsl(var(--debian-amber))] mb-1">Flags:</p>
            <ul className="text-xs space-y-0.5">
              {cmd.flags.map((f) => (
                <li key={f.flag}>
                  <code className="text-[hsl(var(--debian-red))] font-bold">{f.flag}</code>
                  <span className="text-[hsl(var(--debian-dim))]"> — {f.description}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {cmd.output && (
          <div className="mt-3">
            <p className="text-xs font-semibold text-[hsl(var(--debian-green))] mb-1">Saída:</p>
            <CodeBlock language="text" code={cmd.output} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function TipCard({ tip }: { tip: Tip }) {
  return (
    <AlertBox type={tip.type === "danger" ? "danger" : tip.type === "warning" ? "warning" : tip.type === "success" ? "success" : "info"} title={tip.title || "Dica"}>
      <p className="m-0 mt-1">{tip.content}</p>
    </AlertBox>
  );
}

function ExerciseCard({ exercise, index }: { exercise: Exercise; index: number }) {
  return (
    <Card className="mb-3 border-l-4 border-l-[hsl(var(--debian-red))]">
      <CardContent className="p-4">
        <p className="font-semibold text-sm">
          <span className="text-[hsl(var(--debian-red))]">#{index + 1}</span>{" "}
          {exercise.question}
        </p>
        {exercise.hint && (
          <details className="mt-2">
            <summary className="text-xs text-[hsl(var(--debian-amber))] cursor-pointer">Dica</summary>
            <p className="text-xs mt-1 text-muted-foreground">{exercise.hint}</p>
          </details>
        )}
        <details className="mt-2">
          <summary className="text-xs text-[hsl(var(--debian-green))] cursor-pointer">Ver resposta</summary>
          <CodeBlock language="bash" code={exercise.answer} />
        </details>
      </CardContent>
    </Card>
  );
}

function LabCard({ lab }: { lab: PracticeLab }) {
  return (
    <Card className="term-window term-window--debian my-3">
      <div className="term-titlebar">
        <div className="flex items-center gap-1.5">
          <span className="term-dot" style={{ background: "#ff5f57" }} />
          <span className="term-dot" style={{ background: "#febc2e" }} />
          <span className="term-dot" style={{ background: "#28c840" }} />
        </div>
        <span className="font-mono text-[10px] text-white/70">lab » {lab.title}</span>
      </div>
      <CardContent className="term-body term-scanlines p-4">
        <p className="font-bold text-sm mb-2">🎯 {lab.goal}</p>
        <ol className="text-xs space-y-1 ml-4" style={{ listStyleType: "decimal" }}>
          {lab.steps.map((s, i) => (
            <li key={i} className="text-[hsl(var(--debian-fg))]">{s}</li>
          ))}
        </ol>
        {lab.command && <CodeBlock language="bash" code={lab.command} />}
      </CardContent>
    </Card>
  );
}

// Markdown to HTML converter — converts **bold**, `code`, <br> to HTML
function renderMarkdownHTML(text: string): string {
  // Escape HTML first to prevent XSS
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  // Strip template literal escapes: \` → `, \* → *
  html = html.replace(/\\([`*])/g, '$1');
  
  // Convert <br> (now escaped as &lt;br&gt;) back to actual <br/>
  html = html.replace(/&lt;br\s*\/?&gt;/gi, "<br/>");
  
  // Convert **bold**
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  
  // Convert `code`  
  html = html.replace(/`([^`]+)`/g, '<code class="bg-[hsl(var(--debian-bg-2))] text-[hsl(var(--debian-red))] px-1 py-0.5 rounded text-[0.875em] font-mono">$1</code>');
  
  return html;
}

function MarkdownContent({ text }: { text: string }) {
  return <span dangerouslySetInnerHTML={{ __html: renderMarkdownHTML(text) }} />;
}

// Smart paragraph renderer - detects patterns and applies styles
function SmartParagraph({ text }: { text: string }) {
  // Pattern 1: **Term** — definition (glossary-style)
  const defMatch = text.match(/^\*\*(.+?)\*\*\s*[—–-]\s*(.+)/);
  if (defMatch) {
    return (
      <div className="my-4 pl-4 border-l-2 border-[hsl(var(--debian-red))/50] bg-[hsl(var(--debian-bg))/30] rounded-r-lg py-2 pr-3">
        <span className="font-mono font-bold text-sm text-[hsl(var(--debian-red))]">{defMatch[1]}</span>
        <span className="text-muted-foreground"> — </span>
        <span className="text-sm"><MarkdownContent text={defMatch[2]} /></span>
      </div>
    );
  }

  // Pattern 2: Long narrative (>350 chars) — subtle card
  if (text.length > 350) {
    return (
      <div className="my-5 rounded-xl border border-[hsl(var(--debian-red))/10] bg-[hsl(var(--debian-bg))/10] px-5 py-4">
        <div className="text-sm leading-relaxed text-foreground/90">
          <MarkdownContent text={text} />
        </div>
      </div>
    );
  }

  // Pattern 3: Short bold intro
  if (text.startsWith("**") && text.length < 200) {
    return (
      <div className="my-4 px-4 py-2.5 rounded-lg border border-[hsl(var(--debian-amber))/25] bg-[hsl(var(--debian-amber))/8]">
        <p className="text-sm font-medium text-[hsl(var(--debian-amber))] m-0">
          <MarkdownContent text={text} />
        </p>
      </div>
    );
  }

  // Pattern 4: Emoji start
  const emojiStart = text.match(/^([\p{Emoji}\u{200d}]+)/u);
  if (emojiStart && text.length < 200) {
    return (
      <div className="my-3 flex items-start gap-3 px-4 py-2.5 rounded-lg bg-muted/30">
        <span className="text-lg shrink-0">{emojiStart[1]}</span>
        <p className="text-sm m-0"><MarkdownContent text={text.slice(emojiStart[1].length).trim()} /></p>
      </div>
    );
  }

  // Default: regular paragraph
  return (
    <p className="my-3 text-sm leading-relaxed text-foreground/85">
      <MarkdownContent text={text} />
    </p>
  );
}

export default function ModulePage({ moduleId }: ModulePageProps) {
  const mod = modules.find((m) => m.id === moduleId);
  const { has, toggle } = useProgress();
  const path = `/modulo/${moduleId}`;
  const done = has(path);

  if (!mod) {
    return (
      <PageContainer>
        <div className="text-center py-16">
          <p className="font-mono text-[hsl(var(--debian-red))]">Module not found: {moduleId}</p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{mod.icon}</span>
            <h1 className="text-2xl font-bold m-0">{mod.title}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="font-mono text-xs">
              {mod.category}
            </Badge>
            {mod.level && (
              <Badge
                className="text-xs"
                style={{
                  background: `hsl(var(${LEVEL_COLOR[mod.level]}) / 0.15)`,
                  color: `hsl(var(${LEVEL_COLOR[mod.level]}))`,
                  borderColor: `hsl(var(${LEVEL_COLOR[mod.level]}) / 0.3)`,
                }}
              >
                {LEVEL_LABEL[mod.level]}
              </Badge>
            )}
            {mod.readMinutes && (
              <span className="text-xs text-muted-foreground">
                ⏱ {mod.readMinutes} min de leitura
              </span>
            )}
          </div>
          <p className="text-muted-foreground mt-3">{mod.description}</p>
        </div>

        <Separator className="mb-6" />

        {/* Objectives */}
        {mod.objectives && mod.objectives.length > 0 && (
          <Card className="mb-6 border-[hsl(var(--debian-red))/30]">
            <CardHeader>
              <CardTitle className="text-sm font-mono text-[hsl(var(--debian-red))]">
                🎯 Objetivos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {mod.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-[hsl(var(--debian-red))] mt-0.5">▸</span>
                    {obj}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Content — smart paragraphs with Markdown parsing */}
        <div className="space-y-1">
          {mod.content.map((paragraph, i) => (
            <SmartParagraph key={i} text={paragraph} />
          ))}
        </div>

        {/* Tabs */}
        {(mod.commands.length > 0 ||
          (mod.tips && mod.tips.length > 0) ||
          (mod.practiceLabs && mod.practiceLabs.length > 0) ||
          mod.exercises.length > 0) && (
          <Tabs defaultValue="commands" className="mt-8">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent gap-0">
              {mod.commands.length > 0 && (
                <TabsTrigger value="commands" className="font-mono text-xs gap-1 data-[state=active]:border-b-2 data-[state=active]:border-[hsl(var(--debian-red))] rounded-none">
                  <Terminal className="w-3.5 h-3.5" />
                  Comandos ({mod.commands.length})
                </TabsTrigger>
              )}
              {mod.tips && mod.tips.length > 0 && (
                <TabsTrigger value="tips" className="font-mono text-xs gap-1 data-[state=active]:border-b-2 data-[state=active]:border-[hsl(var(--debian-amber))] rounded-none">
                  💡 Dicas ({mod.tips.length})
                </TabsTrigger>
              )}
              {mod.practiceLabs && mod.practiceLabs.length > 0 && (
                <TabsTrigger value="labs" className="font-mono text-xs gap-1 data-[state=active]:border-b-2 data-[state=active]:border-[hsl(var(--debian-green))] rounded-none">
                  🔬 Labs ({mod.practiceLabs.length})
                </TabsTrigger>
              )}
              {mod.exercises.length > 0 && (
                <TabsTrigger value="exercises" className="font-mono text-xs gap-1 data-[state=active]:border-b-2 data-[state=active]:border-[hsl(var(--debian-blue))] rounded-none">
                  ✏️ Exercícios ({mod.exercises.length})
                </TabsTrigger>
              )}
            </TabsList>

            {mod.commands.length > 0 && (
              <TabsContent value="commands" className="mt-4">
                {mod.commands.map((cmd, i) => (
                  <CommandCard key={i} cmd={cmd} />
                ))}
              </TabsContent>
            )}

            {mod.tips && mod.tips.length > 0 && (
              <TabsContent value="tips" className="mt-4 space-y-3">
                {mod.tips.map((tip, i) => (
                  <TipCard key={i} tip={tip} />
                ))}
              </TabsContent>
            )}

            {mod.practiceLabs && mod.practiceLabs.length > 0 && (
              <TabsContent value="labs" className="mt-4">
                {mod.practiceLabs.map((lab, i) => (
                  <LabCard key={i} lab={lab} />
                ))}
              </TabsContent>
            )}

            {mod.exercises.length > 0 && (
              <TabsContent value="exercises" className="mt-4">
                {mod.exercises.map((ex, i) => (
                  <ExerciseCard key={ex.id || i} exercise={ex} index={i} />
                ))}
              </TabsContent>
            )}
          </Tabs>
        )}

        {/* References */}
        {mod.references && mod.references.length > 0 && (
          <>
            <Separator className="my-6" />
            <div>
              <h3 className="text-sm font-mono text-[hsl(var(--debian-red))] mb-2">
                📚 Referências
              </h3>
              <ul className="space-y-1">
                {mod.references.map((ref, i) => (
                  <li key={i} className="text-sm">
                    {ref.url ? (
                      <a href={ref.url} target="_blank" rel="noreferrer" className="text-[hsl(var(--debian-blue))] hover:underline">
                        {ref.title}
                      </a>
                    ) : (
                      <span>{ref.title}</span>
                    )}
                    {ref.description && (
                      <span className="text-muted-foreground"> — {ref.description}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Mark as done */}
        <Separator className="my-8" />
        <div className="flex justify-center">
          <Button
            onClick={() => toggle(path)}
            variant={done ? "default" : "outline"}
            className="font-mono text-sm gap-2"
          >
            {done ? "✅ Concluído" : "☐ Marcar como concluído"}
          </Button>
        </div>
      </article>
    </PageContainer>
  );
}
