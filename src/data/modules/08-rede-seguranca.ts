import { Module } from "@/types/module";

export const redeSeguranca: Module[] = [
  {
    id: "rede",
    title: "Configuração de Rede",
    icon: "🌐",
    category: "Rede e Segurança",
    description: "Aprenda como o Debian descobre o mundo: interfaces, IPs, rotas, DNS e diagnóstico de quando 'a internet não funciona'.",
    objectives: [
      "Entender o que é uma interface de rede e como o Linux a enxerga",
      "Ler a saída de ip a, ip route e ss sem decorar significado",
      "Diferenciar NetworkManager (desktop) de ifupdown e systemd-networkd (servidor)",
      "Configurar IP estático em servidor pelo /etc/network/interfaces",
      "Diagnosticar problema de conectividade em sequência lógica (cabo → IP → rota → gateway → internet → DNS)",
      "Trocar e testar servidores DNS sem se enrolar com /etc/resolv.conf",
    ],
    content: [
      `Imagine que o seu computador é uma casa em uma rua. A interface de rede (eth0, wlan0, enp3s0) é a porta dessa casa. O endereço IP é o número da casa. O gateway é a esquina por onde você precisa passar para sair do bairro. E o DNS é a lista telefônica que traduz "padaria do João" no endereço real "Rua das Flores, 123". Toda configuração de rede no Debian, por mais complicada que pareça, é só dizer ao kernel quem é a porta, qual o número, onde fica a esquina e quem mantém a lista telefônica.`,
      `O Debian tem três jeitos de cuidar disso e essa é a primeira fonte de confusão. O NetworkManager é o gerente de rede dos desktops modernos: cuida do Wi-Fi, lembra de senhas, troca de rede sozinho quando você anda com o notebook. O ifupdown é o esquema clássico de servidor: você escreve a configuração em /etc/network/interfaces e o sistema obedece. O systemd-networkd é a abordagem moderna para servidores e containers: declarativa, integrada ao systemd, sem scripts. Os três funcionam, mas NUNCA misture dois deles na mesma interface — eles brigam, sobrescrevem configuração um do outro e você acaba sem rede no pior momento. Regra prática: desktop = NetworkManager; servidor antigo = ifupdown; servidor novo ou container = systemd-networkd.`,
      `A primeira coisa que você precisa aprender é ler a saída de "ip a". Esqueça o "ifconfig": ele saiu de cena no Debian moderno porque o pacote net-tools nem vem instalado por padrão. O comando "ip" é o substituto oficial e é mais consistente. Quando você roda "ip a", aparece algo como "2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 ... inet 192.168.1.100/24 ... dynamic eth0". Tradução: a interface chamada eth0 é a número 2, está UP (ativa), o cabo está plugado (LOWER_UP), tem o IP 192.168.1.100 com máscara /24 (que vale 255.255.255.0) e esse IP veio de um servidor DHCP (dynamic). Aprenda a olhar essas três coisas — nome, UP/DOWN e inet — e você já sabe responder "qual é meu IP" e "minha placa está funcionando" em dois segundos.`,
      `Os nomes das interfaces no Debian não são mais aquele "eth0", "eth1" da época antiga. Hoje, por padrão, o systemd usa "predictable network interface names": enp3s0 (PCI slot), wlp2s0 (Wi-Fi PCI), eno1 (onboard), enx001122334455 (USB com MAC no nome). Parece feio, mas tem uma razão prática: se você plugar duas placas de rede e o sistema reiniciar, eth0 e eth1 podem trocar de lugar e quebrar suas regras de firewall. Os nomes "previsíveis" são amarrados ao slot físico, então "enp3s0" sempre é a placa do slot PCI 3. Em containers, em VMs e em alguns hardwares, os nomes antigos voltam — não estranhe.`,
      `Configurar IP estático em servidor é um dos rituais clássicos do administrador Debian. Edite /etc/network/interfaces e adicione um bloco "iface eth0 inet static" com address, gateway e dns-nameservers. Aplique com "sudo systemctl restart networking" ou, mais cirurgicamente, com "sudo ifdown eth0 && sudo ifup eth0". Mas se você estiver fazendo isso por SSH, tenha um plano B: console serial, KVM remoto ou um "at now + 5 minutes" agendado restaurando o backup da config. É clássico se trancar fora do servidor por causa de um espaço errado em "address 192.168.1.100/24". Atenção a essa pegadinha: a sintaxe nova aceita CIDR (/24) junto com o IP; a antiga pedia "netmask 255.255.255.0" em linha separada. Dois jeitos de escrever a mesma coisa.`,
      `Em desktop, o NetworkManager assume tudo. Use o "nmcli" para roteirizar tarefas e o "nmtui" quando precisa de uma TUI bonita (especialmente bom para conectar Wi-Fi via SSH em uma máquina sem teclado). "nmcli device wifi list" mostra as redes em volta, "nmcli device wifi connect 'Casa' password 'XXX'" conecta e salva o perfil, "nmcli connection up Casa" reativa depois. Tudo que você faz pelo painel gráfico passa por baixo pelo nmcli — é a mesma coisa. Confusão comum: editar /etc/network/interfaces em desktop com NetworkManager. Não funciona, ou funciona mal, porque o NM ignora interfaces gerenciadas externamente. Para mover uma interface do NM para o ifupdown (ou vice-versa) tem que mexer em /etc/NetworkManager/NetworkManager.conf. Em 95% dos casos, deixe como está.`,
      `Quando "a internet não funciona", siga sempre a mesma sequência diagnóstica em vez de chutar. Primeiro: tenho IP? "ip a" mostra a interface UP com inet. Segundo: tenho rota default? "ip route" deve mostrar "default via X.X.X.X". Terceiro: o gateway responde? "ping -c 3 X.X.X.X" no IP do gateway. Quarto: a internet responde? "ping -c 3 1.1.1.1" — se IP externo responde, sua rede até o ISP funciona. Quinto: DNS resolve? "ping -c 3 google.com" ou "resolvectl query google.com". Se 1, 2 e 3 estão OK, mas 4 falha: problema no provedor. Se 4 OK e 5 falha: problema de DNS, troque para 1.1.1.1 ou 8.8.8.8. Esse fluxo de cinco passos resolve 90% dos atendimentos de "está sem internet".`,
      `DNS no Debian moderno é uma ponte que muda dependendo da distro e versão. Historicamente, o /etc/resolv.conf era o arquivo único e simples: você escrevia "nameserver 1.1.1.1" e pronto. Hoje, em sistemas com systemd-resolved (cada vez mais comuns), o /etc/resolv.conf vira um link simbólico para /run/systemd/resolve/stub-resolv.conf, e o servidor real é configurado em /etc/systemd/resolved.conf ou via NetworkManager. Editar /etc/resolv.conf manualmente nesses casos não adianta — o systemd sobrescreve. Use "resolvectl" ou ajuste no NetworkManager. Para testar resolução fora do cache, "dig +trace google.com" segue a cadeia desde o root e é a ferramenta definitiva quando "o DNS está esquisito".`,
      `Ferramentas de diagnóstico que valem ouro: "ss -tulpn" lista portas TCP/UDP abertas com o nome do processo (substituto moderno do netstat). "traceroute google.com" mostra cada salto até o destino — útil quando a internet "fica lenta" e você quer descobrir onde está engasgando. "mtr 1.1.1.1" é traceroute + ping rodando em loop, ótimo para detectar perda intermitente. "nmap -sn 192.168.1.0/24" varre quem está vivo na sua rede local. "tcpdump -i eth0 port 80" sniff de pacotes em tempo real para o último recurso, quando nada faz sentido.`,
      `Ao terminar este capítulo, você consegue olhar para uma máquina nova e responder em segundos: qual é o IP, qual a rota default, qual o DNS, e se a internet responde. Consegue configurar IP fixo em servidor sem se trancar fora. E quando algum colega chegar dizendo "não tenho internet", você vai rodar os cinco pings na ordem e em dois minutos diagnosticar exatamente em que ponto a coisa quebra.`,
    ],
    commands: [
      {
        command: "ip a",
        description: "Lista todas as interfaces de rede com seus IPs e estado.",
        example: "ip a",
        output: `1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536
    inet 127.0.0.1/8 scope host lo
2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500
    link/ether 00:11:22:33:44:55
    inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic enp3s0`,
        flags: [
          { flag: "show dev <iface>", description: "Mostra só a interface indicada" },
          { flag: "-4", description: "Só IPv4" },
          { flag: "-6", description: "Só IPv6" },
          { flag: "-c", description: "Saída colorida (ip -c a)" },
        ],
      },
      {
        command: "ip route",
        description: "Mostra a tabela de rotas. A linha 'default' diz por onde sai a internet.",
        example: "ip route",
        output: `default via 192.168.1.1 dev enp3s0 proto dhcp metric 100
192.168.1.0/24 dev enp3s0 proto kernel scope link src 192.168.1.100`,
        flags: [
          { flag: "get <ip>", description: "Mostra qual rota seria usada para um IP" },
          { flag: "add", description: "Adiciona rota manualmente" },
          { flag: "del", description: "Remove rota" },
        ],
      },
      {
        command: "ip link",
        description: "Lista interfaces no nível de enlace (sem IPs). Use para ver MAC e estado físico.",
        example: "ip link set enp3s0 up",
        flags: [
          { flag: "set <iface> up/down", description: "Liga/desliga a interface" },
          { flag: "show", description: "Lista (default)" },
        ],
      },
      {
        command: "ping",
        description: "Testa conectividade enviando ICMP echo. Padrão de teste mais usado do planeta.",
        example: "ping -c 4 1.1.1.1",
        output: `64 bytes from 1.1.1.1: icmp_seq=1 ttl=58 time=8.21 ms
64 bytes from 1.1.1.1: icmp_seq=2 ttl=58 time=7.95 ms
--- 1.1.1.1 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss`,
        flags: [
          { flag: "-c N", description: "Manda N pacotes e para sozinho" },
          { flag: "-i 0.2", description: "Intervalo entre pacotes (precisa root abaixo de 1s)" },
          { flag: "-s 1500", description: "Tamanho do payload" },
          { flag: "-W 2", description: "Timeout em segundos" },
        ],
      },
      {
        command: "traceroute",
        description: "Mostra cada salto de roteador até o destino. Bom para ver onde a rota engasga.",
        example: "traceroute -n google.com",
        flags: [
          { flag: "-n", description: "Não tenta resolver nome reverso (mais rápido)" },
          { flag: "-T", description: "Usa TCP em vez de UDP (passa por mais firewalls)" },
        ],
      },
      {
        command: "mtr",
        description: "Traceroute + ping contínuo. Excelente para detectar perda intermitente.",
        example: "mtr -n 1.1.1.1",
      },
      {
        command: "ss",
        description: "Mostra sockets abertos. Substituto moderno e rápido do netstat.",
        example: "sudo ss -tulpn",
        output: `Netid State  Local Address:Port  Process
tcp   LISTEN 0.0.0.0:22          users:(("sshd",pid=812,fd=3))
tcp   LISTEN 0.0.0.0:80          users:(("nginx",pid=945,fd=6))`,
        flags: [
          { flag: "-t", description: "TCP" },
          { flag: "-u", description: "UDP" },
          { flag: "-l", description: "Só sockets em LISTEN" },
          { flag: "-p", description: "Mostra o processo (precisa root)" },
          { flag: "-n", description: "Numérico, não resolve serviço" },
        ],
      },
      {
        command: "nmcli",
        description: "Cliente de linha de comando do NetworkManager.",
        example: "nmcli device wifi connect 'MinhaRede' password 'minhasenha'",
        flags: [
          { flag: "device status", description: "Estado de cada interface" },
          { flag: "connection show", description: "Perfis salvos" },
          { flag: "connection up <nome>", description: "Ativa um perfil" },
        ],
      },
      {
        command: "nmtui",
        description: "Interface texto interativa do NetworkManager. Salvador em servidor sem GUI.",
        example: "sudo nmtui",
      },
      {
        command: "resolvectl",
        description: "Inspeciona e configura DNS quando o sistema usa systemd-resolved.",
        example: "resolvectl query google.com",
        flags: [
          { flag: "status", description: "Mostra DNS configurado por interface" },
          { flag: "flush-caches", description: "Limpa cache DNS" },
        ],
      },
      {
        command: "dig",
        description: "Consulta DNS detalhada. Instale com sudo apt install dnsutils.",
        example: "dig +short example.com",
        flags: [
          { flag: "+short", description: "Saída só com o IP" },
          { flag: "+trace", description: "Segue a cadeia desde os root servers" },
          { flag: "@1.1.1.1", description: "Pergunta a um servidor DNS específico" },
        ],
      },
      {
        command: "host",
        description: "Versão minimalista do dig para resolver nome rápido.",
        example: "host google.com",
      },
      {
        command: "curl ifconfig.me",
        description: "Mostra seu IP PÚBLICO (o que o resto da internet vê).",
        example: "curl -4 ifconfig.me",
      },
      {
        command: "tcpdump",
        description: "Captura pacotes em tempo real. Último recurso quando o resto não explica nada.",
        example: "sudo tcpdump -i enp3s0 -n port 80",
        flags: [
          { flag: "-i <iface>", description: "Interface" },
          { flag: "-n", description: "Não resolver nomes" },
          { flag: "-w arq.pcap", description: "Salva para abrir no Wireshark depois" },
        ],
      },
    ],
    tips: [
      {
        type: "info",
        title: "Use ip, esqueça ifconfig",
        content:
          "ifconfig está depreciado há mais de uma década. O Debian moderno nem instala net-tools por padrão. Aprenda 'ip a', 'ip route' e 'ss' — sintaxe nova, mais consistente, com mais recursos.",
      },
      {
        type: "warning",
        title: "Editar config de rede via SSH é perigoso",
        content:
          "Um erro de digitação em /etc/network/interfaces te tranca fora do servidor. Tenha sempre console serial, KVM remoto ou um 'sudo at now + 5 minutes' agendado restaurando o backup antes de aplicar.",
      },
      {
        type: "danger",
        title: "Nunca rode dois gerenciadores de rede ao mesmo tempo",
        content:
          "NetworkManager + ifupdown na mesma interface = caos. Eles sobrescrevem configuração um do outro silenciosamente. Escolha um, desabilite o outro e siga em paz.",
      },
      {
        type: "success",
        title: "Decore o fluxo dos 5 pings",
        content:
          "Tenho IP? Tenho rota default? Pinga gateway? Pinga 1.1.1.1? Resolve google.com? Esse roteiro resolve 9 de cada 10 chamados de 'está sem internet' em menos de dois minutos.",
      },
    ],
    practiceLabs: [
      {
        title: "Diagnóstico completo de rede em 2 minutos",
        goal: "Aplicar a sequência padrão para descobrir exatamente onde a conectividade quebra.",
        steps: [
          "Conferir interfaces com ip a — alguma UP com IP?",
          "Conferir rota default com ip route.",
          "Pingar o gateway (rede local funcionando).",
          "Pingar IP externo 1.1.1.1 (internet funcionando).",
          "Resolver nome google.com (DNS funcionando).",
          "Concluir em qual etapa o problema aparece.",
        ],
        command: `# 1) Tenho IP?
ip a | grep -E 'inet |state '

# 2) Tenho rota default?
ip route | grep default

# 3) Gateway responde?
GATEWAY=$(ip route | awk '/default/ {print $3; exit}')
ping -c 2 -W 2 "$GATEWAY"

# 4) Internet responde?
ping -c 2 -W 2 1.1.1.1

# 5) DNS funciona?
ping -c 2 -W 2 google.com

# 6) Bonus: meu IP publico
curl -s -4 ifconfig.me`,
        expected:
          "Cinco etapas em sequência, cada uma com sucesso ou falha clara. O ponto da falha aponta a causa: sem IP = DHCP/cabo; sem gateway = config; gateway falha = problema local; 1.1.1.1 falha = ISP; google.com falha = DNS.",
        verify:
          "Se 1-3 OK e 4 falha: provedor com problema. Se 4 OK mas 5 falha: troque o DNS (sudo resolvectl dns enp3s0 1.1.1.1). Se tudo OK: você está online — o problema está em outro lugar (firewall, app específico).",
      },
      {
        title: "Configurar IP estático em servidor (modo seguro)",
        goal: "Fixar o IP de um servidor pelo /etc/network/interfaces sem se trancar fora.",
        steps: [
          "Fazer backup do arquivo atual.",
          "Agendar restauração automática em 5 minutos como rede de segurança.",
          "Editar /etc/network/interfaces com a config nova.",
          "Reiniciar a rede e testar antes do prazo expirar.",
          "Cancelar o agendamento se tudo deu certo.",
        ],
        command: `# Pre-requisito: sudo apt install at -y

# 1) Backup
sudo cp /etc/network/interfaces /etc/network/interfaces.bak

# 2) Plano B: restaura em 5 minutos
echo 'cp /etc/network/interfaces.bak /etc/network/interfaces && systemctl restart networking' | sudo at now + 5 minutes

# 3) Editar (substitua valores)
sudo tee /etc/network/interfaces > /dev/null << 'EOF'
auto lo
iface lo inet loopback

auto enp3s0
iface enp3s0 inet static
    address 192.168.1.100/24
    gateway 192.168.1.1
    dns-nameservers 1.1.1.1 8.8.8.8
EOF

# 4) Aplicar
sudo systemctl restart networking

# 5) Testar
ip a
ping -c 2 1.1.1.1

# 6) Se OK, cancelar o plano B
sudo atq
# pegue o numero do job e:
sudo atrm <numero>`,
        verify:
          "ip a mostra o IP estático configurado, ping ao gateway e ao 1.1.1.1 respondem. O job agendado pelo at foi removido. Se algo der errado, o at restaura sozinho em 5 minutos.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como descobrir o IP da sua máquina e o nome da interface ativa?",
        hint: "Comando moderno começa com duas letras.",
        answer:
          "ip a (ou 'ip addr'). Procure a linha 'inet X.X.X.X' dentro de uma interface marcada como UP. O nome (enp3s0, wlp2s0, eth0) aparece no início do bloco daquela interface.",
      },
      {
        id: 2,
        question: "Como ver as portas TCP/UDP que estão escutando e qual processo está em cada uma?",
        hint: "Substituto moderno do netstat. Precisa root para mostrar o processo.",
        answer:
          "sudo ss -tulpn. As flags significam: -t TCP, -u UDP, -l listening, -p processo, -n numérico (não resolve nome de serviço).",
      },
      {
        id: 3,
        question: "Onde se configura IP estático em servidor Debian que usa ifupdown?",
        hint: "Arquivo de texto em /etc/network/.",
        answer:
          "/etc/network/interfaces. Use bloco 'iface eth0 inet static' com address (com /24), gateway e dns-nameservers. Aplique com 'sudo systemctl restart networking'.",
      },
      {
        id: 4,
        question: "Como diferenciar um problema de DNS de um problema de rota?",
        hint: "Pingue um IP cru e um nome.",
        answer:
          "Pingue 1.1.1.1 (IP) e depois google.com (nome). Se IP responde mas nome não: problema de DNS. Se IP também não responde: problema de rota/gateway/conectividade.",
      },
      {
        id: 5,
        question: "Como conectar a uma rede Wi-Fi via SSH em servidor sem interface gráfica?",
        hint: "Existe uma TUI muito amigável no NetworkManager.",
        answer:
          "sudo nmtui — abre uma interface texto interativa onde você escolhe a rede e digita a senha. Alternativa só comando: sudo nmcli device wifi connect 'NomeDaRede' password 'minhasenha'.",
      },
      {
        id: 6,
        question: "Como descobrir seu IP PÚBLICO (o que aparece na internet) em vez do IP local?",
        hint: "ip a só mostra o local. Precisa perguntar a um serviço externo.",
        answer:
          "curl -4 ifconfig.me (ou curl ipinfo.io/ip, curl icanhazip.com). O -4 força IPv4. ip a mostra apenas o IP da sua rede local (192.168.x.x), não o público.",
      },
      {
        id: 7,
        question: "Por que /etc/resolv.conf às vezes parece 'voltar sozinho' depois de você editar?",
        hint: "Tem alguém sobrescrevendo.",
        answer:
          "Em sistemas com systemd-resolved, o /etc/resolv.conf é um link gerenciado automaticamente. Para mudar DNS, use resolvectl, edite /etc/systemd/resolved.conf ou configure no NetworkManager. Editar o resolv.conf direto não dura.",
      },
      {
        id: 8,
        question: "O que significa o /24 em '192.168.1.100/24'?",
        hint: "É a notação CIDR da máscara de rede.",
        answer:
          "É a máscara de rede em formato CIDR. /24 = 24 bits para a rede, sobrando 8 bits para hosts (256 endereços, equivalente a 255.255.255.0). Define quais IPs estão na sua sub-rede local.",
      },
    ],
    references: [
      { title: "Debian Wiki — NetworkConfiguration", url: "https://wiki.debian.org/NetworkConfiguration" },
      { title: "Manual do ip (iproute2)", url: "https://manpages.debian.org/trixie/iproute2/ip.8.en.html" },
      { title: "Manual de interfaces(5)", url: "https://manpages.debian.org/trixie/ifupdown/interfaces.5.en.html" },
      { title: "systemd-resolved.service(8)", url: "https://manpages.debian.org/trixie/systemd/systemd-resolved.service.8.en.html" },
      { title: "Debian Handbook — capítulo de rede", url: "https://debian-handbook.info/browse/stable/sect.network-config.html" },
    ],
  },

  {
    id: "firewall-ufw",
    title: "Firewall: UFW, iptables e nftables",
    icon: "🛡️",
    category: "Rede e Segurança",
    description: "Como o Linux filtra pacotes — do iptables clássico ao nftables moderno, com UFW como camada amigável por cima.",
    objectives: [
      "Entender o que um firewall faz e por que 'default deny' é a postura correta",
      "Diferenciar iptables, nftables e UFW (e por que existem três)",
      "Configurar UFW em servidor sem se trancar fora",
      "Liberar portas específicas, sub-redes e perfis de aplicação",
      "Inspecionar regras com nft list ruleset e iptables -L",
      "Resolver casos comuns: porta aberta no app mas bloqueada no firewall",
    ],
    content: [
      `Pense no firewall como o porteiro de um prédio. Cada pacote que chega é uma pessoa querendo entrar. O porteiro tem uma lista de regras: "moradores podem entrar", "entregadores só pelo elevador de serviço", "vendedores ambulantes não passam". Sem porteiro, qualquer um entra. Com porteiro mas sem regras, ainda assim entra qualquer um. O ponto inteiro é a regra "padrão é negar; só passa quem está na lista". Em rede, isso se chama "default deny" e é a postura mínima de qualquer servidor exposto à internet.`,
      `O Linux tem firewall embutido no kernel desde sempre. O sistema antigo se chama iptables: você escreve regras em uma cadeia (chain) — INPUT (chega para mim), OUTPUT (sai daqui), FORWARD (passa por mim) — e cada pacote é avaliado contra as regras em ordem. O sistema novo, que está substituindo o iptables aos poucos, é o nftables: mesma ideia, sintaxe mais limpa, mais rápido, suporta IPv4 e IPv6 numa só regra. No Debian 11 em diante, o "iptables" que você digita já é, por baixo, um wrapper que traduz para nftables. Os dois coexistem sem brigar.`,
      `UFW (Uncomplicated Firewall) é uma camada amigável por cima do iptables/nftables. Você não precisa decorar tabelas, cadeias e jumps — só dizer "libera porta 22, bloqueia o resto" e ele monta as regras complicadas embaixo. Para 95% dos servidores, UFW resolve. Quando você precisa de regra esquisita (NAT, port forwarding, marcação de pacote), aí desce para nftables direto. UFW não substitui o nftables: complementa. Quando você roda "sudo ufw allow 22/tcp", ele gera regras nftables equivalentes. "sudo nft list ruleset" mostra as regras de verdade que estão no kernel.`,
      `A filosofia certa para servidor é simples e tem nome: default deny incoming + default allow outgoing. Tradução: bloqueia tudo que CHEGA (a não ser portas que você explicitamente liberou) e permite tudo que SAI (você confia nas suas próprias requisições). Isso te protege de mil bots fazendo varredura na internet sem te impedir de baixar pacote, fazer git pull, navegar. Na configuração inversa (default allow incoming) qualquer serviço que você instale sem perceber fica exposto: aquele Redis na porta 6379 sem senha, aquele MongoDB na 27017 esquecido, aquele monitor antigo na 8080. Default deny = você decide o que sai pela vitrine.`,
      `O ritual de habilitar UFW pela primeira vez em servidor remoto tem UMA regra que se você esquecer paga caro: libera a porta SSH ANTES de habilitar. Sequência correta: "sudo ufw allow 22/tcp" (ou "sudo ufw allow OpenSSH") → depois "sudo ufw default deny incoming" → "sudo ufw default allow outgoing" → e só então "sudo ufw enable". Se você inverter a ordem, no momento que o enable é executado o kernel derruba sua sessão SSH ativa porque a regra de bloqueio entrou em vigor antes da regra de exceção. Você fica trancado fora e só recupera com console físico ou KVM.`,
      `Regras por porta são o caso comum: "sudo ufw allow 80/tcp" libera HTTP, "sudo ufw allow 443/tcp" libera HTTPS, "sudo ufw allow 3000:3010/tcp" libera um intervalo, "sudo ufw deny 23" bloqueia explicitamente o telnet (que já estaria bloqueado pelo default deny, mas explicitar deixa a intenção clara). Você pode também usar "perfis de aplicação" — atalhos que o UFW conhece para serviços populares: "sudo ufw allow 'Nginx Full'" libera 80 e 443 do nginx de uma vez, "sudo ufw allow OpenSSH" libera o SSH. Liste com "sudo ufw app list".`,
      `Regras por origem são o nível seguinte de granularidade: "sudo ufw allow from 192.168.1.0/24" libera tudo vindo da sua rede local; "sudo ufw allow from 203.0.113.50 to any port 22" libera SSH SOMENTE de um IP específico (ótimo para máquina de admin); "sudo ufw deny from 1.2.3.4" bloqueia um IP malvado. A ordem das regras importa — UFW avalia de cima para baixo e a primeira que casa decide. Use "sudo ufw insert 1 deny from 1.2.3.4" para inserir uma regra no topo da lista.`,
      `Quando o UFW não basta, você desce para o nftables direto. A sintaxe é mais legível que iptables: "sudo nft list ruleset" mostra todas as regras ativas, organizadas em tabelas e cadeias. Para um exemplo prático, redirecionar porta 80 para 8080 em nftables é uma regra DNAT na tabela nat hook prerouting. Se você precisa fazer NAT, balanceamento ou qualquer coisa que UFW não cobre, abra o /etc/nftables.conf e escreva nele. Sintaxe inteira documentada em "man nft". Para Debian moderno, o iptables ainda funciona como interface compatível mas internamente vira nft.`,
      `Erro clássico número um: "abri a porta no firewall mas o serviço continua inacessível". Pode ser três coisas. Primeira: o serviço não está escutando em todas as interfaces, só em 127.0.0.1 (localhost). Cheque com "sudo ss -tulpn | grep PORTA" — precisa aparecer 0.0.0.0:PORTA ou *:PORTA, não 127.0.0.1:PORTA. Segunda: tem outro firewall na frente (cloud provider, roteador) bloqueando. Terceira: o pacote nem chega — seu IP público está errado, ou tem NAT no caminho. Diagnóstico: rode "sudo tcpdump -i any port PORTA" e tente conectar de fora. Se não aparece pacote nem em tcpdump, o problema está antes do servidor.`,
      `Ao terminar este capítulo, você consegue chegar em um servidor zerado, configurar UFW com defaults seguros sem se trancar fora, abrir só as portas que precisa, listar e auditar as regras existentes, e diagnosticar por que aquela porta "não abre" mesmo com regra liberando. Em servidor de produção, isso é a diferença entre invadido em horas ou seguro por meses.`,
    ],
    commands: [
      {
        command: "sudo ufw enable",
        description: "Liga o firewall. Aplica todas as regras configuradas.",
        example: "sudo ufw enable",
      },
      {
        command: "sudo ufw disable",
        description: "Desliga o firewall (regras ficam guardadas mas inativas).",
        example: "sudo ufw disable",
      },
      {
        command: "sudo ufw status verbose",
        description: "Estado atual + defaults + lista de regras.",
        example: "sudo ufw status verbose",
        output: `Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing)

To                Action      From
22/tcp            ALLOW IN    Anywhere
80/tcp            ALLOW IN    Anywhere
443/tcp           ALLOW IN    Anywhere`,
      },
      {
        command: "sudo ufw default",
        description: "Define a política padrão para entrada e saída.",
        example: "sudo ufw default deny incoming",
      },
      {
        command: "sudo ufw allow",
        description: "Cria uma regra liberando porta, intervalo, serviço ou origem.",
        example: "sudo ufw allow 22/tcp",
        flags: [
          { flag: "<porta>/tcp", description: "Libera porta TCP" },
          { flag: "<porta>/udp", description: "Libera porta UDP" },
          { flag: "from <ip>", description: "Libera só desse IP" },
          { flag: "from <rede> to any port <porta>", description: "Libera porta só dessa rede" },
        ],
      },
      {
        command: "sudo ufw deny",
        description: "Cria regra explícita de bloqueio (vai antes do default).",
        example: "sudo ufw deny from 203.0.113.99",
      },
      {
        command: "sudo ufw delete",
        description: "Remove uma regra. Pelo número (de 'status numbered') ou repetindo a regra.",
        example: "sudo ufw delete 3",
      },
      {
        command: "sudo ufw status numbered",
        description: "Lista regras com número, útil para deletar.",
        example: "sudo ufw status numbered",
      },
      {
        command: "sudo ufw app list",
        description: "Lista perfis de aplicação conhecidos (atalhos para conjuntos de portas).",
        example: "sudo ufw app list",
      },
      {
        command: "sudo ufw reset",
        description: "Apaga TODAS as regras e desabilita. Recomeça do zero.",
        example: "sudo ufw reset",
      },
      {
        command: "sudo ufw logging",
        description: "Liga/desliga e ajusta o nível de logs (off, low, medium, high, full).",
        example: "sudo ufw logging medium",
      },
      {
        command: "sudo nft list ruleset",
        description: "Mostra TODAS as regras nftables ativas no kernel (incluindo as geradas pelo UFW).",
        example: "sudo nft list ruleset",
      },
      {
        command: "sudo iptables -L -n -v",
        description: "Lista regras iptables (no Debian moderno é wrapper para nftables).",
        example: "sudo iptables -L -n -v",
        flags: [
          { flag: "-n", description: "Numérico (não resolve DNS)" },
          { flag: "-v", description: "Verbose, mostra contadores" },
          { flag: "-L INPUT", description: "Só a chain INPUT" },
        ],
      },
      {
        command: "sudo ss -tulpn",
        description: "Confirma em qual interface e porta cada serviço está escutando.",
        example: "sudo ss -tulpn | grep :80",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Antes de habilitar UFW via SSH, libere a porta 22",
        content:
          "Sequência obrigatória: sudo ufw allow 22/tcp → sudo ufw default deny incoming → sudo ufw enable. Inverter quebra sua sessão SSH no exato instante do enable e te tranca fora.",
      },
      {
        type: "info",
        title: "iptables hoje é wrapper para nftables",
        content:
          "No Debian 11+ o comando 'iptables' que você digita gera regras nftables por baixo. Os dois sistemas convivem; o iptables clássico está sendo aposentado aos poucos.",
      },
      {
        type: "warning",
        title: "Porta liberada no firewall mas serviço inacessível?",
        content:
          "Verifique com 'sudo ss -tulpn' se o serviço escuta em 0.0.0.0 (todas as interfaces) e não só em 127.0.0.1 (localhost). Esse é o erro mais comum.",
      },
      {
        type: "success",
        title: "Use perfis de aplicação quando existirem",
        content:
          "'sudo ufw allow Nginx Full' é mais legível e atualiza sozinho se o nginx mudar de porta. 'sudo ufw app list' mostra os perfis disponíveis.",
      },
    ],
    practiceLabs: [
      {
        title: "Setup completo de firewall em servidor web",
        goal: "Configurar UFW para um servidor que precisa servir HTTP, HTTPS e aceitar SSH apenas da sua rede.",
        steps: [
          "Instalar o UFW.",
          "Liberar SSH ANTES de qualquer outra coisa.",
          "Definir defaults seguros (deny in, allow out).",
          "Liberar HTTP e HTTPS.",
          "Habilitar o firewall.",
          "Verificar status e testar uma porta bloqueada.",
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

# 7) Bonus: limitar SSH a IPs especificos (so apos confirmar acesso normal)
# sudo ufw delete allow 22/tcp
# sudo ufw allow from 192.168.1.0/24 to any port 22

# 8) Teste de porta bloqueada (em outra maquina)
# nc -zv SEU_IP 8080  -> deve dar timeout/connection refused`,
        expected:
          "Status: active. Defaults deny/allow corretos. Regras 22, 80 e 443 listadas. Tentativa em outras portas dá timeout/connection refused.",
        verify:
          "Em outra máquina, 'curl http://SEU_IP' deve responder; 'nc -zv SEU_IP 8080' deve falhar com timeout. Em servidor exposto, sudo ufw status numbered mostra contadores subindo nas portas legítimas.",
      },
      {
        title: "Inspecionar as regras nftables que o UFW gerou",
        goal: "Ver por baixo o que o UFW realmente fez no kernel.",
        steps: [
          "Listar o ruleset completo do nftables.",
          "Identificar a tabela e cadeia criadas pelo UFW.",
          "Comparar com 'iptables -L' para ver a tradução.",
        ],
        command: `# Ruleset completo
sudo nft list ruleset | less

# Só as tabelas do UFW
sudo nft list table inet ufw-after-input 2>/dev/null
sudo nft list table inet ufw-before-input 2>/dev/null

# Compatibilidade iptables
sudo iptables -L INPUT -n -v --line-numbers`,
        verify:
          "Você consegue identificar as regras INPUT que o UFW criou e ver os contadores (packets, bytes) subindo conforme conexões legítimas chegam.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a configuração mínima segura de UFW para um servidor SSH?",
        hint: "Pense na ordem: regra de exceção primeiro, default depois, enable por último.",
        answer:
          "sudo ufw allow 22/tcp; sudo ufw default deny incoming; sudo ufw default allow outgoing; sudo ufw enable. Sempre nessa ordem para não se trancar fora.",
      },
      {
        id: 2,
        question: "Como liberar HTTPS para todo mundo?",
        hint: "Porta 443, protocolo TCP.",
        answer: "sudo ufw allow 443/tcp (ou sudo ufw allow https, que é um perfil conhecido).",
      },
      {
        id: 3,
        question: "Como permitir SSH apenas vindo de uma sub-rede específica?",
        hint: "Use 'from <rede> to any port <porta>'.",
        answer:
          "sudo ufw allow from 192.168.1.0/24 to any port 22 proto tcp. Combinado com a remoção da regra geral (sudo ufw delete allow 22/tcp), bloqueia SSH do resto do mundo.",
      },
      {
        id: 4,
        question: "Como apagar uma regra específica do UFW?",
        hint: "Dois jeitos: pelo número ou repetindo a regra com 'delete'.",
        answer:
          "Pelo número: sudo ufw status numbered → sudo ufw delete N. Ou repetindo: sudo ufw delete allow 80/tcp. As duas formas funcionam.",
      },
      {
        id: 5,
        question: "Por que é perigoso fazer 'sudo ufw enable' via SSH sem antes liberar a porta 22?",
        hint: "O default é deny incoming. Pense no momento exato em que o enable é executado.",
        answer:
          "No instante em que o enable aplica as regras, sua conexão SSH ativa é cortada porque o tráfego de entrada na 22 passa a ser negado. Volta só com console físico/KVM remoto.",
      },
      {
        id: 6,
        question: "Como ver as regras nftables reais que estão ativas no kernel?",
        hint: "Comando moderno do nftables, lista tudo.",
        answer:
          "sudo nft list ruleset. Mostra todas as tabelas, cadeias e regras (incluindo as geradas pelo UFW por baixo).",
      },
      {
        id: 7,
        question: "Você liberou a porta 5432 (PostgreSQL) no UFW mas ninguém consegue conectar de fora. Qual a primeira coisa a checar?",
        hint: "O firewall pode estar OK mas o serviço pode estar escutando só em localhost.",
        answer:
          "Rode 'sudo ss -tulpn | grep 5432'. Se aparecer '127.0.0.1:5432', o PostgreSQL só escuta localhost. Edite postgresql.conf, mude listen_addresses para '*' e reinicie.",
      },
      {
        id: 8,
        question: "Qual a diferença entre iptables e nftables?",
        hint: "Pense em geração e sintaxe.",
        answer:
          "iptables é o sistema antigo, com sintaxe verbosa e separação IPv4/IPv6. nftables é a substituição moderna: sintaxe mais limpa, mais rápido, regras unificadas para IPv4 e IPv6. No Debian moderno o iptables que você digita já é wrapper para nftables.",
      },
    ],
    references: [
      { title: "Manual do ufw", url: "https://manpages.debian.org/trixie/ufw/ufw.8.en.html" },
      { title: "Debian Wiki — nftables", url: "https://wiki.debian.org/nftables" },
      { title: "Manual do nft", url: "https://manpages.debian.org/trixie/nftables/nft.8.en.html" },
      { title: "Ubuntu Community — UFW", url: "https://help.ubuntu.com/community/UFW" },
      { title: "netfilter.org — nftables wiki", url: "https://wiki.nftables.org/" },
    ],
  },

  {
    id: "ssh-conexao",
    title: "SSH — Conexão Remota Segura",
    icon: "🔑",
    category: "Rede e Segurança",
    description: "O canivete suíço da administração remota: conectar, autenticar com chave, copiar arquivos, criar túneis e endurecer o servidor.",
    objectives: [
      "Entender a diferença entre senha e chave SSH e por que chave é o padrão profissional",
      "Gerar par de chaves moderno (ed25519) e instalar no servidor com ssh-copy-id",
      "Configurar ~/.ssh/config para tratar múltiplos servidores como apelidos",
      "Endurecer /etc/ssh/sshd_config sem se trancar fora",
      "Copiar arquivos com scp e rsync e usar túnel para acessar serviço interno do servidor",
      "Diagnosticar erros comuns: permission denied, host key changed, connection refused",
    ],
    content: [
      `SSH (Secure Shell) é como você administra qualquer máquina Linux que não está na sua frente. Pense nele como um cabo invisível que você estende do seu computador até o servidor remoto, com criptografia ponta-a-ponta. Tudo que você digita vai cifrado; tudo que volta também. Antes do SSH existia o Telnet, que mandava senha em texto puro pela rede — qualquer um sniffando o tráfego via tudo. SSH resolveu isso em 1995 e desde então é o padrão. Hoje, é a primeira coisa que você instala em servidor e a última que você desliga.`,
      `Um detalhe que confunde no começo: SSH é cliente E servidor. O comando "ssh" no seu computador é o cliente. No servidor, roda um daemon chamado "sshd" (SSH daemon) escutando na porta 22 (por padrão). Quando você digita "ssh fulano@servidor", o cliente abre uma conexão TCP para a porta 22 do servidor, o sshd responde, os dois negociam uma chave de sessão criptografada e a partir daí toda a conversa é cifrada. Mesmo que alguém intercepte os pacotes, vê só lixo binário.`,
      `Existem duas formas principais de autenticação. A mais simples é por senha: você digita a senha do usuário no servidor toda vez que conecta. Funciona, mas tem dois problemas — você fica refém da força da senha (e bots fazem milhões de tentativas por minuto contra a porta 22) e você precisa lembrar/digitar a cada conexão. A forma profissional é por chave pública: você gera um par de chaves (uma pública e uma privada) no seu computador, instala a pública no servidor, e o servidor confia em qualquer um que prove ter a chave privada correspondente. Não há senha trafegando, não há senha para força bruta atacar, e você conecta sem digitar nada. É mais seguro E mais cômodo.`,
      `O ritual de configurar chave SSH tem três passos. Primeiro: gerar o par no SEU computador com "ssh-keygen -t ed25519 -C 'meu-email@exemplo.com'". O ed25519 é o algoritmo moderno: rápido, seguro, com chave pequena. Aceite o caminho padrão (~/.ssh/id_ed25519) e decida sobre passphrase — uma senha que protege a chave privada caso roubem seu computador. Segundo: copiar a chave pública para o servidor com "ssh-copy-id fulano@servidor". Esse comando pede a senha do servidor uma última vez, depois adiciona sua ~/.ssh/id_ed25519.pub ao ~/.ssh/authorized_keys do servidor. Terceiro: testar com "ssh fulano@servidor" — não deve mais pedir senha. A chave privada (id_ed25519, sem .pub) NUNCA sai do seu computador. A pública pode espalhar à vontade.`,
      `Permissões dos arquivos em ~/.ssh são INFLEXÍVEIS — o SSH RECUSA usar arquivos com permissões muito abertas, como medida de segurança. As permissões corretas são: ~/.ssh deve ter 700 (drwx------), a chave privada (id_ed25519) deve ter 600 (rw-------), a pública pode ter 644, o authorized_keys 600, e o known_hosts 644. Se algo estiver com 666 ou 777, o SSH ignora o arquivo e cai para senha ou recusa a conexão. Mensagem de erro típica: "WARNING: UNPROTECTED PRIVATE KEY FILE!". Conserto: "chmod 600 ~/.ssh/id_ed25519".`,
      `Quando você tem múltiplos servidores (e em pouco tempo você terá), digitar "ssh -p 2222 deploy@meu-servidor.com.br -i ~/.ssh/chave-especifica" toda vez vira tortura. A solução é o ~/.ssh/config: um arquivo de texto onde você define apelidos. Coloque um bloco "Host servidor1" com HostName, User, Port e IdentityFile, e a partir daí "ssh servidor1" basta. Esse arquivo também aceita ProxyJump (para passar por bastion) e LocalForward (para criar túnel automático). Depois que você descobre, nunca mais vive sem.`,
      `Endurecimento do servidor SSH (no /etc/ssh/sshd_config) é a primeira coisa a fazer em qualquer servidor exposto à internet. As mudanças que importam: PermitRootLogin no (root nunca loga direto, sempre sudo de usuário comum); PasswordAuthentication no (depois de confirmar que sua chave funciona — senão você se tranca fora); MaxAuthTries 3 (limita tentativas por conexão); AllowUsers fulano beltrano (lista branca de quem pode logar). Depois "sudo sshd -t" para validar a sintaxe ANTES de reiniciar — se der erro e você reiniciar, o sshd não sobe e você fica sem SSH. "sudo systemctl restart ssh" e abra OUTRA sessão para testar enquanto a sessão atual ainda está viva como rede de segurança.`,
      `Copiar arquivos via SSH tem dois comandos clássicos. O scp ("secure copy") tem sintaxe parecida com cp: "scp arquivo.txt fulano@servidor:/tmp/" envia, "scp fulano@servidor:/tmp/log.txt ./" baixa, e -r para pastas. Funciona, mas é lento e não tem retomada se cair no meio. O rsync é melhor em todos os aspectos: incremental (só copia o que mudou), com compressão (-z), com barra de progresso (-P) e com modo "espelho" (--delete remove no destino o que não existe na origem). Comando que você decora: "rsync -avzP --delete origem/ destino/". A barra final na origem importa: "pasta/" copia o conteúdo, "pasta" copia a pasta inteira.`,
      `Túneis SSH são uma das funcionalidades mais úteis e menos conhecidas. Imagine que o servidor tem um banco de dados rodando em localhost:5432 que NÃO está exposto na internet (corretamente). Para acessar do seu PC, você roda "ssh -L 5432:localhost:5432 servidor" e deixa essa conexão aberta. Tudo que vai para localhost:5432 no seu PC é tunelado pelo SSH e sai em localhost:5432 no servidor. Você conecta seu DBeaver/pgAdmin em "localhost" e está acessando o banco remoto, com toda a segurança do SSH. Variações: -R faz o caminho inverso (o servidor acessa porta sua), -D abre um proxy SOCKS (use o SSH como VPN improvisada para o navegador), -J faz ProxyJump (pula por bastion automaticamente).`,
      `Erros típicos que todo mundo encontra cedo: "Permission denied (publickey)" — sua chave não está em authorized_keys do servidor, ou as permissões estão erradas, ou você está tentando como usuário errado. "Connection refused" — o sshd não está rodando ou está em outra porta. "Connection timed out" — firewall bloqueando ou IP/host errado. "REMOTE HOST IDENTIFICATION HAS CHANGED!" — a chave do servidor mudou (servidor reinstalado ou ataque MITM). Para limpar known_hosts: "ssh-keygen -R hostname". Para debugar: "ssh -vvv usuario@servidor" mostra cada passo da negociação.`,
      `Ao terminar este capítulo, você gera chaves SSH com confiança, configura ~/.ssh/config para tratar 10 servidores como 10 apelidos, endurece o sshd_config sem se trancar fora, copia gigabytes com rsync de forma incremental e usa túneis para acessar bancos internos sem expô-los. Em qualquer empresa que mexe com servidores Linux, essas são habilidades obrigatórias do dia 1.`,
      "[expansão 06/08] **Cliente e servidor são a mesma história vista dos dois lados.** Aqui (cliente): `~/.ssh/config`, `IdentitiesOnly`, `ProxyJump`, known_hosts. No capítulo `ssh-server`: `sshd_config`, `PasswordAuthentication`, `AllowUsers`, banners. Alinhe a chave que você gera aqui com a `authorized_keys` de lá.",

      "Checklist rápido de conexão segura: ed25519, agente (`ssh-add`), config por Host, e nunca reutilizar a mesma chave de notebook em CI sem restrição `from=`/`command=` quando fizer sentido.",

    ],
    commands: [
      {
        command: "ssh",
        description: "Conecta em servidor remoto.",
        example: "ssh fulano@192.168.1.50",
        flags: [
          { flag: "-p PORTA", description: "Porta SSH não-padrão (default 22)" },
          { flag: "-i CHAVE", description: "Usa essa chave privada específica" },
          { flag: "-v / -vv / -vvv", description: "Verbose, útil para debugar" },
          { flag: "-X", description: "Encaminha X11 (rodar app gráfico remoto)" },
          { flag: "-L L:H:R", description: "Local port forward (túnel)" },
          { flag: "-R R:H:L", description: "Remote port forward (caminho inverso)" },
          { flag: "-D PORTA", description: "SOCKS proxy dinâmico" },
          { flag: "-J BASTION", description: "ProxyJump por máquina intermediária" },
          { flag: "-N", description: "Não executa comando, só mantém o túnel" },
        ],
      },
      {
        command: "ssh-keygen",
        description: "Gera par de chaves SSH.",
        example: "ssh-keygen -t ed25519 -C 'meu-email@exemplo.com'",
        flags: [
          { flag: "-t ed25519", description: "Algoritmo moderno (recomendado)" },
          { flag: "-t rsa -b 4096", description: "Para servidores muito antigos sem ed25519" },
          { flag: "-C 'comentario'", description: "Comentário (geralmente seu email)" },
          { flag: "-f arquivo", description: "Caminho de saída diferente do padrão" },
          { flag: "-R hostname", description: "Remove host do known_hosts" },
        ],
      },
      {
        command: "ssh-copy-id",
        description: "Copia sua chave pública para o ~/.ssh/authorized_keys do servidor.",
        example: "ssh-copy-id fulano@servidor",
        flags: [
          { flag: "-i ~/.ssh/chave.pub", description: "Especifica qual chave copiar" },
          { flag: "-p 2222", description: "Porta SSH não-padrão" },
        ],
      },
      {
        command: "ssh-add",
        description: "Adiciona chave ao agente SSH (digita passphrase uma vez por sessão).",
        example: "ssh-add ~/.ssh/id_ed25519",
      },
      {
        command: "scp",
        description: "Copia arquivos via SSH (sintaxe parecida com cp).",
        example: "scp -r pasta/ fulano@servidor:/tmp/",
        flags: [
          { flag: "-r", description: "Recursivo (pastas)" },
          { flag: "-P PORTA", description: "Porta SSH (P maiúsculo aqui!)" },
          { flag: "-i CHAVE", description: "Chave privada específica" },
        ],
      },
      {
        command: "rsync",
        description: "Sincronização incremental via SSH. Melhor que scp para pastas grandes.",
        example: "rsync -avzP --delete pasta/ servidor:/destino/",
        flags: [
          { flag: "-a", description: "Modo arquivo (preserva tudo: permissões, timestamps, links)" },
          { flag: "-v", description: "Verbose" },
          { flag: "-z", description: "Compressão durante a transferência" },
          { flag: "-P", description: "Progresso + retoma transferência parcial" },
          { flag: "--delete", description: "Remove no destino arquivos ausentes na origem (espelho)" },
          { flag: "--exclude", description: "Padrão a ignorar" },
          { flag: "-n", description: "Dry-run, simula sem alterar" },
        ],
      },
      {
        command: "sftp",
        description: "Cliente FTP-like sobre SSH (interativo: ls, cd, get, put).",
        example: "sftp fulano@servidor",
      },
      {
        command: "ssh -L",
        description: "Local port forward — túnel da sua máquina para porta no servidor.",
        example: "ssh -L 5432:localhost:5432 servidor -N",
      },
      {
        command: "ssh -D",
        description: "SOCKS proxy dinâmico. Use o SSH como proxy/VPN do navegador.",
        example: "ssh -D 1080 servidor -N",
      },
      {
        command: "ssh -J",
        description: "ProxyJump — pula por bastion automaticamente para chegar no destino.",
        example: "ssh -J bastion@bastion.com fulano@interno",
      },
      {
        command: "sshd -t",
        description: "Valida sintaxe do /etc/ssh/sshd_config sem reiniciar (silêncio = OK).",
        example: "sudo sshd -t",
      },
      {
        command: "systemctl restart ssh",
        description: "Reinicia o serviço SSH para aplicar mudanças no sshd_config.",
        example: "sudo systemctl restart ssh",
      },
      {
        command: "# EXPANSAO_0608_CMDS",
        description:
          "Marcador interno de expansão 06/08 — ignore na prática.",
        example: "true",
      },
      {
        command: "man ssh_config | head -n 30",
        description:
          "Opções do cliente — leia Host, IdentityFile, ProxyJump.",
        example: "man ssh_config | head -n 30",
      },
      {
        command: "test -f ~/.ssh/config && sed -n '1,40p' ~/.ssh/config || echo 'sem ~/.ssh/config ainda'",
        description:
          "Config local do cliente (não commitar segredos).",
        example: "test -f ~/.ssh/config && sed -n '1,40p' ~/.ssh/config || echo 'sem ~/.ssh/config ainda'",
      },
      {
        command: "ssh -G localhost 2>/dev/null | egrep 'user |hostname |identityfile |pubkeyauthentication' | head",
        description:
          "Config efetiva que o ssh aplicaria (exemplo local).",
        example: "ssh -G localhost 2>/dev/null | egrep 'user |hostname |identityfile |pubkeyauthentication' | head",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Antes de PasswordAuthentication=no, TESTE a chave",
        content:
          "Faça login com chave em outra sessão. Confirmou que entrou sem pedir senha? Só então desabilite PasswordAuthentication. Se a chave estiver errada e você desabilitar senha, perde o acesso.",
      },
      {
        type: "danger",
        title: "Nunca compartilhe a chave PRIVADA",
        content:
          "id_ed25519 (sem .pub) é só sua. Não suba para repositório, não mande por chat. A pública (.pub) pode espalhar livremente. Se a privada vazar, gere outra imediatamente e remova a pública correspondente de todos os authorized_keys.",
      },
      {
        type: "info",
        title: "Mudar a porta 22 reduz noise, não vulnerabilidade",
        content:
          "Bots automatizados varrem a 22 em massa, mas escaneiam todas as portas se quiserem te atacar. Mudar para 2222 só limpa logs. Segurança real vem de chave + fail2ban + firewall + senha forte.",
      },
      {
        type: "success",
        title: "Use ~/.ssh/config desde o primeiro servidor",
        content:
          "Apelidos são gratuitos e economizam digitação infinita. Combinado com ssh-add, você conecta em 10 servidores sem digitar nem senha nem caminho de chave.",
      },
      { type: "info", title: "EXPANSAO_0608_TIPS", content: "marcador interno", },
      {
        type: "info",
        title: "Par com ssh-server",
        content:
          "Mesma narrativa: chave no cliente, authorized_keys no servidor.",
      },
      {
        type: "warning",
        title: "IdentitiesOnly yes",
        content:
          "Evita o ssh tentar 15 chaves e tomar deny do fail2ban.",
      },
    ],
    practiceLabs: [
      {
        title: "Configurar acesso SSH sem senha em 4 passos",
        goal: "Setup definitivo de chave SSH para um servidor, com endurecimento opcional.",
        steps: [
          "Gerar par de chaves no seu PC (se ainda não tem).",
          "Copiar a pública para o servidor.",
          "Testar login (não deve pedir senha).",
          "No servidor, endurecer sshd_config após confirmar.",
        ],
        command: `# === NO SEU PC ===

# 1) Tem chave?
ls ~/.ssh/id_ed25519* 2>/dev/null
# Se nao mostrou nada:
ssh-keygen -t ed25519 -C "$USER@$(hostname)"
# Aceite default. Passphrase opcional (recomendada se PC pode ser roubado)

# 2) Copiar para o servidor
ssh-copy-id fulano@meu-servidor
# Vai pedir a senha do servidor (so essa vez)

# 3) Testar - nao deve pedir senha
ssh fulano@meu-servidor

# === NO SERVIDOR (apos confirmar acesso por chave funcionar) ===

# 4) Backup do sshd_config
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak

# 5) Endurecer
sudo sed -i 's/^#\\?PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
sudo sed -i 's/^#\\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config

# 6) Validar config
sudo sshd -t
# (silencio = OK; se mostrar erro, NAO reinicie)

# 7) Reiniciar
sudo systemctl restart ssh

# 8) ABRA OUTRA SESSAO SSH para confirmar
# Se nova sessao funcionar, OK
# Se nao, restaure: sudo cp /etc/ssh/sshd_config.bak /etc/ssh/sshd_config && sudo systemctl restart ssh`,
        expected:
          "Login sem senha funcionando, sshd_config endurecido, login com senha recusado, sessão antiga ainda viva como rede de segurança até confirmar.",
        verify:
          "'ssh servidor' entra direto. 'ssh -o PreferredAuthentications=password servidor' falha com Permission denied. 'sudo journalctl -u ssh | tail' mostra os logins por chave.",
      },
      {
        title: "Acessar banco de dados interno via túnel SSH",
        goal: "Conectar no PostgreSQL do servidor (rodando só em localhost:5432) a partir do seu PC, sem expor a porta na internet.",
        steps: [
          "Confirmar que o postgres do servidor escuta só em localhost.",
          "Abrir túnel local na sua máquina.",
          "Conectar com cliente psql (ou DBeaver) em localhost.",
          "Fechar túnel quando terminar.",
        ],
        command: `# 1) (No servidor) confirmar que postgres escuta so em local
sudo ss -tulpn | grep 5432
# Esperado: 127.0.0.1:5432 (nao 0.0.0.0:5432)

# 2) (No seu PC) abrir tunel - deixa esse terminal aberto
ssh -L 5432:localhost:5432 fulano@servidor -N
# -N = nao executa comando, so mantem o tunel
# (use -f para ir para background)

# 3) (Em outro terminal no PC) conectar como se fosse local
psql -h localhost -U postgres
# ou no DBeaver: Host=localhost, Port=5432

# 4) Quando terminar, Ctrl+C no terminal do tunel`,
        expected:
          "Cliente psql conecta em localhost:5432 e está acessando o banco no servidor remoto, com toda criptografia do SSH.",
        verify:
          "Você executa SELECT no banco remoto sem que a porta 5432 esteja exposta na internet. 'sudo ss -tulpn | grep 5432' no servidor continua mostrando só 127.0.0.1.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como gerar uma chave SSH moderna?",
        hint: "Algoritmo recomendado é ed25519.",
        answer:
          "ssh-keygen -t ed25519 -C 'meu-email@exemplo.com'. ed25519 é rápido, seguro e tem chave pequena. RSA 4096 só se o servidor for muito antigo.",
      },
      {
        id: 2,
        question: "Como copiar sua chave pública para o servidor?",
        hint: "Existe um comando dedicado para isso.",
        answer:
          "ssh-copy-id fulano@servidor. Ele pede a senha do servidor uma última vez e adiciona sua ~/.ssh/id_ed25519.pub ao authorized_keys do usuário lá.",
      },
      {
        id: 3,
        question: "Quais permissões corretas para ~/.ssh, chave privada e authorized_keys?",
        hint: "SSH recusa arquivos com permissões muito abertas.",
        answer:
          "~/.ssh: 700 (drwx------). Chave privada (id_ed25519): 600 (rw-------). Pública: 644. authorized_keys: 600. Conserto se vier errado: chmod 700 ~/.ssh && chmod 600 ~/.ssh/id_ed25519.",
      },
      {
        id: 4,
        question: "Como conectar em servidor com SSH na porta 2222?",
        hint: "Flag -p maiúsculo? minúsculo?",
        answer:
          "ssh -p 2222 fulano@servidor (porta no ssh é -p minúsculo). No scp é -P maiúsculo — pegadinha clássica.",
      },
      {
        id: 5,
        question: "O que faz o ProxyJump (-J)?",
        hint: "Útil quando você precisa passar por um bastion para chegar em máquina interna.",
        answer:
          "Conecta no destino passando por uma máquina intermediária (bastion). 'ssh -J bastion@bastion.com user@interno' usa o bastion como salto, sem você ter que fazer ssh em duas etapas.",
      },
      {
        id: 6,
        question: "Como copiar uma pasta gigante via SSH com retomada se cair?",
        hint: "rsync com flag -P.",
        answer:
          "rsync -avzP --delete pasta/ servidor:/destino/. -a preserva tudo, -v verbose, -z comprime, -P mostra progresso e retoma transferência parcial. --delete espelha (remove no destino o que não existe na origem).",
      },
      {
        id: 7,
        question: "Você recebe 'REMOTE HOST IDENTIFICATION HAS CHANGED!' ao conectar. O que aconteceu?",
        hint: "A chave pública do servidor mudou desde a última conexão.",
        answer:
          "A chave do servidor é diferente da que está em ~/.ssh/known_hosts. Pode ser servidor reinstalado (esperado) ou ataque MITM (perigoso). Confirme com o admin do servidor. Se for legítimo, limpe com 'ssh-keygen -R hostname' e reconecte.",
      },
      {
        id: 8,
        question: "Como validar a sintaxe do sshd_config ANTES de reiniciar?",
        hint: "Flag -t do próprio sshd.",
        answer:
          "sudo sshd -t. Silêncio = OK. Se mostrar erro, NÃO reinicie — corrija primeiro. Reiniciar com config quebrada faz o sshd não subir e você fica sem SSH.",
      },
    ],
    references: [
      { title: "Manual do ssh", url: "https://manpages.debian.org/trixie/openssh-client/ssh.1.en.html" },
      { title: "Manual do sshd_config", url: "https://manpages.debian.org/trixie/openssh-server/sshd_config.5.en.html" },
      { title: "Manual do ssh_config (cliente)", url: "https://manpages.debian.org/trixie/openssh-client/ssh_config.5.en.html" },
      { title: "Debian Wiki — SSH", url: "https://wiki.debian.org/SSH" },
      { title: "Mozilla OpenSSH guidelines", url: "https://infosec.mozilla.org/guidelines/openssh" },
    ],
  },

  {
    id: "hardening",
    title: "Segurança, Hardening e GPG",
    icon: "🔒",
    category: "Rede e Segurança",
    description: "Práticas essenciais para reduzir superfície de ataque: updates automáticos, fail2ban, AppArmor, GPG e auditoria com Lynis.",
    objectives: [
      "Habilitar atualizações de segurança automáticas com unattended-upgrades",
      "Instalar e configurar fail2ban contra brute-force em SSH e outros serviços",
      "Endurecer o kernel com sysctl e entender o papel do AppArmor",
      "Gerar e usar chaves GPG para assinar e cifrar arquivos",
      "Usar Lynis para auditoria automática e priorizar melhorias",
      "Aplicar o princípio do menor privilégio em usuários e serviços",
    ],
    content: [
      `Hardening é o processo de "endurecer" o sistema — reduzir superfície de ataque, fechar portas, restringir privilégios, automatizar atualizações. Pense em uma casa: ter porta serve, ter fechadura serve mais, ter alarme serve mais ainda, e ter câmera com aviso para o vizinho serve mais ainda. Cada camada que você adiciona aumenta o custo do atacante. Em servidor exposto à internet sem hardening, bots de varredura encontram a máquina em minutos e tentam invadir em horas. Com hardening básico bem feito, você sobe para "alvo difícil" e a maioria dos atacantes vai embora procurar alvo mais fácil.`,
      `A primeira camada, e a mais importante, é manter o sistema atualizado. Patches de segurança fecham vulnerabilidades conhecidas. Em servidor, o pacote unattended-upgrades aplica atualizações de SEGURANÇA automaticamente, sem você precisar lembrar. Instale com "sudo apt install unattended-upgrades apt-listchanges" e configure com "sudo dpkg-reconfigure -plow unattended-upgrades". Por padrão, ele só instala o que está na suite "security" (correções urgentes), sem mexer em pacotes "stable" normais — o risco de quebrar serviço fica baixo. Teste com "sudo unattended-upgrades --dry-run -d" para ver o que seria atualizado.`,
      `A segunda camada é o fail2ban. Bots fazem milhares de tentativas de login SSH por minuto contra qualquer servidor exposto. Mesmo com senha forte, isso enche logs e consome recursos. O fail2ban monitora os logs e bane IPs após N falhas consecutivas. Padrão razoável: 5 tentativas em 10 minutos = ban de 1 hora. Configure em /etc/fail2ban/jail.local (NUNCA edite jail.conf — ele é sobrescrito em update). A jail [sshd] vem ativa por padrão. Você pode adicionar jails para apache, nginx, postfix, dovecot, etc. Monitore com "sudo fail2ban-client status sshd".`,
      `A terceira camada é o firewall — vimos no capítulo de UFW. Default deny incoming + allow outgoing + portas explicitamente liberadas. Combinado com fail2ban, você fecha 99% dos vetores comuns. A quarta camada é remover serviços desnecessários: cada daemon escutando uma porta é mais uma superfície de ataque. Liste com "sudo systemctl list-unit-files --state=enabled --type=service" e desabilite o que não usa: bluetooth e cups em servidor, ModemManager, avahi, etc. "sudo systemctl disable --now servico" mata e impede de subir.`,
      `Sysctl hardening é ajustar parâmetros do kernel para reduzir vetores de ataque. Crie /etc/sysctl.d/99-hardening.conf com configurações como net.ipv4.tcp_syncookies=1 (anti SYN flood), net.ipv4.conf.all.accept_redirects=0 (anti ICMP redirect), net.ipv4.conf.all.log_martians=1 (loga pacotes com source IP impossível), net.ipv4.icmp_echo_ignore_broadcasts=1 (anti Smurf). Aplique com "sudo sysctl --system". Essas configurações não fazem milagre mas eliminam classes inteiras de ataques antigos sem nenhum custo de performance.`,
      `AppArmor é o sandboxing nativo do Debian. Cada perfil define o que um processo PODE fazer (quais arquivos lê, quais sockets abre, quais comandos executa). Se o nginx for invadido por uma vulnerabilidade, mesmo assim o atacante fica preso ao perfil — não consegue ler /etc/shadow nem rodar bash. Vem habilitado por padrão. Confira com "sudo aa-status" — mostra perfis em modo "enforce" (bloqueia o que não é permitido) e "complain" (só loga). Pacotes adicionais "apparmor-profiles" e "apparmor-profiles-extra" trazem perfis para mais aplicações.`,
      `GPG (GNU Privacy Guard) é a ferramenta de criptografia assimétrica do mundo livre. Mesmo conceito do SSH (par de chaves pública/privada), mas serve para CIFRAR arquivos e mensagens, ASSINAR para provar autoria, e VERIFICAR integridade de pacotes baixados. O Debian usa GPG internamente: cada repositório APT é assinado com a chave do mantenedor, e o apt verifica a assinatura antes de instalar. Por isso "apt update" reclama se faltar a chave de um repositório novo. Para usar pessoalmente: "gpg --full-generate-key" cria seu par, "gpg --export -a" exporta a pública (para compartilhar), "gpg --encrypt -r destinatario arquivo" cifra para alguém, "gpg --sign arquivo" assina, "gpg --verify arquivo.sig" verifica.`,
      `Adicionar uma chave GPG ao APT (para repositório de terceiros, tipo Docker ou Node) tem um ritual específico no Debian moderno: NÃO use mais "apt-key add" (depreciado). O jeito certo é baixar o keyring para /etc/apt/keyrings/ e referenciar no sources.list.d com "signed-by". Exemplo: "curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg" e depois "deb [signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian stable" no sources. Esse esquema isola a chave a UM repositório, em vez de confiar globalmente.`,
      `Princípio do menor privilégio é a regra de ouro: cada usuário e cada serviço deve ter o MÍNIMO de permissão necessário para fazer o trabalho. Não rode aplicação como root. Cada serviço com seu próprio usuário (nginx é www-data, postgres é postgres, redis é redis). Sudo só quando precisa, e idealmente exigindo senha (não NOPASSWD). Cada pessoa com sua própria conta — nada de compartilhar credencial. Senhas fortes e únicas, gerenciadas em KeePassXC ou Bitwarden. 2FA onde o serviço suportar (no SSH você pode adicionar libpam-google-authenticator). Cada uma dessas práticas isolada parece pequena; o conjunto delas é o que separa servidor seguro de servidor invadido.`,
      `Lynis é a ferramenta de auditoria automática. "sudo apt install lynis && sudo lynis audit system" roda centenas de checagens — kernel, autenticação, logs, malware, configurações de serviços — e te dá uma nota (hardening index) de 0 a 100, mais uma lista de WARNINGs e SUGGESTIONs em ordem de prioridade. Servidor sem hardening: 50-60. Após aplicar as práticas básicas: 75-90. Acima de 90 já é territorio profissional sério. As suggestions vêm com link para documentação. É a ferramenta mais útil para descobrir o que está faltando — rode mensalmente em servidores de produção.`,
      `Ao terminar este capítulo, você consegue chegar em um servidor recém-instalado, aplicar em uma hora as 5 práticas que mais reduzem risco (updates automáticos, fail2ban, firewall, SSH endurecido, remoção de serviços inúteis), gerar e usar chaves GPG para assinar arquivos e adicionar repositórios de terceiros corretamente, e rodar Lynis mensalmente para acompanhar a evolução. Em qualquer empresa que leva segurança a sério, isso é checklist do dia 1 de qualquer servidor.`,
      "[expansão 06/08] Separe mentalmente três camadas que o capítulo antigo misturava: (1) **identidade e confiança de pacotes** (GPG/signed-by, keyrings), (2) **defesa de borda e auth** (SSH chave, fail2ban, UFW), (3) **postura do kernel/usuário** (sysctl, umask, AppArmor). Cada uma tem ferramenta e ritual próprios — falhar em uma não se ‘cura’ com a outra.",

      "Sobre logs de login no Debian novo: `last`/`lastb` clássicos cedem espaço ao **wtmpdb** em várias imagens. Se `lastb` falhar, tente `wtmpdb lastb` ou `journalctl -u ssh` / `-u sshd`. Não trate a ausência do binário antigo como ‘servidor limpo’.",

      "sysctl útil em VPS (com backup de conf): `net.ipv4.conf.all.rp_filter`, `net.ipv4.tcp_syncookies=1`, desligar IP forward se não for roteador. Grave drop-ins em `/etc/sysctl.d/` e aplique com `sysctl --system`. GPG de repo não é sysctl — vá para keyrings.",

    ],
    commands: [
      {
        command: "sudo dpkg-reconfigure -plow unattended-upgrades",
        description: "Configura/ativa atualizações automáticas de segurança.",
        example: "sudo dpkg-reconfigure -plow unattended-upgrades",
      },
      {
        command: "sudo unattended-upgrades --dry-run",
        description: "Simula o que seria atualizado (sem aplicar).",
        example: "sudo unattended-upgrades --dry-run -d",
      },
      {
        command: "sudo apt list --upgradable",
        description: "Lista pacotes com atualização pendente.",
        example: "sudo apt list --upgradable 2>/dev/null",
      },
      {
        command: "sudo fail2ban-client status",
        description: "Status geral do fail2ban e jails ativas.",
        example: "sudo fail2ban-client status",
      },
      {
        command: "sudo fail2ban-client status sshd",
        description: "Estatísticas e IPs banidos da jail SSH.",
        example: "sudo fail2ban-client status sshd",
        output: `Status for the jail: sshd
|- Filter
|  |- Currently failed: 2
|  |- Total failed:     427
|  \`- File list:        /var/log/auth.log
\`- Actions
   |- Currently banned: 3
   |- Total banned:     45
   \`- Banned IP list:   45.155.x.x 167.99.x.x 92.118.x.x`,
      },
      {
        command: "sudo fail2ban-client unban",
        description: "Desbanir um IP (caso tenha banido um seu por engano).",
        example: "sudo fail2ban-client unban 192.168.1.50",
      },
      {
        command: "sudo aa-status",
        description: "Status do AppArmor — perfis em enforce/complain.",
        example: "sudo aa-status",
      },
      {
        command: "sudo systemctl list-unit-files --state=enabled",
        description: "Lista serviços habilitados (revisar e desabilitar não-essenciais).",
        example: "sudo systemctl list-unit-files --state=enabled --type=service",
      },
      {
        command: "sudo sysctl --system",
        description: "Aplica todas as configs sysctl de /etc/sysctl.conf e /etc/sysctl.d/.",
        example: "sudo sysctl --system",
      },
      {
        command: "gpg --full-generate-key",
        description: "Gera par de chaves GPG (interativo).",
        example: "gpg --full-generate-key",
      },
      {
        command: "gpg --list-keys",
        description: "Lista chaves públicas no seu keyring.",
        example: "gpg --list-keys",
      },
      {
        command: "gpg --export -a",
        description: "Exporta chave pública em ASCII (para compartilhar).",
        example: "gpg --export -a 'Seu Nome' > pubkey.asc",
      },
      {
        command: "gpg --encrypt -r",
        description: "Cifra arquivo para um destinatário.",
        example: "gpg --encrypt -r destinatario@email.com arquivo.txt",
      },
      {
        command: "gpg --sign",
        description: "Assina arquivo (prova autoria).",
        example: "gpg --detach-sign arquivo.tar.gz",
      },
      {
        command: "gpg --verify",
        description: "Verifica assinatura.",
        example: "gpg --verify arquivo.tar.gz.sig arquivo.tar.gz",
      },
      {
        command: "sudo lynis audit system",
        description: "Auditoria automática completa, com nota e sugestões priorizadas.",
        example: "sudo lynis audit system",
      },
      {
        command: "# EXPANSAO_0608_CMDS",
        description:
          "Marcador interno de expansão 06/08 — ignore na prática.",
        example: "true",
      },
      {
        command: "wtmpdb lastb 2>/dev/null | head || lastb 2>/dev/null | head || journalctl -u ssh --since today --no-pager | tail",
        description:
          "Tentativas de login falhas no stack moderno ou fallback.",
        example: "wtmpdb lastb 2>/dev/null | head || lastb 2>/dev/null | head || journalctl -u ssh --since today --no-pager | tail",
      },
      {
        command: "sysctl net.ipv4.tcp_syncookies net.ipv4.ip_forward 2>/dev/null || true",
        description:
          "Amostra de sysctl de rede — confira antes de mudar.",
        example: "sysctl net.ipv4.tcp_syncookies net.ipv4.ip_forward 2>/dev/null || true",
      },
      {
        command: "ls /etc/apt/keyrings 2>/dev/null; man apt-secure 2>/dev/null | head -n 5 || true",
        description:
          "Onde vivem chaves modernas de repositório (não misturar com fail2ban).",
        example: "ls /etc/apt/keyrings 2>/dev/null; man apt-secure 2>/dev/null | head -n 5 || true",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Servidor exposto sem hardening = invadido em horas",
        content:
          "Bots fazem milhões de tentativas SSH/HTTP por minuto. Servidor com 'admin/admin' na porta 22 é invadido em poucas horas. Mínimo absoluto: SSH só por chave, fail2ban, firewall, unattended-upgrades.",
      },
      {
        type: "info",
        title: "Hardening é processo, não evento",
        content:
          "Não é 'ativei e acabou'. Logs precisam ser monitorados, fail2ban ajustado, atualizações verificadas. Em produção, alguém olha tudo ao menos semanalmente. Lynis mensal ajuda muito.",
      },
      {
        type: "success",
        title: "Lynis é seu melhor amigo",
        content:
          "sudo apt install lynis && sudo lynis audit system. Nota de 0-100 + lista priorizada de melhorias. Excelente para saber por onde começar e medir progresso.",
      },
      {
        type: "warning",
        title: "apt-key add está depreciado",
        content:
          "Não use 'apt-key add' para repositórios novos. O jeito moderno é baixar o keyring para /etc/apt/keyrings/ e usar [signed-by=...] no sources.list.d. Isola a chave a um único repositório.",
      },
      { type: "info", title: "EXPANSAO_0608_TIPS", content: "marcador interno", },
      {
        type: "warning",
        title: "lastb sumiu?",
        content:
          "No Debian recente use wtmpdb ou journal — o conceito permanece.",
      },
      {
        type: "info",
        title: "Três gavetas",
        content:
          "GPG ≠ fail2ban ≠ sysctl. Audite cada uma.",
      },
      {
        type: "danger",
        title: "sysctl copiado da internet",
        content:
          "Pode derrubar rede/VPN — teste e documente.",
      },
    ],
    practiceLabs: [
      {
        title: "Hardening mínimo de servidor SSH em 5 minutos",
        goal: "Aplicar as 4 medidas mais impactantes em sequência: updates, fail2ban, firewall e SSH endurecido.",
        steps: [
          "Habilitar updates automáticos.",
          "Instalar e configurar fail2ban.",
          "Confirmar UFW ativo com SSH liberado.",
          "Endurecer sshd_config (PasswordAuthentication=no).",
          "Conferir que tudo está rodando.",
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
sudo systemctl status fail2ban --no-pager
sudo ufw status verbose
sudo fail2ban-client status sshd`,
        expected:
          "fail2ban e ufw ativos, ssh recusa login com senha. Em servidor exposto, dentro de 1h fail2ban-client status sshd já mostra IPs banidos.",
        verify:
          "Quatro confirmações: 'sudo systemctl is-active fail2ban' = active. 'sudo ufw status' = active. 'ssh -o PreferredAuthentications=password servidor' = Permission denied. 'sudo lynis audit system' agora dá nota mais alta que antes.",
      },
      {
        title: "Auditoria automática com Lynis",
        goal: "Rodar Lynis e usar as suggestions para melhorar o sistema.",
        steps: [
          "Instalar lynis.",
          "Rodar audit system.",
          "Ler warnings e suggestions.",
          "Aplicar pelo menos 3 melhorias e re-auditar.",
        ],
        command: `# 1) Instalar
sudo apt install -y lynis

# 2) Auditar
sudo lynis audit system

# 3) Ver score atual
sudo lynis show details
grep '^Hardening index' /var/log/lynis.log

# 4) Ver suggestions priorizadas
grep -A1 'Suggestion' /var/log/lynis-report.dat | head -40

# 5) Apos aplicar mudancas, re-auditar
sudo lynis audit system
# Comparar score - deve subir`,
        verify:
          "Score inicial provavelmente 50-65. Após aplicar suggestions de prioridade alta, sobe para 75+. Suggestions vêm com explicação e link para documentação.",
      },
      {
        title: "Gerar chave GPG e cifrar um arquivo",
        goal: "Criar par GPG, cifrar um arquivo para si mesmo e decifrar de volta.",
        steps: [
          "Gerar par de chaves.",
          "Listar chaves para confirmar.",
          "Cifrar um arquivo para si mesmo.",
          "Decifrar o resultado.",
        ],
        command: `# 1) Gerar par (interativo - escolha RSA 4096 ou ed25519, sem expiracao se for so teste)
gpg --full-generate-key

# 2) Confirmar
gpg --list-keys
gpg --list-secret-keys

# 3) Cifrar arquivo para voce mesmo
echo "segredo importante" > teste.txt
gpg --encrypt -r 'Seu Nome' teste.txt
ls teste.txt*
# Aparece teste.txt.gpg

# 4) Decifrar
gpg --decrypt teste.txt.gpg

# 5) Bonus: assinar
gpg --detach-sign teste.txt
gpg --verify teste.txt.sig teste.txt`,
        verify:
          "teste.txt.gpg é binário ilegível. gpg --decrypt produz o conteúdo original. gpg --verify confirma assinatura como Good signature.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como habilitar atualizações de segurança automáticas no Debian?",
        hint: "Pacote dedicado + dpkg-reconfigure.",
        answer:
          "sudo apt install unattended-upgrades apt-listchanges → sudo dpkg-reconfigure -plow unattended-upgrades. Por padrão instala só correções da suite security, sem mexer em pacotes stable normais.",
      },
      {
        id: 2,
        question: "Para que serve fail2ban e qual o padrão razoável de configuração?",
        hint: "Banha IPs após N falhas.",
        answer:
          "Banha IPs após N tentativas de login falhas, defesa contra brute-force em SSH e outros serviços. Padrão: 5 tentativas em 10 minutos = ban de 1 hora. Configure em /etc/fail2ban/jail.local.",
      },
      {
        id: 3,
        question: "Por que mudar a porta SSH para 2222 não te torna seguro?",
        hint: "Pense em scan vs brute-force.",
        answer:
          "Atacantes escaneiam todas as portas se quiserem te atacar. Mudar a porta só reduz o NOISE de bots automatizados (que vão na 22 padrão). Segurança real vem de chave SSH + fail2ban + firewall + senhas fortes.",
      },
      {
        id: 4,
        question: "Como ver os IPs banidos pelo fail2ban na jail SSH?",
        hint: "Comando de cliente do fail2ban.",
        answer:
          "sudo fail2ban-client status sshd. Mostra contagem total, banidos atualmente, lista de IPs, e quantos foram banidos no histórico.",
      },
      {
        id: 5,
        question: "Como saber se o AppArmor está ativo e quais perfis estão em enforce?",
        hint: "Comando começa com aa-.",
        answer:
          "sudo aa-status. Mostra módulo carregado, número de perfis em enforce, em complain, processos confinados e nomes dos perfis ativos.",
      },
      {
        id: 6,
        question: "Qual ferramenta automatiza auditoria de segurança e dá uma nota de hardening?",
        hint: "Começa com L.",
        answer:
          "Lynis: sudo apt install lynis && sudo lynis audit system. Roda centenas de checagens, dá nota 0-100 e lista warnings + suggestions priorizadas.",
      },
      {
        id: 7,
        question: "Qual o jeito moderno de adicionar uma chave GPG de repositório APT?",
        hint: "apt-key add está depreciado. Pense em /etc/apt/keyrings/ e signed-by.",
        answer:
          "Baixe a chave para /etc/apt/keyrings/ usando 'gpg --dearmor -o /etc/apt/keyrings/X.gpg' e referencie no sources.list.d com 'deb [signed-by=/etc/apt/keyrings/X.gpg] URL suite componentes'. Isso isola a confiança a um único repo.",
      },
      {
        id: 8,
        question: "Como cifrar um arquivo com GPG para enviar para outra pessoa?",
        hint: "Você precisa da chave pública dela primeiro.",
        answer:
          "Importe a chave pública dela com 'gpg --import pubkey.asc'. Depois 'gpg --encrypt -r email-dela arquivo.txt' gera arquivo.txt.gpg, que só ela consegue decifrar com a chave privada dela.",
      },
    ],
    references: [
      { title: "Debian Wiki — Hardening", url: "https://wiki.debian.org/Hardening" },
      { title: "Debian Securing Manual", url: "https://www.debian.org/doc/manuals/securing-debian-manual/" },
      { title: "Lynis (CISOfy)", url: "https://cisofy.com/lynis/" },
      { title: "Fail2ban Wiki", url: "https://github.com/fail2ban/fail2ban/wiki" },
      { title: "GnuPG Handbook", url: "https://www.gnupg.org/gph/en/manual.html" },
    ],
  },
    {
    id: "stacks-rede",
    title: "NetworkManager vs ifupdown vs networkd — qual stack e quando",
    icon: "🔀",
    category: "Rede e Segurança",
    description: "Descubra qual gerenciador de rede o seu Debian usa de verdade, onde cada um guarda configuração, e como evitar dois stacks brigando pela mesma interface até a rede \"sumir\".",
    level: "intermediario",
    readMinutes: 18,
    objectives: [
      "Identificar qual stack está ativa (NM, ifupdown ou networkd)",
      "Saber onde cada um grava a configuração",
      "Ler estado com ip, nmcli e networkctl sem chute",
      "Evitar dois gerenciadores DHCP na mesma NIC",
      "Escolher stack com critério de desktop vs servidor",
      "Diagnosticar \"rede morta após upgrade\" começando pela stack",
    ],
    content: [
      "No Debian a \"rede\" não é um único programa com um único arquivo mágico. É uma família de gerenciadores que, em momentos diferentes da história da distro, foram a escolha padrão. Se você não sabe qual deles está mandando no seu host, qualquer tutorial da internet vira roleta: você edita /etc/network/interfaces enquanto o NetworkManager sobrescreve tudo no próximo boot, ou mexe no NetworkManager enquanto o systemd-networkd já tomou a interface. O sintoma clássico é exatamente o que assusta: \"a rede sumiu depois que eu só mudei uma linha\".",
      "Pense em três porteiros possíveis na porta da sua máquina. O **ifupdown** é o porteiro clássico dos anos 2000: arquivo /etc/network/interfaces, serviço networking, linguagem simples de iface eth0 inet dhcp. O **NetworkManager** (NM) é o porteiro de notebook e desktop: Wi-Fi, VPN, hotspot, perfis por conexão, nmcli e nmtui. O **systemd-networkd** é o porteiro enxuto de servidor e cloud: arquivos .network em /etc/systemd/network/, pouca mágica, bom para automação. Os três resolvem o mesmo problema — \"como esta NIC ganha IP e rota\" — com filosofias diferentes.",
      "Como descobrir quem manda, na ordem barata. Primeiro: ip -br link e ip -br addr (estado bruto, independente de gerenciador). Segundo: systemctl is-active NetworkManager systemd-networkd networking — veja o que está active. Terceiro: se NM existir, nmcli general e nmcli device status. Quarto: se networkd estiver no jogo, networkctl status. Quinto: leia /etc/network/interfaces só se o ifupdown ainda for a fonte da verdade. Em imagem cloud recente, networkd (às vezes com cloud-init gerando a config) é comum; em instalador Debian com task de desktop, NM costuma dominar; em servidor minimal clássico, ainda se vê ifupdown.",
      "Onde cada um mora de verdade. ifupdown: /etc/network/interfaces e interfaces.d/. NetworkManager: conexões em /etc/NetworkManager/system-connections/ (arquivos keyfile) e overrides em conf.d. networkd: /etc/systemd/network/*.network e *.netdev. Netplan (mais Ubuntu, às vezes colado em imagens) não é o terceiro gerenciador: é um gerador que renderiza um dos três por baixo — se existir, leia o YAML e confira o renderer antes de editar o destino.",
      "Jargões que valem ouro. **managed** no NM: a interface está sob controle dele. **unmanaged**: o NM deixa a NIC para outro stack (é assim que se evita briga). **renderer**: quem aplica a config no fim. **DHCP vs static**. **Predictable names** (enp0s3, ens18) no lugar de eth0. Quando dois stacks tentam DHCP na mesma interface, você ganha corrida de boot, IP sumindo, rota default oscilando — parece fantasma, é arquitetura.",
      "Caminho feliz de operação. Em desktop: deixe o NM mandar; use nmtui/nmcli; não edite interfaces à mão. Em servidor cloud: networkd (ou o que a imagem já trouxe) + cloud-init; versionar os .network. Em lab de aprendizado: um stack só por máquina. Se precisar migrar, desabilite o antigo com systemctl disable --now, marque a NIC unmanaged no NM se for o caso, aplique a config nova, teste com ping a um IP (não a um nome) e só então confie no DNS.",
      "Armadilhas. Editar três lugares \"por precaução\". Assumir eth0 eterno. Rodar apt full-upgrade e achar que a stack mudou sozinha quando na verdade o nome da interface ou o cloud-init reescreveu o arquivo. Fechar o SSH no meio de uma migração de rede sem console do provedor. Copiar netplan de Ubuntu em Debian puro sem verificar se o pacote existe.",
      "Quando NÃO mexer: host de produção estável cuja stack você não entende ainda — primeiro só observe e documente. Quando SIM: lab, pós-upgrade com rede morta, consolidar uma imagem da equipe numa stack única. Ao terminar este capítulo você aponta com segurança qual gerenciador manda, onde editar, e como provar com ip/nmcli/networkctl sem rezar.",
    ],
    commands: [
      {
        command: "ip -br link; ip -br addr",
        description: "Estado bruto das interfaces e endereços — independente do gerenciador. Sempre comece aqui.",
        example: "ip -br link; ip -br addr",
        output: `lo               UNKNOWN        00:00:00:00:00:00 <LOOPBACK,UP,LOWER_UP>
enp0s3           UP             08:00:27:a1:b2:c3 <BROADCAST,MULTICAST,UP,LOWER_UP>
lo               UNKNOWN        127.0.0.1/8 ::1/128
enp0s3           UP             10.0.2.15/24 fe80::a00:27ff:fea1:b2c3/64`,
      },
      {
        command: "systemctl is-active NetworkManager systemd-networkd networking 2>/dev/null; systemctl is-enabled NetworkManager systemd-networkd networking 2>/dev/null",
        description: "Quem está active e enabled: NM, networkd e/ou serviço networking (ifupdown).",
        example: "systemctl is-active NetworkManager systemd-networkd networking 2>/dev/null",
        output: `inactive
inactive
active`,
      },
      {
        command: "nmcli -t -f RUNNING,STATE g 2>/dev/null || echo \"nmcli indisponivel\"",
        description: "Se o NetworkManager estiver instalado, mostra se o daemon está running.",
        example: "nmcli general 2>/dev/null | head || echo nmcli indisponivel",
      },
      {
        command: "networkctl status 2>/dev/null | head -n 40 || echo \"networkctl indisponivel\"",
        description: "Visão do systemd-networkd: links, estado operacional, se está managing.",
        example: "networkctl 2>/dev/null || true",
      },
      {
        command: "ip route; ip -4 route show default",
        description: "Rota default e tabela — prova se há gateway depois de identificar a stack.",
        example: "ip route",
        output: `default via 10.0.2.2 dev enp0s3 proto dhcp src 10.0.2.15 metric 100
10.0.2.0/24 dev enp0s3 proto kernel scope link src 10.0.2.15 metric 100`,
      },
      {
        command: "ls /etc/network/interfaces /etc/NetworkManager/system-connections /etc/systemd/network 2>/dev/null | head -n 40",
        description: "Mapa dos diretórios clássicos de cada stack — veja o que existe no disco.",
        example: "ls /etc/network/interfaces /etc/systemd/network 2>/dev/null",
      },
      {
        command: "sed -n \"1,80p\" /etc/network/interfaces 2>/dev/null || echo \"sem interfaces (ok se nao usa ifupdown)\"",
        description: "Conteúdo do ifupdown, se ainda for a fonte da verdade.",
        example: "sed -n \"1,40p\" /etc/network/interfaces 2>/dev/null",
      },
      {
        command: "man interfaces",
        description: "Manual do formato ifupdown — ainda válido em muitos servidores Debian.",
        example: "man interfaces",
      },
      {
        command: "man nmcli",
        description: "Referência do cliente NetworkManager.",
        example: "man nmcli",
      },
      {
        command: "man systemd.network",
        description: "Formato dos arquivos .network do networkd.",
        example: "man systemd.network",
      },
      {
        command: "ping -c 2 1.1.1.1; ping -c 2 deb.debian.org",
        description: "Separe L3 (IP) de DNS (nome): se o primeiro passa e o segundo falha, a stack de IP está ok e o resolver não.",
        example: "ping -c 2 1.1.1.1",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Dois DHCP na mesma NIC",
        content: "NM + ifupdown/networkd ativos na mesma interface = corrida no boot e IP fantasma. Um stack por NIC.",
      },
      {
        type: "warning",
        title: "SSH sem console",
        content: "Nunca migre stack de rede em VPS só pelo SSH sem console do provedor. Um erro de rota te tranca fora.",
      },
      {
        type: "info",
        title: "Ping IP antes de nome",
        content: "1.1.1.1 testa rota; deb.debian.org testa DNS. Não misture o diagnóstico.",
      },
      {
        type: "success",
        title: "Documente a stack",
        content: "Uma linha no runbook: \"este host usa networkd + .network em /etc/systemd/network\". Salva horas.",
      },
    ],
    practiceLabs: [
      {
        title: "Laudo da stack em 10 minutos",
        goal: "Saber qual gerenciador manda e onde está a config, com evidência salva.",
        steps: [
          "Rode ip -br link e ip -br addr",
          "Rode systemctl is-active nos três serviços",
          "Liste os diretórios de config que existem",
          "Salve o laudo em ~/stack-rede.txt",
        ],
        command: "{ echo \"=== link ===\"; ip -br link; echo; echo \"=== addr ===\"; ip -br addr; echo; echo \"=== units ===\"; systemctl is-active NetworkManager systemd-networkd networking 2>/dev/null; echo; echo \"=== dirs ===\"; ls /etc/network/interfaces /etc/NetworkManager/system-connections /etc/systemd/network 2>/dev/null; } | tee ~/stack-rede.txt",
        verify: "O arquivo tem quatro blocos e você consegue dizer em uma frase qual stack manda.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Quais são as três stacks clássicas de rede no Debian?",
        answer: "ifupdown (/etc/network/interfaces), NetworkManager e systemd-networkd.",
      },
      {
        id: 2,
        question: "Por que ip -br addr vem antes de editar qualquer arquivo?",
        answer: "Porque mostra o estado real da interface independente de qual gerenciador deveria estar no controle.",
      },
      {
        id: 3,
        question: "O que acontece se NM e ifupdown gerenciam a mesma NIC?",
        answer: "Corrida de configuração: DHCP duplicado, rota default oscilando, sintoma de \"rede sumiu\".",
      },
      {
        id: 4,
        question: "Onde o networkd guarda config?",
        answer: "/etc/systemd/network/*.network (e .netdev).",
      },
      {
        id: 5,
        question: "Ping em 1.1.1.1 funciona e em deb.debian.org não. O que isso indica?",
        answer: "L3/rota ok; problema de DNS/resolver, não de \"cabo\" ou IP.",
      },
      {
        id: 6,
        question: "Netplan é um quarto gerenciador?",
        answer: "Não — é um gerador/renderer que por baixo aciona NM ou networkd (mais comum no Ubuntu).",
      },
      {
        id: 7,
        question: "Como deixar o NM longe de uma interface de servidor?",
        answer: "Marcar a interface como unmanaged no NetworkManager e deixar networkd/ifupdown cuidar dela.",
      },
      {
        id: 8,
        question: "Qual o risco de migrar stack só por SSH sem console?",
        answer: "Um erro de configuração corta o acesso remoto e você fica trancado fora da máquina.",
      },
    ],
    references: [
      { title: "Debian Wiki — NetworkConfiguration", url: "https://wiki.debian.org/NetworkConfiguration" },
      { title: "man interfaces", url: "https://manpages.debian.org/interfaces" },
      { title: "man systemd.network", url: "https://manpages.debian.org/systemd.network" },
      { title: "NetworkManager documentation", url: "https://networkmanager.dev/docs/" },
    ],
  },
  {
    id: "dns-cliente",
    title: "DNS no cliente — resolv.conf, resolvectl e split DNS",
    icon: "🧭",
    category: "Rede e Segurança",
    description:
      "Entenda como o Debian resolve nomes: /etc/resolv.conf, systemd-resolved, stubs e por que 'ping 8.8.8.8 funciona mas o domínio não'.",
    objectives: [
      "Ler /etc/resolv.conf com desconfiança iluminada",
      "Usar resolvectl status quando resolved estiver ativo",
      "Distinguir falha de DNS de falha de rota",
      "Testar com dig/getent sem ferramentas obscuras",
      "Saber o que é o stub 127.0.0.53",
      "Evitar editar resolv.conf à mão se for gerenciado",
    ],
    content: [
      "Rede no IP e DNS são problemas diferentes. Se `ping 1.1.1.1` vai e `ping debian.org` falha, o culpado clássico é **resolução de nomes**. No Linux moderno o arquivo `/etc/resolv.conf` ainda é a interface legada, mas quem **escreve** nele pode ser NetworkManager, systemd-resolved, dhcpcd ou cloud-init. Editar na mão e ver a mudança sumir no reboot é o rito de passagem.",

      "Com **systemd-resolved**, é comum `resolv.conf` apontar para `127.0.0.53` (stub local). A config 'de verdade' aparece em `resolvectl status`: DNS por link, domínios de busca, DNSSEC. **Split DNS**: VPN manda `*.corp` para um resolver interno e o resto para a internet — se quebrar, um domínio resolve e outro não.",

      "Ferramentas: `getent hosts nome` usa a stack do sistema (nsswitch). `dig`/`drill` falam com um resolver específico. `ping` depende de resolver + ICMP. Ordem de debug: IP ok? → resolv.conf/resolvectl → dig @resolver → /etc/nsswitch.conf se ficar exótico.",

      "Jargões. **stub resolver**. **DNS over TLS** (em setups avançados). **search domain**. **TTL**. **NXDOMAIN** vs timeout (nome não existe vs resolver inalcançável). Timeout cheira a firewall/UDP 53 bloqueado; NXDOMAIN é resposta negativa legítima.",

      "Quando NÃO: hardcodar 8.8.8.8 em todo servidor corporativo que precisa de zonas internas; desligar resolved sem saber quem assume. Quando SIM: VPS nova com DNS errado do DHCP, VPN, troubleshooting 'site não abre' com IP ok.",

      "Ao terminar você lê resolv.conf, interpreta 127.0.0.53, roda dig/getent e classifica o problema como rota vs DNS em uma frase.",

    ],
    commands: [
      {
        command: "cat /etc/resolv.conf",
        description:
          "Servidores e search atuais (pode ser symlink gerenciado).",
        example: "cat /etc/resolv.conf",
      },
      {
        command: "ls -l /etc/resolv.conf",
        description:
          "Se é symlink para stub do resolved ou arquivo estático.",
        example: "ls -l /etc/resolv.conf",
      },
      {
        command: "resolvectl status 2>/dev/null | head -n 40 || echo 'resolvectl indisponivel'",
        description:
          "Visão por interface quando systemd-resolved está no circuito.",
        example: "resolvectl status 2>/dev/null | head -n 40",
      },
      {
        command: "getent hosts debian.org",
        description:
          "Resolução via libc/NSS — o que a maioria dos apps usa.",
        example: "getent hosts debian.org",
      },
      {
        command: "dig +short debian.org @1.1.1.1 2>/dev/null || host debian.org 1.1.1.1 2>/dev/null || echo 'instale dnsutils para dig/host'",
        description:
          "Consulta direta a um resolver público (requer pacote dnsutils em muitos hosts).",
        example: "dig +short debian.org @1.1.1.1",
      },
      {
        command: "dig +short debian.org 2>/dev/null || getent hosts debian.org",
        description:
          "Consulta usando o resolver padrão do sistema.",
        example: "dig debian.org +noall +answer 2>/dev/null | head",
      },
      {
        command: "resolvectl query debian.org 2>/dev/null | head || true",
        description:
          "Query via resolved com metadados.",
        example: "resolvectl query debian.org 2>/dev/null | head",
      },
      {
        command: "grep -vE '^#|^$' /etc/nsswitch.conf | head",
        description:
          "Ordem hosts/dns/mdns — raro mexer, útil saber que existe.",
        example: "grep hosts /etc/nsswitch.conf",
      },
      {
        command: "man resolvectl",
        description:
          "Comandos do cliente resolved.",
        example: "man resolvectl",
      },
      {
        command: "man resolv.conf",
        description:
          "Formato clássico nameserver/search/options.",
        example: "man resolv.conf",
      },
    ],
    tips: [
      {
        type: "success",
        title: "IP ok + nome falha = DNS",
        content:
          "Separe os problemas antes de reiniciar o stack inteiro.",
      },
      {
        type: "warning",
        title: "Editar resolv.conf gerenciado",
        content:
          "A mudança pode sumir; configure NM/networkd/resolved/cloud-init.",
      },
      {
        type: "info",
        title: "127.0.0.53",
        content:
          "Stub local do systemd-resolved — não é 'DNS da operadora' em si.",
      },
      {
        type: "danger",
        title: "DNS de VPN esquecido",
        content:
          "Split DNS mal feito vaza nomes internos ou quebra resolução externa.",
      },
    ],
    practiceLabs: [
      {
        title: "Diagnóstico DNS em 5 minutos",
        goal: "Provar se o problema é DNS ou não, com evidência.",
        steps: [
          "ping -c1 a um IP público (se política permitir)",
          "getent hosts debian.org",
          "cat resolv.conf + ls -l",
          "resolvectl status ou dig",
          "Anotar conclusão em ~/dns-lab.txt",
        ],
        command: "{ echo '=== resolv ==='; ls -l /etc/resolv.conf; cat /etc/resolv.conf; echo; echo '=== getent ==='; getent hosts debian.org; } | tee ~/dns-lab.txt",
        verify:
          "Você escreve: 'rota OK/NOK; DNS OK/NOK; resolver em uso é …'.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Sinal clássico de falha só de DNS?",
        answer:
          "Conectividade por IP funciona e nomes não resolvem (ou o contrário em casos de firewall de ICMP — confirme com tcp/https).",
      },
      {
        id: 2,
        question: "O que é 127.0.0.53 em resolv.conf?",
        answer:
          "Endereço stub típico do systemd-resolved no host local.",
      },
      {
        id: 3,
        question: "getent hosts vs dig?",
        answer:
          "getent usa NSS do sistema; dig consulta DNS diretamente (opcionalmente @servidor).",
      },
      {
        id: 4,
        question: "Onde ver DNS por interface com resolved?",
        answer:
          "resolvectl status",
      },
      {
        id: 5,
        question: "Por que edição manual de resolv.conf 'não gruda'?",
        answer:
          "Outro serviço regenera o arquivo no lease DHCP/boot.",
      },
      {
        id: 6,
        question: "O que é search domain?",
        answer:
          "Sufixo acrescentado a nomes curtos na resolução.",
      },
      {
        id: 7,
        question: "NXDOMAIN significa?",
        answer:
          "O resolver respondeu que o nome não existe.",
      },
      {
        id: 8,
        question: "Timeout na query sugere?",
        answer:
          "Resolver inalcançável, UDP/53 bloqueado, ou rede quebrada até o DNS.",
      },
    ],
    references: [
      { title: "man resolv.conf", url: "https://manpages.debian.org/resolv.conf" },
      { title: "man resolvectl", url: "https://manpages.debian.org/resolvectl" },
      { title: "man systemd-resolved", url: "https://manpages.debian.org/systemd-resolved" },
      { title: "Wiki — DNS", url: "https://wiki.debian.org/DNS" },
    ],
  },
  {
    id: "rede-troubleshoot",
    title: "Roteamento e troubleshooting de rede — ip route, ss e método",
    icon: "🩺",
    category: "Rede e Segurança",
    description:
      "Um roteiro ético de diagnóstico: link, endereço, rota, porta e DNS — com iproute2 e ss, sem vazar IP/rota da infraestrutura em exemplos públicos.",
    objectives: [
      "Seguir uma ordem fixa de diagnóstico",
      "Usar ip link/addr/route sem ifconfig legado",
      "Ver portas e processos com ss",
      "Interpretar default route ausente",
      "Separar problema local vs gateway vs DNS",
      "Evitar expor dados sensíveis de VPS em prints",
    ],
    content: [
      "Troubleshooting bom é **checklist**, não feitiçaria. Ordem que evita perda de tempo: (1) cabo/link (`ip link` — state UP/DOWN) (2) endereço (`ip addr`) (3) rota default (`ip route`) (4) alcance do gateway (5) alcance de um IP externo (6) DNS (7) porta da aplicação (`ss`). Pular para 'reinstalar NetworkManager' no passo 1 é teatro.",

      "**iproute2** (`ip`, `ss`) é o padrão atual; `ifconfig`/`netstat` são legado. `ss -tulpn` mostra sockets escutando e o processo (`-p` pode pedir root). `ip route get 1.1.1.1` revela por qual interface/gateway o kernel mandaria o pacote — ouro para multi-homing e VPN.",

      "Sintomas e hipóteses. Tudo DOWN: driver/firmware/NIC desabilitada. UP sem IP: DHCP/static/stack. IP sem default route: DHCP incompleto ou static mal colado. Default ok, externo falha: gateway/firewall/NAT. Localhost da app falha: serviço não escuta ou escuta só em 127.0.0.1.",

      "Ética e privacidade: em material didático e tickets, **não cole** tabelas de rota com IPs internos de cliente, bastion ou RFC1918 sensível sem necessidade. Redija `gateway`/`via` de forma genérica quando for print público. O mesmo espírito da regra do projeto de não vazar IP da VPS da equipe.",

      "Ferramentas extras com parcimônia: `ping` (ICMP pode estar bloqueado e ainda assim HTTP ok), `curl -v` para camada app, `traceroute`/`mtr` só quando a política permitir e sem publicar o caminho inteiro da infra. Em nuvem, security group/NACL é 'firewall fora da máquina'.",

      "Ao terminar você aplica o checklist num host, usa ss para achar quem escuta uma porta, e explica default route em linguagem humana.",

    ],
    commands: [
      {
        command: "ip -br link",
        description:
          "Interfaces e estado UP/DOWN de forma compacta.",
        example: "ip -br link",
      },
      {
        command: "ip -br addr",
        description:
          "Endereços por interface.",
        example: "ip -br addr",
      },
      {
        command: "ip route",
        description:
          "Tabela de rotas; procure a default via.",
        example: "ip route",
      },
      {
        command: "ip route get 1.1.1.1",
        description:
          "Rota que o kernel usaria até esse destino (útil com várias NICs/VPN).",
        example: "ip route get 1.1.1.1",
      },
      {
        command: "ss -tulpn | head -n 30",
        description:
          "Sockets TCP/UDP escutando; -p mostra processo (root ajuda).",
        example: "ss -tulpn | head -n 30",
        flags: [
          { flag: "-t", description: "TCP" },
          { flag: "-u", description: "UDP" },
          { flag: "-l", description: "listening" },
          { flag: "-p", description: "processo" },
          { flag: "-n", description: "numérico" },
        ],
      },
      {
        command: "ss -tnp | head -n 20",
        description:
          "Conexões TCP estabelecidas (amostra).",
        example: "ss -tnp | head -n 20",
      },
      {
        command: "ping -c 2 -W 2 1.1.1.1 2>&1 | tail -n 5",
        description:
          "Alcance IP básico se ICMP for permitido; falha ≠ internet morta sempre.",
        example: "ping -c 2 1.1.1.1",
      },
      {
        command: "curl -sI -m 5 https://deb.debian.org/ 2>&1 | head -n 10",
        description:
          "Teste de saída HTTPS sem despejar HTML.",
        example: "curl -sI -m 5 https://deb.debian.org/ | head",
      },
      {
        command: "man ip-route",
        description:
          "Referência de rotas iproute2.",
        example: "man ip-route",
      },
      {
        command: "man ss",
        description:
          "Substituto moderno do netstat.",
        example: "man ss",
      },
    ],
    tips: [
      {
        type: "success",
        title: "Checklist fixo",
        content:
          "link → addr → route → gateway → DNS → porta.",
      },
      {
        type: "warning",
        title: "ping bloqueado",
        content:
          "Security groups às vezes negam ICMP; teste TCP/HTTP também.",
      },
      {
        type: "danger",
        title: "Print com rota interna",
        content:
          "Não publique topologia sensível em issues/tutoriais.",
      },
      {
        type: "info",
        title: "ss -p e permissão",
        content:
          "Sem root, o processo pode aparecer vazio.",
      },
    ],
    practiceLabs: [
      {
        title: "Checklist em uma folha",
        goal: "Preencher estado de link, IP, default route, uma porta local e DNS.",
        steps: [
          "ip -br link e addr",
          "ip route | head",
          "ss -tulpn | head",
          "getent hosts debian.org",
          "Salvar resumo SEM colar IPs internos sensíveis se for compartilhar",
        ],
        command: "{ echo '=== link ==='; ip -br link; echo; echo '=== route (primeiras) ==='; ip route | head -n 8; echo; echo '=== listen (amostra) ==='; ss -tuln | head -n 15; } | tee ~/net-checklist.txt",
        verify:
          "Você aponta se há default route e se a porta do seu serviço aparece em ss.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Primeira pergunta do checklist?",
        answer:
          "A interface está UP e tem carrier/link?",
      },
      {
        id: 2,
        question: "Comando para ver rota default?",
        answer:
          "ip route (procure default via …)",
      },
      {
        id: 3,
        question: "ss -tulpn mostra o quê?",
        answer:
          "Sockets escutando TCP/UDP com portas e processos.",
      },
      {
        id: 4,
        question: "ip route get serve para quê?",
        answer:
          "Ver por onde o kernel enviaria pacotes a um destino.",
      },
      {
        id: 5,
        question: "Por que ifconfig é legado?",
        answer:
          "iproute2 (ip/ss) é a ferramenta moderna e mantida.",
      },
      {
        id: 6,
        question: "App não conecta mas ping ao IP funciona — e agora?",
        answer:
          "Checar DNS, porta de destino, firewall e se o serviço escuta no endereço certo.",
      },
      {
        id: 7,
        question: "Serviço escuta só 127.0.0.1 — sintoma?",
        answer:
          "Acesso remoto falha; local no host funciona.",
      },
      {
        id: 8,
        question: "Por que não colar traceroute completo público?",
        answer:
          "Pode revelar topologia e IPs internos da infraestrutura.",
      },
    ],
    references: [
      { title: "man ip", url: "https://manpages.debian.org/ip" },
      { title: "man ss", url: "https://manpages.debian.org/ss" },
      { title: "Wiki — NetworkConfiguration", url: "https://wiki.debian.org/NetworkConfiguration" },
      { title: "iproute2 docs", url: "https://wiki.linuxfoundation.org/networking/iproute2" },
    ],
  },
  {
    id: "tls-certbot",
    title: "TLS e Certbot no Debian — certificado, renovação e armadilhas",
    icon: "🔒",
    category: "Rede e Segurança",
    description:
      "Coloque HTTPS de forma idiomática: conceitos de certificado, Certbot no Debian, renovação e o que quebra quando o relógio ou o DNS estão errados.",
    objectives: [
      "Explicar certificado, CA e cadeia em linguagem humana",
      "Instalar certbot e um plugin comum",
      "Emitir certificado de laboratório com consciência de DNS público",
      "Testar renovação dry-run",
      "Relacionar TLS com porta 80/443 e firewall",
      "Evitar copiar chaves privadas para chat/git",
    ],
    content: [
      "**TLS** protege o transporte (o cadeado do HTTPS). Um **certificado** amarra uma chave pública a um nome (CN/SAN) e é assinado por uma **CA**. O Let's Encrypt automatizou a emissão gratuita via desafios HTTP-01 ou DNS-01. No Debian, **certbot** é o cliente mais didático; o servidor web (Nginx/Apache) precisa servir o desafio e depois carregar fullchain+privkey.",

      "Fluxo feliz HTTP-01: DNS do domínio aponta para o servidor → portas 80/443 acessíveis do mundo → `certbot --nginx` ou `certbot certonly --webroot` → arquivos em `/etc/letsencrypt/live/dominio/` → reload do web. Renovação: timer/cron do certbot + `renew` + hook de reload.",

      "Armadilhas: DNS ainda no IP velho; firewall cloud bloqueando 80; **relógio errado** (capítulo tempo-ntp); rate limit da CA por tentativas; certificado emitido mas virtual host ainda com caminho velho; copiar só `cert.pem` sem `fullchain.pem` e o celular reclamar da cadeia.",

      "Jargões. **SAN**. **fullchain**. **privkey** (nunca commitar). **staging** do Let's Encrypt para testes sem queimar limite. **OCSP/stapling** (otimização). Self-signed serve para lab interno, não para público sem aviso.",

      "Ética: não rode emissão real contra domínios que você não controla. Em lab sem domínio, use staging, mkcert, ou openssl self-signed. Em produção da equipe, documente quem tem acesso à privkey e backup cifrado.",

      "Ao terminar você explica HTTP-01, sabe onde o Certbot grava os pems, roda renew --dry-run em ambiente preparado, e lista três motivos comuns de falha.",

    ],
    commands: [
      {
        command: "sudo apt install -y certbot",
        description:
          "Cliente Certbot. Plugins nginx/apache são pacotes separados em muitos releases.",
        example: "sudo apt install -y certbot",
      },
      {
        command: "apt-cache search certbot | head",
        description:
          "Ver plugins disponíveis (python3-certbot-nginx, etc.).",
        example: "apt-cache search certbot | head",
      },
      {
        command: "sudo certbot certificates 2>/dev/null || echo 'ainda sem certificados ou certbot nao configurado'",
        description:
          "Lista certificados gerenciados localmente.",
        example: "sudo certbot certificates",
      },
      {
        command: "sudo certbot renew --dry-run",
        description:
          "Simula renovação — o teste que importa depois do primeiro emit.",
        example: "sudo certbot renew --dry-run",
      },
      {
        command: "ls -la /etc/letsencrypt/live 2>/dev/null || echo 'sem /etc/letsencrypt/live ainda'",
        description:
          "Onde ficam os links fullchain.pem e privkey.pem.",
        example: "sudo ls -la /etc/letsencrypt/live 2>/dev/null | head",
      },
      {
        command: "openssl version",
        description:
          "OpenSSL presente para inspeção de certificados.",
        example: "openssl version",
      },
      {
        command: "echo | openssl s_client -connect deb.debian.org:443 -servername deb.debian.org 2>/dev/null | openssl x509 -noout -subject -dates 2>/dev/null | head",
        description:
          "Inspeciona certificado de um host público (exemplo) sem salvar chave.",
        example: "echo | openssl s_client -connect deb.debian.org:443 -servername deb.debian.org 2>/dev/null | openssl x509 -noout -subject -dates",
      },
      {
        command: "systemctl list-timers | grep -i certbot || ls /etc/cron*/*certbot* 2>/dev/null | head",
        description:
          "Como a renovação automática está agendada neste host.",
        example: "systemctl list-timers | grep -i cert || true",
      },
      {
        command: "man certbot",
        description:
          "Subcomandos certonly, renew, plugins.",
        example: "man certbot",
      },
      {
        command: "openssl req -x509 -newkey rsa:2048 -keyout /tmp/lab-self.key -out /tmp/lab-self.crt -days 1 -nodes -subj '/CN=lab.local' 2>/dev/null && openssl x509 -in /tmp/lab-self.crt -noout -subject -dates && rm -f /tmp/lab-self.key /tmp/lab-self.crt",
        description:
          "Self-signed de 1 dia só para lab local — não é Let's Encrypt, mas ensina o par chave/cert.",
        example: "openssl req -x509 -newkey rsa:2048 -nodes -subj '/CN=lab.local' -days 1 -keyout /tmp/k.pem -out /tmp/c.pem",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "privkey no git/chat",
        content:
          "Chave privada vazada = troque certificado e revogue se aplicável.",
      },
      {
        type: "warning",
        title: "Rate limit LE",
        content:
          "Use staging para testes repetidos.",
      },
      {
        type: "success",
        title: "renew --dry-run",
        content:
          "Depois de emitir, este é o aceite de qualidade.",
      },
      {
        type: "info",
        title: "Relógio e DNS",
        content:
          "TLS e HTTP-01 dependem de tempo certo e nome apontando ao host.",
      },
    ],
    practiceLabs: [
      {
        title: "Mapa TLS sem emitir na produção alheia",
        goal: "Saber se certbot está instalado, se há live certs, e como o renew está agendado.",
        steps: [
          "apt-cache policy certbot",
          "certbot certificates (se houver)",
          "list-timers/cron certbot",
          "openssl s_client em um site público só para ler datas",
          "Anotar em ~/tls-lab.txt",
        ],
        command: "{ echo '=== certbot ==='; command -v certbot; dpkg -l certbot 2>/dev/null | tail -n 1; echo; echo '=== live ==='; sudo ls /etc/letsencrypt/live 2>&1 | head; } | tee ~/tls-lab.txt",
        verify:
          "Você explica onde estariam fullchain/privkey e o que dry-run testa.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que o Certbot automatiza?",
        answer:
          "Obter e renovar certificados (ex.: Let's Encrypt) e opcionalmente configurar o servidor web.",
      },
      {
        id: 2,
        question: "Onde ficam fullchain e privkey típicos?",
        answer:
          "/etc/letsencrypt/live/<dominio>/",
      },
      {
        id: 3,
        question: "Para que renew --dry-run?",
        answer:
          "Simular renovação e validar que o desafio ainda funciona.",
      },
      {
        id: 4,
        question: "HTTP-01 precisa de quê?",
        answer:
          "Domínio apontando ao servidor e porta 80 alcançável (na maioria dos fluxos).",
      },
      {
        id: 5,
        question: "Por que fullchain e não só cert.pem?",
        answer:
          "Inclui intermediários da cadeia que clientes precisam validar.",
      },
      {
        id: 6,
        question: "Relógio errado quebra TLS como?",
        answer:
          "Certificado pode parecer fora da validade (not yet valid / expired).",
      },
      {
        id: 7,
        question: "Self-signed serve para internet pública?",
        answer:
          "Navegadores não confiam sem aviso; use CA pública ou CA interna gerenciada.",
      },
      {
        id: 8,
        question: "O que nunca versionar no git?",
        answer:
          "privkey.pem e qualquer chave privada.",
      },
    ],
    references: [
      { title: "Certbot docs", url: "https://eff-certbot.readthedocs.io/" },
      { title: "Let's Encrypt", url: "https://letsencrypt.org/docs/" },
      { title: "man certbot", url: "https://manpages.debian.org/certbot" },
      { title: "Debian Wiki — RealtimePKI / TLS intro", url: "https://wiki.debian.org/Certificates" },
    ],
  },
  {
    id: "proxy-reverso",
    title: "Proxy reverso com Nginx ou Caddy — um host, vários apps",
    icon: "🧱",
    category: "Rede e Segurança",
    description:
      "Exponha aplicações internas com proxy reverso: papel do Nginx/Caddy, virtual hosts, proxy_pass/reverse_proxy e TLS na borda — sem colocar o app Node/Python cru na 443 sem necessidade.",
    objectives: [
      "Explicar proxy reverso vs apontar o app direto na 443",
      "Subir Nginx ou Caddy no Debian e servir um backend",
      "Configurar um virtual host / site",
      "Encaminhar para 127.0.0.1:porta do app",
      "Recarregar config com teste (nginx -t)",
      "Encaixar TLS na borda (ligação com certbot)",
    ],
    content: [
      "**Proxy reverso** fica na frente: o cliente fala HTTPS com Nginx/Caddy na 443; o proxy fala HTTP (ou outro) com o app em `127.0.0.1:3000`. Ganhos: TLS centralizado, vários nomes no mesmo IP (`a.exemplo` e `b.exemplo`), buffers, headers, rate limit, e o app não precisa rodar como root na 443.",

      "**Nginx** é o cavalo de batalha com `server { }` e `proxy_pass`. **Caddy** é mais opinativo e TLS automático em muitos casos. No Debian ambos estão nos repositórios (versões variam). Escolha um por host na aprendizagem; misturar os dois na 80/443 pede conflito de porta.",

      "Fluxo Nginx: instalar → `sites-available` + symlink `sites-enabled` → `proxy_pass http://127.0.0.1:8080` → `nginx -t` → reload. Headers úteis: `Host`, `X-Forwarded-For`, `X-Forwarded-Proto` para o app saber que veio HTTPS. WebSocket pede Upgrade headers extras.",

      "Armadilhas: app escuta só em 127.0.0.1 (bom) mas você testou só de dentro; SELinux/AppArmor raro no Debian default; firewall libera 443 mas o proxy aponta porta errada; body size upload; timeout de proxy em app lento; **não** expor painel admin sem auth na borda.",

      "Relação com o capítulo servidor-web: ali você serve arquivos e PHP clássico; aqui o foco é **encaminhar** para apps. Relação com certbot: termina certificado no proxy, não em cada app.",

      "Ao terminar você desenha cliente→proxy→app, sobe um proxy de lab para um backend local (mesmo que seja `python3 -m http.server`), e valida com curl ao Host header.",

    ],
    commands: [
      {
        command: "sudo apt install -y nginx",
        description:
          "Nginx do repositório Debian (Caddy: pacote caddy se disponível na sua release).",
        example: "sudo apt install -y nginx",
      },
      {
        command: "nginx -v 2>&1; systemctl is-active nginx 2>/dev/null",
        description:
          "Versão e se o serviço está active.",
        example: "nginx -v 2>&1; systemctl is-active nginx",
      },
      {
        command: "ls /etc/nginx/sites-available /etc/nginx/sites-enabled 2>/dev/null | head",
        description:
          "Layout Debian clássico de virtual hosts.",
        example: "ls -la /etc/nginx/sites-enabled",
      },
      {
        command: "sudo nginx -t",
        description:
          "Testa a config antes do reload — hábito inegociável.",
        example: "sudo nginx -t",
      },
      {
        command: "sudo systemctl reload nginx",
        description:
          "Aplica config sem dropar conexões desnecessariamente (vs restart).",
        example: "sudo systemctl reload nginx",
      },
      {
        command: "ss -tulpn | grep -E ':80|:443|:8080' | head",
        description:
          "Quem escuta as portas web e do backend.",
        example: "ss -tulpn | grep -E ':80|:443' | head",
      },
      {
        command: "curl -sI -H 'Host: localhost' http://127.0.0.1/ | head -n 15",
        description:
          "Fala com o proxy local e mostra headers de resposta.",
        example: "curl -sI http://127.0.0.1/ | head",
      },
      {
        command: "printf '%s\n' 'server {' '    listen 80 default_server;' '    server_name _;' '    location / {' '        proxy_pass http://127.0.0.1:8080;' '        proxy_set_header Host $host;' '        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;' '        proxy_set_header X-Forwarded-Proto $scheme;' '    }' '}'",
        description:
          "Esqueleto mental de reverse proxy Nginx (adapte em sites-available; não cole cego em produção).",
        example: "# ver man nginx e docs proxy_pass",
      },
      {
        command: "man nginx",
        description:
          "Entrada da documentação local.",
        example: "man nginx",
      },
      {
        command: "apt-cache search '^caddy' | head",
        description:
          "Ver se Caddy está nos repos da sua release como alternativa.",
        example: "apt-cache search caddy | head",
      },
    ],
    tips: [
      {
        type: "success",
        title: "nginx -t antes de reload",
        content:
          "Evita derrubar o proxy com vírgula faltando.",
      },
      {
        type: "warning",
        title: "App na 0.0.0.0 exposto",
        content:
          "Se o proxy é a borda, o app pode escutar só localhost.",
      },
      {
        type: "info",
        title: "X-Forwarded-*",
        content:
          "Sem isso o backend acha que tudo é HTTP/IP do proxy.",
      },
      {
        type: "danger",
        title: "Dois serviços na :443",
        content:
          "Nginx e Caddy juntos na mesma porta = fail.",
      },
    ],
    practiceLabs: [
      {
        title: "Proxy para backend local de lab",
        goal: "Backend em 8080 + Nginx proxy_pass + curl via :80 (em lab/VM).",
        steps: [
          "Subir um backend simples na 8080 (http.server ou app)",
          "Configurar location / com proxy_pass",
          "nginx -t && reload",
          "curl -I http://127.0.0.1/",
          "ss para confirmar 80 e 8080",
        ],
        command: "ss -tulpn | grep -E ':80|:8080' || true; curl -sI http://127.0.0.1/ 2>/dev/null | head || echo 'subir nginx+backend no lab'",
        verify:
          "curl na 80 devolve resposta do backend; backend nao precisa estar exposto fora se bind em 127.0.0.1.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que é proxy reverso?",
        answer:
          "Servidor na borda que recebe o cliente e encaminha ao aplicativo interno.",
      },
      {
        id: 2,
        question: "Vantagem de TLS no proxy?",
        answer:
          "Centraliza certificados e deixa o app em HTTP interno ou mTLS separado.",
      },
      {
        id: 3,
        question: "Diretiva Nginx típica de encaminhamento?",
        answer:
          "proxy_pass.",
      },
      {
        id: 4,
        question: "Por que nginx -t?",
        answer:
          "Validar configuração antes de recarregar.",
      },
      {
        id: 5,
        question: "Onde ficam sites no Debian/Nginx?",
        answer:
          "/etc/nginx/sites-available e sites-enabled.",
      },
      {
        id: 6,
        question: "Header importante para o IP real do cliente?",
        answer:
          "X-Forwarded-For (e similar).",
      },
      {
        id: 7,
        question: "App escuta 127.0.0.1:3000 — quem expõe 443?",
        answer:
          "O proxy reverso na borda.",
      },
      {
        id: 8,
        question: "Conflito clássico de porta?",
        answer:
          "Dois proxies ou app+proxy tentando bind na 80/443.",
      },
    ],
    references: [
      { title: "Nginx reverse proxy admin guide", url: "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/" },
      { title: "Debian Wiki — Nginx", url: "https://wiki.debian.org/Nginx" },
      { title: "Caddy documentation", url: "https://caddyserver.com/docs/" },
      { title: "man nginx", url: "https://manpages.debian.org/nginx" },
    ],
  },
  {
    id: "apparmor-debian",
    title: "AppArmor no Debian — perfis enforce e complain",
    icon: "🛡️",
    category: "Rede e Segurança",
    description:
      "Use AppArmor no Debian: status do serviço, aa-status, modos enforce/complain e o hábito de ler logs antes de desligar proteção ‘porque deu trabalho’.",
    objectives: [
      "Explicar MAC (AppArmor) vs só permissões Unix",
      "Ver se AppArmor está ativo e listar perfis",
      "Distinguir enforce, complain e unconfined",
      "Achar logs de negação",
      "Saber onde moram os perfis no Debian",
      "Evitar disable global como primeiro reflexo",
    ],
    content: [
      "Permissão Unix (rwx) diz o que o **usuário** pode. **AppArmor** é MAC: mesmo root de um serviço pode ser enjaulado pelo **perfil** daquele binário. Se o nginx for comprometido, o perfil limita o estrago (arquivos e capacidades que ele pode tocar). No Debian o AppArmor costuma vir habilitado; não é SELinux do RHEL, mas a ideia de confinamento é prima.",

      "Ferramentas do dia a dia: `aa-status` (ou `apparmor_status`), `systemctl status apparmor`, perfis em `/etc/apparmor.d/`. **enforce** bloqueia o que foge da política; **complain** só registra (ótimo para afiar perfil sem derrubar app); processo **unconfined** não tem perfil ativo.",

      "Quando algo ‘só funciona se eu desligar o AppArmor’, o caminho adulto é: ler o log de negação → ajustar perfil ou put da app → voltar enforce. Desligar o serviço inteiro em produção é abrir mão da camada. Em lab, complain ensina sem drama.",

      "Jargões. **profile**. **hat** (subperfil). **aa-enforce / aa-complain**. **utils** (`apparmor-utils`) para helpers. Pacotes de app muitas vezes instalam perfil pronto; upgrade pode trazer perfil novo — confira após mudanças grandes.",

      "Ao terminar você roda aa-status, interpreta enforce vs complain, e sabe onde olhar log antes de culpar ‘o Linux’.",

    ],
    commands: [
      {
        command: "systemctl is-active apparmor 2>/dev/null; aa-enabled 2>/dev/null || true",
        description:
          "Serviço e se o kernel/userspace reportam AppArmor habilitado.",
        example: "systemctl is-active apparmor; aa-enabled 2>/dev/null",
      },
      {
        command: "sudo aa-status 2>/dev/null || sudo apparmor_status 2>/dev/null || echo 'instale apparmor e apparmor-utils'",
        description:
          "Resumo de perfis em enforce/complain e processos confinados.",
        example: "sudo aa-status | head -n 40",
      },
      {
        command: "ls /etc/apparmor.d/ | head",
        description:
          "Onde os perfis vivem no Debian.",
        example: "ls /etc/apparmor.d/ | head",
      },
      {
        command: "dpkg -l 'apparmor*' | grep ^ii",
        description:
          "Pacotes AppArmor instalados.",
        example: "dpkg -l 'apparmor*' | grep ^ii",
      },
      {
        command: "journalctl -b -g apparmor --no-pager 2>/dev/null | tail -n 20 || sudo dmesg | grep -i apparmor | tail -n 15",
        description:
          "Negações/eventos recentes ligados ao AppArmor.",
        example: "journalctl -b -g apparmor --no-pager | tail -n 20",
      },
      {
        command: "man aa-status",
        description:
          "Manual do status.",
        example: "man aa-status",
      },
      {
        command: "man apparmor",
        description:
          "Visão geral do framework.",
        example: "man apparmor",
      },
      {
        command: "apt-cache search apparmor | head",
        description:
          "Utils e perfis extras nos repositórios.",
        example: "apt-cache search apparmor | head",
      },
      {
        command: "sudo aa-complain /etc/apparmor.d/* 2>/dev/null | tail -n 5 || echo 'aa-complain exige apparmor-utils e critério — nao rode em massa na producao'",
        description:
          "Exemplo de ferramenta complain (CUIDADO: em massa só em lab). Prefira um perfil por vez.",
        example: "# lab: sudo aa-complain /etc/apparmor.d/usr.sbin.nginx",
      },
      {
        command: "sudo aa-enforce /etc/apparmor.d/usr.sbin.sshd 2>/dev/null || echo 'perfil sshd pode ter nome diferente; liste apparmor.d'",
        description:
          "Voltar um perfil a enforce (ajuste o path ao perfil real do host).",
        example: "ls /etc/apparmor.d/ | grep -i ssh || true",
      },
    ],
    tips: [
      {
        type: "success",
        title: "Log antes de disable",
        content:
          "Quase sempre é ajuste de perfil, não ‘AppArmor inútil’.",
      },
      {
        type: "warning",
        title: "complain em massa na produção",
        content:
          "Pode silenciar bloqueios que você queria. Um perfil por vez.",
      },
      {
        type: "info",
        title: "Não é SELinux",
        content:
          "Comandos e semântica diferem; não misture tutoriais RHEL cegamente.",
      },
      {
        type: "danger",
        title: "Desligar apparmor.service por preguiça",
        content:
          "Remove a camada de todo o sistema.",
      },
    ],
    practiceLabs: [
      {
        title: "Raio-X AppArmor",
        goal: "Saber se está active, quantos perfis enforce e se há eventos no boot.",
        steps: [
          "is-active apparmor",
          "aa-status | head",
          "ls /etc/apparmor.d | wc -l",
          "journal/dmesg grep apparmor",
          "tee ~/apparmor-lab.txt",
        ],
        command: "{ echo '=== active ==='; systemctl is-active apparmor 2>&1; echo; echo '=== status head ==='; sudo aa-status 2>&1 | head -n 25; } | tee ~/apparmor-lab.txt",
        verify:
          "Você afirma se AppArmor está ativo e cita enforce vs complain em números aproximados.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "AppArmor protege em que camada?",
        answer:
          "MAC: confina processos segundo perfis, além de rwx Unix.",
      },
      {
        id: 2,
        question: "Diferença enforce vs complain?",
        answer:
          "enforce bloqueia; complain só registra violações.",
      },
      {
        id: 3,
        question: "Comando clássico de visão geral?",
        answer:
          "aa-status ou apparmor_status.",
      },
      {
        id: 4,
        question: "Onde ficam os perfis?",
        answer:
          "/etc/apparmor.d/",
      },
      {
        id: 5,
        question: "Primeiro passo se um app ‘quebra com AppArmor’?",
        answer:
          "Ler logs de negação e ajustar perfil/modo, não desligar tudo.",
      },
      {
        id: 6,
        question: "O que é processo unconfined?",
        answer:
          "Sem perfil AppArmor ativo restritivo.",
      },
      {
        id: 7,
        question: "Pacote útil de helpers?",
        answer:
          "apparmor-utils (aa-enforce, aa-complain, etc.).",
      },
      {
        id: 8,
        question: "AppArmor é o mesmo que SELinux?",
        answer:
          "Não; ambos são MAC, mas stack e ferramentas diferem.",
      },
    ],
    references: [
      { title: "Wiki — AppArmor", url: "https://wiki.debian.org/AppArmor" },
      { title: "man apparmor", url: "https://manpages.debian.org/apparmor" },
      { title: "man aa-status", url: "https://manpages.debian.org/aa-status" },
      { title: "AppArmor desktop guide", url: "https://gitlab.com/apparmor/apparmor/-/wikis/home" },
    ],
  },
    {
    id: "fail2ban",
    title: "fail2ban — banir brute force sem achar que é firewall mágico",
    icon: "🛡️",
    category: "Rede e Segurança",
    description: "O que o fail2ban faz de verdade: lê logs, casa regex, adiciona regras temporárias. Bom para SSH exposto; não substitui key-only nem firewall de borda.",
    level: "intermediario",
    readMinutes: 14,
    objectives: [
      "Explicar jail + filter + action",
      "Ativar jail sshd em jail.d",
      "Ler status e unban quando se auto-bloquear",
      "Não confundir fail2ban com senha forte",
    ],
    content: [
      "fail2ban não é IA de segurança. É um demônio teimoso: lê logs (auth.log/journal), aplica filtros (regex) e, no limiar de falhas, executa action — em geral bloquear o IP no nftables/iptables por alguns minutos. Reduz ruído de brute force em SSH exposto. Não corrige senha fraca, não substitui PasswordAuthentication no, não protege web sozinha sem filter.",
      "No Debian as jails vêm em /etc/fail2ban/jail.conf — NÃO edite (upgrade sobrescreve). Use jail.local ou jail.d/*.local. Ative sshd, systemctl enable --now fail2ban, fail2ban-client status. Se se banir: console do provedor ou fail2ban-client set sshd unbanip SEU_IP.",
      "Armadilhas: banear rede da empresa por NAT compartilhado; maxretry absurdo; achar bantime eterno; filters desatualizados após mudar path de log; confiar só nisso com senha root permitida. Combine chaves SSH + fail2ban + allowlist/VPN quando der.",
    ],
    commands: [
      {
        command: "sudo apt install -y fail2ban",
        description: "Instala o serviço.",
        example: "sudo apt install -y fail2ban",
      },
      {
        command: "printf \"%s\n\" \"[sshd]\" \"enabled = true\" | sudo tee /etc/fail2ban/jail.d/sshd.local",
        description: "Ativa jail sshd de forma upgrade-safe.",
        example: "printf \"%s\n\" \"[sshd]\" \"enabled = true\" | sudo tee /etc/fail2ban/jail.d/sshd.local",
      },
      {
        command: "sudo systemctl enable --now fail2ban",
        description: "Sobe e habilita no boot.",
        example: "sudo systemctl enable --now fail2ban",
      },
      {
        command: "sudo fail2ban-client status",
        description: "Jails ativas.",
        example: "sudo fail2ban-client status",
        output: `Status
|- Number of jail:	1
\`- Jail list:	sshd`,
      },
      {
        command: "sudo fail2ban-client status sshd",
        description: "IPs banidos e contadores do jail sshd.",
        example: "sudo fail2ban-client status sshd",
      },
      {
        command: "sudo fail2ban-client set sshd unbanip 203.0.113.10",
        description: "Remove ban de um IP (troque pelo seu).",
        example: "sudo fail2ban-client set sshd unbanip 203.0.113.10",
      },
      {
        command: "man fail2ban",
        description: "Visão geral; veja também jail.conf(5).",
        example: "man fail2ban",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "NAT corporativo",
        content: "Um IP de saída compartilha o ban — ajuste maxretry/findtime.",
      },
      {
        type: "danger",
        title: "Só fail2ban + senha fraca",
        content: "Continua inseguro. Prefira chaves e desative password auth.",
      },
      {
        type: "info",
        title: "jail.local",
        content: "Não edite jail.conf; use .local / jail.d.",
      },
      {
        type: "success",
        title: "Teste unban",
        content: "Saiba desbanir antes de precisar em pânico.",
      },
    ],
    practiceLabs: [
      {
        title: "Jail sshd de lab",
        goal: "Instalar, ativar sshd jail e ver status.",
        steps: [
          "apt install fail2ban",
          "Crie jail.d/sshd.local",
          "enable --now e status",
        ],
        command: "sudo fail2ban-client status || echo \"instale e ative primeiro\"",
        verify: "status lista sshd.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que o fail2ban observa?",
        answer: "Logs, via filtros regex, para disparar actions (ban).",
      },
      {
        id: 2,
        question: "Onde configurar sem perder no upgrade?",
        answer: "jail.local ou /etc/fail2ban/jail.d/*.local",
      },
      {
        id: 3,
        question: "Como ver IPs banidos no sshd?",
        answer: "fail2ban-client status sshd",
      },
      {
        id: 4,
        question: "fail2ban substitui SSH key-only?",
        answer: "Não — é camada extra contra brute force.",
      },
      {
        id: 5,
        question: "Como desbanir seu IP?",
        answer: "fail2ban-client set sshd unbanip IP",
      },
      {
        id: 6,
        question: "Risco com muitos usuários no mesmo NAT?",
        answer: "Um ban afeta todos que saem com o mesmo IP público.",
      },
    ],
    references: [
      { title: "fail2ban wiki", url: "https://github.com/fail2ban/fail2ban/wiki" },
      { title: "man jail.conf", url: "https://manpages.debian.org/jail.conf" },
    ],
  },
  {
    id: "pam-senhas",
    title: "PAM e políticas de senha — pwquality e limites básicos",
    icon: "🔑",
    category: "Rede e Segurança",
    description:
      "Entenda PAM no Debian o suficiente para política de senha com pwquality, sem desmontar autenticação SSH no primeiro sed errado.",
    objectives: [
      "Explicar PAM como pilha de módulos de autenticação",
      "Achar configs em /etc/pam.d/",
      "Instalar e ver pwquality",
      "Ler /etc/security/pwquality.conf",
      "Relacionar com login local vs SSH por chave",
      "Testar mudança com conta de lab, não com root único",
    ],
    content: [
      "**PAM** (Pluggable Authentication Modules) é a camada que decide ‘como autentica’ em login, sudo, SSH (se usar senha), etc. Cada serviço tem um arquivo em `/etc/pam.d/` que empilha módulos `auth`, `account`, `password`, `session`. Errar uma linha pode fechar a casa — por isso backup e sessão root de reserva.",

      "Política de senha moderna no Debian costuma passar por **pam_pwquality** (pacote `libpam-pwquality`) e `/etc/security/pwquality.conf`: tamanho mínimo, créditos de classes de caracteres, reject username, etc. Isso age quando a senha é **definida/alterada**, não mágicamente em chaves SSH.",

      "SSH com **só chave** continua sendo o caminho servidor; PAM de senha ainda importa para consoles locais, contas humanas e o dia em que alguém usa `PasswordAuthentication yes`. Não misture tutorial antigo de `pam_cracklib` sem ver o que sua release usa.",

      "Jargões. **requisite/required/sufficient/optional** controlam o fluxo da pilha. **nullok**. **try_first_pass**. Você não precisa memorizar todos no primeiro dia; precisa saber que a ordem importa e que `common-*` é incluído por vários serviços.",

      "Ao terminar você lista /etc/pam.d, lê pwquality.conf, sabe onde a política de senha se encaixa, e não testa break-glass na única sessão da VPS da equipe.",

    ],
    commands: [
      {
        command: "ls /etc/pam.d/ | head",
        description:
          "Serviços com pilha PAM (sshd, login, sudo, passwd…).",
        example: "ls /etc/pam.d/ | head",
      },
      {
        command: "grep -vE '^#|^$' /etc/pam.d/common-password 2>/dev/null | head",
        description:
          "Pilha comum de password — onde pwquality costuma aparecer.",
        example: "grep -vE '^#|^$' /etc/pam.d/common-password | head",
      },
      {
        command: "dpkg -l libpam-pwquality 2>/dev/null | tail -n 1; sudo apt install -y libpam-pwquality",
        description:
          "Garante o módulo de qualidade de senha.",
        example: "sudo apt install -y libpam-pwquality",
      },
      {
        command: "grep -vE '^#|^$' /etc/security/pwquality.conf 2>/dev/null | head -n 30",
        description:
          "Política efetiva comentada/ativa (minlen, etc.).",
        example: "grep -vE '^#|^$' /etc/security/pwquality.conf | head",
      },
      {
        command: "man pam_pwquality",
        description:
          "Opções do módulo.",
        example: "man pam_pwquality",
      },
      {
        command: "man pwquality.conf",
        description:
          "Arquivo de configuração de qualidade.",
        example: "man pwquality.conf",
      },
      {
        command: "man pam",
        description:
          "Visão geral da arquitetura PAM.",
        example: "man pam",
      },
      {
        command: "grep -n 'password' /etc/pam.d/sshd 2>/dev/null | head",
        description:
          "Como o sshd inclui a pilha (se senha estiver no circuito).",
        example: "grep -n password /etc/pam.d/sshd | head",
      },
      {
        command: "passwd -S $USER 2>/dev/null || true",
        description:
          "Status da senha da conta atual (P/L/NP…).",
        example: "passwd -S $USER",
      },
      {
        command: "sudo cp -a /etc/pam.d/common-password /etc/pam.d/common-password.bak-$(date +%F) 2>/dev/null || true",
        description:
          "Hábito: backup antes de qualquer edição PAM.",
        example: "sudo cp -a /etc/pam.d/common-password /etc/pam.d/common-password.bak",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Editar PAM na única sessão SSH",
        content:
          "Tenha console; um slip bloqueia autenticação.",
      },
      {
        type: "success",
        title: "Backup de common-*",
        content:
          "Restaurar é mais rápido que live rescue.",
      },
      {
        type: "info",
        title: "Chave SSH ≠ pwquality",
        content:
          "Política de senha não substitui endurecer sshd_config.",
      },
      {
        type: "warning",
        title: "minlen absurdo",
        content:
          "Política impossível gera post-its sob o teclado — busque equilíbrio.",
      },
    ],
    practiceLabs: [
      {
        title: "Mapa PAM + pwquality",
        goal: "Saber se pwquality está na pilha e quais opções não comentadas existem.",
        steps: [
          "ls /etc/pam.d | head",
          "grep common-password",
          "instalar libpam-pwquality se faltar",
          "ler pwquality.conf ativo",
          "tee ~/pam-lab.txt",
        ],
        command: "{ echo '=== common-password ==='; grep -vE '^#|^$' /etc/pam.d/common-password 2>/dev/null; echo; echo '=== pwquality.conf ==='; grep -vE '^#|^$' /etc/security/pwquality.conf 2>/dev/null | head -n 20; } | tee ~/pam-lab.txt",
        verify:
          "Você aponta se pam_pwquality aparece na pilha password.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que é PAM?",
        answer:
          "Framework de módulos empilháveis que implementa autenticação e sessões para serviços.",
      },
      {
        id: 2,
        question: "Onde ficam as pilhas?",
        answer:
          "/etc/pam.d/",
      },
      {
        id: 3,
        question: "Arquivo comum de política de senha?",
        answer:
          "/etc/security/pwquality.conf com pam_pwquality.",
      },
      {
        id: 4,
        question: "Por que backup antes de editar?",
        answer:
          "Erro pode impedir login/sudo até recuperação.",
      },
      {
        id: 5,
        question: "pwquality age quando?",
        answer:
          "Na definição/alteração de senhas via PAM, não em autenticação por chave SSH.",
      },
      {
        id: 6,
        question: "common-password serve para quê?",
        answer:
          "Pilha compartilhada incluída por vários serviços no Debian.",
      },
      {
        id: 7,
        question: "Pacote Debian do módulo?",
        answer:
          "libpam-pwquality",
      },
      {
        id: 8,
        question: "SSH só com chave ainda precisa de PAM?",
        answer:
          "sshd ainda usa PAM para session/account em muitos setups; password pode estar off.",
      },
    ],
    references: [
      { title: "man pam", url: "https://manpages.debian.org/pam" },
      { title: "man pam_pwquality", url: "https://manpages.debian.org/pam_pwquality" },
      { title: "man pwquality.conf", url: "https://manpages.debian.org/pwquality.conf" },
      { title: "Debian Wiki — PAM", url: "https://wiki.debian.org/PAM" },
    ],
  },
  {
    id: "acl-capabilities",
    title: "ACL e capabilities — setfacl e setcap sem misticismo",
    icon: "🏷️",
    category: "Rede e Segurança",
    description:
      "Vá além de rwx clássico: ACLs finas com setfacl/getfacl e capabilities com getcap/setcap — poder pontual sem chmod 777 nem binário full root.",
    objectives: [
      "Ler getfacl e explicar entradas de usuário/grupo",
      "Aplicar setfacl em lab e remover com -b/-x",
      "Ver o ‘+’ no ls -l como pista de ACL",
      "Explicar capability vs setuid root",
      "Usar getcap em binários do sistema",
      "Evitar 777 e setuid como primeira resposta",
    ],
    content: [
      "rwx de dono/grupo/outros é grosso. **ACL** (Access Control List) deixa você dizer ‘usuário maria lê, grupo dev escreve’ no mesmo arquivo sem criar grupo descartável toda hora. `getfacl`/`setfacl` são as ferramentas; o `ls -l` mostra um `+` no modo quando há ACL estendida.",

      "**Capabilities** quebram o ‘poder root’ em pedaços (bind em porta <1024, raw network, etc.). Em vez de setuid root no binário inteiro, `setcap` entrega só a fatia necessária. `getcap -r /usr/bin 2>/dev/null` revela o que o sistema já usa. Menos superfície se o binário for comprometido — ainda não é mágica.",

      "Filesystem precisa de suporte a ACL (ext4 etc. ok na maioria dos defaults). Montagens especiais e alguns network FS têm limitações. Mask em ACL confunde iniciantes: leia `man acl` quando o getfacl mostrar mask efetiva.",

      "Quando NÃO: ACL emaranhada em vez de grupos bem desenhados; setcap em script interpretado sem entender o modelo; chmod 777 ‘para testar’ em produção. Quando SIM: diretório compartilhado de time, serviço que só precisa de net_bind_service.",

      "Ao terminar você seta e remove uma ACL de lab, lê getfacl, e interpreta um getcap de binário do sistema.",

    ],
    commands: [
      {
        command: "sudo apt install -y acl libcap2-bin",
        description:
          "Ferramentas setfacl/getfacl e getcap/setcap.",
        example: "sudo apt install -y acl libcap2-bin",
      },
      {
        command: "mkdir -p /tmp/acl-lab && touch /tmp/acl-lab/arq.txt && ls -l /tmp/acl-lab/arq.txt",
        description:
          "Arquivo de lab e modo clássico inicial.",
        example: "mkdir -p /tmp/acl-lab && touch /tmp/acl-lab/arq.txt && ls -l /tmp/acl-lab/arq.txt",
      },
      {
        command: "setfacl -m u:$USER:rw /tmp/acl-lab/arq.txt 2>/dev/null; getfacl /tmp/acl-lab/arq.txt",
        description:
          "ACL de usuário e leitura completa das entradas.",
        example: "setfacl -m u:$USER:rw /tmp/acl-lab/arq.txt; getfacl /tmp/acl-lab/arq.txt",
      },
      {
        command: "ls -l /tmp/acl-lab/arq.txt",
        description:
          "O + no modo indica ACL estendida.",
        example: "ls -l /tmp/acl-lab/arq.txt",
      },
      {
        command: "setfacl -b /tmp/acl-lab/arq.txt; getfacl /tmp/acl-lab/arq.txt; ls -l /tmp/acl-lab/arq.txt",
        description:
          "Remove ACLs estendidas (-b) e volta ao modo simples.",
        example: "setfacl -b /tmp/acl-lab/arq.txt",
      },
      {
        command: "getcap /usr/bin/ping 2>/dev/null; getcap /usr/bin/traceroute 2>/dev/null; getcap -r /usr/bin 2>/dev/null | head",
        description:
          "Capabilities em binários comuns (nomes variam por release).",
        example: "getcap /usr/bin/ping 2>/dev/null; getcap -r /usr/bin 2>/dev/null | head",
      },
      {
        command: "man setfacl",
        description:
          "Sintaxe -m -x -b -R default ACL em diretórios.",
        example: "man setfacl",
      },
      {
        command: "man capabilities",
        description:
          "Lista e significado das capabilities do Linux.",
        example: "man capabilities",
      },
      {
        command: "man getcap",
        description:
          "Ler capabilities de arquivos.",
        example: "man getcap",
      },
      {
        command: "namei -l /tmp/acl-lab/arq.txt",
        description:
          "Permissões ao longo do path — ACL no arquivo não salva se o diretório bloqueia traverse.",
        example: "namei -l /tmp/acl-lab/arq.txt",
      },
    ],
    tips: [
      {
        type: "success",
        title: "+ no ls -l",
        content:
          "Pista rápida de ACL.",
      },
      {
        type: "warning",
        title: "ACL sem x no diretório pai",
        content:
          "Sem execute no path, não chega no arquivo.",
      },
      {
        type: "info",
        title: "capability < setuid root",
        content:
          "Prefira o menor poder quando fizer sentido.",
      },
      {
        type: "danger",
        title: "chmod 777",
        content:
          "Ainda é a pior resposta padrão em servidor.",
      },
    ],
    practiceLabs: [
      {
        title: "ACL ida e volta",
        goal: "Arquivo com ACL visível no getfacl e no ls +; depois limpo com -b.",
        steps: [
          "criar /tmp/acl-lab/arq.txt",
          "setfacl -m u:$USER:rw",
          "getfacl e ls -l",
          "setfacl -b",
          "confirmar + sumiu",
        ],
        command: "mkdir -p /tmp/acl-lab && touch /tmp/acl-lab/arq.txt && setfacl -m u:$USER:rw /tmp/acl-lab/arq.txt && getfacl /tmp/acl-lab/arq.txt | tee ~/acl-lab.txt && setfacl -b /tmp/acl-lab/arq.txt && ls -l /tmp/acl-lab/arq.txt",
        verify:
          "Durante a ACL, getfacl mostra user:…:rw e ls tem +; apos -b, entradas extras somem.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Para que serve ACL?",
        answer:
          "Permissões finas por usuário/grupo além do trio owner/group/other.",
      },
      {
        id: 2,
        question: "Comandos principais de ACL?",
        answer:
          "getfacl e setfacl.",
      },
      {
        id: 3,
        question: "O que o + no ls -l indica?",
        answer:
          "Presença de ACL estendida.",
      },
      {
        id: 4,
        question: "setfacl -b faz o quê?",
        answer:
          "Remove ACLs estendidas do objeto.",
      },
      {
        id: 5,
        question: "O que são capabilities?",
        answer:
          "Fatias do poder de root atribuíveis a processos/binários.",
      },
      {
        id: 6,
        question: "getcap serve para quê?",
        answer:
          "Listar capabilities gravadas em arquivos.",
      },
      {
        id: 7,
        question: "Por que não preferir setuid root sempre?",
        answer:
          "Qualquer exploração do binário herda root total; capability limita o escopo.",
      },
      {
        id: 8,
        question: "ACL no arquivo basta se o dir é 700 de outro user?",
        answer:
          "Não; precisa percorrer o path (execute nos diretórios).",
      },
    ],
    references: [
      { title: "man acl", url: "https://manpages.debian.org/acl" },
      { title: "man setfacl", url: "https://manpages.debian.org/setfacl" },
      { title: "man capabilities", url: "https://manpages.debian.org/capabilities" },
      { title: "man getcap", url: "https://manpages.debian.org/getcap" },
    ],
  },
  {
    id: "auditoria-leve",
    title: "Auditoria leve — integridade e trilhas sem montar SOC",
    icon: "🔍",
    category: "Rede e Segurança",
    description:
      "Monte uma postura mínima de auditoria no Debian: o que logar, AIDE/integridade em alto nível, auditd intro e o hábito de revisar before/after de mudanças.",
    objectives: [
      "Separar logging, integridade e audit trail",
      "Saber o que journal/syslog já cobrem",
      "Instalar e entender a ideia do AIDE (baseline)",
      "Conhecer auditd em nível introdutório",
      "Definir o que vale alertar num VPS solo",
      "Não confundir ferramenta com processo (revisão humana)",
    ],
    content: [
      "Segurança sem **observabilidade** é fé. Em VPS solo você não precisa de SIEM caro no primeiro dia, mas precisa de: (1) logs que sobrevivem (journal persistente, logrotate) (2) noção de **integridade** (arquivos críticos mudaram?) (3) trilha de eventos de auth (ssh, sudo). Isso é auditoria leve.",

      "**AIDE** (Advanced Intrusion Detection Environment) gera um banco de hashes/metadados e depois compara. Fluxo: init → baseline confiável → check periódico → investigar diffs. Se a baseline for tirada com host já comprometido, você só ‘congela’ o mal — por isso baseline em momento limpo importa.",

      "**auditd** (Linux Audit) registra syscalls/eventos segundo regras (quem abriu /etc/shadow, execs, etc.). É poderoso e barulhento; em intro basta saber que existe, `auditctl -l`, logs em audit.log/journal, e que regras ruins enchem disco. Muitos hosts Debian não vêm com regras pesadas por default.",

      "Checklist prático VPS: journald com teto de disco; fail2ban+sshd log; unattended-upgrades log; `last`/`lastlog`/wtmp onde ainda fizer sentido (e wtmpdb no Debian novo); revisão semanal de `systemctl --failed` e pacotes instalados (`apt history`). Ferramenta sem ritual de olhar output = enfeite.",

      "Quando NÃO: ligar auditd com regras de paper da internet em disco de 10G; AIDE sem cron/timer de check; alertar tudo e ignorar tudo. Quando SIM: após hardening inicial, antes de expor serviço novo, após suspeita de invasão (com cuidado forense).",

      "Ao terminar você explica AIDE em uma frase, sabe onde olhar auth e failed units, e monta um mini ritual semanal — sem achar que instalou ‘antivírus mágico’.",

    ],
    commands: [
      {
        command: "systemctl --failed --no-pager",
        description:
          "Units em falha — higiene diária barata.",
        example: "systemctl --failed --no-pager",
      },
      {
        command: "journalctl -u ssh -u sshd -n 30 --no-pager 2>/dev/null | tail -n 30",
        description:
          "Amostra de auth SSH recente.",
        example: "journalctl -u ssh --no-pager -n 20 2>/dev/null || journalctl -u sshd -n 20 --no-pager",
      },
      {
        command: "sudo apt install -y aide 2>/dev/null || sudo apt install -y aide-common aide",
        description:
          "Pacote AIDE (nomes podem incluir aide-common).",
        example: "sudo apt install -y aide",
      },
      {
        command: "man aide",
        description:
          "init, check, update do banco de integridade.",
        example: "man aide",
      },
      {
        command: "dpkg -l aide 2>/dev/null | tail -n 1; ls /etc/aide 2>/dev/null | head",
        description:
          "Se instalou, config costuma viver sob /etc/aide.",
        example: "ls /etc/aide 2>/dev/null | head",
      },
      {
        command: "dpkg -l auditd 2>/dev/null | tail -n 1; systemctl is-active auditd 2>/dev/null || true",
        description:
          "auditd presente/ativo? Intro apenas.",
        example: "systemctl is-active auditd 2>/dev/null; dpkg -l auditd 2>/dev/null | tail -n 1",
      },
      {
        command: "sudo auditctl -l 2>/dev/null || echo 'auditctl indisponivel ou sem permissao'",
        description:
          "Lista regras ativas do Linux Audit (se houver).",
        example: "sudo auditctl -l 2>/dev/null | head",
      },
      {
        command: "grep -h ' install ' /var/log/apt/history.log 2>/dev/null | tail -n 15 || zgrep -h ' install ' /var/log/apt/history.log* 2>/dev/null | tail -n 15",
        description:
          "O que foi instalado via apt recentemente — mudança de superfície.",
        example: "grep -h ' install ' /var/log/apt/history.log 2>/dev/null | tail -n 15",
      },
      {
        command: "last -n 10 2>/dev/null || lastlog 2>/dev/null | head || echo 'use journal/wtmpdb conforme a release'",
        description:
          "Logins recentes (ferramenta varia no Debian novo — veja também journal).",
        example: "last -n 10 2>/dev/null || journalctl -u ssh --since today --no-pager | tail",
      },
      {
        command: "man auditctl",
        description:
          "Controle de regras do audit (avançado).",
        example: "man auditctl",
      },
    ],
    tips: [
      {
        type: "success",
        title: "Ritual > ferramenta",
        content:
          "Timer que ninguém lê não protege.",
      },
      {
        type: "warning",
        title: "Baseline suja",
        content:
          "AIDE em host já invadido valida o invasor.",
      },
      {
        type: "info",
        title: "Comece pelo journal e apt history",
        content:
          "Barato e imediatamente útil.",
      },
      {
        type: "danger",
        title: "auditd barulhento em disco cheio",
        content:
          "Regras amplas enchem partição e derrubam serviço.",
      },
    ],
    practiceLabs: [
      {
        title: "Checklist semanal de 10 minutos",
        goal: "failed units + amostra SSH + apt history + disk-usage journal.",
        steps: [
          "systemctl --failed",
          "journalctl SSH recente",
          "apt history install",
          "journalctl --disk-usage",
          "Anotar anomalias em ~/audit-week.txt",
        ],
        command: "{ echo '=== failed ==='; systemctl --failed --no-pager; echo; echo '=== journal disk ==='; journalctl --disk-usage; echo; echo '=== apt installs ==='; grep -h ' install ' /var/log/apt/history.log 2>/dev/null | tail -n 10; } | tee ~/audit-week.txt",
        verify:
          "Você tem um arquivo com quatro blocos e sabe o que investigaria se algo estranho aparecer.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Três pilares da auditoria leve?",
        answer:
          "Logs confiáveis, integridade de arquivos, trilha de autenticação/mudanças.",
      },
      {
        id: 2,
        question: "AIDE serve para quê?",
        answer:
          "Detectar mudanças em arquivos comparando com uma baseline de hashes/metadados.",
      },
      {
        id: 3,
        question: "Por que baseline limpa importa?",
        answer:
          "Baseline comprometida esconde o atacante.",
      },
      {
        id: 4,
        question: "auditd registra o quê em geral?",
        answer:
          "Eventos de auditoria do kernel segundo regras (acessos, execs, etc.).",
      },
      {
        id: 5,
        question: "Comando rápido de units falhas?",
        answer:
          "systemctl --failed",
      },
      {
        id: 6,
        question: "Onde ver histórico de pacotes apt?",
        answer:
          "/var/log/apt/history.log (e arquivos rotacionados).",
      },
      {
        id: 7,
        question: "Ferramenta sem revisão humana?",
        answer:
          "Gera dados; não substitui o hábito de ler e agir.",
      },
      {
        id: 8,
        question: "Risco de regras audit amplas?",
        answer:
          "Volume enorme de log, disco cheio, ruído que esconde incidente real.",
      },
    ],
    references: [
      { title: "man aide", url: "https://manpages.debian.org/aide" },
      { title: "AIDE project", url: "https://aide.github.io/" },
      { title: "man auditctl", url: "https://manpages.debian.org/auditctl" },
      { title: "Debian secure", url: "https://www.debian.org/doc/manuals/securing-debian-manual/" },
    ],
  },
];
