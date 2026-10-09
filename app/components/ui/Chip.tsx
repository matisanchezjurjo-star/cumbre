"use client";

// Botón de opción usado en los formularios (Contacto, Constructoras,
// Empresas). Seleccionado = wine; sin seleccionar = cream con borde.
export function Chip({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`min-h-11 px-4 text-sm font-medium whitespace-nowrap shrink-0 border transition-colors ${
        on
          ? "bg-wine border-wine text-cream-soft"
          : "bg-cream-soft border-border text-ink hover:border-wine/40"
      }`}
    >
      {children}
    </button>
  );
}

export const inputClass =
  "h-12 border border-border bg-cream-soft px-3.5 text-base font-normal text-ink outline-none focus:border-wine/50";
