"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Clients } from "@/components/sections/Clients";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { GlobalPresenceMap } from "@/components/sections/GlobalPresenceMap";

// ─────────────────────────────────────────────────────────────────────────────
// ArchPanel
//
// The cinematic scroll primitive. Each section rises like a premium
// architectural slab sliding into its final position — weighted, authoritative,
// intentional. Not a fade-in. Not a startup animation. A scene arrival.
//
// Physics tuning:
//   stiffness 42 / damping 20 = slow enough to feel heavy, fast enough to not lag.
//   "start end → start 0.08" offset = rise completes while top of section is
//   still 8% from viewport top, so it looks fully settled by the time you read it.
//
// Overlap layering:
//   Negative marginTop makes panels literally stack on each other.
//   Each new panel rises from beneath the previous — architectural depth.
// ─────────────────────────────────────────────────────────────────────────────

interface ArchPanelProps {
  children: React.ReactNode;
  bg?: string;
  zIndex?: number;
  overlapPx?: number;
  roundedTop?: boolean;
  shadowColor?: string;
  id?: string;
}

function ArchPanel({
  children,
  bg = "#FCF9F5",
  zIndex = 10,
  overlapPx = 56,
  roundedTop = true,
  shadowColor = "rgba(0,0,0,0.06)",
  id,
}: ArchPanelProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.08"],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 38,
    damping: 22,
    restDelta: 0.001,
  });

  const y = useTransform(spring, [0, 1], ["12vh", "0vh"]);
  const opacity = useTransform(spring, [0, 0.3], [0, 1]);
  const scale = useTransform(spring, [0, 1], [0.97, 1]);
  const rotateX = useTransform(spring, [0, 1], [4, 0]);

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{
        y,
        opacity,
        scale,
        rotateX,
        zIndex,
        position: "relative",
        marginTop: `-${overlapPx}px`,
        backgroundColor: bg,
        transformStyle: "preserve-3d",
        borderRadius: roundedTop ? "36px 36px 0 0" : undefined,
        boxShadow: roundedTop
          ? `0 -24px 80px ${shadowColor}, 0 -4px 24px ${shadowColor}`
          : undefined,
      }}
      className="transform-gpu"
    >
      {roundedTop && (
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden"
          style={{ borderRadius: "36px 36px 0 0", zIndex: 1 }}
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A96E]/22 to-transparent" />
        </div>
      )}
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DarkArchPanel — maximum contrast arrival for dark sections
// ─────────────────────────────────────────────────────────────────────────────

function DarkArchPanel({ children, id, zIndex = 10 }: { children: React.ReactNode; id?: string; zIndex?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.06"],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 36,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(spring, [0, 1], ["14vh", "0vh"]);
  const opacity = useTransform(spring, [0, 0.22], [0, 1]);
  const scale = useTransform(spring, [0, 1], [0.96, 1]);
  const rotateX = useTransform(spring, [0, 1], [5, 0]);

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{
        y,
        opacity,
        scale,
        rotateX,
        zIndex,
        position: "relative",
        marginTop: "-72px",
        backgroundColor: "#1A1A1A",
        transformStyle: "preserve-3d",
        borderRadius: "40px 40px 0 0",
        boxShadow: "0 -30px 100px rgba(0,0,0,0.18), 0 -8px 40px rgba(0,0,0,0.12)",
      }}
      className="transform-gpu"
    >
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden"
        style={{ borderRadius: "40px 40px 0 0", zIndex: 1 }}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A96E]/18 to-transparent" />
      </div>
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page — cinematic scene composition
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="relative bg-[#FCF9F5] overflow-x-hidden">
      {/* Scene 1: Hero — the stage. No animation. It is the world. */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
      </div>

      {/* Scene 2: About — first panel rise */}
      <ArchPanel id="about" bg="#FCF9F5" zIndex={20} overlapPx={48} shadowColor="rgba(0,0,0,0.04)">
        <AboutPreview />
      </ArchPanel>

      {/* Scene 3: Services — warmer tone, heavier overlap */}
      <ArchPanel id="services" bg="#F7F3EC" zIndex={30} overlapPx={64} shadowColor="rgba(0,0,0,0.055)">
        <ServicesSection />
      </ArchPanel>

      {/* Scene 4: Clients — returns to base cream */}
      <ArchPanel id="projects" bg="#FCF9F5" zIndex={40} overlapPx={56} shadowColor="rgba(0,0,0,0.045)">
        <Clients />
      </ArchPanel>

      {/* Scene 5: Why Choose Us — premium warm cream, authority statement */}
      <ArchPanel id="why-choose-us" bg="#F5F0E8" zIndex={50} overlapPx={60} shadowColor="rgba(0,0,0,0.05)">
        <WhyChooseUs />
      </ArchPanel>

      {/* Scene 6: Global Presence — dark panel, cinematic finale */}
      <DarkArchPanel id="contact" zIndex={60}>
        <GlobalPresenceMap />
      </DarkArchPanel>
    </div>
  );
}
