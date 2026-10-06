import type { MetadataRoute } from "next";
import { PRODUCTS } from "./lib/products";
import { DOMOTICA_EQUIPMENT } from "./lib/domotica-equipment";
import { SITE_URL } from "./lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/productos",
    "/cumbre-home",
    "/cumbre-domotica",
    "/cumbre-constructoras",
    "/terminos",
    "/privacidad",
    "/cambios-y-devoluciones",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${SITE_URL}/productos/${p.slug}`,
    lastModified: new Date(),
  }));

  const domoticaEquipmentRoutes = DOMOTICA_EQUIPMENT.map((e) => ({
    url: `${SITE_URL}/cumbre-domotica/${e.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes, ...domoticaEquipmentRoutes];
}
