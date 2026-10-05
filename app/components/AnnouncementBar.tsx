"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ShieldCheck, Wrench, Tag, type LucideIcon } from "lucide-react";
import { COUPON_CODE } from "../lib/constants";

const MESSAGES: { icon: LucideIcon; text: React.ReactNode; href: string }[] = [
  {
    icon: Wrench,
    text: "Diseñamos, instalamos y programamos tu proyecto de punta a punta",
    href: "/proyectos",
  },
  {
    icon: ShieldCheck,
    text: "Garantía oficial en todos los productos",
    href: "/productos",
  },
  {
    icon: Tag,
    text: (
      <>
        10% OFF en tu primera compra con el cupón{" "}
        <span className="font-semibold">{COUPON_CODE}</span>
      </>
    ),
    href: "/productos",
  },
];

const ROTATE_MS = 4500;

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % MESSAGES.length),
      ROTATE_MS
    );
    return () => clearInterval(id);
  }, []);

  const current = MESSAGES[index];
  const Icon = current.icon;

  return (
    <div className="bg-wine text-cream text-sm py-2.5 overflow-hidden">
      <Link
        href={current.href}
        className="flex items-center justify-center gap-2 px-8 hover:text-cream/80 transition-colors"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex items-center gap-2 text-center"
          >
            <Icon size={14} className="shrink-0 opacity-80" />
            {current.text}
          </motion.span>
        </AnimatePresence>
      </Link>
    </div>
  );
}
