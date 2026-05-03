import { Module } from "@/types/module";

export const pacotes: Module[] = [
  {
    id: "apt",
    title: "APT — O Gerenciador de Pacotes do Debian",
    icon: "📦",
    category: "Pacotes",
    description: "Aprenda a instalar, atualizar, buscar e remover software no Debian usando o APT, sem cair nas armadilhas clássicas do iniciante.",
    objectives: [
      "Instalar, atualizar e remover pacotes com apt sem medo",
      "Diferenciar update, upgrade e full-upgrade na prática",
      "Buscar pacotes pelo nome ou pela função que cumprem",
      "Diferenciar remove de purge e saber quando usar cada um",
      "Liberar espaço em disco limpando cache e órfãos",
      "Diagnosticar e resolver os erros mais comuns do apt",
    ],
    content: [
      "Imagine que o seu computador é uma cidade e cada programa instalado é uma loja. No Windows, instalar software é como ir até o shopping de cada loja, baixar o instalador, executar e torcer para não vir vírus junto. No Debian, existe um shopping central do governo (os repositórios oficiais) e um gerente que cuida de tudo: ele consulta o catálogo, baixa o produto, confere o lacre, instala no lugar certo e ainda anota que dependência de outras lojas você precisa. Esse gerente se chama APT, e é com ele que você vai conversar todos os dias enquanto usa Debian.",
      "APT é a sigla de Advanced Package Tool, e existe porque, lá pelos anos 90, instalar programas no Linux era um inferno tão grande que ganhou nome próprio: dependency hell. Você queria instalar o programa A, ele pedia a biblioteca B versão 2, que pedia a C versão 1, que conflitava com a D que outro programa precisava, e tudo travava. O APT resolveu isso lendo um banco de dados de tudo que existe nos repositórios oficiais do Debian, calculando o caminho certo, baixando, verificando assinaturas GPG (para garantir que o pacote é autêntico) e instalando. Hoje, o que você digita em uma linha de comando representa décadas de engenharia para evitar dor de cabeça.",
      "Antes de prosseguir, vale tirar uma confusão de cena: você vai ver pessoas usando apt e outras usando apt-get. Não é a mesma coisa, mas faz quase a mesma coisa. O apt-get é o comando antigo (1998), pensado para scripts: a saída dele é estável, sem cores, sem barra de progresso. O apt apareceu em 2014 como uma versão moderna, com cores, barra de progresso e mensagens mais amigáveis, pensada para humanos digitando no terminal. A regra prática: para uso diário no terminal, use apt; dentro de scripts de automação, prefira apt-get porque a saída não muda entre versões.",
      "Por baixo dos panos, quando você manda apt instalar algo acontece o seguinte: o apt lê os arquivos em /etc/apt/sources.list e /etc/apt/sources.list.d/ para saber de quais servidores buscar pacotes; pega a lista local (que você atualizou com apt update) para saber a versão mais nova de cada pacote; calcula a árvore de dependências necessária; baixa todos os pacotes .deb necessários para /var/cache/apt/archives/; verifica a assinatura GPG de cada um; e finalmente chama o dpkg para instalar de verdade. Tudo isso em segundos, sem você precisar pensar.",
      "O erro número 1 dos iniciantes é confundir apt update com apt upgrade. Pense assim: update é como atualizar o catálogo da loja — você fica sabendo quais produtos novos chegaram, mas não compra nada. upgrade é como ir lá e efetivamente comprar os produtos atualizados. Sem update, o upgrade trabalha com informações velhas e pode dizer que não há nada novo, mesmo havendo. Sempre rode update antes de upgrade. O combo clássico é sudo apt update && sudo apt full-upgrade -y, e ele é tão comum que vale virar memória muscular.",
      "Outra confusão que pega todo mundo é entre upgrade e full-upgrade. O upgrade simples é cauteloso até demais: ele só atualiza pacotes se conseguir fazer isso sem remover ninguém. Se a nova versão de um pacote exige tirar outro do caminho, ele simplesmente desiste e te deixa no zero a zero. O full-upgrade (que antigamente se chamava dist-upgrade) é mais corajoso: aceita remover pacotes em conflito para conseguir atualizar tudo. Em sistemas Debian estáveis, isso é seguro e quase sempre é o que você quer. Em rolling releases (não é o caso de stable), exigiria mais cuidado.",
      "Agora vem a diferença sutil que confunde até gente experiente: remove versus purge. Quando você dá apt remove vim, o programa é desinstalado, mas qualquer arquivo que você tinha em /etc/vim/ (configurações personalizadas, plugins, etc.) fica preservado, esperando você reinstalar amanhã sem perder o setup. Quando você dá apt purge vim, o programa é desinstalado E os arquivos de configuração somem junto. Use remove quando há chance de você voltar a usar; use purge quando quer realmente apagar tudo, sem rastros. Depois de qualquer um dos dois, vale rodar apt autoremove para tirar dependências que ficaram órfãs (pacotes que foram instalados só para servir o que você acabou de remover).",
      "Algumas confusões silenciosas valem destaque. Primeiro: a flag -y aceita tudo automaticamente sem perguntar — ótima em scripts, perigosa em comandos digitados às pressas, porque pode aceitar remover coisas que você não queria. Segundo: o cache em /var/cache/apt/archives/ pode crescer para vários gigabytes; sudo apt clean apaga tudo lá sem desinstalar nada do sistema, só libera espaço. Terceiro: se você ver a mensagem 'Could not get lock /var/lib/dpkg/lock', algum outro apt está rodando — pode ser o atualizador automático em segundo plano. Espere alguns minutos antes de pensar em matar o processo.",
      "No dia a dia, você vai usar APT em três situações principais: instalar uma ferramenta nova que viu em um tutorial (sudo apt install htop), manter o sistema em dia (sudo apt update && sudo apt full-upgrade), e descobrir o que existe disponível para resolver um problema (apt search 'editor de imagem'). Esses três fluxos cobrem 95% do uso. O resto — purge, autoremove, clean, hold — você usa de vez em quando, quando precisa de algo específico.",
      "Ao terminar este capítulo, você vai conseguir instalar qualquer programa que esteja nos repositórios Debian, manter seu sistema atualizado com segurança, liberar espaço em disco quando precisar, e entender as mensagens de erro mais comuns sem precisar copiar e colar no Google em pânico. APT é a base de tudo no Debian — quem domina apt domina 80% do gerenciamento do sistema.",
    ],
    commands: [
      {
        command: "sudo apt update",
        description: "Atualiza a LISTA de pacotes disponíveis nos repositórios. Não instala nada — só lê os índices novos.",
        example: "sudo apt update",
        output: `Hit:1 http://deb.debian.org/debian bookworm InRelease
Get:2 http://security.debian.org bookworm-security InRelease [48.0 kB]
Get:3 http://deb.debian.org/debian bookworm-updates InRelease [55.4 kB]
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
12 packages can be upgraded. Run 'apt list --upgradable' to see them.`,
        flags: [
          { flag: "-q", description: "Modo silencioso, útil em scripts e cron" },
          { flag: "--allow-releaseinfo-change", description: "Aceita mudanças no Release info (ex: troca de codinome)" },
        ],
      },
      {
        command: "sudo apt upgrade",
        description: "Instala atualizações disponíveis SEM remover nenhum pacote. Mais conservador que full-upgrade.",
        example: "sudo apt upgrade -y",
        flags: [
          { flag: "-y", description: "Assume yes em todas as perguntas" },
          { flag: "--without-new-pkgs", description: "Não instala pacotes novos vindos por dependência" },
        ],
      },
      {
        command: "sudo apt full-upgrade",
        description: "Atualiza tudo, podendo remover pacotes em conflito. É o upgrade que você geralmente quer no Debian estável.",
        example: "sudo apt full-upgrade -y",
        output: `Reading package lists... Done
Building dependency tree... Done
Calculating upgrade... Done
The following packages will be upgraded:
  libc6 libc-bin libssl3 openssl tzdata
5 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Need to get 9,824 kB of archives.
After this operation, 12.3 kB of additional disk space will be used.`,
        flags: [
          { flag: "-y", description: "Aceita confirmações automaticamente" },
          { flag: "--simulate", description: "Mostra o que seria feito sem executar" },
        ],
      },
      {
        command: "sudo apt install",
        description: "Instala um ou mais pacotes, resolvendo dependências automaticamente.",
        example: "sudo apt install -y htop neofetch tree",
        output: `Reading package lists... Done
Building dependency tree... Done
The following NEW packages will be installed:
  htop neofetch tree
0 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.
Need to get 412 kB of archives.
After this operation, 1,236 kB of additional disk space will be used.
Setting up htop (3.2.2-2) ...
Setting up tree (2.1.0-1) ...
Setting up neofetch (7.1.0-4) ...`,
        flags: [
          { flag: "-y", description: "Aceita yes em tudo (cuidado em produção)" },
          { flag: "--no-install-recommends", description: "Não instala pacotes apenas recomendados, só os obrigatórios" },
          { flag: "-t bookworm-backports", description: "Instala da branch backports em vez da stable" },
          { flag: "--reinstall", description: "Reinstala mesmo que o pacote já esteja presente" },
          { flag: "--simulate", description: "Mostra o que faria, sem fazer" },
        ],
      },
      {
        command: "sudo apt remove",
        description: "Remove o pacote, mas mantém arquivos de configuração em /etc/.",
        example: "sudo apt remove vim",
        flags: [
          { flag: "--purge", description: "Equivalente ao apt purge: apaga configs também" },
          { flag: "--autoremove", description: "Junto, remove órfãos no mesmo comando" },
        ],
      },
      {
        command: "sudo apt purge",
        description: "Remove o pacote E apaga arquivos de configuração. Limpeza completa.",
        example: "sudo apt purge libreoffice-*",
      },
      {
        command: "sudo apt autoremove",
        description: "Remove dependências instaladas automaticamente que nenhum pacote em uso precisa mais.",
        example: "sudo apt autoremove --purge -y",
        output: `Reading package lists... Done
Building dependency tree... Done
The following packages will be REMOVED:
  linux-image-6.1.0-13-amd64 linux-image-6.1.0-15-amd64
0 upgraded, 0 newly installed, 2 to remove and 0 not upgraded.
After this operation, 412 MB disk space will be freed.`,
        flags: [
          { flag: "--purge", description: "Apaga também as configs dos órfãos" },
          { flag: "-y", description: "Sem perguntar" },
        ],
      },
      {
        command: "apt search",
        description: "Busca pacotes por nome OU por descrição (full-text).",
        example: "apt search 'screen recorder'",
        output: `Sorting... Done
Full Text Search... Done
obs-studio/stable 29.0.2+dfsg-1 amd64
  recorder and streamer for live video content

simplescreenrecorder/stable 0.4.4-1 amd64
  feature-rich screen recorder

vokoscreen-ng/stable 4.3.0-2 amd64
  user friendly screencast creator`,
      },
      {
        command: "apt show",
        description: "Mostra detalhes completos de um pacote: versão, dependências, descrição, tamanho.",
        example: "apt show vim",
        output: `Package: vim
Version: 2:9.0.1378-2
Priority: optional
Section: editors
Maintainer: Debian Vim Maintainers <team+vim@tracker.debian.org>
Installed-Size: 3,879 kB
Depends: vim-common, vim-runtime, libacl1, libc6, ...
Description: Vi IMproved - enhanced vi editor
 Vim is an almost compatible version of the UNIX editor Vi.`,
      },
      {
        command: "apt list --installed",
        description: "Lista todos os pacotes instalados no sistema.",
        example: "apt list --installed | wc -l",
        output: "1842",
      },
      {
        command: "apt list --upgradable",
        description: "Lista pacotes que têm versão nova esperando para ser instalada.",
        example: "apt list --upgradable",
      },
      {
        command: "apt-cache policy",
        description: "Mostra de qual repositório vem um pacote, com prioridades de pinning.",
        example: "apt-cache policy firefox-esr",
        output: `firefox-esr:
  Installed: 115.7.0esr-1~deb12u1
  Candidate: 115.7.0esr-1~deb12u1
  Version table:
 *** 115.7.0esr-1~deb12u1 500
        500 http://security.debian.org bookworm-security/main amd64 Packages
        100 /var/lib/dpkg/status`,
      },
      {
        command: "sudo apt clean",
        description: "Apaga todos os .deb baixados do cache em /var/cache/apt/archives/. Libera espaço.",
        example: "sudo apt clean",
      },
      {
        command: "sudo apt autoclean",
        description: "Apaga apenas .deb que não estão mais nos repositórios — mais conservador que clean.",
        example: "sudo apt autoclean",
      },
      {
        command: "sudo apt-mark hold",
        description: "Trava um pacote em uma versão específica — apt não atualiza mais até você dar unhold.",
        example: "sudo apt-mark hold linux-image-amd64",
      },
    ],
    tips: [
      {
        type: "info",
        title: "O combo mágico semanal",
        content:
          "Memorize: sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y && sudo apt clean. Isso atualiza a lista, atualiza tudo, remove órfãos e libera o cache. Rode uma vez por semana e seu Debian fica saudável.",
      },
      {
        type: "warning",
        title: "Nunca rode apt em paralelo",
        content:
          "O apt segura um lock em /var/lib/dpkg/lock. Se você abrir dois terminais e mandar dois apt install, o segundo vai falhar com 'Could not get lock'. Espere o primeiro terminar antes de iniciar outro.",
      },
      {
        type: "success",
        title: "Use --simulate antes de mexer em muita coisa",
        content:
          "Antes de rodar full-upgrade que vai mexer em centenas de pacotes, use sudo apt --simulate full-upgrade. Ele mostra TUDO que faria sem executar. Leia com calma; se tudo OK, rode de verdade.",
      },
      {
        type: "danger",
        title: "Cuidado extremo com apt remove de pacotes do sistema",
        content:
          "Nunca dê apt remove em libc6, systemd, init, dpkg ou apt sem saber EXATAMENTE o que faz. O apt vai pedir confirmação digitando uma frase justamente porque pode quebrar o boot do sistema. Se aparecer 'Yes, do as I say!', pare e leia o que está prestes a remover.",
      },
      {
        type: "info",
        title: "Por que -y é perigoso",
        content:
          "A flag -y serve para automação. Mas em comandos digitados de cabeça, ela pode aceitar a remoção de pacotes essenciais sem você ler. Para uso interativo, deixe sem -y e leia o que apt mostra antes de digitar S.",
      },
    ],
    practiceLabs: [
      {
        title: "Workflow completo de manutenção semanal",
        goal: "Praticar o ciclo update–upgrade–cleanup que você deveria rodar toda semana no seu Debian.",
        steps: [
          "Cheque o tamanho atual do cache de pacotes baixados.",
          "Atualize a lista de pacotes com apt update.",
          "Veja quantos pacotes têm atualização disponível.",
          "Rode o full-upgrade aceitando tudo.",
          "Remova dependências órfãs com autoremove.",
          "Limpe o cache de .deb baixados.",
          "Compare o tamanho do cache antes e depois para sentir o efeito.",
        ],
        command: `# 1) Tamanho inicial do cache
du -sh /var/cache/apt/archives/

# 2) Atualizar a lista
sudo apt update

# 3) Quantos pacotes têm atualização?
apt list --upgradable 2>/dev/null | wc -l

# 4) Atualizar tudo
sudo apt full-upgrade -y

# 5) Remover órfãos
sudo apt autoremove --purge -y

# 6) Limpar cache
sudo apt clean

# 7) Tamanho depois
du -sh /var/cache/apt/archives/`,
        expected: "Você verá o cache encolher para perto de zero após o clean, e o sistema vai estar com a lista de pacotes em dia.",
        verify: "Rode apt list --upgradable: deve aparecer só uma linha 'Listing... Done', sem pacotes pendentes. Se atualizou kernel, reinicie o sistema para usar a versão nova.",
      },
      {
        title: "Caçar e instalar uma alternativa de software",
        goal: "Praticar o fluxo 'preciso de um app para X — como descubro o que existe?'",
        steps: [
          "Use apt search para listar candidatos relacionados a 'music player'.",
          "Veja detalhes de dois ou três candidatos com apt show.",
          "Escolha um leve e instale.",
          "Confirme que o binário está disponível executando --help.",
          "Saiba como reverter caso não goste.",
        ],
        command: `# 1) Buscar
apt search 'music player' | head -20

# 2) Detalhes
apt show audacious 2>/dev/null | head -20
apt show clementine 2>/dev/null | head -20

# 3) Instalar o leve
sudo apt install -y audacious

# 4) Conferir
audacious --help | head -5

# 5) Caso queira remover depois:
# sudo apt purge audacious
# sudo apt autoremove --purge`,
        verify: "audacious --help deve responder sem erro. No menu gráfico de aplicativos deve aparecer Audacious.",
      },
      {
        title: "Investigar um pacote misterioso antes de instalar",
        goal: "Aprender a inspecionar o que um pacote faz, de onde vem e quanto ocupa antes de aceitar a instalação.",
        steps: [
          "Use apt show para ver descrição, tamanho, dependências e mantenedor.",
          "Use apt-cache policy para ver de qual repositório virá.",
          "Use apt-cache depends para ver as dependências diretas.",
          "Use apt --simulate install para ver o impacto real.",
        ],
        command: `# Detalhes amigáveis
apt show docker.io

# De onde vem
apt-cache policy docker.io

# Dependências diretas
apt-cache depends docker.io | head -20

# O que aconteceria se eu instalasse
sudo apt --simulate install docker.io | head -30`,
        verify: "Você deve conseguir responder: quanto MB serão baixados? Quantos pacotes novos? De qual repositório vem?",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a diferença entre apt update e apt upgrade?",
        hint: "Pense em catálogo versus compra.",
        answer:
          "apt update atualiza a LISTA de pacotes (lê os índices dos repositórios), sem instalar nada. apt upgrade efetivamente instala as atualizações disponíveis. Sempre rode update ANTES de upgrade, senão upgrade trabalha com informações velhas.",
      },
      {
        id: 2,
        question: "Diferença entre apt remove e apt purge?",
        hint: "Pense no que acontece com os arquivos em /etc/.",
        answer:
          "apt remove desinstala o programa mas mantém os arquivos de configuração em /etc/, útil se você pretende reinstalar e preservar customizações. apt purge desinstala E apaga as configs, fazendo limpeza completa.",
      },
      {
        id: 3,
        question: "Como instalar um pacote sem precisar confirmar S/n?",
        hint: "Existe uma flag de uma letra.",
        answer:
          "sudo apt install -y nome_do_pacote. A flag -y aceita todas as confirmações automaticamente. Use com cuidado fora de scripts, porque pode aceitar coisas indesejadas sem você ler.",
      },
      {
        id: 4,
        question: "Como liberar espaço em disco removendo cache de pacotes baixados?",
        hint: "O cache fica em /var/cache/apt/archives/.",
        answer:
          "sudo apt clean apaga tudo do cache. sudo apt autoclean é mais conservador, removendo só pacotes que não estão mais nos repositórios. Nenhum dos dois desinstala programas — só apaga os .deb baixados.",
      },
      {
        id: 5,
        question: "Por que usar full-upgrade em vez de upgrade simples?",
        hint: "O upgrade simples é cauteloso demais em uma situação específica.",
        answer:
          "full-upgrade aceita REMOVER pacotes em conflito para conseguir atualizar tudo. O upgrade simples desiste se a atualização exigir remoção, deixando pacotes desatualizados. Em Debian estável, full-upgrade é seguro e completo.",
      },
      {
        id: 6,
        question: "Apt deu erro 'Could not get lock /var/lib/dpkg/lock'. O que aconteceu?",
        hint: "Outra coisa está usando o apt.",
        answer:
          "Outro processo apt está rodando, geralmente o atualizador automático em segundo plano (unattended-upgrades). Aguarde 1–2 minutos. Se persistir, descubra o processo com ps aux | grep -E 'apt|dpkg'. Só em último caso e com cuidado: sudo killall apt apt-get && sudo rm /var/lib/dpkg/lock-frontend.",
      },
      {
        id: 7,
        question: "Como descobrir de qual repositório vem o pacote firefox-esr instalado no sistema?",
        hint: "Existe um comando da família apt-cache.",
        answer:
          "apt-cache policy firefox-esr mostra a versão instalada, a candidata para próxima atualização, e a lista de repositórios com prioridades. Os asteriscos indicam de onde a versão atual veio.",
      },
      {
        id: 8,
        question: "Você quer travar o kernel atual e impedir que o apt o atualize. Como faz?",
        hint: "Existe um comando apt-mark.",
        answer:
          "sudo apt-mark hold linux-image-amd64. A partir daí o apt ignora atualizações desse pacote até você reverter com sudo apt-mark unhold linux-image-amd64.",
      },
    ],
    references: [
      { title: "Manual oficial do APT", url: "https://manpages.debian.org/bookworm/apt/apt.8.en.html" },
      { title: "Wiki Debian — Apt", url: "https://wiki.debian.org/Apt" },
      { title: "Debian Handbook — Capítulo 6 (Maintenance and Updates)", url: "https://debian-handbook.info/browse/stable/sect.apt-get.html" },
      { title: "Manual apt-cache", url: "https://manpages.debian.org/bookworm/apt/apt-cache.8.en.html" },
    ],
  },

  {
    id: "dpkg",
    title: "dpkg — O Nível Baixo do APT",
    icon: "🔩",
    category: "Pacotes",
    description: "Aprenda a instalar arquivos .deb manualmente, descobrir de qual pacote vem cada arquivo e usar dpkg para investigar o sistema.",
    objectives: [
      "Instalar pacotes .deb baixados manualmente sem quebrar o sistema",
      "Descobrir de qual pacote vem qualquer arquivo do disco",
      "Listar todos os arquivos que um pacote criou",
      "Reconfigurar pacotes que pediram setup interativo no install",
      "Entender quando vale chamar dpkg direto e quando é melhor usar apt",
    ],
    content: [
      "Se o APT é o gerente do shopping, o dpkg é o estoquista. O gerente fala com fornecedores, calcula pedidos, recebe pagamento. O estoquista pega o produto que chegou, abre a caixa, coloca na prateleira certa e anota no inventário. No Debian, quando você roda apt install, o APT baixa o pacote, verifica assinatura, calcula dependências — e na hora de efetivamente instalar, chama o dpkg para fazer o trabalho braçal. Por isso, embora você use apt no dia a dia, em algumas situações específicas vale conversar direto com o estoquista.",
      "O dpkg trabalha apenas com arquivos .deb que já estão no seu disco. Ele não baixa nada da internet, não consulta repositórios, não resolve dependências. Se você mandar dpkg instalar um pacote que precisa de outro que não está no sistema, ele instala o seu pacote pela metade, registra o estado como 'broken' e te deixa um aviso. Essa diferença é fundamental: apt é o caminho para tudo que vem dos repositórios; dpkg é o caminho para tudo que está em arquivo solto na sua pasta de Downloads.",
      "Quando você precisa do dpkg na prática? Em quatro situações principais: instalar um .deb que você baixou do site do fabricante (Google Chrome, Visual Studio Code, Discord, Slack, Steam, AnyDesk, Zoom — todos distribuídos como .deb fora do repositório oficial Debian); investigar de qual pacote vem um arquivo qualquer do sistema; listar todos os arquivos que um pacote instalou (útil para entender o que ele 'mexe'); e reconfigurar um pacote para repetir o setup interativo (timezone errado, idioma errado, teclado errado).",
      "Para instalar um .deb local existem dois caminhos. O método antigo, sudo dpkg -i arquivo.deb, funciona, mas tem o problema descrito acima: se faltar dependência, fica quebrado e você precisa correr atrás manualmente com sudo apt --fix-broken install. O método moderno e infinitamente melhor é sudo apt install ./arquivo.deb. O ponto-barra (./) é essencial: ele sinaliza para o apt que é um arquivo local, não um nome de pacote do repositório. Com o apt cuidando, dependências são baixadas e tudo é resolvido em uma tacada.",
      "Quando você quer descobrir de onde vem um arquivo qualquer, o dpkg tem um superpoder. Imagine que você quer saber quem instalou /usr/bin/firefox-esr no seu sistema. Basta dpkg -S /usr/bin/firefox-esr e ele responde com o nome do pacote. Esse comando é precioso para entender o sistema: 'esse arquivo de configuração apareceu, de onde veio?', 'esse comando estranho está disponível, que pacote o trouxe?', 'preciso reinstalar tudo de uma família, qual é o nome do pacote?'. Use bastante.",
      "O caminho inverso também é útil. Se você quer saber TUDO que um pacote criou no sistema, dpkg -L nome_do_pacote lista cada arquivo: binários em /usr/bin, manuais em /usr/share/man, configurações em /etc, ícones em /usr/share/icons. Isso te ajuda a entender o impacto de um pacote, ou a achar onde ficou aquele arquivo de configuração que você não lembrava o caminho. Combinado com grep, fica poderoso: dpkg -L nginx | grep -E 'conf$' mostra só os arquivos de configuração do nginx.",
      "Os pacotes Debian podem ter scripts de pré-instalação e pós-instalação que rodam como root. Geralmente esses scripts perguntam coisas (timezone, idioma, configuração de teclado, se atualiza um arquivo modificado, etc.). Se você respondeu errado, ou se quer mudar depois, o dpkg-reconfigure reabre o setup interativo. Casos clássicos: sudo dpkg-reconfigure tzdata para mudar fuso horário, sudo dpkg-reconfigure locales para gerenciar idiomas instalados, sudo dpkg-reconfigure keyboard-configuration para mudar layout de teclado, sudo dpkg-reconfigure unattended-upgrades para configurar atualizações automáticas.",
      "Para listar pacotes existem várias formas. O dpkg -l mostra TODOS os pacotes conhecidos pelo sistema, com uma coluna de estado de duas letras: 'ii' significa instalado e configurado corretamente, 'rc' significa removido mas com configurações ainda no disco, 'pn' significa removido por completo. Esse 'rc' é uma fonte clássica de sujeira — pacotes que você removeu sem purge meses atrás e ainda têm /etc/ poluindo. Para encontrar e limpar: dpkg -l | grep ^rc mostra a lista; depois sudo apt purge $(dpkg -l | awk '/^rc/ {print $2}') faz a limpeza completa.",
      "Uma confusão comum: muita gente pensa que dpkg e apt são alternativas que disputam espaço, mas na verdade são camadas diferentes da mesma pilha. Toda vez que apt instala algo, é o dpkg que põe os arquivos no lugar e atualiza o banco de dados em /var/lib/dpkg/. Toda vez que apt remove, é o dpkg que tira. Você nunca substitui um pelo outro: você escolhe o nível certo para a tarefa. Para 99% dos casos, apt. Para os outros 1% — .deb local, investigação, reconfiguração — dpkg.",
      "Existe ainda uma ferramenta complementar chamada apt-file. Ela faz o que o dpkg -S faz, mas para pacotes que NÃO estão instalados. Imagine que você roda algum tutorial e ele pede para você ter um arquivo /usr/include/foo.h, mas você nem sabe qual pacote traz isso. Com apt-file search /usr/include/foo.h você descobre. Precisa instalar antes (sudo apt install apt-file && sudo apt-file update) porque ele baixa um índice gigante. Útil para desenvolvedores e administradores.",
      "Ao terminar este capítulo, você vai conseguir instalar com tranquilidade aquele Chrome que o Debian não traz no repositório, vai saber rastrear de onde veio cada coisa no seu disco, e vai conseguir reconfigurar pacotes que você setou errado. Saber dpkg é o que separa o usuário casual do administrador competente — ainda que você use apt 95% do tempo.",
    ],
    commands: [
      {
        command: "sudo dpkg -i",
        description: "Instala um arquivo .deb local. Não baixa nem resolve dependências.",
        example: "sudo dpkg -i ~/Downloads/google-chrome-stable_current_amd64.deb",
        flags: [
          { flag: "--force-overwrite", description: "Permite sobrescrever arquivos de outro pacote (perigoso)" },
          { flag: "--no-triggers", description: "Não roda triggers pós-instalação" },
        ],
      },
      {
        command: "sudo apt install ./arquivo.deb",
        description: "Forma moderna e recomendada — instala .deb local resolvendo dependências automaticamente.",
        example: "sudo apt install ./code_1.88.0-amd64.deb",
      },
      {
        command: "sudo apt --fix-broken install",
        description: "Resolve dependências quebradas após dpkg parcial.",
        example: "sudo apt --fix-broken install",
      },
      {
        command: "dpkg -S",
        description: "Search reverso — de qual pacote vem este arquivo no disco?",
        example: "dpkg -S /usr/bin/firefox-esr",
        output: "firefox-esr: /usr/bin/firefox-esr",
      },
      {
        command: "dpkg -L",
        description: "List — quais arquivos foram instalados por este pacote?",
        example: "dpkg -L vim | head -10",
        output: `/.
/usr
/usr/bin
/usr/bin/vim.basic
/usr/share
/usr/share/bug
/usr/share/bug/vim
/usr/share/doc
/usr/share/doc/vim
/usr/share/doc/vim/changelog.Debian.gz`,
      },
      {
        command: "dpkg -l",
        description: "Lista todos os pacotes do sistema com estado (ii=instalado, rc=removido com configs, pn=purged).",
        example: "dpkg -l | grep firefox",
        output: `ii  firefox-esr  115.7.0esr-1~deb12u1  amd64  Mozilla Firefox web browser - Extended Support Release`,
      },
      {
        command: "dpkg -s",
        description: "Mostra status detalhado de um pacote instalado.",
        example: "dpkg -s vim",
      },
      {
        command: "sudo dpkg --remove",
        description: "Remove pacote mantendo configs.",
        example: "sudo dpkg --remove firefox-esr",
      },
      {
        command: "sudo dpkg --purge",
        description: "Remove pacote E apaga configs.",
        example: "sudo dpkg --purge firefox-esr",
      },
      {
        command: "sudo dpkg-reconfigure",
        description: "Reabre o setup interativo de um pacote já instalado.",
        example: "sudo dpkg-reconfigure tzdata",
      },
      {
        command: "dpkg --get-selections",
        description: "Lista pacotes em formato simples (nome + estado), útil para backup.",
        example: "dpkg --get-selections > meus-pacotes.txt",
      },
      {
        command: "apt-file search",
        description: "Busca arquivo em pacotes NÃO instalados (precisa instalar apt-file primeiro).",
        example: "apt-file search /usr/include/zlib.h",
        output: "zlib1g-dev: /usr/include/zlib.h",
      },
    ],
    tips: [
      {
        type: "success",
        title: "Prefira sempre apt install ./arquivo.deb",
        content:
          "Em vez de combinar sudo dpkg -i + sudo apt --fix-broken install, faça direto sudo apt install ./arquivo.deb. O ./ é essencial e sinaliza que é arquivo local. O apt resolve as dependências e instala tudo numa única operação.",
      },
      {
        type: "warning",
        title: "Cuidado com .deb de fontes desconhecidas",
        content:
          "Um arquivo .deb pode conter scripts pré e pós-instalação que rodam como ROOT durante a instalação. Baixar .deb de site qualquer é dar acesso root ao autor. Só instale .debs de fontes oficiais conhecidas (google.com, microsoft.com, dropbox.com, etc.).",
      },
      {
        type: "info",
        title: "Estados curiosos no dpkg -l",
        content:
          "A primeira coluna do dpkg -l tem duas letras: a primeira indica o estado desejado (i=install, h=hold, p=purge, r=remove), a segunda indica o estado real (i=installed, c=config-files, n=not-installed, U=unpacked, F=failed-config). 'ii' é o estado feliz; 'rc' significa que sobrou config sem o pacote.",
      },
      {
        type: "danger",
        title: "Evite --force em dpkg",
        content:
          "Flags como --force-overwrite, --force-depends ou --force-all existem por bom motivo, mas podem corromper o banco de pacotes do sistema. Só use se você entende exatamente o que está fazendo e tem backup. Em quase todo caso, há um caminho seguro pelo apt.",
      },
    ],
    practiceLabs: [
      {
        title: "Instalar Google Chrome a partir do .deb oficial",
        goal: "Praticar o fluxo completo de instalar software .deb que não está nos repositórios oficiais Debian.",
        steps: [
          "Baixe o .deb diretamente do site oficial do Chrome.",
          "Instale com apt install ./arquivo.deb para que dependências sejam resolvidas.",
          "Confirme a instalação com dpkg -l.",
          "Verifique que o Chrome adicionou o próprio repositório em /etc/apt/sources.list.d/.",
          "Limpe o .deb baixado da pasta Downloads.",
        ],
        command: `# 1) Baixar
cd ~/Downloads
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

# 2) Instalar (apt resolve dependências)
sudo apt install -y ./google-chrome-stable_current_amd64.deb

# 3) Confirmar
dpkg -l | grep google-chrome

# 4) Conferir o repositório que o Chrome criou
ls /etc/apt/sources.list.d/ | grep google

# 5) Limpar download
rm google-chrome-stable_current_amd64.deb`,
        verify:
          "google-chrome --version deve responder com a versão instalada. No menu de aplicativos deve aparecer Google Chrome. Em /etc/apt/sources.list.d/ deve haver um google-chrome.list, garantindo atualizações futuras via apt update normal.",
      },
      {
        title: "Investigar a origem de cada arquivo do sistema",
        goal: "Aprender a usar dpkg -S para entender o que cada coisa é e de onde veio.",
        steps: [
          "Descubra de qual pacote vem o /usr/bin/cat.",
          "Descubra de qual pacote vem o /etc/hostname.",
          "Liste os primeiros 10 arquivos que o pacote bash instalou.",
          "Liste só os arquivos de configuração que o nano instalou.",
        ],
        command: `# De onde vem o cat?
dpkg -S /usr/bin/cat

# E o /etc/hostname?
dpkg -S /etc/hostname

# Lista de arquivos do bash
dpkg -L bash | head -10

# Configs do nano
dpkg -L nano | grep '^/etc'`,
        verify:
          "/usr/bin/cat vem de coreutils. /etc/hostname vem de base-files. bash instala /bin/bash, /etc/skel/.bashrc, /usr/share/man/, etc.",
      },
      {
        title: "Limpar pacotes em estado rc (removidos com configs)",
        goal: "Encontrar e fazer purge de configs órfãs deixadas por remoções incompletas.",
        steps: [
          "Liste pacotes em estado rc com dpkg -l.",
          "Conte quantos são.",
          "Faça purge em todos de uma vez para limpar.",
          "Confirme que sumiram.",
        ],
        command: `# Quem está em estado rc?
dpkg -l | grep ^rc

# Contar
dpkg -l | grep -c ^rc

# Purgar todos de uma vez
sudo apt purge -y $(dpkg -l | awk '/^rc/ {print $2}')

# Confirmar
dpkg -l | grep ^rc`,
        verify: "Após o purge, dpkg -l | grep ^rc não deve retornar nada, e seu /etc/ fica mais limpo.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Quando faz sentido usar dpkg em vez de apt?",
        hint: "Pense em casos onde apt não consegue ajudar.",
        answer:
          "Para instalar arquivo .deb local (Chrome, VSCode, Discord), descobrir de qual pacote vem um arquivo qualquer (dpkg -S), listar arquivos instalados por um pacote (dpkg -L) ou reconfigurar um pacote (dpkg-reconfigure). Para tudo do dia a dia, apt é melhor.",
      },
      {
        id: 2,
        question: "Qual é a forma MODERNA e segura de instalar um arquivo .deb local?",
        hint: "Existe uma sintaxe que combina apt com caminho de arquivo.",
        answer:
          "sudo apt install ./arquivo.deb — note o ./ obrigatório, que distingue arquivo local de nome de pacote do repositório. O apt resolve dependências automaticamente, evitando o erro clássico do dpkg -i parcial.",
      },
      {
        id: 3,
        question: "Como descobrir de qual pacote vem o /usr/bin/python3?",
        hint: "Existe um comando dpkg que faz busca reversa.",
        answer:
          "dpkg -S /usr/bin/python3. A saída mostra o nome do pacote responsável, geralmente python3-minimal ou python3.X (onde X é a versão).",
      },
      {
        id: 4,
        question: "Como listar TODOS os arquivos instalados pelo pacote vim?",
        hint: "L de list.",
        answer: "dpkg -L vim. Para filtrar só configurações em /etc, combine com grep: dpkg -L vim | grep ^/etc.",
      },
      {
        id: 5,
        question: "Após sudo dpkg -i, apareceu erro de dependência. O que fazer?",
        hint: "O apt sabe consertar.",
        answer:
          "sudo apt --fix-broken install — o apt baixa as dependências faltantes do repositório e completa a instalação parcial deixada pelo dpkg.",
      },
      {
        id: 6,
        question: "Como reconfigurar o timezone após instalar errado?",
        hint: "Existe um comando da família dpkg para reabrir o setup.",
        answer: "sudo dpkg-reconfigure tzdata — reabre o menu interativo de fuso horário, permitindo escolher novamente.",
      },
      {
        id: 7,
        question: "O que significa o estado 'rc' na saída do dpkg -l?",
        hint: "São duas letras: estado desejado e estado real.",
        answer:
          "rc significa: r = remove (estado desejado), c = config-files presentes (estado real). Ou seja, o pacote foi removido mas as configurações continuam em /etc/. Para limpar: sudo apt purge nome_do_pacote.",
      },
      {
        id: 8,
        question: "Você quer descobrir qual pacote contém o arquivo /usr/include/openssl/ssl.h, mas ele NÃO está instalado. Como faz?",
        hint: "dpkg -S só funciona para o que já está instalado.",
        answer:
          "Use apt-file. Instale com sudo apt install apt-file e atualize o índice com sudo apt-file update. Depois: apt-file search /usr/include/openssl/ssl.h. A saída mostrará libssl-dev ou similar.",
      },
    ],
    references: [
      { title: "Manual dpkg", url: "https://manpages.debian.org/bookworm/dpkg/dpkg.1.en.html" },
      { title: "Manual dpkg-reconfigure", url: "https://manpages.debian.org/bookworm/debconf/dpkg-reconfigure.8.en.html" },
      { title: "Debian Policy Manual", url: "https://www.debian.org/doc/debian-policy/" },
      { title: "Wiki Debian — Package Management", url: "https://wiki.debian.org/PackageManagement" },
    ],
  },

  {
    id: "sources-list",
    title: "sources.list, Repositórios e Pinning",
    icon: "🗂️",
    category: "Pacotes",
    description: "Entenda como o Debian sabe de onde baixar pacotes, o que significa main/contrib/non-free, e como controlar versões com pinning.",
    objectives: [
      "Ler e editar /etc/apt/sources.list com segurança",
      "Diferenciar main, contrib, non-free e non-free-firmware",
      "Adicionar repositórios de terceiros com chave GPG correta",
      "Entender as branches stable, testing, unstable, sid",
      "Usar pinning para travar pacotes em versões específicas",
    ],
    content: [
      "Pense no APT como um cliente fiel de algumas lojas: ele só compra naquelas que você listou para ele. Essa lista de lojas oficiais fica em dois lugares: o arquivo principal /etc/apt/sources.list e a pasta /etc/apt/sources.list.d/, onde cada repositório de terceiro pode ter o próprio arquivo .list separado. Quando você roda apt update, é nesses arquivos que o apt olha para saber em quais servidores buscar a lista de pacotes disponíveis. Mexer aqui é mexer no DNA do gerenciamento de pacotes — vale entender bem antes de editar.",
      "A sintaxe de uma linha de sources.list parece intimidadora à primeira vista mas é simples. Veja o exemplo clássico: deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware. Decifrando: deb diz 'este é um repositório binário'; deb-src seria para código-fonte. http://deb.debian.org/debian é o servidor. bookworm é o codinome da versão Debian (Debian 12 se chama bookworm; Debian 11 era bullseye; Debian 13 será trixie). Os nomes finais (main, contrib, non-free, non-free-firmware) são os componentes habilitados.",
      "Esses componentes representam categorias de software com filosofias diferentes. main contém apenas software 100% livre (segundo a Debian Free Software Guidelines), e é o coração do projeto Debian. contrib contém software livre que depende de algo não-livre para funcionar (por exemplo, um driver livre que precisa de firmware proprietário). non-free contém software com licenças proprietárias permitidas, mas não-livres (drivers gráficos NVIDIA, codecs específicos). non-free-firmware foi separado em 2023 para hospedar firmwares proprietários (Wi-Fi, GPU, etc.) que muitos hardwares precisam para funcionar — isso permite o projeto manter main 100% puro mas ainda ter um Debian usável em laptops modernos.",
      "Cada versão do Debian existe em três sabores principais que você pode rastrear: stable, testing e unstable. Stable é a que você quer no servidor e em desktops conservadores: pacotes congelados em versões testadas, atualizações apenas de segurança e correções pontuais. Testing é a próxima stable em construção: pacotes mais novos, instabilidade ocasional. Unstable (também chamada sid) é a vanguarda: pacotes recém-empacotados, podem quebrar. Existe também experimental para coisas ainda mais novas. Como regra: stable para uso real; testing/unstable só se você gosta de aventura e sabe consertar quando quebra.",
      "Além das categorias e branches, existem 'pockets' que adicionam variações: bookworm-updates traz atualizações de pacotes que não são de segurança mas mereciam vir antes da próxima release; bookworm-security traz correções de vulnerabilidades urgentes (servida pelo deb.security.debian.org); bookworm-backports traz pacotes da testing recompilados para a stable, dando acesso a versões mais novas sem trocar a base. Em uma instalação normal, você quer ter as três habilitadas: a stable de base, updates e security. Backports é opcional, ativada por demanda.",
      "Quando você quer instalar software de terceiros (Docker, Google Chrome, Microsoft Edge, VS Code, Spotify), o caminho correto é adicionar o repositório deles em /etc/apt/sources.list.d/, com um arquivo separado por fornecedor. Ao mesmo tempo, é preciso adicionar a chave GPG do fornecedor em /etc/apt/keyrings/ ou /usr/share/keyrings/ — sem isso, o apt update vai reclamar que o repositório não é confiável. O método moderno e seguro é não mais usar apt-key (descontinuado) e sim apontar a chave diretamente no arquivo .list usando a opção [signed-by=/path/to/keyring.gpg].",
      "Pinning é o que permite você ter o melhor de dois mundos: a maior parte do sistema em stable, mas alguns pacotes específicos vindos de testing ou backports. Funciona com prioridades numéricas: cada pacote em cada repositório recebe uma prioridade, e o apt instala/atualiza pela maior. Os defaults são: pacote do release alvo (sua stable) = 500; backports = 100; pacotes não-instalados de outras branches = 100. Você pode subir ou descer essas prioridades em /etc/apt/preferences ou /etc/apt/preferences.d/. Para um pacote vindo dos backports virar prioritário, basta dar prioridade > 500 a ele.",
      "Existe uma confusão comum: 'tenho que mudar de stable para testing para ter Firefox novo'. Não, você não tem. Mudar a base inteira é arriscado. O caminho certo é manter stable como base e usar backports ou Flatpak para casos específicos. Quem migra a base inteira para testing geralmente acaba com algo que quebra a cada update e descobre tarde demais que estabilidade tem valor. Outra confusão: 'non-free = ilegal/pirata'. Não. non-free contém software com licença proprietária mas legal para usar, distribuído pelo projeto Debian para conveniência do usuário. Não usar é uma escolha filosófica, não jurídica.",
      "A segurança ao mexer em sources.list merece atenção especial. Sempre faça backup antes de editar (sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak). Sempre rode apt update logo depois de editar para detectar erros de sintaxe imediatamente. Nunca aceite chaves GPG de fontes desconhecidas: assinar uma chave maliciosa significa que o atacante pode te entregar pacotes falsos com root. Em geral, siga o tutorial oficial do fornecedor do software, e desconfie de tutoriais que mandam você baixar chaves de URLs estranhas.",
      "Ao terminar este capítulo, você vai conseguir interpretar qualquer sources.list que cair na sua frente, adicionar repositórios de terceiros com segurança, ativar backports quando precisar de algo mais novo, e usar pinning para garantir que apenas pacotes específicos venham de branches mais novas, sem comprometer a estabilidade do resto do sistema.",
    ],
    commands: [
      {
        command: "cat /etc/apt/sources.list",
        description: "Mostra o conteúdo do arquivo principal de fontes APT.",
        example: "cat /etc/apt/sources.list",
        output: `deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware
deb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
deb http://deb.debian.org/debian bookworm-updates main contrib non-free non-free-firmware`,
      },
      {
        command: "ls /etc/apt/sources.list.d/",
        description: "Lista repositórios de terceiros adicionados separadamente.",
        example: "ls /etc/apt/sources.list.d/",
      },
      {
        command: "sudo nano /etc/apt/sources.list",
        description: "Abre o arquivo principal para edição. Sempre faça backup antes.",
        example: "sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak && sudo nano /etc/apt/sources.list",
      },
      {
        command: "apt-cache policy",
        description: "Mostra prioridades de cada repositório para um pacote (útil para depurar pinning).",
        example: "apt-cache policy firefox-esr",
      },
      {
        command: "apt-cache policy",
        description: "Sem argumentos, mostra prioridades gerais de todos os repositórios.",
        example: "apt-cache policy",
      },
      {
        command: "sudo apt update",
        description: "Lê os sources.list e baixa os índices novos. Sempre rode após editar fontes.",
        example: "sudo apt update",
      },
      {
        command: "sudo install -m 0644 chave.gpg /etc/apt/keyrings/fornecedor.gpg",
        description: "Coloca uma chave GPG no caminho moderno para repositórios de terceiros.",
        example: "sudo install -m 0644 docker-archive-keyring.gpg /etc/apt/keyrings/",
      },
      {
        command: "sudo apt-add-repository",
        description: "Adiciona um repositório de forma assistida (instale antes: sudo apt install software-properties-common).",
        example: "sudo apt-add-repository 'deb http://deb.debian.org/debian bookworm-backports main'",
      },
      {
        command: "echo deb ... | sudo tee /etc/apt/sources.list.d/repo.list",
        description: "Adiciona linha de repositório criando arquivo dedicado em sources.list.d.",
        example: "echo 'deb http://deb.debian.org/debian bookworm-backports main' | sudo tee /etc/apt/sources.list.d/backports.list",
      },
      {
        command: "sudo apt-mark hold",
        description: "Trava um pacote para que apt não atualize. Forma simples de pinning manual.",
        example: "sudo apt-mark hold linux-image-amd64",
      },
      {
        command: "sudo apt-mark unhold",
        description: "Libera o pacote travado para receber atualizações novamente.",
        example: "sudo apt-mark unhold linux-image-amd64",
      },
      {
        command: "apt-mark showhold",
        description: "Mostra todos os pacotes atualmente em hold.",
        example: "apt-mark showhold",
      },
    ],
    tips: [
      {
        type: "info",
        title: "non-free-firmware é separado desde 2023",
        content:
          "A partir do bookworm, o componente non-free-firmware foi separado de non-free para que firmwares proprietários (Wi-Fi, GPU) possam vir habilitados por padrão sem misturar com o resto do non-free. Se seu hardware não funciona, ative non-free-firmware antes de qualquer outra coisa.",
      },
      {
        type: "warning",
        title: "Nunca use apt-key add",
        content:
          "O comando apt-key foi descontinuado por motivos de segurança. Nunca siga tutoriais que mandam fazer 'wget ... | sudo apt-key add -'. O método moderno é colocar a chave em /etc/apt/keyrings/ e referenciar com [signed-by=...] no .list.",
      },
      {
        type: "danger",
        title: "Não misture testing/unstable com stable sem pinning",
        content:
          "Adicionar uma linha deb apontando para testing no sources.list de uma stable, sem pinning configurado, faz o próximo apt full-upgrade tentar puxar a base inteira da testing — você acorda com um sistema híbrido instável. Se for misturar, configure /etc/apt/preferences ANTES.",
      },
      {
        type: "success",
        title: "Use https sempre que possível",
        content:
          "Os mirrors oficiais Debian aceitam http e https. Embora pacotes sejam assinados (https não é estritamente necessário), usar https esconde de bisbilhoteiros da sua rede o que você instala. Bom para privacidade.",
      },
    ],
    practiceLabs: [
      {
        title: "Habilitar Debian Backports e instalar um pacote da branch",
        goal: "Adicionar o repositório oficial de backports e instalar um pacote dele com prioridade correta.",
        steps: [
          "Crie um arquivo /etc/apt/sources.list.d/backports.list com a linha do backports.",
          "Rode apt update.",
          "Liste pacotes disponíveis na branch backports.",
          "Instale um pacote do backports com a flag -t.",
          "Confirme com apt-cache policy que ele veio da branch certa.",
        ],
        command: `# 1) Adicionar repositório
echo 'deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware' | sudo tee /etc/apt/sources.list.d/backports.list

# 2) Atualizar
sudo apt update

# 3) Listar pacotes do backports
apt list -a 2>/dev/null | grep backports | head -10

# 4) Instalar (exemplo: kernel novo)
sudo apt install -t bookworm-backports linux-image-amd64

# 5) Confirmar de onde veio
apt-cache policy linux-image-amd64`,
        verify: "apt-cache policy deve mostrar a versão instalada com origem em bookworm-backports.",
      },
      {
        title: "Adicionar repositório de terceiros com chave GPG segura",
        goal: "Aprender o método moderno de adicionar um repositório externo (exemplo: Docker) sem usar apt-key.",
        steps: [
          "Crie a pasta /etc/apt/keyrings se não existir.",
          "Baixe a chave GPG do fornecedor.",
          "Adicione a chave em formato dearmored.",
          "Crie o arquivo .list referenciando a chave com signed-by.",
          "Rode apt update e instale.",
        ],
        command: `# 1) Pasta para chaves
sudo install -m 0755 -d /etc/apt/keyrings

# 2) Baixar e gravar a chave
curl -fsSL https://download.docker.com/linux/debian/gpg | \\
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# 3) Adicionar repositório referenciando a chave
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian bookworm stable" | \\
  sudo tee /etc/apt/sources.list.d/docker.list

# 4) Update e instalar
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io`,
        verify: "Após o update, não deve aparecer warning de chave inválida. docker --version deve responder.",
      },
      {
        title: "Travar um pacote com pinning para evitar atualização indesejada",
        goal: "Configurar pinning para impedir que um pacote específico seja atualizado, mesmo com full-upgrade.",
        steps: [
          "Crie um arquivo em /etc/apt/preferences.d/ com a regra.",
          "Confirme com apt-cache policy que a prioridade mudou.",
          "Confirme alternativamente com apt-mark hold (caminho mais simples).",
        ],
        command: `# Método 1: pinning via preferences
sudo tee /etc/apt/preferences.d/firefox-pin <<EOF
Package: firefox-esr
Pin: version 115.7.0esr-1~deb12u1
Pin-Priority: 1001
EOF

apt-cache policy firefox-esr

# Método 2 (mais simples): hold
sudo apt-mark hold firefox-esr
apt-mark showhold`,
        verify: "apt-cache policy deve mostrar a versão fixada com prioridade 1001. apt-mark showhold deve listar firefox-esr.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que significa cada parte da linha 'deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware'?",
        hint: "Cinco partes: tipo, URL, codinome, e três ou mais componentes.",
        answer:
          "deb = repositório binário; URL = servidor; bookworm = codinome do Debian 12; main = software 100% livre; contrib = software livre que depende de não-livre; non-free = software proprietário; non-free-firmware = firmwares proprietários (separados em 2023 para hardware moderno funcionar).",
      },
      {
        id: 2,
        question: "Diferença entre stable, testing e unstable?",
        hint: "Pense em estabilidade vs novidade.",
        answer:
          "stable = pacotes congelados em versões testadas, atualizações só de segurança (bookworm hoje); testing = próxima stable em construção, pacotes novos com ocasional instabilidade (trixie hoje); unstable (sid) = vanguarda, pacotes recém-empacotados, pode quebrar a qualquer momento.",
      },
      {
        id: 3,
        question: "Por que Debian separou non-free-firmware de non-free em 2023?",
        hint: "Tem a ver com hardware moderno.",
        answer:
          "Para permitir que firmwares proprietários (Wi-Fi, GPU) venham habilitados por padrão na ISO de instalação, possibilitando que hardware moderno funcione 'out of the box' sem misturar com o resto do non-free. Mantém main 100% puro, mas torna o Debian utilizável.",
      },
      {
        id: 4,
        question: "O que é Debian Backports e quando usar?",
        hint: "Pense em uma versão mais nova de algo específico, sem trocar todo o sistema.",
        answer:
          "Backports são pacotes da testing recompilados para rodar na stable. Usa-se quando você precisa de uma versão mais nova de UM pacote específico (kernel, libreoffice, podman) sem migrar a base inteira. Para instalar: sudo apt install -t bookworm-backports nome.",
      },
      {
        id: 5,
        question: "Por que não devemos mais usar 'apt-key add'?",
        hint: "Tem a ver com segurança.",
        answer:
          "apt-key foi descontinuado porque adicionava chaves a um chaveiro global, válidas para QUALQUER repositório. Isso era um risco de segurança. O método moderno usa /etc/apt/keyrings/ e a opção [signed-by=...] na linha do .list, escopando a chave a um repositório específico.",
      },
      {
        id: 6,
        question: "Como travar a versão atual de um pacote para apt nunca atualizar?",
        hint: "Existe um caminho rápido com apt-mark e um caminho fino com /etc/apt/preferences.",
        answer:
          "Caminho rápido: sudo apt-mark hold nome_do_pacote. Para liberar: sudo apt-mark unhold nome. Caminho fino com pinning: criar um arquivo em /etc/apt/preferences.d/ com 'Package: nome', 'Pin: version X.Y.Z' e 'Pin-Priority: 1001'.",
      },
      {
        id: 7,
        question: "Você adicionou um repositório de terceiro e apt update reclama 'NO_PUBKEY'. O que está faltando?",
        hint: "Não basta apontar para o servidor.",
        answer:
          "A chave GPG do fornecedor não foi adicionada ao sistema. Baixe a chave do site oficial deles, dearmore com gpg --dearmor e coloque em /etc/apt/keyrings/, depois aponte com [signed-by=...] no arquivo .list. Nunca use apt-key add (descontinuado).",
      },
      {
        id: 8,
        question: "É seguro mudar a linha 'bookworm' para 'testing' no sources.list para ter pacotes mais novos?",
        hint: "Pense no impacto de mudar a base inteira.",
        answer:
          "NÃO sem cuidado. Trocar a branch inteira fará o próximo full-upgrade tentar atualizar todos os pacotes para versões da testing, o que pode quebrar o sistema. Para casos pontuais, prefira backports. Se quiser de fato migrar para testing, faça em VM/teste e configure pinning antes.",
      },
    ],
    references: [
      { title: "Wiki Debian — SourcesList", url: "https://wiki.debian.org/SourcesList" },
      { title: "Manual sources.list", url: "https://manpages.debian.org/bookworm/apt/sources.list.5.en.html" },
      { title: "Manual apt_preferences (pinning)", url: "https://manpages.debian.org/bookworm/apt/apt_preferences.5.en.html" },
      { title: "Debian Handbook — APT Configuration", url: "https://debian-handbook.info/browse/stable/sect.apt-get.html" },
      { title: "Debian Backports", url: "https://backports.debian.org/" },
    ],
  },

  {
    id: "backports-flatpak",
    title: "Backports, Flatpak e Snap — Software Mais Novo",
    icon: "✨",
    category: "Pacotes",
    description: "Aprenda três caminhos para conseguir software mais novo que o que vem na Debian estável: backports oficiais, Flatpak (Flathub) e Snap.",
    objectives: [
      "Habilitar e usar Debian Backports com a flag correta",
      "Instalar e gerenciar Flatpak no Debian",
      "Conhecer o ecossistema Snap e as razões da preferência Debian por Flatpak",
      "Decidir qual mecanismo usar para cada tipo de software",
      "Configurar permissões granulares de Flatpaks com Flatseal",
    ],
    content: [
      "Imagine que você comprou uma TV de modelo 2022. Ela é estável, funciona, recebe atualizações de segurança — mas o app de streaming favorito da sua filha lançou uma versão nova com um recurso que ela quer hoje. A TV não recebe mais updates de versão, só de segurança. Você fica com três opções: aceitar a versão antiga, comprar uma TV nova, ou plugar um Chromecast que roda a versão nova por fora. O Debian Stable é exatamente assim: estabilidade vem do congelamento, mas isso significa que LibreOffice fica em 7.4, Firefox em ESR 115 e o kernel em 6.1 durante anos. Para conseguir versões novas sem desistir da estabilidade, existem caminhos paralelos.",
      "O primeiro caminho é o Debian Backports. É um repositório oficial mantido pela própria comunidade Debian: alguns mantenedores pegam pacotes da branch testing, recompilam para rodar na stable e disponibilizam como pacotes alternativos. Quem ativa o backports tem acesso a kernels mais novos (importante para hardware recente), versões mais recentes do LibreOffice, libvirt para virtualização, podman, e por aí vai. Como é mantido pela mesma comunidade, herda parte da disciplina Debian, ainda que com menos teste que a stable. Para usar, basta adicionar a linha do backports no sources.list e instalar com a flag -t bookworm-backports.",
      "O segundo caminho é o Flatpak, que segue uma filosofia bem diferente. Em vez de empacotar para uma distro específica, um app Flatpak vem com TODAS as suas dependências bundle (chamadas de runtime). Funciona igual em Debian, Fedora, Arch ou Ubuntu. Cada app roda em um sandbox: ele só vê os arquivos e dispositivos que recebe permissão para acessar. O repositório principal é o Flathub (flathub.org), aberto e comunitário. É a forma moderna de instalar apps gráficos que mudam rápido, como Spotify, Discord, Telegram, OBS Studio, Inkscape, Blender — apps que você quer sempre na versão mais nova mas não dá para esperar a próxima release Debian.",
      "Habilitar Flatpak no Debian leva três comandos: instalar o pacote flatpak via apt, adicionar o remote do Flathub, e fazer logout/login para que o menu de aplicativos enxergue os atalhos novos. Esse logout/login é o ponto que confunde mais iniciantes — você instala um app, não vê no menu, acha que algo deu errado. Não deu. Apenas precisa reiniciar a sessão, porque os atalhos ficam em /var/lib/flatpak/exports/share/applications/ e o menu só varre essa pasta no login.",
      "O terceiro caminho é o Snap, criado pela Canonical (empresa por trás do Ubuntu). Tecnicamente é parecido com Flatpak: cada app vem com dependências, roda em sandbox, atualiza independente do sistema. Mas o Snap tem uma característica polêmica: o repositório oficial (Snap Store) é proprietário e centralizado pela Canonical. Isso vai contra a filosofia do projeto Debian, que prefere infraestrutura aberta. Por isso, no Debian, Snap é instalável (sudo apt install snapd), mas não é a recomendação oficial. A comunidade prefere Flatpak. Você só precisa de Snap se um app específico que você quer só existe em formato snap (raríssimo hoje).",
      "Saber qual usar é parte do ofício. Software de sistema (kernel, drivers, daemons, ferramentas CLI básicas) sempre vai por APT padrão; backports só quando precisar de versão mais nova. Apps gráficos modernos que mudam rápido (Spotify, Discord, Telegram, Steam, OBS Studio) ficam ótimos via Flatpak/Flathub: sandbox + sempre atualizado + a comunidade do Flathub mantém. Software corporativo proprietário (Zoom, AnyDesk, fornecedores fechados) geralmente vem como .deb do site, instalado com apt install ./arquivo.deb. Editores de código (VSCode, JetBrains) tanto faz: existem em .deb oficial dos fornecedores e em Flatpak no Flathub.",
      "As vantagens do Flatpak para apps gráficos são reais: versões sempre atualizadas porque dependem do mantenedor do Flathub, não do release Debian; instalação isolada em /var/lib/flatpak/ sem poluir /usr; sandbox limitando acesso a arquivos pessoais; atualização que não quebra outros apps; portabilidade entre distros. As desvantagens também são reais: cada app traz suas dependências, então ocupa mais disco (Spotify Flatpak tem ~250 MB porque carrega Electron, GTK, etc.); performance levemente menor por causa do sandbox; integração visual pode ficar imperfeita (tema do sistema não aplica perfeitamente, ícone do cursor diferente).",
      "O sandbox do Flatpak é poderoso mas pode atrapalhar. Por exemplo, um Flatpak não acessa por padrão arquivos fora da home do usuário, e até dentro da home pode ter restrições. Se um Spotify não consegue ver sua pasta de música, é o sandbox em ação. Você ajusta com flatpak override (CLI) ou com Flatseal (interface gráfica). Flatseal, aliás, é também um Flatpak: instale com flatpak install flathub com.github.tchx84.Flatseal. Ele lista todos os Flatpaks instalados e mostra quais permissões cada um tem, com checkboxes para ativar/desativar acesso a câmera, microfone, rede, pastas, etc.",
      "Confusões clássicas valem destaque. Primeira: 'instalei o Spotify via .deb e via Flatpak — agora tenho dois!'. Sim, eles coexistem, ocupam memória dobrada e te confundem. Escolha um e remova o outro. Segunda: 'meus Flatpaks somem do menu'. Você esqueceu o logout/login após o primeiro install. Terceira: 'Flatpak ocupa muito disco'. Verdade. Use flatpak uninstall --unused regularmente para remover runtimes que nenhum app usa mais. Quarta: 'Flatpak roda devagar'. Em apps modernos a diferença é imperceptível; só sente em casos raros de I/O intenso ou jogos pesados.",
      "Atualizar Flatpaks é independente de apt. Use flatpak update para verificar e atualizar todos os apps Flatpak instalados. Você pode automatizar via cron ou systemd timer se quiser. Note que apt upgrade NÃO atualiza Flatpaks — são sistemas separados. Quem se lembra disso evita a surpresa de descobrir, meses depois, que o Discord Flatpak está desatualizado mesmo tendo rodado todas as atualizações do sistema religiosamente.",
      "Ao terminar este capítulo, você vai conseguir habilitar backports para conseguir um kernel mais novo no seu laptop, instalar Flatpak no Debian e usar Flathub para ter Spotify, Discord e Telegram sempre atualizados, ajustar permissões de Flatpaks com Flatseal quando algo não acessar suas pastas, e decidir com critério qual caminho usar para cada tipo de software. Vai parar de achar que precisa migrar de distro toda vez que quer um software mais novo.",
    ],
    commands: [
      {
        command: "sudo apt install -t bookworm-backports",
        description: "Instala um pacote da branch backports em vez da stable. A flag -t é OBRIGATÓRIA.",
        example: "sudo apt install -t bookworm-backports linux-image-amd64",
      },
      {
        command: "sudo apt install flatpak",
        description: "Instala o sistema Flatpak no Debian.",
        example: "sudo apt install -y flatpak",
      },
      {
        command: "flatpak remote-add",
        description: "Adiciona um repositório (remote) Flatpak. O Flathub é o principal.",
        example: "flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo",
      },
      {
        command: "flatpak install",
        description: "Instala um app Flatpak (do Flathub por padrão).",
        example: "flatpak install flathub org.signal.Signal",
        flags: [
          { flag: "-y", description: "Aceita confirmações sem perguntar" },
          { flag: "--user", description: "Instala apenas para o usuário atual, sem precisar root" },
        ],
      },
      {
        command: "flatpak run",
        description: "Roda um app Flatpak pela linha de comando (útil para scripts).",
        example: "flatpak run org.signal.Signal",
      },
      {
        command: "flatpak list",
        description: "Lista todos os Flatpaks instalados no sistema.",
        example: "flatpak list",
        output: `Name                  Application ID                Version  Branch
Signal                org.signal.Signal             6.40.1   stable
Telegram Desktop      org.telegram.desktop          4.14.4   stable
Spotify               com.spotify.Client            1.2.30   stable
Flatseal              com.github.tchx84.Flatseal    2.2.0    stable`,
      },
      {
        command: "flatpak update",
        description: "Atualiza todos os Flatpaks instalados (independente do apt).",
        example: "flatpak update -y",
      },
      {
        command: "flatpak search",
        description: "Busca um app no Flathub pelo nome ou descrição.",
        example: "flatpak search spotify",
      },
      {
        command: "flatpak uninstall",
        description: "Remove um Flatpak instalado.",
        example: "flatpak uninstall com.spotify.Client",
        flags: [
          { flag: "--unused", description: "Remove runtimes que nenhum app instalado usa" },
          { flag: "--delete-data", description: "Apaga também os dados do app em ~/.var/app/" },
        ],
      },
      {
        command: "flatpak override",
        description: "Configura permissões granulares para um Flatpak (acesso a pastas, dispositivos, etc.).",
        example: "flatpak override --user --filesystem=~/Música com.spotify.Client",
      },
      {
        command: "flatpak info",
        description: "Mostra informações detalhadas de um Flatpak: versão, runtime, tamanho, permissões.",
        example: "flatpak info com.spotify.Client",
      },
      {
        command: "flatpak remotes",
        description: "Lista os repositórios Flatpak configurados (remotes).",
        example: "flatpak remotes",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Apps Flatpak não aparecem no menu logo após instalar",
        content:
          "Após o primeiro install Flatpak, faça logout e login (ou reinicie). O menu de aplicativos só varre /var/lib/flatpak/exports/ na nova sessão. Daí em diante, novos Flatpaks aparecem sem precisar relogar.",
      },
      {
        type: "warning",
        title: "Não tenha o mesmo app duplicado",
        content:
          "Spotify via .deb + Spotify Flatpak vão coexistir, ocupar memória dobrada e te confundir. Escolha um e remova o outro. O mesmo vale para Discord, Telegram, VSCode, etc.",
      },
      {
        type: "success",
        title: "Use Flatseal para gerenciar permissões com interface gráfica",
        content:
          "Instale com flatpak install flathub com.github.tchx84.Flatseal. Ele lista todos os Flatpaks instalados e dá uma interface amigável para liberar/restringir acesso a câmera, microfone, pastas, rede e dispositivos. Indispensável quando um Flatpak não acessa o que deveria.",
      },
      {
        type: "info",
        title: "Backports tem menos teste — use só quando precisar",
        content:
          "Pacotes do backports são oficialmente Debian, mas passaram por menos testes que a stable. Se você não tem motivo específico para querer a versão mais nova de algo, fique na stable pura. Backports é remédio, não vitamina.",
      },
      {
        type: "danger",
        title: "Não confunda flatpak update com apt upgrade",
        content:
          "São sistemas separados. apt upgrade NÃO atualiza Flatpaks. flatpak update NÃO atualiza pacotes APT. Para manter tudo em dia, rode os dois (ou automatize com cron).",
      },
    ],
    practiceLabs: [
      {
        title: "Setup completo de Flatpak + instalar apps populares",
        goal: "Habilitar Flatpak no seu Debian e instalar cinco apps comuns para uso diário.",
        steps: [
          "Instale o pacote flatpak via apt.",
          "Adicione o repositório Flathub.",
          "Faça logout/login para que o menu enxergue os Flatpaks.",
          "Instale Telegram, Signal, Spotify, Discord e OBS Studio.",
          "Confirme com flatpak list que todos estão lá.",
          "Confirme que aparecem no menu de aplicativos.",
        ],
        command: `# 1) Instalar Flatpak
sudo apt install -y flatpak

# 2) Adicionar Flathub
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# 3) Logout e login (faça pelo menu da interface)

# 4) Após relogar, instalar apps
flatpak install -y flathub org.telegram.desktop
flatpak install -y flathub org.signal.Signal
flatpak install -y flathub com.spotify.Client
flatpak install -y flathub com.discordapp.Discord
flatpak install -y flathub com.obsproject.Studio

# 5) Conferir
flatpak list`,
        verify:
          "Após login, flatpak list mostra os 5 apps. No menu de aplicativos, todos aparecem com seus ícones. Clica e abre.",
      },
      {
        title: "Habilitar backports e instalar kernel mais novo",
        goal: "Adicionar o repositório bookworm-backports e instalar um kernel mais recente (útil para hardware novo).",
        steps: [
          "Adicione a linha do backports em /etc/apt/sources.list.d/backports.list.",
          "Atualize a lista de pacotes.",
          "Verifique a versão do kernel disponível em backports.",
          "Instale o kernel novo com a flag -t.",
          "Reinicie e confirme com uname -r.",
        ],
        command: `# 1) Adicionar backports
echo 'deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware' | sudo tee /etc/apt/sources.list.d/backports.list

# 2) Atualizar
sudo apt update

# 3) Conferir versão disponível
apt-cache policy linux-image-amd64

# 4) Instalar
sudo apt install -t bookworm-backports linux-image-amd64

# 5) Reinicie
# sudo reboot

# 6) Após reiniciar, conferir versão ativa
uname -r`,
        verify: "uname -r após reboot deve mostrar uma versão de kernel mais nova que a anterior.",
      },
      {
        title: "Ajustar permissões de um Flatpak com Flatseal",
        goal: "Instalar Flatseal e usar para liberar acesso a uma pasta específica para um Flatpak.",
        steps: [
          "Instale o Flatseal via Flatpak.",
          "Abra o Flatseal no menu.",
          "Selecione um Flatpak instalado.",
          "Na seção Filesystem, libere acesso a uma pasta específica.",
          "Teste no app que ele agora vê a pasta.",
        ],
        command: `# Instalar Flatseal
flatpak install -y flathub com.github.tchx84.Flatseal

# Alternativa via CLI (sem Flatseal): liberar pasta para Spotify
flatpak override --user --filesystem=~/Música com.spotify.Client

# Conferir override aplicado
flatpak override --user --show com.spotify.Client`,
        verify: "Após o override, abrir Spotify e tentar adicionar pasta local de música deve funcionar sem 'permissão negada'.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Quando vale ativar o Debian Backports?",
        hint: "Pense em uma situação onde a versão da stable não te atende.",
        answer:
          "Quando você precisa de uma versão MAIS NOVA de um pacote específico de sistema (kernel para hardware recente, libvirt, postgres, podman) sem migrar a base inteira. Mantém o resto do sistema na estabilidade da stable.",
      },
      {
        id: 2,
        question: "Por que a comunidade Debian prefere Flatpak a Snap?",
        hint: "Pense em quem controla cada repositório.",
        answer:
          "Flatpak tem repositório aberto: o Flathub é gerenciado pela comunidade e qualquer um pode rodar um remote próprio. Snap depende do Snap Store, que é proprietário e centralizado pela Canonical. Debian valoriza infraestrutura aberta.",
      },
      {
        id: 3,
        question: "Como instalar Spotify via Flatpak passo a passo?",
        hint: "Você precisa do Flatpak instalado e do Flathub adicionado antes.",
        answer:
          "1) sudo apt install flatpak; 2) flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo; 3) Logout/login (na primeira vez); 4) flatpak install flathub com.spotify.Client.",
      },
      {
        id: 4,
        question: "Por que apps Flatpak ocupam mais espaço que .deb equivalentes?",
        hint: "Pense em dependências.",
        answer:
          "Cada Flatpak traz suas dependências (runtimes como GTK, KDE, Electron) bundle, em vez de compartilhar com o sistema. Trade-off: mais espaço em disco em troca de isolamento, versões garantidas e independência do sistema base.",
      },
      {
        id: 5,
        question: "Como atualizar TODOS os Flatpaks de uma vez?",
        hint: "Comando análogo ao apt upgrade, mas para Flatpak.",
        answer: "flatpak update -y. Lembre que apt upgrade NÃO atualiza Flatpaks — são sistemas separados.",
      },
      {
        id: 6,
        question: "Qual flag obrigatória para instalar pacote do backports?",
        hint: "Sem ela, o apt pega da stable.",
        answer:
          "-t bookworm-backports (substitua bookworm pelo codinome da sua versão Debian). Sem essa flag, apt pega a versão da stable normal porque tem prioridade maior por padrão.",
      },
      {
        id: 7,
        question: "Você instalou um Flatpak novo mas ele não aparece no menu de aplicativos. O que fazer?",
        hint: "É um problema comum no primeiro install.",
        answer:
          "Faça logout e login (ou reinicie). O menu só varre /var/lib/flatpak/exports/ ao iniciar a sessão. Esse problema só aparece no PRIMEIRO Flatpak instalado; daí em diante, novos Flatpaks aparecem sem relogar.",
      },
      {
        id: 8,
        question: "Um Flatpak não consegue acessar sua pasta ~/Música. Como liberar?",
        hint: "Sandbox em ação.",
        answer:
          "Use Flatseal (interface gráfica) ou flatpak override pela CLI. Exemplo: flatpak override --user --filesystem=~/Música com.spotify.Client. O sandbox do Flatpak por padrão restringe acesso fora da home, e algumas pastas dentro dela.",
      },
    ],
    references: [
      { title: "Debian Backports oficial", url: "https://backports.debian.org/" },
      { title: "Flathub (catálogo Flatpak)", url: "https://flathub.org/" },
      { title: "Documentação Flatpak", url: "https://docs.flatpak.org/en/latest/" },
      { title: "Flatseal (gerenciar permissões)", url: "https://flathub.org/apps/com.github.tchx84.Flatseal" },
      { title: "Wiki Debian — Flatpak", url: "https://wiki.debian.org/Flatpak" },
    ],
  },
];
