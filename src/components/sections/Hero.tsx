"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";
import FlowArc from "@/components/common/FlowArc";
import { TypographyThread } from "@/components/common/TypographyThread";
import Image from "next/image";
import { motion } from "framer-motion";
import { CinematicLine, SectionReveal, StaggerItem, StaggerReveal } from "@/components/common/SectionReveal";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#E8DDD0]"
    >
      {/* 🌀 BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <FlowArc />
        <div 
          className="absolute bottom-0 left-0 w-full flex justify-center opacity-[0.12] pointer-events-none origin-bottom"
        >
          <Image
            src="/dubai-silhouete.png"
            alt="Dubai Skyline"
            width={1920}
            height={400}
            className="w-full h-auto object-contain translate-y-32"
            priority
          />
        </div>
      </div>

      {/* 🌫️ GRADIENT OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#E8DDD0]/50 via-transparent to-[#E8DDD0]/90" />

      {/* ✨ SOFT GLOW */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold/10 blur-[140px] rounded-full z-[1] pointer-events-none" 
      />

      {/* 🧱 CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 pt-24">

        {/* TYPOGRAPHY */}
        <div className="text-center mb-8 relative">
          <TypographyThread />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-gold/60 origin-right hidden sm:block" 
            />
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.15em", y: 8 }}
              animate={{ opacity: 1, letterSpacing: "0.35em", y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em] text-charcoal/40"
            >
              Growing with You
            </motion.span>
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.15em", y: 8 }}
              animate={{ opacity: 1, letterSpacing: "0.35em", y: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em]"
              style={{
                background: "linear-gradient(135deg, #C9A96E 0%, #E0C78A 50%, #C9A96E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in the UAE &amp; Beyond
            </motion.span>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-gold/60 origin-left hidden sm:block" 
            />
          </motion.div>
          
          <h1 className="text-[2.75rem] sm:text-5xl md:text-[5.5rem] lg:text-[7rem] flex flex-col items-center tracking-tight leading-[1.02]">
            <CinematicLine><span className="font-extrabold text-charcoal">Suvik Group</span></CinematicLine>
            <CinematicLine delay={0.2}><span className="font-light text-charcoal/60 -mt-1 md:-mt-2 italic">Of Companies</span></CinematicLine>
          </h1>
        </div>

        {/* SUBTEXT */}
        <SectionReveal delay={0.4} className="mb-10 md:mb-14 max-w-2xl text-center">
          <p className="text-base md:text-xl text-charcoal/60 leading-relaxed font-light tracking-wide px-4 md:px-0">
            Headquartered in the UAE since 2011, we empower your journey from business setup to sustained growth — fusing regulatory expertise with cutting-edge technology across DLT, Blockchain, and Enterprise IT.
          </p>
        </SectionReveal>

        {/* CTA BUTTONS */}
        <StaggerReveal baseDelay={0.6} stagger={0.15} className="flex flex-col sm:flex-row gap-4 md:gap-5 mb-12 md:mb-16 justify-center w-full sm:w-auto px-6 sm:px-0">
          <StaggerItem className="w-full sm:w-auto">
            <Link href="/contact" className="w-full">
              <Button variant="gold" className="w-full sm:w-auto px-8 md:px-10 py-6 md:py-7 text-[10px] md:text-[11px] tracking-[0.25em] shadow-[0_15px_35px_rgba(212,175,55,0.2)]">
                Schedule Free Consultation
              </Button>
            </Link>
          </StaggerItem>

          <StaggerItem className="w-full sm:w-auto">
            <Link href="/services" className="w-full">
              <Button variant="outline" className="w-full sm:w-auto px-8 md:px-10 py-6 md:py-7 text-[10px] md:text-[11px] tracking-[0.25em] border-charcoal/10 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                View Case Studies
              </Button>
            </Link>
          </StaggerItem>
        </StaggerReveal>

        {/* TRUST METRICS */}
        <StaggerReveal baseDelay={1} stagger={0.1} className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-12 gap-y-4 pt-10 border-t border-charcoal/10 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] md:tracking-[0.3em] text-charcoal/50">
          <StaggerItem className="flex items-center gap-3">
            <Check className="w-3.5 h-3.5 md:w-4 h-4 text-gold stroke-[3]" />
            516+ Projects Delivered
          </StaggerItem>

          <StaggerItem className="flex items-center gap-3">
            <Check className="w-3.5 h-3.5 md:w-4 h-4 text-gold stroke-[3]" />
            14 Years UAE Expertise
          </StaggerItem>

          <StaggerItem className="flex items-center gap-3 sm:hidden lg:flex">
            <Check className="w-3.5 h-3.5 md:w-4 h-4 text-gold stroke-[3]" />
            98% On-Time Delivery
          </StaggerItem>
        </StaggerReveal>

      </div>
    </section>
  );
}