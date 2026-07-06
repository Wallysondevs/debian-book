import { useEffect, useRef, useState } from "react";

type Line =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string; tone?: "muted" | "ok" | "warn" };

/** Roteiro curto e realista: atualizar índices, instalar um pacote, checar serviço. */
const SCRIPT: Line[] = [
  { kind: "cmd", text: "sudo apt update" },
  { kind: "out", text: "Obter:1 http://deb.debian.org/debian trixie InRelease [151 kB]", tone: "muted" },
  { kind: "out", text: "Lendo listas de pacotes... Pronto", tone: "muted" },
  { kind: "out", text: "Todos os pacotes estão atualizados.", tone: "ok" },
  { kind: "cmd", text: "sudo apt install nginx -y" },
  { kind: "out", text: "Configurando nginx (1.26.x-1) ...", tone: "muted" },
  { kind: "out", text: "Processando gatilhos para systemd ...", tone: "muted" },
  { kind: "cmd", text: "systemctl is-active nginx" },
  { kind: "out", text: "active", tone: "ok" },
  { kind: "cmd", text: "cat /etc/debian_version" },
  { kind: "out", text: "13.0", tone: "warn" },
];

export function HomeTerminal() {
  const [visible, setVisible] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");
  const [step, setStep] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const line = SCRIPT[step % SCRIPT.length];

    if (step >= SCRIPT.length) {
      // reinicia o loop após uma pausa
      timer = setTimeout(() => {
        setVisible([]);
        setStep(0);
      }, 2600);
      return () => clearTimeout(timer);
    }

    if (line.kind === "cmd") {
      let i = 0;
      const type = () => {
        setTyping(line.text.slice(0, i));
        i++;
        if (i <= line.text.length) {
          timer = setTimeout(type, 34);
        } else {
          timer = setTimeout(() => {
            setVisible((v) => [...v, line]);
            setTyping("");
            setStep((s) => s + 1);
          }, 420);
        }
      };
      type();
    } else {
      timer = setTimeout(() => {
        setVisible((v) => [...v, line]);
        setStep((s) => s + 1);
      }, 260);
    }
    return () => clearTimeout(timer);
  }, [step]);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight });
  }, [visible, typing]);

  const toneClass = (tone?: string) =>
    tone === "ok"
      ? "text-emerald-400"
      : tone === "warn"
      ? "text-amber-400"
      : "text-muted-foreground";

  return (
    <div className="rounded-xl border border-border bg-terminal-bg shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-black/30">
        <span className="w-3 h-3 rounded-full bg-red-500/90" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/90" />
        <span className="w-3 h-3 rounded-full bg-green-500/90" />
        <span className="ml-2 text-xs text-white/50 font-mono">wallyson@debian: ~</span>
      </div>
      <div
        ref={boxRef}
        className="p-4 font-mono text-[13px] leading-relaxed h-64 overflow-hidden"
      >
        {visible.map((l, i) =>
          l.kind === "cmd" ? (
            <div key={i} className="flex gap-2">
              <span className="text-primary shrink-0">$</span>
              <span className="text-white/90 break-all">{l.text}</span>
            </div>
          ) : (
            <div key={i} className={`pl-4 ${toneClass(l.tone)} break-all`}>
              {l.text}
            </div>
          )
        )}
        {typing && (
          <div className="flex gap-2">
            <span className="text-primary shrink-0">$</span>
            <span className="text-white/90 term-cursor break-all">{typing}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeTerminal;
