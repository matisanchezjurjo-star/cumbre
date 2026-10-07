"use client";

import { motion } from "framer-motion";
import { Eyebrow, H2 } from "./ui/Typography";

const ITEMS = [
  {
    title: "Productos 100% originales",
    description: "Con garantía oficial de fábrica en todos los artículos.",
  },
  {
    title: "Envíos a todo el país",
    description:
      "Coordinamos transportista y plazo por WhatsApp apenas confirmás tu compra.",
  },
  {
    title: "Garantía legal de 6 meses",
    description:
      "Mínimo según la Ley 24.240. Ante una falla, coordinamos la reparación o el cambio.",
  },
  {
    title: "Atención directa, sin bots",
    description:
      "Te acompañamos antes y después de la compra por WhatsApp, con una persona real.",
  },
];

export function Trust() {
  return (
    <section id="nosotros" className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionIntro />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-r border-b border-border px-6 py-8"
            >
              <p className="font-serif text-lg text-wine leading-snug">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-xl"
    >
      <Eyebrow>POR QUÉ CUMBRE</Eyebrow>
      <H2 className="mt-4 text-ink">Razones para comprar acá</H2>
    </motion.div>
  );
}
