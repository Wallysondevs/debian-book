import { Module } from "@/types/module";
import { PageContainer } from "./layout/PageContainer";
import { AlertBox } from "./ui/AlertBox";
import { CodeBlock } from "./ui/CodeBlock";
import { ParamsTable } from "./ui/ParamsTable";
import {
  Target,
  Terminal,
  GraduationCap,
  FlaskConical,
  ChevronRight,
  ChevronLeft,
  Link as LinkIcon,
  BookOpen,
  Lightbulb,
} from "lucide-react";

interface ModuleContentProps {
  module: Module;
  moduleIndex: number;
  totalModules: number;
  onNavigate: (direction: "prev" | "next") => void;
}

const tipTypeMap: Record<string, "info" | "warning" | "danger" | "success"> = {
  info: "info",
  warning: "warning",
  danger: "danger",
  success: "success",
};

export default function ModuleContent({
  module,
  moduleIndex,
  totalModules,
  onNavigate,
}: ModuleContentProps) {
  const prev = moduleIndex > 0;
  const next = moduleIndex < totalModules - 1;

  return (
    <main className="flex-1 min-w-0">
      <PageContainer
        title={`${module.icon} ${module.title}`}
        subtitle={module.description}
        category={module.category}
        index={moduleIndex}
        total={totalModules}
      >
        {/* Objectives */}
        {module.objectives && module.objectives.length > 0 && (
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 my-6">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-primary" />
              <h3 className="text-base font-bold text-primary uppercase tracking-wide m-0">
                O que você vai aprender
              </h3>
            </div>
            <ul className="m-0 pl-5 space-y-1.5">
              {module.objectives.map((obj, i) => (
                <li key={i} className="text-foreground/90 leading-relaxed">
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Content paragraphs */}
        <section>
          <h2>
            <BookOpen className="w-5 h-5 text-primary" /> Conceitos
          </h2>
          {module.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>

        {/* Tips */}
        {module.tips && module.tips.length > 0 && (
          <section>
            <h2>
              <Lightbulb className="w-5 h-5 text-primary" /> Dicas e Avisos
            </h2>
            {module.tips.map((tip, i) => (
              <AlertBox
                key={i}
                type={tipTypeMap[tip.type] || "info"}
                title={tip.title || "Dica"}
              >
                {tip.content}
              </AlertBox>
            ))}
          </section>
        )}

        {/* Commands */}
        {module.commands && module.commands.length > 0 && (
          <section>
            <h2>
              <Terminal className="w-5 h-5 text-primary" /> Comandos
            </h2>
            {module.commands.map((cmd, i) => {
              const exampleCode =
                cmd.example && cmd.example.trim().length > 0 ? cmd.example : cmd.command;
              const codeWithOutput = cmd.output
                ? `${exampleCode}\n# saída esperada:\n# ${cmd.output.split("\n").join("\n# ")}`
                : exampleCode;
              return (
                <div key={i} className="mb-8">
                  <h3 className="font-mono text-primary text-base mb-2 mt-6">
                    $ {cmd.command}
                  </h3>
                  <p className="text-foreground/85 mb-3">{cmd.description}</p>
                  <CodeBlock code={codeWithOutput} language="bash" />
                  {cmd.flags && cmd.flags.length > 0 && (
                    <ParamsTable
                      title="Flags / Opções"
                      params={cmd.flags.map((f) => ({ flag: f.flag, desc: f.description }))}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* Practice Labs */}
        {module.practiceLabs && module.practiceLabs.length > 0 && (
          <section>
            <h2>
              <FlaskConical className="w-5 h-5 text-primary" /> Laboratórios Práticos
            </h2>
            {module.practiceLabs.map((lab, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-5 my-6"
              >
                <h3 className="text-lg font-bold text-foreground mt-0 mb-2 flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-primary" />
                  Lab {i + 1}: {lab.title}
                </h3>
                <p className="text-foreground/85 mb-3">
                  <strong className="text-primary">Objetivo:</strong> {lab.goal}
                </p>
                <ol className="pl-5 space-y-1.5 mb-3">
                  {lab.steps.map((step, j) => (
                    <li key={j} className="text-foreground/90 leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
                {lab.command && (
                  <>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-4 mb-1">
                      Comando
                    </p>
                    <CodeBlock code={lab.command} language="bash" />
                  </>
                )}
                {lab.expected && (
                  <AlertBox type="info" title="Saída esperada">
                    <pre className="font-mono text-xs whitespace-pre-wrap m-0">
                      {lab.expected}
                    </pre>
                  </AlertBox>
                )}
                {lab.verify && (
                  <AlertBox type="success" title="Como verificar">
                    {lab.verify}
                  </AlertBox>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Exercises */}
        {module.exercises && module.exercises.length > 0 && (
          <section>
            <h2>
              <GraduationCap className="w-5 h-5 text-primary" /> Exercícios
            </h2>
            <div className="space-y-4">
              {module.exercises.map((ex) => (
                <details
                  key={ex.id}
                  className="rounded-xl border border-border bg-card p-5 group"
                >
                  <summary className="cursor-pointer font-semibold text-foreground flex items-start gap-3 list-none">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                      {ex.id}
                    </span>
                    <span className="flex-1 leading-relaxed">{ex.question}</span>
                  </summary>
                  <div className="mt-4 pl-10 space-y-2">
                    {ex.hint && (
                      <p className="text-sm text-muted-foreground italic">
                        💡 Dica: {ex.hint}
                      </p>
                    )}
                    <div className="rounded-lg bg-muted/40 border border-border p-3">
                      <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                        Resposta
                      </p>
                      <p className="text-sm text-foreground/90 m-0 whitespace-pre-wrap">
                        {ex.answer}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* References */}
        {module.references && module.references.length > 0 && (
          <section>
            <h2>
              <LinkIcon className="w-5 h-5 text-primary" /> Referências
            </h2>
            <ul className="space-y-2 m-0 pl-0 list-none">
              {module.references.map((ref, i) => (
                <li key={i} className="rounded-lg border border-border bg-card p-3">
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:underline"
                    >
                      {ref.title}
                    </a>
                  ) : (
                    <span className="font-semibold text-foreground">{ref.title}</span>
                  )}
                  {ref.description && (
                    <p className="text-sm text-muted-foreground m-0 mt-1">{ref.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Navigation */}
        <nav className="flex items-center justify-between gap-3 mt-12 pt-6 border-t border-border">
          <button
            type="button"
            onClick={() => onNavigate("prev")}
            disabled={!prev}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card text-foreground hover:bg-accent/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Anterior</span>
          </button>
          <span className="text-xs text-muted-foreground font-mono">
            {String(moduleIndex + 1).padStart(2, "0")} / {totalModules}
          </span>
          <button
            type="button"
            onClick={() => onNavigate("next")}
            disabled={!next}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span className="text-sm font-medium">Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>
      </PageContainer>
    </main>
  );
}
