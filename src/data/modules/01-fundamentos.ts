import { Module } from "@/types/module";

export const fundamentos: Module[] = [
  {
    id: "linux-gnu",
    title: "O que é Linux e GNU",
    icon: "🐧",
    category: "Fundamentos Teóricos",
    description: "A história do Linux, o projeto GNU e o conceito de software livre — entenda os pilares antes de tocar no terminal.",
    objectives: [
      "Diferenciar kernel, sistema operacional e distribuição",
      "Entender por que o Debian existe e o que é a GPL",
      "Conhecer as 4 liberdades do software livre",
      "Identificar a versão do kernel e do sistema operacional em uso",
    ],
    content: [
      "O Linux não é um sistema operacional completo — é um kernel (núcleo). O kernel é o componente que faz a ponte entre o hardware (processador, memória, disco, placa de rede) e os programas que você usa. Ele gerencia processos, memória, dispositivos e atende as chamadas de sistema (system calls) feitas pelos aplicativos.",
      "O kernel Linux foi criado por Linus Torvalds em 1991 quando ele tinha 21 anos, como um projeto pessoal inspirado no MINIX (sistema educacional de Andrew Tanenbaum). Linus liberou o código com uma licença livre (GPLv2), permitindo que qualquer pessoa estudasse, modificasse e redistribuísse. Hoje, o kernel Linux tem mais de 30 milhões de linhas de código e milhares de contribuidores ativos.",
      "O projeto GNU (acrônimo recursivo de 'GNU's Not Unix') foi iniciado por Richard Stallman em 1983, oito anos antes do Linux, com o objetivo de criar um sistema operacional completamente livre. O GNU desenvolveu as ferramentas essenciais que tornam um sistema utilizável: o compilador GCC (que compila a maioria dos programas C/C++ do mundo), o editor Emacs, o shell Bash, as coreutils (ls, cp, mv, rm, cat, echo, grep) e a biblioteca C glibc.",
      "Quando o kernel Linux (1991) se uniu às ferramentas GNU (já maduras em 1991), nasceu o sistema GNU/Linux — um sistema operacional completo e livre. É por isso que muitos puristas, e o próprio Stallman, insistem em chamar de GNU/Linux. Na prática, a maioria das pessoas diz simplesmente 'Linux', mas saber a história ajuda a entender por que pacotes essenciais como bash, ls e gcc vêm de outro projeto.",
      "Software livre não significa gratuito. A palavra 'free' em inglês tem dois sentidos: livre (free as in freedom) e grátis (free as in free beer). 'Free Software' refere-se à liberdade. As 4 liberdades fundamentais definidas por Stallman são: (0) liberdade de usar o programa para qualquer propósito, (1) liberdade de estudar como o programa funciona e adaptá-lo (requer acesso ao código-fonte), (2) liberdade de redistribuir cópias, (3) liberdade de melhorar o programa e distribuir as melhorias. A licença GPL garante essas 4 liberdades através de um conceito chamado 'copyleft' — quem distribui o código modificado é obrigado a manter a mesma licença.",
      "Uma distribuição Linux (distro) é uma combinação coordenada de: kernel Linux + ferramentas GNU + gerenciador de pacotes (apt, dnf, pacman) + ambiente gráfico (GNOME, KDE, XFCE) + configurações específicas + uma comunidade ou empresa que mantém tudo isso integrado. O Debian é uma das distribuições mais antigas e influentes — Ubuntu, Mint, Kali, Raspberry Pi OS, Proxmox e muitas outras são todas baseadas no Debian.",
      "Existem outras famílias de distribuições além do Debian: Red Hat (que originou Fedora, CentOS, Rocky Linux), Arch (que originou Manjaro, EndeavourOS), SUSE (que originou openSUSE), e independentes como Slackware e Gentoo. Cada família tem seu gerenciador de pacotes e filosofia. Conhecer essas diferenças ajuda quando você precisa adaptar um tutorial: 'apt install' (Debian) vira 'dnf install' (Fedora) ou 'pacman -S' (Arch).",
      "Por que isso importa na prática? Quando você instala um programa no Debian com 'sudo apt install vim', o gerenciador busca o pacote pré-compilado em servidores oficiais (repositórios), verifica a assinatura criptográfica para garantir autenticidade, baixa, resolve dependências automaticamente e instala. Tudo isso acontece graças ao trabalho coordenado entre kernel, GNU e a comunidade Debian. Não é magia — é décadas de engenharia de software livre.",
    ],
    commands: [
      {
        command: "uname",
        description: "Exibe informações sobre o kernel e o sistema. É o comando que responde 'em qual kernel estou rodando?'",
        example: "uname -a",
        flags: [
          { flag: "-a", description: "Tudo: kernel, hostname, versão, arquitetura, data" },
          { flag: "-r", description: "Só a versão do kernel (ex: 6.1.0-21-amd64)" },
          { flag: "-m", description: "Só a arquitetura da máquina (x86_64, aarch64, armv7l)" },
          { flag: "-n", description: "Só o hostname (nome da máquina)" },
          { flag: "-s", description: "Só o nome do kernel (Linux)" },
        ],
        output: "Linux debian 6.1.0-21-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.90-1 (2024-05-19) x86_64 GNU/Linux",
      },
      {
        command: "cat /etc/os-release",
        description: "Exibe informações padronizadas sobre a distribuição: nome, versão, ID, codinome. Funciona em qualquer distro moderna.",
        example: "cat /etc/os-release",
        output: 'PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"\nNAME="Debian GNU/Linux"\nVERSION_ID="12"\nVERSION="12 (bookworm)"\nVERSION_CODENAME=bookworm\nID=debian',
      },
      {
        command: "lsb_release",
        description: "Mostra informações da distribuição padrão LSB (Linux Standard Base). Pode precisar instalar: sudo apt install lsb-release",
        example: "lsb_release -a",
        flags: [
          { flag: "-a", description: "Tudo: distribuição, versão, codinome" },
          { flag: "-d", description: "Só a descrição" },
          { flag: "-c", description: "Só o codinome (bookworm, bullseye)" },
        ],
        output: "Distributor ID: Debian\nDescription:    Debian GNU/Linux 12 (bookworm)\nRelease:        12\nCodename:       bookworm",
      },
      {
        command: "cat /proc/version",
        description: "Detalhes do kernel: versão, compilador usado, data de build. /proc é um sistema de arquivos virtual com informações do kernel em tempo real.",
        example: "cat /proc/version",
        output: "Linux version 6.1.0-21-amd64 (debian-kernel@lists.debian.org) (gcc-12 (Debian 12.2.0-14) 12.2.0, GNU ld (GNU Binutils for Debian) 2.40) #1 SMP PREEMPT_DYNAMIC Debian 6.1.90-1 (2024-05-19)",
      },
      {
        command: "cat /proc/cpuinfo",
        description: "Detalhes do processador: modelo, número de núcleos, velocidade, flags suportadas. Útil para diagnosticar performance.",
        example: "cat /proc/cpuinfo | grep 'model name' | head -1",
        output: "model name      : Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz",
      },
      {
        command: "free",
        description: "Mostra uso de memória RAM e swap. Essencial para ver se o sistema está com pressão de memória.",
        example: "free -h",
        flags: [
          { flag: "-h", description: "Formato legível (KB, MB, GB)" },
          { flag: "-m", description: "Forçar saída em MB" },
          { flag: "-g", description: "Forçar saída em GB" },
          { flag: "-s 2", description: "Atualizar a cada 2 segundos (Ctrl+C para sair)" },
        ],
        output: "               total        used        free      shared  buff/cache   available\nMem:           7.6Gi       1.2Gi       5.1Gi        85Mi       1.4Gi       6.1Gi\nSwap:          2.0Gi          0B       2.0Gi",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Por que dizemos GNU/Linux",
        content:
          "Quando você roda 'ls', 'cp', 'cat' ou 'bash', está usando ferramentas GNU. Quando seu programa pede memória ou abre um arquivo, está pedindo ao kernel Linux. As duas peças trabalham juntas — daí 'GNU/Linux'. Se quiser ser super preciso, fale GNU/Linux. Se quiser ser entendido rapidamente, fale Linux.",
      },
      {
        type: "warning",
        title: "Distros baseadas em Debian compartilham comandos",
        content:
          "Tudo que você aprende aqui sobre Debian funciona praticamente igual em Ubuntu, Linux Mint, Pop!_OS, Kali, Raspberry Pi OS e Proxmox. Mas NÃO funciona da mesma forma em Fedora, RHEL, openSUSE ou Arch — esses usam outros gerenciadores de pacotes (dnf, zypper, pacman). Se um tutorial diz 'sudo dnf install', você precisa traduzir para 'sudo apt install'.",
      },
    ],
    practiceLabs: [
      {
        title: "Identifique seu sistema",
        goal: "Descobrir qual versão do Debian, qual kernel, qual arquitetura e quantos núcleos seu sistema tem. Sempre que pedir ajuda em um fórum, essas informações são as primeiras a serem perguntadas.",
        steps: [
          "Abra o terminal (Ctrl+Alt+T no GNOME).",
          "Cole o bloco de comandos abaixo de uma vez só.",
          "Anote os resultados em um arquivo de texto para referência futura.",
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
uptime -p`,
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
up 3 hours, 15 minutes`,
        verify:
          "Se algum comando der 'command not found', instale com: sudo apt install procps coreutils. O 'lsb_release' precisa de: sudo apt install lsb-release.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual é a diferença entre Linux e GNU/Linux?",
        answer:
          "Linux é apenas o kernel (o núcleo que conversa com o hardware). GNU/Linux é o sistema completo: kernel Linux + ferramentas GNU (bash, ls, gcc, glibc) + gerenciador de pacotes + interface gráfica. Quando você usa 'cat arquivo.txt', está usando uma ferramenta GNU rodando sobre o kernel Linux.",
      },
      {
        id: 2,
        question: "Quais são as 4 liberdades do software livre?",
        hint: "Elas são numeradas de 0 a 3.",
        answer:
          "0) Liberdade de USAR o programa para qualquer propósito. 1) Liberdade de ESTUDAR e adaptar o programa (requer código-fonte). 2) Liberdade de REDISTRIBUIR cópias. 3) Liberdade de MELHORAR o programa e distribuir as melhorias.",
      },
      {
        id: 3,
        question: "Qual comando mostra a versão do seu kernel Linux?",
        answer: "uname -r (mostra apenas a versão, ex: 6.1.0-21-amd64). uname -a mostra tudo.",
      },
      {
        id: 4,
        question: "Onde está armazenado o nome da sua distribuição Linux?",
        hint: "É um arquivo de texto em /etc.",
        answer:
          "/etc/os-release é o arquivo padronizado (funciona em todas as distros modernas). Use 'cat /etc/os-release' para ler. Versões mais antigas tinham /etc/debian_version, /etc/lsb-release ou /etc/issue.",
      },
      {
        id: 5,
        question: "Por que dizemos que o Debian é uma 'distribuição-mãe'?",
        answer:
          "Porque dezenas de outras distribuições são baseadas no Debian (e usam apt, sources.list, dpkg da mesma forma): Ubuntu, Linux Mint, Pop!_OS, Kali Linux, Raspberry Pi OS, MX Linux, Proxmox VE, Tails, entre outras. Aprender Debian = saber o básico de todas essas.",
      },
      {
        id: 6,
        question: "O que significa GPL?",
        answer:
          "GNU General Public License — a licença criada pela Free Software Foundation que garante as 4 liberdades. Tem o conceito de 'copyleft': se você modifica e distribui um código GPL, deve manter a mesma licença (não pode 'fechar' o código). O kernel Linux usa GPLv2.",
      },
    ],
    references: [
      { title: "Site oficial do Projeto GNU", url: "https://www.gnu.org/" },
      { title: "Site oficial do kernel Linux", url: "https://www.kernel.org/" },
      { title: "Lista de distribuições baseadas em Debian", url: "https://www.debian.org/derivatives/" },
      { title: "As 4 liberdades do software livre", url: "https://www.gnu.org/philosophy/free-sw.pt-br.html" },
    ],
  },

  {
    id: "projeto-debian",
    title: "O Projeto Debian",
    icon: "🌀",
    category: "Fundamentos Teóricos",
    description: "Por que o Debian existe há mais de 30 anos, como ele é organizado, e o que são branches stable, testing e unstable.",
    objectives: [
      "Conhecer a história e filosofia do Debian",
      "Entender o Contrato Social e as DFSG",
      "Diferenciar as branches stable, testing e unstable",
      "Saber identificar os codinomes (Toy Story) e o ciclo de releases",
    ],
    content: [
      "O Debian foi fundado em 16 de agosto de 1993 por Ian Murdock, então estudante de ciência da computação na Universidade Purdue (EUA). O nome 'Debian' é a junção de Debra (sua namorada na época, depois esposa) e Ian. Ian queria criar uma distribuição Linux que fosse mantida abertamente, no espírito do projeto GNU, sem dono comercial — diferente da Slackware, que era dominada por uma única pessoa.",
      "Ian Murdock escreveu em 1994 o 'Manifesto Debian', explicando a filosofia: software 100% livre, mantido por uma comunidade global de voluntários, com decisões técnicas tomadas por meritocracia. Ian faleceu em 28 de dezembro de 2015, mas seu legado é o Debian — prova de que uma comunidade global pode criar software de nível empresarial sem CEO, sem investidores, sem ações.",
      "O Debian é mantido pelo 'Debian Project', uma organização de mais de 1000 desenvolvedores espalhados pelo mundo. Ela tem dois documentos fundamentais: o Contrato Social (Debian Social Contract) e as Debian Free Software Guidelines (DFSG). Esses textos definem quais softwares podem entrar no repositório oficial e quais ficam fora (em 'non-free' ou 'contrib').",
      "O Contrato Social tem 5 promessas: (1) Debian permanecerá 100% livre, (2) Vamos retribuir à comunidade software livre, (3) Não vamos esconder problemas — o Bug Tracker é público, (4) Nossas prioridades são nossos usuários e o software livre, (5) Trabalhos que não atendem nossos padrões de software livre vão para non-free, mas não fazem parte do sistema. Isso explica por que firmware proprietário e drivers NVIDIA ficam separados.",
      "O Debian tem 3 branches paralelas que são na verdade 3 estados de maturidade dos pacotes:\n• stable (atual: bookworm/Debian 12) — testado exaustivamente, atualizações só de segurança. Para servidores e usuários conservadores.\n• testing (atual: trixie/Debian 13 em desenvolvimento) — pacotes que entram no próximo stable. Mais novos, geralmente estáveis. Para usuários intermediários.\n• unstable (sempre chamada de 'sid') — onde tudo entra primeiro. Quebra com mais frequência. Para desenvolvedores e curiosos.\nE existe ainda 'experimental' para coisas verdadeiramente quebradas que estão sendo testadas.",
      "Os codinomes do Debian seguem personagens do filme Toy Story (escolhido por Bruce Perens, que trabalhou na Pixar): Buzz (1.1, 1996), Rex (1.2), Bo (1.3), Hamm (2.0), Slink (2.1), Potato (2.2), Woody (3.0), Sarge (3.1), Etch (4.0), Lenny (5.0), Squeeze (6.0), Wheezy (7), Jessie (8), Stretch (9), Buster (10), Bullseye (11), Bookworm (12), Trixie (13 — em desenvolvimento), Forky (14 — futuro). Sid, a branch unstable, é o nome do menino vizinho do Andy que destrói brinquedos — referência apropriada.",
      "O ciclo de releases do Debian é tradicionalmente 'quando estiver pronto', mas atualmente é mais ou menos a cada 2 anos. Cada release stable recebe atualizações de segurança por 3 anos como 'oldstable', e depois mais 2 anos pelo time de LTS (Long Term Support), totalizando ~5 anos de suporte. O bookworm (Debian 12), lançado em junho de 2023, terá suporte até 2028.",
      "O Debian é a base de muitas distribuições famosas: Ubuntu (Canonical, foco em desktop), Linux Mint (foco em ex-usuários do Windows), Kali Linux (segurança ofensiva), Raspberry Pi OS (oficial do Raspberry Pi), Proxmox VE (virtualização), Tails (anonimato), Devuan (sem systemd), MX Linux. Quando você aprende Debian, ganha conhecimento aplicável a todas elas.",
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
        command: "dpkg --print-architecture",
        description: "Mostra a arquitetura nativa do sistema (amd64, arm64, i386, armhf, riscv64).",
        example: "dpkg --print-architecture",
        output: "amd64",
      },
      {
        command: "apt-cache policy",
        description: "Mostra de qual repositório/branch um pacote está sendo instalado. Essencial para entender de onde vêm seus pacotes.",
        example: "apt-cache policy bash",
        output: "bash:\n  Instalado: 5.2.15-2+b7\n  Candidato: 5.2.15-2+b7\n  Tabela de versão:\n *** 5.2.15-2+b7 500\n        500 http://deb.debian.org/debian bookworm/main amd64 Packages",
      },
      {
        command: "cat /etc/apt/sources.list",
        description: "Mostra de quais repositórios o apt vai buscar pacotes. Cada linha 'deb http://...' é um repositório.",
        example: "cat /etc/apt/sources.list",
        output: "deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware\ndeb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware",
      },
      {
        command: "ls /etc/apt/sources.list.d/",
        description: "Lista repositórios extras configurados. Cada arquivo .list adiciona repositórios além do principal.",
        example: "ls /etc/apt/sources.list.d/",
        output: "google-chrome.list  vscode.list",
      },
      {
        command: "uptime",
        description: "Quanto tempo o sistema está ligado, quantos usuários conectados e load average. Servidores Debian costumam ter uptimes de meses.",
        example: "uptime",
        output: "14:32:11 up 47 days, 3:18, 2 users, load average: 0.05, 0.12, 0.09",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Como saber qual branch usar?",
        content:
          "Para servidores em produção: stable, sem dúvida. Para desktop pessoal: stable se quer estabilidade, testing se quer pacotes mais novos (com risco). Para desenvolvimento bleeding-edge: sid. NUNCA misture branches no mesmo sistema sem entender 'apt pinning' — você pode quebrar o sistema.",
      },
      {
        type: "warning",
        title: "Bookworm tem firmware non-free incluso por padrão",
        content:
          "A partir do Debian 12 (bookworm), o instalador oficial inclui firmware non-free (para Wi-Fi, placas de vídeo, áudio) por padrão. Isso é uma mudança grande — antes, você precisava baixar uma ISO especial 'firmware non-free'. Esta foi uma decisão pragmática para reduzir frustração de usuários novos.",
      },
      {
        type: "success",
        title: "O Debian Bug Tracking System é público",
        content:
          "Todo bug do Debian fica em https://bugs.debian.org/ — qualquer pessoa pode ver, comentar, e até reportar. É uma das coisas mais transparentes do mundo do software. Reportar bug usa o comando 'reportbug' (instale com: sudo apt install reportbug).",
      },
    ],
    practiceLabs: [
      {
        title: "Identifique sua versão e codinome do Debian",
        goal: "Saber exatamente qual versão do Debian você roda. Isso é essencial para seguir tutoriais (muitos tutoriais são específicos de bookworm vs bullseye).",
        steps: [
          "Abra o terminal.",
          "Rode os comandos abaixo um por um.",
          "Compare com a tabela de codinomes: bullseye=11, bookworm=12, trixie=13.",
        ],
        command: `echo "=== Versao numerica ==="
cat /etc/debian_version

echo ""
echo "=== Codinome ==="
lsb_release -c 2>/dev/null || cat /etc/os-release | grep CODENAME

echo ""
echo "=== Release info completo ==="
cat /etc/os-release`,
        verify:
          "Se a versão numérica começa com '12', você está em bookworm (estável atual). Se começa com '11', está em bullseye (oldstable). Se mostra 'trixie/sid' em vez de número, está em testing/unstable.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Quem fundou o Projeto Debian e quando?",
        answer:
          "Ian Murdock, em 16 de agosto de 1993, quando ainda era estudante na Universidade Purdue. O nome Debian = Debra (esposa) + Ian.",
      },
      {
        id: 2,
        question: "Quais são as 3 branches do Debian e para que servem?",
        answer:
          "stable (testada, para produção), testing (próximo stable, para usuários intermediários), unstable (chamada 'sid', tudo entra aqui primeiro, para desenvolvedores).",
      },
      {
        id: 3,
        question: "Qual é o codinome da versão estável atual (Debian 12)?",
        hint: "Nome de personagem do Toy Story.",
        answer: "Bookworm.",
      },
      {
        id: 4,
        question: "Por que o Debian é considerado uma 'distro-mãe'?",
        answer:
          "Porque é base de muitas outras distros: Ubuntu, Mint, Kali, Raspberry Pi OS, Proxmox, MX Linux, Tails, etc. Aprender Debian = saber o básico de todas essas.",
      },
      {
        id: 5,
        question: "O que são as DFSG?",
        answer:
          "Debian Free Software Guidelines — diretrizes que definem o que é considerado software livre o suficiente para entrar no repositório 'main' do Debian. São a base da definição de software livre da OSI.",
      },
      {
        id: 6,
        question: "Por quanto tempo uma release stable do Debian recebe atualizações de segurança?",
        answer:
          "~3 anos como stable + ~2 anos como oldstable suportada pelo time de LTS = ~5 anos de suporte total. Bookworm (lançado 2023) terá suporte até ~2028.",
      },
    ],
    references: [
      { title: "Site oficial do Debian", url: "https://www.debian.org/" },
      { title: "Contrato Social do Debian", url: "https://www.debian.org/social_contract.pt.html" },
      { title: "DFSG — Debian Free Software Guidelines", url: "https://www.debian.org/social_contract#guidelines" },
      { title: "Lista de releases do Debian", url: "https://www.debian.org/releases/" },
      { title: "Bug Tracking System do Debian", url: "https://bugs.debian.org/" },
    ],
  },

  {
    id: "repositorios-debian",
    title: "Repositórios Debian — main, contrib, non-free",
    icon: "📦",
    category: "Fundamentos Teóricos",
    description: "Como o apt sabe de onde baixar pacotes, e o que são main, contrib, non-free, non-free-firmware e backports.",
    objectives: [
      "Entender a estrutura de sources.list",
      "Diferenciar main, contrib, non-free e non-free-firmware",
      "Configurar repositório de backports para pacotes mais novos",
      "Adicionar repositórios de terceiros com segurança (chaves GPG)",
    ],
    content: [
      "Repositórios são servidores na internet onde ficam os pacotes (.deb) que o apt baixa quando você instala algo. Cada repositório tem um endereço (URL), uma versão do Debian (codinome) e uma ou mais 'componentes' (main, contrib, non-free).",
      "O arquivo principal de configuração é /etc/apt/sources.list. Cada linha não-comentada é uma fonte (source). O formato é:\n\ndeb [opções] URL CODINOME COMPONENTES\n\nExemplo típico:\ndeb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware\n\nEssa linha diz: 'use o repositório em deb.debian.org/debian, da versão bookworm, e habilite os componentes main, contrib, non-free e non-free-firmware'.",
      "Componentes disponíveis no Debian:\n• main — software 100% livre, conforme DFSG. É o 'verdadeiro Debian'. Tudo aqui passou pela revisão da comunidade.\n• contrib — software livre, MAS depende de algo non-free para funcionar (ex: jogos livres que precisam de ROMs proprietárias).\n• non-free — software não-livre (drivers proprietários, fontes Microsoft, codecs com patentes). Muitos usuários precisam.\n• non-free-firmware — firmware não-livre (Wi-Fi Intel, BIOS de placa de vídeo). Separado de non-free desde Debian 12.",
      "Repositórios de segurança são CRÍTICOS — quando aparece uma vulnerabilidade num pacote, o time de segurança do Debian publica a correção aqui. Toda instalação deve ter:\n\ndeb http://security.debian.org/debian-security bookworm-security main\n\nO 'apt update' busca atualizações desses repositórios também. Atualizações de segurança são geralmente lançadas em horas após uma CVE ser divulgada.",
      "Backports é um repositório especial que oferece versões mais novas de software para a versão stable. Por exemplo: o bookworm tem o kernel 6.1, mas via backports você pode instalar o 6.7. Útil quando você precisa de uma feature nova (ex: suporte a hardware recente). A linha é:\n\ndeb http://deb.debian.org/debian bookworm-backports main\n\nE para instalar de lá: sudo apt install -t bookworm-backports nome-pacote",
      "Repositórios de terceiros (Google, Microsoft, Spotify, Brave) NÃO devem ser adicionados em sources.list. Use sempre /etc/apt/sources.list.d/ (um arquivo .list por repositório) para isolar e poder remover facilmente. E SEMPRE adicione a chave GPG do repositório em /usr/share/keyrings/ — sem isso, o apt vai dar erro de assinatura inválida (proteção essencial contra ataques).",
      "Hierarquia de prioridade: o apt obedece o sources.list de cima para baixo. Se a mesma versão de um pacote existe em dois lugares, ele pega do primeiro. Para casos complexos (rodar testing junto com stable, por exemplo), existe o 'apt pinning' em /etc/apt/preferences.d/ — não vamos cobrir aqui, mas saiba que existe.",
      "Quando você roda 'sudo apt update', o apt baixa os arquivos 'Release' e 'Packages' de cada repositório. O Release é assinado com GPG — se a assinatura não bate com as chaves em /etc/apt/trusted.gpg.d/ ou /usr/share/keyrings/, dá erro. Por isso adicionar repositório sem chave é problema. O 'Packages' é a lista de tudo que está disponível.",
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
        description: "Lista repositórios extras (de terceiros, normalmente).",
        example: "ls -la /etc/apt/sources.list.d/",
      },
      {
        command: "apt update",
        description: "Atualiza a lista de pacotes disponíveis. SEMPRE rode antes de instalar algo novo.",
        example: "sudo apt update",
        output: "Get:1 http://security.debian.org bookworm-security InRelease [48.0 kB]\nGet:2 http://deb.debian.org/debian bookworm InRelease [151 kB]\n...\nReading package lists... Done",
      },
      {
        command: "apt-cache policy",
        description: "Mostra de qual repositório vem um pacote, com prioridades.",
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
        description: "Busca pacotes pelo nome ou descrição.",
        example: "apt-cache search 'audio editor'",
        output: "audacity - fast, cross-platform audio editor\nardour - the digital audio workstation",
      },
      {
        command: "apt-cache show",
        description: "Mostra detalhes de um pacote: descrição, dependências, mantenedor, tamanho.",
        example: "apt-cache show vim | head -20",
      },
      {
        command: "apt-key list",
        description: "Lista as chaves GPG dos repositórios (forma antiga). Em sistemas modernos prefira /etc/apt/trusted.gpg.d/ ou /usr/share/keyrings/.",
        example: "apt-key list",
      },
    ],
    tips: [
      {
        type: "info",
        title: "deb vs deb-src",
        content:
          "'deb' = pacotes binários (.deb pré-compilados). 'deb-src' = código-fonte. Você só precisa de deb-src se for compilar pacotes do zero (raro). Pode comentar essas linhas para acelerar 'apt update'.",
      },
      {
        type: "warning",
        title: "NUNCA edite sources.list direto sem entender",
        content:
          "Misturar repositórios incompatíveis (ex: stable + sid) sem 'apt pinning' adequado pode quebrar o sistema permanentemente. Sintomas: pacotes parciais instalados, dependências não resolvidas, sistema não dá boot. Se quiser experimentar, faça em VM primeiro.",
      },
      {
        type: "danger",
        title: "Repositórios de terceiros são vetor de ataque",
        content:
          "Quando você adiciona um repositório de terceiros (Google, Microsoft, etc.), está dando a essa entidade poder de instalar QUALQUER coisa no seu sistema com privilégios de root. Adicione apenas de fontes que você confia. SEMPRE verifique a chave GPG do repositório.",
      },
    ],
    practiceLabs: [
      {
        title: "Habilitar backports e instalar um pacote mais novo",
        goal: "Aprender a usar backports para conseguir um pacote mais recente sem migrar o sistema todo para testing.",
        steps: [
          "Veja sua versão atual do kernel: uname -r",
          "Adicione o repositório backports criando um arquivo dedicado (não edite sources.list).",
          "Atualize a lista de pacotes.",
          "Procure a versão disponível do kernel em backports.",
          "Instale (opcional — substituir kernel é arriscado, faça em VM).",
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
          "Após o 'apt update', você deve ver linhas como 'Get:X http://deb.debian.org/debian bookworm-backports'. O 'apt-cache policy' deve mostrar duas versões disponíveis.",
      },
      {
        title: "Adicionar o repositório do Brave Browser corretamente",
        goal: "Aprender o procedimento seguro para adicionar repositório de terceiro: chave GPG dedicada + arquivo .list isolado.",
        steps: [
          "Baixe e salve a chave GPG do Brave em /usr/share/keyrings/",
          "Crie um arquivo .list referenciando a chave",
          "Atualize com apt update",
          "Instale o Brave",
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
          "Se 'apt update' não dá erro 'NO_PUBKEY' nem 'signature invalid', o setup está correto. O Brave deve aparecer no menu de aplicativos depois de instalado.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a diferença entre os componentes main, contrib e non-free?",
        answer:
          "main = 100% software livre (DFSG). contrib = software livre que DEPENDE de algo non-free para funcionar. non-free = software com restrições de uso/distribuição (drivers proprietários, codecs).",
      },
      {
        id: 2,
        question: "Qual arquivo principal lista os repositórios do apt?",
        answer: "/etc/apt/sources.list — repositórios principais. Repositórios extras vão em /etc/apt/sources.list.d/*.list",
      },
      {
        id: 3,
        question: "O que é o repositório 'security' e por que é essencial?",
        answer:
          "security.debian.org publica correções de segurança (CVEs) para a versão stable em horas/dias. Sem ele, seu sistema fica vulnerável quando aparecem falhas. Sempre habilitado por padrão em instalações novas.",
      },
      {
        id: 4,
        question: "Para que servem os 'backports'?",
        answer:
          "Para instalar versões mais novas de software (kernel, libreoffice, etc.) na sua versão stable, sem precisar migrar para testing. Os pacotes vêm de testing, recompilados para stable.",
      },
      {
        id: 5,
        question: "Qual o jeito CERTO de adicionar um repositório de terceiro?",
        answer:
          "1) Baixar a chave GPG do projeto e salvar em /usr/share/keyrings/. 2) Criar um arquivo dedicado em /etc/apt/sources.list.d/ com a opção [signed-by=/usr/share/keyrings/CHAVE.gpg]. 3) Rodar apt update. NUNCA edite sources.list direto e nunca pule a chave.",
      },
      {
        id: 6,
        question: "Como saber de qual repositório veio um pacote já instalado?",
        answer: "apt-cache policy NOME_PACOTE — mostra a versão instalada e de qual repositório veio.",
      },
    ],
    references: [
      { title: "Wiki Debian — SourcesList", url: "https://wiki.debian.org/SourcesList" },
      { title: "Debian Backports oficial", url: "https://backports.debian.org/" },
      { title: "Lista de mirrors oficiais", url: "https://www.debian.org/mirror/list" },
    ],
  },
];
