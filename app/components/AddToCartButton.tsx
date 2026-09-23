"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../lib/cart-context";
import type { Product } from "../lib/types";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => {
          addItem(product);
          setAdded(true);
          setTimeout(() => setAdded(false), 1500);
        }}
        className="rounded-full bg-wine text-cream font-medium px-7 py-3 hover:bg-wine-dark transition-colors"
      >
        {added ? "¡Agregado!" : "Agregar al carrito"}
      </button>
      <button
        onClick={() => {
          addItem(product);
          router.push("/carrito");
        }}
        className="rounded-full border border-wine/30 text-wine font-medium px-7 py-3 hover:bg-wine/5 transition-colors"
      >
        Comprar ahora
      </button>
    </div>
  );
}
