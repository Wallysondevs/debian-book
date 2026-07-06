import { useState, useEffect } from "react";
import { Sidebar, HOME_ID } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import ModuleContent from "@/components/ModuleContent";
import Home from "@/components/Home";
import { modules } from "@/data/modules";

const Index = () => {
  const [activeModule, setActiveModule] = useState<string>(HOME_ID);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const isHome = activeModule === HOME_ID;
  const currentModuleIndex = modules.findIndex((m) => m.id === activeModule);
  const currentModule = modules[currentModuleIndex] ?? modules[0];

  const goTo = (id: string) => {
    setActiveModule(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" ? currentModuleIndex - 1 : currentModuleIndex + 1;
    if (newIndex >= 0 && newIndex < modules.length) {
      goTo(modules[newIndex].id);
    } else if (direction === "prev" && currentModuleIndex === 0) {
      goTo(HOME_ID);
    }
  };

  return (
    <div className="min-h-dvh bg-background">
      <Sidebar
        modules={modules}
        activeId={activeModule}
        onSelect={goTo}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:pl-72">
        <Header onMenuClick={() => setSidebarOpen(true)} onHome={() => goTo(HOME_ID)} />
        {isHome ? (
          <Home modules={modules} onSelect={goTo} />
        ) : (
          <ModuleContent
            module={currentModule}
            moduleIndex={currentModuleIndex}
            totalModules={modules.length}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
