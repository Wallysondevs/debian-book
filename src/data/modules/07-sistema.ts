import { Module } from "@/types/module";

export const sistema: Module[] = [
  {
    id: "processos",
    title: "Processos e Monitoramento",
    icon: "⚙️",
    category: "Sistema",
    description: "Entender, listar, monitorar e matar processos no Debian com ps, top, htop e kill.",
    objectives: [
      "Entender o que é um processo, PID, PPID e estado",
      "Listar processos com ps e filtrar pelos relevantes",
      "Usar top e htop para monitoramento em tempo real",
      "Matar processos com kill, pkill e killall escolhendo o sinal certo",
      "Identificar quem está consumindo CPU ou memória de verdade",
      "Diferenciar foreground, background, jobs, nohup e disown",
    ],
    content: [
      `Pense no seu Debian como um restaurante movimentado. O sistema operacional é o gerente, e cada processo é um garçom: alguns servem mesas há horas (o servidor SSH rodando desde o boot), outros aparecem só para entregar uma água e somem (o comando \`ls\` que você acabou de digitar). Cada garçom tem um crachá numérico — o PID, ou Process ID — e foi contratado por outro garçom (o PPID, Parent PID). Quando você abre o terminal, ele cria um filho. Quando você roda \`firefox\`, o terminal cria outro filho. Tudo é uma árvore de processos descendendo do PID 1 (o systemd, no Debian moderno), que é o gerente-mor do restaurante.`,
      `Por que esse modelo importa? Porque entender processos é o que separa quem "usa" Linux de quem "controla" Linux. Quando o navegador trava, você não reinicia o computador inteiro: identifica o PID e mata só ele. Quando o servidor está lento, você não chuta a máquina: vê quem está consumindo CPU e age. Quando um script não termina nunca, você não desliga o terminal: descobre o que ele está esperando. Cada processo no Linux é isolado, identificável e controlável — e essa filosofia, herdada do Unix dos anos 70, é o que faz Linux ser estável em servidores que ficam meses sem reiniciar.`,
      `Antes dos comandos, alguns termos. Um **processo** é uma instância em execução de um programa; o programa é o arquivo no disco, o processo é o programa "vivo" na memória. **PID** é um número inteiro único que identifica cada processo (de 1 até /proc/sys/kernel/pid_max, geralmente 4 milhões). **PPID** é o PID do pai. **UID/GID** dizem com qual usuário e grupo o processo está rodando — isso define o que ele pode acessar. **Estado** indica o que o processo está fazendo agora: R (running, na CPU ou na fila), S (sleeping, esperando algo), D (uninterruptible sleep, esperando disco — não dá pra matar), Z (zombie, terminou mas o pai não recolheu), T (stopped, pausado).`,
      `O que acontece por baixo dos panos quando você digita um comando? O shell (bash, zsh) faz uma chamada de sistema chamada \`fork()\`, que cria uma cópia exata de si mesmo. Em seguida, o filho chama \`exec()\` substituindo seu código pelo do programa pedido. O pai (shell) faz \`wait()\` esperando o filho terminar — por isso o terminal "fica preso" enquanto o comando roda. Se você acrescenta \`&\` no fim, o pai não espera, e você ganha o prompt de volta enquanto o filho corre em background. Esse trio fork/exec/wait é o coração de todo Unix.`,
      `Confusão clássica número um: \`top\` mostra um processo consumindo 100% de CPU e o iniciante surta achando que é vírus. Na maioria das vezes é um \`firefox\` carregando uma aba pesada, um \`apt\` descompactando pacote, ou um compilador trabalhando — todos legítimos. Antes de matar, sempre pergunte: o que esse processo é? O nome (coluna COMMAND) dá a pista, e \`ls -l /proc/PID/exe\` mostra o caminho completo do executável. Confusão número dois: o iniciante manda \`kill -9\` em tudo. SIGKILL (-9) é a marreta que mata na hora, sem deixar o processo salvar arquivos abertos, fechar conexões, terminar transações. Use SIGTERM (-15, padrão) primeiro; SIGKILL só se o programa ignorar SIGTERM por mais de 10 segundos.`,
      `Outra armadilha: load average alta não é, sozinha, sintoma de problema. \`uptime\` mostra três números: carga média de 1, 5 e 15 minutos. Carga 1.0 significa "um core sempre ocupado". Numa máquina de 4 cores, 4.0 é OK; 8.0 começa a doer. Mas carga é a soma de processos rodando + esperando disco/IO. Servidor com muito disco lento pode ter carga 20 e CPU em 5%, porque tudo está esperando o HD. Quando algo está lento, sempre cruze: \`top\`/\`htop\` para CPU/RAM, \`iostat\` para disco, \`iftop\` para rede.`,
      `Ao final deste capítulo, você vai abrir um terminal, descobrir em segundos qual processo está derretendo seu CPU, decidir entre encerrar com elegância ou matar à força, e mandar comandos longos para o background. É a primeira ferramenta de quem deixa de ser usuário comum e vira administrador do próprio sistema.`,
    ],
    commands: [
      {
        command: "ps aux",
        description: "Lista todos os processos do sistema no formato BSD, com usuário, CPU, memória e comando.",
        example: "ps aux | grep firefox",
        output: "USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nwallyson  4321  3.2  4.1 1234567 168432 ?       Sl   09:14   0:42 /usr/lib/firefox/firefox",
        flags: [
          { flag: "a", description: "Inclui processos de outros usuários" },
          { flag: "u", description: "Formato orientado ao usuário (com %CPU, %MEM)" },
          { flag: "x", description: "Inclui processos sem terminal controlador (daemons)" },
        ],
      },
      {
        command: "ps -ef",
        description: "Lista no formato System V, com PPID e horário de início.",
        example: "ps -ef | head -10",
        output: "UID         PID   PPID  C STIME TTY          TIME CMD\nroot          1      0  0 09:00 ?        00:00:03 /sbin/init splash",
      },
      {
        command: "ps -ef --forest",
        description: "Mostra a árvore parent-child de processos, ótimo para ver quem rodou quem.",
        example: "ps -ef --forest | less",
      },
      {
        command: "ps --sort=-%mem",
        description: "Ordena processos por uso (descendente). Combine com head para top N.",
        example: "ps aux --sort=-%mem | head -6",
      },
      {
        command: "top",
        description: "Monitor de processos em tempo real, atualiza a cada 3 segundos.",
        example: "top",
        flags: [
          { flag: "M (dentro do top)", description: "Ordena por uso de memória" },
          { flag: "P (dentro do top)", description: "Ordena por CPU (padrão)" },
          { flag: "k (dentro do top)", description: "Mata processo (pede PID)" },
          { flag: "1", description: "Mostra cada CPU separadamente em multi-core" },
          { flag: "q", description: "Sai do top" },
        ],
      },
      {
        command: "htop",
        description: "Versão moderna do top com cores, scroll horizontal, mouse e atalhos visíveis.",
        example: "htop",
        flags: [
          { flag: "F5", description: "Modo árvore (parent-child)" },
          { flag: "F6", description: "Escolher coluna de ordenação" },
          { flag: "F9", description: "Matar processo" },
          { flag: "F4", description: "Filtrar por nome" },
          { flag: "/", description: "Buscar processo" },
        ],
      },
      {
        command: "kill",
        description: "Envia sinal a processo identificado pelo PID. Padrão é SIGTERM (15).",
        example: "kill 12345",
        flags: [
          { flag: "-15 / -TERM", description: "SIGTERM: pede encerramento limpo (padrão)" },
          { flag: "-9 / -KILL", description: "SIGKILL: força morte, não negocia" },
          { flag: "-1 / -HUP", description: "SIGHUP: recarrega config (típico de daemons)" },
          { flag: "-STOP", description: "Pausa o processo (continua com -CONT)" },
          { flag: "-CONT", description: "Resume processo pausado" },
          { flag: "-l", description: "Lista todos os sinais disponíveis com nomes e números" },
        ],
      },
      {
        command: "pkill",
        description: "Mata processos pelo nome em vez de PID.",
        example: "pkill firefox",
        flags: [
          { flag: "-9 NOME", description: "Force kill" },
          { flag: "-u USUARIO", description: "Mata processos de um usuário" },
          { flag: "-f 'string'", description: "Match na linha de comando completa" },
        ],
      },
      {
        command: "killall",
        description: "Similar a pkill, mas exige nome exato do executável.",
        example: "killall -TERM nginx",
      },
      {
        command: "pgrep",
        description: "Lista PIDs que casam com o nome (sem matar). Útil para scripts.",
        example: "pgrep -u $USER firefox",
        output: "4321\n4322\n4399",
      },
      {
        command: "jobs",
        description: "Lista jobs do shell atual em background ou pausados.",
        example: "jobs",
        output: "[1]+  Running                 sleep 300 &\n[2]-  Stopped                 vim notas.txt",
      },
      {
        command: "fg / bg",
        description: "Traz job para foreground (fg) ou continua pausado em background (bg).",
        example: "fg %1",
      },
      {
        command: "nohup",
        description: "Roda comando que sobrevive ao fechamento do terminal (ignora SIGHUP).",
        example: "nohup ./long-job.sh > saida.log 2>&1 &",
      },
      {
        command: "disown",
        description: "Desassocia job do shell atual (similar a nohup, mas para processos já rodando).",
        example: "disown %1",
      },
      {
        command: "uptime",
        description: "Mostra há quanto tempo o sistema está ligado e a carga média (1, 5, 15 min).",
        example: "uptime",
        output: " 19:23:51 up 2 days,  5:18,  2 users,  load average: 0.42, 0.38, 0.30",
      },
      {
        command: "free -h",
        description: "Memória RAM e swap em formato humano.",
        example: "free -h",
        output: "               total        used        free      shared  buff/cache   available\nMem:           7.7Gi       3.2Gi       1.1Gi       412Mi       3.4Gi       3.8Gi\nSwap:          2.0Gi          0B       2.0Gi",
      },
      {
        command: "vmstat",
        description: "Estatísticas de memória, CPU, IO. Tira fotos a cada N segundos.",
        example: "vmstat 2 5",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Tente SIGTERM antes de SIGKILL",
        content:
          "kill (sem -9) pede educadamente para o processo encerrar — ele pode salvar dados, fechar arquivos, terminar transações. kill -9 é a marreta: pode corromper banco de dados aberto ou arquivo sendo escrito. Use -9 só se SIGTERM não funcionou em ~10 segundos.",
      },
      {
        type: "info",
        title: "O que load average realmente significa",
        content:
          "Carga 1.0 = um core ocupado 100%. Em máquina de 4 cores, 4.0 = todos ocupados. Acima do número de cores = sobrecarga. Os três números são médias de 1, 5 e 15 minutos. Se o de 15 min está alto e o de 1 min baixo, foi pico que já passou.",
      },
      {
        type: "success",
        title: "htop com cores por core",
        content:
          "Aperte F2 (setup) > Meters > escolha 'Detailed CPUs (1/cores per row)'. Cada núcleo aparece separado. Útil para ver se um processo está preso a um core só (single-thread bound).",
      },
      {
        type: "danger",
        title: "Nunca mate o PID 1",
        content:
          "PID 1 é o systemd (init). Matá-lo causa kernel panic. Mesmo como root, kill -9 1 não funciona — o kernel protege. Mas existem outros processos críticos (sshd remoto, init de sessão gráfica) que se você matar, perde acesso à máquina.",
      },
      {
        type: "info",
        title: "Estado D não é matável",
        content:
          "Processos em estado D (uninterruptible sleep) estão esperando o kernel terminar uma operação de I/O — geralmente disco. Nem SIGKILL os mata até a operação terminar. Se acumular muitos D, provavelmente o disco está com problema (cabo, controladora, NFS travado).",
      },
    ],
    practiceLabs: [
      {
        title: "Caçar o processo que está consumindo CPU",
        goal: "Praticar identificar e matar um processo problemático com ferramentas diferentes.",
        steps: [
          "Em um terminal, rode 'yes > /dev/null &' para criar um processo que consome CPU.",
          "Em outro terminal, abra htop e identifique o processo 'yes'.",
          "Use F4 para filtrar pelo nome 'yes'.",
          "Mate via htop com F9, escolhendo SIGTERM.",
          "Confirme com pgrep que o processo sumiu.",
          "Repita criando vários 'yes' e mate todos com pkill -9 yes.",
        ],
        command: `# 1) Criar processo que consome CPU
yes > /dev/null &

# 2) Ver via htop
htop
# F4 para filtrar e digite 'yes'
# Selecione com setas, F9 para matar, escolha SIGTERM (15), Enter

# 3) Alternativamente via kill direto
pgrep yes
# kill PID_AQUI

# 4) Forma rapida via pkill
pkill yes

# 5) Confirmar
pgrep yes`,
        verify:
          "Após matar, 'pgrep yes' não retorna nada. O htop mostra zero processos chamados 'yes'. CPU volta ao normal.",
      },
      {
        title: "Top consumidores de RAM no sistema",
        goal: "Identificar quem realmente está usando memória do sistema.",
        steps: [
          "Veja a visão geral com free -h.",
          "Liste top 10 processos por memória com ps.",
          "Compare com top 10 por CPU.",
          "Use htop com ordenação por PERCENT_MEM.",
        ],
        command: `# Visao geral de RAM
free -h

# Top 10 processos por memoria
ps aux --sort=-%mem | head -11

# Top 10 por CPU
ps aux --sort=-%cpu | head -11

# Em tempo real (htop)
htop
# Aperte F6, escolha PERCENT_MEM`,
        verify:
          "Você identifica os 3 processos que mais consomem RAM no seu sistema. Em desktop típico: navegador, IDE, gerenciador de janelas.",
      },
      {
        title: "Background, foreground e nohup",
        goal: "Dominar o fluxo de jobs no shell.",
        steps: [
          "Inicie um sleep longo em foreground.",
          "Pause com Ctrl+Z.",
          "Continue em background com bg.",
          "Liste com jobs.",
          "Traga de volta com fg.",
          "Mate com Ctrl+C.",
          "Inicie novo sleep com nohup, feche o terminal e abra outro — confirme que ainda roda.",
        ],
        command: `# 1) Em foreground
sleep 600

# 2) Pause: Ctrl+Z
# Resultado: [1]+  Stopped       sleep 600

# 3) Mande pra background
bg %1

# 4) Veja jobs
jobs

# 5) Traga de volta
fg %1

# 6) Mate: Ctrl+C

# 7) Com nohup (sobrevive a logout)
nohup sleep 1800 > /tmp/sleep.log 2>&1 &
disown

# 8) Feche o terminal, abra outro:
pgrep -a sleep`,
        verify:
          "Após reabrir terminal, pgrep ainda mostra o sleep com nohup rodando. Sem nohup, ele teria morrido com SIGHUP no fechamento.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a diferença prática entre kill -15 e kill -9?",
        hint: "Pense em quem 'pede' e quem 'manda à força'.",
        answer:
          "-15 (SIGTERM) é o sinal padrão: pede educadamente para o processo encerrar, dando chance dele salvar dados, fechar arquivos e terminar transações. -9 (SIGKILL) força a morte imediata pelo kernel, sem aviso, podendo corromper dados em uso. Sempre tente -15 primeiro; só recorra a -9 se o processo ignorar SIGTERM por mais de 10 segundos.",
      },
      {
        id: 2,
        question: "Como matar todos os processos do firefox de uma vez?",
        hint: "Existem duas ferramentas com sintaxe quase igual.",
        answer:
          "pkill firefox (ou killall firefox). pkill aceita match parcial, killall exige nome exato do executável. Se quiser forçar: pkill -9 firefox. Para ver antes o que seria afetado: pgrep firefox.",
      },
      {
        id: 3,
        question: "Como rodar um comando longo e poder fechar o terminal sem matar a tarefa?",
        hint: "Há um comando que ignora o sinal SIGHUP enviado quando você desloga.",
        answer:
          "nohup comando > saida.log 2>&1 & — nohup faz o processo ignorar SIGHUP (sinal enviado ao fechar o terminal), o redirecionamento manda saída para arquivo, e o & coloca em background. Alternativa moderna: usar tmux ou screen.",
      },
      {
        id: 4,
        question: "O que significa load average de 4.5 numa máquina de 4 cores?",
        hint: "Compare a carga com o número de cores.",
        answer:
          "Sobrecarga leve: todos os 4 cores estão 100% ocupados E há aproximadamente 0.5 processos a mais esperando vez. O sistema responde perceptivelmente lento. Acima de 8 (2x cores) já é sobrecarga grave; acima de 16 o sistema fica quase inutilizável.",
      },
      {
        id: 5,
        question: "Como ver o uso de memória dos top 5 processos?",
        hint: "ps tem flag para ordenar.",
        answer:
          "ps aux --sort=-%mem | head -6 (cabeçalho + 5 processos). O sinal de menos antes de %mem indica ordem decrescente. Para CPU: --sort=-%cpu.",
      },
      {
        id: 6,
        question: "O que é um processo zumbi e quando se preocupar?",
        hint: "Estado Z, e o problema está no pai.",
        answer:
          "Processo que terminou mas o pai não chamou wait() para coletar o status (estado Z em ps). Ocupa apenas uma entrada na tabela de processos, sem CPU/RAM. Inofensivo se forem poucos. Se acumularem, o pai está bugado: a solução é matar o processo PAI (que será reaproveitado pelo init e fará a colheita).",
      },
      {
        id: 7,
        question: "Por que kill -9 não consegue matar processos em estado D?",
        hint: "Pense em quem está executando esse processo nesse momento.",
        answer:
          "Estado D (uninterruptible sleep) significa que o processo está dentro do kernel esperando uma operação de I/O completar (geralmente disco ou NFS). Sinais só são entregues quando o processo volta ao espaço de usuário. Enquanto preso em D, ignora qualquer sinal — inclusive SIGKILL. Solução: corrigir o I/O subjacente (cabo de disco, NFS travado, controladora).",
      },
    ],
    references: [
      { title: "htop — site oficial", url: "https://htop.dev/" },
      { title: "Manpage ps (Debian)", url: "https://manpages.debian.org/bookworm/procps/ps.1.en.html" },
      { title: "Manpage signal(7)", url: "https://manpages.debian.org/bookworm/manpages/signal.7.en.html" },
      { title: "Debian Handbook — System administration", url: "https://debian-handbook.info/browse/stable/" },
    ],
  },

  {
    id: "systemd",
    title: "Systemd e Serviços",
    icon: "🚀",
    category: "Sistema",
    description: "Iniciar, parar, habilitar, monitorar e criar serviços com systemctl no Debian moderno.",
    objectives: [
      "Entender o que é systemd e por que substituiu o init clássico",
      "Listar, iniciar, parar, reiniciar e recarregar serviços",
      "Habilitar e desabilitar serviços no boot, com diferença clara entre os dois",
      "Ver status, dependências e logs de qualquer serviço",
      "Criar um serviço próprio com unit file e edição segura via override",
      "Trocar entre targets (modo gráfico, multiusuário, rescue)",
    ],
    content: [
      `Imagine que o seu Debian é uma fábrica gigante e systemd é o supervisor de chão de fábrica. Quando o sistema liga, alguém precisa decidir a ordem em que as máquinas (serviços) são acionadas: a rede sobe antes do servidor web; o disco precisa estar montado antes do banco de dados começar; o teclado precisa funcionar antes da tela de login aparecer. Antes do systemd, essa coordenação era feita por scripts shell encadeados (o velho System V init), que rodavam um de cada vez, em ordem fixa, do começo ao fim. systemd revolucionou isso: ele entende dependências entre serviços, paraleliza o que dá pra paralelizar, e oferece logs unificados, timers, montagens e até container leve — tudo numa ferramenta só.`,
      `O motivo de existir é prático: boots ficaram drasticamente mais rápidos (um Debian moderno boota em 3-5 segundos contra 30+ do antigo), gerenciamento ficou consistente (um único comando, \`systemctl\`, faz tudo), e diagnóstico ficou viável (\`journalctl\` substitui caçar arquivos de log espalhados). Houve resistência da comunidade — muita gente acusou systemd de "fazer demais" e violar a filosofia Unix de "uma ferramenta para cada coisa" —, mas hoje praticamente todas as grandes distros (Debian, Ubuntu, Fedora, Arch, openSUSE) usam systemd como padrão. Aprender é incontornável.`,
      `Vocabulário essencial. **Unit** é a unidade básica que systemd gerencia; pode ser um serviço (\`.service\`), um timer (\`.timer\`), uma montagem (\`.mount\`), um socket (\`.socket\`), um target (\`.target\`) e mais. **Service** é o tipo mais comum — descreve um processo de longa duração (nginx, ssh, cron). **Target** é um agrupamento que define um estado do sistema (\`graphical.target\` para desktop, \`multi-user.target\` para servidor, \`rescue.target\` para manutenção). **Daemon** é um processo que roda em segundo plano sem terminal — quase todo serviço é um daemon. **PID 1** é o próprio systemd, o primeiro processo que o kernel inicia depois do boot.`,
      `Os arquivos de unit moram em três lugares principais e a hierarquia importa muito. \`/lib/systemd/system/\` contém os arquivos instalados pelos pacotes — quando você faz \`apt install nginx\`, é lá que aparece o \`nginx.service\`. Você **não edita** esses arquivos, porque o próximo upgrade os sobrescreve. \`/etc/systemd/system/\` é onde você coloca seus próprios serviços e overrides — esses sobrevivem a updates. \`/run/systemd/system/\` contém units gerados em tempo de execução (volátil, perde no reboot). A regra mental é: leitura sempre considera os três (com \`/etc\` ganhando prioridade sobre \`/lib\`); escrita você sempre faz em \`/etc\` (direto ou via \`systemctl edit\`).`,
      `Confusão número um do iniciante: misturar \`enable\` com \`start\`. \`enable\` configura o serviço para iniciar no PRÓXIMO boot, criando links simbólicos no diretório do target apropriado. \`start\` inicia o serviço AGORA, neste boot. São operações independentes: você pode habilitar sem iniciar (vai começar no próximo reboot) ou iniciar sem habilitar (roda agora mas não no próximo boot). O atalho \`enable --now\` faz os dois ao mesmo tempo, e é o que você quer 95% das vezes. Equivalentemente, \`disable --now\` desabilita do boot e para imediatamente.`,
      `Confusão número dois: editar \`/lib/systemd/system/nginx.service\` direto e perder tudo no upgrade. A forma certa é \`sudo systemctl edit nginx\`, que abre um arquivo em \`/etc/systemd/system/nginx.service.d/override.conf\` onde você só sobrescreve as diretivas que quer mudar. Esse arquivo é mesclado com o original em tempo de execução, e sobrevive a qualquer atualização do pacote. Para ver o resultado final mesclado: \`systemctl cat nginx\`.`,
      `Quando algo dá errado com um serviço, o fluxo é sempre o mesmo: \`systemctl status NOME\` mostra o estado atual e as últimas linhas de log. Se isso não bastar, \`sudo journalctl -u NOME -n 100\` mostra as 100 linhas mais recentes do log daquele serviço. Adicione \`-f\` para acompanhar em tempo real. Em 10 segundos você sabe se o serviço está rodando, quando começou, quanto consome e por que falhou.`,
      `Targets substituem os antigos runlevels. \`systemctl get-default\` mostra qual target o sistema entra no boot. \`sudo systemctl set-default multi-user.target\` transforma seu desktop em servidor (sem GNOME no próximo boot). \`systemctl isolate rescue.target\` muda imediatamente para modo de manutenção. Para reiniciar ou desligar, \`systemctl reboot\` e \`systemctl poweroff\`.`,
    ],
    commands: [
      {
        command: "systemctl status NOME",
        description: "Mostra estado completo do serviço, PID, memória e últimas linhas de log.",
        example: "systemctl status ssh",
        output: "● ssh.service - OpenBSD Secure Shell server\n     Loaded: loaded (/lib/systemd/system/ssh.service; enabled)\n     Active: active (running) since Mon 2024-04-22 09:14:33 -03; 2 days ago",
      },
      {
        command: "sudo systemctl start / stop / restart / reload",
        description: "Controle imediato do serviço. reload recarrega config sem matar conexões.",
        example: "sudo systemctl restart nginx",
      },
      {
        command: "sudo systemctl enable --now NOME",
        description: "Habilita no boot E inicia agora. Atalho indispensável.",
        example: "sudo systemctl enable --now ssh",
      },
      {
        command: "sudo systemctl disable --now NOME",
        description: "Desabilita do boot E para agora.",
        example: "sudo systemctl disable --now bluetooth",
      },
      {
        command: "systemctl is-active / is-enabled / is-failed NOME",
        description: "Respostas curtas e scriptáveis sobre o estado do serviço.",
        example: "systemctl is-active nginx",
        output: "active",
      },
      {
        command: "systemctl list-units --type=service",
        description: "Lista todos os serviços ativos no momento.",
        example: "systemctl list-units --type=service --state=running",
        flags: [
          { flag: "--state=failed", description: "Só serviços que falharam" },
          { flag: "--state=running", description: "Só rodando" },
          { flag: "--all", description: "Inclui inativos" },
        ],
      },
      {
        command: "systemctl list-unit-files --type=service",
        description: "Lista todos os arquivos de unidade instalados (rodando ou não).",
        example: "systemctl list-unit-files --type=service | grep enabled",
      },
      {
        command: "systemctl get-default / set-default",
        description: "Ver ou trocar o target padrão (modo de operação no boot).",
        example: "sudo systemctl set-default multi-user.target",
      },
      {
        command: "sudo systemctl daemon-reload",
        description: "Recarrega definições de unit files após editar/criar. Necessário antes de start em serviço novo.",
        example: "sudo systemctl daemon-reload",
      },
      {
        command: "sudo systemctl edit NOME",
        description: "Edita override de um serviço. Cria /etc/systemd/system/NOME.service.d/override.conf.",
        example: "sudo systemctl edit nginx",
      },
      {
        command: "systemctl cat NOME",
        description: "Mostra o conteúdo final mesclado do unit file (original + overrides).",
        example: "systemctl cat ssh",
      },
      {
        command: "sudo systemctl mask / unmask",
        description: "Bloqueia COMPLETAMENTE um serviço (mais forte que disable). Cria link para /dev/null.",
        example: "sudo systemctl mask cups",
      },
      {
        command: "systemctl list-dependencies NOME",
        description: "Mostra árvore de dependências de um serviço.",
        example: "systemctl list-dependencies nginx",
      },
      {
        command: "systemctl reboot / poweroff / suspend",
        description: "Reiniciar, desligar, suspender (substituem comandos antigos).",
        example: "sudo systemctl reboot",
      },
      {
        command: "systemctl isolate TARGET",
        description: "Muda imediatamente para um target (sem reiniciar).",
        example: "sudo systemctl isolate multi-user.target",
      },
    ],
    tips: [
      {
        type: "info",
        title: "enable não é start",
        content:
          "enable habilita o serviço para iniciar no PRÓXIMO boot. Não inicia agora. Para fazer as duas coisas: 'sudo systemctl enable --now NOME'. Mesma lógica para 'disable --now'.",
      },
      {
        type: "warning",
        title: "Sempre daemon-reload depois de editar .service",
        content:
          "Se você editou um .service ou criou um novo, systemd ainda não sabe. Rode 'sudo systemctl daemon-reload' antes de 'systemctl start NOME'. Sem isso, suas mudanças não pegam e você fica tentando entender por quê.",
      },
      {
        type: "success",
        title: "Edite sempre via systemctl edit",
        content:
          "Em vez de modificar /lib/systemd/system/nginx.service (sobrescrito no próximo upgrade), use 'sudo systemctl edit nginx'. Cria override em /etc/systemd/system/nginx.service.d/ que sobrevive a updates. Para limpar override: 'sudo systemctl revert nginx'.",
      },
      {
        type: "danger",
        title: "Nunca defina ExecStart com comando relativo",
        content:
          "systemd não tem PATH como o seu shell. ExecStart=meu-script.sh falha silenciosamente. Use sempre caminho absoluto: ExecStart=/usr/local/bin/meu-script.sh. Erro clássico que faz seu serviço falhar 100% das vezes.",
      },
      {
        type: "info",
        title: "mask é o disable nuclear",
        content:
          "disable só remove os links de start; um pacote pode reabilitar. mask cria link para /dev/null impossibilitando start até você dar unmask. Útil para serviços teimosos como cups (impressão) ou avahi (descoberta de rede) que voltam sozinhos.",
      },
    ],
    practiceLabs: [
      {
        title: "Habilitar SSH no boot e diagnosticar",
        goal: "Workflow completo: instalar, habilitar, conferir e ver logs de um serviço real.",
        steps: [
          "Instale o pacote openssh-server.",
          "Habilite no boot e inicie agora com enable --now.",
          "Cheque o status detalhado.",
          "Confirme estado curto com is-active.",
          "Veja últimas 20 linhas de log.",
          "Acompanhe logs em tempo real (Ctrl+C sai).",
        ],
        command: `# 1) Instalar
sudo apt install -y openssh-server

# 2) Habilitar e iniciar
sudo systemctl enable --now ssh

# 3) Status completo
systemctl status ssh

# 4) Resposta curta
systemctl is-active ssh

# 5) Logs
sudo journalctl -u ssh -n 20

# 6) Tempo real
sudo journalctl -u ssh -f`,
        verify:
          "'systemctl is-active ssh' responde 'active'. 'systemctl status ssh' mostra Active: active (running). De outra máquina: ssh USUARIO@IP_DO_DEBIAN.",
      },
      {
        title: "Criar serviço próprio para um script",
        goal: "Criar um .service do zero com restart automático e gerenciar com systemctl.",
        steps: [
          "Crie um script de teste em /usr/local/bin com loop e log.",
          "Crie um arquivo .service em /etc/systemd/system/.",
          "daemon-reload para systemd ver o novo service.",
          "enable --now para habilitar e iniciar.",
          "Confirme funcionamento via status e journalctl.",
          "Mate o processo manualmente e veja o systemd reiniciá-lo.",
        ],
        command: `# 1) Script de teste
sudo tee /usr/local/bin/meu-script.sh > /dev/null << 'EOF'
#!/bin/bash
while true; do
  echo "[$(date)] meu-script ativo (PID $$)"
  sleep 30
done
EOF
sudo chmod +x /usr/local/bin/meu-script.sh

# 2) .service
sudo tee /etc/systemd/system/meu-script.service > /dev/null << 'EOF'
[Unit]
Description=Meu Script de Teste
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/meu-script.sh
Restart=on-failure
RestartSec=5s
StandardOutput=journal

[Install]
WantedBy=multi-user.target
EOF

# 3) daemon-reload e enable + start
sudo systemctl daemon-reload
sudo systemctl enable --now meu-script.service

# 4) Conferir
systemctl status meu-script.service

# 5) Logs
sudo journalctl -u meu-script.service -f
# (Ctrl+C para sair)

# 6) Mate o PID e veja systemd recriar
sudo pkill -f meu-script.sh
systemctl status meu-script.service

# Para remover depois:
# sudo systemctl disable --now meu-script.service
# sudo rm /etc/systemd/system/meu-script.service
# sudo systemctl daemon-reload`,
        verify:
          "'systemctl status meu-script.service' mostra Active: active. journalctl mostra a mensagem aparecendo a cada 30s. Após pkill, em 5s o serviço reinicia com novo PID.",
      },
      {
        title: "Override seguro de um serviço do sistema",
        goal: "Modificar parâmetros de um serviço existente sem perder tudo no upgrade.",
        steps: [
          "Veja config atual do ssh com systemctl cat.",
          "Crie um override aumentando RestartSec.",
          "Confirme a mescla com systemctl cat.",
          "Reverta para limpar.",
        ],
        command: `# 1) Ver config atual
systemctl cat ssh

# 2) Criar override
sudo systemctl edit ssh
# No editor que abre, adicione:
# [Service]
# RestartSec=15s

# 3) daemon-reload e ver mescla
sudo systemctl daemon-reload
systemctl cat ssh
# Deve mostrar o original + a seção de override

# 4) Reverter
sudo systemctl revert ssh
sudo systemctl daemon-reload`,
        verify:
          "Após editar, 'systemctl cat ssh' mostra o conteúdo do /lib/systemd/system/ssh.service e em seguida o seu override.conf. Após revert, o override some.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Diferença entre 'enable' e 'start'?",
        hint: "Pense em quando cada um age.",
        answer:
          "enable configura o serviço para iniciar no PRÓXIMO boot (cria links simbólicos no target). start inicia o serviço AGORA, neste boot. São independentes. 'enable --now' faz os dois.",
      },
      {
        id: 2,
        question: "Como ver se o serviço nginx está rodando?",
        hint: "Há dois comandos — um curto e um detalhado.",
        answer:
          "systemctl status nginx (estado completo com PID, memória, últimas linhas de log) ou systemctl is-active nginx (resposta curta 'active' ou 'inactive', útil em scripts).",
      },
      {
        id: 3,
        question: "Como ver logs do nginx em tempo real?",
        hint: "journalctl tem flag de follow.",
        answer:
          "sudo journalctl -u nginx -f. O -u filtra pela unit (serviço) e -f acompanha em tempo real (similar a tail -f). Ctrl+C sai.",
      },
      {
        id: 4,
        question: "Como impedir COMPLETAMENTE um serviço de iniciar (mais forte que disable)?",
        hint: "Existe um comando que cria link simbólico para /dev/null.",
        answer:
          "sudo systemctl mask NOME — cria link para /dev/null. Tentativas de start retornam erro até dar 'unmask'. Útil para serviços que voltam sozinhos via dependências.",
      },
      {
        id: 5,
        question: "Onde colocar um arquivo .service que você criou?",
        hint: "Há um diretório para uso do administrador, separado dos pacotes.",
        answer:
          "/etc/systemd/system/SEU.service. Em seguida 'sudo systemctl daemon-reload' para systemd reconhecer. Nunca em /lib/systemd/system/ (sobrescrito por upgrades).",
      },
      {
        id: 6,
        question: "Como editar nginx.service preservando suas mudanças após upgrade?",
        hint: "Existe um comando que cria override automaticamente.",
        answer:
          "sudo systemctl edit nginx — cria /etc/systemd/system/nginx.service.d/override.conf onde você só especifica o que quer sobrescrever. Esse arquivo sobrevive a updates do pacote.",
      },
      {
        id: 7,
        question: "Como transformar um Debian desktop em servidor sem GUI a partir do próximo boot?",
        hint: "Targets substituem runlevels.",
        answer:
          "sudo systemctl set-default multi-user.target. No próximo boot, o sistema sobe sem o display manager (GNOME/KDE), apenas console. Para reverter: 'sudo systemctl set-default graphical.target'.",
      },
    ],
    references: [
      { title: "Manpage systemd.service", url: "https://manpages.debian.org/bookworm/systemd/systemd.service.5.en.html" },
      { title: "Wiki Debian — systemd", url: "https://wiki.debian.org/systemd" },
      { title: "Manpage systemctl", url: "https://manpages.debian.org/bookworm/systemd/systemctl.1.en.html" },
      { title: "Freedesktop — systemd documentation", url: "https://www.freedesktop.org/wiki/Software/systemd/" },
    ],
  },

  {
    id: "logs-journalctl",
    title: "Logs e journalctl — Diagnóstico do Sistema",
    icon: "📋",
    category: "Sistema",
    description: "Investigar tudo que acontece no Debian usando journalctl, /var/log, dmesg e ferramentas clássicas.",
    objectives: [
      "Entender a coexistência de journald e syslog no Debian",
      "Usar journalctl com filtros por unidade, tempo e prioridade",
      "Conhecer arquivos clássicos em /var/log (syslog, auth.log, kern.log)",
      "Configurar persistência de logs e limites de tamanho",
      "Ler dmesg para problemas de hardware e kernel",
      "Adicionar mensagens de scripts no log com logger",
    ],
    content: [
      `Quando algo dá errado no Linux, a resposta quase sempre está nos logs. Pense neles como a caixa-preta de um avião: registrando tudo o que aconteceu, em sequência, com timestamp. A diferença é que, no Linux, você não precisa esperar o "acidente" — pode abrir a caixa-preta agora e investigar. Saber onde olhar e como filtrar é, sem exagero, a habilidade número um de quem administra Linux. Sem ela, você fica chutando; com ela, você diagnostica em segundos.`,
      `O Debian moderno tem dois sistemas de log convivendo em paralelo, e entender isso evita confusão. **journald** é o componente do systemd que coleta todos os logs do sistema em formato binário, indexado, em \`/var/log/journal/\`. Você consulta com \`journalctl\` (que faz busca rápida, filtros poderosos, formatação flexível). **rsyslog** é o sistema clássico, herança do Unix, que escreve em texto puro nos arquivos tradicionais de \`/var/log/\` (\`syslog\`, \`auth.log\`, \`kern.log\` etc.). O Debian instala os dois por padrão. A regra prática: use \`journalctl\` primeiro, é mais poderoso; recorra a \`/var/log/*\` quando o serviço escreve em formato customizado próprio (nginx, apache, postgres têm pastas próprias).`,
      `Por que dois sistemas? Histórico. syslog existe desde 1980, é o padrão Unix de fato, e milhares de scripts e programas dependem dele. journald veio com systemd em ~2010 e oferece vantagens enormes: estrutura em campos (você pode filtrar por unit, prioridade, executável, hostname), velocidade de busca, integração com cgroups, e logs assinados criptograficamente para detectar adulteração. A coexistência é prática: novos serviços usam journald; software antigo continua escrevendo em syslog; o rsyslog inclusive lê do journald e duplica em \`/var/log/syslog\` para compatibilidade.`,
      `Vocabulário. Cada entrada no journal tem uma **prioridade** (severity) numérica de 0 a 7, herdada do syslog clássico. Do mais crítico ao mais verboso: **0 emerg** (sistema inutilizável), **1 alert** (agir imediatamente), **2 crit** (condição crítica), **3 err** (erro), **4 warning** (aviso), **5 notice** (normal mas significativo), **6 info** (informativo), **7 debug** (debug). Quando você usa \`-p N\`, journalctl mostra tudo até essa prioridade — então \`-p warning\` inclui warning, err, crit, alert, emerg. Os campos importantes de cada linha: timestamp, hostname, unit (qual serviço escreveu), PID, e a mensagem em si.`,
      `Confusão clássica do iniciante: rodar \`journalctl\` puro, ver milhões de linhas e fechar achando que "não dá pra usar". A graça está nos filtros. \`-u nginx\` mostra só do nginx. \`-f\` é tempo real (como tail -f). \`-n 50\` últimas 50 linhas. \`-p err\` só erros. \`--since today\` só hoje. \`--since '1 hour ago'\` última hora. E você combina: \`sudo journalctl -u nginx -p err --since today\` te dá em 1 segundo todos os erros do nginx hoje. Domine essa combinação e nunca mais se perde em logs.`,
      `Outro engano comum: achar que \`-b -1\` (boot anterior) sempre funciona. Por padrão, no Debian, o journal é volátil — vive em \`/run/log/journal/\` (memória) e some no reboot. Para ter persistência, você precisa criar \`/var/log/journal/\` e reiniciar o journald (ou instalar o pacote \`systemd\` que já cria esse diretório em alguns casos). Sem persistência, depois de um crash misterioso você reinicia, vai investigar e — surpresa — não tem nada. Habilite persistência no primeiro dia de uso de qualquer servidor sério.`,
      `Os arquivos clássicos em \`/var/log/\` continuam relevantes. \`/var/log/syslog\` é o caldeirão geral. \`/var/log/auth.log\` registra autenticação: sudo, su, ssh, login do desktop — primeiro lugar para checar tentativas de invasão. \`/var/log/kern.log\` é só kernel. \`/var/log/dpkg.log\` registra cada \`apt install\` e \`apt remove\` — útil para rastrear "o que mudei nos últimos 30 dias?". \`/var/log/apt/history.log\` faz a mesma coisa em formato mais legível. Cada serviço pesado (nginx, apache, mysql, postgres) tem sua própria pasta dentro de \`/var/log/\`. Esses arquivos são rotacionados automaticamente pelo \`logrotate\` (\`/etc/logrotate.d/\`): logs antigos viram \`.gz\` e são excluídos depois de algumas semanas, evitando que encham o disco.`,
      `\`dmesg\` é uma janela para o kernel ring buffer — uma área de memória onde o kernel escreve mensagens em tempo real (boot, USB plugado, erro de disco, falha de rede). Hoje é equivalente a \`journalctl -k\`, mas \`dmesg -w\` (watch) tem a vantagem de ser instantâneo e não exigir sudo na maioria dos sistemas. Quando um pendrive não monta, é \`dmesg | tail\`. Quando há suspeita de erro de disco, \`dmesg -l err\`. Para timestamps legíveis, \`dmesg -T\`.`,
      `Ao final deste capítulo, você vai conseguir investigar qualquer problema do sistema cruzando journalctl, arquivos clássicos e dmesg, sabendo qual ferramenta usar para cada pergunta. Vai descobrir tentativas de login SSH falhadas em segundos, identificar exatamente quando um serviço começou a falhar e por quê, configurar persistência e rotação para que seu /var/log nunca exploda, e até inserir mensagens dos seus próprios scripts no journal usando logger. É o fim de "o computador travou e não sei por que".`,
    ],
    commands: [
      {
        command: "sudo journalctl",
        description: "Lê todos os logs do journal (use less para navegar).",
        example: "sudo journalctl -n 100",
        flags: [
          { flag: "-f", description: "Follow (tempo real)" },
          { flag: "-n N", description: "Últimas N linhas" },
          { flag: "-r", description: "Reverso (mais novo primeiro)" },
          { flag: "-u SERVICE", description: "Só do serviço" },
          { flag: "-p PRIO", description: "Só com prioridade ≥ PRIO" },
          { flag: "-b", description: "Só do boot atual" },
          { flag: "-b -1", description: "Boot anterior" },
          { flag: "-k", description: "Só kernel" },
          { flag: "--since TIME", description: "Desde TIME" },
          { flag: "--until TIME", description: "Até TIME" },
          { flag: "-t TAG", description: "Filtra por tag (ex: do logger)" },
          { flag: "-g 'regex'", description: "Filtra por regex no conteúdo" },
        ],
      },
      {
        command: "sudo journalctl -u NOME -f",
        description: "Acompanha logs de um serviço específico em tempo real.",
        example: "sudo journalctl -u nginx -f",
      },
      {
        command: "sudo journalctl --since today -p err",
        description: "Erros (e mais críticos) do dia atual. Combinação muito útil.",
        example: "sudo journalctl --since today -p err",
      },
      {
        command: "sudo journalctl --list-boots",
        description: "Lista todos os boots conhecidos com índice e timestamp.",
        example: "sudo journalctl --list-boots",
        output: "-1 abc123  Mon 2024-04-22 09:00 — Mon 2024-04-22 18:30\n 0 def456  Mon 2024-04-22 18:31 — now",
      },
      {
        command: "sudo journalctl --disk-usage",
        description: "Quanto espaço o journal está ocupando.",
        example: "sudo journalctl --disk-usage",
        output: "Archived and active journals take up 1.2G in the file system.",
      },
      {
        command: "sudo journalctl --vacuum-size=500M",
        description: "Apaga arquivos antigos do journal até sobrar só 500MB.",
        example: "sudo journalctl --vacuum-size=500M",
      },
      {
        command: "sudo journalctl --vacuum-time=7d",
        description: "Mantém só os últimos 7 dias.",
        example: "sudo journalctl --vacuum-time=7d",
      },
      {
        command: "dmesg",
        description: "Mensagens do kernel ring buffer (boot, hardware, USB, erros de disco).",
        example: "sudo dmesg | tail -30",
        flags: [
          { flag: "-w", description: "Follow (tempo real)" },
          { flag: "-T", description: "Timestamp legível" },
          { flag: "-l err", description: "Filtra por nível" },
          { flag: "-H", description: "Output paginado e colorido" },
        ],
      },
      {
        command: "sudo tail -f /var/log/syslog",
        description: "Acompanha o log clássico do sistema em tempo real.",
        example: "sudo tail -f /var/log/syslog",
      },
      {
        command: "sudo less /var/log/auth.log",
        description: "Logs de autenticação (sudo, ssh, login do desktop).",
        example: "sudo grep 'Failed password' /var/log/auth.log | tail -20",
      },
      {
        command: "sudo grep -i error /var/log/syslog",
        description: "Busca por erros no syslog (case insensitive).",
        example: "sudo grep -i error /var/log/syslog | tail -50",
      },
      {
        command: "logger",
        description: "Insere mensagem no syslog (e journal). Ideal em scripts shell.",
        example: 'logger -t meu-script "Backup concluido com sucesso"',
        flags: [
          { flag: "-t TAG", description: "Tag para identificar suas mensagens" },
          { flag: "-p PRIO", description: "Prioridade (ex: user.err)" },
        ],
      },
      {
        command: "tail -F /var/log/nginx/access.log",
        description: "Acompanha logs de aplicações que escrevem em arquivo próprio (-F segue rotação).",
        example: "sudo tail -F /var/log/nginx/access.log",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Servidor lento? Comece pelos logs",
        content:
          "sudo journalctl -p err --since '1 hour ago' — mostra todos os erros da última hora. Se aparecer 'out of memory', 'kernel: BUG', 'I/O error', você achou o problema sem chutar.",
      },
      {
        type: "warning",
        title: "Não deixe o journal crescer infinitamente",
        content:
          "Em servidor que roda há meses, o journal pode passar de 10 GB e encher /var/log. Configure SystemMaxUse=1G em /etc/systemd/journald.conf e reinicie journald. Sem isso, o disco enche e o boot quebra.",
      },
      {
        type: "success",
        title: "logger em scripts é ouro",
        content:
          "Adicione 'logger -t meu-backup \"Backup iniciado em $(date)\"' no início e fim de scripts importantes. Você consulta tudo via 'journalctl -t meu-backup'. Nunca mais perde rastro do que rodou.",
      },
      {
        type: "danger",
        title: "Não delete /var/log/* manualmente",
        content:
          "Apagar arquivos com rm pode deixar serviços confusos (eles ainda apontam para o inode antigo). Use logrotate (já instalado) ou 'journalctl --vacuum-*' para limpar. Para serviços, sempre 'truncate -s 0 arquivo.log' em vez de rm.",
      },
      {
        type: "info",
        title: "journalctl -g é regex",
        content:
          "Em vez de 'journalctl | grep palavra', prefira 'journalctl -g palavra'. É mais rápido (filtra na origem) e aceita regex completo. Combine com -u, -p e --since para precisão cirúrgica.",
      },
    ],
    practiceLabs: [
      {
        title: "Investigar tentativas de login SSH falhadas",
        goal: "Auditoria real — descobrir se alguém tentou invadir seu servidor.",
        steps: [
          "Liste tentativas de login SSH falhadas das últimas 24 horas.",
          "Conte quantas foram no total.",
          "Veja os IPs de origem mais frequentes.",
          "Compare com o /var/log/auth.log clássico.",
        ],
        command: `# Tentativas falhadas nas ultimas 24h
sudo journalctl -u ssh --since '1 day ago' | grep 'Failed password'

# Quantas tentativas
sudo journalctl -u ssh --since '1 day ago' | grep -c 'Failed password'

# Os 10 IPs mais ativos
sudo journalctl -u ssh --since '1 day ago' \\
  | grep 'Failed password' \\
  | grep -oP 'from \\K[0-9.]+' \\
  | sort | uniq -c | sort -rn | head -10

# Versao classica via auth.log
sudo grep 'Failed password' /var/log/auth.log | tail -20`,
        verify:
          "Em servidor exposto à internet, espere ver muitas tentativas (centenas/milhares por dia de bots). Em servidor interno, deve ser zero. Se ver muitas, considere mudar a porta SSH ou instalar fail2ban.",
      },
      {
        title: "Configurar persistência e tamanho do journal",
        goal: "Garantir que logs sobrevivem a reboots e não enchem o disco.",
        steps: [
          "Crie /var/log/journal para ativar persistência.",
          "Edite /etc/systemd/journald.conf limitando a 1GB.",
          "Reinicie journald.",
          "Confirme com --list-boots e --disk-usage.",
        ],
        command: `# 1) Habilitar persistencia
sudo mkdir -p /var/log/journal
sudo systemd-tmpfiles --create --prefix /var/log/journal

# 2) Editar config
sudo nano /etc/systemd/journald.conf
# Descomente e ajuste:
# SystemMaxUse=1G
# SystemKeepFree=500M
# MaxRetentionSec=1month

# 3) Reiniciar journald
sudo systemctl restart systemd-journald

# 4) Confirmar
sudo journalctl --disk-usage
sudo journalctl --list-boots`,
        verify:
          "'journalctl --disk-usage' mostra uso < 1G após algumas semanas. 'journalctl --list-boots' lista todos os boots desde a habilitação.",
      },
      {
        title: "Usar logger em script de backup",
        goal: "Integrar saída de scripts próprios ao journal do sistema.",
        steps: [
          "Crie um script que loga início, progresso e fim com logger.",
          "Execute o script.",
          "Consulte tudo via journalctl filtrando pela tag.",
        ],
        command: `# 1) Script de exemplo
cat > /tmp/meu-backup.sh << 'EOF'
#!/bin/bash
TAG=meu-backup
logger -t $TAG "Iniciando backup as $(date)"
sleep 2
logger -t $TAG -p user.warning "Pasta /tmp/teste inexistente, pulando"
sleep 1
logger -t $TAG "Backup finalizado com sucesso"
EOF
chmod +x /tmp/meu-backup.sh

# 2) Executar
/tmp/meu-backup.sh

# 3) Ver no journal
journalctl -t meu-backup --since '5 min ago'

# 4) So warnings ou pior
journalctl -t meu-backup -p warning --since '5 min ago'`,
        verify:
          "journalctl mostra as 3 mensagens com a tag meu-backup. O filtro -p warning mostra só a do meio.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como ver logs do nginx em tempo real?",
        hint: "journalctl tem flag de unit e de follow.",
        answer: "sudo journalctl -u nginx -f. -u filtra pela unit, -f acompanha em tempo real.",
      },
      {
        id: 2,
        question: "Como ver erros do sistema na última hora?",
        hint: "Combine prioridade com filtro de tempo.",
        answer:
          "sudo journalctl -p err --since '1 hour ago'. -p err mostra prioridade err e mais críticas (crit, alert, emerg).",
      },
      {
        id: 3,
        question: "Como ver logs do boot anterior depois que o sistema travou e reiniciou?",
        hint: "Há uma flag para escolher o boot.",
        answer:
          "sudo journalctl -b -1. Funciona apenas se persistência estiver habilitada (/var/log/journal/ existir). Sem isso, logs somem em todo reboot.",
      },
      {
        id: 4,
        question: "Como liberar espaço apagando logs antigos?",
        hint: "journalctl tem um comando especializado.",
        answer:
          "sudo journalctl --vacuum-size=500M (deixa só 500MB no total) ou sudo journalctl --vacuum-time=7d (mantém só últimos 7 dias).",
      },
      {
        id: 5,
        question: "Onde ficam os logs de tentativas de login SSH?",
        hint: "Há um arquivo clássico e uma forma via journalctl.",
        answer:
          "/var/log/auth.log (formato texto) ou via journalctl: 'sudo journalctl -u ssh'. Ambas mostram a mesma informação no Debian padrão.",
      },
      {
        id: 6,
        question: "Como mandar uma mensagem para o syslog dentro de um script bash?",
        hint: "Existe um comando dedicado.",
        answer:
          "logger -t TAG 'mensagem'. Depois 'journalctl -t TAG' (ou grep no /var/log/syslog) mostra todas as mensagens com aquela tag. Útil para rastrear scripts.",
      },
      {
        id: 7,
        question: "Por que dmesg pode ser preferido a journalctl -k em alguns casos?",
        hint: "Pense em latência e permissões.",
        answer:
          "dmesg lê direto do kernel ring buffer (memória), é instantâneo e em muitos sistemas não exige sudo (configurável via kernel.dmesg_restrict). journalctl -k tem o mesmo conteúdo mas precisa do journald rodando e geralmente pede sudo.",
      },
    ],
    references: [
      { title: "Manpage journalctl", url: "https://manpages.debian.org/bookworm/systemd/journalctl.1.en.html" },
      { title: "Manpage journald.conf", url: "https://manpages.debian.org/bookworm/systemd/journald.conf.5.en.html" },
      { title: "Manpage dmesg", url: "https://manpages.debian.org/bookworm/util-linux/dmesg.1.en.html" },
      { title: "Wiki Debian — Logging", url: "https://wiki.debian.org/SystemLogging" },
    ],
  },

  {
    id: "cron-timers",
    title: "Agendamento — cron e systemd timers",
    icon: "⏰",
    category: "Sistema",
    description: "Agendar tarefas no Debian com cron clássico e systemd timers, escolhendo a ferramenta certa.",
    objectives: [
      "Editar crontab de usuário e do sistema",
      "Entender a sintaxe de cron (5 campos + atalhos)",
      "Evitar as armadilhas clássicas: PATH, output silencioso, caminhos relativos",
      "Criar systemd timer + service para tarefas modernas",
      "Usar Persistent=true para recuperar tarefas perdidas",
      "Decidir entre cron e timer caso a caso",
    ],
    content: [
      `Você precisa rodar um backup todo dia às 3 da manhã, fazer uma verificação de disco a cada hora, ou enviar relatório semanal toda segunda? Programadores chamam isso de "tarefa agendada" e existe há tanto tempo no Unix que dois mecanismos diferentes coexistem hoje no Debian: o cron, veterano dos anos 70, simples e onipresente; e os systemd timers, modernos, mais robustos, integrados ao journal. Pense neles como dois despertadores na mesma cabeceira: o cron é o relógio analógico que sempre funcionou e você sabe usar de olhos fechados; o timer é o smartphone com alarme inteligente que sabe não tocar de madrugada e dispara mesmo se você dormiu até tarde.`,
      `Por que dois sistemas? Cron é simples e estável: instalar uma vez e esquecer. Mas tem limitações sérias. Se a máquina estava desligada na hora agendada, a tarefa simplesmente não roda — só executa de novo no próximo horário. Os logs vão para o e-mail local (que ninguém configura) e somem no éter. Não há notificação de falha, não há restart automático, não há controle fino de dependências. Systemd timers nasceram para resolver tudo isso: logs unificados em journalctl, recuperação de execuções perdidas (\`Persistent=true\`), dependências entre tarefas, integração total com a infraestrutura de serviços.`,
      `Vocabulário rápido. **Crontab** é o arquivo (na verdade, um arquivo por usuário) que lista as tarefas agendadas. **Cron daemon** (\`cron\` no Debian) é o processo que lê esses arquivos e dispara os comandos no horário certo. **Systemd timer** é uma unit de tipo .timer que dispara uma unit .service no horário programado — sempre em pares. **OnCalendar** é a sintaxe de tempo dos timers (parecida com cron mas com mais flexibilidade). **Persistent** é a flag que faz o timer recuperar execuções perdidas se o sistema estava off.`,
      `A sintaxe do cron parece arcaica mas faz sentido depois que você entende. Cinco campos antes do comando, separados por espaço, representando minuto, hora, dia-do-mês, mês e dia-da-semana. Cada um aceita: número exato (\`30\`), asterisco (\`*\` = qualquer), lista (\`1,15,30\`), intervalo (\`9-17\`), passo (\`*/15\` = a cada 15). Logo, \`0 3 * * 1-5 /script.sh\` é "às 3:00 de segunda a sexta". E \`*/10 * * * *\` é "a cada 10 minutos, sempre". Os atalhos modernos (\`@daily\`, \`@hourly\`, \`@reboot\`) são mais legíveis para casos comuns. Para testar expressões sem assumir, use crontab.guru.`,
      `As armadilhas do cron são previsíveis e arruínam tarefas em produção. **Armadilha 1 — PATH limitado:** o cron não tem o \`$PATH\` do seu shell interativo. \`python3 script.py\` provavelmente falha porque \`python3\` não está em \`/usr/bin\` no PATH mínimo do cron. Use sempre caminhos absolutos: \`/usr/bin/python3 /home/usr/script.py\`. **Armadilha 2 — Output some:** cron envia stdout/stderr para o email local do usuário. Se não há servidor de email configurado (caso comum), a saída literalmente desaparece. Sempre redirecione: \`>> /var/log/script.log 2>&1\`. **Armadilha 3 — Variáveis de ambiente diferentes:** \`$HOME\`, \`$LANG\`, \`$LC_ALL\` podem estar diferentes do interativo. Defina explicitamente no início do crontab se importar.`,
      `Crontabs do sistema são diferentes dos de usuário em um detalhe: têm uma coluna a mais para o usuário que vai executar. \`/etc/crontab\` segue esse formato, e os arquivos em \`/etc/cron.d/\` também. Ainda mais simples: as pastas mágicas \`/etc/cron.hourly/\`, \`/etc/cron.daily/\`, \`/etc/cron.weekly/\`, \`/etc/cron.monthly/\`. Qualquer script executável (com \`chmod +x\`) jogado nelas roda na frequência correspondente, como root, sem precisar de sintaxe nenhuma. Útil para tarefas administrativas simples. Vários pacotes do Debian usam essas pastas (vide \`/etc/cron.daily/apt-compat\`).`,
      `Systemd timers exigem mais código mas oferecem muito mais. Você precisa criar dois arquivos: o \`.service\` que descreve o comando, com \`Type=oneshot\` (não fica rodando, executa e sai), e o \`.timer\` que diz quando disparar. \`OnCalendar=\` é a sintaxe de tempo: \`*-*-* 03:00:00\` é todo dia às 3h, \`Mon..Fri 09:00\` é dias úteis às 9h, \`*-*-1 00:00\` é dia 1 de cada mês, \`*:0/15\` é a cada 15 minutos, e os atalhos \`daily\`, \`weekly\`, \`monthly\`, \`hourly\` simplificam o comum. Adicione \`Persistent=true\` e o timer recupera execuções perdidas: se o sistema estava desligado às 3h, ele roda assim que voltar. \`AccuracySec=1min\` ajusta a precisão (padrão é 1min para economizar wakeups).`,
      `Quando escolher cada um? Cron ganha em simplicidade absoluta, especialmente em desktop pessoal ou servidor pequeno onde você tem só algumas tarefas e quer configurar em 30 segundos. Timer ganha em servidores sérios onde você quer logs auditáveis (journalctl), recuperação de execuções (Persistent), notificação de falha, dependências entre tarefas (\`Requires=banco.service\` no service do timer). Em produção moderna, a tendência é timer; em scripts pessoais e tarefas casuais, cron continua imbatível.`,
      `Ao final deste capítulo, você vai conseguir agendar qualquer tarefa repetitiva no Debian, sabendo decidir entre cron e timer com base no contexto, e evitando as armadilhas clássicas que fazem cron "não funcionar" para 90% dos iniciantes. Vai parar de manualmente lembrar de fazer backup, vai automatizar atualizações, e vai ter scripts rodando em background com logs auditáveis. É a base de todo Linux que precisa fazer coisas sozinho.`,
    ],
    commands: [
      {
        command: "crontab -e",
        description: "Edita seu crontab pessoal (cria se não existir).",
        example: "crontab -e",
      },
      {
        command: "crontab -l",
        description: "Lista o conteúdo atual do seu crontab.",
        example: "crontab -l",
      },
      {
        command: "crontab -r",
        description: "Remove TODO o seu crontab. Cuidado, não pede confirmação.",
        example: "crontab -r",
      },
      {
        command: "sudo crontab -e",
        description: "Edita crontab do root.",
        example: "sudo crontab -e",
      },
      {
        command: "sudo crontab -e -u USUARIO",
        description: "Edita crontab de outro usuário (precisa root).",
        example: "sudo crontab -e -u maria",
      },
      {
        command: "systemctl list-timers",
        description: "Lista todos os timers ativos com próximo disparo e último resultado.",
        example: "systemctl list-timers --all",
        output: "NEXT                        LEFT     LAST                        PASSED  UNIT\nTue 2024-04-23 03:00:00 -03 8h left  Mon 2024-04-22 03:00:00 -03 15h ago backup-home.timer",
      },
      {
        command: "sudo systemctl enable --now NOME.timer",
        description: "Habilita e inicia um timer (não confunda com o .service).",
        example: "sudo systemctl enable --now meu-backup.timer",
      },
      {
        command: "systemctl status NOME.timer",
        description: "Status do timer (próximo disparo, ativo desde, etc.).",
        example: "systemctl status meu-backup.timer",
      },
      {
        command: "sudo journalctl -u NOME.service",
        description: "Logs do serviço executado pelo timer.",
        example: "sudo journalctl -u meu-backup.service -n 50",
      },
      {
        command: "systemd-analyze calendar 'EXPRESSAO'",
        description: "Testa uma expressão OnCalendar mostrando próximas execuções.",
        example: "systemd-analyze calendar 'Mon..Fri 09:00'",
      },
      {
        command: "sudo run-parts /etc/cron.daily",
        description: "Executa todos os scripts de uma pasta cron manualmente (útil para testar).",
        example: "sudo run-parts --test /etc/cron.daily",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Use caminhos ABSOLUTOS no cron",
        content:
          "Cron não tem PATH normal. 'python3 script.py' vai falhar. Use '/usr/bin/python3 /home/wallyson/script.py'. Para descobrir o caminho correto, rode 'which python3' no terminal interativo.",
      },
      {
        type: "info",
        title: "Sempre redirecione output do cron",
        content:
          "Sem '> /tmp/log.txt 2>&1', o output vai para email local (que ninguém lê) e erros somem. Padrão útil: '0 3 * * * /script.sh >> /var/log/script.log 2>&1'. O 2>&1 redireciona stderr junto com stdout.",
      },
      {
        type: "success",
        title: "Timer > cron para servidor de produção",
        content:
          "Em servidor sério, prefira systemd timer: logs em journalctl auditáveis, Persistent=true recupera tarefas perdidas, dependências e notificação de falha integradas. Em desktop pessoal, cron é mais simples e suficiente.",
      },
      {
        type: "danger",
        title: "Cuidado com crontab -r",
        content:
          "crontab -r apaga seu crontab inteiro sem pedir confirmação e sem backup. Se a tecla cair perto do -e por engano, perdeu tudo. Hábito seguro: backup periódico com 'crontab -l > ~/crontab-backup.txt'.",
      },
      {
        type: "info",
        title: "OnCalendar aceita lista e ranges",
        content:
          "OnCalendar=Mon,Wed,Fri 09:00 = segunda, quarta e sexta. OnCalendar=Mon..Fri 09:00 = dias úteis. Combine com 'systemd-analyze calendar' para validar antes de habilitar.",
      },
    ],
    practiceLabs: [
      {
        title: "Backup diário com cron",
        goal: "Configurar backup automático da home toda madrugada às 3h.",
        steps: [
          "Crie script de backup em ~/scripts.",
          "Edite seu crontab.",
          "Adicione linha para rodar todo dia às 3h.",
          "Teste manualmente.",
          "Confirme que ficou no crontab -l.",
        ],
        command: `# 1) Script
mkdir -p ~/scripts
cat > ~/scripts/backup-home.sh << 'EOF'
#!/bin/bash
DATA=$(date +%Y%m%d_%H%M)
DESTINO=/tmp/backup_home_$DATA.tar.gz
tar -czf "$DESTINO" /home/$USER --exclude="$DESTINO" 2>/dev/null
echo "[$(date)] Backup criado em $DESTINO" >> ~/scripts/backup.log
EOF
chmod +x ~/scripts/backup-home.sh

# 2) Editar crontab
crontab -e
# Adicione (substitua SEU_USUARIO):
# 0 3 * * * /home/SEU_USUARIO/scripts/backup-home.sh >> /home/SEU_USUARIO/scripts/cron.log 2>&1

# 3) Conferir
crontab -l

# 4) Testar manualmente
~/scripts/backup-home.sh
ls -lh /tmp/backup_home_*.tar.gz
cat ~/scripts/backup.log`,
        verify:
          "'crontab -l' mostra a linha. O backup manual cria /tmp/backup_home_*.tar.gz e atualiza o log.",
      },
      {
        title: "Backup diário com systemd timer",
        goal: "Mesma tarefa do lab anterior, mas com systemd timer (mais robusto).",
        steps: [
          "Crie o .service.",
          "Crie o .timer com OnCalendar e Persistent.",
          "daemon-reload + enable --now do timer.",
          "Liste timers ativos.",
          "Teste o service manualmente.",
        ],
        command: `# 1) Service
sudo tee /etc/systemd/system/backup-home.service > /dev/null << EOF
[Unit]
Description=Backup diario da home

[Service]
Type=oneshot
User=$USER
ExecStart=/home/$USER/scripts/backup-home.sh
EOF

# 2) Timer
sudo tee /etc/systemd/system/backup-home.timer > /dev/null << 'EOF'
[Unit]
Description=Roda backup-home diariamente as 3h

[Timer]
OnCalendar=*-*-* 03:00:00
Persistent=true
AccuracySec=1min

[Install]
WantedBy=timers.target
EOF

# 3) Habilitar
sudo systemctl daemon-reload
sudo systemctl enable --now backup-home.timer

# 4) Listar
systemctl list-timers backup-home.timer

# 5) Testar manualmente o servico
sudo systemctl start backup-home.service
sudo journalctl -u backup-home.service -n 20`,
        verify:
          "'systemctl list-timers backup-home.timer' mostra próximo disparo às 03:00. journalctl mostra a execução.",
      },
      {
        title: "Validar expressões OnCalendar antes de habilitar",
        goal: "Evitar surpresas testando expressões de tempo.",
        steps: [
          "Use systemd-analyze para conferir cada expressão.",
          "Compare com o que você esperava.",
        ],
        command: `# Testar varias expressoes
systemd-analyze calendar 'daily'
systemd-analyze calendar 'Mon..Fri 09:00'
systemd-analyze calendar '*-*-1 00:00'
systemd-analyze calendar '*:0/15'
systemd-analyze calendar 'weekly'

# Mostra proximas execucoes
systemd-analyze calendar --iterations=5 'Mon..Fri 09:00'`,
        verify:
          "Cada expressão devolve 'Normalized form' e 'Next elapse'. Se aparecer erro, a sintaxe está errada — ajuste antes de gravar no .timer.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Sintaxe cron para rodar todo dia às 3:30 da manhã?",
        hint: "Cinco campos: minuto, hora, dia-mes, mes, dia-semana.",
        answer:
          "30 3 * * * /caminho/comando. 30 = minuto, 3 = hora, asteriscos para qualquer dia, qualquer mês, qualquer dia da semana.",
      },
      {
        id: 2,
        question: "Como rodar um script a cada 15 minutos?",
        hint: "Use o operador de passo no campo de minutos.",
        answer:
          "*/15 * * * * /caminho/comando. */15 significa 'a cada 15 unidades' começando do 0 (ou seja, 0, 15, 30, 45).",
      },
      {
        id: 3,
        question: "Por que usar caminho absoluto em comando do cron?",
        hint: "Cron tem PATH diferente do shell interativo.",
        answer:
          "Cron herda um PATH mínimo (geralmente só /usr/bin:/bin). 'python3 script.py' falha porque não acha o python3. Use '/usr/bin/python3 /home/user/script.py' ou descubra o caminho com 'which python3'.",
      },
      {
        id: 4,
        question: "Como ver os timers do systemd ativos no sistema?",
        hint: "systemctl tem subcomando dedicado.",
        answer:
          "systemctl list-timers (ou --all para incluir inativos). Mostra próximo disparo, último, e o serviço associado.",
      },
      {
        id: 5,
        question: "Qual a vantagem de systemd timer sobre cron em servidor de produção?",
        hint: "Pense em log, recuperação e integração.",
        answer:
          "Logs unificados via journalctl (auditáveis), recuperação de execuções perdidas com Persistent=true, dependências entre tarefas, notificação de falha, integração com cgroups para limitar recursos, e estado claro via systemctl status.",
      },
      {
        id: 6,
        question: "Onde colocar um script que deve rodar diariamente sem editar crontab?",
        hint: "Existem pastas mágicas em /etc.",
        answer:
          "/etc/cron.daily/. Basta jogar um script executável (chmod +x) na pasta — ele roda como root uma vez por dia. Mesma ideia: /etc/cron.hourly/, /etc/cron.weekly/, /etc/cron.monthly/.",
      },
      {
        id: 7,
        question: "O que faz Persistent=true em um systemd timer?",
        hint: "Pense no caso da máquina estar desligada na hora.",
        answer:
          "Se o sistema estava desligado no horário programado, o timer roda assim que o sistema voltar (em vez de pular a execução). systemd guarda o último disparo bem-sucedido em /var/lib/systemd/timers/ para essa lógica.",
      },
    ],
    references: [
      { title: "Manpage crontab(5)", url: "https://manpages.debian.org/bookworm/cron/crontab.5.en.html" },
      { title: "Manpage systemd.timer", url: "https://manpages.debian.org/bookworm/systemd/systemd.timer.5.en.html" },
      { title: "Crontab.guru — testar expressões", url: "https://crontab.guru/" },
      { title: "Wiki Debian — Cron", url: "https://wiki.debian.org/cron" },
    ],
  },

  {
    id: "memoria-proc-sys",
    title: "Memória, swap e os sistemas de arquivos /proc e /sys",
    icon: "🧠",
    category: "Sistema",
    description: "Entender RAM, cache, swap e os sistemas de arquivos virtuais que mostram o estado do kernel.",
    objectives: [
      "Ler corretamente a saída de free e identificar 'available' vs 'free'",
      "Configurar e dimensionar swap (partição ou arquivo)",
      "Ajustar swappiness para o perfil da máquina",
      "Navegar /proc para inspecionar processos e parâmetros do kernel",
      "Usar /sys para ver e ajustar dispositivos de hardware",
      "Diagnosticar problemas de memória com vmstat, /proc/meminfo e dmesg",
    ],
    content: [
      `Memória RAM no Linux funciona de um jeito que assusta quem vem do Windows: o sistema sempre parece "cheio". Você abre o \`free -h\` num servidor com 8 GB e vê algo como "used: 6 GB". Pânico imediato — vou ficar sem RAM! Calma. O Linux trata RAM como recurso a ser usado: tudo que sobra vira cache de disco para acelerar leituras futuras. Esse cache é descartável a qualquer momento. Por isso a coluna mais importante de \`free\` é \`available\`, não \`free\`. \`available\` é "quanto realmente posso alocar para um novo processo sem swap" — somando \`free\` + cache descartável.`,
      `Por que existe esse modelo? Performance pura. Ler do disco é 100x a 1000x mais lento que ler da RAM. Se você abriu um arquivo há 5 minutos, ele provavelmente ainda está em cache. Quando outro programa pede a mesma leitura, o kernel devolve da RAM — instantâneo. Quando a RAM realmente acaba (e algum processo pede mais), o kernel descarta o cache mais antigo automaticamente, sem você fazer nada. É uma das otimizações mais elegantes do Linux e está ligada por padrão.`,
      `Vocabulário. **RAM** é a memória principal, volátil, rápida. **Swap** é uma área no disco usada como extensão da RAM quando ela enche — muito mais lenta, mas evita que processos sejam mortos por falta de memória. **Buff/cache** é a área da RAM ocupada por cache de disco e buffers de I/O — descartável. **Available** é estimativa do quanto pode ser alocado sem causar swap. **Swappiness** é um valor de 0 a 200 (Debian moderno) que define a tendência do kernel a usar swap antes de descartar cache: 0 = só usa swap quando RAM acaba mesmo, 60 (padrão antigo) = balanceado, 100+ = agressivo. Em desktop com SSD: 10 a 30 é razoável. Em servidor com muita RAM: 1 a 10. Ajuste em \`/etc/sysctl.conf\`.`,
      `Swap pode ser uma partição dedicada (forma clássica) ou um arquivo (forma moderna, mais flexível). Arquivo de swap é igualzinho em performance hoje em dia, mais fácil de redimensionar (\`fallocate\` + \`mkswap\` + \`swapon\`), e não exige reparticionar disco. A regra antiga "swap = 2x RAM" é obsoleta. Em máquina de 16 GB: 2-4 GB de swap basta para servidor; 8 GB se você usa hibernação (que precisa caber a RAM inteira). Em servidor crítico moderno, tem gente que roda sem swap nenhum, deixando o OOM killer atuar — debate em aberto.`,
      `\`/proc\` e \`/sys\` são pseudossistemas de arquivos: parecem pastas com arquivos, mas não existem em disco. São janelas em tempo real para o estado do kernel. \`/proc\` foi o primeiro (anos 90), e tem foco em processos: para cada PID rodando existe uma pasta \`/proc/PID/\` com tudo sobre ele (\`cmdline\`, \`status\`, \`maps\`, \`fd/\`, \`environ\`). Também tem informações globais: \`/proc/cpuinfo\`, \`/proc/meminfo\`, \`/proc/version\`, \`/proc/uptime\`, \`/proc/loadavg\`. \`/sys\` veio depois (2003) com foco em hardware: dispositivos, drivers, classes de equipamento. Quando você muda brilho da tela com \`echo 50 > /sys/class/backlight/intel_backlight/brightness\`, está escrevendo direto no driver.`,
      `Confusão comum: tentar editar \`/proc\` ou \`/sys\` com nano e ver "arquivo vazio" ou comportamentos estranhos. Esses arquivos são gerados sob demanda pelo kernel; você lê com \`cat\` e escreve (alguns) com \`echo\`. Permanência: alterações em \`/proc/sys/\` são temporárias (perdem no reboot). Para tornar permanente, edite \`/etc/sysctl.conf\` ou adicione arquivo em \`/etc/sysctl.d/\` e rode \`sudo sysctl -p\`. Ex: \`vm.swappiness=10\` em \`/etc/sysctl.d/99-swap.conf\` muda o swappiness no boot.`,
      `Diagnóstico de memória na prática segue um roteiro. \`free -h\` para visão geral. \`vmstat 2 5\` para ver tendência (5 amostras de 2 em 2 segundos): a coluna \`si/so\` (swap in/out) mostra atividade de swap — se passar de zero constantemente, você precisa de mais RAM. \`cat /proc/meminfo\` para detalhes (MemTotal, MemAvailable, Buffers, Cached, SwapCached, Slab). \`ps aux --sort=-%mem | head\` para top consumidores. Se aparecer "Out of memory: Kill process" no \`dmesg\`, o OOM killer atuou — algum processo foi sacrificado para salvar o resto. Aumente RAM, configure swap, ou ajuste limites do processo culpado.`,
      `Ao final deste capítulo, você vai entender por que o Linux "sempre" usa toda a RAM (e por que isso é bom), saber quando e quanto swap configurar, ajustar swappiness para seu perfil, navegar \`/proc\` e \`/sys\` para responder perguntas sobre seu sistema sem instalar ferramentas, e diagnosticar problemas reais de memória sem chutar. É a fronteira entre administrar Linux casualmente e dominar de verdade o que está acontecendo.`,
    ],
    commands: [
      {
        command: "free -h",
        description: "Memória RAM e swap em formato humano (K/M/G).",
        example: "free -h",
        output: "               total        used        free      shared  buff/cache   available\nMem:           7.7Gi       3.2Gi       1.1Gi       412Mi       3.4Gi       3.8Gi\nSwap:          2.0Gi          0B       2.0Gi",
        flags: [
          { flag: "-h", description: "Tamanhos legíveis" },
          { flag: "-m", description: "Em MB" },
          { flag: "-g", description: "Em GB" },
          { flag: "-s N", description: "Repete a cada N segundos" },
          { flag: "-w", description: "Modo wide (separa buffers de cache)" },
        ],
      },
      {
        command: "vmstat",
        description: "Estatísticas de memória, CPU, processos e IO.",
        example: "vmstat 2 5",
        output: "procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 1146816 198432 3479872   0    0    24    18  234  516  3  1 95  1  0",
      },
      {
        command: "cat /proc/meminfo",
        description: "Tudo sobre memória que o kernel sabe (mais detalhado que free).",
        example: "cat /proc/meminfo | head -20",
      },
      {
        command: "swapon --show",
        description: "Lista dispositivos de swap ativos.",
        example: "swapon --show",
        output: "NAME      TYPE      SIZE USED PRIO\n/swapfile file        2G   0B   -2",
      },
      {
        command: "sudo fallocate -l 2G /swapfile",
        description: "Cria arquivo de 2 GB para swap.",
        example: "sudo fallocate -l 2G /swapfile",
      },
      {
        command: "sudo mkswap /swapfile",
        description: "Formata o arquivo como swap.",
        example: "sudo chmod 600 /swapfile && sudo mkswap /swapfile",
      },
      {
        command: "sudo swapon /swapfile",
        description: "Ativa o swap (manualmente, até o próximo reboot).",
        example: "sudo swapon /swapfile",
      },
      {
        command: "sudo sysctl vm.swappiness=10",
        description: "Ajusta swappiness em tempo real (perde no reboot).",
        example: "sudo sysctl vm.swappiness=10",
      },
      {
        command: "cat /proc/sys/vm/swappiness",
        description: "Lê o valor atual de swappiness.",
        example: "cat /proc/sys/vm/swappiness",
        output: "60",
      },
      {
        command: "cat /proc/cpuinfo",
        description: "Informações detalhadas sobre cada CPU/core.",
        example: "cat /proc/cpuinfo | grep 'model name' | uniq",
      },
      {
        command: "cat /proc/PID/status",
        description: "Estado completo de um processo específico.",
        example: "cat /proc/$(pgrep -f firefox | head -1)/status",
      },
      {
        command: "ls /sys/class/",
        description: "Lista classes de dispositivos do kernel (block, net, backlight, power_supply...).",
        example: "ls /sys/class/",
      },
      {
        command: "cat /sys/class/power_supply/BAT0/capacity",
        description: "Lê capacidade atual da bateria (notebook). Funciona sem ferramenta extra.",
        example: "cat /sys/class/power_supply/BAT0/capacity",
        output: "87",
      },
      {
        command: "sudo dmesg | grep -i 'out of memory'",
        description: "Procura mensagens do OOM killer (processo morto por falta de memória).",
        example: "sudo dmesg -T | grep -i 'out of memory'",
      },
    ],
    tips: [
      {
        type: "info",
        title: "free 'cheio' não é problema",
        content:
          "Em Linux, RAM 'used' inclui cache de disco (descartável). Olhe 'available' — esse é o que importa para alocar. RAM ociosa é RAM desperdiçada na filosofia do kernel.",
      },
      {
        type: "warning",
        title: "Swap salva mas não substitui RAM",
        content:
          "Swap é 100x mais lento que RAM (mesmo em SSD). Se vmstat mostra si/so constantes, o sistema está 'thrashing' — gastando mais tempo movendo páginas que trabalhando. Adicione RAM ou reduza carga.",
      },
      {
        type: "success",
        title: "Use /etc/sysctl.d/ para configs persistentes",
        content:
          "Em vez de editar /etc/sysctl.conf direto, crie /etc/sysctl.d/99-meu-tuning.conf com suas mudanças. Mais organizado, mais fácil de versionar, sobrevive a reinstalações.",
      },
      {
        type: "danger",
        title: "Cuidado escrevendo em /sys e /proc",
        content:
          "Escritas em /proc/sys/ e /sys/ entram em vigor IMEDIATAMENTE no kernel. Mudar parâmetros sem entender pode travar a máquina, derrubar disco, ou causar perda de dados. Consulte documentação antes.",
      },
      {
        type: "info",
        title: "OOM killer escolhe a vítima",
        content:
          "Quando RAM e swap acabam, o kernel mata o processo com maior 'oom_score' (calculado por uso de memória + privilégios). Você influencia via /proc/PID/oom_score_adj (-1000 = imune, +1000 = primeira vítima).",
      },
    ],
    practiceLabs: [
      {
        title: "Criar e ativar arquivo de swap",
        goal: "Adicionar 2 GB de swap em arquivo, sem reparticionar.",
        steps: [
          "Crie um arquivo de 2 GB com fallocate.",
          "Ajuste permissões para 600 (segurança).",
          "Formate como swap com mkswap.",
          "Ative com swapon e confirme com swapon --show.",
          "Adicione no /etc/fstab para persistir.",
        ],
        command: `# 1) Criar arquivo
sudo fallocate -l 2G /swapfile

# 2) Permissoes (somente root pode ler/escrever)
sudo chmod 600 /swapfile

# 3) Formatar como swap
sudo mkswap /swapfile

# 4) Ativar agora
sudo swapon /swapfile

# 5) Conferir
swapon --show
free -h

# 6) Persistir no /etc/fstab
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab`,
        verify:
          "'swapon --show' lista o /swapfile com tamanho 2G. 'free -h' mostra Swap aumentou em 2GB. Após reboot, ainda está ativo (graças ao fstab).",
      },
      {
        title: "Ajustar swappiness para SSD",
        goal: "Reduzir uso de swap para preservar SSD e melhorar resposta.",
        steps: [
          "Veja swappiness atual.",
          "Mude para 10 em tempo real.",
          "Persista em /etc/sysctl.d/.",
          "Confirme após reboot (ou com sysctl -p).",
        ],
        command: `# 1) Atual
cat /proc/sys/vm/swappiness

# 2) Mudar agora (volatil)
sudo sysctl vm.swappiness=10

# 3) Persistir
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-swappiness.conf

# 4) Aplicar sem reboot
sudo sysctl -p /etc/sysctl.d/99-swappiness.conf

# 5) Conferir
cat /proc/sys/vm/swappiness`,
        verify:
          "Valor passa de 60 para 10. Após reboot, ainda é 10 (graças ao /etc/sysctl.d/99-swappiness.conf).",
      },
      {
        title: "Investigar processo via /proc",
        goal: "Inspecionar tudo sobre um processo sem ferramentas externas.",
        steps: [
          "Pegue o PID do seu shell com $$.",
          "Veja status, cmdline e mapas de memória.",
          "Veja arquivos abertos (/proc/PID/fd/).",
          "Compare com ps e htop.",
        ],
        command: `# PID do shell atual
echo $$
PID=$$

# Status (estado, memoria, threads, contexto)
cat /proc/$PID/status | head -20

# Comando completo
cat /proc/$PID/cmdline | tr '\\0' ' '; echo

# Variaveis de ambiente
cat /proc/$PID/environ | tr '\\0' '\\n' | head -10

# Arquivos abertos
ls -l /proc/$PID/fd/

# Mapeamentos de memoria
cat /proc/$PID/maps | head -10

# Compare com ps
ps -p $PID -o pid,ppid,user,stat,vsz,rss,cmd`,
        verify:
          "Você obtém todas as informações sobre o processo direto do /proc, equivalente a ferramentas como ps, lsof e pmap, sem instalar nada.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Por que a coluna 'free' em free -h costuma ser baixa mesmo em máquina ociosa?",
        hint: "Pense no que o Linux faz com RAM sobrando.",
        answer:
          "O kernel usa toda RAM disponível como cache de disco para acelerar leituras futuras. Esse cache é descartável a qualquer momento. A métrica útil é 'available', que soma 'free' + cache descartável.",
      },
      {
        id: 2,
        question: "Como criar um arquivo de swap de 4 GB sem reparticionar?",
        hint: "Três comandos: criar arquivo, formatar, ativar.",
        answer:
          "sudo fallocate -l 4G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile. Para persistir: adicionar '/swapfile none swap sw 0 0' em /etc/fstab.",
      },
      {
        id: 3,
        question: "O que é swappiness e qual valor recomendado para desktop com SSD?",
        hint: "É a tendência do kernel a usar swap.",
        answer:
          "swappiness (0-200) controla quão agressivamente o kernel move páginas para swap em vez de descartar cache. Padrão tradicional: 60. Para SSD em desktop: 10-30 reduz writes desnecessários e melhora resposta. Para servidor com muita RAM: 1-10.",
      },
      {
        id: 4,
        question: "Como tornar a mudança de swappiness permanente entre reboots?",
        hint: "Há um diretório de configs do sysctl.",
        answer:
          "Crie /etc/sysctl.d/99-swappiness.conf com 'vm.swappiness=10' e rode 'sudo sysctl -p /etc/sysctl.d/99-swappiness.conf'. Será aplicado automaticamente no boot.",
      },
      {
        id: 5,
        question: "Onde ver, sem instalar nada, quantos cores e qual modelo da CPU?",
        hint: "Há um arquivo virtual com tudo isso.",
        answer:
          "cat /proc/cpuinfo. Para resumir: 'grep \"model name\" /proc/cpuinfo | uniq' e 'nproc' para contagem de cores lógicos.",
      },
      {
        id: 6,
        question: "Como saber se o OOM killer matou algum processo recentemente?",
        hint: "O kernel registra esse evento no log.",
        answer:
          "sudo dmesg -T | grep -i 'out of memory' — mostra timestamp e qual processo foi morto. Também aparece em journalctl com 'oom-killer' ou 'oom_reaper'.",
      },
      {
        id: 7,
        question: "Diferença conceitual entre /proc e /sys?",
        hint: "Pense em foco: o que cada um expõe.",
        answer:
          "/proc é mais antigo, focado em processos (cada PID tem subdiretório) e configurações globais do kernel (/proc/sys/, /proc/cpuinfo, /proc/meminfo). /sys é mais novo, focado em hardware: dispositivos, drivers e classes (block devices, redes, baterias, brilho de tela).",
      },
    ],
    references: [
      { title: "Manpage proc(5)", url: "https://manpages.debian.org/bookworm/manpages/proc.5.en.html" },
      { title: "Manpage sysctl(8)", url: "https://manpages.debian.org/bookworm/procps/sysctl.8.en.html" },
      { title: "Wiki Debian — Swap", url: "https://wiki.debian.org/Swap" },
      { title: "Kernel docs — sysfs", url: "https://www.kernel.org/doc/html/latest/filesystems/sysfs.html" },
    ],
  },
];
