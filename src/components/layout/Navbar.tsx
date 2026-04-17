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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-white/90 backdrop-blur-xl border-b border-charcoal/5 py-4 shadow-sm"
        : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center group transition-transform hover:scale-105 duration-300">
          <Image
            src="/logo.png"
            alt="Suvik Logo"
            width={120}
            height={34}
            className="h-9 w-auto object-contain"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[12px] font-bold tracking-[0.15em] uppercase transition-all relative group ${scrolled
                ? "text-charcoal/80 hover:text-gold"
                : "text-charcoal hover:text-gold"}`}
            >
              {link.name}

              <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-gold-gradient transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON (DESKTOP) */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className={`px-6 py-2.5 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border ${scrolled 
              ? "bg-charcoal text-white border-charcoal hover:bg-gold hover:border-gold" 
              : "bg-charcoal text-white border-charcoal hover:bg-gold hover:border-gold shadow-lg shadow-charcoal/10"}`}>
              Get in Touch
            </button>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden transition-colors hover:text-gold text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-charcoal/5 py-10 px-8 flex flex-col gap-8 md:hidden shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-charcoal/80 hover:text-gold text-2xl font-semibold tracking-tight transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <button className="w-full bg-gold-gradient text-white py-4 rounded-sm text-sm font-bold tracking-[0.2em] uppercase shadow-lg shadow-gold/20">
                Contact Us
              </button>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}