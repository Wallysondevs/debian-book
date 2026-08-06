import { Module } from "@/types/module";

/** Glossário Debian — verbetes curtos com ponte para capítulos do curso. */
export const glossario: Module[] = [
  {
    id: "glossario",
    title: "Glossário Debian — termos que voltam o tempo todo",
    icon: "📚",
    category: "Referências",
    level: "iniciante",
    readMinutes: 18,
    description:
      "Definições curtas de pacotes, APT, systemd, rede e segurança — com links mentais para os capítulos do curso.",
    objectives: [
      "Reconhecer jargão de pacotes e repositórios",
      "Separar conceitos de systemd, rede e segurança",
      "Saber onde aprofundar cada termo no curso",
      "Buscar o glossário via Ctrl+K como âncora rápida",
    ],
    content: [
      "Este glossário não substitui os capítulos: é o bolso. Cada verbete é uma frase que você pode repetir em voz alta e um caminho de leitura. Use a busca (Ctrl+K) digitando o termo.",
      "**APT** — ferramenta de alto nível para instalar/atualizar pacotes a partir de repositórios. Veja os capítulos de pacotes (apt, sources-list, deb822-sources).",
      "**dpkg** — gerenciador de baixo nível que instala arquivos .deb locais; o APT orquestra o dpkg. Capítulo: dpkg.",
      "**suite / release** — nome da versão Debian (bookworm, trixie, sid). Capítulos: ciclo-release, upgrade-release.",
      "**DEB822** — formato moderno de sources em blocos (Types/URIs/Suites/Components/Signed-By). Capítulo: deb822-sources.",
      "**non-free-firmware** — componente APT para blobs de firmware (Wi-Fi/NIC) separado de non-free genérico. Capítulo: repositorios-debian.",
      "**pinning** — prioridade que decide de qual suíte o APT puxa um pacote. Capítulo: apt-pinning-avancado.",
      "**unattended-upgrades** — aplica atualizações de segurança automaticamente. Capítulo: unattended-upgrades.",
      "**systemd unit** — arquivo que descreve serviço, timer, socket ou target. Capítulos: systemd-units, systemd-timers-sockets.",
      "**journald** — log binário do systemd; consulta com journalctl. Capítulos: logs-journalctl, journald-campo.",
      "**initramfs** — sistema de arquivos inicial que prepara o root antes do boot completo. Capítulo: boot-grub.",
      "**LVM** — volumes lógicos sobre discos (PV/VG/LV). Capítulo: lvm-basico.",
      "**LUKS** — criptografia de bloco no Linux. Capítulo: luks-disco.",
      "**sshd_config** — configuração do servidor OpenSSH. Capítulos: ssh-server, ssh-conexao.",
      "**fail2ban** — ban temporário de IPs após falhas de auth nos logs. Capítulo: fail2ban.",
      "**AppArmor** — MAC por perfis de processo (enforce/complain). Capítulo: apparmor-debian.",
      "**UFW** — frontend simples de firewall no Debian/Ubuntu. Capítulo: firewall-ufw.",
      "**resolvectl** — cliente de DNS via systemd-resolved (quando ativo). Capítulo: dns-cliente.",
      "**WireGuard** — VPN moderna no kernel (UDP, chaves curtas). Capítulo: wireguard.",
      "**Podman** — runtime de containers compatível com OCI, frequentemente rootless. Capítulo: podman-debian.",
      "**Compose** — YAML que descreve vários serviços/containers juntos. Capítulo: compose-pratica.",
      "**cloud-init** — bootstrap da imagem cloud no first boot (users, chaves, pacotes). Capítulo: cloud-init-vps.",
      "**wtmpdb** — substituição moderna de parte do wtmp/last/lastb em releases novas. Capítulos: hardening, permissões.",
      "**3-2-1** — regra de backup: 3 cópias, 2 mídias, 1 offsite + restore testado. Capítulo: backup.",
      "**RPO/RTO** — quanto dado pode perder / quanto tempo pode ficar fora. Capítulo: backup e capstone-vps.",
      "**rootless** — container/engine sem UID 0 no host. Capítulos: podman-debian, docker-debian.",
      "**Signed-By** — amarra a chave GPG a um repositório específico (sucessor do apt-key global). Capítulos: sources-list, deb822-sources.",
      "**sysctl** — knobs do kernel em tempo de execução (/etc/sysctl.d). Capítulo: hardening / memoria-proc-sys.",
      "**display manager** — gdm/lightdm/sddm — tela de login gráfica. Capítulo: ambiente-grafico.",
      "**tasksel** — instala conjuntos de pacotes (tasks) como desktop ou ssh-server. Capítulo: ambiente-grafico / instalação.",
      "**capstone** — projeto final que junta baseline de VPS. Capítulo: capstone-vps.",
      "Quando um termo não estiver aqui, use man-info e a busca Ctrl+K nos títulos dos 80+ capítulos — o curso é o dicionário expandido.",
    ],
    commands: [
      {
        command: "# use Ctrl+K e digite o termo",
        description: "A busca do curso acha capítulos e este glossário sem acento.",
        example: "# Ctrl+K → 'wireguard' ou 'deb822'",
      },
      {
        command: "man apt",
        description: "Documentação local do APT — complemento offline do glossário.",
        example: "man apt",
      },
      {
        command: "apropos systemd | head",
        description: "Descobre páginas man relacionadas a um termo.",
        example: "apropos systemd | head",
      },
      {
        command: "whatis dpkg apt systemd",
        description: "Uma linha oficial por comando.",
        example: "whatis dpkg apt systemd",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Glossário é mapa",
        content: "Cada verbete aponta para um capítulo — não pare só na definição.",
      },
      {
        type: "success",
        title: "Ctrl+K",
        content: "Digite parte do termo sem acento: 'repositorio', 'criptografia', 'container'.",
      },
    ],
    practiceLabs: [
      {
        title: "Três termos em voz alta",
        goal: "Explicar APT, unit systemd e 3-2-1 sem ler o texto.",
        steps: [
          "Escolha APT, systemd unit e 3-2-1",
          "Feche o glossário e explique cada um em uma frase",
          "Abra o capítulo indicado se travar",
        ],
        command: "true",
        verify: "Você consegue ensinar os três termos a outra pessoa em 2 minutos.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Diferença APT vs dpkg?",
        answer: "APT resolve dependências e repositórios; dpkg instala o .deb em si.",
      },
      {
        id: 2,
        question: "O que é non-free-firmware?",
        answer: "Componente APT para firmware proprietário comum, separado de non-free genérico.",
      },
      {
        id: 3,
        question: "Rootless significa o quê?",
        answer: "Rodar containers/engine sem privilégio root no host.",
      },
      {
        id: 4,
        question: "Para que serve Signed-By?",
        answer: "Limitar qual chave GPG valida um repositório específico.",
      },
      {
        id: 5,
        question: "Regra 3-2-1?",
        answer: "3 cópias, 2 tipos de mídia, 1 offsite — e restore testado.",
      },
      {
        id: 6,
        question: "Onde aprofundar WireGuard neste curso?",
        answer: "Capítulo wireguard.",
      },
    ],
    references: [
      { title: "Debian Glossary (wiki)", url: "https://wiki.debian.org/Glossary" },
      { title: "Debian Reference",
        url: "https://www.debian.org/doc/manuals/debian-reference/" },
      { title: "man apt", url: "https://manpages.debian.org/apt" },
    ],
  },
];
