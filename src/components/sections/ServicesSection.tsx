"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Code,
  Globe,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import { PremiumVisual } from "./PremiumVisual";
import { CinematicLine, SectionReveal, StaggerReveal, StaggerItem, ScrollParallax } from "@/components/common/SectionReveal";

const services = [
  {
    title: "Business Setup",
    heading: "UAE Market Entry",
    description:
      "Mainland, Free Zone and Offshore company formation with complete licensing and strategic market entry support.",
    visualDescription:
      "Launch your business with strategic UAE licensing, structure planning and expansion-ready foundations.",
    badge: "Business Expansion",
    icon: Briefcase,
  },
  {
    title: "Technology & IT",
    heading: "Enterprise Digital Infrastructure",
    description:
      "Enterprise-grade IT consulting, product development and digital infrastructure built for long-term scale.",
    visualDescription:
      "Scalable software systems, enterprise consulting and digital architecture designed for global growth.",
    badge: "Technology Excellence",
    icon: Code,
  },
  {
    title: "Blockchain Advisory",
    heading: "Future-Ready Web3 Systems",
    description:
      "Advanced blockchain strategy, DLT consulting and Web3 infrastructure for modern business transformation.",
    visualDescription:
      "Blockchain strategy, DLT consulting and secure enterprise-grade digital asset infrastructure.",
    badge: "Web3 Innovation",
    icon: Globe,
  },
  {
    title: "Corporate & PRO",
    heading: "Executive Corporate Support",
    description:
      "Golden Visa, banking assistance, compliance, documentation and executive corporate support services.",
    visualDescription:
      "Banking, visas, compliance and executive-level operational support for premium business execution.",
    badge: "Corporate Services",
    icon: Shield,
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#C9A96E]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* HEADER */}
        <SectionReveal className="mb-16 relative">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#C9A96E] opacity-60" />
            <p className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#C9A96E]">
              Strategic Services
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-[#1A1A1A] leading-[1.05] tracking-tight max-w-[900px]">
            <CinematicLine>Premium Services</CinematicLine>
            <CinematicLine delay={0.1}><span className="text-[#C9A96E]">for Global Expansion</span></CinematicLine>
          </h2>

          <SectionReveal delay={0.2}>
            <p className="text-base md:text-lg text-black/55 leading-relaxed max-w-[640px] mt-6 font-light">
              We deliver end-to-end consulting, business setup and technology
              solutions designed for ambitious companies entering the UAE and
              scaling internationally.
            </p>
          </SectionReveal>
        </SectionReveal>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-stretch">
          {/* LEFT — Service cards */}
          <StaggerReveal baseDelay={0.3} stagger={0.12} className="space-y-4 flex flex-col justify-between min-h-full">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService.title === service.title;

              return (
                <StaggerItem key={service.title} className="flex-1">
                  <motion.div
                    onMouseEnter={() => setActiveService(service)}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="group cursor-pointer h-full"
                  >
                    <motion.div
                      animate={{
                        backgroundColor: isActive ? "rgba(237, 230, 218, 1)" : "rgba(237, 230, 218, 0.4)",
                        borderColor: isActive ? "rgba(201, 169, 110, 0.4)" : "rgba(0, 0, 0, 0.05)",
                        scale: isActive ? 1.02 : 0.98,
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-[24px] border p-6 md:p-7 h-full flex flex-col justify-center"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          animate={{
                            backgroundColor: isActive ? "#C9A96E" : "rgba(201, 169, 110, 0.1)",
                            color: isActive ? "#FFFFFF" : "#C9A96E",
                          }}
                          className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        >
                          <Icon className="w-5 h-5 stroke-[1.8]" />
                        </motion.div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-[17px] font-semibold text-[#1A1A1A] mb-2">
                              {service.title}
                            </h3>

                            <motion.div 
                              animate={{ 
                                opacity: isActive ? 1 : 0.4,
                                rotate: isActive ? 0 : -45
                              }}
                              className="w-8 h-8 rounded-full border border-[#C9A96E]/20 flex items-center justify-center shrink-0"
                            >
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A96E]" />
                            </motion.div>
                          </div>

                          <p className="text-black/55 leading-relaxed text-[14px]">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerReveal>

          {/* RIGHT — Premium visual */}
          <div className="relative h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[#EDE6DA]/40 rounded-[28px] border border-black/5 p-4 md:p-5 shadow-sm overflow-hidden h-full min-h-[720px]"
              >
                <PremiumVisual
                  badge={activeService.badge}
                  title={activeService.heading}
                  description={activeService.visualDescription}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}