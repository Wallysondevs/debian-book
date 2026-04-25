import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DifficultyBadge } from "../ui/DifficultyBadge";

interface PageContainerProps {
  title: string;
  subtitle?: string;
  difficulty?: "iniciante" | "intermediario" | "avancado";
  timeToRead?: string;
  category?: string;
  index?: number;
  total?: number;
  children: ReactNode;
}

export function PageContainer({
  title,
  subtitle,
  difficulty,
  timeToRead,
  category,
  index,
  total,
  children,
}: PageContainerProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pb-24">
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <motion.div
        key={title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <header className="mb-10">
          {(category || (index !== undefined && total)) && (
            <div className="flex flex-wrap items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {category && <span>{category}</span>}
              {category && index !== undefined && total && <span>•</span>}
              {index !== undefined && total && (
                <span>
                  Módulo {String(index + 1).padStart(2, "0")} / {total}
                </span>
              )}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {difficulty && <DifficultyBadge level={difficulty} />}
            {timeToRead && (
              <span className="text-sm text-muted-foreground font-medium flex items-center gap-1.5">
                ⏱ {timeToRead} de leitura
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{subtitle}</p>
          )}
        </header>

        <div className="prose-debian">{children}</div>
      </motion.div>
    </div>
  );
}
