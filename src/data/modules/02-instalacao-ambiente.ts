import { Module } from "@/types/module";

export const instalacaoAmbiente: Module[] = [
  {
    id: "instalacao",
    title: "Instalando o Debian",
    icon: "💿",
    category: "Instalação e Ambiente",
    description: "Como baixar a ISO certa, gravar um pendrive bootável sem apagar o HD por engano, particionar o disco com cabeça e completar a instalação do Debian estável (bookworm/trixie) sem sustos.",
    objectives: [
      "Diferenciar netinst, DVD-1 e Live e escolher a ISO adequada para o seu cenário",
      "Verificar a integridade da ISO baixada com sha256sum e GPG",
      "Gravar um pendrive bootável de forma segura usando dd, GNOME Disks ou Ventoy",
      "Planejar particionamento (BIOS vs UEFI, swap, /home separado, LVM e criptografia)",
      "Conduzir a instalação interativa do debian-installer respondendo cada etapa com consciência",
      "Resolver os erros mais comuns de boot, Wi-Fi e vídeo logo após a primeira inicialização",
    ],
    content: [
      "Instalar o Debian é parecido com mudar de casa. Antes de jogar caixas no caminhão, você precisa de três coisas: a chave do imóvel novo (a ISO oficial), um caminhão para transportar (o pendrive bootável) e um plano de onde cada cômodo vai ficar (o particionamento). Pular qualquer uma dessas etapas é o que transforma uma instalação tranquila em uma tarde de pânico tentando recuperar arquivos. Pense neste capítulo como o checklist da mudança: vamos passar por cada item devagar para que, quando o instalador aparecer na tela, você já saiba o que está clicando.",
      "A primeira confusão de quem chega no site do Debian é a quantidade de imagens disponíveis. Existem quatro famílias principais e cada uma resolve um problema diferente. A netinst (uns 400 MB) é um instalador minimalista que baixa o resto pela internet durante a instalação — é a queridinha de quem tem boa conexão e gosta de um sistema enxuto. A DVD-1 (cerca de 4 GB) já vem recheada de pacotes para instalação offline, útil em locais com internet ruim. As imagens Live (entre 2,5 e 3 GB) deixam você experimentar o sistema rodando do pendrive, com a opção de instalar quando quiser, e vêm em sabores diferentes — GNOME, KDE, XFCE, MATE, Cinnamon, LXDE e LXQt. E desde o Debian 12 (bookworm) a ISO oficial já inclui firmware non-free por padrão, então aquele drama antigo de Wi-Fi não funcionar acabou para a maioria dos notebooks modernos.",
      "Antes de começar, vale entender três siglas que vão aparecer o tempo todo. ISO é o nome do formato de arquivo que representa um CD/DVD virtual — não confunda com o resultado dela quando gravada. BIOS e UEFI são duas gerações do firmware que liga seu computador antes do sistema operacional: BIOS é o jeito antigo (anterior a 2012, mais ou menos), UEFI é o moderno e exige uma partição EFI (FAT32, 512 MB) para guardar o bootloader. Secure Boot é uma trava do UEFI que só aceita rodar bootloaders assinados — o Debian 12 já vem assinado, então normalmente funciona com Secure Boot ligado, mas se der pau na hora do boot, desligar o Secure Boot na BIOS é o primeiro chute. Por fim, GRUB é o programa que aparece na tela com o menu de boot e carrega o kernel do Linux.",
      "Por baixo dos panos, gravar uma ISO num pendrive não é um simples copy-paste. A ISO contém, além dos arquivos, um setor de boot que precisa ficar exatamente no início do dispositivo. Por isso usamos comandos como dd, que copia byte por byte do arquivo direto para o disco bruto (/dev/sdb), sem passar por sistema de arquivos. É também por isso que você grava no /dev/sdb (o disco inteiro) e nunca em /dev/sdb1 (uma partição): a partição não tem o setor de boot. Esse detalhe técnico aparenta ser irrelevante, mas é a causa número um de pendrive que 'ficou pronto' e mesmo assim não dá boot.",
      "Muita gente confunde 'particionar' com 'formatar'. Particionar é dividir o disco em pedaços lógicos — pense em cortar uma pizza em fatias antes de colocar recheio em cada uma. Formatar é criar o sistema de arquivos dentro de uma partição, definindo como os blocos serão organizados (ext4, btrfs, xfs, FAT32, etc.). Em uma instalação típica de desktop, vale a pena pelo menos três partições: /boot/efi (FAT32, 512 MB, só em UEFI), / (ext4, 30-60 GB) e /home (ext4, o resto). A vantagem de separar /home em uma partição própria é simples e poderosa: no dia que você quiser reinstalar o Debian, trocar para outra distro ou recuperar de algum upgrade quebrado, basta NÃO formatar /home e seus arquivos pessoais, configurações de aplicativos e fotos continuam ali intactos.",
      "Sobre swap, o conselho mudou nos últimos anos. Em máquinas antigas com pouca RAM, era comum criar swap igual ao dobro da RAM. Hoje, com SSDs e máquinas com 16 GB ou mais, esse cálculo não faz sentido. Se você não pretende hibernar (suspend-to-disk), uns 2-8 GB de swap já garantem que o sistema sobreviva a um pico de memória. Se você quer hibernar, swap precisa ser pelo menos do tamanho da RAM, porque o conteúdo dela é serializado para o disco. Existe também o zram, que cria swap comprimido na própria RAM e é ótimo para máquinas modestas — mas é um tópico para depois. Para começar, use swap normal e siga em frente.",
      "Durante a instalação interativa, o debian-installer faz várias perguntas em sequência: idioma e teclado, hostname (nome da máquina, tipo 'meu-notebook'), domínio (deixe em branco se não estiver em rede corporativa), senha de root (você pode deixar EM BRANCO — se deixar, o instalador configura o sudo automaticamente para o usuário comum, exatamente como o Ubuntu faz), criação do usuário comum, particionamento, fuso horário, tasksel para escolher pacotes (ambiente gráfico, servidor SSH, utilitários padrão) e por fim a instalação do GRUB. Cada tela tem ajuda no F1 — vale ler quando estiver na dúvida. A escolha de deixar root sem senha é mais comum do que parece: ela força você a usar sudo para tudo administrativo, o que deixa um log de quem fez o quê e dificulta acesso indevido.",
      "Os erros pós-instalação que mais aparecem têm padrão. 'No bootable device' depois de reiniciar geralmente é GRUB instalado no disco errado (em dual boot) ou ordem de boot da BIOS apontando para o pendrive ainda — entre na BIOS e ajuste. Wi-Fi não funcionando: até o Debian 11 era preciso baixar a ISO 'firmware'; do 12 em diante já está incluído, mas se mesmo assim não pegar, instale com 'sudo apt install firmware-iwlwifi' (Intel), 'firmware-realtek' ou 'firmware-atheros' conforme o chipset que aparece em 'lspci'. Tela preta ao iniciar costuma ser conflito com placa de vídeo proprietária — boote em modo recovery (segure Shift no GRUB), instale o driver correto (nvidia-driver, firmware-amd-graphics) e reinicie. Para cada problema existe uma resposta no Debian Wiki — antes de entrar em pânico, copie a mensagem de erro literalmente e jogue no buscador.",
      "Quando você terminar este capítulo, vai conseguir baixar uma ISO oficial, validar a integridade dela com SHA256, gravar um pendrive bootável sem riscos, escolher um esquema de partições adequado ao seu uso e completar uma instalação interativa entendendo o que cada tela está perguntando. Não é necessário decorar nada — a habilidade real é saber onde olhar quando algo não funciona. E ela vem com prática: faça uma instalação em máquina virtual antes de mexer no disco do seu notebook, mesmo que pareça redundante. É barato, rápido e te dá confiança para o dia da instalação real.",
    ],
    commands: [
      {
        command: "sha256sum",
        description: "Calcula o hash SHA256 de um arquivo. Use para confirmar que a ISO baixada bate com o oficial publicado pelo Debian.",
        example: "sha256sum debian-12.5.0-amd64-netinst.iso",
        output: "0fbb3da0a39c2f8b7f0c5d8a2c3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2  debian-12.5.0-amd64-netinst.iso",
        flags: [
          { flag: "-c arquivo", description: "Verifica todos os hashes listados em um arquivo SHA256SUMS" },
          { flag: "--ignore-missing", description: "Junto com -c, ignora arquivos que não existem localmente" },
        ],
      },
      {
        command: "gpg --verify",
        description: "Verifica a assinatura GPG de um arquivo. Garante que o SHA256SUMS veio mesmo do Debian, não de um atacante.",
        example: "gpg --verify SHA256SUMS.sign SHA256SUMS",
        output: "gpg: Good signature from \"Debian CD signing key <debian-cd@lists.debian.org>\"",
      },
      {
        command: "lsblk",
        description: "Lista todos os dispositivos de bloco (HDs, SSDs, pendrives, partições) em árvore. Comando obrigatório antes de gravar com dd.",
        example: "lsblk -o NAME,SIZE,TYPE,MOUNTPOINTS",
        output: "NAME   SIZE TYPE MOUNTPOINTS\nsda  465.8G disk\n├─sda1   512M part /boot/efi\n├─sda2   460G part /\n└─sda3   5.3G part [SWAP]\nsdb   29.8G disk\n└─sdb1  29.8G part /media/usb",
        flags: [
          { flag: "-f", description: "Mostra também tipo de filesystem e UUID" },
          { flag: "-p", description: "Mostra caminho completo (/dev/sda1 em vez de só sda1)" },
          { flag: "-o COLUNAS", description: "Escolhe quais colunas exibir (NAME, SIZE, TYPE, MOUNTPOINTS, FSTYPE, UUID)" },
        ],
      },
      {
        command: "dd",
        description: "Copia blocos brutos de bytes. PERIGOSO: errar o destino apaga o disco. Use SEMPRE com lsblk antes.",
        example: "sudo dd if=debian-12.5.0-amd64-netinst.iso of=/dev/sdb bs=4M status=progress oflag=sync",
        flags: [
          { flag: "if=", description: "Input file: a ISO a ser gravada" },
          { flag: "of=", description: "Output file: o pendrive (/dev/sdb), NUNCA uma partição (/dev/sdb1)" },
          { flag: "bs=4M", description: "Block size de 4 MB; acelera a gravação sem prejudicar segurança" },
          { flag: "status=progress", description: "Mostra progresso enquanto grava (essencial para acompanhar)" },
          { flag: "oflag=sync", description: "Garante que cada bloco vai para o disco antes do próximo" },
        ],
        output: "1572864000 bytes (1,6 GB, 1,5 GiB) copied, 142,3 s, 11,1 MB/s",
      },
      {
        command: "fdisk",
        description: "Exibe e particiona discos no estilo MBR ou GPT. Use 'fdisk -l' apenas para LISTAR sem alterar nada.",
        example: "sudo fdisk -l /dev/sda",
        output: "Disk /dev/sda: 465.76 GiB, 500107862016 bytes\nDisk model: Samsung SSD 860\nUnits: sectors of 1 * 512 = 512 bytes\nDisklabel type: gpt",
        flags: [
          { flag: "-l", description: "Lista partições sem entrar em modo interativo (seguro)" },
          { flag: "-x", description: "Mostra detalhes adicionais (UUID, tipos)" },
        ],
      },
      {
        command: "parted",
        description: "Particionador moderno, scriptável, com suporte a GPT e MBR. Mais amigável que fdisk para discos grandes.",
        example: "sudo parted /dev/sda print",
        output: "Model: ATA Samsung SSD 860 (scsi)\nDisk /dev/sda: 500GB\nPartition Table: gpt\nNumber  Start   End     Size    File system  Name\n 1      1049kB  538MB   537MB   fat32        EFI\n 2      538MB   494GB   493GB   ext4         root\n 3      494GB   500GB   5728MB  linux-swap   swap",
      },
      {
        command: "mkfs.ext4",
        description: "Formata uma partição com sistema de arquivos ext4 (o padrão do Debian para / e /home).",
        example: "sudo mkfs.ext4 -L home /dev/sda3",
        flags: [
          { flag: "-L rotulo", description: "Define um rótulo legível (você pode montar por LABEL no fstab)" },
          { flag: "-m 1", description: "Reserva 1% do disco para root (padrão é 5%, demais para discos grandes)" },
          { flag: "-T largefile4", description: "Otimiza para arquivos grandes (mídia, backups)" },
        ],
      },
      {
        command: "df",
        description: "Mostra uso de espaço em disco por partição montada.",
        example: "df -hT",
        output: "Filesystem     Type   Size  Used Avail Use% Mounted on\n/dev/sda2      ext4   458G   30G  408G   7% /\n/dev/sda1      vfat   511M  6.2M  505M   2% /boot/efi\ntmpfs          tmpfs  3.8G     0  3.8G   0% /dev/shm",
        flags: [
          { flag: "-h", description: "Tamanhos legíveis para humanos (K, M, G)" },
          { flag: "-T", description: "Mostra também o tipo de filesystem" },
          { flag: "-i", description: "Mostra uso de inodes em vez de bytes (útil em servidor de e-mail)" },
        ],
      },
      {
        command: "tasksel",
        description: "Reabre o seletor de 'tarefas' do instalador (ambiente gráfico, servidor SSH, utilitários padrão).",
        example: "sudo tasksel",
        flags: [
          { flag: "--list-tasks", description: "Lista todas as tarefas com indicação do que está instalado" },
          { flag: "--task-packages NOME", description: "Mostra os pacotes que uma tarefa instalaria" },
        ],
      },
      {
        command: "umount",
        description: "Desmonta um sistema de arquivos. Sempre desmonte o pendrive antes de gravar com dd.",
        example: "sudo umount /dev/sdb1",
        flags: [
          { flag: "-l", description: "Desmonta lazy: solta assim que ninguém estiver usando" },
          { flag: "-f", description: "Força desmonte (use com cuidado, pode corromper dados)" },
        ],
      },
      {
        command: "eject",
        description: "Ejeta uma mídia removível com segurança após o sync.",
        example: "sudo eject /dev/sdb",
      },
      {
        command: "lspci",
        description: "Lista dispositivos PCI: placa de vídeo, rede, áudio, controladoras. Essencial para diagnosticar driver faltando.",
        example: "lspci -k | grep -EA3 'VGA|3D|Network'",
        flags: [
          { flag: "-k", description: "Mostra qual módulo do kernel está sendo usado por cada dispositivo" },
          { flag: "-nn", description: "Mostra IDs numéricos de fabricante/dispositivo (útil para procurar driver)" },
          { flag: "-v", description: "Modo verboso com muito mais detalhes" },
        ],
      },
      {
        command: "lsusb",
        description: "Lista dispositivos USB conectados. Útil para confirmar se um pendrive está sendo reconhecido.",
        example: "lsusb",
        output: "Bus 002 Device 003: ID 0781:5567 SanDisk Corp. Cruzer Blade",
      },
      {
        command: "wipefs",
        description: "Remove assinaturas de filesystem antigas de um disco. Use antes de gravar uma ISO num pendrive que estava com sistema bootável.",
        example: "sudo wipefs -a /dev/sdb",
        flags: [
          { flag: "-a", description: "Remove TODAS as assinaturas detectadas" },
          { flag: "-n", description: "Dry-run: só mostra o que faria, sem apagar" },
        ],
      },
      {
        command: "sync",
        description: "Força a escrita de todos os buffers pendentes em disco. Sempre rode após dd antes de remover o pendrive.",
        example: "sync",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "ATENÇÃO MÁXIMA ao usar dd",
        content:
          "Se você confundir /dev/sdb (pendrive) com /dev/sda (HD), o dd vai apagar seu HD por inteiro em segundos e não tem desfazer. Sempre rode 'lsblk' antes e DEPOIS de plugar o pendrive — o dispositivo NOVO que aparece é o pendrive. Em caso de qualquer dúvida, use uma ferramenta gráfica (GNOME Disks, balenaEtcher, Rufus).",
      },
      {
        type: "info",
        title: "Por que separar /home?",
        content:
          "Reinstalar o Debian no futuro (ou trocar de distribuição) sem perder seus arquivos. Bonus: erro de upgrade no sistema raiz não afeta /home. Custo: precisa adivinhar o tamanho de cada partição na primeira vez. Se sua máquina é só desktop pessoal e você não pretende reinstalar, partição única já basta.",
      },
      {
        type: "success",
        title: "Use Ventoy para múltiplas ISOs",
        content:
          "Em vez de regravar o pendrive cada vez que quiser testar uma distro, instale o Ventoy (https://www.ventoy.net/) UMA vez no pendrive. Depois é só copiar arquivos .iso para dentro dele — no boot aparece um menu para escolher qual ISO usar. Vira pendrive multi-boot que cabe Debian, Ubuntu, Fedora e Windows ao mesmo tempo.",
      },
      {
        type: "warning",
        title: "Secure Boot pode atrapalhar drivers proprietários",
        content:
          "O Debian 12 boota com Secure Boot ligado, mas drivers proprietários como nvidia-driver precisam ser assinados pelo MOK (Machine Owner Key) para carregar. Se a placa NVIDIA não funciona após instalar o driver, ou desligue Secure Boot na BIOS ou aprenda a inscrever o módulo com mokutil.",
      },
      {
        type: "info",
        title: "Faça a primeira instalação em uma VM",
        content:
          "Antes de instalar no hardware real, faça uma instalação inteira no VirtualBox ou GNOME Boxes. Você comete erros sem custo, treina o particionamento e sai com confiança. Vinte minutos de VM economizam horas de drama no notebook real.",
      },
    ],
    practiceLabs: [
      {
        title: "Verificar a integridade de uma ISO baixada",
        goal: "Confirmar que a ISO recebida é exatamente a oficial do Debian, sem adulteração no caminho.",
        steps: [
          "Baixe a ISO desejada da página oficial em https://www.debian.org/CD/http-ftp/.",
          "No mesmo diretório, baixe os arquivos SHA256SUMS e SHA256SUMS.sign.",
          "Calcule o SHA256 da ISO local com sha256sum.",
          "Compare a saída com o hash correspondente listado em SHA256SUMS.",
          "Opcional avançado: importe a chave de assinatura do Debian e valide o SHA256SUMS com gpg --verify.",
        ],
        command: `cd ~/Downloads
sha256sum debian-12.5.0-amd64-netinst.iso
grep "debian-12.5.0-amd64-netinst.iso" SHA256SUMS
# Os dois hashes devem ser identicos.

# Validacao avancada da assinatura GPG:
gpg --keyserver keyring.debian.org --recv-keys DF9B9C49EAA9298432589D76DA87E80D6294BE9B
gpg --verify SHA256SUMS.sign SHA256SUMS`,
        expected: "Os hashes batem caractere por caractere e o gpg confirma 'Good signature'.",
        verify: "Se houver QUALQUER diferença no SHA256, descarte a ISO e baixe novamente de outro mirror. Se o gpg disser 'BAD signature', pare imediatamente — alguém adulterou os arquivos.",
      },
      {
        title: "Gravar pendrive bootável com dd com segurança",
        goal: "Gerar um pendrive bootável do Debian sem risco de apagar o HD por engano.",
        steps: [
          "ANTES de plugar o pendrive, rode lsblk e anote os dispositivos atuais (sda, sdb...).",
          "Plugue o pendrive e rode lsblk de novo. O dispositivo NOVO é o pendrive.",
          "Confira o tamanho — se não bate com o do pendrive, NÃO continue.",
          "Desmonte qualquer partição já montada do pendrive com sudo umount.",
          "Limpe assinaturas antigas com wipefs -a (opcional, mas recomendado).",
          "Execute o dd apontando para o disco inteiro (/dev/sdb), nunca para uma partição.",
          "Aguarde o status=progress chegar até o fim e rode sync para garantir.",
          "Ejete com eject antes de remover fisicamente.",
        ],
        command: `lsblk
# pluga o pendrive
lsblk
sudo fdisk -l /dev/sdb | head -3

sudo umount /dev/sdb* 2>/dev/null
sudo wipefs -a /dev/sdb

sudo dd if=~/Downloads/debian-12.5.0-amd64-netinst.iso \\
        of=/dev/sdb bs=4M status=progress oflag=sync
sync
sudo eject /dev/sdb`,
        expected: "O dd termina mostrando algo como '450 MB copied, 41 s, 11 MB/s' e o pendrive pode ser ejetado.",
        verify: "Plugue o pendrive em outra máquina (ou na mesma reiniciando) e tente dar boot. Deve aparecer o menu do instalador do Debian. Se aparecer 'Operating System not found', verifique a ordem de boot na BIOS.",
      },
      {
        title: "Instalação em máquina virtual para treino",
        goal: "Fazer uma instalação completa do Debian sem risco de mexer no hardware real.",
        steps: [
          "Instale o GNOME Boxes (sudo apt install gnome-boxes) ou VirtualBox.",
          "Crie uma nova máquina virtual com 4 GB de RAM, 25 GB de disco e a ISO baixada como mídia.",
          "Inicie a VM e escolha 'Graphical install' no menu do instalador.",
          "Siga todas as etapas: idioma pt_BR, teclado ABNT2, hostname 'lab', usuário 'aluno'.",
          "No particionamento, escolha 'Guiado - usar disco inteiro com /home separado'.",
          "Em tasksel, marque 'Debian desktop environment' + 'GNOME' + 'Utilitários do sistema padrão'.",
          "Aguarde a instalação terminar, retire a ISO da VM e reinicie.",
          "Faça login e rode 'sudo apt update && sudo apt full-upgrade -y'.",
        ],
        expected: "Sistema instalado, com login funcional e acesso ao GNOME.",
        verify: "Abra um terminal dentro da VM e rode 'cat /etc/debian_version' — deve mostrar a versão estável atual (ex: 12.5).",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual é a diferença prática entre netinst, DVD-1 e Live, e quando usar cada uma?",
        hint: "Pense em tamanho, presença de internet e necessidade de testar antes de instalar.",
        answer:
          "netinst (~400 MB) só traz o instalador e baixa pacotes pela internet — boa escolha quando há boa conexão. DVD-1 (~4 GB) tem instalador mais pacotes principais para uso offline — útil onde a internet é ruim. Live (2,5-3 GB) carrega o sistema do pendrive sem instalar, perfeito para testar hardware (Wi-Fi, suspend) antes de comprometer o disco.",
      },
      {
        id: 2,
        question: "Como verificar que a ISO baixada não foi adulterada no caminho?",
        hint: "Existem dois níveis de verificação: o hash e a assinatura.",
        answer:
          "Calcule o SHA256 da sua ISO com 'sha256sum arquivo.iso' e compare com o hash correspondente no arquivo SHA256SUMS publicado no site do Debian. Para garantir também que o SHA256SUMS é autêntico, baixe SHA256SUMS.sign e rode 'gpg --verify SHA256SUMS.sign SHA256SUMS' — deve aparecer 'Good signature' da chave de CD signing do Debian.",
      },
      {
        id: 3,
        question: "Por que vale a pena separar /home em uma partição própria?",
        hint: "Pense no que acontece quando você reinstala o sistema.",
        answer:
          "Porque ao reinstalar o Debian (ou migrar para outra distribuição) você pode escolher NÃO formatar a partição /home. Seus arquivos pessoais, downloads, fotos e configurações de aplicativos (que ficam em ~/.config) permanecem intactos. Sem essa separação, um simples 'reinstalar tudo' apaga seus dados junto.",
      },
      {
        id: 4,
        question: "Quanto de swap criar em uma máquina com 16 GB de RAM em 2026?",
        hint: "Depende se você quer hibernar.",
        answer:
          "Sem hibernação: 4-8 GB já garantem segurança contra picos de memória sem desperdiçar disco. Com hibernação (suspend-to-disk): swap precisa ser >= RAM, então 16 GB no mínimo. Alternativa moderna: usar zram (swap comprimido em RAM) e deixar swap em disco pequeno só como fallback.",
      },
      {
        id: 5,
        question: "Por que NUNCA gravar a ISO em /dev/sdb1 com dd, e sim em /dev/sdb?",
        hint: "Pense em onde fica o setor de boot.",
        answer:
          "/dev/sdb1 é uma partição dentro do pendrive; /dev/sdb é o disco inteiro. A ISO contém um bootloader que precisa ficar exatamente no setor de boot do disco — fora de qualquer partição. Se você gravar em /dev/sdb1, o bootloader vai parar dentro da partição e a BIOS/UEFI não vai conseguir carregá-lo, então o pendrive fica com o conteúdo certo mas não dá boot.",
      },
      {
        id: 6,
        question: "Como descobrir qual driver de placa de vídeo o Debian está usando?",
        hint: "Existe uma flag do lspci que mostra o módulo do kernel.",
        answer:
          "Rode 'lspci -k | grep -EA3 \"VGA|3D\"'. A linha 'Kernel driver in use:' mostra o driver carregado: 'i915' para Intel, 'amdgpu' para AMD recentes, 'radeon' para AMD antigas, 'nouveau' para NVIDIA livre e 'nvidia' para o proprietário.",
      },
      {
        id: 7,
        question: "O que fazer se, após instalar, o Wi-Fi não funcionar?",
        hint: "Geralmente é firmware faltando.",
        answer:
          "1) Conecte um cabo Ethernet ou USB-tether do celular para ter internet. 2) Identifique o chipset com 'lspci | grep -i network'. 3) Instale o pacote firmware correspondente: firmware-iwlwifi (Intel), firmware-realtek (Realtek), firmware-atheros (Atheros) ou firmware-misc-nonfree (genérico). 4) Reinicie. Se ainda não pegar, verifique no Debian Wiki a página específica do seu chipset.",
      },
      {
        id: 8,
        question: "Qual o efeito de deixar a senha de root em branco durante a instalação?",
        hint: "O instalador toma uma decisão automática quando isso acontece.",
        answer:
          "Quando você deixa a senha de root vazia, o instalador desabilita o login direto como root e adiciona seu usuário comum ao grupo 'sudo' automaticamente — exatamente como o Ubuntu faz. Você passa a usar 'sudo' para tarefas administrativas, com a sua própria senha. É uma boa prática porque registra no log quem executou cada comando privilegiado.",
      },
    ],
    references: [
      { title: "Página oficial de download do Debian", url: "https://www.debian.org/distrib/" },
      { title: "Manual de instalação (versão estável)", url: "https://www.debian.org/releases/stable/installmanual" },
      { title: "Debian Wiki — Verifying authenticity of Debian CDs", url: "https://www.debian.org/CD/verify" },
      { title: "Ventoy — pendrive multi-boot", url: "https://www.ventoy.net/" },
      { title: "Debian Wiki — Firmware non-free e suporte a hardware", url: "https://wiki.debian.org/Firmware" },
    ],
  },

  {
    id: "pos-instalacao",
    title: "Pós-instalação — os primeiros 30 minutos",
    icon: "🎯",
    category: "Instalação e Ambiente",
    description: "O roteiro essencial logo após instalar o Debian: validar sudo, atualizar tudo, ajustar locale e timezone, ligar o firewall, instalar utilitários e drivers e deixar o sistema pronto para o uso real.",
    objectives: [
      "Validar e corrigir a configuração do sudo se necessário",
      "Atualizar o sistema completamente na primeira vez",
      "Ajustar timezone, locale pt_BR.UTF-8 e teclado ABNT2",
      "Habilitar o firewall UFW com política sensata para desktop",
      "Instalar utilitários essenciais que o Debian não traz por padrão",
      "Configurar drivers proprietários quando o hardware exigir",
    ],
    content: [
      "Acabou de instalar o Debian. O desktop está limpo, brilhando, e você está olhando para um sistema que parece pronto. Não está. Pense num apartamento recém-entregue: as paredes estão pintadas, a luz funciona, mas falta colocar fechadura na porta, programar o ar-condicionado, conectar a internet e comprar a vassoura. Esses primeiros 30 minutos são o que diferencia um sistema gostoso de usar de um sistema que vai te frustrar daqui a duas semanas. Vamos por ordem de importância — cada item resolve um problema real que aparece se você não fizer.",
      "Por que esses ajustes não vêm prontos? Porque o Debian é uma base genérica, pensada para rodar em desktop, servidor, embarcado, na nuvem e em raspberry. Cada cenário tem necessidades diferentes — firewall liberal num laptop e estrito num servidor de borda, locale americano numa máquina internacional e brasileiro no seu notebook, drivers proprietários só onde o hardware exige. Em vez de adivinhar, o Debian deixa você escolher. A boa notícia é que essas escolhas formam um checklist curto e repetível, ideal para guardar num script.",
      "Antes de partir para a prática, vale entender alguns termos. 'sudo' é um programa que permite a um usuário comum executar um comando como outro usuário (geralmente root) após autenticação — o controle de quem pode usar sudo está em /etc/sudoers (sempre editado via 'visudo' para evitar quebrar a sintaxe). 'apt' é o gerenciador de pacotes de alto nível do Debian — ele baixa, instala, atualiza e remove software dos repositórios oficiais. 'systemctl' é a interface do systemd, o sistema que orquestra serviços e o boot. 'locale' define formato de data, número, moeda e idioma das mensagens. 'timezone' define o fuso horário usado pelo relógio do sistema.",
      "O primeiro teste é o sudo. Se você definiu uma senha de root durante a instalação, o sudo PODE não estar configurado para o seu usuário comum — depende da versão do instalador. Rode 'sudo whoami' no terminal: se aparecer 'root', está tudo certo; se aparecer 'usuário X is not in the sudoers file', você precisa adicionar manualmente. A receita é entrar como root com 'su -' (digite a senha de root), instalar o sudo se necessário ('apt install sudo'), e adicionar seu usuário ao grupo: 'usermod -aG sudo NOME_USUARIO'. Faça logout e login para o grupo aplicar — sem isso, o shell continua sem ver o novo grupo.",
      "Depois vem o update completo. Pode parecer redundante (o sistema acabou de ser instalado), mas a ISO foi gerada há semanas ou meses e nesse tempo saíram correções de segurança, atualizações de kernel e bugfixes. O ritual é: 'sudo apt update' (atualiza apenas o índice de pacotes, não instala nada) seguido de 'sudo apt full-upgrade' (instala tudo, inclusive mudanças que removem ou adicionam pacotes para resolver dependências, ao contrário do simples 'upgrade'). Se atualizar o kernel, reinicie. Esse pareamento update + full-upgrade é o que você vai rodar semanalmente para manter o sistema saudável.",
      "Em seguida vem locale e timezone. Locale errado quebra coisas pequenas e irritantes: data aparece em formato americano, vírgula vira ponto em planilhas, mensagens em inglês onde você quer português. Timezone errado faz o relógio mostrar a hora errada e o cron disparar tarefas no horário errado. Os comandos são curtos: 'sudo timedatectl set-timezone America/Sao_Paulo' e 'sudo dpkg-reconfigure locales' (marque pt_BR.UTF-8 e en_US.UTF-8, defina pt_BR.UTF-8 como padrão). Para o teclado, 'sudo dpkg-reconfigure keyboard-configuration' deixa você escolher ABNT2 ou US-International com cedilha.",
      "Firewall é o item que muita gente esquece. O Debian vem com a infraestrutura (nftables) mas SEM regras configuradas, ou seja, qualquer porta aberta por algum software fica exposta. UFW (Uncomplicated Firewall) é a interface amigável padrão. Três comandos resolvem 99% dos casos de desktop: 'sudo ufw default deny incoming' (bloqueia tudo que vem de fora), 'sudo ufw default allow outgoing' (libera tudo que sai) e 'sudo ufw enable' (liga). Se for servidor, depois você abre só as portas necessárias com 'sudo ufw allow 22/tcp' (SSH), '443/tcp' (HTTPS), etc.",
      "Os 'utilitários esquecidos' são o sexto passo. O Debian é minimalista de propósito, então faltam ferramentas que você vai usar no dia a dia: build-essential (compiladores), curl/wget (download via terminal), git (versionamento), vim (editor), htop (monitor de processos visual), tree (listar diretórios em árvore), unzip/zip/p7zip-full (compressão), gnome-disk-utility (gerenciador gráfico de discos), gparted (particionador gráfico), ttf-mscorefonts-installer (Arial, Times, Verdana — necessárias em muitos sites), fonts-noto-color-emoji (emojis coloridos). Um único 'sudo apt install -y' com tudo isso resolve.",
      "Por último, drivers e ajustes específicos. Identifique sua placa de vídeo com 'lspci -k | grep -EA3 \"VGA|3D\"'. Se for NVIDIA e você precisa de aceleração 3D ou CUDA, instale 'nvidia-driver firmware-misc-nonfree' (precisa de non-free habilitado em /etc/apt/sources.list). Se for AMD ou Intel, normalmente o driver livre já basta. Para Wi-Fi Realtek antigo, 'firmware-realtek'. Bluetooth: 'sudo systemctl enable --now bluetooth'. Para desenvolvedores, configure o git: 'git config --global user.name' e 'user.email'. Para apps gráficos modernos, instale Flatpak e adicione o Flathub.",
      "Ao final desses 30 minutos, você terá um sistema atualizado, com idioma e fuso corretos, firewall ativo, drivers necessários instalados e ferramentas úteis prontas para uso. Mais importante: você vai entender o que cada comando fez, o que permite reproduzir esse setup em qualquer instalação futura — inclusive em script. Esse é o segredo dos veteranos de Linux: eles não decoram comandos, eles entendem o porquê e automatizam.",
    ],
    commands: [
      {
        command: "sudo apt update",
        description: "Atualiza o índice local de pacotes consultando os repositórios. NÃO instala nada — só sincroniza a lista.",
        example: "sudo apt update",
        output: "Hit:1 http://deb.debian.org/debian bookworm InRelease\nGet:2 http://security.debian.org bookworm-security InRelease [48.0 kB]\nReading package lists... Done\nAll packages are up to date.",
      },
      {
        command: "sudo apt full-upgrade",
        description: "Instala todas as atualizações disponíveis, incluindo as que precisam adicionar ou remover pacotes para resolver dependências. Mais agressivo que 'upgrade'.",
        example: "sudo apt full-upgrade -y",
        flags: [
          { flag: "-y", description: "Aceita prompts automaticamente (use só se sabe o que está fazendo)" },
          { flag: "--simulate", description: "Mostra o que seria feito sem aplicar nada" },
          { flag: "--no-install-recommends", description: "Não instala pacotes apenas recomendados" },
        ],
      },
      {
        command: "su -",
        description: "Troca para o usuário root carregando o ambiente dele. Use quando o sudo não está configurado ainda.",
        example: "su -",
        output: "Password: \nroot@debian:~#",
      },
      {
        command: "usermod",
        description: "Modifica atributos de um usuário existente — grupos, shell, home, expiração.",
        example: "sudo usermod -aG sudo wallyson",
        flags: [
          { flag: "-aG GRUPO", description: "Adiciona ao grupo SEM remover dos outros (essencial usar -a)" },
          { flag: "-s SHELL", description: "Muda o shell padrão (ex: -s /usr/bin/zsh)" },
          { flag: "-l NOVO", description: "Renomeia o usuário" },
        ],
      },
      {
        command: "timedatectl",
        description: "Mostra e configura data, hora, fuso e sincronização NTP via systemd-timesyncd.",
        example: "timedatectl",
        output: "               Local time: ven 2026-04-25 18:32:15 -03\n           Universal time: ven 2026-04-25 21:32:15 UTC\n                Time zone: America/Sao_Paulo (-03, -0300)\nSystem clock synchronized: yes\n              NTP service: active",
        flags: [
          { flag: "set-timezone TZ", description: "Define fuso (ex: America/Sao_Paulo)" },
          { flag: "list-timezones", description: "Lista todos os fusos disponíveis" },
          { flag: "set-ntp true", description: "Liga sincronização automática via internet" },
          { flag: "set-time HH:MM:SS", description: "Define hora manualmente (raro — prefira NTP)" },
        ],
      },
      {
        command: "locale",
        description: "Mostra as variáveis de locale ativas — idioma, formato de data, número e moeda.",
        example: "locale",
        output: "LANG=pt_BR.UTF-8\nLANGUAGE=pt_BR\nLC_CTYPE=\"pt_BR.UTF-8\"\nLC_NUMERIC=\"pt_BR.UTF-8\"\nLC_TIME=\"pt_BR.UTF-8\"\nLC_ALL=",
      },
      {
        command: "sudo dpkg-reconfigure",
        description: "Reabre o menu de configuração interativa de qualquer pacote. Usado para refazer locale, teclado, timezone, console.",
        example: "sudo dpkg-reconfigure locales",
        flags: [
          { flag: "locales", description: "Reescolhe locales disponíveis e o padrão" },
          { flag: "tzdata", description: "Reescolhe fuso horário via menu" },
          { flag: "keyboard-configuration", description: "Reescolhe layout de teclado (ABNT2, US, etc.)" },
          { flag: "console-setup", description: "Configura fonte e tamanho do console TTY" },
        ],
      },
      {
        command: "sudo ufw",
        description: "Uncomplicated Firewall — interface amigável para o nftables/iptables do Linux.",
        example: "sudo ufw enable && sudo ufw status verbose",
        flags: [
          { flag: "enable / disable", description: "Liga ou desliga o firewall" },
          { flag: "default deny incoming", description: "Política padrão: bloqueia tudo que entra" },
          { flag: "default allow outgoing", description: "Política padrão: libera tudo que sai" },
          { flag: "allow PORTA/PROTO", description: "Libera uma porta (ex: 22/tcp)" },
          { flag: "deny from IP", description: "Bloqueia um IP específico" },
          { flag: "status verbose", description: "Mostra estado e regras detalhadas" },
        ],
      },
      {
        command: "sudo visudo",
        description: "Edita /etc/sudoers com validação de sintaxe. NUNCA edite o arquivo direto com nano/vim.",
        example: "sudo visudo",
      },
      {
        command: "sudo apt install",
        description: "Instala um ou mais pacotes a partir dos repositórios configurados.",
        example: "sudo apt install -y build-essential curl wget git vim htop tree",
        flags: [
          { flag: "-y", description: "Aceita prompts automaticamente" },
          { flag: "--no-install-recommends", description: "Pula pacotes apenas recomendados" },
          { flag: "--reinstall", description: "Reinstala mesmo se já estiver instalado" },
        ],
      },
      {
        command: "lspci -k",
        description: "Lista dispositivos PCI mostrando qual módulo do kernel cada um usa. Essencial para diagnosticar driver faltando.",
        example: "lspci -k | grep -EA3 'VGA|3D'",
        output: "00:02.0 VGA compatible controller: Intel Corporation HD Graphics 620\n        Subsystem: Lenovo HD Graphics 620\n        Kernel driver in use: i915\n        Kernel modules: i915",
      },
      {
        command: "git config --global",
        description: "Define configurações globais do git (aplicam em todos os repositórios do usuário).",
        example: "git config --global user.email 'voce@exemplo.com'",
        flags: [
          { flag: "user.name 'Nome'", description: "Define nome para os commits" },
          { flag: "user.email 'mail'", description: "Define e-mail para os commits" },
          { flag: "init.defaultBranch main", description: "Define 'main' como nome padrão de branch novo" },
          { flag: "pull.rebase false", description: "Define merge (não rebase) como estratégia padrão de pull" },
          { flag: "--list", description: "Mostra todas as configurações ativas" },
        ],
      },
      {
        command: "flatpak remote-add",
        description: "Adiciona um repositório de aplicativos Flatpak. O Flathub é o principal.",
        example: "flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo",
        flags: [
          { flag: "--if-not-exists", description: "Não falha se o repositório já estiver configurado" },
          { flag: "--user", description: "Adiciona só para o usuário atual, não para o sistema" },
        ],
      },
      {
        command: "systemctl",
        description: "Controla unidades do systemd: serviços, sockets, timers, targets.",
        example: "sudo systemctl enable --now bluetooth",
        flags: [
          { flag: "enable --now", description: "Habilita no boot E inicia agora" },
          { flag: "disable --now", description: "Desabilita no boot E para agora" },
          { flag: "status SERVICO", description: "Mostra estado e últimas linhas de log" },
          { flag: "restart SERVICO", description: "Reinicia o serviço" },
        ],
      },
      {
        command: "apt list --upgradable",
        description: "Lista quais pacotes têm atualização disponível, sem instalar nada.",
        example: "apt list --upgradable",
        output: "Listing... Done\ncurl/stable 7.88.1-10+deb12u5 amd64 [upgradable from: 7.88.1-10+deb12u4]\nlinux-image-amd64/stable 6.1.0-18 amd64 [upgradable from: 6.1.0-17]",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "NUNCA edite /etc/sudoers diretamente",
        content:
          "Use SEMPRE 'sudo visudo'. Ele abre o editor padrão e VALIDA a sintaxe ao salvar. Se você editar /etc/sudoers manualmente com nano e introduzir um erro, perde acesso ao sudo permanentemente — recuperar exige bootar em modo recovery e mexer com root direto.",
      },
      {
        type: "warning",
        title: "Cuidado com 'apt full-upgrade' em produção",
        content:
          "full-upgrade pode REMOVER pacotes para resolver dependências. Em servidor de produção, antes de rodar, faça 'apt --simulate full-upgrade' e leia a lista de removidos com calma. Se algo estranho aparecer (tipo 'remove postgresql'), pare e investigue.",
      },
      {
        type: "success",
        title: "Snapshot semanal em VM antes do upgrade",
        content:
          "Se você roda em VM (VirtualBox, GNOME Boxes, Proxmox), tire um snapshot ANTES de cada 'apt full-upgrade'. Se um upgrade quebrar algo (kernel novo + driver proprietário, por exemplo), você restaura o snapshot em 30 segundos e está de volta ao estado funcional.",
      },
      {
        type: "info",
        title: "non-free, contrib e non-free-firmware",
        content:
          "Os repositórios extras do Debian estão divididos em três: 'contrib' (software livre que depende de não-livre), 'non-free' (proprietário) e 'non-free-firmware' (firmware proprietário, separado a partir do Debian 12). Para drivers NVIDIA, por exemplo, você precisa habilitar non-free e non-free-firmware em /etc/apt/sources.list.",
      },
      {
        type: "success",
        title: "Crie um script de pós-instalação",
        content:
          "Anote todos os comandos do seu setup pessoal num arquivo setup-debian.sh e versione no GitHub. Da próxima vez que reinstalar (sua ou de um amigo), basta clonar e rodar. Vira um manual executável da sua preferência.",
      },
    ],
    practiceLabs: [
      {
        title: "Setup pós-instalação completo em um único script",
        goal: "Executar todos os ajustes iniciais de uma vez em um script reaproveitável para futuras instalações.",
        steps: [
          "Salve o bloco abaixo em ~/setup-debian.sh.",
          "Dê permissão de execução: chmod +x ~/setup-debian.sh.",
          "Execute como root: sudo ~/setup-debian.sh.",
          "Aguarde os passos terminarem (pode demorar dependendo da internet).",
          "Reinicie o sistema ao final.",
        ],
        command: `#!/bin/bash
set -e

echo "=== 1) Atualizando sistema ==="
apt update
apt full-upgrade -y

echo "=== 2) Instalando essenciais ==="
apt install -y build-essential curl wget git vim htop tree neofetch \\
  unzip zip p7zip-full \\
  gnome-disk-utility gparted \\
  ufw flatpak \\
  ttf-mscorefonts-installer fonts-noto-color-emoji

echo "=== 3) Configurando UFW ==="
ufw default deny incoming
ufw default allow outgoing
ufw --force enable

echo "=== 4) Configurando timezone e NTP ==="
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
        expected: "Mensagens de cada etapa concluída sem erro e final 'Tudo pronto'.",
        verify: "Após reiniciar, rode 'sudo ufw status' (deve mostrar 'active'), 'timedatectl' (deve mostrar America/Sao_Paulo), 'git --version' e 'htop' (devem abrir).",
      },
      {
        title: "Recuperar sudo quebrado entrando como root",
        goal: "Praticar o procedimento de adicionar um usuário ao grupo sudo quando o sudo não funciona.",
        steps: [
          "Em uma máquina virtual de teste, simule o problema removendo seu usuário do grupo sudo: 'sudo gpasswd -d $USER sudo' e faça logout/login.",
          "Tente 'sudo whoami'. Deve dar erro 'not in the sudoers file'.",
          "Troque para root com 'su -' e digite a senha de root.",
          "Confirme com 'whoami' que está como root.",
          "Adicione seu usuário de volta ao grupo: 'usermod -aG sudo NOME_USUARIO'.",
          "Saia do root com 'exit' e faça logout/login do desktop.",
          "Confirme que sudo voltou: 'sudo whoami' deve responder 'root'.",
        ],
        expected: "Após o logout/login final, o sudo volta a funcionar normalmente.",
        verify: "groups | grep sudo deve listar o grupo sudo entre os do seu usuário.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Você instalou o Debian, definiu senha de root e o sudo não funciona. Qual o procedimento?",
        hint: "Você ainda tem como entrar como root.",
        answer:
          "Entre como root com 'su -' (digite a senha de root). Verifique se o sudo está instalado com 'which sudo'; se não, instale com 'apt install sudo'. Adicione seu usuário ao grupo sudo: 'usermod -aG sudo SEU_USUARIO'. Saia com 'exit' e faça logout/login do desktop para o grupo aplicar.",
      },
      {
        id: 2,
        question: "Qual a diferença entre 'apt upgrade' e 'apt full-upgrade'?",
        hint: "Pense em remoção de pacotes.",
        answer:
          "'apt upgrade' instala atualizações que NÃO precisam remover ou adicionar pacotes — se uma dependência mudou e exige isso, ele segura o pacote. 'apt full-upgrade' permite remover/adicionar pacotes para resolver dependências, instalando tudo que está pendente. full-upgrade é o recomendado para manter o sistema realmente atualizado.",
      },
      {
        id: 3,
        question: "Como definir o fuso horário de São Paulo em uma linha?",
        hint: "Existe um comando do systemd para isso.",
        answer:
          "sudo timedatectl set-timezone America/Sao_Paulo. Para confirmar: 'timedatectl' deve mostrar 'Time zone: America/Sao_Paulo (-03, -0300)'.",
      },
      {
        id: 4,
        question: "Qual configuração mínima de UFW para um desktop?",
        hint: "Três comandos resolvem.",
        answer:
          "sudo ufw default deny incoming (bloqueia conexões de fora), sudo ufw default allow outgoing (libera saídas), sudo ufw enable (liga). Desktop normalmente não precisa abrir nenhuma porta — apenas se você roda servidor SSH ou serviço HTTP local.",
      },
      {
        id: 5,
        question: "Como saber qual driver a placa de vídeo está usando agora?",
        hint: "Existe uma flag do lspci específica.",
        answer:
          "lspci -k | grep -EA3 'VGA|3D'. A linha 'Kernel driver in use:' mostra o módulo carregado: 'i915' (Intel), 'amdgpu' (AMD recente), 'radeon' (AMD antiga), 'nouveau' (NVIDIA livre), 'nvidia' (proprietário).",
      },
      {
        id: 6,
        question: "Por que NUNCA editar /etc/sudoers com nano?",
        hint: "O que acontece se você salvar com erro de sintaxe?",
        answer:
          "Erro de sintaxe em /etc/sudoers quebra o sudo permanentemente — você não consegue mais elevar privilégios para corrigir. 'sudo visudo' valida a sintaxe ao salvar e impede de gravar arquivo quebrado, mantendo o anterior se algo estiver errado.",
      },
      {
        id: 7,
        question: "Como configurar nome e e-mail no git de uma vez por todas?",
        hint: "Use o escopo --global.",
        answer:
          "git config --global user.name 'Seu Nome' e git config --global user.email 'voce@exemplo.com'. Sem isso, cada commit reclama. Para conferir: 'git config --global --list'.",
      },
      {
        id: 8,
        question: "Sua máquina está com kernel novo, NVIDIA travou. Como evitar esse drama no futuro?",
        hint: "Pense em snapshots e em testar antes de reiniciar.",
        answer:
          "Em VM, snapshot antes de full-upgrade. Em hardware real, mantenha o kernel anterior instalado (o GRUB tem opção 'Advanced' para escolher) e reinstale o módulo NVIDIA com 'sudo apt install --reinstall nvidia-driver' após cada upgrade de kernel. Considere DKMS, que recompila módulos automaticamente quando o kernel muda.",
      },
    ],
    references: [
      { title: "Debian Wiki — PostInstall", url: "https://wiki.debian.org/PostInstall" },
      { title: "Manual do UFW (Ubuntu Community)", url: "https://help.ubuntu.com/community/UFW" },
      { title: "Debian Handbook — Capítulo de configuração inicial", url: "https://debian-handbook.info/" },
      { title: "Flathub — repositório de aplicativos Flatpak", url: "https://flathub.org/" },
      { title: "Debian Wiki — sudo", url: "https://wiki.debian.org/sudo" },
    ],
  },

  {
    id: "ambiente-grafico",
    title: "Ambientes gráficos no Debian",
    icon: "🖥️",
    category: "Instalação e Ambiente",
    description: "GNOME, KDE, XFCE, MATE, Cinnamon, LXDE/LXQt — qual escolher conforme hardware e gosto, como instalar/trocar sem reinstalar e o papel de display server e display manager.",
    objectives: [
      "Conhecer os principais ambientes gráficos disponíveis no Debian",
      "Escolher o ambiente certo conforme hardware e estilo de uso",
      "Instalar e trocar de ambiente gráfico sem reinstalar o sistema",
      "Diferenciar X11 e Wayland e saber quando preferir cada um",
      "Identificar e trocar o display manager (tela de login)",
      "Reverter um servidor para modo console quando o ambiente gráfico não for mais necessário",
    ],
    content: [
      "Diferente do Windows e do macOS — onde a interface é uma só, controlada pela empresa que faz o sistema — o Linux te dá liberdade absoluta de escolha do desktop. O Debian é particularmente neutro: durante a instalação você escolhe um ambiente gráfico, ou nenhum (caso de servidor). Pense numa loja de móveis em vez de num apartamento mobiliado: você decide o estilo, o tamanho e o consumo. Essa liberdade é poderosa, mas pode paralisar quem está chegando, então este capítulo é justamente um guia para você fazer uma escolha consciente em cinco minutos e seguir em frente.",
      "Por que existem tantos ambientes? Cada um nasceu de uma filosofia diferente. O GNOME persegue minimalismo e produtividade focada, escondendo opções para deixar o uso fluido. O KDE Plasma celebra a customização — quase tudo é configurável, e isso atrai quem quer controle total. O XFCE preza simplicidade e leveza, mantendo o estilo tradicional de painel + menu. O MATE é a continuação espiritual do GNOME 2 (a interface clássica que muitos preferiram quando o GNOME 3 chegou). O LXDE/LXQt são ultraleves, pensados para máquinas antigas. O Cinnamon (do Linux Mint) tenta o equilíbrio entre moderno e familiar. Não existe escolha 'errada' — existe a que combina com a sua máquina e seu gosto.",
      "Antes de comparar, vale entender alguns termos. Um 'ambiente gráfico' (Desktop Environment, DE) é um conjunto de aplicativos integrados: gerenciador de janelas, painel/dock, gerenciador de arquivos, editor de texto, terminal, configurações. Um 'gerenciador de janelas' (Window Manager, WM) é apenas a parte que desenha bordas e move janelas — pode ser usado isolado por quem prefere setup minimalista (i3, sway, awesome). Um 'display server' é a camada que efetivamente desenha pixels na tela — X11 (legado) ou Wayland (moderno). Um 'display manager' é a tela de login que aparece antes do desktop carregar (GDM3, SDDM, LightDM).",
      "Para escolher, use uma regra prática baseada em RAM e gosto. Notebook moderno (8-16 GB+, SSD): GNOME se você curte estética Mac, KDE se prefere estilo Windows. Notebook intermediário (4-8 GB): XFCE pela leveza ou Cinnamon por familiaridade. Máquina antiga (1-4 GB): LXDE/LXQt para deixar RAM livre para os apps. Servidor sem monitor: nenhum — acesse por SSH e economize recursos. Em termos de consumo aproximado em ocioso: GNOME 1,2-1,8 GB, KDE 0,8-1,5 GB, XFCE 0,4-0,7 GB, LXDE 0,2-0,4 GB. São números arredondados — variam com extensões e tema.",
      "O Debian facilita a vida com 'metapacotes' chamados task-DESKTOP-desktop. Eles instalam o ambiente completo com apps padrão. A lista: task-gnome-desktop, task-kde-desktop, task-xfce-desktop, task-mate-desktop, task-lxde-desktop, task-lxqt-desktop, task-cinnamon-desktop. Para instalar um sem desinstalar o atual, basta 'sudo apt install task-NOME-desktop'. Eles convivem em paz — na tela de login você escolhe qual usar nessa sessão. Isso permite testar antes de comprometer. O custo é espaço em disco: cada um pesa entre 1 e 3 GB.",
      "Display server merece um parágrafo especial. X11 (também chamado X.Org) é o sistema tradicional, com mais de 30 anos. Foi pensado para uma era em que o computador podia exibir aplicativos rodando em outra máquina remotamente — o que continua útil mas trouxe problemas modernos: segurança fraca entre apps (qualquer um pode capturar teclas de outro), suporte ruim a HiDPI por monitor, complexidade enorme. Wayland é o substituto moderno, com isolamento melhor, suporte nativo a HiDPI por monitor e menor latência. GNOME e KDE atuais usam Wayland por padrão no Debian 12. Para verificar a sua sessão: 'echo $XDG_SESSION_TYPE'.",
      "Quando preferir X11 sobre Wayland? Em três cenários: (1) apps antigos que dependem de X (TeamViewer, AnyDesk versões antigas, alguns games), (2) drivers proprietários NVIDIA mais antigos com problemas em Wayland, (3) ferramentas de captura de tela complexas (OBS Studio melhorou muito mas ainda há corner cases). Trocar entre os dois é simples: na tela de login (GDM3 ou SDDM), tem um menu (geralmente engrenagem no canto) onde você escolhe 'GNOME on Xorg' ou 'Plasma (X11)'. A escolha vale só para a sessão atual.",
      "Display manager é peça menor mas confunde quando aparece. Cada DE tem o seu favorito: GDM3 (GNOME), SDDM (KDE), LightDM (XFCE/MATE/Cinnamon), LXDM (LXDE). Quando você instala um DE novo, o instalador pergunta qual display manager usar — pode escolher qualquer um, todos funcionam com qualquer DE. Para trocar depois: 'sudo dpkg-reconfigure NOME_DM'. Para saber qual está ativo: 'systemctl status display-manager' mostra o serviço por trás do nome genérico. Se quiser remover ambiente gráfico em servidor: 'sudo systemctl set-default multi-user.target' faz o boot ir direto para o console.",
      "Customizar o ambiente é parte do prazer de usar Linux. Cada DE tem seu painel de configurações: gnome-tweaks (precisa instalar separado) e gnome-shell-extensions para o GNOME, systemsettings para o KDE, xfce4-settings-manager para o XFCE. Para temas visuais, projetos populares como Arc, Materia, Numix, Adwaita-dark cobrem todos os DEs. Para ícones, Papirus, Numix Circle, Flat-Remix são clássicos. Pacote ttf-mscorefonts-installer instala Arial/Times/Verdana, fonts-firacode adiciona Fira Code com ligaduras para programadores. A regra é: experimente até achar o seu, e depois pare de mexer — ninguém produz nada se passa o dia trocando tema.",
      "Ao final deste capítulo você sabe escolher um DE consciente do hardware e do gosto, instalar mais de um sem comprometer o atual, alternar entre eles na tela de login, distinguir X11 e Wayland (escolhendo o adequado quando algum app dá problema) e remover ambiente gráfico em servidor que não precisa mais. Mais importante: você não precisa decidir agora qual será seu DE 'definitivo'. Use o que veio padrão por algumas semanas, depois experimente outro como teste, e a escolha aparece naturalmente. Linux é assim: a interface segue você, não o contrário.",
    ],
    commands: [
      {
        command: "echo $XDG_CURRENT_DESKTOP",
        description: "Mostra qual ambiente gráfico está ativo na sessão atual.",
        example: "echo $XDG_CURRENT_DESKTOP",
        output: "GNOME",
      },
      {
        command: "echo $XDG_SESSION_TYPE",
        description: "Mostra se a sessão atual usa X11 ou Wayland.",
        example: "echo $XDG_SESSION_TYPE",
        output: "wayland",
      },
      {
        command: "loginctl show-session",
        description: "Mostra detalhes técnicos da sessão atual: usuário, tipo, display, seat.",
        example: "loginctl show-session $(loginctl | awk 'NR==2 {print $1}')",
      },
      {
        command: "tasksel --list-tasks",
        description: "Lista todas as 'tarefas' disponíveis com indicação de quais estão instaladas.",
        example: "tasksel --list-tasks | head -20",
        output: "u desktop\tDebian desktop environment\nu gnome-desktop\t... GNOME\nu xfce-desktop\t... Xfce\ni standard\tStandard system utilities",
      },
      {
        command: "sudo apt install task-DESKTOP-desktop",
        description: "Instala um ambiente gráfico completo via metapacote, incluindo apps padrão.",
        example: "sudo apt install task-kde-desktop",
      },
      {
        command: "sudo apt remove --purge task-DESKTOP-desktop",
        description: "Remove um ambiente gráfico completo, incluindo arquivos de configuração globais.",
        example: "sudo apt remove --purge task-gnome-desktop && sudo apt autoremove --purge",
      },
      {
        command: "sudo systemctl set-default",
        description: "Define o target padrão do systemd que o sistema vai assumir no boot.",
        example: "sudo systemctl set-default graphical.target",
        flags: [
          { flag: "graphical.target", description: "Boot completo com display manager" },
          { flag: "multi-user.target", description: "Boot só em modo console (servidor)" },
          { flag: "rescue.target", description: "Modo monousuário para recuperação" },
        ],
      },
      {
        command: "sudo systemctl restart display-manager",
        description: "Reinicia a tela de login. Mata sua sessão atual sem reiniciar todo o sistema.",
        example: "sudo systemctl restart display-manager",
      },
      {
        command: "sudo dpkg-reconfigure DM",
        description: "Reabre a escolha de qual display manager usar quando há mais de um instalado.",
        example: "sudo dpkg-reconfigure gdm3",
      },
      {
        command: "wmctrl -m",
        description: "Mostra qual gerenciador de janelas está ativo (Mutter=GNOME, KWin=KDE, Xfwm=XFCE, Marco=MATE).",
        example: "wmctrl -m",
        output: "Name: Mutter\nClass: N/A\nPID: N/A\nWindow manager's \"showing the desktop\" mode: OFF",
      },
      {
        command: "gnome-tweaks",
        description: "Painel avançado de ajustes do GNOME. Não vem por padrão — instale com sudo apt install gnome-tweaks.",
        example: "gnome-tweaks",
      },
      {
        command: "systemsettings",
        description: "Centro de controle completo do KDE Plasma. Acesse tema, atalhos, comportamento de janelas, energia.",
        example: "systemsettings",
      },
      {
        command: "xfce4-settings-manager",
        description: "Painel de configurações do XFCE.",
        example: "xfce4-settings-manager",
      },
      {
        command: "free -h",
        description: "Mostra uso de memória RAM em formato legível. Bom para comparar consumo de DEs em ocioso.",
        example: "free -h",
        output: "               total        used        free      shared  buff/cache   available\nMem:           7.6Gi       1.4Gi       4.2Gi       128Mi       2.0Gi       6.0Gi\nSwap:          4.0Gi          0B       4.0Gi",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Wayland vs X11 — qual escolher?",
        content:
          "Para uso normal: o que vier por padrão (geralmente Wayland em GNOME e KDE recentes). Se algum app antigo (TeamViewer, AnyDesk, alguns games) ficar com problema, faça logout e na tela de login escolha 'GNOME on Xorg' ou 'Plasma (X11)' temporariamente. A tendência geral é todos migrarem para Wayland.",
      },
      {
        type: "warning",
        title: "Não desinstale o ambiente atual antes de testar o novo",
        content:
          "Se instalou KDE só para testar, NÃO remova GNOME imediatamente. Use o KDE por uns dias, confirme que tudo (Wi-Fi, áudio, suspend, atalhos) funciona. Só depois remova o que não vai mais usar. Se algo quebrar no novo, você ainda consegue voltar.",
      },
      {
        type: "success",
        title: "Em hardware modesto, prefira XFCE ou LXQt",
        content:
          "Se sua RAM é 4 GB ou menos, pular GNOME/KDE faz diferença visível: o sistema responde mais rápido, o navegador tem mais memória disponível e o swap não trava. XFCE é o sweet spot — ainda parece moderno e consome a metade do GNOME.",
      },
      {
        type: "danger",
        title: "Cuidado ao remover task-gnome-desktop",
        content:
          "O metapacote task-gnome-desktop puxa MUITAS dependências. Removê-lo com 'apt remove' sozinho não tira o resto — é preciso 'sudo apt autoremove --purge' depois. Em servidor onde alguém instalou GNOME por engano, esse pareamento limpa tudo.",
      },
      {
        type: "info",
        title: "Você pode usar mais de um DE simultaneamente",
        content:
          "Instalar KDE não desinstala GNOME. Os dois ficam disponíveis no display manager. Use o que combinar com a tarefa: GNOME para foco, KDE para customização visual, XFCE quando quiser leveza. Custo: alguns gigas de disco.",
      },
    ],
    practiceLabs: [
      {
        title: "Trocar de GNOME para KDE Plasma sem reinstalar",
        goal: "Ter dois ambientes instalados convivendo, conseguindo alternar entre eles na tela de login.",
        steps: [
          "Em VM, tire um snapshot ANTES da operação.",
          "Atualize o sistema: sudo apt update && sudo apt full-upgrade -y.",
          "Instale o KDE: sudo apt install -y task-kde-desktop (1-3 GB de download).",
          "Quando perguntar sobre display manager (gdm3 vs sddm), escolha sddm (preferido pelo KDE).",
          "Reinicie o display manager: sudo systemctl restart display-manager.",
          "Na tela de login do SDDM, procure o menu de seleção de sessão (geralmente canto inferior).",
          "Escolha 'Plasma (Wayland)' ou 'Plasma (X11)' e faça login.",
          "Para voltar ao GNOME, faça logout e escolha 'GNOME' no menu.",
        ],
        command: `sudo apt update && sudo apt full-upgrade -y
sudo apt install -y task-kde-desktop
sudo systemctl restart display-manager
echo $XDG_CURRENT_DESKTOP

# Para voltar atras (remover KDE):
# sudo apt remove --purge task-kde-desktop
# sudo apt autoremove --purge`,
        expected: "Após login no KDE, 'echo $XDG_CURRENT_DESKTOP' retorna 'KDE'.",
        verify: "Faça logout, escolha GNOME no menu de sessão e logue novamente — 'echo $XDG_CURRENT_DESKTOP' deve voltar a mostrar 'GNOME'.",
      },
      {
        title: "Converter um servidor para modo console puro",
        goal: "Remover o ambiente gráfico de uma instalação que virou servidor, deixando apenas TTY no boot.",
        steps: [
          "Confirme que você consegue acessar o servidor por SSH antes de mexer (essencial!).",
          "Liste o que está instalado: tasksel --list-tasks | grep '^i'.",
          "Remova o metapacote do desktop: sudo apt remove --purge task-gnome-desktop (ajuste para o seu DE).",
          "Limpe dependências orfãs: sudo apt autoremove --purge.",
          "Mude o target padrão do systemd: sudo systemctl set-default multi-user.target.",
          "Reinicie: sudo reboot.",
          "Após reiniciar, o sistema sobe direto no console TTY, sem display manager.",
        ],
        command: `tasksel --list-tasks | grep '^i'
sudo apt remove --purge task-gnome-desktop
sudo apt autoremove --purge
sudo systemctl set-default multi-user.target
sudo reboot`,
        expected: "Após o boot, você vê 'Debian GNU/Linux 12 hostname tty1' e o login em texto.",
        verify: "Rode 'systemctl get-default' — deve retornar 'multi-user.target'. RAM em ocioso (free -h) deve cair de 1+ GB para algumas centenas de MB.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual ambiente gráfico você usaria em uma máquina com 4 GB de RAM e por quê?",
        hint: "Pense em consumo ocioso.",
        answer:
          "XFCE ou LXQt. Ambos consomem entre 200 e 700 MB ociosos, deixando boa parte da RAM livre para o navegador (que sozinho consome 1-2 GB com várias abas) e outros apps. GNOME ou KDE com 4 GB ficam apertados rápido.",
      },
      {
        id: 2,
        question: "Como descobrir qual ambiente gráfico está rodando agora?",
        hint: "Variável de ambiente.",
        answer:
          "echo $XDG_CURRENT_DESKTOP — retorna GNOME, KDE, XFCE, MATE, X-Cinnamon, LXDE, conforme o caso. Útil em scripts que precisam adaptar comportamento ao DE.",
      },
      {
        id: 3,
        question: "Qual a diferença prática entre X11 e Wayland?",
        hint: "Pense em segurança e suporte a apps modernos.",
        answer:
          "X11 é o display server tradicional (30+ anos), permite captura entre apps e tem suporte a praticamente tudo, mas com segurança fraca. Wayland é o moderno, isola melhor os apps entre si, oferece HiDPI por monitor e menor latência, mas alguns apps antigos (TeamViewer, certos games) ainda têm bugs nele. GNOME e KDE atuais usam Wayland por padrão no Debian 12.",
      },
      {
        id: 4,
        question: "Como instalar KDE Plasma em uma instalação que veio com GNOME, mantendo os dois?",
        hint: "Existe um metapacote.",
        answer:
          "sudo apt install task-kde-desktop. O GNOME continua instalado e ambos aparecem na tela de login. Para escolher qual usar em cada sessão, use o menu de seleção do display manager (engrenagem no canto da tela de login).",
      },
      {
        id: 5,
        question: "O que é um display manager e quais os mais comuns?",
        hint: "É a tela que aparece antes do desktop.",
        answer:
          "Display manager é o programa que mostra a tela de login antes do desktop carregar. Os principais: GDM3 (preferido pelo GNOME), SDDM (preferido pelo KDE), LightDM (XFCE/MATE/Cinnamon), LXDM (LXDE). Qualquer um pode logar em qualquer DE — a escolha é por afinidade visual e de recursos.",
      },
      {
        id: 6,
        question: "Como remover completamente o ambiente gráfico de um servidor?",
        hint: "Três passos: remover pacotes, autoremove e mudar o target.",
        answer:
          "sudo apt remove --purge task-*-desktop, depois sudo apt autoremove --purge para limpar dependências, e sudo systemctl set-default multi-user.target para o boot ir direto ao console. Reinicie e o sistema sobe sem display manager.",
      },
      {
        id: 7,
        question: "Você logou no KDE e vários apps gráficos estão estranhos. Como verificar se está em Wayland ou X11?",
        hint: "Outra variável de ambiente.",
        answer:
          "echo $XDG_SESSION_TYPE retorna 'wayland' ou 'x11'. Se estiver em Wayland e o app antigo quebra, faça logout e na tela de login do SDDM escolha 'Plasma (X11)' para a próxima sessão.",
      },
      {
        id: 8,
        question: "Por que é arriscado desinstalar o GNOME imediatamente após instalar o KDE?",
        hint: "Pense em rollback.",
        answer:
          "Se algo no KDE não funcionar bem (Wi-Fi, áudio, atalho específico), você ainda consegue voltar para o GNOME se ele estiver instalado. Removendo antes de validar, qualquer problema te deixa em duas escolhas ruins: aguentar o KDE quebrado ou reinstalar o GNOME (download de novo). A regra é: testa novo, valida por dias, depois remove o antigo se quiser.",
      },
    ],
    references: [
      { title: "Debian Wiki — DesktopEnvironment", url: "https://wiki.debian.org/DesktopEnvironment" },
      { title: "Debian Wiki — Wayland", url: "https://wiki.debian.org/Wayland" },
      { title: "Debian Wiki — X.Org", url: "https://wiki.debian.org/Xorg" },
      { title: "Comparativo visual entre DEs (DistroChooser)", url: "https://distrochooser.de/" },
      { title: "ArchWiki — Display manager (referência cross-distro)", url: "https://wiki.archlinux.org/title/Display_manager" },
    ],
  },
];
