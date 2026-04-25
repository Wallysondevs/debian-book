import { Module } from "@/types/module";

export const instalacaoAmbiente: Module[] = [
  {
    id: "instalacao",
    title: "Instalando o Debian",
    icon: "💿",
    category: "Instalação e Ambiente",
    description: "Como baixar a ISO, gravar pendrive bootável, particionar disco e instalar o Debian 12 (bookworm) corretamente.",
    objectives: [
      "Escolher a ISO certa entre net-install, full-DVD e live",
      "Gravar um pendrive bootável de forma segura",
      "Entender particionamento (MBR vs GPT, swap, /home separado)",
      "Realizar pós-instalação básica (sudo, atualizações, locale)",
    ],
    content: [
      "O Debian oferece vários tipos de ISO para download. A confusão para iniciantes começa aqui. As principais:\n• netinst (≈400 MB) — instalador mínimo, baixa o resto da internet durante a instalação. Recomendado quando você tem boa conexão.\n• DVD-1 (≈4 GB) — instalador + pacotes principais offline. Útil sem internet.\n• Live (≈3 GB) — sistema rodando do pendrive, com opção de instalar. Tem GNOME, KDE, XFCE, MATE, Cinnamon e LXDE.\n• Imagens 'firmware non-free' (até Debian 11) — incluíam firmware proprietário. A partir do Debian 12, isso virou padrão na ISO oficial.",
      "Onde baixar: https://www.debian.org/distrib/ — sempre do site oficial. NUNCA baixe ISO de Debian de sites de terceiros, mesmo que pareçam confiáveis. Após baixar, verifique o checksum SHA256 — todo download oficial vem com um arquivo SHA256SUMS e SHA256SUMS.sign para você validar que ninguém adulterou a ISO no caminho.",
      "Para gravar a ISO num pendrive, no Linux use o comando 'dd' (poderoso e perigoso — pode apagar o HD se errar o /dev/sdX) ou ferramentas gráficas como GNOME Disks, balenaEtcher ou Ventoy. No Windows, use Rufus (selecione 'modo DD' para Debian). Para iniciantes, recomendo Ventoy: você formata o pendrive uma vez e depois é só copiar ISOs nele — vira pendrive multi-boot.",
      "Antes de instalar, decida o esquema de particionamento. As opções típicas:\n• Particionamento guiado, disco inteiro — o instalador faz tudo. Bom para iniciantes.\n• Guiado, com /home separado — recomendado para desktop. Se reinstalar o sistema depois, /home (seus arquivos pessoais) fica intocado.\n• Manual — você define cada partição. Necessário para LVM, criptografia full-disk, dual boot complexo.\n\nLayout mínimo recomendado para desktop:\n• /boot/efi  — 512 MB (FAT32) — só se usa UEFI\n• /          — 30-50 GB (ext4) — sistema\n• /home      — restante (ext4) — seus arquivos\n• swap       — 2× a RAM se RAM ≤ 8 GB; 1× a RAM se > 8 GB; ou nada se você não vai hibernar",
      "Sobre swap em 2026: máquinas modernas com SSD e bastante RAM (16 GB+) muitas vezes prescindem de swap. Mas mesmo com 16 GB, 4-8 GB de swap evita que o sistema travasse se algum processo vazar memória. Alternativa moderna: zram (cria swap comprimido na RAM, acelera tudo). Para hibernar (sleep-to-disk), você precisa de swap ≥ tamanho da RAM.",
      "Durante a instalação, o instalador pergunta:\n1) Idioma, país e teclado\n2) Hostname (nome da máquina, ex: 'meu-notebook')\n3) Domínio (deixe em branco se não estiver em rede corporativa)\n4) Senha do root (PODE deixar em branco — se deixar, o sudo é configurado para o usuário comum, igual no Ubuntu)\n5) Criar usuário comum (use o seu nome, não 'admin' ou 'user')\n6) Particionamento\n7) Fuso horário\n8) Pacotes adicionais (use 'tasksel' para escolher: ambiente gráfico, servidor SSH, utilitários)\n9) Instalar GRUB no MBR (sim, na grande maioria dos casos)",
      "Pós-instalação imediata, na primeira vez que entra: (a) atualizar sistema com 'sudo apt update && sudo apt full-upgrade', (b) configurar timezone correto se não estiver, (c) habilitar firewall com 'sudo apt install ufw && sudo ufw enable', (d) se for desktop, adicionar Flatpak para apps gráficos modernos. Se deu erro 'sudo: command not found', o root não está usando sudo — entre como root com 'su -' e instale: 'apt install sudo && usermod -aG sudo SEU_USUARIO'.",
      "Erros comuns na primeira instalação:\n• Boot não encontra o pendrive: desabilite 'Secure Boot' temporariamente na BIOS, ou use uma ISO com suporte (recente).\n• 'No bootable device' depois de instalar: GRUB foi instalado na partição errada, ou Windows ainda está como primeiro no boot. Use boot-repair via live USB.\n• Wi-Fi não funciona: provavelmente firmware non-free necessário. A ISO bookworm já inclui — se não, baixe a ISO 'firmware' separada.\n• Tela preta após boot: provavelmente conflito com driver de vídeo. Boot em recovery, instale driver correto (nvidia-driver para NVIDIA, firmware-amd-graphics para AMD).",
    ],
    commands: [
      {
        command: "sha256sum",
        description: "Calcula o SHA256 de um arquivo. Use para verificar que a ISO baixada não foi adulterada.",
        example: "sha256sum debian-12.5.0-amd64-netinst.iso",
        output: "0fbb3da0a39c2f8b7f0c5d8a2c3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2  debian-12.5.0-amd64-netinst.iso",
      },
      {
        command: "lsblk",
        description: "Lista todos os dispositivos de bloco (HDs, SSDs, pendrives, partições). USE para identificar o /dev/sdX correto antes de gravar com dd!",
        example: "lsblk",
        output: "NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS\nsda      8:0    0 465.8G  0 disk\n├─sda1   8:1    0   512M  0 part /boot/efi\n├─sda2   8:2    0   460G  0 part /\n└─sda3   8:3    0   5.3G  0 part [SWAP]\nsdb      8:16   1  29.8G  0 disk\n└─sdb1   8:17   1  29.8G  0 part",
      },
      {
        command: "dd",
        description: "Copia bytes de um lugar para outro. Use COM CUIDADO para gravar ISO em pendrive — errar o /dev/sdX apaga o HD.",
        example: "sudo dd if=debian-12.5.0-amd64-netinst.iso of=/dev/sdb bs=4M status=progress oflag=sync",
        flags: [
          { flag: "if=", description: "input file (a ISO)" },
          { flag: "of=", description: "output file (o pendrive — /dev/sdb, NÃO /dev/sdb1!)" },
          { flag: "bs=4M", description: "block size — 4 MB acelera a gravação" },
          { flag: "status=progress", description: "mostra o progresso (essencial para acompanhar)" },
          { flag: "oflag=sync", description: "garante que tudo foi escrito antes de retornar" },
        ],
      },
      {
        command: "fdisk",
        description: "Lista e particiona discos. Use 'sudo fdisk -l' para ver toda a estrutura de discos sem modificar nada.",
        example: "sudo fdisk -l",
      },
      {
        command: "df",
        description: "Mostra uso de espaço em disco por partição montada.",
        example: "df -h",
        flags: [
          { flag: "-h", description: "Tamanhos legíveis (KB, MB, GB)" },
          { flag: "-T", description: "Mostrar tipo de filesystem" },
          { flag: "-i", description: "Mostrar uso de inodes (não bytes)" },
        ],
        output: "Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda2       458G   30G  408G   7% /\n/dev/sda1       511M  6.2M  505M   2% /boot/efi\ntmpfs           3.8G     0  3.8G   0% /dev/shm",
      },
      {
        command: "tasksel",
        description: "Reabre o seletor de tarefas da instalação para instalar 'pacotes' (ambiente gráfico, servidor web, etc.).",
        example: "sudo tasksel",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "ATENÇÃO ao usar dd",
        content:
          "Se você confundir /dev/sdb (pendrive) com /dev/sda (HD), o comando dd VAI APAGAR seu HD inteiro. Sempre rode 'lsblk' antes para ter certeza qual é o pendrive (geralmente é o último a aparecer, com tamanho menor). Em caso de dúvida, use uma ferramenta gráfica.",
      },
      {
        type: "info",
        title: "Por que /home separado?",
        content:
          "Se você reinstalar o Debian no futuro (ou trocar para outra distro), seus arquivos, configurações de aplicativos, downloads, etc. ficam intactos em /home. Basta NÃO formatar /home na nova instalação. Tem que valer a pena: você precisa adivinhar o tamanho certo de cada partição na primeira vez.",
      },
      {
        type: "success",
        title: "Use Ventoy para múltiplas ISOs",
        content:
          "Em vez de regravar o pendrive a cada distro nova, instale o Ventoy (https://www.ventoy.net/) uma única vez. Depois é só copiar arquivos .iso para o pendrive — no boot, ele mostra um menu para escolher qual rodar. Essencial para quem testa muitas distros.",
      },
    ],
    practiceLabs: [
      {
        title: "Verificar integridade de uma ISO baixada",
        goal: "Garantir que a ISO que você baixou é exatamente a oficial do Debian — sem adulteração no caminho.",
        steps: [
          "Baixe a ISO desejada de https://www.debian.org/CD/http-ftp/",
          "No mesmo diretório, baixe os arquivos SHA256SUMS e SHA256SUMS.sign",
          "Calcule o SHA256 da sua ISO local",
          "Compare com o que está no SHA256SUMS",
        ],
        command: `# 1) Verificar SHA256 da ISO local
cd ~/Downloads
sha256sum debian-12.5.0-amd64-netinst.iso

# 2) Comparar com o oficial
grep "debian-12.5.0-amd64-netinst.iso" SHA256SUMS

# 3) Os dois hashes devem ser IDENTICOS
# Se forem diferentes: NAO USE essa ISO. Baixe novamente.

# 4) Verificar autenticidade do proprio SHA256SUMS (avancado)
gpg --verify SHA256SUMS.sign SHA256SUMS`,
        verify:
          "Os dois SHA256 (calculado e oficial) devem bater caractere por caractere. Diferença = ISO corrompida ou adulterada.",
      },
      {
        title: "Gravar pendrive bootável com dd (procedimento seguro)",
        goal: "Criar um pendrive bootável do Debian sem apagar o HD por engano.",
        steps: [
          "Antes de plugar o pendrive, rode 'lsblk' e anote os dispositivos atuais.",
          "Plugue o pendrive e rode 'lsblk' de novo. O dispositivo NOVO é o pendrive.",
          "CONFIRA o tamanho — se não bate com o do pendrive, parou tudo.",
          "Se houver partições montadas no pendrive, desmonte com 'sudo umount /dev/sdb1'.",
          "Rode o dd com o /dev/sdX correto (sem número de partição).",
          "Aguarde o sync terminar (vários minutos para ISO grande).",
        ],
        command: `# 1) Antes de plugar pendrive
lsblk

# 2) Plugar pendrive e rodar de novo
lsblk
# Identifique o NOVO dispositivo (ex: /dev/sdb)

# 3) Conferir que e mesmo o pendrive (tamanho correto)
sudo fdisk -l /dev/sdb | head -3

# 4) Desmontar particoes do pendrive (se houver)
sudo umount /dev/sdb*

# 5) Gravar (CUIDADO com o /dev/sdX!)
sudo dd if=~/Downloads/debian-12.5.0-amd64-netinst.iso of=/dev/sdb bs=4M status=progress oflag=sync

# 6) Sincronizar e ejetar
sync
sudo eject /dev/sdb`,
        verify:
          "Após o dd, plugue o pendrive em outra máquina e tente dar boot. Deve aparecer o instalador do Debian. Se aparecer 'Operating System not found', o boot não está em UEFI/Legacy correto na BIOS.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a diferença entre netinst, DVD-1 e Live?",
        answer:
          "netinst (~400 MB) baixa pacotes da internet durante instalação. DVD-1 (~4 GB) tem pacotes principais offline. Live (~3 GB) é o sistema rodando do pendrive, com opção de instalar.",
      },
      {
        id: 2,
        question: "Como verificar se a ISO baixada não foi adulterada?",
        answer:
          "Calcule o SHA256 da ISO com 'sha256sum arquivo.iso' e compare com o hash do arquivo SHA256SUMS oficial baixado do site do Debian. Devem ser idênticos.",
      },
      {
        id: 3,
        question: "Por que separar /home em uma partição diferente?",
        answer:
          "Para preservar arquivos pessoais e configurações ao reinstalar o sistema. Basta não formatar /home na nova instalação.",
      },
      {
        id: 4,
        question: "Quanto de swap usar em 2026 com 16 GB de RAM?",
        answer:
          "Para uso normal: 4-8 GB de swap (segurança contra OOM). Para hibernar: swap >= RAM (16 GB ou mais). Sem hibernação e com 32 GB+ de RAM: swap pode ser pequeno (2 GB) ou usar zram.",
      },
      {
        id: 5,
        question: "Por que NUNCA usar /dev/sdb1 no comando dd para gravar pendrive?",
        answer:
          "/dev/sdb1 é a primeira partição do pendrive. Você precisa gravar no DISCO INTEIRO (/dev/sdb), porque a ISO contém também um bootloader que vai no setor de boot do disco — não em uma partição.",
      },
      {
        id: 6,
        question: "O que fazer se Wi-Fi não funcionar após instalar Debian?",
        answer:
          "Geralmente é firmware non-free necessário. No Debian 12+ a ISO oficial já inclui. Se ainda não funciona: 1) Conecte cabo Ethernet ou tether do celular. 2) sudo apt install firmware-iwlwifi (Intel) ou firmware-realtek (Realtek) ou firmware-atheros etc. 3) Reinicie.",
      },
    ],
    references: [
      { title: "Página oficial de download", url: "https://www.debian.org/distrib/" },
      { title: "Manual de instalação", url: "https://www.debian.org/releases/stable/installmanual" },
      { title: "Ventoy (multi-boot USB)", url: "https://www.ventoy.net/" },
      { title: "Lista de firmware non-free", url: "https://wiki.debian.org/Firmware" },
    ],
  },

  {
    id: "pos-instalacao",
    title: "Pós-Instalação — Os Primeiros 30 Minutos",
    icon: "🎯",
    category: "Instalação e Ambiente",
    description: "O que fazer logo depois de instalar o Debian: sudo, atualizações, locale, firewall, drivers e ajustes essenciais.",
    objectives: [
      "Configurar sudo se você deixou senha de root vazia",
      "Atualizar o sistema completo na primeira vez",
      "Ajustar timezone, locale pt_BR e teclado",
      "Habilitar firewall UFW e tomar primeiras decisões de segurança",
    ],
    content: [
      "Instalou o Debian e está olhando para um desktop novinho. O que fazer agora? Esses primeiros 30 minutos definem se sua experiência vai ser tranquila ou cheia de problemas. Vamos por ordem de importância.",
      "Primeiro: confira se o 'sudo' funciona. No Debian, se você definiu senha de root durante a instalação, o sudo PODE não estar configurado para seu usuário comum. Teste: 'sudo whoami'. Se aparecer 'root', está tudo certo. Se aparecer 'usuário X não está na sudoers', você precisa adicionar manualmente. Solução: entre como root com 'su -' (digite a senha de root) e rode 'usermod -aG sudo SEU_USUARIO'. Faça logout e login. Pronto.",
      "Segundo: atualize tudo. Pode parecer redundante (acabou de instalar), mas a ISO foi gravada há semanas/meses, e nesse tempo saíram correções de segurança. Rode em sequência: 'sudo apt update' (atualiza a lista de pacotes), 'sudo apt full-upgrade' (instala atualizações de versão, incluindo kernel). Reinicie depois se atualizou o kernel.",
      "Terceiro: ajuste timezone, idioma e teclado se algum estiver errado. Comandos úteis:\n• 'timedatectl' — mostra timezone atual.\n• 'sudo timedatectl set-timezone America/Sao_Paulo' — define seu fuso.\n• 'locale' — mostra locale (pt_BR.UTF-8 é o ideal para Brasil).\n• 'sudo dpkg-reconfigure locales' — abre menu para escolher locales (marque pt_BR.UTF-8 e en_US.UTF-8, defina pt_BR.UTF-8 como padrão).\n• 'sudo dpkg-reconfigure keyboard-configuration' — reconfigurar teclado (escolha Brazilian Portuguese ABNT2).",
      "Quarto: instale o firewall. O Debian vem com firewall (iptables/nftables) mas SEM regras configuradas. UFW (Uncomplicated Firewall) é a interface amigável padrão:\n\nsudo apt install ufw\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw enable\n\nDesktop normalmente não precisa abrir portas. Servidor: depois abra só o que precisa (sudo ufw allow 22/tcp para SSH, por exemplo).",
      "Quinto: instale pacotes de produtividade que TODO sistema deveria ter. Esses são os 'utilitários esquecidos' — não vêm por padrão mas são essenciais:\n\nsudo apt install -y build-essential curl wget git vim htop tree neofetch \\\n  unzip zip p7zip-full file-roller \\\n  gnome-disk-utility gparted \\\n  ttf-mscorefonts-installer fonts-noto-color-emoji",
      "Sexto: configure o git se você é desenvolvedor. Sem isso, o git fica reclamando a cada commit:\n\ngit config --global user.name 'Seu Nome'\ngit config --global user.email 'voce@exemplo.com'\ngit config --global init.defaultBranch main\ngit config --global pull.rebase false\n\nSétimo: se quiser ambiente gráfico mais bonito, considere instalar Flatpak (apps gráficos modernos sandboxados):\n\nsudo apt install -y flatpak\nflatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo\n# Reinicie a sessão antes de usar",
      "Oitavo (importante para hardware recente): drivers proprietários se necessário. Como saber? Rode 'lspci -k | grep -EA3 \"VGA|3D\"'. Se a placa de vídeo é NVIDIA e sem driver carregado, instale: 'sudo apt install nvidia-driver firmware-misc-nonfree' (precisa de non-free habilitado no sources.list). Para Wi-Fi Intel, geralmente já funciona; Realtek antigo: 'sudo apt install firmware-realtek'. Reinicie depois de instalar drivers.",
    ],
    commands: [
      {
        command: "sudo apt update && sudo apt full-upgrade -y",
        description: "Atualiza a lista de pacotes e instala TODAS as atualizações disponíveis, incluindo kernel. O '-y' aceita prompts automaticamente. Faça isso semanalmente.",
        example: "sudo apt update && sudo apt full-upgrade -y",
      },
      {
        command: "timedatectl",
        description: "Mostra e configura data/hora/fuso horário do sistema.",
        example: "timedatectl",
        flags: [
          { flag: "set-timezone TZ", description: "Define fuso (ex: America/Sao_Paulo, America/Manaus, Europe/Lisbon)" },
          { flag: "list-timezones", description: "Lista todos os fusos disponíveis" },
          { flag: "set-time HH:MM:SS", description: "Define hora manualmente (raro - prefira NTP)" },
          { flag: "set-ntp true", description: "Habilita sincronização automática via internet" },
        ],
        output: "               Local time: ven 2026-04-25 18:32:15 -03\n           Universal time: ven 2026-04-25 21:32:15 UTC\n                Time zone: America/Sao_Paulo (-03, -0300)\nSystem clock synchronized: yes\n              NTP service: active",
      },
      {
        command: "locale",
        description: "Mostra todas as variáveis de locale (idioma, formato de data, moeda, etc.).",
        example: "locale",
        output: "LANG=pt_BR.UTF-8\nLANGUAGE=pt_BR\nLC_CTYPE=\"pt_BR.UTF-8\"\nLC_NUMERIC=\"pt_BR.UTF-8\"\nLC_TIME=\"pt_BR.UTF-8\"\nLC_ALL=",
      },
      {
        command: "sudo dpkg-reconfigure",
        description: "Reabre o menu de configuração de qualquer pacote. Útil para refazer setup que deu errado na instalação.",
        example: "sudo dpkg-reconfigure locales",
        flags: [
          { flag: "locales", description: "Reconfigurar idiomas/locales" },
          { flag: "tzdata", description: "Reconfigurar fuso horário" },
          { flag: "keyboard-configuration", description: "Reconfigurar layout de teclado" },
          { flag: "console-setup", description: "Reconfigurar fonte do console (TTY)" },
        ],
      },
      {
        command: "ufw",
        description: "Uncomplicated Firewall — interface amigável para o firewall do Linux. Para habilitar firewall em 3 comandos.",
        example: "sudo ufw status verbose",
        flags: [
          { flag: "enable", description: "Liga o firewall" },
          { flag: "disable", description: "Desliga o firewall" },
          { flag: "status", description: "Mostra estado e regras" },
          { flag: "default deny incoming", description: "Bloqueia tudo que vem de fora por padrão" },
          { flag: "default allow outgoing", description: "Libera tudo que sai por padrão" },
          { flag: "allow 22/tcp", description: "Libera porta 22 (SSH)" },
        ],
      },
      {
        command: "sudo usermod -aG sudo USUARIO",
        description: "Adiciona USUARIO ao grupo 'sudo'. Faz logout/login depois para o grupo aplicar.",
        example: "sudo usermod -aG sudo wallyson",
      },
      {
        command: "lspci",
        description: "Lista dispositivos PCI (placa de vídeo, rede, áudio). Use para descobrir hardware do sistema.",
        example: "lspci -k | grep -EA3 'VGA|3D'",
        flags: [
          { flag: "-k", description: "Mostra qual driver/módulo cada dispositivo está usando" },
          { flag: "-v", description: "Verboso (muito mais detalhes)" },
        ],
      },
    ],
    tips: [
      {
        type: "warning",
        title: "NUNCA edite /etc/sudoers diretamente",
        content:
          "Use SEMPRE 'sudo visudo' (vai abrir o editor padrão e validar a sintaxe ao salvar). Se você editar /etc/sudoers manualmente e introduzir um erro de sintaxe, perde acesso ao sudo permanentemente — só recupera dando boot em modo recovery.",
      },
      {
        type: "info",
        title: "Apt não pede confirmação? Use --simulate",
        content:
          "Antes de uma operação grande (full-upgrade, autoremove com muitos pacotes), faça 'apt --simulate full-upgrade' para ver o que SERIA feito sem fazer. Lê com calma. Se OK, roda sem o --simulate.",
      },
      {
        type: "success",
        title: "Schedule um snapshot semanal (se em VM)",
        content:
          "Se você roda em VM (VirtualBox, VMware, Proxmox), tire um snapshot semanal antes do 'apt full-upgrade'. Se um upgrade quebrar algo, restaura o snapshot e está de volta em 30 segundos.",
      },
    ],
    practiceLabs: [
      {
        title: "Setup pós-instalação completo em um script",
        goal: "Executar todas as configurações iniciais de uma vez, em um script você pode reusar em cada nova instalação.",
        steps: [
          "Salve o bloco de comandos em ~/setup-debian.sh",
          "Dê permissão de execução: chmod +x ~/setup-debian.sh",
          "Execute como root (sudo): sudo ~/setup-debian.sh",
          "Reinicie ao final",
        ],
        command: `#!/bin/bash
set -e
echo "=== 1) Atualizando sistema ==="
apt update
apt full-upgrade -y

echo "=== 2) Instalando essenciais ==="
apt install -y build-essential curl wget git vim htop tree neofetch \\
  unzip zip p7zip-full file-roller \\
  gnome-disk-utility gparted \\
  ufw flatpak \\
  ttf-mscorefonts-installer fonts-noto-color-emoji

echo "=== 3) Configurando UFW ==="
ufw default deny incoming
ufw default allow outgoing
ufw --force enable

echo "=== 4) Configurando timezone ==="
timedatectl set-timezone America/Sao_Paulo
timedatectl set-ntp true

echo "=== 5) Adicionando Flathub ==="
flatpak remote-add --if-not-exists flathub \\
  https://flathub.org/repo/flathub.flatpakrepo

echo "=== 6) Limpando ==="
apt autoremove -y
apt clean

echo ""
echo "=== Tudo pronto. Reinicie o sistema. ==="`,
        verify:
          "Depois de reiniciar: 'sudo ufw status' deve mostrar ativo, 'timedatectl' deve mostrar America/Sao_Paulo, e os pacotes principais devem estar instalados (teste 'htop', 'git --version', etc.).",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Você instalou o Debian e o sudo não funciona. O que fazer?",
        answer:
          "Entre como root com 'su -' (senha de root). Adicione seu usuário ao grupo sudo: 'usermod -aG sudo SEU_USUARIO'. Saia (exit) e faça logout/login do desktop para o grupo aplicar.",
      },
      {
        id: 2,
        question: "Qual o comando padrão para atualizar TUDO no Debian?",
        answer:
          "sudo apt update && sudo apt full-upgrade -y. O 'update' baixa lista de pacotes, 'full-upgrade' instala atualizações (inclusive de versão maior, e remove pacotes obsoletos quando necessário).",
      },
      {
        id: 3,
        question: "Como definir o fuso horário para São Paulo?",
        answer: "sudo timedatectl set-timezone America/Sao_Paulo",
      },
      {
        id: 4,
        question: "Qual a melhor configuração inicial do UFW para um desktop?",
        answer:
          "sudo ufw default deny incoming (bloqueia conexões externas) + sudo ufw default allow outgoing (permite suas saídas) + sudo ufw enable. Pronto. Não precisa abrir portas se for só desktop.",
      },
      {
        id: 5,
        question: "Como saber qual driver está sendo usado pela placa de vídeo?",
        answer: "lspci -k | grep -EA3 'VGA|3D' — a linha 'Kernel driver in use:' mostra o driver ativo (nouveau, nvidia, amdgpu, i915, etc.).",
      },
      {
        id: 6,
        question: "Por que NUNCA editar /etc/sudoers diretamente?",
        answer:
          "Sintaxe errada quebra o sudo permanentemente. Use SEMPRE 'sudo visudo' que valida a sintaxe ao salvar e impede você de salvar arquivo quebrado.",
      },
    ],
    references: [
      { title: "Wiki Debian — PostInstall", url: "https://wiki.debian.org/PostInstall" },
      { title: "Manual UFW", url: "https://help.ubuntu.com/community/UFW" },
      { title: "Lista de Flatpaks no Flathub", url: "https://flathub.org/" },
    ],
  },

  {
    id: "ambiente-grafico",
    title: "Ambientes Gráficos no Debian",
    icon: "🖥️",
    category: "Instalação e Ambiente",
    description: "GNOME, KDE, XFCE, MATE, LXDE, Cinnamon — qual escolher, como instalar/trocar e diferenças práticas.",
    objectives: [
      "Conhecer os principais ambientes gráficos disponíveis",
      "Decidir qual usar baseado no hardware e preferência",
      "Trocar de ambiente gráfico sem reinstalar o sistema",
      "Entender display server (X11 vs Wayland) e display manager",
    ],
    content: [
      "Diferente do Windows e macOS (que têm uma única interface), o Linux te dá liberdade absoluta de escolha do desktop. O Debian é neutro — durante a instalação você escolhe (ou não escolhe nenhum, para servidor). Os principais ambientes:",
      "• GNOME — moderno, polido, focado em produtividade. Padrão do Debian se você não escolher outro. Tem barra superior, atividades (Super para acessar), workspaces dinâmicos. Consome mais RAM (1.2-1.8 GB ocioso).\n• KDE Plasma — cheio de recursos, customizável até demais. Visualmente parecido com Windows. Tem o melhor compositor (efeitos visuais). 800 MB - 1.5 GB ocioso.\n• XFCE — leve, tradicional, estável. Ideal para máquinas com 4-8 GB de RAM. 400-700 MB ocioso. Padrão do Kali Linux.\n• MATE — fork do GNOME 2 (interface clássica que muitos preferem). Familiar para quem usou Linux pre-2011.\n• LXDE / LXQt — super leve, para máquinas antigas (1-4 GB de RAM). 200-400 MB ocioso.\n• Cinnamon — moderno mas tradicional (taskbar, menu start). Padrão do Linux Mint. Bom equilíbrio.",
      "Como escolher se você está em dúvida? Regras práticas:\n• Notebook moderno (8-16 GB RAM, SSD): GNOME (se você gosta do Mac) ou KDE (se você gosta do Windows).\n• Notebook intermediário (4-8 GB RAM): XFCE ou Cinnamon.\n• Máquina antiga (1-4 GB RAM): LXDE ou LXQt.\n• Servidor (sem monitor): nenhum. Acesse por SSH.",
      "Para trocar de ambiente sem reinstalar o sistema: o Debian usa metapacotes 'task-*-desktop'. Lista:\n• task-gnome-desktop — GNOME completo\n• task-kde-desktop — KDE Plasma completo\n• task-xfce-desktop — XFCE\n• task-mate-desktop — MATE\n• task-lxde-desktop — LXDE\n• task-lxqt-desktop — LXQt\n• task-cinnamon-desktop — Cinnamon\n\nInstale com 'sudo apt install task-XXX-desktop' (substitua XXX pelo nome). Pode demorar 1-3 GB de download. NÃO remove o ambiente atual — fica os dois disponíveis. Reinicie e na tela de login escolha qual usar.",
      "Display server é a camada de software que desenha as janelas na tela. No Linux, há duas opções:\n• X11 (X.Org) — o tradicional, 30+ anos de existência. Funciona com TUDO mas tem limitações modernas (segurança fraca entre apps, sem HiDPI por monitor).\n• Wayland — o substituto moderno. Mais seguro, suporta HiDPI por monitor, mas alguns apps antigos têm problemas.\n\nNo Debian 12, GNOME usa Wayland por padrão. KDE Plasma também (no Plasma 5.27+). Para ver o seu: 'echo \\$XDG_SESSION_TYPE'.",
      "Display manager é a 'tela de login' (antes do desktop carregar). Cada ambiente prefere um:\n• GDM3 — usado pelo GNOME\n• SDDM — usado pelo KDE\n• LightDM — usado por XFCE, MATE, Cinnamon\n• LXDM — leve, usado por LXDE\n\nQuando você instala um ambiente novo, o sistema pode te perguntar qual display manager usar. Para mudar depois: 'sudo dpkg-reconfigure lightdm' (substitua pelo seu).",
      "Customizar o ambiente: cada um tem seu próprio sistema de temas, ícones, fontes, atalhos. Painéis universais úteis:\n• gnome-tweaks (GNOME) — controle fino de tema, fontes, comportamento de janelas\n• systemsettings (KDE) — central de configurações completa do KDE\n• xfce4-settings-manager (XFCE) — painel de configurações XFCE\n\nTemas: Arc-theme, Materia, Numix, Adwaita-dark são populares. Ícones: Papirus, Numix, Flat-Remix.",
      "Servidor sem ambiente gráfico: se você instalou Debian para servidor (escolheu 'no graphical environment'), pode trabalhar 100% por SSH. É leve e seguro. Se DEPOIS quiser instalar interface (raro mas acontece): 'sudo apt install task-xfce-desktop' e reiniciar. Para REMOVER ambiente gráfico de servidor: 'sudo apt remove --purge task-*-desktop' + 'sudo systemctl set-default multi-user.target' + reiniciar.",
    ],
    commands: [
      {
        command: "echo $XDG_CURRENT_DESKTOP",
        description: "Mostra qual ambiente gráfico está em uso na sessão atual.",
        example: "echo $XDG_CURRENT_DESKTOP",
        output: "GNOME",
      },
      {
        command: "echo $XDG_SESSION_TYPE",
        description: "Mostra se sessão usa X11 ou Wayland.",
        example: "echo $XDG_SESSION_TYPE",
        output: "wayland",
      },
      {
        command: "tasksel --list-tasks",
        description: "Lista todas as 'tarefas' disponíveis (incluindo ambientes gráficos).",
        example: "tasksel --list-tasks | head -20",
      },
      {
        command: "sudo apt install task-DESKTOP-desktop",
        description: "Instala um ambiente gráfico completo (com aplicativos padrão).",
        example: "sudo apt install task-kde-desktop",
      },
      {
        command: "sudo systemctl set-default",
        description: "Define o 'target' padrão do sistema. graphical.target = inicia com interface, multi-user.target = só terminal.",
        example: "sudo systemctl set-default graphical.target",
        flags: [
          { flag: "graphical.target", description: "Inicia com interface gráfica" },
          { flag: "multi-user.target", description: "Só terminal (servidor)" },
        ],
      },
      {
        command: "sudo systemctl restart display-manager",
        description: "Reinicia a tela de login (mata sessão atual, volta para login). Útil sem precisar reiniciar todo o sistema.",
        example: "sudo systemctl restart display-manager",
      },
      {
        command: "wmctrl -m",
        description: "Mostra qual gerenciador de janelas está rodando (Mutter=GNOME, KWin=KDE, Xfwm=XFCE, Marco=MATE).",
        example: "wmctrl -m",
        output: "Name: Mutter\nClass: N/A\nPID: N/A\nWindow manager's \"showing the desktop\" mode: OFF",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Wayland vs X11 — qual escolher?",
        content:
          "Para uso normal: o que vier por padrão. Se algum app antigo (TeamViewer, AnyDesk, alguns games) não funciona bem em Wayland, na tela de login escolha 'GNOME on Xorg' ou 'Plasma (X11)' temporariamente. Mas a tendência é todos migrarem para Wayland — há suporte cada vez melhor.",
      },
      {
        type: "warning",
        title: "Não remova o ambiente atual antes de testar o novo",
        content:
          "Se você instalou KDE para testar, NÃO desinstale GNOME imediatamente. Use o KDE por uns dias, confirme que tudo funciona (Wi-Fi, áudio, suspend, etc.), só então desinstale GNOME. Se algo quebrar no KDE, você ainda pode voltar para o GNOME.",
      },
    ],
    practiceLabs: [
      {
        title: "Trocar de GNOME (padrão Debian) para KDE Plasma",
        goal: "Ter dois ambientes instalados, conseguir alternar entre eles na tela de login.",
        steps: [
          "Em VM: tire um snapshot ANTES (segurança).",
          "Atualize o sistema: sudo apt update && sudo apt full-upgrade -y",
          "Instale o KDE: sudo apt install -y task-kde-desktop (1-3 GB de download)",
          "Quando perguntar qual display manager (gdm3 ou sddm), escolha sddm (preferido pelo KDE).",
          "Faça logout. Na tela de login (SDDM agora), procure menu canto inferior esquerdo.",
          "Selecione 'Plasma (X11)' ou 'Plasma (Wayland)' e faça login.",
          "Para voltar ao GNOME: logout, escolha 'GNOME' no menu, login.",
        ],
        command: `# 1) Snapshot da VM (faca pelo painel da sua VM)

# 2) Atualizar
sudo apt update && sudo apt full-upgrade -y

# 3) Instalar KDE completo
sudo apt install -y task-kde-desktop

# 4) Reiniciar display manager
sudo systemctl restart display-manager

# 5) Para confirmar qual ambiente esta rodando depois do login
echo $XDG_CURRENT_DESKTOP

# Para voltar atras (remover KDE):
# sudo apt remove --purge task-kde-desktop
# sudo apt autoremove --purge`,
        verify:
          "Após login no KDE, 'echo $XDG_CURRENT_DESKTOP' deve retornar 'KDE'. Faça logout, escolha GNOME, login — deve retornar 'GNOME'.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual ambiente gráfico você usaria em uma máquina com 4 GB de RAM?",
        answer: "XFCE ou LXDE — consomem 200-700 MB ocioso, deixando RAM livre para os aplicativos.",
      },
      {
        id: 2,
        question: "Como saber qual ambiente gráfico está em uso?",
        answer: "echo $XDG_CURRENT_DESKTOP — retorna GNOME, KDE, XFCE, MATE, etc.",
      },
      {
        id: 3,
        question: "Qual a diferença entre X11 e Wayland?",
        answer:
          "X11 é o sistema tradicional de janelas (X.Org), 30+ anos. Wayland é o substituto moderno: mais seguro, suporta melhor HiDPI por monitor, mas alguns apps antigos têm bugs. GNOME e KDE atuais usam Wayland por padrão.",
      },
      {
        id: 4,
        question: "Como instalar o KDE Plasma sem remover o GNOME?",
        answer: "sudo apt install task-kde-desktop. Os dois ficam instalados, escolhe na tela de login.",
      },
      {
        id: 5,
        question: "O que é display manager?",
        answer:
          "Software que mostra a tela de login (antes do desktop carregar). Principais: GDM3 (GNOME), SDDM (KDE), LightDM (XFCE/MATE), LXDM (LXDE).",
      },
      {
        id: 6,
        question: "Como remover ambiente gráfico de um servidor?",
        answer:
          "sudo apt remove --purge task-*-desktop && sudo systemctl set-default multi-user.target && sudo reboot. O sistema volta a inicializar só no terminal.",
      },
    ],
    references: [
      { title: "Wiki Debian — DesktopEnvironment", url: "https://wiki.debian.org/DesktopEnvironment" },
      { title: "Comparação visual de DEs", url: "https://distrochooser.de/" },
      { title: "Wayland vs X11 explicado", url: "https://wiki.debian.org/Wayland" },
    ],
  },
];
