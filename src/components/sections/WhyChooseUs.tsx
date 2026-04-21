"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { SectionReveal, CinematicLine, StaggerReveal, StaggerItem } from "@/components/common/SectionReveal";

const stats = [
  { value: 516, suffix: "+", label: "Projects completed", ghost: "500" },
  { value: 20, suffix: "+", label: "Group Employees", ghost: "20" },
  { value: 4, label: "Strategic Offices", ghost: "04" },
  { value: 60, suffix: "+", label: "Global Achievements", ghost: "60" },
];

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 md:py-48 bg-[#EDE6DA] overflow-hidden"
    >
      {/* 🏙️ ARCHITECTURAL BACKGROUND ELEMENTS */}
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" 
      />
      
      {/* LUXURY THREAD ELEMENT (Subtle movement) */}
      <motion.div 
        animate={{ height: ["0%", "100%"] }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-0 right-[10%] w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent pointer-events-none origin-top"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 pr-0 lg:pr-20">
            <SectionReveal>
              <div className="inline-flex items-center gap-4 mb-10">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-px w-8 bg-gold/60 origin-left" 
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-[#C9A96E]">Strategy & Growth</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-charcoal mb-8 md:mb-12 leading-[1.05] tracking-tight">
                <CinematicLine>Doing the right thing,</CinematicLine>
                <CinematicLine delay={0.1}><span className="text-[#C9A96E] italic font-light drop-shadow-sm">at the right time.</span></CinematicLine>
              </h2>

              <div className="space-y-8 text-xl text-charcoal/60 font-light leading-relaxed max-w-xl">
                <p>
                  At <span className="text-charcoal font-medium">SUVIK</span>, we specialize in assisting businesses to achieve their goals, whether it&apos;s a family-owned business, a public, private, or multinational organization.
                </p>
                <p>
                  With our <span className="text-[#C9A96E] font-medium">partner-led approach</span>, we deliver the highest quality of service by using functional communication chains to aid rapid and accurate decision-making.
                </p>
              </div>

              <div className="mt-20 flex items-center gap-8">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                  className="flex -space-x-3"
                >
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="w-12 h-12 rounded-full border-[3px] border-[#EDE6DA] bg-charcoal/[0.03] flex items-center justify-center overflow-hidden"
                    >
                       <div className="w-full h-full bg-gradient-to-tr from-gold/10 to-transparent" />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-[10px] font-bold text-charcoal/30 uppercase tracking-[0.35em]"
                >
                  Elite global excellence
                </motion.div>
              </div>
            </SectionReveal>
          </div>

          {/* CENTER DIVIDER */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-[400px]">
             <div className="w-px h-full bg-gradient-to-b from-transparent via-[#C9A96E]/30 to-transparent relative">
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 -translate-x-1/2 w-1.5 h-12 bg-gradient-to-b from-transparent via-[#C9A96E] to-transparent blur-sm"
                />
             </div>
          </div>

          {/* RIGHT STATS GRID */}
          <div className="lg:col-span-5 relative lg:pl-10">
            <StaggerReveal baseDelay={0.3} stagger={0.15} className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
              {stats.map((stat, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className={`relative p-8 md:p-10 bg-white/60 backdrop-blur-xl border border-charcoal/5 rounded-[24px] md:rounded-[32px] group overflow-hidden transition-all duration-700 shadow-sm hover:shadow-xl hover:border-gold/30 ${
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
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-4xl md:text-5xl font-bold text-charcoal mb-4 tracking-tighter transition-all duration-500 group-hover:text-[#C9A96E] origin-left"
                      >
                        {stat.value}{stat.suffix}
                      </motion.div>
                      <div className="text-[10px] font-bold text-charcoal/40 uppercase tracking-[0.35em] group-hover:text-charcoal transition-colors duration-500">
                        {stat.label}
                      </div>
                    </div>

                    {/* SOFT GOLD GLOW ON HOVER */}
                    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gold/0 group-hover:bg-gold/10 blur-3xl transition-colors duration-700 rounded-full" />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerReveal>

            {/* BACKGROUND DECOR */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gold/5 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
