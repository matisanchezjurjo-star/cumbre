import type { ElementType, ReactNode } from "react";

/*
 * Formal type scale for the site. Visual size is decoupled from the
 * rendered tag via `as`, so a block can look like an H2 while staying
 * semantically correct in the document outline (e.g. a card title that
 * should be an h3 for accessibility, but reads at H4 size).
 */

type HeadingProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function H1({ as: Tag = "h1", className = "", children }: HeadingProps) {
  return (
    <Tag className={`font-serif text-4xl sm:text-5xl leading-tight ${className}`}>
      {children}
    </Tag>
  );
}

export function H2({ as: Tag = "h2", className = "", children }: HeadingProps) {
  return (
    <Tag className={`font-serif text-3xl sm:text-4xl leading-tight ${className}`}>
      {children}
    </Tag>
  );
}

export function H3({ as: Tag = "h3", className = "", children }: HeadingProps) {
  return (
    <Tag className={`font-serif text-xl sm:text-2xl leading-snug ${className}`}>
      {children}
    </Tag>
  );
}

export function H4({ as: Tag = "h4", className = "", children }: HeadingProps) {
  return (
    <Tag className={`font-serif text-lg leading-snug ${className}`}>
      {children}
    </Tag>
  );
}

export function Eyebrow({
  tone = "default",
  className = "",
  children,
}: {
  tone?: "default" | "inverted";
  className?: string;
  children: ReactNode;
}) {
  const color = tone === "inverted" ? "text-cream/70" : "text-wine";
  return (
    <p className={`tracking-[0.2em] text-xs font-medium ${color} ${className}`}>
      {children}
    </p>
  );
}
