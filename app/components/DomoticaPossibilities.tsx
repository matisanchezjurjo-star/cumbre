"use client";

import { motion } from "framer-motion";
import { Eyebrow, H2 } from "./ui/Typography";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

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
    <section className="py-[72px] sm:py-28 bg-wine-dark text-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        <div className="flex flex-col gap-4">
          <Eyebrow tone="inverted">Domótica para tu hogar</Eyebrow>
          <H2 className="text-cream">Lo que tu casa puede hacer por vos</H2>
          <p className="text-[1.0625rem] leading-relaxed text-border">
            Brindamos servicios totalmente personalizados para cada proyecto.
            Un solo sistema, cinco formas de vivirlo distinto.
          </p>
          <div className="mt-6 border-t border-wine">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="grid grid-cols-[36px_minmax(0,1fr)] gap-4 py-5 border-b border-wine"
              >
                <span className="text-sm text-brass-soft tabular-nums pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-2xl text-cream">{item.title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-border">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="proyectos" className="flex flex-col gap-4 lg:sticky lg:top-24 scroll-mt-24">
          <BeforeAfterSlider
            before="/domotica-antes-v1.webp"
            after="/domotica-despues-v1.webp"
            beforeAlt="Living con iluminación de techo plana, sin domótica"
            afterAlt="Mismo living con iluminación integral instalada por Cumbre"
            className="aspect-[4/5] !border-0 !rounded-none"
          />
          <p className="text-[0.9375rem] leading-relaxed text-border">
            Un mismo living, dos versiones: de una luz de techo plana a
            iluminación integral con escenas cálidas en cada mueble. Deslizá
            para ver la diferencia.
          </p>
        </div>
      </div>
    </section>
  );
}
