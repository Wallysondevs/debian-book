import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { Module } from "@/types/module";
import { X, ChevronRight, Home as HomeIcon, Check } from "lucide-react";
import { DebianLogo } from "../DebianLogo";
import { useProgress } from "@/hooks/useProgress";
import {
  countByLevel,
  resolveLevel,
  type LevelFilter,
} from "@/lib/levels";

export const HOME_ID = "__home__";

interface SidebarProps {
  modules: Module[];
  allModulesCount?: number;
  allModules?: Module[];
  activeId: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
  levelFilter?: LevelFilter;
  onLevelFilterChange?: (f: LevelFilter) => void;
}

const FILTERS: { id: LevelFilter; label: string }[] = [
  { id: "todos", label: "todos" },
  { id: "iniciante", label: "I" },
  { id: "intermediario", label: "M" },
  { id: "avancado", label: "A" },
];

export function Sidebar({
  modules,
  allModulesCount,
  allModules,
  activeId,
  onSelect,
  isOpen,
  onClose,
  levelFilter = "todos",
  onLevelFilterChange,
}: SidebarProps) {
  const { completed, count } = useProgress();
  const totalForProgress = allModulesCount ?? modules.length;
  const counts = useMemo(() => countByLevel(allModules ?? modules), [allModules, modules]);

  // counts should reflect full course when filter active — recompute from progress context modules prop is already filtered
  // Show badge counts based on currently listed modules

  const grouped = useMemo(() => {
    const map = new Map<string, { module: Module; index: number }[]>();
    modules.forEach((m, index) => {
      if (!map.has(m.category)) map.set(m.category, []);
      map.get(m.category)!.push({ module: m, index });
    });
    return Array.from(map.entries());
  }, [modules]);

  const pct = totalForProgress ? Math.round((count / totalForProgress) * 100) : 0;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-72 bg-card border-r border-border z-50 overflow-y-auto transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card z-10">
          <button
            onClick={() => onSelect(HOME_ID)}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-md p-1.5">
              <DebianLogo className="w-full h-full text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">
                Debian
              </h1>
              <p className="text-xs text-muted-foreground">Curso hands-on</p>
            </div>
          </button>
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded hover:bg-accent/20"
            aria-label="Fechar menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground mb-1.5">
            <span>Progresso</span>
            <span className="font-mono">
              {count}/{totalForProgress} · {pct}%
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {onLevelFilterChange && (
          <div className="px-3 pb-2">
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-1.5">
              nível
            </p>
            <div className="flex flex-wrap gap-1">
              {FILTERS.map((f) => {
                const n =
                  f.id === "todos"
                    ? (allModules?.length ?? totalForProgress)
                    : counts[f.id] ?? 0;
                const active = levelFilter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => onLevelFilterChange(f.id)}
                    className={cn(
                      "px-2 py-1 rounded-md text-[11px] font-mono border transition-colors",
                      active
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-muted/40 text-muted-foreground border-border hover:text-foreground",
                    )}
                    title={
                      f.id === "todos"
                        ? "Todos os níveis"
                        : f.id === "iniciante"
                          ? "Iniciante"
                          : f.id === "intermediario"
                            ? "Intermediário"
                            : "Avançado"
                    }
                  >
                    {f.label}
                    <span className="opacity-70 ml-1">{n}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <nav className="p-3 space-y-4">
          <button
            type="button"
            onClick={() => onSelect(HOME_ID)}
            className={cn(
              "w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors text-left font-medium",
              activeId === HOME_ID
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/10",
            )}
          >
            <HomeIcon className="w-4 h-4 shrink-0" />
            <span className="flex-1">Início</span>
            {activeId === HOME_ID && <ChevronRight className="w-3 h-3 shrink-0" />}
          </button>

          {grouped.map(([category, items]) => (
            <div key={category}>
              <h2 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-1.5">
                {category}
              </h2>
              <ul className="space-y-0.5">
                {items.map(({ module, index }) => {
                  const isActive = module.id === activeId;
                  const done = completed.has(module.id);
                  const nivel = resolveLevel(module);
                  const badge =
                    nivel === "iniciante" ? "I" : nivel === "intermediario" ? "M" : "A";
                  return (
                    <li key={module.id}>
                      <button
                        type="button"
                        onClick={() => onSelect(module.id)}
                        className={cn(
                          "w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors text-left",
                          isActive
                            ? "bg-primary text-primary-foreground font-medium shadow-sm"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/10",
                        )}
                      >
                        <span
                          className={cn(
                            "flex items-center justify-center w-5 h-5 shrink-0 rounded",
                            done && !isActive && "text-emerald-500",
                          )}
                        >
                          {done ? (
                            <Check className="w-3.5 h-3.5" strokeWidth={3} />
                          ) : (
                            <span
                              className={cn(
                                "font-mono text-[10px]",
                                isActive
                                  ? "text-primary-foreground/80"
                                  : "text-muted-foreground/70",
                              )}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          )}
                        </span>
                        <span className="text-base shrink-0" aria-hidden="true">
                          {module.icon}
                        </span>
                        <span className="flex-1 leading-tight truncate">{module.title}</span>
                        <span
                          className={cn(
                            "font-mono text-[9px] shrink-0 opacity-70",
                            isActive ? "text-primary-foreground" : "text-muted-foreground",
                          )}
                        >
                          {badge}
                        </span>
                        {isActive && <ChevronRight className="w-3 h-3 shrink-0" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-border mt-4">
          <p className="text-xs text-muted-foreground text-center">Curso de Debian GNU/Linux</p>
          <p className="text-xs text-muted-foreground text-center mt-0.5">
            {totalForProgress} módulos • Português
          </p>
        </div>
      </aside>
    </>
  );
}
