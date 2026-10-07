"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, LayoutGrid } from "lucide-react";
import { LogoLockup } from "./Logo";
import { CategoryDrawer } from "./CategoryDrawer";
import { SearchAutocomplete } from "./SearchAutocomplete";
import { Button } from "./ui/Button";
import { useCart } from "../lib/cart-context";

export function Header() {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-wine-dark text-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-[4.5rem] flex items-center gap-8 lg:gap-10">
        <Link href="/" className="shrink-0">
          <LogoLockup color="var(--cream)" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          <Link
            href="/proyectos"
            className="group relative py-1 text-cream/85 hover:text-cream transition-colors"
          >
            Proyectos y Empresas
            <span className="absolute inset-x-0 -bottom-0.5 h-px bg-brass-soft scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </Link>
          <button
            onClick={() => setDrawerOpen(true)}
            className="group relative flex items-center gap-1.5 py-1 text-cream/85 hover:text-cream transition-colors"
          >
            <LayoutGrid size={14} className="opacity-70" />
            Categorías
            <span className="absolute inset-x-0 -bottom-0.5 h-px bg-brass-soft scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </button>
        </nav>

        <SearchAutocomplete className="hidden lg:block flex-1 max-w-sm" />

        <div className="ml-auto flex items-center gap-6">
          <Link
            href="/carrito"
            className="relative flex items-center text-cream/90 hover:text-cream transition-colors"
            aria-label="Carrito"
          >
            <ShoppingCart size={19} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 h-4 min-w-4 px-1 rounded-full bg-cream text-wine text-[10px] font-medium flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <Button
            href="/proyectos#cotizar"
            variant="invert"
            size="md"
            className="hidden lg:inline-flex"
          >
            Cotizá tu proyecto
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-cream"
            aria-label="Abrir menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-cream/10 px-5 py-4 flex flex-col gap-4 bg-wine-dark">
          <SearchAutocomplete />
          <Link
            href="/proyectos"
            onClick={() => setOpen(false)}
            className="font-semibold text-cream text-sm"
          >
            Proyectos y Empresas
          </Link>
          <button
            onClick={() => {
              setOpen(false);
              setDrawerOpen(true);
            }}
            className="flex items-center gap-1.5 text-cream/90 text-sm text-left"
          >
            <LayoutGrid size={15} className="opacity-70" />
            Categorías
          </button>
          <Button
            href="/productos"
            variant="invert"
            onClick={() => setOpen(false)}
            className="text-center"
          >
            Ver catálogo
          </Button>
        </div>
      )}

      <CategoryDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
