"use client";

import { CinematicLine, SectionReveal, StaggerReveal, StaggerItem } from "@/components/common/SectionReveal";
import { motion, AnimatePresence } from "framer-motion";

export function AboutPreview() {
  return (
    <section className="relative py-24 md:py-32 bg-[#EDE6DA]">

      {/* ================= BACKGROUND ELEMENTS ================= */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] pointer-events-none" 
      />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* ================= LEFT COLUMN: LEGACY & TITLE ================= */}
          <div className="lg:col-span-5">
            <SectionReveal>
              {/* LEGACY BADGE */}
              <div className="inline-flex items-center gap-3 mb-8">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-gold/20"
                >
                  2011
                </motion.span>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-px w-12 bg-gold/30 origin-left" 
                />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#8A7A5A]">Established</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold text-charcoal mb-8 leading-[1.1] tracking-tight">
                <CinematicLine>Built to Solve</CinematicLine>
                <CinematicLine delay={0.1}><span className="text-gold">What Others Can&apos;t</span></CinematicLine>
              </h2>

              <StaggerReveal baseDelay={0.3} stagger={0.15} className="flex flex-col gap-6">
                {[
                  "6 Certified Blockchain Engineers",
                  "XDC · Ethereum · Hyperledger",
                  "RAKEZ & DED Licensed Partner"
                ].map((item, i) => (
                  <StaggerItem key={i} className="flex items-center gap-4">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      className="w-1.5 h-1.5 rounded-full bg-gold" 
                    />
                    <span className="text-sm font-bold uppercase tracking-widest text-charcoal/60">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </SectionReveal>
          </div>

          {/* ================= RIGHT COLUMN: CONTENT ================= */}
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <SectionReveal delay={0.3} className="relative">
              {/* STRATEGY QUOTE */}
              <div className="mb-12">
                <blockquote className="text-2xl md:text-3xl font-semibold text-gold italic leading-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    &quot;Fourteen years ago, I saw founders struggling with UAE bureaucracy. We built Suvik to solve that — once and for all.&quot;
                  </motion.span>
                </blockquote>
                <p className="text-sm text-charcoal/40 mt-3 font-medium tracking-wide">— Vinod Khurana, CEO &amp; Co-Founder</p>
              </div>

              <div className="space-y-8 text-lg md:text-xl text-charcoal/80 leading-relaxed font-light">
                <p>
                  <span className="font-semibold text-charcoal text-xl block mb-2">The Problem We Solve</span>
                  Most founders spend 3–6 months navigating Free Zones, licenses, visas, and banking. We&apos;ve compressed that into 30 days — 516 times and counting.
                </p>
                <p>
                  Beyond business setup, we build enterprise-grade <span className="text-gold font-medium">blockchain infrastructure on XDC, Ethereum, and Hyperledger</span> — powering real-world assets, DeFi protocols, and institutional compliance layers across the GCC.
                </p>
                <p>
                  From a family-owned startup to a multinational expansion, Suvik is the one vendor that handles both your <span className="font-medium text-charcoal">corporate formation and technology stack</span> — under one roof, on UAE time.
                </p>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>

    </section>
  );
}
