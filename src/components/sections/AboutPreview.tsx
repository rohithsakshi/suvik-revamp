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
                <CinematicLine>A Decade of</CinematicLine>
                <CinematicLine delay={0.1}><span className="text-gold">Excellence in UAE</span></CinematicLine>
              </h2>

              <StaggerReveal baseDelay={0.3} stagger={0.15} className="flex flex-col gap-6">
                {[
                  "Pioneering IT Solutions",
                  "Blockchain & DLT Experts",
                  "Trusted Corporate Partner"
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
                    &quot;Winning should be at the heart of every Strategy.&quot;
                  </motion.span>
                </blockquote>
              </div>

              <div className="space-y-8 text-lg md:text-xl text-charcoal/80 leading-relaxed font-light">
                <p>
                  <span className="font-semibold text-charcoal text-xl block mb-2">Since 2011</span>
                  Founded in year 2011, Suvik Group is based in the UAE. A decade of experience has made us a trusted partner for businesses seeking innovative and reliable IT solutions.
                </p>
                <p>
                  At Suvik, we are committed to delivering cutting-edge IT solutions that transform businesses. With a deep understanding of <span className="text-gold font-medium">Distributed Ledger Technology and Blockchain</span>, we offer comprehensive IT consultancy services to help our clients unlock their full potential.
                </p>
                <p>
                  Suvik continues to lead the way in IT services and blockchain technology, driving digital transformation and delivering innovative solutions to meet the evolving needs of businesses in the UAE and beyond.
                </p>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>

    </section>
  );
}
