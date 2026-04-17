"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PremiumVisual() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate random values only on client side
    const newParticles = [...Array(12)].map((_, i) => ({
      id: i,
      r: Math.random() * 2 + 1.5, // slightly larger
      opacity: Math.random() * 0.6 + 0.3, // more visible
      x: Math.random() * 800,
      y: Math.random() * 800,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  if (!mounted) return <div className="relative w-full h-[500px] md:h-[600px]" />;

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-visible">
      
      {/* GLOWING ORBS / SOFT LIGHT */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3], // slightly more opacity
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] bg-gold/15 rounded-full blur-[110px]"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] bg-gold-dark/10 rounded-full blur-[90px] right-[-10%] top-[-10%]"
      />

      {/* ABSTRACT RIBBONS / WAVES */}
      <svg
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 opacity-100"
      >
        <defs>
          <linearGradient id="goldGradientPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0B97A" stopOpacity="0" />
            <stop offset="50%" stopColor="#E0B97A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E0B97A" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="goldGradientSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C9A262" stopOpacity="0" />
            <stop offset="50%" stopColor="#C9A262" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C9A262" stopOpacity="0" />
          </linearGradient>

          <filter id="premiumGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* LAYER 1: SOFT WAVE */}
        <motion.path
          d="M 100 400 Q 300 100 500 400 T 800 400"
          stroke="url(#goldGradientPrimary)"
          strokeWidth="4" // bolded
          strokeLinecap="round"
          filter="url(#premiumGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: [0, 0.9, 0.6],
            d: [
              "M 100 400 Q 300 100 500 400 T 800 400",
              "M 100 420 Q 350 150 550 420 T 800 380",
              "M 100 400 Q 300 100 500 400 T 800 400"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* LAYER 2: ELEGANT CURVE */}
        <motion.path
          d="M 0 500 C 200 300 400 700 800 500"
          stroke="url(#goldGradientSecondary)"
          strokeWidth="3" // bolded
          filter="url(#premiumGlow)"
          animate={{ 
            d: [
              "M 0 500 C 200 300 400 700 800 500",
              "M 0 480 C 250 350 450 650 800 520",
              "M 0 500 C 200 300 400 700 800 500"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* LAYER 3: LIGHT TRAILS */}
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${150 + i * 50} 300 Q 400 ${200 + i * 100} ${650 - i * 50} 500`}
            stroke="url(#goldGradientPrimary)"
            strokeWidth="1.5" // bolded
            strokeDasharray="100 200"
            animate={{ 
              strokeDashoffset: [-300, 300],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}

        {/* FLOATING PARTICLES (CLIENT-SIDE ONLY) */}
        {particles.map((p) => (
          <motion.circle
            key={p.id}
            r={p.r}
            fill="#E0B97A"
            initial={{ 
              opacity: p.opacity,
              x: p.x,
              y: p.y
            }}
            animate={{ 
              y: [0, -60, 0],
              opacity: [0.3, 0.9, 0.3]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay 
            }}
          />
        ))}
      </svg>
    </div>
  );
}
