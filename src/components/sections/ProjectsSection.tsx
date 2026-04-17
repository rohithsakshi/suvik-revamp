"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/Card"

const projects = [
  { id: "01", title: "Enterprise Digital Solution", desc: "Digital transformation strategy and execution." },
  { id: "02", title: "Blockchain Infrastructure", desc: "Secure distributed ledger networks implementation." },
  { id: "03", title: "Corporate Business Setup", desc: "Comprehensive strategic planning and onboarding." }
]

export function ProjectsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-white/60 max-w-2xl text-lg">A glimpse into our successful multinational implementations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="p-0 overflow-hidden group h-80 relative flex items-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"/>
                <div className="p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform w-full">
                  <span className="text-accent text-sm font-bold tracking-wider mb-2 block">{proj.id}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity">{proj.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
