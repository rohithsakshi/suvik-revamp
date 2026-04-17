"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { PremiumVisual } from "./PremiumVisual";
import { Check } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-20 overflow-hidden bg-[#FCF9F5]">
      
      {/* ================= BACKGROUND ELEMENTS ================= */}
      
      {/* SOFT TEXTURE / LIGHT SWEEP */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="light-sweep-gold opacity-30" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          
          {/* ================= LEFT SIDE: CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col max-w-2xl px-2 mb-12 lg:mb-0"
          >
            {/* PILL TAG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-gold/30 bg-gold/5 text-gold px-4 py-1.5 rounded-sm text-xs font-bold tracking-[0.2em] uppercase mb-10 w-fit backdrop-blur-sm shadow-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              UAE Business & Technology Partner
            </motion.div>

            {/* HEADLINE (2 lines max) */}
            <h1 className="text-6xl md:text-7xl font-semibold text-charcoal mb-8 leading-[1.05] tracking-tight">
              Launch & Scale <br />
              <span className="text-gold">Your Business in UAE</span>
            </h1>

            {/* SUBHEADLINE (1-2 lines) */}
            <p className="text-xl text-charcoal/70 mb-10 max-w-lg leading-relaxed font-light">
              End-to-end luxury consulting for corporate formation, technology solutions, and global scaling. Experience premium business excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto" variant="gold">
                  Start Your Business
                </Button>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-charcoal/10">
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* TRUST SIGNALS */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-10 border-t border-charcoal/10">
              {[
                "100+ Businesses Launched",
                "UAE Market Experts",
                "End-to-End Solutions"
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-charcoal/50"
                >
                  <div className="flex items-center justify-center p-1 rounded-full bg-gold/10">
                    <Check className="w-3.5 h-3.5 text-gold stroke-[3]" />
                  </div>
                  {text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE: PREMIUM VISUAL ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="relative lg:h-[700px] flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[650px] lg:mr-[-10%] float-motion">
              <PremiumVisual />
              
              {/* ACCENT BLURS */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-[100px] -z-10" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -z-10" />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}