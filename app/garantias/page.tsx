import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Eyebrow, H1, H2 } from "../components/ui/Typography";
import { BRANDS } from "../lib/constants";

export const metadata: Metadata = {
  title: "Garantías y Certificaciones | Cumbre",
  description:
    "Productos originales, garantía oficial de fábrica y marcas autorizadas que representamos en Cumbre.",
};

const GUARANTEES = [
  {
    title: "Productos 100% originales",
    description:
      "Con garantía oficial de fábrica en todos los artículos que vendemos.",
  },
  {
    title: "Garantía legal de 6 meses",
    description:
      "Mínimo según la Ley 24.240. Ante una falla, coordinamos la reparación o el cambio con el fabricante o su servicio técnico oficial.",
  },
  {
    title: "10 días para arrepentirte",
    description:
      "Conforme al artículo 34 de la Ley 24.240, sin necesidad de justificar el motivo.",
  },
  {
    title: "Envíos a todo el país",
    description:
      "Coordinamos transportista y plazo por WhatsApp apenas confirmás tu compra.",
  },
  {
    title: "Atención directa, sin bots",
    description:
      "Te acompañamos antes y después de la compra por WhatsApp, con una persona real.",
  },
];

export default function GarantiasPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <section className="bg-cream-soft py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Eyebrow>COMPAÑÍA</Eyebrow>
            <H1 className="mt-3 text-wine max-w-2xl">
              Garantías y Certificaciones
            </H1>
            <p className="mt-5 text-ink-soft text-base sm:text-lg max-w-2xl">
              Compramos directamente a distribuidores oficiales y respaldamos
              cada venta con garantía de fábrica, para que tengas la
              tranquilidad de una compra segura.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="divide-y divide-border border-t border-b border-border">
              {GUARANTEES.map((g) => (
                <div
                  key={g.title}
                  className="grid sm:grid-cols-12 gap-3 sm:gap-8 py-6"
                >
                  <CheckCircle2
                    size={18}
                    className="sm:col-span-1 mt-0.5 shrink-0 text-wine"
                  />
                  <p className="sm:col-span-3 font-serif text-lg text-wine leading-snug">
                    {g.title}
                  </p>
                  <p className="sm:col-span-8 text-ink-soft leading-relaxed max-w-xl">
                    {g.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-cream-soft">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <H2 className="text-wine">Marcas que representamos</H2>
            <p className="mt-2 text-ink-soft max-w-2xl">
              Somos distribuidores autorizados de las siguientes marcas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {BRANDS.map((b) => (
                <span
                  key={b}
                  className="rounded-sm border border-border bg-cream px-6 py-4 font-serif text-xl text-wine"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
