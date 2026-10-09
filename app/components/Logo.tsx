export function LogoMark({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none">
      <path
        d="M 63 316 L 212 66 L 288 176 L 356 66"
        stroke={color}
        strokeWidth="26"
        strokeLinejoin="round"
        strokeLinecap="round"
        transform="translate(-27 22) scale(0.92)"
      />
      <circle cx="323" cy="65" r="14" fill={color} />
    </svg>
  );
}

export function LogoLockup({
  className = "",
  color = "var(--wine)",
  subColor = "var(--ink-soft)",
}: {
  className?: string;
  color?: string;
  subColor?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0" color={color} />
      <div className="flex flex-col leading-none">
        <span
          className="font-serif tracking-[0.15em] text-xl leading-none"
          style={{ color }}
        >
          CUMBRE
        </span>
        <span
          className="hidden sm:block text-[10px] tracking-[0.2em] mt-1 uppercase whitespace-nowrap"
          style={{ color: subColor }}
        >
          Domótica · Equipamiento
        </span>
      </div>
    </div>
  );
}
