"use client";

import { useState } from "react";
import Loader from "@/components/common/Loader";

import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Clients } from "@/components/sections/Clients";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { GlobalPresenceMap } from "@/components/sections/GlobalPresenceMap";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* ✅ ALWAYS mounted */}
      <Loader onFinish={() => setLoading(false)} />

      {/* SITE */}
      {!loading && (
        <div className="animate-[fadeIn_1.2s_ease-in-out_forwards] flex flex-col">
          <Hero />
          <AboutPreview />
          <ServicesSection />
          <Clients />
          <WhyChooseUs />
          <GlobalPresenceMap />
          <Footer />
        </div>
      )}
    </>
  );
}