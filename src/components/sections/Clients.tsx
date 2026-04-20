"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  {
    logo: "/lawblocks.png",
    name: "LawBlocks",
    category: "Blockchain & Legal",
    description: "Enterprise Legal Tech Infrastructure"
  },
  {
    logo: "/comtech.png",
    name: "Comtech Gold",
    category: "Fintech / RWA",
    description: "Gold-backed Digital Assets"
  },
  {
    logo: "/equitedge.png",
    name: "EquitEdge",
    category: "Digital Assets",
    description: "Premium Digital Investment Platform"
  },
  {
    logo: "/plugin-logo.png",
    name: "Plugin",
    category: "Blockchain Infrastructure",
    description: "Decentralized Oracle Solutions"
  },
  {
    logo: "/xdc-org.png",
    name: "XDC Foundation",
    category: "Layer 1 Blockchain",
    description: "Enterprise-grade Hybrid Blockchain"
  },
  {
    logo: "/doc-free.png",
    name: "Docufree",
    category: "Document Solutions",
    description: "Corporate Document Management"
  },
  {
    logo: "/shoe-technology.png",
    name: "SHOE Technology",
    category: "IT Solutions",
    description: "Industrial Tech & Automation"
  },
  {
    logo: "/tathmeer-logo.png",
    name: "Tathmeer",
    category: "Fintech / UAE",
    description: "Strategic Financial Consulting"
  }
];

export function Clients() {
  return (
    <section className="relative py-28 md:py-36 bg-[#FCF9F5] overflow-hidden">
      {/* SECTION HEADER */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-[11px] font-bold uppercase tracking-[0.45em] text-[#E0B97A] mb-6">Strategic Partnerships</div>
          <h2 className="text-4xl md:text-6xl font-semibold text-[#1A1A1A] tracking-tight leading-tight">
            Trusted by Industry <span className="text-[#E0B97A]">Leaders</span>
          </h2>
        </motion.div>
      </div>

      {/* INFINITE MARQUEE SHOWCASE */}
      <div className="relative w-full flex items-center justify-center overflow-hidden h-[450px]">
        {/* EDGE FADE MASKS - LUXURY OVERLAYS */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-r from-[#FCF9F5] via-[#FCF9F5]/80 to-transparent z-40 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-l from-[#FCF9F5] via-[#FCF9F5]/80 to-transparent z-40 pointer-events-none" />

        {/* MARQUEE TRACK */}
        <div className="flex w-full group overflow-hidden">
          <motion.div
            className="flex gap-16 py-10 px-8"
            animate={{
              x: [0, -2000], // Adjust based on total width for seamless loop
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            // Pause logic
            style={{ x: 0 }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {/* DUPLICATE ITEMS FOR SEAMLESS INF SCROLL */}
            {[...clients, ...clients, ...clients].map((client, index) => (
              <ClientCard key={`${client.name}-${index}`} client={client} />
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
}

function ClientCard({ client }: { client: any }) {
  return (
    <motion.div
      initial={{ opacity: 0.6, scale: 0.85 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6 }
      }}
      viewport={{ margin: "-20%" }} // Focus when near center
      className="flex-shrink-0 group"
    >
      <div
        className="w-[280px] md:w-[320px] bg-white rounded-[32px] p-8 md:p-10 border border-black/5 shadow-lg shadow-black/[0.02] flex flex-col items-center text-center transition-all duration-500 hover:border-[#E0B97A]/30 hover:shadow-[0_40px_100px_rgba(224,185,122,0.1)]"
      >
        {/* LOGO */}
        <div className="w-32 h-20 relative mb-8 transition-all duration-700 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100">
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="transition-all duration-500">
          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">{client.name}</h3>
          <p className="text-[#E0B97A] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">{client.category}</p>

          <div className="pt-6 border-t border-black/5">
            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-black/35">Strategic Partner</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
