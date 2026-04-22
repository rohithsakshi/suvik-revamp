import { ServicesSection } from "@/components/sections/ServicesSection";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* RESTORED & REFINED DARK HERO */}
      <section className="relative pt-8 pb-1 bg-[#1A1A1A] overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E0B97A] mb-4">
              Strategic Expertise
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Our <span className="text-[#E0B97A]">Services</span>
            </h1>

          </div>
        </div>
      </section>

      <ServicesSection />
    </div>
  )
}
