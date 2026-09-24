export const INSTAGRAM_URL = "https://instagram.com/ec.cumbre";
export const COUPON_CODE = "BIENVENIDA10";
export const WHATSAPP_URL = "https://wa.me/5491139195754";

export const LINES = [
  {
    name: "Cumbre Home",
    slug: "cumbre-home",
    blurb: "Tecnología de cocina para tus espacios: hornos, anafes, microondas y más. Para el hogar y para tu negocio.",
  },
  {
    name: "Electrodomésticos",
    slug: "electrodomesticos",
    blurb: "Climatización, lavado y todo lo que necesitan tus espacios, sean un hogar o una empresa.",
  },
] as const;

// Appliance type icon row — each links to /productos filtered by the exact
// product category (must match a `category` value used in products.ts).
export const APPLIANCE_TYPES = [
  {
    label: "Heladeras",
    icon: "Refrigerator",
    line: "electrodomesticos",
    category: "Heladeras y Freezers",
  },
  {
    label: "Aire Acondicionado",
    icon: "AirVent",
    line: "electrodomesticos",
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
    line: "electrodomesticos",
    category: "Lavado y Secado",
  },
  {
    label: "TV y Audio",
    icon: "Tv",
    line: "electrodomesticos",
    category: "TV y Audio",
  },
  {
    label: "Hornos y Anafes",
    icon: "Blender",
    line: "cumbre-home",
    category: "Hornos y Anafes",
  },
] as const;
