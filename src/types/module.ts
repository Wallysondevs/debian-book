export interface Command {
  command: string;
  description: string;
  example?: string;
  flags?: { flag: string; description: string }[];
  output?: string;
}

export interface Exercise {
  id: number;
  question: string;
  hint?: string;
  answer: string;
}

export interface Tip {
  type: "info" | "warning" | "danger" | "success";
  title?: string;
  content: string;
}

export interface PracticeLab {
  title: string;
  goal: string;
  steps: string[];
  command?: string;
  expected?: string;
  verify?: string;
}

export interface Reference {
  title: string;
  url?: string;
  description?: string;
}

export type ModuleLevel = "iniciante" | "intermediario" | "avancado";

export interface Module {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  /** Nível pedagógico — usado no filtro I/M/A e no badge. */
  level?: ModuleLevel;
  /** Tempo estimado de leitura em minutos. */
  readMinutes?: number;
  objectives?: string[];
  content: string[];
  commands: Command[];
  tips?: Tip[];
  practiceLabs?: PracticeLab[];
  exercises: Exercise[];
  references?: Reference[];
}
