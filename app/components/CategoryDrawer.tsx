"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { BRANDS, LINES } from "../lib/constants";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function CategoryDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Escape to close, Tab trapped inside the panel while open.
  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Categorías"
            className="fixed left-0 top-0 z-[70] h-full w-[85vw] max-w-sm bg-cream text-ink shadow-2xl overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-cream/10 bg-wine-dark text-cream sticky top-0 z-10">
              <span className="font-serif text-lg">Categorías</span>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Cerrar"
                className="hover:scale-110 transition-transform"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-5 pb-10">
              <Link
                href="/productos"
                onClick={onClose}
                className="block py-2 font-medium text-wine hover:translate-x-1 transition-transform"
              >
                Todos los productos
              </Link>

              <div className="mt-5 flex flex-col gap-3">
                {LINES.map((line) => (
                  <Link
                    key={line.slug}
                    href={`/${line.slug}`}
                    onClick={onClose}
                    className="group flex items-center justify-between gap-3 rounded-sm border border-wine/15 px-4 py-3.5 hover:border-wine/40 hover:bg-wine/5 transition-colors"
                  >
                    <div>
                      <p className="font-serif text-lg text-wine">
                        {line.name}
                      </p>
                      <p className="mt-0.5 text-xs text-ink-soft leading-snug">
                        {line.blurb}
                      </p>
                    </div>
                    <ChevronRight
                      size={18}
                      className="shrink-0 text-wine/50 group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-serif text-lg text-wine">Marcas</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {BRANDS.map((b) => (
                    <Link
                      key={b}
                      href={`/productos?marca=${encodeURIComponent(b)}`}
                      onClick={onClose}
                      className="rounded-full border border-wine/20 px-4 py-1.5 text-sm hover:border-wine/50 hover:bg-wine/5 transition-colors"
                    >
                      {b}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
