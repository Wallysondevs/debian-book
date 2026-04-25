import { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import ModuleContent from "@/components/ModuleContent";
import { modules } from "@/data/modules";

const Index = () => {
  const [activeModule, setActiveModule] = useState(modules[0].id);
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

  const currentModuleIndex = modules.findIndex((m) => m.id === activeModule);
  const currentModule = modules[currentModuleIndex] ?? modules[0];

  const handleNavigate = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" ? currentModuleIndex - 1 : currentModuleIndex + 1;
    if (newIndex >= 0 && newIndex < modules.length) {
      setActiveModule(modules[newIndex].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSelectModule = (id: string) => {
    setActiveModule(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-dvh bg-background">
      <Sidebar
        modules={modules}
        activeId={activeModule}
        onSelect={handleSelectModule}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:pl-72">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <ModuleContent
          module={currentModule}
          moduleIndex={currentModuleIndex}
          totalModules={modules.length}
          onNavigate={handleNavigate}
        />
      </div>
    </div>
  );
};

export default Index;
