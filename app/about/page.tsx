import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import FlowArc from "@/components/common/FlowArc";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#FCF9F5]">
      {/* REFINED HERO */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        <FlowArc />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#E0B97A] mb-4">
              Est. 2011 — Dubai, UAE
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-6 leading-[1.1] tracking-tight">
              We Built Suvik to <br />
              <span className="text-[#E0B97A]">End the Complexity</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal/60 max-w-2xl leading-relaxed font-light">
              Most founders spend months navigating UAE bureaucracy. We’ve spent 14 years building the company that makes it disappear — in 30 days, with 516+ launches to prove it.
            </p>
          </div>
        </div>
      </section>

      <AboutPreview />
      <WhyChooseUs />
    </div>
  )
}
