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
        example: "top -b -n 1 | head -12",
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
        example: "htop -u aluno",
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
        output: " 19:23:51 up 2 days,  5:18,  2 users,  load average: 0.42, 0.38, 0.30",
      },
      {
        command: "free -h",
        description: "Memória RAM e swap em formato humano.",
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
        expected:
          "O yes em segundo plano devolve algo como [1] 12345 e um núcleo vai a 100% no htop. O pgrep imprime o PID enquanto o processo vive e não imprime nada depois do pkill, quando o próprio shell avisa Terminated. Se nem o pkill -9 resolver, o processo está em estado D esperando disco — aí o problema é hardware ou driver, não o programa.",
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
        expected:
          "O free -h mostra total, used, free, buff/cache e available — leia available, não free. No ps ordenado, as primeiras linhas trazem %MEM e RSS em KB: em desktop costumam ser navegador e ambiente gráfico; em servidor, o banco. Cache alto com available folgado não é problema de memória, é o kernel usando RAM ociosa.",
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
        expected:
          "O Ctrl+Z imprime [1]+ Stopped; o bg mostra o job retomado com & no fim; o jobs lista [1]+ Running. Depois de fechar e reabrir o terminal, o pgrep -a sleep ainda encontra o processo iniciado com nohup, agora com PPID 1 — ele foi adotado pelo init quando o shell pai morreu.",
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
      { title: "Manpage ps (Debian)", url: "https://manpages.debian.org/trixie/procps/ps.1.en.html" },
      { title: "Manpage signal(7)", url: "https://manpages.debian.org/trixie/manpages/signal.7.en.html" },
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
        expected:
          "O is-active responde apenas active. O status traz Loaded com enabled e Active: active (running) com o tempo desde o start. No journal deve existir a linha Server listening on 0.0.0.0 port 22 — se ela não aparecer, o serviço subiu mas não abriu a porta, e não adianta procurar culpa no firewall ainda.",
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
        expected:
          "Depois do enable --now, o status mostra Active: active (running) e o journal recebe uma linha a cada 30 segundos. Após o pkill, o serviço passa por failed e em cinco segundos volta a running com outro PID — é o Restart=on-failure agindo. Esquecer o daemon-reload faz o systemd insistir que a unit não existe.",
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
        expected:
          "O systemctl cat imprime primeiro o arquivo original, com o caminho comentado no topo, e depois o seu override.conf, contendo apenas as linhas alteradas. Após o revert, só o original continua. Editar direto o arquivo do pacote faria a mudança sumir na próxima atualização — esse é o motivo do override existir.",
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
      { title: "Manpage systemd.service", url: "https://manpages.debian.org/trixie/systemd/systemd.service.5.en.html" },
      { title: "Wiki Debian — systemd", url: "https://wiki.debian.org/systemd" },
      { title: "Manpage systemctl", url: "https://manpages.debian.org/trixie/systemd/systemctl.1.en.html" },
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
      },
      {
        command: "sudo journalctl --list-boots",
        description: "Lista todos os boots conhecidos com índice e timestamp.",
        output: "-1 abc123  Mon 2024-04-22 09:00 — Mon 2024-04-22 18:30\n 0 def456  Mon 2024-04-22 18:31 — now",
      },
      {
        command: "sudo journalctl --disk-usage",
        description: "Quanto espaço o journal está ocupando.",
        output: "Archived and active journals take up 1.2G in the file system.",
      },
      {
        command: "sudo journalctl --vacuum-size=500M",
        description: "Apaga arquivos antigos do journal até sobrar só 500MB.",
      },
      {
        command: "sudo journalctl --vacuum-time=7d",
        description: "Mantém só os últimos 7 dias.",
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
        expected:
          "Cada linha traz data, host, sshd com o PID e Failed password for ... from IP. A contagem devolve um número e o pipeline de IPs sai ordenado do mais insistente para o menos. Em máquina de estudo o resultado costuma ser zero, o que não é erro; em VPS exposta, centenas por dia são rotina.",
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
        expected:
          "O --disk-usage responde com uma frase informando quanto os journals ocupam. O --list-boots passa a listar mais de um boot depois do primeiro reinicio com persistência ativa; enquanto só aparecer o boot atual, o journal ainda é volátil e você perde o log justamente do reboot que quer investigar.",
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
        expected:
          "As três mensagens aparecem no journal com a tag meu-backup e o horário de cada uma. O filtro -p warning devolve só a do meio, provando que a prioridade foi gravada junto do texto. Mensagem que não aparece é quase sempre tag digitada diferente na consulta.",
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
      { title: "Manpage journalctl", url: "https://manpages.debian.org/trixie/systemd/journalctl.1.en.html" },
      { title: "Manpage journald.conf", url: "https://manpages.debian.org/trixie/systemd/journald.conf.5.en.html" },
      { title: "Manpage dmesg", url: "https://manpages.debian.org/trixie/util-linux/dmesg.1.en.html" },
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
      },
      {
        command: "crontab -l",
        description: "Lista o conteúdo atual do seu crontab.",
      },
      {
        command: "crontab -r",
        description: "Remove TODO o seu crontab. Cuidado, não pede confirmação.",
      },
      {
        command: "sudo crontab -e",
        description: "Abre o crontab do root no editor do sistema e valida a sintaxe ao salvar — por isso se edita com este comando, e nunca mexendo no arquivo de spool direto. Lembre que o cron roda com PATH mínimo: use caminho absoluto em tudo.",
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
        expected:
          "O crontab -l mostra a linha com os cinco campos de tempo antes do caminho do script. A execução manual cria o .tar.gz em /tmp e acrescenta uma linha ao backup.log. Erro clássico deste lab: funcionar na mão e falhar no cron, porque o cron roda com PATH mínimo e sem as suas variáveis — por isso tudo usa caminho absoluto.",
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
        expected:
          "O list-timers mostra NEXT com a data do próximo disparo às 03:00, LEFT com o tempo que falta e LAST vazio até a primeira execução. O journal da service registra início, fim e código de saída. Com Persistent=true, se a máquina estiver desligada às 3h, ele roda assim que ela voltar — vantagem que o cron não tem.",
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
        expected:
          "Para cada expressão o comando imprime Original form, Normalized form e Next elapse com data completa; com --iterations=5 saem cinco datas futuras. Sintaxe inválida devolve Failed to parse calendar expression — muito melhor descobrir aqui do que num timer que simplesmente nunca dispara.",
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
      { title: "Manpage crontab(5)", url: "https://manpages.debian.org/trixie/cron/crontab.5.en.html" },
      { title: "Manpage systemd.timer", url: "https://manpages.debian.org/trixie/systemd/systemd.timer.5.en.html" },
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
        description: "Lista a swap em uso, com tipo (partição ou arquivo), tamanho e quanto já está ocupado. Saída vazia numa VPS pequena explica muita morte súbita de processo: sem swap, o kernel chama o OOM killer em vez de empurrar página para o disco.",
        output: "NAME      TYPE      SIZE USED PRIO\n/swapfile file        2G   0B   -2",
      },
      {
        command: "sudo fallocate -l 2G /swapfile",
        description: "Cria arquivo de 2 GB para swap.",
      },
      {
        command: "sudo mkswap /swapfile",
        description: "Escreve a assinatura de swap no arquivo e devolve o UUID. Ele ainda não está em uso: passa a valer no `swapon` e só sobrevive ao reboot se você registrar no `/etc/fstab`.",
        example: "sudo chmod 600 /swapfile && sudo mkswap /swapfile",
      },
      {
        command: "sudo swapon /swapfile",
        description: "Ativa o swap (manualmente, até o próximo reboot).",
      },
      {
        command: "sudo sysctl vm.swappiness=10",
        description: "Ajusta swappiness em tempo real (perde no reboot).",
      },
      {
        command: "cat /proc/sys/vm/swappiness",
        description: "Lê o valor atual de swappiness.",
        output: "60",
      },
      {
        command: "cat /proc/cpuinfo",
        description: "Um bloco por núcleo lógico, com modelo, frequência atual e as flags do processador. É aqui que você confirma suporte a virtualização (`vmx` na Intel, `svm` na AMD) antes de tentar subir KVM.",
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
      },
      {
        command: "cat /sys/class/power_supply/BAT0/capacity",
        description: "Lê capacidade atual da bateria (notebook). Funciona sem ferramenta extra.",
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
        expected:
          "O mkswap imprime rótulo e UUID do novo espaço; o swapon --show lista o /swapfile com TYPE file e SIZE 2G; o free -h passa a mostrar 2Gi na linha Swap. Em sistema de arquivos Btrfs o fallocate não serve para swap: sem dd mais chattr +C, o swapon recusa o arquivo.",
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
        expected:
          "O primeiro cat mostra 60, que é o padrão do Debian. O sysctl ecoa vm.swappiness = 10 e o cat final confirma o novo valor. O arquivo em /etc/sysctl.d é o que garante isso após o reboot — mudar só pela linha de comando dura até desligar a máquina.",
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
        expected:
          "O status traz Name, State, PPID, VmRSS e Threads; o cmdline devolve a linha de comando com os argumentos; o ls dos descritores mostra 0, 1 e 2 apontando para o terminal. O RSS visto aqui é o mesmo número que o ps informa — as ferramentas apenas leem e formatam esses arquivos.",
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
      { title: "Manpage proc(5)", url: "https://manpages.debian.org/trixie/manpages/proc.5.en.html" },
      { title: "Manpage sysctl(8)", url: "https://manpages.debian.org/trixie/procps/sysctl.8.en.html" },
      { title: "Wiki Debian — Swap", url: "https://wiki.debian.org/Swap" },
      { title: "Kernel docs — sysfs", url: "https://www.kernel.org/doc/html/latest/filesystems/sysfs.html" },
    ],
  },
  {
    id: "boot-grub",
    title: "Boot: GRUB, initramfs e recovery — do firmware ao login",
    icon: "🥾",
    category: "Sistema",
    description:
      "Entenda a sequência de boot no Debian: firmware, GRUB, kernel, initramfs e o primeiro processo — e o que fazer quando a máquina para no meio do caminho.",
    objectives: [
      "Descrever a ordem firmware → bootloader → kernel → initramfs → systemd",
      "Localizar config e entradas do GRUB no Debian",
      "Regenerar GRUB e initramfs com consciência",
      "Usar um menu de recovery/single-user com critério",
      "Ler logs de boot recentes com journalctl",
      "Saber o que NÃO fazer em VPS compartilhada sem console",
    ],
    content: [
      "Ligar o PC não é mágica: é uma corrida de bastão. O **firmware** (UEFI ou BIOS legado) acha um bootloader; no Debian quase sempre o **GRUB**. O GRUB carrega o **kernel** e um disco inicial em RAM chamado **initramfs** (ou initrd). Esse mini-sistema monta o root de verdade e entrega o controle ao **systemd** (PID 1). Se qualquer bastão cai, você vê tela preta, emergency mode ou kernel panic — e precisa saber em qual etapa parou.",

      "No Debian, o GRUB ‘oficial’ da instalação costuma viver em `/boot/grub/` com config gerada em `grub.cfg`. Você **quase nunca** edita `grub.cfg` na mão: edita `/etc/default/grub` e fragmentos em `/etc/grub.d/`, depois `update-grub` (wrapper amigável). O initramfs é regenerado com `update-initramfs` quando kernel, módulos críticos ou hooks mudam.",

      "Jargões. **EFI System Partition (ESP)** é a partição FAT onde a UEFI procura bootloaders. **vmlinuz** é a imagem do kernel. **cmdline** são os parâmetros passados ao kernel (root=, quiet, single…). **emergency/rescue** são alvos systemd mínimos para consertar fstab, senha root, etc. **chroot** de um live USB é o hospital quando o sistema instalado não sobe.",

      "Recovery mental: (1) o GRUB aparece? (2) o kernel começa a imprimir? (3) initramfs acha o root? (4) systemd chega a multi-user/graphical? journalctl -b e a tela do dracut/initramfs contam histórias diferentes. Em VPS, **console web/serial** vale ouro — SSH morto no meio do boot não se debuga com mais uma aba SSH.",

      "Quando NÃO mexer: update-grub/update-initramfs em massa na VPS da equipe sem janela e sem snapshot; editar grub.cfg direto ‘só um teste’; quiet splash escondendo erro que você precisava ler. Quando SIM: após instalar kernel novo, após mudar disco root/LVM/UUID, ao recuperar máquina com live.",

      "Ao terminar você desenha a corrida de bastão de cor, acha /etc/default/grub, sabe para que serve update-grub e update-initramfs, e lista o último boot no journal — sem brincar de brickar host alheio.",

    ],
    commands: [
      {
        command: "ls -la /boot | head",
        description:
          "Kernel (vmlinuz), initrd e às vezes grub — o que o bootloader precisa achar.",
        example: "ls -la /boot",
      },
      {
        command: "cat /etc/default/grub",
        description:
          "Política legível do GRUB (timeout, cmdline padrão). É daqui que o update-grub gera a config.",
        example: "grep -vE '^#|^$' /etc/default/grub",
      },
      {
        command: "sudo update-grub",
        description:
          "Regenera grub.cfg a partir de /etc/default/grub e /etc/grub.d. Em UEFI o ecossistema pode usar grub-mkconfig diretamente.",
      },
      {
        command: "sudo update-initramfs -u",
        description:
          "Atualiza o initramfs do kernel atual (-u). Use -k all com cuidado (tempo/espaço).",
        flags: [
          { flag: "-u", description: "atualiza initramfs existente" },
          { flag: "-k", description: "seleciona versão de kernel" },
          { flag: "-c", description: "cria novo" },
        ],
      },
      {
        command: "cat /proc/cmdline",
        description:
          "Parâmetros com que ESTE boot foi iniciado (root, ro/rw, quiet…).",
        output: "BOOT_IMAGE=/boot/vmlinuz-6.12.x-amd64 root=UUID=... ro quiet",
      },
      {
        command: "systemctl get-default",
        description:
          "Alvo padrão após o boot (graphical.target ou multi-user.target em servidores).",
      },
      {
        command: "journalctl -b -p err..alert --no-pager | tail -n 40",
        description:
          "Erros do boot atual — primeiro lugar a olhar depois que o sistema já subiu.",
      },
      {
        command: "journalctl --list-boots | tail -n 5",
        description:
          "Índice de boots anteriores para comparar ‘antes/depois’ de uma mudança.",
      },
      {
        command: "sudo grub-file --is-x86-multiboot /boot/vmlinuz-$(uname -r) 2>/dev/null; uname -r",
        description:
          "Confirma kernel em uso; utilitários grub-* ajudam em diagnósticos avançados.",
        example: "uname -r",
      },
      {
        command: "man grub-mkconfig",
        description:
          "Como a config do GRUB é gerada — leia antes de scripts ‘mágicos’ da internet.",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Sem console em VPS",
        content:
          "Não experimente cmdline/fstab/grub sem acesso serial/web do provedor e snapshot.",
      },
      {
        type: "warning",
        title: "Não edite grub.cfg na mão",
        content:
          "A próxima update-grub sobrescreve. Use /etc/default/grub e /etc/grub.d.",
      },
      {
        type: "info",
        title: "initramfs desatualizado",
        content:
          "Disk/UUID/LVM/crypt mudou e o boot não acha root? update-initramfs e confira cmdline.",
      },
      {
        type: "success",
        title: "Desenhe a etapa",
        content:
          "Firmware / GRUB / kernel / initramfs / systemd — saber onde parou já é meio conserto.",
      },
    ],
    practiceLabs: [
      {
        title: "Mapa do boot da sua máquina",
        goal: "Documento de uma página: kernel em uso, cmdline, default target, erros do boot atual.",
        steps: [
          "uname -r e ls /boot",
          "cat /proc/cmdline",
          "systemctl get-default",
          "journalctl -b -p err..alert | tail",
          "grep não comentado em /etc/default/grub",
          "Salvar em ~/mapa-boot.txt",
        ],
        command: "{ echo '=== kernel ==='; uname -a; echo; echo '=== cmdline ==='; cat /proc/cmdline; echo; echo '=== default ==='; systemctl get-default; echo; echo '=== grub defaults ==='; grep -vE '^#|^$' /etc/default/grub 2>/dev/null; } | tee ~/mapa-boot.txt",
        expected:
          "O arquivo fica com quatro blocos: kernel e arquitetura, a linha de comando com root=UUID=... e ro quiet, o target padrão (graphical.target em desktop, multi-user.target em servidor) e as linhas ativas do /etc/default/grub. Se o root do cmdline não bater com o UUID real do disco, você achou a causa do boot que para no initramfs.",
        verify:
          "Você explica em voz alta a sequência até o login e aponta um possível ponto de falha se cmdline/root estivesse errado.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Ordem básica de boot no Debian moderno?",
        answer:
          "Firmware → GRUB (bootloader) → kernel + initramfs → monta root → systemd como PID 1 → serviços/login.",
      },
      {
        id: 2,
        question: "Por que não editar grub.cfg direto?",
        answer:
          "É arquivo gerado; update-grub/grub-mkconfig reescreve. Ajuste vem de /etc/default/grub e /etc/grub.d.",
      },
      {
        id: 3,
        question: "Para que serve o initramfs?",
        answer:
          "Mini sistema em RAM que carrega módulos e monta o root real (LVM, crypto, UUID…) antes do sistema completo.",
      },
      {
        id: 4,
        question: "Comando para regenerar a config do GRUB no Debian?",
        answer:
          "sudo update-grub (ou grub-mkconfig -o …).",
      },
      {
        id: 5,
        question: "Como ver parâmetros do boot atual?",
        answer:
          "cat /proc/cmdline",
      },
      {
        id: 6,
        question: "Onde olhar erros do boot que já subiu?",
        answer:
          "journalctl -b (com filtros de prioridade se quiser).",
      },
      {
        id: 7,
        question: "Risco de mudar boot sem console em VPS?",
        answer:
          "Perder SSH e não ter como corrigir; precisa de console out-of-band/snapshot.",
      },
      {
        id: 8,
        question: "O que update-initramfs -u faz?",
        answer:
          "Atualiza a imagem initramfs do kernel correspondente para incluir hooks/módulos atuais.",
      },
    ],
    references: [
      { title: "Debian Wiki — Grub", url: "https://wiki.debian.org/Grub" },
      { title: "man update-initramfs", url: "https://manpages.debian.org/update-initramfs" },
      { title: "man grub-mkconfig", url: "https://manpages.debian.org/grub-mkconfig" },
      { title: "systemd boot targets", url: "https://www.freedesktop.org/software/systemd/man/systemd.special.html" },
    ],
  },
  {
    id: "kernel-modulos",
    title: "Kernel, módulos e firmware — o que carrega e o que falta",
    icon: "🧩",
    category: "Sistema",
    description:
      "Veja o kernel em uso, liste módulos, carregue/descarregue com modprobe e entenda firmware non-free no Debian — sem recompilar o mundo no primeiro dia.",
    objectives: [
      "Identificar versão e pacotes de kernel instalados",
      "Listar módulos carregados e informações de um módulo",
      "Usar modprobe/rmmod com cuidado",
      "Achar firmware missing em dmesg/journal",
      "Instalar firmware-linux / non-free-firmware quando fizer sentido",
      "Saber que módulo ≠ instalar driver Windows.exe",
    ],
    content: [
      "O **kernel** é o núcleo que fala com CPU, memória e dispositivos. No Debian ele chega como pacote `linux-image-…` e, se precisar compilar módulos externos, headers `linux-headers-…`. Você raramente compila do zero no começo: aprende a **ver o que está carregado**, o que falhou, e qual pacote de **firmware** falta para a placa de rede/Wi-Fi/GPU.",

      "**Módulo** é código do kernel que pode entrar e sair em runtime (`modprobe`). Placa de rede, filesystem extra, virtualização — muita coisa é módulo. `lsmod` lista, `modinfo` descreve, `modprobe nome` carrega resolvendo dependências, `rmmod` tira (se nada estiver usando). Errar rmmod em disco/filesystem montado é pedido de dor.",

      "**Firmware** é blob que o driver manda para o hardware. No Debian moderno o componente **non-free-firmware** existe exatamente porque Wi-Fi e NICs corporativas pedem isso. Mensagens `firmware: failed to load` no dmesg são o farol. Instalar o metapacote adequado e reiniciar (ou replugar) costuma ser o caminho — não baixar .exe do site da OEM.",

      "Jargões. **uname -r** versão rodando. **DKMS** recompila módulos externos a cada kernel novo. **Secure Boot** pode bloquear módulos não assinados. **blacklist** em `/etc/modprobe.d/` impede carga automática de um módulo problemático.",

      "Fluxo de diagnóstico de ‘não tem rede’: ip link → dmesg/journal por firmware → lsmod | grep → pacote firmware → reboot. Fluxo de ‘preciso de módulo’: apt search, headers se for out-of-tree, modprobe, persistência via conf se necessário.",

      "Ao terminar você lê uname -r, explica um modinfo, carrega um módulo inofensivo de lab se quiser, e associa mensagem de firmware ao pacote Debian certo — sem recompilar kernel por esporte.",

    ],
    commands: [
      {
        command: "uname -r",
        description:
          "Versão do kernel em execução — base para headers e módulos.",
      },
      {
        command: "dpkg -l 'linux-image-*' | grep ^ii",
        description:
          "Imagens de kernel instaladas (várias versões podem coexistir no /boot).",
      },
      {
        command: "lsmod | head",
        description:
          "Lista os módulos carregados; a última coluna diz quem depende de quem. Módulo com contador de uso maior que zero não sai com `rmmod`, e essa dependência é justamente a pista de qual serviço está segurando o hardware.",
        example: "lsmod | head -n 20",
      },
      {
        command: "modinfo ext4 | sed -n '1,20p'",
        description:
          "Metadados de um módulo (path, descrição, parâmetros).",
        example: "modinfo ext4 | sed -n '1,25p'",
      },
      {
        command: "sudo modprobe dummy 2>/dev/null; lsmod | grep dummy; sudo modprobe -r dummy 2>/dev/null",
        description:
          "Exemplo de carga/descarga de módulo de lab (dummy). Não force rmmod em módulos críticos.",
        example: "sudo modprobe dummy && sudo modprobe -r dummy",
      },
      {
        command: "journalctl -k -b --no-pager | grep -i firmware | tail -n 20",
        description:
          "Mensagens de firmware do boot atual.",
      },
      {
        command: "apt-cache search '^firmware-' | head",
        description:
          "Pacotes de firmware no APT. No Debian 12+ veja também non-free-firmware nas sources.",
        example: "apt-cache search firmware | head",
      },
      {
        command: "sudo apt install -y firmware-linux-free",
        description:
          "Firmware livre básico. Para hardware que exige blob, pode precisar de firmware-linux-nonfree / metapacotes non-free-firmware conforme sources.",
        example: "apt-cache policy firmware-linux-nonfree 2>/dev/null | head",
      },
      {
        command: "ls /etc/modprobe.d/",
        description:
          "Configs de opções e blacklist de módulos.",
      },
      {
        command: "man modprobe",
        description:
          "Referência de carga, blacklist e dependências.",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "rmmod em disco montado",
        content:
          "Não descarregue módulos de filesystem/storage em uso.",
      },
      {
        type: "info",
        title: "non-free-firmware",
        content:
          "Desde bookworm o Debian trata firmware não-livre com componente próprio — confira sources.",
      },
      {
        type: "success",
        title: "dmesg/journal primeiro",
        content:
          "Antes de ‘reinstalar driver’, leia se é firmware missing ou conflito de módulo.",
      },
      {
        type: "danger",
        title: "Terceiros obscuros",
        content:
          "Instalar .deb de kernel de blog desconhecido é superfície de ataque e brick.",
      },
    ],
    practiceLabs: [
      {
        title: "Raio-X de kernel e firmware",
        goal: "Arquivo com uname, lista de linux-image, amostra lsmod e grep de firmware.",
        steps: [
          "uname -a",
          "dpkg -l linux-image-*",
          "lsmod | wc -l e head",
          "journal/dmesg grep firmware",
          "Salvar em ~/kernel-firmware.txt",
        ],
        command: "{ echo '=== uname ==='; uname -a; echo; echo '=== images ==='; dpkg -l 'linux-image-*' | grep ^ii; echo; echo '=== firmware msgs ==='; journalctl -k -b --no-pager 2>/dev/null | grep -i firmware | tail -n 15; } | tee ~/kernel-firmware.txt",
        expected:
          "O arquivo mostra o kernel em uso, as imagens instaladas (normalmente duas, a atual e a anterior) e as mensagens de firmware do boot. Linhas com firmware failed to load citam o arquivo que faltou, e esse nome indica o pacote a instalar; nenhuma linha é o resultado bom.",
        verify:
          "Você sabe qual kernel roda, quantas imagens estão instaladas e se há firmware failed to load no boot.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que uname -r mostra?",
        answer:
          "A versão do kernel em execução.",
      },
      {
        id: 2,
        question: "Diferença entre kernel e módulo?",
        answer:
          "Kernel é o núcleo; módulo é código opcional carregável em runtime para hardware/features.",
      },
      {
        id: 3,
        question: "Para que serve modprobe?",
        answer:
          "Carregar módulo resolvendo dependências (e a config em modprobe.d).",
      },
      {
        id: 4,
        question: "O que costuma significar failed to load firmware?",
        answer:
          "Falta blob de firmware no sistema de arquivos; instale o pacote Debian adequado.",
      },
      {
        id: 5,
        question: "Onde blacklistar módulo?",
        answer:
          "Arquivos em /etc/modprobe.d/.",
      },
      {
        id: 6,
        question: "Por que manter linux-headers?",
        answer:
          "Para compilar módulos out-of-tree/DKMS contra o kernel instalado.",
      },
      {
        id: 7,
        question: "lsmod mostra o quê?",
        answer:
          "Módulos carregados e contagem de uso.",
      },
      {
        id: 8,
        question: "Instalar firmware non-free exige o quê nas sources?",
        answer:
          "Componente/repositório que publique esses pacotes (non-free-firmware no Debian moderno).",
      },
    ],
    references: [
      { title: "man modprobe", url: "https://manpages.debian.org/modprobe" },
      { title: "Wiki — Firmware", url: "https://wiki.debian.org/Firmware" },
      { title: "Wiki — Kernel", url: "https://wiki.debian.org/Kernel" },
      { title: "Debian kernel handbook", url: "https://kernel-team.pages.debian.net/kernel-handbook/" },
    ],
  },
  {
    id: "udev-regras",
    title: "udev e nomes de dispositivo — estabilidade além de sdb",
    icon: "🏷️",
    category: "Sistema",
    description:
      "Entenda como o udev nomeia discos e redes no Debian, use by-uuid/by-id e escreva uma regra simples — para o boot e os scripts não quebrarem quando o kernel renumerar tudo.",
    objectives: [
      "Explicar o papel do udev no userspace",
      "Navegar /dev/disk/by-uuid e by-id",
      "Inspecionar propriedades com udevadm info",
      "Entender por que sdb muda e UUID não",
      "Esboçar uma regra em /etc/udev/rules.d/",
      "Recarregar regras sem ritual obscuro",
    ],
    content: [
      "O kernel detecta hardware; o **udev** (agora integrado ao systemd) cria os nós em `/dev`, aplica permissões e nomes estáveis. Por isso existem `/dev/disk/by-uuid/`, `by-id/`, `by-path/` e nomes de rede que não são mais sempre eth0. Scripts que assumem `/dev/sdb1` para sempre são bombas-relógio.",

      "Para disco, o fstab com **UUID=** (capítulo fstab-uuid) já usa o mundo udev. Para scripts de backup, prefira `by-id` do hardware. Para USB de lab, uma regra pode criar `/dev/disco-lab` baseado em vendor/serial — útil e didático.",

      "Jargões. **sysfs** (`/sys`) expõe o dispositivo ao userspace. **udevadm info** mostra propriedades (ID_SERIAL, ID_FS_UUID…). **rules.d** processa arquivos `*.rules` por ordem numérica. **ATTRS/ENV/KERNEL** são matches típicos de regra. Errar regra de disco de boot é… emocionante — teste em USB.",

      "Fluxo: plugue o device → `udevadm info -q all -n /dev/sdX` → escolha chave estável → escreva regra → `udevadm control --reload-rules && udevadm trigger` → confira o symlink novo. Em rede, `ip link` e policy de naming (net.ifnames) explicam enpXsY.",

      "Quando NÃO: renomear o disco root da VPS de produção da equipe por esporte; copiar regra aleatória de fórum sem entender match. Quando SIM: gravador USB fixo, leitor de cartão, multi-disk server com udev + fstab/UUID.",

      "Ao terminar você lista by-uuid, lê udevadm info de um disco, e explica por que automação séria não hardoda sdb.",

    ],
    commands: [
      {
        command: "ls -la /dev/disk/by-uuid/ | head",
        description:
          "Symlinks estáveis por UUID de filesystem — os mesmos do blkid/fstab.",
        example: "ls -la /dev/disk/by-uuid/",
      },
      {
        command: "ls -la /dev/disk/by-id/ | head",
        description:
          "Nomes por identificador de hardware (serial/modelo). Ótimo para scripts de disco cru.",
      },
      {
        command: "lsblk -o NAME,SIZE,TYPE,FSTYPE,UUID,MOUNTPOINT",
        description:
          "Visão humana cruzando kernel names e UUID.",
      },
      {
        command: "udevadm info -q all -n /dev/sda 2>/dev/null | head -n 40",
        description:
          "Propriedades udev do device (ajuste sda ao seu lab). Base para escrever regras.",
        example: "udevadm info -q all -n /dev/sda | egrep 'ID_|DEVNAME|DEVTYPE'",
      },
      {
        command: "ip -br link",
        description:
          "Nomes de interfaces atuais (enp*, wlp*, eth*).",
      },
      {
        command: "ls /etc/udev/rules.d/",
        description:
          "Regras locais admin; pacotes também instalam em /lib/udev/rules.d/.",
        example: "ls -la /etc/udev/rules.d/ /lib/udev/rules.d/ | head",
      },
      {
        command: "sudo tee /etc/udev/rules.d/99-lab-usb-example.rules >/dev/null <<'EOF'\n# EXEMPLO — não use serial inventado em produção\n# SUBSYSTEM==\"block\", ENV{ID_SERIAL}==\"TROQUE_PELO_SERIAL\", SYMLINK+=\"disco-lab\"\nEOF",
        description:
          "Cria arquivo de exemplo comentado. Descomente e ajuste serial só em lab com USB descartável.",
        example: "cat /etc/udev/rules.d/99-lab-usb-example.rules",
      },
      {
        command: "sudo udevadm control --reload-rules && sudo udevadm trigger",
        description:
          "Recarrega regras e reprocessa eventos. Depois confira symlinks.",
      },
      {
        command: "man udev",
        description:
          "Sintaxe das regras, onde mora a pegadinha: `==` compara e `=` atribui. Também explica a ordem alfabética dos arquivos em `/etc/udev/rules.d` e os campos de match — `SUBSYSTEM`, `KERNEL`, `ATTRS` — que você descobre com `udevadm info`.",
      },
      {
        command: "man udevadm",
        description:
          "info, trigger, control, monitor — ferramenta de diagnóstico.",
      },
    ],
    tips: [
      {
        type: "success",
        title: "UUID no fstab, by-id em scripts de raw disk",
        content:
          "Cada um no seu caso de uso.",
      },
      {
        type: "warning",
        title: "Regra ampla demais",
        content:
          "Match fraco pode renomear o device errado. Seja específico (serial).",
      },
      {
        type: "info",
        title: "Nomes de rede previsíveis",
        content:
          "enp* vêm da policy moderna; desativar tem trade-offs.",
      },
      {
        type: "danger",
        title: "VPS compartilhada",
        content:
          "Não invente regra udev em disco de sistema alheio sem acordo da equipe.",
      },
    ],
    practiceLabs: [
      {
        title: "Inventário estável de discos",
        goal: "Tabela mental NAME × UUID × by-id de pelo menos um disco.",
        steps: [
          "lsblk -f",
          "ls /dev/disk/by-uuid",
          "ls /dev/disk/by-id | head",
          "udevadm info em um device",
          "Anotar qual identificador usaria no fstab vs script",
        ],
        command: "lsblk -f; echo '---'; ls /dev/disk/by-uuid 2>/dev/null | head",
        expected:
          "O lsblk -f lista dispositivo, sistema de arquivos, rótulo, UUID e ponto de montagem; o ls de by-uuid mostra links com o mesmo UUID apontando para ../../sda1 e semelhantes. O aprendizado está na comparação: sdb pode virar sdc no próximo boot, enquanto UUID e by-id continuam iguais.",
        verify:
          "Você aponta o UUID que colocaria no fstab e explica por que não usaria sdb1 puro.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Para que serve o udev?",
        answer:
          "Gerenciar nós em /dev, permissões e nomes estáveis a partir de eventos de hardware.",
      },
      {
        id: 2,
        question: "Por que /dev/sdb pode mudar?",
        answer:
          "Ordem de enumeração do kernel muda com hardware/USB/portas; não é identidade permanente.",
      },
      {
        id: 3,
        question: "Onde achar symlink por UUID?",
        answer:
          "/dev/disk/by-uuid/",
      },
      {
        id: 4,
        question: "Comando para ver propriedades de um device?",
        answer:
          "udevadm info -q all -n /dev/…",
      },
      {
        id: 5,
        question: "Onde colocar regras do administrador?",
        answer:
          "/etc/udev/rules.d/*.rules",
      },
      {
        id: 6,
        question: "Como recarregar regras?",
        answer:
          "udevadm control --reload-rules e udevadm trigger.",
      },
      {
        id: 7,
        question: "fstab deve preferir o quê?",
        answer:
          "UUID= (ou LABEL) em vez de /dev/sdX.",
      },
      {
        id: 8,
        question: "Risco de regra errada?",
        answer:
          "Symlink/permissão no device errado, scripts quebrados, pior caso impacto no boot.",
      },
    ],
    references: [
      { title: "man udev", url: "https://manpages.debian.org/udev" },
      { title: "man udevadm", url: "https://manpages.debian.org/udevadm" },
      { title: "Wiki — udev", url: "https://wiki.debian.org/udev" },
      { title: "PredictableNetworkInterfaceNames", url: "https://wiki.debian.org/NetworkConfiguration" },
    ],
  },
  {
    id: "tempo-ntp",
    title: "Relógio e tempo — timedatectl, NTP e fuso",
    icon: "⏰",
    category: "Sistema",
    description:
      "Ajuste fuso horário e sincronização de relógio no Debian com timedatectl e o stack NTP moderno — logs e certificados dependem disso.",
    objectives: [
      "Ver hora, UTC e fuso com timedatectl",
      "Definir timezone corretamente",
      "Entender RTC vs relógio do sistema",
      "Verificar se NTP está ativo",
      "Relacionar tempo errado com TLS e logs",
      "Evitar ‘date -s’ crônico em servidor com NTP",
    ],
    content: [
      "Servidor com relógio errado é novela: certificados TLS ‘ainda não válidos’, logs impossíveis de correlacionar, cron no horário torto, Kerberos/auth quebrado. No Debian com systemd, a porta de entrada é **timedatectl**: mostra hora local, UTC, timezone, se o NTP está ativo e se o RTC está em UTC (comum em Linux).",

      "**Timezone** é política (`America/Fortaleza`, `America/Sao_Paulo`…), não só ‘atrasar três horas na mão’. **NTP** (via systemd-timesyncd ou chrony/ntpsec) puxa tempo de fontes confiáveis. **RTC** é o relógio de hardware; em dual-boot com Windows a confusão UTC vs local é clássica.",

      "Jargões. **skew** é o desvio. **stratum** é a distância da fonte de tempo. **timesyncd** é o cliente leve default em muitas instalações. **chrony** é alternativa robusta comum em servidores. `date` ainda existe, mas em host com NTP você não fica setando hora manual todo dia.",

      "Fluxo: timedatectl → set-timezone → timedatectl set-ntp true → status. Se o erro for enorme, às vezes precisa corrigir manual uma vez e deixar o NTP fino. Firewall liberando UDP/123 ou os backends do timesyncd importa em redes travadas.",

      "Quando NÃO: desligar NTP ‘para teste’ em produção e esquecer; forçar RTC local em servidor só Linux sem motivo. Quando SIM: first boot de VPS, VM clonada com relógio velho, indústrias com chrony dedicado.",

      "Ao terminar você lê timedatectl, muda timezone em lab se preciso, confirma NTP yes, e explica por que TLS chora com relógio atrasado um ano.",

    ],
    commands: [
      {
        command: "timedatectl",
        description:
          "Painel completo: hora local, UTC, timezone, NTP, RTC.",
        output: "               Local time: Thu 2026-08-06 12:00:00 -03\n           Universal time: Thu 2026-08-06 15:00:00 UTC\n                 RTC time: Thu 2026-08-06 15:00:00\n                Time zone: America/Fortaleza (-03, -0300)\nSystem clock synchronized: yes\n              NTP service: active",
      },
      {
        command: "timedatectl list-timezones | grep -i america/ | head",
        description:
          "Fusos disponíveis (use o da IANA, não invente abreviação).",
        example: "timedatectl list-timezones | grep -i Fortaleza",
      },
      {
        command: "sudo timedatectl set-timezone America/Fortaleza",
        description:
          "Define timezone. Ajuste para o seu local real.",
      },
      {
        command: "sudo timedatectl set-ntp true",
        description:
          "Liga sincronização NTP via o serviço configurado no systemd.",
      },
      {
        command: "systemctl status systemd-timesyncd --no-pager 2>/dev/null | head -n 20",
        description:
          "Em muitas imagens Debian/cloud o cliente é timesyncd. Pode ser chrony em outros setups.",
        example: "systemctl status systemd-timesyncd --no-pager | head -n 15",
      },
      {
        command: "timedatectl timesync-status 2>/dev/null || chronyc tracking 2>/dev/null || echo 'cliente NTP: verifique timesyncd ou chrony'",
        description:
          "Detalhe da sincronização quando a ferramenta está disponível.",
        example: "timedatectl timesync-status 2>/dev/null || true",
      },
      {
        command: "date --iso-8601=seconds; date -u --iso-8601=seconds",
        description:
          "Hora local e UTC em formato ordenável.",
        example: "date --iso-8601=seconds",
      },
      {
        command: "ls -l /etc/localtime /etc/timezone 2>/dev/null",
        description:
          "Arquivos clássicos de fuso; timedatectl os mantém coerentes.",
        example: "ls -l /etc/localtime; cat /etc/timezone 2>/dev/null",
      },
      {
        command: "man timedatectl",
        description:
          "Referência dos subcomandos: `set-timezone`, `set-ntp` para ligar ou desligar a sincronização e `set-time`, que só funciona com o NTP desligado — detalhe que responde a quase todo 'não consigo mudar a hora'.",
      },
      {
        command: "man systemd-timesyncd",
        description:
          "Cliente NTP leve do systemd (se for o seu caso).",
      },
    ],
    tips: [
      {
        type: "success",
        title: "NTP sempre on em servidor",
        content:
          "Logs e TLS agradecem.",
      },
      {
        type: "warning",
        title: "VM suspensa",
        content:
          "Relógio pula; confira sync ao voltar.",
      },
      {
        type: "info",
        title: "UTC no RTC",
        content:
          "Padrão saudável em Linux puro; dual-boot Windows exige cuidado.",
      },
      {
        type: "danger",
        title: "date -s crônico",
        content:
          "Máscara problema e briga com o NTP. Use só para corrigir desvio absurdo uma vez.",
      },
    ],
    practiceLabs: [
      {
        title: "Auditoria de tempo",
        goal: "timedatectl com timezone correto e NTP active/yes.",
        steps: [
          "timedatectl",
          "Ajustar timezone se estiver Etc/UTC indesejado em desktop (servidor UTC pode ser ok)",
          "set-ntp true",
          "Rever timesync-status ou status do serviço",
          "Registrar saída em ~/tempo.txt",
        ],
        command: "timedatectl | tee ~/tempo.txt",
        expected:
          "O timedatectl responde com Local time, Time zone, System clock synchronized: yes e NTP service: active. Logo depois do boot é normal ver synchronized: no por alguns segundos; se persistir, ou a UDP 123 está bloqueada, ou o serviço de hora não está rodando.",
        verify:
          "Timezone intencional; NTP service active / synchronized yes (ou chrony tracking OK).",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Comando principal systemd para tempo?",
        answer:
          "timedatectl.",
      },
      {
        id: 2,
        question: "Por que timezone IANA?",
        answer:
          "Lida com regras locais e histórico; melhor que offset manual fixo.",
      },
      {
        id: 3,
        question: "Sintoma clássico de relógio atrasado em HTTPS?",
        answer:
          "Certificado aparenta ‘not yet valid’ ou falhas TLS confusas.",
      },
      {
        id: 4,
        question: "Como ligar NTP via timedatectl?",
        answer:
          "sudo timedatectl set-ntp true",
      },
      {
        id: 5,
        question: "Diferença RTC vs system clock?",
        answer:
          "RTC é hardware; system clock é o relógio do SO em execução (sincronizado via NTP).",
      },
      {
        id: 6,
        question: "timesyncd vs chrony?",
        answer:
          "timesyncd é cliente simples; chrony é implementação NTP mais completa/comum em servidores exigentes.",
      },
      {
        id: 7,
        question: "Onde ver fuso configurado em arquivo?",
        answer:
          "/etc/timezone e symlink /etc/localtime (geridos pelo timedatectl/tzdata).",
      },
      {
        id: 8,
        question: "Por que não desligar NTP em produção?",
        answer:
          "Desvio acumula e quebra auth, logs, certificados e jobs agendados.",
      },
    ],
    references: [
      { title: "man timedatectl", url: "https://manpages.debian.org/timedatectl" },
      { title: "man systemd-timesyncd", url: "https://manpages.debian.org/systemd-timesyncd" },
      { title: "Wiki — DateTime", url: "https://wiki.debian.org/DateTime" },
      { title: "tzdata", url: "https://wiki.debian.org/TimeZoneChanges" },
    ],
  },
  {
    id: "systemd-units",
    title: "Unit files na mão — service, install e daemon-reload",
    icon: "⚙️",
    category: "Sistema",
    description:
      "Escreva um .service de verdade no Debian: seções [Unit]/[Service]/[Install], systemctl enable/start e o ritual do daemon-reload — sem copiar unit mágica da internet sem ler.",
    objectives: [
      "Ler uma unit .service campo a campo",
      "Distinguir /etc/systemd/system de /lib/systemd/system",
      "Criar um serviço simples Type=simple ou oneshot",
      "Usar systemctl daemon-reload após editar",
      "enable/disable vs start/stop",
      "Inspecionar status e journal da unit",
    ],
    content: [
      "O systemd não ‘adivinha’ o que rodar: ele lê **unit files**. Um `.service` descreve um processo de longa duração ou uma tarefa oneshot. Pacotes instalam units em `/lib/systemd/system/` (ou `/usr/lib/...`); o administrador customiza em `/etc/systemd/system/`, que tem precedência. Editar o arquivo do pacote direto é o jeito de perder a mudança no próximo upgrade.",

      "Três seções mínimas. **[Unit]** — Description e dependências leves (After=, Wants=). **[Service]** — como rodar: `ExecStart=`, `User=`, `Restart=`, `WorkingDirectory=`, `Type=`. **[Install]** — `WantedBy=multi-user.target` para o enable criar o symlink no boot. Sem [Install], `enable` reclama ou não faz o que você espera.",

      "Jargões. **Type=simple** (default moderno): o processo principal é o ExecStart. **Type=forking**: daemon clássico que dá fork (precisa PIDFile muitas vezes). **Type=oneshot**: roda e termina (RemainAfterExit=yes comum). **daemon-reload**: relê units do disco — obrigatório depois de criar/editar arquivos. **mask** é disable com cadeado (symlink para /dev/null).",

      "Fluxo saudável: escrever `/etc/systemd/system/meuapp.service` → `daemon-reload` → `start` → `status` → `journalctl -u` → se ok `enable`. Teste falha de propósito (caminho ExecStart errado) para ver o status vermelho. Não rode serviços de lab como root se puder ser User= nobody ou um user dedicado.",

      "Quando NÃO: encapsular curl|bash em ExecStart sem log; Restart=always em processo que crasha em loop comendo CPU; copiar unit de blog sem Type adequado. Quando SIM: app interno, agente de backup, worker Python/Node da empresa.",

      "Ao terminar você cria um service de lab que escreve num arquivo ou serve um sleep, habilita, vê status active, e desfaz sem deixar sujeira — entendendo reload vs restart.",

    ],
    commands: [
      {
        command: "systemctl cat cron.service 2>/dev/null || systemctl cat cron.service",
        description:
          "Mostra a unit efetiva (com drop-ins). Ótimo modelo de leitura.",
        example: "systemctl cat ssh.service | sed -n '1,40p'",
      },
      {
        command: "ls /lib/systemd/system/*.service 2>/dev/null | wc -l; ls /etc/systemd/system/*.service 2>/dev/null | head",
        description:
          "Compara quantas units vieram de pacote com as que existem em `/etc/systemd/system`. O segundo diretório tem precedência: é onde ficam os seus overrides e o primeiro lugar a olhar quando a unit não se comporta como a documentação diz.",
        example: "ls /etc/systemd/system/*.service 2>/dev/null | head",
      },
      {
        command: "man systemd.service",
        description:
          "Referência de Type, ExecStart, Restart, etc.",
      },
      {
        command: "sudo tee /etc/systemd/system/lab-hello.service >/dev/null <<'EOF'\n[Unit]\nDescription=Lab hello oneshot do debian-book\n\n[Service]\nType=oneshot\nExecStart=/bin/bash -c 'echo hello-from-systemd $(date -Is) >> /tmp/lab-hello.log'\nRemainAfterExit=yes\n\n[Install]\nWantedBy=multi-user.target\nEOF",
        description:
          "Cria service oneshot de laboratório que anexa uma linha em /tmp/lab-hello.log.",
        example: "cat /etc/systemd/system/lab-hello.service",
      },
      {
        command: "sudo systemctl daemon-reload",
        description:
          "Relê units do disco. Sem isso o systemd pode não ver o arquivo novo/editado.",
      },
      {
        command: "sudo systemctl start lab-hello.service && systemctl status lab-hello.service --no-pager",
        description:
          "Sobe a unit e mostra estado.",
        example: "sudo systemctl start lab-hello.service; systemctl status lab-hello.service --no-pager",
      },
      {
        command: "cat /tmp/lab-hello.log 2>/dev/null; journalctl -u lab-hello.service -n 20 --no-pager",
        description:
          "Efeito colateral + logs da unit.",
        example: "journalctl -u lab-hello.service -n 20 --no-pager",
      },
      {
        command: "sudo systemctl enable lab-hello.service",
        description:
          "Cria symlink para começar no boot (WantedBy). enable ≠ start.",
        example: "systemctl is-enabled lab-hello.service",
      },
      {
        command: "systemctl show lab-hello.service -p Type -p ExecStart -p FragmentPath --no-pager",
        description:
          "Mostra o valor final das propriedades, já com defaults e drop-ins aplicados. O `FragmentPath` revela qual arquivo o systemd está lendo de verdade — a prova definitiva de que você editou o arquivo certo.",
        example: "systemctl show lab-hello.service -p Type -p ExecStart -p FragmentPath",
      },
      {
        command: "sudo systemctl disable --now lab-hello.service; sudo rm -f /etc/systemd/system/lab-hello.service; sudo systemctl daemon-reload",
        description:
          "Limpeza do lab: para, desabilita, remove arquivo, reload.",
        example: "systemctl status lab-hello.service --no-pager || true",
      },
    ],
    tips: [
      {
        type: "success",
        title: "/etc para admin, /lib para pacote",
        content:
          "Override com drop-in .d/ quando só precisa mudar uma linha.",
      },
      {
        type: "warning",
        title: "Esqueceu daemon-reload",
        content:
          "Sintoma clássico: editou e ‘nada mudou’.",
      },
      {
        type: "info",
        title: "enable vs start",
        content:
          "enable = boot; start = agora. enable --now faz os dois.",
      },
      {
        type: "danger",
        title: "Restart=always em crash loop",
        content:
          "Arruma o app ou rate-limit; não mascara bug com restart infinito.",
      },
    ],
    practiceLabs: [
      {
        title: "Service oneshot de lab",
        goal: "Unit active (se RemainAfterExit), linha no log, depois limpeza.",
        steps: [
          "Criar lab-hello.service em /etc/systemd/system",
          "daemon-reload && start && status",
          "Ver /tmp/lab-hello.log e journalctl -u",
          "enable e is-enabled",
          "disable --now e remover arquivo + daemon-reload",
        ],
        command: "systemctl cat lab-hello.service 2>/dev/null || echo 'crie a unit do capitulo'; ls -la /tmp/lab-hello.log 2>/dev/null || true",
        expected:
          "Com a unit criada, o systemctl cat imprime o arquivo e o status mostra a execução concluída. Atenção ao que parece erro e não é: em oneshot sem RemainAfterExit, o estado final é inactive (dead) e isso é sucesso. Depois da limpeza, o cat responde que não encontra a unit.",
        verify:
          "Após start, o log tem timestamp; após limpeza, systemctl cat não acha a unit.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Onde o admin deve colocar units custom?",
        answer:
          "/etc/systemd/system/ (não editar direto as do pacote em /lib).",
      },
      {
        id: 2,
        question: "Para que serve daemon-reload?",
        answer:
          "Fazer o systemd reler unit files do disco após criar/editar/remover.",
      },
      {
        id: 3,
        question: "Diferença enable e start?",
        answer:
          "enable liga no boot (symlinks WantedBy); start executa agora.",
      },
      {
        id: 4,
        question: "O que vai em [Install]?",
        answer:
          "Querias de instalação, tipicamente WantedBy=multi-user.target.",
      },
      {
        id: 5,
        question: "Type=oneshot serve para quê?",
        answer:
          "Tarefas que rodam e terminam, não demônios longos.",
      },
      {
        id: 6,
        question: "Como ver a unit efetiva?",
        answer:
          "systemctl cat nome.service",
      },
      {
        id: 7,
        question: "Como ver logs só daquele serviço?",
        answer:
          "journalctl -u nome.service",
      },
      {
        id: 8,
        question: "O que é mask?",
        answer:
          "Desabilitar de forma forte apontando a unit para /dev/null, impedindo start.",
      },
    ],
    references: [
      { title: "man systemd.service", url: "https://manpages.debian.org/systemd.service" },
      { title: "man systemctl", url: "https://manpages.debian.org/systemctl" },
      { title: "man systemd.unit", url: "https://manpages.debian.org/systemd.unit" },
      { title: "Debian Wiki — systemd", url: "https://wiki.debian.org/systemd" },
    ],
  },
  {
    id: "systemd-timers-sockets",
    title: "Timers e sockets systemd — além do cron introdutório",
    icon: "⏱️",
    category: "Sistema",
    description:
      "Agende com .timer e ative sob demanda com .socket no Debian: OnCalendar, Persistent=, socket activation e o casamento unit+timer.",
    objectives: [
      "Relacionar .timer com a .service que ela dispara",
      "Ler OnCalendar= e listar timers com systemctl list-timers",
      "Criar um timer de lab com Persistent=",
      "Entender socket activation em alto nível",
      "Comparar timer vs cron sem religião",
      "Depurar timer que ‘não rodou’",
    ],
    content: [
      "Cron continua válido; **systemd timers** entram quando você quer a mesma linguagem do resto do sistema: dependências, journal unificado, `systemctl status`, calendários legíveis e `Persistent=` (roda no boot se perdeu a janela). Um timer não substitui a service: o **.timer** só dispara a **.service** homônima (ou a que Unit= indicar).",

      "Exemplo mental: `backup.service` faz o trabalho; `backup.timer` diz ‘todo dia 03:15’. Você dá enable/start no **timer**, não só na service. `systemctl list-timers` mostra próxima e última execução — o ‘crontab -l’ do mundo systemd.",

      "**Sockets**: a ideia é não deixar o demônio escutando o tempo todo. O systemd ouve a porta/arquivo socket e só inicia o serviço no primeiro interesse (ativação). SSH e vários serviços podem usar isso; para o admin, o ganho é boot mais enxuto e reinício sob demanda. Arquivos `.socket` + `.service` combinados.",

      "Jargões. **OnCalendar=** sintaxe de calendário (monto-se com `systemd-analyze calendar`). **OnBootSec=** atraso após boot. **Persistent=yes** recupera execuções perdidas. **AccuracySec=** janela de coalescing. **ListenStream=** no socket unit para TCP.",

      "Debug: `systemctl status foo.timer foo.service`, `journalctl -u foo.service`, `systemd-analyze calendar '*-*-* 03:15:00'`. Timer enabled mas service broken = ‘não rodou’ na prática. Em VPS compartilhada, timers de lab em user systemd (`--user`) evitam poluir o system — se disponível.",

      "Ao terminar você lista timers, cria par service+timer de lab que escreve num log, confere list-timers, e remove o par limpo. Socket fica no nível conceitual + leitura de um socket real do sistema.",

    ],
    commands: [
      {
        command: "systemctl list-timers --all --no-pager | head -n 25",
        description:
          "Próximas e últimas execuções dos timers do sistema.",
      },
      {
        command: "systemctl list-sockets --no-pager | head -n 20",
        description:
          "Sockets que o systemd está ouvindo e units associadas.",
      },
      {
        command: "systemd-analyze calendar '*-*-* 03:15:00'",
        description:
          "Valida e materializa a expressão OnCalendar.",
        example: "systemd-analyze calendar 'Mon *-*-* 08:00:00'",
      },
      {
        command: "systemctl cat apt-daily.timer 2>/dev/null | sed -n '1,35p' || systemctl cat logrotate.timer 2>/dev/null | sed -n '1,35p'",
        description:
          "Timer real do Debian para usar de modelo.",
        example: "systemctl cat apt-daily.timer | sed -n '1,40p'",
      },
      {
        command: "sudo tee /etc/systemd/system/lab-tick.service >/dev/null <<'EOF'\n[Unit]\nDescription=Lab tick service\n\n[Service]\nType=oneshot\nExecStart=/bin/bash -c 'echo tick $(date -Is) >> /tmp/lab-tick.log'\nEOF",
        description:
          "Service oneshot disparada pelo timer (sem [Install] obrigatório se só o timer chama).",
        example: "cat /etc/systemd/system/lab-tick.service",
      },
      {
        command: "sudo tee /etc/systemd/system/lab-tick.timer >/dev/null <<'EOF'\n[Unit]\nDescription=Lab tick timer a cada 2 minutos\n\n[Timer]\nOnCalendar=*-*-* *:0/2:00\nPersistent=yes\nUnit=lab-tick.service\n\n[Install]\nWantedBy=timers.target\nEOF",
        description:
          "Timer de lab a cada 2 min (ajuste se quiser menos barulho).",
        example: "cat /etc/systemd/system/lab-tick.timer",
      },
      {
        command: "sudo systemctl daemon-reload && sudo systemctl enable --now lab-tick.timer && systemctl list-timers lab-tick.timer --no-pager",
        description:
          "Ativa o timer e mostra a próxima corrida.",
        example: "systemctl list-timers lab-tick.timer --no-pager",
      },
      {
        command: "sudo systemctl start lab-tick.service && cat /tmp/lab-tick.log 2>/dev/null | tail",
        description:
          "Disparo manual da service para não esperar o calendário.",
        example: "sudo systemctl start lab-tick.service; tail /tmp/lab-tick.log",
      },
      {
        command: "journalctl -u lab-tick.service -n 10 --no-pager",
        description:
          "Log das execuções que o timer disparou. Timer ativo sem nenhuma linha aqui costuma significar que o serviço falhou antes de começar, e o motivo aparece nessas mesmas linhas.",
      },
      {
        command: "sudo systemctl disable --now lab-tick.timer; sudo rm -f /etc/systemd/system/lab-tick.{service,timer}; sudo systemctl daemon-reload",
        description:
          "Desliga o timer, remove os dois arquivos e recarrega o systemd. A ordem importa: apagar antes de desabilitar deixa link órfão em `timers.target`, e o systemd passa a reclamar disso em todo `daemon-reload`.",
        example: "systemctl list-timers lab-tick.timer --no-pager || true",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Timer dispara service",
        content:
          "Sempre pense no par; status nos dois nomes.",
      },
      {
        type: "success",
        title: "Persistent=yes",
        content:
          "Útil em notebook/VPS que fica desligada na hora do job.",
      },
      {
        type: "warning",
        title: "OnCalendar errado",
        content:
          "Use systemd-analyze calendar antes de confiar.",
      },
      {
        type: "info",
        title: "cron vs timer",
        content:
          "cron é ubíquo e simples; timer integra journal/deps. Os dois podem coexistir.",
      },
    ],
    practiceLabs: [
      {
        title: "Timer lab-tick",
        goal: "Timer enabled, start manual grava log, list-timers enxerga a unit, limpeza final.",
        steps: [
          "Criar lab-tick.service e .timer",
          "daemon-reload && enable --now timer",
          "start na service e ler /tmp/lab-tick.log",
          "list-timers",
          "disable --now e apagar arquivos",
        ],
        command: "systemctl list-timers lab-tick.timer --no-pager 2>/dev/null || echo 'timer lab nao ativo (ok se ja limpou)'",
        expected:
          "Com o timer ativo, o list-timers traz uma linha com NEXT, LEFT, LAST e a unit; o arquivo de log ganha uma entrada a cada disparo. Depois da limpeza o comando não acha mais o timer e cai na mensagem alternativa — que também é resultado esperado, sinal de que você desfez o lab.",
        verify:
          "Log com ticks; apos limpeza o timer some de list-timers.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Quem executa o trabalho: .timer ou .service?",
        answer:
          "A .service executa; a .timer só agenda o disparo.",
      },
      {
        id: 2,
        question: "Comando para listar timers?",
        answer:
          "systemctl list-timers",
      },
      {
        id: 3,
        question: "Para que Persistent= no timer?",
        answer:
          "Executar jobs perdidos quando a máquina estava desligada (conforme regras).",
      },
      {
        id: 4,
        question: "Como validar expressão OnCalendar?",
        answer:
          "systemd-analyze calendar 'expressão'",
      },
      {
        id: 5,
        question: "O que é socket activation?",
        answer:
          "systemd escuta o socket e inicia o serviço sob demanda.",
      },
      {
        id: 6,
        question: "WantedBy típico de timer?",
        answer:
          "timers.target",
      },
      {
        id: 7,
        question: "Como ver logs do job?",
        answer:
          "journalctl -u nome.service",
      },
      {
        id: 8,
        question: "Timer enable sem daemon-reload após criar arquivo?",
        answer:
          "Pode falhar ou usar definição velha; sempre daemon-reload.",
      },
    ],
    references: [
      { title: "man systemd.timer", url: "https://manpages.debian.org/systemd.timer" },
      { title: "man systemd.socket", url: "https://manpages.debian.org/systemd.socket" },
      { title: "man systemd.time", url: "https://manpages.debian.org/systemd.time" },
      { title: "systemd timers (freedesktop)", url: "https://www.freedesktop.org/software/systemd/man/systemd.timer.html" },
    ],
  },
  {
    id: "systemd-targets",
    title: "Targets, dependências e order — o mapa do boot no systemd",
    icon: "🎯",
    category: "Sistema",
    description:
      "Entenda targets como ‘runlevels modernos’: multi-user, graphical, rescue, isolate, After=/Wants=/Requires= — para debugar boot e ordenar serviços sem chute.",
    objectives: [
      "Explicar target como grupo de units",
      "Ver default target e o que está active",
      "Usar isolate com respeito (rescue/emergency)",
      "Ler After=, Wants=, Requires= sem confundir",
      "Inspecionar dependências com systemctl list-dependencies",
      "Relacionar target com problemas de fstab/getty/rede",
    ],
    content: [
      "No sysv havia runlevels numéricos; no systemd há **targets**: pontos de sincronização com nomes (`multi-user.target`, `graphical.target`, `network-online.target`). O boot ‘chega’ num target padrão (`systemctl get-default`). Serviços se encaixam com WantedBy= nesse alvo. Pensar em targets evita a ideia errada de que tudo começa num grande script serial único.",

      "**multi-user** ≈ servidor em texto com rede e serviços. **graphical** puxa multi-user + pilha gráfica. **rescue** e **emergency** são modos mínimos para consertar (senha root, fstab). `isolate` muda o alvo atual — poderoso e perigoso em produção (pode derrubar sessão gráfica/SSH se mal usado).",

      "Dependências: **After=** só ordena (A depois de B, mas não exige B). **Requires=** se B falha, A pode cair. **Wants=** desejo fraco (mais comum). **BindsTo=** laço mais forte. A maior parte das units de app quer `After=network.target` ou, se realmente precisa de rede configurada, `network-online.target` (com o serviço wait-online habilitado — trade-off de boot mais lento).",

      "Debug de boot lento: `systemd-analyze blame` e `critical-chain`. Debug de ‘não subiu’: list-dependencies do default target, status de units failed (`systemctl --failed`). fstab com disco ausente sem nofail trava o caminho até multi-user — ponte com o capítulo fstab-uuid.",

      "Quando NÃO: isolate graphical em servidor headless por curiosidade via SSH sem console; Requires= em tudo ‘para garantir’ criando fragilidade em cascata. Quando SIM: entender por que seu serviço enable não sobe até X, ou por que o boot espera 90s num mount.",

      "Ao terminar você sabe o default target, lista dependências, lê blame head, e explica After vs Wants em uma frase cada.",

    ],
    commands: [
      {
        command: "systemctl get-default",
        description:
          "Diz para qual target a máquina sobe no boot. Em servidor o esperado é `multi-user.target`; `graphical.target` numa VPS significa carregar ambiente gráfico e gastar RAM que ninguém vai usar.",
        output: "multi-user.target",
      },
      {
        command: "systemctl list-units --type=target --no-pager | head -n 30",
        description:
          "Lista os targets ativos agora. Serve para ler o boot como camadas — `basic`, `network`, `multi-user` — e decidir em que degrau dessa escada a sua unit deve se pendurar.",
      },
      {
        command: "systemctl list-dependencies multi-user.target --no-pager | head -n 40",
        description:
          "Árvore do que multi-user quer puxar.",
      },
      {
        command: "systemctl --failed --no-pager",
        description:
          "Units que falharam — primeiro painel pós-boot ruim.",
      },
      {
        command: "systemd-analyze",
        description:
          "Tempo total de firmware/loader/kernel/userspace quando disponível.",
        example: "systemd-analyze time",
      },
      {
        command: "systemd-analyze blame | head -n 20",
        description:
          "O que mais demorou a ficar ready no boot atual.",
      },
      {
        command: "systemd-analyze critical-chain --no-pager | head -n 30",
        description:
          "Cadeia crítica até o default target.",
      },
      {
        command: "systemctl show ssh.service -p After -p Wants -p Requires --no-pager 2>/dev/null || systemctl show cron.service -p After -p Wants -p Requires --no-pager",
        description:
          "Dependências reais de um serviço instalado.",
        example: "systemctl show cron.service -p After -p Wants -p Requires",
      },
      {
        command: "man systemd.special",
        description:
          "Catálogo dos targets e units especiais: o que `multi-user`, `graphical` e `rescue` significam, e por que `network-online.target` só existe de fato se alguma unit o requisitar explicitamente.",
      },
      {
        command: "man systemd.unit",
        description:
          "Semântica das dependências, onde quase todo mundo erra: `Wants` é desejo e não falha junto, `Requires` arrasta a falha, `After` apenas ordena sem criar dependência e `BindsTo` amarra o ciclo de vida das duas units.",
      },
    ],
    tips: [
      {
        type: "info",
        title: "After ≠ Requires",
        content:
          "Ordenar não é exigir.",
      },
      {
        type: "warning",
        title: "isolate em produção",
        content:
          "Pode derrubar serviços e sessões; prefira console e janela.",
      },
      {
        type: "success",
        title: "--failed primeiro",
        content:
          "Antes de reinstalar o mundo, veja o que vermelho.",
      },
      {
        type: "warning",
        title: "network-online em tudo",
        content:
          "Boot mais lento; use só quem realmente precisa de rede completa.",
      },
    ],
    practiceLabs: [
      {
        title: "Raio-X do target padrão",
        goal: "Arquivo com default, failed, blame head e trecho de dependencies.",
        steps: [
          "get-default",
          "systemctl --failed",
          "analyze blame | head",
          "list-dependencies multi-user | head",
          "tee ~/targets-lab.txt",
        ],
        command: "{ echo '=== default ==='; systemctl get-default; echo; echo '=== failed ==='; systemctl --failed --no-pager; echo; echo '=== blame ==='; systemd-analyze blame 2>/dev/null | head -n 15; } | tee ~/targets-lab.txt",
        expected:
          "O arquivo traz o target padrão, as units em falha (o ideal é a mensagem de 0 loaded units listed) e o ranking do blame, do mais lento para o mais rápido. Serviço de rede esperando endereço costuma liderar o blame e é o primeiro suspeito quando o boot demora.",
        verify:
          "Você nomeia o default target e aponta o serviço mais lento do blame (se houver).",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que é um target?",
        answer:
          "Unit de sincronização que agrupa/alcança um estado do sistema (substituto conceitual de runlevels).",
      },
      {
        id: 2,
        question: "Como ver o target padrão?",
        answer:
          "systemctl get-default",
      },
      {
        id: 3,
        question: "After= faz o quê?",
        answer:
          "Define ordem (esta unit depois da outra), sem necessariamente exigir sucesso da outra.",
      },
      {
        id: 4,
        question: "Wants= vs Requires=?",
        answer:
          "Wants é dependência fraca; Requires é forte e propaga falha com mais rigor.",
      },
      {
        id: 5,
        question: "Para que systemctl --failed?",
        answer:
          "Listar units em falha no sistema.",
      },
      {
        id: 6,
        question: "systemd-analyze blame ajuda em quê?",
        answer:
          "Ver o que mais atrasou o boot.",
      },
      {
        id: 7,
        question: "multi-user vs graphical?",
        answer:
          "multi-user é multiutilizador em texto/serviços; graphical adiciona pilha de interface gráfica.",
      },
      {
        id: 8,
        question: "Risco de isolate rescue via SSH único?",
        answer:
          "Pode cortar a sessão e serviços necessários; tenha console alternativo.",
      },
    ],
    references: [
      { title: "man systemd.special", url: "https://manpages.debian.org/systemd.special" },
      { title: "man systemd.unit", url: "https://manpages.debian.org/systemd.unit" },
      { title: "man systemd-analyze", url: "https://manpages.debian.org/systemd-analyze" },
      { title: "Bootup (freedesktop)", url: "https://www.freedesktop.org/software/systemd/man/bootup.html" },
    ],
  },
  {
    id: "journald-campo",
    title: "journald de campo — vacuum, persistência e filtros que importam",
    icon: "📋",
    category: "Sistema",
    description:
      "Domine o journal no dia a dia: journalctl com filtros, boot atual vs anteriores, persistência em /var/log/journal e vacuum para não encher o disco.",
    objectives: [
      "Ler logs do boot atual e de uma unit",
      "Filtrar por prioridade e tempo",
      "Alternar entre boots com -b",
      "Ver se o journal é persistente ou volátil",
      "Aplicar vacuum por tamanho/tempo",
      "Relacionar journal com Storage= no journald.conf",
    ],
    content: [
      "O **journald** centraliza logs estruturados. Em vez de caçar em meia dúzia de arquivos primeiro, você começa com `journalctl`. Isso não elimina `/var/log/syslog` em todos os setups, mas no Debian com systemd o journal é a língua franca de serviços (`-u`), boots (`-b`) e prioridades (`-p`).",

      "Persistência: se existir `/var/log/journal/` e Storage= estiver persistent/auto adequado, os logs sobrevivem ao reboot. Se só volátil em `/run/log/journal`, o histórico morre no restart — ótimo para appliances, ruim para forense. `journalctl --disk-usage` conta a conta.",

      "**Vacuum** é a faxina: `--vacuum-size=200M`, `--vacuum-time=14d`. Sem isso, em host verboso o journal compete com o banco de dados por disco. Cron/timer de vacuum ou config SystemMaxUse= em `journald.conf` evitam surpresa.",

      "Filtros que pagam aluguel: `-u nginx.service`, `-b -1` (boot anterior), `--since today`, `-p err..alert`, `-f` follow, `-o verbose` para campos. `_SYSTEMD_UNIT=` e outros matchers avançados existem quando a busca fica séria. `journalctl -xe` ainda é o atalho de ‘acabou de quebrar’.",

      "Quando NÃO: vacuum agressivo em incidente antes de coletar evidência; redirecionar tudo para console e achar que disco infinito resolve. Quando SIM: VPS pequena, serviço ruidoso, pós-mortem de boot que falhou ontem.",

      "Ao terminar você mede disk-usage, lê erros do boot, tira trecho de uma unit, e sabe se o journal é persistente — e como vacuum-size funciona.",

    ],
    commands: [
      {
        command: "journalctl --disk-usage",
        description:
          "Quanto espaço o journal ocupa agora.",
      },
      {
        command: "ls -la /var/log/journal 2>/dev/null || echo 'sem /var/log/journal (talvez volátil em /run)'",
        description:
          "Indício de journal persistente no disco.",
        example: "ls -la /var/log/journal 2>/dev/null | head",
      },
      {
        command: "journalctl -b -p err..alert --no-pager | tail -n 40",
        description:
          "Erros e acima do boot atual.",
      },
      {
        command: "journalctl --list-boots --no-pager | tail -n 8",
        description:
          "Boots indexados; use -b -1 para o anterior.",
      },
      {
        command: "journalctl -u ssh.service -n 30 --no-pager 2>/dev/null || journalctl -u sshd.service -n 30 --no-pager 2>/dev/null || journalctl -u cron.service -n 20 --no-pager",
        description:
          "Últimas linhas de um serviço conhecido.",
        example: "journalctl -u cron.service -n 20 --no-pager",
      },
      {
        command: "journalctl --since '1 hour ago' --until now -p warning..alert --no-pager | tail -n 30",
        description:
          "Cruza janela de tempo com faixa de prioridade — o filtro que transforma o journal em ferramenta de investigação. Ler tudo desde o boot é ruído; ler de `warning` para cima na última hora é diagnóstico.",
        example: "journalctl --since today -p err --no-pager | tail -n 20",
      },
      {
        command: "grep -E '^(Storage|SystemMaxUse|SystemMaxFileSize)' /etc/systemd/journald.conf /etc/systemd/journald.conf.d/* 2>/dev/null | head",
        description:
          "Política de armazenamento e teto de disco.",
        example: "grep -vE '^#|^$' /etc/systemd/journald.conf | head",
      },
      {
        command: "man journald.conf",
        description:
          "Referência das opções que decidem se o log sobrevive ao reboot (`Storage=persistent`), quanto disco ele pode ocupar (`SystemMaxUse=`) e se também vai para o syslog, duplicando escrita.",
      },
      {
        command: "sudo journalctl --vacuum-size=200M",
        description:
          "Exemplo de faxina por tamanho (ajuste ao host; em lab ok). Em produção combine com política.",
        example: "journalctl --disk-usage",
      },
      {
        command: "journalctl -xe --no-pager | tail -n 40",
        description:
          "Atalho de incidente recente com contexto.",
      },
    ],
    tips: [
      {
        type: "success",
        title: "-u + -b cobrem 80% dos casos",
        content:
          "Unit e boot errado são o erro humano mais comum.",
      },
      {
        type: "warning",
        title: "Vacuum no meio de incidente",
        content:
          "Colete primeiro, limpe depois.",
      },
      {
        type: "info",
        title: "Storage=persistent",
        content:
          "Crie /var/log/journal e reinicie journald ou deixe a config adequada.",
      },
      {
        type: "warning",
        title: "Disco cheio",
        content:
          "Journal pode parar de escrever; SystemMaxUse evita comer o root inteiro.",
      },
    ],
    practiceLabs: [
      {
        title: "Auditoria rápida do journal",
        goal: "Saber uso em disco, se há persistência, 10 erros do boot e um trecho de unit.",
        steps: [
          "journalctl --disk-usage",
          "ls /var/log/journal",
          "journalctl -b -p err | tail",
          "journalctl -u cron -n 10",
          "Registrar em ~/journal-lab.txt",
        ],
        command: "{ echo '=== usage ==='; journalctl --disk-usage; echo; echo '=== persist? ==='; ls -ld /var/log/journal 2>&1 | head; echo; echo '=== errs ==='; journalctl -b -p err --no-pager | tail -n 15; } | tee ~/journal-lab.txt",
        expected:
          "O primeiro bloco diz quanto o journal ocupa; o segundo revela se /var/log/journal existe, ou seja, se o log sobrevive ao reboot; o terceiro traz os erros de prioridade err do boot atual. Bloco de erros vazio é ótimo resultado — significa boot limpo, não comando errado.",
        verify:
          "Você afirma se o journal sobrevive a reboot e cita um erro real (ou a ausência) do boot atual.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como ver logs só do boot atual?",
        answer:
          "journalctl -b",
      },
      {
        id: 2,
        question: "Como filtrar por serviço?",
        answer:
          "journalctl -u nome.service",
      },
      {
        id: 3,
        question: "O que --disk-usage mostra?",
        answer:
          "Espaço ocupado pelo journal no disco.",
      },
      {
        id: 4,
        question: "Para que --vacuum-size?",
        answer:
          "Reduzir logs antigos até caber num teto de tamanho.",
      },
      {
        id: 5,
        question: "Journal volátil vs persistente?",
        answer:
          "Volátil em /run some no reboot; persistente em /var/log/journal guarda histórico.",
      },
      {
        id: 6,
        question: "-p err..alert faz o quê?",
        answer:
          "Filtra por prioridade de erro até alert.",
      },
      {
        id: 7,
        question: "Como ver o boot anterior?",
        answer:
          "journalctl -b -1 (ou id de --list-boots).",
      },
      {
        id: 8,
        question: "Arquivo principal de config?",
        answer:
          "/etc/systemd/journald.conf e drop-ins em journald.conf.d/.",
      },
    ],
    references: [
      { title: "man journalctl", url: "https://manpages.debian.org/journalctl" },
      { title: "man journald.conf", url: "https://manpages.debian.org/journald.conf" },
      { title: "man systemd-journald", url: "https://manpages.debian.org/systemd-journald" },
      { title: "Debian Wiki — systemd", url: "https://wiki.debian.org/systemd" },
    ],
  },
  {
    id: "runbook-lento",
    title: "Runbook: sistema lento — CPU, IO, memória",
    icon: "🐢",
    category: "Sistema",
    description:
      "Diagnostique lentidão no Debian com ordem barata→cara: load, CPU, memória, IO, top ofensores e o que coletar antes de reiniciar.",
    objectives: [
      "Ler load average com contexto de N CPUs",
      "Separar CPU-bound de IO-bound e memória",
      "Usar top/htop, vmstat, iostat, free",
      "Achar processo ofensor e cgroup/unit se houver",
      "Coletar evidência antes de reboot salvação",
      "Saber quando o problema é disco cheio ou thrashing",
    ],
    content: [
      "'Está lento' não é diagnóstico. Runbook bom impõe ordem: o host responde a SSH? load alto? CPU em user/sys/iowait? memória em swap? disco em 100% util? Só então mate processo ou reinicie. Reiniciar primeiro apaga a cena do crime.",

      "Jargões. load average: fila de runnable+uninterruptible. iowait: CPU ociosa esperando disco. thrashing: troca excessiva com swap. PSI (se disponível): pressure stall. unit: systemd pode mostrar quem cospe recurso.",

      "Ordem prática: uptime → nproc → top/ps → free -h → vmstat 1 5 → iostat -xz 1 5 (sysstat) → df -h → journalctl -p err → se container, podman stats. Anote PIDs, unit, hora. Só então systemctl restart do ofensor.",

      "Armadilhas. Comparar load 8 em máquina de 16 threads com load 8 em 1 vCPU. Olhar só CPU e ignorar disco 100%. Matar processo de banco no meio de checkpoint. Achar que htop colorido substitui coleta para o ticket.",

      "Quando NÃO: incidente de segurança ativo onde preservar memória manda mais (forense). Quando SIM: degradação de app, VPS pesada, pós-deploy suspeito.",

      "Ao terminar você segue um checklist de 10 minutos e sai com hipótese (CPU/IO/mem/disk) + evidência colada.",

    ],
    commands: [
      {
        command: "uptime; nproc",
        description:
          "Primeira leitura de servidor lento: compare o load average com o número de núcleos. Load 4 em 4 CPUs é fila cheia mas saudável; load 12 em 2 CPUs é sofrimento. Os três números são 1, 5 e 15 minutos — se o de 1 min for muito maior que o de 15, o problema começou agora.",
      },
      {
        command: "free -h",
        description:
          "Mostra se a máquina ficou sem RAM ou já caiu no swap. A coluna que importa é `available`, não `free`: `buff/cache` é memória emprestada, devolvida sob pressão. Swap subindo durante o incidente explica lentidão generalizada.",
      },
      {
        command: "ps aux --sort=-%cpu | head -n 15",
        description:
          "Ordena os processos por consumo de CPU e mostra os 15 primeiros. Separa 'a máquina está lenta' de 'um processo está queimando CPU'. Valor de %CPU acima de 100 significa que o processo usa mais de um núcleo.",
      },
      {
        command: "ps aux --sort=-%mem | head -n 15",
        description:
          "Mesma lista, agora pela memória residente. Rode duas vezes com alguns minutos de intervalo: um processo cujo RSS só cresce, sem estabilizar, é a assinatura de vazamento de memória.",
      },
      {
        command: "vmstat 1 5",
        description:
          "Cinco amostras de 1 segundo com as três colunas que decidem o diagnóstico: `r` (processos na fila) maior que o número de CPUs aponta gargalo de CPU; `si`/`so` diferente de zero é swap em uso agora; `wa` alto joga a culpa no disco.",
      },
      {
        command: "sudo apt install -y sysstat && iostat -xz 1 3",
        description:
          "Instala o sysstat e mede o disco. Olhe `%util` perto de 100 (dispositivo saturado) e `await` em dezenas de milissegundos (cada I/O esperando na fila). O `-z` esconde dispositivos sem atividade, deixando na tela só o que trabalha.",
      },
      {
        command: "df -h; df -i",
        description:
          "Disco cheio tem duas formas e o `-h` só mostra uma. Um `/var` com bytes livres mas sem inodes livres derruba serviço com 'No space left on device' — típico de diretório com milhares de arquivos pequenos de sessão ou cache.",
      },
      {
        command: "systemctl --failed --no-pager",
        description:
          "Lista as units que falharam. Em investigação de lentidão serve como contexto: um serviço reiniciando em loop consome CPU, enche o journal e mascara a causa real.",
      },
      {
        command: "pidstat -ur 1 3 2>/dev/null || true",
        description:
          "CPU/mem por PID se sysstat completo.",
      },
      {
        command: "sudo journalctl -p err..alert --since '1 hour ago' --no-pager | tail -n 40",
        description:
          "Filtra só as mensagens de erro para cima na última hora. É a leitura que mostra se a lentidão vem acompanhada de OOM killer matando processo, timeout de disco ou serviço reiniciando — cada uma leva a um caminho diferente.",
      },
      {
        command: "cat /proc/pressure/cpu 2>/dev/null || true",
        description:
          "PSI de CPU se o kernel expõe.",
      },
      {
        command: "sudo systemd-cgtop -n 1 2>/dev/null | head -n 20 || true",
        description:
          "Mostra o consumo agrupado por cgroup, isto é, por serviço em vez de por processo. Responde 'qual unit está comendo a máquina' quando o culpado se espalha em dezenas de processos filhos que o `ps` mostra separados.",
      },
    ],
    tips: [
      {
        type: "success",
        title: "Evidência antes de reboot",
        content:
          "uptime, free, top, iostat no ticket.",
      },
      {
        type: "warning",
        title: "iowait alto",
        content:
          "Não é falta de CPU — olhe disco/rede storage.",
      },
      {
        type: "info",
        title: "load e nproc",
        content:
          "load 4 em 4 CPUs não é load 4 em 1 CPU.",
      },
      {
        type: "danger",
        title: "kill -9 no banco",
        content:
          "Último recurso; prefira stop graceful.",
      },
    ],
    practiceLabs: [
      {
        title: "Snapshot de lentidão (leitura)",
        goal: "Gerar ~/slow-snap.txt com uptime, free, top cpu, df.",
        steps: [
          "uptime; nproc",
          "free -h",
          "ps sort cpu",
          "df -h",
        ],
        command: "{ echo '=== uptime ==='; uptime; echo; echo '=== free ==='; free -h; echo; echo '=== top cpu ==='; ps aux --sort=-%cpu | head -n 10; echo; echo '=== df ==='; df -h; } | tee ~/slow-snap.txt",
        expected:
          "Quatro blocos no arquivo. Compare o load average com o número de núcleos, olhe o available do free e o Use% do df. Load alto com CPU ociosa aponta espera de disco ou de rede; partição em 100% costuma explicar sozinha a lentidão e as falhas de serviço que vieram junto.",
        verify:
          "Arquivo com quatro blocos para anexar em chamado.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "load 1.0 em host de 1 CPU significa o quê em geral?",
        answer:
          "Fila próxima da saturação de 1 runnable em média — host ocupado.",
      },
      {
        id: 2,
        question: "iowait alto aponta para?",
        answer:
          "Espera de I/O (disco/storage), não falta crônica de ALU.",
      },
      {
        id: 3,
        question: "Por que ver swap em free -h?",
        answer:
          "Thrashing degrada tudo.",
      },
      {
        id: 4,
        question: "Comando rápido top CPU?",
        answer:
          "ps aux --sort=-%cpu | head",
      },
      {
        id: 5,
        question: "df -i além de df -h?",
        answer:
          "Esgotamento de inodes com disco ainda com espaço.",
      },
      {
        id: 6,
        question: "Por que não reiniciar primeiro?",
        answer:
          "Perde evidência e pode mascarar root cause.",
      },
      {
        id: 7,
        question: "systemd-cgtop ajuda em quê?",
        answer:
          "Ver consumo por cgroup/unit.",
      },
      {
        id: 8,
        question: "PSI é o quê?",
        answer:
          "Pressure stall information — pressão de recurso no kernel moderno.",
      },
    ],
    references: [
      { title: "man uptime", url: "https://manpages.debian.org/uptime" },
      { title: "man vmstat", url: "https://manpages.debian.org/vmstat" },
      { title: "man iostat", url: "https://manpages.debian.org/iostat" },
      { title: "Linux Performance (Brendan Gregg)", url: "https://www.brendangregg.com/linuxperf.html" },
    ],
  },
  {
    id: "runbook-boot",
    title: "Runbook: não sobe / não boota — rescue e single-user",
    icon: "🧯",
    category: "Sistema",
    description:
      "Recupere Debian que não chega ao login: GRUB, rescue/single, fsck consciente, journal do boot e rollback mental sem formatar às cegas.",
    objectives: [
      "Descrever caminhos rescue/single-user/GRUB edit",
      "Checar fs sujo e fsck com cuidado",
      "Usar journalctl -b -1 quando o host ainda sobe parcialmente",
      "Reinstalar GRUB só com hipótese",
      "Montar root a partir de live se preciso",
      "Não destruir LUKS/LVM no pânico",
    ],
    content: [
      "Boot morto tem camadas: firmware → GRUB → initramfs → root fs → systemd → login. Seu job é achar em qual degrau parou. Mensagem GRUB? emergency mode? kernel panic? multi-user com serviço em loop?",

      "Jargões. emergency/rescue.target. rd.break / init=/bin/sh (avançado). fsck. journalctl -b. chroot a partir de live USB. update-initramfs / grub-install só com alvo certo.",

      "Se o sistema ainda SSH às vezes: journalctl -b -1 -p err. Se console: GRUB e edita, adicione systemd.unit=rescue.target. Disco: lsblk, mount -o remount,rw / em rescue, leia fstab. LUKS: unlock antes de fsck do logical.",

      "Armadilhas. fsck em FS montado rw. grub-install no disco errado em dual disk. Resetar root password e esquecer de relock. Apagar volume LVM para limpar.",

      "Quando NÃO: primeiro sintoma de lentidão (use runbook-lento). Quando SIM: kernel panic recorrente, drop to busybox, failed to mount root.",

      "Ao terminar você classifica a fase do boot e lista três ações seguras antes de qualquer install destrutivo.",

    ],
    commands: [
      {
        command: "systemctl get-default; systemctl list-jobs 2>/dev/null | head",
        description:
          "Alvo padrão e jobs presos (se bootou).",
      },
      {
        command: "journalctl -b -0 -p err..alert --no-pager | tail -n 50",
        description:
          "Erros do boot atual, só de `err` para cima. Primeira leitura do runbook — e leia de cima para baixo: você quer o primeiro erro na ordem cronológica, porque o resto costuma ser consequência dele.",
      },
      {
        command: "journalctl -b -1 -p err..alert --no-pager | tail -n 50",
        description:
          "A mesma leitura no boot anterior, que é o que interessa depois de uma queda: mostra o que a máquina disse antes de morrer. Só existe se o journal estiver persistente.",
      },
      {
        command: "lsblk -f",
        description:
          "Árvore de discos com sistema de arquivos, UUID, rótulo e ponto de montagem. Comparar o UUID daqui com o do `fstab` resolve a falha de boot mais comum: disco que trocou de nome e `fstab` apontando para um device que não existe mais.",
      },
      {
        command: "findmnt /",
        description:
          "O que está montado como root.",
      },
      {
        command: "cat /etc/fstab",
        description:
          "Mostra o que o sistema tenta montar no boot. Linha errada sem a opção `nofail` trava a subida esperando um dispositivo — em servidor remoto isso significa máquina inacessível até alguém abrir o console.",
      },
      {
        command: "systemctl list-units --failed --no-pager",
        description:
          "Lista o que falhou nesta subida. Cada unit daqui merece um `systemctl status` para separar quem é causa de quem é vítima de uma dependência que não subiu.",
      },
      {
        command: "sudo systemd-analyze blame 2>/dev/null | head -n 20 || true",
        description:
          "O que atrasou o último boot bem-sucedido.",
      },
      {
        command: "man systemd-fsck",
        description:
          "Como fsck se encaixa no boot.",
      },
      {
        command: "sudo grub-probe -t device / 2>/dev/null || true",
        description:
          "Device do root segundo GRUB tools.",
      },
      {
        command: "cat /proc/cmdline",
        description:
          "Linha de comando do kernel atual.",
      },
      {
        command: "dmesg -T 2>/dev/null | tail -n 30 || true",
        description:
          "Mensagens do kernel com data legível (`-T`). É a camada abaixo do systemd: erro de disco, firmware faltando e OOM killer aparecem aqui antes de qualquer serviço perceber.",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "fsck montado rw",
        content:
          "Desmonte ou use live rescue.",
      },
      {
        type: "warning",
        title: "Disco certo no grub-install",
        content:
          "NVMe vs SATA — confunda e bricke o outro OS.",
      },
      {
        type: "info",
        title: "journalctl -b -1",
        content:
          "Ouro quando o boot atual quase sobe.",
      },
      {
        type: "success",
        title: "Classifique a camada",
        content:
          "GRUB vs initramfs vs systemd mudam a ferramenta.",
      },
    ],
    practiceLabs: [
      {
        title: "Pacote de evidência de boot",
        goal: "Salvar cmdline, lsblk -f, failed units e erros do boot atual.",
        steps: [
          "cat /proc/cmdline",
          "lsblk -f",
          "systemctl --failed",
          "journalctl -b -p err | tail",
        ],
        command: "{ echo '=== cmdline ==='; cat /proc/cmdline; echo; echo '=== lsblk ==='; lsblk -f; echo; echo '=== failed ==='; systemctl --failed --no-pager; } | tee ~/boot-snap.txt",
        expected:
          "O arquivo reúne a linha de comando do kernel, a tabela de discos com UUID e a lista de units em falha. É o mínimo que alguém precisa para te ajudar remotamente: sem cmdline e sem lsblk, qualquer diagnóstico de boot vira adivinhação.",
        verify:
          "~/boot-snap.txt pronto para colar em chamado de recovery.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Três camadas altas do boot?",
        answer:
          "Bootloader, initramfs/root fs, systemd/user space.",
      },
      {
        id: 2,
        question: "journalctl -b -1 mostra?",
        answer:
          "Log do boot anterior.",
      },
      {
        id: 3,
        question: "Risco de fsck com FS montado?",
        answer:
          "Corrupção adicional.",
      },
      {
        id: 4,
        question: "lsblk -f ajuda em quê no rescue?",
        answer:
          "UUIDs e tipos para montar certo.",
      },
      {
        id: 5,
        question: "fstab errada causa o quê?",
        answer:
          "emergency mode / failed mount.",
      },
      {
        id: 6,
        question: "rescue.target é o quê?",
        answer:
          "Modo mínimo para manutenção.",
      },
      {
        id: 7,
        question: "Por que não formatar de primeira?",
        answer:
          "Dado pode ser recuperável; causa pode ser config.",
      },
      {
        id: 8,
        question: "LUKS entra onde na ordem?",
        answer:
          "Antes de fsck/mount do filesystem interno.",
      },
    ],
    references: [
      { title: "Debian Wiki — BootProcess", url: "https://wiki.debian.org/BootProcess" },
      { title: "man systemd-fsck", url: "https://manpages.debian.org/systemd-fsck" },
      { title: "man journalctl", url: "https://manpages.debian.org/journalctl" },
    ],
  },
    {
    id: "runbook-rede",
    title: "Runbook — rede morta após upgrade ou reboot",
    icon: "🚨",
    category: "Sistema e Processos",
    description: "Passo a passo quando a rede some: link, stack (NM/ifupdown/networkd), IP, rota, DNS e o que NÃO fazer no SSH sem console.",
    level: "intermediario",
    readMinutes: 16,
    objectives: [
      "Separar falha de link, L3, rota e DNS",
      "Identificar a stack de rede antes de editar arquivos",
      "Usar ip/ping na ordem certa",
      "Não piorar o caso cortando o próprio SSH",
      "Documentar o laudo em arquivo",
    ],
    content: [
      "\"A rede morreu\" é sintoma, não diagnóstico. Depois de upgrade, reboot ou alguém \"só mexer no interfaces\", o host pode estar sem link, com link UP mas sem IP, com IP sem rota default, ou com L3 ok e DNS quebrado. Tratar os quatro casos com o mesmo comando mágico piora. Este runbook é a ordem barata que um admin experiente usa antes de tocar em config.",
      "Regra zero: no SSH remoto, NÃO reinicie a stack de rede às cegas e NÃO faça ifdown da interface que te carrega sem console do provedor. Prefira leitura. Se precisar aplicar IP novo, use tmux e tenha o console aberto. Matar a própria rota default no meio do SSH é o clássico \"me tranciei fora\".",
      "Ordem de prova. (1) ip -br link — NIC existe e UP? (2) ip -br addr — tem endereço? (3) ip route — tem default? (4) ping -c2 1.1.1.1 — L3 até a internet? (5) ping -c2 deb.debian.org — DNS? (6) Só então systemctl is-active NetworkManager systemd-networkd networking e os arquivos da stack que manda. Se o 4 passa e o 5 falha, pare de mexer em IP: o problema é resolver.",
      "Pós-upgrade, causas frequentes: interface renomeada (eth0 virou enp0s3 e o arquivo aponta para nome fantasma); cloud-init reescreveu networkd; dois stacks DHCP brigando; NetworkManager puxado sem querer no servidor minimal. Laudo escrito (tee ~/laudo-rede.txt) vale mais que memória.",
      "Quando escalar: link DOWN no hypervisor; rota sumindo a cada 30s (DHCP concorrente); firewall do provedor. Quando seguir sozinho: DNS errado, default ausente após editar interfaces, unit networking failed com erro claro no journal.",
    ],
    commands: [
      {
        command: "ip -br link; ip -br addr",
        description: "Passo 1–2: link e endereços, independente da stack.",
        output: `lo               UNKNOWN        00:00:00:00:00:00 <LOOPBACK,UP,LOWER_UP>
enp0s3           UP             08:00:27:aa:bb:cc <BROADCAST,MULTICAST,UP,LOWER_UP>
lo               UNKNOWN        127.0.0.1/8 ::1/128
enp0s3           UP             10.0.2.15/24`,
      },
      {
        command: "ip route; ip -4 route show default",
        description: "Passo 3 do runbook: existe rota default? Sem gateway a máquina conversa com a própria rede e com mais nada — sintoma que se confunde facilmente com falha de DNS.",
        example: "ip route",
        output: `default via 10.0.2.2 dev enp0s3 proto dhcp src 10.0.2.15 metric 100
10.0.2.0/24 dev enp0s3 proto kernel scope link src 10.0.2.15`,
      },
      {
        command: "ping -c 2 1.1.1.1",
        description: "Passo 4: L3 até IP público (não usa DNS).",
        output: `PING 1.1.1.1 (1.1.1.1) 56(84) bytes of data.
64 bytes from 1.1.1.1: icmp_seq=1 ttl=55 time=12.1 ms
64 bytes from 1.1.1.1: icmp_seq=2 ttl=55 time=11.8 ms

--- 1.1.1.1 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss`,
      },
      {
        command: "ping -c 2 deb.debian.org; getent hosts deb.debian.org | head",
        description: "Passo 5: DNS. Se IP pinga e nome não, foque no resolver.",
        example: "ping -c 2 deb.debian.org",
      },
      {
        command: "systemctl is-active NetworkManager systemd-networkd networking 2>/dev/null",
        description: "Descobre qual serviço administra a rede nesta máquina. Importa porque configurar `/etc/network/interfaces` enquanto o NetworkManager comanda (ou o contrário) é editar um arquivo que ninguém lê.",
        output: `inactive
inactive
active`,
      },
      {
        command: "cat /etc/resolv.conf; resolvectl status 2>/dev/null | head -n 20",
        description: "Mostra qual resolvedor o sistema usa. Se o `resolv.conf` apontar para 127.0.0.53, quem responde é o stub do systemd-resolved e o servidor de verdade aparece só no `resolvectl status`.",
        example: "cat /etc/resolv.conf",
      },
      {
        command: "journalctl -u networking -u NetworkManager -u systemd-networkd -b --no-pager | tail -n 40",
        description: "Erros de rede só deste boot.",
        example: "journalctl -u networking -b --no-pager | tail -n 20",
      },
      {
        command: "{ echo \"=== $(date -Is) ===\"; ip -br link; ip -br addr; ip route; cat /etc/resolv.conf 2>/dev/null; } | tee ~/laudo-rede.txt",
        description: "Junta interfaces, endereços, rotas e resolvedor num arquivo com data. O `tee` mostra na tela e grava ao mesmo tempo: é o anexo que faz o suporte parar de pedir print de tela.",
        example: "{ ip -br addr; ip route; } | tee ~/laudo-rede.txt",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "SSH sem console",
        content: "Não ifdown/restart cego da stack na interface que te conecta.",
      },
      {
        type: "info",
        title: "IP antes de nome",
        content: "1.1.1.1 testa rota; deb.debian.org testa DNS.",
      },
      {
        type: "warning",
        title: "Nome de interface",
        content: "eth0 no arquivo e enp0s3 no kernel = rede \"sumiu\".",
      },
      {
        type: "success",
        title: "Laudo em arquivo",
        content: "tee ~/laudo-rede.txt evita retrabalho.",
      },
    ],
    practiceLabs: [
      {
        title: "Diagnóstico completo sem mudar config",
        goal: "Gerar laudo com link, addr, rota e DNS.",
        steps: [
          "Rode ip/ping/systemctl",
          "Salve em ~/laudo-rede.txt",
          "Classifique em uma frase: link? IP? rota? DNS?",
        ],
        command: "{ ip -br link; ip -br addr; ip route; ping -c1 -W2 1.1.1.1; } | tee ~/laudo-rede.txt",
        expected:
          "O laudo mostra as interfaces e o estado do link, os endereços, a tabela de rotas com a linha default e o resultado do ping. Leia nessa ordem: sem link nada mais importa; com link e sem IP, é DHCP; com IP e sem rota default, é gateway; com ping por IP funcionando e nome falhando, é DNS.",
        verify: "Arquivo existe e você classifica a camada do problema.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Por que ping em 1.1.1.1 antes de nome?",
        answer: "Isola L3/rota de falha de DNS.",
      },
      {
        id: 2,
        question: "Link UP, sem default route — o que falta?",
        answer: "Gateway/rota default (DHCP ou static incompleto).",
      },
      {
        id: 3,
        question: "Risco de reiniciar networking no SSH?",
        answer: "Pode derrubar a sessão e te trancar fora.",
      },
      {
        id: 4,
        question: "Dois stacks DHCP — sintoma?",
        answer: "IP/rota oscilando ou sumindo após boot.",
      },
      {
        id: 5,
        question: "Onde ver erros da unit neste boot?",
        answer: "journalctl -u <unit> -b",
      },
      {
        id: 6,
        question: "eth0 no arquivo e enp0s3 no ip link — o quê?",
        answer: "Alinhar o nome na config da stack ativa.",
      },
    ],
    references: [
      { title: "Debian Wiki NetworkConfiguration", url: "https://wiki.debian.org/NetworkConfiguration" },
      { title: "man ip-route", url: "https://manpages.debian.org/ip-route" },
    ],
  },
  {
    id: "obs-leve",
    title: "Observabilidade leve — journal, logrotate, healthcheck",
    icon: "📟",
    category: "Sistema",
    description:
      "Monte observabilidade de bolso no Debian: journald com teto, logrotate, timer de healthcheck e alertas sem SIEM.",
    objectives: [
      "Limitar disco do journald",
      "Entender logrotate de apps em /var/log",
      "Criar oneshot + timer systemd de healthcheck simples",
      "Monitorar systemctl --failed em timer",
      "Escolher 3-5 sinais que importam num VPS",
      "Não confundir coletar com olhar",
    ],
    content: [
      "Observabilidade leve é sinais poucos e rituais. journald + logs de app + um timer que curl no health endpoint já pegam boa parte dos incidentes de VPS solo. SIEM vem depois da disciplina.",

      "Jargões. SystemMaxUse no journald. logrotate. timer vs cron. healthcheck: endpoint ou comando que prova que o serviço presta. cardinality: não logar tudo.",

      "Prática: journalctl --disk-usage → teto em journald.conf.d → restart systemd-journald → script health.sh com curl -f e systemctl is-active → systemd timer a cada 5 min → append em log.",

      "Armadilhas. journal sem teto enchendo root. logrotate copytruncate em app que não lida bem. alert noise que treina ignorar. Healthcheck só no localhost quando o bug é o proxy.",

      "Quando NÃO: compliance que exige pipeline central já no dia 1. Quando SIM: 1–N VPS, side project, baseline antes de Prometheus.",

      "Ao terminar você tem teto de journal, um timer de health e sabe onde ler falha.",

    ],
    commands: [
      {
        command: "journalctl --disk-usage",
        description:
          "Mostra o espaço ocupado pelo journal hoje. Sem limite configurado ele cresce até 10% da partição, então esse número é o ponto de partida para decidir a retenção.",
      },
      {
        command: "sudo mkdir -p /etc/systemd/journald.conf.d && printf '%s\n' '[Journal]' 'SystemMaxUse=200M' 'MaxRetentionSec=14day' | sudo tee /etc/systemd/journald.conf.d/size.conf",
        description:
          "Cria um drop-in com teto de disco e prazo de retenção para o journal. Escrever em `journald.conf.d`, em vez de editar o `journald.conf`, mantém seu ajuste vivo depois de atualização do pacote.",
      },
      {
        command: "sudo systemctl restart systemd-journald",
        description:
          "Reinicia o journald para valer o que você escreveu no drop-in. O log já gravado não se perde; o limite novo passa a ser aplicado na próxima rotação.",
      },
      {
        command: "ls /etc/logrotate.d | head",
        description:
          "Cada arquivo aí é uma regra de rotação instalada por um pacote (nginx, apt, dpkg). Antes de escrever a sua, confira se o pacote já trouxe uma — regra duplicada rotaciona duas vezes e some com log que você queria.",
      },
      {
        command: "sudo logrotate -d /etc/logrotate.conf 2>&1 | head -n 40",
        description:
          "O `-d` é simulação: diz o que seria rotacionado sem tocar em nada. É a forma segura de validar regra nova antes de deixar o cron aplicá-la de madrugada sem ninguém olhando.",
      },
      {
        command: "mkdir -p ~/bin && printf '%s\n' '#!/bin/bash' 'set -euo pipefail' 'systemctl --failed --quiet' 'echo OK $(date -Is)' > ~/bin/health-check.sh && chmod +x ~/bin/health-check.sh",
        description:
          "Monta o healthcheck mínimo: `set -euo pipefail` faz o script morrer no primeiro erro e `systemctl --failed --quiet` devolve código diferente de zero quando há unit quebrada. Isso basta para o systemd marcar falha.",
      },
      {
        command: "~/bin/health-check.sh || echo 'falhou — investigue failed units'",
        description:
          "Execute na mão antes de confiar no timer. Se o script sair com código diferente de zero, o `||` dispara o aviso — exatamente o critério que o systemd vai usar para marcar o serviço como falho.",
      },
      {
        command: "mkdir -p ~/.config/systemd/user && printf '%s\n' '[Unit]' 'Description=Health check leve' '' '[Service]' 'Type=oneshot' 'ExecStart=%h/bin/health-check.sh' > ~/.config/systemd/user/health-check.service",
        description:
          "Unit de usuário do tipo `oneshot`: roda, termina e não fica ocupando memória. Em `~/.config/systemd/user` ela dispensa root, mas só roda enquanto houver sessão — em servidor, ligue `loginctl enable-linger`.",
      },
      {
        command: "printf '%s\n' '[Unit]' 'Description=Timer health check leve' '' '[Timer]' 'OnBootSec=2min' 'OnUnitActiveSec=5min' 'Persistent=true' '' '[Install]' 'WantedBy=timers.target' > ~/.config/systemd/user/health-check.timer",
        description:
          "Timer que dispara 2 minutos após o boot e a cada 5 minutos depois. O `Persistent=true` faz o systemd executar a janela perdida enquanto a máquina estava desligada, em vez de simplesmente pular.",
      },
      {
        command: "systemctl --user daemon-reload && systemctl --user enable --now health-check.timer && systemctl --user list-timers | head",
        description:
          "Ativa timer do usuário (se linger/session permitir).",
      },
      {
        command: "man logrotate",
        description:
          "Manual da rotação: onde estão documentados `rotate`, `size`, `compress`, `missingok` e o `postrotate`, que avisa o serviço para reabrir o arquivo de log novo.",
      },
      {
        command: "man systemd.timer",
        description:
          "Referência das opções de timer: `OnCalendar` para agenda, `Persistent` para rodar o que perdeu enquanto a máquina estava desligada e `RandomizedDelaySec` para não ter cem máquinas disparando no mesmo segundo.",
      },
    ],
    tips: [
      {
        type: "success",
        title: "Teto no journal",
        content:
          "SystemMaxUse evita root 100%.",
      },
      {
        type: "warning",
        title: "Timer user vs system",
        content:
          "Serviços de produção: prefira unit system.",
      },
      {
        type: "info",
        title: "logrotate -d",
        content:
          "Dry-run antes de forçar rotate.",
      },
      {
        type: "danger",
        title: "Alert spam",
        content:
          "Alerta que sempre dispara treina ignorar.",
      },
    ],
    practiceLabs: [
      {
        title: "Journal capped + health script",
        goal: "Confirmar drop-in de tamanho e script health executável.",
        steps: [
          "criar size.conf",
          "restart journald",
          "script health",
          "rodar na mão",
        ],
        command: "test -x ~/bin/health-check.sh && journalctl --disk-usage && ~/bin/health-check.sh",
        expected:
          "O teste só segue se o script existir e for executável — saída vazia aqui significa que faltou o chmod +x. Depois vem o uso em disco do journal, que precisa respeitar o limite do drop-in, e por fim a saída do health check, com uma linha por verificação.",
        verify:
          "Script OK e disk-usage do journal visível.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "SystemMaxUse controla o quê?",
        answer:
          "Teto de disco do journald.",
      },
      {
        id: 2,
        question: "logrotate serve para quê?",
        answer:
          "Rotacionar/comprimir logs em /var/log e afins.",
      },
      {
        id: 3,
        question: "timer vs cron em uma vantagem?",
        answer:
          "Dependências systemd, calendários ricos, journal integração.",
      },
      {
        id: 4,
        question: "Healthcheck deve provar o quê?",
        answer:
          "Que o serviço presta (não só que o processo existe).",
      },
      {
        id: 5,
        question: "Risco de journal sem teto?",
        answer:
          "Encher a partição root.",
      },
      {
        id: 6,
        question: "systemctl --failed no health?",
        answer:
          "Detecta units quebradas cedo.",
      },
      {
        id: 7,
        question: "Por que poucos sinais?",
        answer:
          "Menos ruído, mais chance de alguém ler.",
      },
      {
        id: 8,
        question: "oneshot no service de health?",
        answer:
          "Roda e termina; o timer agenda de novo.",
      },
    ],
    references: [
      { title: "man journald.conf", url: "https://manpages.debian.org/journald.conf" },
      { title: "man logrotate", url: "https://manpages.debian.org/logrotate" },
      { title: "man systemd.timer", url: "https://manpages.debian.org/systemd.timer" },
    ],
  },
];
