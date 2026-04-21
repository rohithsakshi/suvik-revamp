"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TypographyThread } from "@/components/common/TypographyThread";

const projects = [
  { 
    id: "01", 
    title: "Enterprise Digital Solution", 
    desc: "Digital transformation strategy and execution for UAE corporate leaders.",
    image: "/projects/tech.png"
  },
  { 
    id: "02", 
    title: "Blockchain Infrastructure", 
    desc: "Secure distributed ledger networks implementation for financial entities.",
    image: "/projects/blockchain.png"
  },
  { 
    id: "03", 
    title: "Corporate Business Setup", 
    desc: "Comprehensive strategic planning and onboarding for multinational clients.",
    image: "/projects/setup.png"
  }
];

export function ProjectsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FCF9F5]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <TypographyThread />
            <div className="text-xs font-bold uppercase tracking-[0.4em] text-gold mb-6">Portfolio of Excellence</div>
            <h2 className="text-4xl md:text-5xl font-semibold text-charcoal leading-tight tracking-tight">
              Featured <span className="text-gold">Engagements</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-charcoal/60 max-w-md text-lg font-light leading-relaxed"
          >
            A glimpse into our successful multinational implementations across technology and corporate restructuring.
          </motion.p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal/5 rounded-sm mb-8 group">
                <div className="absolute inset-0 bg-gold/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                {/* IMAGE */}
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100 relative z-10"
                />
                
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                
                {/* GOLD CORNER ACCENT */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500 m-4 z-30" />
                
                {/* HOVER ICON */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-30">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold text-gold tracking-[0.3em] font-serif italic">{proj.id}</span>
                  <div className="h-px flex-grow bg-charcoal/10" />
                </div>
                <h3 className="text-2xl font-semibold text-charcoal mb-4 tracking-tight group-hover:text-gold transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed font-light">
                  {proj.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
