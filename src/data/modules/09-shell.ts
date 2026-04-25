import { Module } from "@/types/module";

export const shell: Module[] = [
  {
    id: "pipes-redirecionamento",
    title: "Pipes e Redirecionamento — A Filosofia Unix",
    icon: "🔗",
    category: "Shell e Produtividade",
    description: "|, >, >>, 2>, &> — combine comandos pequenos para fazer coisas grandes.",
    objectives: [
      "Redirecionar stdout, stderr para arquivos",
      "Encadear comandos com pipe (|)",
      "Entender stdin/stdout/stderr (FDs 0, 1, 2)",
      "Usar tee para gravar e mostrar ao mesmo tempo",
    ],
    content: [
      "A filosofia Unix: 'faça uma coisa, faça-a bem, e converse com outros programas via texto'. Cada comando faz pouco. Você COMBINA com pipes (|) para fazer coisas grandes. Aprender pipes muda completamente seu domínio de Linux.",
      "Todo programa tem 3 streams (file descriptors / FDs):\n• 0 — stdin (entrada padrão, geralmente teclado)\n• 1 — stdout (saída padrão, geralmente tela)\n• 2 — stderr (saída de ERRO, também na tela)\n\nVocê pode redirecionar cada um separadamente para arquivos.",
      "Operadores de redirecionamento:\n\ncomando > arquivo            stdout SOBREESCREVE arquivo\ncomando >> arquivo           stdout ANEXA ao arquivo\ncomando 2> erros.log         stderr para arquivo\ncomando > saida.log 2>&1     stdout E stderr para mesmo arquivo\ncomando &> tudo.log          atalho do anterior (Bash)\ncomando < entrada.txt        stdin do arquivo\ncomando << EOF\ntexto\nEOF\n                             heredoc — texto inline como stdin\n\nExemplos práticos:\nls /var/log > lista.txt              salva listagem\nls /naoexiste 2> erros.log           só erros vão para erros.log\nls > /dev/null 2>&1                  descarta tudo (silencia)",
      "Pipe (|) — saída de um vira entrada do próximo:\n\nls -la /var/log | grep '\\.log$'              listagem filtrando .log\nps aux | grep firefox | grep -v grep          processos firefox (sem o próprio grep)\nhistory | tail -20                            últimos 20 do histórico\ndmesg | grep -i usb                           mensagens kernel sobre USB\ncat arquivo.txt | sort | uniq | wc -l         linhas únicas ordenadas\nls -laS /var/ | head -10                      maiores arquivos de /var\n\nVocê pode encadear quantos pipes quiser.",
      "tee — divide a saída: grava em arquivo E continua o pipe:\n\nls -la | tee listagem.txt              mostra E grava\nls | tee -a listagem.txt | wc -l       grava no final E conta\nsudo apt update | tee /var/log/update.log\n\nÚtil quando quer LOGAR mas continuar trabalhando com a saída.",
      "xargs — pega entrada de um pipe e USA como argumentos do próximo comando. Resolve casos onde pipe não funciona naturalmente:\n\nfind . -name '*.tmp' | xargs rm                 apaga todos .tmp encontrados\nls *.jpg | xargs -I {} cp {} /backup/           copia cada um\nps aux | grep firefox | awk '{print $2}' | xargs kill\n\nO -I {} usa {} como placeholder para cada item.",
      "Substituição de comando — pega saída de um comando como string em outro:\n\necho 'Hoje e $(date)'              # $(...) é a forma moderna\necho 'Hoje e `date`'               # backticks (clássico, evite)\n\ncd $(dirname /var/log/syslog)      # cd /var/log\nrm -f $(find /tmp -name '*.tmp')\n\nO ambiente é literalmente substituído pela saída antes do shell executar o comando final.",
      "Combinações úteis do dia a dia:\n\n# Top 10 maiores arquivos em /home\nsudo du -ah /home | sort -rh | head -10\n\n# Top 10 IPs com mais tentativas SSH falhas\nsudo grep 'Failed password' /var/log/auth.log | grep -oE '[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}' | sort | uniq -c | sort -rn | head\n\n# Quantos arquivos .py no projeto\nfind . -name '*.py' | wc -l\n\n# Quantas linhas de código Python (excluindo testes e venv)\nfind . -name '*.py' -not -path '*/venv/*' -not -path '*/test*' | xargs wc -l | tail -1\n\n# Erros de hoje no journal\nsudo journalctl --since today -p err | tee /tmp/erros-hoje.log\n\nA arte é DECOMPOR o problema: 'eu quero X' → 'preciso de A, depois filtrar por B, depois ordenar por C'.",
    ],
    commands: [
      {
        command: ">",
        description: "Redireciona stdout (sobrescreve).",
        example: "ls > listagem.txt",
      },
      {
        command: ">>",
        description: "Redireciona stdout (append).",
        example: "echo nova_linha >> arquivo.txt",
      },
      {
        command: "2>",
        description: "Redireciona stderr.",
        example: "comando 2> erros.log",
      },
      {
        command: "&>",
        description: "stdout + stderr para mesmo lugar (Bash).",
        example: "comando &> tudo.log",
      },
      {
        command: "|",
        description: "Pipe — saída de um vira entrada do próximo.",
        example: "ls | grep .log",
      },
      {
        command: "tee",
        description: "Grava em arquivo E continua o pipe.",
        example: "ls | tee listagem.txt | wc -l",
        flags: [
          { flag: "-a", description: "Append (não sobrescreve)" },
        ],
      },
      {
        command: "xargs",
        description: "Pega input do pipe e usa como argumentos.",
        example: "find . -name '*.tmp' | xargs rm",
        flags: [
          { flag: "-I {}", description: "Usa {} como placeholder" },
          { flag: "-n N", description: "N argumentos por chamada" },
          { flag: "-P N", description: "Paralelo (N processos)" },
        ],
      },
      {
        command: "$(comando)",
        description: "Substituição de comando — usa saída como string.",
        example: "echo 'Hoje: $(date +%d/%m/%Y)'",
      },
      {
        command: "comando < arquivo",
        description: "stdin do arquivo (= cat arquivo | comando).",
        example: "wc -l < /etc/passwd",
      },
      {
        command: "comando << EOF",
        description: "Heredoc — texto inline como stdin.",
        example: "cat << EOF > config.txt\nlinha1\nlinha2\nEOF",
      },
    ],
    tips: [
      {
        type: "info",
        title: "stderr não vai pelo pipe",
        content:
          "'comando | grep' filtra só stdout. Se erros aparecem, é stderr. Para incluí-lo: 'comando 2>&1 | grep' (redireciona stderr para stdout antes do pipe).",
      },
      {
        type: "success",
        title: "/dev/null é amigo",
        content:
          "Para silenciar tudo (output desnecessário em scripts): 'comando > /dev/null 2>&1'. Para só silenciar erros: 'comando 2>/dev/null'. Útil em backgrounds.",
      },
    ],
    practiceLabs: [
      {
        title: "Análise de logs com pipe",
        goal: "Usar pipes para extrair informação útil de logs grandes.",
        steps: [
          "Conte quantas linhas no syslog.",
          "Encontre as 5 mensagens mais frequentes.",
          "Quantos erros nas últimas 24h.",
          "Salve em arquivo para análise.",
        ],
        command: `# 1) Total de linhas
sudo wc -l /var/log/syslog

# 2) 5 mensagens mais frequentes (sem timestamp e PID)
sudo cat /var/log/syslog | awk '{$1=$2=$3=$4=""; print}' | sort | uniq -c | sort -rn | head -5

# 3) Erros nas ultimas 24h
sudo journalctl --since '1 day ago' -p err | wc -l

# 4) Salvar em arquivo
sudo journalctl --since '1 day ago' -p err > ~/erros-24h.log
echo "Salvei $(wc -l < ~/erros-24h.log) erros em ~/erros-24h.log"`,
        verify:
          "Você consegue extrair contagens, padrões mais frequentes e salvar para análise — isso é o dia a dia de quem administra Linux.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que faz '> /dev/null 2>&1'?",
        answer:
          "Descarta TODA a saída (stdout E stderr). Útil em scripts para silenciar comandos que você não quer poluindo logs.",
      },
      {
        id: 2,
        question: "Diferença entre > e >>?",
        answer: "> sobrescreve o arquivo. >> anexa ao final. Use >> para logs (não perde o que estava lá).",
      },
      {
        id: 3,
        question: "Como contar linhas únicas em um arquivo?",
        answer: "sort arquivo | uniq | wc -l (sort primeiro, uniq remove duplicatas adjacentes, wc -l conta).",
      },
      {
        id: 4,
        question: "Como gravar saída de comando em arquivo E continuar vendo na tela?",
        answer: "comando | tee arquivo (ou tee -a para append).",
      },
      {
        id: 5,
        question: "Como apagar todos os arquivos .tmp encontrados pelo find?",
        answer: "find . -name '*.tmp' | xargs rm (ou find . -name '*.tmp' -delete, mais seguro).",
      },
      {
        id: 6,
        question: "Como capturar erros (stderr) em arquivo separado dos sucessos?",
        answer: "comando > saida.log 2> erros.log",
      },
    ],
    references: [
      { title: "Bash redirection guide", url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html" },
      { title: "Filosofia Unix (Wikipedia)", url: "https://en.wikipedia.org/wiki/Unix_philosophy" },
    ],
  },

  {
    id: "shell-scripting",
    title: "Shell Scripting Básico",
    icon: "📜",
    category: "Shell e Produtividade",
    description: "Bash scripts: variáveis, if, for, funções — automatize qualquer coisa que você repete.",
    objectives: [
      "Criar e executar scripts bash",
      "Usar variáveis, condicionais e loops",
      "Receber argumentos da linha de comando",
      "Lidar com erros (set -e, exit codes)",
    ],
    content: [
      "Shell script = arquivo de texto com comandos bash. O Bash interpreta linha por linha. Útil para automatizar TUDO que você faz mais de uma vez. Não é uma 'linguagem de programação' tradicional, mas resolve 80% dos casos de automação.",
      "Anatomia de um script:\n\n#!/bin/bash                          # shebang — diz qual interpretador usar\nset -euo pipefail                    # opções de segurança (recomendadas)\n\n# Comentário\necho 'Olá, mundo!'\n\nDepois:\nchmod +x script.sh                   # tornar executável\n./script.sh                           # rodar\nbash script.sh                        # alternativa (sem precisar de chmod)",
      "set -euo pipefail — as 4 opções essenciais. SEMPRE use:\n• -e — sai imediatamente se algum comando falhar (não continua silenciosamente)\n• -u — erro se variável usada está indefinida (acaba com 'rm -rf $VAR_VAZIA')\n• -o pipefail — erro em pipe se qualquer comando falhar (não só o último)\n\nSem essas opções, seu script pode falhar SILENCIOSAMENTE e continuar.",
      "Variáveis:\n\nNOME='Wallyson'                       # SEM espaços ao redor do =\nDATA=$(date +%Y-%m-%d)               # substituição de comando\nNUMERO=42\n\necho \"Olá, $NOME\"                    # aspas DUPLAS = expande variáveis\necho 'Olá, $NOME'                    # aspas SIMPLES = NÃO expande\necho \"\\${NOME}_backup_\\${DATA}.tar\"    # \\${} resolve nome ambíguo\n\nVariáveis em maiúsculas por convenção. Não há tipos — tudo é string.",
      "Argumentos da linha de comando — passados ao script:\n\n#!/bin/bash\n# script.sh nome idade\n\necho \"Primeiro arg: \\$1\"             # 'nome'\necho \"Segundo arg: \\$2\"              # 'idade'\necho \"Todos: \\$@\"                    # 'nome idade'\necho \"Quantos: \\$#\"                  # 2\necho \"Nome do script: \\$0\"           # './script.sh'\n\nValide:\nif [ -z \"\\$1\" ]; then\n    echo 'Uso: \\$0 NOME IDADE'\n    exit 1\nfi",
      "Condicionais:\n\n# Sintaxe moderna [[ ]] (preferida no bash)\nif [[ -f /etc/hostname ]]; then\n    echo 'arquivo existe'\nelif [[ -d /etc ]]; then\n    echo 'diretorio existe'\nelse\n    echo 'nada'\nfi\n\n# Comparações\n[[ \"\\$NOME\" == 'Wallyson' ]]            # string igual\n[[ \"\\$NOME\" != 'Maria' ]]               # diferente\n[[ \"\\$NUM\" -eq 42 ]]                    # número igual (-eq, -ne, -lt, -gt, -le, -ge)\n[[ -f arquivo ]]                        # arquivo existe (-d dir, -e qualquer, -L link)\n[[ -z \"\\$VAR\" ]]                        # vazia\n[[ -n \"\\$VAR\" ]]                        # não vazia\n[[ \"\\$STR\" =~ ^[0-9]+\\$ ]]              # regex match\n\n# Combinar\n[[ -f arq.txt && -r arq.txt ]]         # AND\n[[ \"\\$X\" == 'a' || \"\\$X\" == 'b' ]]     # OR",
      "Loops:\n\n# for em lista\nfor i in 1 2 3 4 5; do\n    echo \"numero \\$i\"\ndone\n\n# for em arquivos\nfor arq in *.txt; do\n    echo \"processando \\$arq\"\n    cp \"\\$arq\" backup/\ndone\n\n# for numerico (estilo C)\nfor ((i=0; i<10; i++)); do\n    echo \\$i\ndone\n\n# while\ni=0\nwhile [[ \\$i -lt 5 ]]; do\n    echo \\$i\n    i=\\$((i+1))\ndone\n\n# while leitura linha por linha de arquivo\nwhile read linha; do\n    echo \"li: \\$linha\"\ndone < arquivo.txt",
      "Funções:\n\nsaudacao() {\n    local nome=\\$1                        # local: variável só dessa função\n    echo \"Olá, \\$nome!\"\n    return 0                              # exit code (0=sucesso, ≠0=erro)\n}\n\nsaudacao 'Wallyson'\n\n# Capturar saída de função\nresultado=\\$(saudacao 'Maria')\necho \"Resultado: \\$resultado\"\n\nUse 'local' para evitar bagunça com variáveis globais.",
      "Tratamento de erros:\n\n# Verificar se comando existe\nif ! command -v jq &> /dev/null; then\n    echo 'Erro: jq nao instalado. Instale: sudo apt install jq'\n    exit 1\nfi\n\n# Trap — executa ao sair (Ctrl+C, erro, normal)\ntrap 'echo Limpando...; rm -rf /tmp/meu-trabalho' EXIT\n\n# Conferir exit code de comando anterior\nls /naoexiste\nif [[ \\$? -ne 0 ]]; then\n    echo 'ls falhou'\nfi\n\n# Combinar com && e ||\ncomando1 && echo OK || echo FALHOU\nmkdir -p /tmp/dir && cd /tmp/dir",
    ],
    commands: [
      {
        command: "#!/bin/bash",
        description: "Shebang — primeira linha de qualquer script bash.",
        example: "#!/bin/bash\nset -euo pipefail\necho 'olá'",
      },
      {
        command: "chmod +x",
        description: "Torna script executável.",
        example: "chmod +x script.sh && ./script.sh",
      },
      {
        command: "$(comando)",
        description: "Substituição de comando.",
        example: 'HOJE=$(date +%Y-%m-%d)',
      },
      {
        command: "$VAR / ${VAR}",
        description: "Acessa variável. Use ${} quando ambíguo.",
        example: 'echo "${NOME}_backup.tar"',
      },
      {
        command: "if / then / else / fi",
        description: "Condicional.",
        example: 'if [[ -f arquivo ]]; then echo existe; fi',
      },
      {
        command: "for / while",
        description: "Loops.",
        example: 'for f in *.txt; do echo "$f"; done',
      },
      {
        command: "function / return",
        description: "Função.",
        example: 'minha_func() { echo "$1"; return 0; }',
      },
      {
        command: "trap",
        description: "Executa comando ao sair (cleanup).",
        example: "trap 'rm -rf /tmp/temp' EXIT",
      },
      {
        command: "set -euo pipefail",
        description: "Opções de segurança ESSENCIAIS.",
        example: "set -euo pipefail",
      },
      {
        command: "exit N",
        description: "Sai do script com exit code N (0=sucesso, ≠0=erro).",
        example: "exit 1",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Sem 'set -euo pipefail' = bug silencioso",
        content:
          "Sem essas opções, 'cd /naoexiste; rm -rf *' (com cd falhando) APAGA O DIRETÓRIO ATUAL. Com set -e, o script para no cd. Use sempre. Não tem desvantagem.",
      },
      {
        type: "danger",
        title: "Sempre aspas em variáveis: \"$VAR\"",
        content:
          'Sem aspas, "rm -rf $DIR" com $DIR vazio vira "rm -rf " (apaga pwd). E nomes com espaço quebram. SEMPRE: rm -rf "$DIR".',
      },
      {
        type: "success",
        title: "Use shellcheck para validar",
        content:
          "'sudo apt install shellcheck' depois 'shellcheck script.sh'. Encontra TODOS os bugs comuns: sem aspas, condicional errada, exit code não-checado. Use sempre antes de colocar em produção.",
      },
    ],
    practiceLabs: [
      {
        title: "Script de backup com argumentos e validação",
        goal: "Criar script real que recebe pasta como argumento e cria backup .tar.gz.",
        steps: [
          "Crie o arquivo do script.",
          "Implemente: validação de argumento, criação do backup, log.",
          "Torne executável e teste.",
        ],
        command: `# Criar script
cat > ~/scripts/backup.sh << 'BASH_EOF'
#!/bin/bash
set -euo pipefail

# Validar argumento
if [[ \\$# -lt 1 ]]; then
    echo "Uso: \\$0 PASTA"
    echo "Exemplo: \\$0 /home/wallyson/Documentos"
    exit 1
fi

PASTA="\\$1"
DATA=\\$(date +%Y%m%d_%H%M%S)
DESTINO="/tmp/backup_\\$(basename "\\$PASTA")_\\$DATA.tar.gz"
LOG=~/scripts/backup.log

# Validar que pasta existe
if [[ ! -d "\\$PASTA" ]]; then
    echo "Erro: pasta \\$PASTA nao existe"
    exit 2
fi

# Fazer o backup
echo "[\\$(date)] Iniciando backup de \\$PASTA" | tee -a "\\$LOG"
tar -czf "\\$DESTINO" "\\$PASTA" 2>>"\\$LOG"

# Informar tamanho
TAMANHO=\\$(du -h "\\$DESTINO" | cut -f1)
echo "[\\$(date)] OK - \\$DESTINO (\\$TAMANHO)" | tee -a "\\$LOG"

# Limpar backups com mais de 7 dias
find /tmp -name 'backup_*.tar.gz' -mtime +7 -delete
BASH_EOF

chmod +x ~/scripts/backup.sh

# Testar
mkdir -p ~/scripts
~/scripts/backup.sh ~/Documentos

# Conferir
ls -lh /tmp/backup_*.tar.gz
cat ~/scripts/backup.log`,
        verify:
          "Backup é criado em /tmp/. Log mostra entradas datadas. Sem argumento, mostra mensagem de uso. Pasta inexistente, mostra erro.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a primeira linha de qualquer script bash?",
        answer: "#!/bin/bash (shebang).",
      },
      {
        id: 2,
        question: "Por que 'set -euo pipefail' é recomendado?",
        answer:
          "-e sai em erro, -u erro se variável indefinida, -o pipefail erro em pipe. Sem isso, scripts continuam silenciosamente após falhas.",
      },
      {
        id: 3,
        question: "Como receber primeiro argumento da linha de comando?",
        answer: '$1 (segundo é $2, todos $@, quantidade $#).',
      },
      {
        id: 4,
        question: "Diferença entre aspas simples e duplas?",
        answer:
          "Duplas EXPANDEM variáveis: \"olá $NOME\" vira 'olá Wallyson'. Simples NÃO expandem: 'olá $NOME' fica literal.",
      },
      {
        id: 5,
        question: "Como verificar se um arquivo existe?",
        answer: 'if [[ -f arquivo ]]; then echo existe; fi (-f arquivo, -d diretório, -e qualquer).',
      },
      {
        id: 6,
        question: "Ferramenta para validar scripts bash?",
        answer: "shellcheck — sudo apt install shellcheck && shellcheck script.sh.",
      },
    ],
    references: [
      { title: "Bash Reference Manual", url: "https://www.gnu.org/software/bash/manual/" },
      { title: "ShellCheck (validar scripts)", url: "https://www.shellcheck.net/" },
      { title: "Bash Pitfalls (erros comuns)", url: "https://mywiki.wooledge.org/BashPitfalls" },
    ],
  },

  {
    id: "atalhos-produtividade",
    title: "Atalhos e Produtividade no Bash",
    icon: "⚡",
    category: "Shell e Produtividade",
    description: "Aliases, funções úteis no .bashrc, plugins, e atalhos avançados que aceleram seu trabalho.",
    objectives: [
      "Criar aliases permanentes",
      "Personalizar prompt e cores",
      "Usar histórico avançado",
      "Conhecer alternativas modernas (Zsh + Oh My Zsh, fish)",
    ],
    content: [
      "Aliases — atalhos para comandos longos. Definidos no ~/.bashrc:\n\nalias ll='ls -lah'\nalias gs='git status'\nalias ga='git add'\nalias gc='git commit'\nalias gp='git push'\nalias ..='cd ..'\nalias ...='cd ../..'\nalias h='history | grep'\nalias df='df -h'\nalias du='du -h'\nalias rm='rm -i'                    # mais seguro\nalias cp='cp -i'\nalias mv='mv -i'\nalias update='sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y'\nalias myip='curl -s ifconfig.me'\n\nApós editar ~/.bashrc: 'source ~/.bashrc' (ou abra novo terminal).",
      "Funções no ~/.bashrc — para casos onde alias é insuficiente:\n\n# Cria pasta e entra nela\nmkcd() {\n    mkdir -p \"\\$1\" && cd \"\\$1\"\n}\n\n# Extrair qualquer formato de arquivo compactado\nextract() {\n    case \\$1 in\n        *.tar.gz|*.tgz) tar -xzf \"\\$1\" ;;\n        *.tar.bz2)      tar -xjf \"\\$1\" ;;\n        *.zip)          unzip \"\\$1\" ;;\n        *.7z)           7z x \"\\$1\" ;;\n        *)              echo 'Formato não suportado' ;;\n    esac\n}\n\n# Buscar processo pelo nome\npsg() {\n    ps aux | grep -i \"\\$1\" | grep -v grep\n}\n\n# Tamanho de cada subpasta do diretório atual\nsizes() {\n    du -sh ./* 2>/dev/null | sort -h\n}",
      "Personalizar PROMPT (PS1) — cores e info útil. Adicione no ~/.bashrc:\n\n# Prompt colorido com git branch\nparse_git_branch() {\n    git branch 2>/dev/null | grep '*' | sed 's/* //'\n}\n\nexport PS1='\\\\[\\\\e[32m\\\\]\\\\u@\\\\h\\\\[\\\\e[0m\\\\]:\\\\[\\\\e[34m\\\\]\\\\w\\\\[\\\\e[33m\\\\] $(parse_git_branch)\\\\[\\\\e[0m\\\\]\\\\$ '\n\n# Resultado:\n# wallyson@debian:/home/wallyson (main)$\n\nCódigos: \\\\e[32m=verde, [33m=amarelo, [34m=azul, [0m=reset.",
      "Histórico avançado — adicione no ~/.bashrc:\n\nHISTSIZE=10000                     # tamanho em memória\nHISTFILESIZE=20000                  # tamanho no arquivo\nHISTCONTROL=ignoreboth              # ignora duplicados E linhas começando com espaço\nHISTTIMEFORMAT='%F %T '             # mostra timestamp\nshopt -s histappend                 # append em vez de sobrescrever\nPROMPT_COMMAND='history -a'         # salva histórico após cada comando\n\nDepois Ctrl+R fica muito mais útil.",
      "Atalhos AVANÇADOS de bash que valem ouro:\n\nCtrl+R                  buscar histórico (já vimos)\nAlt+.                   inserir último argumento do comando anterior\n!!                      último comando\n!apt                    último comando que começou com 'apt'\n!:gs/old/new            substituir 'old' por 'new' no último comando\n!\\$                     último argumento do comando anterior\nctrl+xe                 abre o comando atual em editor (vim/nano)\nctrl+w                  apaga palavra à esquerda\nctrl+u                  apaga linha toda à esquerda\nesc+t                   troca duas palavras\n\nMemorize 5 desses e seu workflow muda.",
      "Bash não é o único shell. Alternativas modernas:\n• Zsh — superset do Bash com features extras (autocompletion melhor, themes). Padrão no macOS.\n• fish — shell amigável, autocompleta SOZINHO baseado em histórico (mostra em cinza enquanto digita). Sintaxe diferente do Bash.\n\nInstalar Zsh + Oh My Zsh (framework de plugins/themes):\n\nsudo apt install -y zsh\nsh -c \"\\$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\"\nchsh -s \\$(which zsh)              # define como shell padrão\n# Logout/login\n\nVem com 200+ plugins e dezenas de themes prontos. Plugins essenciais: git, sudo, autojump, zsh-syntax-highlighting, zsh-autosuggestions.",
      "Ferramentas que enriquecem o terminal — instale e adore:\n\nsudo apt install -y bat exa fd-find ripgrep fzf zoxide tldr\n\n• bat — cat com syntax highlighting e numeração\n• exa — ls colorido com ícones (instale também 'fonts-firacode')\n• fd-find — find amigável (use 'fdfind' no Debian)\n• ripgrep (rg) — grep mais rápido\n• fzf — fuzzy finder interativo. Aliás Ctrl+R fica magia.\n• zoxide — substitui cd com 'aprende' diretórios mais visitados (z para 'documentos')\n• tldr — manuais práticos\n\nNo .bashrc adicione:\nalias cat='bat'\nalias ls='exa --icons'\nalias find='fd'\nalias grep='rg'\neval \"\\$(zoxide init bash)\"",
    ],
    commands: [
      {
        command: "alias",
        description: "Cria atalho. Sem argumentos, lista todos.",
        example: "alias ll='ls -lah'",
      },
      {
        command: "source ~/.bashrc",
        description: "Recarrega .bashrc no shell atual (sem precisar reabrir terminal).",
        example: "source ~/.bashrc",
      },
      {
        command: "echo $PS1",
        description: "Mostra seu prompt atual.",
        example: "echo $PS1",
      },
      {
        command: "history",
        description: "Histórico (com timestamps se HISTTIMEFORMAT setado).",
        example: "history | tail -20",
      },
      {
        command: "type comando",
        description: "Mostra se comando é alias, função, builtin ou binário.",
        example: "type ls",
      },
      {
        command: "which comando",
        description: "Mostra caminho do binário (não vê aliases).",
        example: "which python3",
      },
      {
        command: "fc -l",
        description: "Lista histórico recente para edição.",
        example: "fc -l -10",
      },
      {
        command: "chsh -s",
        description: "Muda shell padrão.",
        example: "chsh -s $(which zsh)",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Cuidado ao alias rm",
        content:
          "'alias rm=\"rm -i\"' protege você no terminal interativo MAS scripts não pegam aliases, então scripts continuam usando rm sem -i. Não confie só nisso.",
      },
      {
        type: "success",
        title: "fzf + Ctrl+R = magia",
        content:
          "Instale 'sudo apt install fzf' depois '~/.fzf/install'. Apertar Ctrl+R abre busca FUZZY no histórico — digita parte do comando, navega com setas. Vida nova.",
      },
    ],
    practiceLabs: [
      {
        title: "Setup .bashrc produtivo",
        goal: "Aplicar conjunto de aliases e configs úteis no seu .bashrc.",
        steps: [
          "Faça backup do .bashrc atual.",
          "Adicione aliases e configs.",
          "Source para aplicar.",
          "Teste alguns comandos.",
        ],
        command: `# 1) Backup
cp ~/.bashrc ~/.bashrc.bak

# 2) Adicionar configs
cat >> ~/.bashrc << 'EOF'

# === MEUS ATALHOS ===

# Aliases
alias ll='ls -lah'
alias la='ls -A'
alias ..='cd ..'
alias ...='cd ../..'
alias h='history'
alias hg='history | grep'
alias myip='curl -s ifconfig.me; echo'
alias ports='ss -tulpn'
alias update='sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y'
alias df='df -h'
alias du1='du -h --max-depth=1'

# Seguranca
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

# Funcoes
mkcd() { mkdir -p "$1" && cd "$1"; }
psg() { ps aux | grep -i "$1" | grep -v grep; }

# Historico melhor
HISTSIZE=10000
HISTFILESIZE=20000
HISTCONTROL=ignoreboth
HISTTIMEFORMAT='%F %T '
shopt -s histappend

# Prompt com cor
export PS1='\\[\\e[32m\\]\\u@\\h\\[\\e[0m\\]:\\[\\e[34m\\]\\w\\[\\e[0m\\]\\\\$ '

EOF

# 3) Aplicar
source ~/.bashrc

# 4) Testar
ll
mkcd /tmp/teste-mkcd
pwd
cd ~
psg bash
myip`,
        verify:
          "Aliases funcionam (ll mostra listagem detalhada). mkcd cria pasta e entra. Prompt mudou de cor.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como criar um alias que mostra processos do firefox?",
        answer: "alias ff='ps aux | grep firefox' (depois adicione no ~/.bashrc para persistir).",
      },
      {
        id: 2,
        question: "Como aplicar mudanças no ~/.bashrc sem reabrir terminal?",
        answer: "source ~/.bashrc (ou '. ~/.bashrc' que é o mesmo).",
      },
      {
        id: 3,
        question: "Como ver TODOS os aliases definidos?",
        answer: "alias (sem argumentos).",
      },
      {
        id: 4,
        question: "Atalho para inserir o último argumento do comando anterior?",
        answer: "Alt+. (ou !$). Ex: 'mkdir foo' depois 'cd Alt+.' → 'cd foo'.",
      },
      {
        id: 5,
        question: "Como saber se 'ls' que você roda é alias ou binário real?",
        answer: "type ls — mostra se é alias, função, builtin ou binário com caminho.",
      },
      {
        id: 6,
        question: "Shell alternativo popular ao Bash?",
        answer:
          "Zsh (com framework Oh My Zsh para themes/plugins) ou fish (amigável, autocompletion automático).",
      },
    ],
    references: [
      { title: "Oh My Zsh", url: "https://ohmyz.sh/" },
      { title: "bashrc generator", url: "https://bashrcgenerator.com/" },
      { title: "Awesome Shell (lista curada)", url: "https://github.com/alebcay/awesome-shell" },
    ],
  },
];
