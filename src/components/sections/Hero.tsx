"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";
import FlowArc from "@/components/common/FlowArc";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FCF9F5]">
      
      {/* 🌀 BACKGROUND (z-0) */}
      <div className="absolute inset-0 z-0">
        <FlowArc />
      </div>

      {/* 🌫️ GRADIENT OVERLAY (z-1) */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#FCF9F5]/40 via-transparent to-[#FCF9F5]/60" />

      {/* ✨ SOFT GLOW SWEEP */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full z-[1] pointer-events-none" />

      {/* 🧱 CONTENT (z-10) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center w-full px-6 pt-20"
      >
        
        {/* INTEGRATED TAG */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 border border-gold/40 bg-gold/5 text-gold px-5 py-2 rounded-sm text-[10px] font-bold tracking-[0.3em] uppercase mb-10 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.1)]"
        >
          <div className="relative flex items-center justify-center w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold"></span>
          </div>
          UAE Business & Technology Partner
        </motion.div>

        {/* TYPOGRAPHY HIERARCHY */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <span className="block text-sm md:text-base font-medium text-charcoal/50 uppercase tracking-[0.4em] mb-4">Welcome to</span>
          <h1 className="text-5xl md:text-8xl flex flex-col items-center tracking-tight leading-[1.05]">
            <span className="font-extrabold text-charcoal">Suvik Group</span>
            <span className="font-light text-charcoal/60 -mt-1 italic">Of Companies</span>
          </h1>
        </motion.div>

        {/* SUBTEXT */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-charcoal/60 mb-12 max-w-2xl text-center leading-relaxed font-light tracking-wide"
        >
          Headquartered in the United Arab Emirates, we transform ideas into structured growth through elite business formation and technological excellence.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 mb-14 justify-center"
        >
          <Link href="/contact">
            <Button variant="gold" className="px-10 py-7 text-[11px] tracking-[0.25em]">
              Start Your Business
            </Button>
          </Link>

          <Link href="/services">
            <Button variant="outline" className="px-10 py-7 text-[11px] tracking-[0.25em] border-charcoal/10 bg-white/50 backdrop-blur-sm">
              Explore Services
            </Button>
          </Link>
        </motion.div>

        {/* TRUST METRICS */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-10 border-t border-charcoal/5 text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40"
        >
          <span className="flex items-center gap-3">
            <Check className="w-4 h-4 text-gold stroke-[3]" />
            100+ Businesses Launched
          </span>

          <span className="flex items-center gap-3">
            <Check className="w-4 h-4 text-gold stroke-[3]" />
            UAE Market Experts
          </span>

          <span className="flex items-center gap-3 md:hidden lg:flex">
            <Check className="w-4 h-4 text-gold stroke-[3]" />
            End-to-End Solutions
          </span>
        </motion.div>

      </motion.div>
    </section>
  );
}