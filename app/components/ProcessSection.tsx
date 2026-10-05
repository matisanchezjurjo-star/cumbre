"use client";

import { motion } from "framer-motion";
import { ClipboardList, Wrench, HeadphonesIcon, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { H3 } from "./ui/Typography";

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
        <SectionHeading
          align="center"
          eyebrow="CÓMO TRABAJAMOS"
          title="De la idea a la puesta en marcha"
          description="Nos encargamos de la instalación y configuración, como también del asesoramiento y la ingeniería de cada proyecto."
        />

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
                <span className="mt-4 block text-xs font-medium tracking-[0.2em] text-wine/75">
                  PASO {i + 1}
                </span>
                <H3 className="mt-2 text-wine">{step.title}</H3>
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
