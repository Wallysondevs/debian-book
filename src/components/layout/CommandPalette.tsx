import { useEffect, useMemo, useState } from "react";
import { Check, CornerDownLeft, Hash, Home } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import type { Module } from "@/types/module";
import { useProgress } from "@/hooks/useProgress";
import { HOME_ID } from "@/components/layout/Sidebar";
import { resolveLevel } from "@/lib/levels";

export const EVENTO_ABRIR_BUSCA = "debian:abrir-busca";

function semAcento(s: string) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

interface CommandPaletteProps {
  modules: Module[];
  onSelect: (id: string) => void;
}

export function CommandPalette({ modules, onSelect }: CommandPaletteProps) {
  const [aberto, setAberto] = useState(false);
  const { completed } = useProgress();

  useEffect(() => {
    function aoTeclar(e: KeyboardEvent) {
      const alvo = e.target as HTMLElement | null;
      const digitando =
        !!alvo &&
        (alvo.tagName === "INPUT" ||
          alvo.tagName === "TEXTAREA" ||
          alvo.isContentEditable);

      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setAberto((v) => !v);
        return;
      }
      if (e.key === "/" && !digitando && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setAberto(true);
      }
    }

    function aoPedirAbertura() {
      setAberto(true);
    }

    window.addEventListener("keydown", aoTeclar);
    window.addEventListener(EVENTO_ABRIR_BUSCA, aoPedirAbertura);
    return () => {
      window.removeEventListener("keydown", aoTeclar);
      window.removeEventListener(EVENTO_ABRIR_BUSCA, aoPedirAbertura);
    };
  }, []);

  const grupos = useMemo(() => {
    const mapa = new Map<string, Module[]>();
    for (const m of modules) {
      const atual = mapa.get(m.category);
      if (atual) atual.push(m);
      else mapa.set(m.category, [m]);
    }
    return Array.from(mapa.entries());
  }, [modules]);

  function ir(id: string) {
    setAberto(false);
    onSelect(id);
  }

  return (
    <CommandDialog open={aberto} onOpenChange={setAberto}>
      <CommandInput placeholder={`Buscar entre ${modules.length} capítulos...`} />
      <CommandList className="max-h-[65vh]">
        <CommandEmpty>
          <span className="text-sm text-muted-foreground">Nenhum capítulo encontrado.</span>
        </CommandEmpty>

        <CommandGroup heading="Navegação">
          <CommandItem
            value={`inicio home ${semAcento("início")}`}
            onSelect={() => ir(HOME_ID)}
            className="gap-2 text-[13px]"
          >
            <Home className="w-3.5 h-3.5 shrink-0 text-muted-foreground" />
            <span className="flex-1 truncate">Início</span>
          </CommandItem>
        </CommandGroup>

        {grupos.map(([categoria, itens], gIdx) => (
          <CommandGroup
            key={categoria}
            heading={`${String(gIdx + 1).padStart(2, "0")} · ${categoria}`}
          >
            {itens.map((m) => {
              const feito = completed.has(m.id);
              const nivel = resolveLevel(m);
              return (
                <CommandItem
                  key={m.id}
                  value={`${m.title} ${m.category} ${m.id} ${m.description} ${semAcento(
                    m.title,
                  )} ${semAcento(m.category)} ${nivel}`}
                  onSelect={() => ir(m.id)}
                  className="gap-2 text-[13px]"
                >
                  {feito ? (
                    <Check className="w-3.5 h-3.5 shrink-0 text-green-500" />
                  ) : (
                    <Hash className="w-3.5 h-3.5 shrink-0 text-muted-foreground" />
                  )}
                  <span className="shrink-0" aria-hidden>
                    {m.icon}
                  </span>
                  <span className="flex-1 truncate">{m.title}</span>
                  <span className="font-mono text-[10px] text-muted-foreground shrink-0 uppercase">
                    {nivel === "iniciante" ? "I" : nivel === "intermediario" ? "M" : "A"}
                  </span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        ))}
      </CommandList>

      <div className="flex items-center justify-between gap-3 border-t border-border px-3 py-2 font-mono text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <CornerDownLeft className="w-3 h-3" /> abrir
        </span>
        <span>↑ ↓ navegar</span>
        <span>esc fechar</span>
      </div>
    </CommandDialog>
  );
}
