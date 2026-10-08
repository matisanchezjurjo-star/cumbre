"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Lock, LockOpen } from "lucide-react";
import { LogoMark } from "./Logo";

type Stage = "counting" | "unlocked" | "opening" | "done";

const COUNT_DURATION = 1400;
const UNLOCK_PAUSE = 450;
const DOOR_DURATION = 900;

export function IntroLock() {
  const [percent, setPercent] = useState(0);
  const [stage, setStage] = useState<Stage>("counting");
  const reduceMotion = useReducedMotion();
  const skipIntro = reduceMotion === true;

  useEffect(() => {
    if (skipIntro) return;

    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const t = Math.min(1, (now - start) / COUNT_DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setPercent(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setStage("unlocked");
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [skipIntro]);

  useEffect(() => {
    if (stage === "unlocked") {
      const t = setTimeout(() => setStage("opening"), UNLOCK_PAUSE);
      return () => clearTimeout(t);
    }
    if (stage === "opening") {
      const t = setTimeout(() => setStage("done"), DOOR_DURATION);
      return () => clearTimeout(t);
    }
  }, [stage]);

  const visible = !skipIntro && stage !== "done";

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  const circumference = 2 * Math.PI * 34;
  const offset = circumference * (1 - percent / 100);
  const opening = stage === "opening";

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-wine-dark"
        animate={{ x: opening ? "-100%" : 0 }}
        transition={{ duration: DOOR_DURATION / 1000, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-wine-dark"
        animate={{ x: opening ? "100%" : 0 }}
        transition={{ duration: DOOR_DURATION / 1000, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-7"
        animate={{ opacity: opening ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <LogoMark className="h-10 w-10" color="var(--cream)" />

        <div className="relative flex h-20 w-20 items-center justify-center">
          <svg viewBox="0 0 80 80" className="absolute inset-0 -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="34"
              fill="none"
              stroke="rgba(243,233,218,0.18)"
              strokeWidth="2"
            />
            <circle
              cx="40"
              cy="40"
              r="34"
              fill="none"
              stroke="var(--cream)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <AnimatePresence mode="wait">
            {stage === "counting" ? (
              <motion.div
                key="lock"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <Lock size={22} className="text-cream" strokeWidth={1.5} />
              </motion.div>
            ) : (
              <motion.div
                key="unlock"
                initial={{ opacity: 0, scale: 0.6, rotate: -18 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 14 }}
              >
                <LockOpen size={22} className="text-cream" strokeWidth={1.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span className="font-serif text-2xl tabular-nums tracking-wide text-cream">
          {percent}%
        </span>
      </motion.div>
    </div>
  );
}
