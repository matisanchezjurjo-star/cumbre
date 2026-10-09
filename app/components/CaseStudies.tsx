import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { Eyebrow } from "./ui/Typography";

// TODO: replace with real projects. Put photos in /public/proyectos/ and
// set `image`. While `image` is null a neutral placeholder is shown.
// Set SHOW_CASE_STUDIES to false to hide the section until content is ready.
const SHOW_CASE_STUDIES = true;

const CASES: {
  kind: string;
  title: string;
  scope: string;
  quote: string;
  image: string | null;
}[] = [
  {
    kind: "Casa · [Barrio, ciudad]",
    title: "[Nombre del proyecto]",
    scope: "[Qué instalamos: iluminación por escenas, climatización, cerradura inteligente…]",
    quote: "[Frase del cliente]",
    image: null,
  },
  {
    kind: "Obra · [Desarrollo, ciudad]",
    title: "[Nombre del proyecto]",
    scope: "[Qué instalamos: cerco perimetral, pre-instalación, equipamiento por unidad…]",
    quote: "[Frase del cliente]",
    image: null,
  },
];

export function CaseStudies() {
  if (!SHOW_CASE_STUDIES) return null;
  return (
    <section className="py-[72px] sm:py-28 bg-cream-soft">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-12">
        <SectionHeading eyebrow="Proyectos realizados" title="Casas y obras que ya equipamos" />
        <div className="grid md:grid-cols-2 gap-7 lg:gap-12">
          {CASES.map((c, i) => (
            <article key={i} className="flex flex-col gap-3.5">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                {c.image ? (
                  <Image src={c.image} alt={c.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-ink-soft">
                    Foto real del proyecto
                  </div>
                )}
              </div>
              <Eyebrow className="pt-1.5">{c.kind}</Eyebrow>
              <h3 className="font-serif text-[1.625rem] text-ink">{c.title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{c.scope}</p>
              <p className="font-serif italic text-lg leading-normal text-wine border-t border-border pt-3.5">
                “{c.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
