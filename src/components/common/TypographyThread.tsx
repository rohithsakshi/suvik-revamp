"use client";

import { motion } from "framer-motion";

export function TypographyThread() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden flex items-center justify-center">
      <svg
        viewBox="0 0 1000 200"
        className="w-[120%] h-auto opacity-40 translate-y-4"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="textThread" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#C9A84C" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#F0D080" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#C9A84C" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 100 Q 250 80 500 100 Q 750 120 1000 100"
          fill="none"
          stroke="url(#textThread)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  );
}
