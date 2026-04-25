import { Module } from "@/types/module";

export const permissoesUsuarios: Module[] = [
  {
    id: "permissoes",
    title: "Permissões e Propriedade",
    icon: "🔐",
    category: "Permissões e Usuários",
    description: "Como o Linux protege arquivos: usuário/grupo/outros, leitura/escrita/execução, chmod e chown.",
    objectives: [
      "Ler permissões em formato simbólico (rwxr-xr-x) e octal (755)",
      "Modificar permissões com chmod",
      "Mudar dono e grupo com chown e chgrp",
      "Entender o que é umask e permissões padrão",
    ],
    content: [
      "Cada arquivo no Linux tem três entidades de permissão e três tipos de ação:\n\nEntidades:\n• u (user/owner) — o dono do arquivo\n• g (group) — usuários do mesmo grupo do arquivo\n• o (others) — todo mundo\n\nAções:\n• r (read) — ler conteúdo (cat, ls)\n• w (write) — modificar (editar, deletar conteúdo)\n• x (execute) — executar (se for script/binário) ou ENTRAR (se for diretório)",
      "Quando você roda 'ls -l', vê algo como:\n\n-rw-r--r-- 1 wallyson users 1234 abr 25 18:43 nota.txt\ndrwxr-xr-x 2 wallyson users 4096 abr 25 18:42 documentos/\n\nA primeira coluna são as permissões. Decompondo '-rw-r--r--':\n• Caractere 1 — tipo: '-' arquivo, 'd' diretório, 'l' link, 'b' bloco, 'c' caractere\n• Caracteres 2-4 — permissões do USER (rw-)\n• Caracteres 5-7 — permissões do GROUP (r--)\n• Caracteres 8-10 — permissões dos OTHERS (r--)\n\nResultado: dono pode ler/escrever, grupo só lê, outros só leem.",
      "Notação OCTAL (números) — mais rápida e usada em scripts. Cada permissão tem um valor:\n• r = 4\n• w = 2\n• x = 1\n\nSomar dá o número:\n• 7 = rwx (4+2+1)\n• 6 = rw- (4+2)\n• 5 = r-x (4+1)\n• 4 = r--\n• 0 = ---\n\nPermissão completa = 3 dígitos (user, group, others):\n• 755 = rwxr-xr-x (script executável: dono escreve, todos rodam)\n• 644 = rw-r--r-- (arquivo normal de texto)\n• 600 = rw------- (arquivo privado: só dono lê e escreve, ex: chave SSH)\n• 700 = rwx------ (pasta privada: só dono entra)\n• 777 = rwxrwxrwx (TUDO para todos — quase sempre INSEGURO!)",
      "chmod — change mode. Modifica permissões. Duas sintaxes:\n\nSimbólica (incremental):\nchmod u+x script.sh           dono ganha permissão de executar\nchmod g-w arquivo             grupo perde permissão de escrever\nchmod o=r arquivo             outros têm SOMENTE r\nchmod a+r arquivo             a = all (todos) ganham r\nchmod ug+x script.sh          dono e grupo ganham x\n\nOctal (define tudo de uma vez):\nchmod 755 script.sh           rwxr-xr-x\nchmod 644 arquivo.txt         rw-r--r--\nchmod -R 755 pasta/           recursivo (cuidado em pasta com mistura)",
      "chown — change owner. Muda o DONO de arquivos:\n\nchown wallyson arquivo                    dono = wallyson\nchown wallyson:users arquivo              dono E grupo\nchown :users arquivo                      só grupo\nchown -R wallyson:users pasta/            recursivo (toda a pasta)\n\nchgrp — change group. Só muda o grupo. (chown :users já faz isso, então pouco usado).\n\nÉ comum usar chown depois de copiar arquivos com sudo, para devolver propriedade ao usuário comum:\nsudo chown -R wallyson:wallyson ~/Downloads",
      "Permissões em DIRETÓRIOS funcionam diferente:\n• r — listar conteúdo (ls). Sem r, você não sabe o que tem dentro.\n• w — criar, renomear, apagar arquivos NO diretório. SEM w no diretório, você não consegue apagar arquivo dentro mesmo se tiver permissão no arquivo!\n• x — ENTRAR no diretório (cd). Sem x, você não consegue acessar nada dentro.\n\nPor isso pastas geralmente são 755 (todos podem ENTRAR e LISTAR, só dono modifica) ou 700 (só dono). Sem o x, ls com -la lista o nome mas não consegue ler detalhes.",
      "Permissões especiais (avançado):\n• SUID (4xxx) — quando setado em executável, ele roda com permissão do DONO (não de quem executou). Ex: /usr/bin/passwd tem SUID — qualquer usuário pode mudar a própria senha (que precisa modificar /etc/shadow, dono root).\n• SGID (2xxx) — em executável, roda com grupo do dono. Em diretório, novos arquivos herdam o grupo da pasta.\n• Sticky bit (1xxx) — em diretório (típico em /tmp), apenas o dono do arquivo pode apagá-lo (não outros, mesmo com w).\n\nVer com ls: 's' substitui 'x' no SUID/SGID, 't' substitui 'x' no sticky. Ex: rwsr-xr-x = SUID + 755.",
      "umask — máscara de permissão padrão. Define quais permissões NÃO dar a novos arquivos. Usuário comum: 022 (default). Significa que arquivos novos pegam:\n• Arquivo: 666 - 022 = 644 (rw-r--r--)\n• Diretório: 777 - 022 = 755 (rwxr-xr-x)\n\nVer: comando 'umask'. Mudar temporariamente: 'umask 077' (mais restritivo, só dono). Permanente: edite ~/.bashrc.",
    ],
    commands: [
      {
        command: "ls -l",
        description: "Mostra permissões em formato simbólico.",
        example: "ls -l ~/.ssh",
        output: "drwx------ 2 wallyson wallyson 4096 abr 25 14:00 .\n-rw------- 1 wallyson wallyson 3243 abr 25 14:00 id_rsa\n-rw-r--r-- 1 wallyson wallyson  743 abr 25 14:00 id_rsa.pub",
      },
      {
        command: "stat",
        description: "Detalhes completos de arquivo: permissões em octal e simbólico, datas, inode, etc.",
        example: "stat ~/.bashrc",
        output: "  Arquivo: '/home/wallyson/.bashrc'\n  Acesso: (0644/-rw-r--r--)\n   Uid: ( 1000/wallyson)\n   Gid: ( 1000/wallyson)",
      },
      {
        command: "chmod",
        description: "Muda permissões.",
        example: "chmod 755 script.sh",
        flags: [
          { flag: "u+x", description: "Dono ganha executar" },
          { flag: "g-w", description: "Grupo perde escrever" },
          { flag: "o=r", description: "Outros = só ler" },
          { flag: "a+x", description: "Todos ganham executar" },
          { flag: "-R", description: "Recursivo" },
          { flag: "755", description: "rwxr-xr-x (executável padrão)" },
          { flag: "644", description: "rw-r--r-- (arquivo padrão)" },
          { flag: "600", description: "rw------- (privado, ex: chave SSH)" },
        ],
      },
      {
        command: "chown",
        description: "Muda dono e/ou grupo.",
        example: "sudo chown -R wallyson:wallyson /var/www/meu-site",
        flags: [
          { flag: "user", description: "Só dono" },
          { flag: "user:group", description: "Dono e grupo" },
          { flag: ":group", description: "Só grupo" },
          { flag: "-R", description: "Recursivo" },
        ],
      },
      {
        command: "chgrp",
        description: "Muda só o grupo.",
        example: "sudo chgrp users arquivo.txt",
      },
      {
        command: "umask",
        description: "Mostra/define máscara de permissão padrão.",
        example: "umask",
        output: "0022",
      },
      {
        command: "getfacl / setfacl",
        description: "Permissões avançadas (ACL) — quando precisa de permissão específica para usuário não-dono. Instale: sudo apt install acl.",
        example: "setfacl -m u:maria:rw arquivo.txt",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "chmod 777 quase nunca é a solução",
        content:
          "Quando tutorial diz 'rode chmod 777 para resolver', é sinal que o tutorial está ensinando errado. 777 dá permissão total para QUALQUER usuário — risco de segurança grave. Quase sempre o correto é 755 (executável) ou 644 (arquivo) com chown adequado.",
      },
      {
        type: "info",
        title: "ls -l explicado",
        content:
          "drwxr-xr-x significa: d=diretório, rwx=dono lê/escreve/entra, r-x=grupo lê/entra (não modifica), r-x=outros igual. Pasta padrão segura para colaboração.",
      },
      {
        type: "warning",
        title: "Sem x em diretório, NADA funciona",
        content:
          "Se você fizer 'chmod 644 ~/.ssh' (sem x), depois nem você mesmo consegue 'cd ~/.ssh' nem ler arquivos dentro. Pastas SEMPRE precisam de x para o usuário acessar. Permissão correta para ~/.ssh: 700.",
      },
    ],
    practiceLabs: [
      {
        title: "Configurar permissões corretas para chave SSH",
        goal: "Aprender as permissões esperadas pelo OpenSSH (que recusa chaves com permissão errada).",
        steps: [
          "Crie pasta ~/.ssh se não existir.",
          "Defina permissão 700 nela (só dono entra).",
          "Crie um arquivo de chave fictício.",
          "Defina 600 nele (só dono lê/escreve).",
          "Confirme com ls -l.",
        ],
        command: `# 1) Pasta
mkdir -p ~/.ssh

# 2) Permissao da pasta: 700 (so dono entra)
chmod 700 ~/.ssh

# 3) Arquivo de chave (exemplo)
touch ~/.ssh/teste_key

# 4) Permissao 600 na chave
chmod 600 ~/.ssh/teste_key

# 5) Conferir
ls -ld ~/.ssh
ls -l ~/.ssh/teste_key`,
        expected: `drwx------ 2 wallyson wallyson 4096 abr 25 18:50 /home/wallyson/.ssh
-rw------- 1 wallyson wallyson 0 abr 25 18:50 /home/wallyson/.ssh/teste_key`,
        verify:
          "Permissões devem ser drwx------ na pasta e -rw------- no arquivo. Sem isso, OpenSSH se recusa a usar a chave por segurança.",
      },
      {
        title: "Tornar um script executável",
        goal: "Criar um script bash e dar permissão de execução.",
        steps: [
          "Crie um script com 'hello world'.",
          "Tente executar — vai falhar.",
          "Adicione +x.",
          "Execute novamente.",
        ],
        command: `# 1) Criar script
cat > /tmp/ola.sh << 'EOF'
#!/bin/bash
echo "Ola, $USER!"
EOF

# 2) Tentar executar (FALHA - sem permissao)
/tmp/ola.sh
# Erro esperado: Permission denied

# 3) Adicionar x
chmod +x /tmp/ola.sh

# 4) Executar (FUNCIONA)
/tmp/ola.sh

# 5) Conferir permissoes
ls -l /tmp/ola.sh`,
        expected: 'Ola, wallyson!\n-rwxr-xr-x 1 wallyson wallyson 30 abr 25 18:55 /tmp/ola.sh',
        verify: "Após chmod +x, o script roda e imprime 'Ola, SEU_USUARIO'. As permissões mostram rwxr-xr-x.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que significa rwxr-xr-x em octal?",
        answer: "755 (rwx=7, r-x=5, r-x=5).",
      },
      {
        id: 2,
        question: "Como tornar um script executável?",
        answer: "chmod +x script.sh (ou chmod 755 script.sh).",
      },
      {
        id: 3,
        question: "Qual permissão correta para a pasta ~/.ssh?",
        answer: "700 (drwx------) — só o dono pode entrar. SSH recusa funcionar com permissões mais abertas.",
      },
      {
        id: 4,
        question: "Por que 777 é problemático?",
        answer:
          "Dá permissão TOTAL (rwx) para qualquer usuário do sistema. Vulnerabilidade de segurança grave: outros podem ler chaves, modificar binários, escalar privilégios. Quase sempre o correto é 755 (executável) ou 644 (arquivo).",
      },
      {
        id: 5,
        question: "Como mudar dono de uma pasta inteira?",
        answer: "sudo chown -R novo_dono:novo_grupo /caminho/da/pasta — o -R é recursivo.",
      },
      {
        id: 6,
        question: "O que faz o sticky bit (chmod +t)?",
        answer:
          "Em diretório (típico /tmp), faz com que apenas o dono do arquivo possa apagá-lo. Sem isso, qualquer usuário com w no diretório poderia apagar arquivos de outros.",
      },
    ],
    references: [
      { title: "Wiki Debian — Permissions", url: "https://wiki.debian.org/Permissions" },
      { title: "Calculadora de chmod", url: "https://chmodcommand.com/" },
    ],
  },

  {
    id: "usuarios",
    title: "Gestão de Usuários e Grupos",
    icon: "👥",
    category: "Permissões e Usuários",
    description: "Criar usuários, definir senhas, organizar em grupos e entender /etc/passwd, /etc/shadow, /etc/group.",
    objectives: [
      "Criar e remover usuários (adduser, deluser)",
      "Gerenciar grupos e adicionar usuários a grupos",
      "Definir e expirar senhas",
      "Entender os arquivos /etc/passwd, /etc/shadow, /etc/group",
    ],
    content: [
      "O Linux é multi-usuário desde sua origem. Cada pessoa que usa o sistema tem uma CONTA separada (usuário), com sua própria home (/home/NOME), suas configs (.bashrc), suas permissões. O usuário 'root' é o superusuário — pode tudo, sem perguntar.",
      "Existem dois 'tipos' de usuários:\n• Usuários humanos — você, sua família, colegas. UID >= 1000. Têm shell de login real (/bin/bash) e home em /home/.\n• Usuários de sistema — criados pelos serviços (www-data para Apache, postgres para PostgreSQL, sshd para SSH). UID < 1000. Geralmente sem login (/usr/sbin/nologin) e sem home utilizável.\n\nVer todos os usuários: 'cat /etc/passwd' ou 'cut -d: -f1 /etc/passwd'.",
      "O arquivo /etc/passwd lista todos os usuários, um por linha:\n\nwallyson:x:1000:1000:Wallyson Lopes:/home/wallyson:/bin/bash\n\nFormato (campos separados por :):\n• 1: nome do usuário (wallyson)\n• 2: x — placeholder, senha real está em /etc/shadow\n• 3: UID — User ID numérico (1000 = primeiro usuário humano)\n• 4: GID — Group ID primário\n• 5: GECOS — nome completo, telefone, etc. (opcional)\n• 6: HOME — diretório pessoal\n• 7: SHELL — shell de login (/bin/bash, /bin/zsh, /usr/sbin/nologin)\n\n/etc/passwd é LEGÍVEL por todos. As senhas (criptografadas) ficam em /etc/shadow, lido só pelo root.",
      "/etc/shadow tem um por linha:\n\nwallyson:$6$randomsalt$hashlongo:19437:0:99999:7:::\n\nCampos:\n• 1: usuário\n• 2: senha (hash) — começa com $6$ = SHA-512, $y$ = yescrypt (mais novo). Se '!' = bloqueada, '*' = sem senha\n• 3: data da última troca (dias desde 1970)\n• 4: dias mínimos antes de poder trocar\n• 5: dias máximos (após, força troca)\n• 6: dias de aviso antes de expirar\n• 7: dias após expirar até desabilitar\n• 8: data de expiração da conta (raramente usado)\n\nNUNCA edite /etc/shadow direto. Use 'passwd' ou 'chage'.",
      "Grupos em /etc/group:\n\nsudo:x:27:wallyson,maria\n\nCampos:\n• 1: nome do grupo (sudo)\n• 2: x (placeholder)\n• 3: GID\n• 4: lista de membros (separados por vírgula)\n\nGrupos importantes no Debian:\n• sudo — pode usar sudo (precisa estar nele para administrar)\n• adm — pode ler logs em /var/log\n• cdrom, audio, video, plugdev, netdev — acesso a hardware específico\n• wheel — em algumas distros, equivalente ao sudo (em Debian é o sudo)\n\nVer seus grupos: 'groups' ou 'id'.",
      "Comandos para gerenciar usuários:\n\nadduser nome              cria usuário (interativo: pede senha, GECOS) — RECOMENDADO no Debian\nuseradd -m nome           cria sem perguntar (mais cru, padrão Unix)\npasswd nome               define/troca senha (sem nome = troca a sua)\nusermod -aG grupo nome    adiciona usuário a grupo (-a = append, importante!)\nusermod -L nome           bloqueia conta\nusermod -U nome           desbloqueia\nuserdel nome              apaga usuário (deixa /home)\nuserdel -r nome           apaga + remove /home + mail",
      "Comandos para grupos:\n\naddgroup nome             cria grupo (Debian)\ngroupadd nome             cria grupo (padrão Unix)\ngpasswd -a usuario grupo  adiciona usuario ao grupo\ngpasswd -d usuario grupo  remove usuario do grupo\ngroupdel nome             apaga grupo\n\nAlternar grupos requer logout/login (ou 'newgrp grupo' para abrir shell com grupo ativo).",
      "Expiração e bloqueio de contas (importante em servidores):\n\nchage -l nome             ver políticas de senha do usuário\nchage -E 2025-12-31 nome  conta expira em 31/12/2025\nchage -M 90 nome          senha expira a cada 90 dias\nchage -d 0 nome           força troca de senha no próximo login\npasswd -l nome            bloqueia conta\npasswd -u nome            desbloqueia",
    ],
    commands: [
      {
        command: "adduser",
        description: "Cria usuário (Debian — interativo).",
        example: "sudo adduser maria",
      },
      {
        command: "passwd",
        description: "Define ou troca senha. Sem argumento, troca a sua.",
        example: "passwd",
        flags: [
          { flag: "USUARIO", description: "Trocar senha de outro usuário (root)" },
          { flag: "-l USUARIO", description: "Bloquear conta" },
          { flag: "-u USUARIO", description: "Desbloquear" },
          { flag: "-d USUARIO", description: "Apagar senha (CUIDADO)" },
        ],
      },
      {
        command: "usermod",
        description: "Modifica usuário existente.",
        example: "sudo usermod -aG sudo maria",
        flags: [
          { flag: "-aG GRUPO", description: "Adicionar a grupo (-a = append, ESSENCIAL)" },
          { flag: "-L", description: "Bloquear conta" },
          { flag: "-U", description: "Desbloquear" },
          { flag: "-s /bin/zsh", description: "Mudar shell" },
          { flag: "-l NOVO", description: "Renomear" },
          { flag: "-d /novo/home -m", description: "Mudar home" },
        ],
      },
      {
        command: "userdel",
        description: "Apaga usuário.",
        example: "sudo userdel -r maria",
        flags: [
          { flag: "-r", description: "Remove /home e mail também" },
          { flag: "-f", description: "Força (mesmo se logado)" },
        ],
      },
      {
        command: "groups",
        description: "Mostra grupos do usuário (default: você).",
        example: "groups maria",
        output: "maria : maria sudo audio video",
      },
      {
        command: "id",
        description: "Mostra UID, GID e grupos.",
        example: "id",
        output: "uid=1000(wallyson) gid=1000(wallyson) groups=1000(wallyson),27(sudo),24(cdrom)",
      },
      {
        command: "su",
        description: "Switch User. su - faz login como root (precisa senha de root). su MARIA vira o usuário MARIA.",
        example: "su -",
      },
      {
        command: "who / w",
        description: "Quem está logado AGORA. 'w' mostra também o que estão fazendo.",
        example: "w",
      },
      {
        command: "last",
        description: "Histórico de logins. Útil para auditoria.",
        example: "last -10",
      },
      {
        command: "chage",
        description: "Change Age — política de expiração de senha.",
        example: "sudo chage -l maria",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Sempre use 'usermod -aG' (com -a)",
        content:
          "Sem o -a (append), 'usermod -G grupo usuario' SUBSTITUI todos os grupos do usuário pelo único listado. Se faltar 'sudo' aí, você se trancou fora do sudo. SEMPRE use -aG (append + group).",
      },
      {
        type: "info",
        title: "Mudou de grupo, faz logout/login",
        content:
          "Adicionar usuário a grupo só vale ao próximo login. Você pode forçar abrindo um shell novo com 'newgrp grupo', mas é confuso. Mais simples: logout, login, pronto.",
      },
      {
        type: "danger",
        title: "Nunca apague o usuário 1000 sem pensar",
        content:
          "O usuário com UID 1000 é seu primeiro usuário humano — geralmente o admin do sistema. Apagá-lo (sem ter outro com sudo) pode te trancar fora. Sempre crie outro admin antes de remover algum.",
      },
    ],
    practiceLabs: [
      {
        title: "Criar usuário 'aluno' com senha e dar acesso sudo",
        goal: "Praticar todo o ciclo: criar usuário, dar privilégios, testar.",
        steps: [
          "Crie o usuário 'aluno' com adduser.",
          "Defina senha quando solicitado.",
          "Adicione 'aluno' ao grupo sudo.",
          "Confirme grupos.",
          "Faça login como aluno e teste sudo.",
        ],
        command: `# 1) Criar usuario (interativo - pede senha e GECOS)
sudo adduser aluno

# 2) Adicionar ao sudo (-a APPEND, -G GROUP)
sudo usermod -aG sudo aluno

# 3) Confirmar grupos
groups aluno

# 4) Testar (em outro terminal ou tty):
# Ctrl+Alt+F2 -> login como 'aluno'
# Ou no proprio terminal:
su - aluno
sudo whoami     # deve responder "root"
exit            # volta para seu usuario

# 5) Verificar /etc/passwd
grep aluno /etc/passwd`,
        verify:
          "Após login como aluno, 'sudo whoami' deve retornar 'root'. 'groups aluno' deve listar 'sudo'. /etc/passwd deve ter linha de aluno.",
      },
      {
        title: "Auditoria — quem usou sudo recentemente",
        goal: "Aprender comandos de auditoria de usuários para diagnóstico.",
        steps: [
          "Liste quem está logado agora.",
          "Liste últimos logins.",
          "Procure quem usou sudo nos últimos dias em /var/log/auth.log.",
        ],
        command: `# 1) Quem ta logado agora
who
w

# 2) Ultimos 10 logins
last -10

# 3) Tentativas de sudo no auth.log
sudo grep sudo /var/log/auth.log | tail -20

# 4) Logins falhos
sudo grep "Failed password" /var/log/auth.log | tail -10`,
        verify:
          "Você deve ver registros datados de cada login e cada uso de sudo. Em servidor, esses logs viram trilha de auditoria.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Onde ficam armazenadas as senhas dos usuários?",
        answer:
          "Em /etc/shadow (hashes criptografados, lido só pelo root). /etc/passwd tem só os dados públicos (nome, UID, home, shell) — a senha real ficaria 'x' aí, indicando que está em shadow.",
      },
      {
        id: 2,
        question: "Como criar o usuário 'maria' no Debian?",
        answer: "sudo adduser maria — interativo, pede senha e dados. Cria home automaticamente.",
      },
      {
        id: 3,
        question: "Como adicionar 'maria' ao grupo sudo SEM remover seus grupos atuais?",
        answer: "sudo usermod -aG sudo maria — o -a (append) é ESSENCIAL. Sem ele, substitui todos os grupos pelo único listado.",
      },
      {
        id: 4,
        question: "Como ver os grupos do usuário atual?",
        answer: "groups (sem argumento) ou id.",
      },
      {
        id: 5,
        question: "Como bloquear (sem apagar) a conta de um usuário?",
        answer: "sudo passwd -l USUARIO (lock). Para desbloquear: sudo passwd -u. Outra forma: sudo usermod -L USUARIO.",
      },
      {
        id: 6,
        question: "Qual o range de UID para usuários humanos no Debian?",
        answer: "UID >= 1000 são humanos. UID < 1000 são contas de sistema (root=0, daemons=1-999).",
      },
    ],
    references: [
      { title: "Wiki Debian — UserManagement", url: "https://wiki.debian.org/UserManagement" },
      { title: "man adduser", url: "https://manpages.debian.org/bookworm/adduser/adduser.8.en.html" },
    ],
  },

  {
    id: "sudo",
    title: "sudo e privilégios — Como Virar Root com Segurança",
    icon: "🛡️",
    category: "Permissões e Usuários",
    description: "sudo, su, /etc/sudoers, sudoers.d e como dar permissões granulares sem expor a senha de root.",
    objectives: [
      "Usar sudo corretamente no dia a dia",
      "Diferenciar sudo, su e su -",
      "Editar /etc/sudoers com segurança (visudo)",
      "Configurar permissões granulares (sudo sem senha para comandos específicos)",
    ],
    content: [
      "Por que sudo existe? Porque ninguém deveria estar logado como root o tempo todo. Trabalhar como root é perigoso: um 'rm -rf /' acidental destrói o sistema, malware roda com poderes ilimitados, scripts mal escritos quebram coisas. A regra é: trabalhe como usuário comum, eleve privilégios SOMENTE quando precisar.",
      "sudo = SuperUser DO. Roda UM comando como outro usuário (geralmente root). Sintaxe básica:\n\nsudo COMANDO              roda comando como root\nsudo -u maria COMANDO     roda comando como maria\nsudo -i                   abre shell de root (= su -, mais limpo)\nsudo -s                   abre shell de root preservando suas variáveis\nsudo !!                   re-executa o último comando com sudo (clássico: rodou esquecendo o sudo)\n\nPede SUA senha (não a de root). Cacheia por 15 minutos por padrão — não pede toda hora.",
      "su = Switch User. VIRA outro usuário (não roda comando — abre shell completo).\n\nsu                        vira root, mas mantém suas variáveis (PWD, PATH, HOME)\nsu -                      vira root como se fosse novo login (PATH, env, tudo do root)\nsu maria                  vira maria\nsu - maria                vira maria com login completo\n\nA grande diferença: su pede senha do usuário-destino (root, no caso). sudo pede a SUA senha. Por isso sudo é mais seguro em ambientes multi-usuário — você não revela a senha de root para todo mundo.",
      "No Debian moderno, se você definiu senha de root durante a instalação, o root está habilitado e você usa 'su -' para virá-lo. Se você DEIXOU EM BRANCO, o sudo é configurado para o seu usuário (igual Ubuntu) e o root fica desabilitado para login (mas existe — o sudo eleva você até ele).",
      "Configuração do sudo está em /etc/sudoers. NUNCA edite esse arquivo direto — use 'sudo visudo' (abre vim/nano e VALIDA sintaxe ao salvar). Erro de sintaxe sem visudo = perda permanente do sudo (só recupera no modo recovery).\n\nLinhas importantes do sudoers padrão Debian:\n%sudo   ALL=(ALL:ALL) ALL    \"Membros do grupo sudo podem rodar qualquer comando\"\nroot    ALL=(ALL:ALL) ALL    \"root pode tudo (óbvio)\"",
      "Configurações granulares — em vez de editar /etc/sudoers, prefira criar arquivos em /etc/sudoers.d/ (Debian carrega automaticamente). Use 'sudo visudo -f /etc/sudoers.d/meu-arquivo'. Exemplos práticos:\n\n# Maria pode rodar 'systemctl restart nginx' sem senha\nmaria ALL=(root) NOPASSWD: /usr/bin/systemctl restart nginx\n\n# Carlos pode atualizar pacotes sem senha\ncarlos ALL=(root) NOPASSWD: /usr/bin/apt update, /usr/bin/apt upgrade\n\n# Grupo deploy pode reiniciar serviço\n%deploy ALL=(root) NOPASSWD: /usr/bin/systemctl restart meu-app\n\nFormato: USUARIO HOSTS=(USUARIOS_DESTINO) [TAGS:] COMANDOS",
      "TAGS úteis em sudoers:\n• NOPASSWD — não pede senha\n• PASSWD — pede senha (default)\n• SETENV — permite passar -E (preservar variáveis de ambiente)\n• NOEXEC — proíbe spawn de subprocessos (anti-shell escape)\n\nSEMPRE prefira NOPASSWD para comandos ESPECÍFICOS (um caminho completo) — nunca para comandos como 'bash' ou 'sh' que dão shell root direto.",
      "Sudo tem auditoria: cada uso é logado em /var/log/auth.log. Em produção, monitore isso:\n\nsudo grep -i 'sudo' /var/log/auth.log | tail -20\n\nVerá:\nApr 25 19:01:02 debian sudo: wallyson : TTY=pts/0 ; PWD=/home/wallyson ; USER=root ; COMMAND=/usr/bin/apt update\n\nAtaques tentam apagar /var/log/auth.log para esconder rastros — se você configurar log remoto (rsyslog para servidor central), fica mais difícil.",
    ],
    commands: [
      {
        command: "sudo",
        description: "Roda comando como root (ou outro usuário com -u).",
        example: "sudo apt update",
        flags: [
          { flag: "-u USUARIO", description: "Roda como outro usuário (não root)" },
          { flag: "-i", description: "Shell de root completo" },
          { flag: "-s", description: "Shell de root preservando suas vars" },
          { flag: "-l", description: "Lista o que VOCÊ pode rodar" },
          { flag: "-k", description: "Esquece a senha cacheada (vai pedir de novo)" },
          { flag: "-v", description: "Valida senha (renova cache de 15 min)" },
        ],
      },
      {
        command: "sudo !!",
        description: "Re-executa o último comando com sudo. Para quando você esqueceu o sudo.",
        example: "apt update         # erro: precisa root\nsudo !!           # re-executa: sudo apt update",
      },
      {
        command: "su",
        description: "Switch User. Vira outro usuário.",
        example: "su -",
        flags: [
          { flag: "-", description: "Login completo (PATH, env do destino)" },
          { flag: "USUARIO", description: "Vira USUARIO (default: root)" },
          { flag: "-c 'comando'", description: "Roda só o comando" },
        ],
      },
      {
        command: "visudo",
        description: "Abre /etc/sudoers para edição com VALIDAÇÃO de sintaxe ao salvar.",
        example: "sudo visudo",
        flags: [
          { flag: "-f /etc/sudoers.d/arquivo", description: "Edita arquivo separado (recomendado)" },
          { flag: "-c", description: "Só checa sintaxe (sem editar)" },
        ],
      },
      {
        command: "sudo -l",
        description: "Lista o que VOCÊ está autorizado a rodar.",
        example: "sudo -l",
        output: "User wallyson may run the following commands:\n    (ALL : ALL) ALL",
      },
      {
        command: "groups",
        description: "Mostra seus grupos. 'sudo' deve estar lá para você poder usar sudo.",
        example: "groups",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "NUNCA edite /etc/sudoers sem visudo",
        content:
          "Erro de sintaxe em /etc/sudoers QUEBRA O SUDO permanentemente. Sem sudo, você não consegue ARRUMAR o /etc/sudoers (precisaria de root). Recuperação: dar boot em modo recovery (single user) e editar lá. Use SEMPRE 'sudo visudo'.",
      },
      {
        type: "warning",
        title: "NOPASSWD para comandos genéricos = brecha",
        content:
          "NUNCA dê 'NOPASSWD: ALL' nem para 'bash', 'sh', 'su', 'sudo'. Isso permite escape para shell root sem senha. NOPASSWD deve ser sempre para comandos específicos com caminho completo: NOPASSWD: /usr/bin/apt update.",
      },
      {
        type: "success",
        title: "Use sudoers.d em vez de editar /etc/sudoers",
        content:
          "Crie '/etc/sudoers.d/meu-app' com 'sudo visudo -f /etc/sudoers.d/meu-app'. Vantagens: arquivos pequenos por contexto, fácil de versionar, fácil de remover. O Debian carrega tudo de sudoers.d/ automaticamente.",
      },
    ],
    practiceLabs: [
      {
        title: "Permitir um usuário reiniciar nginx sem senha",
        goal: "Caso real: você quer que o usuário 'deploy' possa reiniciar o nginx via script CI/CD sem precisar de senha interativa.",
        steps: [
          "Crie um arquivo dedicado em /etc/sudoers.d/.",
          "Use visudo -f para garantir sintaxe.",
          "Adicione regra para nginx restart sem senha.",
          "Teste como o usuário em questão.",
        ],
        command: `# 1) Editar com visudo (cria se nao existe)
sudo visudo -f /etc/sudoers.d/deploy-nginx

# 2) Cole esta linha:
# deploy ALL=(root) NOPASSWD: /usr/bin/systemctl restart nginx, /usr/bin/systemctl reload nginx, /usr/bin/systemctl status nginx

# Salve (Ctrl+O Enter Ctrl+X no nano).
# Visudo valida automaticamente.

# 3) Conferir o que deploy pode rodar
sudo -u deploy sudo -l

# 4) Testar (precisa logar como deploy primeiro)
# su - deploy
# sudo systemctl reload nginx
# (deve rodar SEM pedir senha)`,
        verify:
          "Após criar o arquivo, 'sudo -u deploy sudo -l' deve mostrar a regra. Como deploy, 'sudo systemctl reload nginx' não pede senha.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Diferença entre sudo e su?",
        answer:
          "sudo roda UM comando como root, pedindo SUA senha. su VIRA root (abre shell completo) e pede a senha do ROOT. sudo é mais seguro pois você não compartilha a senha de root.",
      },
      {
        id: 2,
        question: "Você esqueceu o sudo. O que fazer?",
        answer: "sudo !! — re-executa o último comando com sudo. Bash interpreta '!!' como 'último comando'.",
      },
      {
        id: 3,
        question: "Por que NUNCA editar /etc/sudoers diretamente?",
        answer:
          "Erro de sintaxe quebra o sudo permanentemente. Use SEMPRE 'sudo visudo' — ele valida sintaxe ao salvar e impede você de salvar arquivo quebrado.",
      },
      {
        id: 4,
        question: "Como ver o que VOCÊ pode rodar com sudo?",
        answer: "sudo -l — lista todas as permissões sudo do seu usuário.",
      },
      {
        id: 5,
        question: "Por que NOPASSWD para 'bash' é uma péssima ideia?",
        answer:
          "Permite 'sudo bash' sem senha — você abre shell de root direto, ignorando totalmente a auditoria. NOPASSWD deve ser SEMPRE para comandos específicos com caminho completo.",
      },
      {
        id: 6,
        question: "Como adicionar configuração sudo sem mexer em /etc/sudoers?",
        answer:
          "Crie um arquivo em /etc/sudoers.d/ com 'sudo visudo -f /etc/sudoers.d/nome'. O Debian carrega tudo de sudoers.d/ automaticamente. Vantagem: isolado, fácil de gerenciar.",
      },
    ],
    references: [
      { title: "Manual sudoers", url: "https://www.sudo.ws/docs/man/sudoers.man/" },
      { title: "Wiki Debian — sudo", url: "https://wiki.debian.org/sudo" },
    ],
  },
];
