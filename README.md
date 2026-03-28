# 📗 Debian — Guia Completo em Português

  Guia completo do Debian GNU/Linux em Português Brasileiro — do iniciante ao avançado, com exemplos práticos, comandos detalhados e exercícios interativos.

  🌐 **Acesse online:** https://wallysondevs.github.io/debian-book/

  ## 📚 Conteúdo (24 Módulos)

  | # | Módulo | Categoria |
  |---|--------|-----------|
  | 01 | O que é Linux e GNU | Fundamentos Teóricos |
  | 02 | O Projeto Debian | Fundamentos Teóricos |
  | 03 | Repositórios Debian | Fundamentos Teóricos |
  | 04 | Instalando o Debian | Instalação e Ambiente |
  | 05 | Ambientes Gráficos | Instalação e Ambiente |
  | 06 | Primeiros Passos no Terminal | Instalação e Ambiente |
  | 07 | Navegação no Sistema de Arquivos | Comandos Essenciais |
  | 08 | Manipulação de Arquivos | Comandos Essenciais |
  | 09 | Permissões e Propriedade | Permissões e Usuários |
  | 10 | Gestão de Usuários e Grupos | Permissões e Usuários |
  | 11 | Gerenciamento de Pacotes com APT | Administração do Sistema |
  | 12 | dpkg: Gerenciamento Baixo Nível | Administração do Sistema |
  | 13 | Processos e Monitoramento | Administração do Sistema |
  | 14 | Configuração de Rede | Rede e Segurança |
  | 15 | Firewall com UFW | Rede e Segurança |
  | 16 | Systemd e Serviços | Rede e Segurança |
  | 17 | Pipes e Redirecionamento | Produtividade e Shell |
  | 18 | Atalhos e Produtividade | Produtividade e Shell |
  | 19 | Shell Scripting Básico | Shell Scripting |
  | 20 | Obtendo Ajuda no Linux | Referência Rápida |
  | 21 | SSH: Conexão Remota Segura | Acesso Remoto e SSH |
  | 22 | Servidor Web no Debian | Serviços Linux |
  | 23 | Servidor de Banco de Dados | Serviços Linux |
  | 24 | IaC: Script de Provisionamento | Infraestrutura como Código |

  ## 🛠️ Tecnologias

  - **React 18** + **Vite** + **TypeScript**
  - **Tailwind CSS** + **shadcn/ui**
  - **Hash Router** (compatível com GitHub Pages)
  - Tema vermelho Debian (hsl 340 90% 43%)

  ## 💻 Rodar Localmente

  ```bash
  git clone https://github.com/Wallysondevs/debian-book.git
  cd debian-book
  npm install
  npm run dev
  ```

  ## 🚀 Deploy no GitHub Pages

  ### Passo 1: Criar o workflow de deploy

  Crie o arquivo `.github/workflows/deploy.yml` no repositório com o conteúdo abaixo.
  Você pode criar diretamente pelo GitHub: clique em **Add file → Create new file** e digite `.github/workflows/deploy.yml` como nome:

  ```yaml
  name: Deploy to GitHub Pages

  on:
    push:
      branches: [main]

  permissions:
    contents: read
    pages: write
    id-token: write

  concurrency:
    group: "pages"
    cancel-in-progress: true

  jobs:
    build-and-deploy:
      environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: 20
        - run: npm install --force
        - run: npm run build
        - uses: actions/configure-pages@v4
        - uses: actions/upload-pages-artifact@v3
          with:
            path: dist
        - id: deployment
          uses: actions/deploy-pages@v4
  ```

  ### Passo 2: Configurar o GitHub Pages

  1. Vá em **Settings** → **Pages**
  2. Em **Source**, selecione **GitHub Actions**
  3. Salve as configurações

  ### Passo 3: Acionar o deploy

  O deploy acontece automaticamente a cada push na branch `main`. Para forçar agora, acesse a aba **Actions** e rode o workflow manualmente.

  ---

  Feito com ❤️ para a comunidade Debian brasileira.
  