"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const clients = [
  {
    logo: "/lawblocks.png",
    name: "LawBlocks",
    category: "Blockchain & Legal",
    description: "Enterprise Legal Tech Infrastructure",
  },
  {
    logo: "/comtech.png",
    name: "Comtech Gold",
    category: "Fintech / RWA",
    description: "Gold-backed Digital Assets",
  },
  {
    logo: "/equitedge.png",
    name: "EquitEdge",
    category: "Digital Assets",
    description: "Premium Digital Investment Platform",
  },
  {
    logo: "/plugin-logo.png",
    name: "Plugin",
    category: "Blockchain Infrastructure",
    description: "Decentralized Oracle Solutions",
  },
  {
    logo: "/xdc-org.png",
    name: "XDC Foundation",
    category: "Layer 1 Blockchain",
    description: "Enterprise-grade Hybrid Blockchain",
  },
  {
    logo: "/doc-free.png",
    name: "Docufree",
    category: "Document Solutions",
    description: "Corporate Document Management",
  },
  {
    logo: "/shoe-technology.png",
    name: "SHOE Technology",
    category: "IT Solutions",
    description: "Industrial Tech & Automation",
  },
  {
    logo: "/tathmeer-logo.png",
    name: "Tathmeer",
    category: "Fintech / UAE",
    description: "Strategic Financial Consulting",
  },
];

export function Clients() {
  return (
    // Background #FCF9F5 — set by ArchPanel in page.tsx
    <section className="relative py-20 md:py-24 overflow-hidden">

      {/* HEADER */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#C9A96E] opacity-50" />
            <div className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#C9A96E]">
              Strategic Partnerships
            </div>
            <div className="w-6 h-px bg-[#C9A96E] opacity-50" />
          </div>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-[#1A1A1A] tracking-tight leading-tight">
            Trusted by Industry{" "}
            <span className="text-[#C9A96E]">Leaders</span>
          </h2>
        </motion.div>
      </div>

      {/* MARQUEE */}
      <div className="relative w-full flex items-center justify-center overflow-hidden h-[360px] md:h-[380px]">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#EDE6DA] via-[#EDE6DA]/85 to-transparent z-40 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#EDE6DA] via-[#EDE6DA]/85 to-transparent z-40 pointer-events-none" />

        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-10 md:gap-12 py-6 px-6"
            animate={{ x: [0, -1800] }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <ClientCard key={`${client.name}-${index}`} client={client} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ClientCard({ client }: { client: typeof clients[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse interaction for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0.7, scale: 0.9, translateZ: -20 }}
      whileInView={{ opacity: 1, scale: 1, translateZ: 0, transition: { duration: 0.6 } }}
      viewport={{ margin: "-20%" }}
      className="flex-shrink-0 group relative"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 bg-[#C9A96E]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-[240px] md:w-[280px] bg-[#F5F1EA] rounded-[28px] p-6 md:p-7 border border-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.02)] flex flex-col items-center text-center transition-all duration-500 hover:border-[#C9A96E]/30 hover:shadow-[0_25px_60px_rgba(201,169,110,0.12)] relative z-10 transform-gpu"
      >

        {/* Logo */}
        <div 
          className="w-28 h-16 relative mb-6 transition-all duration-700 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transform-gpu"
          style={{ transform: "translateZ(30px)" }}
        >
          <Image src={client.logo} alt={client.name} fill className="object-contain" />
        </div>

        <div style={{ transform: "translateZ(15px)" }} className="transform-gpu">
          <h3 className="text-lg md:text-xl font-semibold text-[#1A1A1A] mb-1">
            {client.name}
          </h3>

          <p className="text-[#C9A96E] text-[10px] font-bold uppercase tracking-[0.18em] mb-5">
            {client.category}
          </p>

          <div className="pt-5 border-t border-black/5">
            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-black/35">
              Strategic Partner
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
