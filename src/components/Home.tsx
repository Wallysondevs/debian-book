import { useMemo } from "react";
import { Module } from "@/types/module";
import { useProgress } from "@/hooks/useProgress";
import { DebianLogo } from "./DebianLogo";
import { HomeTerminal } from "./HomeTerminal";
import {
  ArrowRight,
  Play,
  Terminal as TerminalIcon,
  FlaskConical,
  GraduationCap,
  BookOpen,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface HomeProps {
  modules: Module[];
  onSelect: (id: string) => void;
}

export function Home({ modules, onSelect }: HomeProps) {
  const { completed, count } = useProgress();

  const stats = useMemo(() => {
    let commands = 0;
    let exercises = 0;
    let labs = 0;
    const categories = new Set<string>();
    modules.forEach((m) => {
      commands += m.commands?.length ?? 0;
      exercises += m.exercises?.length ?? 0;
      labs += m.practiceLabs?.length ?? 0;
      categories.add(m.category);
    });
    return { commands, exercises, labs, categories: categories.size };
  }, [modules]);

  const grouped = useMemo(() => {
    const map = new Map<string, Module[]>();
    modules.forEach((m) => {
      if (!map.has(m.category)) map.set(m.category, []);
      map.get(m.category)!.push(m);
    });
    return Array.from(map.entries());
  }, [modules]);

  const pct = modules.length ? Math.round((count / modules.length) * 100) : 0;
  const firstUncompleted = modules.find((m) => !completed.has(m.id));
  const resumeId = firstUncompleted?.id ?? modules[0]?.id;
  const started = count > 0;

  const statTiles = [
    { icon: BookOpen, value: modules.length, label: "módulos" },
    { icon: TerminalIcon, value: `${stats.commands}+`, label: "comandos" },
    { icon: FlaskConical, value: stats.labs, label: "labs práticos" },
    { icon: GraduationCap, value: stats.exercises, label: "exercícios" },
  ];

  return (
    <main className="flex-1 min-w-0">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 hero-grid" aria-hidden="true" />
        <div
          className="aurora-orb aurora-orb-1"
          style={{ width: 380, height: 380, top: -120, left: -80, background: "hsl(var(--primary))" }}
          aria-hidden="true"
        />
        <div
          className="aurora-orb aurora-orb-2"
          style={{ width: 320, height: 320, top: -60, right: -60, background: "hsl(217 86% 55%)" }}
          aria-hidden="true"
        />
        <div
          className="aurora-orb aurora-orb-3"
          style={{ width: 300, height: 300, bottom: -140, left: "40%", background: "hsl(var(--debian-light-red))" }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div style={{ animation: "fade-up 0.5s ease-out both" }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Atualizado para o Debian 13 · Trixie
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 p-2.5">
                <DebianLogo className="w-full h-full" />
              </span>
              <span className="text-sm font-mono text-muted-foreground">
                GNU/Linux · pt-BR
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
              <span className="shine-text">Curso de Debian</span>
              <br />
              do zero ao servidor
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-7">
              Um caminho hands-on: do primeiro comando no terminal até administrar
              pacotes, serviços, rede e subir servidores de verdade. {modules.length}{" "}
              módulos com labs práticos e exercícios — em português.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelect(resumeId)}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
              >
                {started ? <Play className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                {started ? "Continuar de onde parei" : "Começar o curso"}
              </button>
              {started && (
                <button
                  onClick={() => onSelect(modules[0].id)}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent/10 transition-colors"
                >
                  Voltar ao início
                </button>
              )}
            </div>

            {started && (
              <div className="mt-7 max-w-md">
                <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mb-1.5">
                  <span>Seu progresso</span>
                  <span className="font-mono">
                    {count} / {modules.length} · {pct}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          <div style={{ animation: "fade-up 0.6s ease-out 0.15s both" }}>
            <HomeTerminal />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statTiles.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-card p-5 flex items-center gap-4"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <div className="text-2xl font-extrabold leading-none">{value}</div>
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRILHA POR CATEGORIA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold">Trilha do curso</h2>
          <span className="text-sm text-muted-foreground">
            {stats.categories} áreas · {modules.length} módulos
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {grouped.map(([category, items], gi) => {
            const doneInCat = items.filter((m) => completed.has(m.id)).length;
            const catPct = Math.round((doneInCat / items.length) * 100);
            const allDone = doneInCat === items.length;
            return (
              <button
                key={category}
                onClick={() => onSelect(items[0].id)}
                className="text-left rounded-xl border border-border bg-card p-5 hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold leading-tight group-hover:text-primary transition-colors">
                      {category}
                    </h3>
                  </div>
                  {allDone ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {items.map((m) => (
                    <span
                      key={m.id}
                      title={m.title}
                      className={`text-[11px] px-2 py-0.5 rounded-full border ${
                        completed.has(m.id)
                          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-500"
                          : "border-border bg-muted/40 text-muted-foreground"
                      }`}
                    >
                      {m.icon} {m.title.length > 22 ? m.title.slice(0, 22) + "…" : m.title}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${catPct}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground shrink-0">
                    {doneInCat}/{items.length}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-sm text-muted-foreground">
        Feito para estudar de verdade — abra um terminal e vá testando cada comando.
      </footer>
    </main>
  );
}

export default Home;
