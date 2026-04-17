"use client"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

const offices = [
  { name: "Dubai (Head Office)", address: "Property Investment Office 4 - S1, Dubai Investment Park First", box: "P O Box: 294587" },
  { name: "RAKEZ", address: "Office No. B5 - 308 A 2, Academic Zone 01, RAKEZ Business Zone", box: "P O Box: 294587" },
  { name: "Sharjah", address: "P1 - ELOB Office No. E - 43F - 06, Hamriyah Free Zone / SRTIP Ecosystem", box: "P O Box: 6915" },
  { name: "Switzerland", address: "Suvik Technologies GmbH, Bahnhofstrasse 27, 6300 Zug, Switzerland", box: "" },
]

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-xl text-white/70 max-w-3xl mb-16">Reach out to us across our 4 global locations.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-[#C9A96E]" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-[#C9A96E]" />
              </div>
              <div>
                <textarea rows={4} placeholder="Your Message" className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-[#C9A96E]" />
              </div>
              <Button type="submit" className="w-full">Submit Inquiry</Button>
            </form>
          </Card>
          
          <div className="space-y-6">
             <div className="mb-8">
               <h3 className="text-2xl font-bold text-white mb-2">Direct Contact</h3>
               <p className="text-white/70">Email: info@suvik.ae</p>
               <p className="text-white/70">Phone: +971 52 8673675</p>
             </div>
             
             <h3 className="text-xl font-bold text-[#C9A96E] mb-4">Our Offices</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {offices.map((off, i) => (
                 <Card key={i} className="p-5">
                   <h4 className="font-bold text-white mb-2">{off.name}</h4>
                   <p className="text-sm text-white/60 leading-relaxed mb-1">{off.address}</p>
                   {off.box && <p className="text-sm text-white/40">{off.box}</p>}
                 </Card>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
