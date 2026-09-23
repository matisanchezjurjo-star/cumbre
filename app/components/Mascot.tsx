"use client";

import { motion } from "framer-motion";

/**
 * "Pico" — the Cumbre mountain mascot. Hops with a squash-and-stretch bounce,
 * waves with one thick arm, blinks, looks side to side, and wiggles its
 * eyebrows. Chunky rounded limbs (no stick arms/legs).
 */
export function Mascot({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -24, 0], scaleY: [1, 1.08, 0.92, 1], scaleX: [1, 0.94, 1.06, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08 }}
      style={{ transformOrigin: "50% 100%" }}
    >
      <svg viewBox="0 0 300 320" className="h-full w-full overflow-visible">
        {/* left leg (chunky) */}
        <motion.g
          animate={{ rotate: [-14, 14, -14] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "112px 244px" }}
        >
          <rect x="98" y="240" width="28" height="52" rx="14" fill="var(--wine)" />
        </motion.g>
        {/* right leg (chunky) */}
        <motion.g
          animate={{ rotate: [14, -14, 14] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "188px 244px" }}
        >
          <rect x="174" y="240" width="28" height="52" rx="14" fill="var(--wine)" />
        </motion.g>

        {/* left arm (chunky, gentle swing) */}
        <motion.g
          animate={{ rotate: [8, -14, 8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "60px 190px" }}
        >
          <rect x="14" y="176" width="50" height="26" rx="13" fill="var(--wine)" />
        </motion.g>

        {/* right arm (chunky, waving) */}
        <motion.g
          animate={{ rotate: [0, -50, -20, -50, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }}
          style={{ transformOrigin: "240px 190px" }}
        >
          <rect x="236" y="150" width="26" height="52" rx="13" fill="var(--wine)" />
        </motion.g>

        {/* body: rounded mountain, outline only */}
        <path
          d="M 40 230 Q 40 210 55 195 L 120 110 Q 150 72 180 110 L 245 195 Q 260 210 260 230 Q 260 250 240 250 L 60 250 Q 40 250 40 230 Z"
          fill="var(--cream)"
          stroke="var(--wine)"
          strokeWidth="14"
          strokeLinejoin="round"
        />
        {/* sun / cheek sparkle */}
        <circle cx="215" cy="70" r="14" fill="none" stroke="var(--wine)" strokeWidth="8" opacity="0.55" />

        {/* eyebrows */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M 122 148 Q 132 141 143 147" stroke="var(--wine)" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M 161 147 Q 172 141 182 148" stroke="var(--wine)" strokeWidth="5" strokeLinecap="round" fill="none" />
        </motion.g>

        {/* eyes: blink + look side to side */}
        <motion.g
          animate={{
            x: [0, 4, 4, -4, -4, 0, 0],
            scaleY: [1, 1, 1, 1, 0.1, 1, 1],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            times: [0, 0.18, 0.4, 0.58, 0.64, 0.7, 1],
            ease: "easeInOut",
          }}
          style={{ originX: "0.5px", originY: "0.5px" }}
        >
          <ellipse cx="132" cy="168" rx="8" ry="10" fill="var(--wine)" />
          <ellipse cx="172" cy="168" rx="8" ry="10" fill="var(--wine)" />
        </motion.g>

        {/* smile */}
        <path
          d="M 136 194 Q 152 210 168 194"
          stroke="var(--wine)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}
