import { Module } from "@/types/module";

export const shell: Module[] = [
  {
    id: "pipes-redirecionamento",
    title: "Pipes e Redirecionamento — A Filosofia Unix",
    icon: "🔗",
    category: "Shell e Produtividade",
    description:
      "Combine pequenos comandos com |, >, >>, 2> e tee para resolver problemas grandes — o coração da filosofia Unix.",
    objectives: [
      "Entender stdin, stdout e stderr como três canais distintos (FDs 0, 1 e 2)",
      "Redirecionar saídas para arquivos com >, >>, 2> e &>",
      "Encadear comandos com pipes (|) decompondo problemas em etapas pequenas",
      "Usar tee para gravar e continuar processando ao mesmo tempo",
      "Aplicar xargs e substituição de comandos para conectar saídas a comandos que não leem stdin",
      "Construir pipelines reais para análise de logs, contagem e filtragem",
    ],
    content: [
      "Imagine que você trabalha numa cozinha industrial e precisa preparar um molho elaborado. Você não vai construir uma máquina única que faz tudo — você usa o liquidificador para bater, a peneira para coar, o fogão para reduzir. Cada utensílio faz uma coisa muito bem feita, e você combina os utensílios na ordem certa. Essa é exatamente a filosofia Unix, formulada nos anos 1970 nos laboratórios da Bell por Ken Thompson, Dennis Ritchie e Doug McIlroy: \"escreva programas que façam uma só coisa e façam-na bem; escreva programas para trabalhar em conjunto; escreva programas que manipulem fluxos de texto, porque essa é a interface universal\". Quando você aprende pipes e redirecionamento, deixa de usar o terminal como uma sucessão de comandos isolados e começa a montar pipelines — pequenas linhas de produção que combinam ferramentas existentes para resolver problemas que nenhum programa pronto resolveria sozinho.",
      "Para entender redirecionamento você precisa primeiro engolir uma ideia simples: todo programa em Linux nasce com três canais já abertos. Eles se chamam descritores de arquivo (file descriptors, ou FDs) e recebem números fixos. O FD 0 é o stdin (standard input, entrada padrão) — por onde o programa lê dados, normalmente o teclado. O FD 1 é o stdout (standard output, saída padrão) — por onde o programa escreve resultados normais, normalmente a tela. O FD 2 é o stderr (standard error, saída de erro) — por onde o programa escreve mensagens de erro e diagnóstico, também na tela por padrão. A grande sacada é que esses três canais são separados de propósito: assim você consegue, por exemplo, mandar os erros para um arquivo de log e deixar a saída normal seguir pelo pipeline sem se misturar com mensagens de problema.",
      "Os operadores de redirecionamento são pequenos sinais gráficos que dizem ao shell: \"em vez de mandar isso para a tela, mande para outro lugar\". O operador > pega o stdout e escreve em um arquivo, sobrescrevendo o que estava lá. O >> faz a mesma coisa, mas anexa no final, preservando o conteúdo anterior — ideal para logs que crescem ao longo do tempo. O 2> redireciona apenas o stderr; o 2>&1 diz \"mande o stderr para o mesmo lugar onde o stdout está indo agora\" (o & antes do 1 indica que 1 é um file descriptor, não um arquivo chamado 1). O atalho &> do Bash junta tudo em um arquivo só. E o < faz o caminho contrário: pega o conteúdo de um arquivo e entrega como stdin para o comando.",
      "O pipe (a barra vertical |) é a peça central da orquestração. Ele conecta o stdout de um comando direto no stdin do próximo, sem passar por arquivo nenhum no disco. Por baixo dos panos, o kernel cria um buffer em memória que liga os dois processos: enquanto o primeiro escreve, o segundo já lê. Isso significa que você pode processar arquivos gigantescos sem ocupar espaço extra. Pense no pipe como uma esteira rolante numa linha de montagem: o ls coloca a listagem na esteira, o grep filtra o que interessa, o sort organiza, o head pega só as primeiras linhas. Cada comando faz seu trabalho e passa adiante. O resultado dessa composição é frequentemente mais poderoso (e mais rápido de escrever) do que abrir um editor e programar uma solução do zero.",
      "Uma confusão clássica que pega quase todo iniciante: o pipe transporta APENAS o stdout. Se um comando emite uma mensagem de erro, ela vai para a tela e simplesmente não entra no pipeline. Por isso \"comando_que_falha | grep alguma_coisa\" pode parecer que \"engoliu\" o erro — na verdade o erro saiu pelo FD 2 enquanto o pipe só conectou o FD 1. Quando você precisa que erros também passem pelo pipe (por exemplo, para filtrar mensagens de ferramentas barulhentas), use \"comando 2>&1 | grep ...\". Outra fonte de confusão é a ordem: \"comando > arquivo 2>&1\" funciona, mas \"comando 2>&1 > arquivo\" não — porque o shell processa da esquerda para a direita e o 2>&1 acaba apontando para o destino antigo do FD 1 (a tela), não para o arquivo.",
      "tee é o utensílio para quando você precisa do bolo e da cereja: gravar o resultado em arquivo E continuar processando. O nome vem do encanamento — um \"T\" que divide o fluxo em dois. Você usa quando quer registrar uma operação demorada (uma compilação, uma instalação) em arquivo de log enquanto continua vendo o progresso na tela, ou quando precisa salvar uma etapa intermediária de um pipeline para inspecionar depois sem quebrar a corrente. xargs resolve outro problema: muitos comandos clássicos (rm, cp, mv, kill) não leem nada do stdin — eles esperam argumentos na linha de comando. xargs faz a ponte: lê o stdin, transforma cada linha em argumento e chama o comando que você quiser. Já a substituição de comandos com $(...) faz o caminho oposto: pega a saída de um comando e cola como string dentro de outro, antes do shell executar.",
      "No dia a dia, a arte é decompor o problema em etapas. \"Quero saber quais IPs tentaram entrar por SSH e falharam mais vezes nas últimas 24 horas\" parece um pedido grande, mas vira pipeline natural: pegue o log de autenticação, filtre as linhas de falha, extraia só o IP de cada linha, ordene para juntar repetições, conte ocorrências únicas, ordene pela contagem, mostre os 10 primeiros. Cada etapa é um comando simples; o pipe gruda tudo. Esse método de pensar em camadas é o que separa quem usa Linux como ferramenta de quem usa Linux como caneta — você passa a escrever soluções do tamanho exato do problema.",
      "Ao terminar este capítulo você vai conseguir olhar para um problema do tipo \"preciso descobrir/contar/filtrar X em Y\" e montar um pipeline em segundos, redirecionar erros para o lugar certo, salvar resultados intermediários sem quebrar o fluxo e aproveitar o que outros programas escreveram em vez de reinventar a roda. Você também vai entender por que tanta gente diz que o terminal é mais produtivo que muita interface gráfica: quando você domina pipes, cada nova ferramenta que você instala (jq, awk, ripgrep, fzf...) multiplica o que dá para fazer com tudo o que já tinha.",
    ],
    commands: [
      {
        command: ">",
        description: "Redireciona o stdout para um arquivo, sobrescrevendo o conteúdo anterior.",
        example: "ls /etc > lista-etc.txt",
        output: "(arquivo lista-etc.txt agora contém a listagem de /etc)",
      },
      {
        command: ">>",
        description: "Redireciona o stdout para um arquivo, anexando no final (preserva o que já estava lá).",
        example: "echo \"$(date): backup ok\" >> ~/backup.log",
        output: "(linha adicionada ao final de ~/backup.log)",
      },
      {
        command: "2>",
        description: "Redireciona apenas o stderr (FD 2) para um arquivo.",
        example: "ls /naoexiste 2> erros.log",
        output: "(arquivo erros.log fica com: ls: cannot access '/naoexiste': No such file or directory)",
      },
      {
        command: "2>&1",
        description: "Manda stderr para o mesmo destino do stdout. Sempre vem DEPOIS do redirecionamento de stdout.",
        example: "make build > saida.log 2>&1",
        output: "(saida.log contém saída normal e mensagens de erro misturadas)",
      },
      {
        command: "&>",
        description: "Atalho do Bash que redireciona stdout E stderr juntos para o mesmo arquivo.",
        example: "apt update &> update.log",
      },
      {
        command: "<",
        description: "Redireciona o conteúdo de um arquivo como stdin do comando.",
        example: "wc -l < /etc/passwd",
        output: "47",
      },
      {
        command: "<<EOF",
        description: "Heredoc — envia várias linhas de texto como stdin até encontrar o marcador.",
        example: "cat <<EOF > config.ini\n[main]\ndebug=true\nEOF",
        output: "(arquivo config.ini criado com o conteúdo entre as duas linhas EOF)",
      },
      {
        command: "|",
        description: "Pipe — conecta o stdout do comando da esquerda ao stdin do comando da direita.",
        example: "ps aux | grep ssh",
        output: "root  712  0.0  0.2  ...  /usr/sbin/sshd -D",
      },
      {
        command: "tee",
        description: "Lê stdin, escreve em um (ou mais) arquivos E também no stdout, permitindo continuar o pipe.",
        example: "ls -lh | tee listagem.txt | wc -l",
        output: "12",
        flags: [
          { flag: "-a", description: "Anexa em vez de sobrescrever (append)" },
          { flag: "-i", description: "Ignora o sinal SIGINT (Ctrl+C não interrompe)" },
        ],
      },
      {
        command: "xargs",
        description: "Lê linhas do stdin e usa cada uma como argumento do comando indicado.",
        example: "find . -name '*.tmp' -print0 | xargs -0 rm -v",
        output: "removido './a/b/cache.tmp'\nremovido './x.tmp'",
        flags: [
          { flag: "-I {}", description: "Define {} como placeholder para cada item recebido" },
          { flag: "-0", description: "Usa NUL como separador (combina com find -print0, seguro com espaços)" },
          { flag: "-n N", description: "Passa no máximo N argumentos por chamada do comando" },
          { flag: "-P N", description: "Executa até N processos em paralelo" },
          { flag: "-r", description: "Não roda o comando se a entrada estiver vazia" },
        ],
      },
      {
        command: "$(...)",
        description: "Substituição de comando: o shell troca a expressão pela saída do comando antes de executar.",
        example: "tar -czf backup-$(date +%Y%m%d).tar.gz ~/Documentos",
        output: "(arquivo gerado: backup-20240518.tar.gz)",
      },
      {
        command: "tee /dev/null",
        description: "Truque para descartar a saída e ainda assim manter o pipe funcionando (raro, mas útil).",
        example: "comando | tee /dev/null | wc -l",
      },
      {
        command: "yes",
        description: "Imprime uma string (por padrão 'y') infinitamente. Combina com pipe para responder prompts automaticamente.",
        example: "yes | sudo apt install pacote",
      },
      {
        command: "wc",
        description: "Conta linhas, palavras e caracteres do stdin ou de arquivos.",
        example: "ls /usr/bin | wc -l",
        output: "1832",
        flags: [
          { flag: "-l", description: "Conta apenas linhas" },
          { flag: "-w", description: "Conta apenas palavras" },
          { flag: "-c", description: "Conta apenas bytes" },
        ],
      },
      {
        command: "sort | uniq -c | sort -rn",
        description: "Padrão clássico para contar ocorrências e ordenar das mais frequentes para as menos.",
        example: "cut -d: -f7 /etc/passwd | sort | uniq -c | sort -rn",
        output: "  35 /usr/sbin/nologin\n   8 /bin/bash\n   2 /bin/sh",
      },
    ],
    tips: [
      {
        type: "info",
        title: "stderr não viaja pelo pipe",
        content:
          "O pipe | conecta apenas o stdout. Se um comando barulhento emite mensagens de erro e elas continuam aparecendo na tela mesmo dentro de um pipeline, é porque saíram pelo FD 2. Para incluí-las, escreva 'comando 2>&1 | grep ...' — assim o stderr vira stdout antes de entrar no pipe.",
      },
      {
        type: "success",
        title: "/dev/null é o ralo do sistema",
        content:
          "Tudo que você joga em /dev/null some sem ocupar espaço. 'comando > /dev/null' silencia a saída normal; 'comando 2>/dev/null' silencia só os erros; 'comando &>/dev/null' silencia tudo. Em scripts e jobs de cron, evita lixo no terminal e em logs.",
      },
      {
        type: "warning",
        title: "> sobrescreve sem perguntar",
        content:
          "Se você digitar 'cat arquivo > arquivo' o conteúdo é apagado antes do cat ler — você perde o arquivo. O Bash tem 'set -o noclobber' que recusa sobrescrever arquivos existentes com >; depois disso use >| quando quiser forçar.",
      },
      {
        type: "danger",
        title: "xargs sem -0 quebra com espaços",
        content:
          "Nomes de arquivo com espaços, aspas ou quebras de linha bagunçam pipelines como 'find ... | xargs rm'. Use sempre 'find ... -print0 | xargs -0 rm' ou, melhor ainda, 'find ... -delete'. Já houve incidentes famosos de gente apagando o sistema inteiro por causa disso.",
      },
      {
        type: "info",
        title: "Pipes são paralelos",
        content:
          "Em 'a | b | c', os três processos rodam ao mesmo tempo. O kernel cuida do buffer entre eles. Por isso você consegue processar arquivos enormes (logs de gigabytes) sem precisar carregar tudo na memória de uma vez.",
      },
    ],
    practiceLabs: [
      {
        title: "Análise de tentativas SSH falhas",
        goal:
          "Construir um pipeline que descubra os IPs que mais tentaram entrar no servidor por SSH e falharam, ordenados por frequência.",
        steps: [
          "Localize o log de autenticação. Em Debian costuma ser /var/log/auth.log; em sistemas com journald puro use 'journalctl -u ssh'.",
          "Filtre as linhas que indicam falha de senha com grep 'Failed password'.",
          "Extraia os IPs com grep -oE para pegar o padrão de IPv4 dentro de cada linha.",
          "Ordene as linhas (sort), conte repetidas com uniq -c e ordene pela contagem (sort -rn).",
          "Pegue só os 10 primeiros com head -10 e salve uma cópia para análise futura usando tee.",
        ],
        command: `sudo grep 'Failed password' /var/log/auth.log \\
  | grep -oE '([0-9]{1,3}\\.){3}[0-9]{1,3}' \\
  | sort | uniq -c | sort -rn \\
  | head -10 \\
  | tee ~/ips-suspeitos.txt`,
        expected:
          "Lista com a contagem de tentativas seguida do IP, do mais frequente ao menos. O mesmo conteúdo fica gravado em ~/ips-suspeitos.txt.",
        verify:
          "Rode 'cat ~/ips-suspeitos.txt' e confirme que as linhas estão lá. Se não aparecer nada, é porque seu sistema usa journald puro — substitua a primeira parte por 'sudo journalctl -u ssh --since \"7 days ago\" | grep \"Failed password\"'.",
      },
      {
        title: "Quanto cabe num backup?",
        goal:
          "Descobrir o tamanho total dos arquivos .pdf dentro de ~/Documentos e o nome dos 5 maiores, sem usar nenhuma ferramenta gráfica.",
        steps: [
          "Liste os PDFs com find ~/Documentos -type f -name '*.pdf'.",
          "Calcule o tamanho de cada um com du -h (ou stat) usando xargs para passá-los como argumentos.",
          "Ordene pelo tamanho (sort -h respeita unidades como K, M, G).",
          "Pegue os 5 maiores com tail -5.",
          "Some o total com du -ch ... | tail -1, ou usando awk para somar bytes.",
        ],
        command: `find ~/Documentos -type f -name '*.pdf' -print0 \\
  | xargs -0 du -h 2>/dev/null \\
  | sort -h \\
  | tee /tmp/pdfs.txt \\
  | tail -5`,
        expected:
          "As 5 últimas linhas (os maiores PDFs) aparecem na tela; a lista completa fica em /tmp/pdfs.txt.",
        verify:
          "Rode 'wc -l /tmp/pdfs.txt' para confirmar que tem mais entradas do que as 5 mostradas — é a prova de que o tee dividiu o fluxo corretamente.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que faz, exatamente, a expressão '> /dev/null 2>&1' no fim de um comando?",
        hint: "Pense em quais file descriptors estão sendo manipulados e em ordem.",
        answer:
          "Ela manda o stdout (FD 1) para /dev/null (que é um buraco negro: nada é gravado) e em seguida diz que o stderr (FD 2) deve ir para o mesmo lugar para onde o FD 1 está apontando agora — ou seja, /dev/null também. Resultado: o comando fica completamente silencioso. É comum em scripts e jobs do cron quando você só se interessa pelo exit code, não pela saída.",
      },
      {
        id: 2,
        question: "Diferença prática entre > e >> ao redirecionar para um arquivo de log?",
        hint: "Pense no que acontece se você rodar o mesmo comando duas vezes seguidas.",
        answer:
          "> abre o arquivo em modo truncate: o conteúdo anterior é apagado e o novo é escrito do zero. >> abre em modo append: o novo conteúdo é adicionado ao final, preservando o que já estava lá. Para logs, sempre use >> — caso contrário, cada execução do script destrói o histórico.",
      },
      {
        id: 3,
        question: "Como contar quantas linhas únicas existem em um arquivo, ignorando duplicadas?",
        hint: "uniq só remove duplicadas adjacentes; pense no que precisa vir antes.",
        answer:
          "sort arquivo | uniq | wc -l. O sort garante que linhas iguais fiquem grudadas, o uniq remove as repetições adjacentes e o wc -l conta o resultado. Como atalho, sort -u arquivo | wc -l faz a mesma coisa em um passo.",
      },
      {
        id: 4,
        question: "Você quer salvar a saída de um comando demorado em arquivo MAS continuar vendo o progresso na tela. Como faz?",
        hint: "Existe uma ferramenta que serve exatamente para dividir o fluxo.",
        answer:
          "Use tee: 'comando | tee saida.log'. Se quiser anexar em vez de sobrescrever, 'comando | tee -a saida.log'. Para gravar tanto stdout quanto stderr, redirecione antes: 'comando 2>&1 | tee saida.log'.",
      },
      {
        id: 5,
        question: "Por que 'find . -name \"*.tmp\" | xargs rm' é considerado perigoso e o que usar no lugar?",
        hint: "Pense em arquivos com espaços ou aspas no nome.",
        answer:
          "Por padrão, xargs separa argumentos por espaço em branco. Um arquivo chamado 'meu trabalho.tmp' vira dois argumentos ('meu' e 'trabalho.tmp') e o rm pode acabar apagando coisas erradas. Use 'find . -name \"*.tmp\" -print0 | xargs -0 rm' (que separa por NUL) ou, mais seguro ainda, 'find . -name \"*.tmp\" -delete'.",
      },
      {
        id: 6,
        question: "Como capturar erros (stderr) em um arquivo e a saída normal (stdout) em outro?",
        hint: "Os dois redirecionamentos podem coexistir na mesma linha.",
        answer:
          "comando > saida.log 2> erros.log. Cada FD é redirecionado para um destino diferente. Útil quando você precisa analisar separadamente o que deu certo e o que deu errado, em vez de ter tudo misturado em um log único.",
      },
      {
        id: 7,
        question: "O que faz $(date +%Y-%m-%d) dentro de um comando como 'mkdir backup-$(date +%Y-%m-%d)'?",
        hint: "Substituição de comando: o resultado da expressão é colado antes do shell executar.",
        answer:
          "O shell executa primeiro 'date +%Y-%m-%d' (que devolve algo como 2024-05-18), substitui a expressão $(...) por essa string e só então executa o mkdir. Resultado: a pasta criada se chama 'backup-2024-05-18'. Use sempre $(...) em vez das antigas crases (a forma com acento grave), pois $(...) pode ser aninhado e é mais legível.",
      },
    ],
    references: [
      {
        title: "Bash Reference Manual — Redirections",
        url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html",
        description: "Documentação oficial do Bash com a lista completa de operadores de redirecionamento.",
      },
      {
        title: "The Unix Philosophy (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Unix_philosophy",
        description: "História e princípios da abordagem 'pequenos programas que conversam por texto'.",
      },
      {
        title: "Doug McIlroy — Pioneer of pipes",
        url: "https://www.bell-labs.com/usr/dmr/www/mdmpipe.html",
        description: "Texto curto do criador dos pipes contando como a ideia surgiu nos anos 70.",
      },
      {
        title: "BashGuide — Greg's Wiki",
        url: "https://mywiki.wooledge.org/BashGuide",
        description: "Guia colaborativo amplamente usado para entender o Bash de verdade.",
      },
    ],
  },

  {
    id: "shell-scripting",
    title: "Shell Scripting — Automatize Tudo Que Você Repete",
    icon: "📜",
    category: "Shell e Produtividade",
    description:
      "Variáveis, condicionais, loops, funções e tratamento de erro: transforme tarefas repetitivas em scripts confiáveis.",
    objectives: [
      "Escrever, tornar executável e organizar scripts Bash",
      "Trabalhar com variáveis, parâmetros posicionais e expansões",
      "Usar condicionais com [[ ]] e loops for/while/until",
      "Definir funções, retornar códigos de saída e usar variáveis locais",
      "Aplicar set -euo pipefail e trap para scripts robustos",
      "Diagnosticar erros com bash -x e validar com shellcheck",
    ],
    content: [
      "Pense num script de shell como uma receita de bolo escrita para o computador. Você anota a sequência de comandos que faria à mão no terminal, salva em um arquivo de texto e, daí em diante, em vez de digitar tudo de novo, basta executar a receita. O Bash lê linha por linha e age como se você estivesse digitando. Essa simplicidade é o que torna o shell scripting tão poderoso: não há mágica, não há servidor, não há ambiente especial — qualquer comando que funciona no terminal funciona no script. É a forma mais barata e direta de automatizar qualquer tarefa repetitiva, do backup diário até a configuração de um servidor inteiro.",
      "O shell script existe para resolver um problema universal: humanos cansam, esquecem e erram. Se você precisa rodar a mesma sequência de cinco comandos toda segunda-feira, na terceira semana algo vai sair errado — uma flag esquecida, uma ordem invertida, um arquivo digitado errado. O script congela a sequência correta para sempre. Além disso, ele documenta: quando alguém olha o script, vê exatamente o que acontece. Por isso administradores experientes têm a regra dos três: \"se eu fiz duas vezes manualmente, na terceira vira script\". É um investimento de minutos que economiza horas pela vida toda.",
      "Antes de escrever, é importante entender o vocabulário. O shebang é a primeira linha que começa com #! e diz ao kernel qual interpretador usar — \"#!/bin/bash\" significa \"execute este arquivo passando o conteúdo para o /bin/bash\". As variáveis guardam valores e se atribuem com NOME=valor SEM espaços ao redor do igual (Bash é exigente nisso). Para usar o valor, prefixe com $: NOME ou ${NOME}. Os parâmetros posicionais $1, $2, $3... contêm os argumentos passados na linha de comando; $0 é o nome do script; $# é a quantidade de argumentos; $@ são todos eles; $? é o exit code do último comando. Exit code 0 significa sucesso, qualquer outro número significa algum tipo de falha.",
      "Quando o script roda, o Bash percorre o arquivo de cima para baixo, expandindo variáveis, substituindo $(...) pela saída dos comandos, montando os argumentos finais e executando. Cada comando devolve um exit code. Estruturas como if e while olham para esse exit code para decidir o caminho — \"if comando; then ...\" significa \"se o comando devolveu 0, faça\". Por baixo de [[ ... ]] está um teste que devolve 0 quando a condição é verdadeira. Esse modelo unificado (tudo é exit code) é o que permite combinar comandos com && (executa o segundo se o primeiro deu certo) e || (executa o segundo se o primeiro falhou).",
      "Existem armadilhas que merecem atenção desde o primeiro script. A maior delas é o tratamento de variáveis sem aspas. Se você escreve 'rm -rf $DIR' e por algum motivo $DIR está vazia, o comando vira 'rm -rf' — sem argumento, sem efeito. Mas se $DIR contém '/ tmp' (com espaço), vira 'rm -rf / tmp' e apaga a raiz. SEMPRE coloque variáveis entre aspas duplas: 'rm -rf \"$DIR\"'. Outra armadilha: por padrão, o Bash continua rodando depois que um comando falha. 'cd /naoexiste; rm -rf *' executa o rm mesmo que o cd tenha falhado, e o rm acontece no diretório atual. A solução é começar todo script com 'set -euo pipefail' — quatro letras que mudam o jogo (e que veremos em detalhe mais adiante).",
      "Confusão comum: aspas simples vs aspas duplas. Dentro de aspas SIMPLES, o Bash não interpreta nada — '$NOME' fica literal, com cifrão e tudo. Dentro de aspas DUPLAS, o Bash expande variáveis e $(...) — \"$NOME\" vira o valor. Use simples para texto literal (mensagens, padrões de regex) e duplas quando precisar interpolar. Outra: '$VAR' funciona mas '${VAR}' é mais explícito quando o nome é ambíguo, por exemplo \"${NOME}_backup.tar\" — sem as chaves o Bash tentaria expandir uma variável chamada NOME_backup. Mais uma: condicionais antigas usam [ ... ] (com espaços obrigatórios e regras estranhas com expansão); o moderno [[ ... ]] é específico do Bash, mais seguro e suporta regex com =~ e padrões com ==. Use [[ sempre que puder.",
      "As estruturas de controle do Bash são poucas mas suficientes. O if/elif/else/fi para decisões; o for para iterar sobre listas (palavras separadas por espaço, arquivos via glob *.txt, sequências como {1..10}); o while/do/done para repetir enquanto uma condição é verdadeira; o case para comparar uma variável contra padrões (mais limpo que vários elif). Funções se declaram como 'nome() { ... }' e são chamadas como qualquer comando, com argumentos acessíveis via $1, $2 dentro do corpo. Use 'local nome=valor' dentro da função para evitar que a variável vaze para o resto do script — sem isso, toda variável é global por padrão, o que vira um pesadelo em scripts maiores.",
      "Onde isso aparece no dia a dia? Em quase tudo. O script de backup que sobe para a nuvem toda noite. O cron job que rotaciona logs. O Makefile que compila um projeto. O entrypoint de um container Docker. A automação que provisiona um servidor novo. As rotinas de CI/CD que rodam testes antes de cada commit. Aprender a escrever scripts Bash é aprender a falar a língua nativa do Unix — não é à toa que distribuições inteiras (incluindo o próprio processo de boot do Debian, scripts em /etc/init.d) são em shell. Você não precisa virar um wizard de scripting, mas precisa ser fluente o suficiente para escrever 50 linhas seguras quando o problema pede.",
      "Ao terminar este capítulo, você vai conseguir transformar uma sequência manual em script executável, validar argumentos antes de causar dano, encadear decisões com if e loops, encapsular pedaços em funções reutilizáveis, capturar erros e limpar arquivos temporários com trap, e usar set -euo pipefail para que o script falhe alto e cedo em vez de seguir silenciosamente até o desastre. Mais importante: vai começar a ENXERGAR oportunidades de automação que antes passavam despercebidas — cada repetição vira candidata a script.",
    ],
    commands: [
      {
        command: "#!/bin/bash",
        description: "Shebang — primeira linha do script. Diz ao kernel qual interpretador deve rodar o arquivo.",
        example: "#!/bin/bash\nset -euo pipefail\necho 'olá, mundo'",
      },
      {
        command: "chmod +x",
        description: "Marca o arquivo como executável (adiciona o bit x). Sem isso, ./script.sh dá Permission denied.",
        example: "chmod +x ~/scripts/backup.sh && ~/scripts/backup.sh",
      },
      {
        command: "set -euo pipefail",
        description:
          "Liga modo seguro: -e sai no primeiro erro, -u erro se variável não definida, -o pipefail propaga erro de qualquer comando do pipe.",
        example: "set -euo pipefail",
      },
      {
        command: "VAR=valor",
        description:
          "Atribuição de variável. SEM espaços ao redor do =. Para acessar use $VAR ou ${VAR} quando ambíguo.",
        example: "NOME='Ana'\necho \"Olá, $NOME\"",
        output: "Olá, Ana",
      },
      {
        command: "$1, $2, $@, $#",
        description: "Argumentos posicionais: $1 é o primeiro, $@ são todos como lista, $# é a quantidade.",
        example: "echo \"Recebi $# argumentos: $@\"",
      },
      {
        command: "if [[ ... ]]; then ... fi",
        description: "Condicional moderno. Use [[ ]] (Bash) em vez de [ ] sempre que possível.",
        example: "if [[ -f /etc/hostname ]]; then echo 'arquivo existe'; fi",
        output: "arquivo existe",
      },
      {
        command: "for var in lista; do ... done",
        description: "Loop sobre lista de palavras, glob de arquivos ou sequência {1..N}.",
        example: "for arq in *.txt; do wc -l \"$arq\"; done",
      },
      {
        command: "while comando; do ... done",
        description: "Loop enquanto o comando devolver exit code 0. Combina com 'read' para ler arquivos linha a linha.",
        example: "while read linha; do echo \"li: $linha\"; done < arquivo.txt",
      },
      {
        command: "case",
        description: "Compara uma variável contra padrões. Mais limpo que múltiplos elif.",
        example:
          "case \"$1\" in\n  start) echo iniciando ;;\n  stop)  echo parando ;;\n  *)     echo \"uso: $0 {start|stop}\" ;;\nesac",
      },
      {
        command: "function() { ... }",
        description: "Define função. Argumentos chegam em $1, $2... Use 'local var=...' para evitar variáveis globais.",
        example: "saudar() {\n  local nome=\"$1\"\n  echo \"Olá, $nome\"\n}\nsaudar 'Wallyson'",
        output: "Olá, Wallyson",
      },
      {
        command: "trap 'cmd' SIGNAL",
        description:
          "Registra um comando para rodar quando o script recebe um sinal. EXIT roda sempre na saída — ótimo para limpeza.",
        example: "trap 'rm -rf /tmp/meu-tmp' EXIT",
      },
      {
        command: "exit N",
        description: "Encerra o script com exit code N. 0 é sucesso, 1-255 são variantes de erro.",
        example: "[[ -d /etc ]] || exit 1",
      },
      {
        command: "command -v cmd",
        description: "Verifica se um comando está instalado. Devolve 0 (existe) ou 1 (não existe).",
        example: "command -v jq >/dev/null || { echo 'instale jq'; exit 1; }",
      },
      {
        command: "read -rp 'prompt: ' VAR",
        description: "Lê uma linha do stdin para a variável. -r evita interpretação de \\, -p mostra prompt.",
        example: "read -rp 'Confirma? [s/N]: ' RESP\n[[ \"$RESP\" == 's' ]] || exit 0",
      },
      {
        command: "bash -x script.sh",
        description: "Executa o script em modo debug, mostrando cada comando expandido antes de rodar.",
        example: "bash -x ./meu-script.sh",
        output: "+ NOME=Ana\n+ echo 'Olá, Ana'\nOlá, Ana",
      },
      {
        command: "shellcheck",
        description: "Linter oficial para scripts shell. Aponta erros, más práticas e quoting suspeito.",
        example: "shellcheck script.sh",
      },
      {
        command: "$((...))",
        description: "Aritmética inteira. Mais legível e seguro que a antiga sintaxe expr.",
        example: "i=0\ni=$((i + 1))\necho $i",
        output: "1",
      },
      {
        command: "$(<arquivo)",
        description: "Forma rápida (e portátil em Bash) de ler o conteúdo inteiro de um arquivo para uma variável.",
        example: "TXT=$(<README.md)\necho \"${#TXT} caracteres lidos\"",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Sem set -euo pipefail = bug silencioso",
        content:
          "Por padrão o Bash continua executando comandos mesmo depois de falhas. 'cd /naoexiste; rm -rf *' apaga o diretório atual quando o cd falha. Com 'set -e' o script para no cd. Não há desvantagem real em usar — adquira o hábito.",
      },
      {
        type: "danger",
        title: "Sempre aspas em variáveis",
        content:
          "Sem aspas, 'rm -rf $DIR' com $DIR vazio vira 'rm -rf' (sem efeito) ou, pior, com espaços vira algo destrutivo. Nomes com espaço também quebram. SEMPRE: rm -rf \"$DIR\". O shellcheck pega isso para você.",
      },
      {
        type: "success",
        title: "shellcheck antes de produção",
        content:
          "'sudo apt install shellcheck' e depois 'shellcheck script.sh'. Encontra praticamente todos os erros comuns: aspas faltando, comparação errada, variável usada sem ter sido definida, exit code ignorado. Use sempre antes de colocar em cron ou em produção.",
      },
      {
        type: "info",
        title: "Use [[ em vez de [",
        content:
          "[[ ... ]] é uma construção do Bash mais segura: aceita == com glob, =~ com regex, && e || dentro, e não estoura quando uma variável está vazia. O [ ... ] tradicional ainda funciona, mas em scripts novos prefira [[.",
      },
      {
        type: "warning",
        title: "trap EXIT é seu amigo",
        content:
          "Se o script cria arquivos temporários, registre 'trap \"rm -rf $TMPDIR\" EXIT' logo no início. Isso garante limpeza mesmo se o script falhar no meio ou for interrompido com Ctrl+C.",
      },
      {
        type: "info",
        title: "Bash debug com -x",
        content:
          "Se um script está fazendo coisa errada e você não sabe onde, rode com 'bash -x script.sh'. Cada linha aparece com + na frente, mostrando como ficou depois das expansões. É o jeito mais rápido de ver o que o Bash realmente está executando.",
      },
    ],
    practiceLabs: [
      {
        title: "Script de backup com argumentos, log e rotação",
        goal:
          "Escrever um script que recebe uma pasta, gera um backup .tar.gz datado em /tmp, registra a operação em um log e remove backups com mais de 7 dias.",
        steps: [
          "Crie a pasta ~/scripts e abra um novo arquivo backup.sh com seu editor preferido.",
          "Adicione o shebang #!/bin/bash e ative set -euo pipefail.",
          "Valide que recebeu pelo menos 1 argumento e que ele é uma pasta existente; senão, mostre uso e saia com exit code diferente de 0.",
          "Defina variáveis para a pasta de origem, a data atual, o destino do backup e o caminho do log.",
          "Rode tar -czf no destino, redirecionando stderr para o log com >>.",
          "Calcule o tamanho do backup com du -h e registre uma linha no log usando tee -a.",
          "Use find para apagar backups com mais de 7 dias.",
          "Torne executável com chmod +x e teste com uma pasta válida e com argumentos errados.",
        ],
        command: `mkdir -p ~/scripts
cat > ~/scripts/backup.sh << 'BASH_EOF'
#!/bin/bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Uso: $0 PASTA"
  echo "Exemplo: $0 ~/Documentos"
  exit 1
fi

PASTA="$1"
if [[ ! -d "$PASTA" ]]; then
  echo "Erro: '$PASTA' não é uma pasta válida"
  exit 2
fi

DATA=$(date +%Y%m%d_%H%M%S)
NOME=$(basename "$PASTA")
DESTINO="/tmp/backup_\${NOME}_\${DATA}.tar.gz"
LOG="$HOME/scripts/backup.log"

echo "[$(date '+%F %T')] iniciando backup de $PASTA" | tee -a "$LOG"
tar -czf "$DESTINO" -C "$(dirname "$PASTA")" "$NOME" 2>>"$LOG"
TAMANHO=$(du -h "$DESTINO" | cut -f1)
echo "[$(date '+%F %T')] OK $DESTINO ($TAMANHO)" | tee -a "$LOG"

find /tmp -maxdepth 1 -name 'backup_*.tar.gz' -mtime +7 -delete
BASH_EOF
chmod +x ~/scripts/backup.sh
~/scripts/backup.sh ~/Documentos`,
        expected:
          "Mensagens de início e fim no terminal, arquivo backup_*.tar.gz em /tmp e linhas correspondentes em ~/scripts/backup.log.",
        verify:
          "Rode 'ls -lh /tmp/backup_*.tar.gz' para ver o arquivo e 'tail ~/scripts/backup.log' para conferir o registro. Teste também rodando sem argumento (deve mostrar a mensagem de uso) e com uma pasta inexistente (deve sair com erro).",
      },
      {
        title: "Diagnóstico interativo do sistema",
        goal:
          "Construir um script que mostra um menu (case) e executa diferentes diagnósticos conforme a escolha do usuário.",
        steps: [
          "Crie ~/scripts/diag.sh com shebang e set -euo pipefail.",
          "Mostre um menu numerado com echo e use read para capturar a opção do usuário.",
          "Use case para tratar 1 (uso de disco com df -h), 2 (memória com free -h), 3 (top 5 processos por CPU) e 4 (sair).",
          "Inclua a opção *) para mensagens de erro de opção inválida.",
          "Coloque tudo em um while true para permitir várias consultas seguidas até o usuário escolher sair.",
        ],
        command: `cat > ~/scripts/diag.sh << 'BASH_EOF'
#!/bin/bash
set -euo pipefail

while true; do
  echo
  echo "=== diagnóstico do sistema ==="
  echo "1) disco"
  echo "2) memória"
  echo "3) top 5 processos por CPU"
  echo "4) sair"
  read -rp "escolha: " OP
  case "$OP" in
    1) df -h ;;
    2) free -h ;;
    3) ps -eo pid,comm,%cpu --sort=-%cpu | head -6 ;;
    4) echo "tchau"; exit 0 ;;
    *) echo "opção inválida" ;;
  esac
done
BASH_EOF
chmod +x ~/scripts/diag.sh
~/scripts/diag.sh`,
        expected: "Menu aparece, cada opção mostra a informação correspondente, opção 4 encerra o script.",
        verify:
          "Teste todas as opções, inclusive uma inválida (digite 99 e veja a mensagem). Rode também 'shellcheck ~/scripts/diag.sh' para confirmar que está limpo.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a função do shebang #!/bin/bash e o que acontece se você esquecê-lo?",
        hint: "Pense em como o kernel decide qual programa rodar quando você executa o arquivo.",
        answer:
          "O shebang diz ao kernel qual interpretador deve processar o arquivo. Sem ele, o sistema tenta executar o script com o shell atual ou simplesmente recusa rodar. Pode parecer funcionar quando você chama 'bash script.sh' diretamente, mas falha ao rodar como './script.sh'. Sempre coloque #!/bin/bash (ou #!/usr/bin/env bash) na primeira linha.",
      },
      {
        id: 2,
        question: "Por que praticamente todo script profissional começa com 'set -euo pipefail'?",
        hint: "Pense no comportamento padrão quando algum comando do meio do script falha.",
        answer:
          "Por padrão, o Bash ignora falhas e segue executando, o que mascara bugs sérios. -e faz o script abortar no primeiro erro, -u trata como erro o uso de variável indefinida (evita 'rm -rf $VAR_VAZIA'), -o pipefail propaga o erro de qualquer comando dentro de um pipe (sem isso, só o exit code do último comando importa). Juntos, transformam o Bash em um interpretador muito mais previsível.",
      },
      {
        id: 3,
        question: "Como receber e validar o primeiro argumento da linha de comando dentro de um script?",
        hint: "$1, $# e if [[ -z ... ]] são as peças.",
        answer:
          "O primeiro argumento fica em $1, o número total em $#. Para validar: if [[ $# -lt 1 ]]; then echo \"uso: $0 ARG\"; exit 1; fi. Se quiser checar se o argumento é um arquivo válido: if [[ ! -f \"$1\" ]]; then echo 'arquivo inexistente'; exit 2; fi. Sempre use exit codes diferentes para distinguir tipos de erro.",
      },
      {
        id: 4,
        question: "Diferença prática entre aspas simples e duplas em Bash?",
        hint: "Pense em quando o cifrão é interpretado.",
        answer:
          "Aspas duplas \"...\" expandem variáveis e $(...): \"olá $NOME\" vira 'olá Wallyson'. Aspas simples '...' são literais: 'olá $NOME' fica exatamente assim, sem interpretar nada. Use simples para texto literal, padrões e mensagens; use duplas quando precisa interpolar valores.",
      },
      {
        id: 5,
        question: "Como verificar de forma robusta se um arquivo existe antes de mexer nele?",
        hint: "Existem várias flags do teste de arquivo: -e, -f, -d, -L.",
        answer:
          "Use [[ ... ]] com a flag certa: -e (existe, qualquer tipo), -f (arquivo regular), -d (diretório), -L (link simbólico), -r/-w/-x (legível/gravável/executável). Exemplo: if [[ -f \"$ARQ\" && -r \"$ARQ\" ]]; then ... fi. As aspas em torno de \"$ARQ\" são essenciais para nomes com espaço.",
      },
      {
        id: 6,
        question: "Qual ferramenta valida scripts Bash apontando aspas erradas, comparações suspeitas e variáveis não usadas?",
        hint: "É um linter específico para shell.",
        answer:
          "shellcheck. Instale com 'sudo apt install shellcheck' e rode 'shellcheck script.sh'. Ele aponta cada problema com um código (SC2086, SC2155...) e link para explicação. É praticamente obrigatório antes de colocar qualquer script em produção. Editores como VS Code têm extensão que mostra os avisos enquanto você digita.",
      },
      {
        id: 7,
        question: "Para que serve 'trap CMD EXIT' e quando você usaria?",
        hint: "Pense em arquivos temporários criados durante o script.",
        answer:
          "trap registra um comando para ser executado quando o script termina (por sucesso, erro ou Ctrl+C). É a forma garantida de limpar arquivos temporários, fechar conexões ou liberar locks. Padrão típico: TMPDIR=$(mktemp -d); trap \"rm -rf '$TMPDIR'\" EXIT. Mesmo que algo dê errado no meio, o /tmp não fica entupido.",
      },
      {
        id: 8,
        question: "Como debugar um script Bash quando ele faz algo inesperado?",
        hint: "Há uma flag do próprio Bash para isso, sem precisar adicionar 'echo' por todo o código.",
        answer:
          "Rode com 'bash -x script.sh' (ou adicione 'set -x' dentro do script no trecho suspeito e 'set +x' depois). Cada comando aparece prefixado por + com as variáveis já expandidas, mostrando exatamente o que o Bash executou. É a forma mais rápida de ver onde uma variável virou string vazia ou onde uma condição não bateu.",
      },
    ],
    references: [
      {
        title: "Bash Reference Manual",
        url: "https://www.gnu.org/software/bash/manual/",
        description: "Documentação oficial completa do Bash, mantida pelo projeto GNU.",
      },
      {
        title: "ShellCheck",
        url: "https://www.shellcheck.net/",
        description: "Linter online e CLI para validar scripts shell. Aponta erros e más práticas comuns.",
      },
      {
        title: "Bash Pitfalls — Greg's Wiki",
        url: "https://mywiki.wooledge.org/BashPitfalls",
        description: "Lista didática dos erros mais frequentes em scripts Bash, com explicação e correção.",
      },
      {
        title: "Google Shell Style Guide",
        url: "https://google.github.io/styleguide/shellguide.html",
        description: "Convenções de estilo amplamente adotadas para scripts shell em equipes.",
      },
    ],
  },

  {
    id: "atalhos-produtividade",
    title: "Atalhos, Aliases e Produtividade no Bash",
    icon: "⚡",
    category: "Shell e Produtividade",
    description:
      "Aliases, funções no .bashrc, prompt customizado, histórico inteligente e alternativas modernas (Zsh, fish) que aceleram seu trabalho.",
    objectives: [
      "Criar aliases e funções permanentes no ~/.bashrc",
      "Personalizar o prompt PS1 com cores e informações úteis (branch git, etc.)",
      "Configurar o histórico para ser longo, persistente e com timestamp",
      "Dominar os atalhos de teclado avançados do Bash (Ctrl+R, Alt+., !!, !$ etc.)",
      "Conhecer e instalar Zsh + Oh My Zsh, fish e ferramentas modernas (bat, exa, fzf, ripgrep, zoxide)",
    ],
    content: [
      "Quando você começa no terminal, cada comando parece um esforço — digitar inteiro, lembrar das flags, navegar entre pastas digitando caminho completo. Isso é como aprender a dirigir: no começo você pensa em cada movimento. Com o tempo, vira reflexo. Mas o Bash, ao contrário do carro, te dá a chance de personalizar os pedais. Você cria seus próprios atalhos, ensina o terminal a se comportar do seu jeito e, em poucos meses, está executando em um segundo o que outras pessoas fazem em vinte. Este capítulo é sobre essa transformação: deixar de usar o Bash padrão e construir um ambiente sob medida que respeita sua memória muscular.",
      "O coração da personalização é o arquivo ~/.bashrc. Ele é executado toda vez que você abre um terminal interativo e é onde você coloca tudo que quer que esteja disponível: aliases, funções, variáveis de ambiente, configurações de histórico, prompt customizado. Em sessões de login (quando você loga em um TTY ou via SSH), o Bash lê primeiro o ~/.bash_profile (ou ~/.profile, dependendo do que existir); o padrão recomendado é fazer o ~/.bash_profile incluir o ~/.bashrc, garantindo que tudo funciona em qualquer cenário. Toda mudança no ~/.bashrc só vale para terminais novos — ou para o atual depois de você rodar 'source ~/.bashrc' (ou simplesmente '. ~/.bashrc'), que recarrega o arquivo no shell em execução.",
      "Aliases são atalhos textuais: 'alias ll=\"ls -lah\"' faz com que digitar ll execute ls -lah. O Bash aceita praticamente qualquer string. Os aliases mais úteis caem em três categorias. Primeiro, encurtar comandos longos que você usa muito — alias gs='git status', alias up='sudo apt update && sudo apt full-upgrade'. Segundo, adicionar segurança a comandos perigosos — alias rm='rm -i', alias cp='cp -i', alias mv='mv -i' (a flag -i pede confirmação antes de sobrescrever ou remover). Terceiro, padronizar saídas — alias df='df -h', alias du='du -h', alias grep='grep --color=auto'. Lembrando que aliases SÓ valem em shell interativo: scripts não enxergam alias, então se você criar 'alias rm=\"rm -i\"' no .bashrc isso não protege scripts que chamam rm internamente.",
      "Quando alias não dá conta — porque você precisa de lógica, argumentos ou variáveis intermediárias — promova para função. Funções no .bashrc se declaram exatamente como em scripts: 'mkcd() { mkdir -p \"$1\" && cd \"$1\"; }' cria uma pasta e já entra nela. Outros exemplos clássicos: extract() que detecta a extensão (.tar.gz, .zip, .7z) e chama o descompactador certo; psg() que filtra processos por nome; sizes() que mostra o tamanho de cada subpasta ordenado. Funções são mais poderosas que aliases porque entendem $1, $@, condicionais e podem chamar outros comandos em sequência. A regra prática: se precisa de argumento ou de mais de um comando, use função.",
      "O PROMPT (a linha que aparece antes do cursor) é definido pela variável PS1. O padrão do Debian já é razoável, mas customizar te dá superpoderes — mostrar a branch atual do git na pasta, colorir o usuário, exibir o exit code do último comando. Os códigos de cores do PS1 são sequências ANSI: \\\\[\\\\e[32m\\\\] muda para verde, \\\\e[34m para azul, \\\\e[0m volta ao normal. Os \\\\[ ... \\\\] são ESSENCIAIS — eles dizem ao Bash que aquilo é texto invisível para o cálculo de largura, sem isso o cursor se perde quando o prompt fica grande. Para git branch, defina uma função parse_git_branch() e chame-a com $(parse_git_branch) dentro do PS1. Existem também temas prontos como 'starship' (cross-shell, instala um único binário) que entregam um prompt sofisticado sem você precisar mexer em código.",
      "O histórico do Bash é uma das ferramentas mais subutilizadas. Por padrão guarda os últimos 1000 comandos, perde duplicatas adjacentes e mistura sessões de forma estranha. Algumas linhas no .bashrc resolvem: HISTSIZE=10000 (em memória), HISTFILESIZE=20000 (no arquivo), HISTCONTROL=ignoreboth (ignora duplicatas e linhas começando com espaço — ótimo para esconder comandos com senha), HISTTIMEFORMAT='%F %T ' (mostra data e hora), shopt -s histappend (anexa ao histórico em vez de sobrescrever), PROMPT_COMMAND='history -a' (salva após cada comando, evitando perder histórico de sessões fechadas inesperadamente). Com isso, Ctrl+R (busca reversa) vira uma máquina do tempo: você digita parte de qualquer comando dos últimos meses e o Bash encontra.",
      "Os atalhos de teclado do Bash são o que mais separa iniciante de veterano. Ctrl+R inicia busca reversa no histórico. Ctrl+A vai para o início da linha, Ctrl+E vai para o fim. Ctrl+W apaga a palavra à esquerda, Ctrl+U apaga tudo à esquerda do cursor, Ctrl+K apaga tudo à direita. Ctrl+L limpa a tela (equivalente ao 'clear' mas instantâneo). Alt+. (Alt+ponto) cola o último argumento do comando anterior — incrivelmente útil em sequências como 'mkdir foo' seguido de 'cd Alt+.'. !! repete o último comando. !$ representa o último argumento. !sudo executa o último comando que começou com sudo. Ctrl+X seguido de Ctrl+E abre o comando atual no editor padrão (útil para comandos longos). Decorar cinco desses já muda o seu fluxo para sempre.",
      "Bash não é o único shell em Debian. O Zsh é um superset compatível, com autocomplete superior, glob mais poderoso e um ecossistema enorme de frameworks (Oh My Zsh, Prezto, zinit) que entregam temas e plugins prontos. Para instalar: 'sudo apt install zsh' e depois 'chsh -s $(which zsh)' para definir como shell padrão (relogue para aplicar). Oh My Zsh se instala com um curl no site oficial e vem com 200+ plugins — git (aliases para Git), sudo (Esc Esc para repetir com sudo), zsh-syntax-highlighting (colore comandos válidos vs inválidos), zsh-autosuggestions (sugere baseado no histórico). Já o fish (Friendly Interactive Shell) é uma reescrita que prioriza usabilidade: autocomplete aparece em cinza enquanto você digita, sintaxe de scripts mais limpa, mas NÃO é compatível com Bash (scripts .sh não rodam). Bom para uso interativo, ruim para herdar dotfiles antigos.",
      "Existe um conjunto de ferramentas modernas que substituem clássicos com mais cor, mais velocidade e mais conforto. bat é o cat com syntax highlighting e numeração de linhas. exa (ou eza) é o ls com cores melhores e ícones. fd-find é o find com sintaxe mais simples. ripgrep (rg) é um grep muito mais rápido que respeita .gitignore. fzf é um fuzzy finder interativo que se integra com Ctrl+R do Bash, transformando a busca de histórico em uma interface visual. zoxide substitui o cd: depois de visitar uma pasta uma vez, basta 'z parte_do_nome' para voltar. tldr mostra exemplos práticos de comandos sem o ruído das man pages. Instale com 'sudo apt install bat exa fd-find ripgrep fzf zoxide tldr' e adicione aliases no .bashrc para integrá-los — em uma semana, o terminal fica praticamente outro.",
      "Ao terminar este capítulo, você vai ter um .bashrc personalizado com seus próprios aliases e funções, um prompt que mostra informação útil de relance, um histórico longo e pesquisável, conhecimento dos atalhos de teclado que cortam metade da sua digitação e visão sobre alternativas modernas (Zsh, fish) e ferramentas turbinadas (bat, exa, fzf, ripgrep, zoxide). Mais importante: você vai entender que produtividade no terminal não é talento — é configuração. Cada minuto investido em ajustar o ambiente devolve horas pela vida toda.",
    ],
    commands: [
      {
        command: "alias",
        description: "Cria um atalho textual. Sem argumentos, lista todos os aliases definidos no shell atual.",
        example: "alias ll='ls -lah'",
      },
      {
        command: "unalias",
        description: "Remove um alias do shell atual. -a remove todos.",
        example: "unalias ll",
      },
      {
        command: "source ~/.bashrc",
        description:
          "Recarrega o ~/.bashrc no shell em execução, sem precisar abrir um novo terminal. Sinônimo: '. ~/.bashrc'.",
        example: "source ~/.bashrc",
      },
      {
        command: "type",
        description: "Mostra o que um nome representa: alias, função, builtin, palavra-chave ou binário em $PATH.",
        example: "type ls",
        output: "ls is aliased to `ls --color=auto`",
      },
      {
        command: "which",
        description: "Mostra apenas o caminho do binário em $PATH (não enxerga aliases nem funções).",
        example: "which python3",
        output: "/usr/bin/python3",
      },
      {
        command: "history",
        description: "Lista o histórico de comandos. Com HISTTIMEFORMAT definido, mostra timestamp.",
        example: "history | tail -20",
      },
      {
        command: "Ctrl+R",
        description: "Busca reversa no histórico. Digite parte do comando, Enter para executar, Ctrl+R de novo para próxima ocorrência.",
        example: "Ctrl+R apt   (encontra o último comando que continha 'apt')",
      },
      {
        command: "!!",
        description: "Repete o último comando. Ótimo para 'sudo !!' quando você esqueceu o sudo.",
        example: "sudo !!",
      },
      {
        command: "!$",
        description: "Refere-se ao último argumento do comando anterior.",
        example: "mkdir /tmp/teste\ncd !$",
      },
      {
        command: "Alt+.",
        description: "Insere o último argumento do comando anterior no ponto do cursor. Aperte de novo para o anterior.",
        example: "(após 'cp arquivo.txt /tmp/') digite 'rm ' e aperte Alt+. para colar /tmp/",
      },
      {
        command: "!texto",
        description: "Executa o último comando do histórico que começa com 'texto'.",
        example: "!apt",
      },
      {
        command: "Ctrl+L",
        description: "Limpa a tela mantendo o que estava sendo digitado.",
        example: "Ctrl+L",
      },
      {
        command: "Ctrl+W",
        description: "Apaga a palavra à esquerda do cursor.",
        example: "Ctrl+W",
      },
      {
        command: "Ctrl+U",
        description: "Apaga tudo à esquerda do cursor (linha inteira até ali).",
        example: "Ctrl+U",
      },
      {
        command: "Ctrl+X Ctrl+E",
        description: "Abre o comando atual no editor padrão ($EDITOR), útil para comandos longos.",
        example: "Ctrl+X Ctrl+E",
      },
      {
        command: "PS1",
        description: "Variável que define o prompt. Aceita códigos especiais (\\\\u, \\\\h, \\\\w) e cores ANSI.",
        example: "export PS1='\\\\[\\\\e[32m\\\\]\\\\u@\\\\h\\\\[\\\\e[0m\\\\]:\\\\[\\\\e[34m\\\\]\\\\w\\\\[\\\\e[0m\\\\]\\\\$ '",
      },
      {
        command: "shopt",
        description: "Liga/desliga opções do Bash. histappend, autocd, cdspell, globstar são as mais úteis.",
        example: "shopt -s autocd cdspell globstar",
      },
      {
        command: "chsh -s",
        description: "Muda o shell padrão do usuário. Precisa relogar para aplicar.",
        example: "chsh -s $(which zsh)",
      },
      {
        command: "fc",
        description: "Abre o último comando (ou um intervalo) no editor para edição em massa antes de reexecutar.",
        example: "fc -l -10   # lista os 10 últimos\nfc          # edita o último",
      },
      {
        command: "fzf",
        description:
          "Fuzzy finder interativo. Após 'apt install fzf' e configurar, Ctrl+R abre interface visual de busca no histórico.",
        example: "history | fzf",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Aliases não chegam em scripts",
        content:
          "alias só vale em shell interativo. Scripts não enxergam aliases, então 'alias rm=\"rm -i\"' protege você no terminal mas NÃO protege scripts que chamam rm. Para alias funcionar dentro de script, é preciso ativar manualmente com 'shopt -s expand_aliases' (raramente vale a pena).",
      },
      {
        type: "success",
        title: "fzf + Ctrl+R = magia",
        content:
          "Instale com 'sudo apt install fzf' e rode '/usr/share/doc/fzf/examples/key-bindings.bash' (ou 'source' no .bashrc). Depois disso, Ctrl+R abre busca FUZZY no histórico — você digita pedaços não-contíguos e ele acha. É a melhoria de qualidade de vida mais alta da lista.",
      },
      {
        type: "warning",
        title: "Cuidado ao redefinir comandos comuns",
        content:
          "alias ls='ls --color=auto -F' parece inocente, mas se um script seu (ou de terceiros) faz parsing de 'ls' e passa por aqui interativamente, o resultado muda. Em geral, prefira nomes novos (ll, la, lt) a sobrescrever ls e cd.",
      },
      {
        type: "success",
        title: "Versione seus dotfiles",
        content:
          "Coloque ~/.bashrc, ~/.aliases, ~/.gitconfig em um repositório Git (chamado 'dotfiles'). Em qualquer máquina nova, basta clonar e linkar — todo o ambiente personalizado volta em segundos. Existem ferramentas como chezmoi e stow que ajudam.",
      },
      {
        type: "info",
        title: "starship: prompt cross-shell pronto",
        content:
          "Se você quer um prompt bonito (com git, versão de linguagem, tempo de execução do último comando) sem mexer em PS1, instale o starship (https://starship.rs). Funciona em Bash, Zsh e fish; um único binário e arquivo de config TOML.",
      },
      {
        type: "danger",
        title: "Cuidado ao mudar o shell padrão",
        content:
          "Mudar com chsh para um shell que você não tem certeza se está funcional pode trancar você fora (especialmente em servidores remotos). Teste o novo shell em uma sessão antes de definir como padrão e mantenha sempre uma sessão SSH separada aberta como rede de segurança.",
      },
    ],
    practiceLabs: [
      {
        title: "Setup de ~/.bashrc produtivo",
        goal:
          "Instalar um conjunto de aliases, funções e configurações de histórico no seu ~/.bashrc, com backup do anterior.",
        steps: [
          "Faça backup do ~/.bashrc atual com cp.",
          "Anexe o bloco de configurações ao ~/.bashrc usando heredoc.",
          "Recarregue com source ~/.bashrc.",
          "Teste cada alias e função para confirmar que funcionam.",
          "Confirme com 'alias' e 'declare -F' que tudo está ativo.",
        ],
        command: `cp ~/.bashrc ~/.bashrc.bak.$(date +%Y%m%d)

cat >> ~/.bashrc << 'EOF'

# ===== meus atalhos =====

# navegação
alias ll='ls -lah'
alias la='ls -A'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'

# segurança
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

# utilidades
alias h='history'
alias hg='history | grep'
alias df='df -h'
alias du1='du -h --max-depth=1'
alias myip='curl -s ifconfig.me; echo'
alias ports='ss -tulpn'
alias update='sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y'

# git
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git log --oneline --graph --decorate -20'

# funções
mkcd() { mkdir -p "$1" && cd "$1"; }
psg() { ps aux | grep -i "$1" | grep -v grep; }
sizes() { du -sh ./* 2>/dev/null | sort -h; }
extract() {
  case "$1" in
    *.tar.gz|*.tgz) tar -xzf "$1" ;;
    *.tar.bz2)      tar -xjf "$1" ;;
    *.tar.xz)       tar -xJf "$1" ;;
    *.tar)          tar -xf "$1"  ;;
    *.zip)          unzip "$1"    ;;
    *.7z)           7z x "$1"     ;;
    *.gz)           gunzip "$1"   ;;
    *)              echo "formato não suportado: $1" ;;
  esac
}

# histórico
HISTSIZE=10000
HISTFILESIZE=20000
HISTCONTROL=ignoreboth:erasedups
HISTTIMEFORMAT='%F %T '
shopt -s histappend cmdhist
PROMPT_COMMAND='history -a'

# prompt colorido
export PS1='\\[\\e[32m\\]\\u@\\h\\[\\e[0m\\]:\\[\\e[34m\\]\\w\\[\\e[0m\\]\\$ '

EOF

source ~/.bashrc
ll
mkcd /tmp/teste-mkcd && pwd && cd ~
psg bash
alias | head`,
        expected:
          "Aliases listados, função mkcd cria pasta e entra, prompt mudou de cor, histórico passa a guardar timestamp.",
        verify:
          "Rode 'type ll' (deve mostrar que é alias), 'declare -F mkcd' (deve listar a função) e 'history' (cada linha deve ter data e hora). Se algo falhou, restaure com 'cp ~/.bashrc.bak.* ~/.bashrc' e investigue.",
      },
      {
        title: "Instalando ferramentas modernas e integrando",
        goal:
          "Instalar bat, exa, fd-find, ripgrep, fzf, zoxide e tldr, e configurar aliases no .bashrc para usá-los como substitutos dos clássicos.",
        steps: [
          "Instale o pacote conjunto via apt.",
          "No Debian, alguns comandos têm nomes diferentes (batcat, fdfind) — crie aliases para os nomes esperados.",
          "Adicione a inicialização do zoxide e do fzf no .bashrc.",
          "Recarregue e teste cada ferramenta com um exemplo.",
        ],
        command: `sudo apt install -y bat exa fd-find ripgrep fzf zoxide tldr

cat >> ~/.bashrc << 'EOF'

# ferramentas modernas
alias cat='batcat --paging=never'
alias bat='batcat'
alias ls='exa --icons --group-directories-first'
alias ll='exa -lah --icons --group-directories-first'
alias fd='fdfind'
alias grep='rg'

# zoxide (cd inteligente)
eval "$(zoxide init bash)"

# fzf (key bindings: Ctrl+R, Ctrl+T)
[[ -f /usr/share/doc/fzf/examples/key-bindings.bash ]] && \\
  source /usr/share/doc/fzf/examples/key-bindings.bash

EOF

source ~/.bashrc

cat ~/.bashrc | head -20      # batcat com cores
ls /etc | head                 # exa com ícones
fd '\\.conf$' /etc | head      # fd-find
rg 'PATH' ~/.bashrc            # ripgrep
tldr tar                       # documentação prática
echo 'agora aperte Ctrl+R para ver o fzf em ação'`,
        expected:
          "cat com syntax highlighting, ls com cores e ícones, fd encontrando arquivos .conf, rg buscando padrões, tldr mostrando exemplos de tar, Ctrl+R abrindo fzf.",
        verify:
          "Rode 'type cat' (deve apontar para batcat) e 'cd' em uma pasta visitada antes seguido de 'z parte_do_nome' (zoxide deve te levar de volta).",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como criar um alias que liste apenas os processos do firefox e onde colocá-lo para ele persistir?",
        hint: "Pense no comando que mostra processos e em qual arquivo carrega no início de cada sessão.",
        answer:
          "alias ff='ps aux | grep [f]irefox' (o colchete evita que o próprio grep apareça no resultado). Para persistir, adicione essa linha no final do ~/.bashrc e rode 'source ~/.bashrc' para aplicar imediatamente. Em sessões novas, ele já vem carregado automaticamente.",
      },
      {
        id: 2,
        question: "Como aplicar mudanças feitas no ~/.bashrc sem fechar e abrir o terminal?",
        hint: "Existe um comando interno do Bash que executa um arquivo no shell atual.",
        answer:
          "source ~/.bashrc (ou a forma curta '. ~/.bashrc'). source executa o arquivo no contexto do shell atual, então variáveis, aliases e funções definidos lá ficam disponíveis imediatamente. Diferente de 'bash ~/.bashrc', que abriria um novo subshell e descartaria tudo ao terminar.",
      },
      {
        id: 3,
        question: "Como descobrir se 'ls' que você está executando é o binário, um alias ou uma função?",
        hint: "Há um builtin do Bash que classifica nomes.",
        answer:
          "type ls. A saída diz se é alias, função, builtin, palavra-chave ou hashed. Se for alias, mostra a expansão completa. 'which ls' não serve para isso porque só procura no $PATH e ignora aliases e funções definidos no shell.",
      },
      {
        id: 4,
        question: "Qual atalho insere o último argumento do comando anterior na linha atual?",
        hint: "É uma combinação com Alt.",
        answer:
          "Alt+. (Alt + ponto). Exemplo: depois de 'mkdir /tmp/teste', você digita 'cd ' e aperta Alt+. — o /tmp/teste aparece. Se apertar várias vezes, percorre os últimos argumentos. Equivalente em texto: !$ (mas sem feedback visual).",
      },
      {
        id: 5,
        question: "Como configurar o histórico para guardar 10.000 linhas, ignorar duplicadas e mostrar timestamp?",
        hint: "São quatro variáveis e um shopt.",
        answer:
          "Adicione no ~/.bashrc:\nHISTSIZE=10000\nHISTFILESIZE=20000\nHISTCONTROL=ignoredups\nHISTTIMEFORMAT='%F %T '\nshopt -s histappend\nPROMPT_COMMAND='history -a'\nIsso aumenta o tamanho, ignora duplicatas, mostra data e hora ao listar e garante que o histórico seja salvo após cada comando (não apenas ao fechar o terminal).",
      },
      {
        id: 6,
        question: "Cite duas alternativas modernas ao Bash e a principal diferença entre elas.",
        hint: "Uma é compatível com Bash, a outra não.",
        answer:
          "Zsh é um superset compatível com Bash, com autocompletion melhor e ecossistema enorme (Oh My Zsh, plugins). Scripts Bash continuam rodando. fish (Friendly Interactive Shell) é uma reescrita focada em usabilidade, com sugestões automáticas em cinza enquanto você digita, mas NÃO é compatível com Bash — scripts .sh tradicionais não rodam direto.",
      },
      {
        id: 7,
        question: "O que faz o comando 'sudo !!' e em que situação ele é útil?",
        hint: "!! repete o último comando.",
        answer:
          "Reexecuta o último comando precedido por sudo. Cenário típico: você roda 'apt update', recebe Permission denied porque esqueceu o sudo, e em vez de digitar tudo de novo basta 'sudo !!' — o Bash expande para 'sudo apt update'. Pequeno, mas economiza muita digitação.",
      },
      {
        id: 8,
        question: "Por que se recomenda versionar o ~/.bashrc (e outros dotfiles) em um repositório Git?",
        hint: "Pense no que acontece quando você troca de máquina.",
        answer:
          "Porque seu ambiente personalizado (aliases, funções, prompt, histórico de configurações) leva tempo para construir e ainda mais tempo para reproduzir do zero. Mantendo em Git, basta clonar o repositório em qualquer máquina nova e linkar os arquivos para recuperar todo o ambiente. Ferramentas como chezmoi, yadm ou GNU stow ajudam a gerenciar links e variações por máquina.",
      },
    ],
    references: [
      {
        title: "Oh My Zsh",
        url: "https://ohmyz.sh/",
        description: "Framework popular para Zsh com centenas de plugins e temas prontos.",
      },
      {
        title: "Fish Shell — Tutorial",
        url: "https://fishshell.com/docs/current/tutorial.html",
        description: "Tutorial oficial do fish, shell amigável com autocompletion automático.",
      },
      {
        title: "Starship Prompt",
        url: "https://starship.rs/",
        description: "Prompt minimalista e cross-shell (Bash, Zsh, fish, PowerShell) configurável por TOML.",
      },
      {
        title: "fzf — Command-line fuzzy finder",
        url: "https://github.com/junegunn/fzf",
        description: "Fuzzy finder que se integra ao histórico, ao cd e a praticamente qualquer pipeline interativo.",
      },
      {
        title: "Awesome Shell",
        url: "https://github.com/alebcay/awesome-shell",
        description: "Lista curada de frameworks, plugins, ferramentas e recursos para shells Unix.",
      },
    ],
  },
];
