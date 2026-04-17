import { ServicesSection } from "@/components/sections/ServicesSection";

export default function ServicesPage() {
  return (
    <div className="pt-32 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-xl text-white/70 max-w-3xl">Comprehensive solutions tailored to your unique requirements.</p>
      </div>
      <ServicesSection />
    </div>
  )
}
