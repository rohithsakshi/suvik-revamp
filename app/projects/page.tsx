import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { HorizontalScrollContainer } from "@/components/layout/HorizontalScrollContainer";
import { Footer } from "@/components/layout/Footer";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <div className="pt-32 min-h-[60vh] bg-charcoal">
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">Our Projects</h1>
          <p className="text-xl text-white/70 max-w-3xl">Over 516 successful project deliveries globally.</p>
        </div>
      </div>
      <ProjectsSection />
      <Footer />
    </div>
  )
}
