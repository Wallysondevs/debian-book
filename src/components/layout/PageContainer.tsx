import { ReactNode, useEffect, useState } from "react";
import { Link } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { DifficultyBadge } from "../ui/DifficultyBadge";
import { motion } from "framer-motion";
import { Clock4, Terminal, CheckCircle2, Circle, ArrowLeft, ArrowRight } from "lucide-react";
import { lessonAt, TOTAL_LESSONS, useProgress } from "@/lib/course";

interface PageContainerProps {
  title: string;
  subtitle?: string;
  difficulty?: "iniciante" | "intermediario" | "avancado";
  timeToRead?: string;
  prompt?: string;
  children: ReactNode;
}

export function PageContainer({
  title,
  subtitle,
  difficulty,
  timeToRead,
  prompt,
  children,
}: PageContainerProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [location] = useHashLocation();
  const { has, toggle } = useProgress();
  const nav = lessonAt(location);
  const done = nav ? has(nav.current.path) : false;

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pb-24 overflow-hidden">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[3px] z-50 transition-[width] duration-100 ease-out"
        style={{
          width: `${scrollProgress * 100}%`,
          background: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--debian-amber)) 100%)",
          boxShadow: "0 0 12px hsl(var(--primary) / 0.6)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Breadcrumb */}
        <div
          className="rounded-lg border border-white/5 mb-6 px-4 py-2 font-mono text-xs flex items-center gap-2 overflow-hidden"
          style={{ background: "hsl(var(--debian-bg-2))" }}
        >
          <Terminal className="w-3.5 h-3.5 text-[hsl(var(--debian-red))]/80 shrink-0" />
          <span className="text-[hsl(var(--debian-red))] hidden sm:inline">~</span>
          <span className="text-[hsl(var(--debian-dim))] hidden sm:inline">/</span>
          <span className="text-[hsl(var(--debian-blue))] truncate">{prompt ?? nav?.current.module ?? "debian"}</span>
          {nav && (
            <span className="text-[hsl(var(--debian-dim))] shrink-0">— {nav.position}/{TOTAL_LESSONS}</span>
          )}
          <span className="text-[hsl(var(--debian-amber))] ml-auto shrink-0">●</span>
        </div>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {difficulty && <DifficultyBadge level={difficulty} />}
            {timeToRead && (
              <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border bg-card">
                <Clock4 className="w-3 h-3" />
                {timeToRead} de leitura
              </span>
            )}
            {done && (
              <span className="text-xs font-medium flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[hsl(var(--debian-green))]/30 text-[hsl(var(--debian-green))] bg-[hsl(var(--debian-green))]/10">
                <CheckCircle2 className="w-3 h-3" /> concluída
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-4 leading-tight break-words">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>

        <div className="max-w-none">{children}</div>

        {/* Footer */}
        {nav && (
          <div className="mt-16 pt-8 border-t border-border">
            <button
              onClick={() => toggle(nav.current.path)}
              className={`w-full mb-6 flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-mono font-semibold text-sm transition-all border ${
                done
                  ? "bg-[hsl(var(--debian-green))]/10 text-[hsl(var(--debian-green))] border-[hsl(var(--debian-green))]/30"
                  : "bg-primary text-primary-foreground border-primary hover:opacity-90"
              }`}
            >
              {done ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
              {done ? "Tópico concluído — clique para desmarcar" : "Marcar tópico como concluído"}
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nav.prev ? (
                <Link href={nav.prev.path}>
                  <a className="group flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors">
                    <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
                    <span className="min-w-0">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Anterior</span>
                      <span className="block text-sm font-semibold truncate">{nav.prev.label}</span>
                    </span>
                  </a>
                </Link>
              ) : <div className="hidden sm:block" />}

              {nav.next ? (
                <Link href={nav.next.path}>
                  <a className="group flex items-center justify-end gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors text-right">
                    <span className="min-w-0">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Próximo</span>
                      <span className="block text-sm font-semibold truncate">{nav.next.label}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
                  </a>
                </Link>
              ) : (
                <Link href="/">
                  <a className="group flex items-center justify-end gap-3 p-4 rounded-lg bg-primary/10 border border-primary/30 transition-colors text-right">
                    <span>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Fim</span>
                      <span className="block text-sm font-semibold text-primary">Voltar ao início</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  </a>
                </Link>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
