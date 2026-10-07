import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { Eyebrow, H2 } from "./ui/Typography";

export function CatalogCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rounded-sm bg-wine text-cream px-6 py-14 sm:px-16 sm:py-20 text-center">
          <Eyebrow tone="inverted" className="justify-center">CATÁLOGO</Eyebrow>
          <H2 className="mt-3 text-cream">Mirá nuestro catálogo</H2>
          <p className="mt-4 text-cream/80 max-w-xl mx-auto leading-relaxed">
            Electrodomésticos y equipamiento tecnológico para tu hogar o tu
            empresa, con garantía oficial y envío a todo el país.
          </p>
          <div className="mt-8">
            <Button href="/cumbre-home" variant="invert" size="lg">
              Ver catálogo
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
