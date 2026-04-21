"use client";

import { motion } from "framer-motion";
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
      <ScrollParallax speed={0.15}>
        <div className="absolute top-20 right-0 w-[320px] h-[320px] bg-[#C9A96E]/10 blur-[100px] rounded-full pointer-events-none" />
      </ScrollParallax>
      <ScrollParallax speed={-0.1}>
        <div className="absolute bottom-20 left-0 w-[240px] h-[240px] bg-[#C9A96E]/6 blur-[80px] rounded-full pointer-events-none" />
      </ScrollParallax>

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
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService.title === service.title;

              return (
                <StaggerItem key={service.title} className="flex-1">
                  <motion.div
                    onMouseEnter={() => setActiveService(service)}
                    whileHover={{ 
                      y: -5,
                      rotateX: 2,
                      rotateY: -2,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className="group cursor-pointer h-full"
                    style={{ perspective: "1000px" }}
                  >
                    <div
                      className={`rounded-[24px] border p-6 md:p-7 h-full transition-all duration-500 transform-gpu ${isActive
                          ? "bg-[#EDE6DA] border-[#C9A96E]/40 shadow-[0_20px_50px_rgba(0,0,0,0.06)] scale-[1.02]"
                          : "bg-[#EDE6DA]/40 border-black/5 hover:border-[#C9A96E]/20 hover:bg-[#EDE6DA]/60"
                        }`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="flex items-start gap-4" style={{ transform: "translateZ(20px)" }}>
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${isActive
                              ? "bg-[#C9A96E] text-white"
                              : "bg-[#C9A96E]/10 text-[#C9A96E]"
                            }`}
                        >
                          <Icon className="w-5 h-5 stroke-[1.8]" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-[17px] font-semibold text-[#1A1A1A] mb-2">
                              {service.title}
                            </h3>

                            <div className="w-8 h-8 rounded-full border border-[#C9A96E]/20 flex items-center justify-center shrink-0">
                              <ArrowUpRight
                                className={`w-3.5 h-3.5 text-[#C9A96E] transition-all duration-500 ${isActive
                                    ? "translate-x-0.5 -translate-y-0.5 opacity-100"
                                    : "opacity-60"
                                  }`}
                              />
                            </div>
                          </div>

                          <p className="text-black/55 leading-relaxed text-[14px]">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerReveal>

          {/* RIGHT — Premium visual */}
          <motion.div
            key={activeService.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative h-full"
          >
            <div className="relative bg-[#EDE6DA]/40 rounded-[28px] border border-black/5 p-4 md:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden h-full min-h-[720px]">
              <PremiumVisual
                badge={activeService.badge}
                title={activeService.heading}
                description={activeService.visualDescription}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}