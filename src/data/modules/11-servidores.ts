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
      "**HTTPS não é opcional em produção.** Depois do site em HTTP local, siga o capítulo tls-certbot (#23) ou, se já usa proxy, proxy-reverso (#24). Neste capítulo: virtual host limpo, nginx -t/apache2ctl configtest, e só então certificado.",
      "Ordem mental: app responde em 127.0.0.1 → proxy/vhost → certbot/TLS → headers mínimos (HSTS só quando estável).",
    ],
    commands: [
      {
        command: "curl -sI http://127.0.0.1/ 2>/dev/null | head || true",
        description:
          "HTTP local antes de caçar DNS/TLS.",
      },
      {
        command: "command -v certbot >/dev/null && certbot certificates 2>/dev/null | head || echo ver tls-certbot",
        description:
          "Ponte para o capítulo de TLS.",
      },
      {
        command: "sudo nginx -t 2>/dev/null || sudo apache2ctl configtest 2>/dev/null || true",
        description:
          "Teste de config do servidor web.",
      },

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
        output: "Syntax OK",
      },
      {
        command: "sudo nginx -t",
        description: "Equivalente do configtest no Nginx — testa o arquivo antes do reload.",
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
        output: "Congratulations, all simulated renewals succeeded",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Ver também",
        content:
          "tls-certbot e proxy-reverso na trilha de rede.",
      },
      {
        type: "warning",
        title: "HSTS cedo demais",
        content:
          "Só depois de HTTPS estável.",
      },

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
      },
      {
        command: "sudo mariadb",
        description: "Abre o cliente como root SQL via socket Unix (sem senha).",
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
      "**Rootless e Compose:** o motor clássico docker no Debian costuma ser rootful (docker.io ou repo Docker Inc). Para menos privilégio, veja podman-debian (#35). Para stack multi-serviço, compose-pratica (#36).",
      "Se ficar no Docker Engine: isole o que puder, não exponha o socket Docker em containers de app, e lembre: grupo docker ≈ root.",
    ],
    commands: [
      {
        command: "docker info 2>/dev/null | egrep -i \"rootless|server version\" | head || echo docker indisponivel",
        description:
          "Responde duas coisas de uma vez: qual versão do servidor está rodando e se o modo rootless está ativo. No modo padrão o daemon é root, e quem entra no grupo `docker` ganha, na prática, poder de root.",
      },
      {
        command: "docker compose version 2>/dev/null || docker-compose version 2>/dev/null || echo sem compose",
        description:
          "Descobre qual compose você tem: o plugin moderno (`docker compose`, do pacote `docker-compose-plugin`) ou o binário antigo com hífen. O arquivo YAML é quase o mesmo, mas os comandos e o suporte não são.",
      },
      {
        command: "podman version 2>/dev/null | head -n 3 || echo ver podman-debian",
        description:
          "Verifica se o Podman está disponível. Ele roda os mesmos contêineres sem daemon e sem root por padrão, o que em servidor pequeno costuma ser a escolha mais segura; o capítulo dele aprofunda a comparação.",
      },

      {
        command: "docker version",
        description: "Mostra as versões do cliente e do daemon Docker — primeiro comando após instalar.",
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
        description: "Gerencia as redes virtuais. O detalhe que economiza horas: contêineres numa rede criada por você se enxergam pelo nome do serviço, enquanto na rede `bridge` padrão essa resolução por nome não existe.",
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
      },
    ],
    tips: [
      {
        type: "warning",
        title: "grupo docker",
        content:
          "Membro do grupo docker ≈ root no host.",
      },
      {
        type: "info",
        title: "Trilha",
        content:
          "#35 Podman e #36 Compose aprofundam.",
      },

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
      "**Servidor SSH no Debian:** depois de instalar `openssh-server`, a fonte da verdade é `/etc/ssh/sshd_config` + `sshd_config.d/*.conf`. Desligue senha quando a chave estiver testada (`PasswordAuthentication no`), restrinja usuários, e recarregue com `systemctl reload ssh` (nome da unit pode ser `ssh` ou `sshd`).",

      "Una a história com o cliente: a chave pública que o capítulo `ssh-conexao` gerou entra em `~usuario/.ssh/authorized_keys` com permissões 700/600. Console cloud antes de fechar senha/porta.",

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
        output: "Active: active (running) since Tue 2025-03-04 10:00:00 UTC",
      },
      {
        command: "ssh user@host",
        description: "Abre a sessão remota. Na primeira conexão o cliente mostra a impressão digital do servidor e pede confirmação: compare com a que você viu no console, porque é esse aceite que protege contra alguém no meio do caminho.",
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
        description: "Gera o par de chaves no cliente. Envie a pública com `ssh-copy-id` e, só depois de testar o login por chave, desligue a autenticação por senha no servidor — é o ajuste que mais reduz ruído de ataque.",
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
        description: "Transfere arquivos pelo mesmo canal do SSH, em sessão interativa com `put`, `get` e `ls`. Para cópia pontual dentro de script, `scp` ou `rsync -e ssh` costumam ser mais práticos.",
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
      },
      {
        command: "sudo sshd -t",
        description: "Testa a sintaxe do sshd_config sem aplicar.",
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
      {
        command: "sudo sshd -T 2>/dev/null | egrep 'passwordauthentication|permitrootlogin|pubkeyauthentication|port ' | head",
        description:
          "Config efetiva do daemon (não só o arquivo).",
      },
      {
        command: "ls /etc/ssh/sshd_config.d 2>/dev/null; systemctl is-active ssh sshd 2>/dev/null",
        description:
          "Drop-ins e nome da unit ativa.",
      },
      {
        command: "sudo ss -lntp | grep -E ':22|:2222' || true",
        description:
          "Confirma que o SSH está mesmo escutando, em qual porta e em qual endereço. Ver `127.0.0.1:22` no lugar de `0.0.0.0:22` explica por que ninguém de fora conecta, mesmo com o firewall liberado.",
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
      {
        type: "danger",
        title: "Fechar senha sem chave testada",
        content:
          "Garanta outra sessão ou console.",
      },
      {
        type: "info",
        title: "reload > restart",
        content:
          "reload ssh aplica muita coisa sem derrubar todas as sessões.",
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

      `Logging e monitoramento mínimo: o journalctl agrega tudo no Debian moderno. Olhar 'sudo journalctl -p err -b' (erros desde o boot) deve fazer parte da rotina semanal. 'sudo lastb' (ou wtmpdb lastb no Debian novo) mostra tentativas de login que falharam — se aparecer milhares, fail2ban precisa de mais carinho. 'sudo last' mostra logins bem-sucedidos. Para servidores mais sérios, ferramentas como Logwatch enviam um resumo diário por e-mail. Monitorar é a única forma de descobrir invasão antes do invasor terminar o trabalho.`,

      `No dia a dia, esse hardening básico permite dormir tranquilo com VPS na internet. Não substitui auditoria séria nem proteção de dados sensíveis (criptografia em repouso, segredos em vault, MFA), mas elimina a quase totalidade dos ataques oportunistas. Ao final deste capítulo você vai ter um checklist concreto para aplicar em qualquer Debian novo, com comandos copiáveis e ordem certa para não se trancar fora do servidor durante o processo.`,
    ],
    commands: [
      {
        command: "sudo apt update && sudo apt full-upgrade -y",
        description: "Atualiza lista de pacotes e aplica todas as atualizações disponíveis.",
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
        description: "Abre uma porta ou um perfil de serviço. Prefira o nome (`ufw allow OpenSSH`) ao número: fica legível no `ufw status` e não quebra se a porta mudar. Libere o SSH antes de ativar o firewall, nunca depois.",
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
      },
      {
        command: "sudo ufw status verbose",
        description: "Lista regras ativas e política padrão.",
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
      },
      {
        command: "sudo journalctl -p err -b",
        description: "Mostra todas as mensagens de prioridade error desde o último boot.",
      },
      {
        command: "sudo last",
        description: "Lista os logins bem-sucedidos, com origem e duração, lendo o `/var/log/wtmp`. Complementa o fail2ban: lá você vê quem tentou entrar, aqui você vê quem conseguiu.",
        example: "sudo last -n 20",
      },
      {
        command: "sudo lastb 2>/dev/null || sudo wtmpdb lastb 2>/dev/null || true",
        description: "Lista tentativas de login falhas (útil para detectar ataques).",
        example: "sudo lastb -n 20 2>/dev/null || sudo wtmpdb lastb 2>/dev/null | head -n 20",
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
          "Qual a diferença entre 'sudo last' e 'sudo lastb' (ou wtmpdb lastb no Debian novo), e o que cada um indica?",
        hint: "Um mostra sucessos, outro falhas.",
        answer:
          "'sudo last' lista logins BEM-SUCEDIDOS (com origem, hora, duração) — ajuda a confirmar acessos legítimos. 'sudo lastb' (ou wtmpdb lastb no Debian novo) lista tentativas FALHAS — útil para detectar ataques de força bruta. Centenas de entradas em lastb por dia indicam que o fail2ban está tendo trabalho ou precisa de regras mais agressivas.",
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
  {
    id: "podman-debian",
    title: "Podman rootless no Debian — alternativa ao Docker",
    icon: "🦭",
    category: "Servidores",
    description:
      "Suba contêineres com Podman no Debian em modo rootless: diferenças para Docker, imagens, volumes e o que não copiar cego de tutoriais moby.",
    objectives: [
      "Instalar Podman no Debian e checar rootless",
      "Rodar container efêmero e um com nome",
      "Mapear porta e volume com a sintaxe podman",
      "Explicar diferença daemonless vs dockerd",
      "Usar podman ps/images/logs no dia a dia",
      "Saber limites de rootless (portas baixas, cgroup)",
    ],
    content: [
      "**Podman** fala a língua de contêineres OCI sem exigir um daemon root eternamente ligado. No Debian você instala o pacote `podman` e, em muitos hosts, já roda **rootless** — contêiner no seu UID, menos superfície se a carga não precisa de privilegiado. Não é anti-Docker por religião: é outra ferramenta com trade-offs claros.",

      "Jargões. **Rootless**: engine e containers sem root. **Daemonless**: cada comando podman é o processo (há socket opcional). **Image** / **container** iguais em ideia ao Docker. **quadlet**/systemd gera units a partir de arquivos — avançado, mas o destino natural em servidor Debian.",

      "Fluxo: `sudo apt install podman` → `podman info` (confira rootless) → `podman run --rm -it debian:bookworm bash` → `podman run -d --name web -p 8080:80` imagem leve → `podman logs` / `podman stop`. Volumes: `-v $PWD/data:/data:Z` (note **:Z** em SELinux; em AppArmor Debian costuma ser mais simples, mas não invente :Z sem entender).",

      "Armadilhas. Assumir que todo `docker-compose.yml` cola sem `podman compose`/podman-docker. Porta 80 rootless pode falhar (use 8080+ ou cap). Misturar sudo podman e podman usuário criando dois mundos de imagens. Puxar imagem latest sem tag em produção.",

      "Quando NÃO: cluster k8s de verdade (use ferramenta de cluster); workload que exige kernel modules esquisitos só testados com Docker Engine vendor. Quando SIM: lab, CI local, serviços single-host, migrar hábito Docker com menos root.",

      "Ao terminar você instala Podman, roda rootless, publica porta alta e não trata 'docker' e 'podman' como binários idênticos em todo detalhe.",

    ],
    commands: [
      {
        command: "sudo apt install -y podman",
        description:
          "Instala o Podman do repositório Debian. Diferente do Docker não existe daemon central: cada container roda como processo do seu próprio usuário, então não há grupo privilegiado equivalente ao `docker` para entrar.",
      },
      {
        command: "podman version",
        description:
          "Confirma a versão do cliente e da API, que define quais recursos esperar. Boa parte da documentação na internet é de versão diferente, e a divergência aparece justo nas opções de rede e de compose.",
      },
      {
        command: "podman info --format '{{.Host.Security.Rootless}}' 2>/dev/null || podman info | head -n 40",
        description:
          "Responde à pergunta que define todo o resto: você está rootless? `true` significa que o container não tem root real no host — o ganho de segurança principal frente ao Docker com daemon como root.",
      },
      {
        command: "podman run --rm debian:bookworm-slim cat /etc/os-release | head",
        description:
          "Baixa a imagem oficial Debian slim, mostra qual release está dentro dela e descarta o container ao sair (`--rm`). Serve de teste de fumaça: se isso funciona, registry, rede e armazenamento estão ok.",
      },
      {
        command: "podman images",
        description:
          "Lista as imagens baixadas e o espaço que ocupam. Em rootless elas ficam em `~/.local/share/containers`, dentro da sua home — por isso a home enche e o `df` do `/var` não acusa nada.",
      },
      {
        command: "podman ps -a",
        description:
          "Lista containers, inclusive os que já morreram. Sem o `-a` você não vê justamente o container que caiu e cujo log e código de saída você precisa investigar.",
      },
      {
        command: "podman run -d --name hello-pod -p 8080:80 docker.io/library/nginx:alpine",
        description:
          "Nginx de lab em porta alta.",
      },
      {
        command: "podman logs --tail 20 hello-pod",
        description:
          "Últimas 20 linhas do que o container escreveu na saída padrão. Em rootless o log pertence ao seu usuário, então investigar não exige sudo.",
      },
      {
        command: "podman stop hello-pod && podman rm hello-pod",
        description:
          "Para o container com SIGTERM, dando chance de encerrar limpo, e depois apaga o registro dele. Sem o `rm` o nome continua ocupado e o próximo `run` falha com conflito de nome.",
      },
      {
        command: "man podman",
        description:
          "Manual raiz, com a lista dos subcomandos. Cada subcomando tem página própria (`man podman-run`), e é lá que estão as opções de rede, volume e usuário.",
      },
      {
        command: "podman volume ls; mkdir -p $HOME/podman-lab",
        description:
          "Prepara dir de volume bind de lab.",
      },
      {
        command: "podman run --rm -v $HOME/podman-lab:/data:rw debian:bookworm-slim touch /data/ping.txt",
        description:
          "Volume bind simples (crie o dir antes).",
      },
      {
        command: "id; grep $USER /etc/subuid /etc/subgid 2>/dev/null | head",
        description:
          "Mostra seu UID e a faixa de UIDs delegada ao seu usuário. É essa faixa que o rootless usa para mapear o root de dentro do container em um usuário sem poder no host; sem faixa atribuída, o container simplesmente não sobe.",
      },
    ],
    tips: [
      {
        type: "success",
        title: "Porta alta no rootless",
        content:
          "8080/8443 evitam CAP_NET_BIND_SERVICE.",
      },
      {
        type: "warning",
        title: "sudo podman vs podman",
        content:
          "Imagens e containers não são o mesmo armazenamento.",
      },
      {
        type: "info",
        title: "Compatibilidade",
        content:
          "Muitos flags batem com Docker; leia o man no divergente.",
      },
      {
        type: "danger",
        title: "--privileged",
        content:
          "Anula boa parte do ganho de isolamento — só com motivo.",
      },
    ],
    practiceLabs: [
      {
        title: "Nginx rootless em 8080",
        goal: "Subir nginx, curl localhost:8080, logs, remover tudo.",
        steps: [
          "podman run -d --name hello-pod -p 8080:80 nginx:alpine",
          "curl -sI http://127.0.0.1:8080 | head",
          "podman logs hello-pod | tail",
          "podman rm -f hello-pod",
        ],
        command: "podman rm -f hello-pod 2>/dev/null; podman run -d --name hello-pod -p 8080:80 docker.io/library/nginx:alpine >/dev/null && curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:8080 && podman rm -f hello-pod >/dev/null",
        verify:
          "HTTP 200 (ou 301) na resposta e container removido ao final.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Podman precisa de dockerd?",
        answer:
          "Não — modelo daemonless (com opcionais).",
      },
      {
        id: 2,
        question: "O que é rootless?",
        answer:
          "Rodar engine/containers sem ser root.",
      },
      {
        id: 3,
        question: "Por que porta 80 falha às vezes no rootless?",
        answer:
          "Bind em porta privilegiada (<1024) exige capabilities.",
      },
      {
        id: 4,
        question: "Comando para listar containers?",
        answer:
          "podman ps -a",
      },
      {
        id: 5,
        question: "Risco de misturar sudo podman e podman user?",
        answer:
          "Dois stores separados — confusão de imagens/containers.",
      },
      {
        id: 6,
        question: "Onde ver logs?",
        answer:
          "podman logs NOME",
      },
      {
        id: 7,
        question: "subuid/subgid servem para quê?",
        answer:
          "Mapear UIDs do user namespace no rootless.",
      },
      {
        id: 8,
        question: "Podman substitui Kubernetes?",
        answer:
          "Não — é runtime/local; orquestração é outra camada.",
      },
    ],
    references: [
      { title: "Podman docs", url: "https://docs.podman.io/" },
      { title: "Debian package podman", url: "https://packages.debian.org/podman" },
      { title: "man podman", url: "https://manpages.debian.org/podman" },
    ],
  },
  {
    id: "compose-pratica",
    title: "Compose na prática — stack web+db",
    icon: "🧩",
    category: "Servidores",
    description:
      "Monte um compose mínimo (web + banco) no Debian com Podman ou Docker Compose: serviços, rede interna, volumes e variáveis sem teatro.",
    objectives: [
      "Descrever um arquivo compose de dois serviços",
      "Subir e derrubar stack com um comando",
      "Persistir dados de DB em volume nomeado",
      "Passar env sem commitar senha",
      "Inspecionar rede interna entre serviços",
      "Saber quando compose basta vs orquestrador",
    ],
    content: [
      "Um container sozinho ensina. **Dois** (app + Postgres/MySQL) ensinam rede, ordem de boot e volume. **Compose** (Docker Compose v2 ou `podman compose`) descreve a stack em YAML: serviços, portas publicadas, env e volumes. No Debian o caminho prático é pacote `docker-compose` / plugin ou podman-compose conforme o que já existe no host — o conceito é o mesmo.",

      "Jargões. **service**: unidade no YAML. **network**: bridge do compose (DNS interno pelo nome do service). **volume**: disco persistente. **depends_on**: ordem de start (não é healthcheck completo). **.env**: arquivo local de variáveis — fora do git.",

      "Esqueleto mental: serviço `db` com imagem oficial + volume + MYSQL_*/POSTGRES_*; serviço `web` com build ou imagem + `ports` + env `DATABASE_URL` apontando ao hostname `db`. `compose up -d` sobe; `ps` lista; `logs -f web`; `down` derruba (cuidado com `-v` que apaga volumes).",

      "Armadilhas. Senha no YAML commitado. Achar que depends_on espera DB ready (use healthcheck/retry). Publicar 5432 na internet sem firewall. Misturar projetos com mesmo project name e volume colidindo.",

      "Quando NÃO: multi-host, secrets enterprise, rolling update — aí é swarm/k8s/nomad. Quando SIM: lab, staging single-node, app interna.",

      "Ao terminar você lê um compose de 2 serviços, sobe/desce a stack e separa secret de repositório.",

    ],
    commands: [
      {
        command: "sudo apt install -y docker.io docker-compose 2>/dev/null || sudo apt install -y podman-compose",
        description:
          "Tenta toolchain compose (Docker ou Podman) conforme disponível.",
      },
      {
        command: "mkdir -p ~/lab-compose && printf '%s\n' 'services:' '  web:' '    image: docker.io/library/nginx:alpine' '    ports:' '      - 8088:80' '  db:' '    image: docker.io/library/postgres:16-alpine' '    environment:' '      POSTGRES_PASSWORD: labonly' '    volumes:' '      - pgdata:/var/lib/postgresql/data' 'volumes:' '  pgdata:' > ~/lab-compose/compose.yaml",
        description:
          "YAML minimo web+db de lab (senha fraca de proposito local).",
      },
      {
        command: "cd ~/lab-compose && (docker compose version || docker-compose version || podman compose version) 2>/dev/null | head",
        description:
          "Descobre qual implementação existe na máquina: o plugin atual `docker compose`, o binário antigo `docker-compose` ou `podman compose`. Os três leem quase o mesmo arquivo, mas divergem em rede e em variável de ambiente.",
      },
      {
        command: "cd ~/lab-compose && (docker compose up -d || docker-compose up -d || podman-compose up -d)",
        description:
          "Sobe a stack lendo o arquivo compose do diretório atual. O `-d` devolve o terminal; sem ele você fica preso no log e derruba tudo com um Ctrl+C distraído.",
      },
      {
        command: "cd ~/lab-compose && (docker compose ps || docker-compose ps || podman-compose ps)",
        description:
          "Estado de cada serviço da stack, com as portas publicadas. Serviço em `restarting` aqui é o sinal para ir direto ao log dele antes de mexer em qualquer outra coisa.",
      },
      {
        command: "curl -sI http://127.0.0.1:8088 | head -n 5",
        description:
          "Bate no nginx publicado e mostra só os cabeçalhos. Testar por 127.0.0.1 confirma que a porta do host chegou ao container: se falhar aqui, o problema é o mapeamento de porta, não a aplicação.",
      },
      {
        command: "cd ~/lab-compose && (docker compose logs --tail 10 db || docker-compose logs --tail=10 db || podman-compose logs db) 2>/dev/null | tail",
        description:
          "Últimas linhas do serviço de banco. Banco que sobe e cai em loop quase sempre grita aqui o motivo: volume sem permissão ou variável de senha ausente.",
      },
      {
        command: "cd ~/lab-compose && (docker compose down || docker-compose down || podman-compose down)",
        description:
          "Derruba containers (mantém volume por padrão).",
      },
      {
        command: "man docker-compose 2>/dev/null || man podman-compose 2>/dev/null || true",
        description:
          "Abre o manual se o pacote instalou um. O plugin novo se documenta por `docker compose --help`, então não estranhe a ausência de página de manual.",
      },
      {
        command: "printf '%s\n' 'POSTGRES_PASSWORD=labonly' > ~/lab-compose/.env && printf '%s\n' '.env' >> ~/lab-compose/.gitignore",
        description:
          "Hábitos: env fora do YAML commitável.",
      },
      {
        command: "cd ~/lab-compose && (docker compose config || docker-compose config || true) 2>/dev/null | head -n 40",
        description:
          "Renderiza o arquivo final, com variáveis substituídas e defaults preenchidos. Mostra o que o compose entendeu, em vez do que você acha que escreveu.",
      },
      {
        command: "ss -lnt | grep 8088 || true",
        description:
          "Confirma que a porta está escutando no host. Vazio aqui, com o container rodando, significa que você publicou a porta apenas dentro da rede do compose.",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Senha no git",
        content:
          "Use .env no .gitignore; rotacione se vazou.",
      },
      {
        type: "warning",
        title: "down -v",
        content:
          "Apaga volumes nomeados — perda de dados de lab/prod.",
      },
      {
        type: "info",
        title: "DNS interno",
        content:
          "O serviço web alcança db pelo hostname do service.",
      },
      {
        type: "success",
        title: "Healthcheck",
        content:
          "depends_on + retry no app > achar que ordem = ready.",
      },
    ],
    practiceLabs: [
      {
        title: "Sobe, curl, down",
        goal: "Stack nginx+postgres de lab responde em 8088 e depois desce.",
        steps: [
          "Criar compose.yaml em ~/lab-compose",
          "up -d",
          "curl na 8088",
          "down",
        ],
        command: "test -f ~/lab-compose/compose.yaml && curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:8088 || echo 'suba a stack antes'",
        verify:
          "Arquivo compose existe; com stack up, HTTP do nginx responde.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Para que serve um volume nomeado no DB?",
        answer:
          "Persistir dados além do ciclo de vida do container.",
      },
      {
        id: 2,
        question: "Como o web acha o postgres no compose?",
        answer:
          "DNS interno pelo nome do service (ex.: db).",
      },
      {
        id: 3,
        question: "depends_on garante DB pronto?",
        answer:
          "Não necessariamente — só ordem de start.",
      },
      {
        id: 4,
        question: "Onde guardar senha?",
        answer:
          ".env local ignorado pelo git (ou secret manager).",
      },
      {
        id: 5,
        question: "Comando típico para subir detached?",
        answer:
          "docker compose up -d (ou equivalente).",
      },
      {
        id: 6,
        question: "Risco de publicar 5432 em 0.0.0.0?",
        answer:
          "Banco exposto na rede — brute force e vazamento.",
      },
      {
        id: 7,
        question: "compose down -v faz o quê de perigoso?",
        answer:
          "Remove volumes e apaga dados.",
      },
      {
        id: 8,
        question: "Quando compose não basta?",
        answer:
          "Multi-host, rolling, políticas ricas — orquestrador.",
      },
    ],
    references: [
      { title: "Compose specification", url: "https://docs.docker.com/compose/compose-file/" },
      { title: "Podman and compose", url: "https://docs.podman.io/en/latest/markdown/podman-compose.1.html" },
      { title: "PostgreSQL Docker hub", url: "https://hub.docker.com/_/postgres" },
    ],
  },
  {
    id: "ansible-minimo",
    title: "Ansible mínimo no Debian — inventário + playbook apt/serviço",
    icon: "📜",
    category: "Servidores",
    description:
      "Automatize o básico com Ansible: inventário INI, playbook que instala pacote e garante serviço, check mode e idempotência sem torre enterprise.",
    objectives: [
      "Instalar Ansible no control node Debian",
      "Escrever inventário com um host (localhost ou lab)",
      "Playbook com apt e service modules",
      "Rodar com --check e depois apply",
      "Entender idempotência na prática",
      "Não transformar YAML em spagueti no primeiro dia",
    ],
    content: [
      "SSH manual em 15 servidores é hobby caro. **Ansible** descreve o estado desejado em YAML e empurra via SSH (agentless). Neste capítulo o mínimo útil: **inventário** + **playbook** que instala um pacote e habilita um serviço. Sem AWX, sem 40 roles no primeiro commit.",

      "Jargões. **Control node**: de onde você roda ansible. **Inventory**: lista de hosts/grupos. **Module**: apt, copy, service… **Idempotente**: rodar de novo não deveria quebrar nem reinstalar à toa. **check mode** (`--check`): dry-run parcial.",

      "Estrutura: `inventory.ini` com `[labs]` e `host ansible_host=...`; `site.yml` com hosts: labs, become: true, tasks apt + service. Teste em localhost com `ansible_connection=local` antes de apontar pra frota. `ansible-playbook -i inventory.ini site.yml`.",

      "Armadilhas. become sem sudo configurado. Python ausente no target antigo. Misturar config manual e playbook até ninguém saber a fonte da verdade. Guardar senha vault no git em texto. Rodar playbook errado no inventário de produção (separar inventories).",

      "Quando NÃO: one-off único em uma máquina (shell basta); substituição de imagem imutável já perfeita. Quando SIM: baseline de pacotes, usuários, sshd snippets, jobs repetíveis.",

      "Ao terminar você tem inventário + playbook apt/service e sabe o que é idempotência sem slide corporativo.",

    ],
    commands: [
      {
        command: "sudo apt install -y ansible",
        description:
          "Instala o Ansible na máquina que vai controlar as outras. Não existe agente no lado gerenciado: tudo roda por SSH e Python, então este é o único host que precisa de instalação.",
      },
      {
        command: "ansible --version | head -n 5",
        description:
          "Além da versão, mostra qual arquivo de configuração está em uso e de onde vêm os módulos. Comportamento inesperado quase sempre se explica por um `ansible.cfg` diferente do que você imaginava.",
      },
      {
        command: "mkdir -p ~/lab-ansible && printf '%s\n' '[local]' 'localhost ansible_connection=local' > ~/lab-ansible/inventory.ini",
        description:
          "Cria um inventário que aponta apenas para a própria máquina, com conexão local. É o jeito de treinar playbook sem risco: nada sai deste host e nenhum servidor de verdade é tocado por engano.",
      },
      {
        command: "printf '%s\n' '---' '- name: baseline lab' '  hosts: local' '  become: true' '  tasks:' '    - name: garantir curl' '      ansible.builtin.apt:' '        name: curl' '        state: present' '        update_cache: true' '    - name: garantir ssh enabled se existir' '      ansible.builtin.service:' '        name: ssh' '        state: started' '        enabled: true' '      failed_when: false' > ~/lab-ansible/site.yml",
        description:
          "Escreve um playbook mínimo com as duas tarefas mais comuns: garantir um pacote instalado e um serviço ativo. Repare no vocabulário declarativo — você descreve o estado desejado, não os comandos para chegar nele.",
      },
      {
        command: "cd ~/lab-ansible && ansible-inventory -i inventory.ini --list | head",
        description:
          "Lê seu inventário e devolve como o Ansible o interpretou. Se um host não aparece no grupo esperado, o erro está no inventário e não no playbook — economiza uma hora de depuração no lugar errado.",
      },
      {
        command: "cd ~/lab-ansible && ansible-playbook -i inventory.ini site.yml --check",
        description:
          "Modo simulação: relata o que mudaria sem aplicar. Nem todo módulo suporta bem, mas para pacote e arquivo é a rede de segurança antes de rodar em produção.",
      },
      {
        command: "cd ~/lab-ansible && ansible-playbook -i inventory.ini site.yml",
        description:
          "Aplica de verdade no lab local.",
      },
      {
        command: "cd ~/lab-ansible && ansible local -i inventory.ini -m ping",
        description:
          "O módulo `ping` não usa ICMP: ele testa a cadeia completa — conexão, login e Python do outro lado — e responde `pong`. É o teste de conectividade que realmente vale.",
      },
      {
        command: "ansible-doc apt | head -n 40",
        description:
          "Documentação do módulo direto no terminal, com opções e exemplos. Consultar aqui evita o erro clássico de copiar sintaxe de versão antiga achada em blog.",
      },
      {
        command: "man ansible-playbook",
        description:
          "Manual do executor: onde estão `--limit` para restringir hosts, `--tags`, `--diff` para ver a mudança linha a linha e `-K` para pedir a senha de sudo.",
      },
      {
        command: "cd ~/lab-ansible && ansible-playbook -i inventory.ini site.yml | tail -n 20",
        description:
          "Segunda corrida — deve mostrar ok/changed baixo (idempotência).",
      },
      {
        command: "printf '%s\n' '*.retry' > ~/lab-ansible/.gitignore",
        description:
          "Impede que os arquivos `.retry` gerados em falhas entrem no repositório. Acrescente aqui também qualquer arquivo de variáveis com segredo: playbook versionado com senha em texto puro é acidente clássico.",
      },
    ],
    tips: [
      {
        type: "success",
        title: "localhost primeiro",
        content:
          "Valida YAML antes de tocar frota.",
      },
      {
        type: "warning",
        title: "Inventários separados",
        content:
          "lab.ini vs prod.ini evitam tragédia.",
      },
      {
        type: "info",
        title: "changed=0 na 2ª run",
        content:
          "Cheirinho de idempotência.",
      },
      {
        type: "danger",
        title: "Senha no playbook",
        content:
          "Use vault ou vars fora do git.",
      },
    ],
    practiceLabs: [
      {
        title: "Playbook local duas vezes",
        goal: "Rodar site.yml duas vezes e observar segunda execução com poucos changed.",
        steps: [
          "Criar inventory + site.yml",
          "ansible-playbook --check",
          "apply",
          "apply de novo e ler o recap",
        ],
        command: "cd ~/lab-ansible && ansible-playbook -i inventory.ini site.yml 2>&1 | tail -n 15",
        verify:
          "Play recap aparece; segunda execução não deveria sair reinstalando tudo como changed eterno.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Ansible usa agente no target?",
        answer:
          "Não — SSH (ou local) agentless.",
      },
      {
        id: 2,
        question: "O que é inventário?",
        answer:
          "Lista de hosts/grupos e variáveis de conexão.",
      },
      {
        id: 3,
        question: "Module apt state=present faz o quê?",
        answer:
          "Garante pacote instalado sem reinstalar se já está.",
      },
      {
        id: 4,
        question: "--check serve para quê?",
        answer:
          "Simular mudanças (com limites).",
      },
      {
        id: 5,
        question: "Idempotência em uma frase?",
        answer:
          "Repetir a automação converge ao mesmo estado sem estragar.",
      },
      {
        id: 6,
        question: "become: true pede o quê no target?",
        answer:
          "Privilégio (sudo/root) configurado.",
      },
      {
        id: 7,
        question: "Por que separar inventory de prod?",
        answer:
          "Evitar playbook de lab em host crítico.",
      },
      {
        id: 8,
        question: "ansible-doc para quê?",
        answer:
          "Ler parâmetros dos modules offline.",
      },
    ],
    references: [
      { title: "Ansible documentation", url: "https://docs.ansible.com/" },
      { title: "Debian package ansible", url: "https://packages.debian.org/ansible" },
      { title: "Module apt", url: "https://docs.ansible.com/ansible/latest/collections/ansible/builtin/apt_module.html" },
    ],
  },
  {
    id: "cloud-init-vps",
    title: "cloud-init e Debian em VPS — first boot, users, ssh keys",
    icon: "☁️",
    category: "Servidores",
    description:
      "Entenda cloud-init no Debian de VPS: user-data, chaves SSH, hostname, growpart e como depurar first boot sem mistério.",
    objectives: [
      "Explicar o papel do cloud-init no first boot",
      "Localizar configs e logs de cloud-init",
      "Injetar usuário e ssh authorized_keys via user-data",
      "Checar status e fases (init/config/final)",
      "Evitar reexecuções destrutivas sem querer",
      "Combinar cloud-init com hardening posterior",
    ],
    content: [
      "Na VPS o disco chega genérico. **cloud-init** roda no primeiro boot (e sob regras depois) para hostname, rede, usuário, chaves SSH, resize de partição e pacotes iniciais. É a cola entre a imagem Debian da nuvem e a máquina que você SSH. Sem entender cloud-init, você luta com vendor data às cegas.",

      "Jargões. **user-data**: YAML/#cloud-config que você passa no painel. **meta-data**: instance id, hostname. **datasource**: EC2, ConfigDrive, NoCloud… **cloud-init status**: se já terminou. **clean**: reset controlado (perigoso em prod).",

      "Leitura: `/var/log/cloud-init.log` e `cloud-init-output.log`; `cloud-init status --long`. user-data típico: `users` com `ssh_authorized_keys`, `package_update`, `runcmd`. Chave no painel do provider muitas vezes já vira key em debian/ubuntu user — confira `~/.ssh/authorized_keys`.",

      "Armadilhas. Editar arquivo pela metade e rodar clean sem snapshot. Assumir que toda imagem Debian tem o mesmo datasource. Colocar senha em user-data logado em texto eterno. Esperar que cloud-init substitua Ansible para o resto da vida do host.",

      "Quando NÃO: host bare metal clássico sem datasource (use preseeding/instalador); reconfig diária (use config management). Quando SIM: first boot VPS, golden images, lab NoCloud com seed ISO.",

      "Ao terminar você lê status/logs, descreve user-data de usuário+chave e sabe que first boot ≠ configuração eterna.",

    ],
    commands: [
      {
        command: "cloud-init --version 2>/dev/null || dpkg -l cloud-init | tail -n 1",
        description:
          "Se cloud-init está instalado (imagens cloud quase sempre).",
      },
      {
        command: "cloud-init status --long 2>/dev/null || echo 'cloud-init indisponivel neste host'",
        description:
          "Fases e resultado do last run.",
      },
      {
        command: "sudo tail -n 40 /var/log/cloud-init.log 2>/dev/null || true",
        description:
          "Log principal do cloud-init, com o passo a passo dos módulos e os erros de execução. É o primeiro lugar a olhar quando a VPS subiu, mas não ficou como o seu user-data mandava.",
      },
      {
        command: "sudo tail -n 40 /var/log/cloud-init-output.log 2>/dev/null || true",
        description:
          "Traz a saída bruta do que os módulos rodaram: instalação de pacotes e cada linha do `runcmd`. Quando um comando do user-data falhou em silêncio, a mensagem real está aqui, e não no log principal.",
      },
      {
        command: "ls /etc/cloud/cloud.cfg /etc/cloud/cloud.cfg.d 2>/dev/null | head",
        description:
          "Mostra a configuração local: o arquivo que vem no pacote e os drop-ins. É aí que se define, por exemplo, se o cloud-init pode reescrever hostname e `/etc/hosts` a cada boot.",
      },
      {
        command: "ls /var/lib/cloud 2>/dev/null | head",
        description:
          "Diretório de estado: guarda o ID da instância e a marca do que já rodou uma vez. Por isso, em imagem clonada, limpar esse estado é o que faz o cloud-init tratar a máquina como nova.",
      },
      {
        command: "cat /etc/hostname; hostnamectl 2>/dev/null | head",
        description:
          "Hostname atual (muitas vezes setado no boot).",
      },
      {
        command: "sudo cloud-id 2>/dev/null || true",
        description:
          "Diz qual datasource foi detectado (`nocloud`, `hetzner`, `openstack`, `ec2`). É ele que define de onde vêm user-data e metadados; datasource errado é a causa mais comum de nada ser aplicado no primeiro boot.",
      },
      {
        command: "printf '%s\n' '#cloud-config' 'users:' '  - name: devops' '    groups: [sudo]' '    shell: /bin/bash' '    sudo: ALL=(ALL) NOPASSWD:ALL' '    ssh_authorized_keys:' '      - ssh-ed25519 AAAA...comente_sua_chave' 'package_update: true' 'packages:' '  - qemu-guest-agent' > ~/user-data-exemplo.yaml",
        description:
          "Modelo de user-data (NÃO use NOPASSWD em prod sem critério).",
      },
      {
        command: "man cloud-init 2>/dev/null || true",
        description:
          "Manual da ferramenta. Além do panorama, vale por dois subcomandos: `status --long`, que diz se a inicialização terminou, e `schema --annotate`, que valida seu user-data antes do próximo boot.",
      },
      {
        command: "grep -R 'ssh_authorized_keys\\|disable_root' /etc/cloud 2>/dev/null | head",
        description:
          "Pistas de política SSH na config cloud.",
      },
      {
        command: "systemctl status cloud-init cloud-final --no-pager 2>/dev/null | head -n 30 || true",
        description:
          "Mostra as units que executam as fases. A `cloud-final` é a última: enquanto ela não conclui, o servidor ainda está se configurando, mesmo que o SSH já aceite conexão.",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "cloud-init clean",
        content:
          "Só com snapshot — reaplicação pode recriar usuários/ssh.",
      },
      {
        type: "info",
        title: "First boot",
        content:
          "Muita magia acontece uma vez; depois é config management.",
      },
      {
        type: "danger",
        title: "Segredo em user-data",
        content:
          "Fica em disco/log do provider — prefira chave SSH.",
      },
      {
        type: "success",
        title: "Leia cloud-init-output.log",
        content:
          "Erro de apt no first boot aparece ali.",
      },
    ],
    practiceLabs: [
      {
        title: "Forense de cloud-init (somente leitura)",
        goal: "Coletar version, status, datasource e trecho de log sem clean.",
        steps: [
          "cloud-init status --long",
          "cloud-id",
          "tail nos logs",
          "Salvar resumo em ~/cloud-init-report.txt",
        ],
        command: "{ echo '=== status ==='; cloud-init status --long 2>/dev/null; echo; echo '=== id ==='; cloud-id 2>/dev/null; } | tee ~/cloud-init-report.txt",
        verify:
          "Relatório criado; se o host não tiver cloud-init, o arquivo registra a ausência — ainda assim válido como diagnóstico.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "cloud-init resolve principalmente qual momento?",
        answer:
          "First boot / bootstrap da imagem cloud.",
      },
      {
        id: 2,
        question: "O que é user-data?",
        answer:
          "Config fornecida à instância (frequente cloud-config YAML).",
      },
      {
        id: 3,
        question: "Onde olhar falha de pacote no boot?",
        answer:
          "/var/log/cloud-init-output.log e cloud-init.log.",
      },
      {
        id: 4,
        question: "Por que preferir SSH key a senha no user-data?",
        answer:
          "Menos segredo persistente e melhor higiene.",
      },
      {
        id: 5,
        question: "cloud-init substitui Ansible no long run?",
        answer:
          "Não — bootstrap ≠ drift contínuo.",
      },
      {
        id: 6,
        question: "Comando de status?",
        answer:
          "cloud-init status --long",
      },
      {
        id: 7,
        question: "Risco de clean em produção?",
        answer:
          "Reexecução de módulos pode alterar users/rede/ssh.",
      },
      {
        id: 8,
        question: "datasource é o quê?",
        answer:
          "De onde a instância lê meta/user-data (EC2, NoCloud, etc.).",
      },
    ],
    references: [
      { title: "cloud-init docs", url: "https://cloudinit.readthedocs.io/" },
      { title: "Debian cloud images", url: "https://cloud.debian.org/" },
      { title: "man cloud-init", url: "https://manpages.debian.org/cloud-init" },
    ],
  },
  {
    id: "dns-server",
    title: "DNS server local — Unbound/BIND intro",
    icon: "🧭",
    category: "Servidores",
    description:
      "Suba um resolvedor DNS local no Debian com Unbound (e noções de BIND): cache, recursão, testes com dig e o que não expor na internet.",
    objectives: [
      "Diferenciar resolvedor recursivo de autoritativo",
      "Instalar e habilitar Unbound no Debian",
      "Testar resolução com dig/resolvectl",
      "Entender listening em localhost vs rede",
      "Relacionar com DNS do cliente (resolv.conf)",
      "Conhecer BIND como alternativa autoritativa",
    ],
    content: [
      "DNS ruim parece 'internet quebrada'. Um **resolvedor local** (Unbound) na LAN ou no próprio VPS reduz latência, dá cache e um ponto único de política. **BIND** brilha mais como **autoritativo** (você publica zonas); Unbound brilha como **recursivo/validador**. Não misture os papéis sem desenho.",

      "Jargões. **Recursivo**: busca na internet em nome do cliente. **Autoritativo**: responde o que você configura na zona. **stub**: só encaminha. **DNSSEC**: validação criptográfica (Unbound costuma validar). **dig**: ferramenta de diagnóstico.",

      "Fluxo Unbound: `apt install unbound` → conf em `/etc/unbound/unbound.conf.d/` → `systemctl enable --now unbound` → `dig @127.0.0.1 debian.org` → aponte clientes ou `nameserver 127.0.0.1` com cuidado para não se auto-excluir da resolução se o serviço cair.",

      "Armadilhas. Abrir recursão aberta na 0.0.0.0/0 (vira arma de amplificação). Esquecer firewall. Trocar resolv.conf e perder apt update quando unbound falha. Copiar tutorial BIND 9 antigo com options perigosas.",

      "Quando NÃO: host único que já usa o DNS estável do provedor e você não vai operar cache. Quando SIM: lab, controle parental/LAN, validação DNSSEC, split-horizon consciente.",

      "Ao terminar você sobe Unbound em loopback, testa com dig e sabe por que recursão aberta é incidente esperando IP público.",

    ],
    commands: [
      {
        command: "sudo apt install -y unbound dnsutils",
        description:
          "Instala o Unbound, um resolvedor que valida DNSSEC por padrão no Debian, e o dnsutils, que traz o `dig` para você conseguir testar o que instalou.",
      },
      {
        command: "systemctl status unbound --no-pager | head -n 15",
        description:
          "Confere se o serviço subiu e mostra as últimas linhas de log junto. Erro de sintaxe na configuração aparece aqui como falha na inicialização, com a linha exata do arquivo.",
      },
      {
        command: "sudo systemctl enable --now unbound",
        description:
          "Liga agora e no boot, em um comando. Esquecer o `enable` é o erro que faz o resolvedor desaparecer no próximo reboot e a máquina ficar sem DNS sem motivo aparente.",
      },
      {
        command: "dig @127.0.0.1 debian.org +short",
        description:
          "Pergunta direto ao Unbound local, ignorando o resolvedor configurado no sistema. Se responder o IP, o servidor está funcionando — e isso separa problema de servidor de problema de configuração do cliente.",
      },
      {
        command: "dig @127.0.0.1 debian.org DNSKEY +dnssec | head -n 20",
        description:
          "Pede as chaves DNSSEC e olhe a flag `ad` no cabeçalho da resposta: `ad` é authenticated data, ou seja, o Unbound validou a cadeia de assinaturas. Sem `ad`, você tem cache, não validação.",
      },
      {
        command: "sudo unbound-checkconf",
        description:
          "Valida a configuração sem reiniciar nada. Rode sempre depois de editar: é a diferença entre descobrir o erro de digitação agora ou ficar sem DNS depois do restart.",
      },
      {
        command: "ls /etc/unbound/unbound.conf.d 2>/dev/null | head",
        description:
          "Diretório de drop-ins: ponha sua configuração em arquivo próprio aqui em vez de editar o `unbound.conf`, que pode ser substituído em atualização de pacote levando seus ajustes.",
      },
      {
        command: "ss -lntup | grep -E ':53\\b' || true",
        description:
          "Mostra quem está escutando na porta 53. É o comando que revela o conflito clássico: o systemd-resolved já ocupando a porta e impedindo o Unbound de subir.",
      },
      {
        command: "man unbound.conf",
        description:
          "Referência das diretivas que importam num resolvedor interno: `access-control` (quem pode consultar), `interface`, `cache-min-ttl` e `forward-zone`.",
      },
      {
        command: "apt-cache show bind9 | sed -n '1,12p'",
        description:
          "BIND existe no Debian se precisar autoritativo.",
      },
      {
        command: "resolvectl status 2>/dev/null | head -n 30 || cat /etc/resolv.conf",
        description:
          "Mostra qual servidor a máquina usa de verdade. Instalar o Unbound não muda isso sozinho: enquanto o cliente apontar para outro resolvedor, seu servidor novo fica no ar sem receber consulta nenhuma.",
      },
      {
        command: "sudo journalctl -u unbound -n 30 --no-pager",
        description:
          "Últimas 30 linhas de log do serviço. É onde aparecem os dois erros mais comuns: consulta recusada por `access-control` e falha de validação DNSSEC por relógio errado.",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Recursão aberta",
        content:
          "Nunca exponha resolver aberto à internet sem ACL.",
      },
      {
        type: "warning",
        title: "Ponto único de falha",
        content:
          "Se só 127.0.0.1 e unbound cai, o host fica cego.",
      },
      {
        type: "info",
        title: "Unbound vs BIND",
        content:
          "Cache/recursão vs zonas autoritativas — papéis diferentes.",
      },
      {
        type: "success",
        title: "unbound-checkconf",
        content:
          "Sempre antes de reload em produção.",
      },
    ],
    practiceLabs: [
      {
        title: "dig no loopback",
        goal: "Unbound respondendo em 127.0.0.1 para uma query conhecida.",
        steps: [
          "install unbound dnsutils",
          "enable --now",
          "dig @127.0.0.1 debian.org",
          "ss na 53",
        ],
        command: "dig @127.0.0.1 debian.org +time=2 +tries=1 +short | head",
        verify:
          "Retorna IPs ou você diagnostica pelo status/journal se falhar.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Diferença recursivo vs autoritativo?",
        answer:
          "Recursivo busca por você; autoritativo responde zonas que ele serve.",
      },
      {
        id: 2,
        question: "Por que recursão aberta é perigosa?",
        answer:
          "Abuso em ataques de amplificação e uso por terceiros.",
      },
      {
        id: 3,
        question: "Pacote do dig no Debian?",
        answer:
          "dnsutils.",
      },
      {
        id: 4,
        question: "Comando para validar config Unbound?",
        answer:
          "unbound-checkconf.",
      },
      {
        id: 5,
        question: "Onde drop-ins do Unbound?",
        answer:
          "/etc/unbound/unbound.conf.d/",
      },
      {
        id: 6,
        question: "BIND é obrigatório para cache local?",
        answer:
          "Não — Unbound costuma ser suficiente.",
      },
      {
        id: 7,
        question: "Como testar resolver específico?",
        answer:
          "dig @IP nome.",
      },
      {
        id: 8,
        question: "Risco de nameserver só 127.0.0.1?",
        answer:
          "Se o serviço local cair, resolução some.",
      },
    ],
    references: [
      { title: "Unbound documentation", url: "https://nlnetlabs.nl/documentation/unbound/" },
      { title: "Debian Wiki — Unbound", url: "https://wiki.debian.org/Unbound" },
      { title: "man dig", url: "https://manpages.debian.org/dig" },
    ],
  },
  {
    id: "email-relay",
    title: "E-mail no Debian (realista) — MTA relay",
    icon: "📧",
    category: "Servidores",
    description:
      "Configure expectativa correta de e-mail em VPS: MTA como relay (nullclient/smarthost), SPF/DKIM na teoria e por que 'montar Gmail' não é o lab.",
    objectives: [
      "Separar MTA full de smarthost/nullclient",
      "Instalar um MTA mínimo (ex.: postfix) em modo satélite/relay",
      "Enviar mensagem de teste com sendmail/mail",
      "Ler logs de fila (mail.log / journal)",
      "Listar SPF/DKIM/DMARC como requisitos de entrega",
      "Evitar open relay",
    ],
    content: [
      "Servidor Debian que 'manda e-mail' na prática quase sempre é **relay**: a app fala com Postfix/Exim local, que entrega via **smarthost** (provedor, SES, Mailgun) com auth. Montar stack completa tipo Gmail (IMAP+antispam+webmail+reputação de IP) é outro produto. Este capítulo é o caminho realista de VPS.",

      "Jargões. **MTA**: Mail Transfer Agent. **smarthost**: servidor a montante. **nullclient**: só encaminha, não recebe. **open relay**: aceita de qualquer um — incidente. **SPF/DKIM/DMARC**: políticas DNS de autenticidade.",

      "Fluxo mental Postfix: instale, escolha 'Satellite system' ou edite `relayhost`, credenciais em `sasl_passwd`, `postfix check`, envie teste, olhe `mailq` e journal. Firewall: não publique 25 aberto para o mundo se só precisa sair.",

      "Armadilhas. IP de VPS em blacklist. Achar que porta 25 outbound sempre funciona (muitos clouds bloqueiam). Guardar senha SMTP em world-readable. Testar em produção com lista de clientes no primeiro try.",

      "Quando NÃO: precisa de caixa de entrada corporativa completa — use provedor. Quando SIM: alertas de cron, recuperação de senha de app, notificações de monitoramento.",

      "Ao terminar você descreve relay vs full mail, manda um teste controlado e sabe onde olhar fila/log sem prometer deliverability mágica.",

    ],
    commands: [
      {
        command: "sudo apt install -y postfix mailutils",
        description:
          "MTA + utilitários mail (interativo na 1ª config — use debconf-set-selections em automação).",
      },
      {
        command: "dpkg-reconfigure -plow postfix 2>/dev/null | head || true",
        description:
          "Reabre o assistente do pacote com todas as perguntas (`-plow` inclui as de baixa prioridade). Serve para corrigir o tipo de instalação escolhido às pressas durante o apt.",
      },
      {
        command: "postconf -n | head -n 40",
        description:
          "Lista somente o que foi alterado em relação ao padrão. É a leitura honesta da sua configuração: curta, sem as centenas de valores default do `main.cf`.",
      },
      {
        command: "postconf relayhost",
        description:
          "Diz se existe smarthost configurado. Vazio significa que a máquina tenta entregar direto na internet — caminho que quase sempre cai em spam ou apanha do bloqueio de porta 25 do provedor.",
      },
      {
        command: "mailq",
        description:
          "Fila de saída. Mensagem acumulando aqui indica entrega falhando, e cada item traz o motivo do adiamento — é por esse motivo que você começa a investigar, não pelo tamanho da fila.",
        example: "mailq | tail -1",
      },
      {
        command: "printf '%s\n' 'Teste debian-book' | mail -s 'lab relay' root",
        description:
          "Envia mail local de teste para root.",
      },
      {
        command: "sudo tail -n 30 /var/log/mail.log 2>/dev/null || sudo journalctl -u postfix -n 30 --no-pager",
        description:
          "Log de entrega, onde aparece o diálogo SMTP real: aceito, adiado ou recusado, com o código devolvido pelo servidor do outro lado. Esse código diz se o problema é seu ou do destino.",
      },
      {
        command: "sudo postfix check && echo OK",
        description:
          "Checa sintaxe e permissão de diretório antes de recarregar. O Postfix é exigente com as permissões de `/var/spool/postfix`, e este comando aponta o problema com nome e caminho.",
      },
      {
        command: "man postfix",
        description:
          "Visão geral do sistema e dos processos que o compõem. Os parâmetros de configuração em si estão em `man 5 postconf`.",
      },
      {
        command: "ss -lnt | grep -E ':25|:587' || true",
        description:
          "Mostra se há listener SMTP e em qual endereço. Numa máquina que apenas envia, o esperado é escutar só em 127.0.0.1 — escutar em todas as interfaces sem necessidade é convite a abuso.",
      },
      {
        command: "host -t TXT debian.org | head",
        description:
          "Exemplo de registros TXT (SPF etc. em domínios reais).",
      },
      {
        command: "sudo postqueue -p",
        description:
          "Mesma fila do `mailq`, no comando moderno. Anda em par com `postqueue -f`, que força nova tentativa de entrega depois de você corrigir a causa.",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Open relay",
        content:
          "mynetworks/restricoes mal feitas = abusam do seu IP.",
      },
      {
        type: "warning",
        title: "Porta 25 bloqueada",
        content:
          "Cloud providers cortam outbound — use 587 submission do smarthost.",
      },
      {
        type: "info",
        title: "SPF/DKIM",
        content:
          "Sem DNS alinhado, cai em spam mesmo com MTA perfeito.",
      },
      {
        type: "success",
        title: "Comece com mail para root",
        content:
          "Valida path local antes de domínio público.",
      },
    ],
    practiceLabs: [
      {
        title: "Fila e log",
        goal: "Gerar mail local, inspecionar mailq e últimas linhas de log.",
        steps: [
          "mail para root",
          "mailq",
          "tail mail.log/journal",
          "anotar status deferred/sent",
        ],
        command: "mailq; ls /var/log/mail.log 2>/dev/null || journalctl -u postfix -n 5 --no-pager",
        verify:
          "Você sabe se a mensagem saiu, ficou em fila ou falhou e onde ler o motivo.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "O que é smarthost?",
        answer:
          "Servidor SMTP a montante que de fato entrega para o destino.",
      },
      {
        id: 2,
        question: "Open relay significa?",
        answer:
          "Aceitar relay de clientes não autorizados.",
      },
      {
        id: 3,
        question: "Por que VPS 'não manda e-mail'?",
        answer:
          "IP frio, 25 bloqueada, falta SPF/DKIM, PTR ausente.",
      },
      {
        id: 4,
        question: "Comando da fila Postfix?",
        answer:
          "mailq ou postqueue -p.",
      },
      {
        id: 5,
        question: "SPF vive onde?",
        answer:
          "Registro TXT no DNS do domínio.",
      },
      {
        id: 6,
        question: "nullclient faz o quê?",
        answer:
          "Só encaminha; não hospeda caixas completas.",
      },
      {
        id: 7,
        question: "Onde logs típicos?",
        answer:
          "/var/log/mail.log ou journal da unit postfix.",
      },
      {
        id: 8,
        question: "mailutils serve para quê neste lab?",
        answer:
          "Comando mail para gerar mensagem de teste.",
      },
    ],
    references: [
      { title: "Postfix documentation", url: "https://www.postfix.org/documentation.html" },
      { title: "Debian Wiki — Postfix", url: "https://wiki.debian.org/Postfix" },
      { title: "RFC 7208 SPF", url: "https://datatracker.ietf.org/doc/html/rfc7208" },
    ],
  },
  {
    id: "nfs-samba",
    title: "NFS e Samba intro — compartilhar pasta na LAN",
    icon: "📁",
    category: "Servidores",
    description:
      "Compartilhe diretórios no Debian com NFS (Unix) e Samba (Windows/mac): export, mount, smb.conf mínimo e riscos de expor demais.",
    objectives: [
      "Explicar quando NFS vs Samba",
      "Exportar um dir NFS e montar em cliente",
      "Criar share Samba mínimo",
      "Checar exports e smbstatus",
      "Travar acesso por rede/firewall",
      "Não expor share anônimo na WAN",
    ],
    content: [
      "Precisa de pasta comum na **LAN**: backups, mídia, home de lab. **NFS** é o caminho natural Linux↔Linux (UID/GID). **Samba** fala **SMB/CIFS** com Windows e muitos NAS. Os dois são poderosos e ambos viram vazamento se escutam na internet sem VPN/ACL.",

      "Jargões. **/etc/exports**: quem pode montar o quê no NFS. **showmount**. **smb.conf**: shares Samba. **guest ok**: anônimo — perigoso. **CIFS**: família do protocolo Windows.",

      "NFS: instale `nfs-kernel-server`, exporte `/srv/share`, `exportfs -ra`, no cliente `mount server:/srv/share /mnt`. Samba: `apt install samba`, share em smb.conf, `systemctl reload smbd`, teste com `smbclient`. Firewall só rede de confiança.",

      "Armadilhas. root_squash mal entendido. exports com `*` e `no_root_squash`. Samba com senha fraca ou guest na WAN. Esquecer que UID 1000 num host ≠ usuário humano no outro.",

      "Quando NÃO: compartilhar pela internet aberta — use VPN (WireGuard) ou object storage. Quando SIM: lab, escritório, backup pull na LAN.",

      "Ao terminar você descreve um export NFS e um share SMB mínimos e lista três controles (rede, auth, permissão de FS).",

    ],
    commands: [
      {
        command: "sudo apt install -y nfs-kernel-server",
        description:
          "Instala o servidor NFS, que roda dentro do kernel. É a escolha natural entre máquinas Linux porque preserva permissão Unix e não exige camada de autenticação própria.",
      },
      {
        command: "sudo mkdir -p /srv/nfs-lab && sudo chown nobody:nogroup /srv/nfs-lab && echo lab > /srv/nfs-lab/README.txt",
        description:
          "Cria o diretório a exportar e o entrega a `nobody:nogroup`, o usuário em que o NFS mapeia acesso anônimo por padrão. Sem esse cuidado o cliente escreve e depois ninguém entende de quem é o arquivo.",
      },
      {
        command: "echo '/srv/nfs-lab 127.0.0.1(rw,sync,no_subtree_check)' | sudo tee /etc/exports",
        description:
          "Export só para localhost (lab seguro).",
      },
      {
        command: "sudo exportfs -ra && sudo exportfs -v",
        description:
          "Aplica o `/etc/exports` e lista o que ficou exportado com as opções efetivas. Confira aqui se `rw`, `sync` e `root_squash` são mesmo o que você pretendia — o default protege mais do que a maioria imagina.",
      },
      {
        command: "sudo apt install -y nfs-common && sudo mkdir -p /mnt/nfs-lab && sudo mount -t nfs 127.0.0.1:/srv/nfs-lab /mnt/nfs-lab && ls /mnt/nfs-lab && sudo umount /mnt/nfs-lab",
        description:
          "Monta a própria exportação para testar sem depender de outra máquina, lista o conteúdo e desmonta. Se falhar em local, não há o que testar em rede.",
      },
      {
        command: "sudo apt install -y samba smbclient",
        description:
          "Instala o servidor SMB e o cliente de linha de comando para testá-lo. SMB é o caminho quando há Windows ou celular na rede: protocolo de compartilhamento com usuário próprio, separado do Unix.",
      },
      {
        command: "testparm -s 2>/dev/null | head -n 40 || true",
        description:
          "Valida o `smb.conf` e imprime a configuração efetiva. O Samba ignora em silêncio seção com erro de digitação, então rodar isso é a única forma de ter certeza do que está valendo.",
      },
      {
        command: "sudo systemctl enable --now smbd nmbd 2>/dev/null || sudo systemctl enable --now smbd",
        description:
          "Sobe o serviço de arquivos (`smbd`) e o de nomes NetBIOS (`nmbd`), que só importa em rede legada. Com clientes modernos apenas, o `nmbd` pode ficar desligado e reduz superfície exposta.",
      },
      {
        command: "smbclient -L localhost -N 2>/dev/null | head || true",
        description:
          "Lista shares (pode falhar sem share).",
      },
      {
        command: "man exports",
        description:
          "Sintaxe do `/etc/exports`, onde estão as opções que definem segurança: `ro`, `rw`, `root_squash`, `all_squash` e a restrição por rede ou host.",
      },
      {
        command: "man smb.conf",
        description:
          "Referência dos parâmetros do Samba. Comece por `security`, `valid users`, `browseable` e as opções de cada compartilhamento.",
      },
      {
        command: "ss -lnt | grep -E ':2049|:445|:139' || true",
        description:
          "Mostra as portas dos dois protocolos: 2049 do NFS, 445 do SMB e 139 do NetBIOS antigo. Nenhuma delas deve estar acessível pela internet.",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "Share na WAN",
        content:
          "SMB/NFS na internet aberta é convite. Use VPN.",
      },
      {
        type: "warning",
        title: "UIDs NFS",
        content:
          "Mesmo número de UID em hosts diferentes = dono 'errado'.",
      },
      {
        type: "info",
        title: "Lab em 127.0.0.1",
        content:
          "Valida mecânica sem expor a LAN inteira.",
      },
      {
        type: "success",
        title: "testparm e exportfs -v",
        content:
          "Sempre após editar.",
      },
    ],
    practiceLabs: [
      {
        title: "NFS loopback",
        goal: "Export /srv/nfs-lab só para 127.0.0.1, mount, ls, umount.",
        steps: [
          "criar dir e exports",
          "exportfs -ra",
          "mount local",
          "umount",
        ],
        command: "sudo exportfs -v | grep nfs-lab || true; ls /srv/nfs-lab",
        verify:
          "Export listado e arquivo README visível no servidor.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "NFS vs Samba em uma frase?",
        answer:
          "NFS para Unix nativo; Samba para SMB/Windows.",
      },
      {
        id: 2,
        question: "Arquivo de exports NFS?",
        answer:
          "/etc/exports",
      },
      {
        id: 3,
        question: "Por que guest ok é sensível?",
        answer:
          "Acesso anônimo ao share.",
      },
      {
        id: 4,
        question: "Porta típica SMB?",
        answer:
          "445 (e legado 139).",
      },
      {
        id: 5,
        question: "exportfs -ra faz o quê?",
        answer:
          "Reaplica exports ao kernel/nfsd.",
      },
      {
        id: 6,
        question: "Melhor expor na internet?",
        answer:
          "Não — use VPN ou outro modelo.",
      },
      {
        id: 7,
        question: "testparm valida o quê?",
        answer:
          "smb.conf do Samba.",
      },
      {
        id: 8,
        question: "no_root_squash risco?",
        answer:
          "Root do cliente pode ser root nos arquivos do servidor.",
      },
    ],
    references: [
      { title: "Debian Wiki — NFSServerSetup", url: "https://wiki.debian.org/NFSServerSetup" },
      { title: "Debian Wiki — Samba", url: "https://wiki.debian.org/Samba" },
      { title: "man exports", url: "https://manpages.debian.org/exports" },
    ],
  },
  {
    id: "wireguard",
    title: "WireGuard VPN — túnel ponto a ponto",
    icon: "🛡️",
    category: "Servidores",
    description:
      "Monte VPN WireGuard no Debian: chaves, interface wg0, Peer, IP forwarding consciente e teste de handshake sem teatro enterprise.",
    objectives: [
      "Gerar par de chaves WireGuard",
      "Escrever config wg0 com Address e Peer",
      "Subir interface com wg-quick",
      "Ler wg show (handshake/transfer)",
      "Abrir UDP no firewall só o necessário",
      "Saber quando NÃO redirecionar todo tráfego",
    ],
    content: [
      "**WireGuard** é VPN moderna no kernel: config curta, crypto opinativa, performance boa. No Debian: pacote `wireguard` / `wireguard-tools`. Cenário clássico: notebook ↔ VPS para acessar serviços da LAN ou administrar com IP estável interno.",

      "Jargões. **PrivateKey/PublicKey**. **AllowedIPs**: o que rotear via túnel (não é só firewall). **Endpoint**: IP:porta UDP do peer. **Handshake**: prova de vida criptográfica. **wg-quick**: sobe a iface a partir do arquivo.",

      "Fluxo: `wg genkey | tee priv | wg pubkey > pub` → `/etc/wireguard/wg0.conf` com Interface e Peer → `wg-quick up wg0` → `wg show` → ping no IP do túnel. Firewall: UDP 51820 (ou o que escolher) só de quem deve.",

      "Armadilhas. AllowedIPs 0.0.0.0/0 sem querer (vira full tunnel e quebra rota). Chave privada no git. NAT/IP forwarding esquecido quando precisa lan-access. MTU esquisito em redes móveis.",

      "Quando NÃO: zero-trust enterprise completo com SSO (há produtos em cima); substituir auth de app. Quando SIM: admin remoto, lab multi-máquina, costurar NFS/SSH só na overlay.",

      "Ao terminar você gera chaves, sobe wg0 de lab e interpreta `wg show` sem achar que VPN resolve patch desatualizado.",

    ],
    commands: [
      {
        command: "sudo apt install -y wireguard wireguard-tools",
        description:
          "Instala as ferramentas de espaço de usuário. O módulo em si já vem no kernel do Debian desde o bullseye, então não há compilação nem DKMS envolvido.",
      },
      {
        command: "wg --version || true",
        description:
          "Versão das ferramentas de usuário. Confirmação rápida de que o pacote está em ordem antes de gerar chave.",
      },
      {
        command: "umask 077; wg genkey | tee /tmp/wg-lab-priv | wg pubkey | tee /tmp/wg-lab-pub; echo 'chaves lab em /tmp (não use em prod)'",
        description:
          "Gera par de chaves de lab.",
      },
      {
        command: "sudo sh -c 'install -m 700 -d /etc/wireguard'",
        description:
          "Cria o diretório de configuração com permissão 700. Isso é requisito de segurança, não capricho: a chave privada fica ali em texto puro.",
      },
      {
        command: "man wg",
        description:
          "Manual da ferramenta de baixo nível: gerar chave, inspecionar peer, ver o último handshake e trocar `AllowedIPs` com a interface no ar.",
      },
      {
        command: "man wg-quick",
        description:
          "Manual do atalho que sobe e desce o túnel a partir de um arquivo, cuidando de rota e DNS. É o que a unit `wg-quick@wg0` usa no boot.",
      },
      {
        command: "printf '%s\n' '[Interface]' 'Address = 10.66.66.1/24' 'ListenPort = 51820' 'PrivateKey = COLE_PRIV' '# [Peer]' '# PublicKey = ...' '# AllowedIPs = 10.66.66.2/32' '# Endpoint = vps.example:51820' | sudo tee /etc/wireguard/wg0.conf.example",
        description:
          "Grava um modelo comentado em `/etc/wireguard`, com o bloco `[Interface]` do servidor e o `[Peer]` a preencher. Guarde como exemplo: o arquivo real contém chave privada e precisa ficar com permissão 600.",
      },
      {
        command: "sudo wg show",
        description:
          "Estado real do túnel: peers, último handshake e bytes trocados. Sem handshake recente o problema é alcance ou chave; com handshake e sem tráfego, o problema é rota ou `AllowedIPs`.",
      },
      {
        command: "ip link show type wireguard 2>/dev/null || true",
        description:
          "Lista as interfaces WireGuard existentes no kernel. Interface ausente significa que o túnel não subiu — vá direto ao log da unit `wg-quick@wg0`.",
      },
      {
        command: "sudo sysctl net.ipv4.ip_forward",
        description:
          "Forwarding (só se for rotear redes).",
      },
      {
        command: "sudo ss -lunp | grep 51820 || true",
        description:
          "Confirma o socket UDP de escuta. WireGuard é UDP: firewall que libera somente TCP deixa o túnel em silêncio, sem mensagem de erro nenhuma.",
      },
      {
        command: "sudo wg-quick strip wg0 2>/dev/null | head || true",
        description:
          "Mostra config efetiva se wg0 existir.",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "PrivateKey",
        content:
          "Permissão 600; nunca commit.",
      },
      {
        type: "warning",
        title: "AllowedIPs",
        content:
          "Define rotas — leia com calma.",
      },
      {
        type: "info",
        title: "UDP",
        content:
          "WireGuard não é TCP 443 por padrão.",
      },
      {
        type: "success",
        title: "wg show",
        content:
          "latest handshake diz se o peer falou recentemente.",
      },
    ],
    practiceLabs: [
      {
        title: "Chaves e modelo de conf",
        goal: "Gerar chaves lab e gravar wg0.conf.example com Address de overlay.",
        steps: [
          "apt install wireguard-tools",
          "wg genkey/pubkey",
          "escrever example conf",
          "wg show (pode estar vazio)",
        ],
        command: "test -f /tmp/wg-lab-priv && test -f /tmp/wg-lab-pub && wc -c /tmp/wg-lab-priv",
        verify:
          "Par de chaves criado com permissões restritas pelo umask.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "WireGuard usa TCP ou UDP por padrão?",
        answer:
          "UDP.",
      },
      {
        id: 2,
        question: "AllowedIPs controla o quê?",
        answer:
          "Quais destinos são roteados via peer (e filtro).",
      },
      {
        id: 3,
        question: "wg-quick up wg0 faz o quê?",
        answer:
          "Cria iface e aplica /etc/wireguard/wg0.conf.",
      },
      {
        id: 4,
        question: "Onde ver handshake?",
        answer:
          "wg show.",
      },
      {
        id: 5,
        question: "Risco de 0.0.0.0/0 em AllowedIPs no client?",
        answer:
          "Todo tráfego pode ir à VPN (full tunnel).",
      },
      {
        id: 6,
        question: "Por que umask 077 ao gerar chave?",
        answer:
          "Evitar private key legível por outros.",
      },
      {
        id: 7,
        question: "IP forwarding quando?",
        answer:
          "Quando o node roteia para outras redes além do ponto-a-ponto.",
      },
      {
        id: 8,
        question: "VPN elimina necessidade de updates?",
        answer:
          "Não — só reduz superfície de exposição.",
      },
    ],
    references: [
      { title: "WireGuard official", url: "https://www.wireguard.com/" },
      { title: "man wg", url: "https://manpages.debian.org/wg" },
      { title: "Debian Wiki — WireGuard", url: "https://wiki.debian.org/WireGuard" },
    ],
  },
  {
    id: "postgres-operacao",
    title: "PostgreSQL operação — backup/restore e auth",
    icon: "🐘",
    category: "Servidores",
    description:
      "Vá além do apt install postgresql: roles, pg_hba, dump/restore e higiene mínima de operação no Debian.",
    objectives: [
      "Instalar PostgreSQL e conectar via peer/local",
      "Criar role e database de app",
      "Ler pg_hba.conf com respeito",
      "Fazer pg_dump e restaurar em lab",
      "Ver atividade com psql básica",
      "Não expor 5432 na internet sem necessidade",
    ],
    content: [
      "Instalar Postgres é o capítulo curto. **Operar** é auth (`pg_hba.conf`), backups que **restauram**, vacuum consciente e não publicar a porta na WAN. No Debian o cluster padrão sob `postgresql` systemd e dados em `/var/lib/postgresql`.",

      "Jargões. **role**: usuário do banco. **peer** vs **md5/scram**: métodos de auth local/remoto. **pg_dump**: backup lógico. **WAL/base backup**: físico (avançado). **psql**: cliente oficial.",

      "Fluxo: `apt install postgresql postgresql-contrib` → `sudo -u postgres psql` → `CREATE USER ...` / `CREATE DATABASE ...` → ajuste hba se app remota → `pg_dump db > backup.sql` → restore em lab com `psql db < backup.sql`. Teste o restore ou o backup é ficção.",

      "Armadilhas. trust em 0.0.0.0. Senha fraca + porta aberta. Só snapshot de disco com DB ligado sem flush. Guardar dump com PII no home world-readable.",

      "Quando NÃO: achar que dump SQL resolve PITR de fintech — estude base backup/WAL. Quando SIM: app small/medium, lab, staging.",

      "Ao terminar você cria role/db, gera dump e restaura em lab, e sabe onde o hba decide quem entra.",

    ],
    commands: [
      {
        command: "sudo apt install -y postgresql postgresql-contrib",
        description:
          "Instala o servidor e o pacote contrib, com extensões úteis como `pg_stat_statements`. O Debian já inicializa um cluster e sobe o serviço ao final da instalação.",
      },
      {
        command: "sudo systemctl enable --now postgresql",
        description:
          "Garante o cluster no boot e agora. No Debian a unit `postgresql` é um agregador: quem realmente roda é a unit versionada, como `postgresql@16-main`, e é nela que você olha o log.",
      },
      {
        command: "sudo -u postgres psql -c 'SELECT version();'",
        description:
          "Primeira conexão usando autenticação peer: como você virou o usuário `postgres` do sistema, o banco aceita sem senha. Confirma que o cluster responde e em qual versão.",
      },
      {
        command: "sudo -u postgres psql -c \"CREATE USER app WITH PASSWORD 'labonly';\" 2>/dev/null || true",
        description:
          "Role de lab (troque a senha).",
      },
      {
        command: "sudo -u postgres psql -c 'CREATE DATABASE app OWNER app;' 2>/dev/null || true",
        description:
          "Cria a base do lab com dono próprio. Dar um owner dedicado, em vez de deixar tudo em `postgres`, é o que permite depois restringir permissão sem quebrar a aplicação.",
      },
      {
        command: "sudo -u postgres pg_dump app > /tmp/app-lab.sql && wc -l /tmp/app-lab.sql",
        description:
          "Dump lógico em SQL, com contagem de linhas só para provar que saiu conteúdo. Arquivo com pouquíssimas linhas costuma ser base vazia ou erro de permissão engolido pelo redirecionamento.",
      },
      {
        command: "sudo -u postgres psql -c 'CREATE DATABASE app_restore;' 2>/dev/null || true; sudo -u postgres psql app_restore < /tmp/app-lab.sql",
        description:
          "Restaura o dump em uma base nova. Testar restore em base separada é a única forma de saber que o backup presta, e faz isso sem arriscar a original.",
      },
      {
        command: "sudo sed -n '1,80p' /etc/postgresql/*/main/pg_hba.conf 2>/dev/null | head -n 40",
        description:
          "Trecho de hba (paths variam com versão).",
      },
      {
        command: "sudo ss -lntp | grep 5432 || true",
        description:
          "Mostra onde o Postgres escuta. No Debian o padrão é apenas 127.0.0.1; abrir para a rede exige mexer em `listen_addresses` e em `pg_hba.conf`, nessa ordem, senão a conexão é recusada.",
      },
      {
        command: "man pg_dump",
        description:
          "Opções que mudam o jogo: `-Fc` para formato comprimido restaurável com `pg_restore`, `-t` para uma tabela específica e `--schema-only` para levar só a estrutura.",
      },
      {
        command: "sudo -u postgres psql -c 'SELECT datname FROM pg_database;'",
        description:
          "Lista as bases do cluster. Serve para conferir se o restore criou o que devia e para achar base esquecida ocupando disco.",
      },
      {
        command: "sudo journalctl -u postgresql -n 20 --no-pager",
        description:
          "Log do serviço. Falha de subida aparece aqui apontando o log detalhado do cluster em `/var/log/postgresql`, que é onde está o erro de verdade.",
      },
    ],
    tips: [
      {
        type: "danger",
        title: "5432 público",
        content:
          "Brute force e data leak — firewall/VPN.",
      },
      {
        type: "warning",
        title: "Backup não testado",
        content:
          "Só conta depois do restore.",
      },
      {
        type: "info",
        title: "peer auth local",
        content:
          "socket Unix como OS user postgres.",
      },
      {
        type: "success",
        title: "SCRAM",
        content:
          "Prefira scram-sha-256 a md5 legado.",
      },
    ],
    practiceLabs: [
      {
        title: "Dump e restore lab",
        goal: "Criar db app, dump, restore em app_restore.",
        steps: [
          "CREATE USER/DB",
          "pg_dump",
          "CREATE app_restore",
          "psql < dump",
        ],
        command: "test -f /tmp/app-lab.sql && sudo -u postgres psql -tAc \"SELECT 1 FROM pg_database WHERE datname='app_restore'\"",
        verify:
          "Dump existe e database app_restore está presente (1).",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "pg_dump é backup lógico ou físico?",
        answer:
          "Lógico (SQL/custom), não substitui tudo de PITR.",
      },
      {
        id: 2,
        question: "Arquivo central de auth de clientes?",
        answer:
          "pg_hba.conf",
      },
      {
        id: 3,
        question: "Como entrar como superuser padrão no Debian?",
        answer:
          "sudo -u postgres psql",
      },
      {
        id: 4,
        question: "Por que testar restore?",
        answer:
          "Backup corrompido/incompleto só aparece na hora H.",
      },
      {
        id: 5,
        question: "Porta padrão?",
        answer:
          "5432",
      },
      {
        id: 6,
        question: "role vs database?",
        answer:
          "Role autentica/autoriza; database é o catálogo de objetos.",
      },
      {
        id: 7,
        question: "Risco de trust em hba?",
        answer:
          "Conexões sem senha conforme o match — perigoso se amplo.",
      },
      {
        id: 8,
        question: "Onde dados do cluster costumam viver?",
        answer:
          "/var/lib/postgresql/...",
      },
    ],
    references: [
      { title: "PostgreSQL docs", url: "https://www.postgresql.org/docs/" },
      { title: "Debian Wiki — PostgreSQL", url: "https://wiki.debian.org/PostgreSQL" },
      { title: "man pg_dump", url: "https://manpages.debian.org/pg_dump" },
    ],
  },
  {
    id: "capstone-vps",
    title: "Capstone: servidor Debian mínimo na VPS",
    icon: "🏁",
    category: "Servidores",
    description:
      "Feche o curso com um checklist de VPS mínima: SSH endurecido, firewall, unattended-upgrades, web atrás de proxy, backup testado e evidência de pronto.",
    objectives: [
      "Montar checklist de baseline Debian em VPS",
      "Garantir SSH por chave e firewall mínimo",
      "Ligar unattended-upgrades com log legível",
      "Publicar um serviço web simples atrás de proxy/TLS se couber",
      "Provar backup com restore de lab",
      "Documentar o que ficou de fora e por quê",
    ],
    content: [
      "Capstone não é feature nova: é juntar o que já viu em um host que você entregaria. Ordem: atualizar → usuário sudo → SSH chave → firewall → updates automáticos → tempo/NTP → serviço útil → proxy/TLS → backup → observação leve. Cada item deixa evidência (comando + saída anotada).",

      "Jargões de entrega. baseline: estado mínimo aceitável. blast radius: o que quebra se o host cair. runbook de acesso: como entrar se a rede falhar (console cloud). definition of done: lista checada, não feeling.",

      "Evidências mínimas: apt list --upgradable vazio ou justificado; sshd PasswordAuthentication no; ufw/nft com allow SSH; unattended-upgrades active; timedatectl ok; curl no health; dump/restore ou tarball testado; journal disk-usage sob controle.",

      "Armadilhas. Checklist copiado de CIS inteiro sem entender. Expor DB. Achar que TLS no Cloudflare dispensa cuidado no origin. Backup só no mesmo disco. Documentação só na cabeça.",

      "Quando NÃO: produção regulada sem time — capstone é treino. Quando SIM: lab final, side project, template da equipe.",

      "Ao terminar você tem uma VPS contável: acesso, patch, borda, app, backup e notas — e sabe pedir review ao Jack antes de push/prod se a regra do projeto exigir.",

    ],
    commands: [
      {
        command: "sudo apt update && apt list --upgradable 2>/dev/null | head",
        description:
          "Atualiza o índice e lista o que está pendente. O tamanho dessa lista é sua superfície de patch: cada pacote desatualizado é uma correção de segurança que a máquina exposta ainda não tem.",
      },
      {
        command: "sudo systemctl is-active ssh sshd 2>/dev/null; sudo sshd -T 2>/dev/null | grep -Ei 'passwordauthentication|permitrootlogin' | head",
        description:
          "Confirma que o SSH está no ar e lê a configuração efetiva: `sshd -T` resolve includes e defaults, mostrando o que vale de verdade, não o que está escrito no arquivo. Numa VPS exposta você quer `passwordauthentication no` e `permitrootlogin` em `no` ou `prohibit-password`.",
      },
      {
        command: "sudo ufw status verbose 2>/dev/null || sudo nft list ruleset 2>/dev/null | head -n 20",
        description:
          "Mostra as regras em vigor, pelo ufw ou direto no nftables. O que você quer ver numa VPS: política de entrada em `deny` e apenas as portas que você realmente serve liberadas.",
      },
      {
        command: "systemctl is-active unattended-upgrades 2>/dev/null; ls /var/log/unattended-upgrades 2>/dev/null | head",
        description:
          "Verifica se as atualizações de segurança se aplicam sozinhas e se existe registro disso. Serviço ativo com diretório de log vazio costuma significar que ele nunca rodou de verdade.",
      },
      {
        command: "timedatectl",
        description:
          "Hora, fuso e estado da sincronização. Relógio errado quebra handshake TLS, invalida assinatura de repositório e desalinha o horário do log do horário do incidente.",
        example: "timedatectl status",
      },
      {
        command: "systemctl --failed --no-pager",
        description:
          "Essa lista deve sair vazia. Qualquer unit falha aqui é dívida que vai cobrar juros no pior momento; resolva antes de considerar a VPS pronta para produção.",
      },
      {
        command: "curl -sI http://127.0.0.1/ 2>/dev/null | head || curl -sI http://127.0.0.1:8080 2>/dev/null | head || echo 'defina seu health local'",
        description:
          "Bate no seu próprio serviço e mostra só os cabeçalhos (`-I`). Testar por 127.0.0.1 separa 'a aplicação caiu' de 'o firewall ou o DNS está barrando' — dois problemas com soluções opostas.",
      },
      {
        command: "journalctl --disk-usage",
        description:
          "Quanto o log ocupa. Journal sem retenção definida é uma das causas mais comuns de disco cheio em VPS pequena, e disco cheio derruba tudo junto.",
      },
      {
        command: "df -h /; free -h",
        description:
          "Espaço na raiz e memória disponível. Numa VPS de 1 GB esses dois números explicam a maioria dos incidentes antes de qualquer investigação mais fina.",
      },
      {
        command: "sudo last -n 5 2>/dev/null || journalctl -u ssh --since today --no-pager | tail",
        description:
          "Últimos logins na máquina. Acesso bem-sucedido que você não reconhece muda o plano: passa a ser tratamento de máquina comprometida, não ajuste de configuração.",
      },
      {
        command: "sudo tar -czf /tmp/etc-lab-backup.tgz /etc/hostname /etc/hosts 2>/dev/null; ls -l /tmp/etc-lab-backup.tgz",
        description:
          "Amostra de backup de config (lab).",
      },
      {
        command: "printf '%s\n' '## Capstone DoD' '- [ ] ssh chave' '- [ ] firewall' '- [ ] unattended' '- [ ] ntp' '- [ ] app health' '- [ ] backup testado' '- [ ] notas' > ~/capstone-dod.md && cat ~/capstone-dod.md",
        description:
          "Escreve os critérios de conclusão do projeto final e mostra o resultado. Serve para marcar item por item: acesso por chave, firewall, atualizações automáticas, hora certa, aplicação de pé, backup testado e anotações.",
      },
    ],
    tips: [
      {
        type: "success",
        title: "Evidência por item",
        content:
          "Comando + data no DoD.",
      },
      {
        type: "warning",
        title: "Mesmo disco ≠ backup offsite",
        content:
          "3-2-1 ainda vale.",
      },
      {
        type: "info",
        title: "Console cloud",
        content:
          "Antes de fechar firewall apertado.",
      },
      {
        type: "danger",
        title: "Push/prod sem ok",
        content:
          "Neste projeto: só com aprovação do Jack.",
      },
    ],
    practiceLabs: [
      {
        title: "DoD preenchido",
        goal: "Gerar ~/capstone-dod.md e preencher com resultados reais dos checks.",
        steps: [
          "rodar checks SSH/firewall/unattended/ntp/failed",
          "anotar no markdown",
          "criar tarball lab de /etc trecho",
          "releitura do DoD",
        ],
        command: "test -f ~/capstone-dod.md && systemctl --failed --no-pager && timedatectl | head -n 5",
        verify:
          "DoD existe e você tem saída fresca de failed units + tempo.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Ordem mental da baseline VPS?",
        answer:
          "Patch e acesso → borda → updates → tempo → app → backup → obs.",
      },
      {
        id: 2,
        question: "Por que PasswordAuthentication no?",
        answer:
          "Reduz brute force; chave é o caminho.",
      },
      {
        id: 3,
        question: "unattended-upgrades cobre o quê?",
        answer:
          "Atualizações de segurança automáticas (conforme origins).",
      },
      {
        id: 4,
        question: "Backup no mesmo disco falha qual regra?",
        answer:
          "Separação de mídia / 3-2-1.",
      },
      {
        id: 5,
        question: "definition of done é o quê?",
        answer:
          "Critérios objetivos de pronto.",
      },
      {
        id: 6,
        question: "Por que console cloud importa?",
        answer:
          "Recuperar se o firewall/SSH fechar mal.",
      },
      {
        id: 7,
        question: "systemctl --failed no capstone?",
        answer:
          "Não entregar host com units quebradas silenciosas.",
      },
      {
        id: 8,
        question: "Capstone substitui hardening completo CIS?",
        answer:
          "Não — é mínimo honesto e documentado.",
      },
    ],
    references: [
      { title: "Debian securing manual", url: "https://www.debian.org/doc/manuals/securing-debian-manual/" },
      { title: "Debian Wiki — Hardening", url: "https://wiki.debian.org/Hardening" },
      { title: "UnattendedUpgrades", url: "https://wiki.debian.org/UnattendedUpgrades" },
    ],
  },
];
