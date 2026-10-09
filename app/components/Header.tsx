"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";
import { LogoLockup } from "./Logo";
import { useCart } from "../lib/cart-context";

const NAV_LINKS = [
  { label: "Domótica", href: "/cumbre-domotica" },
  { label: "Constructoras", href: "/cumbre-constructoras" },
  { label: "Empresas", href: "/empresas" },
  { label: "Equipamiento", href: "/cumbre-home" },
  { label: "Cumbre explica", href: "/cumbre-explica" },
];

const PRIMARY_CTA = { label: "Empezá tu proyecto", href: "/simulador" };

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-cream border-b border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-[4.5rem] flex items-center gap-8">
        <Link href="/" className="shrink-0" aria-label="Cumbre — inicio">
          <LogoLockup />
        </Link>

        <nav className="hidden xl:flex items-center gap-6 whitespace-nowrap">
          {NAV_LINKS.map((l) => {
            const active = pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  active ? "text-wine" : "text-ink hover:text-wine"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-wine transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          {count > 0 && (
            <Link
              href="/carrito"
              className="relative flex items-center text-ink hover:text-wine transition-colors"
              aria-label="Carrito"
            >
              <ShoppingCart size={19} />
              <span className="absolute -top-2 -right-2 h-4 min-w-4 px-1 rounded-full bg-wine text-cream text-[10px] font-medium flex items-center justify-center">
                {count}
              </span>
            </Link>
          )}
          <Link
            href={PRIMARY_CTA.href}
            className="bg-wine text-cream-soft hover:bg-wine-dark transition-colors text-xs sm:text-sm font-semibold px-3 py-2.5 sm:px-5 sm:py-3 whitespace-nowrap"
          >
            <span className="sm:hidden">Empezar</span>
            <span className="hidden sm:inline">{PRIMARY_CTA.label}</span>
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden h-11 w-11 flex items-center justify-center border border-border text-ink"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="xl:hidden border-t border-border px-5 sm:px-8 pt-2 pb-5 flex flex-col bg-cream">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-3.5 text-[1.0625rem] font-medium text-ink ${
                i < NAV_LINKS.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
