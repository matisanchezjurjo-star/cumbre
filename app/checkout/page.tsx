"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { Header } from "../components/Header";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Footer } from "../components/CTAFooter";
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
            <p className="text-ink/60">Tu carrito está vacío.</p>
            <Link
              href="/productos"
              className="mt-5 inline-block rounded-full bg-wine text-cream font-medium px-6 py-2.5"
            >
              Ver catálogo
            </Link>
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
            <p className="mt-3 text-ink/60">
              Te vamos a contactar por WhatsApp para coordinar la entrega.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-wine text-cream font-medium px-6 py-2.5"
            >
              Escribinos por WhatsApp
            </a>
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
                className="rounded-lg border border-wine/20 px-4 py-2.5 text-sm outline-none focus:border-wine/50"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="rounded-lg border border-wine/20 px-4 py-2.5 text-sm outline-none focus:border-wine/50"
              />
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Dirección de envío"
                className="rounded-lg border border-wine/20 px-4 py-2.5 text-sm outline-none focus:border-wine/50"
              />
            </div>

            <div className="mt-8 rounded-xl border border-wine/10 bg-cream-soft p-4">
              <div className="flex justify-between text-sm text-ink/70">
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
              <div className="rounded-xl border border-dashed border-wine/25 bg-cream-soft p-6 text-center">
                <p className="text-ink/60 text-sm">
                  El pago con tarjeta todavía se está configurando.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-full bg-wine text-cream font-medium px-6 py-2.5 text-sm"
                >
                  Coordinar por WhatsApp
                </a>
              </div>
            ) : !name || !email ? (
              <p className="text-sm text-ink/50">
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
