import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { Header } from "../../components/Header";
import { AnnouncementBar } from "../../components/AnnouncementBar";
import { Footer } from "../../components/CTAFooter";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { Button } from "../../components/ui/Button";
import { H2, H3 } from "../../components/ui/Typography";
import { DOMOTICA_EQUIPMENT } from "../../lib/domotica-equipment";
import { WHATSAPP_URL } from "../../lib/constants";

export function generateStaticParams() {
  return DOMOTICA_EQUIPMENT.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = DOMOTICA_EQUIPMENT.find((e) => e.slug === slug);
  if (!item) return { title: "Equipamiento no encontrado | Cumbre" };

  return {
    title: `${item.title} — Cumbre Domótica | Cumbre`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: item.images[0] ? [{ url: item.images[0].src }] : undefined,
    },
  };
}

export default async function DomoticaEquipmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = DOMOTICA_EQUIPMENT.find((e) => e.slug === slug);
  if (!item) notFound();

  const related = DOMOTICA_EQUIPMENT.filter((e) => e.slug !== item.slug).slice(
    0,
    3
  );

  const whatsappMessage = encodeURIComponent(
    `Hola! Tengo una consulta sobre ${item.title} (Cumbre Domótica).`
  );

  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 sm:py-14">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center flex-wrap gap-1.5 text-xs text-ink-soft mb-8"
          >
            <Link
              href="/cumbre-domotica"
              className="hover:text-wine transition-colors"
            >
              Cumbre Domótica
            </Link>
            <ChevronRight size={12} />
            <span>{item.title}</span>
          </nav>

          <div className="grid sm:grid-cols-2 gap-10 sm:gap-14">
            <div
              className={`grid gap-2 ${item.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
            >
              {item.images.map((img, i) => (
                <div
                  key={img.src}
                  className="relative aspect-square rounded-md overflow-hidden bg-cream-soft border border-wine/10"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div>
              <span className="inline-block rounded-full bg-wine/10 text-wine text-xs font-medium px-3 py-1.5">
                CUMBRE DOMÓTICA
              </span>

              <H2 as="h1" className="mt-4 text-wine">
                {item.title}
              </H2>

              <p className="mt-5 text-ink-soft leading-relaxed">
                {item.details}
              </p>

              <div className="mt-8">
                <H3 as="h2" className="text-wine">
                  Cómo lo instalamos
                </H3>
                <ul className="mt-4 space-y-3">
                  {item.installation.map((step) => (
                    <li key={step} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-wine"
                      />
                      <span className="text-sm text-ink/80 leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/proyectos#cotizar" variant="primary" size="lg">
                  Cotizá este equipamiento
                  <ArrowRight size={16} />
                </Button>
              </div>

              <a
                href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-wine hover:underline"
              >
                ¿Tenés dudas? Preguntanos por WhatsApp →
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20 sm:mt-28">
              <H2 className="text-ink">Otro equipamiento de Cumbre Domótica</H2>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-5">
                {related.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/cumbre-domotica/${e.slug}`}
                    className="group rounded-md overflow-hidden border border-wine/10 bg-cream-soft transition-all duration-300 hover:-translate-y-1 hover:border-wine/25 hover:shadow-[0_12px_28px_-12px_rgba(78,22,32,0.28)]"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={e.images[0].src}
                        alt={e.images[0].alt}
                        fill
                        sizes="(min-width: 640px) 33vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium text-wine">
                        {e.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
