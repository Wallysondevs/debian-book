import { Module } from "@/types/module";
import CommandBlock from "./CommandBlock";
import ExerciseCard from "./ExerciseCard";
import {
  BookOpen,
  Terminal,
  GraduationCap,
  ChevronRight,
  ChevronLeft,
  Target,
  Info,
  AlertTriangle,
  ShieldAlert,
  CheckCircle2,
  FlaskConical,
  Link as LinkIcon,
} from "lucide-react";

interface ModuleContentProps {
  module: Module;
  moduleIndex: number;
  totalModules: number;
  onNavigate: (direction: "prev" | "next") => void;
}

const tipStyles = {
  info: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    headerBg: "bg-blue-500/10",
    text: "text-blue-300",
    icon: Info,
  },
  warning: {
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/5",
    headerBg: "bg-yellow-500/10",
    text: "text-yellow-300",
    icon: AlertTriangle,
  },
  danger: {
    border: "border-red-500/30",
    bg: "bg-red-500/5",
    headerBg: "bg-red-500/10",
    text: "text-red-300",
    icon: ShieldAlert,
  },
  success: {
    border: "border-green-500/30",
    bg: "bg-green-500/5",
    headerBg: "bg-green-500/10",
    text: "text-green-300",
    icon: CheckCircle2,
  },
} as const;

const ModuleContent = ({
  module,
  moduleIndex,
  totalModules,
  onNavigate,
}: ModuleContentProps) => {
  return (
    <div className="min-w-0 flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-20 lg:pt-10">
        {/* HEADER */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono mb-1">
            <span className="uppercase tracking-wider">{module.category}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono mb-3">
            <span>Módulo {String(moduleIndex + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(totalModules).padStart(2, "0")}</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl sm:text-3xl">{module.icon}</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              {module.title}
            </h1>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg">
            {module.description}
          </p>
        </div>

        {/* OBJECTIVES */}
        {module.objectives && module.objectives.length > 0 && (
          <section className="mb-10">
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Target size={18} className="text-primary" />
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">
                  O que você vai aprender
                </h2>
              </div>
              <ul className="space-y-2 list-disc pl-5 text-[15px] text-secondary-foreground">
                {module.objectives.map((obj, i) => (
                  <li key={i} className="leading-relaxed">{obj}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CONCEITOS */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-primary" />
            <h2 className="text-lg font-bold text-foreground">Conceitos</h2>
          </div>
          <div className="space-y-4">
            {module.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-secondary-foreground leading-relaxed text-[15px] animate-fade-in whitespace-pre-line"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* TIPS / WARNINGS */}
        {module.tips && module.tips.length > 0 && (
          <section className="mb-10 space-y-4">
            {module.tips.map((tip, i) => {
              const style = tipStyles[tip.type];
              const Icon = style.icon;
              return (
                <div
                  key={i}
                  className={`rounded-xl border ${style.border} ${style.bg} overflow-hidden`}
                >
                  {tip.title && (
                    <div
                      className={`flex items-center gap-2 px-4 py-2 ${style.headerBg} border-b ${style.border}`}
                    >
                      <Icon size={16} className={style.text} />
                      <h4 className={`text-sm font-bold ${style.text} m-0`}>
                        {tip.title}
                      </h4>
                    </div>
                  )}
                  <div className="p-4">
                    {!tip.title && (
                      <Icon size={16} className={`${style.text} float-left mr-2 mt-1`} />
                    )}
                    <p className="text-[14px] text-secondary-foreground leading-relaxed m-0 whitespace-pre-line">
                      {tip.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* COMMANDS */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Terminal size={18} className="text-terminal" />
            <h2 className="text-lg font-bold text-foreground">
              Comandos ({module.commands.length})
            </h2>
          </div>
          <div className="space-y-2">
            {module.commands.map((cmd, i) => (
              <CommandBlock key={i} command={cmd} />
            ))}
          </div>
        </section>

        {/* PRACTICE LABS */}
        {module.practiceLabs && module.practiceLabs.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <FlaskConical size={18} className="text-primary" />
              <h2 className="text-lg font-bold text-foreground">
                Laboratórios práticos ({module.practiceLabs.length})
              </h2>
            </div>
            <div className="space-y-5">
              {module.practiceLabs.map((lab, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-primary/30 bg-primary/5 overflow-hidden"
                >
                  <div className="flex items-center gap-2 px-5 py-3 bg-primary/10 border-b border-primary/20">
                    <FlaskConical size={16} className="text-primary" />
                    <h4 className="font-bold text-foreground m-0 text-base">
                      Pratique: {lab.title}
                    </h4>
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <p className="text-xs uppercase font-semibold text-primary mb-1 tracking-wider">
                        Objetivo
                      </p>
                      <p className="text-sm text-secondary-foreground leading-relaxed m-0">
                        {lab.goal}
                      </p>
                    </div>
                    {lab.steps && lab.steps.length > 0 && (
                      <div>
                        <p className="text-xs uppercase font-semibold text-primary mb-2 tracking-wider">
                          Passo a passo
                        </p>
                        <ol className="text-sm text-secondary-foreground space-y-1.5 list-decimal pl-5 m-0">
                          {lab.steps.map((step, j) => (
                            <li key={j} className="leading-relaxed">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                    {lab.command && (
                      <div>
                        <p className="text-xs uppercase font-semibold text-primary mb-1 tracking-wider">
                          Comandos para executar
                        </p>
                        <pre className="text-xs font-mono text-foreground bg-black/40 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap leading-relaxed m-0">
                          {lab.command}
                        </pre>
                      </div>
                    )}
                    {lab.expected && (
                      <div>
                        <p className="text-xs uppercase font-semibold text-green-500 mb-1 tracking-wider">
                          Saída esperada
                        </p>
                        <pre className="text-xs font-mono text-green-300 bg-black/40 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap leading-relaxed m-0">
                          {lab.expected}
                        </pre>
                      </div>
                    )}
                    {lab.verify && (
                      <div className="flex items-start gap-2 rounded-lg bg-green-500/10 border border-green-500/20 p-3">
                        <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                        <p className="text-xs text-green-300 leading-relaxed m-0">
                          <strong className="text-green-400">Como verificar: </strong>
                          {lab.verify}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EXERCISES */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={18} className="text-warning" />
            <h2 className="text-lg font-bold text-foreground">
              Exercícios ({module.exercises.length})
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Tente responder antes de ver a resposta! Pratique no seu terminal para fixar.
          </p>
          {module.exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </section>

        {/* REFERENCES */}
        {module.references && module.references.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <LinkIcon size={18} className="text-primary" />
              <h2 className="text-lg font-bold text-foreground">
                Referências e leitura adicional
              </h2>
            </div>
            <ul className="space-y-2">
              {module.references.map((ref, i) => (
                <li key={i} className="text-sm">
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      {ref.title}
                    </a>
                  ) : (
                    <span className="text-foreground font-medium">{ref.title}</span>
                  )}
                  {ref.description && (
                    <span className="text-muted-foreground"> — {ref.description}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* NAV */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <button
            onClick={() => onNavigate("prev")}
            disabled={moduleIndex === 0}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
            Anterior
          </button>
          <button
            onClick={() => onNavigate("next")}
            disabled={moduleIndex === totalModules - 1}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Próximo
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
