import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HorizontalScrollContainer } from "@/components/layout/HorizontalScrollContainer";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <div className="pt-32 min-h-[60vh] bg-charcoal">
        <div className="container mx-auto px-6 md:px-12 mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Suvik</h1>
          <p className="text-xl text-white/70 max-w-3xl">Pioneering growth via local understanding and global execution.</p>
        </div>
      </div>
      <AboutPreview />
      <WhyChooseUs />
    </div>
  )
}
