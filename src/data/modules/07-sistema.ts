import { Module } from "@/types/module";

export const sistema: Module[] = [
  {
    id: "processos",
    title: "Processos e Monitoramento",
    icon: "⚙️",
    category: "Sistema",
    description: "ps, top, htop, kill — ver o que está rodando, quanto consome, e como matar processos travados.",
    objectives: [
      "Listar processos com ps e filtrar pelos relevantes",
      "Usar top/htop para monitoramento em tempo real",
      "Matar processos com kill (sinais SIGTERM, SIGKILL)",
      "Identificar quem está consumindo CPU ou memória",
    ],
    content: [
      "Tudo que está rodando no Linux é um processo: o kernel, seu shell, o navegador, os serviços (sshd, nginx). Cada processo tem PID (Process ID), PPID (Parent PID), usuário dono, uso de CPU/memória. Você precisa saber listá-los e matá-los quando necessário.",
      "ps — process snapshot. Lista processos. Sintaxe BSD (mais comum):\n\nps aux                    todos os processos de todos os usuários\nps aux | grep firefox     filtra firefox\nps -ef                    formato System V (alternativo)\nps -ef --forest           árvore (mostra parent-child)\n\nColunas importantes do 'ps aux':\n• USER — quem rodou\n• PID — id único\n• %CPU — uso de CPU agora\n• %MEM — uso de RAM\n• VSZ — memória virtual reservada (KB)\n• RSS — memória RAM real (KB)\n• STAT — estado (R=rodando, S=sleeping, Z=zombie, D=disk wait)\n• START — quando iniciou\n• COMMAND — o comando",
      "top — monitor em tempo real. Atualiza a cada 3 segundos. Já vem instalado. Atalhos dentro do top:\n• q — sair\n• h — ajuda\n• M — ordenar por memória\n• P — ordenar por CPU (default)\n• T — ordenar por tempo total\n• k — matar processo (pede PID)\n• 1 — mostra cada CPU separadamente (multi-core)\n• z — colorir\n• Espaço — atualizar agora\n\nÚtil mas a interface é dos anos 80. Considere htop.",
      "htop — top moderno e amigável. Instale: 'sudo apt install htop'. Cores, scroll horizontal, mouse, atalhos visíveis no rodapé:\n• F5 — modo árvore (parent-child)\n• F6 — escolher coluna de ordenação\n• F9 — matar processo\n• F10 — sair\n• Espaço — selecionar (para matar vários)\n• / — buscar processo pelo nome\n\nhtop é objetivamente melhor que top. Use htop sempre.",
      "Matar processo com kill — envia SINAL ao processo:\n\nkill PID                  envia SIGTERM (15) — pede para terminar (graceful)\nkill -9 PID               envia SIGKILL (9) — força morte (não negocia)\nkill -15 PID              = kill PID\nkill -HUP PID             SIGHUP (1) — recarrega (típico para serviços)\nkill -STOP PID            pausa (depois -CONT continua)\n\nSempre tente SIGTERM primeiro. SIGKILL é só se não responder em 10 segundos. Processos podem ignorar SIGTERM, NÃO podem ignorar SIGKILL.",
      "Matar pelo NOME (mais prático que descobrir PID):\n\npkill firefox             mata todos chamados firefox\npkill -9 firefox          force kill\npkill -u maria            mata todos os processos de maria\nkillall firefox           similar a pkill (sintaxe ligeiramente diferente)\n\npgrep — só LISTA PIDs (sem matar):\n\npgrep firefox             1234\\n5678\npgrep -u maria            mostra PIDs de maria",
      "Processos em background:\n• comando &              roda em background (você não fica esperando)\n• Ctrl+Z                 pausa o processo atual (manda para background pausado)\n• jobs                   lista jobs em background\n• fg                     traz último job para foreground\n• fg %1                  traz job 1 para foreground\n• bg                     continua job pausado em background\n• nohup comando &        roda independente da sessão (sobrevive a logout)\n• disown                 desassocia job da sessão (similar a nohup)",
      "Processos zumbis (Z) — processos que terminaram mas o pai não 'colheu' o status. Ocupam só uma entrada na tabela de processos (não consomem CPU/RAM). Geralmente inofensivos, mas se acumular muito pode esgotar PIDs disponíveis. Solução: matar o PROCESSO PAI (que está bugado). Veja com 'ps aux | grep ' Z'' ou 'top' (filtre por estado Z).",
    ],
    commands: [
      {
        command: "ps aux",
        description: "Lista todos os processos do sistema (formato BSD).",
        example: "ps aux | grep firefox",
      },
      {
        command: "ps -ef --forest",
        description: "Mostra processos em formato árvore (parent-child).",
        example: "ps -ef --forest | head -30",
      },
      {
        command: "top",
        description: "Monitor em tempo real. q sai, M ordena por memória, P por CPU.",
        example: "top",
      },
      {
        command: "htop",
        description: "Top moderno (instale com: sudo apt install htop). Use sempre.",
        example: "htop",
      },
      {
        command: "kill",
        description: "Envia sinal a processo pelo PID.",
        example: "kill -9 12345",
        flags: [
          { flag: "-15 / SIGTERM", description: "Pede para encerrar (default, graceful)" },
          { flag: "-9 / SIGKILL", description: "Força morte (não negocia)" },
          { flag: "-HUP / -1", description: "Recarrega (serviços)" },
          { flag: "-STOP", description: "Pausa o processo" },
          { flag: "-CONT", description: "Resume processo pausado" },
        ],
      },
      {
        command: "pkill / killall",
        description: "Mata processos pelo NOME.",
        example: "pkill firefox",
        flags: [
          { flag: "-9 NOME", description: "Force kill" },
          { flag: "-u USUARIO", description: "Mata processos do usuário" },
          { flag: "-f 'string'", description: "Match no command line completo" },
        ],
      },
      {
        command: "pgrep",
        description: "Lista PIDs sem matar.",
        example: "pgrep -u $USER firefox",
      },
      {
        command: "jobs / fg / bg",
        description: "Gerenciar jobs em background do shell.",
        example: "comando &     # background\njobs          # lista\nfg %1         # traz job 1",
      },
      {
        command: "nohup",
        description: "Roda comando que sobrevive a logout.",
        example: "nohup ./script-longo.sh > saida.log 2>&1 &",
      },
      {
        command: "uptime",
        description: "Carga média do sistema (load average).",
        example: "uptime",
        output: " 19:23:51 up 2 days,  5:18,  2 users,  load average: 0.42, 0.38, 0.30",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Tente SIGTERM antes de SIGKILL",
        content:
          "kill (sem -9) pede educadamente para encerrar — o processo pode salvar dados, fechar arquivos, terminar transações. kill -9 é a marreta — pode corromper dados (banco de dados aberto, arquivo sendo escrito). Use -9 só se SIGTERM não funcionou em 10s.",
      },
      {
        type: "info",
        title: "Load average — o que significa?",
        content:
          "1.0 = um CPU ocupado 100%. Em máquina de 4 cores, 4.0 = todos ocupados. Acima do número de cores = sobrecarga (processos esperando). Os 3 números são média de 1, 5 e 15 minutos. Se o de 15 min está alto e o de 1 min baixo, foi pico passado.",
      },
      {
        type: "success",
        title: "htop com cor para múltiplos cores",
        content:
          "Aperte F2 (setup) > Meters > escolha 'Detailed CPUs (1/cores per row)'. Cada core fica visível separado. Útil para ver se um processo está em um core só (single-thread bound).",
      },
    ],
    practiceLabs: [
      {
        title: "Caçar o processo que está consumindo CPU",
        goal: "Praticar identificar e matar processo problemático.",
        steps: [
          "Em um terminal: rode 'yes > /dev/null &' (consome CPU).",
          "Em outro terminal: abra htop e identifique o 'yes'.",
          "Mate via htop (F9, escolha SIGTERM, Enter).",
          "Confirme que sumiu.",
        ],
        command: `# 1) Criar processo que consome CPU
yes > /dev/null &

# 2) Ver via htop
htop
# Use F4 para filtrar e digite 'yes'
# Selecione com setas, F9 para matar, escolha SIGTERM (15), Enter

# Alternativamente via kill direto
pgrep yes
# kill PID_AQUI

# Forma rapida via pkill
pkill yes

# Confirmar
pgrep yes`,
        verify:
          "Após matar, 'pgrep yes' não retorna nada. O htop mostra 0 processos chamados 'yes'. CPU volta ao normal.",
      },
      {
        title: "Identificar o que mais consome RAM no sistema",
        goal: "Análise prática de quem está usando memória.",
        steps: [
          "Veja overview com free.",
          "Liste top 10 por uso de memória com ps.",
          "Use htop para ver em tempo real.",
        ],
        command: `# 1) Visao geral de RAM
free -h

# 2) Top 10 processos por memoria
ps aux --sort=-%mem | head -11

# 3) Top 10 por CPU
ps aux --sort=-%cpu | head -11

# 4) Em tempo real (htop)
htop
# Aperte F6, escolha PERCENT_MEM`,
        verify: "Você identifica os 3 processos que mais consomem RAM no seu sistema. Geralmente: navegador, editor de código, IDE.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Diferença entre kill -15 e kill -9?",
        answer:
          "-15 (SIGTERM) pede educadamente para encerrar — processo pode salvar dados. -9 (SIGKILL) força a morte imediata — pode corromper dados. SEMPRE tente -15 primeiro.",
      },
      {
        id: 2,
        question: "Como matar todos os processos do firefox de uma vez?",
        answer: "pkill firefox (ou killall firefox).",
      },
      {
        id: 3,
        question: "Como rodar um comando em background e poder sair do terminal sem matá-lo?",
        answer: "nohup comando > saida.log 2>&1 & — nohup ignora SIGHUP (sinal enviado quando você desloga).",
      },
      {
        id: 4,
        question: "O que é load average de 4.5 numa máquina de 4 cores?",
        answer:
          "Sobrecarga leve — todos os 4 cores estão 100% ocupados E há 0.5 processos a mais esperando. Sistema responde lento. Acima de 8 (2x cores) = sobrecarga grave.",
      },
      {
        id: 5,
        question: "Como ver o uso de memória dos top 5 processos?",
        answer: "ps aux --sort=-%mem | head -6 (cabeçalho + 5 processos).",
      },
      {
        id: 6,
        question: "O que é um processo zumbi?",
        answer:
          "Processo que terminou mas o pai não coletou o status (estado Z). Ocupa só uma entrada na tabela. Inofensivo se poucos. Solução: matar o processo PAI (que está bugado).",
      },
    ],
    references: [
      { title: "htop site", url: "https://htop.dev/" },
      { title: "Manual ps", url: "https://manpages.debian.org/bookworm/procps/ps.1.en.html" },
    ],
  },

  {
    id: "systemd",
    title: "Systemd e Serviços",
    icon: "🚀",
    category: "Sistema",
    description: "systemctl start/stop/enable/disable, status, logs — gerencie serviços do Debian.",
    objectives: [
      "Listar, iniciar, parar e reiniciar serviços",
      "Habilitar/desabilitar serviços no boot",
      "Ver status e logs de um serviço",
      "Criar um serviço próprio (.service unit file)",
    ],
    content: [
      "systemd é o sistema de inicialização (init system) do Debian moderno. É o primeiro processo a rodar (PID 1) e cuida de TUDO: iniciar serviços no boot, gerenciar dependências entre eles, lidar com targets (modo gráfico vs terminal), logs unificados, timers, montagens. Substitui o antigo SysV init.",
      "Um serviço (service) no systemd é descrito por um arquivo .service (chamado 'unit file'). Os principais ficam em:\n• /lib/systemd/system/ — serviços instalados por pacotes do sistema. NÃO EDITE.\n• /etc/systemd/system/ — overrides locais e serviços que VOCÊ criou. EDITE AQUI.\n\nQuando você 'apt install nginx', o pacote coloca /lib/systemd/system/nginx.service. Você não toca lá.",
      "Comandos do dia a dia (systemctl):\n\nsudo systemctl start nginx          inicia agora\nsudo systemctl stop nginx           para agora\nsudo systemctl restart nginx        reinicia (stop+start)\nsudo systemctl reload nginx         recarrega config sem matar conexões\nsudo systemctl enable nginx         habilita no boot\nsudo systemctl disable nginx        desabilita do boot\nsudo systemctl enable --now nginx   habilita E inicia agora\nsystemctl status nginx              ver estado e últimas linhas de log\nsystemctl is-active nginx           só responde 'active' ou 'inactive'\nsystemctl is-enabled nginx          'enabled' ou 'disabled'",
      "Listar serviços:\n\nsystemctl list-units --type=service                       todos rodando\nsystemctl list-units --type=service --state=failed        só falhos\nsystemctl list-unit-files --type=service                  todos os instalados (rodando ou não)\nsystemctl list-units --type=service --state=running       só rodando\n\nServiço falhou? Sempre comece por: 'systemctl status NOME' e 'journalctl -u NOME -n 50'.",
      "Targets — o estado geral do sistema (substituto dos runlevels). Mais importantes:\n• graphical.target — sistema com interface gráfica (default em desktop)\n• multi-user.target — só terminal (servidor)\n• rescue.target — modo manutenção (single user)\n• reboot.target — reiniciar\n• poweroff.target — desligar\n\nVer atual: 'systemctl get-default'. Mudar default: 'sudo systemctl set-default multi-user.target' (vira servidor, sem ambiente gráfico no próximo boot).",
      "journalctl — leitor de logs do systemd (TODOS os logs, unificados):\n\njournalctl -u nginx                       só do nginx\njournalctl -u nginx -f                    follow (em tempo real)\njournalctl -u nginx --since today\njournalctl -u nginx --since '2024-04-25 10:00'\njournalctl -u nginx -n 50                 últimas 50 linhas\njournalctl -p err                         só erros\njournalctl -b                             do boot atual\njournalctl -b -1                          do boot anterior\n\nMais detalhes em journalctl no próximo módulo.",
      "Criar seu próprio serviço — exemplo: monitorar uma pasta e fazer backup. Crie /etc/systemd/system/meu-backup.service:\n\n[Unit]\nDescription=Backup automatico da pasta importante\nAfter=network.target\n\n[Service]\nType=simple\nUser=wallyson\nExecStart=/home/wallyson/scripts/backup.sh\nRestart=on-failure\nRestartSec=5s\n\n[Install]\nWantedBy=multi-user.target\n\nDepois:\nsudo systemctl daemon-reload\nsudo systemctl enable --now meu-backup.service\nsystemctl status meu-backup.service",
      "Edição segura de unit files — em vez de modificar /lib/systemd/system/X.service direto, use:\n\nsudo systemctl edit nginx\n\nIsso cria um override em /etc/systemd/system/nginx.service.d/override.conf onde você só sobrescreve o que mudou. Sobrevive a updates do pacote.",
    ],
    commands: [
      {
        command: "sudo systemctl start / stop / restart / reload",
        description: "Controle imediato do serviço.",
        example: "sudo systemctl restart nginx",
      },
      {
        command: "sudo systemctl enable --now NOME",
        description: "Habilita no boot E inicia agora.",
        example: "sudo systemctl enable --now ssh",
      },
      {
        command: "sudo systemctl disable --now NOME",
        description: "Desabilita do boot E para agora.",
        example: "sudo systemctl disable --now bluetooth",
      },
      {
        command: "systemctl status",
        description: "Estado do serviço + últimas linhas de log.",
        example: "systemctl status ssh",
      },
      {
        command: "systemctl list-units --type=service",
        description: "Lista todos os serviços ativos.",
        example: "systemctl list-units --type=service --state=running",
      },
      {
        command: "systemctl list-units --state=failed",
        description: "Lista serviços que falharam (importante checar de tempos em tempos).",
        example: "systemctl list-units --state=failed",
      },
      {
        command: "systemctl get-default / set-default",
        description: "Ver ou trocar o target padrão.",
        example: "sudo systemctl set-default multi-user.target",
      },
      {
        command: "sudo systemctl daemon-reload",
        description: "Recarrega unit files após editá-los. Necessário antes de start/restart de serviço novo/modificado.",
        example: "sudo systemctl daemon-reload",
      },
      {
        command: "sudo systemctl edit",
        description: "Edita override de um serviço (não toca o original).",
        example: "sudo systemctl edit nginx",
      },
      {
        command: "sudo systemctl mask / unmask",
        description: "Bloqueia COMPLETAMENTE um serviço (mais forte que disable). Usado para serviços teimosos.",
        example: "sudo systemctl mask cups",
      },
    ],
    tips: [
      {
        type: "info",
        title: "enable ≠ start",
        content:
          "enable habilita o serviço para iniciar no PRÓXIMO boot. Não inicia agora. Para fazer as duas coisas: 'sudo systemctl enable --now NOME'. Igual para disable + stop.",
      },
      {
        type: "warning",
        title: "Sempre daemon-reload após editar .service",
        content:
          "Se você editou um .service ou criou um novo, systemd não sabe ainda. Rode 'sudo systemctl daemon-reload' antes de 'systemctl start'. Sem isso, suas mudanças não pegam.",
      },
      {
        type: "success",
        title: "Edit sempre via systemctl edit",
        content:
          "Em vez de editar /lib/systemd/system/nginx.service (que será sobrescrito no próximo upgrade), use 'sudo systemctl edit nginx'. Cria override que sobrevive.",
      },
    ],
    practiceLabs: [
      {
        title: "Habilitar SSH no boot e ver logs",
        goal: "Workflow completo: habilitar, iniciar, conferir e ver logs de um serviço.",
        steps: [
          "Instale ssh server.",
          "Habilite no boot.",
          "Inicie.",
          "Cheque status.",
          "Veja logs em tempo real.",
        ],
        command: `# 1) Instalar
sudo apt install -y openssh-server

# 2) Habilitar no boot E iniciar agora
sudo systemctl enable --now ssh

# 3) Status
systemctl status ssh

# 4) Esta rodando?
systemctl is-active ssh

# 5) Logs
sudo journalctl -u ssh -n 20

# 6) Logs em tempo real (Ctrl+C para sair)
sudo journalctl -u ssh -f`,
        verify:
          "'systemctl is-active ssh' deve responder 'active'. 'systemctl status ssh' mostra Active: active (running). Tente conectar de outra máquina: ssh USUARIO@IP_DO_DEBIAN.",
      },
      {
        title: "Criar serviço próprio para um script",
        goal: "Criar um .service do zero e gerenciá-lo.",
        steps: [
          "Crie um script de teste em /usr/local/bin.",
          "Crie um arquivo .service em /etc/systemd/system/.",
          "daemon-reload, enable --now.",
          "Veja status e logs.",
        ],
        command: `# 1) Script de teste
sudo tee /usr/local/bin/meu-script.sh > /dev/null << 'EOF'
#!/bin/bash
while true; do
  echo "[$(date)] meu-script ativo"
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

# Para remover depois:
# sudo systemctl disable --now meu-script.service
# sudo rm /etc/systemd/system/meu-script.service
# sudo systemctl daemon-reload`,
        verify:
          "'systemctl status meu-script.service' mostra Active: active. journalctl mostra a mensagem aparecendo a cada 30s.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Diferença entre 'enable' e 'start'?",
        answer: "enable = habilita no PRÓXIMO boot. start = inicia agora. 'enable --now' faz os dois.",
      },
      {
        id: 2,
        question: "Como ver se o serviço nginx está rodando?",
        answer: "systemctl status nginx (estado completo) ou systemctl is-active nginx (resposta curta: active/inactive).",
      },
      {
        id: 3,
        question: "Como ver logs do nginx em tempo real?",
        answer: "sudo journalctl -u nginx -f",
      },
      {
        id: 4,
        question: "Como impedir COMPLETAMENTE um serviço de iniciar (mais forte que disable)?",
        answer: "sudo systemctl mask NOME — cria link para /dev/null, impossível habilitar até dar unmask.",
      },
      {
        id: 5,
        question: "Onde COLOCAR um arquivo .service que você criou?",
        answer: "/etc/systemd/system/SEU.service. Depois sudo systemctl daemon-reload.",
      },
      {
        id: 6,
        question: "Como editar nginx.service preservando suas mudanças após upgrade?",
        answer: "sudo systemctl edit nginx — cria override em /etc/systemd/system/nginx.service.d/. Sobrevive a updates.",
      },
    ],
    references: [
      { title: "Manual systemd.service", url: "https://manpages.debian.org/bookworm/systemd/systemd.service.5.en.html" },
      { title: "Wiki Debian — systemd", url: "https://wiki.debian.org/systemd" },
    ],
  },

  {
    id: "logs-journalctl",
    title: "Logs e journalctl — Diagnóstico do Sistema",
    icon: "📋",
    category: "Sistema",
    description: "journalctl, /var/log, dmesg — onde olhar quando algo dá errado, e como filtrar logs gigantes.",
    objectives: [
      "Usar journalctl para ler logs do systemd",
      "Filtrar logs por unidade, data, prioridade",
      "Conhecer /var/log e os arquivos clássicos (syslog, auth.log)",
      "Configurar persistência de logs e rotação",
    ],
    content: [
      "Quando algo dá errado no Linux, a resposta está nos logs. Saber onde olhar e como filtrar é a habilidade #1 de quem administra Linux. No Debian moderno, há dois sistemas de log convivendo:\n\n1. journald (systemd) — armazena tudo em formato binário em /var/log/journal/. Acessa via 'journalctl'. Indexado, filtros poderosos.\n2. syslog/rsyslog — formato texto tradicional em /var/log/. Arquivos como /var/log/syslog, /var/log/auth.log. Acessa com cat/grep/less.\n\nDebian instala os dois por padrão. Use journalctl primeiro (mais poderoso); /var/log/* serve quando o serviço usa formato customizado.",
      "journalctl — comandos essenciais:\n\nsudo journalctl                              tudo (use less navigation)\nsudo journalctl -f                           tail -f equivalente (tempo real)\nsudo journalctl -n 100                       últimas 100 linhas\nsudo journalctl -r                           ordem reversa (mais novo primeiro)\nsudo journalctl --no-pager                   sem less, joga tudo na tela\nsudo journalctl -k                           só mensagens do kernel (= dmesg)\nsudo journalctl -p err                       só prioridade ≥ erro\nsudo journalctl -b                           só do boot atual\nsudo journalctl -b -1                        do boot ANTERIOR\nsudo journalctl --list-boots                 lista todos os boots conhecidos",
      "Filtros por TEMPO:\n\nsudo journalctl --since today\nsudo journalctl --since yesterday\nsudo journalctl --since '1 hour ago'\nsudo journalctl --since '2024-04-25 10:00' --until '2024-04-25 12:00'\nsudo journalctl --since '15 min ago'\n\nFiltros por SERVIÇO:\n\nsudo journalctl -u nginx                     só do serviço nginx\nsudo journalctl -u nginx -u ssh              dois serviços\nsudo journalctl -u 'nginx*'                  glob (todos que começam com nginx)",
      "Combinar filtros é o poder real:\n\nsudo journalctl -u nginx --since today -p err\n# Erros do nginx hoje\n\nsudo journalctl -u ssh --since '2 days ago' | grep 'Failed password'\n# Tentativas de login SSH falhadas dos últimos 2 dias\n\nsudo journalctl -k -p err --since today\n# Erros do kernel hoje\n\nsudo journalctl -p warning -b\n# Warnings do boot atual",
      "Prioridades (níveis) — do mais crítico ao mais verboso:\n• 0: emerg — sistema inutilizável\n• 1: alert — agir imediatamente\n• 2: crit — condição crítica\n• 3: err — erro\n• 4: warning — aviso\n• 5: notice — normal mas significativo\n• 6: info — informativo\n• 7: debug — debug\n\nUse '-p N' para mostrar tudo até essa prioridade. Ex: '-p warning' inclui warning, err, crit, alert, emerg.",
      "Persistência dos logs — por padrão, journald guarda em /run/log (memória, perde no boot) OU em /var/log/journal (disco, persistente). Para ativar persistência:\n\nsudo mkdir -p /var/log/journal\nsudo systemd-tmpfiles --create --prefix /var/log/journal\nsudo systemctl restart systemd-journald\n\nDepois 'sudo journalctl -b -1' começa a funcionar (logs do boot anterior).",
      "Tamanho dos logs — sem limite, journal pode encher o disco. Configure em /etc/systemd/journald.conf:\n\nSystemMaxUse=2G                              # máximo 2 GB no /var/log/journal\nSystemKeepFree=1G                            # deixa pelo menos 1 GB livre\nSystemMaxFileSize=100M                       # cada arquivo máx 100 MB\nMaxRetentionSec=1month                       # mantém só 1 mês\n\nDepois: sudo systemctl restart systemd-journald.\n\nRetirar tamanho atual: 'sudo journalctl --disk-usage'. Limpar manualmente: 'sudo journalctl --vacuum-size=500M' (deixa só 500 MB) ou 'sudo journalctl --vacuum-time=7d' (só últimos 7 dias).",
      "Logs clássicos em /var/log:\n• /var/log/syslog — log geral do sistema\n• /var/log/auth.log — autenticação (sudo, su, ssh login, login do desktop)\n• /var/log/kern.log — kernel\n• /var/log/dpkg.log — instalações apt/dpkg\n• /var/log/apt/ — histórico do apt (history.log, term.log)\n• /var/log/Xorg.0.log — servidor gráfico (se X11)\n• /var/log/nginx/access.log — acessos ao nginx (se instalado)\n\nRotação de logs é cuidada por logrotate (/etc/logrotate.d/). Logs antigos viram .gz.",
    ],
    commands: [
      {
        command: "sudo journalctl",
        description: "Lê todos os logs do journal.",
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
        ],
      },
      {
        command: "sudo journalctl --disk-usage",
        description: "Quanto journal está ocupando em disco.",
        example: "sudo journalctl --disk-usage",
        output: "Archived and active journals take up 1.2G in the file system.",
      },
      {
        command: "sudo journalctl --vacuum-size=500M",
        description: "Apaga journal antigo até sobrar só 500MB.",
        example: "sudo journalctl --vacuum-size=500M",
      },
      {
        command: "sudo journalctl --vacuum-time=7d",
        description: "Mantém só últimos 7 dias.",
        example: "sudo journalctl --vacuum-time=7d",
      },
      {
        command: "dmesg",
        description: "Mensagens do kernel ring buffer (boot + USB plugado, etc.). Equivalente a 'journalctl -k'.",
        example: "sudo dmesg | tail -30",
        flags: [
          { flag: "-w", description: "Follow (tempo real)" },
          { flag: "-T", description: "Timestamp legível" },
          { flag: "-l err", description: "Filtrar por nível" },
        ],
      },
      {
        command: "sudo tail -f /var/log/syslog",
        description: "Acompanhar log clássico em tempo real.",
        example: "sudo tail -f /var/log/syslog",
      },
      {
        command: "sudo less /var/log/auth.log",
        description: "Logs de autenticação (sudo, ssh, login).",
        example: "sudo grep 'sudo' /var/log/auth.log | tail -20",
      },
      {
        command: "logger",
        description: "Manda mensagem para o syslog (útil em scripts).",
        example: 'logger -t meu-script "Backup concluido com sucesso"',
      },
    ],
    tips: [
      {
        type: "info",
        title: "Servidor lento? Comece pelos logs",
        content:
          "sudo journalctl -p err --since '1 hour ago' — mostra todos os erros da última hora. Se vir 'out of memory', 'kernel: BUG', 'I/O error' — você achou o problema.",
      },
      {
        type: "warning",
        title: "Não deixe journal crescer infinitamente",
        content:
          "Em servidor que roda há meses, journal pode passar de 10 GB. Configure SystemMaxUse=1G em /etc/systemd/journald.conf e reinicie journald. Sem isso, /var/log enche e quebra o boot.",
      },
      {
        type: "success",
        title: "logger em scripts é gold",
        content:
          "Adicione 'logger -t meu-backup \"Backup iniciado em $(date)\"' no início e fim do seu script. Você verá tudo via journalctl: 'journalctl -t meu-backup'. Nunca perde rastro do que rodou.",
      },
    ],
    practiceLabs: [
      {
        title: "Investigar tentativas de login SSH falhadas",
        goal: "Caso real de auditoria — descobrir se alguém tentou invadir seu servidor.",
        steps: [
          "Liste tentativas de login SSH falhadas das últimas 24h.",
          "Conte quantas foram.",
          "Veja os IPs de origem mais frequentes.",
        ],
        command: `# Tentativas falhadas nas ultimas 24h
sudo journalctl -u ssh --since '1 day ago' | grep 'Failed password'

# Quantas tentativas
sudo journalctl -u ssh --since '1 day ago' | grep -c 'Failed password'

# Os 10 IPs mais ativos (atacantes)
sudo journalctl -u ssh --since '1 day ago' \\
  | grep 'Failed password' \\
  | grep -oP 'from \\K[0-9.]+' \\
  | sort | uniq -c | sort -rn | head -10`,
        verify:
          "Em servidor exposto à internet, espere VER muitas tentativas (centenas/milhares por dia de bots). Em servidor interno, deve ser zero. Se vir muitas, considere mudar porta SSH ou instalar fail2ban.",
      },
      {
        title: "Configurar persistência e tamanho do journal",
        goal: "Garantir que logs sobrevivem a reboots e não enchem o disco.",
        steps: [
          "Crie /var/log/journal para ativar persistência.",
          "Edite /etc/systemd/journald.conf limitando a 1GB.",
          "Reinicie journald.",
          "Confirme que --list-boots mostra mais de um.",
        ],
        command: `# 1) Habilitar persistencia (so necessario uma vez)
sudo mkdir -p /var/log/journal
sudo systemd-tmpfiles --create --prefix /var/log/journal

# 2) Editar config
sudo nano /etc/systemd/journald.conf
# Descomente e altere:
# SystemMaxUse=1G
# SystemKeepFree=500M
# MaxRetentionSec=1month

# 3) Reiniciar journald
sudo systemctl restart systemd-journald

# 4) Confirmar
sudo journalctl --disk-usage
sudo journalctl --list-boots`,
        verify:
          "'journalctl --disk-usage' deve mostrar < 1G após algumas semanas. 'journalctl --list-boots' lista todos os boots desde a habilitação da persistência.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como ver logs do nginx em tempo real?",
        answer: "sudo journalctl -u nginx -f",
      },
      {
        id: 2,
        question: "Como ver erros do sistema na última hora?",
        answer: "sudo journalctl -p err --since '1 hour ago'",
      },
      {
        id: 3,
        question: "Como ver logs do boot anterior (após sistema travar e reiniciar)?",
        answer: "sudo journalctl -b -1 (precisa persistência habilitada).",
      },
      {
        id: 4,
        question: "Como liberar espaço apagando logs antigos?",
        answer:
          "sudo journalctl --vacuum-size=500M (deixa só 500MB) ou --vacuum-time=7d (só últimos 7 dias).",
      },
      {
        id: 5,
        question: "Onde ficam os logs de tentativas de login SSH?",
        answer: "/var/log/auth.log — ou via journalctl: 'sudo journalctl -u ssh'.",
      },
      {
        id: 6,
        question: "Como mandar uma mensagem para o syslog dentro de um script bash?",
        answer: "logger -t TAG 'mensagem' — depois 'journalctl -t TAG' mostra todas as mensagens com aquela tag.",
      },
    ],
    references: [
      { title: "Manual journalctl", url: "https://manpages.debian.org/bookworm/systemd/journalctl.1.en.html" },
      { title: "Manual journald.conf", url: "https://manpages.debian.org/bookworm/systemd/journald.conf.5.en.html" },
    ],
  },

  {
    id: "cron-timers",
    title: "Agendamento — cron e systemd timers",
    icon: "⏰",
    category: "Sistema",
    description: "Como agendar tarefas: cron clássico (cada usuário) e systemd timers (moderno e robusto).",
    objectives: [
      "Editar crontab de usuário e do sistema",
      "Entender a sintaxe de cron (5 campos)",
      "Criar systemd timer + service para tarefas agendadas modernas",
      "Diferenciar cron e timer e escolher o certo para cada caso",
    ],
    content: [
      "Você precisa rodar uma tarefa todo dia às 3 da manhã? Backup semanal? Verificação de disco a cada hora? Existem duas abordagens no Linux moderno: cron (clássico, simples) e systemd timer (moderno, mais robusto). Cron é mais fácil para começar; systemd timer é mais poderoso e melhor para servidores.",
      "Cron — o veterano. Cada usuário tem seu próprio crontab. Edite com:\n\ncrontab -e            seu crontab pessoal\nsudo crontab -e       crontab do root\nsudo crontab -e -u maria    crontab da maria\n\nO crontab abre o editor padrão (geralmente nano). Cada linha é uma tarefa.",
      "Sintaxe do cron — 5 campos de tempo + comando:\n\n*  *  *  *  *  comando\n│  │  │  │  │\n│  │  │  │  └── dia da semana (0-7, 0 e 7 = domingo)\n│  │  │  └───── mês (1-12)\n│  │  └──────── dia do mês (1-31)\n│  └─────────── hora (0-23)\n└────────────── minuto (0-59)\n\nExemplos:\n\n* * * * * comando             toda minuto\n0 * * * * comando             a cada hora cheia\n0 3 * * * comando             todo dia às 3:00\n0 3 * * 1 comando             toda segunda às 3:00\n*/15 * * * * comando          a cada 15 minutos\n0 9 1 * * comando             dia 1 de cada mês às 9:00\n0 0 * * 0 comando             todo domingo à meia-noite",
      "Atalhos cron amigáveis (substituem os 5 campos):\n\n@yearly  ou @annually     uma vez por ano (= 0 0 1 1 *)\n@monthly                  uma vez por mês  (= 0 0 1 * *)\n@weekly                   uma vez por semana (= 0 0 * * 0)\n@daily   ou @midnight     uma vez por dia (= 0 0 * * *)\n@hourly                   uma vez por hora (= 0 * * * *)\n@reboot                   no boot\n\nExemplo:\n@daily /usr/local/bin/backup.sh",
      "Erros comuns no cron:\n• PATH limitado — cron não tem o $PATH do seu shell. Use SEMPRE caminhos absolutos: '/usr/bin/python3' em vez de 'python3'.\n• Output some — cron manda output para email do usuário (que provavelmente nem existe). REDIRECIONE para arquivo: '0 3 * * * /script.sh > /var/log/script.log 2>&1'\n• Crontab não é Bash — não use ~. Use $HOME explícito ou caminhos absolutos.\n• Editor padrão errado — 'export EDITOR=nano' antes do crontab -e se quer nano em vez de vim.",
      "Crontab do SISTEMA (/etc/crontab e /etc/cron.d/) — formato similar mas com USUARIO antes do comando:\n\n# /etc/crontab\n0 6 * * * root /usr/sbin/apt update\n0 7 * * * www-data /usr/local/bin/backup.sh\n\nE existem pastas mágicas:\n• /etc/cron.hourly/  — scripts aqui rodam toda hora\n• /etc/cron.daily/   — diariamente\n• /etc/cron.weekly/  — semanalmente\n• /etc/cron.monthly/ — mensalmente\n\nMuito útil — basta jogar um script executável na pasta certa.",
      "systemd timer — alternativa moderna. Mais robusto:\n• Logs unificados via journalctl\n• Recuperação de tarefas perdidas (se sistema estava off no horário)\n• Dependências entre tarefas\n• Notificação se falhou\n\nPrecisa de DOIS arquivos: o .service (o que rodar) e o .timer (quando).\n\n/etc/systemd/system/meu-backup.service:\n[Unit]\nDescription=Backup diario\n\n[Service]\nType=oneshot\nExecStart=/usr/local/bin/backup.sh\n\n/etc/systemd/system/meu-backup.timer:\n[Unit]\nDescription=Roda backup diariamente\n\n[Timer]\nOnCalendar=daily\nPersistent=true\n\n[Install]\nWantedBy=timers.target\n\nDepois:\nsudo systemctl daemon-reload\nsudo systemctl enable --now meu-backup.timer\nsystemctl list-timers",
      "Sintaxe OnCalendar do timer (formato: 'DiaSemana ANO-MES-DIA HORA:MIN:SEC'):\n\nOnCalendar=*-*-* 03:00:00          todo dia 3:00\nOnCalendar=Mon..Fri 09:00          dias úteis 9:00\nOnCalendar=Sat,Sun 10:00           fins de semana 10:00\nOnCalendar=*-*-1 00:00             dia 1 de cada mês\nOnCalendar=*:0/15                  a cada 15 min\n\nAlias: 'daily', 'weekly', 'monthly', 'hourly' (mais simples, 'OnCalendar=daily').\n\nFlag 'Persistent=true' — se o sistema estava OFF no horário do timer, ele roda assim que o sistema volta. Sem isso, perde a execução.",
    ],
    commands: [
      {
        command: "crontab -e",
        description: "Edita seu crontab pessoal.",
        example: "crontab -e",
      },
      {
        command: "crontab -l",
        description: "Lista seu crontab atual.",
        example: "crontab -l",
      },
      {
        command: "sudo crontab -e",
        description: "Edita crontab do root.",
        example: "sudo crontab -e",
      },
      {
        command: "systemctl list-timers",
        description: "Lista todos os timers ativos com próximo disparo.",
        example: "systemctl list-timers --all",
      },
      {
        command: "sudo systemctl enable --now NOME.timer",
        description: "Habilita e inicia um timer.",
        example: "sudo systemctl enable --now meu-backup.timer",
      },
      {
        command: "systemctl status NOME.timer",
        description: "Status de um timer.",
        example: "systemctl status meu-backup.timer",
      },
      {
        command: "sudo journalctl -u NOME.service",
        description: "Logs do serviço executado pelo timer.",
        example: "sudo journalctl -u meu-backup.service -n 50",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Use caminhos ABSOLUTOS no cron",
        content:
          "Cron não tem PATH normal. 'python3 script.py' provavelmente falhará. Use '/usr/bin/python3 /home/wallyson/script.py'. Para descobrir caminho: 'which python3'.",
      },
      {
        type: "info",
        title: "Sempre redirecione output do cron",
        content:
          "Sem '> /tmp/log.txt 2>&1', o output vai para email local (que ninguém lê). E erros somem. Padrão útil: '0 3 * * * /script.sh >> /var/log/script.log 2>&1'.",
      },
      {
        type: "success",
        title: "Timer > cron para servidor",
        content:
          "Em servidor de produção, prefira systemd timer: logs vão pra journalctl, falhas reportam, Persistent=true recupera tarefas perdidas. Em desktop, cron é mais simples e suficiente.",
      },
    ],
    practiceLabs: [
      {
        title: "Backup diário com cron",
        goal: "Configurar backup automático da home toda madrugada às 3h.",
        steps: [
          "Crie um script de backup.",
          "Edite seu crontab.",
          "Adicione linha para rodar todo dia 3h.",
          "Confira que foi salvo.",
        ],
        command: `# 1) Script de backup
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
# Adicione esta linha:
# 0 3 * * * /home/SEU_USUARIO/scripts/backup-home.sh

# 3) Conferir
crontab -l

# 4) Testar manualmente
~/scripts/backup-home.sh
ls -lh /tmp/backup_home_*.tar.gz
cat ~/scripts/backup.log`,
        verify:
          "'crontab -l' mostra a linha. O backup manual cria /tmp/backup_home_*.tar.gz e log.",
      },
      {
        title: "Backup diário com systemd timer (forma moderna)",
        goal: "Mesma tarefa do lab anterior, mas com systemd timer (mais robusto).",
        steps: [
          "Crie .service.",
          "Crie .timer.",
          "daemon-reload + enable.",
          "Liste timers ativos.",
        ],
        command: `# 1) Service
sudo tee /etc/systemd/system/backup-home.service > /dev/null << 'EOF'
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

[Install]
WantedBy=timers.target
EOF

# 3) Habilitar
sudo systemctl daemon-reload
sudo systemctl enable --now backup-home.timer

# 4) Listar timers
systemctl list-timers backup-home.timer

# 5) Testar manualmente o servico
sudo systemctl start backup-home.service
sudo journalctl -u backup-home.service -n 20`,
        verify:
          "'systemctl list-timers backup-home.timer' mostra próximo disparo às 03:00. journalctl mostra execução do service.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Sintaxe cron para rodar todo dia às 3:30 da manhã?",
        answer: "30 3 * * * /caminho/comando",
      },
      {
        id: 2,
        question: "Como rodar um script a cada 15 minutos?",
        answer: "*/15 * * * * /caminho/comando",
      },
      {
        id: 3,
        question: "Por que usar caminho absoluto em comando do cron?",
        answer: "Cron não tem o $PATH normal. 'python3 script.py' pode falhar. Use '/usr/bin/python3 /home/user/script.py'.",
      },
      {
        id: 4,
        question: "Como ver os timers do systemd ativos no sistema?",
        answer: "systemctl list-timers (ou --all para incluir inativos).",
      },
      {
        id: 5,
        question: "Vantagem de systemd timer sobre cron?",
        answer:
          "Logs no journalctl, recuperação de tarefas perdidas (Persistent=true), notificação de falha, dependências entre tarefas.",
      },
      {
        id: 6,
        question: "Onde ir para colocar um script que deve rodar diariamente sem editar crontab?",
        answer: "/etc/cron.daily/ — basta jogar um script executável (chmod +x) lá.",
      },
    ],
    references: [
      { title: "Manual crontab", url: "https://manpages.debian.org/bookworm/cron/crontab.5.en.html" },
      { title: "Manual systemd.timer", url: "https://manpages.debian.org/bookworm/systemd/systemd.timer.5.en.html" },
      { title: "Crontab.guru — testar expressões", url: "https://crontab.guru/" },
    ],
  },
];
