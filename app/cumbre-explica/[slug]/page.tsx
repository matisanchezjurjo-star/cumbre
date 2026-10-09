import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/CTAFooter";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { ARTICLES, getArticle } from "../../lib/explica";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../../lib/constants";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: `${a.title} | Cumbre explica`,
    description: a.short,
    openGraph: { title: a.title, description: a.short, images: [{ url: a.image }] },
  };
}

const n = (i: number) => String(i + 1).padStart(2, "0");

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const index = ARTICLES.findIndex((x) => x.slug === a.slug);
  const others = ARTICLES.map((x, i) => ({ ...x, i })).filter((x) => x.slug !== a.slug);

  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <article className="pt-10 sm:pt-[72px] pb-[72px] sm:pb-28">
          <div className="mx-auto max-w-[760px] px-5 sm:px-8 flex flex-col gap-7">
            <Link href="/cumbre-explica" className="self-start py-2 text-sm font-semibold text-wine">← Cumbre explica</Link>
            <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass font-semibold">
              {n(index)} · {a.tag} · {a.read}
            </span>
            <h1 className="font-serif text-[2.375rem] sm:text-5xl lg:text-[4rem] leading-[1.04] tracking-[-0.015em] text-ink text-balance">{a.title}</h1>
            <p className="text-xl leading-[1.55] text-ink-soft text-pretty">{a.dek}</p>
          </div>

          <div className="mx-auto max-w-6xl px-5 sm:px-8 my-10 sm:my-14">
            <div className="relative aspect-[16/8] overflow-hidden bg-stone">
              <Image src={a.image} alt="" fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>

          <div className="mx-auto max-w-[760px] px-5 sm:px-8 flex flex-col gap-11">
            <div className="bg-stone px-8 py-7 flex flex-col gap-2.5">
              <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-wine font-bold">En corto</span>
              <p className="text-lg leading-relaxed text-ink font-medium">{a.short}</p>
            </div>
            {a.sections.map((s) => (
              <section key={s.h} className="flex flex-col gap-3.5">
                <h2 className="font-serif text-[1.625rem] sm:text-[2rem] leading-[1.2] text-ink">{s.h}</h2>
                <p className="text-[1.0625rem] leading-[1.75] text-ink/90 text-pretty">{s.p}</p>
              </section>
            ))}
            <div className="border-t border-border pt-8 flex flex-col gap-3.5">
              <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass font-semibold">Cómo lo resolvemos en Cumbre</span>
              <p className="text-[1.0625rem] leading-[1.75] text-ink">{a.cumbre}</p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-wine text-cream-soft hover:bg-wine-dark transition-colors text-[0.9375rem] font-semibold px-6 py-4 whitespace-nowrap">
                Consultanos por WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="border border-wine text-wine text-[0.9375rem] font-semibold px-[22px] py-[15px] whitespace-nowrap">
                Más en @cumbre.te
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-5 sm:px-8 mt-[72px] sm:mt-[104px] flex flex-col gap-7">
            <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-ink-soft font-semibold">Seguí leyendo</span>
            <div className="grid sm:grid-cols-3 border-t border-border">
              {others.map((o) => (
                <Link key={o.slug} href={`/cumbre-explica/${o.slug}`} className="flex flex-col gap-2.5 pt-6 pr-6 pb-7 border-b border-border text-ink">
                  <span className="text-[0.8125rem] text-brass font-semibold">{n(o.i)}</span>
                  <span className="font-serif text-[1.375rem] leading-[1.2] text-ink">{o.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
