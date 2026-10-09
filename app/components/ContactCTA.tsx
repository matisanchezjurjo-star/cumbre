"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "../lib/constants";

const PROJECT_TYPES = [
  "Casa inteligente",
  "Obra / Constructora",
  "Oficina o local comercial",
  "Equipamiento",
];

const WHATSAPP_DISPLAY = "+54 9 11 3919-5754";

export function ContactCTA() {
  const [type, setType] = useState(PROJECT_TYPES[0]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      "Hola, quiero cotizar un proyecto con Cumbre:",
      `Nombre: ${name}`,
      `Tipo de proyecto: ${type}`,
      desc && `Descripción: ${desc}`,
    ].filter(Boolean);
    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section id="contacto" className="py-[72px] sm:py-28 bg-wine text-cream scroll-mt-[72px]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        <div className="flex flex-col gap-[18px]">
          <p className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass-soft font-semibold">
            Empezá tu proyecto
          </p>
          <h2 className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-cream text-balance">
            Contanos qué querés equipar
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-cream">
            Te respondemos por WhatsApp una persona real, con una primera
            propuesta para tu casa, obra u oficina.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start text-cream text-[0.9375rem] font-semibold border-b border-brass-soft pb-0.5"
          >
            O escribinos directo: {WHATSAPP_DISPLAY}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="bg-cream text-ink p-6 sm:p-10 flex flex-col gap-[22px]">
          <fieldset className="flex flex-col gap-2.5">
            <legend className="text-sm font-semibold mb-2.5">Tipo de proyecto</legend>
            <div className="flex flex-wrap gap-2">
              {PROJECT_TYPES.map((t) => {
                const on = t === type;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    aria-pressed={on}
                    className={`min-h-11 px-4 text-sm font-medium whitespace-nowrap shrink-0 border transition-colors ${
                      on
                        ? "bg-wine border-wine text-cream-soft"
                        : "bg-cream-soft border-border text-ink hover:border-wine/40"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </fieldset>
          <label className="flex flex-col gap-2 text-sm font-semibold">
            Nombre y apellido
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 border border-border bg-cream-soft px-3.5 text-base font-normal text-ink outline-none focus:border-wine/50"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold">
            <span>
              Contanos sobre tu proyecto{" "}
              <span className="font-normal text-ink-soft">(opcional)</span>
            </span>
            <textarea
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="border border-border bg-cream-soft px-3.5 py-3 text-base font-normal text-ink outline-none resize-none focus:border-wine/50"
            />
          </label>
          <button
            type="submit"
            className="h-[54px] bg-wine text-cream-soft text-base font-semibold hover:bg-wine-dark transition-colors"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
