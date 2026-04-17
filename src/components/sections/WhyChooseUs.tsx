"use client"
import { motion } from "framer-motion"

const stats = [
  { value: "516", label: "Projects Completed" },
  { value: "42", label: "Employees" },
  { value: "4", label: "Offices" },
  { value: "100+", label: "Achievements" },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white/5 border-y border-white/10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-4xl md:text-6xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-white/70 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
