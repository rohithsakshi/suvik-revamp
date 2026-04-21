"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    // Dark section — designed for #0A0908 background set by DarkArchPanel
    <section className="relative pt-20 md:pt-28 pb-24 md:pb-32 overflow-hidden">

      {/* Soft integrated glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A96E]/4 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* SECTION HEADER — white on charcoal */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#C9A96E] opacity-50" />
              <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#C9A96E]">
                Global Presence
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
              Strategic Partnerships{" "}
              <span className="text-[#C9A96E]">Worldwide</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 relative h-[420px] rounded-3xl overflow-hidden border border-white/5"
            style={{
              background: "rgba(255,255,255,0.02)",
              boxShadow: "inset 0 0 60px rgba(0,0,0,0.2)",
            }}
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
                <motion.button
                  key={loc.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ left: loc.coords.left, top: loc.coords.top }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/marker z-30"
                  onMouseEnter={() => setActiveLocation(loc)}
                  onClick={() => setActiveLocation(loc)}
                >
                  <div className="relative">
                    {loc.type === "primary" && (
                      <motion.span className="absolute inset-0 w-10 h-10 -left-3.5 -top-3.5 rounded-full bg-[#C9A96E]/30 animate-ping" />
                    )}
                    <motion.div
                      animate={{
                        scale: activeLocation.id === loc.id
                          ? loc.type === "primary" ? 1.5 : 1.3
                          : loc.type === "primary" ? 1.2 : 1,
                        backgroundColor:
                          loc.type === "primary"
                            ? "#C9A96E"
                            : activeLocation.id === loc.id
                            ? "#C9A96E"
                            : "#64748b",
                      }}
                      className={`rounded-full border-2 shadow-xl transition-all duration-300 group-hover/marker:scale-150 ${
                        loc.type === "primary"
                          ? "w-4 h-4 border-white/90"
                          : "w-3 h-3 border-white/70"
                      }`}
                    />
                    {(activeLocation.id === loc.id || loc.type === "primary") && (
                      <div className="absolute inset-0 blur-md bg-[#C9A96E] opacity-40 -z-10" />
                    )}
                  </div>

                  <div
                    className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 transition-all duration-300 ${
                      activeLocation.id === loc.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest whitespace-nowrap bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 shadow-sm">
                      {loc.city}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Connection lines */}
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
                    transition={{ duration: 3, delay: 1 }}
                  />
                ))}
            </svg>
          </motion.div>

          {/* INFO PANEL */}
          <div className="lg:col-span-4 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative rounded-2xl p-7 md:p-8 h-[420px] flex flex-col justify-between overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6 border border-[#C9A96E]/30"
                    style={{ background: "rgba(201,169,110,0.08)" }}>
                    <MapPin className="w-5 h-5 text-[#C9A96E]" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">
                    {activeLocation.city}
                  </h3>

                  <p className="text-[#C9A96E] font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
                    {activeLocation.country}
                    <span className="mx-2 opacity-30 font-light">|</span>
                    {activeLocation.role}
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-2 border-[#C9A96E]/20 pl-5">
                      <span className="block text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">
                        Office Location
                      </span>
                      <p className="text-white/60 text-base leading-relaxed">
                        {activeLocation.address}
                      </p>
                    </div>

                    <div className="border-l-2 border-[#C9A96E]/20 pl-5">
                      <span className="block text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">
                        Support & Inquiries
                      </span>
                      <a
                        href={`mailto:${activeLocation.email}`}
                        className="text-white/70 text-base font-medium hover:text-[#C9A96E] transition-colors flex items-center gap-3"
                      >
                        <Mail className="w-4 h-4 text-[#C9A96E]/60" />
                        {activeLocation.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-auto relative z-10">
                  <Link
                    href="/contact"
                    className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-[#C9A96E] transition-all duration-300"
                  >
                    Request an appointment
                    <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#C9A96E] hover:border-[#C9A96E] transition-all duration-500 group/cta">
                      <ArrowUpRight className="w-4 h-4 group-hover/cta:text-white transition-colors" />
                    </div>
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
