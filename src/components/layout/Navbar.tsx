"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
];

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show navbar only after initial scroll
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  // Re-check visibility on mount to handle refresh
  useEffect(() => {
    if (window.scrollY > 100) setVisible(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ y: -100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -50, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-8 left-0 w-full z-[100] pointer-events-none flex justify-center"
          >
            <div className="px-6 md:px-12 w-full flex justify-center">
              <nav className="pointer-events-auto flex items-center gap-5 px-8 py-3.5 rounded-full bg-white/40 backdrop-blur-2xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:bg-white/60">
                {/* LOGO */}
                <Link href="/" className="flex items-center group transition-transform hover:scale-105 duration-500 ease-[0.16,1,0.3,1] mr-2">
                  <Image
                    src="/logo.png"
                    alt="Suvik Logo"
                    width={90}
                    height={28}
                    className="h-6 w-auto object-contain"
                    priority
                  />
                </Link>

                {/* NAV LINKS */}
                <div className="hidden md:flex gap-7 items-center ml-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-[9px] font-bold tracking-[0.25em] uppercase transition-all duration-300 relative group text-charcoal/60 hover:text-charcoal"
                    >
                      {link.name}
                      <span className="absolute -bottom-1.5 left-1/2 w-0 h-px bg-gold group-hover:w-[12px] -translate-x-1/2 transition-all duration-300 ease-out" />
                    </Link>
                  ))}
                </div>

                <div className="h-4 w-px bg-charcoal/10 mx-2 hidden md:block" />

                {/* CTA */}
                <Link href="/#contact">
                  <button className="px-5 py-2 rounded-full bg-charcoal text-white text-[9px] font-bold tracking-[0.25em] uppercase transition-all duration-500 hover:bg-gold hover:shadow-[0_4px_15px_rgba(201,169,110,0.4)]">
                    Contact
                  </button>
                </Link>

                {/* MOBILE TOGGLE */}
                <button
                  className="md:hidden ml-1 text-charcoal hover:text-gold transition-colors duration-300"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <Menu size={16} />
                </button>
              </nav>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[110] bg-[#FCF9F5]/90 flex flex-col items-center justify-center gap-10"
          >
            <button
              className="absolute top-10 right-10 text-charcoal/60 hover:text-charcoal transition-colors duration-300"
              onClick={() => setMobileOpen(false)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-4xl md:text-5xl font-light tracking-tight text-charcoal hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}