import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Sidebar, HOME_ID } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { modules } from "@/data/modules";
import {
  LEVEL_STORAGE_KEY,
  type LevelFilter,
  resolveLevel,
} from "@/lib/levels";

const Home = lazy(() => import("@/components/Home").then((m) => ({ default: m.Home })));
const ModuleContent = lazy(() => import("@/components/ModuleContent"));

function loadLevelFilter(): LevelFilter {
  try {
    const v = localStorage.getItem(LEVEL_STORAGE_KEY);
    if (v === "iniciante" || v === "intermediario" || v === "avancado" || v === "todos") {
      return v;
    }
  } catch {
    /* ignore */
  }
  return "todos";
}

const Index = () => {
  const [activeModule, setActiveModule] = useState<string>(HOME_ID);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [levelFilter, setLevelFilter] = useState<LevelFilter>(loadLevelFilter);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    try {
      localStorage.setItem(LEVEL_STORAGE_KEY, levelFilter);
    } catch {
      /* ignore */
    }
  }, [levelFilter]);

  const visibleModules = useMemo(() => {
    if (levelFilter === "todos") return modules;
    return modules.filter((m) => resolveLevel(m) === levelFilter);
  }, [levelFilter]);

  const isHome = activeModule === HOME_ID;
  const absoluteIndex = modules.findIndex((m) => m.id === activeModule);
  const currentModule =
    absoluteIndex >= 0 ? modules[absoluteIndex] : modules[0];

  const goTo = (id: string) => {
    setActiveModule(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (direction: "prev" | "next") => {
    // navega na trilha completa (não só no filtro), para não prender o leitor
    const idx = modules.findIndex((m) => m.id === activeModule);
    const newIndex = direction === "prev" ? idx - 1 : idx + 1;
    if (newIndex >= 0 && newIndex < modules.length) {
      goTo(modules[newIndex].id);
    } else if (direction === "prev" && idx === 0) {
      goTo(HOME_ID);
    }
  };

  return (
    <div className="min-h-dvh bg-background">
      <CommandPalette modules={modules} onSelect={goTo} />
      <Sidebar
        modules={visibleModules}
        allModulesCount={modules.length}
        allModules={modules}
        activeId={activeModule}
        onSelect={goTo}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        levelFilter={levelFilter}
        onLevelFilterChange={setLevelFilter}
      />

      <div className="lg:pl-72">
        <Header onMenuClick={() => setSidebarOpen(true)} onHome={() => goTo(HOME_ID)} />
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[50vh] text-muted-foreground text-sm font-mono">
              ● carregando…
            </div>
          }
        >
          {isHome ? (
            <Home modules={modules} onSelect={goTo} />
          ) : (
            <ModuleContent
              module={currentModule}
              moduleIndex={absoluteIndex >= 0 ? absoluteIndex : 0}
              totalModules={modules.length}
              onNavigate={handleNavigate}
            />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
