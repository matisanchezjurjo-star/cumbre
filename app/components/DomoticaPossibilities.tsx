"use client";

import { motion } from "framer-motion";
import { Eyebrow, H2 } from "./ui/Typography";

const ITEMS = [
  {
    title: "Ver",
    description:
      "Centralizá todas tus fuentes de video en un solo punto de control. Activá una escena y la sala se prepara sola: bajan las cortinas, se enciende la pantalla y arranca el proyector.",
  },
  {
    title: "Escuchar",
    description:
      "Audio distribuido por ambientes o en toda la casa al mismo tiempo. Llevá lo que estás escuchando de una habitación a otra con un solo toque.",
  },
  {
    title: "Cuidar",
    description:
      "Notificaciones al celular ante eventos de tu casa — una puerta que se abre, alguien que llega — para que estés al tanto estés donde estés.",
  },
  {
    title: "Iluminar",
    description:
      "Creá escenas de iluminación a medida y tomá el control de toda la casa con un solo botón, sin recorrerla para apagar todo antes de salir.",
  },
  {
    title: "Climatizar",
    description:
      "Programá la temperatura antes de llegar y regulá el confort de tus equipos de frío o calor desde el celular, ambiente por ambiente.",
  },
];

export function DomoticaPossibilities() {
  return (
    <section className="py-20 sm:py-28 bg-wine-dark text-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Eyebrow tone="inverted">DOMÓTICA PARA TU HOGAR</Eyebrow>
        <H2 className="mt-4 max-w-xl text-cream">
          Lo que tu casa puede hacer por vos
        </H2>
        <p className="mt-5 max-w-lg text-cream/70 leading-relaxed">
          Brindamos servicios totalmente personalizados para cada proyecto.
          Un solo sistema, cinco formas de vivirlo distinto.
        </p>

        <div className="mt-16 divide-y divide-cream/10 border-t border-cream/10">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid sm:grid-cols-12 gap-3 sm:gap-8 py-7 sm:py-8"
            >
              <span className="sm:col-span-1 text-sm text-cream/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="sm:col-span-3 font-serif text-2xl text-cream">
                {item.title}
              </h3>
              <p className="sm:col-span-8 text-cream/70 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
