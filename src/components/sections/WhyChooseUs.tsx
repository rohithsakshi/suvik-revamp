"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 516, suffix: "+", label: "Projects completed" },
  { value: 20, suffix: "+", label: "Group Employees" },
  { value: 4, label: "Strategic Offices" },
  { value: 60, suffix: "+", label: "Global Achievements" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 16ms per frame approx

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative py-32 md:py-48 bg-[#FCF9F5] overflow-hidden">

      {/* 🏙️ ARCHITECTURAL BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {/* FLOATING DECOR */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Strategy & Growth</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-semibold text-charcoal mb-10 leading-[1.05] tracking-tight">
                Doing the right thing, <br />
                <span className="text-gold italic font-light drop-shadow-sm">at the right time.</span>
              </h2>

              <div className="space-y-8 text-xl text-charcoal/60 font-light leading-relaxed max-w-2xl">
                <p>
                  At <span className="text-charcoal font-medium">SUVIK</span>, we specialize in assisting businesses to achieve their goals, whether it's a family-owned business, a public, private, or multinational organization.
                </p>
                <p>
                  With our <span className="text-gold font-medium">partner-led approach</span>, we deliver the highest quality of service by using short, functional communication chains to aid rapid and accurate decision-making.
                </p>
              </div>

              {/* TRUSTED ANCHOR */}
              <div className="mt-16 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-12 h-12 rounded-full border-2 border-[#FCF9F5] bg-charcoal/5`} />
                  ))}
                </div>
                <div className="text-[10px] font-bold text-charcoal/30 uppercase tracking-[0.3em]">
                  Trusted by organizations globally
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT STATS GRID */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="p-10 bg-white/40 backdrop-blur-md border border-charcoal/5 rounded-2xl group hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-700"
                >
                  <div className="text-4xl md:text-5xl font-bold text-charcoal mb-4 tabular-nums tracking-tighter group-hover:text-gold transition-colors duration-500">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] font-bold text-charcoal/40 uppercase tracking-[0.3em] group-hover:text-gold/60 transition-colors duration-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* DECORATIVE SQUARE */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-gold/10 -z-10 rounded-full blur-xl" />
          </div>
        </div>

      </div>

    </section>
  );
}
