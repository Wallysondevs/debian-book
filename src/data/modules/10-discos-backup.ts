import { Module } from "@/types/module";

export const discosBackup: Module[] = [
  {
    id: "discos-particoes",
    title: "Discos, Partições e Filesystems",
    icon: "💾",
    category: "Discos e Armazenamento",
    description: "lsblk, fdisk, mkfs, mount, /etc/fstab — gerencie discos, partições e montagens.",
    objectives: [
      "Listar discos e partições",
      "Criar partições novas",
      "Formatar com ext4/xfs/btrfs",
      "Montar manualmente e configurar /etc/fstab",
    ],
    content: [
      "Cada disco no Linux é representado por um arquivo em /dev:\n• /dev/sda, /dev/sdb — HDs/SSDs SATA, USB\n• /dev/nvme0n1, /dev/nvme1n1 — SSDs NVMe (mais rápidos)\n• /dev/mmcblk0 — cartões SD\n\nPartições do disco recebem número:\n• /dev/sda1, /dev/sda2, /dev/sda3 — partições do primeiro HD\n• /dev/nvme0n1p1, /dev/nvme0n1p2 — partições NVMe (note o 'p')",
      "Para listar discos e partições:\n\nlsblk                     visão hierárquica (use sempre)\nlsblk -f                  + filesystem e UUID\nlsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT,LABEL\n\nsudo fdisk -l             tudo, com detalhes (DOS partition tables)\nsudo parted -l            alternativa moderna (suporta GPT melhor)\n\ndf -h                     uso de espaço por filesystem MONTADO",
      "Esquemas de partição — duas tecnologias:\n• MBR (Master Boot Record) — antigo. Limite: 4 partições primárias OU 3 primárias + 1 estendida (com várias lógicas). Discos até 2TB.\n• GPT (GUID Partition Table) — moderno. Limite: 128 partições. Discos > 2TB. Melhor metadata. PADRÃO em sistemas UEFI.\n\nVer qual: 'sudo parted /dev/sda print' (procure 'Partition Table: gpt' ou 'msdos').",
      "Criar partição (use parted, mais moderno e seguro que fdisk):\n\nsudo parted /dev/sdb                    interativo\n(parted) print                          # ver atual\n(parted) mklabel gpt                    # se vazio, cria GPT\n(parted) mkpart primary ext4 0% 100%    # cria partição usando todo o disco\n(parted) print\n(parted) quit\n\nDepois 'sudo partprobe' ou 'sudo udevadm settle' para o kernel reconhecer.",
      "Formatar (criar filesystem) — escolha o tipo certo:\n• ext4 — padrão Linux, sólido, suporta journaling. Use sempre que em dúvida.\n• xfs — bom para arquivos grandes (mídia, banco). Não pode encolher.\n• btrfs — moderno, snapshots integrados, mas algumas features ainda em beta. Padrão do openSUSE/Fedora Workstation.\n• vfat (FAT32) — para pendrive compartilhado com Windows. Sem permissões Unix.\n• exfat — pendrive grande compartilhado com Windows/macOS.\n\nComandos de formatação:\nsudo mkfs.ext4 -L meu-disco /dev/sdb1\nsudo mkfs.xfs -L dados /dev/sdb1\nsudo mkfs.btrfs -L dados /dev/sdb1\nsudo mkfs.vfat -F 32 -n PENDRIVE /dev/sdb1\nsudo mkfs.exfat -n PENDRIVE /dev/sdb1\n\nO -L (label) ajuda a identificar — aparece em lsblk -f.",
      "Montar e desmontar:\n\n# Montar manualmente\nsudo mkdir -p /mnt/dados\nsudo mount /dev/sdb1 /mnt/dados\n\n# Desmontar\nsudo umount /mnt/dados\n\n# Forçar desmontar (se ocupado)\nsudo umount -l /mnt/dados        # lazy umount\nsudo fuser -m /mnt/dados         # ver quem usa\n\n# Ver montagens atuais\nmount | grep '^/dev'\nfindmnt                          # alternativa bonita",
      "/etc/fstab — montagens AUTOMÁTICAS no boot. Formato (campos separados por espaço/tab):\n\n# UUID                                       MONTAGEM   FS    OPÇÕES               DUMP PASS\nUUID=abc-123-def                            /mnt/dados ext4  defaults,nofail      0    2\n\nCampos:\n• 1: identificador (use UUID em vez de /dev/sdb1 — UUID não muda se reordenar discos)\n• 2: ponto de montagem\n• 3: filesystem\n• 4: opções (defaults, ro, rw, noexec, nofail, users)\n• 5: dump (0 = não fazer backup com dump, deprecated)\n• 6: pass (ordem do fsck no boot — 1 para /, 2 para outros, 0 = não checar)\n\nDescobrir UUID: 'lsblk -f' ou 'blkid'.",
      "Opções importantes do fstab:\n• defaults — equivalente a rw,suid,dev,exec,auto,nouser,async\n• nofail — se o disco não estiver presente, não falha o boot (CRÍTICO para discos USB removíveis)\n• ro — read only\n• noexec — não permite executar binários (segurança em /tmp e particões de dados)\n• users — qualquer usuário pode montar/desmontar\n• X-mount.mkdir — cria o ponto de montagem se não existir\n\nAo editar fstab, TESTE antes de reiniciar:\nsudo mount -a                    # tenta montar tudo do fstab\n# Se der erro, conserta SEM reiniciar. Senão, sistema pode não bootar.",
      "Recuperar boot quebrado por fstab — se você editou fstab e o sistema não dá boot:\n• Sistema entra em modo de emergência (pede senha root)\n• Monte / como rw: 'mount -o remount,rw /'\n• Edite fstab: 'nano /etc/fstab' (corrija ou adicione 'nofail')\n• Reinicie: 'reboot'\n\nLição: SEMPRE teste com 'sudo mount -a' antes de reiniciar.",
    ],
    commands: [
      {
        command: "lsblk -f",
        description: "Lista discos com filesystem e UUID.",
        example: "lsblk -f",
        output: "NAME    FSTYPE LABEL    UUID                                 MOUNTPOINTS\nsda                                                                  \n├─sda1  vfat            5AB7-ECDD                            /boot/efi\n├─sda2  ext4   sistema  abc-123-def                          /\n└─sda3  swap            xyz-456-uvw                          [SWAP]\nsdb                                                                  \n└─sdb1  ext4   dados    789-abc-def                          ",
      },
      {
        command: "sudo fdisk -l",
        description: "Detalhes de todos os discos.",
        example: "sudo fdisk -l /dev/sdb",
      },
      {
        command: "sudo parted",
        description: "Ferramenta moderna para particionar (GPT).",
        example: "sudo parted /dev/sdb mkpart primary ext4 0% 100%",
      },
      {
        command: "sudo mkfs.ext4 / mkfs.xfs / mkfs.btrfs",
        description: "Formatar partição.",
        example: "sudo mkfs.ext4 -L dados /dev/sdb1",
      },
      {
        command: "sudo mount / umount",
        description: "Montar / desmontar.",
        example: "sudo mount /dev/sdb1 /mnt/dados",
      },
      {
        command: "blkid",
        description: "Mostra UUID e tipo de FS de cada partição.",
        example: "sudo blkid",
      },
      {
        command: "df -h",
        description: "Uso de espaço dos filesystems montados.",
        example: "df -hT",
      },
      {
        command: "du -sh",
        description: "Tamanho de pastas.",
        example: "sudo du -sh /home/* | sort -h",
      },
      {
        command: "sudo fsck",
        description: "Filesystem check — repara erros (com partição DESMONTADA).",
        example: "sudo fsck -y /dev/sdb1",
      },
      {
        command: "sudo mount -a",
        description: "Tenta montar tudo do fstab. ESSENCIAL após editar fstab antes de reiniciar.",
        example: "sudo mount -a",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Cuidado ao formatar",
        content:
          "mkfs.ext4 /dev/sdX APAGA TUDO da partição (e do disco se você apontar para o disco em vez da partição). Sempre confira com 'lsblk -f' qual é o /dev correto antes.",
      },
      {
        type: "warning",
        title: "Use UUID em fstab, não /dev/sdX",
        content:
          "Nomes /dev/sdb podem mudar quando você adiciona/remove discos. UUID é único e estável. Sempre 'UUID=xxx' em vez de '/dev/sdb1' no fstab.",
      },
      {
        type: "success",
        title: "Sempre teste fstab com 'mount -a'",
        content:
          "Após editar /etc/fstab, rode 'sudo mount -a' antes de reiniciar. Se houver erro, conserta. Sem isso, sistema pode entrar em modo de emergência no próximo boot.",
      },
    ],
    practiceLabs: [
      {
        title: "Formatar e montar permanentemente um HD externo",
        goal: "Procedimento completo para usar um disco novo: particionar, formatar, montar, configurar fstab.",
        steps: [
          "Identifique o disco (CUIDADO!).",
          "Crie partição GPT.",
          "Formate em ext4 com label.",
          "Monte temporariamente.",
          "Configure fstab para montagem automática.",
          "Teste com mount -a.",
        ],
        command: `# 1) Identificar disco (substitua sdb pelo SEU disco - ATENCAO!)
lsblk -f
# Confirme o tamanho do disco antes de continuar

# 2) Criar tabela GPT e particao
sudo parted /dev/sdb --script mklabel gpt
sudo parted /dev/sdb --script mkpart primary ext4 0% 100%
sudo partprobe /dev/sdb
lsblk

# 3) Formatar com label
sudo mkfs.ext4 -L meu-disco /dev/sdb1

# 4) Pegar UUID
UUID=\\$(sudo blkid -s UUID -o value /dev/sdb1)
echo "UUID: \\$UUID"

# 5) Criar ponto de montagem
sudo mkdir -p /mnt/meu-disco

# 6) Montar temporariamente
sudo mount /dev/sdb1 /mnt/meu-disco
df -h | grep meu-disco

# 7) Adicionar ao fstab
echo "UUID=\\$UUID  /mnt/meu-disco  ext4  defaults,nofail  0  2" | sudo tee -a /etc/fstab

# 8) TESTAR sem reiniciar (CRITICO)
sudo umount /mnt/meu-disco
sudo mount -a
df -h | grep meu-disco
# Se aparecer, esta tudo OK e sera montado automaticamente nos proximos boots`,
        verify:
          "Após mount -a, o disco deve aparecer em df -h. Reinicie e confira que continua montado em /mnt/meu-disco automaticamente.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Comando para ver discos e partições com UUID?",
        answer: "lsblk -f (ou 'sudo blkid' para ver só UUIDs).",
      },
      {
        id: 2,
        question: "Diferença entre MBR e GPT?",
        answer:
          "MBR (clássico) suporta até 4 partições primárias e discos até 2TB. GPT (moderno) suporta 128 partições e discos enormes. UEFI requer GPT. Use GPT em discos novos.",
      },
      {
        id: 3,
        question: "Por que usar UUID em vez de /dev/sdb1 no fstab?",
        answer:
          "Nomes /dev/sdX podem mudar se você adiciona/remove discos (sdb pode virar sdc). UUID é gerado na formatação e não muda.",
      },
      {
        id: 4,
        question: "O que faz a opção 'nofail' no fstab?",
        answer:
          "Se o disco não estiver presente no boot, não falha (sistema continua bootando). Essencial para discos removíveis (HD externo, USB).",
      },
      {
        id: 5,
        question: "Como testar /etc/fstab antes de reiniciar?",
        answer: "sudo mount -a — tenta montar tudo. Se der erro, conserta sem precisar reiniciar.",
      },
      {
        id: 6,
        question: "Filesystem padrão recomendado para Linux?",
        answer: "ext4 — sólido, com journaling, suportado em tudo. Use sempre que em dúvida.",
      },
    ],
    references: [
      { title: "Wiki Debian — fstab", url: "https://wiki.debian.org/fstab" },
      { title: "Manual mount", url: "https://manpages.debian.org/bookworm/mount/mount.8.en.html" },
    ],
  },

  {
    id: "backup",
    title: "Estratégia de Backup com rsync e tar",
    icon: "🛟",
    category: "Discos e Armazenamento",
    description: "rsync, tar, borgbackup — backups manuais e automáticos, rotação, restauração.",
    objectives: [
      "Fazer backup com tar (snapshots) e rsync (incremental)",
      "Conhecer regra 3-2-1",
      "Automatizar backups com timer + script",
      "Conhecer borgbackup para deduplicação",
    ],
    content: [
      "A regra de ouro: 3-2-1\n• 3 cópias dos seus dados\n• 2 mídias diferentes (HD + cloud, por exemplo)\n• 1 cópia OFF-SITE (nuvem ou HD em outro lugar físico — proteção contra incêndio/roubo)\n\nUsuários domésticos: 1 cópia local (HD externo) + 1 nuvem (Backblaze, Google Drive, S3) é o mínimo aceitável.",
      "Backup com tar (snapshot completo, simples):\n\nDATA=\\$(date +%Y%m%d_%H%M%S)\ntar -czf /mnt/backup/home_\\$DATA.tar.gz /home/wallyson\n\n# Incluindo exclusões\ntar -czf backup.tar.gz \\\\\n    --exclude='*.cache' \\\\\n    --exclude='*/node_modules' \\\\\n    --exclude='/home/*/Downloads' \\\\\n    /home\n\n# Restaurar\ncd /tmp\ntar -xzf backup.tar.gz       # extrai o conteúdo no diretório atual\n\nVantagens: arquivo único, fácil mover. Desvantagens: cada backup é COMPLETO (espaço), sem deduplicação.",
      "Backup com rsync (incremental, melhor para uso contínuo):\n\nrsync -avzP --delete /home/wallyson/ /mnt/backup/home/\n\nFlags:\n• -a archive — preserva tudo (permissões, dono, datas, links)\n• -v verbose\n• -z compressão (útil em transferência via SSH)\n• -P progresso + parcial (recupera arquivos parcialmente copiados)\n• --delete — remove no destino o que não está mais na origem (sincronização real)\n\nPRIMEIRA execução demora (copia tudo). DAS PRÓXIMAS, só copia o que mudou.\n\nIMPORTANTE: as barras finais ('/'). 'rsync /home/wallyson/ destino' copia o CONTEÚDO. 'rsync /home/wallyson destino' copia a PASTA.",
      "rsync via SSH (backup para servidor remoto):\n\nrsync -avzP --delete /home/wallyson/ servidor:/backups/wallyson/\n\nA mesma sintaxe. SSH é usado automaticamente se o destino tem ':'. Use chaves SSH para automatizar (sem senha).",
      "borgbackup — solução profissional. Deduplicação (cada bloco salvo uma vez), criptografia, compressão. Reduz dramaticamente o espaço em backups múltiplos.\n\nsudo apt install -y borgbackup\n\n# Inicializar repositório\nborg init --encryption=repokey /mnt/backup/borg-repo\n\n# Criar backup\nborg create --stats --progress \\\\\n    /mnt/backup/borg-repo::backup-\\$(date +%Y%m%d-%H%M%S) \\\\\n    /home/wallyson \\\\\n    --exclude='*.cache' \\\\\n    --exclude='*/node_modules'\n\n# Listar snapshots\nborg list /mnt/backup/borg-repo\n\n# Restaurar (extrai um snapshot)\ncd /tmp\nborg extract /mnt/backup/borg-repo::backup-20240425-120000\n\n# Limpar antigos (mantém: 7 diários, 4 semanais, 6 mensais)\nborg prune --keep-daily 7 --keep-weekly 4 --keep-monthly 6 /mnt/backup/borg-repo\n\nDeduplicação significa: 100 GB de fotos backup-adas semanalmente por 1 ano ocupam ~110 GB no disco (não 5.2 TB).",
      "Automatizar com systemd timer (vimos antes):\n\n/etc/systemd/system/backup-rsync.service:\n[Unit]\nDescription=Backup rsync da home\n\n[Service]\nType=oneshot\nUser=wallyson\nExecStart=/usr/bin/rsync -azv --delete /home/wallyson/ /mnt/backup/home/\n\n/etc/systemd/system/backup-rsync.timer:\n[Unit]\nDescription=Backup diario\n\n[Timer]\nOnCalendar=daily\nPersistent=true\n\n[Install]\nWantedBy=timers.target\n\nsudo systemctl enable --now backup-rsync.timer",
      "Cloud backup — opções gratuitas/baratas para a cópia OFF-SITE:\n• rclone — frontend universal para Google Drive, OneDrive, Dropbox, S3, Backblaze B2. Use 'rclone sync /home/wallyson/ remote:/backup/'.\n• restic — backup com deduplicação direto para nuvem (S3, B2, etc.).\n• Backblaze B2 — armazenamento barato (\\$5/TB/mês).\n• Borgbase — hosted Borg (especificamente para Borg).\n\nPasso a passo do rclone:\nsudo apt install -y rclone\nrclone config         # interativo, configura sua nuvem\nrclone sync /home/wallyson/ gdrive:/backup-debian/",
      "Testar restauração — tão importante quanto o backup. Backup que NUNCA foi restaurado pode estar corrompido. Mensalmente:\n• Pegue o backup mais recente\n• Restaure para uma pasta temporária (tar -xzf, borg extract, rsync de volta)\n• Confira que arquivos importantes abrem corretamente\n• Apague a restauração\n\nSem teste, é Schroedinger's backup — pode estar bom ou ruim, você só sabe quando precisar.",
    ],
    commands: [
      {
        command: "tar -czf",
        description: "Cria arquivo .tar.gz.",
        example: "tar -czf backup.tar.gz /home/wallyson",
        flags: [
          { flag: "-c", description: "Create" },
          { flag: "-z", description: "Comprimir com gzip (.tar.gz)" },
          { flag: "-j", description: "Comprimir com bzip2 (.tar.bz2, mais lento e menor)" },
          { flag: "-J", description: "Comprimir com xz (.tar.xz, mais lento e menor)" },
          { flag: "-f", description: "Arquivo de destino" },
          { flag: "--exclude", description: "Excluir padrão" },
        ],
      },
      {
        command: "tar -xzf",
        description: "Extrai .tar.gz.",
        example: "tar -xzf backup.tar.gz -C /tmp/restaurar/",
      },
      {
        command: "tar -tzf",
        description: "Lista conteúdo (sem extrair).",
        example: "tar -tzf backup.tar.gz | head",
      },
      {
        command: "rsync -avzP",
        description: "Sync incremental (local ou remoto).",
        example: "rsync -avzP --delete /home/wallyson/ servidor:/backup/",
      },
      {
        command: "borg create",
        description: "Cria snapshot incremental com deduplicação.",
        example: "borg create /mnt/backup::name-$(date +%F) /home/wallyson",
      },
      {
        command: "borg list / extract",
        description: "Lista snapshots / extrai um.",
        example: "borg extract /mnt/backup::name-2024-04-25",
      },
      {
        command: "borg prune",
        description: "Limpa snapshots antigos por política de retenção.",
        example: "borg prune --keep-daily 7 --keep-weekly 4 /mnt/backup",
      },
      {
        command: "rclone sync",
        description: "Sync para cloud (Google Drive, S3, B2, etc.).",
        example: "rclone sync /home/wallyson/ gdrive:/backup/",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "rsync --delete é perigoso",
        content:
          "Se você inverter origem/destino, --delete pode APAGAR sua origem. SEMPRE confira a ordem: 'rsync ORIGEM/ DESTINO/'. Em produção, teste com '--dry-run' antes.",
      },
      {
        type: "warning",
        title: "Backup que não foi testado é metade backup",
        content:
          "TESTE restauração mensalmente. 1) Pegue backup. 2) Restaure em /tmp. 3) Abra arquivos importantes. 4) Apague. Sem isso, você pode descobrir tarde demais que está corrompido.",
      },
      {
        type: "success",
        title: "borgbackup é magia",
        content:
          "Para backup CONTÍNUO (diário ou semanal por meses/anos), borg é insuperável: deduplicação reduz 5TB de backups históricos a ~150 GB. Compactação + criptografia inclusas.",
      },
    ],
    practiceLabs: [
      {
        title: "Setup de backup diário com borgbackup + systemd timer",
        goal: "Sistema de backup profissional automatizado.",
        steps: [
          "Instalar borgbackup.",
          "Inicializar repositório.",
          "Criar primeiro backup manual.",
          "Criar service e timer.",
          "Habilitar.",
          "Testar restauração.",
        ],
        command: `# 1) Instalar
sudo apt install -y borgbackup

# 2) Preparar destino
sudo mkdir -p /mnt/backup
sudo chown $USER:$USER /mnt/backup

# 3) Inicializar repo (anote a senha SE escolher --encryption=repokey)
borg init --encryption=none /mnt/backup/borg-repo

# 4) Primeiro backup manual
borg create --stats --progress \\
    /mnt/backup/borg-repo::primeiro-\\$(date +%Y%m%d-%H%M%S) \\
    \\$HOME \\
    --exclude='*.cache' \\
    --exclude='*/node_modules' \\
    --exclude='*/.npm' \\
    --exclude='*/Trash'

# 5) Listar
borg list /mnt/backup/borg-repo

# 6) Service para backup automatico
sudo tee /etc/systemd/system/borg-backup.service > /dev/null << EOF
[Unit]
Description=Backup borgbackup diario

[Service]
Type=oneshot
User=$USER
Environment=BORG_REPO=/mnt/backup/borg-repo
ExecStart=/usr/bin/borg create --stats \\
    \\\\\\$BORG_REPO::diario-\\\\\\$(date +%%Y%%m%%d-%%H%%M%%S) \\
    /home/$USER \\
    --exclude='*.cache' \\
    --exclude='*/node_modules' \\
    --exclude='*/Trash'
ExecStartPost=/usr/bin/borg prune --keep-daily 7 --keep-weekly 4 --keep-monthly 6 \\\\\\$BORG_REPO
EOF

# 7) Timer
sudo tee /etc/systemd/system/borg-backup.timer > /dev/null << 'EOF'
[Unit]
Description=Roda borg-backup diariamente

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
EOF

# 8) Habilitar
sudo systemctl daemon-reload
sudo systemctl enable --now borg-backup.timer

# 9) Listar timers
systemctl list-timers borg-backup.timer

# 10) Testar restauracao
mkdir -p /tmp/restore-test
cd /tmp/restore-test
borg extract /mnt/backup/borg-repo::primeiro-... .
ls`,
        verify:
          "Após primeiro backup, 'borg list' mostra o snapshot. systemctl list-timers mostra próxima execução. Restauração extrai os arquivos.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a regra 3-2-1 de backup?",
        answer:
          "3 cópias dos dados, em 2 mídias diferentes (HD + cloud), com pelo menos 1 cópia OFF-SITE (proteção contra fogo/roubo).",
      },
      {
        id: 2,
        question: "Diferença entre tar e rsync para backup?",
        answer:
          "tar cria SNAPSHOTS independentes (cada backup é completo, ocupa espaço). rsync é INCREMENTAL (só copia o que mudou, mas mantém uma cópia única). rsync para sincronização contínua, tar para snapshots independentes.",
      },
      {
        id: 3,
        question: "O que --delete do rsync faz?",
        answer:
          "Remove no destino o que não está mais na origem (sincronização real). CUIDADO: se inverter origem/destino, apaga sua origem.",
      },
      {
        id: 4,
        question: "Vantagem do borgbackup sobre tar simples?",
        answer:
          "Deduplicação (blocos repetidos só salvos uma vez) — economia massiva de espaço para backups históricos. Inclui compressão e criptografia.",
      },
      {
        id: 5,
        question: "Por que testar restauração regularmente?",
        answer:
          "Backup pode estar corrompido sem você saber. Sem teste, você descobre que não funciona NA HORA que precisa — tarde demais. Faça mensalmente.",
      },
      {
        id: 6,
        question: "Como excluir node_modules de backup com tar?",
        answer: "tar -czf backup.tar.gz /home --exclude='*/node_modules' --exclude='*.cache'",
      },
    ],
    references: [
      { title: "rsync manual", url: "https://manpages.debian.org/bookworm/rsync/rsync.1.en.html" },
      { title: "borgbackup docs", url: "https://borgbackup.readthedocs.io/" },
      { title: "rclone (cloud backup)", url: "https://rclone.org/" },
    ],
  },
];
