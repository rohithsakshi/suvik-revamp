"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#FCF9F5]">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[400px] bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-xl border border-gold/10 p-12 md:p-20 rounded-sm text-center shadow-[0_40px_100px_rgba(212,175,55,0.03)] relative">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.4em] text-gold mb-8">Strategic Partnership</div>
            
            <h2 className="text-4xl md:text-6xl font-semibold text-charcoal mb-8 leading-[1.05] tracking-tight">
              Ready to Scale <br />
              <span className="text-gold">Your Vision in UAE?</span>
            </h2>

            <p className="text-lg md:text-xl text-charcoal/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Partner with Suvik Group to navigate the complexities of corporate formation, 
              local laws, and next-generation technology integration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="gold" className="w-full sm:w-auto group">
                  Start Your Journey <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              
              <Link href="/services" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-charcoal/10 font-bold uppercase tracking-widest text-[10px]">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}