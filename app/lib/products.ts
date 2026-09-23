import type { Product } from "./types";

// Catálogo real de Cumbre. Se carga a mano acá (no hay base de datos ni
// Tiendanube de por medio) — agregar un producto nuevo es agregar un
// objeto a este array con fotos ya copiadas a /public.
export const PRODUCTS: Product[] = [];

export function getProductsByLine(line: Product["line"]) {
  return PRODUCTS.filter((p) => p.line === line);
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
