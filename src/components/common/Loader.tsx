"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader({ onFinish }: { onFinish?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2.5 second total sequence
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onFinish?.(), 800); // Trigger finish after fade out
    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[9999] bg-[#FCF9F5] flex items-center justify-center overflow-hidden"
        >
          {/* ✨ CENTERED LOGO ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo
            }}
            className="relative flex flex-col items-center gap-10"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Suvik"
                width={200}
                height={60}
                priority
                className="h-auto w-auto object-contain"
              />
              
              {/* SLIGHT SHIMMER UNDERNEATH */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ delay: 0.4, duration: 1.5, ease: "easeInOut" }}
                className="absolute -bottom-6 left-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-[9px] font-bold uppercase tracking-[0.4em] text-charcoal/60"
            >
              Establishing Excellence
            </motion.p>
          </motion.div>

          {/* AMBIENT BACKGROUND GLOW */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}