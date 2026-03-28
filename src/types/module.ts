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

  export interface Module {
    id: string;
    title: string;
    icon: string;
    description: string;
    category: string;
    content: string[];
    commands: Command[];
    exercises: Exercise[];
  }
  