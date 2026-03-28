import { Module } from "@/types/module";
  import CommandBlock from "./CommandBlock";
  import ExerciseCard from "./ExerciseCard";
  import { BookOpen, Terminal, GraduationCap, ChevronRight, ChevronLeft } from "lucide-react";

  interface ModuleContentProps {
    module: Module;
    moduleIndex: number;
    totalModules: number;
    onNavigate: (direction: "prev" | "next") => void;
  }

  const ModuleContent = ({ module, moduleIndex, totalModules, onNavigate }: ModuleContentProps) => {
    return (
      <div className="min-w-0 flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-20 lg:pt-10">
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
            <p className="text-muted-foreground text-base sm:text-lg">{module.description}</p>
          </div>

          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={18} className="text-primary" />
              <h2 className="text-lg font-bold text-foreground">Conceitos</h2>
            </div>
            <div className="space-y-4">
              {module.content.map((paragraph, i) => (
                <p key={i} className="text-secondary-foreground leading-relaxed text-[15px] animate-fade-in">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

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
  