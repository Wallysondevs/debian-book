import { Module } from "@/types/module";

export const terminalArquivos: Module[] = [
  {
    id: "terminal-basico",
    title: "Primeiros Passos no Terminal",
    icon: "⌨️",
    category: "Terminal e Arquivos",
    description: "O que é o terminal, por que ele existe, como conversar com ele e os atalhos que vão multiplicar sua produtividade.",
    objectives: [
      "Diferenciar terminal, shell e console sem confundir mais nunca",
      "Ler a anatomia de um comando (comando, flags curtas e longas, argumentos)",
      "Dominar autocompletar com Tab e busca no histórico com Ctrl+R",
      "Pedir ajuda com man, --help e tldr de forma eficiente",
      "Entender variáveis de ambiente como $HOME, $USER e $PATH",
      "Reconhecer o prompt e o que cada parte dele significa",
    ],
    content: [
      `Imagine que o seu computador é uma casa enorme com milhares de cômodos. A interface gráfica (aquela com janelas, ícones e mouse) é como andar pela casa abrindo cada porta com a mão: funciona, é confortável, mas demora. O terminal é como ter um interfone direto para o mordomo: você diz "traga o livro azul que está na terceira gaveta da estante do escritório" e em meio segundo ele já fez. Pode parecer mais rude no começo — afinal você precisa saber o nome exato do livro e da gaveta — mas depois que você se acostuma, voltar para o mouse parece andar de bicicleta com rodinhas.`,
      `O terminal nasceu nos anos 1960, muito antes de existir mouse ou janela. Naquela época, computadores eram do tamanho de geladeiras e você se comunicava com eles através de teletipos: máquinas de escrever conectadas que imprimiam suas perguntas e a resposta da máquina em papel. Quando vieram as telas, elas só substituíram o papel — a forma de conversar com o computador continuou a mesma: você digita uma linha, aperta Enter, o computador responde. Esse modelo é tão eficiente que sobreviveu até hoje, lado a lado com toda a parafernália gráfica moderna.`,
      `Antes de qualquer comando, três palavras precisam parar de se misturar na sua cabeça: terminal, shell e console. Terminal é o programa de janela onde você digita — no Debian costuma ser o GNOME Terminal (no GNOME), Konsole (no KDE) ou XFCE Terminal (no XFCE). Ele é só um quadro preto com cursor; não entende nada do que você escreve. Shell é o intérprete que recebe o que você digitou e age — no Debian o padrão é o Bash (Bourne Again SHell). Console é a tela de texto pura, sem ambiente gráfico nenhum, que você acessa apertando Ctrl+Alt+F2 (ou F3, F4...). Nas três situações você está digitando comandos parecidos, mas as camadas envolvidas são diferentes.`,
      `Quando você digita uma linha e aperta Enter, o shell faz uma coisa surpreendentemente sofisticada nos bastidores. Primeiro, ele quebra sua linha em pedaços (palavras separadas por espaço). O primeiro pedaço é tratado como o nome do comando; os demais como argumentos. Em seguida, o shell expande qualquer atalho — como ~ (que vira /home/seu_usuario), $VARIAVEL (que vira o conteúdo da variável) ou wildcards como *.txt (que vira a lista de arquivos que casam). Só então ele procura o programa correspondente nas pastas listadas em $PATH (tipicamente /usr/bin, /bin, /usr/local/bin) e roda. Saber que esse processo existe ajuda muito quando algo não funciona: você consegue desconfiar onde quebrou.`,
      `A anatomia de um comando segue quase sempre o mesmo padrão: COMANDO [FLAGS] [ARGUMENTOS]. Por exemplo, em "ls -lah /var/log", "ls" é o comando (listar), "-lah" são três flags grudadas (-l formato longo, -a inclusive ocultos, -h tamanhos legíveis), e "/var/log" é o argumento (a pasta a listar). Flags têm dois sabores: as curtas usam um traço só (-l, -a, -h) e podem ser combinadas (-lah = -l -a -h), e as longas usam dois traços (--all, --help, --version) e não podem ser combinadas. Geralmente uma flag curta tem um equivalente longo: ls -a é igual a ls --all. As longas são mais legíveis em scripts; as curtas, mais rápidas no dia a dia.`,
      `O prompt é a "saudação" que o shell te dá antes de cada comando. No Debian, por padrão, ele se parece com isso: usuario@hostname:~/Documentos$ . O usuario é seu nome de login, o hostname é o nome da máquina, depois dos dois pontos vem o diretório atual (~ é abreviação de /home/SEU_USUARIO), e o sinal final indica seu nível de privilégio: $ para usuário comum e # para o root (super-usuário). Aprenda a olhar o prompt antes de apertar Enter. Se você ver # quando não deveria estar como root, pare e pense duas vezes — qualquer comando errado pode quebrar o sistema.`,
      `O Tab é, sem nenhum exagero, o atalho que mais acelera a vida no terminal. Você começa a digitar o nome de um comando, arquivo ou pasta, aperta Tab e o shell completa o resto sozinho. Se o que você digitou ainda for ambíguo (várias possibilidades), nada acontece com um Tab; aperte duas vezes seguidas e ele lista todas as opções. Por exemplo: "cd /va" + Tab vira "cd /var/", e nesse ponto duas batidas de Tab te mostram todas as subpastas de /var. Essa autocompletação não funciona só com nomes — distros modernas como o Debian incluem completação para flags de comandos populares (apt, systemctl, git). É difícil exagerar quanto tempo o Tab te economiza ao longo de uma vida.`,
      `O histórico é seu segundo melhor amigo. As setas ↑ e ↓ navegam pelos últimos comandos que você rodou. Ctrl+R abre uma busca incremental: digite parte do comando, ele vai mostrando os matches; Enter executa, Esc só recupera para edição. O comando "history" lista tudo (cada um numerado), e "!N" re-executa o comando número N. "!!" repete o último, e "!apt" repete o último comando que começou com "apt". Tudo isso fica salvo no arquivo ~/.bash_history e sobrevive entre sessões — você desliga o computador, liga amanhã, e seu histórico está lá esperando.`,
      `Os atalhos de edição do Bash vêm da tradição do Emacs e funcionam em qualquer linha de comando: Ctrl+A vai para o início da linha, Ctrl+E para o final, Ctrl+W apaga a palavra à esquerda, Ctrl+U apaga tudo à esquerda do cursor, Ctrl+K apaga tudo à direita, Ctrl+L limpa a tela (igual a "clear"), Ctrl+C cancela o comando atual, Ctrl+Z pausa um processo (recupera com "fg"), Ctrl+D fecha o shell (igual a "exit"). O atalho mais subestimado é Alt+. (alt + ponto): cola o último argumento do comando anterior. Você fez "mkdir /tmp/teste-longo", quer agora "cd" lá: digite "cd " e Alt+. — pronto.`,
      `Saber pedir ajuda é metade da batalha. Existem quatro caminhos. "COMANDO --help" mostra um resumo curto, geralmente uma tela. "man COMANDO" abre o manual completo (pode ter dezenas de páginas; navegue com setas, /palavra para buscar, q para sair). "info COMANDO" é um manual em hipertexto antigo, raramente usado hoje. E "tldr COMANDO" mostra os usos mais comuns com exemplos prontos — instale com "sudo apt install tldr" e nunca mais sofra com manpages gigantes para casos simples. A confusão clássica é abrir "man bash" sem perceber que tem 5000 linhas; comece sempre por --help ou tldr e só vá para o man quando precisar de detalhe profundo.`,
      `Variáveis de ambiente são valores que o shell e os programas leem para se comportar. As mais importantes: $HOME (sua pasta pessoal, igual ao ~), $USER (seu login), $PATH (lista de pastas onde procurar comandos, separadas por dois-pontos), $PWD (diretório atual), $SHELL (qual shell está em uso), $LANG (idioma do sistema). Use "echo $NOME" para ver o valor, "env" ou "printenv" para listar todas. Quando você digita um comando como "ls" e ele "não é encontrado", quase sempre o problema está no $PATH. Quando você instala um programa em /opt/meuapp/bin e quer rodar só "meuapp", precisa adicionar essa pasta ao $PATH no seu ~/.bashrc.`,
      `Ao terminar este capítulo você deve conseguir abrir o terminal sem medo, ler o prompt, digitar um comando entendendo cada parte, usar Tab para nunca mais errar caminho de arquivo, navegar pelo histórico com Ctrl+R e pedir ajuda quando travar. Se você só decorar uma coisa daqui, que seja: aperte Tab o tempo todo. Os programadores experientes parecem mágicos no terminal não porque memorizam tudo — é porque deixam o Tab e o histórico fazerem o trabalho braçal.`,
    ],
    commands: [
      {
        command: "pwd",
        description: "Print Working Directory — mostra o caminho absoluto do diretório atual.",
        example: "pwd",
        output: "/home/maria",
      },
      {
        command: "ls",
        description: "Lista arquivos e diretórios do diretório atual (ou do informado).",
        example: "ls -lah /var/log",
        output: "total 12M\ndrwxr-xr-x  2 root root 4.0K Jan 15 10:23 .\ndrwxr-xr-x 14 root root 4.0K Jan  5 09:00 ..\n-rw-r-----  1 root adm  2.1M Jan 15 10:30 syslog\n-rw-r-----  1 root adm  876K Jan 14 23:59 syslog.1",
        flags: [
          { flag: "-l", description: "Formato longo (permissões, dono, grupo, tamanho, data)" },
          { flag: "-a", description: "Mostra arquivos ocultos (que começam com .)" },
          { flag: "-h", description: "Tamanhos legíveis (KB, MB, GB) em vez de bytes" },
          { flag: "-S", description: "Ordena por tamanho (maior primeiro)" },
          { flag: "-t", description: "Ordena por data de modificação (mais recente primeiro)" },
          { flag: "-r", description: "Inverte a ordem do sort" },
          { flag: "-R", description: "Recursivo: entra em subpastas" },
          { flag: "--color=auto", description: "Coloriza por tipo (já vem ativo no Debian)" },
        ],
      },
      {
        command: "cd",
        description: "Change Directory — muda o diretório atual do shell.",
        example: "cd ~/Documentos",
        flags: [
          { flag: "(sem argumento)", description: "Vai para sua $HOME" },
          { flag: "~", description: "Idem: vai para sua $HOME" },
          { flag: "..", description: "Sobe um nível (pasta-pai)" },
          { flag: "-", description: "Volta para o diretório anterior" },
          { flag: "/", description: "Vai para a raiz do sistema" },
        ],
      },
      {
        command: "clear",
        description: "Limpa a tela do terminal. O atalho Ctrl+L faz a mesma coisa.",
        example: "clear",
      },
      {
        command: "history",
        description: "Mostra a lista numerada dos comandos que você já rodou nessa sessão e nas anteriores.",
        example: "history | tail -20",
        output: "  493  apt update\n  494  apt upgrade\n  495  cd /var/log\n  496  ls -lah",
        flags: [
          { flag: "-c", description: "Apaga TODO o histórico da sessão atual" },
          { flag: "-d N", description: "Apaga apenas a linha de número N" },
          { flag: "-w", description: "Salva o histórico no ~/.bash_history agora" },
        ],
      },
      {
        command: "whoami",
        description: "Mostra o nome do usuário atual logado no shell.",
        example: "whoami",
        output: "maria",
      },
      {
        command: "hostname",
        description: "Mostra (ou define) o nome da máquina.",
        example: "hostname",
        output: "debian-laptop",
      },
      {
        command: "date",
        description: "Mostra a data e hora atual. Aceita formato customizado com +.",
        example: 'date "+%d/%m/%Y %H:%M:%S"',
        output: "15/01/2026 14:32:08",
        flags: [
          { flag: "+%Y-%m-%d", description: "Formato ISO (ano-mês-dia)" },
          { flag: "-u", description: "Mostra em UTC em vez do fuso local" },
          { flag: "-d 'yesterday'", description: "Mostra data relativa (ontem, amanhã, etc.)" },
        ],
      },
      {
        command: "echo",
        description: "Imprime na tela o texto que você passar. Útil para testar variáveis e wildcards.",
        example: 'echo "Olá, $USER, sua casa é $HOME"',
        output: "Olá, maria, sua casa é /home/maria",
        flags: [
          { flag: "-n", description: "Não adiciona quebra de linha no final" },
          { flag: "-e", description: "Interpreta sequências de escape como \\n e \\t" },
        ],
      },
      {
        command: "man",
        description: "Abre o manual completo de um comando. Setas para rolar, /palavra para buscar, q para sair.",
        example: "man ls",
      },
      {
        command: "tldr",
        description: "Mostra exemplos práticos resumidos de um comando. Mais útil que man para casos comuns.",
        example: "tldr tar",
      },
      {
        command: "env",
        description: "Lista todas as variáveis de ambiente exportadas no shell atual.",
        example: "env | grep -i path",
        output: "PATH=/usr/local/bin:/usr/bin:/bin\nMANPATH=/usr/local/man:/usr/share/man",
      },
      {
        command: "type",
        description: "Diz se um nome é comando externo, função, alias ou builtin do shell.",
        example: "type ls",
        output: "ls is aliased to `ls --color=auto'",
      },
      {
        command: "which",
        description: "Mostra o caminho completo do executável que será chamado.",
        example: "which python3",
        output: "/usr/bin/python3",
      },
      {
        command: "exit",
        description: "Encerra a sessão do shell. Atalho equivalente: Ctrl+D.",
        example: "exit",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Tab é seu super-poder",
        content:
          "Aperte Tab depois de cada poucas letras. Se nada acontece, é porque há ambiguidade — bata Tab duas vezes para ver as opções. Quem usa Tab religiosamente quase nunca digita um caminho errado.",
      },
      {
        type: "warning",
        title: "Não copie o $ ou o # do tutorial",
        content:
          "Em documentação, '$ comando' indica que você roda como usuário comum, e '# comando' que precisa ser root. Esses símbolos representam o prompt e NÃO fazem parte do comando. Copiar junto causa erro de sintaxe.",
      },
      {
        type: "success",
        title: "Instale o tldr e seja feliz",
        content:
          "'sudo apt install tldr' uma vez e pronto. Sempre que esquecer a sintaxe, 'tldr nomedocomando' te dá os 3-5 usos mais comuns com exemplo. É infinitamente mais rápido do que ler 30 páginas de manpage.",
      },
      {
        type: "danger",
        title: "Cuidado com o prompt #",
        content:
          "O prompt terminado em # significa que você está como root. Qualquer comando errado pode quebrar o sistema irreparavelmente. Prefira sempre usar sudo para comandos pontuais e saia de sessões root assim que acabar.",
      },
      {
        type: "info",
        title: "Ctrl+R muda sua vida",
        content:
          "Em vez de apertar ↑ vinte vezes para achar aquele comando longo, aperte Ctrl+R e digite parte dele. O Bash mostra o match enquanto você digita. Esc para editar antes de rodar, Enter para executar direto.",
      },
    ],
    practiceLabs: [
      {
        title: "Primeiro tour pelo seu sistema",
        goal: "Rodar de verdade os comandos básicos para que entrem na memória muscular.",
        steps: [
          "Abra o terminal (Atividades → Terminal, ou Ctrl+Alt+T em alguns ambientes).",
          "Rode pwd e leia o caminho mostrado.",
          "Rode ls -lah para ver o que existe na sua casa.",
          "Rode whoami, hostname e date para se apresentar à máquina.",
          "Rode 'echo $HOME' e 'echo $PATH' para ver suas variáveis de ambiente.",
          "Use cd ~/Documentos (ou crie a pasta antes com mkdir).",
          "Rode pwd de novo para confirmar a mudança.",
          "Volte para a home com cd sem argumento.",
        ],
        command: `pwd
ls -lah
whoami
hostname
date
echo "Casa: $HOME, usuário: $USER"
mkdir -p ~/Documentos
cd ~/Documentos
pwd
cd
pwd`,
        expected:
          "Saídas curtas e legíveis. O pwd inicial deve mostrar /home/SEUUSUARIO, e o segundo pwd, /home/SEUUSUARIO/Documentos. O último pwd volta para /home/SEUUSUARIO.",
        verify:
          "Se viu seu nome de usuário em whoami, o nome da máquina em hostname, a data de hoje em date, e navegou para Documentos e voltou, você dominou os fundamentos.",
      },
      {
        title: "Tab e histórico na prática",
        goal: "Internalizar os atalhos que mais aceleram o trabalho diário.",
        steps: [
          "Digite 'ls /v' e aperte Tab — deve completar para 'ls /var/'.",
          "Aperte Tab duas vezes — lista todas as subpastas de /var.",
          "Complete 'log' e Enter para listar /var/log.",
          "Aperte ↑ algumas vezes e veja os comandos anteriores.",
          "Aperte Ctrl+R, comece a digitar 'pwd' e veja o match aparecer.",
          "Pressione Enter para executar.",
          "Digite '!ls' e Enter — o Bash repete o último comando que começou com ls.",
          "Use Alt+. para colar o último argumento do comando anterior.",
        ],
        verify:
          "Se o Tab completou os caminhos, se Ctrl+R achou comandos antigos e se !ls funcionou, você já está usando o terminal como gente grande.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual é a diferença entre terminal, shell e console?",
        hint: "Pense em camadas: a janela, o intérprete, e a tela de texto pura.",
        answer:
          "Terminal é o programa de janela onde você digita (GNOME Terminal, Konsole). Shell é o intérprete que entende e executa seus comandos (Bash é o padrão no Debian). Console é a tela de texto pura, sem ambiente gráfico, acessada com Ctrl+Alt+F2 a F6.",
      },
      {
        id: 2,
        question: "O que o caractere ~ representa em um caminho?",
        hint: "É um atalho universal para algo seu.",
        answer:
          "~ é a abreviação da sua pasta pessoal (/home/SEU_USUARIO). 'cd ~' é igual a 'cd /home/maria' (se você é a maria) e igual a 'cd' sem argumento. Você também pode usar ~outroUsuario para a casa de outra pessoa.",
      },
      {
        id: 3,
        question: "Qual atalho cancela um comando que está rodando agora e demorando demais?",
        hint: "Combina Ctrl com uma letra que parece de 'cancelar'.",
        answer:
          "Ctrl+C envia o sinal SIGINT para o processo, fazendo-o encerrar imediatamente. Use sempre que um comando travar, ficar lento ou quando você apertou Enter por engano.",
      },
      {
        id: 4,
        question: "Como achar rapidamente um comando que você rodou há dois dias contendo a palavra 'apt'?",
        hint: "Existe uma combinação Ctrl+letra que abre busca interativa.",
        answer:
          "Pressione Ctrl+R, comece a digitar 'apt' e o Bash mostra o último comando que casa com isso. Continue digitando para refinar, Ctrl+R de novo para ir mais para trás, Enter para executar ou Esc para editar antes.",
      },
      {
        id: 5,
        question: "Você não lembra como o tar funciona. Liste três jeitos de pedir ajuda do menos ao mais detalhado.",
        hint: "São três programas diferentes que mostram informação em níveis crescentes.",
        answer:
          "Do mais simples ao mais completo: 'tar --help' (resumo de uma tela), 'tldr tar' (3-5 exemplos práticos comuns — instale com sudo apt install tldr) e 'man tar' (manual completo, dezenas de páginas). Comece sempre pelo tldr para casos do dia a dia.",
      },
      {
        id: 6,
        question: "O que faz o comando 'cd -'?",
        hint: "Tem a ver com memória de curtíssimo prazo.",
        answer:
          "Volta para o diretório em que você estava antes do cd atual. É ótimo para alternar entre duas pastas: cd /etc, fazer algo, cd - volta para a anterior, cd - de novo retorna para /etc.",
      },
      {
        id: 7,
        question: "Como ver o conteúdo da variável de ambiente PATH?",
        hint: "Você precisa imprimir o valor com algum comando que ecoa texto.",
        answer:
          "echo $PATH — mostra a lista de pastas separadas por dois-pontos onde o shell procura programas. Alternativas: 'env | grep PATH' ou 'printenv PATH'.",
      },
      {
        id: 8,
        question: "Quando você vê o prompt terminado em # em vez de $, o que isso significa?",
        hint: "Tem relação com privilégios.",
        answer:
          "Você está logado como root (super-usuário). Isso é perigoso porque qualquer comando executa sem proteção, podendo quebrar o sistema. Prefira sair (digite exit) e usar 'sudo' apenas para comandos específicos que precisam de privilégio.",
      },
    ],
    references: [
      { title: "Bash Reference Manual (GNU)", url: "https://www.gnu.org/software/bash/manual/" },
      { title: "Debian Reference — capítulo sobre shell", url: "https://www.debian.org/doc/manuals/debian-reference/ch01.en.html" },
      { title: "tldr pages — exemplos práticos", url: "https://tldr.sh/" },
      { title: "Atalhos do Bash (devhints)", url: "https://devhints.io/bash" },
    ],
  },

  {
    id: "navegacao",
    title: "Navegação no Sistema de Arquivos",
    icon: "🗂️",
    category: "Terminal e Arquivos",
    description: "A árvore única do Linux, o que significa cada pasta padrão, caminhos absolutos vs relativos e a filosofia 'tudo é arquivo'.",
    objectives: [
      "Compreender a Filesystem Hierarchy Standard (FHS) e o porquê de cada diretório",
      "Diferenciar caminhos absolutos e relativos com confiança",
      "Saber para que servem /etc, /var, /home, /usr, /tmp, /opt, /root, /boot",
      "Entender a ideia de 'tudo é arquivo' e o que tem em /proc, /sys e /dev",
      "Identificar pontos de montagem e enxergar pendrives e partições na árvore",
      "Usar atalhos como ~, ., .., - sem hesitar",
    ],
    content: [
      `Imagine uma árvore genealógica enorme: no topo existe uma única raiz, e a partir dela descem todos os galhos, sub-galhos, folhas. O sistema de arquivos do Linux é exatamente assim. Tudo, sem exceção, está pendurado em uma única raiz chamada simplesmente / (barra). Diferente do Windows, que coloca cada disco em uma "letra" (C:, D:, E:), o Linux pega o seu HD interno, o pendrive, o HD externo, a partição do trabalho e enfia todos eles em pontos diferentes da mesma árvore. Quando você plugar um pendrive, ele vai aparecer em algum lugar como /media/maria/PENDRIVE — uma pasta na sua árvore, indistinguível de qualquer outra.`,
      `Essa decisão de arquitetura existe por um motivo: simplificar. Em vez de você precisar lembrar em que disco cada coisa mora, você navega pela árvore sempre da mesma forma. Programas que precisam abrir arquivos não precisam saber se aquilo está na memória, no SSD ou em um servidor remoto montado pela rede; é só dar o caminho. Essa unidade aparente é uma das características que tornam o Linux poderoso para servidores, onde discos vão e vêm, partições crescem e diminuem, mas a árvore continua igual.`,
      `Para evitar que cada distribuição inventasse sua própria organização, o mundo Unix-like adotou a Filesystem Hierarchy Standard (FHS). É um documento longo que define o que cada pasta padrão deve conter. O Debian segue a FHS rigorosamente. Por isso, quando você aprende para que serve /etc no Debian, esse mesmo conhecimento vale no Ubuntu, no Fedora, no Arch e até em servidores antigos com CentOS. É um daqueles raros casos em que a padronização realmente pegou.`,
      `Os diretórios principais da raiz e o que cada um faz: /bin guarda binários essenciais (ls, cp, cat) — em Debian moderno é só um link para /usr/bin. /sbin tem binários de administração (mkfs, fdisk) — também link para /usr/sbin. /etc é o coração das configurações do sistema (sources.list, fstab, hostname, passwd); editar arquivos aqui exige sudo. /home tem as pastas pessoais dos usuários (cada um vira /home/SEU_NOME). /root é a casa do super-usuário, isolada das demais. /var armazena dados que mudam: logs em /var/log, cache de pacotes em /var/cache, e-mails, banco de dados. /tmp é a pasta dos arquivos temporários, normalmente apagada a cada boot. /usr guarda programas e bibliotecas não-essenciais ao boot (a maior parte do software vai aqui). /opt é o cantinho do software de terceiros instalado fora do gerenciador de pacotes (Chrome, Discord, VSCode quando você baixa direto). /boot tem o kernel, o initramfs e a configuração do GRUB — mexer aqui sem saber pode impedir a máquina de ligar.`,
      `Existem algumas pastas que parecem normais mas são totalmente especiais: elas não armazenam arquivos de verdade no disco — são interfaces que o kernel cria em tempo real para você ver e mexer no sistema. /proc tem informação sobre processos rodando (cada PID vira uma pasta com tudo sobre ele) e sobre o hardware (/proc/cpuinfo, /proc/meminfo). /sys é o irmão mais novo de /proc, criado para controlar o kernel e o hardware (frequência da CPU, brilho da tela, ventoinhas). /dev é onde os dispositivos físicos viram arquivos: /dev/sda é o seu primeiro HD, /dev/null é a "lixeira universal" (qualquer coisa escrita lá some), /dev/zero gera infinitos bytes zerados, /dev/random e /dev/urandom geram bytes aleatórios para criptografia. Você consegue cat um arquivo em /proc e ler informação fresquinha do kernel sem fazer um único system call à parte.`,
      `Caminhos têm dois sabores e essa distinção é fundamental. Caminho absoluto começa com / e aponta para o mesmo lugar não importa onde você esteja: /home/maria/Documentos/notas.txt sempre é exatamente esse arquivo. Caminho relativo NÃO começa com / e é interpretado a partir do seu diretório atual: se você está em /home/maria e digita "Documentos/notas.txt", o shell entende como /home/maria/Documentos/notas.txt; se está em /tmp, vai procurar em /tmp/Documentos/notas.txt e provavelmente não vai achar. A regra mental: caminho que começa com / é um endereço completo (rua, número, bairro, cidade); caminho que não começa é uma indicação a partir de onde você está ("vire à direita, é a segunda casa").`,
      `Dois símbolos especiais acompanham caminhos relativos: . (ponto) significa "o diretório atual", e .. (ponto-ponto) significa "o diretório pai". Você os combina à vontade: ../arquivo.txt é o arquivo na pasta acima, ../../outro/coisa.txt sobe dois níveis e desce em outro. O ./script.sh executa um script no diretório atual — essa barra-ponto na frente é necessária porque o shell, por segurança, não procura executáveis no diretório atual a não ser que você peça explicitamente. Sem o ./, o shell tentaria encontrar "script.sh" no $PATH e provavelmente diria "command not found".`,
      `O Linux é case-sensitive: arquivo.txt, Arquivo.txt e ARQUIVO.TXT são três arquivos diferentes que podem coexistir na mesma pasta. Isso choca quem vem do Windows. Acostume-se: na hora de digitar nomes, atenção total a maiúsculas e minúsculas. Arquivos cujo nome começa com . (ponto) são considerados "ocultos" e não aparecem no ls comum — só com ls -a. É a convenção que esconde arquivos de configuração pessoal (como .bashrc, .vimrc, .config) do listado padrão para não poluir. Não há extensão obrigatória: o sistema não precisa de .sh para reconhecer um script ou .txt para reconhecer texto. Extensões servem aos humanos e a alguns programas; o kernel olha o conteúdo do arquivo (com a função "magic bytes") para saber o tipo.`,
      `A frase mais famosa do Unix é "tudo é arquivo". Não é um slogan: é arquitetura de verdade. Discos físicos? Arquivos em /dev. Processos? Pastas em /proc. Sockets de rede? Arquivos especiais. Terminais? Arquivos em /dev/pts. Isso permite que ferramentas simples (cat, grep, redirecionamento >) funcionem sobre qualquer coisa. Você quer ver o uso atual de memória? "cat /proc/meminfo". Quer descartar a saída ruidosa de um comando? "comando > /dev/null". Quer um arquivo de 100MB cheio de zeros para teste? "dd if=/dev/zero of=teste bs=1M count=100". Essa unidade é a razão de Linux ser tão "scriptável".`,
      `Pontos de montagem são as portas pelas quais discos extras entram na árvore. /mnt é tradicionalmente o ponto para montagens manuais e temporárias (você cria uma subpasta e usa "mount" para colocar um disco ali). /media é onde o ambiente gráfico monta automaticamente os mídias removíveis (pendrives, HDs externos, cartões SD) — geralmente em /media/SEU_USUARIO/NOME_DO_DISPOSITIVO. Em servidores, é comum /home estar em uma partição dedicada montada nesse ponto. O comando "mount" sem argumento lista tudo que está montado agora; "df -h" mostra o espaço livre em cada montagem.`,
      `Atalhos para sobreviver: ~ é sua home, ~outroUsuario é a home de outra pessoa, . é onde você está, .. é a pasta pai, - é o diretório anterior (após cd), e / é a raiz. Eles funcionam dentro de qualquer comando, não só no cd: "cp ~/foto.jpg /tmp/" copia foto.jpg da sua home para /tmp; "ls .." lista a pasta acima; "du -sh ./*" mostra o tamanho de cada item do diretório atual. Use esses atalhos sempre que possível — encurtam comandos e deixam menos espaço para erro de digitação.`,
      `Ao final deste capítulo, abra um terminal e faça um pequeno tour: rode "ls /" para ver a raiz, depois "ls /etc | head" para sentir o tamanho da pasta de configurações, depois "cat /proc/cpuinfo | head" para ver o kernel falando sobre seu processador. Você vai perceber que navegar no Linux é como aprender o mapa de uma cidade: no começo parece labirinto, mas depois de alguns passeios você sabe que /var/log é onde estão os logs, que /etc/apt é onde mexe configurações de pacote, e que se algo está estranho, /proc tem a verdade nua e crua sobre o que o kernel está fazendo.`,
    ],
    commands: [
      {
        command: "pwd",
        description: "Print Working Directory — mostra o caminho absoluto do diretório atual.",
        example: "pwd",
        output: "/home/maria/Documentos",
      },
      {
        command: "cd",
        description: "Muda o diretório atual.",
        example: "cd /var/log",
        flags: [
          { flag: "/", description: "Raiz do sistema" },
          { flag: "~", description: "Sua home" },
          { flag: "..", description: "Pasta pai" },
          { flag: "-", description: "Volta ao diretório anterior" },
          { flag: "(sem arg)", description: "Equivalente a cd ~" },
        ],
      },
      {
        command: "ls",
        description: "Lista o conteúdo de um diretório.",
        example: "ls -lah ~",
      },
      {
        command: "tree",
        description: "Mostra a estrutura de diretórios em forma de árvore. Instale com sudo apt install tree.",
        example: "tree -L 2 ~/Documentos",
        output: "/home/maria/Documentos\n├── projetos\n│   ├── site\n│   └── notas\n└── trabalho\n    ├── ata-jan.pdf\n    └── relatorio.odt",
        flags: [
          { flag: "-L N", description: "Limita a profundidade a N níveis" },
          { flag: "-d", description: "Mostra apenas diretórios" },
          { flag: "-a", description: "Inclui arquivos ocultos" },
          { flag: "-h", description: "Mostra tamanhos legíveis" },
          { flag: "--du", description: "Mostra o tamanho acumulado de cada pasta" },
        ],
      },
      {
        command: "find",
        description: "Procura arquivos por nome, tamanho, data, tipo, etc. Imensamente poderoso.",
        example: "find /home -name '*.pdf' -mtime -7",
        output: "/home/maria/Documentos/contrato.pdf\n/home/maria/Downloads/manual.pdf",
        flags: [
          { flag: "-name 'PADRÃO'", description: "Casamento por nome (com curingas)" },
          { flag: "-iname 'PADRÃO'", description: "Igual ao -name mas ignora maiúsculas/minúsculas" },
          { flag: "-type f", description: "Apenas arquivos comuns" },
          { flag: "-type d", description: "Apenas diretórios" },
          { flag: "-type l", description: "Apenas links simbólicos" },
          { flag: "-mtime -7", description: "Modificados nos últimos 7 dias" },
          { flag: "-size +100M", description: "Maiores que 100 MB" },
          { flag: "-delete", description: "Apaga os encontrados (cuidado!)" },
          { flag: "-exec CMD {} \\;", description: "Executa um comando para cada item achado" },
        ],
      },
      {
        command: "locate",
        description: "Busca arquivos pelo nome em um banco indexado (rápido, mas pode estar desatualizado).",
        example: "locate firefox.desktop",
        output: "/usr/share/applications/firefox-esr.desktop",
        flags: [
          { flag: "-i", description: "Ignora maiúsculas/minúsculas" },
          { flag: "-c", description: "Conta resultados em vez de listar" },
        ],
      },
      {
        command: "updatedb",
        description: "Atualiza o banco de dados usado pelo locate. Roda como root.",
        example: "sudo updatedb",
      },
      {
        command: "mount",
        description: "Lista (sem argumentos) ou monta um sistema de arquivos.",
        example: "mount | grep '^/dev'",
        output: "/dev/nvme0n1p2 on / type ext4 (rw,relatime)\n/dev/nvme0n1p1 on /boot/efi type vfat (rw,relatime)",
      },
      {
        command: "df",
        description: "Disk Free — mostra o espaço usado e livre em cada partição montada.",
        example: "df -hT",
        output: "Sist. Arq.     Tipo    Tam.  Usado Disp. Uso% Montado em\n/dev/nvme0n1p2 ext4    234G   89G  133G  41% /\ntmpfs          tmpfs   3,9G   12M  3,9G   1% /tmp",
        flags: [
          { flag: "-h", description: "Tamanhos legíveis (KB, MB, GB)" },
          { flag: "-T", description: "Mostra o tipo do sistema de arquivos" },
          { flag: "-i", description: "Mostra inodes em vez de bytes" },
        ],
      },
      {
        command: "du",
        description: "Disk Usage — mostra quanto cada arquivo ou pasta ocupa.",
        example: "du -sh ~/Downloads/*",
        output: "12M\t/home/maria/Downloads/debian-12.iso\n4,0K\t/home/maria/Downloads/foto.jpg",
        flags: [
          { flag: "-s", description: "Apenas o total, não detalha" },
          { flag: "-h", description: "Tamanhos legíveis" },
          { flag: "-a", description: "Inclui arquivos, não só pastas" },
          { flag: "--max-depth=N", description: "Limita a profundidade dos totais" },
        ],
      },
      {
        command: "stat",
        description: "Mostra metadados detalhados de um arquivo (inode, datas, permissões, tamanho).",
        example: "stat /etc/hostname",
        output: "  Arquivo: /etc/hostname\n  Tamanho: 14\tBlocos: 8\nAcesso: 2026-01-15 14:00\nModif.:  2025-08-10 09:32",
      },
      {
        command: "file",
        description: "Identifica o tipo real de um arquivo lendo seu conteúdo (não a extensão).",
        example: "file /bin/ls",
        output: "/bin/ls: ELF 64-bit LSB executable, x86-64, dynamically linked",
      },
      {
        command: "readlink",
        description: "Mostra para onde um link simbólico aponta.",
        example: "readlink -f /bin",
        output: "/usr/bin",
      },
    ],
    tips: [
      {
        type: "info",
        title: "FHS é o mapa do tesouro",
        content:
          "Decorar o que cada pasta de raiz contém pode parecer chato, mas é o conhecimento que mais economiza tempo. Quando algo der errado, você já sabe onde procurar: configuração em /etc, log em /var/log, programa em /usr/bin.",
      },
      {
        type: "warning",
        title: "Cuidado com find -delete",
        content:
          "Sempre rode o find SEM o -delete primeiro para conferir o que seria apagado. Só depois adicione -delete. Um find errado com -delete pode levar embora arquivos que você nem sabia que tinha.",
      },
      {
        type: "danger",
        title: "Nunca brinque em /proc, /sys e /dev",
        content:
          "Apesar de aparecerem como arquivos, escrever em /dev/sda ou em arquivos de /sys e /proc pode corromper o disco ou crashar o kernel. Leia à vontade; só escreva quando souber exatamente o que está fazendo.",
      },
      {
        type: "success",
        title: "tree -L 1 / é um cartão postal",
        content:
          "Sempre que entrar em uma máquina nova, rode 'tree -L 1 /' para ter uma visão geral. É como olhar o mapa do prédio antes de procurar a sala 503.",
      },
    ],
    practiceLabs: [
      {
        title: "Mapear sua casa Linux",
        goal: "Ver com seus próprios olhos a estrutura da árvore e o tamanho de cada cantinho.",
        steps: [
          "Instale o tree: sudo apt install -y tree",
          "Visualize a raiz limitada a 1 nível: tree -L 1 /",
          "Veja o tamanho de cada diretório principal: sudo du -sh /* 2>/dev/null | sort -h",
          "Liste sua home com 2 níveis e ocultos: tree -L 2 -a ~ | head -30",
          "Identifique os 5 diretórios mais pesados.",
        ],
        command: `sudo apt install -y tree
tree -L 1 /
sudo du -sh /* 2>/dev/null | sort -h
tree -L 2 -a ~ | head -30
df -hT`,
        expected:
          "Você verá pastas como /etc, /home, /var, /usr listadas. Provavelmente /usr aparece como o maior (programas instalados), seguido de /var (logs e cache).",
        verify:
          "Se conseguiu listar a raiz, ver o tamanho de cada pasta e visualizar sua home, você já sabe se mover na árvore.",
      },
      {
        title: "Caçar PDFs recentes com find",
        goal: "Aprender a usar find em uma tarefa real do dia a dia.",
        steps: [
          "Crie um PDF de teste: mkdir -p ~/Documentos && touch ~/Documentos/teste.pdf",
          "Liste todos os PDFs em sua home modificados nos últimos 7 dias.",
          "Filtre só os maiores que 1 MB.",
          "Conte quantos arquivos casaram.",
          "Liste todos os PDFs ignorando maiúsculas (PDF, Pdf, pdf).",
        ],
        command: `mkdir -p ~/Documentos
touch ~/Documentos/teste.pdf
find ~ -name '*.pdf' -mtime -7
find ~ -name '*.pdf' -mtime -7 -size +1M
find ~ -name '*.pdf' -mtime -7 | wc -l
find ~ -iname '*.pdf'`,
        expected:
          "A primeira busca lista pelo menos o teste.pdf criado agora. As demais combinam filtros de data e tamanho.",
        verify:
          "Veja se o teste.pdf aparece em todas as buscas relevantes. Se sim, você já entendeu a sintaxe básica do find.",
      },
      {
        title: "Visitar /proc para conversar com o kernel",
        goal: "Entender na prática o que significa 'tudo é arquivo'.",
        steps: [
          "Veja informações do processador: cat /proc/cpuinfo | head -20",
          "Veja a memória: cat /proc/meminfo | head -5",
          "Liste sua versão de kernel: cat /proc/version",
          "Liste o tempo desde o boot (em segundos): cat /proc/uptime",
          "Conte quantos processos estão rodando: ls /proc | grep -c '^[0-9]'",
        ],
        command: `cat /proc/cpuinfo | head -20
cat /proc/meminfo | head -5
cat /proc/version
cat /proc/uptime
ls /proc | grep -c '^[0-9]'`,
        expected:
          "Saídas com modelo da CPU, total de RAM, versão do kernel, tempo desde o boot e número aproximado de processos.",
        verify:
          "Se cada cat retornou texto significativo, você acaba de provar que /proc é uma janela viva para o kernel.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que tem em /etc?",
        hint: "É onde administradores passam metade do tempo.",
        answer:
          "Arquivos de configuração do SISTEMA: sources.list (fontes do APT), fstab (montagens), hostname, hosts, sudoers, passwd, group, network/interfaces, e muitos outros. Editar a maioria desses arquivos exige sudo.",
      },
      {
        id: 2,
        question: "Diferença entre caminho absoluto e relativo?",
        hint: "Um deles começa sempre igual, o outro depende de onde você está.",
        answer:
          "Absoluto começa com / e aponta sempre para o mesmo lugar (/home/maria/foto.jpg). Relativo não começa com / e é interpretado a partir do diretório atual (foto.jpg, ../foto.jpg, ./foto.jpg). Use absoluto em scripts; relativo no dia a dia interativo.",
      },
      {
        id: 3,
        question: "O que é /dev/null e para que serve?",
        hint: "Pense em uma lixeira mágica que aceita qualquer quantidade de coisa.",
        answer:
          "É um arquivo especial que descarta tudo que se escreve nele. Use 'comando > /dev/null' para silenciar a saída padrão e '2> /dev/null' para silenciar erros. Combine com '&>/dev/null' para silenciar tudo.",
      },
      {
        id: 4,
        question: "Como descobrir quanto espaço cada subpasta de /home está ocupando?",
        hint: "Combine du com flags para 'só o total' e 'legível'.",
        answer:
          "sudo du -sh /home/* — o -s mostra apenas o total de cada (sem detalhar internamente) e -h em formato legível. O sudo é necessário porque /home/outroUsuario pode não ter permissão de leitura para você.",
      },
      {
        id: 5,
        question: "Como achar todos os arquivos .log maiores que 100 MB em /var?",
        hint: "find aceita filtros combinados.",
        answer:
          "sudo find /var -name '*.log' -size +100M — o -size +100M filtra por tamanho, o sudo evita 'Permission denied' em pastas restritas. Adicione -mtime -30 para só os modificados no último mês.",
      },
      {
        id: 6,
        question: "Por que arquivos de configuração pessoal começam com . (ponto)?",
        hint: "Pense no comportamento padrão do ls.",
        answer:
          "Convenção do Unix: o ls não mostra arquivos cujo nome começa com . para não poluir a listagem normal. Configurações pessoais (.bashrc, .vimrc, .config, .ssh) ficam ocultas por padrão e aparecem com 'ls -a'.",
      },
      {
        id: 7,
        question: "O que significa o caminho ../../etc/hosts?",
        hint: "Cada .. sobe um nível.",
        answer:
          "Sobe dois níveis a partir do diretório atual e desce em etc/hosts. Por exemplo, se você está em /home/maria/projetos, ../.. te leva para / e depois entra em etc/hosts, equivalente a /etc/hosts.",
      },
      {
        id: 8,
        question: "Como ver o sistema de arquivos e o ponto de montagem da partição que contém /home?",
        hint: "df aceita um caminho e uma flag para mostrar o tipo.",
        answer:
          "df -hT /home — mostra a partição que contém /home, com tipo (ext4, btrfs, etc.), tamanho total, usado, livre e ponto de montagem. Útil para descobrir se /home está em partição própria.",
      },
    ],
    references: [
      { title: "FHS — Filesystem Hierarchy Standard 3.0", url: "https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html" },
      { title: "Wiki Debian — Filesystem", url: "https://wiki.debian.org/FileSystem" },
      { title: "Debian Reference — capítulo 1", url: "https://www.debian.org/doc/manuals/debian-reference/ch01.en.html" },
      { title: "man hier — descrição da hierarquia", url: "https://manpages.debian.org/bookworm/manpages/hier.7.en.html" },
    ],
  },

  {
    id: "arquivos",
    title: "Manipulação de Arquivos — Criar, Copiar, Mover, Apagar",
    icon: "📄",
    category: "Terminal e Arquivos",
    description: "touch, mkdir, cp, mv, rm, ln — os comandos que você vai digitar mil vezes, com todas as armadilhas para evitar.",
    objectives: [
      "Criar arquivos e diretórios (incluindo aninhados) com segurança",
      "Copiar e mover sem sobrescrever sem querer",
      "Apagar com confiança, conhecendo os riscos do rm",
      "Usar wildcards (*, ?, [], {}) entendendo como o shell os expande",
      "Criar e usar links simbólicos e hard links",
      "Substituir o rm por uma 'lixeira' segura quando fizer sentido",
    ],
    content: [
      `Imagine que você é o organizador de uma biblioteca enorme. Todo dia chegam livros novos (criar arquivos), livros precisam ser duplicados para outras filiais (copiar), realocados para estantes diferentes (mover), descartados quando ficam obsoletos (apagar). No Linux, esses gestos do dia a dia se traduzem em cinco comandos curtos: touch, mkdir, cp, mv, rm. São tão comuns que, em pouco tempo, seus dedos os digitam sozinhos. Este capítulo é sobre ganhar essa fluência sem cometer os erros que já mandaram muita gente refazer trabalho.`,
      `O touch é o mais simples: ele cria um arquivo vazio (se não existir) ou atualiza a data de modificação (se existir). Ele recebeu esse nome porque "tocar" o arquivo: nada de conteúdo, só presença. Você usa para criar arquivos placeholder, para testar permissões, ou para "tocar" arquivos e fazer ferramentas de monitoramento detectarem mudança. A confusão clássica é achar que touch é o jeito de criar um arquivo de texto editado — não é. Para escrever conteúdo direto, use 'echo "linha" > arquivo.txt' ou abra um editor (nano, vim). O touch só prepara o terreno.`,
      `O mkdir cria diretórios. Sozinho ele falha se algum dos pais não existir: "mkdir a/b/c" reclama se 'a' não existe. A flag -p (de "parents") resolve: ela cria toda a cadeia de uma vez. O mkdir -p é tão útil que muita gente usa por padrão, mesmo quando o pai existe (porque com -p ele não reclama nem se a pasta já existir). Combinado com a expansão de chaves do Bash, você cria estruturas inteiras em uma linha: 'mkdir -p projeto/{src/{lib,tests},docs,build}' cria seis pastas aninhadas de uma vez. Esse truque é um dos prazeres de viver no terminal.`,
      `O cp copia. A sintaxe básica é 'cp ORIGEM DESTINO': se DESTINO é arquivo, copia e renomeia; se é diretório, copia para dentro mantendo o nome. Para copiar diretório, é OBRIGATÓRIO o -r (ou -R, mesma coisa): 'cp -r pasta/ /tmp/'. Sem o -r, o cp se recusa a copiar diretórios e dá erro. As flags de segurança importam: -i pergunta antes de sobrescrever (essencial para iniciantes), -n nunca sobrescreve, -v mostra o que está copiando, -a preserva tudo (permissões, dono, datas, links — modo "arquivo perfeito"). Profissionais que mexem com servidores fazem 'alias cp="cp -i"' no .bashrc para nunca sobrescrever sem perceber.`,
      `O mv tem duas personalidades: ele MOVE arquivos para outras pastas, mas também é o que se usa para RENOMEAR. 'mv velho.txt novo.txt' renomeia (porque o destino é um nome de arquivo e não um diretório). 'mv arquivo.txt /tmp/' move para /tmp mantendo o nome. Não precisa de -r para diretórios — mv funciona com pastas sem flag especial. Igual ao cp, use -i para perguntar antes de sobrescrever e -v para ver o que está acontecendo. Não existe undo: uma vez movido, foi. Por isso o -i é tão valioso no começo da carreira.`,
      `O rm é o irmão perigoso da família. Ele APAGA, e não vai para nenhuma lixeira: o arquivo some imediatamente. Sem flag, rm apaga arquivo solto. Para diretório, exige -r (recursivo). A combinação -rf significa "recursivo e force": apaga sem perguntar nem reclamar. É a flag mais perigosa do Linux. Histórias famosas de pessoas digitando 'rm -rf /' (apaga literalmente tudo) ou 'rm -rf $VAR/' onde $VAR estava vazio (vira 'rm -rf /' efetivamente) abundam. A regra de ouro: antes de qualquer rm -rf, pare, leia o caminho duas vezes, confirme que está logado como o usuário certo, na máquina certa, no diretório certo. Em produção, muitos sysadmins se obrigam a digitar o caminho absoluto completo para evitar acidente.`,
      `Wildcards são "curingas" que o shell expande ANTES de chamar o comando. O * casa qualquer sequência de caracteres (exceto a barra /). O ? casa exatamente um caractere. [abc] casa um único caractere entre os listados. {opt1,opt2,opt3} expande em três alternativas separadas. Exemplos: 'rm *.tmp' apaga todos os .tmp do diretório atual; 'cp foto?.jpg ~/Imagens/' copia foto1.jpg, foto2.jpg, fotoA.jpg; 'ls /var/log/*.log' lista todos os logs. Detalhe crucial: a expansão é feita pelo shell, não pelo comando. Quando você digita 'rm *.tmp', o shell primeiro expande para 'rm a.tmp b.tmp c.tmp' e SÓ ENTÃO chama o rm. Por isso o truque de segurança 'echo *.tmp' antes de rodar 'rm *.tmp' funciona: você vê exatamente o que vai ser passado.`,
      `Renomear vários arquivos de uma vez não é trabalho do mv. Para isso existe o 'rename' (no Debian, instale com 'sudo apt install rename'), que aceita expressão regular do Perl: 'rename "s/\\.jpeg$/\\.jpg/" *.jpeg' troca todas as terminações .jpeg por .jpg. Alternativa pura em Bash, sem instalar nada extra: usar um for loop. 'for f in *.jpeg; do mv "$f" "\${f%.jpeg}.jpg"; done' percorre cada arquivo .jpeg e renomeia trocando o final. Loops em shell entram em outro capítulo, mas vale saber que existem.`,
      `Links são "atalhos" do Linux, mas mais ricos que os do Windows. Existem dois tipos. Hard link: o arquivo aparece em dois lugares, mas é fisicamente o mesmo dado no disco (compartilham o mesmo inode). Apagar uma das duas referências não apaga o arquivo — só some quando todas as referências saem. Não funciona entre partições diferentes nem para diretórios. Soft link (link simbólico, criado com ln -s): é um arquivo pequeno que aponta para o caminho de outro arquivo. Funciona entre partições, pode apontar para diretórios, mas se o original for movido ou apagado, o link fica "quebrado" (aponta para o nada). Soft link é o que você usa 95% do tempo. Sintaxe: 'ln -s /caminho/real /caminho/atalho'. Use por exemplo para colocar um executável de /opt/programa/bin no /usr/local/bin sem mover o original.`,
      `Existe lixeira no terminal? Nativa, não. Mas você pode instalar 'trash-cli' (sudo apt install trash-cli) que adiciona o comando 'trash' como substituto seguro para o rm: 'trash arquivo.txt' move para a lixeira do ambiente gráfico (a mesma que o nautilus/dolphin/thunar usam), 'trash-list' lista o que está lá, 'trash-restore' restaura, 'trash-empty' esvazia. Muitos usuários experientes preferem ter um 'alias rm=trash' no .bashrc para o dia a dia interativo, mantendo o rm "puro" só para scripts. Essa é uma das medidas mais simples para evitar perder horas por causa de um Enter no momento errado.`,
      `Permissão sobre arquivos que você não criou pode te impedir de copiar, mover ou apagar. O cp e mv preservam o dono original do arquivo, então depois de copiar um arquivo do sudo você pode acabar dono de um arquivo que pertence a root — e perder permissão de mexer. Aprenderemos a fundo no capítulo de permissões, mas por ora: se um cp ou mv falhar com "Permission denied", é provavelmente isso. O atalho é rodar com sudo se você sabe o que está fazendo, ou simplesmente trabalhar dentro da sua /home onde tudo é seu.`,
      `Ao final deste capítulo, você deve conseguir criar uma estrutura de pastas para um projeto novo, copiar e mover arquivos com segurança usando -i, apagar com cuidado entendendo o risco do -rf, expandir wildcards com confiança e criar links simbólicos para encurtar caminhos longos. A fluência vem com prática, e a prática vem fazendo: crie uma pasta de testes em /tmp e brinque até parecer chato. Quando você não pensar mais antes de digitar 'mkdir -p' ou 'cp -r', é sinal de que entrou no clube.`,
    ],
    commands: [
      {
        command: "touch",
        description: "Cria arquivo vazio ou atualiza o timestamp de um existente.",
        example: "touch a.txt b.txt c.txt",
        flags: [
          { flag: "-a", description: "Atualiza apenas a data de acesso" },
          { flag: "-m", description: "Atualiza apenas a data de modificação" },
          { flag: "-t YYYYMMDDhhmm", description: "Define data específica" },
          { flag: "-c", description: "Não cria o arquivo se ele não existe" },
        ],
      },
      {
        command: "mkdir",
        description: "Cria diretórios.",
        example: "mkdir -p projeto/src/components",
        flags: [
          { flag: "-p", description: "Cria pais que não existem (essencial)" },
          { flag: "-v", description: "Verboso: mostra cada criação" },
          { flag: "-m 700", description: "Cria já com a permissão dada" },
        ],
      },
      {
        command: "cp",
        description: "Copia arquivos e diretórios.",
        example: "cp -riv pasta/ /tmp/",
        flags: [
          { flag: "-r", description: "Recursivo (obrigatório para diretórios)" },
          { flag: "-i", description: "Pergunta antes de sobrescrever" },
          { flag: "-n", description: "Nunca sobrescreve (oposto de -i)" },
          { flag: "-v", description: "Verboso" },
          { flag: "-a", description: "Preserva tudo (modo arquivamento)" },
          { flag: "-u", description: "Só copia se origem é mais nova" },
          { flag: "-p", description: "Preserva data e permissões" },
        ],
      },
      {
        command: "mv",
        description: "Move ou renomeia arquivos e diretórios.",
        example: "mv -iv arquivo.txt /tmp/",
        flags: [
          { flag: "-i", description: "Pergunta antes de sobrescrever" },
          { flag: "-n", description: "Nunca sobrescreve" },
          { flag: "-v", description: "Verboso" },
          { flag: "-b", description: "Faz backup antes de sobrescrever" },
        ],
      },
      {
        command: "rm",
        description: "REMOVE arquivos. NÃO vai para lixeira.",
        example: "rm -ri pasta_temporaria/",
        flags: [
          { flag: "-i", description: "Pergunta antes de cada remoção" },
          { flag: "-I", description: "Pergunta uma vez se forem mais de 3 arquivos" },
          { flag: "-r", description: "Recursivo (para diretórios)" },
          { flag: "-f", description: "Força, não pergunta nem reclama (CUIDADO)" },
          { flag: "-v", description: "Verboso" },
          { flag: "--preserve-root", description: "Recusa apagar / (já é padrão)" },
        ],
      },
      {
        command: "rmdir",
        description: "Remove diretório VAZIO. Falha se houver conteúdo (mais seguro que rm -r).",
        example: "rmdir pasta_vazia",
        flags: [
          { flag: "-p", description: "Remove pais vazios também" },
          { flag: "-v", description: "Verboso" },
        ],
      },
      {
        command: "ln",
        description: "Cria links. Sem flag faz hard link; -s faz link simbólico.",
        example: "ln -s /opt/app/bin/app /usr/local/bin/app",
        flags: [
          { flag: "-s", description: "Cria link simbólico (preferido)" },
          { flag: "-f", description: "Sobrescreve link existente" },
          { flag: "-v", description: "Verboso" },
          { flag: "-r", description: "Cria como caminho relativo (com -s)" },
        ],
      },
      {
        command: "rename",
        description: "Renomeia muitos arquivos com expressão regular Perl. Instale: sudo apt install rename.",
        example: "rename 's/\\.jpeg$/\\.jpg/' *.jpeg",
        flags: [
          { flag: "-n", description: "Modo simulação: mostra mudanças sem aplicar" },
          { flag: "-v", description: "Verboso" },
        ],
      },
      {
        command: "trash",
        description: "Move para a lixeira em vez de apagar. Reversível. Instale: sudo apt install trash-cli.",
        example: "trash arquivo_suspeito.txt",
      },
      {
        command: "trash-list",
        description: "Lista o conteúdo atual da lixeira.",
        example: "trash-list",
        output: "2026-01-15 10:23:45 /home/maria/notas.txt\n2026-01-14 18:12:09 /home/maria/foto-velha.jpg",
      },
      {
        command: "trash-restore",
        description: "Restaura interativamente um item da lixeira.",
        example: "trash-restore",
      },
      {
        command: "shred",
        description: "Apaga sobrescrevendo o arquivo várias vezes (para dados sensíveis em HDs magnéticos).",
        example: "shred -uvz -n 3 segredo.txt",
        flags: [
          { flag: "-u", description: "Apaga o arquivo após sobrescrever" },
          { flag: "-z", description: "Final em zeros para esconder a sobrescrita" },
          { flag: "-n N", description: "N passes de sobrescrita" },
          { flag: "-v", description: "Verboso" },
        ],
      },
      {
        command: "cp --backup",
        description: "Faz backup automático do arquivo de destino antes de sobrescrever.",
        example: "cp --backup=numbered novo.conf /etc/app.conf",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "rm -rf é a faca afiada do Linux",
        content:
          "Antes de qualquer 'rm -rf CAMINHO', pare 5 segundos e leia o caminho. Erros como 'rm -rf /' (apaga TUDO), 'rm -rf $VAR/*' onde $VAR está vazio (vira 'rm -rf /*'), ou 'rm -rf .* ' (apaga arquivos ocultos) já mandaram empresas inteiras para o backup.",
      },
      {
        type: "warning",
        title: "Crie aliases de segurança no ~/.bashrc",
        content:
          "Adicione: alias rm='rm -i', alias cp='cp -i', alias mv='mv -i'. Depois 'source ~/.bashrc'. Agora rm, cp e mv perguntam antes de qualquer ação destrutiva. Em scripts use 'rm' completo (sem alias) com -f explícito.",
      },
      {
        type: "success",
        title: "echo antes de rm é o ritual sagrado",
        content:
          "Antes de 'rm *.bak' rode 'echo *.bak' para ver exatamente o que o shell vai expandir. Se a lista parece OK, troque echo por rm. Esse hábito de 30 segundos previne 99% dos desastres com wildcards.",
      },
      {
        type: "info",
        title: "Hard link x soft link em uma frase",
        content:
          "Hard link é um nome a mais para o mesmo arquivo no disco; soft link é um arquivo separado que aponta para o caminho de outro. Use soft link no dia a dia (ln -s); hard link só em casos específicos.",
      },
      {
        type: "success",
        title: "Para o dia a dia, prefira trash a rm",
        content:
          "Instale trash-cli e use 'trash' em vez de rm. Os arquivos vão para a mesma lixeira do ambiente gráfico, com possibilidade de restaurar. Reserve o rm para scripts e operações em lote conscientes.",
      },
    ],
    practiceLabs: [
      {
        title: "Lab seguro de operações com arquivos",
        goal: "Praticar criar, copiar, mover, renomear e apagar em uma pasta isolada onde não há risco.",
        steps: [
          "Crie uma pasta de testes em /tmp (sempre seguro).",
          "Crie 5 arquivos vazios de uma vez.",
          "Copie um deles para outro nome usando -iv.",
          "Crie uma subpasta e mova um arquivo para lá.",
          "Renomeie um dos arquivos.",
          "Liste tudo recursivamente para conferir.",
          "Apague a pasta inteira com rm -ri (pergunta a cada item).",
        ],
        command: `mkdir -p /tmp/lab-arquivos
cd /tmp/lab-arquivos
touch arq1.txt arq2.txt arq3.txt arq4.txt arq5.txt
ls
cp -iv arq1.txt arq1-copia.txt
mkdir -p subpasta
mv -iv arq2.txt subpasta/
mv -iv arq3.txt arq3-renomeado.txt
ls -laR
cd ..
rm -ri lab-arquivos`,
        expected:
          "Cada comando produz uma saída curta. O ls -laR no final mostra arq1.txt, arq1-copia.txt, arq3-renomeado.txt, arq4.txt, arq5.txt e subpasta/arq2.txt.",
        verify:
          "Após o rm -ri, rode 'ls /tmp/lab-arquivos' — deve dar 'No such file or directory'. Se sim, você executou o ciclo completo com sucesso.",
      },
      {
        title: "Brincando com wildcards e o ritual do echo",
        goal: "Internalizar como o shell expande * e ? antes do comando ser executado.",
        steps: [
          "Crie 10 arquivos numerados em /tmp/wild.",
          "Use 'echo arq?.txt' para ver o que o ? casa.",
          "Use 'echo arq[1-5].txt' para ver intervalo.",
          "Use 'echo arq{1,5,7}.txt' para ver expansão de chaves.",
          "Confirme listando com ls usando os mesmos padrões.",
          "Apague apenas os ímpares com rm.",
          "Limpe a pasta no final.",
        ],
        command: `mkdir -p /tmp/wild
cd /tmp/wild
touch arq1.txt arq2.txt arq3.txt arq4.txt arq5.txt arq6.txt arq7.txt arq8.txt arq9.txt arq10.txt
echo arq?.txt
echo arq[1-5].txt
echo arq{1,5,7}.txt
ls arq?.txt
rm -i arq1.txt arq3.txt arq5.txt arq7.txt arq9.txt
ls
cd ..
rm -ri wild`,
        expected:
          "O 'echo arq?.txt' expande para arq1.txt até arq9.txt (porque ? casa um único caractere — arq10.txt fica de fora). O '[1-5]' casa o intervalo. O {1,5,7} expande nas três alternativas.",
        verify:
          "Você deve ter notado a sutileza do ? não casar arq10 (que tem 2 caracteres entre arq e .txt). Esse é o aha moment.",
      },
      {
        title: "Criar um link simbólico útil",
        goal: "Aprender a criar atalhos de verdade no Linux.",
        steps: [
          "Crie uma pasta 'projeto-longo' em /tmp.",
          "Crie um link simbólico chamado 'p' na sua home apontando para ela.",
          "Use 'cd ~/p' e veja que vai para o destino.",
          "Use 'ls -l ~/p' para ver a seta indicando o link.",
          "Use 'readlink -f ~/p' para confirmar o destino real.",
          "Apague o link (não o destino).",
        ],
        command: `mkdir -p /tmp/projeto-longo
ln -s /tmp/projeto-longo ~/p
cd ~/p
pwd
ls -l ~/p
readlink -f ~/p
rm ~/p
ls -l ~/p
rm -r /tmp/projeto-longo`,
        expected:
          "O ls -l do link mostra algo como 'p -> /tmp/projeto-longo'. O readlink resolve para o caminho absoluto. Após rm ~/p, o link some mas o destino continua existindo.",
        verify:
          "Se o cd ~/p te levou para /tmp/projeto-longo e o rm ~/p apagou só o link sem afetar a pasta, você dominou os symlinks.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como criar uma estrutura aninhada como 'projeto/src/components' em uma única linha?",
        hint: "mkdir tem uma flag mágica para isso.",
        answer:
          "mkdir -p projeto/src/components — o -p (parents) cria todos os diretórios pais que faltarem. Sem o -p, mkdir falha com 'No such file or directory' se algum nível intermediário não existir.",
      },
      {
        id: 2,
        question: "Por que é boa ideia usar 'cp -i' em vez de 'cp' simples?",
        hint: "Pense no que acontece quando o destino já existe.",
        answer:
          "Sem -i, cp sobrescreve silenciosamente arquivos existentes — você pode perder dados sem perceber. Com -i, ele pergunta 'overwrite arquivo?' antes de cada sobrescrita. Adquira o hábito como alias permanente: alias cp='cp -i' no ~/.bashrc.",
      },
      {
        id: 3,
        question: "Como copiar uma pasta inteira com tudo dentro, preservando datas e permissões?",
        hint: "Existe uma flag 'modo arquivamento' que faz isso de uma vez.",
        answer:
          "cp -a origem/ destino/ — o -a (archive) é equivalente a -dR --preserve=all: preserva permissões, dono, datas, links simbólicos, recursivamente. É a forma certa de duplicar uma estrutura inteira.",
      },
      {
        id: 4,
        question: "Qual a diferença entre mv e rename?",
        hint: "Pense no número de arquivos que cada um trata por chamada.",
        answer:
          "mv move ou renomeia UM arquivo por vez. rename usa expressão regular Perl para renomear MUITOS arquivos de uma vez: 'rename \"s/\\.jpeg$/\\.jpg/\" *.jpeg' troca todas as terminações .jpeg por .jpg em massa. Instale com sudo apt install rename.",
      },
      {
        id: 5,
        question: "Liste três coisas que você NUNCA deve fazer com rm.",
        hint: "Tem a ver com /, com variáveis vazias e com a flag -f.",
        answer:
          "1) rm -rf / — apaga literalmente tudo (proteção --preserve-root ajuda mas existem variantes que escapam). 2) rm -rf $VAR/* sem checar que $VAR não está vazio (vira rm -rf /*). 3) rm -rf .* na intenção de apagar ocultos — isso casa . e .., subindo na árvore. Sempre use -i no início, e dê preferência a trash-cli no dia a dia.",
      },
      {
        id: 6,
        question: "Como apagar arquivos com segurança e poder restaurar depois?",
        hint: "Existe uma ferramenta que simula a lixeira gráfica.",
        answer:
          "Instale trash-cli com 'sudo apt install trash-cli' e use 'trash arquivo' em vez de 'rm arquivo'. Os arquivos vão para a mesma lixeira do ambiente gráfico, listáveis com trash-list, restauráveis com trash-restore e esvaziáveis com trash-empty.",
      },
      {
        id: 7,
        question: "Diferença prática entre hard link e link simbólico (ln vs ln -s)?",
        hint: "Pense em o que acontece quando você apaga o original.",
        answer:
          "Hard link cria outro nome para o mesmo dado no disco (mesmo inode). Apagar uma das pontas não apaga o conteúdo; só some quando todas as referências são removidas. Não funciona entre partições nem para diretórios. Link simbólico (ln -s) é um arquivo separado com o caminho do alvo; se o alvo for apagado, o link fica quebrado. Pode atravessar partições e apontar para diretórios. Use ln -s na maioria dos casos.",
      },
      {
        id: 8,
        question: "Para que serve a expansão de chaves {a,b,c} no Bash?",
        hint: "Substitui digitar várias variantes parecidas.",
        answer:
          "{a,b,c} expande em três alternativas separadas. 'mkdir pasta_{a,b,c}' cria pasta_a, pasta_b e pasta_c em uma só linha. 'cp arquivo.{txt,bak}' equivale a 'cp arquivo.txt arquivo.bak'. Combine com mkdir -p para criar estruturas inteiras: 'mkdir -p projeto/{src/{lib,tests},docs,build}'.",
      },
    ],
    references: [
      { title: "GNU Coreutils Manual", url: "https://www.gnu.org/software/coreutils/manual/coreutils.html" },
      { title: "trash-cli no GitHub", url: "https://github.com/andreafrancia/trash-cli" },
      { title: "Wiki Debian — Gerenciamento de arquivos", url: "https://wiki.debian.org/FileSystem" },
      { title: "man rm — Debian", url: "https://manpages.debian.org/bookworm/coreutils/rm.1.en.html" },
      { title: "Bash brace expansion (LinuxJournal)", url: "https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html" },
    ],
  },
];
