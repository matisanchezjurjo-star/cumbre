"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";

const STEPS = [
  {
    title: "Proyecto",
    description:
      "Analizamos en conjunto qué opciones de domótica se adaptan mejor a lo que buscás. Adaptamos el proyecto y la ingeniería de tu obra para que quede todo listo para la implementación.",
  },
  {
    title: "Instalación y programación",
    description:
      "Ejecutamos la instalación y configuración de todos los dispositivos. Hacemos la puesta a punto y la programación a medida de cada escena.",
  },
  {
    title: "Postventa",
    description:
      "Nuestro servicio postventa es online todos los días de la semana, o presencial de lunes a viernes. Todos nuestros productos tienen garantía oficial.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-[72px] sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-12">
        <SectionHeading eyebrow="Cómo trabajamos" title="De la idea a la puesta en marcha" />
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10 border-t border-border">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="pt-8 flex flex-col gap-3.5"
            >
              <span className="font-serif text-5xl leading-none text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl text-ink">{step.title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
