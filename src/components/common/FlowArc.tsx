"use client";

import { motion } from "framer-motion";

export default function FlowArc() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 1440 900"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="thread1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#C9A84C" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#F0D080" stopOpacity="0.75" />
            <stop offset="80%" stopColor="#C9A84C" stopOpacity="0.35" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="thread2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#C9A84C" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#F0D080" stopOpacity="0.38" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* PRIMARY THREAD */}
        <motion.path
          d="M -40 520 Q 400 430 780 460 Q 1100 488 1480 410"
          fill="none"
          stroke="url(#thread1)"
          strokeWidth="1.8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 2.4, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.8, ease: "easeOut" },
          }}
        />

        {/* SECONDARY THREAD */}
        <motion.path
          d="M -40 535 Q 380 452 760 476 Q 1080 500 1480 428"
          fill="none"
          stroke="url(#thread2)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 2.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 1, delay: 0.3, ease: "easeOut" },
          }}
        />

        {/* SHIMMER PULSE — travelling light dot along thread */}
        <motion.circle
          r="1.8"
          fill="#F0D080"
          fillOpacity="0.7"
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            opacity: { duration: 2.4, delay: 0.6, ease: "easeInOut" },
          }}
          style={{
            offsetPath:
              "path('M -40 520 Q 400 430 780 460 Q 1100 488 1480 410')",
            offsetDistance: "0%",
          }}
        >
          <animateMotion
            dur="2.4s"
            begin="0.6s"
            fill="freeze"
            path="M -40 520 Q 400 430 780 460 Q 1100 488 1480 410"
          />
        </motion.circle>
      </svg>
    </div>
  );
}
