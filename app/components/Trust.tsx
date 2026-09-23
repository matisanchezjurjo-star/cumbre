"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BadgeCheck, Truck, HeartHandshake, CreditCard } from "lucide-react";

const ITEMS = [
  { icon: BadgeCheck, text: "Productos 100% originales" },
  { icon: Truck, text: "Envíos a todo el país" },
  { icon: HeartHandshake, text: "Atención personalizada" },
  { icon: CreditCard, text: "Múltiples medios de pago" },
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
          className="mx-auto sm:mx-0"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-36 w-36 sm:h-44 sm:w-44"
          >
            <Image
              src="/pico-mascot-v2.webp"
              alt="Pico, la mascota de Cumbre"
              fill
              className="object-contain"
            />
          </motion.div>
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

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wine text-cream">
                  <item.icon size={18} />
                </span>
                <span className="text-ink/80">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
