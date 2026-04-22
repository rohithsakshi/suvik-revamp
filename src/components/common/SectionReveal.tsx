"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// SectionReveal - 80'S CINEMATIC VERSION
// ─────────────────────────────────────────────────────────────────────────────

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 1.8,  // Slow, cinematic entry
        delay, 
        ease: [0.19, 1, 0.22, 1] 
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CinematicLine - For elegant text reveals
// ─────────────────────────────────────────────────────────────────────────────

export function CinematicLine({
  children,
  className = "",
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`overflow-hidden pb-[0.15em] ${className}`} style={style}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ 
          duration: 1.5,  // Slower text reveal
          delay, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// StaggerReveal - For lists and grids
// ─────────────────────────────────────────────────────────────────────────────

export function StaggerReveal({
  children,
  className = "",
  stagger = 0.15,
  baseDelay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  baseDelay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren: baseDelay,
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 1.02 },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ScrollParallax - Glacial movement
// ─────────────────────────────────────────────────────────────────────────────

export function ScrollParallax({
  children,
  className = "",
  speed = 0.05,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <motion.div
      whileInView={{ y: [-15 * speed, 15 * speed] }}
      transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
