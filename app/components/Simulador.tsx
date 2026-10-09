"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { WHATSAPP_URL } from "../lib/constants";
import { inputClass } from "./ui/Chip";

type Opt = { v: string; label: string; sub?: string };

const SPACES: Opt[] = [
  { v: "casa", label: "Casa", sub: "Vivienda unifamiliar" },
  { v: "depto", label: "Departamento", sub: "Unidad en edificio" },
  { v: "oficina", label: "Oficina o local", sub: "Espacio de trabajo o comercial" },
  { v: "desarrollo", label: "Desarrollo / Constructora", sub: "Varias unidades o un edificio" },
];
const STAGES: Opt[] = [
  { v: "obra", label: "En obra", sub: "Todavía estamos construyendo" },
  { v: "remodelando", label: "Remodelando", sub: "Vamos a hacer cambios" },
  { v: "listo", label: "Ya está terminado", sub: "Vivo o trabajo ahí" },
];
const PRIOS_HOME: Opt[] = [
  { v: "seguridad", label: "Seguridad y acceso", sub: "Cerradura, videoportero, cámaras" },
  { v: "luz", label: "Iluminación", sub: "Escenas y control de toda la casa" },
  { v: "clima", label: "Clima", sub: "Temperatura por ambiente desde el celular" },
  { v: "av", label: "Audio y video", sub: "Música por ambientes, sala de TV" },
];
const PRIOS_OFFICE: Opt[] = [
  { v: "acceso", label: "Control de acceso", sub: "Quién entra y cuándo" },
  { v: "salas", label: "Salas de reunión", sub: "Pantalla y videollamada con un toque" },
  { v: "seguridad", label: "Seguridad", sub: "Cámaras y sensores" },
  { v: "clima", label: "Clima", sub: "Climatización de espacios de trabajo" },
];
const SIZES: Opt[] = [
  { v: "s", label: "1 a 2 ambientes", sub: "Monoambiente o 2 ambientes" },
  { v: "m", label: "3 a 4 ambientes", sub: "Tamaño medio" },
  { v: "l", label: "5 o más", sub: "Espacio grande o varias plantas" },
];
const SIZES_DEV: Opt[] = [
  { v: "s", label: "Hasta 10 unidades" },
  { v: "m", label: "10 a 50 unidades" },
  { v: "l", label: "Más de 50" },
];
const TIMES: Opt[] = [
  { v: "ya", label: "Lo antes posible" },
  { v: "pronto", label: "En 1 a 3 meses" },
  { v: "explorando", label: "Solo estoy explorando" },
];

const MOD: Record<string, { title: string; desc: string; image: string; short: string }> = {
  seguridad: { title: "Acceso y seguridad", desc: "Cerradura con código, huella y app, videoportero para atender desde el celular y cámaras con aviso ante movimiento.", image: "/domotica-cerradura-despues-v1.webp", short: "Seguridad y acceso" },
  acceso: { title: "Control de acceso", desc: "Ingreso con código o credencial, permisos por horario y registro de quién entró y cuándo.", image: "/domotica-cerradura-despues-v1.webp", short: "Control de acceso" },
  luz: { title: "Iluminación por escenas", desc: "Teclas inteligentes y escenas para cada momento. Un botón para apagar todo al salir.", image: "/domotica-iluminacion-ambiente-v1.webp", short: "Iluminación" },
  clima: { title: "Clima por ambiente", desc: "Programá la temperatura antes de llegar y controlá cada equipo de frío o calor desde el celular.", image: "/domotica-termostato-v1.webp", short: "Clima" },
  av: { title: "Audio y video", desc: "Música distribuida por ambientes y una escena de cine que prepara la sala sola.", image: "/hero-domotica-living-v1.webp", short: "Audio y video" },
  salas: { title: "Salas de reunión", desc: "Pantalla, videollamada y clima que arrancan con un toque, sin cinco controles remotos.", image: "/hero-smart-office-v1.webp", short: "Salas de reunión" },
  central: { title: "Control centralizado", desc: "Una central y un panel o app para manejar todo desde un solo lugar, con escenas que combinan cada sistema.", image: "/domotica-hub-v1.webp", short: "Control centralizado" },
  unidad: { title: "Equipamiento por unidad", desc: "Pre-instalación en obra y un paquete repetible por unidad, con entrega llave en mano.", image: "/hero-domotica-fence-v1.webp", short: "Equipamiento por unidad" },
};

const STAGE_NOTE: Record<string, string> = {
  obra: "Como estás en obra, dejamos previstos cableado y cajas desde el plano. Es el mejor momento para hacerlo.",
  remodelando: "Aprovechamos la remodelación para dejar la instalación prolija, sin cables a la vista.",
  listo: "Como ya está terminado, priorizamos equipos inalámbricos que se instalan sin romper paredes.",
};

const label = (arr: Opt[], v: string | null) => arr.find((o) => o.v === v)?.label ?? "";

type State = {
  space: string | null;
  stage: string | null;
  prios: string[];
  size: string | null;
  time: string | null;
  name: string;
  zone: string;
};

const INITIAL: State = { space: null, stage: null, prios: [], size: null, time: null, name: "", zone: "" };

export function Simulador() {
  const [step, setStep] = useState(0);
  const [s, setS] = useState<State>(INITIAL);

  const office = s.space === "oficina";
  const dev = s.space === "desarrollo";

  const steps = [
    { key: "space" as const, title: "¿Qué espacio querés equipar?", hint: "Elegí una opción.", options: SPACES },
    { key: "stage" as const, title: "¿En qué etapa está?", hint: "Cambia mucho lo que conviene hacer.", options: STAGES },
    {
      key: "prios" as const,
      multi: true,
      title: office ? "¿Qué querés resolver en tu oficina?" : dev ? "¿Qué querés incluir en las unidades?" : "¿Qué te importa más?",
      hint: "Podés elegir varias.",
      options: office ? PRIOS_OFFICE : PRIOS_HOME,
    },
    { key: "size" as const, title: dev ? "¿Cuántas unidades tiene el proyecto?" : "¿De qué tamaño es?", hint: "Una idea aproximada alcanza.", options: dev ? SIZES_DEV : SIZES },
    { key: "time" as const, title: "¿Cuándo te gustaría arrancar?", hint: "Y contanos quién sos para armarte el mensaje.", options: TIMES, contact: true },
  ];
  const total = steps.length;
  const isResult = step >= total;
  const q = steps[Math.min(step, total - 1)];
  const val = s[q.key];

  const answered = q.multi ? (val as string[]).length > 0 : !!val;
  const nextDisabled = !answered || (!!q.contact && !s.name.trim());

  const result = useMemo(() => {
    if (!isResult) return null;
    const keys = [...s.prios];
    if (dev) keys.push("unidad");
    if (s.prios.length >= 2) keys.push("central");
    const modules = keys.map((k) => MOD[k]);
    const core = s.prios.map((k) => MOD[k].short);
    const pkgName = dev
      ? "Paquete por unidad"
      : s.prios.length >= 3
      ? office
        ? "Oficina conectada"
        : "Casa conectada"
      : s.prios.length === 2
      ? core.join(" + ")
      : `Paquete ${core[0] ?? ""}`;
    const spaceL = label(SPACES, s.space);
    const sizeL = label(dev ? SIZES_DEV : SIZES, s.size);
    const message = [
      'Hola Cumbre, hice el simulador "¿Qué puede hacer tu casa?":',
      "",
      s.name.trim() ? `Nombre: ${s.name.trim()}` : null,
      s.zone.trim() ? `Zona: ${s.zone.trim()}` : null,
      `Espacio: ${spaceL}`,
      `Etapa: ${label(STAGES, s.stage)}`,
      `Tamaño: ${sizeL}`,
      `Me interesa: ${core.join(", ")}`,
      `Propuesta: ${pkgName}`,
      `Cuándo: ${label(TIMES, s.time)}`,
      "",
      "¿Me pueden asesorar?",
    ]
      .filter((l) => l !== null)
      .join("\n");
    return {
      modules,
      pkgName,
      summary: `${spaceL} · ${label(STAGES, s.stage)} · ${sizeL}`,
      stageNote: s.stage ? STAGE_NOTE[s.stage] : "",
      message,
    };
  }, [isResult, s, dev, office]);

  function pick(v: string) {
    if (q.multi) {
      setS((p) => ({ ...p, prios: p.prios.includes(v) ? p.prios.filter((x) => x !== v) : [...p.prios, v] }));
    } else if (q.key === "space") {
      setS((p) => ({ ...p, space: v, prios: v !== p.space ? [] : p.prios }));
    } else {
      setS((p) => ({ ...p, [q.key]: v }));
    }
  }

  function go(n: number) {
    setStep(n);
    window.scrollTo({ top: 0 });
  }

  const progress = isResult ? 100 : (step / total) * 100;
  const firstName = s.name.trim().split(" ")[0];

  return (
    <>
      <div className="h-[3px] bg-border">
        <div className="h-[3px] bg-wine transition-[width] duration-300" style={{ width: `${progress}%` }} />
      </div>

      <div className="pt-10 sm:pt-[88px] pb-[72px] sm:pb-28">
        {!isResult ? (
          <section className="mx-auto max-w-[880px] px-5 sm:px-8 flex flex-col gap-7 sm:gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass font-semibold">
                Paso {step + 1} de {total}
              </span>
              <h1 className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.5rem] leading-[1.06] tracking-[-0.015em] text-ink text-balance">
                {q.title}
              </h1>
              <p className="text-[1.0625rem] leading-relaxed text-ink-soft">{q.hint}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {q.options.map((o) => {
                const on = q.multi ? (val as string[]).includes(o.v) : val === o.v;
                return (
                  <button
                    key={o.v}
                    type="button"
                    onClick={() => pick(o.v)}
                    aria-pressed={on}
                    className={`min-h-24 px-5 py-[18px] flex flex-col items-start gap-1.5 text-left border transition-colors ${
                      on ? "bg-wine border-wine text-cream-soft" : "bg-cream-soft border-border text-ink hover:border-wine/40"
                    }`}
                  >
                    <span className="flex justify-between items-center gap-3 w-full">
                      <span className="text-lg font-semibold">{o.label}</span>
                      <span
                        className={`shrink-0 h-6 w-6 flex items-center justify-center text-sm font-bold text-wine border-[1.5px] ${
                          q.multi ? "" : "rounded-full"
                        } ${on ? "bg-cream border-cream" : "border-brass-soft"}`}
                      >
                        {on ? "✓" : ""}
                      </span>
                    </span>
                    {o.sub && <span className="text-sm leading-normal opacity-85">{o.sub}</span>}
                  </button>
                );
              })}
            </div>

            {q.contact && (
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Nombre y apellido
                  <input value={s.name} onChange={(e) => setS((p) => ({ ...p, name: e.target.value }))} placeholder="Ej. Lucía Pérez" className={`${inputClass} h-[54px]`} />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Zona
                  <input value={s.zone} onChange={(e) => setS((p) => ({ ...p, zone: e.target.value }))} placeholder="Ej. Nordelta, Tigre" className={`${inputClass} h-[54px]`} />
                </label>
              </div>
            )}

            <div className="flex justify-between items-center gap-4 border-t border-border pt-6">
              {step > 0 ? (
                <button type="button" onClick={() => go(step - 1)} className="py-3 text-[0.9375rem] font-semibold text-wine">
                  ← Volver
                </button>
              ) : (
                <span />
              )}
              <button
                type="button"
                disabled={nextDisabled}
                onClick={() => go(step + 1)}
                className="h-[54px] px-7 text-base font-semibold whitespace-nowrap bg-wine text-cream-soft hover:bg-wine-dark transition-colors disabled:bg-border disabled:text-ink-soft disabled:cursor-not-allowed"
              >
                {step === total - 1 ? "Ver mi propuesta" : "Siguiente"}
              </button>
            </div>
          </section>
        ) : (
          result && (
            <section className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-10 sm:gap-14">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-end border-b border-border pb-10">
                <div className="flex flex-col gap-4">
                  <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-brass font-semibold">
                    Tu propuesta{firstName ? `, ${firstName}` : ""}
                  </span>
                  <h1 className="font-serif text-[2.5rem] sm:text-6xl lg:text-[4.5rem] leading-[1.02] tracking-[-0.015em] text-wine text-balance">
                    {result.pkgName}
                  </h1>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="text-[0.9375rem] leading-relaxed text-ink font-medium">{result.summary}</span>
                  <span className="text-[0.9375rem] leading-relaxed text-ink-soft">{result.stageNote}</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {result.modules.map((m) => (
                  <div key={m.title} className="flex flex-col gap-3">
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                      <Image src={m.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <span className="font-serif text-2xl text-ink pt-1">{m.title}</span>
                    <span className="text-[0.9375rem] leading-relaxed text-ink-soft">{m.desc}</span>
                  </div>
                ))}
              </div>

              <div className="bg-wine text-cream p-7 sm:p-12 grid lg:grid-cols-2 gap-7 lg:gap-12 items-center">
                <div className="flex flex-col gap-3">
                  <span className="font-serif text-[1.625rem] sm:text-[2.125rem] leading-[1.15]">Te mandamos esto armado por WhatsApp</span>
                  <span className="text-[0.9375rem] leading-relaxed text-border">Te responde una persona del equipo con una primera propuesta. Sin compromiso.</span>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setS(INITIAL);
                      go(0);
                    }}
                    className="h-[54px] px-[22px] border border-brass-soft text-cream text-[0.9375rem] font-semibold whitespace-nowrap"
                  >
                    Empezar de nuevo
                  </button>
                  <button
                    type="button"
                    onClick={() => window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(result.message)}`, "_blank", "noopener,noreferrer")}
                    className="h-[54px] px-[26px] bg-cream text-wine text-base font-bold whitespace-nowrap"
                  >
                    Enviar por WhatsApp
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 max-w-[760px]">
                <span className="text-[0.8125rem] tracking-[0.16em] uppercase text-ink-soft font-semibold">Vista previa del mensaje</span>
                <pre className="whitespace-pre-wrap font-sans text-[0.9375rem] leading-[1.65] text-ink bg-cream-soft border border-border px-6 py-5">
                  {result.message}
                </pre>
              </div>
            </section>
          )
        )}
      </div>
    </>
  );
}
