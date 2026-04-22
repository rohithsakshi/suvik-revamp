import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* RESTORED & REFINED DARK HERO */}
      <section className="relative pt-8 pb-1 bg-[#1A1A1A] overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E0B97A] mb-4">
              Project Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Strategic <span className="text-[#E0B97A]">Deliveries</span>
            </h1>

          </div>
        </div>
      </section>

      <ProjectsSection />
    </div>
  )
}
