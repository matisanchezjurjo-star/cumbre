"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import type { CartItem, Product } from "./types";

type State = { items: CartItem[] };

type Action =
  | { type: "add"; product: Product; qty: number }
  | { type: "remove"; slug: string }
  | { type: "setQty"; slug: string; qty: number }
  | { type: "clear" }
  | { type: "hydrate"; items: CartItem[] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return { items: action.items };
    case "add": {
      const existing = state.items.find(
        (i) => i.slug === action.product.slug
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.slug === action.product.slug
              ? { ...i, qty: i.qty + action.qty }
              : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            productId: action.product.id,
            slug: action.product.slug,
            name: action.product.name,
            price: action.product.price,
            image: action.product.images[0] ?? "",
            qty: action.qty,
          },
        ],
      };
    }
    case "remove":
      return { items: state.items.filter((i) => i.slug !== action.slug) };
    case "setQty":
      return {
        items: state.items.map((i) =>
          i.slug === action.slug ? { ...i, qty: Math.max(1, action.qty) } : i
        ),
      };
    case "clear":
      return { items: [] };
  }
}

const STORAGE_KEY = "cumbre-cart";

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  subtotal: number;
  count: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "hydrate", items: JSON.parse(raw) });
    } catch {
      // localStorage unavailable — cart just starts empty
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // ignore
    }
  }, [state.items]);

  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = state.items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem: (product, qty = 1) => dispatch({ type: "add", product, qty }),
        removeItem: (slug) => dispatch({ type: "remove", slug }),
        setQty: (slug, qty) => dispatch({ type: "setQty", slug, qty }),
        clear: () => dispatch({ type: "clear" }),
        subtotal,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
