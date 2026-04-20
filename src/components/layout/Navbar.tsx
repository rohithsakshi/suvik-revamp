"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
];

import { useScroll, useMotionValueEvent } from "framer-motion";

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
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-8 left-0 w-full z-[100] pointer-events-none flex justify-center"
          >
            <div className="px-6 md:px-12 w-full flex justify-center">
              <nav className="pointer-events-auto flex items-center gap-5 px-8 py-3 rounded-full bg-[#FCF9F5]/80 backdrop-blur-xl border border-charcoal/5 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                {/* LOGO */}
                <Link href="/" className="flex items-center group transition-transform hover:scale-105 duration-300 mr-2">
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
                <div className="hidden md:flex gap-6 items-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-[9px] font-bold tracking-[0.2em] uppercase transition-all relative group text-charcoal/70 hover:text-gold"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="h-4 w-px bg-charcoal/10 mx-1 hidden md:block" />

                {/* CTA */}
                <Link href="/contact">
                  <button className="px-4 py-1.5 rounded-full bg-charcoal text-white text-[9px] font-bold tracking-[0.2em] uppercase transition-all hover:bg-gold">
                    Contact
                  </button>
                </Link>

                {/* MOBILE TOGGLE */}
                <button
                  className="md:hidden ml-1 text-charcoal hover:text-gold transition-colors"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-[#FCF9F5] flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-8 right-8 text-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-4xl font-light tracking-tighter text-charcoal hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}