"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Truck, HeartHandshake, ShieldCheck } from "lucide-react";
import { LogoMark } from "./Logo";

const ITEMS = [
  {
    icon: BadgeCheck,
    title: "Productos 100% originales",
    description: "Con garantía oficial de fábrica en todos los artículos.",
  },
  {
    icon: Truck,
    title: "Envíos a todo el país",
    description:
      "Coordinamos transportista y plazo por WhatsApp apenas confirmás tu compra.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía legal de 6 meses",
    description:
      "Mínimo según la Ley 24.240. Ante una falla, coordinamos la reparación o el cambio.",
  },
  {
    icon: HeartHandshake,
    title: "Atención directa, sin bots",
    description:
      "Te acompañamos antes y después de la compra por WhatsApp, con una persona real.",
  },
];

export function Trust() {
  return (
    <section id="nosotros" className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl grid sm:grid-cols-[auto_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto sm:mx-0 flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full bg-wine/8 border border-wine/15"
        >
          <LogoMark className="h-16 w-16 sm:h-20 sm:w-20" color="var(--wine)" />
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl text-ink"
          >
            Por qué comprar en Cumbre
          </motion.h2>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wine text-cream">
                  <item.icon size={18} />
                </span>
                <div>
                  <p className="font-medium text-ink">{item.title}</p>
                  <p className="mt-0.5 text-sm text-ink/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
