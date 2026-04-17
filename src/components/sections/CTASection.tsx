"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C9A96E]/10 via-transparent to-[#C9A96E]/10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with Suvik to navigate the complexities of local economies,
            laws, and next-generation technologies.
          </p>

          {/* ✅ FIXED BUTTON */}
          <Link href="/contact">
            <Button className="text-lg px-8 py-4">
              Get in Touch Today
            </Button>
          </Link>

        </motion.div>
      </div>
    </section>
  );
}