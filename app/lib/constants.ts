export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://cumbre-s1uh.vercel.app";

export const INSTAGRAM_URL = "https://instagram.com/cumbre.te";

// Completar con los datos reales del negocio para que aparezcan en el
// footer (razón social, CUIT, domicilio fiscal). Mientras legalName esté
// vacío, el Footer no muestra esta línea.
export const BUSINESS_INFO = {
  legalName: "",
  cuit: "",
  address: "",
};
export const COUPON_CODE = "BIENVENIDA10";
export const WHATSAPP_URL = "https://wa.me/5491139195754";

export const LINES = [
  {
    name: "Cumbre Home",
    slug: "cumbre-home",
    blurb:
      "Equipamiento para tu hogar, living, cocina y empresa: hornos, anafes, microondas, heladeras, climatización, lavado, TV y audio.",
  },
  {
    name: "Cumbre Domótica",
    slug: "cumbre-domotica",
    blurb:
      "Automatización e integración inteligente para tu casa, obra o empresa: luces, climatización, seguridad y control centralizado.",
  },
  {
    name: "Cumbre Constructoras",
    slug: "cumbre-constructoras",
    blurb:
      "Equipamiento técnico para constructoras y desarrollos: cercos perimetrales eléctricos e inteligentes, y provisión en volumen.",
  },
] as const;

// Appliance type icon row — each links to /productos filtered by the exact
// product category (must match a `category` value used in products.ts).
export const APPLIANCE_TYPES = [
  {
    label: "Heladeras",
    icon: "Refrigerator",
    line: "cumbre-home",
    category: "Heladeras y Freezers",
  },
  {
    label: "Aire Acondicionado",
    icon: "AirVent",
    line: "cumbre-home",
    category: "Aire Acondicionado y Climatización",
  },
  {
    label: "Microondas",
    icon: "Microwave",
    line: "cumbre-home",
    category: "Microondas",
  },
  {
    label: "Lavado",
    icon: "WashingMachine",
    line: "cumbre-home",
    category: "Lavado y Secado",
  },
  {
    label: "TV y Audio",
    icon: "Tv",
    line: "cumbre-home",
    category: "TV y Audio",
  },
  {
    label: "Hornos y Anafes",
    icon: "Blender",
    line: "cumbre-home",
    category: "Hornos y Anafes",
  },
] as const;

// Todas las categorías (para el panel lateral y la página de cada línea),
// agrupadas por línea. `image` es una foto real de un producto de esa
// categoría, usada como miniatura en /cumbre-home.
export const CATEGORIES = [
  {
    label: "Hornos y Anafes",
    icon: "Flame",
    line: "cumbre-home",
    category: "Hornos y Anafes",
    image: "/products/anafe.webp",
  },
  {
    label: "Microondas",
    icon: "Microwave",
    line: "cumbre-home",
    category: "Microondas",
    image: "/products/microondas.webp",
  },
  {
    label: "Campanas y Extractores",
    icon: "Wind",
    line: "cumbre-home",
    category: "Campanas y Extractores",
    image: "/products/campana1.webp",
  },
  {
    label: "Heladeras y Freezers",
    icon: "Refrigerator",
    line: "cumbre-home",
    category: "Heladeras y Freezers",
    image: "/products/heladera1.webp",
  },
  {
    label: "Aire Acondicionado y Climatización",
    icon: "AirVent",
    line: "cumbre-home",
    category: "Aire Acondicionado y Climatización",
    image: "/products/ac1.webp",
  },
  {
    label: "Lavado y Secado",
    icon: "WashingMachine",
    line: "cumbre-home",
    category: "Lavado y Secado",
    image: "/products/lavasec1.webp",
  },
  {
    label: "TV y Audio",
    icon: "Tv",
    line: "cumbre-home",
    category: "TV y Audio",
    image: "/products/tv1.webp",
  },
] as const;

export const BRANDS = ["Samsung", "TCL", "Longvie"] as const;
