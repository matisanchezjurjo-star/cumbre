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
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-20 flex items-center gap-6 lg:gap-8">
        <Link href="/" className="shrink-0">
          <LogoLockup color="var(--cream)" />
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm">
          <Link
            href="/proyectos"
            className="rounded-full bg-cream/10 px-4 py-2 font-medium text-cream hover:bg-cream/15 transition-colors"
          >
            Proyectos y Empresas
          </Link>
          <button
            onClick={() => setDrawerOpen(true)}
            className="group flex items-center gap-1.5 text-cream/75 hover:text-cream transition-colors"
          >
            <LayoutGrid size={15} className="opacity-70" />
            Categorías
          </button>
        </nav>

        <SearchAutocomplete className="hidden md:block flex-1 max-w-sm" />

        <div className="ml-auto flex items-center gap-5">
          <Link
            href="/carrito"
            className="relative flex items-center text-cream/90 hover:text-cream hover:scale-110 transition-transform"
            aria-label="Carrito"
          >
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 h-4 min-w-4 px-1 rounded-full bg-cream text-wine text-[10px] font-medium flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-cream"
            aria-label="Abrir menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-cream/10 px-5 py-4 flex flex-col gap-4 bg-wine-dark">
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
