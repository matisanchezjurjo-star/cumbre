import Link from "next/link";
import { LogoLockup } from "./Logo";
import { INSTAGRAM_URL, WHATSAPP_URL, BUSINESS_INFO } from "../lib/constants";

// CTASection (10% OFF band) and the unconnected newsletter were removed.
const WHATSAPP_DISPLAY = "+54 9 11 3919-5754";

const COLUMNS = [
  {
    title: "Líneas",
    links: [
      { label: "Cumbre Domótica", href: "/cumbre-domotica" },
      { label: "Cumbre Home", href: "/cumbre-home" },
      { label: "Cumbre Constructoras", href: "/cumbre-constructoras" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { label: "Estado de mi pedido", href: WHATSAPP_URL },
      { label: "Garantías", href: "/garantias" },
      { label: "Cambios y devoluciones", href: "/cambios-y-devoluciones" },
      { label: "Términos y Condiciones", href: "/terminos" },
      { label: "Política de Privacidad", href: "/privacidad" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-wine-dark text-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-8 grid sm:grid-cols-3 gap-10">
        <div className="flex flex-col gap-3.5">
          <LogoLockup color="var(--cream)" subColor="var(--border)" />
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-border hover:text-cream text-[0.9375rem] transition-colors mt-2">
            @ec.cumbre
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-border hover:text-cream text-[0.9375rem] transition-colors">
            {WHATSAPP_DISPLAY}
          </a>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h4 className="text-[0.8125rem] tracking-[0.14em] uppercase text-brass-soft font-semibold">
              {col.title}
            </h4>
            {col.links.map((l) => {
              const cls = "text-border hover:text-cream text-[0.9375rem] transition-colors";
              return l.href.startsWith("http") ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href} className={cls}>
                  {l.label}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-5 pb-7 border-t border-wine text-[0.8125rem] leading-relaxed text-border">
        {BUSINESS_INFO.legalName && (
          <p>
            {BUSINESS_INFO.legalName}
            {BUSINESS_INFO.cuit && ` — CUIT ${BUSINESS_INFO.cuit}`}
            {BUSINESS_INFO.address && ` — ${BUSINESS_INFO.address}`}
          </p>
        )}
        <p>© {new Date().getFullYear()} Cumbre</p>
      </div>
    </footer>
  );
}
