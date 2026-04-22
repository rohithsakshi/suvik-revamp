"use client";

import { motion, useInView, Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1]
    },
  }),
};

const GoldLine = () => (
  <svg viewBox="0 0 1440 6" preserveAspectRatio="none" className="w-full" style={{ height: '6px' }}>
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="20%" stopColor="#E0B97A" />
        <stop offset="50%" stopColor="#F5D78E" />
        <stop offset="80%" stopColor="#E0B97A" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <rect x="0" y="2" width="1440" height="2" fill="url(#goldGrad)" />
  </svg>
);

const WaveDivider = () => (
  <div className="relative w-full overflow-hidden" style={{ height: '110px', marginBottom: '-2px' }}>
    <svg viewBox="0 0 1440 110" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="waveGold1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="#E0B97A" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#F0D080" stopOpacity="0.6" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="waveGold2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="40%" stopColor="#E0B97A" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      {/* Background fill */}
      <path d="M0 110 L0 55 Q360 0 720 42 Q1080 85 1440 30 L1440 110 Z" fill="#F5F0E8" />
      {/* Gold accent wave 1 */}
      <path d="M0 58 Q240 18 480 45 Q720 72 960 38 Q1200 5 1440 32"
        fill="none" stroke="url(#waveGold1)" strokeWidth="1.5" />
      {/* Gold accent wave 2 */}
      <path d="M0 70 Q300 38 600 60 Q900 82 1200 52 Q1350 38 1440 45"
        fill="none" stroke="url(#waveGold2)" strokeWidth="1" />
      {/* Diagonal slice shadow */}
      <path d="M0 55 Q360 0 720 42 Q1080 85 1440 30 L1440 40 Q1080 95 720 52 Q360 10 0 65 Z"
        fill="#E0B97A" fillOpacity="0.06" />
    </svg>
  </div>
);

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    aria-label={label}
    whileHover={{ scale: 1.12, borderColor: "#E0B97A" }}
    transition={{ duration: 0.22 }}
    className="w-9 h-9 rounded-full border flex items-center justify-center text-[#7a6a50] hover:text-[#E0B97A] transition-colors duration-200"
    style={{ borderColor: 'rgba(224,185,122,0.35)', background: 'rgba(224,185,122,0.06)' }}
  >
    {children}
  </motion.a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="block text-[#5a4e3a] text-sm leading-loose relative group w-fit"
    style={{ fontFamily: 'inherit', fontSize: '15px', letterSpacing: '0.02em' }}
    whileHover={{ x: 4 }}
    transition={{ duration: 0.2 }}
  >
    <span className="relative">
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#E0B97A] to-transparent group-hover:w-full transition-all duration-300" />
    </span>
  </motion.a>
);

export function Footer() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });
  const footerInView = useInView(footerRef, { once: true, margin: "-60px" });

  // Mouse tilt for CTA card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ctaRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative z-10" style={{ background: '#EDE6DA', isolation: 'isolate' }}>
      {/* ── CTA Card ── */}
      <div className="container mx-auto px-6 md:px-12 pb-0 pt-20">
        <motion.div
          ref={ctaRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 80, rotateX: 0, rotateY: 0 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          style={{ 
            rotateX, 
            rotateY, 
            perspective: "1500px",
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] overflow-hidden transform-gpu"
        >
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(135deg, #ffffff 60%, #fdf6e8 100%)',
              boxShadow: '0 30px 80px rgba(120,90,30,0.12), 0 4px 20px rgba(224,185,122,0.08)',
              border: '1px solid rgba(224,185,122,0.18)',
            }}
          />
          
          {/* Decorative gold orb */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ 
              background: 'radial-gradient(circle, rgba(224,185,122,0.12) 0%, transparent 70%)', 
              transform: 'translate(40%, -40%)' 
            }} 
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-40 h-40 rounded-full pointer-events-none"
            style={{ 
              background: 'radial-gradient(circle, rgba(224,185,122,0.07) 0%, transparent 70%)', 
              transform: 'translate(-30%, 30%)' 
            }} 
          />

          <div className="relative z-10 px-8 md:px-16 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-xl overflow-hidden">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={ctaInView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-5 leading-tight tracking-tight">
                  Let&apos;s Build <em className="not-italic text-gold italic">Something Real</em>
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#7a6a50] font-light leading-relaxed text-base md:text-lg"
              >
                Book a free 30-minute strategy call. We&apos;ll map your UAE market entry or tech roadmap — with actionable next steps, even if we never work together.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="transform-gpu inline-block"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 whitespace-nowrap px-10 py-5 rounded-full font-bold tracking-[0.2em] text-white text-[11px] uppercase transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2510 60%, #1a1a1a 100%)',
                  boxShadow: '0 12px 32px rgba(26,20,8,0.35)',
                  border: '1px solid rgba(224,185,122,0.3)',
                }}
              >
                Get In Touch
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-gold"
                  style={{ background: "rgba(128,128,128,0.15)" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Wave Divider ── */}
      <div className="mt-16">
        <WaveDivider />
      </div>

      {/* ── Footer Body ── */}
      <footer
        ref={footerRef}
        style={{ background: 'linear-gradient(160deg, #F5F0E8 0%, #EDE8DC 60%, #E8E0D0 100%)' }}
      >
        <GoldLine />

        <div className="container mx-auto px-6 md:px-12 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pb-16"
            style={{ borderBottom: '1px solid rgba(180,155,85,0.2)' }}>

            {/* LEFT – Brand */}
            <motion.div
              custom={0} variants={fadeUp}
              initial="hidden" animate={footerInView ? "visible" : "hidden"}
              className="md:col-span-5 flex flex-col gap-6"
            >
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Suvik Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>
              <p className="text-[#6b5e45] font-light leading-relaxed max-w-sm text-[15px]"
                style={{ letterSpacing: '0.02em' }}>
                Since 2011, Suvik has helped 500+ companies launch in the UAE — from Free Zone formation to enterprise blockchain. One vendor for setup, technology, and growth.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <SocialIcon href="#" label="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" label="X / Twitter">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </SocialIcon>
              </div>
            </motion.div>

            {/* CENTER – Links */}
            <motion.div
              custom={1} variants={fadeUp}
              initial="hidden" animate={footerInView ? "visible" : "hidden"}
              className="md:col-span-3 flex flex-col"
            >
              <h4 className="uppercase tracking-[0.25em] text-gold text-[10px] font-bold mb-8">
                Useful Links
              </h4>
              <nav className="flex flex-col gap-2">
                {['Home', 'About Us', 'Services', 'People', 'Contact Us'].map((link) => (
                  <FooterLink key={link} href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`}>{link}</FooterLink>
                ))}
              </nav>
            </motion.div>

            {/* RIGHT – Contact */}
            <motion.div
              custom={2} variants={fadeUp}
              initial="hidden" animate={footerInView ? "visible" : "hidden"}
              className="md:col-span-4 flex flex-col"
            >
              <h4 className="uppercase tracking-[0.25em] text-gold text-[10px] font-bold mb-8">
                Contact Info
              </h4>
              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
                      </svg>
                    ),
                    value: 'info@suvik.ae',
                    href: 'mailto:info@suvik.ae'
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.1 2.18 2 2 0 012.07.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                      </svg>
                    ),
                    value: '+971 52 867 3675',
                    href: 'tel:+971528673675'
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    value: 'Dubai Investment Park First,\nDubai, United Arab Emirates',
                    href: '#'
                  },
                ].map(({ icon, value, href }, i) => (
                  <motion.a
                    key={i} href={href}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 group"
                  >
                    <span className="mt-1 text-gold opacity-80 group-hover:opacity-100 transition-opacity shrink-0">{icon}</span>
                    <span className="text-[#5a4e3a] font-light leading-relaxed group-hover:text-[#3a3020] transition-colors text-[14.5px]"
                      style={{ whiteSpace: 'pre-line' }}>
                      {value}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Bottom Bar ── */}
          <motion.div
            custom={3} variants={fadeUp}
            initial="hidden" animate={footerInView ? "visible" : "hidden"}
            className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10"
            style={{ fontSize: '11px', letterSpacing: '0.06em', color: '#8a7a5a' }}
          >
            <p className="uppercase tracking-[0.15em] font-medium text-center md:text-left">
              © 2011 – 2026 Suvik Group of Companies, UAE. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service'].map((link, i) => (
                <span key={link} className="flex items-center gap-6">
                  <Link
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="uppercase tracking-[0.15em] transition-colors hover:text-gold font-medium"
                  >
                    {link}
                  </Link>
                  {i === 0 && <span style={{ color: 'rgba(180,150,70,0.4)' }}>|</span>}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom gold shimmer line */}
        <GoldLine />
      </footer>
    </section>
  );
}
