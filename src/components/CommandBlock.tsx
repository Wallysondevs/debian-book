import { Command } from "@/types/module";

  interface CommandBlockProps {
    command: Command;
  }

  const CommandBlock = ({ command }: CommandBlockProps) => {
    return (
      <div className="mb-6 animate-fade-in">
        <div className="code-block p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[hsl(var(--debian-light-red))] font-mono text-xs font-semibold tracking-wider uppercase">
              Comando
            </span>
          </div>
          <code className="block text-lg font-bold text-terminal">
            <span className="prompt">$ </span>{command.command}
          </code>
          <p className="mt-2 text-sm text-secondary-foreground leading-relaxed">
            {command.description}
          </p>
          {command.example && (
            <div className="mt-3 pt-3 border-t border-border">
              <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">Exemplo:</span>
              <pre className="mt-1">
                <code className="text-terminal text-sm whitespace-pre-wrap">
                  {command.example.split('\n').map((line, i) => (
                    <div key={i}><span className="prompt">$ </span>{line}</div>
                  ))}
                </code>
              </pre>
            </div>
          )}
          {command.output && (
            <div className="mt-2 pt-2 border-t border-border">
              <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">Saída:</span>
              <pre className="mt-1">
                <code className="text-muted-foreground text-sm whitespace-pre-wrap">{command.output}</code>
              </pre>
            </div>
          )}
        </div>
        {command.flags && command.flags.length > 0 && (
          <div className="mt-3 ml-4 space-y-1">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Flags / Opções:</span>
            {command.flags.map((flag, i) => (
              <div key={i} className="flex items-start gap-3 py-1">
                <code className="text-warning font-mono text-sm font-medium min-w-[120px] shrink-0">
                  {flag.flag}
                </code>
                <span className="text-sm text-secondary-foreground">{flag.description}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default CommandBlock;
  