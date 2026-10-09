import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/CTAFooter";
import { Simulador } from "../components/Simulador";

export const metadata: Metadata = {
  title: "¿Qué puede hacer tu casa? — Simulador | Cumbre",
  description:
    "Respondé 5 preguntas y armamos una propuesta de domótica para tu casa, oficina u obra. Te la mandamos por WhatsApp.",
};

export default function SimuladorPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <Simulador />
      </main>
      <Footer />
    </div>
  );
}
