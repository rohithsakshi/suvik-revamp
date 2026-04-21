"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: 516, suffix: "+", label: "Projects completed", ghost: "500" },
  { value: 20, suffix: "+", label: "Group Employees", ghost: "20" },
  { value: 4, label: "Strategic Offices", ghost: "04" },
  { value: 60, suffix: "+", label: "Global Achievements", ghost: "60" },
];

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const threadY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 md:py-48 bg-[#EDE6DA] overflow-hidden"
    >
      {/* 🏙️ ARCHITECTURAL BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      {/* LUXURY THREAD ELEMENT */}
      <motion.div 
        style={{ y: threadY }}
        className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 pr-0 lg:pr-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-4 mb-10">
                <div className="h-px w-8 bg-gold/60" />
                <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-[#C9A96E]">Strategy & Growth</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-semibold text-charcoal mb-12 leading-[1.05] tracking-tight">
                Doing the right thing, <br />
                <span className="text-[#C9A96E] italic font-light drop-shadow-sm">at the right time.</span>
              </h2>

              <div className="space-y-8 text-xl text-charcoal/60 font-light leading-relaxed max-w-xl">
                <p>
                  At <span className="text-charcoal font-medium">SUVIK</span>, we specialize in assisting businesses to achieve their goals, whether it's a family-owned business, a public, private, or multinational organization.
                </p>
                <p>
                  With our <span className="text-[#C9A96E] font-medium">partner-led approach</span>, we deliver the highest quality of service by using functional communication chains to aid rapid and accurate decision-making.
                </p>
              </div>

              <div className="mt-20 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#EDE6DA] bg-charcoal/[0.03] flex items-center justify-center overflow-hidden">
                       <div className="w-full h-full bg-gradient-to-tr from-gold/10 to-transparent" />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-bold text-charcoal/30 uppercase tracking-[0.35em]">
                  Elite global excellence
                </div>
              </div>
            </motion.div>
          </div>

          {/* CENTER DIVIDER */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-[400px]">
             <div className="w-px h-full bg-gradient-to-b from-transparent via-[#C9A96E]/30 to-transparent relative">
                <motion.div 
                  initial={{ top: "0%" }}
                  whileInView={{ top: "100%" }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 -translate-x-1/2 w-1.5 h-12 bg-gradient-to-b from-transparent via-[#C9A96E] to-transparent blur-sm"
                />
             </div>
          </div>

          {/* RIGHT STATS GRID */}
          <div className="lg:col-span-5 relative lg:pl-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }}
                  className={`relative p-10 bg-white/60 backdrop-blur-xl border border-charcoal/5 rounded-[32px] group overflow-hidden transition-all duration-700 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(201,169,110,0.12)] hover:border-gold/30 ${
                    i % 2 !== 0 ? "lg:mt-12" : ""
                  }`}
                >
                  {/* LIGHTING SWEEP EFFECT */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                  
                  {/* GHOST VALUE */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
                     <span className="text-[120px] font-black leading-none tracking-tighter text-charcoal">
                        {stat.ghost}
                     </span>
                  </div>

                  <div className="relative z-10 shrink-0">
                    <div className="text-4xl md:text-5xl font-bold text-charcoal mb-4 tracking-tighter transition-all duration-500 group-hover:text-[#C9A96E] group-hover:scale-105 origin-left">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-[10px] font-bold text-charcoal/40 uppercase tracking-[0.35em] group-hover:text-charcoal transition-colors duration-500">
                      {stat.label}
                    </div>
                  </div>

                  {/* SOFT GOLD GLOW ON HOVER */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gold/0 group-hover:bg-gold/10 blur-3xl transition-colors duration-700 rounded-full" />
                </motion.div>
              ))}
            </div>

            {/* BACKGROUND DECOR */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gold/5 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

