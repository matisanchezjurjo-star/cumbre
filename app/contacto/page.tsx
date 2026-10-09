import type { Metadata } from "next";
import Image from "next/image";
import { AtSign, MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { QuoteForm } from "../components/QuoteForm";
import { Eyebrow, H1, H3 } from "../components/ui/Typography";
import { WHATSAPP_URL, INSTAGRAM_URL } from "../lib/constants";

export const metadata: Metadata = {
  title: "Contacto | Cumbre",
  description:
    "Escribinos por WhatsApp o dejanos tus datos y te contactamos para asesorarte sobre tu proyecto.",
};

const WHATSAPP_DISPLAY = "+54 9 11 3919-5754";

export default function ContactoPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <section className="bg-cream-soft py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Eyebrow>CONTACTO</Eyebrow>
            <H1 className="mt-3 text-wine max-w-2xl">Hablemos de tu proyecto</H1>
            <p className="mt-5 text-ink-soft text-base sm:text-lg max-w-2xl">
              Contanos qué necesitás y te asesoramos por WhatsApp, o dejanos
              tus datos en el formulario y te contactamos nosotros.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <H3 className="text-wine">Información</H3>
              <div className="mt-6 space-y-5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-ink hover:text-wine transition-colors"
                >
                  <MessageCircle size={18} className="text-wine shrink-0" />
                  <span>
                    <span className="block font-medium">{WHATSAPP_DISPLAY}</span>
                    <span className="block text-sm text-ink-soft">
                      Respondemos por WhatsApp todos los días
                    </span>
                  </span>
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-ink hover:text-wine transition-colors"
                >
                  <AtSign size={18} className="text-wine shrink-0" />
                  <span>
                    <span className="block font-medium">@cumbre.te</span>
                    <span className="block text-sm text-ink-soft">
                      Seguinos en Instagram
                    </span>
                  </span>
                </a>
              </div>

              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-sm border border-border">
                <Image
                  src="/hero-door-v1.webp"
                  alt="Entrada de proyecto equipado por Cumbre"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
