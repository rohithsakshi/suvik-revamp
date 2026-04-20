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
    <section className="relative py-28 md:py-36 bg-[#FCF9F5] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#E0B97A]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[#E0B97A] mb-6">
            Strategic Services
          </p>

          <h2 className="text-4xl md:text-6xl xl:text-7xl font-semibold text-[#1A1A1A] leading-[1.05] tracking-tight max-w-[1100px]">
            Premium Services{" "}
            <span className="text-[#E0B97A]">
              for Global Expansion
            </span>
          </h2>

          <p className="text-lg md:text-xl text-black/65 leading-relaxed max-w-[760px] mt-8">
            We deliver end-to-end consulting, business setup and
            technology solutions designed for ambitious companies
            entering the UAE and scaling internationally.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService.title === service.title;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -4 }}
                  onMouseEnter={() => setActiveService(service)}
                  className="group cursor-pointer"
                >
                  <div
                    className={`rounded-[28px] border p-6 md:p-7 transition-all duration-500 ${isActive
                        ? "bg-white border-[#E0B97A]/30 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
                        : "bg-white border-black/5 hover:border-[#E0B97A]/20"
                      }`}
                  >
                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${isActive
                            ? "bg-[#E0B97A] text-white"
                            : "bg-[#E0B97A]/10 text-[#E0B97A]"
                          }`}
                      >
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                            {service.title}
                          </h3>

                          <div className="w-10 h-10 rounded-full border border-[#E0B97A]/20 flex items-center justify-center">
                            <ArrowUpRight
                              className={`w-4 h-4 text-[#E0B97A] transition-all duration-500 ${isActive
                                  ? "translate-x-1 -translate-y-1 opacity-100"
                                  : "opacity-70"
                                }`}
                            />
                          </div>
                        </div>

                        <p className="text-black/60 leading-relaxed text-[15px]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT SIDE DYNAMIC PANEL */}
          <motion.div
            key={activeService.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative bg-white rounded-[36px] border border-black/5 p-4 md:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.03)] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full light-sweep-gold pointer-events-none" />

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