"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWave } from "./SectionWave";
import { Button } from "./ui/Button";
import { SectionHeading } from "./ui/SectionHeading";
import { H3 } from "./ui/Typography";

const SERVICES = [
  {
    title: "Domótica para tu Hogar",
    description:
      "Automatización de luces, climatización, seguridad y entretenimiento — proyectamos e instalamos sistemas inteligentes integrados a tu hogar.",
    image: "/hero-domotica-panel-v1.webp",
  },
  {
    title: "Constructoras y Obra",
    description:
      "Trabajamos junto a constructoras y desarrolladores para equipar edificios y viviendas con tecnología desde la etapa de obra.",
    image: "/hero-door-v1.webp",
  },
  {
    title: "Empresas y Oficinas",
    description:
      "Equipamiento tecnológico en volumen para oficinas, locales y espacios de trabajo, con asesoramiento técnico de principio a fin.",
    image: "/hero-domotica-office-v1.webp",
  },
];

export function ServicesSection() {
  return (
    <section className="pt-16 sm:pt-20 bg-cream-soft">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-16 sm:pb-20">
        <SectionHeading
          eyebrow="NUESTRO SERVICIO"
          title="Equipamiento tecnológico para cada proyecto"
          description="Más que una tienda: diseñamos, asesoramos y equipamos con tecnología — para hogares que se vuelven inteligentes, obras que necesitan integración desde el día uno, y empresas que buscan un espacio de trabajo a la altura."
        />

        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href="/proyectos" className="group block">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/50 to-transparent" />
                </div>
                <H3 className="mt-4 text-wine">{s.title}</H3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  {s.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/proyectos" variant="primary" size="lg">
            Conocé el servicio y cotizá tu proyecto
          </Button>
        </div>
      </div>
      <SectionWave fill="#4e1620" />
    </section>
  );
}
