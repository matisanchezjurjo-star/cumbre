import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./lib/cart-context";
import { SITE_URL } from "./lib/constants";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cumbre — Electrodomésticos y Tecnología",
    template: "%s",
  },
  description:
    "Electrodomésticos premium para tus espacios, hogares y empresas. Cumbre Home (cocina) y línea general. Cuotas sin interés y envíos a todo el país.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
