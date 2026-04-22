"use client"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import FlowArc from "@/components/common/FlowArc";
import { motion } from "framer-motion";

const offices = [
  { name: "Dubai (Head Office)", address: "Property Investment Office 4 - S1, Dubai Investment Park First", box: "P O Box: 294587" },
  { name: "RAKEZ", address: "Office No. B5 - 308 A 2, Academic Zone 01, RAKEZ Business Zone", box: "P O Box: 294587" },
  { name: "Sharjah", address: "P1 - ELOB Office No. E - 43F - 06, Hamriyah Free Zone / SRTIP Ecosystem", box: "P O Box: 6915" },
  { name: "Switzerland", address: "Suvik Technologies GmbH, Bahnhofstrasse 27, 6300 Zug, Switzerland", box: "" },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-[#FCF9F5] min-h-screen">
      {/* REFINED HERO */}
      <section className="relative pt-44 pb-16 overflow-hidden">
        <FlowArc />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#E0B97A] mb-4">
              Connect With Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-6 leading-[1.1] tracking-tight">
              Let&apos;s Start <br />
              <span className="text-[#E0B97A]">a Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal/60 max-w-2xl leading-relaxed font-light">
              Reach out to discuss your vision. Our team across Dubai, Ras Al Khaimah, Sharjah, and Zug is ready to support you at every step.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
            <Card className="p-10 bg-white border-black/5 shadow-[0_30px_60px_rgba(0,0,0,0.03)] border rounded-[32px]">
              <h2 className="text-2xl font-semibold text-charcoal mb-8 tracking-tight">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-[#FCF9F5]/50 border border-black/10 rounded-xl p-4 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-[#E0B97A] transition-colors" />
                  <input type="email" placeholder="Your Email" className="w-full bg-[#FCF9F5]/50 border border-black/10 rounded-xl p-4 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-[#E0B97A] transition-colors" />
                  <textarea rows={5} placeholder="Your Message" className="w-full bg-[#FCF9F5]/50 border border-black/10 rounded-xl p-4 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-[#E0B97A] transition-colors resize-none" />
                </div>
                <Button type="submit" className="w-full py-7 text-[11px] tracking-[0.2em] font-bold uppercase rounded-xl">Send Message</Button>
              </form>
            </Card>
            
            <div className="space-y-12">
               <div>
                 <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#E0B97A] mb-6">Direct Contact</h3>
                 <div className="space-y-2">
                   <p className="text-xl text-charcoal font-medium">info@suvik.ae</p>
                   <p className="text-xl text-charcoal font-medium">+971 52 8673675</p>
                 </div>
               </div>
               
               <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#E0B97A] mb-8">Our Global Offices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {offices.map((off, i) => (
                    <Card key={i} className="p-7 bg-white border-black/5 shadow-sm rounded-[24px]">
                      <h4 className="font-semibold text-charcoal mb-3">{off.name}</h4>
                      <p className="text-[13px] text-charcoal/60 leading-relaxed mb-1">{off.address}</p>
                      {off.box && <p className="text-[13px] text-[#E0B97A] font-medium">{off.box}</p>}
                    </Card>
                  ))}
                </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
