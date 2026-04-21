"use client";

import { motion, Variants, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";
import FlowArc from "@/components/common/FlowArc";
import { TypographyThread } from "@/components/common/TypographyThread";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Scroll Effects
  const { scrollY } = useScroll();
  const skyY = useTransform(scrollY, [0, 500], [0, 80]);
  const arcY = useTransform(scrollY, [0, 500], [0, -40]);
  const contentY = useTransform(scrollY, [0, 500], [0, 30]);

  // Mouse Reactive Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, translateZ: -20 },
    visible: {
      opacity: 1,
      y: 0,
      translateZ: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FCF9F5]"
      style={{ perspective: "1200px" }}
    >
      
      {/* 🌀 BACKGROUND (z-0) */}
      <motion.div style={{ y: arcY }} className="absolute inset-0 z-0">
        <FlowArc />
        {/* Subtle skyline silhouette */}
        <motion.div 
          style={{ y: skyY }}
          className="absolute bottom-0 left-0 w-full flex justify-center opacity-[0.03] pointer-events-none"
        >
          <Image 
            src="/dubai-silhouete.png" 
            alt="" 
            width={1920} 
            height={400} 
            className="w-full h-auto object-contain scale-110 translate-y-10"
          />
        </motion.div>
      </motion.div>

      {/* 🌫️ GRADIENT OVERLAY (z-1) */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#FCF9F5]/40 via-transparent to-[#FCF9F5]/60" />

      {/* ✨ SOFT GLOW SWEEP */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full z-[1] pointer-events-none" />

      {/* 🧱 CONTENT (z-10) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ 
          rotateX, 
          rotateY, 
          y: contentY,
          transformStyle: "preserve-3d" 
        }}
        className="relative z-10 flex flex-col items-center justify-center w-full px-6 pt-20"
      >
        
        {/* INTEGRATED TAG */}
        <motion.div 
          variants={itemVariants}
          style={{ translateZ: "40px" }}
          className="inline-flex items-center gap-2.5 border border-gold/40 bg-gold/5 text-gold px-5 py-2 rounded-sm text-[10px] font-bold tracking-[0.3em] uppercase mb-10 backdrop-blur-sm shadow-[0_10px_30px_rgba(212,175,55,0.12)]"
        >
          <div className="relative flex items-center justify-center w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold"></span>
          </div>
          UAE Business & Technology Partner
        </motion.div>

        {/* TYPOGRAPHY HIERARCHY */}
        <motion.div 
          variants={itemVariants} 
          style={{ translateZ: "20px" }}
          className="text-center mb-8 relative"
        >
          <TypographyThread />
          <span className="block text-sm md:text-base font-medium text-charcoal/50 uppercase tracking-[0.4em] mb-4">Welcome to</span>
          <h1 className="text-5xl md:text-8xl flex flex-col items-center tracking-tight leading-[1.05]">
            <span className="font-extrabold text-charcoal">Suvik Group</span>
            <span className="font-light text-charcoal/60 -mt-1 italic">Of Companies</span>
          </h1>
        </motion.div>

        {/* SUBTEXT */}
        <motion.p 
          variants={itemVariants}
          style={{ translateZ: "10px" }}
          className="text-lg md:text-xl text-charcoal/60 mb-12 max-w-2xl text-center leading-relaxed font-light tracking-wide"
        >
          Headquartered in the United Arab Emirates, we transform ideas into structured growth through elite business formation and technological excellence.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div 
          variants={itemVariants}
          style={{ translateZ: "30px" }}
          className="flex flex-col sm:flex-row gap-5 mb-14 justify-center"
        >
          <Link href="/contact">
            <Button variant="gold" className="px-10 py-7 text-[11px] tracking-[0.25em] shadow-[0_15px_35px_rgba(212,175,55,0.2)]">
              Start Your Business
            </Button>
          </Link>

          <Link href="/services">
            <Button variant="outline" className="px-10 py-7 text-[11px] tracking-[0.25em] border-charcoal/10 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
              Explore Services
            </Button>
          </Link>
        </motion.div>

        {/* TRUST METRICS */}
        <motion.div 
          variants={itemVariants}
          style={{ translateZ: "5px" }}
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