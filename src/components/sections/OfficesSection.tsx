"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const offices = [
  { 
    id: "uae",
    name: "Dubai", 
    country: "UAE",
    role: "Global Headquarters", 
    address: "Dubai Investment Park First, Dubai",
    coords: { top: "42%", left: "62%" }
  },
  { 
    id: "india",
    name: "Pune", 
    country: "India",
    role: "Innovation Center", 
    address: "Bypass Rd, Pune, Maharashtra",
    coords: { top: "48%", left: "72%" }
  },
  { 
    id: "thailand",
    name: "Bangkok", 
    country: "Thailand",
    role: "APAC Regional Hub", 
    address: "Sukhumvit Rd, Bangkok",
    coords: { top: "54%", left: "80%" }
  },
  { 
    id: "mauritius",
    name: "Ebene", 
    country: "Mauritius",
    role: "Strategic Gateway", 
    address: "Ebene Cyber City, Mauritius",
    coords: { top: "78%", left: "66%" }
  },
];

export function OfficesSection() {
  const [activeOffice, setActiveOffice] = useState(offices[0]);

  return (
    <section className="relative py-32 bg-[#EDE6DA] overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: TEXT & INTERACTIVE MAP */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mb-12"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold mb-6">Global Presence</div>
              <h2 className="text-4xl md:text-6xl font-semibold text-charcoal mb-8 tracking-tight leading-[1.05]">
                Connecting the World <br />
                <span className="text-gold italic font-light text-3xl md:text-5xl">from our Hub in UAE</span>
              </h2>
            </motion.div>

            {/* STYLIZED WORLD MAP */}
            <div className="relative aspect-[16/9] w-full bg-charcoal/5 rounded-3xl overflow-hidden border border-charcoal/5 p-8 group">
              {/* SLIGHTLY BLURRED BASE MAP (SVG) */}
              <svg 
                viewBox="0 0 1000 500" 
                className="w-full h-full opacity-20 transition-opacity duration-700 group-hover:opacity-30"
                fill="currentColor"
              >
                <path d="M150,150 L180,140 L200,160 L220,150 L250,180 L230,220 L200,240 L160,230 Z" className="text-charcoal/20" />
                {/* Simplified map shapes for artistic look */}
                <circle cx="650" cy="220" r="120" className="text-gold/10" /> 
                <circle cx="750" cy="250" r="100" className="text-charcoal/10" />
                <circle cx="680" cy="380" r="80" className="text-gold/10" />
              </svg>

              {/* PULSING LOCATIONS */}
              {offices.map((office) => (
                <motion.button
                  key={office.id}
                  onClick={() => setActiveOffice(office)}
                  className="absolute z-20 group/pin"
                  style={{ top: office.coords.top, left: office.coords.left }}
                >
                  <div className="relative flex items-center justify-center">
                    <span className={`animate-ping absolute inline-flex h-8 w-8 rounded-full ${activeOffice.id === office.id ? 'bg-gold' : 'bg-charcoal/30'} opacity-20`}></span>
                    <div className={`w-3 h-3 rounded-full shadow-lg transition-colors duration-500 ${activeOffice.id === office.id ? 'bg-gold' : 'bg-charcoal/40 group-hover/pin:bg-gold/60'}`} />
                  </div>
                  
                  {/* LABEL */}
                  <div className={`absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-500 ${activeOffice.id === office.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal bg-white/80 backdrop-blur-md px-3 py-1 rounded-sm border border-gold/20 shadow-xl">
                      {office.name}
                    </span>
                  </div>
                </motion.button>
              ))}

              {/* CONNECTION LINES (From UAE to others) */}
              {offices.slice(1).map((office, i) => (
                <svg key={i} className="absolute inset-0 z-10 w-full h-full pointer-events-none">
                  <motion.line
                    x1="62%" y1="42%" 
                    x2={office.coords.left} y2={office.coords.top}
                    stroke="#D4AF37"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </svg>
              ))}
            </div>
          </div>

          {/* RIGHT: ACTIVE OFFICE DETAILS */}
          <div className="lg:col-span-5">
            <motion.div
              key={activeOffice.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="p-10 md:p-14 bg-white border border-charcoal/5 rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.03)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12">
                <Globe size={200} />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center mb-8 border border-gold/20">
                  <MapPin size={20} className="text-gold" />
                </div>
                
                <h3 className="text-4xl font-semibold text-charcoal mb-2 tracking-tight">
                  {activeOffice.name}
                </h3>
                <p className="text-gold font-bold text-xs uppercase tracking-[.3em] mb-10">
                  {activeOffice.country} — {activeOffice.role}
                </p>

                <div className="space-y-8 mb-12">
                  <div>
                    <span className="block text-[10px] font-bold text-charcoal/30 uppercase tracking-widest mb-3">Office Location</span>
                    <p className="text-charcoal/60 text-lg font-light leading-relaxed">
                      {activeOffice.address}
                    </p>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-charcoal/30 uppercase tracking-widest mb-3">Local Support</span>
                    <p className="text-charcoal/60 text-base font-light">
                      suvik.{activeOffice.id}@suvik.ae
                    </p>
                  </div>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-gold transition-colors duration-300">
                  Request an Appointment
                  <ArrowUpRight size={16} className="text-gold" />
                </Link>
              </div>

              {/* BOTTOM ACCENT */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold/5 via-gold/40 to-gold/5" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
