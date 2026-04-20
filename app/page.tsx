"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Clients } from "@/components/sections/Clients";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { GlobalPresenceMap } from "@/components/sections/GlobalPresenceMap";
import {
  DividerAboutServices,
  DividerServicesClients,
  DividerClientsProjects,
  DividerProjectsGlobal,
  DividerGlobalFooter,
} from "@/components/ui/SectionDividers";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reveal content after loader finishes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // Slightly after loader fade-out starts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full">
      <div
        style={{
          visibility: loading ? "hidden" : "visible",
          opacity: loading ? 0 : 1,
          transition: loading ? "none" : "opacity 0.8s ease",
          pointerEvents: loading ? "none" : "auto",
        }}
        className="flex flex-col"
      >
        <Hero />

        <AboutPreview />
        <DividerAboutServices />

        <ServicesSection />
        <DividerServicesClients />

        <Clients />
        <DividerClientsProjects />

        <WhyChooseUs />
        <DividerProjectsGlobal />

        <GlobalPresenceMap />
        <DividerGlobalFooter />
      </div>
    </div>
  );
}
