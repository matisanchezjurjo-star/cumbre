"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "../lib/constants";
import { Chip, inputClass } from "./ui/Chip";

const ROLES = ["Arquitecto/a", "Constructora", "Desarrollador/a"];
const STAGES = ["Proyecto / plano", "Obra gruesa", "Terminaciones", "Por entregar"];

export function ConstructorasForm() {
  const [role, setRole] = useState(ROLES[1]);
  const [stage, setStage] = useState(STAGES[0]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [units, setUnits] = useState("");
  const [place, setPlace] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      "Hola Cumbre, quiero sumarlos a una obra:",
      `Nombre: ${name}`,
      company && `Estudio / empresa: ${company}`,
      `Rol: ${role}`,
      `Etapa: ${stage}`,
      units && `Unidades: ${units}`,
      place && `Ubicación: ${place}`,
    ].filter(Boolean);
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="py-[72px] sm:py-28 bg-wine text-cream scroll-mt-[72px]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        <div className="flex flex-col gap-[18px]">
          <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass-soft font-semibold">Tu proyecto</span>
          <h2 className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-cream text-balance">Contanos en qué etapa está tu obra</h2>
          <p className="text-[1.0625rem] leading-relaxed text-cream">Te respondemos por WhatsApp para coordinar una reunión con el estudio o el equipo de obra.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-cream text-ink p-6 sm:p-10 flex flex-col gap-[22px]">
          <fieldset className="flex flex-col">
            <legend className="text-sm font-semibold mb-2.5">Soy</legend>
            <div className="flex flex-wrap gap-2">
              {ROLES.map((r) => (
                <Chip key={r} on={role === r} onClick={() => setRole(r)}>{r}</Chip>
              ))}
            </div>
          </fieldset>
          <fieldset className="flex flex-col">
            <legend className="text-sm font-semibold mb-2.5">Etapa de la obra</legend>
            <div className="flex flex-wrap gap-2">
              {STAGES.map((st) => (
                <Chip key={st} on={stage === st} onClick={() => setStage(st)}>{st}</Chip>
              ))}
            </div>
          </fieldset>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Nombre y apellido
              <input required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Estudio o empresa
              <input value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} />
            </label>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Cantidad de unidades
              <input inputMode="numeric" value={units} onChange={(e) => setUnits(e.target.value)} placeholder="Ej. 24" className={inputClass} />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Ubicación
              <input value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Ej. Pilar" className={inputClass} />
            </label>
          </div>
          <button type="submit" className="h-[54px] bg-wine text-cream-soft text-base font-semibold hover:bg-wine-dark transition-colors">
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
