import { Module } from "@/types/module";
  import { useMemo } from "react";
  import { X } from "lucide-react";

  interface SidebarNavProps {
    modules: Module[];
    activeModule: string;
    onSelectModule: (id: string) => void;
    onClose?: () => void;
  }

  const SidebarNav = ({ modules, activeModule, onSelectModule, onClose }: SidebarNavProps) => {
    const grouped = useMemo(() => {
      const map = new Map<string, { module: Module; globalIndex: number }[]>();
      modules.forEach((module, index) => {
        const list = map.get(module.category) || [];
        list.push({ module, globalIndex: index });
        map.set(module.category, list);
      });
      return Array.from(map.entries());
    }, [modules]);

    return (
      <aside className="w-[84vw] max-w-72 h-dvh bg-sidebar border-r border-sidebar-border flex flex-col shrink-0 overflow-hidden">
        <div className="p-4 lg:p-5 border-b border-sidebar-border pt-[max(1rem,env(safe-area-inset-top))]">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                D
              </div>
              <div>
                <h1 className="text-sm font-bold text-sidebar-accent-foreground tracking-tight">Debian</h1>
                <p className="text-xs text-sidebar-foreground">Guia Completo</p>
              </div>
            </div>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="lg:hidden w-8 h-8 rounded-md border border-sidebar-border text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent transition-colors flex items-center justify-center"
                aria-label="Fechar menu"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <nav className="flex-1 py-3 overflow-y-auto scrollbar-thin" onWheel={(e) => e.stopPropagation()}>
          {grouped.map(([category, items]) => (
            <div key={category} className="mb-2">
              <div className="px-4 py-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {category}
                </span>
              </div>
              {items.map(({ module, globalIndex }) => (
                <button
                  key={module.id}
                  onClick={() => onSelectModule(module.id)}
                  className={`w-full text-left px-4 py-2 flex items-center gap-3 text-[13px] transition-all duration-150 border-l-[3px] ${
                    activeModule === module.id
                      ? "border-l-primary bg-primary/10 text-primary font-medium"
                      : "border-l-transparent text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <span className="text-sm">{module.icon}</span>
                  <span className="flex items-center gap-2 leading-tight">
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {String(globalIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="line-clamp-1">{module.title}</span>
                  </span>
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="text-[10px] text-muted-foreground text-center">
            Debian — Guia Completo v1.0
          </div>
        </div>
      </aside>
    );
  };

  export default SidebarNav;
  