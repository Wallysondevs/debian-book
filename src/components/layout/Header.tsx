import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

interface HeaderProps {
  onMenuClick: () => void;
  onHome?: () => void;
}

export function Header({ onMenuClick, onHome }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 w-full glass-panel border-b border-border px-4 sm:px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Abrir menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <button
          onClick={onHome}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground w-72 hover:border-primary/40 hover:text-foreground transition-colors"
        >
          <span className="text-primary font-mono font-bold">$</span>
          <span className="font-mono">cd ~/curso-debian</span>
        </button>
      </div>

      <div className="flex items-center gap-2">
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
