"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
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
      className="rounded-md bg-cream-soft border border-border p-6 sm:p-8 grid sm:grid-cols-2 gap-4"
    >
      <div className="sm:col-span-2">
        <h3 className="font-serif text-2xl text-wine">Solicitá tu cotización</h3>
        <p className="mt-1 text-sm text-ink-soft">
          Contanos sobre tu proyecto y te contactamos por WhatsApp.
        </p>
      </div>

      <div>
        <label className="text-xs text-ink-soft">Nombre y apellido *</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-sm border border-border px-3 py-2.5 text-sm outline-none focus:border-wine/50 bg-cream-soft"
        />
      </div>
      <div>
        <label className="text-xs text-ink-soft">Empresa / Estudio (opcional)</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-1 w-full rounded-sm border border-border px-3 py-2.5 text-sm outline-none focus:border-wine/50 bg-cream-soft"
        />
      </div>
      <div>
        <label className="text-xs text-ink-soft">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-sm border border-border px-3 py-2.5 text-sm outline-none focus:border-wine/50 bg-cream-soft"
        />
      </div>
      <div>
        <label className="text-xs text-ink-soft">Teléfono</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full rounded-sm border border-border px-3 py-2.5 text-sm outline-none focus:border-wine/50 bg-cream-soft"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="text-xs text-ink-soft">Tipo de proyecto *</label>
        <select
          required
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="mt-1 w-full rounded-sm border border-border px-3 py-2.5 text-sm outline-none focus:border-wine/50 bg-cream-soft"
        >
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="text-xs text-ink-soft">
          Contanos sobre tu proyecto (opcional)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded-sm border border-border px-3 py-2.5 text-sm outline-none focus:border-wine/50 bg-cream-soft resize-none"
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" variant="primary" size="lg">
          Enviar por WhatsApp
        </Button>
      </div>
    </form>
  );
}
