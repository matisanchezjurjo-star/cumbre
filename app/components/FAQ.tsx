"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { WHATSAPP_URL } from "../lib/constants";
import { SectionHeading } from "./ui/SectionHeading";

const ITEMS = [
  {
    q: "¿Hacen envíos a todo el país?",
    a: "Sí. Realizamos envíos a todo el país. Coordinamos el transportista y el plazo estimado por WhatsApp apenas confirmamos tu compra — varía según tu localidad.",
  },
  {
    q: "¿Cómo pago mi pedido?",
    a: "Elegís el producto en el catálogo y coordinamos la forma de pago directamente por WhatsApp, antes de confirmar el envío.",
  },
  {
    q: "¿Puedo devolver un producto si no me convence?",
    a: "Sí. Tenés 10 días corridos desde que recibís el pedido para arrepentirte de la compra, sin necesidad de justificar el motivo, según el artículo 34 de la Ley 24.240 de Defensa del Consumidor. El producto debe estar sin uso y en su embalaje original.",
  },
  {
    q: "¿Qué garantía tienen los productos?",
    a: "Todos los productos cuentan con garantía legal de fábrica, con un mínimo de 6 meses desde la entrega según la Ley 24.240. Ante cualquier falla dentro de ese período, coordinamos la reparación o el cambio con el fabricante o su servicio técnico oficial.",
  },
  {
    q: "¿Trabajan con constructoras o hacen proyectos de domótica?",
    a: "Sí — equipamos casas inteligentes, obras y oficinas de punta a punta: desde el proyecto y la ingeniería hasta la instalación, programación y postventa. Contanos tu proyecto en la sección Proyectos y Empresas.",
  },
  {
    q: "¿Qué marcas venden?",
    a: "Trabajamos con Samsung, TCL y Longvie, entre otras marcas líderes según la categoría de producto.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="PREGUNTAS FRECUENTES"
          title="Lo que más nos preguntan"
        />

        <div className="mt-10 divide-y divide-wine/10 border-y border-wine/10">
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-ink">{item.q}</span>
                  <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-cream-soft text-wine">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-ink/70 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink/60">
          ¿Tenés otra consulta?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-wine font-medium hover:underline"
          >
            Escribinos por WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
