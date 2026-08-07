interface Props {
  size?: number;
  className?: string;
  title?: string;
}

export function DebianLogo({ size = 40, className, title = "Debian GNU/Linux" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M16 4 C10 4 6 8 5 13 C4 10 3 8 5 5 C8 3 12 2 16 2 C20 2 24 3 27 5 C29 8 28 10 27 13 C26 8 22 4 16 4Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M5 13 C6 18 8 22 11 25 C9 22 7 18 6 14 C4 17 4 20 5 24 C6 27 9 29 12 30 C11 28 8 25 6 20"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M16 2 C15 2 14 2 13 3 C14 4 14 6 14 8 C14 6 15 4 16 2Z"
        fill="currentColor"
        opacity="0.3"
      />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
    </svg>
  );
}

export default DebianLogo;
