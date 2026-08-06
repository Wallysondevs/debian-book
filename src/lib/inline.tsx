import { Fragment, type ReactNode } from "react";

/**
 * Os capítulos do curso são escritos em markdown leve (**negrito** e `código`).
 * O React imprime string como texto puro, então sem isto o aluno vê asteriscos
 * e crases literais no meio da aula. Aqui convertemos apenas os dois casos que
 * de fato existem nos dados — itálico com um asterisco fica de fora de
 * propósito, para não quebrar caminhos como /etc/apt/sources.list.d/*.sources.
 */
const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`)/g;

export function renderInline(text: string): ReactNode {
  if (!text) return text;
  if (!text.includes("**") && !text.includes("`")) return text;

  return text.split(TOKEN).map((part, i) => {
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code
          key={i}
          className="px-1.5 py-0.5 rounded bg-muted text-primary font-mono text-[0.875em] break-words"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** Texto de capítulo com negrito e código inline já renderizados. */
export function RichText({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}
