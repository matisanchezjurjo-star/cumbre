import type { Metadata } from "next";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { WHATSAPP_URL } from "../lib/constants";

export const metadata: Metadata = {
  title: "Cambios y Devoluciones | Cumbre",
  description: "Política de cambios, devoluciones y garantía de Cumbre.",
};

export default function CambiosPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16">
          <h1 className="font-serif text-3xl sm:text-4xl text-wine">
            Cambios y Devoluciones
          </h1>

          <div className="mt-8 space-y-6 text-ink/80 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                Derecho de arrepentimiento (Ley de Defensa del Consumidor)
              </h2>
              <p>
                Como consumidor, tenés derecho a revocar la compra dentro de
                los 10 (diez) días corridos desde que recibís el producto,
                sin necesidad de justificar el motivo, conforme al artículo
                34 de la Ley 24.240 de Defensa del Consumidor. Para
                ejercerlo, escribinos por{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wine underline"
                >
                  WhatsApp
                </a>{" "}
                dentro de ese plazo.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                Condiciones para el cambio o devolución
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  El producto debe estar sin uso, en su embalaje original y
                  con todos sus accesorios y manuales.
                </li>
                <li>
                  Si el producto llegó dañado o con un defecto de fábrica,
                  contactanos apenas lo detectes y con fotos del problema.
                </li>
                <li>
                  Los costos de envío de la devolución corren por nuestra
                  cuenta cuando el motivo es un error nuestro o un defecto
                  de fábrica; en cambios por preferencia del cliente, el
                  costo de envío puede recaer sobre el comprador.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                Garantía
              </h2>
              <p>
                Todos los productos cuentan con garantía legal de fábrica
                según lo establecido por la Ley 24.240 (mínimo 6 meses desde
                la entrega para productos nuevos). Ante cualquier falla
                dentro del período de garantía, coordinamos la reparación,
                el cambio o la devolución según corresponda con el
                fabricante o su servicio técnico oficial.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                Cómo iniciar un cambio o devolución
              </h2>
              <p>
                Escribinos por{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wine underline"
                >
                  WhatsApp
                </a>{" "}
                con tu número de pedido y el motivo. Te vamos a responder con
                los pasos a seguir.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
