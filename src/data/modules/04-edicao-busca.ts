import { Module } from "@/types/module";

export const edicaoBusca: Module[] = [
  {
    id: "editor-texto",
    title: "Editores de Texto — nano e vim",
    icon: "✏️",
    category: "Terminal e Arquivos",
    description: "Como editar arquivos de configuração no terminal sem aperto. nano para iniciantes, vim para vida toda.",
    objectives: [
      "Usar nano para edições rápidas de configuração",
      "Sobreviver no vim (entrar, sair, salvar)",
      "Conhecer atalhos essenciais de cada editor",
      "Saber qual usar quando",
    ],
    content: [
      "No Linux, MUITAS tarefas envolvem editar arquivos de texto: configurar serviços (/etc/ssh/sshd_config), customizar shell (~/.bashrc), criar scripts. Você precisa de pelo menos um editor de terminal funcional — quando o ambiente gráfico quebra, ou em servidor SSH, é o que você tem.",
      "nano é o editor amigável para iniciantes. Já vem instalado no Debian. Os atalhos aparecem na parte inferior da tela. O ^ representa Ctrl. Comandos essenciais:\n• Ctrl+O — salvar (Output)\n• Ctrl+X — sair (com pergunta para salvar se houver mudanças)\n• Ctrl+W — buscar (Where is)\n• Ctrl+\\ — buscar e substituir\n• Ctrl+K — recortar linha\n• Ctrl+U — colar (Uncut)\n• Ctrl+G — ajuda completa\n• Alt+/ — fim do arquivo\n• Alt+\\ — início do arquivo\n\nUse nano sempre que o vim te dar pavor. Sem vergonha — administradores experientes usam nano para edições rápidas.",
      "vim é o editor lendário do Unix. Tem curva de aprendizado, mas dominado é absurdamente rápido. Versão simplificada já vem no Debian (vim-tiny). Para versão completa: 'sudo apt install vim'. Característica única: vim tem MODOS:\n• NORMAL — modo padrão. Teclas executam comandos (não inserem texto). Move-se com h/j/k/l (esquerda/baixo/cima/direita). Esc volta para esse modo de qualquer outro.\n• INSERT — modo de digitação. Tecla 'i' entra. Esc sai.\n• VISUAL — seleção de texto. Tecla 'v' entra.\n• COMMAND — comandos no rodapé. Tecla ':' entra.\n\nSe abriu vim e está perdido: aperte Esc, depois digite ':q!' e Enter para sair sem salvar.",
      "Sobrevivência no vim — os 10 comandos que te tiram de qualquer aperto:\n• i — entra modo INSERT (começa a editar)\n• Esc — volta ao modo NORMAL\n• :w — salvar (write)\n• :q — sair (quit)\n• :wq — salvar e sair\n• :q! — sair SEM salvar (descartar mudanças)\n• /palavra — buscar 'palavra' (Enter, depois n para próximo, N para anterior)\n• u — desfazer (undo)\n• Ctrl+r — refazer (redo)\n• dd — apagar linha inteira\n\nCom isso você consegue editar QUALQUER arquivo de config no servidor. Suficiente para 90% dos casos.",
      "Customização básica do vim — crie ~/.vimrc com:\n\nset number               \" mostra números das linhas\nset relativenumber       \" números relativos (super útil para movimentação)\nset tabstop=4            \" tab = 4 espaços\nset expandtab            \" tab insere espaços\nset autoindent           \" auto-identar\nset ignorecase           \" busca case-insensitive\nset hlsearch             \" destacar buscas\nset mouse=a              \" habilita mouse\nsyntax on                \" colorir sintaxe\n\nDepois 'source ~/.vimrc' ou reabrir o vim. Diferença é dia e noite.",
      "Quando usar cada um:\n• nano — edições rápidas e ocasionais (mudar uma linha em /etc/hosts, configurar uma flag em /etc/ssh/sshd_config). Sem curva de aprendizado.\n• vim — você edita arquivos com frequência. Investe 1-2 semanas para aprender, depois é rápido pra sempre. Padrão em servidores e em ambientes profissionais.\n\nDicas pessoais: aprenda a sobreviver no vim (10 comandos acima) — você não tem opção quando o servidor remoto só tem vim. Use nano para edições rápidas no seu dia a dia.",
      "Editores gráficos no terminal? Existem alternativas modernas:\n• micro — sintaxe estilo VSCode, atalhos como Ctrl+S salvar, Ctrl+C copiar. Instale: sudo apt install micro\n• helix — fork moderno do vim com modos repensados. Sem repositório oficial Debian (baixe do GitHub).\n• neovim — sucessor do vim. sudo apt install neovim. Compatible com vim mas com plugins modernos (Lua).\n\nMas saiba: nano e vim sempre estarão disponíveis em qualquer servidor Debian/Ubuntu/RHEL. Aprender pelo menos um é seguro.",
    ],
    commands: [
      {
        command: "nano",
        description: "Editor amigável. Atalhos visíveis no rodapé.",
        example: "sudo nano /etc/hosts",
        flags: [
          { flag: "-w", description: "Não quebrar linhas longas" },
          { flag: "+N", description: "Abrir na linha N" },
          { flag: "-l", description: "Mostrar números de linha" },
          { flag: "-S", description: "Suave (smooth scroll)" },
        ],
      },
      {
        command: "vim",
        description: "Editor modal lendário. Esc para sair de modo, :q! para sair sem salvar.",
        example: "vim ~/.bashrc",
        flags: [
          { flag: "+N", description: "Abrir na linha N" },
          { flag: "-R", description: "Modo somente leitura" },
          { flag: "-d arq1 arq2", description: "Modo diff (compara dois arquivos)" },
        ],
      },
      {
        command: "vimtutor",
        description: "Tutorial interativo do vim (em texto). Roda 30 minutos e você sai sabendo o suficiente.",
        example: "vimtutor",
      },
      {
        command: "echo 'texto' >> arquivo",
        description: "Adiciona linha ao final de arquivo (sem editor). Útil em scripts.",
        example: 'echo "PATH=$PATH:~/bin" >> ~/.bashrc',
      },
      {
        command: "sed -i",
        description: "Edita arquivo no lugar (sem abrir editor). Para substituições simples.",
        example: "sudo sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config",
      },
      {
        command: "diff",
        description: "Compara dois arquivos linha a linha.",
        example: "diff arquivo1.txt arquivo2.txt",
        flags: [
          { flag: "-u", description: "Formato 'unified' (igual git)" },
          { flag: "-r", description: "Recursivo (compara dois diretórios)" },
        ],
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Backup ANTES de editar configs do sistema",
        content:
          "Antes de editar /etc/ssh/sshd_config, /etc/fstab, /etc/network/interfaces, etc., faça backup: 'sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak'. Se quebrar, restaura. Custom 1 segundo, salva horas de debug.",
      },
      {
        type: "info",
        title: "Como sair do vim (a piada da internet)",
        content:
          "Existe meme: 'Como saiu do vim?' 'Comprei outro computador'. A resposta real: aperte Esc (volta ao modo normal), digite :q! (sai sem salvar) ou :wq (salva e sai), e Enter. Esc-:q!-Enter te tira do vim em qualquer situação.",
      },
      {
        type: "success",
        title: "Pratique vim sem pressa",
        content:
          "Abra 'vimtutor' no terminal — é um tutorial interativo de 30 minutos. Faça uma vez. Depois, force-se a usar vim por uma semana para edições simples (mesmo que demore mais). Após esse mês, você não volta atrás.",
      },
    ],
    practiceLabs: [
      {
        title: "Editar /etc/hosts adicionando uma entrada",
        goal: "Praticar edição de arquivo de sistema (com backup, edição, validação).",
        steps: [
          "Faça backup do /etc/hosts.",
          "Abra com nano (ou vim).",
          "Adicione uma linha mapeando 'meu-servidor' para 192.168.1.100.",
          "Salve e teste.",
        ],
        command: `# 1) Backup
sudo cp /etc/hosts /etc/hosts.bak

# 2) Abrir com nano
sudo nano /etc/hosts
# Adicione no final:
# 192.168.1.100   meu-servidor
# Salve com Ctrl+O, Enter, depois Ctrl+X

# 3) Confirmar
cat /etc/hosts

# 4) Testar (ping para o nome resolver)
ping -c 1 meu-servidor

# 5) Se algo deu errado, restaurar:
# sudo cp /etc/hosts.bak /etc/hosts`,
        verify:
          "O ping deve resolver 'meu-servidor' para 192.168.1.100 (mesmo que 'host inalcançável' — o que importa é o nome ter resolvido).",
      },
      {
        title: "Aprender vim em 10 minutos",
        goal: "Ganhar confiança no vim editando um arquivo de teste.",
        steps: [
          "Crie /tmp/teste.txt com algumas linhas.",
          "Abra no vim.",
          "Use h/j/k/l para mover.",
          "Pressione i, digite 'olá'. Esc.",
          "Pressione dd para apagar linha. u para desfazer.",
          "Salve com :w. Saia com :q.",
        ],
        command: `# 1) Criar arquivo de teste
echo "linha 1
linha 2
linha 3
linha 4
linha 5" > /tmp/teste.txt

# 2) Abrir no vim
vim /tmp/teste.txt

# Dentro do vim:
# - Use h/j/k/l ou setas para mover
# - Pressione 'i' para entrar modo INSERT
# - Digite "Texto adicionado"
# - Pressione Esc
# - Pressione 'dd' para apagar a linha atual
# - Pressione 'u' para desfazer
# - Digite ':wq' e Enter para salvar e sair

# 3) Confirmar mudancas
cat /tmp/teste.txt`,
        verify:
          "Você conseguiu editar e salvar. Bonus: rode 'vimtutor' para um tutorial completo de 30 min.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como salvar e sair no nano?",
        answer: "Ctrl+O salva (depois Enter para confirmar nome), Ctrl+X sai.",
      },
      {
        id: 2,
        question: "Você abriu o vim por engano. Como sair sem salvar?",
        answer: "Pressione Esc (garantir modo NORMAL), digite ':q!' e Enter.",
      },
      {
        id: 3,
        question: "Como entrar no modo de edição do vim?",
        answer: "Tecla 'i' (insert). Tudo que você digitar aparece no arquivo. Esc para voltar ao modo de comandos.",
      },
      {
        id: 4,
        question: "Como editar um arquivo de sistema (precisa de root)?",
        answer: "sudo nano /etc/arquivo (ou sudo vim). Sem o sudo, não vai conseguir salvar — só ler.",
      },
      {
        id: 5,
        question: "Por que fazer backup antes de editar configs?",
        answer:
          "Configurações erradas em /etc/ssh/sshd_config, /etc/fstab podem deixar o sistema inacessível ou sem boot. Backup permite restaurar em segundos: sudo cp /etc/X /etc/X.bak.",
      },
      {
        id: 6,
        question: "Como buscar uma palavra no vim?",
        answer: "/palavra Enter. Depois 'n' próximo match, 'N' anterior. Buscar para trás: ?palavra.",
      },
    ],
    references: [
      { title: "Vim cheat sheet", url: "https://vim.rtorr.com/" },
      { title: "Manual do nano", url: "https://www.nano-editor.org/dist/latest/cheatsheet.html" },
      { title: "Vim Adventures (jogo para aprender)", url: "https://vim-adventures.com/" },
    ],
  },

  {
    id: "visualizar-buscar",
    title: "Visualizar e Buscar Conteúdo de Arquivos",
    icon: "🔍",
    category: "Terminal e Arquivos",
    description: "cat, less, head, tail, grep — ler arquivos sem editor, e buscar texto dentro deles.",
    objectives: [
      "Ler arquivos pequenos e grandes eficientemente",
      "Acompanhar logs ao vivo com tail -f",
      "Dominar grep (e suas variações grep -i, grep -r, grep -v)",
      "Combinar com pipes para análise rápida",
    ],
    content: [
      "Antes de editar, você precisa LER. Quatro comandos cobrem 99% dos casos:\n• cat — despeja tudo na tela. Ótimo para arquivos pequenos.\n• less — abre arquivo navegável (setas, page up/down, /busca, q sai). Para arquivos grandes.\n• head — primeiras linhas (default 10).\n• tail — últimas linhas (default 10). Com -f acompanha em tempo real (essencial para logs).",
      "cat — concatenate. Joga conteúdo na saída padrão. Use para arquivos curtos:\n\ncat /etc/os-release         leitura simples\ncat arq1 arq2 > combinado   junta dois arquivos\ncat -n arquivo              numera linhas\ncat -A arquivo              mostra caracteres invisíveis (CR, espaços, tabs)\n\nNUNCA cate arquivo grande (10+ MB) — o terminal trava rolando milhares de linhas.",
      "less — para arquivos grandes:\n\nless /var/log/syslog\n\nDentro do less:\n• Setas / Page Up / Page Down — navegar\n• g — início, G — fim\n• /palavra — buscar (Enter, depois n próximo, N anterior)\n• &palavra — só mostrar linhas que contêm palavra\n• q — sair\n• -N — toggle número de linhas (LessKey)\n\nLess é tão bom que MAN usa less internamente.",
      "head e tail — primeiras / últimas linhas:\n\nhead arquivo                primeiras 10\nhead -20 arquivo            primeiras 20\nhead -c 100 arquivo         primeiros 100 bytes\n\ntail arquivo                últimas 10\ntail -50 arquivo            últimas 50\ntail -f /var/log/syslog     ACOMPANHA EM TEMPO REAL (Ctrl+C sai)\ntail -F arquivo             igual mas continua se arquivo for recriado (rotação de log)\n\n'tail -f' é o canivete suíço para debug: rode em um terminal e vá vendo o que acontece em tempo real.",
      "grep — busca padrões em arquivos. O comando MAIS USADO no Linux por administradores. Sintaxe básica:\n\ngrep PADRÃO ARQUIVO\n\nExemplos:\ngrep error /var/log/syslog            linhas com 'error'\ngrep -i error /var/log/syslog         case-insensitive\ngrep -n error arquivo                 mostra número da linha\ngrep -v error arquivo                 INVERTIDO (linhas SEM error)\ngrep -c error arquivo                 só conta\ngrep -r error /etc/                   recursivo (busca em todos arquivos da pasta)\ngrep -A 3 -B 1 error arquivo          3 linhas DEPOIS, 1 ANTES de cada match\ngrep -E 'error|warning' arquivo       extended regex (| = OU)",
      "Combinar com pipes (|) torna o grep ainda mais poderoso:\n\nps aux | grep firefox                 procurar processo\ndmesg | grep -i usb                   ver mensagens kernel sobre USB\nhistory | grep apt                    o que você já fez com apt\nls -la | grep '^d'                    só linhas que começam com d (= diretórios)\ndf -h | grep -v tmpfs                 ignora linhas tmpfs\n\nCom curingas: grep -r 'function login' /var/www/ — busca uma função em todo o site.",
      "Variações úteis do grep:\n• fgrep / grep -F — busca literal (não interpreta regex). Mais rápido. Útil para padrões com . [ ] ( ) * etc.\n• egrep / grep -E — extended regex (suporta | + ? () sem precisar de escape).\n• rgrep — recursivo direto (= grep -r).\n• ripgrep (rg) — substituto moderno do grep, MUITO mais rápido. Instale: 'sudo apt install ripgrep'. Sintaxe igual: 'rg error /var/log/'. Pula automaticamente .git/, node_modules/, binários.",
      "Outros comandos úteis para inspecionar arquivos:\n• wc — word count: 'wc -l arquivo' conta linhas, 'wc -w' palavras, 'wc -c' bytes.\n• sort — ordena: 'sort -u arquivo' (único). 'sort -n' numérico. 'sort -r' reverso.\n• uniq — remove duplicatas adjacentes (use depois de sort): 'sort arquivo | uniq -c | sort -rn'.\n• cut — extrai colunas: 'cut -d',' -f1 arquivo.csv' pega primeira coluna do CSV.\n• awk — mini-linguagem para processar texto: 'awk \\${print $1}' /etc/passwd' pega primeiro campo.",
    ],
    commands: [
      {
        command: "cat",
        description: "Joga arquivo na tela.",
        example: "cat /etc/os-release",
        flags: [
          { flag: "-n", description: "Numerar linhas" },
          { flag: "-A", description: "Mostrar caracteres invisíveis" },
        ],
      },
      {
        command: "less",
        description: "Visualizador navegável. Ótimo para arquivos grandes.",
        example: "less /var/log/syslog",
        flags: [
          { flag: "-N", description: "Mostrar números de linha" },
          { flag: "-S", description: "Não quebrar linhas longas (rola horizontalmente)" },
          { flag: "+F", description: "Modo follow (igual tail -f, mas dentro do less)" },
        ],
      },
      {
        command: "head",
        description: "Primeiras linhas.",
        example: "head -20 /var/log/syslog",
        flags: [
          { flag: "-n N", description: "Primeiras N linhas" },
          { flag: "-c N", description: "Primeiros N bytes" },
        ],
      },
      {
        command: "tail",
        description: "Últimas linhas. Com -f, acompanha em tempo real.",
        example: "tail -f /var/log/syslog",
        flags: [
          { flag: "-n N", description: "Últimas N linhas" },
          { flag: "-f", description: "Follow (atualiza ao vivo)" },
          { flag: "-F", description: "Follow + reabre se arquivo for recriado" },
        ],
      },
      {
        command: "grep",
        description: "Busca padrões em arquivos. Comando mais usado no Linux.",
        example: "grep -rn 'erro' /var/log/",
        flags: [
          { flag: "-i", description: "Case-insensitive" },
          { flag: "-r", description: "Recursivo (em pastas)" },
          { flag: "-n", description: "Mostra número da linha" },
          { flag: "-v", description: "Inverte (linhas SEM o padrão)" },
          { flag: "-c", description: "Só conta matches" },
          { flag: "-l", description: "Só nomes dos arquivos" },
          { flag: "-A 3", description: "3 linhas APÓS o match" },
          { flag: "-B 3", description: "3 linhas ANTES" },
          { flag: "-E", description: "Extended regex (|, +, ?, () sem escape)" },
        ],
      },
      {
        command: "wc",
        description: "Word Count — conta linhas, palavras, caracteres.",
        example: "wc -l /etc/passwd",
        flags: [
          { flag: "-l", description: "Linhas" },
          { flag: "-w", description: "Palavras" },
          { flag: "-c", description: "Bytes" },
          { flag: "-m", description: "Caracteres (multibyte)" },
        ],
      },
      {
        command: "sort",
        description: "Ordena linhas.",
        example: "sort -u arquivo.txt",
        flags: [
          { flag: "-n", description: "Numérico (1, 2, 10 em vez de 1, 10, 2)" },
          { flag: "-r", description: "Reverso" },
          { flag: "-u", description: "Único (remove duplicadas)" },
          { flag: "-h", description: "Human readable (1K, 2M, 3G)" },
        ],
      },
      {
        command: "uniq",
        description: "Remove duplicadas ADJACENTES. Use depois de sort.",
        example: "sort arquivo | uniq -c",
        flags: [
          { flag: "-c", description: "Conta cada um" },
          { flag: "-d", description: "Só duplicadas" },
          { flag: "-u", description: "Só únicas" },
        ],
      },
      {
        command: "cut",
        description: "Extrai colunas/campos.",
        example: "cut -d':' -f1 /etc/passwd",
        flags: [
          { flag: "-d X", description: "Delimitador (default tab)" },
          { flag: "-f N", description: "Campo N (1, 2, 3...)" },
          { flag: "-c N-M", description: "Caracteres N a M" },
        ],
      },
    ],
    tips: [
      {
        type: "info",
        title: "Para logs gigantes, use less em vez de cat",
        content:
          "'cat /var/log/syslog' pode ter 100 MB e travar seu terminal. 'less /var/log/syslog' abre navegavelmente, sem carregar tudo na memória. Sempre prefira less para arquivos > 1 MB.",
      },
      {
        type: "success",
        title: "Instale ripgrep (rg) — o grep moderno",
        content:
          "'sudo apt install ripgrep' depois 'rg PADRAO'. É 5-10x mais rápido que grep, ignora .git/, node_modules/, binários por padrão. Sintaxe quase idêntica. Você não volta atrás.",
      },
    ],
    practiceLabs: [
      {
        title: "Investigar últimos boots e erros do sistema",
        goal: "Aprender a usar tail, grep e less para análise de logs reais.",
        steps: [
          "Veja as últimas 20 linhas do syslog.",
          "Procure por mensagens de erro nas últimas 1000 linhas.",
          "Conte quantos erros apareceram hoje.",
          "Acompanhe o syslog em tempo real (Ctrl+C para sair).",
        ],
        command: `# 1) Ultimas 20 linhas
sudo tail -20 /var/log/syslog

# 2) Erros nas ultimas 1000 linhas
sudo tail -1000 /var/log/syslog | grep -i error

# 3) Quantos
sudo tail -1000 /var/log/syslog | grep -ic error

# 4) Em tempo real (faca uma acao - ex plugue um USB - e veja aparecer)
sudo tail -f /var/log/syslog

# Ctrl+C para sair`,
        verify:
          "Você deve ver linhas de log datadas e timestamps. Se aparecem erros (warning, error, fail) — investigue cada um. Em sistema saudável: poucos.",
      },
      {
        title: "Análise rápida de /etc/passwd",
        goal: "Combinar grep, cut, sort, wc para extrair informações.",
        steps: [
          "Conte quantos usuários existem no sistema.",
          "Liste só os nomes (primeira coluna).",
          "Filtre só usuários que têm shell de login (não /usr/sbin/nologin).",
          "Ordene em ordem alfabética.",
        ],
        command: `# Total de usuarios
wc -l < /etc/passwd

# Lista de nomes
cut -d':' -f1 /etc/passwd

# So usuarios com shell de login real
grep -v 'nologin\\|false' /etc/passwd | cut -d':' -f1

# Mesma lista ordenada
grep -v 'nologin\\|false' /etc/passwd | cut -d':' -f1 | sort`,
        verify:
          "Você deve ver lista de usuários do seu sistema, com 'root' e seu usuário entre eles. Total geralmente entre 30-50 (incluindo usuários de sistema como www-data, sshd).",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a diferença entre cat e less?",
        answer:
          "cat joga TUDO na tela de uma vez (trava com arquivo grande). less abre navegavelmente — você usa setas/page up/down e q para sair. Sempre prefira less para arquivos > 1 MB.",
      },
      {
        id: 2,
        question: "Como acompanhar um log em tempo real?",
        answer: "tail -f /caminho/do/log — atualiza ao vivo. Ctrl+C para parar.",
      },
      {
        id: 3,
        question: "Como buscar 'error' em todos os arquivos de /var/log de uma vez?",
        answer: "sudo grep -ri error /var/log/ — o -r recursivo, -i case-insensitive.",
      },
      {
        id: 4,
        question: "Como contar quantos usuários têm /bin/bash como shell em /etc/passwd?",
        answer: "grep -c '/bin/bash' /etc/passwd — o -c conta matches.",
      },
      {
        id: 5,
        question: "Como ver as últimas 50 linhas de um arquivo?",
        answer: "tail -50 arquivo (ou 'tail -n 50 arquivo').",
      },
      {
        id: 6,
        question: "Como extrair só a primeira coluna de um CSV?",
        answer: "cut -d',' -f1 arquivo.csv (-d = delimitador, -f = campo).",
      },
    ],
    references: [
      { title: "Manual GNU grep", url: "https://www.gnu.org/software/grep/manual/" },
      { title: "ripgrep no GitHub", url: "https://github.com/BurntSushi/ripgrep" },
      { title: "awk introdução prática", url: "https://www.gnu.org/software/gawk/manual/" },
    ],
  },
];
