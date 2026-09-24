import type { Metadata } from "next";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { WHATSAPP_URL } from "../lib/constants";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Cumbre",
  description: "Términos y condiciones de uso y compra en Cumbre.",
};

export default function TerminosPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16">
          <h1 className="font-serif text-3xl sm:text-4xl text-wine">
            Términos y Condiciones
          </h1>
          <p className="mt-2 text-sm text-ink/50">
            Última actualización: septiembre de 2026
          </p>

          <div className="mt-8 space-y-6 text-ink/80 leading-relaxed text-sm sm:text-base">
            <p>
              Estos Términos y Condiciones regulan el uso del sitio web de
              Cumbre (en adelante, &quot;el Sitio&quot;) y las compras
              realizadas a través de él. Al utilizar el Sitio o realizar una
              compra, aceptás estos términos en su totalidad.
            </p>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                1. Quiénes somos
              </h2>
              <p>
                Cumbre es un comercio dedicado a la venta de electrodomésticos
                y equipamiento tecnológico para hogares y empresas en
                Argentina.
              </p>
              <p className="mt-2 text-ink/50 italic">
                Razón social / CUIT / domicilio fiscal: [a completar por el
                titular del negocio].
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                2. Productos y precios
              </h2>
              <p>
                Los precios publicados están expresados en pesos argentinos
                (ARS) e incluyen los impuestos de ley vigentes al momento de
                la publicación. Los precios, el stock y las condiciones de
                financiación pueden variar sin previo aviso. Las imágenes de
                los productos son ilustrativas y pueden no coincidir
                exactamente con el producto entregado (color, accesorios,
                packaging).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                3. Compra y pago
              </h2>
              <p>
                Las compras se procesan a través de los medios de pago
                habilitados en el Sitio. La confirmación de una compra está
                sujeta a la disponibilidad de stock y a la verificación del
                pago.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                4. Envíos
              </h2>
              <p>
                Realizamos envíos a todo el país. Los plazos de entrega son
                estimados y pueden variar según la localidad y el
                transportista. Te contactaremos por WhatsApp o email para
                coordinar la entrega una vez confirmada la compra.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                5. Cambios, devoluciones y garantía
              </h2>
              <p>
                Consultá nuestra{" "}
                <a href="/cambios-y-devoluciones" className="text-wine underline">
                  Política de Cambios y Devoluciones
                </a>{" "}
                para conocer los plazos y condiciones aplicables.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                6. Protección de datos
              </h2>
              <p>
                El tratamiento de tus datos personales se rige por nuestra{" "}
                <a href="/privacidad" className="text-wine underline">
                  Política de Privacidad
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                7. Contacto
              </h2>
              <p>
                Ante cualquier consulta sobre estos términos, escribinos por{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wine underline"
                >
                  WhatsApp
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
