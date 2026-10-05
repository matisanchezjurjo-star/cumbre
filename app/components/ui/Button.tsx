import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes, MouseEventHandler } from "react";

type Variant = "primary" | "secondary" | "ghost" | "invert" | "outline-invert";
type Size = "md" | "lg";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-wine text-cream hover:bg-wine-dark active:scale-[0.98] hover:scale-[1.02]",
  secondary:
    "border border-wine text-wine hover:bg-wine hover:text-cream active:scale-[0.98]",
  ghost: "text-wine hover:bg-wine/10 active:scale-[0.98]",
  // For use over dark photography (e.g. the Hero), where a solid wine
  // button wouldn't separate from the image behind it.
  invert:
    "bg-cream text-wine hover:bg-cream-soft active:scale-[0.98] hover:scale-[1.02]",
  "outline-invert":
    "border border-cream/50 text-cream hover:bg-cream/10 active:scale-[0.98]",
};

const SIZE_CLASSES: Record<Size, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap";

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  onClick,
  ...rest
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${BASE} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
