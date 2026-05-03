import { Module } from "@/types/module";

export const edicaoBusca: Module[] = [
  {
    id: "editor-texto",
    title: "Editores de Texto — nano, vim e amigos",
    icon: "✏️",
    category: "Terminal e Arquivos",
    description:
      "Como editar arquivos de configuração no terminal sem aperto: nano para o dia a dia, vim para a vida toda e alternativas modernas como micro e neovim.",
    objectives: [
      "Entender por que editar texto no terminal é uma habilidade obrigatória no Linux",
      "Usar o nano com confiança para edições rápidas em arquivos de configuração",
      "Sobreviver no vim — entrar, navegar, editar, salvar e sair sem pânico",
      "Personalizar nano e vim com arquivos de configuração que tornam o trabalho confortável",
      "Diferenciar quando usar editor interativo, redirecionamento simples (echo >>) ou edição em lote (sed -i)",
      "Conhecer alternativas modernas (micro, neovim, helix) e saber quando vale a pena instalar",
    ],
    content: [
      `Pense em um editor de texto do terminal como o canivete suíço de quem usa Linux. No mundo gráfico você tem o Gedit, o Kate, o VS Code, todos com botõezinhos bonitinhos e mouse. Mas no momento em que você abre um terminal — porque o ambiente gráfico travou, porque está conectado por SSH a um servidor remoto, ou porque vai mexer em um arquivo do sistema — não tem botão nenhum. Tem uma tela preta com letras brancas, e você precisa digitar tudo. O editor do terminal é o que transforma essa tela hostil em um espaço onde você consegue trabalhar.`,

      `Por que isso existe e por que importa tanto? Quase tudo no Debian é configurado em arquivos de texto puro. O serviço SSH é configurado em \`/etc/ssh/sshd_config\`. O comportamento do seu shell vem de \`~/.bashrc\`. Os repositórios de software ficam em \`/etc/apt/sources.list\`. As tarefas agendadas ficam em \`/etc/crontab\`. Não existe um "painel de controle" central: a configuração do sistema é distribuída em centenas de arquivos texto, e mexer com Linux é, em boa parte, abrir esses arquivos, ler, mudar uma linha, salvar e reiniciar um serviço. Sem um editor confiável, você simplesmente não administra o sistema.`,

      `Antes de mergulhar nos editores, vale firmar três jargões que vão aparecer o tempo todo. **Modal** quer dizer que o editor tem "modos" diferentes — em um modo as teclas digitam letras, em outro modo elas executam comandos. O vim é modal; o nano é "modeless" (sempre aceita digitação). **Atalho** é uma combinação de teclas para uma ação rápida, geralmente envolvendo Ctrl ou Alt. No mundo do terminal, o símbolo \`^\` que você vê no rodapé do nano significa Ctrl: \`^X\` é Ctrl+X. **Buffer** é a memória onde o editor segura seu texto enquanto você edita; ele só vira arquivo de verdade quando você manda salvar.`,

      `O nano é o editor amigável que já vem instalado no Debian desde sempre. Ele foi pensado para ser igual aos editores que aparecem dentro de programas tipo o Pine (cliente de email antigo): você abre, digita, usa Ctrl+letra para comandos, e os atalhos ficam visíveis no rodapé. Não tem modo, não tem mistério, não tem "como saio disso" — Ctrl+X sai, e ponto. Para edições rápidas em arquivos de configuração, o nano é excelente. Quem te disser que usar nano é "coisa de iniciante" está sendo esnobe: até administradores experientes abrem o nano para mudar uma linha em \`/etc/hosts\` porque não vale a pena ligar o vim para isso.`,

      `O vim é uma criatura diferente. Ele é a versão melhorada do \`vi\`, um editor dos anos 70 desenhado para terminais lentos onde digitar pouco economizava tempo. O resultado é um editor onde quase toda tecla do teclado é um comando, e você só digita texto quando explicitamente pede. Isso assusta qualquer iniciante: você abre o vim achando que é só digitar e tudo dá errado, as letras viram comandos, o texto não aparece, e quando você desiste descobre que não consegue nem sair. A piada clássica da internet é "como você saiu do vim? — comprei outro computador". Mas depois que você aprende cinco comandos básicos, o vim deixa de ser monstro e vira parceiro: ele está em qualquer servidor Linux/Unix do mundo, sem exceção.`,

      `A grande sacada do vim são os modos. No **modo NORMAL**, que é onde você cai quando abre o editor, as teclas executam comandos: \`h j k l\` movem o cursor (esquerda, baixo, cima, direita), \`dd\` apaga uma linha, \`u\` desfaz. No **modo INSERT**, alcançado pressionando \`i\`, o vim vira um editor "normal": você digita e o texto aparece. A tecla \`Esc\` sempre te devolve para o NORMAL. No **modo VISUAL** (\`v\`) você seleciona texto. No **modo COMMAND** (entrando com \`:\`) você digita comandos no rodapé, como \`:w\` para salvar e \`:q\` para sair. Saber em qual modo você está é o segredo de não enlouquecer; quando se perder, aperte \`Esc\` duas vezes — você estará no NORMAL com certeza.`,

      `Muita gente confunde \`vi\` com \`vim\`. Em servidores antigos, especialmente Red Hat e BSD, o comando \`vi\` ainda é o editor original (limitado, sem cores, sem desfazer múltiplo). No Debian moderno, \`vi\` é um link para \`vim-tiny\`, uma versão enxuta do vim. O vim "completo" precisa ser instalado separadamente com \`sudo apt install vim\`, e é dele que você quer: tem syntax highlighting, undo ilimitado, suporte a plugins. Outra confusão clássica: o \`Ctrl+S\` que congela o terminal. Em alguns terminais antigos, Ctrl+S manda "pause", e o terminal fica mudo até você apertar Ctrl+Q. Se travou, é isso — Ctrl+Q libera.`,

      `Existe um terceiro caminho que poucos exploram: editar arquivos sem editor nenhum. Para acrescentar uma linha no fim de um arquivo, o redirecionamento \`>>\` resolve: \`echo "PATH=$PATH:~/bin" >> ~/.bashrc\`. Para fazer uma substituição automática (trocar "yes" por "no" em uma linha específica), o \`sed -i\` funciona em um piscar: \`sudo sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config\`. Em scripts de automação e em setups feitos com Ansible/Puppet, você quase nunca abre um editor — escreve a alteração programática. Mas para investigar e ajustar manualmente, o editor continua sendo a ferramenta principal.`,

      `Dois erros são clássicos e merecem atenção dobrada. O primeiro: tentar salvar um arquivo do sistema sem privilégio de root. Você abre \`nano /etc/hosts\`, edita, aperta Ctrl+O, e o nano reclama "Permission denied". O culpado não é o nano — é que você abriu sem \`sudo\`. Sempre que for editar algo dentro de \`/etc/\`, \`/var/\`, \`/usr/\`, comece com \`sudo nano\` ou \`sudo vim\`. O segundo erro: quebrar um arquivo crítico sem backup. Editar mal o \`/etc/fstab\`, o \`/etc/ssh/sshd_config\` ou o \`/etc/network/interfaces\` pode deixar o sistema sem boot, sem rede ou sem acesso remoto. A regra de ouro é: antes de mexer, copie. \`sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak\` custa um segundo e te salva horas.`,

      `Onde isso aparece no dia a dia? Em qualquer ajuste fino do sistema. Você quer mudar a porta do SSH? Edita \`/etc/ssh/sshd_config\`. Quer adicionar um alias permanente no shell? Edita \`~/.bashrc\`. Quer fazer um script rápido? Cria um arquivo com o vim. Quer comentar uma linha do crontab para suspender uma tarefa? Abre o crontab e coloca um \`#\` na frente. Ao terminar este capítulo, você vai conseguir abrir qualquer arquivo do sistema, navegar dentro dele, fazer alterações conscientes (ou desfazê-las), salvar com segurança e sair limpo — tanto no nano quanto no vim, e até em alternativas modernas como o micro, que mistura o conforto do nano com a potência do vim.`,
    ],
    commands: [
      {
        command: "nano",
        description: "Editor amigável e modeless. Atalhos visíveis no rodapé (^ é Ctrl).",
        example: "sudo nano /etc/hosts",
        output: `  GNU nano 7.2                   /etc/hosts
127.0.0.1   localhost
127.0.1.1   debian
192.168.1.100   meu-servidor
^G Ajuda  ^O Salvar  ^W Buscar  ^X Sair`,
        flags: [
          { flag: "+N", description: "Abrir com o cursor já na linha N (ex.: nano +42 arquivo)" },
          { flag: "-l", description: "Mostrar números de linha à esquerda" },
          { flag: "-w", description: "Não quebrar linhas longas automaticamente (importante em configs)" },
          { flag: "-S", description: "Rolagem suave (uma linha por vez em vez de meia tela)" },
          { flag: "-B", description: "Faz backup do arquivo original com sufixo ~ ao salvar" },
          { flag: "-Y sintaxe", description: "Aplica realce de sintaxe específico (ex.: -Y sh)" },
        ],
      },
      {
        command: "vim",
        description: "Editor modal lendário. Esc volta ao modo NORMAL; :q! sai sem salvar.",
        example: "vim ~/.bashrc",
        output: `# ~/.bashrc: executed by bash(1) for non-login shells.
case $- in
    *i*) ;;
      *) return;;
esac
~
~
"~/.bashrc" 120L, 3526B`,
        flags: [
          { flag: "+N", description: "Abrir com o cursor na linha N" },
          { flag: "-R", description: "Modo somente leitura (não dá para salvar acidentalmente)" },
          { flag: "-d arq1 arq2", description: "Modo diff: mostra dois arquivos lado a lado com cores" },
          { flag: "-O arq1 arq2", description: "Abre dois arquivos em janelas verticais" },
          { flag: "-u NONE", description: "Ignora o ~/.vimrc — útil para testar sem suas configs" },
          { flag: "+'<comando>'", description: "Executa um comando vim ao abrir (ex.: vim +'set nu' arq)" },
        ],
      },
      {
        command: "vimtutor",
        description: "Tutorial interativo do vim em texto. ~30 minutos e você sai sabendo o suficiente.",
        example: "vimtutor pt",
        output: `=============================================================
=    B e m   v i n d o   a o   T u t o r i a l   d o  V I M
=============================================================
Lição 1.1:  MOVENDO O CURSOR

** Para mover o cursor, pressione as teclas h,j,k,l como mostrado. **`,
      },
      {
        command: "nano --version",
        description: "Confere a versão do nano instalado.",
        example: "nano --version",
        output: ` GNU nano, version 7.2
 (C) 1999-2011, 2013-2023 Free Software Foundation, Inc.
 Compiled options: --enable-utf8`,
      },
      {
        command: "echo >> arquivo",
        description: "Acrescenta uma linha ao final de um arquivo sem abrir editor.",
        example: 'echo "alias ll=\'ls -la\'" >> ~/.bashrc',
        output: "(sem saída — o conteúdo é gravado silenciosamente; verifique com 'tail -1 ~/.bashrc')",
        flags: [
          { flag: ">> arquivo", description: "Anexa (append) ao arquivo. Cuidado: > sozinho SOBRESCREVE tudo" },
          { flag: "-e", description: "Interpreta sequências como \\n (quebra de linha) e \\t (tab)" },
        ],
      },
      {
        command: "sed -i",
        description: "Edita arquivo no lugar (in-place), perfeito para substituições programáticas.",
        example: "sudo sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config",
        output: "(silencioso quando dá certo; confira a alteração com 'grep PermitRootLogin /etc/ssh/sshd_config')",
        flags: [
          { flag: "-i", description: "In-place: salva direto no arquivo" },
          { flag: "-i.bak", description: "In-place mas guarda backup como arquivo.bak" },
          { flag: "-E", description: "Extended regex (suporta + ? () | sem escapar)" },
          { flag: "-n", description: "Não imprime nada por padrão; use junto com 'p' para imprimir só o que casar" },
        ],
      },
      {
        command: "diff",
        description: "Compara dois arquivos linha a linha e mostra as diferenças.",
        example: "diff -u /etc/ssh/sshd_config.bak /etc/ssh/sshd_config",
        output: `--- /etc/ssh/sshd_config.bak  2024-01-10 12:00:00
+++ /etc/ssh/sshd_config       2024-01-10 12:05:00
@@ -32,7 +32,7 @@
-PermitRootLogin yes
+PermitRootLogin no`,
        flags: [
          { flag: "-u", description: "Formato unified (o mesmo do git diff)" },
          { flag: "-r", description: "Recursivo: compara dois diretórios inteiros" },
          { flag: "-q", description: "Modo quiet: só diz se diferem, não mostra o quê" },
          { flag: "-y", description: "Lado a lado em duas colunas" },
        ],
      },
      {
        command: "cp arquivo arquivo.bak",
        description: "O backup mais simples do mundo. Rotina obrigatória antes de mexer em config crítica.",
        example: "sudo cp /etc/fstab /etc/fstab.bak.$(date +%F)",
        output: "(silencioso; confirme com 'ls -l /etc/fstab*')",
      },
      {
        command: "micro",
        description: "Editor moderno com atalhos estilo VS Code (Ctrl+S salva, Ctrl+Z desfaz). Precisa instalar.",
        example: "sudo apt install micro && micro arquivo.txt",
        output: "(abre uma interface colorida com menu inferior tipo nano, mas com atalhos modernos)",
      },
      {
        command: "nvim (neovim)",
        description: "Sucessor moderno do vim, compatível com a sintaxe do vim mas com plugins em Lua.",
        example: "sudo apt install neovim && nvim arquivo",
        output: "(idêntico ao vim na primeira impressão; ganha quando você instala plugins de LSP, telescope, etc.)",
      },
      {
        command: "EDITOR=nano visudo",
        description: "Edita /etc/sudoers com validação de sintaxe. Define o editor temporariamente para essa sessão.",
        example: "sudo EDITOR=nano visudo",
        output: "(abre o sudoers no nano; ao salvar, o visudo recusa o save se você quebrar a sintaxe)",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Backup ANTES de mexer em qualquer config crítica",
        content:
          "Antes de tocar em /etc/ssh/sshd_config, /etc/fstab ou /etc/network/interfaces, faça 'sudo cp arquivo arquivo.bak'. Custa um segundo e pode salvar uma reinstalação. Se quebrar, é só copiar de volta.",
      },
      {
        type: "info",
        title: "Como sair do vim (a pergunta mais googleada da internet)",
        content:
          "A receita infalível: aperte Esc para garantir que está no modo NORMAL, digite ':q!' (sem aspas) e pressione Enter. Isso sai descartando qualquer alteração. Para salvar e sair, use ':wq'. Decore esses dois — eles te tiram de qualquer apuro.",
      },
      {
        type: "success",
        title: "Rode o vimtutor uma vez na vida",
        content:
          "Digite 'vimtutor pt' no terminal. São 7 lições curtas que cobrem 95% do que você usa no dia a dia. Em meia hora você sai sabendo navegar, editar, salvar, buscar e desfazer — sem decorar tutorial nenhum.",
      },
      {
        type: "danger",
        title: "Nunca edite /etc/sudoers com nano direto",
        content:
          "Use sempre 'sudo visudo' (que por padrão abre no editor configurado em $EDITOR). O visudo valida a sintaxe ao salvar. Se você quebrar o sudoers manualmente, perde o sudo e a recuperação envolve modo de recuperação ou liveCD.",
      },
      {
        type: "info",
        title: "Defina seu editor padrão no sistema",
        content:
          "Adicione 'export EDITOR=nano' (ou vim, ou micro) no seu ~/.bashrc. Vários comandos como 'crontab -e', 'visudo' e 'git commit' respeitam essa variável e abrem no editor que você escolheu.",
      },
      {
        type: "success",
        title: "No nano, ative quebra suave e números de linha permanentemente",
        content:
          "Crie ~/.nanorc com as linhas 'set linenumbers', 'set softwrap' e 'set tabsize 4'. Toda vez que abrir o nano, esses ajustes valem — sem precisar passar -l na linha de comando.",
      },
    ],
    practiceLabs: [
      {
        title: "Editar /etc/hosts adicionando uma entrada (com backup e validação)",
        goal: "Praticar o ciclo completo de edição segura de arquivo de sistema: backup, edição, salvamento e teste.",
        steps: [
          "Faça backup do /etc/hosts copiando para /etc/hosts.bak.",
          "Abra o /etc/hosts com 'sudo nano /etc/hosts'.",
          "Adicione no final a linha '192.168.1.100   meu-servidor'.",
          "Salve com Ctrl+O (confirme com Enter) e saia com Ctrl+X.",
          "Confirme a alteração com 'cat /etc/hosts'.",
          "Teste a resolução do nome com 'getent hosts meu-servidor' (deve retornar o IP).",
          "Se algo deu errado, restaure com 'sudo cp /etc/hosts.bak /etc/hosts'.",
        ],
        command: `sudo cp /etc/hosts /etc/hosts.bak
sudo nano /etc/hosts
# adicione: 192.168.1.100   meu-servidor
# Ctrl+O, Enter, Ctrl+X
cat /etc/hosts
getent hosts meu-servidor`,
        expected: "A última saída deve mostrar '192.168.1.100   meu-servidor', confirmando que a resolução de nome funcionou.",
        verify:
          "Rode 'ping -c 1 meu-servidor'. Mesmo que dê 'host inalcançável' (o IP é fictício), o nome deve resolver — isso prova que a edição funcionou.",
      },
      {
        title: "Sobreviver no vim em 10 minutos",
        goal: "Ganhar a confiança mínima para editar qualquer arquivo no vim sem entrar em pânico.",
        steps: [
          "Crie um arquivo de teste com 5 linhas: 'printf \"linha1\\nlinha2\\nlinha3\\nlinha4\\nlinha5\\n\" > /tmp/teste.txt'.",
          "Abra com 'vim /tmp/teste.txt'.",
          "Use h/j/k/l (ou setas) para mover o cursor entre as linhas.",
          "Pressione 'i' para entrar em INSERT, digite 'inserido' e pressione Esc.",
          "Pressione 'dd' para apagar a linha atual e 'u' para desfazer a remoção.",
          "Busque por 'linha3' digitando '/linha3' e Enter; pressione 'n' para próximo match.",
          "Salve e saia com ':wq' e Enter.",
          "Confirme as alterações com 'cat /tmp/teste.txt'.",
        ],
        command: `printf "linha1\\nlinha2\\nlinha3\\nlinha4\\nlinha5\\n" > /tmp/teste.txt
vim /tmp/teste.txt
# Dentro do vim:
#   h j k l ou setas para mover
#   i = entra em INSERT, digite, Esc volta para NORMAL
#   dd apaga linha; u desfaz; Ctrl+R refaz
#   /palavra Enter, depois n / N para próximo / anterior
#   :wq Enter para salvar e sair
cat /tmp/teste.txt`,
        expected: "Você consegue editar, buscar, desfazer e salvar sem fechar o terminal frustrado.",
        verify: "Bônus: rode 'vimtutor pt' e complete as 7 lições em uma única sentada.",
      },
      {
        title: "Editar com sed sem abrir editor",
        goal: "Aprender a fazer substituições rápidas em arquivos de configuração via linha de comando, com backup automático.",
        steps: [
          "Crie um arquivo de teste: 'echo \"DEBUG=true\" > /tmp/app.conf'.",
          "Use sed -i.bak para trocar 'true' por 'false', preservando o original como /tmp/app.conf.bak.",
          "Confirme a alteração com cat e o backup com ls.",
          "Compare os dois arquivos com diff.",
        ],
        command: `echo "DEBUG=true" > /tmp/app.conf
sed -i.bak 's/true/false/' /tmp/app.conf
cat /tmp/app.conf
ls /tmp/app.conf*
diff /tmp/app.conf.bak /tmp/app.conf`,
        expected: "O cat mostra 'DEBUG=false', o ls lista o arquivo e o backup, e o diff mostra a única linha diferente.",
        verify: "Se o sed acusar erro de sintaxe, revise as aspas — sed pede single quotes para evitar expansão do shell.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como salvar e sair no nano?",
        hint: "Olhe o rodapé do nano — todos os atalhos importantes estão lá, com ^ representando Ctrl.",
        answer:
          "Ctrl+O (Output) salva — o nano pergunta o nome do arquivo, basta pressionar Enter para confirmar. Em seguida Ctrl+X (eXit) fecha o editor. Se você fizer Ctrl+X com alterações não salvas, o nano pergunta se quer salvar antes — responda Y para salvar ou N para descartar.",
      },
      {
        id: 2,
        question: "Você abriu o vim por engano e digitou letras aleatórias. Como sair sem salvar nada?",
        hint: "Você precisa primeiro garantir que está no modo NORMAL, depois usar um comando do tipo ':' para descartar.",
        answer:
          "Pressione Esc (uma ou duas vezes para garantir o modo NORMAL), depois digite ':q!' e pressione Enter. O ':' entra no modo COMMAND, 'q' significa quit e o '!' força o descarte de qualquer alteração não salva. Sem o '!', o vim recusa sair se houver mudanças.",
      },
      {
        id: 3,
        question: "Como entrar no modo de digitação do vim e voltar para o modo de comandos?",
        hint: "Existe uma tecla para começar a inserir e outra para voltar ao modo normal — você verá 'INSERT' aparecer no rodapé quando estiver editando.",
        answer:
          "A tecla 'i' (insert) entra no modo INSERT — a partir daí tudo que você digitar vira texto no buffer. Para voltar ao modo NORMAL (onde teclas viram comandos), pressione Esc. Variantes úteis: 'a' insere depois do cursor, 'o' abre uma nova linha abaixo e já entra em INSERT, 'I' começa a inserir no início da linha.",
      },
      {
        id: 4,
        question: "Você precisa editar /etc/ssh/sshd_config e o nano abre o arquivo mas não salva. Por quê?",
        hint: "Quem é o dono do arquivo? Sob quais permissões o seu usuário consegue gravar nele?",
        answer:
          "O arquivo pertence ao root e seu usuário não tem permissão de escrita. Você precisa abrir como root usando 'sudo nano /etc/ssh/sshd_config'. Sem sudo, o nano até abre (porque a leitura é permitida), mas falha ao gravar. A mesma lógica vale para vim, micro e qualquer outro editor.",
      },
      {
        id: 5,
        question: "Por que é tão importante fazer backup antes de editar arquivos críticos como /etc/fstab?",
        hint: "Pense no que acontece com o sistema se uma linha errada de fstab fizer o boot falhar.",
        answer:
          "Configs como fstab, sshd_config e network/interfaces controlam capacidades essenciais: montagem de discos, acesso SSH e rede. Um erro de sintaxe pode impedir o boot, derrubar a rede ou trancar o acesso remoto. Um backup ('sudo cp arquivo arquivo.bak') permite restaurar em segundos: 'sudo cp arquivo.bak arquivo'. Sem backup, a recuperação envolve modo de manutenção, liveCD ou reinstalação.",
      },
      {
        id: 6,
        question: "Como buscar a palavra 'PasswordAuthentication' dentro do vim?",
        hint: "Existe uma tecla específica que abre uma busca; depois você digita o termo e navega entre os resultados.",
        answer:
          "No modo NORMAL, digite '/PasswordAuthentication' e pressione Enter. O cursor pula para o primeiro match. Use 'n' para o próximo e 'N' para o anterior. Para buscar para trás (do cursor em direção ao topo), use '?' em vez de '/'. Para destacar todas as ocorrências, ative ':set hlsearch'.",
      },
      {
        id: 7,
        question: "Qual é a diferença entre editar um arquivo com 'sed -i' e abrir com nano/vim?",
        hint: "Pense em automação versus edição interativa, e em quem decide o que muda.",
        answer:
          "Com nano/vim você abre, lê, decide visualmente o que mudar e salva — é interativo. Com 'sed -i' você manda uma transformação automática (ex.: 'troque yes por no na linha que tem PermitRootLogin') sem abrir nada. O sed é ideal para scripts e ajustes em massa; o editor é melhor quando você precisa olhar o contexto antes de decidir. Em produção, costuma-se usar sed em scripts e revisar com diff depois.",
      },
      {
        id: 8,
        question: "Você quer que todo crontab -e abra no nano em vez do vim. Como fazer?",
        hint: "Existe uma variável de ambiente que muitos comandos consultam para descobrir qual editor usar.",
        answer:
          "Defina a variável EDITOR no seu ~/.bashrc com a linha 'export EDITOR=nano' e recarregue com 'source ~/.bashrc'. Comandos como crontab -e, visudo, git commit (sem -m) e systemctl edit consultam essa variável. Para fixar em todo o sistema, edite /etc/environment e adicione 'EDITOR=nano' (sem 'export').",
      },
    ],
    references: [
      { title: "Vim cheat sheet (interativo)", url: "https://vim.rtorr.com/" },
      { title: "GNU nano — manual oficial", url: "https://www.nano-editor.org/dist/latest/nano.html" },
      { title: "Debian Wiki — Editors", url: "https://wiki.debian.org/Editors" },
      { title: "Vim Adventures (jogo para aprender movimentos)", url: "https://vim-adventures.com/" },
      { title: "micro editor — site oficial", url: "https://micro-editor.github.io/" },
    ],
  },

  {
    id: "visualizar-buscar",
    title: "Visualizar, Filtrar e Buscar Conteúdo de Arquivos",
    icon: "🔍",
    category: "Terminal e Arquivos",
    description:
      "cat, less, head, tail, grep, sed, awk, cut, sort, uniq, wc — o conjunto que transforma o terminal em uma máquina de processar texto e investigar logs.",
    objectives: [
      "Ler arquivos pequenos e grandes do jeito certo, sem travar o terminal",
      "Acompanhar logs em tempo real com tail -f e variantes",
      "Dominar o grep com suas flags principais (-i, -r, -v, -n, -A, -B, -E)",
      "Usar redirecionamentos (>, >>, <) e pipes (|) para encadear comandos",
      "Combinar grep, cut, sort e uniq para extrair estatísticas rápidas de arquivos",
      "Conhecer o básico de sed e awk para transformar texto em uma linha",
      "Saber quando trocar grep pelo ripgrep (rg) e por que ele é tão mais rápido",
    ],
    content: [
      `Pense no terminal como uma cozinha industrial. Os arquivos são os ingredientes brutos: logs gigantes, listas de usuários, arquivos de configuração, saídas de comandos. As ferramentas que vamos ver neste capítulo — cat, less, head, tail, grep, cut, sort, uniq, wc, sed, awk — são os utensílios. E os pipes (\`|\`) são as bancadas onde um utensílio passa o que produziu para o próximo. Um administrador Linux experiente raramente abre um arquivo grande em editor: ele encadeia três ou quatro comandos em uma linha e extrai exatamente a informação que precisa em segundos.`,

      `Por que esse conjunto existe? Porque o Unix nasceu com uma filosofia muito clara: cada programa faz uma coisa só, e faz bem; programas se comunicam por texto; tudo é um arquivo. Em vez de ter um "monstrão" que abre um log, filtra, ordena e conta, o Unix oferece pequenos comandos especializados. Você combina como quiser. A primeira vez que você roda \`cat /var/log/auth.log | grep "Failed password" | wc -l\` e descobre em meio segundo quantas tentativas de login falharam, você entende a beleza do modelo. Ele tem 50 anos e continua imbatível para análise rápida.`,

      `Antes de praticar, três conceitos firmes. **STDIN, STDOUT, STDERR**: todo programa recebe entrada padrão (teclado, normalmente), produz saída padrão (tela) e saída de erro (também tela, mas separada). O \`>\` redireciona STDOUT para um arquivo; \`>>\` anexa em vez de sobrescrever; \`2>\` redireciona apenas o STDERR; \`<\` lê STDIN de um arquivo. **Pipe (\`|\`)**: conecta o STDOUT de um comando ao STDIN do próximo. **Regex** (expressão regular): linguagem mínima para descrever padrões de texto — \`error\` casa a palavra literal, \`^error\` casa só no início da linha, \`error$\` só no fim, \`erro.\` casa "error", "errot", "erro_", o ponto é qualquer caractere.`,

      `O \`cat\` é o mais simples: despeja o conteúdo do arquivo na tela. Ele virou hábito de tantos iniciantes que existe até uma piada — o "Useless Use of Cat Award", que premia quem escreve \`cat arquivo | grep palavra\` em vez do equivalente direto \`grep palavra arquivo\`. Use \`cat\` para arquivos pequenos (até umas centenas de linhas) ou para concatenar dois arquivos: \`cat parte1 parte2 > inteiro\`. Para arquivos grandes, NÃO USE cat: você vai ver milhares de linhas passando feito raio e o terminal vai congestionar. Para esses casos, existe o \`less\`.`,

      `O \`less\` é um paginador. Em vez de despejar tudo, ele mostra uma tela por vez e te deixa navegar com setas, Page Up, Page Down, \`g\` (vai para o topo), \`G\` (fim), \`/palavra\` (busca), \`q\` (sai). Ele não carrega o arquivo inteiro na memória, então abre instantaneamente um log de 1 GB sem suar. O \`less\` é usado por baixo dos panos pelo comando \`man\` — quando você abre o manual de um comando, está navegando dentro de uma instância do less. Existe um primo chamado \`more\` que é mais antigo e limitado; o less é um trocadilho ("less is more", e menos é mais que more), e quase sempre o que você quer.`,

      `Para olhar só o começo ou o fim de um arquivo, existem \`head\` e \`tail\`. O \`head\` mostra as primeiras linhas (10 por padrão); útil para ver o cabeçalho de um CSV ou as primeiras entradas de um log do dia. O \`tail\` mostra as últimas linhas — perfeito para verificar o que aconteceu por último em um log, sem precisar abrir o arquivo inteiro. Mas a flag mais poderosa do tail é \`-f\` (follow): ele fica acompanhando o arquivo em tempo real e imprime cada nova linha conforme aparecem. Quando você quer debugar um servidor que dá erro só "às vezes", abre um terminal com \`sudo tail -f /var/log/syslog\` em uma janela e provoca o erro em outra. As linhas do erro aparecem na hora.`,

      `O \`grep\` é o rei dos filtros. Seu nome vem do editor antigo \`ed\`, do comando \`g/re/p\` (global / regular expression / print). Ele lê linhas e mostra só as que casam com o padrão. As flags principais formam um alfabeto curto que você decora rápido: \`-i\` ignora maiúsculas/minúsculas (case-insensitive); \`-r\` recursivo, busca dentro de uma pasta inteira; \`-n\` mostra o número da linha onde achou; \`-v\` inverte (mostra linhas que NÃO casam); \`-c\` conta em vez de mostrar; \`-l\` lista só os nomes dos arquivos que tiveram match; \`-A 3\` mostra 3 linhas após cada match (útil para pegar contexto de um stacktrace); \`-B 1\` mostra 1 antes; \`-E\` libera o regex extended (suporta \`|\`, \`+\`, \`?\`, \`()\` sem precisar escapar).`,

      `Os pipes deixam tudo cooperativo. \`ps aux | grep firefox\` lista todos os processos e filtra só os do firefox. \`history | grep apt\` mostra todos os comandos com apt que você já digitou. \`dmesg | grep -i usb\` traz mensagens do kernel sobre USB. \`cat /var/log/auth.log | grep "Failed password" | wc -l\` conta tentativas de login falhadas. A receita é: comece com a fonte de dados, vá filtrando com grep, fatiando com cut, organizando com sort, contando com uniq, e medindo com wc. A maioria dos "scripts de análise" que parecem complicados são, na verdade, encadeamentos desse tipo.`,

      `\`cut\`, \`sort\`, \`uniq\` e \`wc\` são os parceiros constantes do grep. \`cut\` extrai colunas: \`cut -d: -f1 /etc/passwd\` pega o primeiro campo (nome de usuário) usando \`:\` como separador. \`sort\` ordena: \`sort arquivo\` alfabético, \`sort -n\` numérico, \`sort -r\` reverso. \`uniq\` remove duplicatas adjacentes (precisa estar ordenado antes), e com \`-c\` ainda conta quantas vezes cada linha apareceu. \`wc\` conta linhas (\`-l\`), palavras (\`-w\`) ou bytes (\`-c\`). A combinação mágica \`sort | uniq -c | sort -rn\` é o "histograma" do Unix: mostra quais valores são mais frequentes, em ordem decrescente. Top 10 IPs que mais tentaram conexão SSH? \`grep "Failed password" /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -rn | head\`.`,

      `\`sed\` e \`awk\` são as duas ferramentas mais densas do conjunto, e cada uma daria um livro inteiro — mas uma ou duas operações cobrem 80% do uso. O sed (stream editor) faz substituições e remoções em fluxos: \`sed 's/foo/bar/g'\` troca todos os "foo" por "bar"; \`sed -i 's/yes/no/' arquivo\` faz isso direto no arquivo (in-place). O awk é uma mini-linguagem orientada a colunas: \`awk '{print $1}' arquivo\` imprime a primeira coluna de cada linha; \`awk -F: '{print $1, $7}' /etc/passwd\` usa \`:\` como separador e mostra usuário e shell. Quem domina sed e awk no básico desbloqueia uma camada inteira de produtividade.`,

      `Confusão comum: muita gente acha que \`grep\` busca dentro de PDFs, Word, planilhas. Não busca — grep funciona em texto puro. Para PDF, há \`pdfgrep\`. Para arquivos comprimidos, há \`zgrep\` (gzip), \`bzgrep\` (bzip2), \`xzgrep\` (xz) — funcionam igual ao grep mas descomprimem na hora. Outra confusão: regex do grep básico é diferente da regex do grep extended (-E) e da regex do Perl/Python. Símbolos como \`(\` e \`|\` precisam de escape no grep básico (\`grep '\\(foo\\|bar\\)'\`) mas funcionam direto no extended (\`grep -E '(foo|bar)'\`). Quando o regex parece "não estar funcionando", quase sempre é confusão entre versões.`,

      `Onde isso tudo aparece no dia a dia? Em literalmente todo trabalho com Linux. Investigando por que um serviço não sobe: \`journalctl -u nginx | tail -50 | grep -i error\`. Verificando quantos usuários têm shell de login: \`grep -v nologin /etc/passwd | wc -l\`. Encontrando onde uma string aparece no código fonte: \`grep -rn "função_misteriosa" /etc/\`. Vendo os 10 IPs que mais bateram no servidor SSH ontem: \`grep "Failed password" /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -rn | head\`. Quando você sai deste capítulo, você vai conseguir abrir qualquer arquivo do sistema, filtrar exatamente o que importa e responder perguntas que sem essas ferramentas demorariam horas — em segundos.`,
    ],
    commands: [
      {
        command: "cat",
        description: "Despeja o conteúdo do arquivo na saída padrão. Use só para arquivos pequenos.",
        example: "cat /etc/os-release",
        output: `PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"
NAME="Debian GNU/Linux"
VERSION_ID="12"
VERSION="12 (bookworm)"
VERSION_CODENAME=bookworm
ID=debian`,
        flags: [
          { flag: "-n", description: "Numera todas as linhas" },
          { flag: "-b", description: "Numera só as linhas não vazias" },
          { flag: "-A", description: "Mostra caracteres invisíveis (tabs viram ^I, fim de linha vira $)" },
          { flag: "-s", description: "Comprime múltiplas linhas em branco em uma só (squeeze)" },
        ],
      },
      {
        command: "less",
        description: "Paginador navegável. Ideal para arquivos grandes; é o que o 'man' usa por baixo.",
        example: "less /var/log/syslog",
        output: `Jan 10 12:00:01 debian systemd[1]: Started Daily apt update.
Jan 10 12:00:01 debian CRON[1234]: (root) CMD (test -x /usr/sbin/anacron)
Jan 10 12:01:15 debian sshd[5678]: Accepted publickey for ana from 192.168.1.5
:`,
        flags: [
          { flag: "-N", description: "Mostra números de linha" },
          { flag: "-S", description: "Não quebra linhas longas (rola horizontalmente com setas)" },
          { flag: "+F", description: "Modo follow, igual tail -f mas dentro do less (Ctrl+C interrompe e volta a navegar)" },
          { flag: "-i", description: "Buscas com / ignoram maiúsculas/minúsculas" },
          { flag: "+G", description: "Abre já no fim do arquivo (útil para logs)" },
        ],
      },
      {
        command: "head",
        description: "Mostra as primeiras N linhas (10 por padrão).",
        example: "head -5 /etc/passwd",
        output: `root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync`,
        flags: [
          { flag: "-n N", description: "Mostra as primeiras N linhas" },
          { flag: "-c N", description: "Mostra os primeiros N bytes" },
          { flag: "-q", description: "Não imprime cabeçalho com o nome do arquivo (útil para múltiplos arquivos)" },
        ],
      },
      {
        command: "tail",
        description: "Últimas N linhas. Com -f, acompanha em tempo real (essencial para debug de logs).",
        example: "sudo tail -f /var/log/syslog",
        output: `Jan 10 12:05:22 debian sshd[6001]: Accepted password for ana from 10.0.0.5
Jan 10 12:05:30 debian sudo:      ana : TTY=pts/0 ; PWD=/home/ana ; USER=root ; COMMAND=/usr/bin/apt update
Jan 10 12:05:31 debian systemd[1]: apt-daily.service: Succeeded.
^C`,
        flags: [
          { flag: "-n N", description: "Últimas N linhas" },
          { flag: "-f", description: "Follow: mantém aberto e imprime cada nova linha (Ctrl+C para sair)" },
          { flag: "-F", description: "Igual ao -f mas reabre se o arquivo for rotacionado/recriado" },
          { flag: "-c N", description: "Últimos N bytes" },
        ],
      },
      {
        command: "grep",
        description: "Filtra linhas que casam com um padrão. O comando mais usado por administradores.",
        example: "grep -in 'failed password' /var/log/auth.log",
        output: `42:Jan 10 11:00:01 debian sshd[1234]: Failed password for invalid user admin from 203.0.113.5 port 4242 ssh2
98:Jan 10 11:05:14 debian sshd[1240]: Failed password for root from 198.51.100.7 port 5310 ssh2`,
        flags: [
          { flag: "-i", description: "Case-insensitive (ignora maiúsculas/minúsculas)" },
          { flag: "-r", description: "Recursivo (busca em todos os arquivos da pasta)" },
          { flag: "-n", description: "Mostra o número da linha onde casou" },
          { flag: "-v", description: "Invertido: mostra linhas que NÃO casam" },
          { flag: "-c", description: "Só conta quantas linhas casaram" },
          { flag: "-l", description: "Só lista os nomes dos arquivos que tiveram pelo menos um match" },
          { flag: "-A N", description: "Mostra N linhas APÓS cada match (after context)" },
          { flag: "-B N", description: "Mostra N linhas ANTES de cada match (before context)" },
          { flag: "-C N", description: "Mostra N linhas antes E depois (context)" },
          { flag: "-E", description: "Extended regex: |, +, ?, () sem precisar escapar" },
          { flag: "-F", description: "Fixed string: trata o padrão como literal (mais rápido, ignora regex)" },
          { flag: "--include='*.conf'", description: "Em recursivo, restringe a uma extensão" },
        ],
      },
      {
        command: "wc",
        description: "Word count: conta linhas, palavras, bytes ou caracteres.",
        example: "wc -l /etc/passwd",
        output: "42 /etc/passwd",
        flags: [
          { flag: "-l", description: "Conta linhas" },
          { flag: "-w", description: "Conta palavras (separadas por whitespace)" },
          { flag: "-c", description: "Conta bytes" },
          { flag: "-m", description: "Conta caracteres (importante para UTF-8 com acentos)" },
          { flag: "-L", description: "Comprimento da linha mais longa" },
        ],
      },
      {
        command: "sort",
        description: "Ordena linhas. Combina com uniq para encontrar valores únicos ou mais frequentes.",
        example: "sort -u /tmp/lista.txt",
        output: `ana
bruno
carla
duda`,
        flags: [
          { flag: "-n", description: "Ordenação numérica (1, 2, 10 — não 1, 10, 2)" },
          { flag: "-r", description: "Ordem reversa (descendente)" },
          { flag: "-u", description: "Único: remove duplicatas no resultado" },
          { flag: "-h", description: "Human readable (entende 1K, 2M, 3G corretamente)" },
          { flag: "-k N", description: "Ordena pela coluna N (ex.: sort -k2 ordena pela 2ª coluna)" },
          { flag: "-t X", description: "Define o caractere X como separador de campos" },
        ],
      },
      {
        command: "uniq",
        description: "Remove linhas duplicadas adjacentes. Quase sempre vem depois de sort.",
        example: "sort /tmp/ips.txt | uniq -c | sort -rn",
        output: `     42 192.168.1.5
     17 10.0.0.7
      3 203.0.113.42`,
        flags: [
          { flag: "-c", description: "Conta quantas vezes cada linha aparece (prefixa o número)" },
          { flag: "-d", description: "Mostra só as linhas que aparecem mais de uma vez (duplicadas)" },
          { flag: "-u", description: "Mostra só as linhas únicas (que aparecem só uma vez)" },
          { flag: "-i", description: "Compara ignorando maiúsculas/minúsculas" },
        ],
      },
      {
        command: "cut",
        description: "Extrai colunas/campos de cada linha. Útil para CSVs e arquivos delimitados.",
        example: "cut -d: -f1,7 /etc/passwd",
        output: `root:/bin/bash
daemon:/usr/sbin/nologin
ana:/bin/bash`,
        flags: [
          { flag: "-d X", description: "Define X como delimitador (padrão é tab)" },
          { flag: "-f N", description: "Extrai o campo N (pode ser uma lista: -f1,3,7 ou intervalo: -f1-3)" },
          { flag: "-c N-M", description: "Extrai os caracteres do N ao M (ignora delimitador)" },
          { flag: "--complement", description: "Inverte a seleção: mostra todos os campos EXCETO os listados" },
        ],
      },
      {
        command: "sed",
        description: "Stream editor. Substituições, remoções e transformações em fluxo.",
        example: "sed 's/foo/bar/g' arquivo",
        output: "(imprime o conteúdo de arquivo com todas as ocorrências de 'foo' trocadas por 'bar')",
        flags: [
          { flag: "-i", description: "In-place: salva alterações direto no arquivo (cuidado, faça backup antes)" },
          { flag: "-i.bak", description: "In-place mas guarda o original como arquivo.bak" },
          { flag: "-E", description: "Extended regex (igual grep -E)" },
          { flag: "-n", description: "Suprime saída padrão; usado com 'p' para imprimir só o que casa" },
          { flag: "'/regex/d'", description: "Deleta linhas que casam com regex" },
          { flag: "'s/X/Y/g'", description: "Substitui X por Y em todas as ocorrências (g = global na linha)" },
        ],
      },
      {
        command: "awk",
        description: "Mini-linguagem para processar texto em colunas. Cada linha é dividida em $1, $2, ...",
        example: "awk -F: '{print $1, $7}' /etc/passwd",
        output: `root /bin/bash
daemon /usr/sbin/nologin
ana /bin/bash`,
        flags: [
          { flag: "-F X", description: "Define X como separador de campos (padrão é whitespace)" },
          { flag: "'{print $N}'", description: "Imprime o campo N (NF é o número total de campos)" },
          { flag: "'/regex/{...}'", description: "Executa o bloco só nas linhas que casam com regex" },
          { flag: "'NR==1{...}'", description: "NR é o número da linha; condições permitem filtrar por posição" },
        ],
      },
      {
        command: "tee",
        description: "Lê de stdin e escreve em stdout E em um arquivo simultaneamente. Útil para gravar log enquanto vê.",
        example: "ls -la | tee saida.txt",
        output: "(mostra na tela e grava o mesmo conteúdo em saida.txt; com -a anexa em vez de sobrescrever)",
        flags: [
          { flag: "-a", description: "Append: anexa ao arquivo em vez de sobrescrever" },
        ],
      },
      {
        command: "ripgrep (rg)",
        description: "Substituto moderno do grep, escrito em Rust. 5-10x mais rápido e ignora .git/, binários e node_modules por padrão.",
        example: "rg 'TODO' /home/ana/projetos",
        output: `/home/ana/projetos/app/main.py
12:    # TODO: implementar autenticação
45:    # TODO: tratar erro de timeout`,
        flags: [
          { flag: "-i", description: "Case-insensitive" },
          { flag: "-w", description: "Match de palavra inteira" },
          { flag: "-t py", description: "Restringe ao tipo de arquivo (py, js, rust, etc.)" },
          { flag: "--hidden", description: "Inclui arquivos ocultos (que começam com .)" },
        ],
      },
    ],
    tips: [
      {
        type: "info",
        title: "Para logs gigantes, use less em vez de cat",
        content:
          "Um syslog pode passar de 100 MB. 'cat /var/log/syslog' joga tudo na tela e congestiona o terminal por minutos. 'less /var/log/syslog' abre instantaneamente, sem carregar o arquivo todo na memória, e te deixa navegar com setas e buscar com /palavra. Regra: arquivo > 1 MB? Use less.",
      },
      {
        type: "success",
        title: "Instale o ripgrep — você não volta para o grep",
        content:
          "'sudo apt install ripgrep' e use 'rg PADRAO'. É 5-10x mais rápido que grep, ignora .git/, node_modules/ e binários por padrão, e tem realce de cor automático. A sintaxe é quase idêntica, então o que você aprendeu de grep continua valendo.",
      },
      {
        type: "warning",
        title: "Cuidado com '>' — ele sobrescreve sem avisar",
        content:
          "'ls > arquivo.txt' apaga qualquer conteúdo anterior de arquivo.txt e escreve por cima. Para anexar, use '>>'. Um deslize aqui já apagou muita configuração. Em scripts críticos, considere ativar 'set -o noclobber' no bash, que força você a usar '>|' explicitamente para sobrescrever.",
      },
      {
        type: "danger",
        title: "sed -i sem backup é roleta russa",
        content:
          "'sed -i' grava direto no arquivo. Se o regex estiver errado, você pode arruinar a config sem chance de desfazer. Use sempre 'sed -i.bak' (que guarda o original como arquivo.bak) ou faça 'cp arquivo arquivo.bak' antes. Em produção, NUNCA rode sed -i em arquivo crítico sem testar antes em uma cópia.",
      },
      {
        type: "info",
        title: "A receita 'sort | uniq -c | sort -rn' é o histograma do Unix",
        content:
          "Quer saber quais valores são mais frequentes em qualquer fluxo de texto? Termine sempre com '| sort | uniq -c | sort -rn | head'. Sort agrupa, uniq -c conta, sort -rn ordena por contagem decrescente, head pega os 10 primeiros. Funciona para IPs em log, palavras em texto, status HTTP em access.log — tudo.",
      },
      {
        type: "success",
        title: "Use less +F como tail -f mais flexível",
        content:
          "'less +F arquivo' funciona como 'tail -f' (fica acompanhando o arquivo), mas a qualquer momento você pode apertar Ctrl+C e voltar para o modo de navegação normal do less. É o melhor dos dois mundos: ver o log em tempo real e poder rolar para trás sem fechar e reabrir.",
      },
    ],
    practiceLabs: [
      {
        title: "Investigar tentativas de login falhadas via SSH",
        goal: "Combinar grep, awk, sort e uniq para extrair os IPs que mais tentaram entrar no servidor sem sucesso.",
        steps: [
          "Verifique se /var/log/auth.log existe (em algumas instalações pode ser /var/log/secure).",
          "Use grep para filtrar linhas com 'Failed password'.",
          "Conte quantas tentativas houve no total.",
          "Extraia o IP de cada linha (geralmente é o 11º campo) com awk.",
          "Ordene, conte por IP com uniq -c, ordene novamente do mais frequente para o menos.",
          "Pegue os 10 primeiros com head.",
        ],
        command: `sudo grep "Failed password" /var/log/auth.log | wc -l
sudo grep "Failed password" /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -rn | head`,
        expected:
          "A primeira linha mostra o total de tentativas falhadas; o segundo bloco lista os 10 IPs mais ativos com a contagem ao lado de cada um.",
        verify:
          "Se você vir IPs estranhos com centenas de tentativas, considere bloquear com fail2ban ou ufw. Em sistema doméstico sem SSH público, esse número costuma ser zero.",
      },
      {
        title: "Análise rápida de /etc/passwd (usuários e shells)",
        goal: "Combinar grep, cut, sort e wc para extrair informações estruturadas de um arquivo delimitado.",
        steps: [
          "Conte o total de usuários (linhas) no /etc/passwd.",
          "Liste apenas os nomes (primeira coluna, separada por ':').",
          "Filtre só usuários que têm shell de login real (não nologin nem false).",
          "Ordene a lista resultante alfabeticamente.",
          "Veja quais shells o sistema usa e quantos usuários cada um tem.",
        ],
        command: `wc -l < /etc/passwd
cut -d: -f1 /etc/passwd
grep -vE 'nologin|false' /etc/passwd | cut -d: -f1 | sort
cut -d: -f7 /etc/passwd | sort | uniq -c | sort -rn`,
        expected:
          "O total típico fica entre 30 e 50 usuários (a maioria são contas de sistema). A lista filtrada mostra root, seu usuário e talvez um ou dois mais. O histograma de shells mostra que /usr/sbin/nologin domina e que /bin/bash aparece poucas vezes.",
        verify:
          "Compare 'wc -l < /etc/passwd' com 'getent passwd | wc -l' — devem ser iguais (a menos que você use LDAP ou outro NSS).",
      },
      {
        title: "Acompanhar o syslog em tempo real e provocar eventos",
        goal: "Aprender a usar tail -f como ferramenta de debug ao vivo.",
        steps: [
          "Em um terminal, abra 'sudo tail -f /var/log/syslog'.",
          "Em outro terminal, plugue um pendrive ou conecte/desconecte um cabo de rede.",
          "Observe as mensagens aparecerem em tempo real no primeiro terminal.",
          "Volte ao primeiro terminal e pressione Ctrl+C para encerrar o follow.",
          "Use grep para filtrar só mensagens relacionadas: 'sudo journalctl -k | grep -i usb' ou 'dmesg | grep -i usb'.",
        ],
        command: `# Terminal 1 (mantenha aberto):
sudo tail -f /var/log/syslog

# Terminal 2: provoque um evento (plugar USB, conectar wifi, etc.)

# Terminal 1: Ctrl+C para sair, depois:
sudo dmesg | grep -i usb | tail -20`,
        expected:
          "No terminal do tail, novas linhas aparecem instantaneamente conforme você provoca eventos. O dmesg final mostra as últimas mensagens do kernel sobre USB.",
        verify:
          "Se nada aparece com tail -f, verifique se o serviço rsyslog está ativo: 'systemctl status rsyslog'. Em sistemas só com journald, use 'journalctl -f' em vez disso.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual é a diferença prática entre cat e less, e quando você usa cada um?",
        hint: "Pense no tamanho do arquivo e no que acontece com a tela quando você abre.",
        answer:
          "cat despeja TUDO na tela de uma vez — ótimo para arquivos pequenos (até centenas de linhas), péssimo para arquivos grandes porque trava o terminal. less é um paginador: abre o arquivo, mostra uma tela por vez, deixa navegar com setas/page up/down, busca com /palavra e sai com q. Não carrega o arquivo inteiro na memória, então abre instantaneamente até logs de 1 GB. Regra: arquivo > 1 MB ou que você precisa navegar? Use less.",
      },
      {
        id: 2,
        question: "Como acompanhar um arquivo de log em tempo real e como sair?",
        hint: "Existe uma flag específica do tail para isso, e o atalho de saída é o universal de interrupção.",
        answer:
          "Use 'tail -f /caminho/do/log' (follow). Cada nova linha que o programa gravar aparece imediatamente. Pressione Ctrl+C para parar. Para casos em que o arquivo é rotacionado (renomeado e recriado), use '-F' em maiúsculo: o tail continua acompanhando mesmo após a rotação.",
      },
      {
        id: 3,
        question: "Como buscar a palavra 'error' (em qualquer caixa) em todos os arquivos de /var/log de uma vez?",
        hint: "Você precisa de duas flags: uma para recursivo e outra para case-insensitive.",
        answer:
          "'sudo grep -ri error /var/log/'. O -r é recursivo (entra em todas as subpastas) e o -i ignora maiúsculas/minúsculas. Adicione -n para ver o número da linha e --include='*.log' para restringir só a arquivos .log. Se demorar muito, considere instalar ripgrep (rg -i error /var/log) que é bem mais rápido.",
      },
      {
        id: 4,
        question: "Como contar quantos usuários no /etc/passwd usam /bin/bash como shell?",
        hint: "O grep tem uma flag para contar matches em vez de imprimi-los.",
        answer:
          "'grep -c '/bin/bash$' /etc/passwd'. O -c conta as linhas que casam. O '$' no final do padrão garante que /bin/bash precisa estar no fim da linha (evita falsos positivos como /bin/bash-something). Sem o $, qualquer ocorrência da string conta.",
      },
      {
        id: 5,
        question: "Você quer ver as últimas 50 linhas de um arquivo. Qual comando?",
        hint: "Existe um comando específico para a 'cauda' do arquivo, e ele aceita uma flag para definir quantas linhas.",
        answer:
          "'tail -n 50 arquivo' (ou apenas 'tail -50 arquivo'). Ambas formas funcionam. Para as primeiras 50 em vez das últimas, use 'head -50 arquivo'. Para ver as linhas 50 a 100, combine: 'head -100 arquivo | tail -50'.",
      },
      {
        id: 6,
        question: "Como extrair só a primeira coluna de um arquivo CSV separado por vírgula?",
        hint: "Existe um comando que extrai 'recortes' de cada linha; você precisa indicar o delimitador e o campo.",
        answer:
          "'cut -d',' -f1 arquivo.csv'. O -d define o delimitador (a vírgula) e o -f1 pede o primeiro campo. Para múltiplos campos, use lista (-f1,3) ou intervalo (-f1-3). Para CSVs com vírgulas dentro de aspas, cut não funciona bem — use awk com FPAT ou uma lib específica de CSV.",
      },
      {
        id: 7,
        question: "Qual é a diferença entre > e >> no shell?",
        hint: "Um deles é destrutivo, o outro acumula. Pense no símbolo como uma seta: uma única ou repetida.",
        answer:
          "'>' redireciona STDOUT para um arquivo SOBRESCREVENDO qualquer conteúdo anterior — se o arquivo existir, o conteúdo anterior some. '>>' anexa (append) ao final do arquivo, preservando o que já existia. 'echo oi > arquivo' deixa apenas 'oi'; 'echo oi >> arquivo' adiciona 'oi' depois do que já estava lá. Erros com '>' já apagaram muita config; ative 'set -o noclobber' no bash para se proteger.",
      },
      {
        id: 8,
        question: "O que faz a sequência 'sort | uniq -c | sort -rn' e por que ela é útil?",
        hint: "Pense em três etapas: agrupar valores iguais, contar quantos de cada, ordenar por quantidade.",
        answer:
          "É o 'histograma do Unix'. Sort agrupa valores iguais um ao lado do outro (uniq exige isso). uniq -c remove duplicatas e prefixa cada linha com a contagem de quantas vezes ela aparecia. sort -rn ordena numericamente (-n) e em ordem reversa (-r), trazendo os mais frequentes para o topo. É a receita para responder 'quais valores aparecem mais?': IPs em log, palavras em texto, status code em access.log, qualquer coisa.",
      },
    ],
    references: [
      { title: "GNU grep — manual oficial", url: "https://www.gnu.org/software/grep/manual/" },
      { title: "GNU sed — manual oficial", url: "https://www.gnu.org/software/sed/manual/" },
      { title: "GNU awk — manual oficial", url: "https://www.gnu.org/software/gawk/manual/" },
      { title: "ripgrep no GitHub", url: "https://github.com/BurntSushi/ripgrep" },
      { title: "Debian Administrator's Handbook — gerenciando logs", url: "https://www.debian.org/doc/manuals/debian-handbook/" },
    ],
  },
];
