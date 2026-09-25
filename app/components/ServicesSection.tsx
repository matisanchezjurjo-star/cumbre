"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Casas Inteligentes",
    description:
      "Automatización de luces, climatización, seguridad y entretenimiento — proyectamos e instalamos sistemas inteligentes integrados a tu hogar.",
    image: "/hero-smart-living-v1.webp",
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
    image: "/hero-smart-office-v1.webp",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 bg-cream-soft">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-wine tracking-[0.2em] text-xs font-medium">
            NUESTRO SERVICIO
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-wine">
            Equipamiento tecnológico para cada proyecto
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Más que una tienda: diseñamos, asesoramos y equipamos con
            tecnología — para hogares que se vuelven inteligentes, obras que
            necesitan integración desde el día uno, y empresas que buscan un
            espacio de trabajo a la altura.
          </p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
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
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/50 to-transparent" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-wine">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  {s.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/proyectos"
            className="inline-block rounded-full bg-wine text-cream font-medium px-8 py-3.5 hover:bg-wine-dark hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Conocé el servicio y cotizá tu proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}
