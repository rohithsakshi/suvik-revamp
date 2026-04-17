"use client";

import { motion } from "framer-motion";

export default function FlowLines() {
    return (
        <div className="absolute right-0 top-0 w-full h-full pointer-events-none opacity-60">

            <svg
                viewBox="0 0 1200 800"
                className="w-full h-full"
                fill="none"
            >
                {[...Array(6)].map((_, i) => (
                    <motion.path
                        key={i}
                        d={`M 100 ${150 + i * 80} 
                C 400 ${50 + i * 40}, 
                  800 ${200 + i * 30}, 
                  1200 ${150 + i * 80}`}

                        stroke="url(#flowGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"

                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1],
                            opacity: [0, 1, 0.6]
                        }}

                        transition={{
                            duration: 5,
                            delay: i * 0.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* GRADIENT */}
                <defs>
                    <linearGradient id="flowGradient" x1="0" y1="0" x2="1200" y2="0">
                        <stop offset="0%" stopColor="#0EA5A4" stopOpacity="0" />
                        <stop offset="40%" stopColor="#22D3EE" stopOpacity="0.5" />
                        <stop offset="60%" stopColor="#38BDF8" stopOpacity="1" />
                        <stop offset="80%" stopColor="#60A5FA" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0EA5A4" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
    );
}