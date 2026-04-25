import { Module } from "@/types/module";

export const servidores: Module[] = [
  {
    id: "servidor-web",
    title: "Servidor Web — Apache e Nginx",
    icon: "🌍",
    category: "Servidores",
    description: "Instalar, configurar virtualhost e habilitar HTTPS com Let's Encrypt.",
    objectives: [
      "Instalar e iniciar Apache ou Nginx",
      "Configurar virtual host (múltiplos sites)",
      "Habilitar HTTPS gratuito com Certbot",
      "Diagnosticar logs e problemas",
    ],
    content: [
      "Os dois servidores web mais usados no Linux:\n• Apache HTTP Server (apache2) — clássico, configurável, suporta .htaccess (configs por diretório), módulo PHP nativo. Ainda padrão em hospedagens compartilhadas.\n• Nginx — moderno, leve, ÓTIMO para servir estático e como proxy reverso. Mais usado em servidores de alta performance.\n\nQual usar? Para sites simples, qualquer um. Para servidor moderno (proxy reverso para apps Node/Python, alta performance), Nginx. Para hospedagem com WordPress + .htaccess, Apache.",
      "Instalar Apache:\n\nsudo apt install -y apache2\nsudo systemctl enable --now apache2\n\n# Liberar firewall\nsudo ufw allow 'Apache Full'\n\n# Testar\ncurl http://localhost\n# Deve mostrar 'It works!'\n\nDocumentRoot padrão: /var/www/html. Edite o index.html ou ponha seus arquivos lá.",
      "Virtual hosts no Apache (múltiplos sites no mesmo servidor) — crie /etc/apache2/sites-available/meusite.conf:\n\n<VirtualHost *:80>\n    ServerName meusite.com\n    ServerAlias www.meusite.com\n    DocumentRoot /var/www/meusite\n    ErrorLog \\${APACHE_LOG_DIR}/meusite-error.log\n    CustomLog \\${APACHE_LOG_DIR}/meusite-access.log combined\n</VirtualHost>\n\nDepois:\nsudo mkdir -p /var/www/meusite\nsudo a2ensite meusite           # habilita o site\nsudo systemctl reload apache2",
      "Instalar Nginx:\n\nsudo apt install -y nginx\nsudo systemctl enable --now nginx\nsudo ufw allow 'Nginx Full'\n\ncurl http://localhost\n# Deve mostrar 'Welcome to nginx!'\n\nDocumentRoot padrão: /var/www/html. Configs em /etc/nginx/sites-available/ (igual ao Apache).",
      "Virtual host no Nginx — /etc/nginx/sites-available/meusite:\n\nserver {\n    listen 80;\n    server_name meusite.com www.meusite.com;\n    root /var/www/meusite;\n    index index.html index.htm;\n\n    location / {\n        try_files \\$uri \\$uri/ =404;\n    }\n\n    access_log /var/log/nginx/meusite-access.log;\n    error_log /var/log/nginx/meusite-error.log;\n}\n\nDepois:\nsudo mkdir -p /var/www/meusite\nsudo ln -s /etc/nginx/sites-available/meusite /etc/nginx/sites-enabled/\nsudo nginx -t                  # testa config\nsudo systemctl reload nginx",
      "HTTPS com Let's Encrypt (gratuito, automático) — usa certbot:\n\nsudo apt install -y certbot python3-certbot-apache    # ou python3-certbot-nginx\n\n# Apache\nsudo certbot --apache -d meusite.com -d www.meusite.com\n\n# Nginx\nsudo certbot --nginx -d meusite.com -d www.meusite.com\n\nResponda as perguntas (e-mail, aceite termos). Certbot:\n• Solicita certificado da Let's Encrypt\n• Configura virtualhost para HTTPS\n• Adiciona redirect HTTP → HTTPS (opcional, recomendado)\n• Cria timer para renovar a cada 60-90 dias automaticamente\n\nTeste renovação:\nsudo certbot renew --dry-run",
      "Nginx como proxy reverso (caso comum: rodar app Node.js na porta 3000 e expor pela 80/443):\n\nserver {\n    listen 80;\n    server_name app.meusite.com;\n\n    location / {\n        proxy_pass http://localhost:3000;\n        proxy_set_header Host \\$host;\n        proxy_set_header X-Real-IP \\$remote_addr;\n        proxy_set_header X-Forwarded-For \\$proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto \\$scheme;\n    }\n}\n\nDepois certbot --nginx -d app.meusite.com adiciona HTTPS.",
      "Logs e diagnóstico:\n\n# Apache\nsudo tail -f /var/log/apache2/access.log\nsudo tail -f /var/log/apache2/error.log\nsudo apache2ctl configtest\nsudo apache2ctl -t -D DUMP_VHOSTS\n\n# Nginx\nsudo tail -f /var/log/nginx/access.log\nsudo tail -f /var/log/nginx/error.log\nsudo nginx -t\n\nQuando algo não funciona, comece pelos logs.",
    ],
    commands: [
      {
        command: "sudo apt install apache2 / nginx",
        description: "Instala servidor web.",
        example: "sudo apt install -y nginx",
      },
      {
        command: "sudo systemctl enable --now",
        description: "Habilita no boot e inicia.",
        example: "sudo systemctl enable --now nginx",
      },
      {
        command: "sudo a2ensite / a2dissite",
        description: "Apache: habilita / desabilita virtualhost.",
        example: "sudo a2ensite meusite && sudo systemctl reload apache2",
      },
      {
        command: "sudo a2enmod / a2dismod",
        description: "Apache: habilita / desabilita módulos.",
        example: "sudo a2enmod rewrite headers ssl && sudo systemctl restart apache2",
      },
      {
        command: "sudo nginx -t",
        description: "Testa config do Nginx (essencial antes de reload).",
        example: "sudo nginx -t",
      },
      {
        command: "sudo systemctl reload",
        description: "Reload (não derruba conexões). Após mudar config.",
        example: "sudo systemctl reload nginx",
      },
      {
        command: "sudo certbot --nginx",
        description: "HTTPS automático com Let's Encrypt.",
        example: "sudo certbot --nginx -d meusite.com -d www.meusite.com",
      },
      {
        command: "sudo certbot renew",
        description: "Renova certificados (timer já roda automaticamente).",
        example: "sudo certbot renew --dry-run",
      },
      {
        command: "curl -I",
        description: "Headers HTTP (status, server, content-type).",
        example: "curl -I https://meusite.com",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Apache OU Nginx, não os dois",
        content:
          "Se você instalar os dois sem cuidado, vão brigar pela porta 80. Para servidor leigo, escolha um. Para servidor avançado: Nginx na porta 80 como proxy reverso, Apache em outra porta para sites legados.",
      },
      {
        type: "success",
        title: "Use Let's Encrypt — sem desculpa",
        content:
          "Certificados HTTPS gratuitos via certbot. 5 minutos para configurar, renovação automática. Não tem motivo para servidor sem HTTPS em 2026.",
      },
      {
        type: "warning",
        title: "Sempre 'nginx -t' antes de reload",
        content:
          "Erro de config no Nginx pode derrubar TODOS os sites. 'sudo nginx -t' valida antes do reload. Se OK: 'sudo systemctl reload nginx'.",
      },
    ],
    practiceLabs: [
      {
        title: "Servidor Nginx com HTTPS para um site estático",
        goal: "Setup completo: Nginx + virtualhost + Let's Encrypt em servidor com domínio.",
        steps: [
          "Instale Nginx.",
          "Crie pasta do site e index.html.",
          "Configure virtualhost.",
          "Teste e reload.",
          "Habilite HTTPS com certbot.",
        ],
        command: `# 1) Instalar
sudo apt install -y nginx
sudo ufw allow 'Nginx Full'

# 2) Criar pasta e site de teste
sudo mkdir -p /var/www/meusite
sudo tee /var/www/meusite/index.html > /dev/null << 'EOF'
<!DOCTYPE html>
<html><head><title>Meu Site</title></head>
<body><h1>Funcionando!</h1></body></html>
EOF

sudo chown -R www-data:www-data /var/www/meusite

# 3) Virtualhost (substitua meusite.com pelo SEU dominio)
sudo tee /etc/nginx/sites-available/meusite > /dev/null << 'EOF'
server {
    listen 80;
    server_name meusite.com www.meusite.com;
    root /var/www/meusite;
    index index.html;

    location / {
        try_files \\$uri \\$uri/ =404;
    }
}
EOF

# 4) Habilitar
sudo ln -s /etc/nginx/sites-available/meusite /etc/nginx/sites-enabled/
sudo nginx -t

# 5) Reload
sudo systemctl reload nginx

# 6) Testar HTTP
curl -H 'Host: meusite.com' http://localhost

# 7) HTTPS (DNS deve estar apontando para seu IP)
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d meusite.com -d www.meusite.com

# 8) Confirmar HTTPS
curl -I https://meusite.com`,
        verify:
          "curl http://localhost mostra 'Funcionando!'. Após certbot, https://meusite.com responde com cadeado verde no browser.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Diferença entre Apache e Nginx?",
        answer:
          "Apache: clássico, suporta .htaccess, mais usado em hospedagem compartilhada. Nginx: leve, melhor para alta performance e proxy reverso. Para servir Node/Python via proxy, Nginx é melhor.",
      },
      {
        id: 2,
        question: "Como habilitar HTTPS gratuito?",
        answer:
          "sudo apt install certbot python3-certbot-nginx (ou apache); sudo certbot --nginx -d dominio.com. Renovação automática a cada 60 dias.",
      },
      {
        id: 3,
        question: "Como testar config do Nginx antes do reload?",
        answer: "sudo nginx -t — valida sintaxe. Erro = não recarregue (vai derrubar sites).",
      },
      {
        id: 4,
        question: "Onde ficam os logs do Nginx?",
        answer: "/var/log/nginx/access.log e /var/log/nginx/error.log. Em tempo real: 'sudo tail -f'.",
      },
      {
        id: 5,
        question: "No Apache, qual comando habilita um virtualhost?",
        answer: "sudo a2ensite NOME && sudo systemctl reload apache2.",
      },
      {
        id: 6,
        question: "Por que Nginx como proxy reverso para Node.js?",
        answer:
          "Node escuta em porta alta (3000). Nginx na 80/443 recebe externo, encaminha para Node. Permite HTTPS, vários apps no mesmo servidor, balanceamento de carga.",
      },
    ],
    references: [
      { title: "Wiki Debian — Apache", url: "https://wiki.debian.org/Apache" },
      { title: "Nginx docs", url: "https://nginx.org/en/docs/" },
      { title: "Certbot", url: "https://certbot.eff.org/" },
    ],
  },

  {
    id: "servidor-banco-dados",
    title: "Banco de Dados — MySQL/MariaDB e PostgreSQL",
    icon: "🗄️",
    category: "Servidores",
    description: "Instalar, criar usuários, bancos, e fazer backup/restore.",
    objectives: [
      "Instalar MariaDB ou PostgreSQL",
      "Criar bancos e usuários com permissões",
      "Backup com mysqldump / pg_dump",
      "Conhecer prós/contras de cada um",
    ],
    content: [
      "Os dois principais bancos relacionais no Linux:\n• MariaDB (fork do MySQL) — mais simples, padrão para WordPress e LAMP. Comandos compatíveis com MySQL.\n• PostgreSQL — mais robusto, melhor para apps complexos, suporte a JSON nativo, melhor performance em queries pesadas.\n\nUse MariaDB para WordPress / LAMP / apps PHP simples. Use PostgreSQL para apps Node/Python/Go modernos, dados complexos, requisitos de integridade.",
      "Instalar MariaDB:\n\nsudo apt install -y mariadb-server\nsudo mysql_secure_installation\n# Responda Y para tudo (exceto se já tem senha de root)\n\nsudo systemctl status mariadb\n\nLogar como root:\nsudo mariadb            # ou: sudo mysql\n# (Sem senha, usa autenticação Unix socket)",
      "Comandos básicos do MariaDB:\n\n-- Criar banco\nCREATE DATABASE meu_app CHARACTER SET utf8mb4;\n\n-- Listar bancos\nSHOW DATABASES;\n\n-- Criar usuário e dar permissão\nCREATE USER 'meu_user'@'localhost' IDENTIFIED BY 'senha-forte-aqui';\nGRANT ALL PRIVILEGES ON meu_app.* TO 'meu_user'@'localhost';\nFLUSH PRIVILEGES;\n\n-- Usar banco\nUSE meu_app;\n\n-- Listar tabelas\nSHOW TABLES;\n\n-- Sair\nEXIT;\n\nLogar como o usuário criado:\nmariadb -u meu_user -p meu_app",
      "Backup MariaDB:\n\n# Backup de um banco\nmysqldump -u root meu_app > meu_app_backup.sql\n\n# Backup com compressão\nmysqldump -u root meu_app | gzip > meu_app_backup.sql.gz\n\n# Backup de TODOS os bancos\nsudo mysqldump --all-databases | gzip > all_dbs.sql.gz\n\n# Restore\nmariadb -u root meu_app < meu_app_backup.sql\nzcat meu_app_backup.sql.gz | mariadb -u root meu_app",
      "Instalar PostgreSQL:\n\nsudo apt install -y postgresql postgresql-contrib\nsudo systemctl status postgresql\n\nPostgreSQL cria usuário 'postgres' no Linux. Para usar:\nsudo -u postgres psql\n\nDentro do psql:\n\\\\l                          # listar bancos\n\\\\du                         # listar usuários\n\\\\q                          # sair",
      "Criar usuário e banco no PostgreSQL:\n\nsudo -u postgres psql\n\n-- Dentro do psql:\nCREATE USER meu_user WITH PASSWORD 'senha-forte';\nCREATE DATABASE meu_app OWNER meu_user;\nGRANT ALL PRIVILEGES ON DATABASE meu_app TO meu_user;\n\\\\q\n\n# De fora\npsql -U meu_user -d meu_app -h localhost\n\nPara permitir login com senha (e não só socket Unix), edite /etc/postgresql/15/main/pg_hba.conf:\nlocal   all   meu_user                                  md5\n\nDepois 'sudo systemctl restart postgresql'.",
      "Backup PostgreSQL:\n\n# Backup\nsudo -u postgres pg_dump meu_app > backup.sql\nsudo -u postgres pg_dump meu_app | gzip > backup.sql.gz\n\n# Backup de tudo\nsudo -u postgres pg_dumpall | gzip > all_dbs.sql.gz\n\n# Restore\nsudo -u postgres psql meu_app < backup.sql\n\n# Backup binario (mais rapido para restaurar)\nsudo -u postgres pg_dump -F c meu_app -f meu_app.dump\nsudo -u postgres pg_restore -d meu_app meu_app.dump",
      "Acesso remoto (cuidado!) — por padrão, MariaDB e PostgreSQL só aceitam conexões locais:\n\nMariaDB — edite /etc/mysql/mariadb.conf.d/50-server.cnf:\nbind-address = 0.0.0.0          # ou IP específico\n\nDepois reinicie e conceda permissão:\nGRANT ALL ON meu_app.* TO 'meu_user'@'%' IDENTIFIED BY 'senha';\n\nPostgreSQL — edite postgresql.conf:\nlisten_addresses = '*'\nE pg_hba.conf:\nhost  meu_app  meu_user  0.0.0.0/0  md5\n\nABRA porta 3306 (MariaDB) ou 5432 (Postgres) no firewall — só para IPs confiáveis.",
    ],
    commands: [
      {
        command: "sudo apt install mariadb-server",
        description: "Instala MariaDB.",
        example: "sudo apt install -y mariadb-server",
      },
      {
        command: "sudo mysql_secure_installation",
        description: "Wizard de segurança pós-instalação.",
        example: "sudo mysql_secure_installation",
      },
      {
        command: "sudo mariadb",
        description: "Logar como root no MariaDB.",
        example: "sudo mariadb",
      },
      {
        command: "mysqldump",
        description: "Backup MariaDB.",
        example: "mysqldump -u root meu_app | gzip > backup.sql.gz",
      },
      {
        command: "sudo apt install postgresql",
        description: "Instala PostgreSQL.",
        example: "sudo apt install -y postgresql postgresql-contrib",
      },
      {
        command: "sudo -u postgres psql",
        description: "Logar como postgres.",
        example: "sudo -u postgres psql",
      },
      {
        command: "pg_dump",
        description: "Backup PostgreSQL.",
        example: "sudo -u postgres pg_dump meu_app | gzip > backup.sql.gz",
      },
      {
        command: "psql -U user -d db -h host",
        description: "Conectar PostgreSQL.",
        example: "psql -U meu_user -d meu_app -h localhost",
      },
    ],
    tips: [
      {
        type: "warning",
        title: "Bancos abertos para internet = invadidos",
        content:
          "Não exponha portas 3306/5432 para 0.0.0.0/0 sem firewall. Senhas fracas + brute-force = invadido em horas. Prefira: SSH túnel, VPN, ou bind apenas em IPs internos.",
      },
      {
        type: "success",
        title: "Backups automáticos via systemd timer",
        content:
          "Combine systemd timer (vimos antes) + pg_dump/mysqldump + rclone para nuvem = backup diário do banco. Setup uma vez, esquece.",
      },
    ],
    practiceLabs: [
      {
        title: "Setup MariaDB com banco e usuário para um app",
        goal: "Procedimento padrão para preparar banco antes de instalar app (WordPress, etc.).",
        steps: [
          "Instale MariaDB.",
          "Rode wizard de segurança.",
          "Crie banco, usuário, dê permissões.",
          "Teste login.",
          "Faça backup.",
        ],
        command: `# 1) Instalar
sudo apt install -y mariadb-server

# 2) Wizard
sudo mysql_secure_installation
# Y para tudo

# 3) Logar e configurar
sudo mariadb << 'SQL'
CREATE DATABASE wp_meublog CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'wp_user'@'localhost' IDENTIFIED BY 'TrocarSenha123!';
GRANT ALL PRIVILEGES ON wp_meublog.* TO 'wp_user'@'localhost';
FLUSH PRIVILEGES;
SHOW DATABASES;
SQL

# 4) Testar login do user
mariadb -u wp_user -p'TrocarSenha123!' wp_meublog -e "SELECT DATABASE();"

# 5) Backup
mkdir -p ~/backups
mysqldump -u root wp_meublog | gzip > ~/backups/wp_meublog_\\$(date +%F).sql.gz
ls -lh ~/backups/`,
        verify:
          "'SHOW DATABASES' lista wp_meublog. Login do user funciona. Backup .sql.gz criado em ~/backups.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "MariaDB vs PostgreSQL?",
        answer:
          "MariaDB: simples, padrão LAMP/WordPress. PostgreSQL: robusto, melhor para apps modernos, JSON nativo. Para WordPress: MariaDB. Para Django/Rails/Node modernos: PostgreSQL.",
      },
      {
        id: 2,
        question: "Como criar usuário no MariaDB com permissão em um banco?",
        answer:
          "CREATE USER 'user'@'localhost' IDENTIFIED BY 'senha'; GRANT ALL ON banco.* TO 'user'@'localhost'; FLUSH PRIVILEGES;",
      },
      {
        id: 3,
        question: "Como fazer backup de um banco MariaDB?",
        answer: "mysqldump -u root nome_banco | gzip > backup.sql.gz",
      },
      {
        id: 4,
        question: "Como logar no PostgreSQL como o usuário postgres?",
        answer: "sudo -u postgres psql (autentica via socket Unix, sem senha).",
      },
      {
        id: 5,
        question: "Como restaurar backup PostgreSQL?",
        answer: "sudo -u postgres psql nome_banco < backup.sql (ou zcat se for .gz).",
      },
      {
        id: 6,
        question: "Por que NÃO expor banco para 0.0.0.0 sem firewall?",
        answer: "Bots escaneiam internet 24/7. Senha fraca = invadido em horas. Use SSH tunnel, VPN ou bind apenas em IPs internos.",
      },
    ],
    references: [
      { title: "MariaDB docs", url: "https://mariadb.com/kb/en/" },
      { title: "PostgreSQL Tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html" },
    ],
  },

  {
    id: "docker-debian",
    title: "Docker no Debian",
    icon: "🐳",
    category: "Servidores",
    description: "Instalar Docker + Docker Compose, rodar containers e conhecer os comandos essenciais.",
    objectives: [
      "Instalar Docker no Debian (forma oficial)",
      "Rodar containers e gerenciar imagens",
      "Usar Docker Compose para apps multi-container",
      "Entender volumes, networks e diferença entre imagem/container",
    ],
    content: [
      "Docker é sistema de containers — empacote app + dependências em uma 'imagem' que roda IGUAL em qualquer máquina (sem 'na minha máquina funciona'). É a forma moderna de implantar apps em servidores.",
      "Por que Docker em vez de instalar direto?\n• Isolamento — cada app em seu próprio espaço, não conflita com outros.\n• Reproducibilidade — mesma imagem roda igual em dev, staging, prod.\n• Versão — você roda PostgreSQL 15 sem afetar o 13 do sistema.\n• Limpeza fácil — 'docker rm' apaga tudo do container, sem deixar resíduos.",
      "Instalar Docker (forma oficial recomendada — repositório do Docker):\n\n# 1) Pré-requisitos\nsudo apt install -y ca-certificates curl gnupg\n\n# 2) Chave GPG do Docker\nsudo install -m 0755 -d /etc/apt/keyrings\nsudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc\nsudo chmod a+r /etc/apt/keyrings/docker.asc\n\n# 3) Repositório\necho \"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian $(. /etc/os-release && echo \\\"\\$VERSION_CODENAME\\\") stable\" \\\\\n  | sudo tee /etc/apt/sources.list.d/docker.list\n\n# 4) Instalar\nsudo apt update\nsudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n\n# 5) Adicionar seu usuário ao grupo docker (sem precisar sudo a cada comando)\nsudo usermod -aG docker $USER\n# Logout/login para aplicar\n\n# 6) Testar\ndocker version\ndocker run hello-world",
      "Comandos básicos:\n\ndocker pull NOME              baixa imagem do Docker Hub\ndocker run NOME               cria container e roda\ndocker run -d NOME            detached (background)\ndocker run -p 8080:80 nginx   mapeia porta host:container\ndocker ps                     containers RODANDO\ndocker ps -a                  todos (incluindo parados)\ndocker stop NOME              para\ndocker start NOME             inicia\ndocker rm NOME                apaga container\ndocker rmi IMAGEM             apaga imagem\ndocker images                 lista imagens\ndocker logs -f NOME           logs (tempo real)\ndocker exec -it NOME bash     entra no container",
      "Exemplo prático — rodar nginx em 5 segundos:\n\ndocker run -d --name meu-nginx -p 8080:80 nginx\ncurl http://localhost:8080\n# Verá a página padrão do nginx\n\ndocker stop meu-nginx\ndocker rm meu-nginx\n\nO 'd' = detached, '--name' nomeia, '-p HOST:CONTAINER' mapeia portas.",
      "Volumes — persistir dados (containers são EFÊMEROS por design):\n\ndocker volume create meus-dados\ndocker run -d -v meus-dados:/var/lib/mysql mysql\n\n# Ou bind mount (pasta do host)\ndocker run -d -v /home/wallyson/site:/usr/share/nginx/html nginx\n\nSem volume, dados somem quando container é apagado.",
      "Docker Compose — definir múltiplos containers em arquivo .yml. Exemplo: WordPress + MySQL.\n\nCrie docker-compose.yml:\n\nversion: '3.8'\nservices:\n  db:\n    image: mariadb:11\n    restart: always\n    environment:\n      MYSQL_ROOT_PASSWORD: rootpass\n      MYSQL_DATABASE: wp\n      MYSQL_USER: wp_user\n      MYSQL_PASSWORD: wp_pass\n    volumes:\n      - db_data:/var/lib/mysql\n\n  wordpress:\n    image: wordpress:latest\n    restart: always\n    depends_on:\n      - db\n    ports:\n      - '8080:80'\n    environment:\n      WORDPRESS_DB_HOST: db\n      WORDPRESS_DB_USER: wp_user\n      WORDPRESS_DB_PASSWORD: wp_pass\n      WORDPRESS_DB_NAME: wp\n\nvolumes:\n  db_data:\n\nDepois:\ndocker compose up -d            sobe tudo\ndocker compose ps               lista\ndocker compose logs -f          logs\ndocker compose down             para e remove\n\nWordPress disponível em http://localhost:8080.",
      "Limpeza de espaço (Docker pode ocupar muito):\n\ndocker system df              quanto Docker ocupa\ndocker system prune           remove containers parados, imagens órfãs, networks sem uso\ndocker system prune -a        remove TUDO que não está em uso (incluindo imagens)\ndocker volume prune           remove volumes órfãos\n\nCuidado: 'prune -a --volumes' apaga DADOS de volumes órfãos.",
    ],
    commands: [
      {
        command: "docker run",
        description: "Cria e roda container.",
        example: "docker run -d --name nginx -p 8080:80 nginx",
        flags: [
          { flag: "-d", description: "Detached (background)" },
          { flag: "--name NOME", description: "Nomeia container" },
          { flag: "-p HOST:CONTAINER", description: "Mapeia porta" },
          { flag: "-v VOL:/path", description: "Monta volume" },
          { flag: "-e VAR=val", description: "Variável de ambiente" },
          { flag: "--restart unless-stopped", description: "Reinicia se cair" },
        ],
      },
      {
        command: "docker ps",
        description: "Lista containers (rodando).",
        example: "docker ps -a",
        flags: [
          { flag: "-a", description: "Todos (incluindo parados)" },
          { flag: "-q", description: "Só IDs" },
        ],
      },
      {
        command: "docker logs",
        description: "Logs do container.",
        example: "docker logs -f nginx",
      },
      {
        command: "docker exec -it",
        description: "Entra no container (interativo).",
        example: "docker exec -it nginx bash",
      },
      {
        command: "docker stop / rm / rmi",
        description: "Para / remove container / remove imagem.",
        example: "docker stop nginx && docker rm nginx",
      },
      {
        command: "docker compose up",
        description: "Sobe stack do docker-compose.yml.",
        example: "docker compose up -d",
      },
      {
        command: "docker compose down",
        description: "Para e remove a stack.",
        example: "docker compose down",
      },
      {
        command: "docker system prune",
        description: "Limpa containers parados, imagens órfãs, networks sem uso.",
        example: "docker system prune -a",
      },
    ],
    tips: [
      {
        type: "info",
        title: "Adicione seu usuário ao grupo docker",
        content:
          "'sudo usermod -aG docker $USER' — depois você roda 'docker' sem sudo. Logout/login obrigatório. Sem isso, todo comando docker precisa sudo.",
      },
      {
        type: "warning",
        title: "Containers são efêmeros — use volumes",
        content:
          "Quando você 'docker rm' um container, todos os dados internos somem. Use volumes para persistir banco de dados, uploads, etc. Sem volume = dados perdidos.",
      },
      {
        type: "success",
        title: "Docker Compose é o caminho",
        content:
          "Para qualquer app não-trivial (WordPress + MySQL, Node + Postgres + Redis), use Docker Compose. Define tudo em um YAML, sobe com um comando, para com outro.",
      },
    ],
    practiceLabs: [
      {
        title: "Subir WordPress + MariaDB com Docker Compose",
        goal: "Stack completa funcionando em menos de 2 minutos.",
        steps: [
          "Crie docker-compose.yml.",
          "Suba com docker compose up -d.",
          "Acesse no navegador.",
          "Pare e limpe.",
        ],
        command: `# 1) Criar diretorio e arquivo
mkdir -p ~/lab-wordpress
cd ~/lab-wordpress

cat > docker-compose.yml << 'EOF'
services:
  db:
    image: mariadb:11
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: wp
      MYSQL_USER: wp_user
      MYSQL_PASSWORD: wp_pass
    volumes:
      - db_data:/var/lib/mysql

  wordpress:
    image: wordpress:latest
    restart: always
    depends_on:
      - db
    ports:
      - '8080:80'
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wp_user
      WORDPRESS_DB_PASSWORD: wp_pass
      WORDPRESS_DB_NAME: wp

volumes:
  db_data:
EOF

# 2) Subir
docker compose up -d

# 3) Aguardar inicializar (pode demorar 30-60s na primeira vez)
sleep 20
docker compose ps

# 4) Acessar (no navegador)
xdg-open http://localhost:8080
# Ou no terminal
curl -I http://localhost:8080

# 5) Logs (Ctrl+C para sair)
docker compose logs -f wordpress

# 6) Quando terminar - parar e remover (mantem volumes)
docker compose down

# 7) Para apagar TUDO (incluindo dados)
docker compose down -v`,
        verify:
          "Após 'docker compose up -d', http://localhost:8080 mostra wizard de instalação do WordPress. 'docker compose ps' mostra os 2 containers rodando.",
      },
    ],
    exercises: [
      {
        id: 1,
        question: "Como rodar nginx na porta 8080 do host?",
        answer: "docker run -d --name nginx -p 8080:80 nginx",
      },
      {
        id: 2,
        question: "Como ver logs de um container em tempo real?",
        answer: "docker logs -f NOME (ou docker compose logs -f para Compose).",
      },
      {
        id: 3,
        question: "Como entrar no container para debug?",
        answer: "docker exec -it NOME bash (ou sh se a imagem é alpine).",
      },
      {
        id: 4,
        question: "Para que serve um VOLUME?",
        answer:
          "Persistir dados quando container é apagado. Sem volume, banco de dados/uploads somem quando você 'docker rm' o container.",
      },
      {
        id: 5,
        question: "Como subir um stack do docker-compose.yml?",
        answer: "docker compose up -d (na pasta do yml). Para parar: docker compose down.",
      },
      {
        id: 6,
        question: "Como limpar Docker sem perder dados em uso?",
        answer:
          "docker system prune (limpa containers parados, imagens órfãs, networks sem uso — preserva o que está em uso).",
      },
    ],
    references: [
      { title: "Docker docs", url: "https://docs.docker.com/" },
      { title: "Docker Compose docs", url: "https://docs.docker.com/compose/" },
      { title: "Docker Hub (imagens)", url: "https://hub.docker.com/" },
    ],
  },
];
