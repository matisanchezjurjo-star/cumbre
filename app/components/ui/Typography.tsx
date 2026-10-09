import type { ElementType, ReactNode } from "react";

type HeadingProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function H1({ as: Tag = "h1", className = "", children }: HeadingProps) {
  return (
    <Tag
      className={`font-serif text-[2.4rem] sm:text-5xl lg:text-[4rem] leading-[1.03] tracking-[-0.015em] text-balance ${className}`}
    >
      {children}
    </Tag>
  );
}

export function H2({ as: Tag = "h2", className = "", children }: HeadingProps) {
  return (
    <Tag
      className={`font-serif text-[2rem] sm:text-4xl lg:text-[2.875rem] leading-[1.1] text-balance ${className}`}
    >
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

// 13px floor for labels (was 0.7rem / 11.2px).
export function Eyebrow({
  tone = "default",
  className = "",
  children,
}: {
  tone?: "default" | "inverted";
  className?: string;
  children: ReactNode;
}) {
  const color = tone === "inverted" ? "text-brass-soft" : "text-brass";
  return (
    <p
      className={`tracking-[0.16em] text-[0.8125rem] font-semibold uppercase ${color} ${className}`}
    >
      {children}
    </p>
  );
}
