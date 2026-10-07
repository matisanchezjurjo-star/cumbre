"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LogoMark } from "./Logo";
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

type Phase = "logo" | "carousel";

const LOGO_DURATION = 1600;
const SLIDE_DURATION = 8000;

export function Hero() {
  const [phase, setPhase] = useState<Phase>("logo");
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setPhase("carousel"), LOGO_DURATION);
    return () => clearTimeout(timer);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (phase !== "carousel") return;
    const id = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [phase, next, index]);

  const slide = SLIDES[index];
  const introDone = phase === "carousel";

  return (
    <section id="top" className="relative border-b border-wine-dark">
      <div className="relative h-[560px] sm:h-[680px] lg:h-[760px] w-full overflow-hidden bg-wine-dark">
        <AnimatePresence>
          {!introDone && (
            <motion.div
              key="logo-intro"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-20 bg-wine-dark"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center gap-3"
              >
                <LogoMark className="h-14 w-14 sm:h-20 sm:w-20" color="var(--cream)" />
                <span className="font-serif text-3xl sm:text-5xl text-cream tracking-[0.2em]">
                  CUMBRE
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {introDone && (
          <>
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
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/85 via-wine-dark/40 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 h-full mx-auto max-w-6xl px-5 sm:px-8 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-xl"
                >
                  <p className="flex items-center gap-2.5 text-cream/70 tracking-[0.16em] text-[0.7rem] font-medium mb-4">
                    <span className="h-px w-5 bg-brass-soft" aria-hidden="true" />
                    {slide.eyebrow}
                  </p>
                  <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.03] tracking-[-0.01em] text-cream">
                    {slide.title}
                  </h1>
                  <p className="mt-5 text-cream/80 text-base sm:text-lg max-w-sm">
                    {slide.subtitle}
                  </p>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <Button href={slide.href} variant="invert" size="lg">
                      {slide.ctaLabel}
                    </Button>
                    <Button href="/productos" variant="outline-invert" size="lg">
                      Ver catálogo
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={prev}
              aria-label="Anterior"
              className="hidden sm:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 h-9 w-9 items-center justify-center text-cream/70 hover:text-cream transition-colors"
            >
              <ChevronLeft size={26} strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="hidden sm:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 h-9 w-9 items-center justify-center text-cream/70 hover:text-cream transition-colors"
            >
              <ChevronRight size={26} strokeWidth={1.5} />
            </button>

            <div className="absolute bottom-8 left-5 sm:left-10 z-20 flex gap-2.5">
              {SLIDES.map((s, i) => (
                <button
                  key={s.image}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir a la diapositiva ${i + 1}`}
                  className={`h-[2px] transition-all ${
                    i === index ? "w-8 bg-cream" : "w-4 bg-cream/35"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
