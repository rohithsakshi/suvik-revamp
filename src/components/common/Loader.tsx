"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Basic timer to hide loader
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className={`fixed inset-0 z-[10000] bg-[#EDE6DA] flex items-center justify-center ${!isVisible ? 'pointer-events-none' : ''}`}
        >
          <div className="relative flex flex-col items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="Suvik"
                width={220}
                height={66}
                priority
                className="h-auto w-auto object-contain"
              />
              {/* Subtle shimmer bar */}
              <motion.div 
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-8 bg-charcoal/20" />
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-charcoal">
                Establishing Excellence
              </p>
              <div className="h-px w-8 bg-charcoal/20" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
