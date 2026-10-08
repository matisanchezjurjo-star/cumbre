"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, Fingerprint } from "lucide-react";
import { LogoMark } from "./Logo";

type Stage = "entering" | "accepted" | "opening" | "done";

const KEYS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["*", "0", "#"],
];

const CODE = ["2", "5", "8", "0"];

const FIRST_TAP_DELAY = 350;
const TAP_INTERVAL = 380;
const PULSE_DURATION = 180;
const ACCEPT_DELAY = 420;
const ACCEPT_PAUSE = 550;
const DOOR_DURATION = 900;

export function IntroLock() {
  const [stage, setStage] = useState<Stage>("entering");
  const [tapCount, setTapCount] = useState(0);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const skipIntro = reduceMotion === true;

  useEffect(() => {
    if (skipIntro) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    CODE.forEach((key, i) => {
      const t = FIRST_TAP_DELAY + i * TAP_INTERVAL;
      timers.push(
        setTimeout(() => {
          setActiveKey(key);
          setTapCount(i + 1);
        }, t)
      );
      timers.push(setTimeout(() => setActiveKey(null), t + PULSE_DURATION));
    });

    const lastTap = FIRST_TAP_DELAY + (CODE.length - 1) * TAP_INTERVAL;
    timers.push(setTimeout(() => setStage("accepted"), lastTap + ACCEPT_DELAY));

    return () => timers.forEach(clearTimeout);
  }, [skipIntro]);

  useEffect(() => {
    if (stage === "accepted") {
      const t = setTimeout(() => setStage("opening"), ACCEPT_PAUSE);
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

  const opening = stage === "opening";
  const accepted = stage === "accepted" || stage === "opening";

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
        className="absolute inset-0 flex flex-col items-center justify-center gap-5"
        animate={{ opacity: opening ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <LogoMark className="h-8 w-8" color="var(--cream)" />

        <div className="w-[148px] rounded-xl border border-cream/15 bg-black/30 px-4 pt-5 pb-5 shadow-2xl backdrop-blur-sm">
          <div className="mx-auto mb-4 h-1.5 w-1.5 rounded-full bg-cream/25" />

          <div className="relative h-[164px]">
            <AnimatePresence mode="wait">
              {!accepted ? (
                <motion.div
                  key="keypad"
                  className="grid grid-cols-3 gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {KEYS.flat().map((k) => {
                    const isActive = activeKey === k;
                    return (
                      <div
                        key={k}
                        className={`flex h-9 w-9 items-center justify-center rounded-md font-serif text-sm transition-all duration-150 ${
                          isActive
                            ? "scale-110 bg-cream/25 text-cream shadow-[0_0_10px_rgba(243,233,218,0.55)]"
                            : "scale-100 bg-cream/5 text-cream/45"
                        }`}
                      >
                        {k}
                      </div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="check"
                  className="flex h-full items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 340, damping: 16 }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/15">
                    <Check size={26} className="text-cream" strokeWidth={2} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {CODE.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full border border-cream/35 transition-colors duration-150 ${
                  i < tapCount || accepted ? "bg-cream" : "bg-transparent"
                }`}
              />
            ))}
          </div>

          <div className="mt-4 flex justify-center border-t border-cream/10 pt-4">
            <Fingerprint
              size={18}
              className={accepted ? "text-cream" : "text-cream/30"}
              strokeWidth={1.5}
            />
          </div>
        </div>

        <span className="text-[0.65rem] tracking-[0.18em] uppercase text-cream/70">
          {accepted ? "Acceso concedido" : "Ingresando código"}
        </span>
      </motion.div>
    </div>
  );
}
