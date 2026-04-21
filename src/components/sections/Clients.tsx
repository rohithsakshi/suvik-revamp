"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionReveal, CinematicLine } from "@/components/common/SectionReveal";
import Carousel from "@/components/ui/Carousel/Carousel";
import FlowArc from "@/components/common/FlowArc";

const clientItems = [
  {
    id: 1,
    title: "LawBlocks",
    description: "Legal Tech & Blockchain Integration",
    icon: <div className="relative w-16 h-16"><Image src="/lawblocks.png" alt="LawBlocks" fill className="object-contain grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-700" /></div>
  },
  {
    id: 2,
    title: "Comtech Gold",
    description: "Fintech & Digitizing Real World Assets",
    icon: <div className="relative w-16 h-16 group/logo"><Image src="/comtech.png" alt="Comtech Gold" fill className="object-contain grayscale invert group-hover/logo:grayscale-0 group-hover/logo:invert-0 transition-all duration-700" /></div>
  },
  {
    id: 3,
    title: "EquitEdge",
    description: "Elite Digital Asset Management",
    icon: <div className="relative w-16 h-16 group/logo"><Image src="/equitedge.png" alt="EquitEdge" fill className="object-contain grayscale invert group-hover/logo:grayscale-0 group-hover/logo:invert-0 transition-all duration-700" /></div>
  },
  {
    id: 4,
    title: "Plugin",
    description: "Decentralized Oracle Infrastructure",
    icon: <div className="relative w-16 h-16 group/logo"><Image src="/plugin-logo.png" alt="Plugin" fill className="object-contain grayscale invert group-hover/logo:grayscale-0 group-hover/logo:invert-0 transition-all duration-700" /></div>
  },
  {
    id: 5,
    title: "XDC Foundation",
    description: "Global Blockchain Network Support",
    icon: <div className="relative w-16 h-16 group/logo"><Image src="/xdc-org.png" alt="XDC Foundation" fill className="object-contain grayscale invert group-hover/logo:grayscale-0 group-hover/logo:invert-0 group-hover/logo:sepia-[0.5] group-hover/logo:hue-rotate-[180deg] group-hover/logo:saturate-[200%] transition-all duration-700" /></div>
  },
  {
    id: 6,
    title: "Docufree",
    description: "Enterprise Document Solutions",
    icon: <div className="relative w-16 h-16 group/logo"><Image src="/doc-free.png" alt="Docufree" fill className="object-contain grayscale invert group-hover/logo:grayscale-0 group-hover/logo:invert-0 transition-all duration-700" /></div>
  },
  {
    id: 7,
    title: "SHOE Technology",
    description: "Innovative IT Infrastructure",
    icon: <div className="relative w-16 h-16 group/logo"><Image src="/shoe-technology.png" alt="SHOE Technology" fill className="object-contain grayscale invert group-hover/logo:grayscale-0 group-hover/logo:invert-0 group-hover/logo:brightness-[1.2] transition-all duration-700" /></div>
  },
  {
    id: 8,
    title: "Tathmeer",
    description: "Strategic Fintech Growth in UAE",
    icon: <div className="relative w-16 h-16 group/logo"><Image src="/tathmeer-logo.png" alt="Tathmeer" fill className="object-contain grayscale invert group-hover/logo:grayscale-0 group-hover/logo:invert-0 transition-all duration-700" /></div>
  }
];

export function Clients() {
  return (
    <section className="relative py-24 md:py-32 bg-[#EDE6DA] overflow-hidden">
      {/* 🌀 BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <FlowArc />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* LEFT CONTENT: THE STRATEGIC PARAGRAPH */}
          <div className="max-w-xl">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#C9A96E] opacity-50" />
                <div className="text-[11px] font-bold uppercase tracking-[0.42em] text-[#C9A96E]">
                  Our Ecosystem
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight leading-tight mb-8">
                Building Success via <span className="text-gold">Strategic</span> Alliances
              </h2>

              <div className="space-y-6 text-lg text-charcoal/70 font-light leading-relaxed">
                <p>
                  At <span className="font-medium text-charcoal">Suvik Group</span>, we believe that extraordinary growth is the result of focused, strategic partnerships. Our client ecosystem comprises industry leaders in <span className="text-gold font-medium">Blockchain, Fintech, and Enterprise Legal Tech</span>.
                </p>
                <p>
                  We don&apos;t just provide services; we build long-term value. By aligning with organizations that share our vision for technological excellence and market decisiveness, we ensure that every venture is built on a foundation of professional integrity and global scale.
                </p>
                <div className="pt-6 flex items-center gap-6">
                   <div className="flex flex-col">
                      <span className="text-2xl font-bold text-charcoal tracking-tight">200+</span>
                      <span className="text-[9px] uppercase tracking-widest text-charcoal/40 font-bold">Successful Launches</span>
                   </div>
                   <div className="w-px h-10 bg-charcoal/10" />
                   <div className="flex flex-col">
                      <span className="text-2xl font-bold text-charcoal tracking-tight">12+</span>
                      <span className="text-[9px] uppercase tracking-widest text-charcoal/40 font-bold">Years of Trust</span>
                   </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* RIGHT CONTENT: THE REACT BITS CAROUSEL */}
          <div className="flex justify-center lg:justify-end items-center relative py-10">
             {/* Architectural Frame for the Carousel */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="relative"
             >
                <div className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full scale-150 -z-10" />
                <Carousel 
                  items={clientItems}
                  baseWidth={400}
                  autoplay={true}
                  autoplayDelay={4500}
                  pauseOnHover={true}
                  loop={true}
                  round={true}
                />
             </motion.div>
          </div>

        </div>

        {/* BOTTOM METRICS BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 pt-10 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-[10px] font-medium text-black/30 uppercase tracking-[0.35em]">
            Corporate Excellence Since 2011 — UAE & Beyond
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-[9px] font-bold text-black/40 uppercase tracking-widest">Digital Leaders</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              <span className="text-[9px] font-bold text-black/40 uppercase tracking-widest">Global Reach</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
