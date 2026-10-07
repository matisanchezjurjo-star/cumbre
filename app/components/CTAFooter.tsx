"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, AtSign } from "lucide-react";
import { LogoLockup } from "./Logo";
import { Button } from "./ui/Button";
import {
  INSTAGRAM_URL,
  WHATSAPP_URL,
  COUPON_CODE,
  BUSINESS_INFO,
} from "../lib/constants";

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-wine text-cream border-y border-wine-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center px-5 sm:px-8"
      >
        <h2 className="font-serif text-3xl sm:text-4xl">
          Tu primer pedido, con 10% OFF
        </h2>
        <p className="mt-4 text-cream/80">
          Usá el código <span className="font-semibold">{COUPON_CODE}</span>{" "}
          en el checkout de tu primera compra.
        </p>
        <Button href="/productos" variant="invert" size="lg" className="mt-8">
          Ver catálogo
        </Button>
      </motion.div>
    </section>
  );
}

const COLUMNS = [
  {
    title: "Más Buscados",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Cumbre Home", href: "/cumbre-home" },
      { label: "Cumbre Domótica", href: "/cumbre-domotica" },
      { label: "Cumbre Constructoras", href: "/cumbre-constructoras" },
    ],
  },
  {
    title: "Servicio al Cliente",
    links: [
      { label: "Estado de mi pedido", href: WHATSAPP_URL },
      { label: "Cambios y devoluciones", href: "/cambios-y-devoluciones" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos y Condiciones", href: "/terminos" },
      { label: "Política de Privacidad", href: "/privacidad" },
      { label: "Comunicate por WhatsApp", href: WHATSAPP_URL },
    ],
  },
];

export function Footer() {
  const [sent, setSent] = useState(false);

  return (
    <footer className="bg-wine-dark text-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-12 mb-14 border-b border-cream/10">
          <div className="flex items-center gap-2 text-cream/90">
            <Mail size={18} />
            <span className="font-medium">Newsletter</span>
            <span className="text-cream/60 hidden sm:inline">
              ¡Recibí nuestras novedades en tu email!
            </span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex w-full max-w-sm ml-0 sm:ml-auto border border-cream/20"
          >
            <input
              type="email"
              required
              placeholder="Email"
              disabled={sent}
              className="flex-1 bg-transparent px-4 py-2.5 text-sm placeholder:text-cream/60 outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={sent}
              className="border-l border-cream/20 bg-cream text-wine text-sm font-medium px-5 hover:bg-cream/90 transition-colors disabled:opacity-60"
            >
              {sent ? "¡Listo!" : "Suscribirme"}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          <div>
            <LogoLockup color="var(--cream)" />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-cream/70 hover:text-cream transition-colors"
            >
              <AtSign size={18} />
              @ec.cumbre
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.7rem] tracking-[0.12em] text-cream/50 font-medium mb-4 uppercase">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => {
                  const external = l.href.startsWith("http");
                  const linkClassName =
                    "text-cream/70 hover:text-cream text-sm transition-colors";
                  return (
                    <li key={l.label}>
                      {external ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClassName}
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className={linkClassName}>
                          {l.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 px-5 sm:px-8 text-center text-xs text-cream/60 space-y-1">
        {BUSINESS_INFO.legalName && (
          <p>
            {BUSINESS_INFO.legalName}
            {BUSINESS_INFO.cuit && ` — CUIT ${BUSINESS_INFO.cuit}`}
            {BUSINESS_INFO.address && ` — ${BUSINESS_INFO.address}`}
          </p>
        )}
        <p>
          © {new Date().getFullYear()} Cumbre — Las imágenes son
          ilustrativas y pueden variar, los precios y stock pueden variar
          sin previo aviso.
        </p>
      </div>
    </footer>
  );
}
