"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        setContentHeight(scrollRef.current.scrollHeight);
      }
    };

    // Initial check
    handleResize();

    // Use ResizeObserver for more reliable height updates
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, [children]);

  const { scrollY } = useScroll();
  
  // Smooth spring for cinematic feel
  const smoothY = useSpring(scrollY, {
    damping: 25, // Slightly less damping for more responsiveness
    stiffness: 70, // Slightly less stiff for smoother feel
    mass: 0.5,
    restDelta: 0.05
  });

  // Transform for the smooth scroll effect
  const y = useTransform(smoothY, (value) => -value);

  // Handle scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ height: contentHeight }} className="w-full pointer-events-none" />
      <motion.div
        ref={scrollRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform z-10"
      >
        {children}
      </motion.div>
    </>
  );
};
