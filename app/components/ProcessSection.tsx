"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { H3 } from "./ui/Typography";

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
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="CÓMO TRABAJAMOS"
          title="De la idea a la puesta en marcha"
          description="Nos encargamos de la instalación y configuración, como también del asesoramiento y la ingeniería de cada proyecto."
        />

        <div className="mt-14 grid sm:grid-cols-3 gap-10 sm:gap-8 border-t border-border">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="pt-8"
            >
              <span className="font-serif text-5xl text-brass-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <H3 className="mt-5 text-wine">{step.title}</H3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
