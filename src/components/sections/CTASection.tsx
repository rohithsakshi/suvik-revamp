"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CinematicLine, SectionReveal } from "@/components/common/SectionReveal";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-[#FCF9F5]">
      
      {/* BACKGROUND ACCENTS - Deep cinematic glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center">
        {/* The visual pause - centering content in empty space */}
        <div className="max-w-3xl mx-auto text-center w-full relative">
          
          <SectionReveal>
            <div className="inline-flex items-center gap-3 mb-12">
              <div className="h-px w-8 bg-gold/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Strategic Partnership</span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-semibold text-charcoal mb-10 leading-[1.05] tracking-tight">
              <CinematicLine>Ready to Scale</CinematicLine>
              <CinematicLine delay={0.1}><span className="text-gold italic font-light">Your Vision in UAE?</span></CinematicLine>
            </h2>

            <SectionReveal delay={0.3}>
              <p className="text-xl md:text-2xl text-charcoal/60 mb-16 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                Partner with Suvik Group to navigate the complexities of corporate formation, 
                local laws, and next-generation technology integration.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.5} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="gold" className="w-full sm:w-auto group px-12 py-8 text-[11px] tracking-[0.25em] shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-1">
                  Start Your Journey <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
              
              <Link href="/services" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-charcoal/10 font-bold uppercase tracking-widest text-[10px] px-12 py-8 bg-transparent hover:bg-charcoal/5 transition-colors duration-500">
                  Explore Services
                </Button>
              </Link>
            </SectionReveal>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}