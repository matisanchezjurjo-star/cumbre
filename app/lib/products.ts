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
  {
    id: "tv-samsung-55-crystal-uhd",
    slug: "smart-tv-samsung-55-crystal-uhd-4k",
    name: 'Smart TV Samsung 55" Crystal UHD 4K',
    price: 1099999,
    images: ["/products/tv1.png"],
    line: "electrodomesticos",
    category: "TV y Audio",
    description:
      'Smart TV Samsung 55" Crystal UHD 4K. 9 cuotas sin interés y envío gratis.',
    stock: 7,
  },
  {
    id: "tv-samsung-50-u8000f",
    slug: "televisor-samsung-50-crystal-uhd-u8000f-2025",
    name: 'Televisor Samsung 50" Crystal UHD U8000F 4K Smart TV 2025',
    price: 917999,
    images: ["/products/tv2.png"],
    line: "electrodomesticos",
    category: "TV y Audio",
    description:
      'Televisor Samsung 50" Crystal UHD U8000F, modelo 2025. 6 cuotas sin interés y envío gratis.',
    stock: 7,
  },
  {
    id: "tv-tcl-55-v6c",
    slug: "televisor-tcl-55-v6c-4k-hdr-google-tv",
    name: 'Televisor TCL 55" V6C 4K HDR Google TV',
    price: 1114999,
    images: ["/products/tv3.png"],
    line: "electrodomesticos",
    category: "TV y Audio",
    description:
      'Televisor TCL 55" 4K HDR con Google TV integrado. 18 cuotas sin interés y envío gratis.',
    stock: 6,
  },
  {
    id: "tv-samsung-55-u8000f",
    slug: "televisor-samsung-55-crystal-uhd-u8000f-2025",
    name: 'Televisor Samsung 55" Crystal UHD U8000F 4K Smart TV 2025',
    price: 1039999,
    images: ["/products/tv4.png"],
    line: "electrodomesticos",
    category: "TV y Audio",
    description:
      'Televisor Samsung 55" Crystal UHD U8000F, modelo 2025. 6 cuotas sin interés y envío gratis.',
    stock: 5,
  },
  {
    id: "tv-samsung-43-neo-qled",
    slug: "televisor-samsung-43-neo-qled-4k-qn90d",
    name: 'Televisor Samsung 43" Neo QLED 4K QN90D',
    price: 1999999,
    images: ["/products/tv5.png"],
    line: "electrodomesticos",
    category: "TV y Audio",
    description:
      'Televisor Samsung 43" Neo QLED 4K, serie QN90D. 9 cuotas sin interés y envío gratis.',
    stock: 4,
  },
  {
    id: "heladera-samsung-side-by-side-rs27t5561b1",
    slug: "heladera-samsung-side-by-side-rs27t5561b1-685l",
    name: "Heladera Samsung Side by Side RS27T5561B1/ED de 685L",
    price: 4809999,
    images: ["/products/heladera1.png"],
    line: "electrodomesticos",
    category: "Heladeras y Freezers",
    description:
      "Heladera Samsung Side by Side de 685 litros, con dispenser de agua/hielo y Family Hub. 9 cuotas sin interés.",
    stock: 3,
  },
  {
    id: "lavasecarropas-samsung-bespoke-ai",
    slug: "lavasecarropas-samsung-bespoke-ai-22kg-15kg",
    name: "Lavasecarropas Samsung Bespoke AI de 22Kg de lavado y 15Kg de secado",
    price: 5999999,
    images: ["/products/lavasec1.png"],
    line: "electrodomesticos",
    category: "Lavado y Secado",
    description:
      "Lavasecarropas Samsung Bespoke AI, 22kg de lavado y 15kg de secado. 18 cuotas sin interés y envío gratis.",
    stock: 3,
  },
  {
    id: "heladera-samsung-french-door-836l",
    slug: "heladera-samsung-french-door-view-836l-inverter",
    name: "Heladera Samsung French Door View 836L Inverter WiFi Silver",
    price: 4799999,
    images: ["/products/heladera2.png"],
    line: "electrodomesticos",
    category: "Heladeras y Freezers",
    description:
      "Heladera Samsung French Door de 836 litros, Inverter, conectividad WiFi. 9 cuotas sin interés.",
    stock: 3,
  },
  {
    id: "lavasecarropas-samsung-wd4000t",
    slug: "lavasecarropas-samsung-9-5kg-ecobubble-wd4000t",
    name: "Lavasecarropas Samsung 9,5kg con Ecobubble WD4000T Blanco",
    price: 2999999,
    images: ["/products/lavasec2.png"],
    line: "electrodomesticos",
    category: "Lavado y Secado",
    description:
      "Lavasecarropas Samsung 9,5kg con tecnología Ecobubble. 18 cuotas sin interés y envío gratis.",
    stock: 5,
  },
  {
    id: "heladera-samsung-french-door-431l",
    slug: "heladera-samsung-french-door-431l-twin-cooling-inox",
    name: "Heladera Samsung French Door 431L Twin Cooling Acero Inox",
    price: 2849999,
    images: ["/products/heladera3.png"],
    line: "electrodomesticos",
    category: "Heladeras y Freezers",
    description:
      "Heladera Samsung French Door de 431 litros con tecnología Twin Cooling. 9 cuotas sin interés.",
    stock: 4,
  },
  {
    id: "heladera-samsung-bespoke-328-white",
    slug: "heladera-samsung-bespoke-328lts-clean-white",
    name: "Heladera Samsung Bespoke 328Lts Clean White",
    price: 2549999,
    images: ["/products/heladera4.png"],
    line: "electrodomesticos",
    category: "Heladeras y Freezers",
    description:
      "Heladera Samsung Bespoke de 328 litros, color blanco. Diseño minimalista.",
    stock: 4,
  },
  {
    id: "heladera-samsung-bespoke-328-gray",
    slug: "heladera-samsung-bespoke-328-lts-rb33-satin-gray",
    name: "Heladera Samsung Bespoke 328 lts RB33 Satin Gray",
    price: 2549999,
    images: ["/products/heladera5.png"],
    line: "electrodomesticos",
    category: "Heladeras y Freezers",
    description:
      "Heladera Samsung Bespoke de 328 litros, color gris satinado.",
    stock: 4,
  },
  {
    id: "lavarropas-samsung-9-5kg-ecobubble",
    slug: "lavarropas-samsung-blanco-9-5kg-inverter-ecobubble",
    name: "Lavarropas Samsung Blanco 9.5Kg Inverter con Ecobubble",
    price: 2499999,
    images: ["/products/lavarropas3.png"],
    line: "electrodomesticos",
    category: "Lavado y Secado",
    description:
      "Lavarropas Samsung Inverter de 9,5kg con tecnología Ecobubble. 18 cuotas sin interés y envío gratis.",
    stock: 6,
  },
  {
    id: "heladera-tcl-428l-cross-door",
    slug: "heladera-tcl-428l-cross-door-no-frost-inverter-p460cd",
    name: "Heladera TCL 428L Cross Door No Frost Inverter Inox P460CD",
    price: 2289999,
    images: ["/products/heladera6.png"],
    line: "electrodomesticos",
    category: "Heladeras y Freezers",
    description:
      "Heladera TCL Cross Door de 428 litros, No Frost Inverter. 18 cuotas sin interés.",
    stock: 3,
  },
  {
    id: "heladera-samsung-517l-freezer-superior",
    slug: "heladera-samsung-517l-freezer-superior-ai-energy-mode",
    name: "Heladera Samsung 517L Freezer Superior con AI Energy Mode Black",
    price: 2149999,
    images: ["/products/heladera7.png"],
    line: "electrodomesticos",
    category: "Heladeras y Freezers",
    description:
      "Heladera Samsung 517 litros, freezer superior, con AI Energy Mode para ahorro de energía.",
    stock: 4,
  },
  {
    id: "heladera-samsung-382l-twin-cooling",
    slug: "heladera-samsung-freezer-superior-twin-cooling-plus-382lt",
    name: "Heladera Samsung freezer superior Twin Cooling Plus 382Lt",
    price: 1678999,
    images: ["/products/heladera8.png"],
    line: "electrodomesticos",
    category: "Heladeras y Freezers",
    description:
      "Heladera Samsung 382 litros, freezer superior, tecnología Twin Cooling Plus.",
    stock: 5,
  },
  {
    id: "heladera-samsung-362l-twin-cooling",
    slug: "heladera-samsung-freezer-superior-twin-cooling-plus-362l",
    name: "Heladera Samsung freezer superior Twin Cooling Plus 362 L",
    price: 1554999,
    images: ["/products/heladera9.png"],
    line: "electrodomesticos",
    category: "Heladeras y Freezers",
    description:
      "Heladera Samsung 362 litros, freezer superior, tecnología Twin Cooling Plus.",
    stock: 5,
  },
  {
    id: "lavarropas-samsung-7-5kg-carga-superior",
    slug: "lavarropas-samsung-inverter-7-5kg-carga-superior-ecobubble",
    name: "Lavarropas Samsung Inverter 7,5kg Carga Superior Digital Ecobubble Blanco",
    price: 1499999,
    images: ["/products/lavarropas4.png"],
    line: "electrodomesticos",
    category: "Lavado y Secado",
    description:
      "Lavarropas Samsung Inverter de carga superior, 7,5kg, con Ecobubble. 18 cuotas sin interés y envío gratis.",
    stock: 6,
  },
  {
    id: "heladera-samsung-321l-twin-cooling",
    slug: "heladera-samsung-freezer-superior-twin-cooling-plus-321lt",
    name: "Heladera Samsung Freezer Superior Twin Cooling Plus 321Lt",
    price: 1289999,
    images: ["/products/heladera10.png"],
    line: "electrodomesticos",
    category: "Heladeras y Freezers",
    description:
      "Heladera Samsung 321 litros, freezer superior, tecnología Twin Cooling Plus.",
    stock: 6,
  },
];

export function getProductsByLine(line: Product["line"]) {
  return PRODUCTS.filter((p) => p.line === line);
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
