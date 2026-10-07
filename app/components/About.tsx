"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, H2 } from "./ui/Typography";

const PILLARS = [
  {
    title: "Calidad y respaldo",
    description:
      "Trabajamos solo con marcas oficiales y productos con garantía de fábrica, para que tengas la tranquilidad de una compra segura.",
  },
  {
    title: "Acompañamiento real",
    description:
      "Te asesoramos antes, durante y después de la compra por WhatsApp, con atención directa de una persona real de principio a fin.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <Eyebrow>SOBRE CUMBRE</Eyebrow>
          <H2 className="mt-4 text-wine">Quiénes somos</H2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            Somos una empresa argentina dedicada a la venta e instalación de
            equipamiento tecnológico y domótica. Trabajamos con marcas
            oficiales y acompañamos cada proyecto de principio a fin, para
            hogares, obras y empresas en todo el país.
          </p>
          <a
            href="/proyectos"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-wine border-b border-wine/30 pb-0.5 hover:border-wine transition-colors"
          >
            Conocé más
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-border"
        >
          <p className="text-[0.7rem] tracking-[0.14em] text-brass font-medium uppercase">
            Nuestro compromiso
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-8">
            {PILLARS.map((p) => (
              <div key={p.title}>
                <p className="font-serif text-xl text-wine leading-snug">
                  {p.title}
                </p>
                <p className="mt-2.5 text-sm text-ink-soft leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
