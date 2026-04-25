import { Module } from "@/types/module";

export const redeSeguranca: Module[] = [
  {
    id: "rede",
    title: "Configuração de Rede",
    icon: "🌐",
    category: "Rede e Segurança",
    description: "ip, ifconfig, NetworkManager, /etc/network/interfaces — entenda como o Debian gerencia rede.",
    objectives: [
      "Ver e configurar interfaces de rede com ip",
      "Entender NetworkManager (desktop) vs ifupdown (servidor)",
      "Configurar IP estático em servidor",
      "Diagnosticar problemas de conectividade",
    ],
    content: [
      "O Debian tem TRÊS sistemas de gerenciamento de rede:\n• NetworkManager — usado em desktops (Wi-Fi, perfis, integração com indicadores). Padrão em GNOME/KDE/XFCE.\n• systemd-networkd — moderno, usado em alguns servidores e em containers.\n• ifupdown — clássico, configurado via /etc/network/interfaces. Padrão em servidores Debian.\n\nNão use OS DOIS ao mesmo tempo na mesma interface — vão brigar. Em desktop: deixa o NM. Em servidor: edite /etc/network/interfaces.",
      "Comandos modernos para inspecionar rede (use 'ip', NÃO o velho 'ifconfig' que está deprecated):\n\nip addr show              ou ip a — lista interfaces e IPs\nip link show              ou ip l — interfaces (sem IPs)\nip route                  ou ip r — tabela de rotas\nip neigh                  vizinhos ARP (devices na sua rede)\nip -s link                estatísticas (pacotes, erros)\n\nO 'ip a' é o que você roda toda vez que quer ver 'qual meu IP?'",
      "Saída típica de 'ip a':\n\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500\n    link/ether 00:11:22:33:44:55\n    inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic eth0\n    inet6 fe80::abc/64 scope link\n\nLeitura:\n• 'eth0' — nome da interface\n• 'UP' — interface ativa\n• 'inet 192.168.1.100/24' — IP IPv4 com máscara /24 (= 255.255.255.0)\n• 'inet6' — IPv6\n• 'dynamic' — IP veio de DHCP (se 'noprefixroute' ou ausência: estático)",
      "Configurar IP estático em servidor (sem NetworkManager) — edite /etc/network/interfaces:\n\nauto eth0\niface eth0 inet static\n    address 192.168.1.100/24\n    gateway 192.168.1.1\n    dns-nameservers 1.1.1.1 8.8.8.8\n\nDepois 'sudo systemctl restart networking' ou 'sudo ifdown eth0 && sudo ifup eth0'.\n\nPara DHCP:\nauto eth0\niface eth0 inet dhcp",
      "Em desktop com NetworkManager — use 'nmcli' (linha de comando) ou nm-applet (interface gráfica):\n\nnmcli device                          interfaces\nnmcli connection                      perfis salvos\nnmcli device wifi list                Wi-Fi disponíveis\nnmcli device wifi connect 'NOME' password 'SENHA'\nnmcli connection up minha-rede        ativa perfil\nnmcli connection down minha-rede      desativa\n\nnmtui — TUI (interface texto interativa) — facil para configurar Wi-Fi via SSH em servidor: 'sudo nmtui'.",
      "Diagnóstico de conectividade — fluxo padrão quando 'internet não funciona':\n\n# 1) Tem IP?\nip a\n\n# 2) Tem rota default?\nip route\n# Deve aparecer 'default via X.X.X.X dev eth0'\n\n# 3) Pinga o gateway (rede local OK)?\nping -c 3 192.168.1.1\n\n# 4) Pinga IP externo (internet OK)?\nping -c 3 1.1.1.1\n\n# 5) Resolve nome (DNS OK)?\nping -c 3 google.com\nor\nresolvectl query google.com\n\nSe 1 OK, 2 OK, 3 OK, 4 falhar = ISP/upstream com problema.\nSe 4 OK mas 5 falhar = problema de DNS. Edite /etc/resolv.conf ou troque DNS no NetworkManager.",
      "Portas TCP/UDP — listar o que está escutando:\n\nss -tulpn                         todas as portas TCP/UDP escutando, com programa\nss -tulpn | grep :22              só porta 22\nsudo lsof -i :80                  programas usando porta 80\nsudo netstat -tulpn               (legado, mesma coisa que ss)\n\nss é o comando moderno. Mais rápido que netstat.",
      "DNS no Debian moderno — historicamente /etc/resolv.conf, mas agora é geralmente gerenciado por systemd-resolved (gera /etc/resolv.conf como link). Para mudar DNS:\n\n• Desktop: NetworkManager > editar conexão > IPv4 > DNS\n• Servidor: edite /etc/network/interfaces (dns-nameservers) ou /etc/systemd/resolved.conf\n\nTestar resolução:\nresolvectl query example.com         # systemd-resolved\ndig example.com                       # ferramenta clássica (sudo apt install dnsutils)\nnslookup example.com                  # outra ferramenta clássica\nhost example.com                      # versão simples",
    ],
    commands: [
      {
        command: "ip a",
        description: "Lista interfaces de rede e IPs.",
        example: "ip a",
      },
      {
        command: "ip route",
        description: "Tabela de rotas (default = onde sai a internet).",
        example: "ip route",
        output: "default via 192.168.1.1 dev eth0\n192.168.1.0/24 dev eth0 proto kernel scope link",
      },
      {
        command: "ping",
        description: "Testa conectividade (ICMP). Ctrl+C para parar.",
        example: "ping -c 4 1.1.1.1",
        flags: [
          { flag: "-c N", description: "Manda N pacotes e para" },
          { flag: "-i 0.2", description: "Intervalo (0.2s — root requerido para < 1s)" },
          { flag: "-s 1500", description: "Tamanho do pacote" },
        ],
      },
      {
        command: "traceroute",
        description: "Mostra cada salto até destino. Instale: sudo apt install traceroute.",
        example: "traceroute google.com",
      },
      {
        command: "ss -tulpn",
        description: "Lista portas TCP/UDP escutando + programa que está usando.",
        example: "sudo ss -tulpn",
      },
      {
        command: "nmcli",
        description: "CLI do NetworkManager (desktop).",
        example: "nmcli device wifi connect 'minha-rede' password 'xxx'",
      },
      {
        command: "nmtui",
        description: "Interface TUI (texto) para NetworkManager. Excelente para configurar Wi-Fi via SSH.",
        example: "sudo nmtui",
      },
      {
        command: "resolvectl",
        description: "Inspeciona/configura DNS via systemd-resolved.",
        example: "resolvectl query google.com",
      },
      {
        command: "dig",
        description: "Consulta DNS detalhada. Instale: sudo apt install dnsutils.",
        example: "dig +short example.com",
      },
      {
        command: "curl ifconfig.me",
        description: "Mostra seu IP PÚBLICO (na internet).",
        example: "curl -4 ifconfig.me",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Use 'ip', esqueça 'ifconfig'",
        content:
          "ifconfig está OBSOLETO há anos. Não vem instalado no Debian moderno. Use 'ip a' (ver interfaces) e 'ip route' (rotas). Sintaxe nova é mais consistente.",
      },
      {
        type: "warning",
        title: "Após editar /etc/network/interfaces em SSH...",
        content:
          "Se você está conectado via SSH e edita config de rede, RISCO de perder conexão. Tenha plano B: console serial, KVM, ou um cron de 'ifup eth0' antigo agendado para 5 min depois (recover automático).",
      },
    ],
    practiceLabs: [
      {
        title: "Diagnóstico completo de rede em 2 minutos",
        goal: "Sequência padrão para diagnosticar 'internet não funciona'.",
        steps: [
          "Cheque interfaces e IP.",
          "Cheque rota default.",
          "Pinga gateway.",
          "Pinga IP externo.",
          "Resolve nome.",
        ],
        command: `# 1) Tenho IP?
ip a | grep -E 'inet |UP'

# 2) Tenho gateway?
ip route | grep default

# 3) Gateway responde?
GATEWAY=$(ip route | grep default | awk '{print $3}')
ping -c 2 $GATEWAY

# 4) Internet responde?
ping -c 2 1.1.1.1

# 5) DNS funciona?
ping -c 2 google.com

# 6) Bonus: meu IP publico
curl -s -4 ifconfig.me`,
        verify:
          "Se passos 1-3 OK e 4 falhar: provedor com problema. Se 4 OK mas 5 falhar: DNS quebrado (troque para 1.1.1.1 ou 8.8.8.8). Tudo OK = você tá online.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Comando para ver IP da máquina?",
        answer: "ip a (ou 'ip addr'). Procure 'inet X.X.X.X' na sua interface ativa.",
      },
      {
        id: 2,
        question: "Como ver as portas TCP/UDP que estão escutando + programa?",
        answer: "sudo ss -tulpn",
      },
      {
        id: 3,
        question: "Onde configurar IP estático em servidor Debian sem NetworkManager?",
        answer: "/etc/network/interfaces — depois 'sudo systemctl restart networking'.",
      },
      {
        id: 4,
        question: "Como testar se DNS funciona?",
        answer: "ping google.com — se resolver para IP e responder, DNS OK. Se 'unknown host', DNS quebrado.",
      },
      {
        id: 5,
        question: "Como conectar a Wi-Fi via SSH em servidor (sem GUI)?",
        answer: "sudo nmtui (TUI interativa) ou sudo nmcli device wifi connect 'NOME' password 'XXX'.",
      },
      {
        id: 6,
        question: "Como descobrir seu IP PÚBLICO (na internet)?",
        answer: "curl -4 ifconfig.me (ou icanhazip.com, ipinfo.io/ip). 'ip a' só mostra IP local.",
      },
    ],
    references: [
      { title: "Wiki Debian — NetworkConfiguration", url: "https://wiki.debian.org/NetworkConfiguration" },
      { title: "Manual ip", url: "https://manpages.debian.org/bookworm/iproute2/ip.8.en.html" },
    ],
  },

  {
    id: "firewall-ufw",
    title: "Firewall com UFW",
    icon: "🛡️",
    category: "Rede e Segurança",
    description: "UFW — interface amigável para o firewall do Linux. Bloqueia tudo que não foi explicitamente permitido.",
    objectives: [
      "Habilitar UFW com regras seguras",
      "Abrir portas específicas (22, 80, 443)",
      "Permitir/bloquear IPs específicos",
      "Verificar e debugar regras",
    ],
    content: [
      "UFW (Uncomplicated Firewall) é um wrapper sobre o iptables/nftables do kernel Linux. Filosofia: bloqueia tudo que não foi permitido. Padrão recomendado:\n• Saída (outgoing): tudo permitido (você confia nas suas requisições)\n• Entrada (incoming): tudo bloqueado, exceto portas que você abrir\n\nResultado: outros não acessam serviços seus que você não quis expor.",
      "Habilitar UFW pela primeira vez em um servidor (com cuidado se via SSH):\n\n# 1) Instalar\nsudo apt install -y ufw\n\n# 2) IMPORTANTE: abrir SSH ANTES de habilitar (senão você se tranca de fora!)\nsudo ufw allow 22/tcp\nsudo ufw allow OpenSSH                # equivalente, usa o app profile\n\n# 3) Definir defaults\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\n\n# 4) Habilitar (vai pedir confirmação se via SSH)\nsudo ufw enable\n\n# 5) Conferir\nsudo ufw status verbose",
      "Regras por porta:\n\nsudo ufw allow 80/tcp                liberar HTTP\nsudo ufw allow 443/tcp               liberar HTTPS\nsudo ufw allow 8080                  ambos TCP e UDP\nsudo ufw deny 23                     bloquear telnet\nsudo ufw allow 3000:3010/tcp         range de portas",
      "Regras por aplicação (UFW conhece serviços comuns):\n\nsudo ufw app list                    lista perfis disponíveis\nsudo ufw app info OpenSSH            detalhes\nsudo ufw allow OpenSSH               libera portas do SSH\nsudo ufw allow 'Nginx Full'          libera 80 e 443 do nginx\nsudo ufw allow Apache",
      "Regras por IP origem:\n\nsudo ufw allow from 192.168.1.100                          tudo desse IP\nsudo ufw allow from 192.168.1.0/24                         toda a sub-rede\nsudo ufw allow from 192.168.1.100 to any port 22           só esse IP, só na porta 22\nsudo ufw deny from 1.2.3.4                                 bloqueia esse IP\nsudo ufw insert 1 deny from 1.2.3.4                        adiciona como regra #1 (mais prioritária)",
      "Status e regras:\n\nsudo ufw status                      lista regras (numeradas)\nsudo ufw status verbose              + defaults e logging\nsudo ufw status numbered             com números\nsudo ufw show added                  só as regras que VOCÊ adicionou\n\nApagar regra: 'sudo ufw delete N' onde N é o número da regra (de 'status numbered'), OU repita a regra prefixada por 'delete': 'sudo ufw delete allow 80/tcp'.",
      "Logging — registra tentativas bloqueadas:\n\nsudo ufw logging on             liga (default low)\nsudo ufw logging medium\nsudo ufw logging high\nsudo ufw logging off\n\nLogs aparecem em /var/log/ufw.log e via journalctl. Útil para auditoria, mas em servidor MUITO atacado pode encher disco — use 'low'.",
      "Reset (apagar TUDO e desabilitar):\n\nsudo ufw disable\nsudo ufw reset            # confirma\n\nUseful quando você bagunçou as regras e quer recomeçar do zero. Mas ATENÇÃO se via SSH — após reset, perde regra do SSH.",
    ],
    commands: [
      {
        command: "sudo ufw enable / disable",
        description: "Liga / desliga firewall.",
        example: "sudo ufw enable",
      },
      {
        command: "sudo ufw status verbose",
        description: "Estado completo + regras.",
        example: "sudo ufw status verbose",
      },
      {
        command: "sudo ufw default",
        description: "Define política padrão.",
        example: "sudo ufw default deny incoming",
      },
      {
        command: "sudo ufw allow / deny",
        description: "Cria regra.",
        example: "sudo ufw allow 22/tcp",
      },
      {
        command: "sudo ufw allow from",
        description: "Permitir IP/rede específica.",
        example: "sudo ufw allow from 192.168.1.0/24 to any port 22",
      },
      {
        command: "sudo ufw delete N",
        description: "Apaga regra número N (de 'ufw status numbered').",
        example: "sudo ufw delete 3",
      },
      {
        command: "sudo ufw app list",
        description: "Lista perfis de aplicação conhecidos.",
        example: "sudo ufw app list",
      },
      {
        command: "sudo ufw reset",
        description: "Apaga TODAS as regras (confirma).",
        example: "sudo ufw reset",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Antes de habilitar UFW via SSH",
        content:
          "OBRIGATÓRIO: 'sudo ufw allow 22/tcp' ANTES de 'sudo ufw enable'. Sem isso, você perde SSH e fica trancado fora do servidor.",
      },
      {
        type: "info",
        title: "Defaults seguros para qualquer servidor",
        content:
          "deny incoming + allow outgoing — bloqueia conexões EXTERNAS, libera as suas. Depois você abre as portas que precisa expor (22 SSH, 80/443 web).",
      },
    ],
    practiceLabs: [
      {
        title: "Setup completo de firewall em servidor web",
        goal: "Liberar SSH, HTTP, HTTPS e bloquear o resto.",
        steps: [
          "Instalar UFW.",
          "Liberar SSH ANTES de qualquer coisa.",
          "Definir defaults seguros.",
          "Liberar HTTP e HTTPS.",
          "Habilitar.",
          "Conferir.",
        ],
        command: `# 1) Instalar
sudo apt install -y ufw

# 2) SSH primeiro (CRITICO se via SSH)
sudo ufw allow 22/tcp

# 3) Defaults
sudo ufw default deny incoming
sudo ufw default allow outgoing

# 4) Web
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# 5) Habilitar (vai perguntar - responda y)
sudo ufw enable

# 6) Conferir
sudo ufw status verbose

# 7) Bonus: limitar SSH a IPs especificos (apos confirmar acesso normal)
# sudo ufw delete allow 22/tcp
# sudo ufw allow from 192.168.1.0/24 to any port 22`,
        verify:
          "'sudo ufw status verbose' deve mostrar Status: active, defaults deny/allow, e regras 22/80/443. Tente abrir o site (porta 80) — funciona. Tente outras portas — bloqueadas.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Configuração mínima segura de UFW?",
        answer:
          "sudo ufw default deny incoming; sudo ufw default allow outgoing; sudo ufw allow 22/tcp (se SSH); sudo ufw enable.",
      },
      {
        id: 2,
        question: "Como liberar HTTPS para todo mundo?",
        answer: "sudo ufw allow 443/tcp",
      },
      {
        id: 3,
        question: "Como permitir SSH só de uma sub-rede?",
        answer: "sudo ufw allow from 192.168.1.0/24 to any port 22",
      },
      {
        id: 4,
        question: "Como apagar uma regra específica?",
        answer:
          "sudo ufw status numbered (ver número) → sudo ufw delete N. Ou repetir comando com 'delete' prefixado: sudo ufw delete allow 80/tcp.",
      },
      {
        id: 5,
        question: "Por que perigoso habilitar UFW via SSH sem antes liberar 22?",
        answer:
          "Default é deny incoming. Você perde a conexão SSH ATIVA assim que enable. Volta = só com console físico/KVM.",
      },
      {
        id: 6,
        question: "Como ver regras do UFW que você criou (sem as defaults)?",
        answer: "sudo ufw show added",
      },
    ],
    references: [
      { title: "Manual UFW", url: "https://manpages.debian.org/bookworm/ufw/ufw.8.en.html" },
      { title: "Tutorial Ubuntu UFW", url: "https://help.ubuntu.com/community/UFW" },
    ],
  },

  {
    id: "ssh-conexao",
    title: "SSH — Conexão Remota Segura",
    icon: "🔑",
    category: "Rede e Segurança",
    description: "Conectar em servidor remoto, configurar chaves SSH (sem senha), endurecer o sshd.",
    objectives: [
      "Conectar em servidor via SSH",
      "Gerar e configurar autenticação por chave (sem senha)",
      "Editar /etc/ssh/sshd_config para endurecer segurança",
      "Usar config em ~/.ssh/config para múltiplos servidores",
    ],
    content: [
      "SSH (Secure Shell) é como você administra qualquer servidor Linux. Substitui Telnet/rlogin (inseguros, em texto puro). Cliente padrão é o 'ssh'. No servidor, o serviço chamado 'sshd' (SSH daemon) escuta na porta 22.",
      "Conexão básica:\n\nssh usuario@ip_ou_hostname\nssh wallyson@192.168.1.50\nssh -p 2222 wallyson@meuservidor.com         # porta diferente\nssh wallyson@meuservidor.com 'comando'        # roda comando e sai (não abre shell)\n\nPrimeira conexão pergunta sobre fingerprint do servidor — é a 'identidade' dele. Salva em ~/.ssh/known_hosts. Se mudar (servidor reinstalado), aviso de man-in-the-middle. Edite known_hosts ou: 'ssh-keygen -R hostname'.",
      "Autenticação por chave (sem senha) — método PADRÃO em produção. Mais seguro e prático:\n\n# 1) Gerar par de chaves (no SEU computador)\nssh-keygen -t ed25519 -C 'meu-email@exemplo.com'\n# Aceite o caminho padrão (~/.ssh/id_ed25519). Senha opcional.\n\n# 2) Copiar a chave pública para o servidor\nssh-copy-id wallyson@meuservidor.com\n\n# 3) Testar — não deve pedir senha\nssh wallyson@meuservidor.com\n\nO ssh-copy-id adiciona sua ~/.ssh/id_ed25519.pub no ~/.ssh/authorized_keys do servidor. A chave PRIVADA (id_ed25519) NUNCA sai do seu computador.",
      "Tipos de chaves SSH:\n• ed25519 — moderna, segura, rápida. USE.\n• rsa — funciona em servidores muito antigos. 4096 bits.\n• ecdsa, dsa — não use mais.\n\nPermissões CORRETAS de ~/.ssh:\n• ~/.ssh — 700 (drwx------)\n• ~/.ssh/id_ed25519 — 600 (rw-------)\n• ~/.ssh/id_ed25519.pub — 644\n• ~/.ssh/authorized_keys — 600\n• ~/.ssh/known_hosts — 644\n\nSSH RECUSA chaves com permissões erradas — proteção crítica.",
      "Endurecimento do sshd_config (servidor) — em /etc/ssh/sshd_config:\n\nPort 22                          # ou outra (segurança por obscuridade leve)\nProtocol 2\nPermitRootLogin no               # bloqueia login direto como root\nPasswordAuthentication no        # SÓ chave (após confirmar acesso por chave funciona)\nPubkeyAuthentication yes\nPermitEmptyPasswords no\nMaxAuthTries 3\nClientAliveInterval 600\nAllowUsers wallyson maria        # só esses usuários\n\nDepois: sudo systemctl restart ssh.\n\nIMPORTANTE: NÃO desabilite PasswordAuthentication antes de TESTAR que sua chave funciona. Se sua chave estiver errada, você se tranca para fora.",
      "Arquivo ~/.ssh/config — economiza digitação para múltiplos servidores:\n\nHost servidor1\n    HostName 192.168.1.50\n    User wallyson\n    Port 2222\n    IdentityFile ~/.ssh/id_ed25519\n\nHost servidor-prod\n    HostName meuservidor.com\n    User deploy\n    Port 22\n\nDepois é só 'ssh servidor1' (em vez de 'ssh -p 2222 wallyson@192.168.1.50').\n\nOpções comuns: User, Port, HostName, IdentityFile, LocalForward (port forward), ProxyJump (usar bastion).",
      "scp e rsync — copiar arquivos via SSH:\n\nscp arquivo.txt wallyson@servidor:/tmp/\nscp wallyson@servidor:/tmp/log.txt ./\nscp -r pasta/ servidor:/tmp/\n\nrsync é melhor (incremental, eficiente):\nrsync -avzP arquivo.txt servidor:/tmp/\nrsync -avzP --delete pasta/ servidor:/destino/      # sincroniza pasta\n\nFlags rsync: -a (archive=preserva tudo), -v (verbose), -z (compressão), -P (progresso + parcial).",
      "Túnel SSH (port forwarding) — útil para acessar serviço interno do servidor:\n\nssh -L 8080:localhost:80 servidor\n# Tudo que vai para localhost:8080 no SEU PC vai para localhost:80 no servidor\n# Útil para acessar admin de banco, dashboards internos, etc.\n\nssh -D 1080 servidor               # SOCKS proxy (pode usar como proxy no navegador)\n\nssh -J bastion servidor-interno     # ProxyJump — passa por bastion para chegar no destino",
    ],
    commands: [
      {
        command: "ssh",
        description: "Conecta em servidor.",
        example: "ssh wallyson@192.168.1.50",
        flags: [
          { flag: "-p PORTA", description: "Porta SSH não-padrão" },
          { flag: "-i CHAVE", description: "Usa essa chave específica" },
          { flag: "-v", description: "Verbose (debug)" },
          { flag: "-X", description: "Encaminha X11 (rodar app gráfico remoto)" },
          { flag: "-L L:H:R", description: "Local port forward" },
          { flag: "-J BASTION", description: "Proxy jump" },
        ],
      },
      {
        command: "ssh-keygen",
        description: "Gera par de chaves.",
        example: "ssh-keygen -t ed25519 -C 'meu-email'",
      },
      {
        command: "ssh-copy-id",
        description: "Copia sua chave pública para o servidor.",
        example: "ssh-copy-id wallyson@servidor",
      },
      {
        command: "scp",
        description: "Copia arquivos via SSH.",
        example: "scp -r pasta/ servidor:/tmp/",
      },
      {
        command: "rsync",
        description: "Sync incremental via SSH (melhor que scp para sincronizar pastas).",
        example: "rsync -avzP --delete pasta/ servidor:/destino/",
      },
      {
        command: "ssh -L",
        description: "Local port forward (cria túnel local → remoto).",
        example: "ssh -L 8080:localhost:80 servidor",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Antes de bloquear PasswordAuthentication, TESTE a chave",
        content:
          "Se você fizer 'PasswordAuthentication no' no sshd_config sem ter chave funcionando, perde acesso. Sempre TESTE 'ssh servidor' (deve entrar SEM pedir senha) ANTES de aplicar a config.",
      },
      {
        type: "info",
        title: "Mude porta 22 só para reduzir ruído",
        content:
          "Mudar SSH para porta 2222 NÃO te torna seguro (atacantes escaneiam). Mas REDUZ logs de tentativas (bots automatizados só vão na 22). Combine com fail2ban e PasswordAuthentication=no para segurança real.",
      },
    ],
    practiceLabs: [
      {
        title: "Configurar acesso SSH sem senha em 4 passos",
        goal: "Setup definitivo de chave SSH para um servidor.",
        steps: [
          "Gere par de chaves no seu PC.",
          "Copie a pública para o servidor.",
          "Teste login.",
          "(Servidor) endurecer sshd_config.",
        ],
        command: `# === NO SEU PC ===

# 1) Gerar (se ja nao tem)
ls ~/.ssh/id_ed25519* 2>/dev/null
# Se nao mostrou nada:
ssh-keygen -t ed25519 -C "wallyson@$(hostname)"
# Aceite default. Pode deixar passphrase vazia ou colocar (mais seguro)

# 2) Copiar para o servidor
ssh-copy-id wallyson@meu-servidor
# Ele vai pedir senha do servidor (so essa vez)

# 3) Testar - nao deve pedir senha
ssh wallyson@meu-servidor

# === NO SERVIDOR (apos confirmar acesso por chave) ===

# 4) Endurecer sshd_config
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
sudo sed -i 's/^#\\?PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
sudo sed -i 's/^#\\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config

# 5) Validar config antes de reiniciar
sudo sshd -t
# (silencio = OK; se mostrar erro, NAO reinicie)

# 6) Reiniciar
sudo systemctl restart ssh

# 7) ABRA OUTRA SESSAO SSH e teste
# Se nova sessao funcionar, tudo OK
# Se nao, restaure: sudo cp /etc/ssh/sshd_config.bak /etc/ssh/sshd_config && sudo systemctl restart ssh`,
        verify:
          "'ssh servidor' deve entrar direto sem pedir senha. Após endurecimento, login com senha não funciona mais (só chave). 'sudo cat /var/log/auth.log | grep sshd' mostra logins.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como gerar uma chave SSH moderna?",
        answer: "ssh-keygen -t ed25519 -C 'meu-email@exemplo.com'",
      },
      {
        id: 2,
        question: "Como copiar sua chave pública para o servidor?",
        answer: "ssh-copy-id usuario@servidor (depois disso, 'ssh usuario@servidor' não pede senha).",
      },
      {
        id: 3,
        question: "Permissão correta para ~/.ssh e ~/.ssh/id_ed25519?",
        answer: "Pasta ~/.ssh: 700 (drwx------). Chave privada: 600 (rw-------). SSH recusa permissões mais abertas.",
      },
      {
        id: 4,
        question: "Como conectar em servidor com porta SSH 2222?",
        answer: "ssh -p 2222 usuario@servidor",
      },
      {
        id: 5,
        question: "O que faz o ProxyJump (-J)?",
        answer: "Conecta no destino PASSANDO por um bastion. Ex: 'ssh -J bastion@bastion.com user@interno' usa o bastion como salto.",
      },
      {
        id: 6,
        question: "Como copiar pasta via SSH com progress?",
        answer: "rsync -avzP --delete pasta/ servidor:/destino/ (melhor que scp -r para pastas grandes).",
      },
    ],
    references: [
      { title: "Manual ssh", url: "https://manpages.debian.org/bookworm/openssh-client/ssh.1.en.html" },
      { title: "Manual sshd_config", url: "https://manpages.debian.org/bookworm/openssh-server/sshd_config.5.en.html" },
    ],
  },

  {
    id: "hardening",
    title: "Segurança e Hardening Básico",
    icon: "🔒",
    category: "Rede e Segurança",
    description: "Práticas essenciais para reduzir superfície de ataque: updates automáticos, fail2ban, audit logs.",
    objectives: [
      "Habilitar atualizações automáticas de segurança",
      "Instalar fail2ban contra brute-force SSH",
      "Configurar logging e auditoria básica",
      "Conhecer práticas para minimizar superfície de ataque",
    ],
    content: [
      "Hardening = endurecimento. Conjunto de práticas que reduzem chances de ser invadido. Em servidor exposto à internet, é OBRIGATÓRIO. Em desktop pessoal, agradável de ter. Vamos pelos itens mais impactantes.",
      "1. unattended-upgrades — instala atualizações de SEGURANÇA automaticamente. CRÍTICO em servidor:\n\nsudo apt install -y unattended-upgrades apt-listchanges\nsudo dpkg-reconfigure -plow unattended-upgrades\n# Responda 'Sim' para habilitar\n\nVerifique config em /etc/apt/apt.conf.d/50unattended-upgrades. Por padrão instala só atualizações de security suite. Para incluir updates de stable, descomente as linhas correspondentes.\n\nTeste com:\nsudo unattended-upgrades --dry-run -d",
      "2. fail2ban — banha IPs após N tentativas de login falhas. Padrão essencial contra brute-force SSH:\n\nsudo apt install -y fail2ban\nsudo systemctl enable --now fail2ban\n\nConfigure em /etc/fail2ban/jail.local (NÃO em jail.conf — é sobrescrito em update):\n\n[DEFAULT]\nbantime = 1h\nfindtime = 10m\nmaxretry = 5\n\n[sshd]\nenabled = true\nport = ssh\n\nReinicie: sudo systemctl restart fail2ban.\n\nMonitorar:\nsudo fail2ban-client status\nsudo fail2ban-client status sshd\nsudo journalctl -u fail2ban -f",
      "3. SSH endurecido — vimos no módulo SSH:\n• PermitRootLogin no\n• PasswordAuthentication no (depois de chave funcionando)\n• AllowUsers wallyson    (limitar usuários que podem logar)\n• Port diferente (raro, mas reduz noise)\n\n4. Firewall ativo — UFW vimos. Sempre 'default deny incoming'.\n\n5. Removeu serviços desnecessários:\nsudo systemctl list-unit-files --state=enabled\nDesabilite tudo que NÃO USA: bluetooth (servidor), avahi (servidor), cups (sem impressora), ModemManager (sem modem). Cada serviço habilitado = mais superfície de ataque.",
      "6. Sysctl hardening — parâmetros do kernel para reforçar segurança. Crie /etc/sysctl.d/99-hardening.conf:\n\n# Desabilita IPv6 forwarding (a menos que precise)\nnet.ipv6.conf.all.forwarding = 0\nnet.ipv4.ip_forward = 0\n\n# ICMP redirects podem ser usados em ataques\nnet.ipv4.conf.all.accept_redirects = 0\nnet.ipv4.conf.all.send_redirects = 0\n\n# Source routing geralmente desnecessario\nnet.ipv4.conf.all.accept_source_route = 0\n\n# Ignora ICMP broadcast (anti-DDoS Smurf)\nnet.ipv4.icmp_echo_ignore_broadcasts = 1\n\n# Loga pacotes 'martians' (com source IP impossivel)\nnet.ipv4.conf.all.log_martians = 1\n\n# Protecao SYN flood\nnet.ipv4.tcp_syncookies = 1\n\nAplicar: 'sudo sysctl --system'.",
      "7. AppArmor — sandbox de aplicações. Vem habilitado no Debian. Confirme:\n\nsudo aa-status\n\nMostra perfis ativos. Em modo enforce, processo só pode fazer o que perfil permite. Adicionar perfis: pacote 'apparmor-profiles' e 'apparmor-profiles-extra'.\n\n8. AuditD (avançado) — log de TUDO que acontece no sistema (chamadas de sistema, mudanças em arquivos, etc.):\n\nsudo apt install -y auditd\nsudo systemctl enable --now auditd\n\nConfigurar regras em /etc/audit/rules.d/. Útil para conformidade (PCI-DSS, HIPAA), mas verboso — só use se realmente precisa.",
      "9. AIDE / rkhunter — detectores de modificações suspeitas:\n\nsudo apt install -y aide rkhunter\n\nAIDE faz hash de TUDO em /etc, /bin, /sbin, etc. Roda diariamente comparando — alerta se algo mudou (atacante modificando binário do sistema).\n\nrkhunter procura rootkits conhecidos.\n\nNenhum dos dois é silver bullet — atacante avançado contorna. Mas eleva o nível.",
      "10. Princípio do menor privilégio — sempre:\n• Usuário comum por default. Sudo só quando precisa.\n• Cada serviço com seu próprio usuário (nginx roda como www-data, postgres como postgres).\n• Senhas FORTES (min 14 caracteres, complexidade variada). Use gerenciador (KeepassXC, Bitwarden).\n• 2FA onde possível (Google Authenticator no SSH via libpam-google-authenticator).\n• Não compartilhe credenciais. Cada pessoa, sua própria conta.",
    ],
    commands: [
      {
        command: "sudo dpkg-reconfigure -plow unattended-upgrades",
        description: "Configura atualizações automáticas de segurança.",
        example: "sudo dpkg-reconfigure -plow unattended-upgrades",
      },
      {
        command: "sudo unattended-upgrades --dry-run",
        description: "Simula o que SERIA atualizado.",
        example: "sudo unattended-upgrades --dry-run -d",
      },
      {
        command: "sudo fail2ban-client status",
        description: "Status geral do fail2ban e jails ativas.",
        example: "sudo fail2ban-client status",
      },
      {
        command: "sudo fail2ban-client status sshd",
        description: "IPs banidos da jail SSH.",
        example: "sudo fail2ban-client status sshd",
      },
      {
        command: "sudo fail2ban-client unban IP",
        description: "Desbanir IP (caso tenha banido um seu por engano).",
        example: "sudo fail2ban-client unban 192.168.1.50",
      },
      {
        command: "sudo aa-status",
        description: "Status do AppArmor (perfis ativos).",
        example: "sudo aa-status",
      },
      {
        command: "sudo systemctl list-unit-files --state=enabled",
        description: "Lista serviços habilitados (para revisar e desabilitar não-essenciais).",
        example: "sudo systemctl list-unit-files --state=enabled --type=service",
      },
      {
        command: "sudo sysctl --system",
        description: "Aplica configs sysctl de /etc/sysctl.conf e /etc/sysctl.d/.",
        example: "sudo sysctl --system",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Servidor exposto à internet SEM hardening = invadido em horas",
        content:
          "Bots fazem milhões de tentativas SSH/HTTP por minuto. Servidor com 'root/admin' como senha e SSH na 22 é invadido em poucas horas. Mínimo: SSH só por chave, fail2ban, firewall, unattended-upgrades.",
      },
      {
        type: "info",
        title: "Hardening é processo, não evento",
        content:
          "Não é 'ativei e acabou'. Logs precisam ser monitorados, fail2ban ajustado, atualizações verificadas. Em produção, alguém precisa olhar tudo ao menos semanalmente.",
      },
      {
        type: "success",
        title: "Lynis — auditoria automática",
        content:
          "Instale 'sudo apt install lynis' e rode 'sudo lynis audit system'. Faz centenas de checagens de segurança e te dá uma nota + lista de melhorias prioritárias. Excelente ponto de partida.",
      },
    ],
    practiceLabs: [
      {
        title: "Hardening minimo de servidor SSH em 5 minutos",
        goal: "Aplicar as 4 medidas mais impactantes em sequência.",
        steps: [
          "Habilitar updates automáticos.",
          "Instalar e ativar fail2ban.",
          "Confirmar UFW ativo com SSH liberado.",
          "Endurecer sshd_config (PasswordAuthentication=no).",
        ],
        command: `# 1) Updates automaticos
sudo apt install -y unattended-upgrades apt-listchanges
sudo dpkg-reconfigure -plow unattended-upgrades

# 2) Fail2ban
sudo apt install -y fail2ban
sudo tee /etc/fail2ban/jail.local > /dev/null << 'EOF'
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5

[sshd]
enabled = true
EOF
sudo systemctl enable --now fail2ban

# 3) UFW (so se ainda nao ativo)
sudo ufw allow 22/tcp
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw --force enable

# 4) SSH endurecido (apos chave funcionar!)
sudo sed -i 's/^#\\?PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
sudo sed -i 's/^#\\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
sudo sshd -t && sudo systemctl restart ssh

# 5) Conferir
sudo systemctl status fail2ban
sudo ufw status verbose
sudo fail2ban-client status sshd`,
        verify:
          "fail2ban e ufw ativos, ssh recusa login com senha. Em servidor exposto, dentro de 1h fail2ban-client status sshd já mostra IPs banidos.",
      },
      {
        title: "Auditoria automática com Lynis",
        goal: "Rodar uma auditoria completa de segurança e ler as recomendações.",
        steps: [
          "Instalar lynis.",
          "Rodar audit system.",
          "Ver as warnings e suggestions.",
        ],
        command: `# 1) Instalar
sudo apt install -y lynis

# 2) Auditar
sudo lynis audit system

# 3) Ver relatorio resumido (final do output ou)
sudo lynis show details
sudo cat /var/log/lynis.log | tail -50

# 4) Ver score
sudo lynis show hardening-index`,
        verify:
          "Lynis te dá uma nota (0-100). Servidor sem hardening: 50-60. Após aplicar as práticas: 75-90. Suggestions vão te guiar para melhorar.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como habilitar atualizações de segurança automáticas?",
        answer: "sudo apt install unattended-upgrades && sudo dpkg-reconfigure -plow unattended-upgrades.",
      },
      {
        id: 2,
        question: "Para que serve fail2ban?",
        answer:
          "Banha IPs após N tentativas de login falhas. Defesa essencial contra brute-force em SSH, web admin, etc. Padrão: 5 tentativas em 10 min = ban de 1h.",
      },
      {
        id: 3,
        question: "Por que não confiar só em mudar a porta SSH?",
        answer:
          "Atacantes escaneiam portas. Mudar 22 → 2222 só reduz o NOISE (bots vão na 22 só). Segurança real: SSH só por chave, fail2ban, firewall.",
      },
      {
        id: 4,
        question: "Comando para ver IPs banidos pelo fail2ban?",
        answer: "sudo fail2ban-client status sshd",
      },
      {
        id: 5,
        question: "Como saber se o sistema tem AppArmor ativo?",
        answer: "sudo aa-status — mostra perfis enforced, complain, etc.",
      },
      {
        id: 6,
        question: "Ferramenta automatizada para auditar segurança do sistema?",
        answer: "Lynis: sudo apt install lynis && sudo lynis audit system. Te dá nota e lista de melhorias.",
      },
    ],
    references: [
      { title: "Wiki Debian — Security", url: "https://wiki.debian.org/Hardening" },
      { title: "Lynis (auditoria)", url: "https://cisofy.com/lynis/" },
      { title: "Fail2ban manual", url: "https://github.com/fail2ban/fail2ban/wiki" },
    ],
  },
];
