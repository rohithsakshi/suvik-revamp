"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useId } from "react";

/* ─────────────────────────────────────────
   SHARED PRIMITIVES
───────────────────────────────────────── */

const GoldShimmer = ({ opacity = 1, reverse = false }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 1440 3" preserveAspectRatio="none" className="w-full" style={{ height: "3px", display: "block" }}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset={reverse ? "20%" : "15%"} stopColor="#E0B97A" stopOpacity={opacity * 0.3} />
          <stop offset="50%" stopColor="#F5D78E" stopOpacity={opacity * 0.9} />
          <stop offset={reverse ? "80%" : "85%"} stopColor="#E0B97A" stopOpacity={opacity * 0.3} />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1440" height="3" fill={`url(#${id})`} />
    </svg>
  );
};

const AnimatedLine = ({ delay = 0, opacity = 0.55, reverse = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => setMounted(true), []);

  return (
    <div
      ref={ref}
      style={{
        transformOrigin: reverse ? "right center" : "left center",
        transform: mounted && inView ? "scaleX(1)" : "scaleX(0)",
        opacity: mounted && inView ? 1 : 0,
        transition: `transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      <GoldShimmer opacity={opacity} reverse={reverse} />
    </div>
  );
};

/* ─────────────────────────────────────────
   1. ABOUT → SERVICES
   Soft diagonal wave with twin gold lines
───────────────────────────────────────── */

export const DividerAboutServices = () => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => setMounted(true), []);

  return (
    <div ref={ref} className="relative w-full overflow-hidden pointer-events-none select-none z-20" style={{ height: "90px" }}>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="das-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCF9F5" />
            <stop offset="100%" stopColor="#F5F0E8" />
          </linearGradient>
          <linearGradient id="das-gold1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="35%" stopColor="#E0B97A" stopOpacity="0.5" />
            <stop offset="65%" stopColor="#F0D080" stopOpacity="0.7" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="das-gold2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="#E0B97A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Soft fill layer */}
        <path d="M0 0 L1440 0 L1440 90 Q1080 55 720 68 Q360 82 0 50 Z" fill="url(#das-fill)" />
        {/* Primary gold arc */}
        <motion.path
          d="M0 50 Q360 20 720 36 Q1080 52 1440 28"
          fill="none" stroke="url(#das-gold1)" strokeWidth="1.2"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Secondary subtle arc */}
        <motion.path
          d="M0 62 Q400 38 800 50 Q1100 60 1440 40"
          fill="none" stroke="url(#das-gold2)" strokeWidth="0.8"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.4, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Decorative dot cluster - center */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i} cx={680 + i * 14} cy={36} r={i === 1 ? 1.8 : 1}
            fill="#E0B97A" fillOpacity={i === 1 ? 0.7 : 0.35}
            suppressHydrationWarning
            initial={{ scale: 0, opacity: 0 }}
            animate={mounted && inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
          />
        ))}
      </svg>
    </div>
  );
};

/* ─────────────────────────────────────────
   2. SERVICES → CLIENTS
   Layered arch — architectural, refined
───────────────────────────────────────── */

export const DividerServicesClients = () => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => setMounted(true), []);

  return (
    <div ref={ref} className="relative w-full overflow-hidden pointer-events-none select-none z-20" style={{ height: "80px" }}>
      {/* Flat shimmer line top */}
      <div className="absolute top-0 left-0 w-full">
        <AnimatedLine delay={0} opacity={0.7} />
      </div>

      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="dsc-gold1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="25%" stopColor="#E0B97A" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#F5D878" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#E0B97A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="dsc-gold2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#E0B97A" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#E0B97A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Wide gentle curve */}
        <motion.path
          d="M0 20 Q720 65 1440 20"
          fill="none" stroke="url(#dsc-gold1)" strokeWidth="1"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Wider softer shadow curve */}
        <motion.path
          d="M0 25 Q720 72 1440 25"
          fill="none" stroke="url(#dsc-gold2)" strokeWidth="6"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Center ornament */}
        <motion.g
          suppressHydrationWarning
          initial={{ scale: 0, opacity: 0 }}
          animate={mounted && inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          style={{ transformOrigin: "720px 63px" }}
        >
          <line x1="706" y1="63" x2="714" y2="63" stroke="#E0B97A" strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="720" cy="63" r="2.5" fill="none" stroke="#E0B97A" strokeWidth="1" strokeOpacity="0.7" />
          <circle cx="720" cy="63" r="1" fill="#E0B97A" fillOpacity="0.6" />
          <line x1="726" y1="63" x2="734" y2="63" stroke="#E0B97A" strokeWidth="1" strokeOpacity="0.6" />
        </motion.g>
      </svg>
    </div>
  );
};

/* ─────────────────────────────────────────
   3. CLIENTS → PROJECTS
   Reverse flowing wave — mirrored elegance
───────────────────────────────────────── */

export const DividerClientsProjects = () => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => setMounted(true), []);

  return (
    <div ref={ref} className="relative w-full overflow-hidden pointer-events-none select-none z-20" style={{ height: "88px" }}>
      <svg viewBox="0 0 1440 88" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="dcp-gold1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#E0B97A" stopOpacity="0.4" />
            <stop offset="55%" stopColor="#F0D080" stopOpacity="0.75" />
            <stop offset="85%" stopColor="#E0B97A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="dcp-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(240,224,190,0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Soft filled band */}
        <motion.path
          d="M0 30 Q320 72 640 55 Q960 38 1440 70 L1440 88 L0 88 Z"
          fill="url(#dcp-fill)"
          suppressHydrationWarning
          initial={{ opacity: 0 }}
          animate={mounted && inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        />
        {/* Main flowing wave */}
        <motion.path
          d="M0 30 Q320 72 640 55 Q960 38 1440 70"
          fill="none" stroke="url(#dcp-gold1)" strokeWidth="1.2"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.35, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Second ghost wave offset */}
        <motion.path
          d="M0 38 Q350 78 680 62 Q1000 46 1440 78"
          fill="none" stroke="#E0B97A" strokeWidth="0.5" strokeOpacity="0.18"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Short accent dash left */}
        <motion.line
          x1="60" y1="28" x2="160" y2="28"
          stroke="#E0B97A" strokeWidth="0.8" strokeOpacity="0.35"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
        {/* Short accent dash right */}
        <motion.line
          x1="1280" y1="68" x2="1380" y2="68"
          stroke="#E0B97A" strokeWidth="0.8" strokeOpacity="0.35"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        />
      </svg>
    </div>
  );
};

/* ─────────────────────────────────────────
   4. PROJECTS → GLOBAL PRESENCE
   Double-line architectural bracket
───────────────────────────────────────── */

export const DividerProjectsGlobal = () => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => setMounted(true), []);

  return (
    <div ref={ref} className="relative w-full overflow-hidden pointer-events-none select-none z-20" style={{ height: "72px" }}>
      {/* Top line */}
      <div className="absolute top-0 left-0 w-full">
        <AnimatedLine delay={0} opacity={0.45} />
      </div>

      <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="dpg-center" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="#E0B97A" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#F5D878" stopOpacity="0.7" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Diagonal rule top-left to center */}
        <motion.line
          x1="0" y1="8" x2="520" y2="36"
          stroke="#E0B97A" strokeWidth="0.7" strokeOpacity="0.3"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        />
        {/* Diagonal rule top-right to center */}
        <motion.line
          x1="1440" y1="8" x2="920" y2="36"
          stroke="#E0B97A" strokeWidth="0.7" strokeOpacity="0.3"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        />
        {/* Center horizontal rule */}
        <motion.line
          x1="520" y1="36" x2="920" y2="36"
          stroke="url(#dpg-center)" strokeWidth="1.2"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Center ornament */}
        <motion.g
          suppressHydrationWarning
          initial={{ scale: 0, opacity: 0 }}
          animate={mounted && inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.45, delay: 0.82 }}
          style={{ transformOrigin: "720px 36px" }}
        >
          <rect x="714" y="30" width="12" height="12" rx="1.5"
            fill="none" stroke="#E0B97A" strokeWidth="0.9" strokeOpacity="0.65"
            transform="rotate(45 720 36)" />
          <circle cx="720" cy="36" r="1.2" fill="#E0B97A" fillOpacity="0.75" />
        </motion.g>
        {/* Tick marks */}
        {[240, 480, 960, 1200].map((x) => (
          <motion.line
            key={x} x1={x} y1="32" x2={x} y2="40"
            stroke="#E0B97A" strokeWidth="0.6" strokeOpacity="0.25"
            suppressHydrationWarning
            initial={{ scaleY: 0, opacity: 0 }}
            animate={mounted && inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.55 + (x / 1440) * 0.2 }}
          />
        ))}
      </svg>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 w-full">
        <AnimatedLine delay={0.2} opacity={0.3} reverse />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   5. GLOBAL PRESENCE → FOOTER
   Mirrors footer wave divider — bookend
───────────────────────────────────────── */

export const DividerGlobalFooter = () => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => setMounted(true), []);

  return (
    <div ref={ref} className="relative w-full overflow-hidden pointer-events-none select-none z-20" style={{ height: "110px", marginBottom: "-2px" }}>
      <svg viewBox="0 0 1440 110" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="dgf-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCF9F5" />
            <stop offset="100%" stopColor="#F5F0E8" />
          </linearGradient>
          <linearGradient id="dgf-gold1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#E0B97A" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#F0D080" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="dgf-gold2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="#E0B97A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Background fill */}
        <path d="M0 110 L0 55 Q360 0 720 42 Q1080 85 1440 30 L1440 110 Z" fill="url(#dgf-fill)" />
        {/* Gold accent wave 1 */}
        <motion.path
          d="M0 58 Q240 18 480 45 Q720 72 960 38 Q1200 5 1440 32"
          fill="none" stroke="url(#dgf-gold1)" strokeWidth="1.5"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Gold accent wave 2 */}
        <motion.path
          d="M0 70 Q300 38 600 60 Q900 82 1200 52 Q1350 38 1440 45"
          fill="none" stroke="url(#dgf-gold2)" strokeWidth="1"
          suppressHydrationWarning
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted && inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Diagonal slice gloss */}
        <path
          d="M0 55 Q360 0 720 42 Q1080 85 1440 30 L1440 40 Q1080 95 720 52 Q360 10 0 65 Z"
          fill="#E0B97A" fillOpacity="0.04"
        />
      </svg>
    </div>
  );
};
