import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="pt-32 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h1 className="text-5xl font-bold text-white mb-6">Our Projects</h1>
        <p className="text-xl text-white/70 max-w-3xl">Over 516 successful project deliveries globally.</p>
      </div>
      <ProjectsSection />
    </div>
  )
}
