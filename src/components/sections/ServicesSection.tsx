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
    heading: "Launch in the UAE — in 30 Days",
    description:
      "Free Zone vs Mainland confusion? Visa quotas? Banking rules? We handle it all. RAKEZ, DMCC, SRTIP, Hamriyah — you choose the zone, we get you live.",
    visualDescription:
      "516+ companies launched. Avg setup time: 30 days. Free Zone (0% tax) or Mainland (market access) — with corporate banking included.",
    badge: "30-Day Launch",
    icon: Briefcase,
  },
  {
    title: "Technology & IT",
    heading: "Go Digital Without the Guesswork",
    description:
      "You need scalable software — not vendor lock-in. We build apps, cloud infra, and data systems on 40+ tech stacks with 8 AWS/Azure certified architects.",
    visualDescription:
      "Enterprise apps, cloud migration, and BI dashboards. Built by 42 in-house engineers across 3 cloud providers and 40+ programming languages.",
    badge: "Enterprise Scale",
    icon: Code,
  },
  {
    title: "Blockchain & Web3",
    heading: "Move Finance Onchain — Securely",
    description:
      "Blockchain promises transparency. The reality? Cost, complexity, regulation. We bridge that gap with production-grade infrastructure on XDC, Ethereum, and Hyperledger.",
    visualDescription:
      "6 certified blockchain engineers. 500+ smart contracts deployed. Oracle integration via Plugin. Compliance-first architecture for BFSI and asset tokenization.",
    badge: "Web3 Infrastructure",
    icon: Globe,
  },
  {
    title: "Corporate & PRO",
    heading: "Your Operations, Handled",
    description:
      "Golden Visa processing, corporate banking, compliance filing, and PRO services — so you focus on building, not bureaucracy. 2-hour response time guaranteed.",
    visualDescription:
      "End-to-end operational support. Golden Visa, bank account setup, compliance documentation — delivered on a 6-day UAE work week.",
    badge: "Concierge-Level",
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
              We deliver end-to-end consulting, business setup, and technology
              solutions trusted by 500+ clients entering the UAE and
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
                className="relative bg-[#EDE6DA]/40 rounded-[24px] md:rounded-[28px] border border-black/5 p-4 md:p-5 shadow-sm overflow-hidden h-full min-h-[400px] md:min-h-[720px]"
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