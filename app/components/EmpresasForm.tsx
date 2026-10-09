"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "../lib/constants";
import { Chip, inputClass } from "./ui/Chip";

const NEEDS = ["Salas de reunión", "Control de acceso", "Seguridad", "Climatización", "Equipamiento del office"];
const SIZES = ["Hasta 10", "10 a 50", "50 a 200", "Más de 200"];

export function EmpresasForm() {
  const [needs, setNeeds] = useState<string[]>([NEEDS[0]]);
  const [size, setSize] = useState(SIZES[1]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const noNeeds = needs.length === 0;

  function toggle(n: string) {
    setNeeds((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (noNeeds) return;
    const lines = [
      "Hola Cumbre, quiero equipar nuestra oficina:",
      `Nombre: ${name}`,
      `Empresa: ${company}`,
      `Equipo: ${size} personas`,
      `Necesitamos: ${needs.join(", ")}`,
      "",
      "¿Podemos coordinar un relevamiento?",
    ];
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="py-[72px] sm:py-28 bg-wine text-cream scroll-mt-[72px]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        <div className="flex flex-col gap-[18px]">
          <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass-soft font-semibold">Relevamiento</span>
          <h2 className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-cream text-balance">Contanos qué necesita tu espacio de trabajo</h2>
          <p className="text-[1.0625rem] leading-relaxed text-cream">Coordinamos una visita o una llamada para relevar el espacio y te mandamos una propuesta.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-cream text-ink p-6 sm:p-10 flex flex-col gap-[22px]">
          <fieldset className="flex flex-col">
            <legend className="text-sm font-semibold mb-2.5">
              Qué necesitás <span className="font-normal text-ink-soft">(podés elegir varias)</span>
            </legend>
            <div className="flex flex-wrap gap-2">
              {NEEDS.map((n) => (
                <Chip key={n} on={needs.includes(n)} onClick={() => toggle(n)}>{n}</Chip>
              ))}
            </div>
          </fieldset>
          <fieldset className="flex flex-col">
            <legend className="text-sm font-semibold mb-2.5">Tamaño del equipo</legend>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <Chip key={s} on={size === s} onClick={() => setSize(s)}>{s} personas</Chip>
              ))}
            </div>
          </fieldset>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Nombre y apellido
              <input required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Empresa
              <input required value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} />
            </label>
          </div>
          <button
            type="submit"
            disabled={noNeeds}
            className="h-[54px] bg-wine text-cream-soft text-base font-semibold hover:bg-wine-dark transition-colors disabled:bg-border disabled:text-ink-soft disabled:cursor-not-allowed"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
