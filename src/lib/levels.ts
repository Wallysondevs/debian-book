import type { Module, ModuleLevel } from "@/types/module";

export type Nivel = ModuleLevel;

/** Heurística de nível por id/categoria quando o módulo ainda não declara `level`. */
const BY_ID: Record<string, ModuleLevel> = {
  "linux-gnu": "iniciante",
  "projeto-debian": "iniciante",
  "repositorios-debian": "iniciante",
  "ciclo-release": "intermediario",
  "upgrade-release": "avancado",
  instalacao: "iniciante",
  "pos-instalacao": "iniciante",
  "ambiente-grafico": "iniciante",
  "terminal-basico": "iniciante",
  navegacao: "iniciante",
  arquivos: "iniciante",
  "editor-texto": "iniciante",
  "visualizar-buscar": "iniciante",
  permissoes: "intermediario",
  usuarios: "intermediario",
  sudo: "intermediario",
  apt: "iniciante",
  dpkg: "intermediario",
  "sources-list": "intermediario",
  "backports-flatpak": "intermediario",
  "deb822-sources": "intermediario",
  "unattended-upgrades": "intermediario",
  "empacotar-deb": "avancado",
  "apt-pinning-avancado": "avancado",
  processos: "iniciante",
  systemd: "intermediario",
  "logs-journalctl": "intermediario",
  "cron-timers": "intermediario",
  "memoria-proc-sys": "intermediario",
  "boot-grub": "avancado",
  "kernel-modulos": "avancado",
  "udev-regras": "intermediario",
  "tempo-ntp": "iniciante",
  "systemd-units": "avancado",
  "systemd-timers-sockets": "avancado",
  "systemd-targets": "avancado",
  "journald-campo": "intermediario",
  "runbook-lento": "intermediario",
  "runbook-boot": "avancado",
  "runbook-rede": "intermediario",
  "obs-leve": "intermediario",
  rede: "iniciante",
  "firewall-ufw": "intermediario",
  "ssh-conexao": "intermediario",
  hardening: "avancado",
  "stacks-rede": "intermediario",
  "dns-cliente": "intermediario",
  "rede-troubleshoot": "intermediario",
  "tls-certbot": "intermediario",
  "proxy-reverso": "intermediario",
  "apparmor-debian": "avancado",
  fail2ban: "intermediario",
  "pam-senhas": "avancado",
  "acl-capabilities": "avancado",
  "auditoria-leve": "intermediario",
  "pipes-redirecionamento": "iniciante",
  "shell-scripting": "intermediario",
  "atalhos-produtividade": "iniciante",
  "man-info": "iniciante",
  tmux: "intermediario",
  "git-admin": "intermediario",
  "python-venv": "intermediario",
  "cli-moderna": "iniciante",
  "discos-particoes": "intermediario",
  backup: "intermediario",
  "lvm-basico": "avancado",
  "btrfs-debian": "avancado",
  "mdadm-raid": "avancado",
  "fstab-uuid": "intermediario",
  "luks-disco": "avancado",
  "servidor-web": "intermediario",
  "servidor-banco-dados": "intermediario",
  "docker-debian": "intermediario",
  "ssh-server": "intermediario",
  "servidor-minimo-hardening": "avancado",
  "podman-debian": "intermediario",
  "compose-pratica": "intermediario",
  "ansible-minimo": "avancado",
  "cloud-init-vps": "avancado",
  "dns-server": "avancado",
  "email-relay": "avancado",
  "nfs-samba": "intermediario",
  wireguard: "avancado",
  "postgres-operacao": "avancado",
  "capstone-vps": "avancado",
  glossario: "iniciante",
};

const WORDS_PER_MINUTE = 180;
const MIN_PER_COMMAND = 0.4;
const MIN_PER_LAB = 3;
const MIN_PER_EXERCISE = 0.3;

function countWords(...texts: Array<string | undefined>): number {
  let total = 0;
  for (const text of texts) {
    if (!text) continue;
    total += text.trim().split(/\s+/).filter(Boolean).length;
  }
  return total;
}

export function resolveLevel(m: Pick<Module, "id" | "level" | "category">): ModuleLevel {
  if (m.level) return m.level;
  if (BY_ID[m.id]) return BY_ID[m.id];
  const cat = m.category.toLowerCase();
  if (cat.includes("fundament") || cat.includes("terminal") || cat.includes("shell")) return "iniciante";
  if (cat.includes("servidor") || cat.includes("segurança") || cat.includes("seguranca")) return "avancado";
  return "intermediario";
}

export function resolveReadMinutes(m: Module): number {
  if (typeof m.readMinutes === "number" && m.readMinutes > 0) return m.readMinutes;
  let words = countWords(...(m.content ?? []), ...(m.objectives ?? []));
  for (const tip of m.tips ?? []) words += countWords(tip.title, tip.content);
  for (const cmd of m.commands ?? []) words += countWords(cmd.description);
  for (const lab of m.practiceLabs ?? []) words += countWords(lab.title, lab.goal, ...(lab.steps ?? []));
  for (const ex of m.exercises ?? []) words += countWords(ex.question, ex.hint, ex.answer);
  const minutes = words / WORDS_PER_MINUTE + (m.commands?.length ?? 0) * MIN_PER_COMMAND + (m.practiceLabs?.length ?? 0) * MIN_PER_LAB + (m.exercises?.length ?? 0) * MIN_PER_EXERCISE;
  return Math.max(3, Math.round(minutes));
}

export function withResolvedMeta(modules: Module[]): Module[] {
  return modules.map((m) => ({ ...m, level: resolveLevel(m), readMinutes: resolveReadMinutes(m) }));
}

export function countByLevel(modules: Module[]): Record<ModuleLevel | "todos", number> {
  const out: Record<ModuleLevel | "todos", number> = { todos: modules.length, iniciante: 0, intermediario: 0, avancado: 0 };
  for (const m of modules) out[resolveLevel(m)] += 1;
  return out;
}

export const LEVEL_STORAGE_KEY = "debian-book:level-filter";

// Sidebar/course filtering helpers (built lazily, no circular imports)
export const LEVEL_LABEL: Record<Nivel, string> = {
  iniciante: "Iniciante",
  intermediario: "Intermediário",
  avancado: "Avançado",
};

export const LEVEL_SHORT: Record<Nivel, string> = {
  iniciante: "I",
  intermediario: "M",
  avancado: "A",
};

export const LEVEL_COLOR: Record<Nivel, string> = {
  iniciante: "--debian-green",
  intermediario: "--debian-amber",
  avancado: "--debian-red",
};

// LEVELS and LEVEL_COUNTS will be populated after modules load, without circular imports.
// The Sidebar and course.ts handle this internally.
export const LEVELS: Record<string, Nivel> = {};
export const LEVEL_COUNTS: Record<Nivel, number> = { iniciante: 0, intermediario: 0, avancado: 0 };
