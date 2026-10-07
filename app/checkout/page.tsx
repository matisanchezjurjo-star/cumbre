"use client";

import { useEffect, useState } from "react";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
import { Button } from "../components/ui/Button";
import { useCart } from "../lib/cart-context";
import { WHATSAPP_URL } from "../lib/constants";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_MP_PUBLIC_KEY;

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState<
    "idle" | "processing" | "approved" | "rejected"
  >("idle");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (PUBLIC_KEY) {
      initMercadoPago(PUBLIC_KEY, { locale: "es-AR" });
      setReady(true);
    }
  }, []);

  if (items.length === 0 && status !== "approved") {
    return (
      <div className="flex flex-col flex-1">
        <Header />
        <AnnouncementBar />
        <main className="flex-1">
          <div className="mx-auto max-w-2xl px-5 sm:px-8 py-20 text-center">
            <p className="text-ink-soft">Tu carrito está vacío.</p>
            <Button href="/productos" variant="primary" className="mt-5">
              Ver catálogo
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (status === "approved") {
    return (
      <div className="flex flex-col flex-1">
        <Header />
        <AnnouncementBar />
        <main className="flex-1">
          <div className="mx-auto max-w-2xl px-5 sm:px-8 py-20 text-center">
            <h1 className="font-serif text-3xl text-wine">
              ¡Gracias por tu compra!
            </h1>
            <p className="mt-3 text-ink-soft">
              Te vamos a contactar por WhatsApp para coordinar la entrega.
            </p>
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="mt-6"
            >
              Escribinos por WhatsApp
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      <Header />
      <AnnouncementBar />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-12 grid sm:grid-cols-2 gap-10">
          <div>
            <h1 className="font-serif text-2xl text-wine">Tus datos</h1>
            <div className="mt-5 flex flex-col gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre y apellido"
                className="rounded-sm border border-border px-4 py-2.5 text-sm outline-none focus:border-wine/50"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="rounded-sm border border-border px-4 py-2.5 text-sm outline-none focus:border-wine/50"
              />
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Dirección de envío"
                className="rounded-sm border border-border px-4 py-2.5 text-sm outline-none focus:border-wine/50"
              />
            </div>

            <div className="mt-8 rounded-sm border border-border bg-cream-soft p-4">
              <div className="flex justify-between text-sm text-ink-soft">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString("es-AR")}</span>
              </div>
              <div className="flex justify-between font-medium text-wine mt-1">
                <span>Total</span>
                <span>${subtotal.toLocaleString("es-AR")}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-wine mb-4">Pago</h2>
            {!PUBLIC_KEY ? (
              <div className="rounded-sm border border-dashed border-wine/25 bg-cream-soft p-6 text-center">
                <p className="text-ink-soft text-sm">
                  El pago con tarjeta todavía se está configurando.
                </p>
                <Button
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="mt-4"
                >
                  Coordinar por WhatsApp
                </Button>
              </div>
            ) : !name || !email ? (
              <p className="text-sm text-ink-soft">
                Completá tus datos para continuar con el pago.
              </p>
            ) : (
              ready && (
                <Payment
                  initialization={{ amount: subtotal, payer: { email } }}
                  customization={{
                    paymentMethods: { creditCard: "all", debitCard: "all" },
                  }}
                  onSubmit={async ({ formData }) => {
                    setStatus("processing");
                    try {
                      const res = await fetch("/api/process-payment", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          ...formData,
                          description: `Pedido Cumbre - ${items.length} producto(s)`,
                          payer: { ...formData.payer, email },
                        }),
                      });
                      const data = await res.json();
                      if (data.status === "approved") {
                        setStatus("approved");
                        clear();
                      } else {
                        setStatus("rejected");
                      }
                    } catch {
                      setStatus("rejected");
                    }
                  }}
                  onError={(err) => console.error(err)}
                />
              )
            )}
            {status === "rejected" && (
              <p className="mt-3 text-sm text-red-700">
                El pago no pudo procesarse. Probá de nuevo o escribinos por
                WhatsApp.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
