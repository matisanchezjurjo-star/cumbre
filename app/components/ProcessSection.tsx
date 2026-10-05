"use client";

import { motion } from "framer-motion";
import { ClipboardList, Wrench, HeadphonesIcon, type LucideIcon } from "lucide-react";

const STEPS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ClipboardList,
    title: "Proyecto",
    description:
      "Analizamos en conjunto qué opciones de domótica se adaptan mejor a lo que buscás. Adaptamos el proyecto y la ingeniería de tu obra para que quede todo listo para la implementación.",
  },
  {
    icon: Wrench,
    title: "Instalación y programación",
    description:
      "Ejecutamos la instalación y configuración de todos los dispositivos. Hacemos la puesta a punto y la programación a medida de cada escena.",
  },
  {
    icon: HeadphonesIcon,
    title: "Postventa",
    description:
      "Nuestro servicio postventa es online todos los días de la semana, o presencial de lunes a viernes. Todos nuestros productos tienen garantía oficial.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-wine tracking-[0.2em] text-xs font-medium">
            CÓMO TRABAJAMOS
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
            De la idea a la puesta en marcha
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Nos encargamos de la instalación y configuración, como también del
            asesoramiento y la ingeniería de cada proyecto.
          </p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-3 gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-wine text-cream">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <span className="mt-4 block text-xs font-medium tracking-[0.2em] text-wine/60">
                  PASO {i + 1}
                </span>
                <h3 className="mt-2 font-serif text-xl text-wine">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
