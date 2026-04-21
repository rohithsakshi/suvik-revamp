"use client";

import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Clients } from "@/components/sections/Clients";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { GlobalPresenceMap } from "@/components/sections/GlobalPresenceMap";

// ─────────────────────────────────────────────────────────────────────────────
// Static Panels
// Removed all scroll-triggered logic and negative margins to restore
// natural browser scrolling and eliminate double scrollbars.
// ─────────────────────────────────────────────────────────────────────────────

interface StaticPanelProps {
  children: React.ReactNode;
  bg?: string;
  id?: string;
  roundedTop?: boolean;
}

function StaticPanel({
  children,
  bg = "#FCF9F5",
  id,
  roundedTop = false,
}: StaticPanelProps) {
  return (
    <div
      id={id}
      style={{
        backgroundColor: bg,
      }}
      className={`relative w-full ${roundedTop ? "rounded-t-[32px] md:rounded-t-[40px]" : ""}`}
    >
      {children}
    </div>
  );
}

function DarkStaticPanel({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div
      id={id}
      style={{
        backgroundColor: "#1A1A1A",
      }}
      className="relative w-full rounded-t-[32px] md:rounded-t-[40px]"
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page — Static scene composition
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="relative bg-[#EDE6DA]">
      {/* Scene 1: Hero */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Scene 2: About */}
      <StaticPanel id="about" bg="#EDE6DA" roundedTop>
        <AboutPreview />
      </StaticPanel>

      {/* Scene 3: Services */}
      <StaticPanel id="services" bg="#E6DDD0">
        <ServicesSection />
      </StaticPanel>

      {/* Scene 4: Clients */}
      <StaticPanel id="projects" bg="#EDE6DA">
        <Clients />
      </StaticPanel>

      {/* Scene 5: Why Choose Us */}
      <StaticPanel id="why-choose-us" bg="#DDD4C6">
        <WhyChooseUs />
      </StaticPanel>

      {/* Scene 6: Global Presence */}
      <DarkStaticPanel id="contact">
        <GlobalPresenceMap />
      </DarkStaticPanel>
    </div>
  );
}
