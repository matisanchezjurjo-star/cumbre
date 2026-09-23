"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { COUPON_CODE } from "../lib/constants";

const MESSAGE = (
  <>
    Aplicá el cupón <span className="font-semibold">{COUPON_CODE}</span>: 10%
    OFF en tu primera compra 🛒
  </>
);

export function AnnouncementBar() {
  const items = Array.from({ length: 6 });

  return (
    <Link
      href="/productos"
      className="block overflow-hidden bg-wine text-cream text-sm py-2.5"
    >
      <motion.div
        className="flex w-max gap-16 whitespace-nowrap px-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {items.map((_, i) => (
          <span key={i}>{MESSAGE}</span>
        ))}
      </motion.div>
    </Link>
  );
}
