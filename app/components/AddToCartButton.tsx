"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../lib/cart-context";
import type { Product } from "../lib/types";
import { Button } from "./ui/Button";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        size="lg"
        variant="primary"
        onClick={() => {
          addItem(product);
          setAdded(true);
          setTimeout(() => setAdded(false), 1500);
        }}
      >
        {added ? "¡Agregado!" : "Agregar al carrito"}
      </Button>
      <Button
        size="lg"
        variant="secondary"
        onClick={() => {
          addItem(product);
          router.push("/carrito");
        }}
      >
        Comprar ahora
      </Button>
    </div>
  );
}
