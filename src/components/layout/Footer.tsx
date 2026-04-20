"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Mail as MailIcon } from "lucide-react";

// CUSTOM PREMIUM SOCIAL ICONS (since brands are missing in this lucide build)
const InstagramIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733-16z" />
    <path d="M4 20l6.768-6.768m2.464-2.464l6.768-6.768" />
  </svg>
);

export function Footer() {
  return (
    <footer className="relative bg-[#FCF9F5] pt-24 pb-12 border-t border-charcoal/5 overflow-hidden">
      
      {/* DECORATIVE ELEMENTS */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gold/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block text-2xl font-semibold tracking-tight text-charcoal mb-8">
              SUVIK<span className="text-gold">.</span>
            </Link>
            <p className="text-charcoal/60 text-lg font-light leading-relaxed max-w-sm mb-10">
              Suvik Group Of Companies is headquartered in the United Arab Emirates, a country which offers ample opportunities of growth in a stable and vibrant economy.
            </p>
            
            {/* SOCIALS */}
            <div className="flex gap-6">
              {[InstagramIcon, LinkedinIcon, XIcon].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/40 transition-all duration-300 hover:text-gold hover:border-gold hover:translate-y-[-2px]">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-8">Useful Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "People", href: "/people" },
                { name: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-charcoal/60 hover:text-gold transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gold stroke-[1.5]" />
                <span className="text-charcoal/60 text-sm font-medium">info@suvik.ae</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold stroke-[1.5]" />
                <span className="text-charcoal/60 text-sm font-medium">+971 52 867 3675</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold stroke-[1.5]" />
                <span className="text-charcoal/60 text-sm font-medium leading-relaxed">
                  Dubai Investment Park First,<br />
                  Dubai, United Arab Emirates
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-charcoal/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-charcoal/40 text-xs font-medium uppercase tracking-widest">
            © 2011 - 2026 Suvik Group Of Companies, UAE. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-charcoal/40 hover:text-gold text-xs font-medium transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-charcoal/40 hover:text-gold text-xs font-medium transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
