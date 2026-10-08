"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel = "ANTES",
  afterLabel = "DESPUÉS",
  className = "",
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Comparar antes y después de instalar domótica"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      className={`relative overflow-hidden rounded-sm border border-border select-none touch-none cursor-ew-resize outline-none focus-visible:ring-2 focus-visible:ring-wine/40 ${className}`}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.currentTarget as Element).setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
      }}
    >
      <Image
        src={before}
        alt={beforeAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover pointer-events-none"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <Image
          src={after}
          alt={afterAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover pointer-events-none"
        />
      </div>

      <span className="absolute top-4 left-4 rounded-sm bg-wine-dark/80 text-cream text-[0.65rem] tracking-[0.12em] font-medium uppercase px-2.5 py-1 pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 rounded-sm bg-wine-dark/80 text-cream text-[0.65rem] tracking-[0.12em] font-medium uppercase px-2.5 py-1 pointer-events-none">
        {afterLabel}
      </span>

      <div
        className="absolute top-0 bottom-0 w-px bg-cream pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-cream flex items-center justify-center shadow-sm">
          <MoveHorizontal size={17} className="text-wine" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
}
