import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-12 sm:pt-20 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="mb-4 text-[10px] uppercase tracking-[0.25em] font-bold text-ink-soft bg-stone-light px-3 py-1 rounded">
              Holistic Healing &bull; Wisdom &bull; Music
            </span>

            <h1 className="font-display text-4xl font-medium tracking-tight leading-[1.1] text-ink sm:text-6xl">
              A space for the body to <span className="font-serif italic font-normal">remember</span> how to rest.
            </h1>

            <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
              Empowering individuals with practical tools for holistic well-being through craniosacral therapy, traditional bodywork, music, and timeless astrology wisdom. Guided by a vision to nurture compassion and human values.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#sessions"
                className="group inline-flex items-center justify-center gap-2 bg-ink text-paper px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 rounded-none border border-ink"
              >
                Explore Sessions
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center bg-transparent text-ink px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-stone-light hover:-translate-y-0.5 active:translate-y-0 rounded-none border border-stone"
              >
                About Sharath
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden border border-stone bg-stone-light p-2 group">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/profile-hero1.jpeg"
                alt="Portrait of Sharath Chandra Kancherla"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
