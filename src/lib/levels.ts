import type { Module, ModuleLevel } from "@/types/module";

/** Heurística de nível por id/categoria quando o módulo ainda não declara `level`. */
const BY_ID: Record<string, ModuleLevel> = {
  // fundamentos
  "linux-gnu": "iniciante",
  "projeto-debian": "iniciante",
  "repositorios-debian": "iniciante",
  "ciclo-release": "intermediario",
  "upgrade-release": "avancado",
  // instalação
  instalacao: "iniciante",
  "pos-instalacao": "iniciante",
  "ambiente-grafico": "iniciante",
  // terminal
  "terminal-basico": "iniciante",
  navegacao: "iniciante",
  arquivos: "iniciante",
  "editor-texto": "iniciante",
  "visualizar-buscar": "iniciante",
  // permissões
  permissoes: "intermediario",
  usuarios: "intermediario",
  sudo: "intermediario",
  // pacotes
  apt: "iniciante",
  dpkg: "intermediario",
  "sources-list": "intermediario",
  "backports-flatpak": "intermediario",
  "deb822-sources": "intermediario",
  "unattended-upgrades": "intermediario",
  "empacotar-deb": "avancado",
  "apt-pinning-avancado": "avancado",
  // sistema
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
  // rede/segurança
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
  // shell
  "pipes-redirecionamento": "iniciante",
  "shell-scripting": "intermediario",
  "atalhos-produtividade": "iniciante",
  "man-info": "iniciante",
  tmux: "intermediario",
  "git-admin": "intermediario",
  "python-venv": "intermediario",
  "cli-moderna": "iniciante",
  // discos
  "discos-particoes": "intermediario",
  backup: "intermediario",
  "lvm-basico": "avancado",
  "btrfs-debian": "avancado",
  "mdadm-raid": "avancado",
  "fstab-uuid": "intermediario",
  "luks-disco": "avancado",
  // servidores
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
  // glossário
  glossario: "iniciante",
};

const READ_DEFAULT: Record<ModuleLevel, number> = {
  iniciante: 12,
  intermediario: 16,
  avancado: 20,
};

export function resolveLevel(m: Pick<Module, "id" | "level" | "category">): ModuleLevel {
  if (m.level) return m.level;
  if (BY_ID[m.id]) return BY_ID[m.id];
  const cat = m.category.toLowerCase();
  if (cat.includes("fundament") || cat.includes("terminal") || cat.includes("shell")) {
    return "iniciante";
  }
  if (cat.includes("servidor") || cat.includes("segurança") || cat.includes("seguranca")) {
    return "avancado";
  }
  return "intermediario";
}

export function resolveReadMinutes(m: Module): number {
  if (typeof m.readMinutes === "number" && m.readMinutes > 0) return m.readMinutes;
  const level = resolveLevel(m);
  const base = READ_DEFAULT[level];
  const extra = Math.min(10, Math.floor((m.commands?.length ?? 0) / 4));
  return base + extra;
}

export function withResolvedMeta(modules: Module[]): Module[] {
  return modules.map((m) => ({
    ...m,
    level: resolveLevel(m),
    readMinutes: resolveReadMinutes(m),
  }));
}

export function countByLevel(modules: Module[]): Record<ModuleLevel | "todos", number> {
  const out: Record<ModuleLevel | "todos", number> = {
    todos: modules.length,
    iniciante: 0,
    intermediario: 0,
    avancado: 0,
  };
  for (const m of modules) {
    out[resolveLevel(m)] += 1;
  }
  return out;
}

export type LevelFilter = "todos" | ModuleLevel;

export const LEVEL_STORAGE_KEY = "debian-book:level-filter";
