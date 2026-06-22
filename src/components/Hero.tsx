"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="top" className="pb-24 pt-20 sm:pt-36 sm:pb-40 bg-paper relative overflow-hidden">
      {/* Editorial Catalog Fine-Line Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-stone" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone" />
      
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-ink" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-ink-soft">
                Healing &bull; Wisdom &bull; Music &bull; Conscious Living
              </span>
            </div>

            <h1 className="font-display text-5xl font-medium tracking-tight leading-[1.05] text-ink sm:text-7xl">
              Quietening the <span className="font-serif italic font-normal">mind</span>.<br />
              Restoring the <span className="font-serif italic font-normal">body</span>.
            </h1>

            <div className="w-20 h-[1px] bg-ink my-8" />

            <p className="max-w-prose text-sm leading-relaxed text-ink-soft sm:text-base font-light">
              Empowering individuals with practical tools for holistic well-being through biodynamic touch, traditional Japanese bodywork, therapeutic music, and celestial chart consultations. Spreading compassion and timeless values to live as one global family.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#sessions"
                className="group inline-flex items-center justify-center gap-3 bg-ink text-paper px-10 py-5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 border border-ink"
              >
                Explore Offerings
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center bg-transparent text-ink px-10 py-5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-stone-light hover:-translate-y-0.5 active:translate-y-0 border border-stone"
              >
                Read Biography
              </a>
            </div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-4 w-full"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-stone bg-stone-light p-3 group">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/profile-hero1.jpeg"
                  alt="Portrait of Sharath Chandra Kancherla"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter grayscale hover:grayscale-0"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>
            </div>
            
            {/* Classy caption (Removed Photo Hero — 01) */}
            <div className="flex justify-end px-1 text-[9px] font-mono tracking-wider text-ink-soft/75 uppercase">
              <span>Sharath Chandra Kancherla</span>
            </div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
}
