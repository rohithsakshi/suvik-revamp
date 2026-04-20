"use client";

import { motion } from "framer-motion";

export default function FlowArc() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">

      <svg
        viewBox="0 0 1200 800"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldSoft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* 🔥 SAFE ANIMATION (NO d morphing) */}
        <motion.path
          d="M -200 650 Q 600 50 1400 650"
          fill="none"
          stroke="url(#goldSoft)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        />

        {/* SECOND LAYER */}
        <motion.path
          d="M -200 680 Q 600 100 1400 680"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          opacity="0.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}