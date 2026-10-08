import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./lib/cart-context";
import { SITE_URL } from "./lib/constants";
import { IntroLock } from "./components/IntroLock";

const playfair = Fraunces({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Plus_Jakarta_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_TITLE = "Cumbre — Equipamiento Tecnológico y Domótica";
const SITE_DESCRIPTION =
  "Diseñamos, asesoramos y equipamos casas inteligentes, obras y empresas con tecnología de punta a punta. También vendemos electrodomésticos premium para tu hogar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Cumbre",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/hero-smart-living-v1.webp",
        alt: "Living inteligente equipado por Cumbre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/hero-smart-living-v1.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <IntroLock />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
