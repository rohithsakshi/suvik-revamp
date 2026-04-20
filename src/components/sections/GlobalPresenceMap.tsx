"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// 📍 UPDATED LOCATIONS (4 Locations on /uae-region.jpg)
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

  // ANIMATION VARIANTS
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#FCF9F5] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold mb-6">Global Presence</div>
            <h2 className="text-4xl md:text-5xl font-semibold text-charcoal tracking-tight leading-tight">
              Strategic Partnerships <span className="text-gold">Worldwide</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* 🗺️ REGIONAL MAP CONTAINER (LEFT) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-8 relative h-[500px] bg-[#FCF9F5] rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-charcoal/5 group overflow-hidden"
          >
            {/* REAL REGIONAL MAP IMAGE */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/uae-region.jpg"
                alt="UAE & India Region Map"
                fill
                className="object-cover grayscale brightness-[0.9] contrast-[0.9] opacity-[0.55] blur-[0.5px] transition-all duration-1000 group-hover:opacity-[0.6]"
                priority
              />
              {/* SOFT BEIGE TINT OVERLAY */}
              <div className="absolute inset-0 bg-[#FCF9F5]/40 pointer-events-none" />
            </div>

            {/* 📍 LOCATION MARKERS */}
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
                    {/* PULSE (IF DUBAI/PRIMARY) */}
                    {loc.type === "primary" && (
                      <motion.span 
                        className="absolute inset-0 w-10 h-10 -left-3.5 -top-3.5 rounded-full bg-gold/30 animate-ping"
                      />
                    )}
                    
                    {/* DOT */}
                    <motion.div 
                      animate={{ 
                        scale: activeLocation.id === loc.id ? (loc.type === "primary" ? 1.5 : 1.3) : (loc.type === "primary" ? 1.2 : 1),
                        backgroundColor: loc.type === "primary" ? "#D4AF37" : (activeLocation.id === loc.id ? "#D4AF37" : "#94a3b8")
                      }}
                      className={`rounded-full border-2 border-white/90 shadow-2xl transition-all duration-300 group-hover/marker:scale-150 
                        ${loc.type === "primary" ? "w-4 h-4" : "w-3 h-3"}`}
                    />
                    
                    {/* GLOW (IF ACTIVE OR PRIMARY) */}
                    {(activeLocation.id === loc.id || loc.type === "primary") && (
                      <div className="absolute inset-0 blur-md bg-gold opacity-40 -z-10" />
                    )}
                  </div>

                  {/* MINI LABEL / TOOLTIP */}
                  <div className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 transition-all duration-300 
                    ${activeLocation.id === loc.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                    <span className="text-[10px] font-bold text-charcoal/70 uppercase tracking-widest whitespace-nowrap bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-sm border border-charcoal/5 shadow-sm">
                      {loc.city}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* CONNECTION LINES (FROM DUBAI TO ALL OTHERS) */}
            <svg className="absolute inset-0 pointer-events-none z-10 w-full h-full opacity-20">
              {locations.filter(loc => loc.id !== "dubai").map((loc) => (
                <motion.line
                  key={loc.id}
                  x1="48%" y1="52%"
                  x2={loc.coords.left} y2={loc.coords.top}
                  stroke="#D4AF37"
                  strokeWidth="0.7"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 1 }}
                />
              ))}
            </svg>

            {/* HQ RADIAL GLOW (DUBAI) */}
            <div 
              style={{ left: "48%", top: "52%" }}
              className="absolute w-48 h-48 -translate-x-1/2 -translate-y-1/2 bg-gold/5 blur-[80px] pointer-events-none z-[1]"
            />
          </motion.div>

          {/* 📄 DYNAMIC INFO PANEL (RIGHT) */}
          <div className="lg:col-span-4 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white p-10 md:p-12 border border-charcoal/10 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.03)] h-[500px] flex flex-col justify-between overflow-hidden relative group"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
                
                <div className="relative z-10 font-sans">
                  <div className="w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center mb-8 border border-gold/20 shadow-inner">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  
                  <h3 className="text-4xl font-semibold text-charcoal mb-2 tracking-tight">
                    {activeLocation.city}
                  </h3>
                  <p className="text-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-10">
                    {activeLocation.country} <span className="mx-2 opacity-30 font-light">|</span> {activeLocation.role}
                  </p>

                  <div className="space-y-10">
                    <div className="border-l-2 border-gold/10 pl-5 hover:border-gold transition-colors group/item">
                      <span className="block text-[9px] font-bold text-charcoal/30 uppercase tracking-[0.2em] mb-3 group-hover/item:text-gold transition-colors">Office Location</span>
                      <p className="text-charcoal/70 text-lg font-light leading-relaxed">
                        {activeLocation.address}
                      </p>
                    </div>

                    <div className="border-l-2 border-gold/10 pl-5 hover:border-gold transition-colors group/item">
                      <span className="block text-[9px] font-bold text-charcoal/30 uppercase tracking-[0.2em] mb-3 group-hover/item:text-gold transition-colors">Support & Inquiries</span>
                      <a href={`mailto:${activeLocation.email}`} className="text-charcoal/80 text-lg font-medium hover:text-gold transition-colors flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gold/60" />
                        {activeLocation.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-auto group/cta relative z-10">
                  <Link href="/contact" className="flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-all duration-300">
                    Request an appointment
                    <div className="w-11 h-11 rounded-full border border-charcoal/10 flex items-center justify-center group-hover/cta:bg-gold group-hover/cta:border-gold transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 group-hover/cta:text-white transition-colors" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
      
      {/* BOTTOM ACCENT */}
      <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent shadow-sm" />
    </section>
  );
}
