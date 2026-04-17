"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/Card"
import { Briefcase, Code, Globe, Shield } from "lucide-react"

const services = [
  { title: "Business Setup", desc: "Expert guidance on UAE laws, company formation, and offshore banking services.", icon: Briefcase },
  { title: "IT & Software", desc: "Consultancy, development, and professional services supporting all software cycles.", icon: Code },
  { title: "Blockchain Solutions", desc: "Comprehensive Distributed Ledger Technology services to modernize operations.", icon: Globe },
  { title: "Advisory Board", desc: "Highly educated professionals delivering substantial improvements in performance.", icon: Shield },
]

export function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-white/60 max-w-2xl text-lg">Delivering the highest quality of service through short, functional communication chains.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <svc.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{svc.title}</h3>
                <p className="text-white/60">{svc.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
