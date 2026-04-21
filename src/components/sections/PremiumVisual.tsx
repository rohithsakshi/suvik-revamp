"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type PremiumVisualProps = {
  badge: string;
  title: string;
  description: string;
};

export function PremiumVisual({
  badge,
  title,
  description,
}: PremiumVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse Reactive Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const moveX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const moveY = useTransform(springY, [-0.5, 0.5], [-15, 15]);
  const skyMoveX = useTransform(springX, [-0.5, 0.5], [10, -10]);
  const skyMoveY = useTransform(springY, [-0.5, 0.5], [5, -5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[520px] md:h-[620px] rounded-[30px] overflow-hidden bg-[#FCF9F5] border border-black/5 flex items-center justify-center shadow-[inset_0_0_100px_rgba(224,185,122,0.03)] group"
      style={{ perspective: "1200px" }}
    >
      {/* Architectural Glow Layers */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#E0B97A]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      {/* Soft luxury glow */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#E0B97A]/10 blur-[120px]"
      />

      {/* Dubai skyline — clean transparent subtle background */}
      <motion.div 
        style={{ x: skyMoveX, y: skyMoveY, translateZ: "-50px" }}
        className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none transform-gpu"
      >
        <Image
          src="/dubai-silhouete.png"
          alt="Dubai Skyline"
          width={1200}
          height={500}
          priority
          className="
            w-full
            h-auto
            object-contain
            opacity-[0.22]
            brightness-75
            contrast-125
            grayscale
            select-none
          "
        />
      </motion.div>

      {/* Elegant subtle rings only */}
      <motion.div style={{ x: moveX, y: moveY, rotate: 15, translateZ: "-20px" }} className="absolute w-[560px] h-[560px] rounded-full border border-[#E0B97A]/10 z-0 transform-gpu" />
      <motion.div style={{ x: useTransform(moveX, (v) => v * 1.5), y: useTransform(moveY, (v) => v * 1.5), rotate: -10, translateZ: "-40px" }} className="absolute w-[420px] h-[420px] rounded-full border border-[#E0B97A]/10 z-0 transform-gpu" />
      <motion.div style={{ x: useTransform(moveX, (v) => v * 0.5), y: useTransform(moveY, (v) => v * 0.5), rotate: 45, translateZ: "-10px" }} className="absolute w-[300px] h-[300px] rounded-full border border-[#E0B97A]/10 z-0 transform-gpu" />

      {/* Dynamic content */}
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 18, translateZ: 0 }}
        animate={{ opacity: 1, y: 0, translateZ: "40px" }}
        style={{ x: useTransform(moveX, (v) => v * -0.5), y: useTransform(moveY, (v) => v * -0.5), transformStyle: "preserve-3d" }}
        transition={{ duration: 0.5 }}
        className="relative z-20 text-center px-8 max-w-xl transform-gpu"
      >
        <p className="text-[11px] uppercase tracking-[0.38em] text-[#E0B97A] mb-5 font-medium">
          {badge}
        </p>

        <h3 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight mb-5 drop-shadow-sm">
          {title}
        </h3>

        <p className="text-black/60 max-w-md mx-auto leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </motion.div>

      {/* Bottom smooth fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FCF9F5] to-transparent z-10 pointer-events-none" />
    </div>
  );
}