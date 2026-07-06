interface DebianLogoProps {
  className?: string;
  title?: string;
}

/**
 * Aproximação leve do "swirl" oficial do Debian (Open Use Logo).
 * Desenhado como espiral com stroke em currentColor — herda a cor do contexto
 * (branco sobre o quadrado vermelho da sidebar, vermelho no hero da Home).
 * Se preferir, dá pra trocar pelo SVG/PNG oficial depois.
 */
export function DebianLogo({ className, title = "Debian" }: DebianLogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M95 33 C 76 21, 49 23, 34 40 C 20 56, 22 84, 44 98 C 63 110, 90 105, 100 84 C 108 67, 101 48, 84 42 C 71 37, 56 43, 52 58 C 49 69, 55 79, 66 81"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DebianLogo;
