"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * A soft stage light: a cone shining from the top-left corner of the hero
 * onto the centred text, plus a faint pool of light around the text itself.
 */
export const Limelight = ({ darkMode }: { darkMode: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  // Direction from the top-left corner to the centre, in CSS conic degrees
  // (0deg = up, 90deg = right, 180deg = down). It depends on the hero's
  // aspect ratio, so measure it and keep it updated on resize.
  const [aim, setAim] = useState(122);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width && height) setAim(90 + (Math.atan2(height / 2, width / 2) * 180) / Math.PI);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Light colour and strength per theme: a white beam on dark, a faint indigo tint on light.
  const beam = darkMode ? "255,255,255" : "99,102,241";
  const beamAlpha = darkMode ? 0.24 : 0.18;
  const poolAlpha = darkMode ? 0.13 : 0.11;
  const spread = 14; // half-width of the cone, in degrees

  const a = (n: number) => `${(aim + n).toFixed(2)}deg`;

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {/* the cone, from the top-left corner towards the text */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(at 0% 0%, transparent 0deg, transparent ${a(-spread - 6)}, rgba(${beam},${beamAlpha}) ${a(-spread / 2)}, rgba(${beam},${beamAlpha * 1.3}) ${a(0)}, rgba(${beam},${beamAlpha}) ${a(spread / 2)}, transparent ${a(spread + 6)}, transparent 360deg)`,
          filter: "blur(22px)",
          // fade the beam out a little past the text
          WebkitMaskImage: "radial-gradient(circle farthest-corner at 0% 0%, black 0%, black 50%, transparent 85%)",
          maskImage: "radial-gradient(circle farthest-corner at 0% 0%, black 0%, black 50%, transparent 85%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
      />
      {/* the pool of light on the text */}
      <div className="absolute left-1/2 top-1/2 h-[55%] w-[min(900px,120vw)] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="h-full w-full rounded-full"
          style={{
            background: `radial-gradient(ellipse at center, rgba(${beam},${poolAlpha}) 0%, rgba(${beam},${poolAlpha * 0.5}) 35%, transparent 70%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.9 }}
        />
      </div>
    </div>
  );
};
