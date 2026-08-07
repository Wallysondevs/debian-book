import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { cn } from "@/lib/utils";
import {
  BookOpen, Terminal, Shield, Settings, FileText, Users,
  Network, X, Package, Code, FolderOpen, Key,
  Globe, ChevronRight, ChevronDown, Search, Layers,
  Lock, HardDrive, Zap, Bug, Eye, Radio, Database,
  Server, AlertTriangle, FileSearch, Cpu,
  Activity, MonitorSmartphone, Container, BookMarked,
  GitBranch, Cloud, Hash, FileCode, Dot, Check,
  Wrench, Disc, CpuIcon,
} from "lucide-react";
import { DebianLogo } from "@/components/ui/DebianLogo";
import { CommandPalette, EVENTO_ABRIR_BUSCA } from "@/components/layout/CommandPalette";
import { LEVELS, LEVEL_COUNTS, LEVEL_LABEL, LEVEL_SHORT, LEVEL_COLOR, type Nivel } from "@/lib/levels";
import { useProgress, TOTAL_LESSONS, COURSE } from "@/lib/course";
import { modules } from "@/data/modules";

// Build navigation from modules grouped by category
function buildNav() {
  const grouped = new Map<string, { path: string; label: string; icon: typeof BookOpen }[]>();
  
  modules.forEach((m) => {
    const cat = m.category;
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat)!.push({
      path: `/modulo/${m.id}`,
      label: m.title,
      icon: BookOpen,
    });
  });

  return [
    {
      title: "Início",
      items: [{ path: "/", label: "Home", icon: BookOpen }],
    },
    ...Array.from(grouped.entries()).map(([title, items]) => ({
      title,
      items,
    })),
  ];
}

const NAVIGATION = buildNav();

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CHAVE_SECOES = "debian-sidebar-secoes";
const CHAVE_NIVEL = "debian-sidebar-nivel";
type Filtro = Nivel | "todos";
const FILTROS: Filtro[] = ["todos", "iniciante", "intermediario", "avancado"];
const ABERTAS_PADRAO = ["Início", "Fundamentos Teóricos"];

function lerSecoesAbertas(): string[] {
  try {
    const raw = localStorage.getItem(CHAVE_SECOES);
    if (!raw) return ABERTAS_PADRAO;
    const valor = JSON.parse(raw);
    return Array.isArray(valor) ? valor : ABERTAS_PADRAO;
  } catch { return ABERTAS_PADRAO; }
}

function lerNivel(): Filtro {
  try {
    const raw = localStorage.getItem(CHAVE_NIVEL) as Filtro | null;
    return raw && FILTROS.includes(raw) ? raw : "todos";
  } catch { return "todos"; }
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [location] = useHashLocation();
  const { has, count, percent } = useProgress();
  const [abertas, setAbertas] = useState<string[]>(lerSecoesAbertas);
  const [nivel, setNivel] = useState<Filtro>(lerNivel);

  useEffect(() => {
    try { localStorage.setItem(CHAVE_NIVEL, nivel); } catch {}
  }, [nivel]);

  useEffect(() => {
    try { localStorage.setItem(CHAVE_SECOES, JSON.stringify(abertas)); } catch {}
  }, [abertas]);

  useEffect(() => {
    const secao = NAVIGATION.find((s) => s.items.some((i) => i.path === location));
    if (!secao) return;
    setAbertas((a) => (a.includes(secao.title) ? a : [...a, secao.title]));
  }, [location]);

  const todasAbertas = abertas.length >= NAVIGATION.length;

  function alternarSecao(titulo: string) {
    setAbertas((a) => a.includes(titulo) ? a.filter((t) => t !== titulo) : [...a, titulo]);
  }

  function alternarTudo() {
    setAbertas(todasAbertas ? [] : NAVIGATION.map((s) => s.title));
  }

  function abrirBusca() {
    window.dispatchEvent(new Event(EVENTO_ABRIR_BUSCA));
  }

  return (
    <>
      <CommandPalette />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-72 z-50 overflow-y-auto debian-scroll transition-transform duration-300 border-r border-[hsl(var(--debian-red))]/15",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
        style={{ background: "hsl(var(--debian-bg))" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b border-white/5 sticky top-0 z-10"
          style={{ background: "hsl(var(--debian-bg-2))" }}
        >
          <Link href="/">
            <a className="flex items-center gap-2.5 min-w-0 group">
              <DebianLogo size={30} className="shrink-0 text-[hsl(var(--debian-red))] group-hover:scale-105 transition-transform" />
              <div className="min-w-0">
                <h1 className="font-mono font-bold text-sm leading-tight text-[hsl(var(--debian-red))]">
                  debian@trixie
                </h1>
                <p className="text-[10px] text-[hsl(var(--debian-dim))] font-mono leading-tight">
                  /usr/share/debian-book
                </p>
              </div>
            </a>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1 rounded text-gray-400 hover:text-white hover:bg-white/10"
            aria-label="Fechar menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Busca */}
        <div className="px-3 py-2.5 border-b border-white/5" style={{ background: "hsl(var(--debian-bg))" }}>
          <button
            onClick={abrirBusca}
            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md font-mono text-[12px] text-[hsl(var(--debian-dim))] border border-white/10 hover:border-[hsl(var(--debian-red))]/40 hover:text-[hsl(var(--debian-red))] transition-colors"
            style={{ background: "hsl(var(--debian-bg-2))" }}
          >
            <Search className="w-3.5 h-3.5 shrink-0" />
            <span className="flex-1 text-left">Buscar tópico...</span>
            <kbd className="px-1.5 py-0.5 rounded border border-white/10 text-[10px] bg-black/30">
              Ctrl K
            </kbd>
          </button>
        </div>

        {/* Mini prompt */}
        <div
          className="px-4 py-2 border-b border-white/5 font-mono text-[11px]"
          style={{ background: "hsl(var(--debian-bg))" }}
        >
          <span className="text-[hsl(var(--debian-red))]">┌──(</span>
          <span className="text-[hsl(var(--debian-red))]">root</span>
          <span className="text-[hsl(var(--debian-amber))]">@</span>
          <span className="text-[hsl(var(--debian-red))]">debian</span>
          <span className="text-[hsl(var(--debian-red))]">)</span>
          <br />
          <span className="text-[hsl(var(--debian-red))]">└─</span>
          <span className="text-[hsl(var(--debian-amber))]">#</span>{" "}
          <span className="text-[hsl(var(--debian-fg))]">ls</span>{" "}
          <span className="text-[hsl(var(--debian-blue))]">/modulos</span>
        </div>

        {/* Progresso */}
        <div
          className="px-4 py-2.5 border-b border-white/5 font-mono"
          style={{ background: "hsl(var(--debian-bg))" }}
        >
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="text-[hsl(var(--debian-dim))]">
              <span className="text-[hsl(var(--debian-green))]">▓</span> progresso
            </span>
            <span className="text-[hsl(var(--debian-red))] font-bold">{percent}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "hsl(var(--debian-bg-2))" }}>
            <div
              className="h-full transition-[width] duration-500"
              style={{ width: `${percent}%`, background: "linear-gradient(90deg, hsl(var(--debian-red)), hsl(var(--debian-amber)))" }}
            />
          </div>
          <p className="text-[10px] text-[hsl(var(--debian-dim))] mt-1.5 m-0">
            {count}/{TOTAL_LESSONS} módulos concluídos
          </p>
        </div>

        {/* Filtro */}
        <div
          className="px-3 py-2 border-b border-white/5 flex items-center gap-1 font-mono text-[10px]"
          style={{ background: "hsl(var(--debian-bg))" }}
        >
          <span className="text-[hsl(var(--debian-dim))] mr-0.5">nível:</span>
          {FILTROS.map((f) => {
            const ativo = nivel === f;
            const total = f === "todos" ? TOTAL_LESSONS : LEVEL_COUNTS[f];
            const cor = f === "todos" ? "--debian-red" : LEVEL_COLOR[f];
            return (
              <button
                key={f}
                onClick={() => setNivel(f)}
                title={`${f === "todos" ? "Todos" : LEVEL_LABEL[f]} (${total})`}
                className={cn(
                  "px-1.5 py-0.5 rounded border transition-colors",
                  ativo
                    ? "border-transparent font-bold"
                    : "border-white/10 text-[hsl(var(--debian-dim))] hover:border-white/25"
                )}
                style={
                  ativo
                    ? { background: `hsl(var(${cor}) / 0.18)`, color: `hsl(var(${cor}))` }
                    : undefined
                }
              >
                {f === "todos" ? "todos" : LEVEL_SHORT[f]} {total}
              </button>
            );
          })}
        </div>

        {/* Controles */}
        <div className="flex items-center justify-between px-4 py-1.5 border-b border-white/5 font-mono text-[10px]">
          <span className="text-[hsl(var(--debian-dim))]">
            {NAVIGATION.length} seções · {abertas.length} aberta{abertas.length === 1 ? "" : "s"}
          </span>
          <button
            onClick={alternarTudo}
            className="text-[hsl(var(--debian-red))]/80 hover:text-[hsl(var(--debian-red))] transition-colors"
          >
            {todasAbertas ? "recolher tudo" : "expandir tudo"}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1 pb-8">
          {NAVIGATION.map((section, sIdx) => {
            const aberta = abertas.includes(section.title);
            const itens = nivel === "todos"
              ? section.items
              : section.items.filter((i) => i.path === "/" || LEVELS[i.path] === nivel);
            if (itens.length === 0) return null;
            const contaveis = itens.filter((i) => i.path !== "/");
            const feitas = contaveis.filter((i) => has(i.path)).length;
            const completa = contaveis.length > 0 && feitas === contaveis.length;
            const temAtivo = section.items.some((i) => i.path === location);

            return (
              <div key={section.title}>
                <button
                  onClick={() => alternarSecao(section.title)}
                  className={cn(
                    "w-full flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider transition-colors",
                    temAtivo
                      ? "text-[hsl(var(--debian-red))] bg-white/5"
                      : "text-[hsl(var(--debian-red))]/80 hover:bg-white/5"
                  )}
                  aria-expanded={aberta}
                >
                  <ChevronDown
                    className={cn(
                      "w-3 h-3 shrink-0 transition-transform duration-200",
                      aberta ? "rotate-0" : "-rotate-90"
                    )}
                  />
                  <span className="text-[hsl(var(--debian-amber))]">
                    [{String(sIdx + 1).padStart(2, "0")}]
                  </span>
                  <span className="flex-1 text-left truncate normal-case">
                    {section.title}
                  </span>
                  {contaveis.length > 0 && (
                    <span className={cn("shrink-0 tabular-nums", completa ? "text-[hsl(var(--debian-green))]" : "text-[hsl(var(--debian-dim))]")}>
                      {completa ? "✓ " : ""}{feitas}/{contaveis.length}
                    </span>
                  )}
                </button>

                {aberta && (
                  <ul className="space-y-0.5 mt-1 mb-2">
                    {itens.map((item) => {
                      const isActive = location === item.path;
                      const isDone = item.path !== "/" && has(item.path);
                      const Icon = item.icon;
                      return (
                        <li key={item.path}>
                          <Link href={item.path}>
                            <a
                              className={cn(
                                "flex items-center gap-2 px-2 py-1.5 rounded-md text-[13px] font-mono transition-colors",
                                isActive
                                  ? "bg-[hsl(var(--debian-red))]/15 text-[hsl(var(--debian-red))] font-semibold"
                                  : "text-[hsl(var(--debian-fg))]/75 hover:text-[hsl(var(--debian-red))] hover:bg-white/5"
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {isActive ? (
                                <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-[hsl(var(--debian-amber))]" />
                              ) : isDone ? (
                                <Check className="w-3.5 h-3.5 flex-shrink-0 text-[hsl(var(--debian-green))]" />
                              ) : (
                                <Dot className="w-3.5 h-3.5 flex-shrink-0 text-[hsl(var(--debian-dim))]" />
                              )}
                              <Icon className="w-3.5 h-3.5 flex-shrink-0 opacity-80" />
                              <span className="flex-1 leading-tight truncate">
                                {item.label}
                              </span>
                              {item.path !== "/" && LEVELS[item.path] && (
                                <span
                                  className="shrink-0 text-[9px] font-bold opacity-60"
                                  style={{ color: `hsl(var(${LEVEL_COLOR[LEVELS[item.path]]}))` }}
                                  title={LEVEL_LABEL[LEVELS[item.path]]}
                                >
                                  {LEVEL_SHORT[LEVELS[item.path]]}
                                </span>
                              )}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-white/5 font-mono text-[10px] sticky bottom-0" style={{ background: "hsl(var(--debian-bg-2))" }}>
          <p className="text-[hsl(var(--debian-dim))] m-0 leading-tight">
            <span className="text-[hsl(var(--debian-green))]">●</span> {TOTAL_LESSONS} módulos
          </p>
          <p className="text-[hsl(var(--debian-dim))] m-0 leading-tight">
            <span className="text-[hsl(var(--debian-red))]">$</span> Debian 13 (Trixie) · PT-BR
          </p>
        </div>
      </aside>
    </>
  );
}
