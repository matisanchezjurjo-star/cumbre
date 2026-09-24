import type { Metadata } from "next";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { WHATSAPP_URL } from "../lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidad | Cumbre",
  description: "Cómo Cumbre trata tus datos personales.",
};

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16">
          <h1 className="font-serif text-3xl sm:text-4xl text-wine">
            Política de Privacidad
          </h1>
          <p className="mt-2 text-sm text-ink/50">
            Última actualización: septiembre de 2026
          </p>

          <div className="mt-8 space-y-6 text-ink/80 leading-relaxed text-sm sm:text-base">
            <p>
              En Cumbre respetamos tu privacidad. Esta política explica qué
              datos personales recopilamos, para qué los usamos y qué
              derechos tenés sobre ellos, en línea con la Ley 25.326 de
              Protección de los Datos Personales de la República Argentina.
            </p>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                1. Qué datos recopilamos
              </h2>
              <p>
                Nombre y apellido, email, teléfono y dirección de envío
                cuando realizás una compra o nos contactás; y datos de
                navegación básicos (páginas visitadas) cuando usás el Sitio.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                2. Para qué los usamos
              </h2>
              <p>
                Para procesar y entregar tu pedido, comunicarnos con vos
                sobre el estado de tu compra, brindarte soporte y, si nos
                diste tu consentimiento, enviarte novedades por email.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                3. Con quién los compartimos
              </h2>
              <p>
                Solo con los proveedores necesarios para operar el negocio:
                el procesador de pagos y las empresas de transporte
                encargadas del envío. No vendemos tus datos a terceros.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                4. Tus derechos
              </h2>
              <p>
                Podés pedirnos en cualquier momento acceder, rectificar o
                eliminar tus datos personales escribiéndonos por{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wine underline"
                >
                  WhatsApp
                </a>
                . La Agencia de Acceso a la Información Pública, en su
                carácter de Órgano de Control de la Ley 25.326, tiene la
                atribución de atender denuncias y reclamos que se interpongan
                con relación al incumplimiento de las normas sobre
                protección de datos personales.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-wine mb-2">
                5. Cookies
              </h2>
              <p>
                Usamos cookies técnicas para que el sitio funcione
                correctamente (por ejemplo, para recordar el contenido de tu
                carrito). No usamos cookies de publicidad de terceros.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
