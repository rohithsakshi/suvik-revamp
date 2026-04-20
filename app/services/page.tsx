import { ServicesSection } from "@/components/sections/ServicesSection";
import { HorizontalScrollContainer } from "@/components/layout/HorizontalScrollContainer";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <div className="pt-32 min-h-[60vh] bg-charcoal">
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-white/70 max-w-3xl">Comprehensive solutions tailored to your unique requirements.</p>
        </div>
      </div>
      <ServicesSection />
    </div>
  )
}
