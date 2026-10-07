"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";

const SLIDES = [
  {
    image: "/hero-smart-living-v1.webp",
    alt: "Living inteligente con panel de control integrado",
    eyebrow: "DOMÓTICA PARA TU HOGAR",
    title: "Convertimos tu casa en un hogar inteligente",
    subtitle:
      "Automatización, climatización y equipamiento tecnológico integrado — proyectamos e instalamos de punta a punta.",
    href: "/proyectos",
    ctaLabel: "Cotizá tu proyecto",
  },
  {
    image: "/hero-domotica-oven-v1.webp",
    alt: "Panel táctil de horno inteligente con recetas integradas",
    eyebrow: "EQUIPAMIENTO PARA EL HOGAR",
    title: "Cocinas equipadas con la última tecnología",
    subtitle:
      "Heladeras conectadas, anafes con control por app y asistentes de voz integrados a tu cocina.",
    href: "/proyectos",
    ctaLabel: "Cotizá tu proyecto",
  },
  {
    image: "/hero-smart-office-v1.webp",
    alt: "Oficina moderna equipada",
    eyebrow: "PARA TU EMPRESA",
    title: "Tecnología y equipamiento para tu oficina",
    subtitle:
      "Asesoramiento técnico y provisión en volumen para equipar espacios de trabajo completos.",
    href: "/proyectos",
    ctaLabel: "Cotizá tu proyecto",
  },
];

const SLIDE_DURATION = 8000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [next, index]);

  const slide = SLIDES[index];

  return (
    <section id="top" className="relative border-b border-border">
      <div className="grid lg:grid-cols-2">
        <div className="relative bg-cream flex items-center px-5 sm:px-8 lg:pl-16 lg:pr-12 py-16 lg:py-0 min-h-[360px] lg:min-h-[720px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="max-w-md"
            >
              <p className="text-ink-soft tracking-[0.18em] text-[0.7rem] font-medium uppercase mb-5">
                {slide.eyebrow}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em] text-wine">
                {slide.title}
              </h1>
              <p className="mt-5 text-ink-soft text-base leading-relaxed max-w-sm">
                {slide.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={slide.href} variant="primary" size="lg">
                  {slide.ctaLabel}
                </Button>
                <Button href="/productos" variant="secondary" size="lg">
                  Ver catálogo
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-5 sm:left-8 lg:left-16 flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="text-wine/40 hover:text-wine transition-colors"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <span className="text-xs tracking-[0.12em] text-ink-soft tabular-nums">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(SLIDES.length).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="text-wine/40 hover:text-wine transition-colors"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="relative h-[320px] lg:h-auto overflow-hidden bg-wine-dark">
          <AnimatePresence mode="sync">
            <motion.div
              key={slide.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 overflow-hidden"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: reduceMotion ? 1 : 1.08 }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
