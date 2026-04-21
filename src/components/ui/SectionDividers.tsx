"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// NOTE: With the new ArchPanel architecture in page.tsx, hard dividers between
// sections are no longer needed — the layered panel overlaps create the
// transition. These components remain available for use WITHIN sections
// (e.g., between sub-sections, above/below the footer CTA).
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// GoldThread — horizontal gold rule that draws in on scroll
// Use within sections to separate content blocks
// ─────────────────────────────────────────────────────────────────────────────

interface GoldThreadProps {
  className?: string;
  opacity?: number;
}

export function GoldThread({ className = "", opacity = 0.3 }: GoldThreadProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const scaleX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { stiffness: 55, damping: 20 }
  );

  return (
    <div ref={ref} className={`w-full overflow-hidden ${className}`}>
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left center",
          opacity,
        }}
        className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent"
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SectionLabel — elegant section identifier with gold accent
// ─────────────────────────────────────────────────────────────────────────────

interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = (require("react") as typeof import("react")).useState(false);

  (require("react") as typeof import("react")).useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center gap-3 ${className}`}
    >
      {number && (
        <span className="text-[9px] tracking-[0.4em] text-[#C9A96E] font-light">
          {number}
        </span>
      )}
      <div className="w-6 h-px bg-[#C9A96E] opacity-50" />
      <span className="text-[9px] tracking-[0.35em] text-[#C9A96E] font-light uppercase">
        {label}
      </span>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Legacy named exports — kept for backward compatibility with any imports
// that reference the old divider names. All render nothing (architecture
// handles transitions now) or a minimal gold thread.
// ─────────────────────────────────────────────────────────────────────────────

export function DividerAboutServices() {
  return null;
}

export function DividerServicesClients() {
  return null;
}

export function DividerClientsProjects() {
  return null;
}

export function DividerProjectsGlobal() {
  return null;
}

export function DividerGlobalFooter() {
  return <GoldThread className="px-16 lg:px-32" opacity={0.15} />;
}
