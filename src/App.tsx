import { useState, useEffect, lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import Home from "@/pages/Home";
import ModulePage from "@/pages/ModulePage";
import NotFound from "@/pages/NotFound";
import { modules } from "@/data/modules";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [location] = useHashLocation();
  useEffect(() => {
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 lg:pl-72 flex flex-col min-w-0 transition-all duration-300">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

function CarregandoTopico() {
  return (
    <div className="flex items-center justify-center py-24 px-6">
      <div className="font-mono text-sm text-[hsl(var(--debian-dim))]">
        <span className="text-[hsl(var(--debian-red))]">●</span> carregando tópico
        <span className="debian-cursor">_</span>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Suspense fallback={<CarregandoTopico />}>
        <Switch>
          <Route path="/" component={Home} />
          {modules.map((m) => (
            <Route key={m.id} path={`/modulo/${m.id}`}>
              {() => <ModulePage moduleId={m.id} />}
            </Route>
          ))}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter hook={useHashLocation}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
