import { Module } from "@/types/module";

export const permissoesUsuarios: Module[] = [
  {
    id: "permissoes",
    title: "Permissões e Propriedade de Arquivos",
    icon: "🔐",
    category: "Permissões e Usuários",
    description: "Como o Linux protege cada arquivo: o trio usuário/grupo/outros, leitura/escrita/execução, chmod, chown e permissões especiais.",
    objectives: [
      "Ler permissões em formato simbólico (rwxr-xr-x) e octal (755) sem hesitar",
      "Modificar permissões com chmod usando notação simbólica e numérica",
      "Mudar dono e grupo com chown e chgrp, inclusive recursivamente",
      "Diferenciar o efeito das permissões em arquivos comuns e em diretórios",
      "Entender umask, SUID, SGID e sticky bit e quando cada um aparece",
      "Reconhecer quando um problema é de permissão e como diagnosticar com ls -l e stat",
    ],
    content: [
      `Pense num prédio de apartamentos. Cada apartamento tem um morador (o dono), um conjunto de vizinhos do mesmo andar (o grupo) e o resto do mundo lá fora (os outros). A porta tem um cadeado que diz quem pode entrar para olhar (ler), quem pode entrar para mexer nos móveis (escrever) e quem pode usar o elevador exclusivo do prédio (executar). É exatamente assim que o Linux pensa em arquivos: cada arquivo tem três "vizinhanças" e três tipos de chave. Esse modelo nasceu nos anos 70 com o Unix e até hoje protege bilhões de arquivos sem um único byte a mais.`,

      `Esse desenho existe por um motivo simples: o Linux nunca foi pensado para um único dono. Desde o primeiro dia, vários usuários compartilham a mesma máquina ao mesmo tempo, cada um com seus arquivos, e ninguém deve poder bisbilhotar ou estragar o que é do outro. A solução foi colar três informações em todo arquivo: quem é o dono, qual é o grupo associado e quais são as permissões para cada categoria. Sem essa proteção, qualquer programa rodando no sistema poderia ler suas senhas, apagar suas fotos ou substituir seu navegador por uma cópia maliciosa.`,

      `Antes de partir para os comandos, fixe os jargões. Permissão é a regra que diz "X pode fazer Y aqui". O dono (em inglês user, abreviado u) é o usuário que criou o arquivo ou recebeu a posse depois. O grupo (g) é uma lista nomeada de usuários que compartilham acesso a algo, como o grupo "audio" para quem usa placa de som. Outros (o, de others) é literalmente todo mundo que não é dono nem está no grupo. As três ações são r (read, ler conteúdo), w (write, modificar) e x (execute, executar como programa). Essas seis letras vão te acompanhar para sempre.`,

      `Quando você roda \`ls -l\`, a primeira coluna parece um código secreto, mas tem uma estrutura clara. Em \`-rw-r--r-- 1 wallyson users 1234 abr 25 18:43 nota.txt\`, o primeiro caractere diz o tipo: \`-\` é arquivo comum, \`d\` é diretório, \`l\` é link simbólico, \`b\` e \`c\` são dispositivos. Os próximos três caracteres (rw-) são as permissões do dono. Os três seguintes (r--) são do grupo. Os últimos três (r--) são dos outros. Sempre nessa ordem: tipo, dono, grupo, outros. Decorou isso, decorou metade do capítulo.`,

      `A notação octal parece intimidadora, mas é só matemática de escola. Cada permissão vale um número: r=4, w=2, x=1. Some os que estão presentes e você tem o dígito daquela categoria. \`rwx\` vira 7 (4+2+1), \`rw-\` vira 6 (4+2), \`r-x\` vira 5 (4+1), \`r--\` vira 4. Coloque três dígitos em sequência e você tem a permissão completa: 755 quer dizer rwxr-xr-x (dono completo, grupo lê e executa, outros idem), 644 é rw-r--r-- (arquivo comum), 600 é rw------- (privado, típico de chave SSH), 700 é rwx------ (pasta privada). Em scripts profissionais, octal é o padrão porque cabe em três teclas.`,

      `Aqui mora uma confusão clássica: permissões em diretórios não fazem o que parecem. Em um arquivo, r deixa ler, w deixa modificar, x deixa executar. Em um diretório, r deixa listar nomes (\`ls\`), w deixa criar e apagar arquivos dentro, e x deixa entrar (\`cd\`) e acessar arquivos pelo nome. Resultado bizarro: você pode ter w no arquivo mas não conseguir apagá-lo, porque quem decide isso é o w no DIRETÓRIO. E pode ter r no diretório mas não conseguir ler nenhum arquivo dentro, porque sem x você nem entra. Por isso pastas quase sempre são 755 ou 700, nunca 644.`,

      `A permissão \`777\` aparece em muitos tutoriais ruins como "solução universal". Quase sempre é solução errada. 777 dá rwx para todo mundo, ou seja: qualquer usuário do sistema pode ler, modificar e executar. Em servidor, é convite para invasor. Em desktop, é arma carregada. O caminho profissional é diagnosticar o erro, descobrir QUEM precisa de QUAL permissão e ajustar com precisão cirúrgica. Quando você vir um tutorial mandando \`chmod 777\`, desconfie: provavelmente o autor não sabe corrigir o problema de verdade.`,

      `Existe um trio de permissões especiais que aparece em casos avançados. SUID (4xxx) faz um executável rodar com poderes do dono dele, não de quem o chamou. É por isso que \`/usr/bin/passwd\`, dono root, pode editar \`/etc/shadow\` mesmo quando você o invoca. SGID (2xxx) faz a mesma coisa para o grupo, e em diretórios faz arquivos novos herdarem o grupo da pasta (útil em colaboração). Sticky bit (1xxx) é aquele \`t\` no final de \`/tmp\` (\`drwxrwxrwt\`): mesmo que todos possam escrever no diretório, só o dono de cada arquivo pode apagá-lo. No \`ls -l\` esses bits aparecem como s, S ou t no lugar do x.`,

      `O \`umask\` é o último pedaço do quebra-cabeça. Quando você cria um arquivo novo, ele não nasce 777: nasce com permissões "subtraindo" o umask. O default da maioria dos Debian é 022, então arquivos viram 666 - 022 = 644 e diretórios 777 - 022 = 755. Se você quer que tudo que criar seja só seu, defina umask 077 no \`~/.bashrc\` e arquivos novos nascerão 600, diretórios 700. Esse é um truque muito usado em servidores compartilhados, onde "ninguém olha o que é meu" precisa ser verdade desde o nascimento do arquivo.`,

      `No dia a dia, problemas de permissão aparecem em três cenas: um script "Permission denied" porque falta x; um servidor web devolvendo 403 porque o usuário www-data não pode ler os arquivos; e o SSH se recusando a usar uma chave privada porque ela está com 644 em vez de 600. Ao terminar este capítulo, você vai ler \`ls -l\`, identificar a peça errada, escolher entre chmod e chown, e resolver o problema na primeira tentativa, sem cair no \`chmod 777\` desesperado.`,
    ],
    commands: [
      {
        command: "ls -l",
        description: "Lista arquivos com detalhes: tipo, permissões, dono, grupo, tamanho e data.",
        example: "ls -l ~/.ssh",
        output: "drwx------ 2 wallyson wallyson 4096 abr 25 14:00 .\n-rw------- 1 wallyson wallyson 3243 abr 25 14:00 id_rsa\n-rw-r--r-- 1 wallyson wallyson  743 abr 25 14:00 id_rsa.pub",
        flags: [
          { flag: "-l", description: "Formato longo com permissões e dono" },
          { flag: "-a", description: "Mostra arquivos ocultos (começam com .)" },
          { flag: "-h", description: "Tamanhos legíveis (K, M, G)" },
          { flag: "-d", description: "Mostra o diretório em si, não o conteúdo" },
          { flag: "-n", description: "Mostra UID/GID em vez de nomes" },
        ],
      },
      {
        command: "stat",
        description: "Detalhes completos de um arquivo, com permissões em octal e simbólico.",
        example: "stat ~/.bashrc",
        output: "  Arquivo: '/home/wallyson/.bashrc'\n  Tamanho: 3771      Blocos: 8          Bloco IO: 4096   arquivo comum\n  Acesso: (0644/-rw-r--r--)  Uid: ( 1000/wallyson)   Gid: ( 1000/wallyson)",
        flags: [
          { flag: "-c '%a %U %G'", description: "Formato customizado: octal, dono, grupo" },
          { flag: "-f", description: "Mostra info do filesystem em vez do arquivo" },
        ],
      },
      {
        command: "chmod",
        description: "Change mode: muda permissões em notação simbólica ou octal.",
        example: "chmod 755 script.sh",
        output: "(sem saída em caso de sucesso)",
        flags: [
          { flag: "u+x", description: "Dono ganha permissão de executar" },
          { flag: "g-w", description: "Grupo perde permissão de escrever" },
          { flag: "o=r", description: "Outros passam a ter SOMENTE r" },
          { flag: "a+r", description: "Todos (all) ganham r" },
          { flag: "ug+x", description: "Dono e grupo ganham x ao mesmo tempo" },
          { flag: "-R", description: "Recursivo: aplica a tudo dentro do diretório" },
          { flag: "755", description: "rwxr-xr-x: padrão para executáveis e diretórios" },
          { flag: "644", description: "rw-r--r--: padrão para arquivos de texto" },
          { flag: "600", description: "rw-------: privado (chaves SSH, segredos)" },
          { flag: "700", description: "rwx------: diretório privado (~/.ssh)" },
        ],
      },
      {
        command: "chown",
        description: "Change owner: muda o dono e/ou o grupo de um arquivo.",
        example: "sudo chown -R wallyson:wallyson /var/www/meu-site",
        output: "(sem saída em caso de sucesso)",
        flags: [
          { flag: "usuario", description: "Muda só o dono" },
          { flag: "usuario:grupo", description: "Muda dono e grupo" },
          { flag: ":grupo", description: "Muda só o grupo" },
          { flag: "-R", description: "Recursivo (toda a árvore de diretórios)" },
          { flag: "--reference=arq", description: "Copia dono/grupo de outro arquivo" },
        ],
      },
      {
        command: "chgrp",
        description: "Muda apenas o grupo de um arquivo (alternativa a chown :grupo).",
        example: "sudo chgrp www-data /var/www/html",
        flags: [
          { flag: "-R", description: "Recursivo" },
          { flag: "-v", description: "Verboso: mostra cada mudança" },
        ],
      },
      {
        command: "umask",
        description: "Mostra ou define a máscara de permissão padrão para arquivos novos.",
        example: "umask",
        output: "0022",
        flags: [
          { flag: "022", description: "Default: arquivos viram 644, diretórios 755" },
          { flag: "077", description: "Restritivo: arquivos viram 600, diretórios 700" },
          { flag: "-S", description: "Mostra em formato simbólico (u=rwx,g=rx,o=rx)" },
        ],
      },
      {
        command: "getfacl",
        description: "Mostra ACLs (permissões avançadas) além do trio dono/grupo/outros.",
        example: "getfacl arquivo.txt",
        output: "# file: arquivo.txt\n# owner: wallyson\n# group: wallyson\nuser::rw-\nuser:maria:rw-\ngroup::r--\nmask::rw-\nother::r--",
      },
      {
        command: "setfacl",
        description: "Define ACL: dá permissão a usuário/grupo específico fora do trio padrão.",
        example: "setfacl -m u:maria:rw arquivo.txt",
        flags: [
          { flag: "-m", description: "Modifica/adiciona uma ACL" },
          { flag: "-x", description: "Remove uma ACL específica" },
          { flag: "-b", description: "Remove todas as ACLs" },
          { flag: "-R", description: "Recursivo" },
          { flag: "-d", description: "Define ACL padrão para arquivos futuros" },
        ],
      },
      {
        command: "find",
        description: "Procura arquivos por permissão (útil para auditoria).",
        example: "find /etc -perm -4000 -type f",
        output: "/usr/bin/passwd\n/usr/bin/sudo\n/usr/bin/chsh",
        flags: [
          { flag: "-perm 644", description: "Permissão exatamente 644" },
          { flag: "-perm -4000", description: "Tem o bit SUID setado" },
          { flag: "-perm /u+w", description: "Tem ao menos w para o dono" },
        ],
      },
      {
        command: "namei",
        description: "Diagnostica permissões em cada nível de um caminho. Salvador em problemas de acesso.",
        example: "namei -l /var/www/html/index.html",
        output: "f: /var/www/html/index.html\n drwxr-xr-x root     root     /\n drwxr-xr-x root     root     var\n drwxr-xr-x root     root     www\n drwxr-xr-x www-data www-data html\n -rw-r--r-- www-data www-data index.html",
      },
      {
        command: "id",
        description: "Mostra UID, GID e grupos do usuário atual ou de outro.",
        example: "id",
        output: "uid=1000(wallyson) gid=1000(wallyson) grupos=1000(wallyson),27(sudo),24(cdrom),29(audio)",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "chmod 777 quase nunca é a resposta certa",
        content: "Quando um tutorial pede 'chmod -R 777' para resolver um erro, é sinal claro de que o autor não entende o problema. 777 abre o arquivo para qualquer usuário do sistema. Em servidor, é brecha de segurança. O caminho correto é descobrir QUEM precisa de QUAL permissão (geralmente um chown www-data:www-data e um chmod 644/755 resolvem).",
      },
      {
        type: "warning",
        title: "Diretório precisa de x para o usuário acessar",
        content: "Se você fizer chmod 644 em ~/.ssh por engano, nem você consegue mais entrar lá. Sem o bit x no diretório, cd e listagens detalhadas falham. Pasta sempre quer x para quem deve passar por ela. A permissão correta de ~/.ssh é 700.",
      },
      {
        type: "info",
        title: "ls -l decifrado de uma vez por todas",
        content: "drwxr-xr-x quer dizer: d=diretório, rwx=dono lê/escreve/entra, r-x=grupo lê e entra (sem modificar), r-x=outros idem. É a permissão padrão de uma pasta colaborativa segura.",
      },
      {
        type: "success",
        title: "umask 077 no servidor compartilhado",
        content: "Em máquinas com múltiplos usuários, adicione umask 077 ao seu ~/.bashrc. Todo arquivo novo nasce 600 e todo diretório nasce 700, restrito ao seu usuário. Sem precisar lembrar de chmod depois.",
      },
      {
        type: "info",
        title: "ACL é o plano B quando o trio não basta",
        content: "Quando você precisa dar acesso a um único usuário fora do dono e do grupo, ACL resolve sem inventar grupo novo. Instale o pacote acl (sudo apt install acl) e use setfacl/getfacl para controle granular.",
      },
    ],
    practiceLabs: [
      {
        title: "Configurar permissões corretas para chave SSH",
        goal: "Aprender as permissões que o OpenSSH exige (ele se recusa a usar chave com permissão errada).",
        steps: [
          "Crie a pasta ~/.ssh caso ainda não exista (mkdir -p).",
          "Defina permissão 700 nela para que só o dono entre.",
          "Crie um arquivo de chave fictício com touch.",
          "Defina 600 no arquivo de chave (só dono lê e escreve).",
          "Confira tudo com ls -ld na pasta e ls -l no arquivo.",
          "Simule o erro: jogue chmod 644 na chave e veja o ssh recusar.",
        ],
        command: `mkdir -p ~/.ssh
chmod 700 ~/.ssh
touch ~/.ssh/teste_key
chmod 600 ~/.ssh/teste_key
ls -ld ~/.ssh
ls -l ~/.ssh/teste_key`,
        expected: `drwx------ 2 wallyson wallyson 4096 abr 25 18:50 /home/wallyson/.ssh
-rw------- 1 wallyson wallyson 0 abr 25 18:50 /home/wallyson/.ssh/teste_key`,
        verify: "Permissões devem ser drwx------ na pasta e -rw------- no arquivo. Sem isso, o OpenSSH se recusa a carregar a chave por segurança e mostra um aviso 'Permissions are too open'.",
      },
      {
        title: "Tornar um script executável e investigar quem pode rodar",
        goal: "Criar um script bash, dar x e entender quem ganhou permissão.",
        steps: [
          "Crie um script /tmp/ola.sh com um echo simples.",
          "Tente executar sem permissão e veja o 'Permission denied'.",
          "Adicione +x apenas para o dono (chmod u+x).",
          "Execute e confirme que funciona.",
          "Confira com ls -l: deve aparecer rwxr--r--.",
          "Mude para 755 e veja a diferença.",
        ],
        command: `cat > /tmp/ola.sh << 'EOF'
#!/bin/bash
echo "Ola, $USER!"
EOF
/tmp/ola.sh
chmod u+x /tmp/ola.sh
/tmp/ola.sh
ls -l /tmp/ola.sh
chmod 755 /tmp/ola.sh
ls -l /tmp/ola.sh`,
        expected: "Ola, wallyson!\n-rwxr--r-- 1 wallyson wallyson 30 abr 25 18:55 /tmp/ola.sh\n-rwxr-xr-x 1 wallyson wallyson 30 abr 25 18:55 /tmp/ola.sh",
        verify: "Após chmod u+x, só o dono executa. Após 755, todos podem executar. A primeira tentativa, sem x, falha com 'Permission denied'.",
      },
      {
        title: "Diagnóstico de servidor web com namei",
        goal: "Aprender a investigar por que o nginx/apache mostra 403 em um arquivo aparentemente público.",
        steps: [
          "Crie /tmp/site/index.html com um conteúdo qualquer.",
          "Defina o diretório como 700 (sem x para outros).",
          "Defina o arquivo como 644.",
          "Tente acessar pelo usuário 'nobody' com sudo -u nobody cat.",
          "Use namei -l para ver onde quebra.",
          "Conserte com chmod 755 no diretório e teste de novo.",
        ],
        command: `mkdir -p /tmp/site
echo "<h1>Oi</h1>" > /tmp/site/index.html
chmod 700 /tmp/site
chmod 644 /tmp/site/index.html
sudo -u nobody cat /tmp/site/index.html
namei -l /tmp/site/index.html
chmod 755 /tmp/site
sudo -u nobody cat /tmp/site/index.html`,
        verify: "A primeira leitura como nobody falha porque /tmp/site não tem x para outros. namei mostra exatamente em qual diretório o acesso é negado. Após chmod 755 no diretório, a leitura passa.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Decifre rwxr-xr-x em octal e explique cada dígito.",
        hint: "Some r=4, w=2, x=1 para cada trio (dono, grupo, outros).",
        answer: "É 755. O dono tem rwx (4+2+1=7), o grupo tem r-x (4+0+1=5), os outros têm r-x (4+0+1=5). É a permissão clássica de scripts e de diretórios públicos: dono modifica, todo mundo lê e executa.",
      },
      {
        id: 2,
        question: "Como tornar script.sh executável só para você (dono), sem expor a outros?",
        hint: "Pense em chmod simbólico ou em octal 700.",
        answer: "chmod u+x script.sh adiciona x apenas ao dono. Em octal, chmod 700 script.sh dá rwx ao dono e nada ao grupo e outros. Use 700 quando o script tem informação sensível dentro.",
      },
      {
        id: 3,
        question: "Qual a permissão correta para a pasta ~/.ssh e por quê?",
        hint: "Outros não podem nem entrar para listar.",
        answer: "700 (drwx------). Só o dono pode entrar e listar. O OpenSSH recusa funcionar se outros tiverem qualquer acesso à ~/.ssh, porque a pasta contém chaves privadas que não podem vazar.",
      },
      {
        id: 4,
        question: "Por que chmod 777 é considerado uma má prática quase universal?",
        hint: "Pense em quem ganha o quê.",
        answer: "777 dá rwx para QUALQUER usuário do sistema. Em servidor, qualquer processo invasor pode reescrever o arquivo. Em desktop multiusuário, qualquer um lê e modifica. Quase sempre o correto é 755 (executável/diretório público), 644 (arquivo público) ou 600/700 (privado), com chown ajustado para o dono certo.",
      },
      {
        id: 5,
        question: "Como mudar dono e grupo de uma pasta inteira em um comando?",
        hint: "Tem um -R no chown.",
        answer: "sudo chown -R novo_dono:novo_grupo /caminho/da/pasta. O -R desce em todos os subdiretórios. Use com cuidado: se você apontar para / por engano, muda o dono do sistema inteiro.",
      },
      {
        id: 6,
        question: "O que faz o sticky bit em um diretório como /tmp?",
        hint: "Olhe o último caractere de drwxrwxrwt.",
        answer: "Mesmo com w aberto para todos, só o dono de cada arquivo (ou root) pode apagá-lo. Sem o sticky bit, qualquer um com w no diretório poderia deletar arquivos alheios. É por isso que /tmp aparece como drwxrwxrwt: todos escrevem, mas ninguém apaga arquivo dos outros.",
      },
      {
        id: 7,
        question: "Você criou /tmp/site/index.html, deu 644 nele e o nginx ainda devolve 403. Onde investigar?",
        hint: "Permissão de arquivo só funciona se o caminho até ele permitir o tráfego.",
        answer: "Use namei -l /tmp/site/index.html para ver as permissões em cada nível do caminho. Provavelmente algum diretório intermediário não tem x para o usuário do nginx (www-data). Conserte com chmod o+x no diretório ou ajuste o dono.",
      },
      {
        id: 8,
        question: "Para que serve o umask e qual o valor padrão no Debian?",
        hint: "Ele 'subtrai' permissões dos arquivos novos.",
        answer: "umask define quais permissões NÃO dar a arquivos recém-criados. O default no Debian é 022, então arquivos novos viram 644 (666-022) e diretórios viram 755 (777-022). Defina 077 em ~/.bashrc se quiser que tudo nasça privado.",
      },
    ],
    references: [
      { title: "Wiki Debian — Permissions", url: "https://wiki.debian.org/Permissions" },
      { title: "Debian Handbook — Rights Management", url: "https://debian-handbook.info/browse/stable/sect.rights-management.html" },
      { title: "man chmod (manpage Debian)", url: "https://manpages.debian.org/bookworm/coreutils/chmod.1.en.html" },
      { title: "Calculadora de chmod online", url: "https://chmodcommand.com/" },
      { title: "Linux ACLs (acl-howto)", url: "https://wiki.archlinux.org/title/Access_Control_Lists" },
    ],
  },

  {
    id: "usuarios",
    title: "Gestão de Usuários e Grupos",
    icon: "👥",
    category: "Permissões e Usuários",
    description: "Criar, modificar e remover usuários, organizar em grupos e entender os arquivos /etc/passwd, /etc/shadow e /etc/group.",
    objectives: [
      "Criar e remover contas com adduser, deluser, useradd e userdel",
      "Adicionar usuários a grupos sem se trancar fora do sudo",
      "Definir senhas, expirar contas e bloquear acesso",
      "Ler e interpretar /etc/passwd, /etc/shadow e /etc/group sem medo",
      "Diferenciar usuários humanos de usuários de sistema (UID < 1000)",
      "Auditar logins e tentativas suspeitas com last, lastb e who",
    ],
    content: [
      `Imagine um cinema que abre 24 horas. Cada espectador tem sua poltrona numerada, seu pacote de pipoca, sua conta de bar separada. Ninguém come a pipoca do outro nem paga a bebida do vizinho. Em Linux, cada usuário é um espectador desse cinema: tem seu próprio diretório /home, suas próprias configurações, seus próprios processos rodando sob seu nome. O sistema multi-usuário não é um detalhe enxertado depois — é o coração do desenho desde 1969, quando o Unix nasceu para ser compartilhado entre vários programadores.`,

      `Por que separar usuários se a sua máquina é só sua? Por três motivos sólidos. Primeiro, programas em Linux também são "usuários": o servidor web roda como www-data, o banco como postgres, o SSH como sshd. Cada um isolado em sua caixinha, então um furo no Apache não dá acesso ao banco de dados. Segundo, mesmo num desktop pessoal, você quer que crianças, convidados ou seu eu-administrador vivam em contas separadas. Terceiro, na era de containers, cada serviço numa conta isolada é o primeiro passo de defesa contra invasores.`,

      `Existem dois tipos de usuário, e a diferença está no UID (User ID, um número). Usuários humanos têm UID a partir de 1000. O primeiro humano da máquina geralmente é o 1000, o segundo o 1001, e assim por diante. Esses têm /home/nome, shell de verdade (/bin/bash) e senha. Usuários de sistema têm UID abaixo de 1000 (root é sempre 0, daemons vão de 1 a 999). Eles geralmente nem têm shell de login (aparece /usr/sbin/nologin) e o /home é fictício. Esse corte numérico é convenção, não regra física, mas todo administrador respeita.`,

      `O arquivo /etc/passwd é a lista de moradores. Cada linha é um usuário, com sete campos separados por dois pontos: nome, placeholder de senha (sempre "x"), UID, GID primário, GECOS (nome completo, telefone, sala — opcional), diretório home e shell de login. Esse arquivo é legível por qualquer usuário, porque programas precisam saber traduzir UID em nome (o \`ls -l\` faz isso o tempo todo). A senha real fica em outro arquivo, restrito.`,

      `As senhas vivem em /etc/shadow, lido só pelo root. O hash da senha começa com $6$ (SHA-512) ou $y$ (yescrypt, mais novo no Debian 12). Se aparecer "!" na frente do hash, a conta está bloqueada. Se aparecer "*", nunca teve senha (típico de usuário de sistema). Os outros campos do shadow controlam expiração: quantos dias desde que a senha foi trocada, quantos dias até forçar nova troca, quantos dias de aviso antes do bloqueio. Esse mecanismo é o que permite "trocar senha a cada 90 dias" em ambiente corporativo. Nunca edite /etc/shadow direto — use \`passwd\` ou \`chage\`.`,

      `Grupos vivem em /etc/group, com formato parecido: nome, placeholder, GID e lista de membros. Grupos importantes no Debian: sudo (quem pode usar sudo), adm (lê logs em /var/log), audio/video/cdrom (acesso a hardware), netdev (gerencia rede via NetworkManager), plugdev (dispositivos USB removíveis). Cada usuário tem um grupo PRIMÁRIO (o GID em /etc/passwd, geralmente um grupo com seu próprio nome) e pode estar em vários grupos secundários. Ver os seus: \`groups\` ou \`id\`.`,

      `Para criar usuários, o Debian oferece duas escolhas. \`adduser nome\` é o jeito amigável: faz perguntas (senha, nome completo), cria home, copia /etc/skel para inicializar configs, define grupo primário. \`useradd -m nome\` é o jeito cru, padrão de qualquer Linux, sem perguntas e sem invocar scripts pós-criação. Em Debian, prefira sempre o adduser para usuários humanos. Use o useradd em scripts automatizados (Ansible, cloud-init), onde você quer controle exato e nenhuma interação.`,

      `O comando \`usermod\` é onde mora a armadilha mais famosa de Linux. Quando você quer adicionar maria ao grupo sudo, o jeito certo é \`sudo usermod -aG sudo maria\`. O -a (append) é ESSENCIAL: ele acrescenta o grupo aos que ela já tem. Se você esquecer o -a e rodar \`usermod -G sudo maria\`, vai SUBSTITUIR todos os grupos secundários da maria por apenas "sudo". Ela perde audio, video, cdrom, e qualquer outro grupo que tinha. Pior: se você fizer isso consigo mesmo e esquecer de incluir "sudo" na lista, perde o sudo e fica trancado fora. Decore: -a sempre, sem exceção.`,

      `Para apagar usuários, \`userdel nome\` remove a conta mas deixa /home intacto (segurança). Se quer apagar tudo junto, use \`userdel -r nome\`, que remove home, mailbox e jobs do cron. Em servidores, costume profissional é primeiro bloquear (\`passwd -l\`) e só depois de meses, com certeza de que não tem dado importante, executar o delete. Nunca apague o usuário com UID 1000 sem antes confirmar que existe outro admin com sudo — você pode perder acesso administrativo da máquina.`,

      `No dia a dia, gerenciar usuários é raro num desktop pessoal mas constante em servidores. Você cria contas para colegas, adiciona ao grupo sudo se for admin, audita logins com \`last\`, bloqueia contas de quem saiu da empresa. Aprender esses comandos bem agora evita o constrangimento de "como eu adiciono o João sem quebrar nada?". Ao terminar este capítulo, você cria usuários novos, gerencia seus grupos com confiança e investiga "quem fez o quê" usando os logs do sistema.`,
    ],
    commands: [
      {
        command: "adduser",
        description: "Cria usuário no Debian de forma amigável e interativa: pede senha, nome completo, cria home.",
        example: "sudo adduser maria",
        output: "Adicionando usuário 'maria' ...\nAdicionando novo grupo 'maria' (1001) ...\nAdicionando novo usuário 'maria' (1001) com grupo 'maria' ...\nCriando diretório pessoal '/home/maria' ...\nCopiando arquivos de '/etc/skel' ...\nNova senha:",
        flags: [
          { flag: "--system", description: "Cria como usuário de sistema (UID < 1000)" },
          { flag: "--ingroup GRP", description: "Define grupo primário diferente" },
          { flag: "--home /caminho", description: "Define home diferente do /home/nome" },
          { flag: "--shell /bin/zsh", description: "Define shell de login" },
          { flag: "--disabled-password", description: "Cria sem senha (útil para chave SSH)" },
        ],
      },
      {
        command: "useradd",
        description: "Cria usuário no padrão Unix, sem perguntas. Bom para scripts.",
        example: "sudo useradd -m -s /bin/bash -G sudo carlos",
        flags: [
          { flag: "-m", description: "Cria diretório home (padrão é não criar!)" },
          { flag: "-s /bin/bash", description: "Define shell de login" },
          { flag: "-G grupo1,grupo2", description: "Grupos secundários" },
          { flag: "-u 2000", description: "Define UID específico" },
          { flag: "-r", description: "Cria como usuário de sistema" },
        ],
      },
      {
        command: "passwd",
        description: "Define ou troca senha. Sem argumento, troca a sua.",
        example: "sudo passwd maria",
        output: "Nova senha:\nDigite a nova senha novamente:\npasswd: senha atualizada com sucesso",
        flags: [
          { flag: "USUARIO", description: "Trocar senha de outro (precisa root)" },
          { flag: "-l USUARIO", description: "Bloqueia a conta (lock)" },
          { flag: "-u USUARIO", description: "Desbloqueia" },
          { flag: "-d USUARIO", description: "Apaga senha (CUIDADO: login sem senha)" },
          { flag: "-e USUARIO", description: "Expira a senha (força troca no próximo login)" },
          { flag: "-S USUARIO", description: "Mostra status da conta" },
        ],
      },
      {
        command: "usermod",
        description: "Modifica usuário existente: grupos, shell, home, status.",
        example: "sudo usermod -aG sudo maria",
        flags: [
          { flag: "-aG GRUPO", description: "ADICIONA a grupo (-a append, ESSENCIAL)" },
          { flag: "-G g1,g2", description: "SUBSTITUI grupos secundários (sem -a, perigoso)" },
          { flag: "-L", description: "Bloqueia conta (lock)" },
          { flag: "-U", description: "Desbloqueia" },
          { flag: "-s /bin/zsh", description: "Muda shell de login" },
          { flag: "-l NOVO", description: "Renomeia o usuário" },
          { flag: "-d /novo -m", description: "Muda home e move conteúdo" },
          { flag: "-e 2025-12-31", description: "Define data de expiração da conta" },
        ],
      },
      {
        command: "userdel",
        description: "Apaga usuário do sistema.",
        example: "sudo userdel -r maria",
        flags: [
          { flag: "-r", description: "Remove home, mail e arquivos do usuário" },
          { flag: "-f", description: "Força mesmo se logado (perigoso)" },
        ],
      },
      {
        command: "addgroup / groupadd",
        description: "Cria um grupo novo. addgroup é a versão Debian; groupadd é o padrão Unix.",
        example: "sudo addgroup deploy",
        output: "Adicionando grupo 'deploy' (GID 1100) ...\nFeito.",
      },
      {
        command: "gpasswd",
        description: "Adiciona ou remove usuário de um grupo de forma direta.",
        example: "sudo gpasswd -a maria sudo",
        flags: [
          { flag: "-a USUARIO GRUPO", description: "Adiciona usuário ao grupo" },
          { flag: "-d USUARIO GRUPO", description: "Remove usuário do grupo" },
          { flag: "-A USUARIO GRUPO", description: "Define administrador do grupo" },
        ],
      },
      {
        command: "groups",
        description: "Mostra os grupos a que o usuário pertence.",
        example: "groups maria",
        output: "maria : maria sudo audio video plugdev",
      },
      {
        command: "id",
        description: "Mostra UID, GID primário e todos os grupos secundários.",
        example: "id wallyson",
        output: "uid=1000(wallyson) gid=1000(wallyson) grupos=1000(wallyson),27(sudo),24(cdrom),29(audio)",
        flags: [
          { flag: "-u", description: "Só o UID numérico" },
          { flag: "-g", description: "Só o GID primário" },
          { flag: "-Gn", description: "Lista de nomes de grupos" },
        ],
      },
      {
        command: "who",
        description: "Mostra quem está logado no sistema agora.",
        example: "who",
        output: "wallyson tty7         2024-04-25 09:00 (:0)\nmaria    pts/1        2024-04-25 14:23 (192.168.1.50)",
      },
      {
        command: "w",
        description: "Como o who, mas mostra também o que cada usuário está fazendo no momento.",
        example: "w",
        output: " 19:45:01 up 10:32,  2 users,  load average: 0.04, 0.10, 0.12\nUSER     TTY      FROM             LOGIN@   IDLE   WHAT\nwallyson tty7     :0               09:00    ?xdm?  /usr/bin/gnome-shell\nmaria    pts/1    192.168.1.50     14:23    0.00s  vim relatorio.md",
      },
      {
        command: "last",
        description: "Histórico de logins anteriores. Útil para auditoria de servidor.",
        example: "last -10",
        output: "wallyson tty7         :0               Thu Apr 25 09:00   still logged in\nmaria    pts/1        192.168.1.50     Thu Apr 25 14:23   still logged in\nreboot   system boot  6.1.0-18-amd64   Thu Apr 25 08:55   still running",
      },
      {
        command: "lastb",
        description: "Lista tentativas de login que FALHARAM. Em servidor exposto, esse log é cheio.",
        example: "sudo lastb -10",
      },
      {
        command: "chage",
        description: "Change Age: política de expiração de senha por usuário.",
        example: "sudo chage -l maria",
        output: "Última troca de senha: abr 25, 2024\nSenha expira em: nunca\nSenha inativa: nunca\nConta expira em: nunca\nNúmero mínimo de dias entre troca de senha: 0\nNúmero máximo de dias entre troca de senha: 99999",
        flags: [
          { flag: "-l USUARIO", description: "Lista política atual" },
          { flag: "-M 90 USUARIO", description: "Senha expira a cada 90 dias" },
          { flag: "-E 2025-12-31", description: "Conta expira nessa data" },
          { flag: "-d 0 USUARIO", description: "Força troca no próximo login" },
        ],
      },
      {
        command: "newgrp",
        description: "Abre shell com um grupo secundário ativo, sem precisar logout.",
        example: "newgrp deploy",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Sempre use usermod -aG (com -a)",
        content: "Sem o -a, usermod -G sudo maria SUBSTITUI todos os grupos da maria por apenas 'sudo'. Ela perde audio, video, e tudo mais. Se você fizer isso consigo mesmo e esquecer 'sudo' na lista, fica trancado fora do sudo. SEMPRE -aG, sem exceção.",
      },
      {
        type: "warning",
        title: "Mudou de grupo, faça logout/login",
        content: "Adicionar a um grupo só vale ao próximo login. Você pode usar 'newgrp grupo' para abrir shell novo com o grupo ativo, mas isso só vale para essa janela. O caminho mais limpo é deslogar do desktop e entrar de novo.",
      },
      {
        type: "danger",
        title: "Nunca apague o UID 1000 sem ter outro admin",
        content: "O UID 1000 é geralmente seu primeiro usuário humano e único membro do grupo sudo. Apagar ele sem antes criar outro admin com sudo te deixa sem acesso administrativo. Antes de qualquer userdel, confira com 'getent group sudo' quem mais tem sudo.",
      },
      {
        type: "info",
        title: "/etc/skel é o molde da home nova",
        content: "Quando adduser cria um usuário, copia tudo de /etc/skel para o novo /home/nome. Quer que todo usuário novo já tenha um .vimrc ou um .bashrc customizado? Coloque em /etc/skel antes de criar.",
      },
      {
        type: "success",
        title: "getent é o jeito profissional de listar usuários",
        content: "getent passwd lista todos os usuários (incluindo de LDAP/NIS, não só /etc/passwd). getent group sudo lista membros do sudo. É mais robusto que cat /etc/passwd em sistemas integrados a diretório corporativo.",
      },
    ],
    practiceLabs: [
      {
        title: "Criar usuário 'aluno' com senha e dar acesso sudo",
        goal: "Praticar todo o ciclo: criar, dar privilégios, testar e auditar.",
        steps: [
          "Crie o usuário 'aluno' com adduser (responda às perguntas).",
          "Adicione 'aluno' ao grupo sudo com usermod -aG.",
          "Confirme os grupos do aluno com 'groups aluno'.",
          "Vire o usuário aluno com su - aluno e teste sudo whoami.",
          "Saia (exit) e confira a entrada em /etc/passwd com grep.",
        ],
        command: `sudo adduser aluno
sudo usermod -aG sudo aluno
groups aluno
su - aluno
sudo whoami
exit
grep aluno /etc/passwd`,
        expected: `aluno : aluno sudo
root
aluno:x:1001:1001:,,,:/home/aluno:/bin/bash`,
        verify: "groups aluno deve listar 'sudo'. Após su - aluno, sudo whoami deve responder 'root'. /etc/passwd deve ter linha do aluno com home /home/aluno.",
      },
      {
        title: "Auditoria — quem usou sudo recentemente",
        goal: "Aprender comandos de investigação para diagnóstico de incidentes.",
        steps: [
          "Liste quem está logado agora com who e w.",
          "Liste os 10 últimos logins com last -10.",
          "Procure invocações de sudo no /var/log/auth.log.",
          "Procure tentativas de login que falharam.",
          "Veja se tem alguém tentando força bruta no SSH (lastb -20).",
        ],
        command: `who
w
last -10
sudo grep sudo /var/log/auth.log | tail -20
sudo grep "Failed password" /var/log/auth.log | tail -10
sudo lastb -20`,
        verify: "Você deve ver registros datados de cada login e cada uso de sudo. Em servidor exposto à internet, lastb costuma estar lotado de tentativas de root, admin, oracle, etc.",
      },
      {
        title: "Bloquear conta sem apagar dados",
        goal: "Simular o cenário de funcionário que saiu: tirar acesso mas preservar arquivos.",
        steps: [
          "Crie um usuário 'temp' rapidinho.",
          "Bloqueie a conta com passwd -l.",
          "Confira o status com passwd -S.",
          "Tente logar — não vai funcionar.",
          "Eventualmente, apague tudo com userdel -r.",
        ],
        command: `sudo adduser --disabled-password --gecos "" temp
sudo passwd -l temp
sudo passwd -S temp
sudo su - temp -c "echo oi"
sudo userdel -r temp`,
        expected: "temp L 04/25/2024 0 99999 7 -1\nsu: Falha de autenticação",
        verify: "passwd -S mostra L (locked). A tentativa de virar o usuário falha. userdel -r remove home e mailbox limpos.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Onde estão armazenadas as senhas dos usuários no Linux?",
        hint: "Não é em /etc/passwd, apesar do nome.",
        answer: "Em /etc/shadow, com hashes criptografados (SHA-512 ou yescrypt). O arquivo é lido apenas pelo root. /etc/passwd guarda só o nome, UID, home e shell — a coluna de senha vem como 'x' indicando que está em outro lugar.",
      },
      {
        id: 2,
        question: "Como criar o usuário 'maria' no Debian de forma amigável?",
        hint: "Existe um comando que pergunta tudo.",
        answer: "sudo adduser maria. Ele faz as perguntas (senha, nome completo), cria /home/maria, copia /etc/skel e configura o grupo primário, tudo de uma vez. É a forma recomendada no Debian para usuários humanos.",
      },
      {
        id: 3,
        question: "Como adicionar maria ao grupo sudo SEM remover seus grupos atuais?",
        hint: "Tem uma flag de uma letra que faz toda a diferença.",
        answer: "sudo usermod -aG sudo maria. O -a (append) é ESSENCIAL: sem ele, -G substitui todos os grupos secundários por apenas 'sudo'. Decore: -aG sempre, nunca -G sozinho.",
      },
      {
        id: 4,
        question: "Como ver os grupos do usuário atual?",
        hint: "Tem dois comandos curtos que respondem.",
        answer: "groups (sem argumento) ou id. O 'groups' mostra apenas os nomes; o 'id' mostra UID, GID primário e todos os grupos com seus GIDs numéricos.",
      },
      {
        id: 5,
        question: "Como bloquear (sem apagar) a conta de um funcionário que saiu?",
        hint: "Existem duas formas, uma com passwd e outra com usermod.",
        answer: "sudo passwd -l USUARIO (lock) ou sudo usermod -L USUARIO. Ambos colocam '!' na frente do hash da senha em /etc/shadow, impedindo login. Para reverter: passwd -u ou usermod -U. Bloquear primeiro e apagar depois é boa prática profissional.",
      },
      {
        id: 6,
        question: "Qual o range de UID para usuários humanos no Debian?",
        hint: "Existe um número mágico de corte.",
        answer: "UID >= 1000 são humanos. UID 0 é root. UIDs 1 a 999 são contas de sistema (daemons como www-data, postgres, sshd). Esse corte é convenção do Debian, definido em /etc/login.defs (UID_MIN e UID_MAX).",
      },
      {
        id: 7,
        question: "Diferença entre adduser e useradd no Debian?",
        hint: "Um é interativo, o outro é cru.",
        answer: "adduser é o wrapper amigável do Debian: pergunta senha, cria home, copia /etc/skel, configura grupo. useradd é o padrão Unix mais cru: não cria home (a menos que você passe -m), não pede senha. Use adduser para humanos no terminal; use useradd em scripts e provisionamento automático.",
      },
      {
        id: 8,
        question: "Você adicionou maria ao grupo deploy mas ela diz que ainda não tem acesso. Por quê?",
        hint: "A mudança não vale na sessão atual.",
        answer: "Mudanças em grupos só passam a valer no próximo login. Maria precisa fazer logout e login de novo para a sessão dela enxergar o novo grupo. Alternativa imediata: 'newgrp deploy' abre um shell com o grupo já ativo.",
      },
    ],
    references: [
      { title: "Wiki Debian — UserManagement", url: "https://wiki.debian.org/UserManagement" },
      { title: "man adduser (Debian)", url: "https://manpages.debian.org/bookworm/adduser/adduser.8.en.html" },
      { title: "man passwd (Debian)", url: "https://manpages.debian.org/bookworm/passwd/passwd.1.en.html" },
      { title: "Debian Handbook — User and Group Database", url: "https://debian-handbook.info/browse/stable/sect.user-group-databases.html" },
      { title: "man chage (políticas de senha)", url: "https://manpages.debian.org/bookworm/passwd/chage.1.en.html" },
    ],
  },

  {
    id: "sudo",
    title: "sudo e privilégios — Como Virar Root com Segurança",
    icon: "🛡️",
    category: "Permissões e Usuários",
    description: "sudo, su, /etc/sudoers, sudoers.d e como dar permissões granulares sem expor a senha de root.",
    objectives: [
      "Usar sudo no dia a dia sem cair em armadilhas",
      "Diferenciar sudo, su, su - e sudo -i, sabendo quando usar cada um",
      "Editar /etc/sudoers com segurança usando visudo",
      "Configurar permissões granulares em /etc/sudoers.d/",
      "Auditar uso de sudo via /var/log/auth.log",
      "Reconhecer brechas comuns de configuração (NOPASSWD perigosos)",
    ],
    content: [
      `Pense numa empresa onde existe uma única chave-mestra que abre todas as portas: cofre, sala do CEO, almoxarifado, banheiro. Se você anda com essa chave o tempo todo, basta deixar ela cair no chão para o caos começar. A solução de qualquer empresa séria é dar a cada funcionário uma chave que abre só o que ele precisa, e quando excepcionalmente alguém tem que entrar na sala do cofre, registra-se quem entrou, quando e por quê. O sudo é exatamente esse modelo aplicado ao Linux: você trabalha com poderes mínimos no dia a dia e eleva privilégio só quando o trabalho exige, sempre com registro.`,

      `Por que isso importa? Porque trabalhar como root o tempo todo é a porta de entrada para todo tipo de catástrofe. Um \`rm -rf\` digitado errado destrói o sistema inteiro. Um script baixado da internet rodado por engano apaga arquivos de outros usuários. Uma página web maliciosa que explora o navegador ganha acesso completo à máquina, sem você nem perceber. Quando você roda como usuário comum, o pior que acontece é estragar o seu próprio /home — ruim, mas recuperável. Esse é o motivo histórico do sudo: minimizar o "raio de explosão" de qualquer erro.`,

      `Os dois jogadores principais aqui são o sudo e o su. Sudo (Super User Do) executa UM comando como outro usuário, geralmente root, pedindo a SUA senha (não a do root) e cacheando a autorização por 15 minutos. Su (Switch User) é diferente: ele te transforma em outro usuário, abrindo um shell completo, e pede a senha do usuário-destino. A diferença prática é gigante. Com sudo, cada admin tem sua senha pessoal — se um deles é demitido, você desativa só a conta dele. Com su, todo mundo precisa saber a senha do root, e mudar essa senha exige avisar a todos. Em qualquer ambiente moderno, sudo ganha de lavada.`,

      `Existem variações do sudo que confundem no início. \`sudo comando\` roda só esse comando. \`sudo -i\` abre um shell de root completo, como se você tivesse feito login como root direto (PATH, HOME, tudo do root). \`sudo -s\` abre shell de root mas mantém suas variáveis de ambiente. \`sudo -u maria comando\` roda como a usuária maria em vez de root. \`sudo !!\` é o mais querido: re-executa o ÚLTIMO comando que você rodou, agora com sudo (perfeito para quando você esquece o sudo no \`apt update\` e leva o erro). Decorado esses cinco, você cobre 95% dos casos.`,

      `O su também tem nuances. \`su\` sozinho vira root mas mantém suas variáveis (PWD continua onde estava, PATH é o seu). \`su -\` (com hífen) faz login completo como root: muda PATH, muda HOME para /root, lê /root/.bashrc. Em 99% dos casos, você quer o \`su -\`, porque trabalhar com PATH e ambiente do root evita armadilhas. \`su maria\` vira a maria sem hífen, \`su - maria\` vira com login completo. No Debian moderno com sudo configurado, você raramente precisa de su; se precisar, prefira \`sudo -i\` que pede SUA senha em vez da do root.`,

      `Toda configuração do sudo mora em /etc/sudoers e nos arquivos de /etc/sudoers.d/. O formato é simples mas a sintaxe é rigorosa. Linhas típicas: \`%sudo ALL=(ALL:ALL) ALL\` (membros do grupo sudo podem rodar qualquer comando como qualquer usuário). \`root ALL=(ALL:ALL) ALL\` (root pode tudo). \`maria ALL=(root) NOPASSWD: /usr/bin/systemctl restart nginx\` (maria pode reiniciar nginx sem senha). O formato é: USUÁRIO HOSTS=(USUÁRIO_DESTINO) [TAGS:] COMANDOS. Isso parece complicado, mas você raramente vai escrever do zero — copie um exemplo e adapte.`,

      `Aqui mora a regra de ouro: NUNCA edite /etc/sudoers diretamente com nano ou vim. Use SEMPRE \`sudo visudo\`. O visudo abre o editor que você configurou (nano por padrão no Debian), e quando você salva ele VALIDA a sintaxe. Se você cometeu erro, ele recusa salvar e oferece corrigir. Se você editar com nano e cometer erro, salva o arquivo quebrado, o sudo para de funcionar, e como você precisa de sudo para arrumar o sudo... você ficou trancado fora. A recuperação é entrar em modo recovery (single user mode) e editar lá. Mas é horrível. Sempre visudo.`,

      `Para configurações específicas, prefira criar arquivos em /etc/sudoers.d/ em vez de editar o /etc/sudoers principal. Use \`sudo visudo -f /etc/sudoers.d/meu-app\`. Vantagens: arquivos pequenos por contexto (um para deploy, outro para backup, outro para monitoramento), fácil de versionar com git, fácil de remover sem mexer no resto. O Debian carrega tudo de sudoers.d/ automaticamente. Importante: nomes de arquivos não podem ter pontos (não use "deploy.conf", use "deploy"), e o conteúdo segue exatamente a mesma sintaxe do /etc/sudoers.`,

      `As TAGS especiais do sudoers permitem ajustes finos. NOPASSWD: o comando roda sem pedir senha — ótimo para automação CI/CD, mas perigoso se mal usado. PASSWD: força senha (default). SETENV: permite ao usuário passar -E para preservar variáveis de ambiente. NOEXEC: impede o comando de fazer fork de subprocessos (útil contra "shell escape" em editores como vim). A regra de ouro com NOPASSWD: nunca use para comandos genéricos como bash, sh, su, sudo, vim, less, ou para o caractere ALL. Sempre comandos específicos com caminho completo: \`/usr/bin/systemctl restart nginx\`, não \`/usr/bin/systemctl\`. Caso contrário, o usuário escapa para shell root sem senha.`,

      `Cada uso de sudo é registrado em /var/log/auth.log no Debian. As linhas têm formato: \`Apr 25 19:01:02 debian sudo: wallyson : TTY=pts/0 ; PWD=/home/wallyson ; USER=root ; COMMAND=/usr/bin/apt update\`. Isso é ouro para auditoria. Em produção, configure o log para ser enviado a um servidor central (rsyslog ou journald remoto), porque um invasor que consegue root vai querer apagar /var/log/auth.log para esconder rastros. Logs centralizados, fora da máquina comprometida, são a única forma confiável de descobrir o que aconteceu depois de um incidente.`,

      `No dia a dia você vai usar sudo dezenas de vezes para apt, systemctl, edição de arquivos em /etc. Vai esbarrar com "user is not in the sudoers file" quando criar um usuário e esquecer de adicioná-lo ao grupo sudo. Vai aprender a configurar NOPASSWD para automatizar deploys. Ao terminar este capítulo, você usa sudo com fluidez, edita sudoers sem medo de quebrar nada, e configura permissões granulares para serviços e colegas sem dar a chave-mestra.`,
    ],
    commands: [
      {
        command: "sudo",
        description: "SuperUser Do: roda um comando como outro usuário, geralmente root.",
        example: "sudo apt update",
        output: "[sudo] senha para wallyson:\nObter:1 http://deb.debian.org/debian bookworm InRelease\nLeitura das listas de pacotes... Pronto",
        flags: [
          { flag: "-u USUARIO", description: "Roda como outro usuário (default: root)" },
          { flag: "-i", description: "Shell de root com login completo" },
          { flag: "-s", description: "Shell de root preservando suas vars" },
          { flag: "-l", description: "Lista o que VOCÊ pode rodar com sudo" },
          { flag: "-k", description: "Esquece a senha cacheada (vai pedir de novo)" },
          { flag: "-v", description: "Renova o cache de 15 minutos" },
          { flag: "-E", description: "Preserva variáveis de ambiente" },
          { flag: "-b", description: "Roda em background" },
        ],
      },
      {
        command: "sudo !!",
        description: "Re-executa o último comando com sudo. Salvador quando você esqueceu o sudo.",
        example: "apt update\nsudo !!",
        output: "E: Não foi possível abrir arquivo de trava /var/lib/apt/lists/lock - open (13: Permissão negada)\n[sudo] senha para wallyson:\nObter:1 http://deb.debian.org/debian bookworm InRelease",
      },
      {
        command: "sudo -i",
        description: "Abre shell de root completo, como se você tivesse logado como root.",
        example: "sudo -i",
        output: "root@debian:~#",
      },
      {
        command: "sudo -l",
        description: "Lista o que VOCÊ está autorizado a rodar com sudo.",
        example: "sudo -l",
        output: "Entradas padrões para wallyson neste host:\n    env_reset, mail_badpass, secure_path=...\n\nO usuário wallyson pode executar os seguintes comandos neste host:\n    (ALL : ALL) ALL",
      },
      {
        command: "su",
        description: "Switch User: vira outro usuário (default: root) abrindo shell completo.",
        example: "su -",
        output: "Senha:\nroot@debian:~#",
        flags: [
          { flag: "-", description: "Login completo (PATH, HOME, env do destino)" },
          { flag: "USUARIO", description: "Vira USUARIO (default: root)" },
          { flag: "-c 'comando'", description: "Roda só o comando e volta" },
          { flag: "-s /bin/zsh", description: "Usa shell diferente" },
        ],
      },
      {
        command: "visudo",
        description: "Edita /etc/sudoers com VALIDAÇÃO de sintaxe ao salvar.",
        example: "sudo visudo",
        flags: [
          { flag: "-f /etc/sudoers.d/arquivo", description: "Edita arquivo separado em sudoers.d/" },
          { flag: "-c", description: "Apenas valida sintaxe, sem editar" },
          { flag: "-q", description: "Modo silencioso (em scripts)" },
        ],
      },
      {
        command: "sudoedit",
        description: "Edita arquivos protegidos abrindo seu editor sem precisar dar root direto.",
        example: "sudoedit /etc/hosts",
        output: "(abre o editor configurado em $EDITOR com cópia temporária)",
      },
      {
        command: "groups",
        description: "Mostra seus grupos. 'sudo' deve estar lá para você poder usar sudo.",
        example: "groups",
        output: "wallyson sudo cdrom audio video plugdev",
      },
      {
        command: "id -nG",
        description: "Lista nomes dos grupos do usuário atual (alternativa ao groups).",
        example: "id -nG",
        output: "wallyson sudo cdrom audio video plugdev",
      },
      {
        command: "getent group sudo",
        description: "Mostra todos os membros do grupo sudo.",
        example: "getent group sudo",
        output: "sudo:x:27:wallyson,maria",
      },
      {
        command: "sudo -k",
        description: "Esquece a senha cacheada — força a próxima invocação a pedir senha de novo.",
        example: "sudo -k",
      },
      {
        command: "sudo -u www-data comando",
        description: "Roda comando como o usuário do servidor web. Útil para testar permissões.",
        example: "sudo -u www-data ls /var/www/html",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "NUNCA edite /etc/sudoers sem visudo",
        content: "Erro de sintaxe em /etc/sudoers QUEBRA o sudo permanentemente. Sem sudo, você não consegue arrumar o /etc/sudoers (precisaria de root). A recuperação é dar boot em modo recovery (single user) e editar lá. Use SEMPRE 'sudo visudo'. Em emergência, 'sudo visudo -c' valida sintaxe sem editar.",
      },
      {
        type: "danger",
        title: "NOPASSWD para 'bash' ou 'ALL' é brecha total",
        content: "NUNCA escreva NOPASSWD: ALL nem NOPASSWD: /bin/bash ou /usr/bin/sh. Isso permite 'sudo bash' sem senha — o usuário ganha shell root direto, escapando completamente da auditoria. NOPASSWD deve ser SEMPRE para comandos específicos com caminho completo, sem opções genéricas.",
      },
      {
        type: "warning",
        title: "Editores em sudo viram porta de fuga",
        content: "Dar NOPASSWD para vim, less, more ou awk é equivalente a dar shell root: todos esses programas têm comandos para spawn de shell (:!sh no vim, !bash no less). Se precisar editar arquivo protegido, prefira o sudoedit, que abre cópia temporária no seu editor sem dar root.",
      },
      {
        type: "success",
        title: "Use sudoers.d em vez de editar /etc/sudoers",
        content: "Crie '/etc/sudoers.d/deploy' com 'sudo visudo -f /etc/sudoers.d/deploy'. Vantagens: arquivos isolados por contexto, fácil de versionar com git, fácil de remover sem afetar o resto. O Debian carrega sudoers.d/* automaticamente. Importante: nome do arquivo não pode ter ponto.",
      },
      {
        type: "info",
        title: "sudo cacheia por 15 minutos",
        content: "Após digitar a senha uma vez, sudo lembra por 15 minutos no mesmo terminal. Para zerar e forçar nova senha, use 'sudo -k'. Para ajustar o tempo de cache, mexa em 'Defaults timestamp_timeout=N' no sudoers (N em minutos, 0 = sempre pede, -1 = nunca expira).",
      },
      {
        type: "warning",
        title: "sudo apaga seu PATH e variáveis",
        content: "Por padrão, sudo reseta o ambiente (Defaults env_reset). Variáveis como HTTP_PROXY ou PATH customizado somem. Use 'sudo -E comando' para preservar, ou liste explicitamente em 'Defaults env_keep += \"HTTP_PROXY\"'.",
      },
    ],
    practiceLabs: [
      {
        title: "Permitir um usuário reiniciar nginx sem senha",
        goal: "Caso real de DevOps: o usuário 'deploy' precisa reiniciar nginx via script CI/CD sem interação.",
        steps: [
          "Crie um arquivo dedicado em /etc/sudoers.d/ com visudo -f.",
          "Adicione regra NOPASSWD apenas para os comandos exatos de systemctl com nginx.",
          "Salve e confira que o visudo aceitou (sintaxe ok).",
          "Use 'sudo -u deploy sudo -l' para confirmar a regra carregada.",
          "Vire o usuário deploy e rode o reload do nginx, esperando que NÃO peça senha.",
        ],
        command: `sudo visudo -f /etc/sudoers.d/deploy-nginx
# Cole esta linha e salve:
# deploy ALL=(root) NOPASSWD: /usr/bin/systemctl restart nginx, /usr/bin/systemctl reload nginx, /usr/bin/systemctl status nginx

sudo -u deploy sudo -l
sudo su - deploy -c "sudo systemctl reload nginx"`,
        verify: "'sudo -u deploy sudo -l' mostra a regra. Como deploy, 'sudo systemctl reload nginx' executa SEM pedir senha. Tentar 'sudo systemctl restart apache' (não listado) pede senha ou recusa.",
      },
      {
        title: "Auditar uso de sudo nos últimos dias",
        goal: "Saber quem usou sudo, quando e para o quê (essencial em servidor compartilhado).",
        steps: [
          "Liste todas as invocações recentes de sudo no /var/log/auth.log.",
          "Filtre por usuário específico (ex.: maria).",
          "Filtre por comando específico (ex.: apt).",
          "Procure tentativas mal-sucedidas (Wrong password ou not in sudoers).",
        ],
        command: `sudo grep 'sudo:' /var/log/auth.log | tail -20
sudo grep 'sudo:' /var/log/auth.log | grep maria
sudo grep 'sudo:' /var/log/auth.log | grep apt
sudo grep 'sudo:' /var/log/auth.log | grep -E "incorrect password|not in the sudoers"`,
        verify: "Você verá linhas com TTY, PWD, USER e COMMAND. As tentativas falhas aparecem com 'incorrect password attempts' ou 'is not in the sudoers file'.",
      },
      {
        title: "Recuperar acesso com sudo quebrado (simulação segura)",
        goal: "Saber o que fazer no pior cenário: alguém quebrou /etc/sudoers ou removeu seu usuário do grupo sudo.",
        steps: [
          "Em vez de quebrar de verdade, simule: rode 'sudo visudo -c' para ver mensagem de validação.",
          "Veja o que aconteceria com erro: edite uma cópia temporária com sintaxe quebrada e valide.",
          "Aprenda o caminho de recuperação real: boot no GRUB com 'init=/bin/bash', monte / em rw, edite /etc/sudoers.",
          "Documente isso no seu wiki pessoal — você não quer descobrir só na hora do incidente.",
        ],
        command: `sudo visudo -c
echo "linha quebrada sem sintaxe valida" | sudo tee /tmp/sudoers-broken
sudo visudo -c -f /tmp/sudoers-broken
sudo rm /tmp/sudoers-broken`,
        expected: "/etc/sudoers: parsed OK\n/etc/sudoers.d/README: parsed OK\n/tmp/sudoers-broken:1:1: erro de sintaxe",
        verify: "visudo -c retorna 'parsed OK' para arquivos válidos e aponta linha do erro nos quebrados. Caminho real de recuperação: GRUB → 'e' para editar → adicionar 'init=/bin/bash' à linha do kernel → boot → mount -o remount,rw / → editar /etc/sudoers.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Diferença prática entre sudo e su?",
        hint: "Pense em qual senha cada um pede.",
        answer: "sudo executa UM comando como root pedindo a SUA senha; su VIRA root abrindo shell completo e pedindo a senha do ROOT. Sudo é mais seguro porque cada admin tem sua senha pessoal — se alguém sai da empresa, você desativa só essa conta. Com su, todos precisam saber a senha de root.",
      },
      {
        id: 2,
        question: "Você esqueceu o sudo no apt update e levou 'permissão negada'. O que digitar?",
        hint: "Tem um truque com dois pontos de exclamação.",
        answer: "sudo !! — re-executa o último comando com sudo na frente. O bash interpreta '!!' como 'o comando anterior'. Resultado: 'sudo apt update' executado automaticamente.",
      },
      {
        id: 3,
        question: "Por que NUNCA editar /etc/sudoers diretamente com nano?",
        hint: "O que acontece se a sintaxe quebrar?",
        answer: "Erro de sintaxe quebra o sudo permanentemente. E sem sudo, você não consegue arrumar /etc/sudoers (precisaria de root). Use SEMPRE 'sudo visudo': ele valida a sintaxe ao salvar e recusa salvar arquivo quebrado, oferecendo corrigir.",
      },
      {
        id: 4,
        question: "Como ver o que VOCÊ pode rodar com sudo?",
        hint: "Existe uma flag de uma letra.",
        answer: "sudo -l (de list). Mostra todas as regras aplicáveis ao seu usuário, incluindo as que vêm de grupos (como 'sudo'). É a primeira coisa a rodar quando você não sabe o que tem permissão de fazer.",
      },
      {
        id: 5,
        question: "Por que NOPASSWD para 'bash' é uma péssima ideia?",
        hint: "O que o usuário consegue fazer com 'sudo bash'?",
        answer: "Permite 'sudo bash' sem senha — o usuário abre shell de root direto, ignorando totalmente a auditoria e o cacheamento. NOPASSWD deve ser SEMPRE para comandos específicos com caminho completo (ex.: /usr/bin/systemctl restart nginx), nunca para shells, editores (vim, less) ou wildcards.",
      },
      {
        id: 6,
        question: "Como adicionar configuração de sudo sem mexer no /etc/sudoers principal?",
        hint: "Existe uma pasta dedicada.",
        answer: "Crie um arquivo em /etc/sudoers.d/ com 'sudo visudo -f /etc/sudoers.d/nome'. O Debian carrega tudo desse diretório automaticamente. Vantagens: arquivos pequenos por contexto, fácil de versionar e remover. Restrição: nome do arquivo não pode ter ponto.",
      },
      {
        id: 7,
        question: "Diferença entre sudo -i e sudo -s?",
        hint: "Pense em PATH e ambiente.",
        answer: "sudo -i abre shell de root como se fosse login completo: HOME vira /root, PATH é o do root, lê /root/.bashrc. sudo -s abre shell de root mas mantém suas variáveis e seu HOME. Em quase todos os casos, prefira sudo -i para evitar surpresas com PATH e ambiente herdados.",
      },
      {
        id: 8,
        question: "Como editar /etc/hosts (arquivo de root) sem sair do seu ambiente?",
        hint: "Existe um comando dedicado, mais seguro que sudo nano.",
        answer: "sudoedit /etc/hosts (ou 'sudo -e /etc/hosts'). Ele copia o arquivo para /tmp, abre no SEU editor (sem dar root ao processo do editor), e ao salvar copia de volta com permissões corretas. É mais seguro que 'sudo nano' porque o editor não roda como root, evitando escape via :!sh.",
      },
    ],
    references: [
      { title: "Wiki Debian — sudo", url: "https://wiki.debian.org/sudo" },
      { title: "Manual oficial sudoers", url: "https://www.sudo.ws/docs/man/sudoers.man/" },
      { title: "man sudo (Debian)", url: "https://manpages.debian.org/bookworm/sudo/sudo.8.en.html" },
      { title: "man visudo (Debian)", url: "https://manpages.debian.org/bookworm/sudo/visudo.8.en.html" },
      { title: "Debian Handbook — Administrator Privileges", url: "https://debian-handbook.info/browse/stable/sect.administrator-tasks.html" },
    ],
  },
];
