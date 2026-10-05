"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Eyebrow, H2 } from "./Typography";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "default",
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "default" | "inverted";
  align?: "left" | "center";
  className?: string;
}) {
  const isInverted = tone === "inverted";
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${alignClass} ${className}`}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <H2 className={`mt-3 ${isInverted ? "text-cream" : "text-wine"}`}>
        {title}
      </H2>
      {description && (
        <p
          className={`mt-4 leading-relaxed ${
            isInverted ? "text-cream/75" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
