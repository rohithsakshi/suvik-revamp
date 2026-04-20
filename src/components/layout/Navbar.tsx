"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
        scrolled
          ? "bg-[#FCF9F5]/85 backdrop-blur-md border-b border-charcoal/5 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center">
        
        {/* LOGO - LEFT */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center group transition-transform hover:scale-105 duration-300">
            <Image
              src="/logo.png"
              alt="Suvik Logo"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* DESKTOP NAV - CENTER */}
        <nav className="hidden md:flex gap-10 items-center justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold tracking-[0.25em] uppercase transition-all relative group text-charcoal/80 hover:text-gold"
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1.5 left-0 h-[1.5px] bg-gold w-0 group-hover:w-full transition-all duration-500 ease-out"
              />
            </Link>
          ))}
        </nav>

        {/* CTA & DIRECT LINE - RIGHT */}
        <div className="flex-1 hidden lg:flex items-center justify-end gap-10">
          <div className="flex flex-col items-end">
            <span className="text-[9px] text-charcoal/40 font-bold uppercase tracking-[0.2em] mb-1">Direct Line</span>
            <a href="tel:+971528673675" className="text-sm font-semibold text-charcoal hover:text-gold transition-colors tracking-tight">
              +971 52 867 3675
            </a>
          </div>

          <Link href="/contact">
            <button className={`px-8 py-3 rounded-sm text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-500 overflow-hidden relative group border ${
              scrolled 
                ? "bg-charcoal text-white border-charcoal hover:bg-gold hover:border-gold" 
                : "bg-charcoal text-white border-charcoal hover:bg-gold hover:border-gold"
            }`}>
              <span className="relative z-10 transition-colors duration-500">Contact Us</span>
            </button>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden ml-auto transition-colors hover:text-gold text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            style={{ originY: 0 }}
            className="absolute top-full left-0 w-full bg-[#FCF9F5]/98 backdrop-blur-2xl border-b border-charcoal/5 py-12 px-8 flex flex-col gap-10 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-charcoal/90 hover:text-gold text-3xl font-light tracking-tight transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <button className="w-full bg-charcoal text-white py-5 rounded-sm text-xs font-bold tracking-[0.3em] uppercase">
                Contact Us
              </button>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}