"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/Card"

export function AboutPreview() {
  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Decade of Excellence</h2>
          <p className="text-lg text-white/70 mb-12 leading-relaxed">
            Founded in 2011, Suvik Group is based in the UAE. A decade of experience has made us a trusted partner for businesses seeking innovative and reliable IT solutions, business setup, and blockchain integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Expertise in UAE Laws & Procedures", "Innovative Distributed Ledger Tech", "Partner-led Approach"].map((item, i) => (
              <Card key={i} className="text-center py-8">
                <h3 className="text-accent font-semibold text-lg">{item}</h3>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
