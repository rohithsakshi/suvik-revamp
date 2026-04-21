"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";
import FlowArc from "@/components/common/FlowArc";
import { TypographyThread } from "@/components/common/TypographyThread";
import Image from "next/image";
import { useRef } from "react";
import { CinematicLine, SectionReveal, StaggerItem, StaggerReveal } from "@/components/common/SectionReveal";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Strong Layered Parallax
  const { scrollY } = useScroll();
  const skyY = useTransform(scrollY, [0, 800], [0, 150]);
  const arcY = useTransform(scrollY, [0, 800], [0, -80]);
  const contentY = useTransform(scrollY, [0, 800], [0, 50]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Mouse Reactive Tilt (3D Foreground Depth)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 60, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 60, damping: 20 });

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

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#E8DDD0]"
      style={{ perspective: "1500px" }}
    >
      
      {/* 🌀 BACKGROUND PARALLAX (z-0) */}
      <motion.div style={{ y: arcY }} className="absolute inset-0 z-0">
        <FlowArc />
        {/* Subtle skyline silhouette with slow premium image motion */}
        <motion.div 
          style={{ y: skyY }}
          className="absolute bottom-0 left-0 w-full flex justify-center opacity-[0.04] pointer-events-none origin-bottom scale-[1.02]"
        >
          <Image 
            src="/dubai-silhouete.png" 
            alt="Dubai Skyline" 
            width={1920} 
            height={400} 
            className="w-full h-auto object-contain translate-y-10"
            priority
          />
        </motion.div>
      </motion.div>

      {/* 🌫️ GRADIENT OVERLAY (z-1) */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#E8DDD0]/50 via-transparent to-[#E8DDD0]/90" />

      {/* ✨ SOFT GLOW SWEEP */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold/10 blur-[140px] rounded-full z-[1] pointer-events-none" />

      {/* 🧱 CONTENT (z-10) */}
      <motion.div
        style={{ 
          rotateX, 
          rotateY, 
          y: contentY,
          opacity: contentOpacity,
          transformStyle: "preserve-3d" 
        }}
        className="relative z-10 flex flex-col items-center justify-center w-full px-6 pt-24"
      >
        
        {/* INTEGRATED TAG */}
        <SectionReveal delay={0.2} className="mb-10" style={{ transform: "translateZ(30px)" }}>
          <div className="inline-flex items-center gap-2.5 border border-gold/50 bg-gold/10 text-gold-dark px-5 py-2 rounded-sm text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-sm shadow-[0_10px_30px_rgba(180,130,60,0.18)]">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold"></span>
            </div>
            UAE Business & Technology Partner
          </div>
        </SectionReveal>

        {/* ELEGANT TYPOGRAPHY REVEAL */}
        <SectionReveal delay={0.4} className="text-center mb-8 relative" style={{ transform: "translateZ(60px)" }}>
          <TypographyThread />
          <span className="block text-sm md:text-base font-medium text-charcoal/50 uppercase tracking-[0.4em] mb-6">Welcome to</span>
          <h1 className="text-5xl md:text-[5.5rem] lg:text-[7rem] flex flex-col items-center tracking-tight leading-[1.02]">
            <CinematicLine><span className="font-extrabold text-charcoal">Suvik Group</span></CinematicLine>
            <CinematicLine delay={0.15}><span className="font-light text-charcoal/60 -mt-2 italic">Of Companies</span></CinematicLine>
          </h1>
        </SectionReveal>

        {/* SUBTEXT */}
        <SectionReveal delay={0.7} className="mb-14 max-w-2xl text-center" style={{ transform: "translateZ(20px)" }}>
          <p className="text-lg md:text-xl text-charcoal/60 leading-relaxed font-light tracking-wide">
            Headquartered in the United Arab Emirates, we transform ideas into structured growth through elite business formation and technological excellence.
          </p>
        </SectionReveal>

        {/* CTA BUTTONS */}
        <SectionReveal delay={0.9} className="flex flex-col sm:flex-row gap-5 mb-16 justify-center" style={{ transform: "translateZ(40px)" }}>
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
        </SectionReveal>

        {/* TRUST METRICS - Staggered Reveal */}
        <StaggerReveal baseDelay={1.1} stagger={0.1} className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-10 border-t border-charcoal/10 text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/50" style={{ transform: "translateZ(10px)" }}>
          <StaggerItem className="flex items-center gap-3">
            <Check className="w-4 h-4 text-gold stroke-[3]" />
            100+ Businesses Launched
          </StaggerItem>

          <StaggerItem className="flex items-center gap-3">
            <Check className="w-4 h-4 text-gold stroke-[3]" />
            UAE Market Experts
          </StaggerItem>

          <StaggerItem className="flex items-center gap-3 md:hidden lg:flex">
            <Check className="w-4 h-4 text-gold stroke-[3]" />
            End-to-End Solutions
          </StaggerItem>
        </StaggerReveal>

      </motion.div>
    </section>
  );
}