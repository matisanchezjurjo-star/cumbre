"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Refrigerator,
  AirVent,
  Microwave,
  WashingMachine,
  Blender,
  type LucideIcon,
} from "lucide-react";
import { LINES, APPLIANCE_TYPES } from "../lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Refrigerator,
  AirVent,
  Microwave,
  WashingMachine,
  Blender,
};

const MotionLink = motion.create(Link);

export function Categories() {
  return (
    <section id="categorias" className="py-16 sm:py-20">
      {/* appliance type icon row */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex gap-8 sm:gap-12 overflow-x-auto pb-2 no-scrollbar">
          {APPLIANCE_TYPES.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <MotionLink
                key={item.label}
                href={`/productos?linea=${item.line}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex shrink-0 flex-col items-center gap-3 w-24"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-cream-soft border border-wine/10 text-wine group-hover:bg-wine group-hover:text-cream transition-colors">
                  <Icon size={30} strokeWidth={1.5} />
                </span>
                <span className="text-xs text-center text-ink/70 leading-tight">
                  {item.label}
                </span>
              </MotionLink>
            );
          })}
        </div>
      </div>

      {/* the two lines */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl text-center text-ink"
        >
          Nuestras líneas
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {LINES.map((line, i) => (
            <MotionLink
              key={line.slug}
              href={`/productos?linea=${line.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-wine/15 bg-cream-soft p-8 transition-colors hover:border-wine/40 hover:bg-wine hover:text-cream"
            >
              <h3 className="font-serif text-2xl text-wine group-hover:text-cream transition-colors">
                {line.name}
              </h3>
              <p className="mt-2 text-sm text-ink/60 group-hover:text-cream/80 transition-colors">
                {line.blurb}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-wine group-hover:text-cream transition-colors">
                Explorar →
              </span>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
