"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { BRANDS } from "../lib/constants";

const ITEMS = [
  {
    title: "Proyecto, instalación y postventa",
    description:
      "Nos encargamos de la instalación y configuración, como también del asesoramiento y la ingeniería de cada proyecto.",
  },
  {
    title: "Productos 100% originales",
    description: "Con garantía oficial de fábrica en todos los artículos.",
  },
  {
    title: "Postventa todos los días",
    description:
      "Online todos los días de la semana, o presencial de lunes a viernes.",
  },
  {
    title: "Atención directa, sin bots",
    description:
      "Te acompañamos antes y después de la compra por WhatsApp, con una persona real.",
  },
];

export function Trust() {
  return (
    <section id="por-que-cumbre" className="py-[72px] sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-12">
        <SectionHeading eyebrow="Por qué Cumbre" title="Un solo interlocutor, de punta a punta" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-r border-b border-border px-6 pt-7 pb-8 flex flex-col gap-2.5"
            >
              <p className="font-serif text-[1.3125rem] text-wine leading-snug">{item.title}</p>
              <p className="text-[0.9375rem] text-ink-soft leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
        {/* TODO: swap text for official brand logos (SVG) when available. */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-ink-soft font-semibold">
            Marcas oficiales
          </span>
          <div className="flex flex-wrap gap-10 text-[1.375rem] font-bold tracking-[0.04em] text-ink-soft">
            {BRANDS.map((b) => (
              <span key={b}>{b === "Samsung" ? "SAMSUNG" : b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
