import { Module } from "@/types/module";

export const discosBackup: Module[] = [
  {
    id: "discos-particoes",
    title: "Discos, Partições e Filesystems",
    icon: "💾",
    category: "Discos e Armazenamento",
    description:
      "Entenda como o Debian enxerga discos, particiona, formata, monta e mantém o /etc/fstab — sem medo de quebrar o boot.",
    objectives: [
      "Identificar discos, partições e tipos de armazenamento (SATA, NVMe, USB, SD) em /dev",
      "Diferenciar tabelas de partição MBR e GPT e saber qual escolher",
      "Criar partições com parted e formatar com mkfs em ext4, xfs, btrfs, vfat e exfat",
      "Montar e desmontar volumes manualmente e configurar montagens automáticas via /etc/fstab",
      "Recuperar um sistema que não dá boot por causa de fstab quebrado",
      "Usar UUIDs e labels para evitar surpresas quando a ordem dos discos muda",
    ],
    content: [
      `Imagine que o seu computador é um prédio e cada disco é um andar inteiro vazio. Antes de morar lá, alguém precisa dividir o andar em apartamentos (as partições), pintar e mobiliar cada apartamento de um jeito (formatar com um filesystem) e finalmente colocar uma plaquinha na entrada para você saber em qual porta entrar (o ponto de montagem). É exatamente isso que acontece quando você conecta um HD novo no Debian: o disco bruto, sem nenhuma divisão, não serve para guardar arquivo. Você precisa particionar, formatar e montar — nessa ordem.`,
      `O Linux trata cada disco como um arquivo especial dentro do diretório /dev. Esse é um dos princípios mais bonitos do Unix: "tudo é arquivo", inclusive o próprio hardware. Um SSD SATA aparece como /dev/sda, /dev/sdb, /dev/sdc, na ordem em que o kernel os reconhece. Um SSD NVMe (aquele pauzinho M.2 mais rápido) aparece como /dev/nvme0n1, /dev/nvme1n1. Cartões SD viram /dev/mmcblk0. As partições recebem um número no fim: /dev/sda1, /dev/sda2 são as partições do primeiro SATA; em NVMe entra um "p" no meio, /dev/nvme0n1p1, /dev/nvme0n1p2 — esse "p" significa "partition" e existe para o nome não ficar ambíguo (afinal /dev/nvme0n11 poderia ser a partição 11 ou o disco 11). Saber ler esses nomes é o primeiro passo para não formatar o disco errado.`,
      `Antes da partição existe a tabela de partição, que é um pequeno cabeçalho no início do disco contando ao sistema "este disco está dividido em tantas partes, cada uma começa aqui e termina ali". Existem duas tecnologias: a MBR (Master Boot Record), criada nos anos 80, e a GPT (GUID Partition Table), moderna. A MBR aceita no máximo 4 partições primárias e discos de até 2 TB — para criar mais partições usa-se um truque chamado "partição estendida" com partições "lógicas" dentro, que confunde até quem é da área. A GPT aceita 128 partições, discos enormes, guarda metadados redundantes (se um cabeçalho corromper, o outro salva o disco) e é exigida em máquinas com firmware UEFI moderno. Em 2025, em qualquer disco novo, escolha GPT sem pensar duas vezes. Você descobre qual está usando rodando "sudo parted /dev/sda print" e olhando a linha "Partition Table:".`,
      `Particionar significa criar essas divisões. A ferramenta clássica é o fdisk, que só falava MBR durante décadas e ganhou suporte a GPT nas versões recentes. A ferramenta moderna é o parted (e seu primo gráfico, gparted). O parted aceita comandos diretos na linha ou um modo interativo no qual você digita "mklabel gpt" para criar a tabela, "mkpart primary ext4 0% 100%" para criar uma partição usando todo o disco, e "print" para conferir. Depois de mexer, peça ao kernel para reler a tabela com "sudo partprobe /dev/sdb" — sem isso, /dev/sdb1 só aparece após reiniciar. Repare que particionar não apaga dados imediatamente: você só está reescrevendo o cabeçalho. Mas formatar logo em seguida apaga, então o efeito prático é o mesmo: partição nova, tudo perdido.`,
      `Formatar é instalar um sistema de arquivos dentro da partição. O sistema de arquivos é a "linguagem" que organiza arquivos, pastas, datas, permissões e nomes. O ext4 é o padrão do Debian há mais de uma década: estável, suporta journaling (que é como um livro de bordo onde o filesystem anota o que vai fazer antes de fazer, para poder se recuperar se faltar luz), aceita arquivos enormes e funciona em qualquer Linux. O xfs é ótimo para arquivos muito grandes (vídeos, bancos de dados) e tem performance excelente em RAID, mas não pode encolher uma vez criado. O btrfs trouxe snapshots, compressão transparente e checksums embutidos — é o futuro, mas ainda tem cantinhos a polir; é o padrão do openSUSE e do Fedora Workstation. Para pendrive que vai conversar com Windows, use vfat (FAT32) para arquivos pequenos ou exfat para arquivos grandes — ambos não guardam permissões Unix, então não servem para sistema. A regra prática: na dúvida, ext4.`,
      `Montar é conectar uma partição a um diretório do sistema. Você cria uma pasta vazia (por exemplo /mnt/dados), executa "sudo mount /dev/sdb1 /mnt/dados" e a partir daí tudo que estiver dentro da partição aparece como se fosse conteúdo daquela pasta. Por baixo dos panos o kernel mantém uma tabela de montagens (visível em "findmnt" ou em /proc/mounts) e redireciona qualquer acesso a /mnt/dados para o filesystem da partição. Desmontar é o caminho inverso, com "sudo umount /mnt/dados". Se aparecer "target is busy", é porque algum processo está dentro daquela pasta — descubra quem com "sudo fuser -m /mnt/dados" ou "sudo lsof +D /mnt/dados", saia da pasta com "cd ~", feche o programa, e tente de novo. Como último recurso há o "umount -l" (lazy), que desmonta visualmente e libera o ponto de montagem assim que ninguém estiver usando, mas evite-o em uso normal.`,
      `Muita gente confunde duas coisas: o nome do dispositivo (/dev/sdb1) e o ponto de montagem (/mnt/dados). O dispositivo é onde os dados moram fisicamente; o ponto de montagem é a janela pela qual você os enxerga. Vários dispositivos podem ser montados em vários lugares ao mesmo tempo — a raiz /, o /home, o /boot/efi, o /var, o /tmp, todos podem ser partições separadas montadas em diferentes pontos. Outra confusão clássica: apontar o mkfs para /dev/sdb (o disco inteiro) em vez de /dev/sdb1 (a partição). Se você fizer isso, o filesystem é criado em cima da tabela de partição, apagando ela e tudo que houvesse dentro. Por isso a regra de ouro de quem mexe com discos é: ANTES de qualquer mkfs, rode "lsblk -f" e olhe duas vezes para o nome.`,
      `O /etc/fstab é a "agenda de montagens permanentes" do sistema. Cada linha descreve uma partição que deve ser montada automaticamente no boot. Os campos, separados por espaço ou tab, são: identificador da partição (preferencialmente UUID), ponto de montagem, tipo de filesystem, opções, dump (legado, sempre 0) e ordem do fsck no boot (1 para a raiz, 2 para outras partições, 0 para não checar). Por que UUID e não /dev/sdb1? Porque /dev/sdb pode virar /dev/sdc se você plugar outro disco antes, e seu sistema pode parar de bootar com uma mensagem assustadora. O UUID é gerado quando a partição é formatada, fica gravado dentro do filesystem e nunca muda — descubra com "lsblk -f" ou "blkid". Usar UUID é a diferença entre "sistema robusto" e "sistema que quebra na primeira vez que você troca um cabo".`,
      `As opções no quarto campo do fstab merecem atenção. "defaults" cobre a maioria dos casos (rw, suid, dev, exec, auto, nouser, async). "nofail" é a mais subestimada: ela diz ao systemd "se essa partição não estiver presente no boot, não pare o sistema". Sem nofail, um HD externo desplugado faz o boot travar em modo de emergência. "noexec" impede a execução de binários daquela partição (ótima para /tmp e partições de dados, evita certos ataques). "ro" monta read-only, útil para uma partição de logs que você quer congelar. "users" permite que qualquer usuário (não só root) monte e desmonte. E sempre, SEMPRE, antes de reiniciar após editar fstab, rode "sudo mount -a": esse comando tenta montar tudo que está no arquivo. Se algo deu errado, você corrige enquanto o sistema ainda está vivo.`,
      `Quando o pior acontece e o sistema não dá boot por causa de um fstab quebrado, calma — tem solução. O Debian costuma cair em modo de emergência (emergency mode) e pedir a senha de root. A partição raiz fica montada como read-only. Você remonta como rw com "mount -o remount,rw /", abre o fstab com "nano /etc/fstab", comenta com "#" a linha problemática (ou adiciona "nofail"), salva e digita "reboot". Esse é um dos exercícios mais formativos para quem está começando: conhecer o caminho de volta tira o medo. Ao terminar este capítulo você vai conseguir adicionar um HD externo permanente ao seu Debian, escolher o filesystem certo para cada propósito e dormir tranquilo sabendo que se algo der errado, você sabe consertar.`,
    ],
    commands: [
      {
        command: "lsblk",
        description: "Lista todos os dispositivos de bloco em formato de árvore. É o primeiro comando a rodar antes de mexer em qualquer disco.",
        example: "lsblk -f",
        output: `NAME    FSTYPE FSVER LABEL    UUID                                 MOUNTPOINTS
sda
├─sda1  vfat   FAT32 EFI      5AB7-ECDD                            /boot/efi
├─sda2  ext4   1.0   sistema  abc12345-6789-defa-bcde-1234567890ab /
└─sda3  swap   1              fedcba98-7654-3210-abcd-ef0123456789 [SWAP]
sdb
└─sdb1  ext4   1.0   dados    11112222-3333-4444-5555-666677778888`,
        flags: [
          { flag: "-f", description: "Mostra filesystem, label e UUID" },
          { flag: "-o NAME,SIZE,FSTYPE,MOUNTPOINT", description: "Escolhe colunas específicas" },
          { flag: "-p", description: "Mostra caminho completo (/dev/sda1 em vez de sda1)" },
          { flag: "-a", description: "Inclui dispositivos vazios" },
        ],
      },
      {
        command: "sudo fdisk -l",
        description: "Lista discos com detalhes técnicos (setores, tipo de tabela, ID das partições).",
        example: "sudo fdisk -l /dev/sdb",
        output: `Disk /dev/sdb: 465.76 GiB, 500107862016 bytes, 976773168 sectors
Disk model: Samsung SSD 860
Units: sectors of 1 * 512 = 512 bytes
Disklabel type: gpt
Disk identifier: A1B2C3D4-E5F6-7890-ABCD-1234567890AB

Device     Start       End   Sectors   Size Type
/dev/sdb1   2048 976771119 976769072 465.8G Linux filesystem`,
        flags: [
          { flag: "-l", description: "Lista (sem entrar no modo interativo)" },
        ],
      },
      {
        command: "sudo parted",
        description: "Particionador moderno com suporte completo a GPT. Use no lugar do fdisk para discos novos.",
        example: "sudo parted /dev/sdb mklabel gpt mkpart primary ext4 0% 100%",
        output: `Information: You may need to update /etc/fstab.`,
        flags: [
          { flag: "--script", description: "Modo não interativo (para usar em scripts)" },
          { flag: "-l", description: "Lista todos os discos" },
        ],
      },
      {
        command: "sudo partprobe",
        description: "Avisa o kernel para reler a tabela de partições. Necessário depois de criar/apagar partições sem reiniciar.",
        example: "sudo partprobe /dev/sdb",
      },
      {
        command: "sudo mkfs.ext4",
        description: "Cria filesystem ext4 em uma partição. APAGA TUDO que houver lá.",
        example: "sudo mkfs.ext4 -L dados /dev/sdb1",
        output: `Creating filesystem with 122096384 4k blocks and 30531584 inodes
Filesystem UUID: 11112222-3333-4444-5555-666677778888
Allocating group tables: done
Writing inode tables: done
Creating journal (262144 blocks): done
Writing superblocks and filesystem accounting information: done`,
        flags: [
          { flag: "-L LABEL", description: "Define um rótulo legível" },
          { flag: "-m 1", description: "Reserva apenas 1% para root (padrão é 5%, exagero em discos grandes)" },
          { flag: "-T largefile", description: "Otimiza para arquivos grandes (mídia)" },
          { flag: "-F", description: "Força mesmo se a partição parece em uso (cuidado!)" },
        ],
      },
      {
        command: "sudo mkfs.xfs / mkfs.btrfs / mkfs.vfat / mkfs.exfat",
        description: "Cria outros tipos de filesystem. Escolha conforme o caso de uso.",
        example: "sudo mkfs.xfs -L dados /dev/sdb1",
        flags: [
          { flag: "-L (ext4/xfs/btrfs)", description: "Label" },
          { flag: "-n (vfat/exfat)", description: "Label (em vfat/exfat usa -n)" },
          { flag: "-F 32 (vfat)", description: "Força FAT32 (em vez de detectar automaticamente)" },
        ],
      },
      {
        command: "sudo mount",
        description: "Monta uma partição em um diretório. Sem argumentos, lista tudo que está montado.",
        example: "sudo mount /dev/sdb1 /mnt/dados",
        flags: [
          { flag: "-t TIPO", description: "Força um tipo de filesystem (normalmente o kernel detecta)" },
          { flag: "-o ro", description: "Monta read-only" },
          { flag: "-o remount,rw", description: "Remonta uma partição já montada como leitura/escrita" },
          { flag: "-a", description: "Monta tudo que está no /etc/fstab" },
        ],
      },
      {
        command: "sudo umount",
        description: "Desmonta uma partição. Pode receber o dispositivo ou o ponto de montagem.",
        example: "sudo umount /mnt/dados",
        flags: [
          { flag: "-l", description: "Lazy umount: libera quando ninguém mais estiver usando" },
          { flag: "-f", description: "Força (use só em filesystems remotos travados)" },
        ],
      },
      {
        command: "blkid",
        description: "Mostra UUID, label e tipo de cada partição. Indispensável para preencher /etc/fstab.",
        example: "sudo blkid /dev/sdb1",
        output: `/dev/sdb1: LABEL="dados" UUID="11112222-3333-4444-5555-666677778888" TYPE="ext4" PARTUUID="abcd-1234"`,
        flags: [
          { flag: "-s UUID -o value", description: "Imprime só o valor do UUID, ótimo para scripts" },
        ],
      },
      {
        command: "findmnt",
        description: "Versão bonita do mount sem argumento: mostra hierarquia de montagens.",
        example: "findmnt /home",
        output: `TARGET SOURCE     FSTYPE OPTIONS
/home  /dev/sda4  ext4   rw,relatime`,
      },
      {
        command: "df",
        description: "Mostra o uso de espaço dos filesystems montados.",
        example: "df -hT",
        output: `Filesystem     Type      Size  Used Avail Use% Mounted on
/dev/sda2      ext4      234G   89G  133G  41% /
tmpfs          tmpfs     7.7G  1.5M  7.7G   1% /run
/dev/sda1      vfat      511M  6.1M  505M   2% /boot/efi
/dev/sdb1      ext4      458G   12G  423G   3% /mnt/dados`,
        flags: [
          { flag: "-h", description: "Tamanhos legíveis (G, M, K)" },
          { flag: "-T", description: "Mostra também o tipo do filesystem" },
          { flag: "-i", description: "Mostra inodes em vez de bytes" },
        ],
      },
      {
        command: "du",
        description: "Mede o tamanho de pastas e arquivos. Útil para descobrir quem está enchendo o disco.",
        example: "sudo du -sh /home/* | sort -h",
        output: `1.2G    /home/wallyson
4.5G    /home/maria`,
        flags: [
          { flag: "-s", description: "Resumo (sem subdiretórios)" },
          { flag: "-h", description: "Tamanhos legíveis" },
          { flag: "-x", description: "Não atravessa para outros filesystems" },
          { flag: "--max-depth=1", description: "Limita profundidade" },
        ],
      },
      {
        command: "sudo fsck",
        description: "Filesystem check: repara erros estruturais. SEMPRE com a partição DESMONTADA.",
        example: "sudo fsck -y /dev/sdb1",
        flags: [
          { flag: "-y", description: "Responde sim para todas as perguntas" },
          { flag: "-n", description: "Só reporta, sem alterar (modo seguro)" },
          { flag: "-f", description: "Força checagem mesmo se o filesystem parece limpo" },
        ],
      },
      {
        command: "sudo mount -a",
        description: "Lê o /etc/fstab e tenta montar tudo. ESSENCIAL após editar fstab — descobre erros antes do reboot.",
        example: "sudo mount -a",
      },
      {
        command: "sudo tune2fs",
        description: "Ajusta parâmetros de filesystems ext2/3/4 já criados (label, intervalo de fsck, reserva).",
        example: "sudo tune2fs -L novo-label /dev/sdb1",
        flags: [
          { flag: "-L LABEL", description: "Muda o label sem reformatar" },
          { flag: "-m 1", description: "Reduz a reserva para root para 1%" },
          { flag: "-c 0 -i 0", description: "Desativa fsck periódico (cuidado)" },
        ],
      },
      {
        command: "lsof +D",
        description: "Mostra arquivos abertos dentro de um diretório. Use para descobrir quem impede umount.",
        example: "sudo lsof +D /mnt/dados",
      },
      {
        command: "sudo wipefs",
        description: "Apaga assinaturas de filesystem antigas de um dispositivo. Útil para reciclar discos sem confusão.",
        example: "sudo wipefs -a /dev/sdb",
        flags: [
          { flag: "-a", description: "Apaga todas as assinaturas" },
          { flag: "-n", description: "Modo dry-run (mostra o que apagaria sem apagar)" },
        ],
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Confira o /dev DUAS vezes antes de formatar",
        content:
          "mkfs.ext4 /dev/sdX apaga tudo da partição (e do disco inteiro se você apontar para o disco em vez da partição). Sempre rode lsblk -f imediatamente antes e confira o tamanho. Em servidores, escreva o comando, pare, leia em voz alta, e só então execute.",
      },
      {
        type: "warning",
        title: "Use UUID no fstab, nunca /dev/sdX",
        content:
          "Os nomes /dev/sdb e /dev/sdc dependem da ordem de detecção do kernel e podem mudar quando você adiciona um disco novo ou troca de slot SATA. UUID é gerado na formatação e nunca muda. Pegue com 'lsblk -f' ou 'blkid -s UUID -o value /dev/sdb1'.",
      },
      {
        type: "success",
        title: "Sempre rode 'sudo mount -a' antes do reboot",
        content:
          "Depois de qualquer alteração no /etc/fstab, mount -a tenta executar todas as linhas. Se tiver erro de digitação, UUID errado ou opção inválida, você descobre na hora — com o sistema vivo. Sem esse hábito, o próximo reboot pode te jogar em modo de emergência.",
      },
      {
        type: "info",
        title: "GPT é o padrão moderno",
        content:
          "Em qualquer disco novo a partir de 2015, escolha GPT. Ele aceita 128 partições, suporta discos acima de 2 TB, guarda backup do cabeçalho no fim do disco e é exigido por máquinas UEFI. MBR só para compatibilidade com hardware antigo.",
      },
      {
        type: "warning",
        title: "Adicione 'nofail' para HDs externos no fstab",
        content:
          "Se um HD USB estiver desplugado quando você ligar o computador, sem 'nofail' o systemd considera erro grave e cai em modo de emergência. Com nofail, a montagem é simplesmente ignorada e o boot segue normal.",
      },
    ],
    practiceLabs: [
      {
        title: "Adicionar um HD externo de forma permanente no Debian",
        goal:
          "Pegar um disco vazio, criar partição GPT, formatar em ext4, montar manualmente, configurar /etc/fstab e validar tudo sem precisar reiniciar.",
        steps: [
          "Identifique com lsblk qual é o disco novo (atenção: NÃO o disco do sistema!).",
          "Confirme o tamanho que aparece — bate com o disco que você plugou?",
          "Crie a tabela de partição GPT com parted.",
          "Crie uma partição usando 100% do espaço.",
          "Peça ao kernel para reler a tabela com partprobe.",
          "Formate com mkfs.ext4 e atribua um label legível.",
          "Capture o UUID com blkid e crie o ponto de montagem.",
          "Adicione a linha no /etc/fstab usando UUID e a opção nofail.",
          "Desmonte e rode mount -a para validar antes de reiniciar.",
        ],
        command: `# 1) Identificar o disco — substitua sdb pelo nome correto
lsblk -f

# 2) Criar GPT e particao usando todo o disco
sudo parted /dev/sdb --script mklabel gpt
sudo parted /dev/sdb --script mkpart primary ext4 0% 100%
sudo partprobe /dev/sdb
lsblk /dev/sdb

# 3) Formatar com label
sudo mkfs.ext4 -L meu-disco /dev/sdb1

# 4) Capturar o UUID
UUID=$(sudo blkid -s UUID -o value /dev/sdb1)
echo "UUID gerado: $UUID"

# 5) Criar ponto de montagem e montar manualmente
sudo mkdir -p /mnt/meu-disco
sudo mount /dev/sdb1 /mnt/meu-disco
df -h | grep meu-disco

# 6) Adicionar ao /etc/fstab (com nofail)
echo "UUID=$UUID  /mnt/meu-disco  ext4  defaults,nofail  0  2" | sudo tee -a /etc/fstab

# 7) TESTAR sem reiniciar
sudo umount /mnt/meu-disco
sudo mount -a
df -h | grep meu-disco`,
        expected:
          "df -h mostra /dev/sdb1 montado em /mnt/meu-disco com o tamanho correto. Após reiniciar, o disco aparece automaticamente.",
        verify:
          "Rode 'findmnt /mnt/meu-disco' — deve listar a fonte /dev/sdb1 e o tipo ext4. Depois 'sudo reboot' e confira de novo com 'df -h'.",
      },
      {
        title: "Recuperar boot quebrado por fstab errado",
        goal: "Simular e consertar uma falha clássica: fstab apontando para um disco inexistente sem 'nofail'.",
        steps: [
          "Adicione propositalmente uma linha errada ao /etc/fstab (ex: UUID inexistente).",
          "Rode mount -a e veja o erro aparecer.",
          "Edite o fstab e adicione 'nofail' ou comente a linha.",
          "Rode mount -a novamente e confirme que não há mais erro.",
          "(Opcional) Repita simulando o cenário pós-boot: o sistema entraria em emergency mode.",
        ],
        command: `# 1) Simular fstab quebrado
echo "UUID=00000000-0000-0000-0000-000000000000 /mnt/fake ext4 defaults 0 2" | sudo tee -a /etc/fstab

# 2) Tentar montar — vai dar erro
sudo mount -a

# 3) Editar e adicionar nofail (ou remover a linha)
sudo nano /etc/fstab
# substitua 'defaults' por 'defaults,nofail'

# 4) Validar
sudo mount -a
echo "Sem erros = seguro para reiniciar"`,
        verify: "mount -a executa silenciosamente, sem mensagens de erro.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual comando lista discos e partições mostrando UUID e filesystem na mesma tela?",
        hint: "É a forma mais usada do comando que vemos sempre antes de mexer em qualquer disco.",
        answer:
          "lsblk -f. Ele mostra a árvore de discos junto com FSTYPE, LABEL, UUID e MOUNTPOINTS. Para ver só UUIDs, dá pra usar 'sudo blkid'.",
      },
      {
        id: 2,
        question: "Qual a diferença prática entre tabelas de partição MBR e GPT?",
        hint: "Pense em três coisas: número de partições, tamanho máximo do disco e firmware moderno.",
        answer:
          "MBR é o padrão antigo: máximo 4 partições primárias (ou 3 + 1 estendida com lógicas) e suporta discos de até 2 TB. GPT aceita 128 partições, discos acima de 2 TB, guarda backup do cabeçalho no fim do disco e é o padrão exigido por máquinas com firmware UEFI. Em discos novos, escolha GPT.",
      },
      {
        id: 3,
        question: "Por que é tão importante usar UUID em vez de /dev/sdb1 dentro do /etc/fstab?",
        hint: "Pense no que acontece se você plugar outro disco antes do que já existia.",
        answer:
          "Os nomes /dev/sdX dependem da ordem de detecção do kernel: ao adicionar ou remover um disco, o que era /dev/sdb pode virar /dev/sdc. Isso quebra o boot. UUID é gerado quando o filesystem é criado e fica gravado dentro dele — não muda nunca, mesmo se o cabo trocar de porta.",
      },
      {
        id: 4,
        question: "O que faz a opção 'nofail' no fstab e quando ela é essencial?",
        hint: "Pense em discos que nem sempre estão conectados.",
        answer:
          "'nofail' diz ao systemd para não considerar erro fatal se a partição não estiver presente no boot. É essencial para HDs USB, SSDs externos ou qualquer mídia removível: sem ela, um disco desplugado faz o sistema cair em emergency mode.",
      },
      {
        id: 5,
        question: "Como testar uma alteração em /etc/fstab antes de reiniciar?",
        hint: "Existe um comando dedicado a 'tentar montar tudo'.",
        answer:
          "sudo mount -a. Esse comando lê o fstab e tenta executar cada linha. Se houver erro de digitação, UUID errado ou opção inválida, você descobre na hora e corrige sem precisar reiniciar.",
      },
      {
        id: 6,
        question: "Qual filesystem usar para um pendrive que vai ser usado tanto no Windows quanto no Linux?",
        hint: "Para arquivos pequenos vale FAT32; para arquivos grandes existe outra opção.",
        answer:
          "Use vfat (FAT32) se os arquivos forem menores que 4 GB e capacidade até ~32 GB. Para pendrives maiores ou arquivos grandes, use exfat. Em ambos os casos não há permissões Unix — não use para guardar sistema, só para troca de dados.",
      },
      {
        id: 7,
        question: "Você tentou desmontar um pendrive e apareceu 'target is busy'. Como resolver sem arrancar o cabo?",
        hint: "Algum processo está com arquivos abertos lá dentro.",
        answer:
          "Descubra quem está usando com 'sudo lsof +D /mnt/dados' ou 'sudo fuser -m /mnt/dados'. Saia da pasta com 'cd ~', feche o programa que aparece (geralmente um terminal aberto na pasta ou um player de música). Como último recurso há 'sudo umount -l' (lazy), que desmonta visualmente e libera quando todos saírem.",
      },
      {
        id: 8,
        question: "Você editou /etc/fstab, reiniciou, e o sistema parou em modo de emergência pedindo a senha de root. Como recuperar?",
        hint: "A raiz vem montada read-only nesse modo.",
        answer:
          "Logue como root, rode 'mount -o remount,rw /' para tornar a raiz gravável, edite o fstab com 'nano /etc/fstab' (comente ou conserte a linha problemática, ou adicione 'nofail') e digite 'reboot'. A lição: rode 'sudo mount -a' antes de reiniciar e use 'nofail' em qualquer disco que não seja a raiz.",
      },
    ],
    references: [
      { title: "Wiki Debian — fstab", url: "https://wiki.debian.org/fstab" },
      { title: "Manual mount(8) (Debian)", url: "https://manpages.debian.org/trixie/mount/mount.8.en.html" },
      { title: "Manual parted(8)", url: "https://manpages.debian.org/trixie/parted/parted.8.en.html" },
      { title: "Debian Handbook — Storage", url: "https://debian-handbook.info/browse/stable/" },
      { title: "Arch Wiki — File systems (referência geral)", url: "https://wiki.archlinux.org/title/File_systems" },
    ],
  },

  {
    id: "backup",
    title: "Estratégia de Backup com rsync, tar e Borg",
    icon: "🛟",
    category: "Discos e Armazenamento",
    description:
      "Aprenda a regra 3-2-1, escolha entre tar, rsync e borgbackup, automatize com systemd e (o mais importante) teste suas restaurações.",
    objectives: [
      "Entender a regra 3-2-1 e por que ela protege contra desastres reais",
      "Criar snapshots completos com tar e sincronizações incrementais com rsync",
      "Usar borgbackup para deduplicação, compressão e criptografia",
      "Automatizar backups com systemd timers e scripts robustos",
      "Enviar a cópia off-site para nuvem com rclone ou restic",
      "Testar restaurações de forma sistemática e descobrir backups corrompidos antes do desastre",
    ],
    content: [
      `Backup é como cinto de segurança: ninguém pensa nele até precisar, e quem pensa quando precisa já era. A maioria das pessoas só descobre o valor de um backup depois de perder fotos da família, código do trabalho ou um banco de dados inteiro. A boa notícia é que no Debian as ferramentas para backup são gratuitas, profissionais e estão a um "apt install" de distância. A má notícia é que existem dezenas de jeitos de fazer errado e só alguns de fazer certo. Este capítulo é uma trilha curta, prática, dos hábitos que separam quem perde dados de quem não perde.`,
      `A regra de ouro do mundo inteiro chama-se 3-2-1: três cópias dos seus dados, em duas mídias diferentes, com uma cópia off-site (em outro lugar físico). Por que três? Porque uma cópia é zero — se ela falhar, você não tem nada. Duas é arriscar — se você guardar tudo no mesmo HD externo perto do PC, um surto elétrico fritando os dois aniquila tudo. Três cópias dão margem. Por que duas mídias? Porque o mesmo modelo de HD de um mesmo lote pode ter o mesmo defeito de fábrica e morrer junto. E por que off-site? Porque incêndio, roubo, enchente e seu cachorro existem. Um HD na sua casa e outro na casa da sua mãe (ou na nuvem) já cobrem isso. Para uso doméstico, o mínimo decente é: dados originais no PC, backup local em HD externo, backup remoto em nuvem barata.`,
      `Antes de escolher ferramenta, escolha estratégia. Backup completo é uma cópia de tudo, simples mas pesada. Backup incremental copia só o que mudou desde o último backup — economiza espaço e tempo, mas restaurar exige juntar vários incrementos. Backup com deduplicação (a estrela moderna) divide os arquivos em pequenos blocos, calcula um identificador para cada bloco e só guarda os blocos novos — o resultado é mágico: você pode manter um snapshot por dia durante meses ocupando pouco mais que o tamanho dos dados. Para usuários comuns, a combinação ideal é: snapshots completos esporádicos com tar (para arquivar marcos importantes), sincronização contínua com rsync (para a cópia local) e backup deduplicado com borg (para retenção longa).`,
      `O tar é o ancião confiável: existe desde a década de 70 (o nome significa Tape ARchive, dos tempos de fita magnética) e empacota uma árvore de diretórios em um único arquivo. Combine com gzip (-z), bzip2 (-j) ou xz (-J) para comprimir. A vantagem é a simplicidade — um arquivo .tar.gz cabe em qualquer pendrive, sobe para qualquer nuvem, abre em qualquer Linux desde sempre. A desvantagem é que cada backup é completo: 100 GB hoje, 100 GB amanhã, 100 GB depois de amanhã. Para snapshots ocasionais ("vou empacotar minha home antes de reinstalar o sistema") é perfeito. Para backups diários de longo prazo, o disco enche.`,
      `O rsync é a navalha suíça da sincronização. Ele compara origem e destino arquivo por arquivo (e dentro de cada arquivo, bloco por bloco) e copia só o que mudou. A primeira execução demora porque copia tudo; a partir da segunda, voa. As flags clássicas são -a (archive — preserva permissões, dono, datas, links), -v (verbose), -z (compressão na transferência, útil em SSH) e -P (mostra progresso e permite retomar transferências interrompidas). A flag --delete merece respeito: ela apaga no destino tudo que não existe mais na origem, transformando o destino em um espelho exato — útil, mas um disastre se você inverter origem e destino. Hábito profissional: sempre fazer um '--dry-run' antes para ver o que vai acontecer.`,
      `Há uma sutileza em rsync que pega muita gente: a barra final no caminho de origem. "rsync /home/wallyson/ destino" copia o conteúdo de wallyson para destino. "rsync /home/wallyson destino" copia a pasta wallyson inteira para dentro de destino. Confunda isso e você acaba com /backup/wallyson/wallyson/wallyson... aninhado. A regra: a barra final na origem significa "o conteúdo desta pasta". Sem barra, "esta pasta inteira". Outro detalhe: rsync por SSH usa a mesma sintaxe do scp. "rsync -avzP origem/ usuario@servidor:/destino/" envia para outro servidor. Combinado com chaves SSH (sem senha), vira a base de qualquer sistema de backup automatizado.`,
      `O borgbackup é a evolução. Ele faz tudo que o rsync faz e adiciona deduplicação por bloco, compressão escolhível, criptografia opcional e um modelo de "snapshots" parecido com o do Time Machine da Apple. Cada execução do "borg create" gera um snapshot novo no repositório, mas como blocos repetidos são armazenados uma só vez, o consumo de espaço cresce devagar mesmo com dezenas de backups. Em números reais: 80 GB de fotos backupados todo dia por um ano podem ocupar 90 GB no repositório. A criptografia é interessante para backups na nuvem: você guarda no Backblaze ou no Google Drive sem expor o conteúdo. A contrapartida é que se você perder a senha (ou a chave), perdeu tudo — anote em um lugar seguro fora do computador.`,
      `Off-site significa "outro lugar físico". Não adianta o backup estar no HD ao lado do PC se um curto-circuito torrar os dois. As opções modernas: rclone funciona como um rsync para nuvens (Google Drive, OneDrive, Dropbox, S3, Backblaze B2, MEGA — suporta dezenas), restic é como borg mas pensado direto para nuvem, borgbase é Borg gerenciado por terceiros. Para usuário doméstico, Backblaze B2 (~5 dólares por TB por mês) ou Storj/Wasabi são os mais econômicos. Para algo verdadeiramente "free", o Google Drive de 15 GB pode hospedar a sua pasta crítica criptografada. O importante é: nunca guarde a senha de backup só no computador que está sendo backupado.`,
      `Automatizar é o ponto onde backup deixa de ser projeto e vira hábito. O caminho moderno no Debian é o systemd timer (visto no capítulo de sistema): você cria um arquivo .service que descreve o comando e um .timer que descreve quando rodar (diariamente, semanalmente, no boot). O systemd cuida de não rodar duas vezes em paralelo, registra logs no journalctl e tem a flag "Persistent=true" que recupera execuções perdidas (se a máquina estava desligada na hora marcada, roda assim que ligar). Cron continua funcionando, mas o timer integra melhor com o resto do sistema. Para backups críticos, configure também notificação por e-mail ou Telegram em caso de falha — backup que falha em silêncio é como sentinela dormindo.`,
      `O capítulo mais importante é o último, e quase ninguém faz: testar a restauração. Backup que nunca foi restaurado é o que um pesquisador chamou de "Schroedinger's backup": ao mesmo tempo bom e ruim, você só descobre quando abre. Crie o hábito mensal de pegar o backup mais recente, restaurar em uma pasta temporária, abrir três ou quatro arquivos importantes (seu currículo, suas fotos, um arquivo de código), conferir se estão íntegros, e depois apagar a restauração. Cinco minutos por mês evitam o pior dia da sua vida digital. Ao terminar este capítulo você vai ter um sistema de backup pessoal funcional, automático e — mais importante — testado.`,
      "**3-2-1 de verdade:** 3 cópias, 2 mídias, 1 offsite. Snapshot no mesmo disco não é offsite. Ritual obrigatório: **restore testado** em /tmp/restore-lab — abrir arquivos, conferir hash, apagar. Backup sem restore é fé.",
      "Automatize com timer/cron só depois do restore manual funcionar uma vez. Anote RPO/RTO em uma linha no runbook.",
    ],
    commands: [
      {
        command: "mkdir -p /tmp/backup-lab /tmp/restore-lab && echo ok > /tmp/backup-lab/prova.txt && tar -czf /tmp/prova.tgz -C /tmp/backup-lab . && tar -xzf /tmp/prova.tgz -C /tmp/restore-lab && cat /tmp/restore-lab/prova.txt",
        description:
          "Mini lab backup+restore.",
        example: "mkdir -p /tmp/backup-lab /tmp/restore-lab && echo ok > /tmp/backup-lab/prova.txt && tar -czf /tmp/prova.tgz -C /tmp/backup-lab . && tar -xzf /tmp/prova.tgz -C /tmp/restore-lab && cat /tmp/restore-lab/prova.txt",
      },
      {
        command: "sha256sum /tmp/backup-lab/prova.txt /tmp/restore-lab/prova.txt 2>/dev/null; rm -rf /tmp/backup-lab /tmp/restore-lab /tmp/prova.tgz",
        description:
          "Hash e limpeza do lab.",
        example: "sha256sum /tmp/backup-lab/prova.txt /tmp/restore-lab/prova.txt 2>/dev/null; rm -rf /tmp/backup-lab /tmp/restore-lab /tmp/prova.tgz",
      },

      {
        command: "tar -czf",
        description: "Cria um arquivo .tar.gz com toda a árvore especificada.",
        example: "tar -czf backup-home-$(date +%Y%m%d).tar.gz /home/wallyson",
        output: `tar: Removing leading '/' from member names`,
        flags: [
          { flag: "-c", description: "Create (criar arquivo)" },
          { flag: "-z", description: "Comprimir com gzip (.tar.gz, mais rápido)" },
          { flag: "-j", description: "Comprimir com bzip2 (.tar.bz2, menor mas mais lento)" },
          { flag: "-J", description: "Comprimir com xz (.tar.xz, ainda menor e mais lento)" },
          { flag: "-f ARQ", description: "Define o arquivo de saída" },
          { flag: "--exclude=PADRAO", description: "Exclui caminhos que casem com o padrão glob" },
          { flag: "-v", description: "Mostra cada arquivo (verbose)" },
        ],
      },
      {
        command: "tar -xzf",
        description: "Extrai um arquivo .tar.gz no diretório atual (ou em outro com -C).",
        example: "tar -xzf backup.tar.gz -C /tmp/restaurado/",
        flags: [
          { flag: "-x", description: "Extrair" },
          { flag: "-C DIR", description: "Extrai dentro de DIR" },
          { flag: "--strip-components=N", description: "Remove N níveis de diretórios na extração" },
        ],
      },
      {
        command: "tar -tzf",
        description: "Lista o conteúdo de um arquivo sem extrair.",
        example: "tar -tzf backup.tar.gz | head",
      },
      {
        command: "rsync -avzP",
        description: "Sincronização incremental — copia só o que mudou, mantém permissões e mostra progresso.",
        example: "rsync -avzP /home/wallyson/ /mnt/backup/home/",
        flags: [
          { flag: "-a", description: "Archive: preserva permissões, dono, grupo, datas, symlinks" },
          { flag: "-v", description: "Verbose (mostra arquivos copiados)" },
          { flag: "-z", description: "Comprime durante a transferência (útil em rede)" },
          { flag: "-P", description: "Mostra progresso e mantém arquivos parciais (--progress + --partial)" },
          { flag: "--delete", description: "Apaga no destino o que sumiu da origem (espelhamento total)" },
          { flag: "--dry-run", description: "Simula sem alterar nada — sempre teste antes de --delete" },
          { flag: "--exclude=PADRAO", description: "Exclui caminhos por glob" },
        ],
      },
      {
        command: "rsync via SSH",
        description: "Mesma sintaxe, mas com host:caminho — usa SSH automaticamente.",
        example: "rsync -avzP /home/wallyson/ wallyson@servidor:/backup/wallyson/",
      },
      {
        command: "borg init",
        description: "Inicializa um repositório borg (uma única vez por destino).",
        example: "borg init --encryption=repokey /mnt/backup/borg-repo",
        flags: [
          { flag: "--encryption=none", description: "Sem criptografia (uso local em disco confiável)" },
          { flag: "--encryption=repokey", description: "Criptografia AES com chave guardada no repositório (proteja com passphrase)" },
          { flag: "--encryption=keyfile", description: "Chave em arquivo separado (mais seguro para nuvem)" },
        ],
      },
      {
        command: "borg create",
        description: "Cria um snapshot novo no repositório com deduplicação automática.",
        example:
          "borg create --stats --progress /mnt/backup/borg-repo::snap-$(date +%Y%m%d-%H%M) /home/wallyson --exclude='*.cache'",
        flags: [
          { flag: "--stats", description: "Mostra estatísticas no fim (espaço novo vs deduplicado)" },
          { flag: "--progress", description: "Mostra progresso em tempo real" },
          { flag: "--exclude=PADRAO", description: "Exclui padrões (use múltiplas vezes)" },
          { flag: "--compression zstd", description: "Define algoritmo de compressão (zstd é equilibrado)" },
        ],
      },
      {
        command: "borg list",
        description: "Lista snapshots de um repositório, ou arquivos dentro de um snapshot.",
        example: "borg list /mnt/backup/borg-repo",
        output: `snap-20240501-0300  Wed, 2024-05-01 03:00:01  [abc...]
snap-20240502-0300  Thu, 2024-05-02 03:00:02  [def...]
snap-20240503-0300  Fri, 2024-05-03 03:00:01  [ghi...]`,
      },
      {
        command: "borg extract",
        description: "Restaura um snapshot inteiro ou caminhos específicos no diretório atual.",
        example: "cd /tmp/restore && borg extract /mnt/backup/borg-repo::snap-20240501-0300 home/wallyson/Documentos",
      },
      {
        command: "borg prune",
        description: "Aplica política de retenção: mantém alguns diários, semanais e mensais; apaga o resto.",
        example: "borg prune --keep-daily 7 --keep-weekly 4 --keep-monthly 6 /mnt/backup/borg-repo",
        flags: [
          { flag: "--keep-daily N", description: "Mantém os N snapshots diários mais recentes" },
          { flag: "--keep-weekly N", description: "Mantém N semanais" },
          { flag: "--keep-monthly N", description: "Mantém N mensais" },
          { flag: "--dry-run", description: "Simula sem apagar (sempre teste primeiro)" },
        ],
      },
      {
        command: "borg check",
        description: "Verifica integridade do repositório e dos snapshots — rode periodicamente.",
        example: "borg check /mnt/backup/borg-repo",
      },
      {
        command: "rclone config",
        description: "Configurador interativo do rclone para conectar a serviços de nuvem.",
        example: "rclone config",
      },
      {
        command: "rclone sync",
        description: "Espelha um diretório local em uma nuvem configurada (apaga no destino o que sumiu da origem).",
        example: "rclone sync /home/wallyson/Importantes/ gdrive:/backup-debian/",
        flags: [
          { flag: "--dry-run", description: "Simula sem alterar (essencial antes do primeiro sync com --delete implícito)" },
          { flag: "--progress", description: "Mostra barra de progresso" },
          { flag: "--exclude PADRAO", description: "Excluir padrões" },
        ],
      },
      {
        command: "rclone copy",
        description: "Copia arquivos para a nuvem sem apagar nada no destino — mais seguro para começar.",
        example: "rclone copy /home/wallyson/Documentos/ b2:meu-bucket/documentos/",
      },
      {
        command: "restic",
        description: "Alternativa ao borg orientada a nuvem (S3, B2, REST). Sintaxe parecida.",
        example: "restic -r b2:meu-bucket:/backup backup /home/wallyson",
      },
    ],
    tips: [
      {
        type: "success",
        title: "Restore mensal",
        content:
          "Cinco minutos evitam surpresa.",
      },
      {
        type: "danger",
        title: "Só RAID local",
        content:
          "Não substitui offsite 3-2-1.",
      },

      {
        type: "danger",
        title: "rsync --delete pode apagar a sua origem",
        content:
          "Se você inverter origem e destino, --delete vai sincronizar o destino (vazio) sobre a origem, apagando seus dados originais. SEMPRE rode com --dry-run antes em comandos novos. E SEMPRE confira a barra final: 'rsync ORIGEM/ DESTINO/'.",
      },
      {
        type: "warning",
        title: "Backup que nunca foi testado é só metade do trabalho",
        content:
          "O 'Schroedinger's backup' está simultaneamente bom e corrompido até você abrir. Crie o hábito mensal de restaurar em uma pasta temporária, abrir três arquivos importantes e apagar. Cinco minutos por mês evitam tragédias.",
      },
      {
        type: "success",
        title: "borgbackup é magia para retenção longa",
        content:
          "Para backup contínuo (diário, semanal, por meses ou anos), borg é insuperável: deduplicação reduz dramaticamente o consumo de disco. Combine compressão zstd + repokey + prune semanal e você tem um sistema profissional gratuito.",
      },
      {
        type: "danger",
        title: "Se perder a passphrase do borg, perdeu o backup",
        content:
          "Backups borg com criptografia repokey ou keyfile são inacessíveis sem a senha. Anote em um gerenciador de senhas confiável (Bitwarden, KeePassXC) E imprima uma cópia que fique em outro lugar físico. Backup criptografado sem senha guardada é igual perder dados.",
      },
      {
        type: "info",
        title: "Snapshots de filesystem não substituem backup",
        content:
          "Snapshots de btrfs, lvm ou zfs protegem contra erro humano (apagou um arquivo, restaura), mas não contra falha física do disco. Continuam morando no MESMO disco. Backup de verdade vai para outro disco e, idealmente, outro lugar físico.",
      },
      {
        type: "warning",
        title: "Cuidado com backups guardados em filesystems sem checksum",
        content:
          "ext4 não detecta corrupção silenciosa. Em backups que precisam durar anos, considere btrfs ou zfs no destino, ou rode 'borg check' / 'restic check' periodicamente para detectar bit rot antes que ele estrague tudo.",
      },
    ],
    practiceLabs: [
      {
        title: "Snapshot completo da home com tar antes de uma reinstalação",
        goal: "Empacotar a /home em um único arquivo comprimido, excluindo caches e diretórios pesados que não precisam ser preservados.",
        steps: [
          "Identifique o tamanho atual da sua home com du.",
          "Monte o disco externo de destino.",
          "Rode tar com exclusões para evitar caches.",
          "Confira o tamanho do arquivo gerado.",
          "Liste o conteúdo para garantir que nada importante foi excluído por engano.",
        ],
        command: `# 1) Quanto pesa a home?
sudo du -sh /home/wallyson

# 2) Snapshot com exclusoes
DATA=$(date +%Y%m%d_%H%M%S)
tar -czf /mnt/backup/home_$DATA.tar.gz \\
    --exclude='*.cache' \\
    --exclude='*/node_modules' \\
    --exclude='*/.npm' \\
    --exclude='*/.cargo/registry' \\
    --exclude='*/Trash' \\
    /home/wallyson

# 3) Conferir tamanho
ls -lh /mnt/backup/home_$DATA.tar.gz

# 4) Listar (sem extrair) os primeiros arquivos
tar -tzf /mnt/backup/home_$DATA.tar.gz | head -30`,
        expected: "Arquivo .tar.gz criado com tamanho compatível com a home (excluindo caches).",
        verify: "Rode 'tar -tzf arquivo.tar.gz | grep Documentos' e confirme que seus arquivos importantes estão listados.",
      },
      {
        title: "Sistema de backup diário automatizado com borg + systemd timer",
        goal:
          "Configurar borgbackup com snapshot diário automático, retenção de 7 diários + 4 semanais + 6 mensais, gerenciado por systemd timer.",
        steps: [
          "Instalar borgbackup.",
          "Preparar diretório de destino (HD externo ou pasta dedicada).",
          "Inicializar repositório borg.",
          "Criar primeiro backup manual e medir tempo.",
          "Escrever um script de backup com prune.",
          "Criar service e timer do systemd.",
          "Habilitar o timer e listar a próxima execução.",
          "Testar uma restauração para validar.",
        ],
        command: `# 1) Instalar
sudo apt install -y borgbackup

# 2) Destino
sudo mkdir -p /mnt/backup
sudo chown $USER:$USER /mnt/backup

# 3) Inicializar repo (sem criptografia para uso local em HD seguro)
borg init --encryption=none /mnt/backup/borg-repo

# 4) Primeiro backup manual
borg create --stats --progress \\
    /mnt/backup/borg-repo::primeiro-$(date +%Y%m%d-%H%M%S) \\
    $HOME \\
    --exclude='*.cache' \\
    --exclude='*/node_modules' \\
    --exclude='*/.npm' \\
    --exclude='*/Trash'

# 5) Listar
borg list /mnt/backup/borg-repo

# 6) Script de backup reusavel
sudo tee /usr/local/bin/borg-backup-diario.sh > /dev/null <<'SCRIPT'
#!/bin/bash
set -euo pipefail
REPO=/mnt/backup/borg-repo
NAME="diario-$(date +%Y%m%d-%H%M%S)"

borg create --stats \\
    "$REPO::$NAME" \\
    "$HOME" \\
    --exclude='*.cache' \\
    --exclude='*/node_modules' \\
    --exclude='*/.npm' \\
    --exclude='*/Trash'

borg prune --keep-daily 7 --keep-weekly 4 --keep-monthly 6 "$REPO"
SCRIPT
sudo chmod +x /usr/local/bin/borg-backup-diario.sh

# 7) Service systemd
sudo tee /etc/systemd/system/borg-backup.service > /dev/null <<EOF
[Unit]
Description=Backup borg diario da home

[Service]
Type=oneshot
User=$USER
ExecStart=/usr/local/bin/borg-backup-diario.sh
EOF

# 8) Timer systemd
sudo tee /etc/systemd/system/borg-backup.timer > /dev/null <<'EOF'
[Unit]
Description=Roda backup borg diariamente as 03:00

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
EOF

# 9) Habilitar
sudo systemctl daemon-reload
sudo systemctl enable --now borg-backup.timer
systemctl list-timers borg-backup.timer

# 10) Testar restauracao em pasta temporaria
mkdir -p /tmp/restore-test && cd /tmp/restore-test
SNAP=$(borg list --short /mnt/backup/borg-repo | head -1)
borg extract /mnt/backup/borg-repo::$SNAP
ls`,
        expected:
          "borg list mostra ao menos um snapshot, systemctl list-timers mostra a próxima execução, restauração extrai os arquivos esperados.",
        verify:
          "Após a primeira execução automática, rode 'journalctl -u borg-backup.service' — deve aparecer 'Deduplicated size' nos stats.",
      },
      {
        title: "Sincronização contínua com rsync para HD externo",
        goal: "Manter um espelho atualizado da home em um HD externo usando rsync com proteção contra apagamento acidental.",
        steps: [
          "Monte o HD externo em /mnt/espelho.",
          "Rode um dry-run para ver o que aconteceria.",
          "Rode o rsync real sem --delete na primeira vez.",
          "Em sincronizações futuras, use --delete somente após validar com --dry-run.",
        ],
        command: `# 1) Dry-run (NAO altera nada)
rsync -avzP --dry-run /home/wallyson/ /mnt/espelho/wallyson/ | head -40

# 2) Primeiro espelho (sem --delete)
rsync -avzP /home/wallyson/ /mnt/espelho/wallyson/

# 3) Sincronizacoes seguintes (com --delete, depois de validar com dry-run)
rsync -avzP --delete --dry-run /home/wallyson/ /mnt/espelho/wallyson/
rsync -avzP --delete /home/wallyson/ /mnt/espelho/wallyson/`,
        verify: "Compare 'du -sh /home/wallyson' e 'du -sh /mnt/espelho/wallyson' — devem ser próximos.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Explique a regra 3-2-1 de backup e por que cada um dos três números importa.",
        hint: "Pense em quantas cópias, quantas mídias e onde a terceira mora.",
        answer:
          "São 3 cópias dos seus dados, em 2 mídias diferentes, com pelo menos 1 cópia off-site (em outro lugar físico). Três cópias dão margem para falha de uma. Duas mídias diferentes evitam que defeito do mesmo lote/modelo apague tudo. Off-site protege contra incêndio, roubo ou enchente.",
      },
      {
        id: 2,
        question: "Qual a diferença prática entre fazer backup com tar e com rsync?",
        hint: "Pense em snapshot completo vs sincronização incremental.",
        answer:
          "tar empacota tudo em um único arquivo a cada execução — cada backup é completo (ocupa o tamanho cheio dos dados). Rsync compara arquivo por arquivo e copia só o que mudou — mantém uma única cópia espelhada que é atualizada incrementalmente. Tar é melhor para snapshots ocasionais que precisam ser arquivados; rsync para sincronização contínua de uma cópia local.",
      },
      {
        id: 3,
        question: "O que faz a flag --delete do rsync e qual é o cuidado clássico ao usá-la?",
        hint: "Pensa no que acontece se você inverter origem e destino.",
        answer:
          "--delete remove no destino tudo que não existe mais na origem, transformando o destino em um espelho exato. O cuidado: se você acidentalmente inverter origem e destino (ex: 'rsync /backup-vazio/ /home/wallyson/' com --delete), você apaga sua origem real. Sempre rode com --dry-run antes em comandos novos.",
      },
      {
        id: 4,
        question: "Qual a vantagem do borgbackup sobre tar para backups recorrentes de longo prazo?",
        hint: "A palavra começa com 'dedup'.",
        answer:
          "Deduplicação por bloco. Borg divide arquivos em pequenos blocos, calcula um identificador para cada um e só guarda blocos novos. Isso significa que 80 GB backupados todo dia por um ano podem ocupar pouco mais de 90 GB — dezenas de snapshots pelo preço de um. Inclui também compressão e criptografia opcionais.",
      },
      {
        id: 5,
        question: "Por que testar a restauração de um backup é tão importante quanto o próprio backup?",
        hint: "Pense no 'Schroedinger's backup'.",
        answer:
          "Backup que nunca foi restaurado pode estar corrompido sem você saber — bit rot silencioso, erro de configuração, software com bug. Você descobre que está quebrado exatamente no dia em que precisa, tarde demais. Mensalmente: pegue o backup mais recente, restaure em /tmp, abra alguns arquivos importantes, confira integridade, apague. Cinco minutos por mês evitam tragédias.",
      },
      {
        id: 6,
        question: "Qual o comando tar para criar um arquivo .tar.gz da /home excluindo node_modules e caches?",
        hint: "Use múltiplos --exclude.",
        answer:
          "tar -czf backup.tar.gz --exclude='*/node_modules' --exclude='*.cache' --exclude='*/.npm' /home. Você pode repetir --exclude quantas vezes quiser.",
      },
      {
        id: 7,
        question: "Você quer manter 7 backups diários, 4 semanais e 6 mensais no borg, apagando o resto. Como?",
        hint: "Existe um subcomando dedicado a essa retenção.",
        answer:
          "borg prune --keep-daily 7 --keep-weekly 4 --keep-monthly 6 /caminho/do/repo. Sempre teste antes com --dry-run para conferir quais snapshots serão removidos.",
      },
      {
        id: 8,
        question: "Diferença prática entre 'rsync /home/wallyson/ destino/' e 'rsync /home/wallyson destino/'?",
        hint: "Olhe a barra final na origem.",
        answer:
          "A barra final muda tudo. Com barra ('/home/wallyson/'), o comando copia o CONTEÚDO da pasta para destino/. Sem barra ('/home/wallyson'), ele copia a PASTA inteira para dentro de destino/, criando destino/wallyson/. Trocar isso causa caminhos aninhados estranhos como /backup/wallyson/wallyson/.",
      },
    ],
    references: [
      { title: "Manual rsync(1) (Debian)", url: "https://manpages.debian.org/trixie/rsync/rsync.1.en.html" },
      { title: "Documentação oficial do borgbackup", url: "https://borgbackup.readthedocs.io/" },
      { title: "rclone — backup para nuvem", url: "https://rclone.org/" },
      { title: "restic — backup para nuvem com deduplicação", url: "https://restic.net/" },
      { title: "Wiki Debian — Backup", url: "https://wiki.debian.org/BackupAndRecovery" },
    ],
  },
  {
    id: "lvm-basico",
    title: "LVM do zero — PV, VG, LV e crescimento sem drama",
    icon: "📚",
    category: "Discos e Armazenamento",
    description:
      "Monte volume lógico no Debian: physical volume, volume group, logical volume, estender e snapshot simples — o jeito flexível de fatiar disco.",
    objectives: [
      "Nomear PV, VG e LV e o papel de cada um",
      "Criar um LV a partir de um disco ou partição de laboratório",
      "Formatar, montar e colocar no fstab com cuidado",
      "Estender um LV e o filesystem online quando suportado",
      "Criar e remover um snapshot LVM simples",
      "Saber quando LVM ajuda e quando é overkill",
    ],
    content: [
      "Partição fixa é gaveta de tamanho único: encheu, sofre. **LVM** (Logical Volume Manager) é a estante com prateleiras móveis: você junta discos/partições num **volume group** e tira **logical volumes** do tamanho que precisa, podendo crescer depois. Em servidor Debian isso é pão com manteiga — root em LVM no instalador é comum por exatamente esse motivo.",

      "Três camadas, de baixo para cima. **PV** (physical volume): o tijolo — disco ou partição marcada para LVM (`pvcreate`). **VG** (volume group): o saco de tijolos com nome (`vgcreate`). **LV** (logical volume): a fatia que vira filesystem (`lvcreate`). O sistema monta o path em `/dev/VG/LV` ou `/dev/mapper/VG-LV`, não o `/dev/sdb1` cru.",

      "Jargões que aparecem no `lvs`/`vgs`. **PE** (physical extent) é o bloco de alocação dentro do VG. **LE** é a contagem no LV. **thin pool** é avançado (não é o primeiro lab). **Snapshot** LVM congela um ponto no tempo do LV copy-on-write — ótimo para backup consistente curto, péssimo como backup eterno sem espaço livre no VG.",

      "Fluxo mental seguro: só pratique em disco **extra** ou arquivo-loop/VM — nunca no disco raiz da VPS compartilhada da equipe. Crie PV → VG → LV → `mkfs` → monte em `/mnt/lab` → teste escrita → (opcional) estenda → desmonte. Documente nomes de VG/LV; `vg-ubuntu` misturado com Debian é confusão gratuita.",

      "Estender: se há espaço livre no VG, `lvextend` no LV e depois crescer o filesystem (`resize2fs` no ext4, `xfs_growfs` no XFS). Encolher é outra guerra (backup primeiro, quase sempre offline). Snapshot: precisa de espaço livre; delete quando acabar o uso ou o COW engole o VG.",

      "Quando NÃO usar LVM: pen drive único jogado fora amanhã; firmware esquisito; você não vai monitorar espaço do VG. Quando SIM: servidor que vai ganhar disco depois, vários LV (dados, logs, VMs), snapshots pontuais antes de migração.",

      "Ao terminar você explica PV/VG/LV, lista com pvs/vgs/lvs, cria e remove um LV de lab, e estende com filesystem coerente — sem tocar no disco de boot da produção alheia.",

    ],
    commands: [
      {
        command: "sudo apt install -y lvm2",
        description:
          "Ferramentas LVM no Debian (pv/vg/lvcreate, lvs, etc.).",
        example: "sudo apt install -y lvm2",
      },
      {
        command: "sudo pvs; sudo vgs; sudo lvs",
        description:
          "Retrato rápido: physical volumes, volume groups e logical volumes existentes.",
        example: "sudo pvs && sudo vgs && sudo lvs",
        output: "  PV         VG     Fmt  Attr PSize  PFree\n  /dev/sdb1  vgdata lvm2 a--  <20.00g 5.00g",
      },
      {
        command: "sudo pvcreate /dev/sdX1",
        description:
          "Marca a partição/disco como PV. Troque sdX1 por dispositivo de LAB (nunca o disco raiz da VPS da equipe).",
        example: "# SO EM LAB: sudo pvcreate /dev/sdb1",
      },
      {
        command: "sudo vgcreate vgdata /dev/sdX1",
        description:
          "Cria o volume group vgdata usando o PV.",
        example: "sudo vgcreate vgdata /dev/sdb1",
      },
      {
        command: "sudo lvcreate -n lvwww -L 5G vgdata",
        description:
          "Cria LV de 5G chamado lvwww no VG. Use -l 100%FREE para consumir o livre.",
        example: "sudo lvcreate -n lvwww -L 5G vgdata",
        flags: [
          { flag: "-n", description: "nome do LV" },
          { flag: "-L", description: "tamanho absoluto" },
          { flag: "-l", description: "tamanho em extents ou %FREE" },
        ],
      },
      {
        command: "sudo mkfs.ext4 /dev/vgdata/lvwww",
        description:
          "Cria filesystem no LV. O path /dev/mapper/vgdata-lvwww é equivalente.",
        example: "sudo mkfs.ext4 /dev/vgdata/lvwww",
      },
      {
        command: "sudo mkdir -p /mnt/lvwww && sudo mount /dev/vgdata/lvwww /mnt/lvwww && df -h /mnt/lvwww",
        description:
          "Montagem de teste e verificação de tamanho.",
        example: "sudo mount /dev/vgdata/lvwww /mnt/lvwww && df -h /mnt/lvwww",
      },
      {
        command: "sudo lvextend -L +2G /dev/vgdata/lvwww && sudo resize2fs /dev/vgdata/lvwww",
        description:
          "Cresce o LV em 2G e depois o ext4. Ordem: LV primeiro, filesystem depois.",
        example: "sudo lvextend -L +2G /dev/vgdata/lvwww && sudo resize2fs /dev/vgdata/lvwww",
      },
      {
        command: "sudo lvcreate -s -n lvwww-snap -L 1G /dev/vgdata/lvwww",
        description:
          "Snapshot de 1G do LV (precisa de espaço). Remova com lvremove após o uso.",
        example: "sudo lvcreate -s -n lvwww-snap -L 1G /dev/vgdata/lvwww",
      },
      {
        command: "sudo lvremove -y /dev/vgdata/lvwww-snap",
        description:
          "Apaga snapshot. Confirme o nome duas vezes antes de remove em produção.",
        example: "sudo lvs",
      },
      {
        command: "sudo vgdisplay vgdata | egrep 'VG Size|Free'",
        description:
          "Espaço total e livre no VG — o que limita novos LV e snapshots.",
        example: "sudo vgdisplay vgdata | egrep 'VG Size|Free'",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Nunca no disco da VPS compartilhada",
        content:
          "PV/VG/LV em disco errado apaga dados da equipe. Só VM, USB de lab ou arquivo-loop dedicado.",
      },
      {
        type: "warning",
        title: "Snapshot come espaço COW",
        content:
          "Snapshot cheio corrompe o ponto de recuperação. Monitore e lvremove quando acabar.",
      },
      {
        type: "success",
        title: "Crescer é fácil; encolher é projeto",
        content:
          "Planeje LV com folga e cresça com dados; shrink só com backup e janela.",
      },
      {
        type: "info",
        title: "Nomes estáveis no fstab",
        content:
          "Use UUID do filesystem do LV no fstab, não só /dev/sdX.",
      },
    ],
    practiceLabs: [
      {
        title: "LV de laboratório (VM)",
        goal: "Criar VG/LV, montar, escrever arquivo, estender e ver df maior.",
        steps: [
          "Em VM com disco extra, instale lvm2",
          "pvcreate + vgcreate + lvcreate",
          "mkfs.ext4 + mount em /mnt/lab-lvm",
          "echo teste > /mnt/lab-lvm/ok.txt",
          "lvextend + resize2fs e confira df",
          "Desmonte; opcional lvremove ao final do lab",
        ],
        command: "sudo pvs; sudo vgs; sudo lvs; df -h | grep -E 'Filesystem|lab-lvm|vgdata' || true",
        verify:
          "lvs mostra o LV; df no mount point reflete o tamanho pós-extend; arquivo ok.txt sobrevive ao resize a quente do ext4.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que é PV, VG e LV?",
        answer:
          "PV=disco/partição no LVM; VG=pool nomeado de PVs; LV=volume lógico fatiado do VG onde fica o filesystem.",
      },
      {
        id: 2,
        question: "Qual a ordem para crescer um LV ext4?",
        answer:
          "Garantir espaço livre no VG; lvextend no LV; resize2fs no filesystem.",
      },
      {
        id: 3,
        question: "Para que serve snapshot LVM?",
        answer:
          "Ponto no tempo copy-on-write para backup/teste curto; exige espaço livre e não substitui backup off-box.",
      },
      {
        id: 4,
        question: "Como listar LVs?",
        answer:
          "sudo lvs (e lvdisplay para detalhe).",
      },
      {
        id: 5,
        question: "Path típico de um LV?",
        answer:
          "/dev/NomeVG/NomeLV ou /dev/mapper/NomeVG-NomeLV.",
      },
      {
        id: 6,
        question: "Risco de lvremove errado?",
        answer:
          "Perda imediata dos dados daquele LV se não houver snapshot/backup.",
      },
      {
        id: 7,
        question: "Por que não usar só /dev/sdb1 no fstab de um LV?",
        hint: "Pense em renomeação de disco.",
        answer:
          "Nomes de disco mudam; UUID do FS no LV é estável entre boots.",
      },
      {
        id: 8,
        question: "Quando LVM é overkill?",
        answer:
          "Mídia descartável, lab de uma hora sem necessidade de crescer, ou administrador que não vai monitorar o VG.",
      },
    ],
    references: [
      { title: "man lvm", url: "https://manpages.debian.org/lvm" },
      { title: "Wiki — LVM", url: "https://wiki.debian.org/LVM" },
      { title: "man lvextend", url: "https://manpages.debian.org/lvextend" },
      { title: "man pvcreate", url: "https://manpages.debian.org/pvcreate" },
    ],
  },
  {
    id: "btrfs-debian",
    title: "Btrfs no Debian — subvolumes e snapshots leves",
    icon: "🌲",
    category: "Discos e Armazenamento",
    description:
      "Use Btrfs no Debian com subvolumes, snapshot e espaço: o filesystem que versiona diretórios quando você respeita os limites.",
    objectives: [
      "Criar filesystem Btrfs e montar com opções conscientes",
      "Criar subvolumes para separar dados",
      "Tirar e listar snapshots",
      "Ver uso com filesystem show / fi df",
      "Entender send/receive só em alto nível",
      "Saber quando preferir ext4/XFS em vez de Btrfs",
    ],
    content: [
      "**Btrfs** é filesystem com superpoderes de volume: subvolumes (árvores quase independentes), snapshots baratos na criação, checksums de dados. No Debian entra como opção moderna para dados e, em alguns setups, root — mas não é obrigatório para ser 'pro'. É ferramenta: brilha em snapshots de `/var/www` ou homes; castiga se você ignora espaço e scrub.",

      "**Subvolume** não é partição: é diretório de primeira classe dentro do mesmo FS. Você monta o default ou um subvolume específico com `-o subvol=...`. **Snapshot** Btrfs é subvolume somente-leitura (ou gravável) apontando para o mesmo estado — ideal antes de `apt full-upgrade` arriscado em lab, desde que o disco tenha folga.",

      "Jargões. **scrub** relê e confere checksums. **balance** reorganiza chunks (manutenção). **send/receive** manda snapshot para outro disco/máquina (backup incremental sofisticado). **RAID Btrfs** existe, mas RAID5/6 no Btrfs tem histórico polêmico — em produção muita gente prefere mdadm+ext4/XFS ou ZFS dedicado para isso.",

      "No Debian: `btrfs-progs` traz as ferramentas. Crie FS com `mkfs.btrfs`, monte, `btrfs subvolume create`, snapshot com `btrfs subvolume snapshot`. Monitore com `btrfs filesystem df` e `btrfs fi show`. Não encha o disco a 99%: snapshots e COW precisam de ar.",

      "Quando NÃO usar: você quer o filesystem mais chato e previsível possível em banco monólito sem equipe para scrub; mídia USB de instalação; você ia usar RAID5 Btrfs porque leu um post de 2014. Quando SIM: muitos snapshots de diretórios de app, lab de rollback, um disco de dados com política clara de retenção de snaps.",

      "Ao terminar você formata (em lab), cria subvolume, tira snapshot, lista e remove snap, e explica a diferença entre snapshot e backup off-site.",

    ],
    commands: [
      {
        command: "sudo apt install -y btrfs-progs",
        description:
          "Userland Btrfs no Debian.",
        example: "sudo apt install -y btrfs-progs",
      },
      {
        command: "sudo mkfs.btrfs -L dados /dev/sdX1",
        description:
          "Cria Btrfs no dispositivo de LAB com label dados.",
        example: "# LAB: sudo mkfs.btrfs -L dados /dev/sdb1",
      },
      {
        command: "sudo mount /dev/sdX1 /mnt/btrfs && findmnt /mnt/btrfs",
        description:
          "Monta e confirma o filesystem.",
        example: "sudo mount /dev/sdb1 /mnt/btrfs && findmnt /mnt/btrfs",
      },
      {
        command: "sudo btrfs subvolume create /mnt/btrfs/@www",
        description:
          "Cria subvolume @www (convenção de nome com @ é só hábito, não mágica).",
        example: "sudo btrfs subvolume create /mnt/btrfs/@www",
      },
      {
        command: "sudo btrfs subvolume list /mnt/btrfs",
        description:
          "Lista subvolumes e IDs.",
        example: "sudo btrfs subvolume list /mnt/btrfs",
      },
      {
        command: "sudo btrfs subvolume snapshot -r /mnt/btrfs/@www /mnt/btrfs/@www-snap-$(date +%F)",
        description:
          "Snapshot somente-leitura (-r) com data no nome.",
        example: "sudo btrfs subvolume snapshot -r /mnt/btrfs/@www /mnt/btrfs/@www-snap-lab",
      },
      {
        command: "sudo btrfs filesystem df /mnt/btrfs",
        description:
          "Uso interno (data/metadata). Complementa o df clássico.",
        example: "sudo btrfs filesystem df /mnt/btrfs",
      },
      {
        command: "sudo btrfs filesystem show",
        description:
          "Visão dos filesystems Btrfs e dispositivos.",
        example: "sudo btrfs filesystem show",
      },
      {
        command: "sudo btrfs subvolume delete /mnt/btrfs/@www-snap-lab",
        description:
          "Remove snapshot/subvolume. Cuidado com o path.",
        example: "sudo btrfs subvolume list /mnt/btrfs",
      },
      {
        command: "man btrfs",
        description:
          "Índice das subferramentas (subvolume, filesystem, device, scrub…).",
        example: "man btrfs",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Disco cheio + snapshots",
        content:
          "COW precisa de espaço. Sem folga, o FS fica read-only ou piora. Monitore.",
      },
      {
        type: "info",
        title: "Snapshot ≠ backup off-site",
        content:
          "Snapshot no mesmo disco morre com o disco. Copie para fora (send, borg, rsync).",
      },
      {
        type: "danger",
        title: "RAID5/6 Btrfs",
        content:
          "Conheça o estado atual da feature antes de confiar dados de produção nela.",
      },
      {
        type: "success",
        title: "Subvol para app",
        content:
          "Separar @www e @logs facilita snapshot e restore seletivo.",
      },
    ],
    practiceLabs: [
      {
        title: "Subvolume + snapshot em lab",
        goal: "Ter um subvolume com arquivo, um snap read-only e listagem limpa.",
        steps: [
          "mkfs.btrfs em disco de lab e mount",
          "subvolume create @lab",
          "criar arquivo dentro (via mount do subvol ou path)",
          "snapshot -r",
          "list e filesystem df",
          "delete do snap ao final",
        ],
        command: "command -v btrfs && echo 'btrfs-progs ok' || echo 'instale btrfs-progs'",
        verify:
          "subvolume list mostra @lab e o snap; arquivo original intacto; delete remove só o snap.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que é subvolume no Btrfs?",
        answer:
          "Árvore de diretórios de primeira classe dentro do mesmo filesystem, montável e snapshotável separadamente.",
      },
      {
        id: 2,
        question: "Para que serve snapshot -r?",
        answer:
          "Cria snapshot somente-leitura do subvolume/path no mesmo FS.",
      },
      {
        id: 3,
        question: "snapshot substitui backup off-site?",
        answer:
          "Não. É recuperação rápida local; falha de disco leva os dois.",
      },
      {
        id: 4,
        question: "Qual pacote Debian traz as tools?",
        answer:
          "btrfs-progs.",
      },
      {
        id: 5,
        question: "Como listar subvolumes?",
        answer:
          "btrfs subvolume list <mountpoint>.",
      },
      {
        id: 6,
        question: "O que btrfs filesystem df mostra?",
        answer:
          "Alocação interna de data/metadata além do df tradicional.",
      },
      {
        id: 7,
        question: "Risco de encher o disco com snaps?",
        answer:
          "Espaço COW esgota, writes falham, sistema pode degradar.",
      },
      {
        id: 8,
        question: "Quando preferir ext4?",
        answer:
          "Simplicidade máxima, menos features, operação bem conhecida pela equipe.",
      },
    ],
    references: [
      { title: "man btrfs", url: "https://manpages.debian.org/btrfs" },
      { title: "Wiki — btrfs", url: "https://wiki.debian.org/Btrfs" },
      { title: "btrfs Wiki (kernel.org)", url: "https://btrfs.readthedocs.io/" },
      { title: "man mkfs.btrfs", url: "https://manpages.debian.org/mkfs.btrfs" },
    ],
  },
  {
    id: "mdadm-raid",
    title: "RAID com mdadm — RAID1 caseiro e troca de disco",
    icon: "🪞",
    category: "Discos e Armazenamento",
    description:
      "Monte array software com mdadm no Debian: foco em RAID1, monitoramento e mentalidade de disco falho — não em 'RAID é backup'.",
    objectives: [
      "Explicar RAID1 vs ideia errada de backup",
      "Criar um array RAID1 de lab com mdadm",
      "Olhar /proc/mdstat e mdadm --detail",
      "Simular falha e rebuild mental/prática em lab",
      "Persistir config em mdadm.conf",
      "Monitorar e documentar spare/disco novo",
    ],
    content: [
      "**RAID** junta discos para tolerar falha ou ganhar desempenho. **mdadm** é o RAID software do Linux no Debian. RAID1 espelha: dois discos com os mesmos dados (a grosso modo). Se um morre, o sistema segue no outro — **até o segundo morrer**. RAID não é backup: delete acidental, ransomware e incendio levam o array inteiro.",

      "Camadas: discos → array `/dev/md0` → filesystem em cima (ext4/XFS) ou LVM em cima do md. Ordem de desastre importa: saiba o que está embaixo do quê. Em VPS cloud 'RAID' muitas vezes já é problema do hypervisor; este capítulo é para metal/lab com dois discos reais ou virtuais.",

      "Jargões. **degraded**: array no ar com membro faltando. **rebuild/resync**: copiando para disco novo. **spare**: disco à espera. **bitmap**: acelera resync. **mdadm.conf**: para o array montar no boot com os UUIDs certos.",

      "Fluxo lab: dois discos vazios → mdadm --create nível 1 → mkfs no /dev/mdX → mount → mdstat verde. Falha: marcar disco faulty, remover, colocar novo, add, esperar rebuild. Produção: e-mail/monitoring em EVENT, teste de restore de backup **fora** do array.",

      "Quando NÃO: um disco só; achar que RAID1 dispensa borg/restic; RAID5 com discos enormes sem planejar tempo de rebuild (URRE). Quando SIM: dois SSDs de sistema em torre, NAS caseiro bem monitorado, lab para aprender degraded.",

      "Ao terminar você cria (em lab) um md RAID1, lê detail/mdstat, explica degraded e por que ainda precisa de backup off-array.",

    ],
    commands: [
      {
        command: "sudo apt install -y mdadm",
        description:
          "Instala mdadm; o postinst pode perguntar sobre arrays — em lab responda com consciência.",
        example: "sudo apt install -y mdadm",
      },
      {
        command: "cat /proc/mdstat",
        description:
          "Visão rápida dos arrays e resync.",
        example: "cat /proc/mdstat",
        output: "Personalities : [raid1]\nmd0 : active raid1 sdb[0] sdc[1]\n      10465280 blocks super 1.2 [2/2] [UU]",
      },
      {
        command: "sudo mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdX1 /dev/sdY1",
        description:
          "Cria RAID1 com dois dispositivos de LAB. DESTRUTIVO para esses dispositivos.",
        example: "# LAB ONLY",
      },
      {
        command: "sudo mdadm --detail /dev/md0",
        description:
          "Estado, UUID, membros, degraded ou não.",
        example: "sudo mdadm --detail /dev/md0",
      },
      {
        command: "sudo mkfs.ext4 /dev/md0 && sudo mount /dev/md0 /mnt/raid",
        description:
          "Filesystem em cima do array, não nos discos individuais.",
        example: "sudo mkfs.ext4 /dev/md0",
      },
      {
        command: "sudo mdadm --fail /dev/md0 /dev/sdY1",
        description:
          "Simula falha do membro (lab). Array fica degraded.",
        example: "cat /proc/mdstat",
      },
      {
        command: "sudo mdadm --remove /dev/md0 /dev/sdY1",
        description:
          "Remove o membro failed antes de inserir substituto.",
        example: "sudo mdadm --detail /dev/md0",
      },
      {
        command: "sudo mdadm --add /dev/md0 /dev/sdZ1",
        description:
          "Adiciona disco novo/spare e inicia rebuild.",
        example: "watch -n2 cat /proc/mdstat",
      },
      {
        command: "sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf",
        description:
          "Persiste descrição do array para o initramfs/boot achar o md.",
        example: "sudo update-initramfs -u  # apos mudar mdadm.conf em root-on-md",
      },
      {
        command: "sudo mdadm --examine /dev/sdX1",
        description:
          "Metadados md no disco membro — útil em recuperação.",
        example: "sudo mdadm --examine /dev/sdb1",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "RAID não é backup",
        content:
          "Delete e malware se espalham nos espelhos. Backup off-box continua obrigatório.",
      },
      {
        type: "warning",
        title: "Rebuild em disco grande",
        content:
          "Horas/dias degradado. Monitore temperatura e evite stress extra.",
      },
      {
        type: "info",
        title: "[UU] no mdstat",
        content:
          "Dois membros up em RAID1. [_U] ou [U_] = degraded.",
      },
      {
        type: "success",
        title: "Teste o e-mail de evento",
        content:
          "mdadm --monitor em produção só vale se alerta chegar em humano.",
      },
    ],
    practiceLabs: [
      {
        title: "RAID1 em VM com dois discos",
        goal: "md0 ativo [UU], FS montado, detail limpo.",
        steps: [
          "Anexar dois discos virtuais vazios",
          "mdadm --create level 1",
          "mkfs + mount + arquivo teste",
          "mdadm --detail e mdstat",
          "Opcional: fail/remove/add e observar rebuild",
        ],
        command: "cat /proc/mdstat 2>/dev/null; ls /dev/md* 2>/dev/null || echo 'sem array (ok se ainda nao criou)'",
        verify:
          "detail mostra raid1 com 2/2; arquivo no mount sobrevive a remount; voce sabe ler degraded.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "RAID1 salva de rm -rf acidental?",
        answer:
          "Não. O delete é espelhado. Backup versionado off-array salva.",
      },
      {
        id: 2,
        question: "O que é array degraded?",
        answer:
          "Funcionando com membro faltando/failed; sem redundância até rebuild.",
      },
      {
        id: 3,
        question: "Ferramenta Debian para RAID software?",
        answer:
          "mdadm.",
      },
      {
        id: 4,
        question: "Onde ver resync rapidamente?",
        answer:
          "/proc/mdstat.",
      },
      {
        id: 5,
        question: "Por que filesystem no /dev/md0 e não no sdb1?",
        answer:
          "Porque o arranjo lógico é o md; escrever num membro fura o modelo.",
      },
      {
        id: 6,
        question: "Para que mdadm.conf?",
        answer:
          "Persistir assemble no boot com UUID/membros corretos.",
      },
      {
        id: 7,
        question: "Ordem ao trocar disco failed?",
        answer:
          "fail (se preciso) → remove → physically replace → add → await rebuild.",
      },
      {
        id: 8,
        question: "RAID substitui unattended-upgrades?",
        answer:
          "Não tem relação: um é disco, outro é patch de software.",
      },
    ],
    references: [
      { title: "man mdadm", url: "https://manpages.debian.org/mdadm" },
      { title: "Wiki — SoftwareRAID", url: "https://wiki.debian.org/SoftwareRAID" },
      { title: "Wiki — mdadm", url: "https://wiki.debian.org/mdadm" },
      { title: "/proc/mdstat docs", url: "https://raid.wiki.kernel.org/" },
    ],
  },
  {
    id: "fstab-uuid",
    title: "fstab, UUID e montagem persistente — o mapa do boot",
    icon: "🗺️",
    category: "Discos e Armazenamento",
    description:
      "Domine /etc/fstab: UUID/LABEL, opções de mount, nofail/x-systemd e como não brickar o boot com uma vírgula.",
    objectives: [
      "Ler uma linha de fstab campo a campo",
      "Descobrir UUID e LABEL dos filesystems",
      "Preferir UUID a /dev/sdX no fstab",
      "Testar com findmnt e mount -a",
      "Usar nofail/x-systemd.device-timeout em montagens opcionais",
      "Recuperar de fstab que quebra boot (ideia de rescue)",
    ],
    content: [
      "`/etc/fstab` é a lista do que o sistema deve montar no boot (e o que `mount -a` tenta). Cada linha: dispositivo, ponto de montagem, tipo, opções, dump, pass. Errar aqui é o jeito clássico de máquina não subir até emergency mode — por isso se edita com ritual: backup, UUID certo, teste, só então reboot.",

      "**UUID** identifica o filesystem por identidade, não pela porta SATA em que o cabo estava. `/dev/sdb1` hoje pode ser `sdc1` amanhã; o UUID permanece após reclonar com cuidado. `blkid` e `lsblk -f` são seus olhos. **LABEL** é nome humano; UUID é o cinto de segurança.",

      "Campos: (1) source — UUID=... ou /dev/... (2) mountpoint — /home, /mnt/dados, none para swap (3) type — ext4, xfs, btrfs, swap, vfat (4) options — defaults, noatime, nofail... (5) dump — legado 0 (6) pass — ordem fsck (1 root, 2 outros, 0 desliga).",

      "Opções que salvam pele. **nofail**: se o disco USB não estiver, boot segue. **x-systemd.device-timeout=** evita espera eterna. **noauto**: só monta manual ou por automount. **ro** read-only. Para bind mounts, type é none e option bind. Swap usa none no mountpoint e type swap.",

      "Ritual seguro: `sudo cp -a /etc/fstab /etc/fstab.bak-DATA` → edite → `sudo findmnt --verify` (quando disponível) → `sudo mount -a` → `findmnt` confere → reboot só se estiver limpo. Se brickar: GRUB rescue/live, montar root, corrigir fstab, remount.",

      "Ao terminar você reescreve uma linha de dados com UUID, testa com mount -a, e explica por que sdX no fstab de servidor é pedanteria perigosa.",

    ],
    commands: [
      {
        command: "cat /etc/fstab",
        description:
          "Mapa atual de montagens persistentes. Leia antes de qualquer edição.",
        example: "cat /etc/fstab",
      },
      {
        command: "lsblk -f",
        description:
          "Árvore de block devices com FSTYPE, LABEL, UUID, mountpoints.",
        example: "lsblk -f",
      },
      {
        command: "sudo blkid",
        description:
          "UUID/LABEL por dispositivo — fonte para linhas fstab.",
        example: "sudo blkid",
      },
      {
        command: "findmnt",
        description:
          "O que está montado de verdade agora (pode divergir do fstab até mount -a).",
        example: "findmnt -t ext4,xfs,btrfs",
      },
      {
        command: "findmnt --verify",
        description:
          "Checagem do fstab (util-linux recente). Corrija avisos antes do reboot.",
        example: "findmnt --verify 2>&1 | head -n 40",
      },
      {
        command: "sudo cp -a /etc/fstab /etc/fstab.bak-$(date +%F)",
        description:
          "Backup datado — não negociável.",
        example: "sudo cp -a /etc/fstab /etc/fstab.bak-$(date +%F)",
      },
      {
        command: "echo 'UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx /mnt/dados ext4 defaults,nofail 0 2'",
        description:
          "Modelo de linha de dados com UUID e nofail. Substitua o UUID real do blkid.",
        example: "# cole no fstab so apos conferir UUID",
      },
      {
        command: "sudo mount -a && findmnt /mnt/dados",
        description:
          "Aplica fstab sem reboot. Erro aqui é presente; no boot seria drama.",
        example: "sudo mount -a",
      },
      {
        command: "systemctl daemon-reload",
        description:
          "Após mudar fstab, systemd regenera unidades .mount em sistemas modernos.",
        example: "sudo systemctl daemon-reload",
      },
      {
        command: "man fstab",
        description:
          "Referência dos seis campos e opções comuns.",
        example: "man fstab",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "fstab errado = boot parado",
        content:
          "Sempre backup + mount -a antes de reboot. Tenha console/rescue.",
      },
      {
        type: "success",
        title: "UUID > /dev/sdX",
        content:
          "Estabilidade entre boots e troca de cabo/controladora.",
      },
      {
        type: "info",
        title: "nofail em disco externo",
        content:
          "Montagens opcionais não devem prender o multi-user.target.",
      },
      {
        type: "warning",
        title: "pass e fsck",
        content:
          "Root costuma pass=1; dados 2; pseudo-FS e binds 0.",
      },
    ],
    practiceLabs: [
      {
        title: "Linha UUID segura",
        goal: "Adicionar montagem de lab com UUID, validar mount -a, remover se for só teste.",
        steps: [
          "lsblk -f e blkid no FS de lab",
          "backup fstab",
          "adicionar linha UUID=... defaults,nofail",
          "daemon-reload se aplicável; mount -a",
          "findmnt no ponto",
          "reverter se for ambiente compartilhado de lab temporário",
        ],
        command: "lsblk -f; echo '---'; tail -n 5 /etc/fstab",
        verify:
          "findmnt mostra o target; mount -a exit 0; reboot so depois disso.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Quais os 6 campos do fstab?",
        answer:
          "device, mountpoint, type, options, dump, pass.",
      },
      {
        id: 2,
        question: "Por que UUID?",
        answer:
          "Identifica o FS de forma estável; nomes /dev/sdX mudam.",
      },
      {
        id: 3,
        question: "Como descobrir UUID?",
        answer:
          "lsblk -f ou blkid.",
      },
      {
        id: 4,
        question: "Para que mount -a?",
        answer:
          "Montar tudo do fstab agora e capturar erro antes do reboot.",
      },
      {
        id: 5,
        question: "O que nofail faz?",
        answer:
          "Não falha o boot se aquele volume não existir/montar.",
      },
      {
        id: 6,
        question: "pass=0 significa?",
        answer:
          "fsck não checa esse FS na ordem de boot via fstab.",
      },
      {
        id: 7,
        question: "Primeiro passo antes de editar fstab?",
        answer:
          "Backup do arquivo (e saber UUID certo).",
      },
      {
        id: 8,
        question: "fstab serve para bind?",
        answer:
          "Sim: type none e option bind (e paths absolutos).",
      },
    ],
    references: [
      { title: "man fstab", url: "https://manpages.debian.org/fstab" },
      { title: "man blkid", url: "https://manpages.debian.org/blkid" },
      { title: "man findmnt", url: "https://manpages.debian.org/findmnt" },
      { title: "Wiki — fstab", url: "https://wiki.debian.org/fstab" },
    ],
  },
  {
    id: "luks-disco",
    title: "Criptografia de disco com LUKS — fechar o volume, não só a pasta",
    icon: "🔐",
    category: "Discos e Armazenamento",
    description:
      "Entenda LUKS/cryptsetup no Debian: criar volume criptografado, abrir, formatar, montar e fechar — com foco em lab e em não perder a passphrase.",
    objectives: [
      "Explicar LUKS vs criptografar só arquivo zip",
      "Instalar cryptsetup e criar um container/disco de lab",
      "Abrir (luksOpen) e fechar (luksClose) o mapeamento",
      "Colocar filesystem dentro do volume aberto",
      "Listar status com dmsetup/lsblk",
      "Internalizar: perder passphrase = perder dados",
    ],
    content: [
      "**LUKS** (Linux Unified Key Setup) é o padrão de disco criptografado no Linux. Você não 'esconde pasta com senha do zip': o bloco inteiro vira confuso sem a chave. Por cima do device LUKS aberto (`/dev/mapper/nome`) você põe ext4, XFS, LVM… O instalador Debian pode criptografar root assim; aqui o foco é **volume de dados de lab** e o modelo mental.",

      "Fluxo: disco ou arquivo-loop → `cryptsetup luksFormat` (APAGA/ocupa o device) → `luksOpen` vira mapper → `mkfs` no mapper → mount → uso → umount → `luksClose`. Sem close limpo em pendrive, o próximo host pode reclamar; sem backup da header/passphrase, um esqueça e pronto.",

      "Jargões. **passphrase** desbloqueia a keyslot. **keyfile** é chave em arquivo (automação; proteja o keyfile). **header** LUKS no início do device — backup de header existe para recuperação avançada. **dm-crypt** é o motor no kernel; cryptsetup é a ferramenta.",

      "Cuidados: luksFormat é destrutivo; use disco vazio de lab. Passphrase forte e guardada fora da máquina. SSD e secure erase têm nuances. Em VPS, 'disco cifrado' sem proteger o host da hypervisor é camada extra, não milagre contra provedor malicioso com acesso à RAM/live system destrancado.",

      "Boot com root cifrado pede passphrase no initramfs ou TPM/rede — assunto de setup avançado. Não pratique luksFormat no disco de boot da VPS da equipe. Arquivo-loop (`truncate` + losetup) basta para aprender os comandos.",

      "Ao terminar você formata LUKS em lab, abre, monta com arquivo teste, fecha, e reabre com a mesma passphrase — e respeita o aviso de perda total sem chave.",

    ],
    commands: [
      {
        command: "sudo apt install -y cryptsetup",
        description:
          "Ferramenta userspace para LUKS/dm-crypt.",
        example: "sudo apt install -y cryptsetup",
      },
      {
        command: "truncate -s 512M /tmp/luks-lab.img",
        description:
          "Arquivo-imagem de 512M para lab sem disco físico extra.",
        example: "truncate -s 512M /tmp/luks-lab.img",
      },
      {
        command: "sudo cryptsetup luksFormat /tmp/luks-lab.img",
        description:
          "Cria header LUKS no arquivo/device. Pede confirmação YES e passphrase. DESTRUTIVO no alvo.",
        example: "sudo cryptsetup luksFormat /tmp/luks-lab.img",
      },
      {
        command: "sudo cryptsetup luksOpen /tmp/luks-lab.img luksLab",
        description:
          "Abre o volume como /dev/mapper/luksLab após passphrase.",
        example: "sudo cryptsetup luksOpen /tmp/luks-lab.img luksLab",
      },
      {
        command: "sudo mkfs.ext4 /dev/mapper/luksLab",
        description:
          "Filesystem dentro do volume já destrancado.",
        example: "sudo mkfs.ext4 /dev/mapper/luksLab",
      },
      {
        command: "sudo mkdir -p /mnt/luks-lab && sudo mount /dev/mapper/luksLab /mnt/luks-lab",
        description:
          "Monta para uso. Escreva e leia arquivos de teste.",
        example: "echo ok | sudo tee /mnt/luks-lab/teste.txt",
      },
      {
        command: "lsblk -f | grep -E 'NAME|luks|crypt|luks-lab' || lsblk -f",
        description:
          "Veja o tipo crypto_LUKS e o mapper montado.",
        example: "lsblk -f",
      },
      {
        command: "sudo umount /mnt/luks-lab && sudo cryptsetup luksClose luksLab",
        description:
          "Desmonta e fecha o mapeamento — volume volta a ficar inacessível.",
        example: "sudo cryptsetup status luksLab || echo 'fechado'",
      },
      {
        command: "sudo cryptsetup luksDump /tmp/luks-lab.img | head -n 30",
        description:
          "Metadados LUKS (cipher, keyslots) sem revelar a passphrase.",
        example: "sudo cryptsetup luksDump /tmp/luks-lab.img | head -n 30",
      },
      {
        command: "man cryptsetup",
        description:
          "Referência luksFormat, open/close, addKey, header backup.",
        example: "man cryptsetup",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Passphrase perdida = dados perdidos",
        content:
          "Não há 'esqueci minha senha' oficial. Backup da chave/header é responsabilidade sua.",
      },
      {
        type: "warning",
        title: "luksFormat apaga o alvo",
        content:
          "Confirme o path duas vezes. Em lab use arquivo-loop.",
      },
      {
        type: "info",
        title: "Fechar depois de usar",
        content:
          "umount + luksClose em mídia removível.",
      },
      {
        type: "success",
        title: "Camadas",
        content:
          "LUKS embaixo, ext4 em cima, fstab com UUID do FS de dentro do mapper (e crypttab para automação).",
      },
    ],
    practiceLabs: [
      {
        title: "LUKS em arquivo-loop",
        goal: "Ciclo format → open → mkfs → mount → arquivo → umount → close → open de novo.",
        steps: [
          "truncate 512M",
          "luksFormat",
          "luksOpen",
          "mkfs.ext4 + mount + echo teste",
          "umount + luksClose",
          "luksOpen de novo e ler o teste",
        ],
        command: "command -v cryptsetup && ls -la /tmp/luks-lab.img 2>/dev/null || echo 'crie a imagem no lab'",
        verify:
          "Após reabrir, o arquivo teste.txt ainda está legível; apos luksClose o mapper some.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "LUKS cifra o quê?",
        answer:
          "O dispositivo de bloco (disco/partição/arquivo-loop), não só um arquivo zip solto.",
      },
      {
        id: 2,
        question: "O que luksOpen faz?",
        answer:
          "Cria /dev/mapper/NOME destrancado para mkfs/mount.",
      },
      {
        id: 3,
        question: "Por que luksFormat é perigoso?",
        answer:
          "Inicializa LUKS no alvo e inviabiliza dados anteriores ali.",
      },
      {
        id: 4,
        question: "Ordem para desligar com segurança?",
        answer:
          "umount do FS e depois cryptsetup luksClose.",
      },
      {
        id: 5,
        question: "Pacote Debian principal?",
        answer:
          "cryptsetup.",
      },
      {
        id: 6,
        question: "LUKS sozinho protege contra provedor com acesso à RAM da VM ligada?",
        answer:
          "Não de forma mágica: volume aberto em host comprometido está acessível.",
      },
      {
        id: 7,
        question: "Onde fica o device aberto?",
        answer:
          "/dev/mapper/<nome> (dm-crypt).",
      },
      {
        id: 8,
        question: "Por que lab em arquivo-loop?",
        answer:
          "Aprende os comandos sem arriscar disco real da equipe.",
      },
    ],
    references: [
      { title: "man cryptsetup", url: "https://manpages.debian.org/cryptsetup" },
      { title: "Wiki — FullDiskEncryption", url: "https://wiki.debian.org/FullDiskEncryption" },
      { title: "Wiki — Cryptsetup", url: "https://wiki.debian.org/Cryptsetup" },
      { title: "cryptsetup FAQ", url: "https://gitlab.com/cryptsetup/cryptsetup" },
    ],
  },
];
