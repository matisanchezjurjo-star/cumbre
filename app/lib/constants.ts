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

// Visual-only appliance types for the icon row — each links through to the
// Cumbre Home or Electrodomésticos category page above.
export const APPLIANCE_TYPES = [
  { label: "Heladeras", icon: "Refrigerator", line: "electrodomesticos" },
  { label: "Aire Acondicionado", icon: "AirVent", line: "electrodomesticos" },
  { label: "Microondas", icon: "Microwave", line: "cumbre-home" },
  { label: "Lavado", icon: "WashingMachine", line: "electrodomesticos" },
  { label: "Pequeños Electro", icon: "Blender", line: "cumbre-home" },
] as const;
