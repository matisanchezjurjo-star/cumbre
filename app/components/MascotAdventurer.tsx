"use client";

import { motion } from "framer-motion";

/**
 * "Pico Aventurero" — blob-style variant of the mascot (idea #2) wearing a
 * little scarf (idea #3). Same blink + idle-bounce behavior as the base Mascot.
 */
export function MascotAdventurer({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 300 300"
      className={className}
      animate={{ y: [0, -10, 0], rotate: [0, -2, 0, 2, 0] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <defs>
        <linearGradient id="picoBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a8505f" />
          <stop offset="55%" stopColor="var(--wine)" />
          <stop offset="100%" stopColor="var(--wine-dark)" />
        </linearGradient>
      </defs>

      {/* soft blob body */}
      <path
        d="M 150 55
           C 195 55 215 95 222 130
           C 238 145 258 168 255 200
           C 252 235 218 258 150 258
           C 82 258 48 235 45 200
           C 42 168 62 145 78 130
           C 85 95 105 55 150 55 Z"
        fill="url(#picoBody)"
      />

      {/* cheek highlight / sun */}
      <circle cx="208" cy="92" r="13" fill="var(--cream)" opacity="0.35" />

      {/* eyes */}
      <motion.g
        animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          times: [0, 0.85, 0.9, 0.95, 1],
          ease: "easeInOut",
        }}
        style={{ originX: "0.5px", originY: "0.5px" }}
      >
        <ellipse cx="128" cy="152" rx="9" ry="11" fill="var(--cream)" />
        <ellipse cx="172" cy="152" rx="9" ry="11" fill="var(--cream)" />
      </motion.g>

      {/* smile */}
      <path
        d="M 134 180 Q 150 192 166 180"
        stroke="var(--cream)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* scarf: band + knot + two flaps */}
      <path
        d="M 62 205 Q 150 232 238 205 L 238 218 Q 150 245 62 218 Z"
        fill="var(--cream)"
      />
      <circle cx="150" cy="219" r="10" fill="var(--wine-dark)" />
      <path
        d="M 142 222 L 132 258 L 150 246 Z"
        fill="var(--cream)"
      />
      <path
        d="M 158 222 L 172 250 L 154 244 Z"
        fill="var(--cream)"
      />
    </motion.svg>
  );
}
