import { Module } from "@/types/module";

export const servidores: Module[] = [
  {
    id: "servidor-web",
    title: "Servidor Web — Apache e Nginx",
    icon: "🌍",
    category: "Servidores",
    description:
      "Entenda como nasce um site na internet e configure Apache ou Nginx com virtual hosts e HTTPS no Debian.",
    objectives: [
      "Explicar com clareza o que é um servidor web e o que ele faz por baixo dos panos",
      "Decidir entre Apache e Nginx baseado no tipo de projeto que você vai hospedar",
      "Instalar, iniciar e validar o servidor web no Debian seguindo o jeito oficial",
      "Configurar virtual hosts para servir múltiplos domínios na mesma máquina",
      "Diagnosticar problemas usando logs, comandos de teste de configuração e curl",
      "Habilitar HTTPS gratuito com Let's Encrypt e entender por que isso virou padrão",
    ],
    content: [
      `Imagine que o seu computador é uma casa e cada porta dela atende a um tipo diferente de visita. Quando alguém digita o endereço de um site no navegador, é como se uma carta chegasse na porta de número 80 (HTTP) ou 443 (HTTPS) da casa. Um servidor web é o porteiro dessa porta: ele abre a carta, lê o que está pedindo ("me dê a página /sobre"), procura o conteúdo no arquivo certo e devolve a resposta. Sem ele, a porta fica fechada e o visitante recebe um "conexão recusada".`,

      `Esse porteiro não nasceu pronto: ele é um software que precisa ser instalado, configurado e ligado. No mundo Linux, os dois porteiros mais famosos são o Apache HTTP Server e o Nginx (lê-se "engine-x"). Os dois fazem o mesmo trabalho básico — receber pedidos HTTP e devolver respostas — mas com filosofias diferentes. O Apache é o veterano, criado em 1995, generalista, cheio de recursos opcionais que você liga e desliga via módulos. O Nginx surgiu em 2004 já pensando em performance: ele segura milhares de conexões simultâneas com pouca memória e brilha como "proxy reverso" (intermediário que recebe a conexão e repassa para outro programa).`,

      `Antes de mais nada, é bom firmar três jargões. Virtual host (ou server block, no Nginx) é a configuração que diz "quando alguém pedir o domínio X, sirva os arquivos da pasta Y". Isso permite hospedar dezenas de sites no mesmo servidor. DocumentRoot (Apache) ou root (Nginx) é a pasta onde ficam os arquivos públicos do site — tipicamente /var/www/algum-nome. Proxy reverso é quando o servidor web recebe a requisição e, em vez de servir um arquivo, repassa para outro processo (como um app Node.js rodando na porta 3000) e devolve a resposta de volta para o navegador.`,

      `O passo a passo conceitual quando alguém visita seu site é mais ou menos esse: o navegador resolve o domínio em um IP via DNS, abre uma conexão TCP na porta 443, faz o aperto de mão TLS (handshake que prova quem é quem e cria criptografia), envia uma linha "GET /pagina HTTP/1.1" mais uns cabeçalhos, e o servidor web responde com cabeçalhos + corpo. O servidor decide o que devolver olhando o cabeçalho Host: ele cruza com os virtual hosts configurados e escolhe o "site" certo. Se o arquivo existe, devolve com status 200. Se não existe, 404. Se você esqueceu de habilitar o site, talvez devolva o site default e você fique horas tentando entender por que sua mudança "não pega".`,

      `Confusão comum número um: instalar Apache e Nginx ao mesmo tempo. Os dois disputam a porta 80 e o segundo a iniciar simplesmente falha. Se o systemd reclamar de "address already in use", é quase certeza que isso aconteceu — desinstale ou pare um deles antes de seguir. Confusão número dois: editar a configuração e reiniciar sem testar. Um ponto e vírgula faltando no Nginx ou uma diretiva digitada errada no Apache derruba todos os sites que aquele servidor hospedava. Existe um comando para validar (sudo nginx -t e sudo apache2ctl configtest) — use sempre antes do reload.`,

      `Onde isso aparece no dia a dia? Em literalmente qualquer lugar onde existe um site. A loja online da padaria do bairro provavelmente está atrás de um Apache em alguma hospedagem compartilhada. Aplicações modernas em Node, Python ou Go costumam rodar atrás de um Nginx que faz HTTPS e proxy reverso. Quando você precisa hospedar uma landing page para um cliente, expor a documentação interna da empresa ou subir uma API, o servidor web é o primeiro tijolo. Saber configurá-lo é diferença entre depender de painel de hospedagem e ter autonomia real sobre uma VPS.`,

      `Ao final deste capítulo você vai conseguir levantar um servidor web do zero em um Debian limpo, decidir conscientemente entre Apache e Nginx, criar virtual hosts para múltiplos domínios e habilitar HTTPS com um certificado válido emitido pela Let's Encrypt — sem pagar nada e com renovação automática. Esse é o conjunto mínimo para colocar qualquer site no ar de um jeito profissional.`,
    ],
    commands: [
      {
        command: "sudo apt install apache2",
        description: "Instala o servidor Apache HTTP a partir do repositório oficial Debian.",
        example: "sudo apt install -y apache2",
        output:
          "Setting up apache2 (2.4.62-1~deb12u1) ...\nCreated symlink /etc/systemd/system/multi-user.target.wants/apache2.service ...",
        flags: [
          { flag: "-y", description: "Responde sim a prompts de confirmação" },
          { flag: "--no-install-recommends", description: "Pula pacotes meramente sugeridos" },
        ],
      },
      {
        command: "sudo apt install nginx",
        description: "Instala o servidor Nginx a partir do repositório Debian (versão estável).",
        example: "sudo apt install -y nginx",
        output: "Setting up nginx (1.22.1-9) ...",
      },
      {
        command: "sudo systemctl enable --now apache2",
        description: "Habilita o serviço para subir no boot e inicia agora mesmo.",
        example: "sudo systemctl enable --now nginx",
        output: "Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service",
        flags: [
          { flag: "--now", description: "Combina enable + start em um único comando" },
        ],
      },
      {
        command: "sudo a2ensite",
        description: "Apache: cria o symlink em sites-enabled/ habilitando um virtual host.",
        example: "sudo a2ensite meusite.conf && sudo systemctl reload apache2",
        output:
          "Enabling site meusite.\nTo activate the new configuration, you need to run:\n  systemctl reload apache2",
      },
      {
        command: "sudo a2dissite",
        description: "Apache: o oposto de a2ensite — desabilita um virtual host.",
        example: "sudo a2dissite 000-default.conf && sudo systemctl reload apache2",
      },
      {
        command: "sudo a2enmod",
        description: "Apache: habilita um módulo (ssl, rewrite, headers, proxy etc.).",
        example: "sudo a2enmod rewrite headers ssl && sudo systemctl restart apache2",
        output:
          "Considering dependency setenvif for module ssl:\nModule setenvif already enabled\nEnabling module ssl.",
      },
      {
        command: "sudo apache2ctl configtest",
        description: "Valida a sintaxe da configuração do Apache antes de aplicar.",
        example: "sudo apache2ctl configtest",
        output: "Syntax OK",
      },
      {
        command: "sudo nginx -t",
        description: "Equivalente do configtest no Nginx — testa o arquivo antes do reload.",
        example: "sudo nginx -t",
        output:
          "nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful",
        flags: [
          { flag: "-c arquivo", description: "Testa um arquivo de configuração específico" },
        ],
      },
      {
        command: "sudo systemctl reload",
        description: "Recarrega a config sem derrubar conexões existentes.",
        example: "sudo systemctl reload nginx",
      },
      {
        command: "sudo systemctl restart",
        description: "Para e sobe o serviço — derruba conexões. Use só quando reload não basta.",
        example: "sudo systemctl restart apache2",
      },
      {
        command: "sudo ufw allow",
        description: "Libera porta no firewall ufw usando perfis pré-definidos.",
        example: "sudo ufw allow 'Nginx Full'",
        output: "Rule added\nRule added (v6)",
        flags: [
          { flag: "'Apache Full'", description: "Libera 80 e 443 para Apache" },
          { flag: "'Nginx HTTP'", description: "Libera só a porta 80" },
        ],
      },
      {
        command: "curl -I",
        description: "Pede só os cabeçalhos HTTP — ótimo para checar status e servidor.",
        example: "curl -I http://localhost",
        output:
          "HTTP/1.1 200 OK\nServer: nginx/1.22.1\nDate: Tue, 04 Mar 2025 12:00:00 GMT\nContent-Type: text/html",
        flags: [
          { flag: "-L", description: "Segue redirecionamentos (útil ao testar HTTP→HTTPS)" },
          { flag: "-k", description: "Aceita certificado inválido (debug local)" },
        ],
      },
      {
        command: "tail -f /var/log/nginx/error.log",
        description: "Acompanha o log de erro em tempo real — primeiro lugar para olhar quando algo quebra.",
        example: "sudo tail -f /var/log/nginx/error.log",
      },
      {
        command: "sudo apache2ctl -S",
        description: "Lista todos os virtual hosts vistos pelo Apache e qual responde por cada nome.",
        example: "sudo apache2ctl -S",
        output:
          "VirtualHost configuration:\n*:80                   meusite.com (/etc/apache2/sites-enabled/meusite.conf:1)",
      },
      {
        command: "sudo certbot --nginx",
        description: "Pede um certificado HTTPS para Let's Encrypt e configura o Nginx automaticamente.",
        example: "sudo certbot --nginx -d meusite.com -d www.meusite.com",
      },
      {
        command: "sudo certbot renew --dry-run",
        description: "Simula a renovação dos certificados sem alterar nada — confirma que vai funcionar quando vencer.",
        example: "sudo certbot renew --dry-run",
        output: "Congratulations, all simulated renewals succeeded",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Apache OU Nginx, raramente os dois",
        content:
          "Os dois disputam a porta 80 e brigam ao subir juntos sem ajuste fino. Se está começando, escolha um e fique com ele. Em cenários avançados, dá para colocar Nginx na frente fazendo proxy reverso para um Apache rodando em outra porta interna.",
      },
      {
        type: "warning",
        title: "Sempre teste antes de recarregar",
        content:
          "Nginx e Apache aceitam reload sem reclamar de erros sutis na hora, mas podem subir em estado quebrado. Rode 'sudo nginx -t' ou 'sudo apache2ctl configtest' ANTES de mandar o reload — vale dois segundos para evitar uma hora de pânico.",
      },
      {
        type: "danger",
        title: "Nunca exponha um servidor sem firewall",
        content:
          "Subir Apache/Nginx em VPS pública sem ufw ou nftables na frente convida bots a vasculhar /admin, /wp-login e mil outros caminhos. Antes de abrir a porta 80/443 para o mundo, garanta que só essas portas (e SSH) estão expostas.",
      },
      {
        type: "success",
        title: "HTTPS gratuito é regra, não exceção",
        content:
          "A Let's Encrypt emite certificados válidos sem custo, e o certbot configura tudo em três comandos. Não há mais desculpa para colocar um site novo no ar sem cadeado: o navegador já marca HTTP simples como 'não seguro'.",
      },
    ],
    practiceLabs: [
      {
        title: "Site estático com Nginx e HTTPS via Let's Encrypt",
        goal:
          "Sair do zero em uma VPS Debian e ter um site estático servido por HTTPS válido em menos de 15 minutos.",
        steps: [
          "Garanta que seu domínio aponta para o IP público da VPS (registro A no DNS).",
          "Atualize o sistema com 'sudo apt update && sudo apt upgrade -y'.",
          "Instale Nginx e libere o firewall com perfil 'Nginx Full'.",
          "Crie /var/www/meusite/index.html com um conteúdo simples e ajuste o dono para www-data.",
          "Crie o virtual host em /etc/nginx/sites-available/meusite e habilite com link em sites-enabled/.",
          "Teste a configuração com 'sudo nginx -t' e recarregue.",
          "Instale certbot e o plugin de Nginx, depois rode 'sudo certbot --nginx -d meusite.com'.",
          "Confira no navegador se o cadeado aparece e se o redirect HTTP→HTTPS funciona.",
        ],
        command: `sudo apt install -y nginx
sudo ufw allow 'Nginx Full'

sudo mkdir -p /var/www/meusite
echo '<h1>No ar!</h1>' | sudo tee /var/www/meusite/index.html
sudo chown -R www-data:www-data /var/www/meusite

sudo tee /etc/nginx/sites-available/meusite >/dev/null <<'EOF'
server {
    listen 80;
    server_name meusite.com www.meusite.com;
    root /var/www/meusite;
    index index.html;
    location / { try_files $uri $uri/ =404; }
}
EOF

sudo ln -s /etc/nginx/sites-available/meusite /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d meusite.com -d www.meusite.com`,
        expected:
          "curl -I https://meusite.com responde com 'HTTP/2 200' e 'Server: nginx'. No navegador, o cadeado fica verde.",
        verify:
          "Rode 'sudo certbot certificates' — deve listar o domínio com data de expiração ~90 dias à frente.",
      },
    ],
    exercises: [
      {
        id: 1,
        question:
          "Você precisa rodar uma API Node.js na porta 3000 e quer que o usuário acesse pela porta 443 com HTTPS no domínio api.minhaempresa.com. Qual servidor web é mais indicado e qual papel ele exerce?",
        hint: "Pense em quem é melhor em receber muitas conexões simultâneas e repassar para outro processo.",
        answer:
          "Nginx, atuando como proxy reverso. Ele escuta nas portas 80 e 443, encerra o TLS (graças ao certificado da Let's Encrypt), e usa proxy_pass http://localhost:3000 para enviar a requisição ao Node. O Node fica seguro escutando só em localhost. Apache também faz proxy reverso, mas Nginx é mais leve e rápido nesse cenário.",
      },
      {
        id: 2,
        question:
          "Depois de editar o virtual host, você roda 'sudo systemctl reload nginx' e o serviço diz que falhou. Qual deve ser o primeiro comando a rodar para entender o problema?",
        hint: "Existe um comando dedicado a validar a sintaxe da configuração.",
        answer:
          "'sudo nginx -t' valida a configuração e aponta o arquivo + linha do erro. Em paralelo, 'sudo journalctl -u nginx -n 50' mostra o motivo exato pelo qual o systemd recusou subir o serviço. Reload sempre falha de forma mais clara quando você lê esses dois primeiro.",
      },
      {
        id: 3,
        question:
          "Como habilitar HTTPS em um site Apache rodando em Debian sem pagar nada por certificado?",
        hint: "Existe uma autoridade certificadora gratuita e um cliente oficial no repositório.",
        answer:
          "Instale 'certbot' e 'python3-certbot-apache', depois rode 'sudo certbot --apache -d meusite.com -d www.meusite.com'. O certbot fala com a Let's Encrypt, valida que você controla o domínio (via desafio HTTP-01), gera o certificado, edita o virtual host para escutar 443 e ativa redirect 301 de HTTP para HTTPS. Um timer do systemd cuida da renovação a cada ~60 dias.",
      },
      {
        id: 4,
        question:
          "Qual a diferença entre 'systemctl reload nginx' e 'systemctl restart nginx'?",
        hint: "Pense em conexões abertas no momento do comando.",
        answer:
          "Reload sinaliza ao Nginx para reler a configuração mantendo o processo principal vivo e sem derrubar conexões em andamento. Restart mata todos os processos do Nginx e sobe novamente, encerrando conexões existentes. Para 99% das mudanças (virtual host, módulo, cabeçalho), reload basta. Restart só em troca de binário ou quando o reload claramente não pegou.",
      },
      {
        id: 5,
        question:
          "Ao acessar o site novo, o navegador mostra 'Forbidden' em vez do conteúdo. O que provavelmente está errado?",
        hint: "Servidor web roda como www-data e precisa de permissão para ler os arquivos.",
        answer:
          "Permissão. Os arquivos em /var/www/seu-site provavelmente pertencem ao root e não dão leitura para o www-data. Corrija com 'sudo chown -R www-data:www-data /var/www/seu-site' e garanta que diretórios tenham 755 e arquivos 644. Outra causa comum é o virtual host não ter directive 'Require all granted' (Apache 2.4) para a pasta.",
      },
      {
        id: 6,
        question:
          "Por que é uma má ideia subir Apache e Nginx ao mesmo tempo sem ajustar portas?",
        hint: "Apenas um processo pode escutar uma mesma porta TCP por vez.",
        answer:
          "Os dois tentam ocupar a porta 80 (e 443). O segundo serviço a iniciar falha com 'address already in use'. Em cenários reais, escolha um para a borda. Se realmente precisa dos dois, coloque Nginx na frente escutando 80/443 e configure Apache em alguma porta interna (8080, por exemplo) recebendo via proxy_pass.",
      },
      {
        id: 7,
        question:
          "Depois de habilitar um virtual host com a2ensite, qual comando confirma que ele está realmente carregado?",
        hint: "Existe um comando do Apache que mostra todos os virtualhosts ativos.",
        answer:
          "'sudo apache2ctl -S' lista os virtualhosts ativos e mostra qual arquivo origina cada um. Se o seu não aparece, ou o arquivo está com extensão errada, ou o a2ensite não foi seguido de reload.",
      },
    ],
    references: [
      { title: "Wiki Debian — Apache", url: "https://wiki.debian.org/Apache" },
      { title: "Documentação oficial do Nginx", url: "https://nginx.org/en/docs/" },
      { title: "Certbot (Let's Encrypt)", url: "https://certbot.eff.org/" },
      { title: "Mozilla SSL Configuration Generator", url: "https://ssl-config.mozilla.org/" },
      { title: "Debian Handbook — Web Server", url: "https://www.debian.org/doc/manuals/debian-handbook/" },
    ],
  },

  {
    id: "servidor-banco-dados",
    title: "Banco de Dados — MariaDB e PostgreSQL",
    icon: "🗄️",
    category: "Servidores",
    description:
      "Instale, configure e proteja os dois bancos relacionais mais usados em servidores Debian, com backup e restore reais.",
    objectives: [
      "Entender o que faz um servidor de banco de dados e por que ele roda separado da aplicação",
      "Decidir entre MariaDB e PostgreSQL com base em requisitos do projeto",
      "Instalar e blindar a instalação no Debian seguindo o jeito recomendado",
      "Criar bancos, usuários e permissões granulares em cada um dos dois sistemas",
      "Fazer backup e restore confiáveis usando mysqldump e pg_dump",
      "Avaliar quando expor o banco para a rede e como fazer isso de forma segura",
    ],
    content: [
      `Pense em um banco de dados como um arquivo morto bem organizado de uma empresa: pastas (tabelas) com fichas (registros) e regras claras sobre o que cabe em cada coluna. Um servidor de banco de dados é o funcionário que cuida desse arquivo: ninguém entra direto no armário, todo mundo conversa com ele via uma "linguagem oficial" (SQL), e ele aplica regras de quem pode ler, escrever, alterar. Esse funcionário roda como um processo no servidor, escutando em uma porta TCP (3306 para MariaDB/MySQL, 5432 para PostgreSQL), pronto para receber consultas.`,

      `Por que separar o banco da aplicação? Porque escalam diferente. A aplicação web pode rodar em três máquinas, mas todas conversam com o MESMO banco — assim os dados ficam consistentes. Além disso, banco de dados precisa de configurações específicas (memória, cache, journaling) e cuidado redobrado com backup. Manter o banco em outro processo (até em outra máquina) deixa cada peça do sistema com responsabilidade clara.`,

      `Os dois bancos relacionais dominantes no Linux são MariaDB e PostgreSQL. MariaDB é um fork do MySQL feito pelos próprios criadores originais quando a Oracle comprou o MySQL — comandos, drivers e ferramentas são quase 100% compatíveis com MySQL. É padrão em hospedagens compartilhadas e na pilha LAMP (Linux + Apache + MariaDB/MySQL + PHP), com WordPress como caso emblemático. PostgreSQL é mais antigo (anos 80) e tem fama de ser o "banco sério": suporte nativo a JSON, tipos de dados ricos, transações com isolamento robusto, extensões poderosas (PostGIS para geo, TimescaleDB para séries temporais).`,

      `Instalação no Debian é simples porque os dois estão no repositório oficial. Para MariaDB, 'sudo apt install mariadb-server' já deixa o serviço rodando. Para PostgreSQL, 'sudo apt install postgresql postgresql-contrib'. A grande diferença está na primeira autenticação. MariaDB usa o socket Unix com autenticação peer: ao rodar 'sudo mariadb', o servidor confia no usuário Linux 'root' e te entra como root SQL sem pedir senha. PostgreSQL cria um usuário Linux chamado 'postgres' e o mesmo nome no banco; para entrar, você se torna esse usuário com 'sudo -u postgres psql'.`,

      `Confusão clássica: usuário Linux versus usuário do banco. São coisas diferentes. Quando você cria 'meu_user' no MariaDB, esse usuário só existe dentro do MariaDB e tem senha própria. Não há usuário Linux com esse nome — não dá para fazer 'su meu_user'. No PostgreSQL acontece a mesma coisa, com a complicação a mais de que ele tenta casar o nome do usuário Linux com o do banco quando você omite -U. Por isso 'psql' direto, sem flags, costuma falhar com "role 'fulano' does not exist".`,

      `Backup é tema tão importante quanto a instalação. As ferramentas oficiais são 'mysqldump' (MariaDB) e 'pg_dump' (PostgreSQL): ambas geram um arquivo SQL com CREATE TABLE + INSERT que reconstrói tudo. O fluxo profissional é: dump diário comprimido, rotação por idade (manter 7, 30, 90 dias), cópia para outra máquina ou nuvem, e — fundamental — testar restore de tempos em tempos. Backup que nunca foi restaurado não é backup, é esperança.`,

      `Quando o banco precisa estar exposto na rede (porque a aplicação roda em outra máquina), aí entram precauções. Por padrão, ambos só escutam em 127.0.0.1, ou seja, só conexões locais. Para abrir, edita-se 'bind-address' no MariaDB ou 'listen_addresses' no PostgreSQL. Mas isso, sozinho, é receita para invasão: bots varrem a internet em busca de portas 3306/5432 abertas. A combinação correta é abrir só para IPs específicos via firewall, exigir autenticação forte (senhas longas ou certificados TLS), e — sempre que possível — usar VPN ou túnel SSH em vez de expor diretamente.`,

      `Ao final deste capítulo você vai conseguir instalar os dois bancos a partir de um Debian limpo, criar bancos e usuários com permissões granulares, fazer backup e restore com confiança, e tomar decisões informadas sobre exposição na rede. Esse é o conhecimento mínimo para colocar uma aplicação real em produção sem entregar os dados de mão beijada.`,
    ],
    commands: [
      {
        command: "sudo apt install mariadb-server",
        description: "Instala o MariaDB Server e o cliente padrão.",
        example: "sudo apt install -y mariadb-server",
        output: "Setting up mariadb-server (1:10.11.6-0+deb12u1) ...",
      },
      {
        command: "sudo mysql_secure_installation",
        description:
          "Wizard pós-instalação que define senha de root, remove usuário anônimo e o banco de teste.",
        example: "sudo mysql_secure_installation",
      },
      {
        command: "sudo mariadb",
        description: "Abre o cliente como root SQL via socket Unix (sem senha).",
        example: "sudo mariadb",
        output: "Welcome to the MariaDB monitor.\nMariaDB [(none)]>",
      },
      {
        command: "mysqldump",
        description: "Gera dump SQL de um banco MariaDB/MySQL.",
        example: "mysqldump -u root -p meu_app > backup.sql",
        flags: [
          { flag: "--all-databases", description: "Faz backup de todos os bancos" },
          { flag: "--single-transaction", description: "Snapshot consistente em InnoDB sem lock" },
          { flag: "--routines", description: "Inclui stored procedures e functions" },
        ],
      },
      {
        command: "sudo apt install postgresql postgresql-contrib",
        description: "Instala o PostgreSQL com pacotes complementares úteis (extensões, ferramentas).",
        example: "sudo apt install -y postgresql postgresql-contrib",
      },
      {
        command: "sudo -u postgres psql",
        description: "Vira o usuário Linux 'postgres' e abre o cliente psql como superusuário SQL.",
        example: "sudo -u postgres psql",
        output: "psql (15.5 (Debian 15.5-0+deb12u1))\npostgres=#",
      },
      {
        command: "createdb / createuser",
        description:
          "Wrappers de linha de comando do PostgreSQL para criar banco e usuário sem entrar no psql.",
        example: "sudo -u postgres createuser --interactive",
      },
      {
        command: "pg_dump",
        description: "Backup de um banco PostgreSQL em formato SQL ou custom.",
        example: "sudo -u postgres pg_dump -F c meu_app > meu_app.dump",
        flags: [
          { flag: "-F c", description: "Formato custom (binário, mais rápido para restaurar)" },
          { flag: "-F p", description: "Formato plain SQL (texto)" },
          { flag: "-Z 9", description: "Comprime ao máximo" },
        ],
      },
      {
        command: "pg_restore",
        description: "Restaura backups feitos no formato custom (-F c) do pg_dump.",
        example: "sudo -u postgres pg_restore -d meu_app meu_app.dump",
      },
      {
        command: "psql -U usuario -d banco -h host",
        description: "Conecta ao PostgreSQL especificando usuário, banco e host.",
        example: "psql -U meu_user -d meu_app -h localhost",
      },
      {
        command: "SHOW DATABASES; / \\l",
        description: "Lista bancos no MariaDB (SHOW) ou no PostgreSQL (\\l).",
        example: "SHOW DATABASES;",
      },
      {
        command: "SHOW GRANTS FOR / \\du",
        description: "Mostra permissões de um usuário no MariaDB (SHOW GRANTS) e lista roles no Postgres (\\du).",
        example: "SHOW GRANTS FOR 'meu_user'@'localhost';",
      },
      {
        command: "sudo systemctl status mariadb / postgresql",
        description: "Mostra estado, PID e últimas linhas de log do serviço.",
        example: "sudo systemctl status postgresql",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Autenticação peer no Debian",
        content:
          "MariaDB e PostgreSQL no Debian já vêm configurados para confiar no usuário Linux via socket. Por isso 'sudo mariadb' e 'sudo -u postgres psql' funcionam sem senha — é um recurso, não bug. Senha só é necessária para conexões TCP/IP.",
      },
      {
        type: "warning",
        title: "Nunca esqueça FLUSH PRIVILEGES após GRANT",
        content:
          "No MariaDB, mudanças em tabelas de privilégio só passam a valer depois de FLUSH PRIVILEGES (ou reinício). Esquecer disso é causa comum de 'criei o usuário, dei permissão e ainda dá Access denied'.",
      },
      {
        type: "danger",
        title: "Banco aberto na internet sem firewall = invadido",
        content:
          "Subir bind-address 0.0.0.0 ou listen_addresses '*' sem ufw/nftables filtrando é receita para perder dados. Bots fazem brute-force em portas 3306/5432 24h por dia. Use VPN, túnel SSH ou ao menos limite por IP.",
      },
      {
        type: "success",
        title: "Backup que não é testado não existe",
        content:
          "Crie o hábito de restaurar o backup em uma VM de teste pelo menos uma vez por mês. Muita gente descobre que o cron estava falhando há semanas só na hora do desastre.",
      },
    ],
    practiceLabs: [
      {
        title: "MariaDB do zero ao primeiro backup",
        goal:
          "Instalar, blindar, criar banco + usuário e gerar um backup comprimido — todo o ciclo básico de DBA.",
        steps: [
          "Instale o MariaDB Server.",
          "Rode mysql_secure_installation respondendo Y para todas as opções.",
          "Entre como root e crie um banco 'app_demo' em UTF-8 mb4.",
          "Crie usuário 'app_user'@'localhost' com senha forte e dê permissões só nesse banco.",
          "Saia do cliente, conecte como app_user e crie uma tabela simples.",
          "Faça mysqldump comprimido e confirme tamanho com ls -lh.",
        ],
        command: `sudo apt install -y mariadb-server
sudo mysql_secure_installation

sudo mariadb <<'SQL'
CREATE DATABASE app_demo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'TrocarSenha!2025';
GRANT ALL PRIVILEGES ON app_demo.* TO 'app_user'@'localhost';
FLUSH PRIVILEGES;
SQL

mariadb -u app_user -p'TrocarSenha!2025' app_demo \\
  -e "CREATE TABLE pessoa (id INT PRIMARY KEY, nome VARCHAR(100));"

mkdir -p ~/backups
mysqldump -u root app_demo | gzip > ~/backups/app_demo_$(date +%F).sql.gz
ls -lh ~/backups/`,
        expected:
          "Arquivo .sql.gz criado em ~/backups, tamanho na casa de KB. Conexão como app_user funciona e a tabela aparece em SHOW TABLES.",
        verify:
          "zcat ~/backups/app_demo_*.sql.gz | head deve mostrar 'CREATE TABLE pessoa'.",
      },
      {
        title: "PostgreSQL com usuário, banco e restore de backup",
        goal:
          "Criar uma base PostgreSQL pronta para uma aplicação e fazer o ciclo completo dump → drop → restore.",
        steps: [
          "Instale postgresql + postgresql-contrib.",
          "Como usuário postgres, crie role 'app_user' com senha e banco 'app_demo' com ele como dono.",
          "Edite pg_hba.conf liberando 'md5' para app_user em conexões locais.",
          "Conecte com psql -U app_user -d app_demo -h localhost e crie uma tabela.",
          "Faça pg_dump -F c do banco em ~/backups/.",
          "Apague o banco, recrie vazio e restaure com pg_restore.",
        ],
        command: `sudo apt install -y postgresql postgresql-contrib
sudo -u postgres psql <<'SQL'
CREATE ROLE app_user LOGIN PASSWORD 'TrocarSenha!2025';
CREATE DATABASE app_demo OWNER app_user;
SQL
mkdir -p ~/backups
sudo -u postgres pg_dump -F c app_demo > ~/backups/app_demo.dump`,
        expected:
          "Arquivo binário gerado. Após DROP + CREATE + pg_restore, a tabela volta exatamente como antes.",
        verify:
          "psql -U app_user -d app_demo -h localhost -c '\\dt' lista a tabela restaurada.",
      },
    ],
    exercises: [
      {
        id: 1,
        question:
          "Quando você escolheria PostgreSQL em vez de MariaDB para um projeto novo?",
        hint: "Pense em tipos de dados, transações e ecossistema.",
        answer:
          "Para aplicações modernas em Django, Rails, Node ou Go que se beneficiam de tipos ricos (JSONB, arrays, ENUM), transações com isolamento real (MVCC) e extensões como PostGIS. Também quando há requisitos fortes de integridade. MariaDB ainda vence em conveniência para hospedagem compartilhada, WordPress e legados PHP.",
      },
      {
        id: 2,
        question:
          "Você criou 'CREATE USER \"app\"@\"localhost\"' e a aplicação, rodando em outra máquina, recebe Access denied. Por quê?",
        hint: "MariaDB casa o usuário com o host de origem.",
        answer:
          "No MariaDB, 'app'@'localhost' só vale para conexões vindas do próprio host (via socket ou 127.0.0.1). Para a aplicação remota você precisa criar 'app'@'IP_DA_APP' (ou 'app'@'%' com cuidado), dar GRANT correspondente, FLUSH PRIVILEGES, ajustar bind-address para escutar na rede e abrir o firewall só para o IP da aplicação.",
      },
      {
        id: 3,
        question:
          "Como fazer backup diário automatizado do PostgreSQL em /var/backups/postgres?",
        hint: "Combine pg_dump, cron ou systemd timer e rotação de arquivos.",
        answer:
          "Crie um script com 'sudo -u postgres pg_dump -F c -Z 9 nome_banco -f /var/backups/postgres/nome_$(date +\\%F).dump' e adicione um cron diário (ou systemd timer). Aplique 'find /var/backups/postgres -mtime +30 -delete' para rotacionar antigos. Teste restore mensalmente em um servidor de staging.",
      },
      {
        id: 4,
        question:
          "Por que rodar 'sudo -u postgres psql' funciona, mas 'psql' direto não, mesmo com seu usuário tendo sudo?",
        hint: "PostgreSQL casa por padrão o nome do usuário Linux com o nome de role.",
        answer:
          "PostgreSQL no Debian usa autenticação peer/ident por padrão para conexões locais, casando o nome do usuário Linux com uma role SQL de mesmo nome. Como 'postgres' existe (criado na instalação) e seu usuário não, só 'sudo -u postgres psql' funciona até você criar uma role com seu nome (CREATE ROLE seu_user LOGIN SUPERUSER).",
      },
      {
        id: 5,
        question:
          "Diferença prática entre pg_dump no formato 'plain' (-F p) e 'custom' (-F c)?",
        hint: "Pense em como você restaura e em paralelismo.",
        answer:
          "Plain gera um .sql legível, restaurado com 'psql nome_banco < arquivo.sql' — bom para inspecionar e versionar. Custom (-F c) gera binário comprimido, restaurado com pg_restore, suporta restore paralelo (-j N) e seleção de objetos individuais. Custom é o padrão em produção; plain ajuda em diff entre versões.",
      },
      {
        id: 6,
        question:
          "Como descobrir quais permissões 'app_user' tem no MariaDB?",
        hint: "Existe um SHOW específico para isso.",
        answer:
          "Conectado como root: 'SHOW GRANTS FOR \"app_user\"@\"localhost\";'. Lista todas as cláusulas GRANT aplicadas. Ajuda a entender se faltou um privilégio antes de gastar tempo procurando bug na aplicação.",
      },
      {
        id: 7,
        question:
          "Você vai expor o PostgreSQL para a aplicação em outra VPS. Quais cuidados mínimos?",
        hint: "Lembre das três camadas: rede, autenticação e criptografia.",
        answer:
          "Em listen_addresses ponha o IP interno (não 0.0.0.0). No pg_hba.conf, libere só o IP da aplicação com método 'scram-sha-256' (mais forte que md5). Abra a porta 5432 no firewall apenas para esse IP. Habilite TLS no postgresql.conf (ssl = on, certificados próprios ou Let's Encrypt). Use senhas longas e considere VPN ou túnel SSH em vez de exposição direta.",
      },
    ],
    references: [
      { title: "MariaDB Knowledge Base", url: "https://mariadb.com/kb/en/" },
      { title: "PostgreSQL Documentation", url: "https://www.postgresql.org/docs/current/" },
      { title: "Wiki Debian — MariaDB", url: "https://wiki.debian.org/MariaDB" },
      { title: "Wiki Debian — PostgreSQL", url: "https://wiki.debian.org/PostgreSql" },
      { title: "PostgreSQL pg_hba.conf reference", url: "https://www.postgresql.org/docs/current/auth-pg-hba-conf.html" },
    ],
  },

  {
    id: "docker-debian",
    title: "Docker no Debian",
    icon: "🐳",
    category: "Servidores",
    description:
      "Aprenda containers do zero: do conceito à prática com Docker Engine e Compose em um Debian estável.",
    objectives: [
      "Explicar com palavras simples o que são containers e por que viraram padrão de deploy",
      "Diferenciar imagem, container, volume e rede dentro do Docker",
      "Instalar Docker Engine no Debian usando o repositório oficial (não o pacote 'docker.io' velho)",
      "Rodar, inspecionar, parar e remover containers do dia a dia",
      "Subir aplicações multi-serviço com docker compose e arquivos YAML",
      "Manter o disco limpo e adotar boas práticas de segurança em containers",
    ],
    content: [
      `Imagine que cada aplicação é uma planta com necessidades específicas: certa quantidade de luz, certo tipo de adubo, temperatura controlada. Se você plantar todas no mesmo vaso, uma vai sufocar a outra. Containers são vasos individuais para cada aplicação: cada um tem seu próprio sistema de arquivos, suas bibliotecas, sua versão de runtime. Eles compartilham o "solo" (o kernel Linux do servidor), mas vivem isolados entre si. Docker é o jardineiro: a ferramenta que cria, move e cuida desses vasos.`,

      `O problema que motivou os containers é o famoso "na minha máquina funciona". Você desenvolve em Debian 12 com Python 3.11, manda para o servidor que tem Python 3.9, e nada roda. Antes do Docker, virtualização (VMs) resolvia isso, mas com custo alto: cada VM trazia um sistema operacional inteiro junto. Containers oferecem o mesmo isolamento usando recursos do próprio kernel Linux (namespaces e cgroups), com fração do peso e segundos para subir.`,

      `Três jargões precisam ficar firmes antes de continuar. Imagem é o "molde" — um pacote imutável com tudo que a aplicação precisa: código, libs, configurações. Container é a "instância em execução" daquela imagem; você pode ter dez containers rodando da mesma imagem, cada um com seu estado próprio. Volume é o jeito de persistir dados fora do container, porque quando o container morre, tudo que estava dentro do sistema de arquivos efêmero some.`,

      `O passo a passo conceitual de subir um container é assim: o Docker pega uma imagem (ou baixa do Docker Hub se não tiver localmente), cria namespaces de processos/rede/arquivos isolados, monta o sistema de arquivos da imagem em camadas read-only com uma camada writable em cima, mapeia portas que você pediu para fora, e executa o "entrypoint" da imagem como processo principal. Quando esse processo termina, o container para. É por isso que 'docker run' de uma imagem como 'hello-world' encerra logo após imprimir a mensagem.`,

      `Confusão comum número um: instalar o pacote 'docker.io' do repositório Debian. Ele funciona, mas é uma versão antiga e divergente do Docker oficial. O caminho recomendado é adicionar o repositório do próprio Docker e instalar 'docker-ce' (Community Edition). Confusão dois: usar 'sudo' a cada comando docker. Existe um grupo Linux chamado 'docker' — adicione seu usuário a ele com 'sudo usermod -aG docker $USER', faça logout/login e os comandos 'docker' funcionam diretos. Cuidado: quem está nesse grupo essencialmente tem privilégios de root via Docker, então não dê para todo mundo.`,

      `Confusão três: dados que somem. O sistema de arquivos do container é descartável por design — qualquer arquivo criado dentro dele desaparece quando você 'docker rm'. Para banco de dados, uploads, logs, etc., use volumes. Volumes nomeados ('docker volume create dados') ficam no host em /var/lib/docker/volumes e sobrevivem ao container. Bind mounts (-v /caminho/host:/caminho/container) montam uma pasta sua dentro do container — útil para desenvolvimento.`,

      `Quando uma aplicação tem várias peças (banco + cache + worker + web), gerenciar com 'docker run' vira pesadelo. Aí entra o Docker Compose: um arquivo YAML descreve todos os serviços, redes e volumes; 'docker compose up -d' sobe tudo de uma vez, 'docker compose down' derruba. É a forma natural de hospedar aplicações reais e a porta de entrada para orquestradores maiores como Kubernetes mais para frente.`,

      `No dia a dia, Docker aparece em quase tudo: rodar PostgreSQL para testar uma migração sem instalar no host, subir um WordPress de demonstração em 30 segundos, empacotar uma API Python para rodar igualzinho em qualquer servidor, criar um ambiente de testes que sobe e desce em CI/CD. Ao final deste capítulo você vai conseguir instalar o Docker do jeito certo, rodar containers individuais, escrever um docker-compose.yml para uma aplicação multi-serviço e cuidar do disco para o servidor não entupir.`,
    ],
    commands: [
      {
        command: "docker version",
        description: "Mostra as versões do cliente e do daemon Docker — primeiro comando após instalar.",
        example: "docker version",
        output: "Client: Docker Engine - Community\n Version:           26.1.4",
      },
      {
        command: "docker run",
        description: "Cria e roda um container a partir de uma imagem.",
        example: "docker run -d --name web -p 8080:80 nginx",
        flags: [
          { flag: "-d", description: "Detached (roda em background)" },
          { flag: "--name NOME", description: "Dá nome legível ao container" },
          { flag: "-p HOST:CONTAINER", description: "Mapeia porta do host para o container" },
          { flag: "-v VOL:/path", description: "Monta volume nomeado ou bind mount" },
          { flag: "-e VAR=valor", description: "Define variável de ambiente" },
          { flag: "--restart unless-stopped", description: "Reinicia automaticamente se cair" },
          { flag: "--rm", description: "Remove o container ao parar (bom para testes)" },
        ],
      },
      {
        command: "docker ps",
        description: "Lista containers em execução. Com -a mostra todos, incluindo parados.",
        example: "docker ps -a",
        output:
          "CONTAINER ID   IMAGE   COMMAND                  STATUS         PORTS                  NAMES\nabc123          nginx   \"nginx -g 'daemon...\"  Up 5 minutes   0.0.0.0:8080->80/tcp   web",
        flags: [
          { flag: "-a", description: "Inclui containers parados" },
          { flag: "-q", description: "Imprime só os IDs (útil em scripts)" },
        ],
      },
      {
        command: "docker logs",
        description: "Mostra a saída padrão e erro do container.",
        example: "docker logs -f web",
        flags: [
          { flag: "-f", description: "Segue (tail -f) os logs em tempo real" },
          { flag: "--tail N", description: "Mostra só as últimas N linhas" },
          { flag: "--since 1h", description: "Filtra por janela de tempo" },
        ],
      },
      {
        command: "docker exec -it",
        description: "Executa um comando dentro de um container já rodando.",
        example: "docker exec -it web bash",
      },
      {
        command: "docker stop / start / restart",
        description: "Para, inicia ou reinicia um container existente sem apagá-lo.",
        example: "docker stop web && docker start web",
      },
      {
        command: "docker rm / rmi",
        description: "Apaga container (rm) ou imagem (rmi).",
        example: "docker rm web && docker rmi nginx",
      },
      {
        command: "docker images",
        description: "Lista imagens locais com tag e tamanho.",
        example: "docker images",
        output:
          "REPOSITORY   TAG       IMAGE ID       CREATED         SIZE\nnginx        latest    abcdef         2 weeks ago     192MB",
      },
      {
        command: "docker pull",
        description: "Baixa uma imagem do registry sem rodar nada.",
        example: "docker pull postgres:16",
      },
      {
        command: "docker volume",
        description: "Gerencia volumes nomeados (create, ls, inspect, rm).",
        example: "docker volume create dados-postgres",
      },
      {
        command: "docker network",
        description: "Gerencia redes virtuais entre containers.",
        example: "docker network create app-net",
      },
      {
        command: "docker compose up",
        description: "Sobe todos os serviços definidos no docker-compose.yml da pasta atual.",
        example: "docker compose up -d",
        flags: [
          { flag: "-d", description: "Em background" },
          { flag: "--build", description: "Reconstrói imagens antes de subir" },
        ],
      },
      {
        command: "docker compose down",
        description: "Para e remove tudo que o compose criou (containers, redes). Volumes só com -v.",
        example: "docker compose down",
        flags: [
          { flag: "-v", description: "Apaga também os volumes (cuidado: perde dados)" },
        ],
      },
      {
        command: "docker compose logs",
        description: "Logs combinados de todos os serviços do compose.",
        example: "docker compose logs -f wordpress",
      },
      {
        command: "docker system prune",
        description: "Limpa containers parados, redes não usadas, imagens órfãs e cache de build.",
        example: "docker system prune -a",
        flags: [
          { flag: "-a", description: "Remove TODAS imagens não usadas, não só órfãs" },
          { flag: "--volumes", description: "Remove também volumes órfãos (apaga dados!)" },
        ],
      },
      {
        command: "docker stats",
        description: "Mostra uso de CPU, memória e rede dos containers em tempo real.",
        example: "docker stats",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Use o repositório oficial Docker",
        content:
          "O pacote 'docker.io' do Debian funciona, mas costuma estar versões atrás. Para receber atualizações rápidas e o Docker Compose v2 plugin, use os passos oficiais (apt-key + sources.list.d) e instale 'docker-ce'.",
      },
      {
        type: "warning",
        title: "Estar no grupo docker = praticamente root",
        content:
          "Quem pertence ao grupo 'docker' pode montar / como volume e ganhar acesso completo. Adicione apenas usuários administrativos. Em servidor compartilhado, considere ferramentas com menos privilégio como Podman.",
      },
      {
        type: "danger",
        title: "Cuidado com 'docker system prune --volumes'",
        content:
          "Essa flag apaga volumes órfãos sem confirmação adicional. Se você parou um container do banco temporariamente, o volume pode entrar como 'órfão' e ser deletado. Sempre confirme antes em servidor de produção.",
      },
      {
        type: "success",
        title: "Tudo de produção em docker-compose.yml",
        content:
          "Versionar o compose no Git deixa o ambiente reproduzível: um clone + 'docker compose up -d' e a stack está no ar. Com .env separado para segredos, fica fácil migrar entre máquinas.",
      },
    ],
    practiceLabs: [
      {
        title: "Docker Engine + WordPress com Compose em uma tarde",
        goal:
          "Sair do zero em um Debian limpo e ter WordPress rodando em http://localhost:8080 com banco MariaDB persistente.",
        steps: [
          "Adicione o repositório oficial do Docker e instale docker-ce + plugin compose.",
          "Adicione seu usuário ao grupo docker e refaça login.",
          "Crie a pasta ~/lab-wp e um arquivo docker-compose.yml com serviços db (mariadb) e wordpress.",
          "Rode 'docker compose up -d' e aguarde os logs estabilizarem.",
          "Acesse http://localhost:8080 e complete o assistente de instalação.",
          "Pare a stack com 'docker compose down' e suba de novo — confirme que os dados persistem.",
        ],
        command: `sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg \\
  -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] \\
  https://download.docker.com/linux/debian $(. /etc/os-release && echo $VERSION_CODENAME) stable" \\
  | sudo tee /etc/apt/sources.list.d/docker.list

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io \\
  docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER
# logout/login

mkdir -p ~/lab-wp && cd ~/lab-wp
cat > docker-compose.yml <<'EOF'
services:
  db:
    image: mariadb:11
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: wp
      MYSQL_USER: wp_user
      MYSQL_PASSWORD: wp_pass
    volumes:
      - db_data:/var/lib/mysql

  wordpress:
    image: wordpress:latest
    restart: unless-stopped
    depends_on: [db]
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wp_user
      WORDPRESS_DB_PASSWORD: wp_pass
      WORDPRESS_DB_NAME: wp

volumes:
  db_data:
EOF

docker compose up -d
docker compose ps`,
        expected:
          "docker compose ps lista os 2 serviços com STATUS Up. http://localhost:8080 mostra a tela de instalação do WordPress.",
        verify:
          "Após 'docker compose down && docker compose up -d', o WordPress preserva o título e usuário criados (graças ao volume db_data).",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Qual a diferença prática entre uma imagem e um container?",
        hint: "Pense em molde versus instância.",
        answer:
          "Imagem é imutável: um pacote read-only com sistema de arquivos + metadados. Container é uma execução dessa imagem com uma camada writable em cima e processos rodando. Você pode ter zero, um ou cem containers da mesma imagem; pode parar e iniciar um container; pode apagar containers sem mexer na imagem original.",
      },
      {
        id: 2,
        question:
          "Você 'docker rm' um container de banco de dados sem volume e perdeu tudo. Como evitar isso na próxima?",
        hint: "Existe um recurso para persistência fora do container.",
        answer:
          "Crie um volume nomeado e monte em /var/lib/postgresql/data (ou caminho equivalente do banco). Exemplo: 'docker run -d -v pgdata:/var/lib/postgresql/data postgres:16'. O volume vive em /var/lib/docker/volumes e sobrevive a remoções. Em compose, declare na seção 'volumes:'.",
      },
      {
        id: 3,
        question:
          "Como rodar comandos administrativos dentro de um container que já está em execução?",
        hint: "Existe um comando que executa processos extras dentro do namespace do container.",
        answer:
          "'docker exec -it NOME bash' (ou 'sh' em imagens Alpine) abre um shell interativo dentro do container. Para um único comando: 'docker exec NOME ls /etc'. -i mantém stdin aberto, -t aloca pseudo-terminal.",
      },
      {
        id: 4,
        question:
          "O disco do servidor enche e 'docker images' mostra dezenas de imagens antigas. Como limpar com segurança?",
        hint: "Existe um comando geral e flags para granularidade.",
        answer:
          "'docker system prune' remove containers parados, networks não usadas, imagens dangling e cache de build sem mexer no que está em uso. Com -a apaga TODAS imagens não usadas (mais agressivo). Volumes só são tocados com --volumes. Antes de prune -a, rode 'docker images' e 'docker volume ls' para conferir o que vai sair.",
      },
      {
        id: 5,
        question:
          "Como rodar Docker sem precisar digitar 'sudo' em cada comando?",
        hint: "Existe um grupo Linux dedicado.",
        answer:
          "'sudo usermod -aG docker $USER' adiciona seu usuário ao grupo 'docker'. É preciso fazer logout/login (ou 'newgrp docker') para a nova associação valer. Atenção: quem pertence ao grupo docker tem privilégios equivalentes a root via container, então não dê para usuários não confiáveis.",
      },
      {
        id: 6,
        question:
          "Por que usar Docker Compose em vez de vários 'docker run'?",
        hint: "Pense em manutenção, versionamento e múltiplos serviços.",
        answer:
          "Compose declara toda a stack (serviços, redes, volumes, variáveis) em um YAML versionável no Git. Subir tudo é 'docker compose up -d'; descer é 'docker compose down'. Reduz erro humano em comandos longos, facilita reproduzir o ambiente em outras máquinas e documenta a arquitetura sem depender de README.",
      },
      {
        id: 7,
        question:
          "Como expor uma API rodando na porta 3000 dentro do container para a porta 80 do host?",
        hint: "A flag de mapeamento usa host:container.",
        answer:
          "'docker run -d -p 80:3000 minha-api'. O Docker abre a porta 80 no host e encaminha o tráfego para a 3000 dentro do container. Em ambientes com Nginx na frente, o usual é mapear 3000:3000 e deixar o Nginx fazer proxy_pass para http://localhost:3000.",
      },
    ],
    references: [
      { title: "Documentação oficial do Docker", url: "https://docs.docker.com/" },
      { title: "Docker Compose Reference", url: "https://docs.docker.com/compose/" },
      { title: "Docker Hub", url: "https://hub.docker.com/" },
      { title: "Instalação Docker no Debian", url: "https://docs.docker.com/engine/install/debian/" },
      { title: "Best practices para Dockerfile", url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/" },
    ],
  },

  {
    id: "ssh-server",
    title: "SSH Server — Acesso Remoto Seguro",
    icon: "🔐",
    category: "Servidores",
    description:
      "Configure o servidor OpenSSH no Debian e administre máquinas remotas com chaves, túneis e regras de segurança.",
    objectives: [
      "Compreender o que é SSH e por que ele substituiu telnet, rlogin e ftp inseguros",
      "Instalar e configurar o servidor OpenSSH no Debian",
      "Gerar e instalar chaves SSH, eliminando a necessidade de senha",
      "Endurecer o sshd_config para reduzir superfície de ataque",
      "Usar SCP, SFTP e túneis para mover arquivos e expor serviços com segurança",
      "Diagnosticar problemas de conexão lendo logs do journalctl",
    ],
    content: [
      `Imagine que você precisa entrar na sala de máquinas de uma empresa do outro lado do país. Pegar um avião toda vez não é viável. SSH (Secure Shell) é o "túnel teleportador" que te coloca na sala como se estivesse lá, com a vantagem de tudo que você digita ser criptografado da ponta à ponta. Ninguém no caminho — nem o provedor, nem alguém num WiFi público — consegue ler o que você está fazendo. É a ferramenta número um de qualquer pessoa que administra servidor Linux.`,

      `Antes do SSH (anos 90 para cá), administradores usavam telnet, rsh e rlogin: tudo trafegava em texto puro, inclusive senhas. Quem capturasse o tráfego conseguia entrar na máquina. SSH resolveu isso oferecendo três coisas ao mesmo tempo: criptografia (ninguém lê no meio), autenticação forte (a máquina prova quem é via fingerprint, e o usuário pode usar chave pública em vez de senha) e integridade (se alguém mexer no pacote, é detectado).`,

      `Os jargões básicos: cliente SSH é o programa que você roda no seu computador para conectar (ssh, scp, sftp). Servidor SSH (sshd) é o daemon que aceita conexões na máquina remota, normalmente na porta 22. Chave pública e chave privada formam um par matemático: a pública você joga em qualquer lugar (vai dentro de ~/.ssh/authorized_keys do servidor), a privada fica guardada como ouro no seu computador. Quem tem a privada prova que é dono da pública sem revelá-la.`,

      `Conceitualmente, ao rodar 'ssh user@servidor': o cliente abre TCP na porta 22, o servidor envia sua chave pública host, o cliente compara com ~/.ssh/known_hosts (na primeira vez pergunta se você confia). Se ok, negocia algoritmos de criptografia, troca chaves de sessão (Diffie-Hellman) e abre um canal seguro. Aí começa a autenticação do usuário: tenta chave pública primeiro (se você tem ~/.ssh/id_ed25519 e a pública correspondente está em authorized_keys do servidor) e cai para senha se não der.`,

      `Confusão clássica: "alterei sshd_config e nada aconteceu". É preciso reiniciar o serviço com 'sudo systemctl reload ssh' para a mudança valer — e cuidado, se você quebrou a configuração pode perder acesso. Sempre teste em uma SEGUNDA sessão SSH antes de fechar a primeira. Outra confusão: o arquivo do daemon é /etc/ssh/sshd_config (com 'd'), não /etc/ssh/ssh_config (esse é do cliente). Trocar os dois é fonte sem fim de "por que não funciona".`,

      `Hardening básico que todo servidor exposto na internet deve ter: desabilitar login direto como root (PermitRootLogin no), exigir chave em vez de senha (PasswordAuthentication no — só depois de confirmar que a chave funciona!), trocar a porta padrão se possível (Port 2222 reduz drasticamente os bots), instalar fail2ban para banir IPs que erram senha repetidas vezes, e manter o sistema atualizado via unattended-upgrades. Com isso, um Debian VPS na internet aguenta meses sem incidentes.`,

      `No dia a dia, SSH não serve só para abrir shell remoto. SCP copia arquivos ('scp arquivo.txt user@servidor:/destino/'), SFTP é como FTP mas seguro, e os túneis SSH permitem expor um serviço local de forma criptografada — útil para acessar um banco de dados que só escuta em localhost do servidor sem precisar abrir a porta no firewall. ProxyJump (-J) deixa pular por bastion: você acessa servidor interno passando por um servidor de borda em uma única linha de comando.`,

      `Ao final deste capítulo você vai conseguir configurar um servidor SSH endurecido em qualquer Debian, gerar par de chaves do jeito moderno, instalar a chave pública sem perder acesso, fazer cópias remotas e abrir túneis. Esse é o conjunto de habilidades que transforma "consigo ligar minha VPS" em "administro VPS com confiança e segurança".`,
    ],
    commands: [
      {
        command: "sudo apt install openssh-server",
        description: "Instala o servidor SSH no Debian (já vem na maioria dos cloud images).",
        example: "sudo apt install -y openssh-server",
      },
      {
        command: "sudo systemctl status ssh",
        description: "Verifica se o daemon está rodando e em que porta escuta.",
        example: "sudo systemctl status ssh",
        output: "Active: active (running) since Tue 2025-03-04 10:00:00 UTC",
      },
      {
        command: "ssh user@host",
        description: "Abre sessão remota interativa.",
        example: "ssh wallyson@192.168.1.50",
        flags: [
          { flag: "-p PORTA", description: "Conecta em porta diferente de 22" },
          { flag: "-i CHAVE", description: "Usa chave privada específica" },
          { flag: "-v", description: "Verbose, ótimo para debug" },
          { flag: "-J BASTION", description: "ProxyJump por bastion" },
        ],
      },
      {
        command: "ssh-keygen",
        description: "Gera par de chaves SSH.",
        example: "ssh-keygen -t ed25519 -C 'wallyson@laptop'",
        output:
          "Generating public/private ed25519 key pair.\nYour identification has been saved in /home/wallyson/.ssh/id_ed25519",
        flags: [
          { flag: "-t ed25519", description: "Tipo Ed25519 (recomendado)" },
          { flag: "-t rsa -b 4096", description: "RSA com 4096 bits, fallback" },
          { flag: "-C 'comentario'", description: "Comentário guardado na chave" },
        ],
      },
      {
        command: "ssh-copy-id",
        description: "Instala sua chave pública no authorized_keys do servidor.",
        example: "ssh-copy-id -i ~/.ssh/id_ed25519.pub wallyson@servidor",
      },
      {
        command: "scp",
        description: "Copia arquivos via SSH (origem destino).",
        example: "scp ./relatorio.pdf wallyson@servidor:/home/wallyson/",
        flags: [
          { flag: "-r", description: "Recursivo (pastas)" },
          { flag: "-P PORTA", description: "Porta SSH alternativa (P maiúsculo!)" },
        ],
      },
      {
        command: "sftp",
        description: "Sessão interativa para transferir arquivos.",
        example: "sftp wallyson@servidor",
      },
      {
        command: "ssh -L LOCAL:host:REMOTE",
        description: "Túnel local: porta no seu PC redireciona para serviço remoto.",
        example: "ssh -L 5433:localhost:5432 user@servidor",
      },
      {
        command: "ssh -R REMOTE:host:LOCAL",
        description: "Túnel reverso: expõe um serviço local através do servidor.",
        example: "ssh -R 8080:localhost:3000 user@servidor",
      },
      {
        command: "sudo systemctl reload ssh",
        description: "Recarrega o sshd após editar /etc/ssh/sshd_config.",
        example: "sudo systemctl reload ssh",
      },
      {
        command: "sudo sshd -t",
        description: "Testa a sintaxe do sshd_config sem aplicar.",
        example: "sudo sshd -t",
      },
      {
        command: "sudo journalctl -u ssh -f",
        description: "Acompanha o log do daemon em tempo real (essencial para debug).",
        example: "sudo journalctl -u ssh -n 100 -f",
      },
      {
        command: "sudo apt install fail2ban",
        description: "Instala o fail2ban para banir IPs com tentativas falhas.",
        example: "sudo apt install -y fail2ban && sudo systemctl enable --now fail2ban",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Mantenha duas sessões abertas ao endurecer",
        content:
          "Antes de mudar PermitRootLogin, PasswordAuthentication ou Port, abra uma SEGUNDA sessão SSH e teste a nova configuração nela. Se quebrou, você ainda tem a primeira sessão para corrigir. Aplicar e fechar tudo é receita para perder acesso à VPS.",
      },
      {
        type: "warning",
        title: "Permissões em ~/.ssh são exigidas",
        content:
          "~/.ssh deve ser 700 e ~/.ssh/authorized_keys 600. Se permissões estiverem mais abertas, o sshd recusa silenciosamente a chave e cai para senha. Use 'chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys'.",
      },
      {
        type: "danger",
        title: "Nunca compartilhe a chave privada",
        content:
          "id_ed25519 (sem .pub) é equivalente à sua identidade. Se vazar, qualquer pessoa entra em todos os servidores onde você instalou a pública. Se desconfiar de vazamento, gere novo par imediatamente e remova a antiga de todos os authorized_keys.",
      },
      {
        type: "success",
        title: "Use ~/.ssh/config para apelidos",
        content:
          "Um arquivo com 'Host meuservidor\\n  HostName 1.2.3.4\\n  User wallyson\\n  Port 2222\\n  IdentityFile ~/.ssh/id_ed25519' deixa você rodar só 'ssh meuservidor'. Para múltiplos servidores, é divisor de águas.",
      },
    ],
    practiceLabs: [
      {
        title: "Acesso por chave + hardening básico no SSH",
        goal:
          "Trocar autenticação por senha por chave Ed25519 e desabilitar login de root, sem perder acesso.",
        steps: [
          "Na sua máquina cliente, gere o par com 'ssh-keygen -t ed25519 -C ...'.",
          "Copie a chave pública para o servidor com 'ssh-copy-id user@servidor'.",
          "Teste: 'ssh user@servidor' deve entrar SEM pedir senha.",
          "Edite /etc/ssh/sshd_config no servidor: 'PermitRootLogin no', 'PasswordAuthentication no'.",
          "Rode 'sudo sshd -t' para validar e 'sudo systemctl reload ssh'.",
          "Em uma SEGUNDA sessão, confirme que ainda entra. Só então feche a primeira.",
        ],
        command: `ssh-keygen -t ed25519 -C "$(whoami)@$(hostname)"
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@servidor

ssh user@servidor "
  sudo sed -i 's/^#*PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
  sudo sed -i 's/^#*PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
  sudo sshd -t && sudo systemctl reload ssh
"`,
        expected:
          "Próximas conexões só funcionam via chave. Tentativa de login por senha resulta em 'Permission denied (publickey)'.",
        verify:
          "'ssh -o PubkeyAuthentication=no user@servidor' deve falhar imediatamente.",
      },
    ],
    exercises: [
      {
        id: 1,
        question:
          "Por que é melhor usar chave pública do que senha para autenticar no SSH?",
        hint: "Pense em ataques de força bruta e segurança matemática.",
        answer:
          "Senhas são vulneráveis a brute-force, dicionário e vazamentos. Chaves Ed25519 ou RSA-4096 são matematicamente inviáveis de quebrar com força bruta. Além disso, a chave privada nunca trafega na rede — só uma prova matemática derivada dela. Combinado com PasswordAuthentication no, fecha-se a porta para a maior fonte de invasão automática.",
      },
      {
        id: 2,
        question:
          "Você tentou conectar com chave e recebeu 'Permission denied (publickey)' mesmo a chave estando em authorized_keys. Quais checagens fazer?",
        hint: "Permissões e o nome do arquivo importam.",
        answer:
          "1) Permissões: 'chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys' no servidor. 2) Dono dos arquivos: precisa ser o usuário, não root. 3) ~ deve ser do próprio usuário, não 777. 4) Confira com 'ssh -v user@servidor' qual chave o cliente está tentando usar. 5) Veja /var/log/auth.log ou 'journalctl -u ssh' no servidor para a mensagem exata do sshd.",
      },
      {
        id: 3,
        question:
          "Como gerar uma chave Ed25519 e copiar para um servidor sem digitar a senha mil vezes?",
        hint: "Existem dois comandos clássicos do OpenSSH para isso.",
        answer:
          "'ssh-keygen -t ed25519 -C \"meu-comentario\"' gera o par em ~/.ssh/id_ed25519 e id_ed25519.pub. 'ssh-copy-id user@servidor' instala automaticamente a pública em ~/.ssh/authorized_keys do servidor (pede a senha uma única vez). A partir daí, ssh entra direto.",
      },
      {
        id: 4,
        question:
          "Para que serve um túnel SSH com '-L 5433:localhost:5432'?",
        hint: "Pense em redirecionar uma porta local para um serviço remoto.",
        answer:
          "Cria um túnel: tudo que chega na sua porta 5433 é encaminhado pelo SSH até o servidor e entregue em localhost:5432 de lá (PostgreSQL). Útil para acessar serviços que escutam só em localhost no servidor sem abrir a porta na rede. O tráfego inteiro passa criptografado dentro do SSH.",
      },
      {
        id: 5,
        question:
          "Você editou sshd_config e quer aplicar sem correr risco. Qual sequência mínima?",
        hint: "Existe um teste de sintaxe e duas sessões abertas economizam dor de cabeça.",
        answer:
          "1) 'sudo sshd -t' — valida sintaxe do arquivo. Se der erro, corrija antes de reload. 2) 'sudo systemctl reload ssh' — aplica sem matar conexões existentes. 3) De uma SEGUNDA sessão SSH, teste a nova configuração antes de fechar a primeira. Mudanças em PermitRootLogin/PasswordAuthentication/Port podem trancar você fora.",
      },
      {
        id: 6,
        question:
          "Qual a função do fail2ban e por que ele é praticamente obrigatório em VPS pública?",
        hint: "Pense em logs de tentativas falhas.",
        answer:
          "Fail2ban monitora logs (incluindo o do sshd) e adiciona regras de firewall (iptables/nftables) banindo IPs que erram credenciais um número X de vezes em uma janela Y. Isso elimina os bots de brute-force que varrem a internet. Em VPS pública sem fail2ban, o auth.log enche de tentativas; com ele, os IPs maliciosos são bloqueados antes de virarem problema.",
      },
      {
        id: 7,
        question:
          "Como copiar uma pasta inteira do servidor remoto para sua máquina via SSH?",
        hint: "Existe uma flag de scp para recursivo, mas há alternativa melhor para grandes volumes.",
        answer:
          "'scp -r user@servidor:/var/log/myapp ./' funciona. Para volumes grandes ou sincronização incremental, 'rsync -avz user@servidor:/var/log/myapp ./' é melhor: transfere só diferenças, comprime no caminho e mostra progresso. Ambos usam SSH por baixo, então respeitam suas chaves.",
      },
    ],
    references: [
      { title: "Wiki Debian — SSH", url: "https://wiki.debian.org/SSH" },
      { title: "OpenSSH man pages", url: "https://man.openbsd.org/sshd_config" },
      { title: "Mozilla OpenSSH Guidelines", url: "https://infosec.mozilla.org/guidelines/openssh" },
      { title: "Fail2ban", url: "https://www.fail2ban.org/" },
      { title: "SSH Hardening Guide", url: "https://www.ssh-audit.com/hardening_guides.html" },
    ],
  },

  {
    id: "servidor-minimo-hardening",
    title: "Servidor Mínimo e Hardening Básico",
    icon: "🛡️",
    category: "Servidores",
    description:
      "Monte um Debian de servidor enxuto e aplique medidas de segurança que reduzem 90% dos riscos comuns.",
    objectives: [
      "Distinguir 'Debian de desktop' de 'Debian de servidor' e fazer escolhas conscientes na instalação",
      "Aplicar atualizações automáticas de segurança via unattended-upgrades",
      "Configurar firewall ufw com política deny-by-default",
      "Adotar boas práticas de usuário, sudoers, SSH e fail2ban como combo de hardening básico",
      "Habilitar logging mínimo e monitoramento de logins",
      "Ter um checklist reproduzível para qualquer VPS nova",
    ],
    content: [
      `Servidor não é desktop. Em um desktop você quer interface gráfica, drivers para tudo, codecs, navegador. Em servidor você quer o oposto: menos software, menos serviços rodando, menos portas abertas, menos coisas que podem ser invadidas. A regra de ouro do hardening é "minimize a superfície de ataque": cada pacote a menos é um vetor a menos. Por isso, ao instalar Debian em servidor, escolhe-se o perfil mínimo (sem ambiente gráfico) e adiciona-se só o que é necessário para a função.`,

      `O 'porquê' disso vai além de paranoia. Servidor exposto na internet está sob varredura constante: bots tentam credenciais SSH, exploram CVEs em serviços conhecidos, vasculham web servers em busca de painéis administrativos. Quanto menos coisas sua máquina expõe, menos surfície para esses bots morderem. Um Debian instalado com perfil "Standard system utilities" + SSH server, com unattended-upgrades, ufw e fail2ban, já fecha 90% das portas que mais sofrem ataque automatizado.`,

      `Jargões importantes: hardening é o conjunto de práticas para "endurecer" um sistema, reduzir vulnerabilidades. CVE (Common Vulnerabilities and Exposures) é o catálogo público de falhas conhecidas; cada uma tem um número (CVE-2024-1234). Patch Tuesday é o ritmo de atualizações de segurança — no Debian, security updates saem rápido via 'security.debian.org'. Princípio do menor privilégio: cada usuário e processo deve ter exatamente o mínimo de permissões necessárias. Defesa em profundidade: várias camadas (firewall + SSH endurecido + fail2ban + atualizações) — se uma falhar, a próxima ainda protege.`,

      `O passo a passo conceitual de um servidor recém-criado e o que fazer nas primeiras horas: 1) Atualize tudo ('apt update && apt full-upgrade'). 2) Crie usuário não-root e adicione ao sudo. 3) Copie sua chave SSH e desabilite senha + login de root no sshd. 4) Instale e habilite ufw com política padrão deny e libere só SSH (e 80/443 se for web). 5) Instale unattended-upgrades para receber patches de segurança automaticamente. 6) Instale fail2ban. 7) Configure timezone e NTP. 8) Reinicie e confira que tudo voltou.`,

      `Confusão comum número um: deixar o root sem senha "porque ninguém vai usar". Errado em duas frentes — primeiro, sshd recusa root sem senha quando PermitRootLogin permite, mas se alguém escalar via outro caminho, root sem senha facilita pivoting. Segundo, ferramentas que pedem senha de root para sudo travam. O correto é ter senha forte para root (anotada num gerenciador) e desabilitar login direto de root via SSH. Use sudo no dia a dia.`,

      `Confusão dois: instalar GUI "só para ajudar". Cada pacote gráfico traz dezenas de dependências, abre portas (X server, Avahi, CUPS) e usa memória que poderia rodar a aplicação. Servidor de produção fica enxuto. Se realmente precisa de algo visual em momento pontual, abra com X11 forwarding via SSH ('ssh -X') ou via VNC tunelizado. Não deixe instalado permanentemente.`,

      `Confusão três: liberar firewall "para tudo funcionar enquanto debug". Política padrão do ufw deve ser 'deny incoming, allow outgoing'. Libere especificamente o que precisa: SSH, HTTP, HTTPS. Cada porta extra é um risco. Quando precisa de algo temporário, libere especificamente e LEMBRE de fechar depois. Bots aproveitam janelas curtas — você esquece a porta aberta por um dia, e na manhã seguinte tem cripto-miner instalado.`,

      `Logging e monitoramento mínimo: o journalctl agrega tudo no Debian moderno. Olhar 'sudo journalctl -p err -b' (erros desde o boot) deve fazer parte da rotina semanal. 'sudo lastb' mostra tentativas de login que falharam — se aparecer milhares, fail2ban precisa de mais carinho. 'sudo last' mostra logins bem-sucedidos. Para servidores mais sérios, ferramentas como Logwatch enviam um resumo diário por e-mail. Monitorar é a única forma de descobrir invasão antes do invasor terminar o trabalho.`,

      `No dia a dia, esse hardening básico permite dormir tranquilo com VPS na internet. Não substitui auditoria séria nem proteção de dados sensíveis (criptografia em repouso, segredos em vault, MFA), mas elimina a quase totalidade dos ataques oportunistas. Ao final deste capítulo você vai ter um checklist concreto para aplicar em qualquer Debian novo, com comandos copiáveis e ordem certa para não se trancar fora do servidor durante o processo.`,
    ],
    commands: [
      {
        command: "sudo apt update && sudo apt full-upgrade -y",
        description: "Atualiza lista de pacotes e aplica todas as atualizações disponíveis.",
        example: "sudo apt update && sudo apt full-upgrade -y",
      },
      {
        command: "sudo adduser",
        description: "Cria usuário não-root com diretório home e shell.",
        example: "sudo adduser wallyson",
        output: "Adding user `wallyson' ...\nAdding new group `wallyson' (1001)",
      },
      {
        command: "sudo usermod -aG sudo",
        description: "Adiciona o usuário ao grupo sudo (privilégios de admin via sudo).",
        example: "sudo usermod -aG sudo wallyson",
      },
      {
        command: "sudo apt install ufw",
        description: "Instala o frontend simples para iptables.",
        example: "sudo apt install -y ufw",
      },
      {
        command: "sudo ufw default",
        description: "Define política padrão (deny ou allow) para incoming/outgoing.",
        example: "sudo ufw default deny incoming && sudo ufw default allow outgoing",
      },
      {
        command: "sudo ufw allow",
        description: "Libera portas/serviços específicos.",
        example: "sudo ufw allow OpenSSH",
        flags: [
          { flag: "OpenSSH", description: "Perfil pré-definido (porta 22)" },
          { flag: "80/tcp", description: "Porta numérica e protocolo" },
          { flag: "from IP to any port 22", description: "Libera só para IP específico" },
        ],
      },
      {
        command: "sudo ufw enable",
        description: "Ativa o firewall (cuidado: aplica regras de imediato).",
        example: "sudo ufw enable",
      },
      {
        command: "sudo ufw status verbose",
        description: "Lista regras ativas e política padrão.",
        example: "sudo ufw status verbose",
        output:
          "Status: active\nDefault: deny (incoming), allow (outgoing)\n22/tcp                     ALLOW IN    Anywhere",
      },
      {
        command: "sudo apt install unattended-upgrades",
        description: "Instala o pacote para atualizações automáticas de segurança.",
        example: "sudo apt install -y unattended-upgrades apt-listchanges",
      },
      {
        command: "sudo dpkg-reconfigure unattended-upgrades",
        description: "Wizard que ativa as atualizações automáticas (responda 'Yes').",
        example: "sudo dpkg-reconfigure --priority=low unattended-upgrades",
      },
      {
        command: "sudo apt install fail2ban",
        description: "Instala fail2ban — bane IPs que abusam de credenciais.",
        example: "sudo apt install -y fail2ban && sudo systemctl enable --now fail2ban",
      },
      {
        command: "sudo fail2ban-client status sshd",
        description: "Mostra IPs banidos atualmente para o serviço sshd.",
        example: "sudo fail2ban-client status sshd",
      },
      {
        command: "sudo journalctl -p err -b",
        description: "Mostra todas as mensagens de prioridade error desde o último boot.",
        example: "sudo journalctl -p err -b",
      },
      {
        command: "sudo last",
        description: "Lista logins bem-sucedidos.",
        example: "sudo last -n 20",
      },
      {
        command: "sudo lastb",
        description: "Lista tentativas de login falhas (útil para detectar ataques).",
        example: "sudo lastb -n 20",
      },
      {
        command: "sudo timedatectl set-timezone",
        description: "Define o fuso horário do servidor (importante para logs corretos).",
        example: "sudo timedatectl set-timezone America/Sao_Paulo",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Crie um usuário não-root antes de qualquer outra coisa",
        content:
          "VPS recém-criada quase sempre te dá acesso direto como root. O primeiro passo é 'adduser nome', 'usermod -aG sudo nome', copiar a chave SSH para esse usuário e SÓ DEPOIS desabilitar root via SSH. Pular essa ordem tranca você fora.",
      },
      {
        type: "warning",
        title: "ufw enable pode te derrubar",
        content:
          "Se você ativar ufw com política deny SEM antes liberar SSH, perde acesso à VPS. Sempre rode 'sudo ufw allow OpenSSH' ANTES de 'sudo ufw enable'. Confirme com 'sudo ufw status' que a regra está lá.",
      },
      {
        type: "danger",
        title: "Servidor sem unattended-upgrades é bomba-relógio",
        content:
          "Patches de segurança críticos saem todo mês. Sem atualizações automáticas, sua VPS roda versões vulneráveis até alguém lembrar de 'apt upgrade'. Em meses, isso vira invasão garantida. Ative já no primeiro dia.",
      },
      {
        type: "success",
        title: "Documente seu checklist em um script",
        content:
          "Transforme os passos de hardening em um shell script versionado. Toda VPS nova: clonar o repo, rodar setup.sh, máquina sai pronta. Reduz erro humano e garante que ninguém esquece um passo importante.",
      },
    ],
    practiceLabs: [
      {
        title: "Hardening completo em uma VPS Debian zerada",
        goal:
          "Aplicar o checklist mínimo de segurança em uma VPS recém-provisionada, em ordem segura.",
        steps: [
          "Conecte como root e atualize o sistema.",
          "Crie seu usuário, adicione ao sudo, copie sua chave SSH para ele.",
          "Saia, reconecte como o novo usuário e teste sudo.",
          "Edite sshd_config: PermitRootLogin no, PasswordAuthentication no.",
          "Recarregue o sshd em sessão paralela e confirme que tudo segue funcionando.",
          "Instale ufw, libere SSH, ative.",
          "Instale unattended-upgrades e ative com dpkg-reconfigure.",
          "Instale fail2ban e confirme com 'systemctl status fail2ban'.",
          "Defina timezone e confira 'timedatectl'.",
        ],
        command: `# Como root
apt update && apt full-upgrade -y
adduser wallyson
usermod -aG sudo wallyson
mkdir -p /home/wallyson/.ssh
cp ~/.ssh/authorized_keys /home/wallyson/.ssh/
chown -R wallyson:wallyson /home/wallyson/.ssh
chmod 700 /home/wallyson/.ssh
chmod 600 /home/wallyson/.ssh/authorized_keys

# Reconecte como wallyson e:
sudo sed -i 's/^#*PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
sudo sed -i 's/^#*PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
sudo sshd -t && sudo systemctl reload ssh

sudo apt install -y ufw fail2ban unattended-upgrades apt-listchanges
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw enable

sudo dpkg-reconfigure --priority=low unattended-upgrades
sudo systemctl enable --now fail2ban
sudo timedatectl set-timezone America/Sao_Paulo`,
        expected:
          "Servidor com SSH só por chave, root bloqueado, firewall ativo, atualizações automáticas configuradas e fail2ban rodando.",
        verify:
          "'sudo ufw status' mostra OpenSSH liberado. 'sudo systemctl is-active fail2ban' retorna 'active'. 'ssh root@servidor' falha imediatamente.",
      },
    ],
    exercises: [
      {
        id: 1,
        question:
          "Qual a primeira coisa a fazer ao receber acesso root a uma VPS nova, antes de qualquer outra configuração?",
        hint: "Pense em atualizações pendentes e usuário não-root.",
        answer:
          "Atualizar tudo ('apt update && apt full-upgrade -y'), depois criar usuário não-root e adicioná-lo ao grupo sudo. Copiar a chave SSH para esse usuário. Em seguida, sair e reentrar como ele, validar que sudo funciona, e SÓ ENTÃO desabilitar login direto de root via SSH. Essa ordem evita ficar trancado fora.",
      },
      {
        id: 2,
        question:
          "O que pode dar errado ao rodar 'sudo ufw enable' em uma VPS sem nenhuma regra prévia?",
        hint: "Pense em qual porta você está usando para estar conectado.",
        answer:
          "A política padrão de ufw é deny incoming, então enable BLOQUEIA todas as conexões novas, incluindo SSH. Sua sessão atual continua, mas se você desconectar, não consegue mais entrar. SEMPRE rode 'sudo ufw allow OpenSSH' (ou 'allow 22/tcp') ANTES do enable, e confirme com 'sudo ufw show added'.",
      },
      {
        id: 3,
        question:
          "Por que ativar unattended-upgrades é considerado obrigatório em servidor de produção?",
        hint: "Pense em vulnerabilidades públicas e tempo de exposição.",
        answer:
          "Falhas críticas (CVEs) em pacotes do Debian são publicadas e corrigidas continuamente. Sem atualizações automáticas, o servidor roda versão vulnerável até alguém lembrar manualmente. Bots varrem a internet aplicando exploits conhecidos minutos após divulgação. Unattended-upgrades aplica security updates automaticamente, fechando a janela de exposição.",
      },
      {
        id: 4,
        question:
          "Qual a diferença entre 'sudo last' e 'sudo lastb', e o que cada um indica?",
        hint: "Um mostra sucessos, outro falhas.",
        answer:
          "'sudo last' lista logins BEM-SUCEDIDOS (com origem, hora, duração) — ajuda a confirmar acessos legítimos. 'sudo lastb' lista tentativas FALHAS — útil para detectar ataques de força bruta. Centenas de entradas em lastb por dia indicam que o fail2ban está tendo trabalho ou precisa de regras mais agressivas.",
      },
      {
        id: 5,
        question:
          "Qual a vantagem de usar fail2ban junto com SSH endurecido por chave (PasswordAuthentication no)?",
        hint: "Defesa em profundidade.",
        answer:
          "Mesmo com PasswordAuthentication no (já blindado contra brute-force), bots continuam tentando — gerando log poluído e consumindo recursos. Fail2ban detecta os IPs persistentes e bane via firewall, eliminando o tráfego antes mesmo de chegar ao sshd. Defesa em profundidade: uma camada bloqueia, outra reduz ruído.",
      },
      {
        id: 6,
        question:
          "Por que servidor de produção não deve ter ambiente gráfico (GNOME, KDE) instalado?",
        hint: "Surfície de ataque e recursos.",
        answer:
          "GUI traz centenas de dependências, abre serviços (X server, Avahi, dbus extras), consome memória. Cada pacote extra é mais código com potencial de bug. Em servidor, manter o sistema mínimo (Standard system utilities + apenas o necessário) reduz risco e libera RAM/CPU para a aplicação. Visualização pontual via SSH com X11 forwarding ou VNC tunelizado resolve casos raros.",
      },
      {
        id: 7,
        question:
          "Como confirmar rapidamente que um servidor recém-configurado está com hardening básico aplicado?",
        hint: "Existem comandos de status para cada peça.",
        answer:
          "Checklist rápido: 'sudo ufw status verbose' (deny default + SSH liberado), 'sudo systemctl is-active fail2ban' (active), 'sudo systemctl is-active unattended-upgrades' (active), 'grep -E \"PermitRootLogin|PasswordAuthentication\" /etc/ssh/sshd_config' (ambos no), 'timedatectl' (timezone correto), 'apt list --upgradable' (lista vazia).",
      },
    ],
    references: [
      { title: "Debian Wiki — Hardening", url: "https://wiki.debian.org/Hardening" },
      { title: "unattended-upgrades", url: "https://wiki.debian.org/UnattendedUpgrades" },
      { title: "ufw — Uncomplicated Firewall", url: "https://wiki.debian.org/Uncomplicated%20Firewall%20%28ufw%29" },
      { title: "Fail2ban", url: "https://www.fail2ban.org/" },
      { title: "CIS Debian Linux Benchmark", url: "https://www.cisecurity.org/benchmark/debian_linux" },
    ],
  },
];
