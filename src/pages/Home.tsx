import { Link } from "wouter";
import { PageContainer } from "@/components/layout/PageContainer";
import { DebianLogo } from "@/components/ui/DebianLogo";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { modules } from "@/data/modules";
import { useProgress } from "@/lib/course";
import { LEVEL_LABEL, LEVEL_COLOR } from "@/lib/levels";
import {
  BookOpen, Terminal, Server, Shield, ArrowRight,
  Package, HardDrive, Network, Code, Users, Zap
} from "lucide-react";

const moduleIcons: Record<string, typeof BookOpen> = {
  "📚": BookOpen,
  "📖": BookOpen,
  "🐧": Terminal,
  "💾": HardDrive,
  "⌨️": Terminal,
  "📝": Code,
  "🔐": Shield,
  "📦": Package,
  "⚙️": Server,
  "🌐": Network,
  "🐚": Terminal,
  "💿": HardDrive,
  "🖥️": Server,
  "📋": Code,
  "🔍": Zap,
};

function getIcon(emoji: string) {
  const Icon = moduleIcons[emoji] || BookOpen;
  return <Icon className="w-4 h-4" />;
}

const categoryGroups: Record<string, string> = {
  "Fundamentos Teóricos": "📖 Fundamentos",
  "Instalação & Ambiente": "💿 Instalação",
  "Terminal & Arquivos": "⌨️ Terminal",
  "Edição & Busca": "📝 Edição",
  "Permissões & Usuários": "🔐 Segurança",
  "Pacotes & Programas": "📦 Pacotes",
  "Sistema & Kernel": "⚙️ Sistema",
  "Rede & Segurança": "🌐 Rede",
  "Shell & Scripts": "🐚 Shell",
  "Discos & Backup": "💾 Armazenamento",
  "Servidores & Containers": "🖥️ Servidores",
  "Glossário & Referências": "📋 Referências",
};

export default function Home() {
  const { percent, count } = useProgress();

  // Group modules by category
  const grouped = modules.reduce((acc, mod) => {
    const group = categoryGroups[mod.category] || mod.category;
    if (!acc[group]) acc[group] = [];
    acc[group].push(mod);
    return acc;
  }, {} as Record<string, typeof modules>);

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-xl mb-8">
          <div className="aurora" />
          <div
            className="orb aurora-orb-1"
            style={{
              width: 280,
              height: 280,
              top: "-15%",
              left: "10%",
              background: "hsl(var(--debian-red) / 0.4)",
            }}
          />
          <div
            className="orb aurora-orb-2"
            style={{
              width: 220,
              height: 220,
              top: "40%",
              right: "-5%",
              background: "hsl(var(--debian-amber) / 0.35)",
            }}
          />
          <div
            className="orb aurora-orb-3"
            style={{
              width: 200,
              height: 200,
              bottom: "-10%",
              left: "40%",
              background: "hsl(var(--debian-blue) / 0.3)",
            }}
          />

          <div className="relative z-10 px-4 sm:px-8 py-6 sm:py-8 text-center">
            <DebianLogo size={28} className="mx-auto mb-4 text-[hsl(var(--debian-red))]" />
            <h1 className="text-xl sm:text-2xl font-extrabold mb-4 tracking-tight">
              <span className="text-gradient-debian">
                Debian GNU/Linux
              </span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-2">
              Curso hands-on em português — do primeiro comando no terminal até subir servidores
            </p>
            <p className="text-sm text-muted-foreground/70 mb-8">
              Atualizado para Debian 13 (Trixie) · 2026
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Link href={`/modulo/${modules[0]?.id || ""}`}>
                <Button size="lg" className="font-mono gap-2 text-sm shine">
                  Começar curso <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={`/modulo/${modules[modules.length - 1]?.id || ""}`}>
                <Button variant="outline" size="lg" className="font-mono text-sm">
                  📋 Glossário
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[hsl(var(--debian-red))]" />
                <span className="font-mono">{modules.length} módulos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-[hsl(var(--debian-amber))]" />
                <span className="font-mono">100% prático</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[hsl(var(--debian-green))]" />
                <span className="font-mono">Software Livre</span>
              </div>
            </div>

            {/* Progress */}
            {count > 0 && (
              <div className="mt-8 max-w-sm mx-auto">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="text-muted-foreground">Progresso</span>
                  <span className="text-[hsl(var(--debian-red))] font-bold">{percent}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full transition-[width] duration-500 rounded-full"
                    style={{
                      width: `${percent}%`,
                      background: `linear-gradient(90deg, hsl(var(--debian-red)), hsl(var(--debian-amber)))`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Terminal Demo */}
        <div className="term-window term-window--debian mb-12 max-w-2xl mx-auto">
          <div className="term-titlebar">
            <div className="flex items-center gap-1.5">
              <span className="term-dot" style={{ background: "#ff5f57" }} />
              <span className="term-dot" style={{ background: "#febc2e" }} />
              <span className="term-dot" style={{ background: "#28c840" }} />
            </div>
            <span className="font-mono text-[10px] text-white/60">debian@trixie: ~</span>
            <div className="w-16" />
          </div>
          <div className="term-body term-scanlines p-4 font-mono text-sm">
            <div className="term-line">
              <span className="text-[hsl(var(--debian-red))]">root</span>
              <span className="text-[hsl(var(--debian-amber))]">@</span>
              <span className="text-[hsl(var(--debian-red))]">debian</span>
              <span className="text-[hsl(var(--debian-dim))]">:~#</span>
              {" "}
              <span className="text-[hsl(var(--debian-blue))]">apt install conhecimento</span>
            </div>
            <div className="term-line term-comment text-[hsl(var(--debian-dim))] mt-1">
              Lendo listas de pacotes... Pronto
            </div>
            <div className="term-line term-comment text-[hsl(var(--debian-dim))]">
              Construindo árvore de dependências... Pronto
            </div>
            <div className="term-line text-[hsl(var(--debian-green))] mt-1">
              Os NOVOS pacotes a seguir serão instalados:
            </div>
            <div className="term-line text-[hsl(var(--debian-fg))]">
              {"  "}fundamentos terminal usuarios permissoes pacotes sistema
            </div>
            <div className="term-line text-[hsl(var(--debian-fg))]">
              {"  "}rede seguranca shell scripts discos backup servidores containers
            </div>
            <div className="term-line text-[hsl(var(--debian-dim))] mt-1">
              0 pacotes atualizados, 37 novos instalados.
            </div>
            <div className="term-line mt-2">
              <span className="text-[hsl(var(--debian-red))]">root</span>
              <span className="text-[hsl(var(--debian-amber))]">@</span>
              <span className="text-[hsl(var(--debian-red))]">debian</span>
              <span className="text-[hsl(var(--debian-dim))]">:~#</span>
              {" "}
              <span className="text-[hsl(var(--debian-blue))]">▮</span>
            </div>
          </div>
        </div>

        {/* Module Grid */}
        <h2 className="text-xl font-bold font-mono mb-4 flex items-center gap-2">
          <span className="text-[hsl(var(--debian-red))]">$_</span>
          Módulos do Curso
        </h2>

        <div className="space-y-10">
          {Object.entries(grouped).map(([group, mods]) => (
            <div key={group}>
              <h3 className="text-sm font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {group}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {mods.map((mod) => {
                  const path = `/modulo/${mod.id}`;
                  return (
                    <Link key={mod.id} href={path}>
                      <Card className="h-full hover:border-[hsl(var(--debian-red))/40] hover:shadow-lg hover:shadow-[hsl(var(--debian-red))/5] transition-all duration-200 cursor-pointer group">
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <span className="text-xl">{mod.icon}</span>
                            {mod.level && (
                              <Badge
                                className="text-[10px]"
                                style={{
                                  background: `hsl(var(${LEVEL_COLOR[mod.level]}) / 0.12)`,
                                  color: `hsl(var(${LEVEL_COLOR[mod.level]}))`,
                                  borderColor: `hsl(var(${LEVEL_COLOR[mod.level]}) / 0.25)`,
                                }}
                                variant="outline"
                              >
                                {LEVEL_LABEL[mod.level]}
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-sm font-semibold mt-2 group-hover:text-[hsl(var(--debian-red))] transition-colors">
                            {mod.title}
                          </CardTitle>
                          <CardDescription className="text-xs line-clamp-2">
                            {mod.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            {mod.commands.length > 0 && (
                              <span className="flex items-center gap-1">
                                <Terminal className="w-3 h-3" /> {mod.commands.length} comandos
                              </span>
                            )}
                            {mod.exercises.length > 0 && (
                              <span>· {mod.exercises.length} exercícios</span>
                            )}
                            {mod.readMinutes && (
                              <span>· {mod.readMinutes} min</span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <Separator className="my-12" />
        <div className="text-center pb-8">
          <DebianLogo size={32} className="mx-auto mb-3 text-muted-foreground/40" />
          <p className="text-xs text-muted-foreground font-mono">
            Debian GNU/Linux 13 (Trixie) · Curso em Português · 2026
          </p>
          <p className="text-xs text-muted-foreground/60 font-mono mt-1">
            Software Livre · Conteúdo sob licença GPL
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
