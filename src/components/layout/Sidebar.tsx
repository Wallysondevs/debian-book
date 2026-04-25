import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { Module } from "@/types/module";
import { X, ChevronRight, BookOpen } from "lucide-react";

interface SidebarProps {
  modules: Module[];
  activeId: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ modules, activeId, onSelect, isOpen, onClose }: SidebarProps) {
  const grouped = useMemo(() => {
    const map = new Map<string, { module: Module; index: number }[]>();
    modules.forEach((m, index) => {
      if (!map.has(m.category)) map.set(m.category, []);
      map.get(m.category)!.push({ module: m, index });
    });
    return Array.from(map.entries());
  }, [modules]);

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
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-md">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-sm leading-tight">Debian</h1>
              <p className="text-xs text-muted-foreground">Guia Completo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded hover:bg-accent/20"
            aria-label="Fechar menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="p-3 space-y-4">
          {grouped.map(([category, items]) => (
            <div key={category}>
              <h2 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-1.5">
                {category}
              </h2>
              <ul className="space-y-0.5">
                {items.map(({ module, index }) => {
                  const isActive = module.id === activeId;
                  return (
                    <li key={module.id}>
                      <button
                        type="button"
                        onClick={() => onSelect(module.id)}
                        className={cn(
                          "w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors text-left",
                          isActive
                            ? "bg-primary text-primary-foreground font-medium shadow-sm"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                        )}
                      >
                        <span
                          className={cn(
                            "font-mono text-[10px] w-5 shrink-0",
                            isActive ? "text-primary-foreground/80" : "text-muted-foreground/70"
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base shrink-0" aria-hidden="true">
                          {module.icon}
                        </span>
                        <span className="flex-1 leading-tight truncate">{module.title}</span>
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
          <p className="text-xs text-muted-foreground text-center">
            Guia Completo de Debian GNU/Linux
          </p>
          <p className="text-xs text-muted-foreground text-center mt-0.5">
            {modules.length} módulos • Português
          </p>
        </div>
      </aside>
    </>
  );
}
