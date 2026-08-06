import { Module } from "@/types/module";

export const fundamentos: Module[] = [
  {
    id: "linux-gnu",
    title: "O que é Linux e GNU",
    icon: "🐧",
    category: "Fundamentos Teóricos",
    description: "A história do Linux, o projeto GNU e o conceito de software livre — entenda os pilares antes de tocar no terminal.",
    objectives: [
      "Diferenciar com clareza kernel, sistema operacional e distribuição",
      "Entender por que GNU e Linux são projetos separados que se completam",
      "Reconhecer as 4 liberdades do software livre e o que é copyleft",
      "Identificar a versão do kernel, da distribuição e a arquitetura do seu sistema",
      "Saber traduzir comandos entre famílias de distros (Debian, Red Hat, Arch)",
      "Explicar para outra pessoa por que o Debian é considerado uma distro-mãe",
    ],
    content: [
      "Pense no seu computador como um prédio enorme cheio de andares: a memória RAM, o disco, a placa de rede, o teclado, a tela. Os programas que você usa (navegador, editor, jogos) são os moradores desses andares. Mas eles não falam diretamente com o elevador, com a fiação elétrica ou com a água — quem faz isso é o zelador. O kernel Linux é exatamente esse zelador: ele atende cada pedido (\"quero ler um arquivo\", \"quero abrir uma porta de rede\", \"quero usar o processador agora\") e cuida para que ninguém pise no pé do outro. Sem o kernel, cada programa teria que saber falar com cada peça de hardware, e isso seria um caos tão grande que nada funcionaria.",
      "O Linux nasceu em 1991, num quarto de estudante em Helsinki, na Finlândia. Linus Torvalds tinha 21 anos e estava insatisfeito com o MINIX, um sistema educacional pequeno usado nas aulas. Ele resolveu escrever seu próprio kernel, só para aprender, e mandou um e-mail famoso para um grupo de discussão dizendo que estava fazendo \"só um hobby, nada grande nem profissional como o GNU\". Esse \"hobby\" hoje roda em quase todo servidor da internet, em todos os celulares Android, em geladeiras inteligentes, em estações espaciais e nos supercomputadores mais potentes do mundo. O segredo foi liberar o código sob a licença GPL, que permitia que qualquer pessoa estudasse, mudasse e redistribuísse — assim, milhares de desenvolvedores foram somando força ao projeto.",
      "Mas só o kernel não dá conta. Imagine que você tem o motor mais potente do mundo, mas não tem volante, nem pedais, nem painel: o motor funciona, mas você não consegue dirigir. Para você sentar no carro e ir para algum lugar, precisa de um monte de outras peças. No mundo do software essas peças são: o shell (que entende os comandos que você digita), os editores de texto, o compilador (que transforma código em programa), as bibliotecas que cuidam de coisas básicas como abrir arquivos, e os utilitários como ls, cp, mv, cat, grep. Esse conjunto chama-se, em geral, GNU.",
      "O Projeto GNU começou em 1983, oito anos antes do Linux existir, e foi idealizado por Richard Stallman, então pesquisador no MIT. A sigla é uma piada recursiva: GNU's Not Unix (GNU não é Unix). A motivação foi prática e filosófica ao mesmo tempo: nos anos 1980, o sistema Unix começou a ser fechado por empresas, e Stallman temia um futuro em que ninguém poderia mais estudar ou consertar o software que rodava nos próprios computadores. Ele resolveu então construir, peça por peça, um Unix totalmente livre. Quando o Linux apareceu em 1991, faltava apenas o kernel para o GNU virar um sistema completo. A junção das duas coisas formou o que hoje muita gente chama simplesmente de \"Linux\", mas que tecnicamente é GNU/Linux.",
      "Aqui aparece a primeira confusão clássica: \"software livre\" não é o mesmo que \"software grátis\". Em inglês, a palavra free serve para os dois sentidos (free as in freedom, free as in free beer). Software livre é sobre liberdade, não sobre preço. Você pode até cobrar para distribuir software livre — várias empresas fazem isso (Red Hat, Canonical, SUSE). O que importa são as quatro liberdades fundamentais definidas por Stallman, numeradas a partir do zero (jeito típico de programador): liberdade 0, usar para qualquer propósito; liberdade 1, estudar como funciona e modificar (precisa do código-fonte); liberdade 2, redistribuir cópias; liberdade 3, melhorar e compartilhar as melhorias. A licença GPL garante essas quatro liberdades por meio de um truque chamado copyleft: quem distribui código GPL modificado é obrigado a manter a mesma licença. É um \"vírus do bem\" que impede que alguém pegue um software livre e feche-o.",
      "Muita gente confunde também kernel, sistema operacional e distribuição. Vale a pena fixar esses três termos antes de ir adiante. Kernel é o pedaço de software mais central, o que conversa direto com o hardware. Sistema operacional é o conjunto kernel + ferramentas básicas que você usa todo dia (shell, utilitários, bibliotecas). Distribuição é o sistema operacional empacotado por um grupo (uma comunidade ou empresa) com escolhas específicas: qual gerenciador de pacotes usar, quais programas vir pré-instalados, qual ambiente gráfico, qual ciclo de atualização. Debian, Ubuntu, Fedora, Arch e openSUSE são distribuições. Todas usam kernel Linux. Quase todas usam ferramentas GNU. O que muda é a embalagem.",
      "Existem outras famílias de distribuições além do Debian, e conhecer a árvore genealógica ajuda muito quando você precisa adaptar um tutorial. A família Debian (Debian, Ubuntu, Mint, Pop!_OS, Kali, Raspberry Pi OS, Proxmox) usa o gerenciador de pacotes APT e arquivos .deb. A família Red Hat (Fedora, RHEL, CentOS, Rocky, AlmaLinux) usa DNF/YUM e arquivos .rpm. A família Arch (Arch, Manjaro, EndeavourOS) usa pacman. A SUSE usa zypper. Quando um tutorial diz \"sudo dnf install nginx\", você precisa traduzir mentalmente para \"sudo apt install nginx\". Os comandos do sistema (ls, cat, grep, ssh) são iguais em todas, porque vêm do GNU; o que muda é a forma de instalar e atualizar.",
      "Vamos falar do erro mais comum dos iniciantes: achar que Linux é uma marca, como Windows ou macOS. Não é. Linux é um kernel, e existem centenas de distribuições que o usam, cada uma com personalidade diferente. Um arquivo .deb feito para Debian não roda direto no Fedora. Um tutorial para Ubuntu pode mencionar comandos que não existem no Arch. Quando alguém pergunta \"funciona em Linux?\", a pergunta correta seria \"funciona em qual distribuição, em qual versão, com qual kernel?\". Saber isso te coloca anos à frente de quem só sabe que existe \"o tal do Linux\".",
      "No dia a dia prático, isso aparece o tempo todo. Quando você roda \"sudo apt install vim\", uma orquestra invisível entra em cena: o apt (utilitário do Debian) lê seus arquivos de configuração, conecta a um servidor de repositório, baixa o pacote .deb pré-compilado, verifica a assinatura criptográfica para garantir que ninguém adulterou, resolve as dependências (\"o vim precisa do libc, do ncurses, etc.\"), descompacta os arquivos nos lugares certos do disco e atualiza o banco de dados interno de pacotes instalados. Tudo isso só funciona porque kernel, GNU, Debian e milhares de mantenedores trabalham em conjunto. Não é mágica — é engenharia de software livre construída ao longo de décadas.",
      "Ao terminar este capítulo, você vai conseguir abrir um terminal, descobrir qual versão do kernel está rodando, qual distribuição você usa, qual a arquitetura do seu processador e quanta memória disponível. Vai também saber explicar para um amigo curioso a diferença entre Linux e GNU/Linux, e por que essa pequena distinção importa. Esse é o vocabulário de base — sem ele, qualquer tutorial mais avançado vai parecer língua estrangeira.",
    ],
    commands: [
      {
        command: "uname",
        description: "Exibe informações sobre o kernel e o sistema. É o comando que responde 'em qual kernel estou rodando?'.",
        example: "uname -a",
        flags: [
          { flag: "-a", description: "Tudo: kernel, hostname, versão, arquitetura, data de compilação" },
          { flag: "-r", description: "Só a versão do kernel (ex: 6.12.41-amd64)" },
          { flag: "-m", description: "Só a arquitetura da máquina (x86_64, aarch64, armv7l)" },
          { flag: "-n", description: "Só o hostname (nome da máquina na rede)" },
          { flag: "-s", description: "Só o nome do kernel (Linux)" },
          { flag: "-o", description: "Sistema operacional (GNU/Linux)" },
        ],
        output: "Linux debian 6.12.41-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.12.41-1 (2025-08-01) x86_64 GNU/Linux",
      },
      {
        command: "cat /etc/os-release",
        description: "Exibe informações padronizadas sobre a distribuição: nome, versão, ID, codinome. Funciona em qualquer distro moderna e é o jeito recomendado de identificar o sistema em scripts.",
        example: "cat /etc/os-release",
        output: 'PRETTY_NAME="Debian GNU/Linux 13 (trixie)"\nNAME="Debian GNU/Linux"\nVERSION_ID="13"\nVERSION="13 (trixie)"\nVERSION_CODENAME=trixie\nID=debian\nHOME_URL="https://www.debian.org/"',
      },
      {
        command: "lsb_release",
        description: "Mostra informações da distribuição no padrão LSB (Linux Standard Base). Pode precisar instalar com 'sudo apt install lsb-release'.",
        example: "lsb_release -a",
        flags: [
          { flag: "-a", description: "Tudo: distribuição, versão, codinome" },
          { flag: "-d", description: "Só a descrição (linha de PRETTY_NAME)" },
          { flag: "-c", description: "Só o codinome (bookworm, bullseye, trixie)" },
          { flag: "-r", description: "Só o número da release (12, 11)" },
        ],
        output: "Distributor ID: Debian\nDescription:    Debian GNU/Linux 13 (trixie)\nRelease:        13\nCodename:       trixie",
      },
      {
        command: "hostnamectl",
        description: "Mostra um resumo bonito do sistema: hostname, kernel, distribuição, arquitetura, virtualização. Fornecido pelo systemd.",
        example: "hostnamectl",
        output: " Static hostname: debian\n       Icon name: computer-laptop\n         Chassis: laptop\n      Machine ID: 9f...\nOperating System: Debian GNU/Linux 13 (trixie)\n          Kernel: Linux 6.12.41-amd64\n    Architecture: x86-64",
      },
      {
        command: "cat /proc/version",
        description: "Detalhes do kernel: versão, compilador usado, data do build. /proc é um sistema de arquivos virtual com informações do kernel em tempo real.",
        example: "cat /proc/version",
        output: "Linux version 6.12.41-amd64 (debian-kernel@lists.debian.org) (gcc-14 (Debian 14.2.0-19) 14.2.0, GNU ld (GNU Binutils for Debian) 2.44) #1 SMP PREEMPT_DYNAMIC Debian 6.12.41-1 (2025-08-01)",
      },
      {
        command: "cat /proc/cpuinfo",
        description: "Detalhes do processador: modelo, núcleos, velocidade, flags suportadas. Útil para diagnosticar performance e descobrir suporte a virtualização (vmx/svm).",
        example: "grep 'model name' /proc/cpuinfo | head -1",
        output: "model name      : Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz",
      },
      {
        command: "nproc",
        description: "Mostra apenas o número de núcleos de CPU disponíveis. Útil em scripts para ajustar paralelismo (make -j$(nproc)).",
        example: "nproc",
        output: "8",
      },
      {
        command: "free",
        description: "Mostra uso de memória RAM e swap. Essencial para ver se o sistema está com pressão de memória.",
        example: "free -h",
        flags: [
          { flag: "-h", description: "Formato legível para humanos (KB, MB, GB)" },
          { flag: "-m", description: "Forçar saída em MB" },
          { flag: "-g", description: "Forçar saída em GB" },
          { flag: "-s 2", description: "Atualizar a cada 2 segundos (Ctrl+C para sair)" },
          { flag: "-t", description: "Mostra linha 'Total' somando RAM + swap" },
        ],
        output: "               total        used        free      shared  buff/cache   available\nMem:           7.6Gi       1.2Gi       5.1Gi        85Mi       1.4Gi       6.1Gi\nSwap:          2.0Gi          0B       2.0Gi",
      },
      {
        command: "uptime",
        description: "Mostra há quanto tempo o sistema está ligado, quantos usuários conectados e o load average. Servidores Linux costumam ter uptimes longos como medalha.",
        example: "uptime",
        flags: [
          { flag: "-p", description: "Formato amigável: 'up 3 hours, 15 minutes'" },
          { flag: "-s", description: "Mostra desde quando está ligado (data/hora do boot)" },
        ],
        output: "14:32:11 up 47 days, 3:18, 2 users, load average: 0.05, 0.12, 0.09",
      },
      {
        command: "whoami",
        description: "Diz qual usuário você é agora. Trivial, mas útil quando você usa 'sudo' ou 'su' e perde a noção de quem está executando.",
        example: "whoami",
        output: "ana",
      },
      {
        command: "id",
        description: "Mostra seu UID, GID e a lista de grupos a que você pertence. É a 'carteira de identidade' Unix do usuário atual.",
        example: "id",
        output: "uid=1000(ana) gid=1000(ana) groups=1000(ana),27(sudo),100(users)",
      },
      {
        command: "echo $SHELL",
        description: "Mostra qual shell está configurado como padrão para o seu usuário (bash, zsh, fish). Não confunde com qual shell está rodando agora.",
        example: "echo $SHELL",
        output: "/bin/bash",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Por que dizemos GNU/Linux",
        content:
          "Quando você roda 'ls', 'cp', 'cat' ou 'bash', está usando ferramentas GNU. Quando seu programa pede memória, abre um arquivo ou cria uma conexão de rede, está pedindo ao kernel Linux. As duas peças trabalham juntas — daí 'GNU/Linux'. Se quiser ser preciso, fale GNU/Linux. Se quiser ser entendido em uma reunião apressada, fale Linux.",
      },
      {
        type: "info",
        title: "Famílias de distribuição compartilham comandos",
        content:
          "Tudo que você aprende aqui sobre Debian funciona praticamente igual em Ubuntu, Linux Mint, Pop!_OS, Kali, Raspberry Pi OS e Proxmox. Mas NÃO funciona da mesma forma em Fedora, RHEL, openSUSE ou Arch — esses usam outros gerenciadores de pacotes (dnf, zypper, pacman). Se um tutorial diz 'sudo dnf install', traduza para 'sudo apt install'.",
      },
      {
        type: "warning",
        title: "Cuidado com tutoriais antigos",
        content:
          "Tutoriais de antes de 2016 podem ensinar coisas que mudaram bastante (init system, configuração de rede, gerenciamento de impressoras). Se algo não funciona, confira a data do tutorial. Linux mudou muito nos últimos 10 anos, principalmente com a adoção do systemd.",
      },
      {
        type: "success",
        title: "Saiba sua versão de cor",
        content:
          "Sempre que pedir ajuda em fórum, lista de discussão ou no chat, comece informando: distribuição (cat /etc/os-release), versão do kernel (uname -r), arquitetura (uname -m). Isso economiza horas de trocas de mensagens — quem ajuda precisa dessas informações antes de qualquer coisa.",
      },
      {
        type: "danger",
        title: "Não rode comandos de fontes desconhecidas como root",
        content:
          "Você vai ver muito 'sudo' neste livro. Antes de colar qualquer comando vindo de um blog aleatório, leia o que ele faz. Comandos de uma linha podem apagar discos inteiros, mudar permissões críticas ou instalar backdoors. A regra de ouro: não execute o que não entende com privilégios de root.",
      },
    ],
    practiceLabs: [
      {
        title: "Identifique seu sistema do zero",
        goal: "Descobrir qual versão do Debian, qual kernel, qual arquitetura, quantos núcleos e quanta memória seu sistema tem. Sempre que pedir ajuda em um fórum, essas informações são as primeiras a serem perguntadas — então automatizar a coleta vale ouro.",
        steps: [
          "Abra o terminal (Ctrl+Alt+T no GNOME, ou pelo menu de aplicativos).",
          "Cole o bloco de comandos abaixo de uma vez só (selecione tudo, copie, cole no terminal e dê Enter).",
          "Leia cada bloco da saída e tente reconhecer o que cada linha significa.",
          "Salve o resultado em um arquivo de texto (com '> meu-sistema.txt' no final do bloco) para ter como referência.",
          "Repita o teste em outra máquina, se tiver, e compare as diferenças.",
        ],
        command: `echo "=== Distribuição ==="
cat /etc/os-release | grep PRETTY_NAME

echo ""
echo "=== Kernel ==="
uname -r

echo ""
echo "=== Arquitetura ==="
uname -m

echo ""
echo "=== Núcleos do CPU ==="
nproc

echo ""
echo "=== Memória RAM ==="
free -h | grep Mem

echo ""
echo "=== Tempo ligado ==="
uptime -p

echo ""
echo "=== Usuário atual ==="
whoami && id`,
        expected: `=== Distribuição ===
PRETTY_NAME="Debian GNU/Linux 13 (trixie)"

=== Kernel ===
6.12.41-amd64

=== Arquitetura ===
x86_64

=== Núcleos do CPU ===
4

=== Memória RAM ===
Mem:    7.6Gi    1.2Gi    5.1Gi    85Mi    1.4Gi    6.1Gi

=== Tempo ligado ===
up 3 hours, 15 minutes

=== Usuário atual ===
ana
uid=1000(ana) gid=1000(ana) groups=1000(ana),27(sudo)`,
        verify:
          "Se algum comando der 'command not found', instale com 'sudo apt install procps coreutils'. O 'lsb_release' precisa de 'sudo apt install lsb-release'. Se o resultado não tem PRETTY_NAME, sua distro pode ser muito antiga ou não-padrão.",
      },
      {
        title: "Compare GNU coreutils com a versão do sistema",
        goal: "Demonstrar na prática que utilitários como ls, cp e cat fazem parte do projeto GNU, separados do kernel. Cada um tem versão própria.",
        steps: [
          "Use --version em alguns utilitários comuns.",
          "Note que a saída diz explicitamente 'GNU coreutils'.",
          "Compare com a versão do kernel (uname -r).",
          "Reflita: o kernel pode atualizar sem que coreutils mude e vice-versa.",
        ],
        command: `ls --version | head -1
cat --version | head -1
bash --version | head -1
echo "---"
uname -r`,
        expected: `ls (GNU coreutils) 9.1
cat (GNU coreutils) 9.1
GNU bash, version 5.2.15(1)-release (x86_64-pc-linux-gnu)
---
6.12.41-amd64`,
        verify:
          "Se você vê 'GNU coreutils' nas três primeiras linhas, fica clara a separação: o kernel é Linux 6.x, mas os utilitários do dia a dia são GNU. Esses dois mundos coexistem e são atualizados de forma independente.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual é a diferença, com suas palavras, entre 'Linux' e 'GNU/Linux'?",
        hint: "Pense em quem faz o quê: quem fala com o hardware, quem fornece o terminal e os comandos.",
        answer:
          "Linux é apenas o kernel — o software que conversa com o hardware (processador, memória, dispositivos). GNU/Linux é o sistema completo: kernel Linux + ferramentas GNU (bash, ls, cp, grep, gcc, glibc) + gerenciador de pacotes + interface gráfica. Quando você usa 'cat arquivo.txt', está usando uma ferramenta GNU rodando sobre o kernel Linux. Os dois projetos são separados, mas se complementam.",
      },
      {
        id: 2,
        question: "Quais são as 4 liberdades do software livre?",
        hint: "Elas são numeradas de 0 a 3.",
        answer:
          "0) Liberdade de USAR o programa para qualquer propósito. 1) Liberdade de ESTUDAR e adaptar o programa (requer acesso ao código-fonte). 2) Liberdade de REDISTRIBUIR cópias. 3) Liberdade de MELHORAR o programa e distribuir as melhorias. A licença GPL garante essas quatro pelo mecanismo do copyleft.",
      },
      {
        id: 3,
        question: "Qual comando mostra apenas a versão do seu kernel Linux?",
        answer: "uname -r — mostra apenas a versão (ex: 6.12.41-amd64). 'uname -a' mostra tudo de uma vez (kernel, hostname, arquitetura, data de build).",
      },
      {
        id: 4,
        question: "Onde está armazenado o nome da sua distribuição Linux?",
        hint: "É um arquivo de texto em /etc, padronizado entre todas as distros modernas.",
        answer:
          "/etc/os-release é o arquivo padronizado e funciona em todas as distros modernas. Use 'cat /etc/os-release'. Versões antigas tinham /etc/debian_version, /etc/lsb-release ou /etc/issue. Em scripts, prefira /etc/os-release porque a sintaxe (chave=valor) é fácil de parsear.",
      },
      {
        id: 5,
        question: "Por que dizemos que o Debian é uma 'distribuição-mãe'?",
        answer:
          "Porque dezenas de outras distribuições derivam dele e usam apt, sources.list e dpkg da mesma forma: Ubuntu, Linux Mint, Pop!_OS, Kali Linux, Raspberry Pi OS, MX Linux, Proxmox VE, Tails, Devuan, entre outras. Aprender Debian = saber o básico de boa parte do mercado.",
      },
      {
        id: 6,
        question: "O que significa GPL e o que é 'copyleft'?",
        hint: "Pense em uma licença que se 'gruda' ao código.",
        answer:
          "GPL = GNU General Public License, criada pela Free Software Foundation. Copyleft é o mecanismo: se você pega um código GPL, modifica e distribui, é obrigado a manter a mesma licença GPL. Isso impede que alguém pegue software livre, feche o código e o transforme em produto proprietário. O kernel Linux usa GPLv2.",
      },
      {
        id: 7,
        question: "Como você descobriria a arquitetura do processador da sua máquina (x86_64, arm64 etc.)?",
        answer:
          "Use 'uname -m' (resposta direta, ex: x86_64). Em distros Debian, 'dpkg --print-architecture' devolve a arquitetura usada para escolher pacotes (ex: amd64). Os dois nomes existem por razões históricas: x86_64 é o nome do processador, amd64 é o nome do pacote no Debian.",
      },
      {
        id: 8,
        question: "Se um tutorial pede 'sudo dnf install nginx', o que você faz no Debian?",
        answer:
          "Traduz para o gerenciador de pacotes da sua família. No Debian/Ubuntu: 'sudo apt install nginx'. dnf é o gerenciador de pacotes da família Red Hat (Fedora, RHEL, Rocky), enquanto apt é o do Debian. O nome do pacote (nginx) costuma ser o mesmo, só o comando de instalação muda.",
      },
    ],
    references: [
      { title: "Site oficial do Projeto GNU", url: "https://www.gnu.org/" },
      { title: "Site oficial do kernel Linux", url: "https://www.kernel.org/" },
      { title: "Lista oficial de distribuições baseadas em Debian", url: "https://www.debian.org/derivatives/" },
      { title: "As 4 liberdades do software livre (em PT-BR)", url: "https://www.gnu.org/philosophy/free-sw.pt-br.html" },
      { title: "Histórico do anúncio original do Linux por Linus Torvalds", url: "https://www.cs.cmu.edu/~awb/linux.history.html" },
    ],
  },

  {
    id: "projeto-debian",
    title: "O Projeto Debian",
    icon: "🌀",
    category: "Fundamentos Teóricos",
    description: "Por que o Debian existe há mais de 30 anos, como ele é organizado e o que são branches stable, testing e unstable.",
    objectives: [
      "Conhecer a história e a filosofia do Debian e seu fundador",
      "Entender o Contrato Social e as DFSG e por que importam para você",
      "Diferenciar com clareza as branches stable, testing e unstable",
      "Reconhecer os codinomes (Toy Story) e o ciclo de releases",
      "Saber escolher a branch certa para servidor, desktop ou laboratório",
      "Entender o ciclo de suporte de segurança (stable, oldstable, LTS)",
    ],
    content: [
      "Imagine uma cidade que existe há 30 anos, mantida por mais de mil voluntários espalhados pelo mundo, sem dono, sem CEO, sem investidores cobrando lucro trimestral. As decisões são tomadas por mérito técnico, em listas de discussão públicas, com o código de cada construção aberto para qualquer pessoa inspecionar. Essa cidade existe — chama-se Projeto Debian, e o que ela 'constrói' é uma das distribuições Linux mais respeitadas do mundo. Entender como o Debian funciona ajuda a entender por que ele é tão estável, por que ele é base para tantas outras distros, e por que escolher Debian para um servidor de produção é geralmente uma decisão segura.",
      "O Debian foi fundado em 16 de agosto de 1993 por Ian Murdock, então estudante de ciência da computação na Universidade Purdue, nos Estados Unidos. O nome é a junção de Debra (sua namorada na época, depois esposa) com Ian — Deb + Ian = Debian. A pronúncia oficial em inglês é 'Déb-ian', com sotaque na primeira sílaba. Ian queria criar uma distribuição Linux mantida abertamente, no espírito do projeto GNU, sem dono comercial. Antes do Debian, a Slackware era popular, mas dependia muito de uma única pessoa. Ian achou que era arriscado depender de um indivíduo e criou um modelo coletivo que se mostrou genial: o Debian sobreviveu a tudo nesses 30 anos, inclusive ao falecimento do próprio fundador em 2015.",
      "Em 1994, Ian escreveu o 'Manifesto Debian', um documento curto explicando a filosofia: software 100% livre, mantido por uma comunidade global, com decisões técnicas tomadas por meritocracia. Esse manifesto evoluiu em 1997 no que hoje chamamos de Contrato Social do Debian (Debian Social Contract) e nas Debian Free Software Guidelines (DFSG). Antes de você revirar os olhos pensando 'documento legal não me interessa', preste atenção: essas duas peças explicam coisas muito práticas, como por que o driver da sua placa de Wi-Fi pode estar em um repositório separado e por que firefox no Debian se chama 'firefox-esr'.",
      "O Contrato Social tem cinco promessas, e vale conhecer todas. Primeira, o Debian permanecerá 100% livre — quer dizer, o sistema 'oficial' não vai depender de software proprietário. Segunda, vamos retribuir à comunidade — todo trabalho do Debian volta para a comunidade de software livre. Terceira, não vamos esconder problemas — o sistema de bugs do Debian é totalmente público, qualquer um pode ver, comentar e reportar. Quarta, nossas prioridades são nossos usuários e o software livre — quando há conflito, esses dois grupos vencem. Quinta, trabalhos que não atendem nossos padrões vão para áreas separadas (non-free, contrib), mas não fazem parte do sistema oficial. É essa quinta promessa que explica a separação dos componentes que veremos no próximo capítulo.",
      "O Debian tem uma das estruturas mais peculiares do mundo open source: três branches paralelas que são, na verdade, três estados de maturidade pelos quais um pacote passa. O 'stable' é a versão recomendada para uso real: cada pacote ali foi testado meses, recebe apenas correções de bugs e segurança, e não muda comportamento durante o ciclo. O 'testing' é o que vai virar o próximo stable: pacotes que ficaram um tempo suficiente em unstable sem bugs graves migram para cá. Ele é razoavelmente estável, mas pode quebrar de vez em quando. Já o 'unstable', sempre apelidado de 'sid', é onde tudo entra primeiro — quando um desenvolvedor empacota uma versão nova de algo, vai para sid. É a área de testes mais agressiva.",
      "Existem analogias úteis para fixar as três branches. Pense em uma fábrica de cerveja: o 'unstable' é a cerveja saindo do tanque, ainda fermentando, sem rótulo, com risco de explodir; o 'testing' é a cerveja já engarrafada, na geladeira, esperando a degustação final; o 'stable' é a cerveja já com rótulo, na prateleira do mercado, pronta para você levar pra casa. Outra analogia: 'unstable' é o restaurante novo no primeiro mês (tudo experimental), 'testing' é o restaurante depois de seis meses (cardápio quase definitivo) e 'stable' é o restaurante consagrado (você sabe exatamente o que vai comer). A escolha de qual branch usar depende do seu apetite por risco.",
      "Os codinomes do Debian são todos personagens do filme Toy Story, escolha feita por Bruce Perens — segundo líder do projeto, que trabalhou na Pixar. A lista cronológica é divertida: Buzz (1.1, 1996), Rex (1.2), Bo (1.3), Hamm (2.0), Slink (2.1), Potato (2.2), Woody (3.0), Sarge (3.1), Etch (4.0), Lenny (5.0), Squeeze (6.0), Wheezy (7), Jessie (8), Stretch (9), Buster (10), Bullseye (11), Bookworm (12), Trixie (13 — em desenvolvimento) e Forky (14 — futuro). E o 'sid', a branch unstable, leva o nome do menino vizinho do Andy que destrói brinquedos — referência apropriada para o lugar onde tudo pode quebrar.",
      "O ciclo de releases tradicional do Debian é 'quando estiver pronto'. Não há data fixa: uma versão sai quando a comunidade decide que está suficientemente boa. Na prática, isso dá um intervalo de cerca de dois anos entre releases stable. Cada versão recebe atualizações de segurança por aproximadamente três anos como 'oldstable' e depois mais dois anos pelo time de LTS (Long Term Support), totalizando cerca de cinco anos de suporte. O bookworm (Debian 12), lançado em junho de 2023, deve receber suporte até por volta de 2028. Para quem administra servidor, isso é ouro: você não precisa migrar tudo todo ano.",
      "O Debian também é a base de muitas distribuições famosas, e isso multiplica seu impacto. Ubuntu (da Canonical, foco em desktop e nuvem), Linux Mint (foco em ex-usuários do Windows), Kali Linux (segurança ofensiva, pentest), Raspberry Pi OS (oficial do Raspberry Pi), Proxmox VE (virtualização e contêineres), Tails (anonimato com Tor), Devuan (Debian sem systemd), MX Linux, Pop!_OS — todas usam apt, dpkg e a estrutura de repositórios do Debian. Quando você aprende Debian, ganha conhecimento aplicável a todas elas. Quando você reporta um bug em qualquer um desses derivados, há boa chance de o bug estar lá no Debian original.",
      "Uma confusão comum entre iniciantes é achar que Debian é 'Linux para nerds, complicado e antigo'. Não é mais assim. Desde o Debian 12 (bookworm), o instalador oficial inclui firmware non-free por padrão, o que resolve a frustração histórica de Wi-Fi não funcionar logo após instalar. O instalador gráfico está moderno, suporta partição automática, escolha de ambiente gráfico (GNOME, KDE, XFCE, MATE, LXQt), e tem instalação via internet (netinst) que é praticamente automática. Ao terminar este capítulo você vai conseguir descobrir qual versão do Debian você roda, qual é o codinome dela, escolher uma branch apropriada para um cenário hipotético e explicar para alguém o que torna o Debian especial.",
    ],
    commands: [
      {
        command: "cat /etc/debian_version",
        description: "Mostra a versão exata do Debian (mais detalhada que /etc/os-release). Para a branch testing, mostra o codinome em vez do número.",
        example: "cat /etc/debian_version",
        output: "13.1",
      },
      {
        command: "lsb_release -c",
        description: "Mostra apenas o codinome da release. Útil em scripts (configurar sources.list, por exemplo).",
        example: "lsb_release -c",
        output: "Codename:       trixie",
      },
      {
        command: "lsb_release -cs",
        description: "Mesma coisa que -c mas no modo 'short': só o codinome puro, sem o rótulo. Ideal para usar em scripts ($(lsb_release -cs)).",
        example: "lsb_release -cs",
        output: "trixie",
      },
      {
        command: "dpkg --print-architecture",
        description: "Mostra a arquitetura nativa do sistema (amd64, arm64, i386, armhf, riscv64). Importante para decidir quais pacotes baixar.",
        example: "dpkg --print-architecture",
        output: "amd64",
      },
      {
        command: "apt-cache policy",
        description: "Mostra de qual repositório/branch um pacote está sendo instalado. Essencial para entender de onde vêm seus pacotes.",
        example: "apt-cache policy bash",
        output: "bash:\n  Instalado: 5.2.15-2+b7\n  Candidato: 5.2.15-2+b7\n  Tabela de versão:\n *** 5.2.15-2+b7 500\n        500 http://deb.debian.org/debian bookworm/main amd64 Packages\n        100 /var/lib/dpkg/status",
      },
      {
        command: "cat /etc/apt/sources.list",
        description: "Mostra de quais repositórios o apt vai buscar pacotes. Cada linha 'deb http://...' é uma fonte ativa.",
        example: "cat /etc/apt/sources.list",
        output: "deb http://deb.debian.org/debian trixie main contrib non-free non-free-firmware\ndeb http://security.debian.org/debian-security trixie-security main contrib non-free non-free-firmware\ndeb http://deb.debian.org/debian trixie-updates main contrib non-free non-free-firmware",
      },
      {
        command: "ls /etc/apt/sources.list.d/",
        description: "Lista repositórios extras configurados. Cada arquivo .list adiciona repositórios além do principal.",
        example: "ls /etc/apt/sources.list.d/",
        output: "google-chrome.list  vscode.list",
      },
      {
        command: "uptime",
        description: "Quanto tempo o sistema está ligado, quantos usuários conectados e load average. Servidores Debian frequentemente acumulam meses de uptime.",
        example: "uptime",
        output: "14:32:11 up 47 days, 3:18, 2 users, load average: 0.05, 0.12, 0.09",
      },
      {
        command: "dpkg -l",
        description: "Lista todos os pacotes instalados via dpkg. Combine com grep para filtrar.",
        example: "dpkg -l | wc -l",
        output: "2147",
      },
      {
        command: "apt list --upgradable",
        description: "Mostra quais pacotes têm atualização disponível depois de um 'apt update'. Indispensável antes de fazer 'apt upgrade'.",
        example: "apt list --upgradable",
        output: "Listando... Concluído\nlibssl3/bookworm-security 3.0.13-1~deb12u1 amd64 [atualizável de: 3.0.11-1~deb12u2]\nopenssl/bookworm-security 3.0.13-1~deb12u1 amd64 [atualizável de: 3.0.11-1~deb12u2]",
      },
      {
        command: "reportbug",
        description: "Ferramenta oficial para reportar bugs ao Debian. Coleta informações do sistema automaticamente. Instale com 'sudo apt install reportbug'.",
        example: "reportbug nome-do-pacote",
        output: "(abre um questionário interativo guiando o envio do bug)",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Como saber qual branch usar?",
        content:
          "Para servidor em produção: stable, sem dúvida. Para desktop pessoal estável: stable. Para desktop com pacotes mais novos (e algum risco de quebra): testing. Para desenvolvimento bleeding-edge ou contribuir com o Debian: sid. NUNCA misture branches no mesmo sistema sem entender 'apt pinning' — você pode quebrar tudo.",
      },
      {
        type: "info",
        title: "Bookworm tem firmware non-free incluso por padrão",
        content:
          "A partir do Debian 12 (bookworm), o instalador oficial inclui firmware non-free (para Wi-Fi, vídeo, áudio) por padrão. Antes era preciso baixar uma ISO especial. Foi uma decisão pragmática para reduzir frustração de usuários novos — Wi-Fi funciona logo após a instalação na maior parte dos notebooks modernos.",
      },
      {
        type: "success",
        title: "O Bug Tracking System é público e poderoso",
        content:
          "Todo bug do Debian fica em https://bugs.debian.org/ — qualquer pessoa pode ver, comentar e até reportar. É uma das coisas mais transparentes do mundo do software. Para reportar um bug, instale 'reportbug' e rode 'reportbug nome-pacote' — ele coleta dados do sistema e formata o e-mail certinho.",
      },
      {
        type: "warning",
        title: "Não confunda 'testing' com 'instável de verdade'",
        content:
          "A branch 'testing' não é tão arriscada quanto o nome sugere — pacotes só chegam ali depois de passarem por sid sem bugs críticos. Mas em momentos de transição (poucos meses antes de virar stable), pode ficar quebrada por curtos períodos. Para servidores, mesmo assim, evite testing.",
      },
      {
        type: "danger",
        title: "Misturar repositórios sem pinning quebra o sistema",
        content:
          "Não copie e cole repositórios de branches diferentes (stable + testing, ou stable + sid) no sources.list sem entender 'apt pinning'. O sintoma típico de mistura mal feita é o sistema querer atualizar quase tudo para versões incompatíveis, gerando dependências quebradas que podem impedir o boot.",
      },
    ],
    practiceLabs: [
      {
        title: "Identifique sua versão e codinome do Debian",
        goal: "Saber exatamente qual versão do Debian você roda. Isso é essencial para seguir tutoriais — muitos são específicos de bookworm vs bullseye, e configurar repositórios depende do codinome correto.",
        steps: [
          "Abra o terminal.",
          "Rode os comandos abaixo um por um e leia cada saída.",
          "Compare com a tabela de codinomes: bullseye=11, bookworm=12, trixie=13.",
          "Anote sua versão num post-it virtual — você vai precisar muitas vezes.",
        ],
        command: `echo "=== Versao numerica ==="
cat /etc/debian_version

echo ""
echo "=== Codinome ==="
lsb_release -c 2>/dev/null || grep CODENAME /etc/os-release

echo ""
echo "=== Release info completo ==="
cat /etc/os-release`,
        verify:
          "Se a versão numérica começa com '13', você está em trixie (estável atual desde agosto de 2025). Se começa com '12', está em bookworm (oldstable); '11' é bullseye. Se mostra 'forky/sid' em vez de número, está em testing/unstable.",
      },
      {
        title: "Explore o Debian Bug Tracker pela linha de comando",
        goal: "Ver na prática quão transparente o Debian é, sem nem precisar abrir o navegador.",
        steps: [
          "Instale o pacote 'devscripts' (que traz o utilitário 'bts').",
          "Use 'apt show' para ver detalhes de algum pacote conhecido (ex: bash).",
          "Olhe a página de bugs do pacote diretamente no navegador (https://bugs.debian.org/bash).",
          "Reflita sobre como saber dos bugs ANTES de instalar evita dor de cabeça.",
        ],
        command: `sudo apt install -y devscripts
apt show bash | head -20
echo ""
echo "Veja bugs em: https://bugs.debian.org/bash"`,
        verify:
          "Você deve ver descrição, mantenedor, versão e dependências do pacote bash. Visitando a URL do bug tracker, vai ver bugs abertos e fechados — abertura total é marca registrada do projeto.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Quem fundou o Projeto Debian e quando?",
        answer:
          "Ian Murdock, em 16 de agosto de 1993, quando ainda era estudante na Universidade Purdue. O nome Debian vem da junção de Debra (esposa) com Ian.",
      },
      {
        id: 2,
        question: "Quais são as 3 branches do Debian e para que serve cada uma?",
        hint: "Pense em maturidade: do mais novo ao mais testado.",
        answer:
          "stable (testada e madura, para produção e usuários conservadores), testing (próximo stable, para usuários intermediários que querem pacotes mais novos), unstable (sempre apelidada de 'sid', tudo entra aqui primeiro, para desenvolvedores e curiosos).",
      },
      {
        id: 3,
        question: "Qual é o codinome da versão estável atual (Debian 13)?",
        hint: "Personagem do Toy Story.",
        answer: "Trixie (a dinossaura de Toy Story), estável desde agosto de 2025. Bookworm (Debian 12) virou oldstable. Os codinomes seguem personagens do Toy Story: Bullseye, Bookworm, Trixie, Forky (o próximo), etc.",
      },
      {
        id: 4,
        question: "Por que o Debian é considerado uma 'distro-mãe'?",
        answer:
          "Porque é base de muitas outras distribuições populares: Ubuntu, Mint, Kali, Raspberry Pi OS, Proxmox, MX Linux, Tails, Devuan, entre outras. Aprender Debian = saber o básico de uma fatia enorme do ecossistema.",
      },
      {
        id: 5,
        question: "O que são as DFSG?",
        answer:
          "Debian Free Software Guidelines — diretrizes que definem o que é considerado software livre o suficiente para entrar no repositório 'main' do Debian. Influenciaram inclusive a definição oficial de 'open source' da Open Source Initiative (OSI).",
      },
      {
        id: 6,
        question: "Por quanto tempo uma release stable do Debian recebe atualizações de segurança?",
        answer:
          "Cerca de 3 anos como stable + cerca de 2 anos como oldstable suportada pelo time de LTS = aproximadamente 5 anos de suporte total. Bookworm (lançado em 2023) deve ter suporte até por volta de 2028.",
      },
      {
        id: 7,
        question: "Você precisa montar um servidor de e-mail que vai rodar 24/7 nos próximos anos. Qual branch escolhe e por quê?",
        answer:
          "Stable (trixie hoje). Em servidor o que importa é previsibilidade: a versão dos pacotes não muda durante o ciclo, apenas correções de segurança chegam. Isso evita surpresas quando você aplica 'apt upgrade' às três da manhã.",
      },
      {
        id: 8,
        question: "Por que 'sid' é o codinome perpétuo da branch unstable?",
        hint: "Quem é Sid no filme Toy Story?",
        answer:
          "Sid é o menino vizinho do Andy no Toy Story que quebra brinquedos. Como a branch unstable é onde tudo pode quebrar, o nome se encaixa. Diferente das outras branches, 'sid' nunca vira stable: quando a branch testing vira stable, o sid permanece sid (sempre 'a próxima da próxima').",
      },
    ],
    references: [
      { title: "Site oficial do Debian", url: "https://www.debian.org/" },
      { title: "Contrato Social do Debian (PT-BR)", url: "https://www.debian.org/social_contract.pt.html" },
      { title: "DFSG — Debian Free Software Guidelines", url: "https://www.debian.org/social_contract#guidelines" },
      { title: "Lista oficial de releases do Debian", url: "https://www.debian.org/releases/" },
      { title: "Bug Tracking System do Debian", url: "https://bugs.debian.org/" },
      { title: "Debian Handbook (livro oficial, gratuito)", url: "https://debian-handbook.info/" },
    ],
  },

  {
    id: "repositorios-debian",
    title: "Repositórios Debian — main, contrib, non-free",
    icon: "📦",
    category: "Fundamentos Teóricos",
    description: "Como o apt sabe de onde baixar pacotes, e o que são main, contrib, non-free, non-free-firmware e backports.",
    objectives: [
      "Entender a estrutura e a sintaxe do arquivo sources.list",
      "Diferenciar com clareza main, contrib, non-free e non-free-firmware",
      "Configurar o repositório de backports para obter pacotes mais novos",
      "Adicionar repositórios de terceiros com segurança usando chaves GPG",
      "Identificar de qual repositório veio cada pacote instalado",
      "Reconhecer riscos de segurança ao adicionar fontes externas",
    ],
    content: [
      "Pense em uma loja oficial de uma marca de eletrônicos: você sabe que tudo ali é original, foi inspecionado, tem garantia, e se algum produto vier defeituoso a marca assume. Agora pense em um camelô na rua: pode estar vendendo o mesmo produto, mais barato, mas você não tem nenhuma garantia de origem, autenticidade ou qualidade. Repositórios Debian funcionam parecido: o repositório oficial é a 'loja da marca' (deb.debian.org), e qualquer outro lugar onde você baixe pacotes é o 'camelô' (alguns confiáveis, outros não). Saber configurar repositórios é saber escolher de quem você compra software.",
      "Tecnicamente, repositório é um servidor na internet onde ficam arquivos .deb (pacotes Debian) organizados por versão e categoria. Quando você roda 'sudo apt install vim', o apt consulta uma lista interna de repositórios configurados, escolhe o melhor, baixa o .deb, verifica a assinatura criptográfica para garantir autenticidade, descompacta no lugar certo do sistema, executa scripts pós-instalação e atualiza o banco de dados de pacotes instalados. Tudo isso acontece em segundos, mas a infraestrutura por trás envolve dezenas de mirrors espalhados pelo mundo, equipes de mantenedores e um sistema de assinaturas GPG que garante que ninguém adulterou os pacotes no caminho.",
      "O arquivo principal de configuração de repositórios é /etc/apt/sources.list. Cada linha não-comentada é uma fonte (source). A sintaxe é simples: a palavra 'deb' (ou 'deb-src' para código-fonte), seguida de opções entre colchetes (geralmente vazias ou contendo a chave GPG), seguida da URL do repositório, do codinome da release e dos componentes habilitados. Uma linha típica é: 'deb http://deb.debian.org/debian trixie main contrib non-free non-free-firmware'. Lê-se assim: 'use o repositório em deb.debian.org/debian, da release trixie, e habilite os componentes main, contrib, non-free e non-free-firmware'.",
      "Os componentes do Debian são quatro, e cada um tem uma razão de existir bem definida. O 'main' contém software 100% livre conforme as DFSG — é o 'verdadeiro Debian', tudo ali passou pela revisão da comunidade e respeita os critérios de liberdade. O 'contrib' contém software livre que depende de algo non-free para funcionar (exemplo clássico: jogos de código aberto que precisam de ROMs proprietárias para rodar). O 'non-free' contém software com restrições (drivers proprietários, fontes Microsoft, codecs com patentes). O 'non-free-firmware' foi separado de non-free no Debian 12 (bookworm) e contém especificamente firmware fechado para hardware (Wi-Fi Intel, BIOS de placa de vídeo, microcódigo de CPU).",
      "Os repositórios de segurança são absolutamente críticos e merecem atenção especial. Quando uma vulnerabilidade (CVE — Common Vulnerabilities and Exposures) é descoberta em algum pacote, o time de segurança do Debian publica a correção em security.debian.org dentro de horas a poucos dias. Toda instalação saudável tem essa linha no sources.list: 'deb http://security.debian.org/debian-security trixie-security main contrib non-free non-free-firmware'. Sem isso, seu sistema não recebe correções urgentes e fica vulnerável a ataques publicamente conhecidos. Atualizações de segurança devem ser aplicadas semanalmente, no mínimo.",
      "Backports é um repositório especial e muito útil. Imagine que você está na branch stable (trixie) e precisa de uma versão mais nova de um software específico — por exemplo, o kernel mais recente para suportar uma placa de vídeo nova, ou uma versão recente do LibreOffice. Você não quer migrar o sistema todo para testing, mas quer só esse pacote atualizado. Backports resolve: ele recompila pacotes da branch testing para rodar na stable. A linha é 'deb http://deb.debian.org/debian trixie-backports main' e a instalação usa a flag '-t': 'sudo apt install -t trixie-backports nome-pacote'. Sem o '-t', o apt continua preferindo a versão antiga.",
      "Repositórios de terceiros (Google, Microsoft, Spotify, Brave, Docker, NodeSource) precisam de cuidado especial. A regra de ouro: NÃO os adicione em sources.list. Use sempre /etc/apt/sources.list.d/ — uma pasta onde cada arquivo .list pode conter um repositório dedicado. Vantagens: se algo der errado, você apaga só aquele arquivo sem mexer no resto; fica fácil ver quais terceiros você adicionou (basta listar a pasta); não há risco de comentar acidentalmente o repositório principal ao editar. Mas ainda mais importante que a localização do arquivo é a chave GPG: cada repositório de terceiro precisa ter sua chave GPG instalada em /usr/share/keyrings/ e referenciada na linha do sources.list com a opção [signed-by=/usr/share/keyrings/CHAVE.gpg]. Sem isso, o apt vai dar erro.",
      "Aqui mora um dos pontos mais perigosos da administração Debian. Quando você adiciona um repositório de terceiro e a chave GPG dele, está autorizando essa entidade a instalar QUALQUER pacote no seu sistema com privilégios de root. Se a Google for comprometida e seu repositório passar a distribuir pacotes maliciosos, seu apt vai aceitar tudo sem questionar — porque você confiou na chave dela. Por isso: adicione o mínimo possível de repositórios externos, prefira pacotes oficiais Debian sempre que houver, e revise periodicamente o que tem em /etc/apt/sources.list.d/. Para softwares que você usa pouco, considere alternativas como Flatpak ou AppImage, que rodam isolados.",
      "A hierarquia de prioridade do apt segue uma lógica que vale entender. Quando o mesmo pacote existe em mais de um repositório, o apt escolhe baseado em 'pin priorities' definidas em /etc/apt/preferences ou /etc/apt/preferences.d/. Para casos avançados — como rodar testing junto com stable, mantendo a maioria dos pacotes em stable — usa-se 'apt pinning': você define que stable tem prioridade 700 (alta) e testing tem prioridade 100 (baixa, só instala se você pedir explicitamente com '-t testing'). Não vamos cobrir pinning em profundidade aqui, mas saiba que existe e por que.",
      "Quando você roda 'sudo apt update', a sequência é a seguinte: para cada repositório configurado, o apt baixa o arquivo 'Release' (com checksum de tudo) e os arquivos 'Packages' (lista detalhada de cada pacote disponível). O 'Release' é assinado com GPG — se a assinatura não bate com as chaves cadastradas em /etc/apt/trusted.gpg.d/ ou referenciadas via signed-by, o apt rejeita e mostra erro. Por isso adicionar repositório sem chave é problema garantido. Os arquivos 'Packages' formam o catálogo que o apt usa para responder perguntas tipo 'qual versão do nginx está disponível?' e 'do que o nginx depende?'. Ao terminar este capítulo, você vai conseguir listar seus repositórios, identificar de qual deles veio cada pacote, habilitar backports com segurança e adicionar um repositório de terceiro do jeito certo.",
    ],
    commands: [
      {
        command: "cat /etc/apt/sources.list",
        description: "Mostra os repositórios principais configurados.",
        example: "cat /etc/apt/sources.list",
        output: "deb http://deb.debian.org/debian trixie main contrib non-free non-free-firmware\ndeb-src http://deb.debian.org/debian trixie main contrib non-free non-free-firmware\n\ndeb http://security.debian.org/debian-security trixie-security main contrib non-free non-free-firmware\n\ndeb http://deb.debian.org/debian trixie-updates main contrib non-free non-free-firmware",
      },
      {
        command: "ls /etc/apt/sources.list.d/",
        description: "Lista repositórios extras (geralmente de terceiros). Cada arquivo .list é um repositório isolado.",
        example: "ls -la /etc/apt/sources.list.d/",
        output: "google-chrome.list  vscode.list  brave-browser-release.list",
      },
      {
        command: "apt update",
        description: "Atualiza a lista de pacotes disponíveis. Sempre rode antes de instalar algo novo.",
        example: "sudo apt update",
        output: "Get:1 http://security.debian.org trixie-security InRelease [48.0 kB]\nGet:2 http://deb.debian.org/debian trixie InRelease [151 kB]\nGet:3 http://deb.debian.org/debian trixie-updates InRelease [55.4 kB]\nReading package lists... Done",
        flags: [
          { flag: "-y", description: "Responde 'sim' automaticamente a confirmações futuras (combinado com upgrade/install)" },
          { flag: "--allow-releaseinfo-change", description: "Aceita mudanças de release info (útil quando muda o codinome)" },
        ],
      },
      {
        command: "apt-cache policy",
        description: "Mostra de qual repositório vem um pacote, com prioridades. Indispensável para entender de onde algo veio.",
        example: "apt-cache policy firefox-esr",
        output: "firefox-esr:\n  Instalado: 115.10.0esr-1~deb12u1\n  Candidato: 115.10.0esr-1~deb12u1\n  Tabela de versão:\n *** 115.10.0esr-1~deb12u1 500\n        500 http://security.debian.org/debian-security bookworm-security/main amd64 Packages",
      },
      {
        command: "apt list --installed",
        description: "Lista todos os pacotes instalados no sistema.",
        example: "apt list --installed | wc -l",
        output: "2147",
      },
      {
        command: "apt-cache search",
        description: "Busca pacotes pelo nome ou descrição. Use antes de instalar para descobrir o nome certo.",
        example: "apt-cache search 'audio editor'",
        output: "audacity - fast, cross-platform audio editor\nardour - the digital audio workstation",
      },
      {
        command: "apt-cache show",
        description: "Mostra detalhes de um pacote: descrição, dependências, mantenedor, tamanho, homepage.",
        example: "apt-cache show vim | head -20",
      },
      {
        command: "apt show",
        description: "Versão mais nova e amigável de apt-cache show, com saída mais legível.",
        example: "apt show nginx",
      },
      {
        command: "apt-key list",
        description: "Lista as chaves GPG dos repositórios (forma antiga). Em sistemas modernos, prefira /etc/apt/trusted.gpg.d/ ou /usr/share/keyrings/. O comando apt-key foi descontinuado.",
        example: "apt-key list",
      },
      {
        command: "ls /usr/share/keyrings/",
        description: "Lista as chaves GPG (forma moderna) usadas pelos repositórios via signed-by. É aqui que devem ficar as chaves de terceiros.",
        example: "ls /usr/share/keyrings/",
        output: "debian-archive-trixie-automatic.gpg\ndebian-archive-trixie-security-automatic.gpg\nbrave-browser-archive-keyring.gpg",
      },
      {
        command: "apt install -t",
        description: "Instala um pacote forçando a release/branch específica (útil para backports).",
        example: "sudo apt install -t trixie-backports linux-image-amd64",
      },
      {
        command: "add-apt-repository",
        description: "Adiciona um repositório (PPA do Ubuntu, em geral). No Debian é raro — prefira editar .list manualmente. Pacote: software-properties-common.",
        example: "sudo add-apt-repository 'deb http://example.com/ trixie main'",
      },
    ],
    tips: [
      {
        type: "info",
        title: "deb vs deb-src",
        content:
          "'deb' = pacotes binários (.deb pré-compilados, prontos para instalar). 'deb-src' = código-fonte. Você só precisa de deb-src se for compilar pacotes do zero (raríssimo no uso comum). Pode comentar essas linhas para acelerar 'apt update'.",
      },
      {
        type: "warning",
        title: "Sempre use sources.list.d/ para terceiros",
        content:
          "Misturar repositórios oficiais com terceiros no mesmo arquivo sources.list é receita para confusão. Use /etc/apt/sources.list.d/, um arquivo por terceiro. Para remover, é só apagar o arquivo. Para auditar, é só listar a pasta.",
      },
      {
        type: "warning",
        title: "Cuidado ao misturar branches sem pinning",
        content:
          "Misturar repositórios incompatíveis (ex: stable + sid) sem 'apt pinning' adequado pode quebrar o sistema permanentemente. Sintomas: pacotes parciais, dependências não resolvidas, sistema sem boot. Se quiser experimentar, faça em VM primeiro.",
      },
      {
        type: "danger",
        title: "Repositórios de terceiros são vetor de ataque",
        content:
          "Quando você adiciona um repositório de terceiros, está dando a essa entidade poder de instalar qualquer pacote no seu sistema com privilégio root. Adicione apenas de fontes que você confia, e SEMPRE com chave GPG isolada via signed-by.",
      },
      {
        type: "success",
        title: "Use deb.debian.org como mirror padrão",
        content:
          "O 'deb.debian.org' é um redirecionador inteligente que encaminha para o mirror geograficamente mais próximo de você. Não precisa mais escolher manualmente um mirror brasileiro ou americano — o sistema faz isso automaticamente, com latência mínima.",
      },
    ],
    practiceLabs: [
      {
        title: "Habilitar backports e instalar um pacote mais novo",
        goal: "Aprender a usar backports para conseguir um pacote mais recente sem migrar o sistema todo para testing.",
        steps: [
          "Veja sua versão atual do kernel: uname -r",
          "Adicione o repositório backports criando um arquivo dedicado em sources.list.d/ (não edite o sources.list principal).",
          "Atualize a lista de pacotes com apt update.",
          "Procure a versão disponível do kernel em backports com apt-cache policy.",
          "Instale apenas se quiser experimentar (ou só simule, lendo a saída do apt).",
        ],
        command: `# 1) Ver kernel atual
uname -r

# 2) Adicionar backports (substitua trixie pelo seu codinome se necessario)
echo "deb http://deb.debian.org/debian trixie-backports main contrib non-free non-free-firmware" \\
  | sudo tee /etc/apt/sources.list.d/backports.list

# 3) Atualizar
sudo apt update

# 4) Ver versoes disponiveis do kernel
apt-cache policy linux-image-amd64

# 5) (Opcional - so em VM) instalar kernel novo dos backports
# sudo apt install -t trixie-backports linux-image-amd64`,
        verify:
          "Após o 'apt update', você deve ver linhas como 'Get:X http://deb.debian.org/debian trixie-backports'. O 'apt-cache policy' deve mostrar duas versões disponíveis: a do trixie normal e a do trixie-backports (mais recente).",
      },
      {
        title: "Adicionar o repositório do Brave Browser corretamente",
        goal: "Aprender o procedimento seguro para adicionar repositório de terceiro: chave GPG dedicada + arquivo .list isolado + opção signed-by.",
        steps: [
          "Baixe e salve a chave GPG do Brave em /usr/share/keyrings/ (não use apt-key, que está descontinuado).",
          "Crie um arquivo .list em /etc/apt/sources.list.d/ referenciando a chave via signed-by.",
          "Atualize com apt update e veja se não dá erro de assinatura.",
          "Instale o Brave normalmente.",
          "Para remover no futuro, apague o .list e a chave.",
        ],
        command: `# 1) Baixar a chave GPG do Brave
sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg \\
  https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg

# 2) Adicionar o repositorio referenciando a chave
echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" \\
  | sudo tee /etc/apt/sources.list.d/brave-browser-release.list

# 3) Atualizar
sudo apt update

# 4) Instalar
sudo apt install -y brave-browser`,
        verify:
          "Se 'apt update' não dá erro 'NO_PUBKEY' nem 'signature invalid', o setup está correto. O Brave deve aparecer no menu de aplicativos depois de instalado, e você pode confirmar a origem dele com 'apt-cache policy brave-browser'.",
      },
      {
        title: "Audite seus repositórios e pacotes",
        goal: "Entender exatamente de onde vêm os pacotes do seu sistema. Útil para auditoria de segurança e para detectar repositórios esquecidos.",
        steps: [
          "Liste todos os arquivos .list configurados.",
          "Para cada repositório de terceiro, verifique se há chave GPG correspondente.",
          "Liste pacotes que vieram de fora dos repositórios oficiais.",
        ],
        command: `echo "=== Repositorios principais ==="
grep -v "^#" /etc/apt/sources.list | grep -v "^$"

echo ""
echo "=== Repositorios extras ==="
ls /etc/apt/sources.list.d/

echo ""
echo "=== Chaves de terceiros ==="
ls /usr/share/keyrings/ 2>/dev/null

echo ""
echo "=== Pacotes nao-oficiais (origem != Debian) ==="
apt list --installed 2>/dev/null | grep -v "Debian" | head -20`,
        verify:
          "Você terá um inventário do que está configurado. Se ver algum repositório que não lembra de ter adicionado, vale investigar — pode ser resíduo de uma instalação antiga ou, em casos raros, indício de comprometimento.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a diferença entre os componentes main, contrib e non-free?",
        answer:
          "main = 100% software livre conforme DFSG. contrib = software livre que DEPENDE de algo non-free para funcionar (ex: jogos livres que precisam de ROMs proprietárias). non-free = software com restrições de uso/distribuição (drivers proprietários, codecs com patentes, fontes Microsoft).",
      },
      {
        id: 2,
        question: "Qual arquivo principal lista os repositórios do apt? E onde ficam os repositórios de terceiros?",
        answer:
          "/etc/apt/sources.list — repositórios principais (oficiais do Debian). /etc/apt/sources.list.d/*.list — repositórios extras (terceiros). A separação ajuda a manter organização e facilita remoção: para tirar um repositório de terceiro, basta apagar o arquivo correspondente.",
      },
      {
        id: 3,
        question: "O que é o repositório 'security' e por que é essencial?",
        answer:
          "security.debian.org publica correções de segurança (CVEs) para a versão stable em horas/dias após a divulgação da vulnerabilidade. Sem ele, seu sistema fica vulnerável a falhas publicamente conhecidas. Sempre habilitado por padrão em instalações novas, e nunca deve ser comentado.",
      },
      {
        id: 4,
        question: "Para que servem os 'backports' e como instalar um pacote vindo dele?",
        answer:
          "Backports oferece versões mais novas de software (kernel, libreoffice, etc.) na sua versão stable, sem precisar migrar para testing. Os pacotes vêm de testing recompilados para stable. Para instalar, use 'sudo apt install -t trixie-backports nome-pacote' — sem o '-t', o apt continua preferindo a versão antiga.",
      },
      {
        id: 5,
        question: "Qual o jeito CERTO de adicionar um repositório de terceiro?",
        hint: "Pense em três passos: chave, arquivo, atualizar.",
        answer:
          "1) Baixar a chave GPG do projeto e salvar em /usr/share/keyrings/. 2) Criar um arquivo dedicado em /etc/apt/sources.list.d/ com a opção [signed-by=/usr/share/keyrings/CHAVE.gpg] na linha deb. 3) Rodar 'sudo apt update' e verificar que não há erro de assinatura. NUNCA edite sources.list direto e nunca pule a chave GPG.",
      },
      {
        id: 6,
        question: "Como saber de qual repositório veio um pacote já instalado?",
        answer:
          "apt-cache policy NOME_PACOTE — mostra a versão instalada, a versão candidata e de qual repositório cada uma vem. Indispensável para auditar a origem de pacotes em sistemas com vários repositórios configurados.",
      },
      {
        id: 7,
        question: "O que mudou no Debian 12 em relação a firmware non-free?",
        answer:
          "A partir do Debian 12 (bookworm), o componente non-free-firmware foi separado de non-free e o instalador oficial passou a incluir firmware non-free por padrão. Isso resolveu a frustração histórica de Wi-Fi não funcionar logo após instalar — a mudança foi pragmática, em busca de melhor experiência para usuários novos.",
      },
      {
        id: 8,
        question: "Por que apt-key foi descontinuado e o que usar no lugar?",
        hint: "A solução envolve isolamento: cada chave em arquivo separado.",
        answer:
          "apt-key adicionava chaves a um keyring global, sem distinguir qual chave era de qual repositório. Isso significava que qualquer chave adicionada podia 'autorizar' qualquer repositório. O modelo moderno usa chaves separadas em /usr/share/keyrings/ referenciadas pela opção signed-by na linha deb, isolando cada repositório à sua chave específica — muito mais seguro.",
      },
    ],
    references: [
      { title: "Wiki Debian — SourcesList", url: "https://wiki.debian.org/SourcesList" },
      { title: "Debian Backports oficial", url: "https://backports.debian.org/" },
      { title: "Lista de mirrors oficiais", url: "https://www.debian.org/mirror/list" },
      { title: "Wiki Debian — DebianRepository (formato detalhado)", url: "https://wiki.debian.org/DebianRepository/Format" },
      { title: "Debian Security Tracker", url: "https://security-tracker.debian.org/tracker/" },
    ],
  },
  {
    id: "ciclo-release",
    title: "Ciclo de release do Debian — stable, testing, sid e LTS",
    icon: "📅",
    category: "Fundamentos Teóricos",
    description:
      "Entenda como o Debian lança versões, o que significa cada ramo (stable, testing, unstable/sid, oldstable e LTS) e quando faz sentido atualizar — antes de mexer em sources ou fazer upgrade.",
    objectives: [
      "Nomear os ramos principais do Debian e o papel de cada um",
      "Relacionar número de versão, codinome e status (stable/oldstable/LTS)",
      "Descobrir no próprio sistema qual release e qual suporte você tem",
      "Explicar freeze, soft freeze e full freeze em linguagem simples",
      "Decidir com critério se um servidor deve ficar em stable ou migrar",
      "Saber onde consultar o calendário oficial e o fim de suporte",
    ],
    content: [
      "Imagine que o Debian é uma cidade com vários bairros. Em um bairro as ruas estão pavimentadas, as placas certas e a polícia já conhece cada esquina: esse é o **stable**. Em outro bairro as obras nunca param, chegam lojas novas toda semana e de vez em quando uma rua fecha sem aviso: esse é o **unstable** (sid). Entre os dois existe um bairro-teste onde as novidades passam um tempo antes de ganhar asfalto definitivo: o **testing**. Se você não sabe em qual bairro está morando, qualquer conselho de ‘atualize tudo’ vira roleta russa.",

      "O Debian não lança versão ‘quando o marketing manda’. Ele lança quando o **freeze** termina e a qualidade do stable atinge o nível que o projeto aceita. O ciclo típico gira em torno de **dois anos** entre stables. Cada stable ganha um **codinome** de personagem do Toy Story: bullseye (11), bookworm (12), trixie (13), forky (14, futuro), e por aí vai. O número (11, 12, 13) é o que scripts e documentação séria usam; o codinome é o que aparece em `/etc/os-release` e nas URLs dos mirrors.",

      "**Stable** é o ramo para produção: pacotes mudam pouco, correções de segurança entram rápido via o repositório *security*, e a prioridade é não quebrar o que já funciona. Servidor de empresa, VPS de cliente, notebook de trabalho ‘não posso perder o dia’: stable. **Oldstable** é a stable anterior — ainda recebe suporte por um tempo depois que a nova stable sai. **LTS** (Long Term Support) é uma extensão comunitária de segurança para oldstable além do suporte oficial ‘regular’: útil quando você não pode migrar ainda, mas não é desculpa eterna para viver no passado.",

      "**Testing** é o futuro stable em formação. Pacotes migram de unstable para testing quando passam critérios automáticos (sem bugs críticos abertos o bastante, tempo mínimo, etc.). No dia a dia testing é mais novo que stable e mais calmo que sid, mas **não** é o lugar padrão de um servidor que paga boleto. **Unstable/sid** nunca ‘congela’: é o caldeirão dos mantenedores. Ótimo para contribuir e testar; péssimo como base de produção se você não sabe recuperar o sistema de madrugada.",

      "Três jargões que travam conversa se você não fixar: **freeze** é o período em que testing para de receber mudanças grandes e o projeto caça bugs para virar a próxima stable. **Soft freeze** ainda permite algumas entradas com critério; **full freeze** é quase só correção. **point release** (12.1, 12.2…) é a stable ganhando lote de atualizações já testadas — não é uma distro nova, é a mesma stable mais polida. Quando alguém diz ‘subi pro bookworm 12.5’, ainda é bookworm; só o ponto mudou.",

      "Na prática você descobre o seu lugar com poucos arquivos e comandos. `/etc/os-release` e `VERSION_CODENAME` dizem o codinome. `VERSION_ID` diz o número. O arquivo de fontes (`sources.list` ou os novos `.sources` em DEB822) mostra se você aponta para `trixie`, `bookworm`, `stable` (apelido que **muda de alvo** quando sai release nova — armadilha clássica) ou para `testing`/`sid`. Preferir o **codinome fixo** nas fontes de servidores evita a surpresa de um `apt full-upgrade` querer virar o mundo no dia do lançamento.",

      "Quando atualizar de uma stable para a próxima? Quando você leu as release notes, testou num clone/VM, tem backup restaurável, janela de manutenção e um motivo real (pacote crítico só na nova, hardware novo, fim de suporte). Não atualize porque um vídeo disse ‘Debian 13 chegou’. Stable antiga com security/LTS em dia muitas vezes é a escolha adulta. Migrar sem ler o `Release Notes` oficiais é o atalho mais curto para passar a madrugada no `grub` e no `dpkg --configure -a`.",

      "Debian **não** é rolling release como Arch. A estabilidade vem exatamente de **não** empurrar novidade contínua no stable. Se você precisa de um pacote mais novo pontual, o caminho idiomatico costuma ser **backports** (quando existe), container, ou compilar em home — não transformar o servidor inteiro em sid. Misturar stable com testing/sid no mesmo `sources` é o jeito clássico de criar um Frankenstein que o apt resolve com conflitos belíssimos.",

      "Ao terminar este capítulo você deve conseguir abrir o terminal, dizer em uma frase ‘estou no Debian N (codinome), ramo X, com suporte até…’, ler o que suas fontes APT pedem, e explicar para outra pessoa por que servidor sério mora no stable e por que sid existe mesmo assim. O próximo passo natural na trilha é o upgrade controlado entre stables (bookworm → trixie) e o formato moderno das fontes (DEB822) — mas a bússola do ciclo vem antes do mapa da viagem.",
    ],
    commands: [
      {
        command: "cat /etc/os-release",
        description:
          "Mostra nome, número e codinome da release instalada. É a fonte mais portátil para scripts e para copiar/colar em pedido de ajuda.",
        example: "cat /etc/os-release",
        output:
          'PRETTY_NAME="Debian GNU/Linux 13 (trixie)"\nNAME="Debian GNU/Linux"\nVERSION_ID="13"\nVERSION="13 (trixie)"\nVERSION_CODENAME=trixie\nID=debian',
      },
      {
        command: "lsb_release -a",
        description:
          "Resumo LSB da distribuição (pode exigir o pacote lsb-release). Útil quando você quer só codinome/release sem abrir arquivo.",
        example: "lsb_release -a",
        flags: [
          { flag: "-a", description: "Todas as linhas (distributor, description, release, codename)" },
          { flag: "-c", description: "Só o codinome (trixie, bookworm…)" },
          { flag: "-r", description: "Só o número da release" },
        ],
        output:
          "Distributor ID:\tDebian\nDescription:\tDebian GNU/Linux 13 (trixie)\nRelease:\t13\nCodename:\ttrixie",
      },
      {
        command: "cat /etc/debian_version",
        description:
          "Arquivo clássico com a versão Debian (número ou codinome/sid). Em stable costuma ser só o número; em testing/sid aparece o codinome ou ‘trixie/sid’.",
        example: "cat /etc/debian_version",
        output: "13.0",
      },
      {
        command: "hostnamectl",
        description:
          "Resumo systemd: SO, kernel e arquitetura juntos — bom para confirmar que o ‘sistema que você acha que é’ é o que realmente bootou.",
        example: "hostnamectl | sed -n '1,12p'",
        output:
          " Operating System: Debian GNU/Linux 13 (trixie)\n          Kernel: Linux 6.12.x-amd64\n    Architecture: x86-64",
      },
      {
        command: "grep -RInE '^(deb|URIs:)' /etc/apt/sources.list /etc/apt/sources.list.d 2>/dev/null | head",
        description:
          "Amostra as linhas ativas de repositório (formato clássico deb= ou DEB822 URIs:). Serve para ver se você pinou codinome (trixie) ou o apelido móvel (stable).",
        example:
          "grep -RInE '^(deb |URIs:)' /etc/apt/sources.list /etc/apt/sources.list.d 2>/dev/null | head",
        output:
          "/etc/apt/sources.list:1:deb http://deb.debian.org/debian trixie main contrib non-free-firmware\n/etc/apt/sources.list:2:deb http://security.debian.org/debian-security trixie-security main",
      },
      {
        command: "apt-cache policy",
        description:
          "Sem argumentos lista os repositórios conhecidos e prioridades. Com nome de pacote mostra de qual release cada versão viria — ótimo para caçar mistureba stable/testing.",
        example: "apt-cache policy | head -n 40",
        output:
          "Package files:\n 100 /var/lib/dpkg/status\n     release a=now\n 500 http://deb.debian.org/debian trixie/main amd64 Packages\n     release v=13.0,o=Debian,a=stable,n=trixie,l=Debian,c=main,b=amd64",
      },
      {
        command: "apt-cache policy bash",
        description:
          "Exemplo prático: de onde o bash instalado e o candidato a instalar estão vindo. Se aparecer testing/sid sem você querer, suas fontes estão perigosas.",
        example: "apt-cache policy bash",
        output:
          "bash:\n  Installed: 5.2.37-2\n  Candidate: 5.2.37-2\n  Version table:\n *** 5.2.37-2 500\n        500 http://deb.debian.org/debian trixie/main amd64 Packages\n        100 /var/lib/dpkg/status",
      },
      {
        command: "distro-info --stable",
        description:
          "Se o pacote distro-info estiver instalado, imprime o codinome da stable atual do ponto de vista dos dados Debian — útil em scripts de automação.",
        example: "distro-info --stable; distro-info --supported 2>/dev/null | head",
        flags: [
          { flag: "--stable", description: "Codinome da stable atual" },
          { flag: "--oldstable", description: "Codinome da oldstable" },
          { flag: "--supported", description: "Lista releases ainda suportadas (quando disponível)" },
          { flag: "--all", description: "Todas as entradas conhecidas pelo distro-info" },
        ],
        output: "trixie",
      },
      {
        command: "apt list --upgradable 2>/dev/null | head",
        description:
          "Mostra o que o apt já considera atualizável na release atual. Não é upgrade de release (bookworm→trixie); é manutenção dentro do ciclo.",
        example: "apt list --upgradable 2>/dev/null | head",
        output: "Listing...\nlinux-image-amd64/stable 6.12.x-y amd64 [upgradable from: 6.12.x-x]",
      },
      {
        command: "man -P cat apt-secure | head -n 5",
        description:
          "Lembrete de que confiança no Debian passa por assinaturas e políticas do apt — o ciclo de release não adianta se você desliga a verificação ‘para parar o erro’.",
        example: "man apt-secure",
      },
    ],
    tips: [
      {
        type: "info",
        title: "stable é um apelido móvel",
        content:
          "Nas fontes APT, a palavra ‘stable’ aponta sempre para a stable **da vez**. No dia em que o Debian lança a próxima, ‘stable’ muda de alvo. Em servidor, prefira o codinome (bookworm, trixie): você decide a hora de migrar, não o calendário sozinho.",
      },
      {
        type: "warning",
        title: "testing ≠ beta fofo de celular",
        content:
          "Testing quebra menos que sid, mas ainda pode deixar o sistema inconsistente por dias. Se a máquina precisa acordar amanhã igualzinha, fique em stable e use backports com parcimônia.",
      },
      {
        type: "danger",
        title: "Nunca misture sid no servidor ‘só um pacote’",
        content:
          "Uma linha deb sid main no meio do stable puxa dependências em cascata. O conserto depois custa mais que instalar o software em container ou esperar backport.",
      },
      {
        type: "success",
        title: "Roteiro mental antes de qualquer upgrade de release",
        content:
          "1) Backup restaurável. 2) Ler Release Notes. 3) Fontes no codinome. 4) apt update && upgrade na release atual até zerar. 5) Só então mudar codinome e full-upgrade em janela com plano B.",
      },
      {
        type: "info",
        title: "Onde olhar o fim do suporte",
        content:
          "O wiki Debian (DebianReleases, LTS) e debian.org/releases trazem tabelas de suporte. Não confie em print de rede social com data inventada — o calendário oficial muda e o LTS é projeto separado.",
      },
    ],
    practiceLabs: [
      {
        title: "Retrato da sua release em 2 minutos",
        goal: "Sair com um parágrafo factual: número, codinome, o que as fontes pedem e se há cheiro de testing/sid.",
        steps: [
          "Rode o bloco de comandos abaixo e salve a saída em ~/meu-debian-release.txt",
          "Circule (ou anote) VERSION_CODENAME e VERSION_ID",
          "Nas linhas de sources, marque se aparece codinome fixo ou a palavra stable/testing/sid",
          "Rode apt-cache policy bash e confira se o Candidate vem do mesmo codinome",
          "Escreva em uma frase: ‘Este host é Debian … (…); fontes apontam para …’",
        ],
        command: `{
  echo "=== os-release ==="
  cat /etc/os-release
  echo
  echo "=== debian_version ==="
  cat /etc/debian_version 2>/dev/null || true
  echo
  echo "=== fontes (amostra) ==="
  grep -RInE '^(deb |URIs:)' /etc/apt/sources.list /etc/apt/sources.list.d 2>/dev/null | head -n 30
  echo
  echo "=== policy bash ==="
  apt-cache policy bash 2>/dev/null | head -n 20
} | tee ~/meu-debian-release.txt`,
        expected: "Arquivo ~/meu-debian-release.txt com os-release + fontes + policy",
        verify:
          "Se VERSION_CODENAME e as linhas deb/URIs contam a mesma história (ex.: tudo trixie), você está coerente. Se os-release diz bookworm e aparece uma linha sid, pare e limpe fontes antes de qualquer upgrade.",
      },
      {
        title: "Simule a decisão: atualizar ou não",
        goal: "Treinar o critério de ficar ou migrar sem executar full-upgrade de verdade.",
        steps: [
          "Anote o codinome atual",
          "Abra no navegador https://www.debian.org/releases/ e localize sua release",
          "Escreva três motivos para FICAR e três para MIGRAR (mesmo que hipotéticos)",
          "Só marque ‘migrar’ se backup + janela + release notes estiverem no plano",
          "Não altere sources neste lab — é decisão no papel",
        ],
        command: `echo "Codinome atual: $(. /etc/os-release; echo $VERSION_CODENAME)"
echo "Leia: https://www.debian.org/releases/"
echo "Leia também: https://wiki.debian.org/DebianReleases"`,
        verify:
          "Você tem uma lista escrita de prós/contras. Se a única justificativa for ‘porque saiu vídeo’, a decisão correta costuma ser ficar no stable atual e aplicar só security.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a diferença prática entre stable, testing e sid para quem administra um VPS de cliente?",
        hint: "Pense em previsibilidade versus novidade.",
        answer:
          "Stable prioriza não quebrar e receber segurança de forma controlada — padrão para VPS de cliente. Testing é a próxima stable em construção: mais nova, menos garantia. Sid/unstable é o caldeirão de desenvolvimento, inadequado como base de produção séria.",
      },
      {
        id: 2,
        question: "Por que em servidor é mais seguro usar o codinome (trixie) do que a palavra ‘stable’ nas fontes APT?",
        answer:
          "Porque ‘stable’ é um apelido que muda de alvo no dia do lançamento da próxima stable. Com o codinome fixo, o host só migra quando você alterar as fontes de propósito.",
      },
      {
        id: 3,
        question: "O que é um point release (ex.: 12.5)?",
        answer:
          "É a mesma stable recebendo um lote acumulado de atualizações já aceitas (segurança e correções), não uma distribuição nova. O codinome continua o mesmo; só o ponto da versão muda.",
      },
      {
        id: 4,
        question: "O que significa freeze no ciclo Debian?",
        answer:
          "É a fase em que testing reduz drasticamente a entrada de mudanças novas para estabilizar e virar a próxima stable. Soft freeze ainda permite alguma entrada criteriosa; full freeze foca em correção de bugs.",
      },
      {
        id: 5,
        question: "Como você descobre codinome e número da release no sistema instalado?",
        hint: "Um arquivo em /etc é suficiente.",
        answer:
          "cat /etc/os-release (VERSION_CODENAME e VERSION_ID). Complementos: cat /etc/debian_version, lsb_release -a, hostnamectl.",
      },
      {
        id: 6,
        question: "Qual o risco de adicionar uma linha deb sid main num host stable ‘só para um pacote’?",
        answer:
          "O apt pode puxar dezenas de dependências do sid, misturando ramos e deixando o sistema difícil de manter ou de reverter. O caminho seguro é backport, container, ou esperar o pacote no stable.",
      },
      {
        id: 7,
        question: "Oldstable e LTS são a mesma coisa?",
        answer:
          "Não. Oldstable é a stable anterior no fluxo normal de suporte. LTS é extensão comunitária de segurança depois do suporte regular — projeto relacionado, mas separado, com escopo e prazos próprios.",
      },
      {
        id: 8,
        question: "Cite a ordem sensata antes de um upgrade de uma stable para a seguinte.",
        answer:
          "Backup restaurável → ler Release Notes → garantir fontes coerentes e sistema atualizado na release atual → alterar codinome nas fontes → apt update → full-upgrade em janela com plano de rollback → verificar serviços.",
      },
    ],
    references: [
      { title: "Debian Releases (oficial)", url: "https://www.debian.org/releases/" },
      { title: "Wiki — DebianReleases", url: "https://wiki.debian.org/DebianReleases" },
      { title: "Wiki — DebianLTS", url: "https://wiki.debian.org/LTS" },
      { title: "Release Notes (escolha a versão)", url: "https://www.debian.org/releases/stable/releasenotes" },
      { title: "Debian Free Software Guidelines (DFSG)", url: "https://www.debian.org/social_contract#guidelines" },
    ],
  },
  {
    id: "upgrade-release",
    title: "Upgrade bookworm → trixie — checklist que evita madrugada",
    icon: "⬆️",
    category: "Fundamentos Teóricos",
    description:
      "Como subir de uma stable para a seguinte com método: backup, release notes, fontes no codinome, limpeza da release atual e full-upgrade — com pontos de quebra e plano B.",
    objectives: [
      "Separar atualização dentro da release de upgrade entre releases",
      "Montar um checklist mínimo antes de tocar em sources",
      "Trocar bookworm por trixie nas fontes sem misturar ramos",
      "Rodar a sequência apt update → upgrade → full-upgrade com intenção",
      "Reconhecer sintomas clássicos de upgrade pela metade (dpkg, serviços, rede)",
      "Saber quando abortar e restaurar em vez de 'mais um apt' no escuro",
    ],
    content: [
      "Upgrade de release no Debian não é o botão 'atualizar tudo' do celular. É mudar o trilho em que o trem roda: você sai do bookworm (12) e passa a pedir pacotes do trixie (13). Se o trilho estiver torto — fonte misturada, pacote de terceiro pinado, disco cheio, kernel custom — o apt até tenta, mas o resultado pode ser um sistema que boota pela metade e um SSH que some no pior momento.",

      "Primeiro, o vocabulário. **Atualizar dentro da release** é `apt update` + `apt upgrade` (ou `full-upgrade` pontual) enquanto as fontes ainda dizem bookworm: você só puxa correções e point releases da mesma stable. **Upgrade de release** é alterar as fontes para o próximo codinome e deixar o apt recalcular o mundo. Confundir os dois é o erro número um dos tutoriais apressados.",

      "A ordem canônica, em linguagem humana: (1) backup que você já restaurou pelo menos uma vez na vida; (2) ler as **Release Notes** da versão de destino; (3) remover ou desativar repositórios de terceiro que não tenham linha trixie; (4) deixar o bookworm **inteiramente atualizado** e sem pacotes pela metade; (5) trocar codinome nas fontes; (6) `apt update`; (7) `apt full-upgrade` em janela com console/IPMI/VNC se for remoto; (8) reiniciar se kernel/initramfs mudou; (9) validar serviços. Pular o passo 3 e 4 é o atalho clássico para conflito de dependência.",

      "Três jargões que aparecem no meio do caminho. **full-upgrade** (antigo dist-upgrade) pode **remover** pacotes se isso for necessário para completar a transição — por isso não é o mesmo que um upgrade 'tímido'. **dpkg --configure -a** é o 'termine o que ficou pela metade' depois de uma interrupção. **hold** (`apt-mark hold`) trava um pacote e pode sabotar o upgrade se você esqueceu que travou o libc ou o systemd há seis meses.",

      "Nas fontes, prefira o **codinome** (`bookworm` → `trixie`) em vez da palavra `stable`. Se você só trocar `stable` por `stable`, no dia do lançamento o apelido já aponta para o novo e você pode migrar sem perceber. O procedimento limpo é: editar `/etc/apt/sources.list` e cada arquivo em `/etc/apt/sources.list.d/` (e os `.sources` DEB822) trocando bookworm→trixie e bookworm-security→trixie-security (e updates/backports se existirem). Depois `grep` em tudo para garantir que não sobrou bookworm esquecido nem uma linha `sid`.",

      "Repositórios de terceiro são a mina terrestre. Chrome, Docker CE, Spotfy, drivers, PPAs copiados de Ubuntu: muitos não publicam `trixie` no dia um. A regra prática: **comente ou remova** antes do full-upgrade; reinstale depois, quando houver build para a nova stable. Manter um `.list` de bookworm no meio do trixie é convite para o apt puxar lixo ou falhar com 404 eterno.",

      "Durante o full-upgrade o dpkg vai parar em prompts de arquivos de configuração: manter o seu (`N` / keep local) ou instalar o do mantenedor (`Y`). Não há resposta única — se você customizou `sshd_config` ou nginx, em geral mantém o local e compara depois com `.dpkg-dist` / `.dpkg-new`. Deixar a sessão SSH única sem `tmux`/`screen` num upgrade remoto é pedir para a conexão cair no meio do unpack.",

      "Pontos de quebra recorrentes: disco cheio em `/` ou `/var` (unpack explode); kernel novo sem firmware (máquina some da rede no reboot); `libc6`/`systemd` em hold; pacotes `rc` esquecidos; misturar backports antigos; energia/cota da VPS matando o processo. Sintoma típico de upgrade interrompido: `dpkg was interrupted` e serviços que não sobem. Aí a prioridade é **terminar a configuração** (`dpkg --configure -a`, `apt -f install`), não inventar novo codinome.",

      "Plano B não é otimismo: é snapshot da VPS, imagem de disco, ou backup restic/borg testado + acesso out-of-band. Se depois do reboot não há rede, você precisa de console no painel do provedor — não de mais uma aba SSH. Se o upgrade falhou feio e há snapshot de cinco minutos antes, restaurar costuma ser mais barato do que 'consertar no feeling' por quatro horas.",

      "Este capítulo ensina o **método** com bookworm→trixie como exemplo atual. Os mesmos passos valem para o próximo par de stables (trixie→forky, etc.): só mudam codinomes e notas de release. Ao terminar, você deve conseguir explicar a sequência de cor, montar um checklist escrito antes de editar sources, e recusar upgrade 'no horário de pico sem backup' — que é a definição operacional de azar evitável.",
    ],
    commands: [
      {
        command: "cat /etc/os-release",
        description:
          "Confirme de onde você parte (VERSION_CODENAME=bookworm ou trixie). Sem isso o resto do checklist é chute.",
        example: "cat /etc/os-release | egrep 'VERSION|CODENAME'",
        output:
          'VERSION_ID="12"\nVERSION="12 (bookworm)"\nVERSION_CODENAME=bookworm',
      },
      {
        command: "df -h / /var /boot",
        description:
          "Upgrade unpacka gigabytes. Se `/` ou `/var` estiver no limite, pare e limpe (apt clean, logs, kernels velhos) antes de continuar.",
        example: "df -h / /var /boot",
        output:
          "Filesystem      Size  Used Avail Use% Mounted on\n/dev/vda1        40G   22G   16G  58% /\n/dev/vda1        40G   22G   16G  58% /var\n/dev/vda1        40G   22G   16G  58% /boot",
      },
      {
        command: "apt-mark showhold",
        description:
          "Lista pacotes em hold. Hold em libc/systemd/apt no meio de upgrade de release é sabotagem acidental — revise um a um.",
        example: "apt-mark showhold",
        output: "",
      },
      {
        command: "sudo apt update && sudo apt upgrade",
        description:
          "Ainda no bookworm: deixe a release atual limpa e atualizada. Não mude sources antes disso.",
        example: "sudo apt update && sudo apt upgrade",
        flags: [
          { flag: "update", description: "Recarrega índices das fontes atuais" },
          { flag: "upgrade", description: "Atualiza pacotes sem remover outros (mais conservador)" },
        ],
      },
      {
        command: "dpkg --audit",
        description:
          "Reporta pacotes quebrados ou pela metade. Tem que sair limpo antes de trocar o codinome.",
        example: "dpkg --audit; apt -f install -s",
        output: "",
      },
      {
        command: "grep -RInE 'bookworm|trixie|stable|sid' /etc/apt/sources.list /etc/apt/sources.list.d 2>/dev/null",
        description:
          "Inventário das fontes antes e depois da troca. Você quer ver só trixie (e security/updates) no final — zero sid, zero bookworm esquecido.",
        example:
          "grep -RInE 'bookworm|trixie|stable|sid' /etc/apt/sources.list /etc/apt/sources.list.d 2>/dev/null",
        output:
          "/etc/apt/sources.list:1:deb http://deb.debian.org/debian bookworm main contrib non-free-firmware\n/etc/apt/sources.list:2:deb http://security.debian.org/debian-security bookworm-security main",
      },
      {
        command: "sudo sed -i 's/bookworm/trixie/g' /etc/apt/sources.list",
        description:
          "Exemplo de troca em massa no sources.list clássico. Revise com diff/grep depois; arquivos em sources.list.d e formato DEB822 precisam do mesmo cuidado (Suite:/codinome).",
        example:
          "sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak-$(date +%F) && sudo sed -i 's/bookworm/trixie/g' /etc/apt/sources.list",
        flags: [
          { flag: "-i", description: "Edita o arquivo no lugar" },
          { flag: "s/a/b/g", description: "Substitui todas as ocorrências de a por b" },
        ],
      },
      {
        command: "sudo apt update",
        description:
          "Depois de apontar para trixie: recarrega índices. Erros 404 em repo de terceiro = desabilite esse repo e tente de novo.",
        example: "sudo apt update",
      },
      {
        command: "sudo apt full-upgrade",
        description:
          "O coração do upgrade de release. Pode remover pacotes para resolver dependências — leia o resumo antes de confirmar. Em sessão remota, use tmux.",
        example: "sudo apt full-upgrade",
        flags: [
          { flag: "full-upgrade", description: "Permite instalar/remover o necessário para a nova release" },
          { flag: "-y", description: "Assume yes (evite na primeira vez em produção)" },
          { flag: "-s", description: "Simulação: mostra o plano sem aplicar" },
        ],
      },
      {
        command: "sudo apt full-upgrade -s",
        description:
          "Simulação seca: veja o que seria instalado/removido antes de aceitar. Se aparecer remoção de pacotes essenciais do seu stack, investigue antes do upgrade real.",
        example: "sudo apt full-upgrade -s | tail -n 50",
      },
      {
        command: "sudo dpkg --configure -a",
        description:
          "Se o upgrade for interrompido: termine configurações pendentes antes de qualquer outra ideia criativa.",
        example: "sudo dpkg --configure -a && sudo apt -f install",
      },
      {
        command: "sudo apt autoremove --purge",
        description:
          "Depois do upgrade bem-sucedido e validado: remove dependências órfãs e restos. Não rode no meio de um conflito ainda aberto.",
        example: "sudo apt autoremove --purge",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "SSH remoto sem console = risco",
        content:
          "Em VPS, confirme acesso ao console web/serial do provedor antes do full-upgrade. Se a rede cair no reboot, só o console salva. Use tmux/screen e evite upgrade no link de hotel.",
      },
      {
        type: "warning",
        title: "Repositórios de terceiro fora",
        content:
          "Comente Docker CE, navegadores, painéis e PPAs antes de migrar. Reative um a um depois, quando existir build para trixie. 404 no meio do update é sinal de fonte morta, não de 'apt quebrado'.",
      },
      {
        type: "info",
        title: "full-upgrade pode remover pacotes",
        content:
          "Isso é normal na troca de release. Leia a lista. Se for remover o seu servidor web ou o banco sem você querer, cancele e investigue o porquê (hold, conflito, pacote órfão).",
      },
      {
        type: "success",
        title: "Checklist de 60 segundos antes do Enter",
        content:
          "Backup ok? Release notes lidas? Fontes só com trixie? Bookworm já atualizado e dpkg limpo? Disco com folga? Console out-of-band? tmux aberto? Só então full-upgrade.",
      },
      {
        type: "warning",
        title: "Prompts de conffile",
        content:
          "Quando o dpkg perguntar sobre arquivo de config, não aperte Y no automático. Compare depois com os arquivos .dpkg-new/.dpkg-dist. sshd_config errado = lockout.",
      },
    ],
    practiceLabs: [
      {
        title: "Ensaio sem migrar (simulação)",
        goal: "Treinar o inventário e a simulação sem alterar a release real da máquina de produção.",
        steps: [
          "Anote o codinome atual com /etc/os-release",
          "Rode df -h e apt-mark showhold; registre folga de disco e holds",
          "Liste fontes com grep de bookworm/trixie/stable/sid",
          "Se estiver em bookworm de laboratório (VM), faça backup/snapshot",
          "Só em VM de teste: troque fontes, apt update, apt full-upgrade -s e leia o plano",
          "Em host real de cliente: pare no -s e na checklist escrita — não aplique sem janela",
        ],
        command: `echo "=== release ==="
cat /etc/os-release | egrep 'PRETTY|VERSION|CODENAME'
echo
echo "=== disco ==="
df -h / /var /boot 2>/dev/null
echo
echo "=== holds ==="
apt-mark showhold
echo
echo "=== fontes ==="
grep -RInE 'bookworm|trixie|stable|sid' /etc/apt/sources.list /etc/apt/sources.list.d 2>/dev/null | head -n 40
echo
echo "=== simulacao so faz sentido DEPOIS de apontar fontes ao destino ==="
echo "sudo apt full-upgrade -s | tee /tmp/plano-upgrade.txt"`,
        expected: "Um relatório textual da origem + consciência de que -s só vale após mudar fontes em ambiente de teste",
        verify:
          "Você consegue explicar se a máquina está pronta (disco, holds, fontes limpas) sem ter quebrado produção. Se qualquer hold crítico ou repo de terceiro aparecer, o upgrade real fica bloqueado até resolver.",
      },
      {
        title: "VM dedicada: bookworm → trixie de ponta a ponta",
        goal: "Executar o upgrade completo só em máquina descartável e validar boot + rede + um serviço.",
        steps: [
          "Crie VM ou container com Debian 12 bookworm",
          "Snapshot/backup",
          "apt update && apt upgrade até zerar",
          "Remova repos de terceiro",
          "Troque bookworm→trixie nas fontes e confira com grep",
          "apt update && apt full-upgrade (dentro de tmux)",
          "Reboot, confira os-release=trixie, rede e serviço de teste",
        ],
        command: `# Esqueleto — rode so em lab
# 1) sudo apt update && sudo apt upgrade
# 2) backup das fontes: sudo cp -a /etc/apt /root/apt-backup-$(date +%F)
# 3) trocar codinome nas fontes (list e .sources)
# 4) sudo apt update
# 5) sudo apt full-upgrade
# 6) sudo reboot
# 7) cat /etc/os-release`,
        verify:
          "VERSION_CODENAME=trixie, rede ok, sem dpkg --audit sujo, serviço de teste respondendo. Se falhou, restaure snapshot e anote em qual passo quebrou.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a diferença entre apt upgrade na mesma stable e upgrade de release?",
        answer:
          "Upgrade na mesma stable mantém o codinome e só atualiza pacotes daquela release. Upgrade de release muda as fontes para o próximo codinome (ex.: bookworm→trixie) e recalcula o sistema inteiro, em geral com full-upgrade.",
      },
      {
        id: 2,
        question: "Por que full-upgrade e não só upgrade na troca de release?",
        hint: "Pense em pacotes que precisam sair para outros entrarem.",
        answer:
          "Porque a nova release pode exigir remover ou substituir pacotes para satisfazer dependências. O upgrade 'simples' evita remoções e pode deixar a transição incompleta; o full-upgrade está autorizado a remover quando necessário.",
      },
      {
        id: 3,
        question: "Cite quatro itens do checklist antes de editar as fontes.",
        answer:
          "Backup/snapshot testado; ler release notes; limpar/atualizar a release atual e dpkg saudável; remover ou desativar repos de terceiro; folga de disco; acesso console out-of-band; revisar holds.",
      },
      {
        id: 4,
        question: "O que fazer com repositórios de terceiros no upgrade?",
        answer:
          "Desabilitar ou remover antes da migração e só reativar depois, quando houver suporte explícito à nova stable. Manter linhas da release antiga gera 404 e conflitos.",
      },
      {
        id: 5,
        question: "O upgrade caiu no meio e o dpkg reclama de interrupção. Qual o primeiro movimento?",
        answer:
          "Não mudar sources de novo. Rodar sudo dpkg --configure -a e sudo apt -f install para terminar pacotes pendentes; só então avaliar o estado.",
      },
      {
        id: 6,
        question: "Por que apt full-upgrade -s é amigo antes do -y?",
        answer:
          "Porque mostra o plano (instalações e remoções) sem aplicar. Dá para cancelar se for remover peça crítica do seu stack.",
      },
      {
        id: 7,
        question: "Por que preferir codinome fixo em vez de 'stable' nas fontes ao planejar migração?",
        answer:
          "Porque 'stable' muda de alvo no lançamento. Com bookworm/trixie explícitos, a migração acontece só quando você edita as fontes de propósito.",
      },
      {
        id: 8,
        question: "Depois do reboot, quais três verificações mínimas?",
        answer:
          "cat /etc/os-release (codinome novo); rede/SSH; dpkg --audit / serviços principais (web, banco, docker, etc.) respondendo.",
      },
    ],
    references: [
      {
        title: "Release Notes — Debian stable (escolha a versão de destino)",
        url: "https://www.debian.org/releases/stable/releasenotes",
      },
      {
        title: "Wiki — DebianUpgrade",
        url: "https://wiki.debian.org/DebianUpgrade",
      },
      {
        title: "Wiki — DebianReleases",
        url: "https://wiki.debian.org/DebianReleases",
      },
      {
        title: "man apt-get (full-upgrade / dist-upgrade)",
        url: "https://manpages.debian.org/apt-get",
      },
      {
        title: "Debian — sources.list",
        url: "https://wiki.debian.org/SourcesList",
      },
    ],
  },
];
