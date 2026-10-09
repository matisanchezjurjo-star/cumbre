import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/CTAFooter";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ARTICLES } from "../lib/explica";

export const metadata: Metadata = {
  title: "Cumbre explica — Domótica sin tecnicismos | Cumbre",
  description:
    "Respuestas cortas y claras a las preguntas que más nos hacen sobre casas inteligentes: internet, cortes de luz, Matter y por dónde empezar.",
};

const n = (i: number) => String(i + 1).padStart(2, "0");

export default function CumbreExplicaPage() {
  const [featured, ...rest] = ARTICLES;
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 pt-14 sm:pt-24 pb-[72px] sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-12 sm:gap-[72px]">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-end border-b border-border pb-10 sm:pb-14">
            <div className="flex flex-col gap-[18px]">
              <div className="flex items-center gap-3.5">
                <span className="h-10 w-10 bg-wine flex items-center justify-center font-serif text-2xl text-cream">?</span>
                <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-wine font-bold">Cumbre explica</span>
              </div>
              <h1 className="font-serif text-[2.625rem] sm:text-6xl lg:text-[4.75rem] leading-[1.02] tracking-[-0.015em] text-ink text-balance">
                Lo que conviene saber antes de automatizar tu casa
              </h1>
            </div>
            <p className="text-[1.0625rem] leading-relaxed text-ink-soft max-w-[460px] text-pretty">
              Respuestas cortas y claras a las preguntas que más nos hacen. Sin tecnicismos innecesarios.
            </p>
          </div>

          <Link href={`/cumbre-explica/${featured.slug}`} className="group grid lg:grid-cols-2 gap-7 lg:gap-14 items-center text-ink">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone">
              <Image src={featured.image} alt="" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass font-semibold">
                01 · {featured.tag} · {featured.read}
              </span>
              <h2 className="font-serif text-[2rem] sm:text-5xl leading-[1.08] text-ink text-balance">{featured.title}</h2>
              <p className="text-[1.0625rem] leading-relaxed text-ink-soft">{featured.dek}</p>
              <span className="self-start text-[0.9375rem] font-semibold text-wine border-b border-wine pb-0.5">Leer la nota →</span>
            </div>
          </Link>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 border-t border-border">
            {rest.map((a, i) => (
              <Link key={a.slug} href={`/cumbre-explica/${a.slug}`} className="group flex flex-col gap-3.5 pt-8 text-ink">
                <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                  <Image src={a.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass font-semibold pt-1.5">
                  {n(i + 1)} · {a.tag}
                </span>
                <span className="font-serif text-[1.625rem] leading-[1.15] text-ink">{a.title}</span>
                <span className="text-[0.9375rem] leading-relaxed text-ink-soft">{a.dek}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
