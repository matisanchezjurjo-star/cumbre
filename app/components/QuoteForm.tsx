"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "../lib/constants";

const PROJECT_TYPES = [
  "Casa inteligente",
  "Obra / Constructora",
  "Oficina o local comercial",
  "Otro",
];

export function QuoteForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      "Hola, quiero cotizar un proyecto con Cumbre:",
      `Nombre: ${name}`,
      company && `Empresa: ${company}`,
      email && `Email: ${email}`,
      phone && `Teléfono: ${phone}`,
      `Tipo de proyecto: ${projectType}`,
      description && `Descripción: ${description}`,
    ].filter(Boolean);
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-cream-soft border border-wine/10 p-6 sm:p-8 grid sm:grid-cols-2 gap-4"
    >
      <div className="sm:col-span-2">
        <h3 className="font-serif text-2xl text-wine">Solicitá tu cotización</h3>
        <p className="mt-1 text-sm text-ink/60">
          Contanos sobre tu proyecto y te contactamos por WhatsApp.
        </p>
      </div>

      <div>
        <label className="text-xs text-ink/60">Nombre y apellido *</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-wine/20 px-3 py-2.5 text-sm outline-none focus:border-wine/50 bg-white"
        />
      </div>
      <div>
        <label className="text-xs text-ink/60">Empresa / Estudio (opcional)</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-1 w-full rounded-lg border border-wine/20 px-3 py-2.5 text-sm outline-none focus:border-wine/50 bg-white"
        />
      </div>
      <div>
        <label className="text-xs text-ink/60">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-wine/20 px-3 py-2.5 text-sm outline-none focus:border-wine/50 bg-white"
        />
      </div>
      <div>
        <label className="text-xs text-ink/60">Teléfono</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full rounded-lg border border-wine/20 px-3 py-2.5 text-sm outline-none focus:border-wine/50 bg-white"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="text-xs text-ink/60">Tipo de proyecto *</label>
        <select
          required
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="mt-1 w-full rounded-lg border border-wine/20 px-3 py-2.5 text-sm outline-none focus:border-wine/50 bg-white"
        >
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="text-xs text-ink/60">
          Contanos sobre tu proyecto (opcional)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded-lg border border-wine/20 px-3 py-2.5 text-sm outline-none focus:border-wine/50 bg-white resize-none"
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-wine text-cream font-medium px-7 py-3 hover:bg-wine-dark hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Enviar por WhatsApp
        </button>
      </div>
    </form>
  );
}
