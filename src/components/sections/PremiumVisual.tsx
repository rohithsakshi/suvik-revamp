"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
  return (
    <div className="relative h-[520px] md:h-[620px] rounded-[30px] overflow-hidden bg-[#FCF9F5] border border-black/5 flex items-center justify-center">

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
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
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
      </div>

      {/* Elegant subtle rings only */}
      <div className="absolute w-[560px] h-[560px] rounded-full border border-[#E0B97A]/10 z-0" />
      <div className="absolute w-[420px] h-[420px] rounded-full border border-[#E0B97A]/10 z-0" />
      <div className="absolute w-[300px] h-[300px] rounded-full border border-[#E0B97A]/10 z-0" />

      {/* Dynamic content */}
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 text-center px-8 max-w-xl"
      >
        <p className="text-[11px] uppercase tracking-[0.38em] text-[#E0B97A] mb-5 font-medium">
          {badge}
        </p>

        <h3 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight mb-5">
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