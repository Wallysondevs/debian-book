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
          { flag: "-r", description: "Só a versão do kernel (ex: 6.1.0-21-amd64)" },
          { flag: "-m", description: "Só a arquitetura da máquina (x86_64, aarch64, armv7l)" },
          { flag: "-n", description: "Só o hostname (nome da máquina na rede)" },
          { flag: "-s", description: "Só o nome do kernel (Linux)" },
          { flag: "-o", description: "Sistema operacional (GNU/Linux)" },
        ],
        output: "Linux debian 6.1.0-21-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.90-1 (2024-05-19) x86_64 GNU/Linux",
      },
      {
        command: "cat /etc/os-release",
        description: "Exibe informações padronizadas sobre a distribuição: nome, versão, ID, codinome. Funciona em qualquer distro moderna e é o jeito recomendado de identificar o sistema em scripts.",
        example: "cat /etc/os-release",
        output: 'PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"\nNAME="Debian GNU/Linux"\nVERSION_ID="12"\nVERSION="12 (bookworm)"\nVERSION_CODENAME=bookworm\nID=debian\nHOME_URL="https://www.debian.org/"',
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
        output: "Distributor ID: Debian\nDescription:    Debian GNU/Linux 12 (bookworm)\nRelease:        12\nCodename:       bookworm",
      },
      {
        command: "hostnamectl",
        description: "Mostra um resumo bonito do sistema: hostname, kernel, distribuição, arquitetura, virtualização. Fornecido pelo systemd.",
        example: "hostnamectl",
        output: " Static hostname: debian\n       Icon name: computer-laptop\n         Chassis: laptop\n      Machine ID: 9f...\nOperating System: Debian GNU/Linux 12 (bookworm)\n          Kernel: Linux 6.1.0-21-amd64\n    Architecture: x86-64",
      },
      {
        command: "cat /proc/version",
        description: "Detalhes do kernel: versão, compilador usado, data do build. /proc é um sistema de arquivos virtual com informações do kernel em tempo real.",
        example: "cat /proc/version",
        output: "Linux version 6.1.0-21-amd64 (debian-kernel@lists.debian.org) (gcc-12 (Debian 12.2.0-14) 12.2.0, GNU ld (GNU Binutils for Debian) 2.40) #1 SMP PREEMPT_DYNAMIC Debian 6.1.90-1 (2024-05-19)",
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
PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"

=== Kernel ===
6.1.0-21-amd64

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
6.1.0-21-amd64`,
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
        answer: "uname -r — mostra apenas a versão (ex: 6.1.0-21-amd64). 'uname -a' mostra tudo de uma vez (kernel, hostname, arquitetura, data de build).",
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
        output: "12.5",
      },
      {
        command: "lsb_release -c",
        description: "Mostra apenas o codinome da release. Útil em scripts (configurar sources.list, por exemplo).",
        example: "lsb_release -c",
        output: "Codename:       bookworm",
      },
      {
        command: "lsb_release -cs",
        description: "Mesma coisa que -c mas no modo 'short': só o codinome puro, sem o rótulo. Ideal para usar em scripts ($(lsb_release -cs)).",
        example: "lsb_release -cs",
        output: "bookworm",
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
        output: "deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware\ndeb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware\ndeb http://deb.debian.org/debian bookworm-updates main contrib non-free non-free-firmware",
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
          "Se a versão numérica começa com '12', você está em bookworm (estável atual). Se começa com '11', está em bullseye (oldstable). Se mostra 'trixie/sid' em vez de número, está em testing/unstable.",
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
        question: "Qual é o codinome da versão estável atual (Debian 12)?",
        hint: "Personagem do Toy Story.",
        answer: "Bookworm. (Os codinomes seguem personagens do Toy Story: Buster, Bullseye, Bookworm, Trixie, Forky, etc.)",
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
          "Stable (bookworm hoje). Em servidor o que importa é previsibilidade: a versão dos pacotes não muda durante o ciclo, apenas correções de segurança chegam. Isso evita surpresas quando você aplica 'apt upgrade' às três da manhã.",
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
      "O arquivo principal de configuração de repositórios é /etc/apt/sources.list. Cada linha não-comentada é uma fonte (source). A sintaxe é simples: a palavra 'deb' (ou 'deb-src' para código-fonte), seguida de opções entre colchetes (geralmente vazias ou contendo a chave GPG), seguida da URL do repositório, do codinome da release e dos componentes habilitados. Uma linha típica é: 'deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware'. Lê-se assim: 'use o repositório em deb.debian.org/debian, da release bookworm, e habilite os componentes main, contrib, non-free e non-free-firmware'.",
      "Os componentes do Debian são quatro, e cada um tem uma razão de existir bem definida. O 'main' contém software 100% livre conforme as DFSG — é o 'verdadeiro Debian', tudo ali passou pela revisão da comunidade e respeita os critérios de liberdade. O 'contrib' contém software livre que depende de algo non-free para funcionar (exemplo clássico: jogos de código aberto que precisam de ROMs proprietárias para rodar). O 'non-free' contém software com restrições (drivers proprietários, fontes Microsoft, codecs com patentes). O 'non-free-firmware' foi separado de non-free no Debian 12 (bookworm) e contém especificamente firmware fechado para hardware (Wi-Fi Intel, BIOS de placa de vídeo, microcódigo de CPU).",
      "Os repositórios de segurança são absolutamente críticos e merecem atenção especial. Quando uma vulnerabilidade (CVE — Common Vulnerabilities and Exposures) é descoberta em algum pacote, o time de segurança do Debian publica a correção em security.debian.org dentro de horas a poucos dias. Toda instalação saudável tem essa linha no sources.list: 'deb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware'. Sem isso, seu sistema não recebe correções urgentes e fica vulnerável a ataques publicamente conhecidos. Atualizações de segurança devem ser aplicadas semanalmente, no mínimo.",
      "Backports é um repositório especial e muito útil. Imagine que você está na branch stable (bookworm) e precisa de uma versão mais nova de um software específico — por exemplo, o kernel mais recente para suportar uma placa de vídeo nova, ou uma versão recente do LibreOffice. Você não quer migrar o sistema todo para testing, mas quer só esse pacote atualizado. Backports resolve: ele recompila pacotes da branch testing para rodar na stable. A linha é 'deb http://deb.debian.org/debian bookworm-backports main' e a instalação usa a flag '-t': 'sudo apt install -t bookworm-backports nome-pacote'. Sem o '-t', o apt continua preferindo a versão antiga.",
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
        output: "deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware\ndeb-src http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware\n\ndeb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware\n\ndeb http://deb.debian.org/debian bookworm-updates main contrib non-free non-free-firmware",
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
        output: "Get:1 http://security.debian.org bookworm-security InRelease [48.0 kB]\nGet:2 http://deb.debian.org/debian bookworm InRelease [151 kB]\nGet:3 http://deb.debian.org/debian bookworm-updates InRelease [55.4 kB]\nReading package lists... Done",
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
        output: "debian-archive-bookworm-automatic.gpg\ndebian-archive-bookworm-security-automatic.gpg\nbrave-browser-archive-keyring.gpg",
      },
      {
        command: "apt install -t",
        description: "Instala um pacote forçando a release/branch específica (útil para backports).",
        example: "sudo apt install -t bookworm-backports linux-image-amd64",
      },
      {
        command: "add-apt-repository",
        description: "Adiciona um repositório (PPA do Ubuntu, em geral). No Debian é raro — prefira editar .list manualmente. Pacote: software-properties-common.",
        example: "sudo add-apt-repository 'deb http://example.com/ bookworm main'",
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

# 2) Adicionar backports (substitua bookworm pelo seu codinome se necessario)
echo "deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware" \\
  | sudo tee /etc/apt/sources.list.d/backports.list

# 3) Atualizar
sudo apt update

# 4) Ver versoes disponiveis do kernel
apt-cache policy linux-image-amd64

# 5) (Opcional - so em VM) instalar kernel novo dos backports
# sudo apt install -t bookworm-backports linux-image-amd64`,
        verify:
          "Após o 'apt update', você deve ver linhas como 'Get:X http://deb.debian.org/debian bookworm-backports'. O 'apt-cache policy' deve mostrar duas versões disponíveis: a do bookworm normal e a do bookworm-backports (mais recente).",
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
          "Backports oferece versões mais novas de software (kernel, libreoffice, etc.) na sua versão stable, sem precisar migrar para testing. Os pacotes vêm de testing recompilados para stable. Para instalar, use 'sudo apt install -t bookworm-backports nome-pacote' — sem o '-t', o apt continua preferindo a versão antiga.",
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
];
