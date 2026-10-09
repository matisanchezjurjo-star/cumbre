"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";

// Same answers as before; project questions moved to the top.
const ITEMS = [
  {
    q: "¿Trabajan con constructoras o hacen proyectos de domótica?",
    a: "Sí — equipamos casas inteligentes, obras y oficinas de punta a punta: desde el proyecto y la ingeniería hasta la instalación, programación y postventa. Contanos tu proyecto en la sección Proyectos y Empresas.",
  },
  {
    q: "¿Qué garantía tienen los productos?",
    a: "Todos los productos cuentan con garantía legal de fábrica, con un mínimo de 6 meses desde la entrega según la Ley 24.240. Ante cualquier falla dentro de ese período, coordinamos la reparación o el cambio con el fabricante o su servicio técnico oficial.",
  },
  {
    q: "¿Qué marcas venden?",
    a: "Trabajamos con Samsung, TCL y Longvie, entre otras marcas líderes según la categoría de producto.",
  },
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
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-[72px] sm:py-28 bg-cream-soft">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 flex flex-col gap-10">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Lo que más nos preguntan" />
        <div className="border-t border-border">
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-border">
                <button
                  id={`faq-question-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="flex w-full items-center justify-between gap-4 py-[22px] text-left text-[1.0625rem] font-medium text-ink"
                >
                  <span>{item.q}</span>
                  <span className="shrink-0 h-8 w-8 flex items-center justify-center border border-border text-wine text-lg">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-[0.9375rem] leading-[1.7] text-ink-soft">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
