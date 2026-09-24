import type { Product } from "./types";

// Catálogo real de Cumbre. Se carga a mano acá (no hay base de datos ni
// Tiendanube de por medio) — agregar un producto nuevo es agregar un
// objeto a este array con fotos ya copiadas a /public.
export const PRODUCTS: Product[] = [
  {
    id: "anafe-samsung-ctr264",
    slug: "anafe-electrico-vitroceramico-samsung-ctr264",
    name: "Anafe Eléctrico Vitrocerámico Samsung CTR264",
    price: 789999,
    images: ["/products/anafe.png"],
    line: "cumbre-home",
    category: "Hornos y Anafes",
    description:
      "Anafe eléctrico vitrocerámico Samsung con 4 zonas de cocción. Fácil limpieza y controles táctiles. 18 cuotas sin interés y envío gratis.",
    stock: 10,
  },
  {
    id: "aire-samsung-ar40f12",
    slug: "aire-acondicionado-samsung-split-ar40f12-12kbtu",
    name: "Aire Acondicionado Samsung Split Frío/Calor AR40F12 12KBTU Inverter",
    price: 1349999,
    images: ["/products/ac1.png"],
    line: "electrodomesticos",
    category: "Aire Acondicionado y Climatización",
    description:
      "Split frío/calor Samsung Inverter 12000 BTU, bajo consumo eléctrico. 18 cuotas sin interés y envío gratis.",
    stock: 8,
  },
  {
    id: "horno-samsung-dual-cook-flex",
    slug: "horno-electrico-samsung-dual-cook-flex-serie-5",
    name: "Horno Eléctrico Samsung Dual Cook Flex Serie 5",
    price: 2269999,
    images: ["/products/horno-dual.png"],
    line: "cumbre-home",
    category: "Hornos y Anafes",
    description:
      "Horno eléctrico empotrable Samsung con tecnología Dual Cook Flex: dos cámaras independientes para cocinar a distintas temperaturas al mismo tiempo. 18 cuotas sin interés y envío gratis.",
    stock: 5,
  },
  {
    id: "aire-samsung-ar24bsh",
    slug: "aire-acondicionado-samsung-split-ar24bsh",
    name: "Aire Acondicionado Samsung Split Frío/Calor AR24BSH con ahorro energético",
    price: 2999999,
    images: ["/products/ac2.png"],
    line: "electrodomesticos",
    category: "Aire Acondicionado y Climatización",
    description:
      "Split frío/calor Samsung con ahorro energético. 18 cuotas sin interés.",
    stock: 6,
  },
  {
    id: "microondas-samsung-smart-32",
    slug: "horno-microondas-samsung-smart-32-litros-air-fry",
    name: "Horno Microondas Samsung Smart 32 lts Air Fry Convección Negro",
    price: 769999,
    images: ["/products/microondas.png"],
    line: "cumbre-home",
    category: "Microondas",
    description:
      "Microondas Samsung Smart de 32 litros con función Air Fry y convección — cocina, gratina y fríe con aire. 6 cuotas sin interés y envío gratis.",
    stock: 12,
  },
];

export function getProductsByLine(line: Product["line"]) {
  return PRODUCTS.filter((p) => p.line === line);
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
