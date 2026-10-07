"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LINES } from "../lib/constants";
import { SectionHeading } from "./ui/SectionHeading";

const MotionLink = motion.create(Link);

export function Categories() {
  return (
    <section id="categorias" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="EXPLORÁ POR LÍNEA"
          title="Nuestras líneas"
          align="center"
        />

        <div className="mt-14 grid sm:grid-cols-3 gap-5">
          {LINES.map((line, i) => (
            <MotionLink
              key={line.slug}
              href={`/${line.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-sm border border-border bg-cream-soft p-8 transition-colors hover:border-wine/40 hover:bg-wine"
            >
              <h3 className="font-serif text-2xl text-wine group-hover:text-cream transition-colors">
                {line.name}
              </h3>
              <p className="mt-2 text-sm text-ink-soft group-hover:text-cream/80 transition-colors">
                {line.blurb}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-wine group-hover:text-cream transition-colors">
                Explorar
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </span>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
