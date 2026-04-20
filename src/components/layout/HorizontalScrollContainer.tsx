"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HorizontalScrollContainerProps {
  children: React.ReactNode[];
}

export function HorizontalScrollContainer({ children }: HorizontalScrollContainerProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = down (from right), -1 = up (from left)
  const [isAnimating, setIsAnimating] = useState(false);
  const lastScrollTime = useRef(0);
  const touchStart = useRef<number | null>(null);

  const totalSections = children.length;

  const goToNext = useCallback(() => {
    if (index < totalSections - 1 && !isAnimating) {
      setDirection(1);
      setIndex((prev) => prev + 1);
      setIsAnimating(true);
    }
  }, [index, totalSections, isAnimating]);

  const goToPrev = useCallback(() => {
    if (index > 0 && !isAnimating) {
      setDirection(-1);
      setIndex((prev) => prev - 1);
      setIsAnimating(true);
    }
  }, [index, isAnimating]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return; // Debounce

      if (e.deltaY > 50) {
        goToNext();
        lastScrollTime.current = now;
      } else if (e.deltaY < -50) {
        goToPrev();
        lastScrollTime.current = now;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        goToNext();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        goToPrev();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStart.current === null) return;
      const touchEnd = e.changedTouches[0].clientY;
      const diff = touchStart.current - touchEnd;

      if (Math.abs(diff) > 50) {
        if (diff > 0) goToNext();
        else goToPrev();
      }
      touchStart.current = null;
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goToNext, goToPrev]);

  // Handle Navbar/External navigation via Custom Event
  useEffect(() => {
    const handleNav = (e: any) => {
      const targetIndex = e.detail;
      if (typeof targetIndex === 'number' && targetIndex !== index) {
        setDirection(targetIndex > index ? 1 : -1);
        setIndex(targetIndex);
      }
    };
    window.addEventListener("scrollToSection", handleNav);
    return () => window.removeEventListener("scrollToSection", handleNav);
  }, [index]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-20%" : "20%", // Subtle exit motion
      opacity: 0,
    }),
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      <AnimatePresence 
        initial={false} 
        custom={direction} 
        onExitComplete={() => setIsAnimating(false)}
        mode="popLayout"
      >
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 },
          }}
          className="absolute top-[var(--navbar-height)] left-0 w-full h-[calc(100vh-var(--navbar-height))] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="w-full h-full cinematic-section-wrapper flex items-center justify-center overflow-hidden">
            {children[index]}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators (Premium Minimal) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-1 transition-all duration-500 rounded-full ${
              i === index ? "h-8 bg-gold" : "h-2 bg-charcoal/20 hover:bg-gold/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
