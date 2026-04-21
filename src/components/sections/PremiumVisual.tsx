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
    <div 
      className="relative h-[520px] md:h-[620px] rounded-[30px] overflow-hidden bg-[#EDE6DA] border border-black/5 flex items-center justify-center shadow-lg group"
    >
      {/* Background flare */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-tr from-[#E0B97A]/10 via-transparent to-transparent" 
      />

      {/* Dubai skyline — subtle ambient motion */}
      <motion.div 
        animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none"
      >
        <div className="relative w-full h-[60%] opacity-[0.2] grayscale transform translate-y-10">
          <Image
            src="/dubai-silhouete.png"
            alt="Dubai Skyline"
            fill
            priority
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Static depth rings */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
           className="w-[500px] h-[500px] border border-gold/5 rounded-full" 
         />
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
           className="absolute w-[400px] h-[400px] border border-gold/5 rounded-full" 
         />
      </div>

      {/* Content Entry */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 text-center px-8 max-w-xl"
      >
        <motion.p 
          initial={{ letterSpacing: "0.1em" }}
          animate={{ letterSpacing: "0.38em" }}
          transition={{ duration: 1.5 }}
          className="text-[11px] uppercase text-[#E0B97A] mb-5 font-medium"
        >
          {badge}
        </motion.p>

        <h3 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight mb-5 drop-shadow-sm">
          {title}
        </h3>

        <p className="text-black/60 max-w-md mx-auto leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </motion.div>

      {/* Bottom smooth fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#EDE6DA] to-transparent z-10 pointer-events-none" />
    </div>
  );
}