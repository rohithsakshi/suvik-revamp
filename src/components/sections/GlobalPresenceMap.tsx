"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionReveal, CinematicLine } from "@/components/common/SectionReveal";

const locations = [
  {
    id: "dubai",
    city: "Dubai",
    country: "UAE",
    role: "Global Headquarters",
    address: "Dubai Investment Park First, Dubai",
    email: "info@suvik.ae",
    coords: { left: "48%", top: "52%" },
    type: "primary",
  },
  {
    id: "abudhabi",
    city: "Abu Dhabi",
    country: "UAE",
    role: "Regional Hub",
    address: "Al Reem Island, Abu Dhabi",
    email: "abudhabi@suvik.ae",
    coords: { left: "46%", top: "54%" },
    type: "secondary",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    country: "India",
    role: "Technology Center",
    address: "Bandra Kurla Complex, Mumbai",
    email: "india@suvik.ae",
    coords: { left: "62%", top: "60%" },
    type: "secondary",
  },
  {
    id: "london",
    city: "London",
    country: "UK",
    role: "Strategic Office",
    address: "Canary Wharf, London",
    email: "uk@suvik.ae",
    coords: { left: "32%", top: "35%" },
    type: "secondary",
  },
  {
    id: "switzerland",
    city: "Zug",
    country: "Switzerland",
    role: "Group Company",
    address: "Suvik Technologies GmbH, Bahnhofstrasse 27, 6300 Zug, Switzerland",
    email: "info@suvik.ae",
    coords: { left: "35%", top: "40%" },
    type: "secondary",
  },
];

export function GlobalPresenceMap() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <section className="relative pt-20 md:pt-28 pb-24 md:pb-32 overflow-hidden bg-[#141414]">
      {/* Soft integrated glow */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A96E]/4 blur-[120px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* SECTION HEADER */}
        <SectionReveal className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <motion.div 
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               className="w-6 h-px bg-[#C9A96E] opacity-50 origin-left" 
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#C9A96E]">
              Global Presence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            <CinematicLine>Strategic Partnerships </CinematicLine>
            <CinematicLine delay={0.1}><span className="text-[#C9A96E]">Worldwide</span></CinematicLine>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* MAP */}
          <SectionReveal
            delay={0.2}
            className="lg:col-span-8 relative h-[420px] rounded-3xl overflow-hidden border border-white/5 bg-[rgba(255,255,255,0.02)] shadow-[inset_0_0_60px_rgba(0,0,0,0.2)]"
          >
            {/* Map image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/uae-region.jpg"
                alt="UAE & India Region Map"
                fill
                className="object-cover grayscale brightness-[0.45] contrast-[1.05] opacity-75"
                priority
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/40 pointer-events-none" />
            </div>

            {/* Markers */}
            <div className="absolute inset-0 z-20">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  style={{ left: loc.coords.left, top: loc.coords.top }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/marker z-30"
                  onMouseEnter={() => setActiveLocation(loc)}
                  onClick={() => setActiveLocation(loc)}
                >
                  <div className="relative">
                    {loc.type === "primary" && (
                      <motion.span 
                        animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 w-10 h-10 -left-3.5 -top-3.5 rounded-full bg-[#C9A96E]" 
                      />
                    )}
                    <motion.div
                      animate={{
                        scale: activeLocation.id === loc.id ? 1.4 : 1,
                        backgroundColor: loc.type === "primary" ? "#C9A96E" : activeLocation.id === loc.id ? "#C9A96E" : "#64748b",
                      }}
                      className={`rounded-full border shadow-xl transition-all duration-300 ${loc.type === "primary"
                        ? "w-4 h-4 border-white/90"
                        : "w-3 h-3 border-white/70"
                        }`}
                    />
                  </div>

                  <AnimatePresence>
                    {activeLocation.id === loc.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute top-full mt-3 left-1/2 -translate-x-1/2"
                      >
                        <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest whitespace-nowrap bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 shadow-sm">
                          {loc.city}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {/* Connection lines (Animated Path) */}
            <svg className="absolute inset-0 pointer-events-none z-10 w-full h-full opacity-15">
              {locations
                .filter((loc) => loc.id !== "dubai")
                .map((loc) => (
                  <motion.line
                    key={loc.id}
                    x1="48%" y1="52%"
                    x2={loc.coords.left} y2={loc.coords.top}
                    stroke="#C9A96E"
                    strokeWidth="0.7"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                ))}
            </svg>
          </SectionReveal>

          {/* INFO PANEL */}
          <div className="lg:col-span-4 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl p-7 md:p-8 h-[420px] flex flex-col justify-between overflow-hidden border border-white/5 bg-white/5 backdrop-blur-2xl"
              >
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center mb-6 border border-[#C9A96E]/30 bg-[#C9A96E]/10"
                  >
                    <MapPin className="w-5 h-5 text-[#C9A96E]" />
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">
                    {activeLocation.city}
                  </h3>
                  <p className="font-semibold text-[11px] uppercase tracking-[0.28em] mb-8 text-white/60">
                    {activeLocation.country}
                    <span className="mx-2 font-light text-white/20">|</span>
                    {activeLocation.role}
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-2 border-[#C9A96E]/40 pl-5">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] mb-2 text-white/50">
                        Office Location
                      </span>
                      <p className="text-base leading-relaxed text-white/90">
                        {activeLocation.address}
                      </p>
                    </div>

                    <div className="border-l-2 border-[#C9A96E]/40 pl-5">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] mb-2 text-white/50">
                        Support & Inquiries
                      </span>
                      <a
                        href={`mailto:${activeLocation.email}`}
                        className="transition-colors flex items-center gap-3 text-base font-medium text-white/90 hover:text-[#C9A96E]"
                      >
                        <Mail className="w-4 h-4 text-[#C9A96E]" />
                        {activeLocation.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-auto relative z-10">
                  <Link
                    href="/contact"
                    className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-[#C9A96E] transition-all duration-300 group"
                  >
                    Request an appointment
                    <motion.div 
                      whileHover={{ scale: 1.1, backgroundColor: "#C9A96E" }}
                      className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center transition-all duration-500"
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
