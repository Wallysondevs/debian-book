import { Module } from "@/types/module";
import { fundamentos } from "./modules/01-fundamentos";
import { instalacaoAmbiente } from "./modules/02-instalacao-ambiente";
import { terminalArquivos } from "./modules/03-terminal-arquivos";
import { edicaoBusca } from "./modules/04-edicao-busca";
import { permissoesUsuarios } from "./modules/05-permissoes-usuarios";
import { pacotes } from "./modules/06-pacotes";
import { sistema } from "./modules/07-sistema";
import { redeSeguranca } from "./modules/08-rede-seguranca";
import { shell } from "./modules/09-shell";
import { discosBackup } from "./modules/10-discos-backup";
import { servidores } from "./modules/11-servidores";

export const modules: Module[] = [
  ...fundamentos,
  ...instalacaoAmbiente,
  ...terminalArquivos,
  ...edicaoBusca,
  ...permissoesUsuarios,
  ...pacotes,
  ...sistema,
  ...redeSeguranca,
  ...shell,
  ...discosBackup,
  ...servidores,
];
