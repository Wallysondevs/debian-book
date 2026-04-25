import { Module } from "@/types/module";

export const pacotes: Module[] = [
  {
    id: "apt",
    title: "APT — O Gerenciador de Pacotes do Debian",
    icon: "📦",
    category: "Pacotes",
    description: "apt update, install, upgrade, search, remove, purge — tudo que você faz com software no Debian.",
    objectives: [
      "Instalar, remover e atualizar pacotes com apt",
      "Buscar pacotes pelo nome ou função",
      "Entender a diferença entre upgrade e full-upgrade",
      "Limpar cache e pacotes não utilizados",
    ],
    content: [
      "APT (Advanced Package Tool) é o gerenciador de pacotes do Debian e seus derivados (Ubuntu, Mint, Kali). Ele cuida de tudo: baixar pacotes dos repositórios, resolver dependências automaticamente, verificar assinaturas GPG, instalar, atualizar e remover. Antes do APT, instalar software no Linux era um inferno chamado 'dependency hell'.",
      "O comando moderno é simplesmente 'apt' (introduzido em 2014). Antes existia 'apt-get' e 'apt-cache' separados — ainda funcionam, mas em scripts (porque a saída é estável; a do 'apt' muda entre versões). Para uso interativo: 'apt'. Para scripts: 'apt-get'.",
      "Comandos do dia a dia, em ordem de uso:\n\nsudo apt update                      atualiza LISTA de pacotes (não instala nada)\nsudo apt upgrade                     instala atualizações disponíveis\nsudo apt full-upgrade                idem, mas pode REMOVER pacotes em conflito\nsudo apt install nome                instala pacote\nsudo apt install pkg1 pkg2 pkg3      instala vários\nsudo apt remove nome                 remove (mantém configs em /etc)\nsudo apt purge nome                  remove + apaga configs\nsudo apt autoremove                  remove dependências órfãs\napt search palavra                   busca pacotes\napt show pacote                      detalhes de um pacote\napt list --installed                 lista o que está instalado\napt list --upgradable                lista o que tem atualização",
      "Diferença entre upgrade e full-upgrade:\n• upgrade — atualiza pacotes existentes para versão nova, MAS nunca remove nada. Se a nova versão de um pacote requer remover outro, ele NÃO atualiza.\n• full-upgrade (= dist-upgrade) — atualiza tudo, removendo pacotes em conflito se necessário. Mais agressivo, mas o que VOCÊ geralmente quer.\n\nRecomendação: 'sudo apt update && sudo apt full-upgrade' uma vez por semana.",
      "Diferença entre remove e purge:\n• remove — desinstala o pacote, MAS deixa arquivos de configuração em /etc/. Útil se você vai reinstalar depois (preserva customizações).\n• purge — desinstala E apaga configs. 'limpeza completa'. Use se quer de fato remover tudo.\n\nDica: depois de remove/purge, sempre rode 'sudo apt autoremove' para tirar dependências que ninguém mais usa.",
      "Para instalar pacote SEM perguntar 'continuar? [S/n]', use -y (yes a tudo):\n\nsudo apt install -y vim git htop\n\nÚtil em scripts. Mas TEME — combinado com pacotes erradosp, pode quebrar o sistema sem você ter chance de cancelar. Para automatizações: combine com 'apt --simulate' antes para revisar.",
      "Cache de pacotes baixados fica em /var/cache/apt/archives/. Pode chegar a vários GB. Limpe com:\n\nsudo apt clean                  apaga TUDO do cache\nsudo apt autoclean              só apaga pacotes que não estão mais nos repositórios (mais conservador)\n\nLimpar cache não desinstala nada — só apaga os .deb baixados (que poderiam ser úteis para reinstalar offline). Se está sem espaço, mande clean.",
      "Erros comuns e soluções:\n• 'Unable to fetch archives' — apt update está velho. Rode 'sudo apt update' primeiro.\n• 'Could not get lock /var/lib/dpkg/lock' — outro apt já está rodando (talvez apt automático em background). Aguarde ou: 'sudo killall apt apt-get'.\n• 'Unmet dependencies' — pacote requer algo que não pode ser instalado. Tente 'sudo apt --fix-broken install'.\n• 'NO_PUBKEY' ao update — repositório de terceiro sem chave GPG. Adicione a chave correta.",
    ],
    commands: [
      {
        command: "sudo apt update",
        description: "Atualiza a LISTA de pacotes disponíveis. Não instala nada. Rode antes de install/upgrade.",
        example: "sudo apt update",
      },
      {
        command: "sudo apt full-upgrade",
        description: "Atualiza tudo (pode remover pacotes em conflito). O upgrade que você quer.",
        example: "sudo apt full-upgrade -y",
      },
      {
        command: "sudo apt install",
        description: "Instala pacote(s).",
        example: "sudo apt install -y htop neofetch tree",
        flags: [
          { flag: "-y", description: "Assume yes (sem perguntar)" },
          { flag: "--no-install-recommends", description: "Não instala recomendações" },
          { flag: "-t bookworm-backports", description: "Instala da branch backports" },
          { flag: "--reinstall", description: "Reinstala mesmo se já está instalado" },
        ],
      },
      {
        command: "sudo apt remove / purge",
        description: "Remove pacote (purge também apaga configs).",
        example: "sudo apt purge libreoffice-*",
        flags: [
          { flag: "remove", description: "Mantém configs em /etc" },
          { flag: "purge", description: "Apaga configs também" },
          { flag: "--autoremove", description: "Junto, remove órfãos" },
        ],
      },
      {
        command: "sudo apt autoremove",
        description: "Remove dependências instaladas automaticamente que ninguém mais usa.",
        example: "sudo apt autoremove --purge -y",
      },
      {
        command: "apt search",
        description: "Busca pacotes pelo nome OU descrição.",
        example: "apt search 'screen recorder'",
      },
      {
        command: "apt show",
        description: "Detalhes de um pacote: versão, dependências, descrição.",
        example: "apt show vim",
      },
      {
        command: "apt list --installed",
        description: "Lista pacotes instalados.",
        example: "apt list --installed | wc -l",
      },
      {
        command: "apt list --upgradable",
        description: "Lista pacotes com atualização disponível.",
        example: "apt list --upgradable",
      },
      {
        command: "apt-cache policy",
        description: "Mostra de qual repositório vem um pacote, com prioridades.",
        example: "apt-cache policy firefox-esr",
      },
      {
        command: "sudo apt clean",
        description: "Apaga cache de pacotes baixados (libera espaço em /var/cache/apt).",
        example: "sudo apt clean",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Comando 'mágico' do dia a dia",
        content:
          "sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y && sudo apt clean — atualiza tudo, limpa órfãos e libera cache. Pode rodar uma vez por semana sem medo.",
      },
      {
        type: "warning",
        title: "NUNCA rode 'apt' duas vezes em paralelo",
        content:
          "Apt usa lock em /var/lib/dpkg/lock. Se você rodar dois 'apt install' ao mesmo tempo (ex: dois terminais), o segundo dá erro. Espere o primeiro terminar.",
      },
      {
        type: "success",
        title: "Use --simulate para grandes mudanças",
        content:
          "Antes de 'sudo apt full-upgrade' que vai mexer em centenas de pacotes, rode 'sudo apt --simulate full-upgrade' — mostra TUDO que faria sem fazer. Lê com calma. Se OK, roda sem o --simulate.",
      },
    ],
    practiceLabs: [
      {
        title: "Workflow completo de manutenção semanal",
        goal: "Praticar o ciclo update-upgrade-cleanup que você deveria rodar semanalmente.",
        steps: [
          "Atualize a lista.",
          "Veja quantos pacotes têm atualização.",
          "Atualize tudo.",
          "Remova órfãos.",
          "Limpe cache.",
          "Cheque tamanho de /var/cache/apt antes e depois.",
        ],
        command: `# 1) Tamanho inicial do cache
du -sh /var/cache/apt/archives/

# 2) Atualizar lista
sudo apt update

# 3) Quantos tem atualizacao?
apt list --upgradable 2>/dev/null | wc -l

# 4) Atualizar tudo
sudo apt full-upgrade -y

# 5) Remover orfaos
sudo apt autoremove --purge -y

# 6) Limpar cache
sudo apt clean

# 7) Tamanho depois
du -sh /var/cache/apt/archives/`,
        verify:
          "O tamanho de /var/cache/apt/archives deve cair drasticamente após 'apt clean'. Se você atualizou kernel, reinicie depois.",
      },
      {
        title: "Encontrar e instalar uma alternativa de software",
        goal: "Praticar o fluxo: 'queria um app para X, como acho?'",
        steps: [
          "Busque pacotes com 'reproduzir musica'.",
          "Veja detalhes de 2-3 candidatos.",
          "Instale um.",
          "Teste se funciona.",
        ],
        command: `# 1) Buscar
apt search 'music player' | head -20

# 2) Detalhes de candidatos populares
apt show clementine 2>/dev/null | head -20
apt show audacious 2>/dev/null | head -20

# 3) Escolher e instalar (audacious eh leve)
sudo apt install -y audacious

# 4) Testar
audacious --help | head -5

# 5) Caso queira desinstalar depois:
# sudo apt purge audacious
# sudo apt autoremove --purge`,
        verify:
          "O 'audacious --help' deve funcionar. No menu de aplicativos, deve aparecer 'Audacious'. Conseguiu encontrar e instalar = você sabe o fluxo.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Diferença entre 'apt update' e 'apt upgrade'?",
        answer: "update atualiza a LISTA de pacotes (não instala nada). upgrade instala as atualizações disponíveis.",
      },
      {
        id: 2,
        question: "Diferença entre 'apt remove' e 'apt purge'?",
        answer: "remove desinstala o pacote mas mantém configs em /etc/. purge desinstala E apaga configs.",
      },
      {
        id: 3,
        question: "Como instalar um pacote sem confirmar 'S/n'?",
        answer: "sudo apt install -y nome — o -y aceita tudo automaticamente.",
      },
      {
        id: 4,
        question: "Como liberar espaço removendo cache de pacotes baixados?",
        answer: "sudo apt clean — apaga TUDO em /var/cache/apt/archives/.",
      },
      {
        id: 5,
        question: "Por que usar full-upgrade em vez de upgrade?",
        answer:
          "full-upgrade pode REMOVER pacotes em conflito para conseguir atualizar tudo. upgrade não remove nada — pode deixar pacotes desatualizados se houver conflito. Em sistemas estáveis, full-upgrade é seguro e mais completo.",
      },
      {
        id: 6,
        question: "Apt deu erro 'Could not get lock'. O que aconteceu?",
        answer:
          "Outro processo apt está rodando (talvez atualização automática em segundo plano). Aguarde 1-2 minutos. Se persistir: sudo killall apt apt-get; sudo rm /var/lib/dpkg/lock-frontend.",
      },
    ],
    references: [
      { title: "Manual oficial do APT", url: "https://manpages.debian.org/bookworm/apt/apt.8.en.html" },
      { title: "Wiki Debian — Apt", url: "https://wiki.debian.org/Apt" },
    ],
  },

  {
    id: "dpkg",
    title: "dpkg — O Nível Baixo do APT",
    icon: "🔩",
    category: "Pacotes",
    description: "Quando você precisa instalar um .deb manual, ver de qual pacote vem um arquivo, ou listar arquivos de um pacote.",
    objectives: [
      "Instalar pacotes .deb baixados manualmente",
      "Descobrir de qual pacote vem um arquivo (dpkg -S)",
      "Listar arquivos instalados por um pacote (dpkg -L)",
      "Reconfigurar pacotes (dpkg-reconfigure)",
    ],
    content: [
      "dpkg é a ferramenta de baixo nível do Debian. O apt é uma camada amigável SOBRE o dpkg. Quando você roda 'apt install pacote', por baixo dos panos é o dpkg que instala. dpkg trabalha apenas com arquivos .deb LOCAIS — não baixa nada da internet, não resolve dependências.",
      "Quando usar dpkg em vez de apt:\n• Instalar um .deb que você baixou manualmente (Google Chrome, VSCode, Discord, Steam — todos vêm como .deb fora do repositório oficial).\n• Descobrir de qual pacote vem um arquivo qualquer.\n• Listar TODOS os arquivos que um pacote instalou.\n• Forçar instalação ignorando alguma checagem (raro, perigoso).\n• Reconfigurar um pacote (re-rodar o setup interativo do install).",
      "Para instalar .deb manualmente — método antigo:\n\nsudo dpkg -i arquivo.deb\n\nProblema: se faltar dependências, dpkg instala parcialmente e dá erro. Solução: rodar 'sudo apt --fix-broken install' depois (apt resolve as dependências). Ou método moderno simples:\n\nsudo apt install ./arquivo.deb\n\nO ./ é importante (apt distingue entre nome de pacote e arquivo local). Apt resolve dependências automaticamente.",
      "Casos clássicos onde você usa dpkg/apt local:\n• Google Chrome — não está no repositório Debian. Baixe o .deb de google.com/chrome.\n• VSCode — Microsoft distribui .deb. Ou adicione o repositório deles.\n• Discord — distribui .deb direto.\n• Slack, Steam, AnyDesk — todos via .deb.\n\nProcedimento: baixar o .deb, instalar com 'sudo apt install ./arquivo.deb'.",
      "dpkg para investigação: descobrir de qual pacote vem um arquivo.\n\nEx: você quer saber de qual pacote vem o /usr/bin/firefox-esr:\n\ndpkg -S /usr/bin/firefox-esr\n# Output: firefox-esr: /usr/bin/firefox-esr\n\nÚtil para entender o que cada coisa faz no sistema. Ou para descobrir 'que pacote eu tenho que instalar para ter o comando X?' (faz isso pela busca reversa, ou apt-file).",
      "Listar TODOS os arquivos que um pacote instalou:\n\ndpkg -L vim\n\nVerá tudo: binários em /usr/bin, manuais em /usr/share/man, configs em /etc, etc. Útil para entender o que um pacote 'mexe' no sistema.",
      "Reconfigurar um pacote (re-rodar setup interativo) — útil quando algo deu errado durante a instalação:\n\nsudo dpkg-reconfigure tzdata          troca timezone\nsudo dpkg-reconfigure locales         troca idiomas\nsudo dpkg-reconfigure keyboard-configuration\nsudo dpkg-reconfigure unattended-upgrades\n\nMuito útil para corrigir setup feito errado durante a instalação.",
      "Listar pacotes instalados (alternativa ao apt list --installed):\n\ndpkg -l                          # lista TUDO (pode ser longo)\ndpkg -l | grep firefox           # filtra\ndpkg --get-selections            # mais simples (uma coluna)\n\nA primeira coluna do 'dpkg -l' tem letras: 'ii' = instalado OK, 'rc' = removido mas com configs, 'pn' = removido completamente. Use 'dpkg -l | grep ^rc' para encontrar configs órfãs e limpar com 'apt purge'.",
    ],
    commands: [
      {
        command: "sudo dpkg -i",
        description: "Instala arquivo .deb.",
        example: "sudo dpkg -i ~/Downloads/google-chrome-stable.deb",
      },
      {
        command: "sudo apt install ./arquivo.deb",
        description: "Forma moderna e melhor — instala .deb e RESOLVE dependências automaticamente.",
        example: "sudo apt install ./code_1.88.0-amd64.deb",
      },
      {
        command: "sudo apt --fix-broken install",
        description: "Resolve dependências quebradas após dpkg parcial.",
        example: "sudo apt --fix-broken install",
      },
      {
        command: "dpkg -S",
        description: "Search — de qual pacote vem este arquivo?",
        example: "dpkg -S /usr/bin/firefox-esr",
        output: "firefox-esr: /usr/bin/firefox-esr",
      },
      {
        command: "dpkg -L",
        description: "List — quais arquivos foram instalados pelo pacote?",
        example: "dpkg -L vim | head -10",
      },
      {
        command: "dpkg -l",
        description: "Lista todos os pacotes (estados: ii=instalado, rc=removido com configs).",
        example: "dpkg -l | grep firefox",
      },
      {
        command: "sudo dpkg --remove",
        description: "Remove pacote (mantém configs).",
        example: "sudo dpkg --remove firefox-esr",
      },
      {
        command: "sudo dpkg --purge",
        description: "Remove pacote + configs.",
        example: "sudo dpkg --purge firefox-esr",
      },
      {
        command: "sudo dpkg-reconfigure",
        description: "Reabre o setup interativo de um pacote.",
        example: "sudo dpkg-reconfigure tzdata",
      },
      {
        command: "apt-file",
        description: "Busca arquivo em pacotes NÃO INSTALADOS. Instale: sudo apt install apt-file && sudo apt-file update.",
        example: "apt-file search /usr/bin/python3",
      },
    ],
    tips: [
      {
        type: "success",
        title: "Prefira 'sudo apt install ./arquivo.deb'",
        content:
          "Em vez de 'sudo dpkg -i arquivo.deb' + 'sudo apt --fix-broken install', faça direto 'sudo apt install ./arquivo.deb'. O ./ é essencial. Apt baixa dependências e instala tudo numa tacada.",
      },
      {
        type: "warning",
        title: "Cuidado com .deb de fontes desconhecidas",
        content:
          "Um .deb pode conter scripts pré/pós-instalação que rodam como ROOT durante o install. Baixar .deb de site desconhecido = dar root para o autor. Só instale .debs de fontes oficiais (google.com, microsoft.com, etc.).",
      },
    ],
    practiceLabs: [
      {
        title: "Instalar Google Chrome via .deb",
        goal: "Praticar o fluxo de instalar software .deb que não está no repositório Debian.",
        steps: [
          "Baixe o .deb do site oficial.",
          "Instale com apt (resolve dependências automaticamente).",
          "Confirme com dpkg.",
        ],
        command: `# 1) Baixar
cd ~/Downloads
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

# 2) Instalar (apt resolve dependencias)
sudo apt install -y ./google-chrome-stable_current_amd64.deb

# 3) Confirmar
dpkg -l | grep google-chrome

# 4) Conferir que ele criou repositorio para receber atualizacoes
ls /etc/apt/sources.list.d/

# 5) Limpar download
rm google-chrome-stable_current_amd64.deb`,
        verify:
          "Após instalar, 'google-chrome --version' deve responder. No menu de apps deve aparecer 'Google Chrome'. O Chrome adiciona automaticamente seu repositório em sources.list.d/, então futuras atualizações vêm via apt update.",
      },
      {
        title: "Investigar de onde vem cada arquivo do sistema",
        goal: "Aprender a usar dpkg -S para entender o que cada coisa é.",
        steps: [
          "Descubra de qual pacote vem o /usr/bin/cat.",
          "Descubra de qual pacote vem o /etc/hostname.",
          "Liste os primeiros 10 arquivos do pacote 'bash'.",
          "Encontre arquivos de config de algum pacote.",
        ],
        command: `# De onde vem o cat?
dpkg -S /usr/bin/cat

# E o /etc/hostname?
dpkg -S /etc/hostname

# Lista de arquivos do bash
dpkg -L bash | head -10

# Arquivos de config (/etc) do nano
dpkg -L nano | grep '^/etc'`,
        verify:
          "/usr/bin/cat vem de coreutils. /etc/hostname vem de base-files (não de pacote específico do hostname). bash instala /bin/bash, /etc/skel/.bashrc, etc.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Quando usar dpkg em vez de apt?",
        answer:
          "Para instalar arquivo .deb local (Chrome, VSCode, Discord), descobrir de qual pacote vem um arquivo (dpkg -S), ou listar arquivos de um pacote (dpkg -L). Apt é melhor para tudo do dia a dia.",
      },
      {
        id: 2,
        question: "Forma MODERNA de instalar um arquivo .deb?",
        answer: "sudo apt install ./arquivo.deb (com ./). Apt resolve dependências automaticamente.",
      },
      {
        id: 3,
        question: "De qual pacote vem o /usr/bin/python3?",
        answer: "dpkg -S /usr/bin/python3 — o output mostra o pacote (provavelmente python3-minimal ou python3.X).",
      },
      {
        id: 4,
        question: "Como listar TODOS os arquivos instalados pelo pacote vim?",
        answer: "dpkg -L vim",
      },
      {
        id: 5,
        question: "Após dpkg -i deu erro de dependência. O que fazer?",
        answer: "sudo apt --fix-broken install — apt baixa as dependências faltantes e completa a instalação.",
      },
      {
        id: 6,
        question: "Como reconfigurar o timezone após instalar errado?",
        answer: "sudo dpkg-reconfigure tzdata — reabre o menu interativo de timezone.",
      },
    ],
    references: [
      { title: "Manual dpkg", url: "https://manpages.debian.org/bookworm/dpkg/dpkg.1.en.html" },
      { title: "Debian Policy Manual (avançado)", url: "https://www.debian.org/doc/debian-policy/" },
    ],
  },

  {
    id: "backports-flatpak",
    title: "Backports, Flatpak e Snap — Software Mais Novo",
    icon: "✨",
    category: "Pacotes",
    description: "Como conseguir software mais novo que o que vem no Debian estável: backports, Flatpak (Flathub) e Snap.",
    objectives: [
      "Habilitar e usar Debian backports",
      "Instalar e usar Flatpak (Flathub)",
      "Conhecer Snap (Ubuntu) e por que Debian prefere Flatpak",
      "Decidir qual usar para cada caso",
    ],
    content: [
      "O Debian Stable é, por design, conservador. Pacotes ficam congelados na versão lançada (LibreOffice 7.4, Firefox ESR 115, kernel 6.1 no bookworm). Isso garante estabilidade — mas às vezes você quer software mais novo. Existem 3 caminhos:",
      "1. Debian Backports — pacotes da branch testing recompilados para stable. Maneira oficial e segura. Cobre kernel, LibreOffice, libvirt, podman, etc.\n\nPara habilitar:\n\necho 'deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware' | sudo tee /etc/apt/sources.list.d/backports.list\nsudo apt update\n\nInstalar pacote do backports (precisa do '-t'):\n\nsudo apt install -t bookworm-backports linux-image-amd64\n\nO -t é importante — sem ele, apt pega da stable normal. Não habilite backports sem precisar (tem menos teste que stable).",
      "2. Flatpak — sistema universal de pacotes sandboxados. Cada app vem com suas dependências (= pode rodar versão diferente da do sistema). Roda isolado em sandbox (mais seguro). Repositório principal: Flathub (https://flathub.org/).\n\nInstalar Flatpak no Debian:\n\nsudo apt install -y flatpak\nflatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo\n# REINICIE o sistema (ou só faça logout/login) para o menu de apps achar os Flatpaks\n\nInstalar app via Flatpak:\n\nflatpak install flathub org.signal.Signal\nflatpak install flathub org.telegram.desktop\nflatpak install flathub com.spotify.Client\nflatpak install flathub com.discordapp.Discord",
      "Comandos úteis do Flatpak:\n\nflatpak list                               apps instalados\nflatpak update                             atualiza tudo\nflatpak run NOME                           roda app pela CLI\nflatpak uninstall NOME                     desinstala\nflatpak uninstall --unused                 limpa runtimes não usados\nflatpak search PALAVRA                     busca\n\nApps Flatpak aparecem no menu normalmente (depois do logout/login).",
      "3. Snap — alternativa criada pela Canonical (Ubuntu). Tecnicamente similar ao Flatpak (sandbox + dependências bundle), mas é controverso: o repositório (Snap Store) é PROPRIETÁRIO da Canonical, e a Canonical tem feito coisas que a comunidade Debian não gostou (forçar Firefox-snap em Ubuntu, por exemplo).\n\nNo Debian, Snap não é recomendado oficialmente. Você PODE instalar (sudo apt install snapd), mas a comunidade Debian sugere Flatpak. Se um app SÓ existe como snap (raro hoje), tudo bem instalar.",
      "Quando usar cada um:\n• Software de sistema (kernel, drivers, daemons, ferramentas CLI) → APT padrão. Backports se precisar versão nova.\n• Apps gráficos modernos (Spotify, Discord, Steam, Telegram, OBS Studio, Inkscape) → Flatpak/Flathub. Sandbox + sempre atualizado.\n• Software corporativo proprietário (Zoom, AnyDesk) → APT (.deb do site).\n• Editor de código (VSCode, JetBrains) → APT (repositório do fornecedor) ou Flatpak.",
      "Vantagens do Flatpak para apps gráficos:\n• Versões sempre atualizadas (não esperam release de Debian).\n• Não polui /usr — instala em /var/lib/flatpak.\n• Sandbox — app não acessa arquivos fora de ~/Downloads sem permissão.\n• Isolado — atualização não quebra outras coisas.\n• Funciona igual em qualquer distro (Debian, Fedora, Arch).\n\nDesvantagens:\n• Cada app traz suas dependências = ocupa mais disco (Spotify Flatpak ~250 MB).\n• Performance levemente menor (sandbox custa).\n• Integração visual pode ser imperfeita (tema, cursor).",
      "Configurar permissões granulares de Flatpak — útil para dar acesso a pastas específicas:\n\nflatpak override --user --filesystem=~/Documentos com.spotify.Client\n\nGUI gráfica: instale 'Flatseal' (também via Flatpak: 'flatpak install flathub com.github.tchx84.Flatseal'). Permite gerenciar permissões de qualquer Flatpak instalado.",
    ],
    commands: [
      {
        command: "sudo apt install -t bookworm-backports",
        description: "Instala pacote da branch backports (em vez de stable).",
        example: "sudo apt install -t bookworm-backports linux-image-amd64",
      },
      {
        command: "flatpak install",
        description: "Instala app Flatpak (do Flathub por padrão).",
        example: "flatpak install flathub org.signal.Signal",
      },
      {
        command: "flatpak run",
        description: "Roda app Flatpak.",
        example: "flatpak run org.signal.Signal",
      },
      {
        command: "flatpak list",
        description: "Lista Flatpaks instalados.",
        example: "flatpak list",
      },
      {
        command: "flatpak update",
        description: "Atualiza todos os Flatpaks.",
        example: "flatpak update -y",
      },
      {
        command: "flatpak search",
        description: "Busca app no Flathub.",
        example: "flatpak search spotify",
      },
      {
        command: "flatpak uninstall",
        description: "Remove Flatpak.",
        example: "flatpak uninstall com.spotify.Client",
      },
      {
        command: "flatpak override",
        description: "Configura permissões de um Flatpak.",
        example: "flatpak override --user --filesystem=~/Música com.spotify.Client",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Apps Flatpak não aparecem no menu?",
        content:
          "Faça LOGOUT/LOGIN depois de instalar Flatpak pela primeira vez. O menu de apps só varre /var/lib/flatpak/exports/ na sessão nova.",
      },
      {
        type: "warning",
        title: "Não instale o mesmo app em dois lugares",
        content:
          "Não tenha Spotify do .deb + Spotify Flatpak. Vão coexistir, ocupar memória dobrada e te confundir. Escolha um.",
      },
      {
        type: "success",
        title: "Flatseal para gerenciar permissões",
        content:
          "Instale 'Flatseal' (flatpak install flathub com.github.tchx84.Flatseal) — interface gráfica para controlar quais pastas/dispositivos cada Flatpak acessa. Especialmente útil se um Flatpak não consegue acessar suas pastas.",
      },
    ],
    practiceLabs: [
      {
        title: "Setup Flatpak completo + instalar apps populares",
        goal: "Habilitar Flatpak no seu Debian e instalar 5 apps comuns.",
        steps: [
          "Instale Flatpak.",
          "Adicione o repositório Flathub.",
          "Faça logout/login.",
          "Instale Telegram, Signal, Spotify, Discord, OBS Studio.",
          "Confirme que aparecem no menu.",
        ],
        command: `# 1) Instalar Flatpak
sudo apt install -y flatpak

# 2) Adicionar Flathub
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# 3) Logout/login (importante!)
# Faca isso pelo menu da interface

# 4) Apos logar de novo, instalar apps
flatpak install -y flathub org.telegram.desktop
flatpak install -y flathub org.signal.Signal
flatpak install -y flathub com.spotify.Client
flatpak install -y flathub com.discordapp.Discord
flatpak install -y flathub com.obsproject.Studio

# 5) Conferir
flatpak list`,
        verify:
          "Após login, 'flatpak list' mostra os 5 apps. No menu de aplicativos, eles aparecem normalmente — clica e abre.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Quando usar backports?",
        answer:
          "Quando você precisa de uma versão MAIS NOVA de um pacote DE SISTEMA (kernel, libvirt, postgres) que está congelado no stable. Mantém o resto do sistema estável.",
      },
      {
        id: 2,
        question: "Por que Flatpak e não Snap no Debian?",
        answer:
          "Flatpak tem repositório aberto (Flathub é gerenciado pela comunidade). Snap depende do Snap Store proprietário da Canonical. A comunidade Debian prefere soluções 100% abertas.",
      },
      {
        id: 3,
        question: "Como instalar Spotify via Flatpak?",
        answer: "flatpak install flathub com.spotify.Client (depois de adicionar Flathub e fazer logout/login).",
      },
      {
        id: 4,
        question: "Por que apps Flatpak ocupam mais espaço que .deb?",
        answer:
          "Cada Flatpak traz suas dependências (runtime KDE, GTK, etc.) bundled em vez de compartilhar com o sistema. Trade-off: mais espaço = mais isolamento e versões garantidas.",
      },
      {
        id: 5,
        question: "Como atualizar TODOS os Flatpaks de uma vez?",
        answer: "flatpak update -y",
      },
      {
        id: 6,
        question: "Qual flag obrigatória para instalar pacote do backports?",
        answer: "-t bookworm-backports (sem ele, apt pega a versão da stable normal).",
      },
    ],
    references: [
      { title: "Debian Backports oficial", url: "https://backports.debian.org/" },
      { title: "Flathub (catálogo Flatpak)", url: "https://flathub.org/" },
      { title: "Flatseal (gerenciar permissões)", url: "https://flathub.org/apps/com.github.tchx84.Flatseal" },
    ],
  },
];
