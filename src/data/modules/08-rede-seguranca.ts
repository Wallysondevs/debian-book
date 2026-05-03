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
      { title: "Manual do ip (iproute2)", url: "https://manpages.debian.org/bookworm/iproute2/ip.8.en.html" },
      { title: "Manual de interfaces(5)", url: "https://manpages.debian.org/bookworm/ifupdown/interfaces.5.en.html" },
      { title: "systemd-resolved.service(8)", url: "https://manpages.debian.org/bookworm/systemd/systemd-resolved.service.8.en.html" },
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
      { title: "Manual do ufw", url: "https://manpages.debian.org/bookworm/ufw/ufw.8.en.html" },
      { title: "Debian Wiki — nftables", url: "https://wiki.debian.org/nftables" },
      { title: "Manual do nft", url: "https://manpages.debian.org/bookworm/nftables/nft.8.en.html" },
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
      { title: "Manual do ssh", url: "https://manpages.debian.org/bookworm/openssh-client/ssh.1.en.html" },
      { title: "Manual do sshd_config", url: "https://manpages.debian.org/bookworm/openssh-server/sshd_config.5.en.html" },
      { title: "Manual do ssh_config (cliente)", url: "https://manpages.debian.org/bookworm/openssh-client/ssh_config.5.en.html" },
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
];
