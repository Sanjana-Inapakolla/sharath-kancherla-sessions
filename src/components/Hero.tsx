import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="top" className="pb-20 pt-16 sm:pt-28 sm:pb-32 bg-paper relative overflow-hidden">
      {/* Editorial Grid Border Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-stone/60" />
      
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-ink-soft">
                Healing &bull; Wisdom &bull; Music &bull; Conscious Living
              </span>
            </div>

            <h1 className="font-display text-5xl font-medium tracking-tight leading-[1.05] text-ink sm:text-7xl">
              Quietening the <span className="font-serif italic font-normal">mind</span>.<br />
              Restoring the <span className="font-serif italic font-normal">body</span>.
            </h1>

            <p className="mt-8 max-w-prose text-sm leading-relaxed text-ink-soft sm:text-base font-light">
              Empowering individuals with practical tools for holistic well-being through biodynamic touch, traditional Japanese bodywork, therapeutic music, and celestial chart consultations. Spreading compassions and timeless values to live as one global family.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#sessions"
                className="group inline-flex items-center justify-center gap-3 bg-ink text-paper px-10 py-5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 rounded-none border border-ink shadow-sm"
              >
                Explore Offerings
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center bg-transparent text-ink px-10 py-5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-stone-light hover:-translate-y-0.5 active:translate-y-0 rounded-none border border-stone"
              >
                Read Biography
              </a>
            </div>
          </div>

          {/* Photo Frame Container */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink bg-stone-light p-2.5 group">
              <div className="relative w-full h-full overflow-hidden border border-stone/50">
                <Image
                  src="/images/profile-hero1.jpeg"
                  alt="Portrait of Sharath Chandra Kancherla"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter grayscale hover:grayscale-0 transition-all"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>
            </div>
            
            {/* Elegant Caption */}
            <div className="flex items-center justify-between px-1 text-[10px] font-mono tracking-tight text-ink-soft uppercase">
              <span>Photo Hero — 01</span>
              <span>Sharath Chandra Kancherla</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
