"use client";

import { motion } from "framer-motion";
import { Film, Music, BellRing, Lightbulb, Thermometer, type LucideIcon } from "lucide-react";

const ITEMS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Film,
    title: "Ver",
    description:
      "Centralizá todas tus fuentes de video en un solo punto de control. Activá una escena y la sala se prepara sola: bajan las cortinas, se enciende la pantalla y arranca el proyector.",
  },
  {
    icon: Music,
    title: "Escuchar",
    description:
      "Audio distribuido por ambientes o en toda la casa al mismo tiempo. Llevá lo que estás escuchando de una habitación a otra con un solo toque.",
  },
  {
    icon: BellRing,
    title: "Cuidar",
    description:
      "Notificaciones al celular ante eventos de tu casa — una puerta que se abre, alguien que llega — para que estés al tanto estés donde estés.",
  },
  {
    icon: Lightbulb,
    title: "Iluminar",
    description:
      "Creá escenas de iluminación a medida y tomá el control de toda la casa con un solo botón, sin recorrerla para apagar todo antes de salir.",
  },
  {
    icon: Thermometer,
    title: "Climatizar",
    description:
      "Programá la temperatura antes de llegar y regulá el confort de tus equipos de frío o calor desde el celular, ambiente por ambiente.",
  },
];

export function DomoticaPossibilities() {
  return (
    <section className="py-16 sm:py-20 bg-wine-dark text-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="tracking-[0.2em] text-xs font-medium text-cream/70">
            DOMÓTICA PARA TU HOGAR
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Posibilidades de la domótica
          </h2>
          <p className="mt-4 text-cream/75 leading-relaxed">
            Brindamos servicios totalmente personalizados para cada proyecto.
            Esto es lo que tu casa puede hacer por vos.
          </p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-cream/15 bg-cream/5 p-6 hover:bg-cream/10 hover:border-cream/30 transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
