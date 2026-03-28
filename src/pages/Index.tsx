import { useState, useEffect } from "react";
  import SidebarNav from "@/components/SidebarNav";
  import ModuleContent from "@/components/ModuleContent";
  import { modules } from "@/data/modules";
  import { Menu } from "lucide-react";

  const Index = () => {
    const [activeModule, setActiveModule] = useState(modules[0].id);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
      if (sidebarOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => { document.body.style.overflow = ""; };
    }, [sidebarOpen]);

    const currentModuleIndex = modules.findIndex((m) => m.id === activeModule);
    const currentModule = modules[currentModuleIndex];

    const handleNavigate = (direction: "prev" | "next") => {
      const newIndex = direction === "prev" ? currentModuleIndex - 1 : currentModuleIndex + 1;
      if (newIndex >= 0 && newIndex < modules.length) {
        setActiveModule(modules[newIndex].id);
        window.scrollTo(0, 0);
      }
    };

    const handleSelectModule = (id: string) => {
      setActiveModule(id);
      setSidebarOpen(false);
      window.scrollTo(0, 0);
    };

    return (
      <div className="relative flex min-h-dvh bg-background">
        {!sidebarOpen && (
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menu"
            className="fixed z-50 lg:hidden w-10 h-10 rounded-lg bg-card/95 border border-border shadow-md backdrop-blur-sm flex items-center justify-center text-foreground top-[max(1rem,env(safe-area-inset-top))] left-4"
          >
            <Menu size={20} />
          </button>
        )}

        <div className={`fixed inset-y-0 left-0 z-40 transition-transform duration-200 lg:sticky lg:top-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}>
          <SidebarNav
            modules={modules}
            activeModule={activeModule}
            onSelectModule={handleSelectModule}
            onClose={() => setSidebarOpen(false)}
          />
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-[1px] z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        <ModuleContent
          module={currentModule}
          moduleIndex={currentModuleIndex}
          totalModules={modules.length}
          onNavigate={handleNavigate}
        />
      </div>
    );
  };

  export default Index;
  