"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Use a simple state for visibility to avoid complex scroll calculations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-[100] transition-all duration-700 pointer-events-none"
      >
        <div className="flex justify-center py-6 px-6 md:px-12 w-full max-w-7xl mx-auto">
          <motion.nav 
            animate={{
              backgroundColor: isScrolled ? "rgba(237, 230, 218, 0.95)" : "rgba(237, 230, 218, 0.1)",
              borderColor: isScrolled ? "rgba(201, 169, 110, 0.2)" : "rgba(201, 169, 110, 0)",
              boxShadow: isScrolled ? "0 10px 40px rgba(0,0,0,0.06)" : "0 0 0 rgba(0,0,0,0)",
              paddingLeft: isScrolled ? "2rem" : "1.5rem",
              paddingRight: isScrolled ? "2rem" : "1.5rem",
              paddingTop: isScrolled ? "0.75rem" : "1rem",
              paddingBottom: isScrolled ? "0.75rem" : "1rem",
              maxWidth: isScrolled ? "800px" : "1200px",
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5 rounded-full border backdrop-blur-md pointer-events-auto w-auto shrink-0"
          >
            {/* LOGO */}
            <Link href="/" className="flex items-center group transition-transform hover:scale-105 duration-500">
              <motion.div
                animate={{ width: isScrolled ? 80 : 100 }}
                className="relative h-6"
              >
                <Image
                  src="/logo.png"
                  alt="Suvik Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {!isScrolled && <div className="flex-1" />}

            {/* NAV LINKS */}
            <div className="hidden md:flex gap-7 items-center ml-4">
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

            <div className="h-4 w-px bg-charcoal/5 mx-1 hidden md:block" />

            {/* CTA */}
            <Link href="/contact" className="hidden md:block">
              <motion.button 
                animate={{
                  scale: isScrolled ? 0.95 : 1,
                  paddingLeft: isScrolled ? "1.25rem" : "1.5rem",
                  paddingRight: isScrolled ? "1.25rem" : "1.5rem",
                }}
                className="py-2.5 rounded-full bg-charcoal text-white text-[9px] font-bold tracking-[0.25em] uppercase transition-all duration-500 hover:bg-gold"
              >
                Contact
              </motion.button>
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden ml-1 text-charcoal hover:text-gold transition-colors duration-300"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu size={16} />
            </button>
          </motion.nav>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[110] bg-[#EDE6DA]/90 flex flex-col items-center justify-center gap-10"
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