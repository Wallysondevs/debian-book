import { Menu, Moon, Sun, Github } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 w-full glass-panel border-b border-border px-4 sm:px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4 min-w-0">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Abrir menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[hsl(var(--debian-bg-2))] border border-white/5 rounded-lg text-xs font-mono w-auto">
          <span className="text-[hsl(var(--debian-green))]">●</span>
          <span className="text-[hsl(var(--debian-red))]">root</span>
          <span className="text-[hsl(var(--debian-amber))]">@</span>
          <span className="text-[hsl(var(--debian-red))]">debian</span>
          <span className="text-[hsl(var(--debian-dim))]">:</span>
          <span className="text-[hsl(var(--debian-blue))]">~</span>
          <span className="text-[hsl(var(--debian-red))]">#</span>
          <span className="debian-cursor" />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <a
          href="https://github.com/Wallysondevs/debian-book"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors hidden sm:inline-flex"
          title="Repositório no GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          title="Alternar tema"
          aria-label="Alternar tema"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}
