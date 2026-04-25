import { cn } from "@/lib/utils";

type Level = "iniciante" | "intermediario" | "avancado";

export function DifficultyBadge({ level }: { level: Level }) {
  const styles = {
    iniciante: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    intermediario: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
    avancado: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  };

  const labels = {
    iniciante: "Iniciante",
    intermediario: "Intermediário",
    avancado: "Avançado",
  };

  return (
    <span className={cn("px-3 py-1 text-xs font-semibold rounded-full border", styles[level])}>
      {labels[level]}
    </span>
  );
}
