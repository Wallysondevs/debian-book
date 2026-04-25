import { Module } from "@/types/module";

export const terminalArquivos: Module[] = [
  {
    id: "terminal-basico",
    title: "Primeiros Passos no Terminal",
    icon: "⌨️",
    category: "Terminal e Arquivos",
    description: "O que é o terminal, anatomia de um comando, atalhos essenciais e como pedir ajuda.",
    objectives: [
      "Diferenciar terminal, shell e console",
      "Entender a anatomia de um comando (comando, flags, argumentos)",
      "Dominar autocompletar (Tab) e histórico (↑/↓/Ctrl+R)",
      "Saber pedir ajuda com man, --help, tldr",
    ],
    content: [
      "Terminal vs shell vs console — três coisas diferentes que costumam ser confundidas:\n• Terminal — o programa de janela onde você digita (gnome-terminal, konsole, xterm, alacritty). É só a 'janela'.\n• Shell — o interpretador que entende seus comandos (bash, zsh, fish). É o cérebro.\n• Console — a interface de texto pura, sem janela gráfica (Ctrl+Alt+F2 te leva ao TTY).\n\nNo Debian, o terminal padrão depende do ambiente gráfico (GNOME Terminal no GNOME, Konsole no KDE), e o shell padrão é Bash.",
      "Anatomia de um comando: COMANDO [FLAGS] [ARGUMENTOS]\n\nExemplo: ls -la /home\n• ls — comando (listar)\n• -la — flags (-l = formato longo, -a = mostrar ocultos). Combinadas em uma palavra.\n• /home — argumento (diretório a listar)\n\nFlags curtas usam um traço (-l), longas usam dois (--all). Geralmente são equivalentes: 'ls -a' = 'ls --all'.",
      "O prompt do Bash mostra: usuario@hostname:diretorio$. O cifrão $ indica usuário comum, # indica root. Nunca trabalhe como root no dia a dia — use sudo. O caractere ~ representa /home/SEU_USUARIO (atalho universal). O caractere - (após cd) representa o último diretório visitado.",
      "Autocompletar com Tab é o atalho mais importante do Bash. Digite parte de um comando ou caminho de arquivo e aperte Tab — ele completa. Aperte Tab DUAS VEZES — mostra todas as opções disponíveis. Funciona em comandos, arquivos, diretórios e até flags de alguns comandos. Reduz erros e velocidade absurdamente.",
      "Histórico de comandos é seu melhor amigo:\n• Setas ↑ e ↓ — navegar pelos últimos comandos\n• Ctrl+R — buscar no histórico (digite parte do comando, vai mostrando os matches; aperte Enter para executar)\n• history — listar todo o histórico (cada um tem um número)\n• !100 — re-executar o comando número 100\n• !! — re-executar o último comando\n• !apt — re-executar o último comando que começou com 'apt'\n• ~/.bash_history — arquivo onde fica salvo (sobrevive entre sessões)",
      "Atalhos de edição na linha de comando (todos do Emacs, padrão do Bash):\n• Ctrl+A / Ctrl+E — início / fim da linha\n• Ctrl+W — apagar palavra à esquerda\n• Ctrl+U — apagar tudo à esquerda do cursor\n• Ctrl+K — apagar tudo à direita do cursor\n• Ctrl+L — limpar tela (= clear)\n• Ctrl+C — cancelar comando atual / matar processo\n• Ctrl+Z — pausar processo (recupera com 'fg')\n• Ctrl+D — sair do shell (= exit)\n• Alt+. — colar último argumento do comando anterior",
      "Sistemas de ajuda — quatro maneiras de descobrir o que um comando faz:\n• COMANDO --help — ajuda rápida (geralmente uma tela)\n• man COMANDO — manual completo (pode ter dezenas de páginas, navegue com setas, q para sair, /palavra para buscar)\n• info COMANDO — manual em hipertexto (estilo wiki, pouco usado hoje)\n• tldr COMANDO — exemplos práticos resumidos. Instale: 'sudo apt install tldr' depois 'tldr cp'. Muito mais útil que man para casos comuns.",
      "Variáveis de ambiente importantes (acesse com $NOME):\n• $HOME — sua pasta pessoal (= ~)\n• $USER — seu nome de usuário\n• $PATH — lista de pastas onde o shell procura comandos\n• $PWD — diretório atual\n• $SHELL — qual shell está em uso\n• $LANG — idioma/locale\n\nVeja todas com 'env' ou 'printenv'. Use em comandos: 'cd $HOME/Downloads' = 'cd ~/Downloads'.",
    ],
    commands: [
      {
        command: "pwd",
        description: "Print Working Directory — mostra o diretório atual.",
        example: "pwd",
        output: "/home/wallyson",
      },
      {
        command: "ls",
        description: "Lista arquivos e diretórios.",
        example: "ls -lah /var/log",
        flags: [
          { flag: "-l", description: "Formato longo (permissões, dono, tamanho, data)" },
          { flag: "-a", description: "Mostrar ocultos (que começam com .)" },
          { flag: "-h", description: "Tamanhos legíveis (KB, MB, GB)" },
          { flag: "-S", description: "Ordenar por tamanho" },
          { flag: "-t", description: "Ordenar por data de modificação" },
          { flag: "-r", description: "Inverter ordem" },
          { flag: "-R", description: "Recursivo (entrar em subpastas)" },
          { flag: "--color", description: "Colorir saída por tipo de arquivo" },
        ],
      },
      {
        command: "cd",
        description: "Change Directory — muda de pasta.",
        example: "cd ~/Documentos",
        flags: [
          { flag: "~", description: "Vai para sua home (/home/USUARIO)" },
          { flag: "..", description: "Volta um nível (pasta-pai)" },
          { flag: "-", description: "Volta ao diretório anterior" },
          { flag: "/", description: "Vai para a raiz do sistema" },
        ],
      },
      {
        command: "clear",
        description: "Limpa a tela do terminal (atalho: Ctrl+L).",
        example: "clear",
      },
      {
        command: "history",
        description: "Mostra o histórico de comandos digitados.",
        example: "history | tail -20",
        flags: [
          { flag: "-c", description: "Limpa o histórico todo" },
          { flag: "-d N", description: "Apaga linha N do histórico" },
          { flag: "-w", description: "Salva histórico no arquivo agora" },
        ],
      },
      {
        command: "whoami",
        description: "Mostra seu nome de usuário atual.",
        example: "whoami",
        output: "wallyson",
      },
      {
        command: "hostname",
        description: "Mostra o nome da máquina.",
        example: "hostname",
        output: "debian",
      },
      {
        command: "date",
        description: "Mostra data/hora atual. Formato customizável.",
        example: 'date "+%d/%m/%Y %H:%M"',
        output: "25/04/2026 18:43",
      },
      {
        command: "echo",
        description: "Imprime texto na tela. Útil para testar variáveis: echo $HOME",
        example: "echo 'Olá, $USER'",
        output: "Olá, $USER",
      },
      {
        command: "man",
        description: "Manual de qualquer comando. Navegação: setas ↑↓, /palavra busca, q sai.",
        example: "man ls",
      },
      {
        command: "tldr",
        description: "Exemplos práticos de qualquer comando, em vez do manual gigante. Instale: sudo apt install tldr",
        example: "tldr tar",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Tab é seu super-poder",
        content:
          "90% dos erros de digitação somem se você usar Tab religiosamente. Digite as primeiras letras → Tab. Se nada acontece, aperte Tab DUAS vezes para ver as opções. Isso te poupa de erros como 'cd Documentso' (típico de quem não usa Tab).",
      },
      {
        type: "warning",
        title: "Cuidado com o cifrão $ em comandos copiados",
        content:
          "Em tutoriais, '$ comando' significa 'rode como usuário comum' e '# comando' significa 'rode como root'. NÃO copie o $ ou # — eles são só indicação visual de prompt, não fazem parte do comando.",
      },
      {
        type: "success",
        title: "Instale o tldr para vida feliz",
        content:
          "'sudo apt install tldr' (uma vez). Depois, sempre que precisar lembrar a sintaxe de um comando, 'tldr COMANDO' te mostra os 3-5 usos mais comuns com exemplos. Muito melhor que ler 'man tar' (manual de 30 páginas).",
      },
    ],
    practiceLabs: [
      {
        title: "Tour pelo seu sistema em 1 minuto",
        goal: "Conhecer comandos básicos rodando-os de verdade. Sem isso não fica na cabeça.",
        steps: [
          "Abra o terminal.",
          "Cole o bloco de comandos abaixo um por um, OBSERVANDO cada saída.",
          "Note o que cada um faz e como o prompt muda quando você usa cd.",
        ],
        command: `# Onde estou?
pwd

# O que tem aqui?
ls -lah

# Quem sou eu?
whoami

# Em qual maquina?
hostname

# Que dia e hora e?
date

# Vou para Documentos
cd ~/Documentos

# Ver onde estou agora
pwd

# Voltar para a home (sem argumento)
cd

# Confirmar que voltei
pwd

# Limpar tela
clear`,
        verify:
          "Você deve ter visto seu nome de usuário, o hostname, a data atual, e ter navegado para ~/Documentos e voltado. Se algum comando deu 'command not found' você está em uma distro que não é Debian/derivado.",
      },
      {
        title: "Use Tab e histórico para acelerar",
        goal: "Internalizar os atalhos que vão multiplicar sua produtividade no terminal.",
        steps: [
          "Digite 'ls /v' e aperte Tab. Deve completar para 'ls /var/'.",
          "Aperte Tab de novo (duas vezes total). Mostra todas as pastas em /var.",
          "Digite 'log/' e Enter para listar /var/log.",
          "Aperte ↑ — recupera o último comando.",
          "Aperte ↑ de novo — comando anterior.",
          "Pressione Ctrl+R, digite 'pwd' — busca pelo comando 'pwd' no histórico.",
          "Pressione Enter para executar.",
          "Digite '!ls' — re-executa o último comando que começou com 'ls'.",
        ],
        verify:
          "Se você usou Tab e o terminal completou os caminhos, você dominou. Se o Ctrl+R funcionou, agora você vai esquecer como vivia sem.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a diferença entre terminal, shell e console?",
        answer:
          "Terminal = a janela onde você digita. Shell = o interpretador (Bash, Zsh) que entende seus comandos. Console = a interface de texto pura (TTY), acessada com Ctrl+Alt+F2.",
      },
      {
        id: 2,
        question: "O que significa o ~ no caminho?",
        answer: "~ é atalho para sua pasta pessoal (/home/SEU_USUARIO). 'cd ~' = 'cd /home/USUARIO' = 'cd' (sem argumento).",
      },
      {
        id: 3,
        question: "Qual atalho cancela um comando rodando?",
        answer: "Ctrl+C — envia sinal SIGINT, o comando para imediatamente.",
      },
      {
        id: 4,
        question: "Como buscar 'apt' no seu histórico de comandos?",
        answer: "Pressione Ctrl+R e digite apt — Bash vai mostrando matches enquanto você digita. Enter executa.",
      },
      {
        id: 5,
        question: "Você não lembra como usar o comando tar. Como pedir ajuda?",
        answer:
          "tar --help (resumo rápido), man tar (manual completo, q sai), ou tldr tar (exemplos práticos — instale: sudo apt install tldr).",
      },
      {
        id: 6,
        question: "O que faz 'cd -'?",
        answer: "Volta para o diretório anterior (o último em que você esteve antes do atual). Útil para alternar entre duas pastas.",
      },
    ],
    references: [
      { title: "Manual completo do Bash", url: "https://www.gnu.org/software/bash/manual/" },
      { title: "tldr — exemplos práticos", url: "https://tldr.sh/" },
      { title: "Cheat sheet de atalhos do Bash", url: "https://devhints.io/bash" },
    ],
  },

  {
    id: "navegacao",
    title: "Navegação no Sistema de Arquivos",
    icon: "🗂️",
    category: "Terminal e Arquivos",
    description: "Hierarquia FHS, caminhos absolutos vs relativos, e por que tudo no Linux é arquivo.",
    objectives: [
      "Entender a hierarquia padrão do Linux (FHS)",
      "Diferenciar caminhos absolutos e relativos",
      "Saber para que servem /etc, /var, /home, /usr, /tmp, /opt, /root, /boot",
      "Entender que tudo (dispositivos, processos, sockets) são arquivos no Linux",
    ],
    content: [
      "O Linux organiza arquivos em uma única árvore que começa na raiz '/'. Diferente do Windows (que tem letras de unidade C:, D:), o Linux monta pendrives, HDs externos, partições — todos dentro dessa única árvore. É a Filesystem Hierarchy Standard (FHS), padrão seguido por todas as distros.",
      "Diretórios principais e sua função:\n• /          raiz, contém tudo\n• /bin       binários essenciais (ls, cp, cat) — em distros modernas é link para /usr/bin\n• /sbin      binários de administração (mkfs, ifconfig) — link para /usr/sbin\n• /etc       arquivos de configuração do SISTEMA (sources.list, hostname, fstab)\n• /home      pastas pessoais dos usuários (/home/wallyson, /home/maria)\n• /root      pasta pessoal do usuário root (não fica em /home)\n• /var       dados variáveis: logs (/var/log), cache, mail, banco de dados\n• /tmp       arquivos temporários, apagados a cada boot\n• /usr       programas e bibliotecas (não-essenciais ao boot)\n• /opt       software de terceiros (Chrome, VSCode quando instalados manualmente)\n• /boot      kernel, initramfs, configuração do GRUB",
      "Diretórios virtuais (não são arquivos de verdade — são interfaces para o kernel):\n• /proc      informações sobre processos rodando (/proc/CPUinfo, /proc/meminfo)\n• /sys       controle do hardware/kernel (mais novo que /proc)\n• /dev       arquivos de dispositivo (/dev/sda = HD, /dev/null = lixeira universal, /dev/zero = bytes zero infinitos)\n• /run       dados temporários de runtime (sockets, PIDs)",
      "Caminho absoluto começa com '/' — não importa onde você esteja, sempre aponta para o mesmo lugar:\n/home/wallyson/Documentos/notas.txt\n\nCaminho relativo NÃO começa com '/' — é interpretado a partir do diretório atual (PWD):\nDocumentos/notas.txt    (se você está em /home/wallyson)\n../arquivo.txt          (sobe um nível e pega arquivo.txt)\n./script.sh             (script.sh no diretório atual; o ./ é necessário para executar)\n\nA dica: '..' = pasta-pai, '.' = pasta atual.",
      "Convenções de nomes no Linux:\n• Sensível a maiúsculas: arquivo.txt ≠ Arquivo.txt ≠ ARQUIVO.txt — são três arquivos diferentes!\n• Arquivos ocultos começam com . — '.bashrc' não aparece com 'ls', só com 'ls -a'.\n• Espaços em nomes precisam ser escapados ou entre aspas: 'meu arquivo.txt' ou meu\\ arquivo.txt.\n• Não há extensão obrigatória — 'script' e 'script.sh' são idênticos para o sistema; a extensão é só para humanos.",
      "Filosofia 'tudo é arquivo' — uma das ideias mais brilhantes do Unix:\n• Dispositivos físicos (HDs, USBs) são arquivos em /dev (você pode 'cat /dev/sda', mas não faça isso).\n• Processos rodando são arquivos em /proc (cada PID tem uma pasta).\n• Sockets de rede aparecem como arquivos em /tmp ou /var/run.\n• /dev/null é a 'lixeira universal' — qualquer coisa escrita lá some. 'comando > /dev/null' descarta a saída.\n• /dev/zero gera infinitos bytes zero — útil para criar arquivos de teste.\n• /dev/random e /dev/urandom geram bytes aleatórios para criptografia.",
      "Pontos de montagem — onde discos extras 'aparecem' na árvore:\n• /mnt — para montagens manuais e temporárias\n• /media — onde o sistema monta automaticamente pendrives e HDs externos (/media/wallyson/PENDRIVE)\n• /home (pode ser uma partição separada montada aqui)\n\nVer todas as montagens: comando 'mount' ou 'df -h'.",
      "Atalhos especiais que TODO usuário Linux deve memorizar:\n• ~        sua home (/home/USUARIO)\n• ~outroUsuario   home dele (/home/outroUsuario)\n• .        diretório atual\n• ..       diretório pai\n• -        diretório anterior (após cd -)\n• /        raiz\n\nUse em comandos: 'cp ~/foto.jpg /tmp/' = 'cp /home/USUARIO/foto.jpg /tmp/'.",
    ],
    commands: [
      {
        command: "pwd",
        description: "Print Working Directory — onde você está.",
        example: "pwd",
        output: "/home/wallyson/Documentos",
      },
      {
        command: "cd",
        description: "Change Directory — muda de pasta.",
        example: "cd /var/log",
        flags: [
          { flag: "/", description: "Vai para raiz" },
          { flag: "~", description: "Vai para sua home" },
          { flag: "..", description: "Sobe um nível" },
          { flag: "-", description: "Volta ao diretório anterior" },
        ],
      },
      {
        command: "ls",
        description: "Lista conteúdo do diretório.",
        example: "ls -lah ~",
      },
      {
        command: "tree",
        description: "Mostra estrutura de pastas em árvore. Instale: sudo apt install tree.",
        example: "tree -L 2 ~/Documentos",
        flags: [
          { flag: "-L N", description: "Limitar profundidade (N níveis)" },
          { flag: "-d", description: "Só diretórios" },
          { flag: "-a", description: "Incluir ocultos" },
          { flag: "-h", description: "Mostrar tamanhos legíveis" },
        ],
      },
      {
        command: "find",
        description: "Busca arquivos por nome, tamanho, data, tipo, etc. EXTREMAMENTE poderoso.",
        example: "find /home -name '*.pdf' -mtime -7",
        flags: [
          { flag: "-name 'PADRÃO'", description: "Busca por nome (com curingas)" },
          { flag: "-type f", description: "Só arquivos comuns" },
          { flag: "-type d", description: "Só diretórios" },
          { flag: "-mtime -7", description: "Modificados nos últimos 7 dias" },
          { flag: "-size +100M", description: "Maiores que 100 MB" },
          { flag: "-delete", description: "Apaga os encontrados (CUIDADO!)" },
        ],
      },
      {
        command: "locate",
        description: "Busca arquivos por nome em um banco de dados (rápido, mas pode estar desatualizado). Atualize com 'sudo updatedb'.",
        example: "locate firefox",
      },
      {
        command: "mount",
        description: "Mostra dispositivos montados (ou monta novos).",
        example: "mount | grep '^/dev'",
      },
      {
        command: "df",
        description: "Disk Free — espaço livre por partição montada.",
        example: "df -hT",
      },
      {
        command: "du",
        description: "Disk Usage — quanto cada pasta/arquivo ocupa.",
        example: "du -sh ~/Downloads/*",
        flags: [
          { flag: "-s", description: "Só o total (não detalha)" },
          { flag: "-h", description: "Legível" },
          { flag: "--max-depth=1", description: "Só primeiro nível" },
        ],
      },
    ],
    tips: [
      {
        type: "info",
        title: "Decorou os atalhos? Aqui está um quiz",
        content:
          "Sem rodar: o que faz 'cd ../..'? (sobe dois níveis) E 'cd ~/-'? (vai para a home, depois volta — ou seja, fica onde estava — pegadinha). E 'ls .'? (lista o diretório atual, mesma coisa que 'ls').",
      },
      {
        type: "warning",
        title: "Cuidado com find -delete",
        content:
          "Sempre rode o find PRIMEIRO sem o -delete para ver o que SERIA deletado. Só depois adicione -delete. Ex: 'find /home -name *.tmp' (lista) → conferir → 'find /home -name *.tmp -delete' (apaga).",
      },
    ],
    practiceLabs: [
      {
        title: "Mapear sua casa Linux",
        goal: "Entender visualmente a estrutura de diretórios do seu sistema.",
        steps: [
          "Instale tree: sudo apt install tree",
          "Olhe a raiz limitada a 1 nível: tree -L 1 /",
          "Veja o tamanho de cada diretório principal: sudo du -sh /* 2>/dev/null",
          "Encontre os 5 diretórios mais pesados.",
          "Olhe sua home: tree -L 2 ~",
        ],
        command: `# 1) Ferramenta
sudo apt install -y tree

# 2) Estrutura da raiz
tree -L 1 /

# 3) Tamanho de cada um
sudo du -sh /* 2>/dev/null | sort -h

# 4) Sua home
tree -L 2 -a ~ | head -30`,
        verify:
          "Você deve ver as pastas /etc, /home, /var, /usr, etc. Provavelmente /usr é o maior (programas instalados) seguido de /var (logs e cache).",
      },
      {
        title: "Encontrar todos os PDFs modificados na última semana",
        goal: "Aprender a usar find para tarefas reais do dia a dia.",
        steps: [
          "Crie um PDF de teste: touch ~/Documentos/teste.pdf",
          "Procure todos os PDFs em sua home modificados nos últimos 7 dias.",
          "Veja só os arquivos > 1 MB.",
          "Conte quantos foram encontrados.",
        ],
        command: `# 1) Criar arquivo de teste
mkdir -p ~/Documentos
touch ~/Documentos/teste.pdf

# 2) Procurar PDFs modificados nos ultimos 7 dias
find ~ -name '*.pdf' -mtime -7

# 3) Mesmo, mas so > 1 MB
find ~ -name '*.pdf' -mtime -7 -size +1M

# 4) Contar
find ~ -name '*.pdf' -mtime -7 | wc -l`,
        verify:
          "Você deve ver pelo menos o teste.pdf que acabou de criar. Se você usa o computador há tempo, vai ver vários PDFs.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que tem em /etc?",
        answer: "Arquivos de configuração do SISTEMA (sources.list, fstab, hostname, hosts, sudoers, passwd, etc.). Edição requer root.",
      },
      {
        id: 2,
        question: "Diferença entre caminho absoluto e relativo?",
        answer:
          "Absoluto começa com / e aponta para o mesmo lugar de qualquer diretório (/home/user/foto.jpg). Relativo é a partir do diretório atual (foto.jpg, ../foto.jpg).",
      },
      {
        id: 3,
        question: "O que é /dev/null?",
        answer:
          "Arquivo especial que descarta tudo que escreve nele. Use 'comando > /dev/null' para silenciar saída, ou '2>/dev/null' para silenciar erros.",
      },
      {
        id: 4,
        question: "Como descobrir quanto espaço cada pasta de /home está usando?",
        answer: "sudo du -sh /home/* — mostra total de cada subpasta de /home (-s = só total, -h = legível).",
      },
      {
        id: 5,
        question: "Como achar todos os arquivos .log maiores que 100MB em /var?",
        answer: "sudo find /var -name '*.log' -size +100M",
      },
      {
        id: 6,
        question: "Por que arquivos ocultos começam com .?",
        answer:
          "Convenção do Unix: o ls não mostra arquivos que começam com . (use ls -a). Servem para configurações pessoais (.bashrc, .config) sem poluir a listagem normal.",
      },
    ],
    references: [
      { title: "FHS — Filesystem Hierarchy Standard", url: "https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html" },
      { title: "Wiki Debian — Filesystems", url: "https://wiki.debian.org/Filesystems" },
    ],
  },

  {
    id: "arquivos",
    title: "Manipulação de Arquivos — Criar, Copiar, Mover, Apagar",
    icon: "📄",
    category: "Terminal e Arquivos",
    description: "touch, mkdir, cp, mv, rm — os 5 comandos que você vai usar mil vezes.",
    objectives: [
      "Criar arquivos vazios e pastas",
      "Copiar e mover com segurança (sem sobrescrever sem querer)",
      "Apagar com confirmação para evitar erros",
      "Conhecer o uso correto de wildcards (* e ?)",
    ],
    content: [
      "Os 5 comandos básicos para mexer em arquivos: touch (criar arquivo vazio), mkdir (criar diretório), cp (copiar), mv (mover ou renomear), rm (apagar). Você vai usar esses todo dia. Vamos por ordem.",
      "touch — cria um arquivo vazio (ou atualiza a data se já existe). Útil para criar arquivos rápidos para teste, ou para 'tocar' arquivos para que sistemas de monitoramento detectem mudança:\n\ntouch arquivo.txt\ntouch a.txt b.txt c.txt        (cria 3 de uma vez)\ntouch -t 202401151200 arq.txt  (define data específica)\n\nDuvida frequente: 'touch' não é o comando 'certo' para criar arquivo de texto — é para criar arquivo VAZIO. Para escrever direto, use 'echo texto > arquivo.txt' ou edite com 'nano arquivo.txt'.",
      "mkdir — make directory. Cria pastas:\n\nmkdir nova_pasta\nmkdir -p caminho/longo/que/nao/existe   (-p cria intermediárias se faltarem)\nmkdir pasta_{a,b,c}                       (cria 3 pastas: pasta_a, pasta_b, pasta_c)\n\nO -p é INDISPENSÁVEL. Sem ele, 'mkdir a/b/c' dá erro se 'a' não existe. Com -p, cria a, b e c.",
      "cp — copy. Copia arquivos e diretórios:\n\ncp origem destino                  copia arquivo único\ncp arquivo.txt /tmp/               copia para /tmp/\ncp arquivo.txt /tmp/novo.txt       copia E renomeia\ncp -r pasta/ /tmp/                 -r = recursivo, OBRIGATÓRIO para diretórios\ncp -i arquivo.txt /tmp/            -i = pergunta antes de sobrescrever (RECOMENDADO!)\ncp -v ...                          -v = verboso, mostra o que está copiando\ncp -a ...                          -a = preserva tudo (permissões, dono, datas)\n\nO -i evita você sobrescrever arquivo importante por engano. Crie um alias permanente: 'alias cp=\"cp -i\"' no ~/.bashrc.",
      "mv — move. Move OU renomeia arquivos:\n\nmv arquivo.txt /tmp/             move para /tmp/\nmv arquivo.txt novo_nome.txt     RENOMEIA (mover para o mesmo lugar com outro nome)\nmv -i arq.txt /tmp/              pergunta antes de sobrescrever\nmv -v ...                        verboso\n\nNão precisa de -r para mover diretórios — mv funciona com pastas direto. Não tem opção 'undo' — uma vez movido, foi.",
      "rm — REMOVE. APAGA. CUIDADO:\n\nrm arquivo.txt                   apaga arquivo (sem ir para lixeira!)\nrm -i arquivo.txt                pergunta antes de cada apagar\nrm -r pasta/                     RECURSIVO, apaga pasta e tudo dentro\nrm -ri pasta/                    pergunta cada item (recomendado!)\nrm -f arquivo.txt                força (não pergunta nem reclama)\n\nNUNCA use 'rm -rf /' ou 'rm -rf /*' — apaga TUDO no sistema. Nunca rode rm -rf como root sem checar 3 vezes o caminho. Não há lixeira no terminal — uma vez apagado, foi.",
      "Wildcards (curingas) — atalhos que o shell expande antes de chamar o comando:\n• *       qualquer sequência de caracteres (até /)\n• ?       um único caractere qualquer\n• [abc]   um caractere entre a, b ou c\n• {1,2,3} expande para 3 alternativas: arq{1,2,3}.txt = arq1.txt arq2.txt arq3.txt\n\nExemplos:\n• rm *.tmp — apaga todos os .tmp do diretório atual\n• cp foto?.jpg ~/Imagens/ — copia foto1.jpg, foto2.jpg, fotoA.jpg, etc.\n• ls /var/log/*.log — lista todos os .log em /var/log",
      "Renomear vários arquivos de uma vez: o mv não faz isso direto. Use 'rename' (perl) ou um for loop:\n\nrename 's/\\.txt$/\\.md/' *.txt          # troca todas .txt por .md\n\nOu shell loop:\nfor f in *.jpeg; do mv \"$f\" \"\\${f%.jpeg}.jpg\"; done\n\nInstale rename: sudo apt install rename.",
      "Lixeira no terminal — não existe nativa. Mas você pode instalar 'trash-cli' que adiciona comando 'trash' como substituto seguro do rm:\n\nsudo apt install trash-cli\ntrash arquivo.txt              vai para lixeira\ntrash-list                     lista o que tem na lixeira\ntrash-restore                  restaura\ntrash-empty                    esvazia\n\nMuitos usuários experientes usam 'trash' no dia a dia em vez de rm.",
    ],
    commands: [
      {
        command: "touch",
        description: "Cria arquivo vazio ou atualiza timestamp.",
        example: "touch a.txt b.txt c.txt",
      },
      {
        command: "mkdir",
        description: "Cria diretório.",
        example: "mkdir -p projeto/src/components",
        flags: [
          { flag: "-p", description: "Cria diretórios pais (essencial)" },
          { flag: "-v", description: "Verboso" },
          { flag: "-m 700", description: "Cria com permissão específica" },
        ],
      },
      {
        command: "cp",
        description: "Copia arquivos e diretórios.",
        example: "cp -ri pasta/ /tmp/",
        flags: [
          { flag: "-r", description: "Recursivo (necessário para diretórios)" },
          { flag: "-i", description: "Pergunta antes de sobrescrever" },
          { flag: "-v", description: "Verboso" },
          { flag: "-a", description: "Preserva tudo (permissões, dono, datas)" },
          { flag: "-u", description: "Só copia se origem é mais nova" },
        ],
      },
      {
        command: "mv",
        description: "Move ou renomeia.",
        example: "mv -iv arquivo.txt /tmp/",
        flags: [
          { flag: "-i", description: "Pergunta antes de sobrescrever" },
          { flag: "-v", description: "Verboso" },
          { flag: "-n", description: "Não sobrescreve nunca" },
        ],
      },
      {
        command: "rm",
        description: "REMOVE. Use COM CUIDADO.",
        example: "rm -ri pasta_temporaria/",
        flags: [
          { flag: "-i", description: "Pergunta cada um (USE!)" },
          { flag: "-r", description: "Recursivo (para diretórios)" },
          { flag: "-f", description: "Força, sem perguntar (CUIDADO)" },
          { flag: "-v", description: "Verboso (mostra o que apagou)" },
        ],
      },
      {
        command: "rmdir",
        description: "Remove diretório VAZIO. Falha se houver conteúdo (mais seguro que rm -r).",
        example: "rmdir pasta_vazia",
      },
      {
        command: "ln",
        description: "Cria links. Hard link (sem flag) ou soft/symbolic (-s).",
        example: "ln -s /opt/aplicativo/bin/app /usr/local/bin/app",
        flags: [
          { flag: "-s", description: "Cria link simbólico (preferido)" },
          { flag: "-f", description: "Sobrescreve link existente" },
        ],
      },
      {
        command: "rename",
        description: "Renomeia vários arquivos com expressão regular (Perl).",
        example: "rename 's/\\.jpeg$/\\.jpg/' *.jpeg",
      },
      {
        command: "trash",
        description: "Move para lixeira em vez de apagar (mais seguro que rm). Instale: sudo apt install trash-cli",
        example: "trash arquivo_suspeito.txt",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "rm -rf é PERIGOSO",
        content:
          "Sempre cheque o caminho 3 vezes antes de 'rm -rf'. Erros comuns: 'rm -rf /' (apaga tudo!), 'rm -rf /*', 'rm -rf $VAR' onde $VAR está vazio (vira 'rm -rf '). Considere usar 'trash' (sudo apt install trash-cli) no dia a dia em vez de rm.",
      },
      {
        type: "info",
        title: "Crie um alias para cp, mv e rm pedirem confirmação",
        content:
          "Adicione no ~/.bashrc: alias rm='rm -i'\\nalias cp='cp -i'\\nalias mv='mv -i'\\nDepois 'source ~/.bashrc'. Agora qualquer rm pergunta antes — vida mais segura.",
      },
      {
        type: "success",
        title: "Para CONFIRMAR que entendeu wildcards: 'echo *'",
        content:
          "Antes de rodar 'rm *.tmp', rode 'echo *.tmp'. O echo mostra exatamente o que o * vai expandir. Se a lista parece OK, troque echo por rm. Esse hábito evita 99% dos desastres com wildcards.",
      },
    ],
    practiceLabs: [
      {
        title: "Lab seguro de operações com arquivos",
        goal: "Praticar criar, copiar, mover, apagar em uma pasta isolada onde não há risco.",
        steps: [
          "Crie uma pasta de testes em /tmp.",
          "Crie 5 arquivos vazios.",
          "Copie um deles para outro nome.",
          "Mova um para uma subpasta.",
          "Renomeie um.",
          "Apague tudo no final.",
        ],
        command: `# 1) Pasta de testes
mkdir -p /tmp/lab-arquivos
cd /tmp/lab-arquivos

# 2) 5 arquivos vazios
touch arq1.txt arq2.txt arq3.txt arq4.txt arq5.txt
ls

# 3) Copiar um
cp -iv arq1.txt arq1-copia.txt

# 4) Criar subpasta e mover
mkdir -p subpasta
mv -iv arq2.txt subpasta/

# 5) Renomear
mv -iv arq3.txt arq3-renomeado.txt

# 6) Listar tudo
ls -laR

# 7) Apagar a pasta inteira (com -i pergunta cada)
cd ..
rm -ri lab-arquivos`,
        verify:
          "Após cada comando, rode ls para ver o resultado. No final 'ls /tmp/lab-arquivos' deve dar 'No such file or directory'.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como criar um diretório aninhado, ex: 'projeto/src/components'?",
        answer: "mkdir -p projeto/src/components — o -p cria pais que não existem (sem ele, dá erro).",
      },
      {
        id: 2,
        question: "Por que usar 'cp -i' em vez de 'cp' simples?",
        answer:
          "Para o cp PERGUNTAR antes de sobrescrever um arquivo existente. Sem o -i, o cp sobrescreve silenciosamente — você pode perder dados.",
      },
      {
        id: 3,
        question: "Como copiar uma pasta inteira com tudo dentro?",
        answer: "cp -r pasta/ destino/ — o -r é recursivo, obrigatório para diretórios.",
      },
      {
        id: 4,
        question: "Qual a diferença entre mv e rename?",
        answer:
          "mv move OU renomeia (um arquivo por vez). rename usa regex para renomear MUITOS arquivos de uma vez (rename 's/.jpeg/.jpg/' *.jpeg).",
      },
      {
        id: 5,
        question: "O que NUNCA fazer com rm?",
        answer:
          "NUNCA: rm -rf / (apaga tudo!), rm -rf /* (idem), rm -rf $VARIAVEL_QUE_PODE_ESTAR_VAZIA (vira rm -rf  que age na pasta atual). Sempre prefira -i e cheque o caminho duas vezes.",
      },
      {
        id: 6,
        question: "Como apagar com segurança em vez de usar rm?",
        answer:
          "sudo apt install trash-cli, depois use 'trash arquivo' em vez de 'rm arquivo'. Move para lixeira reversível em vez de apagar de vez.",
      },
    ],
    references: [
      { title: "Manual GNU coreutils", url: "https://www.gnu.org/software/coreutils/manual/" },
      { title: "trash-cli no GitHub", url: "https://github.com/andreafrancia/trash-cli" },
    ],
  },
];
