import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Container from "@/components/ui/Container";
import WaveDivider from "@/components/ui/WaveDivider";

export default function Hero() {
  return (
    <section id="top" className="pb-12 pt-14 sm:pt-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-moss">
              Music therapy &middot; Rakkenho &middot; Craniosacral therapy
            </p>

            <h1 className="font-display text-4xl font-medium leading-[1.15] text-ink sm:text-5xl">
              Sessions for the body to remember how to rest
            </h1>

            <p className="mt-5 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
              to be filled*
            </p>

            <a
              href="#sessions"
              className="mt-8 inline-flex items-center gap-2 rounded bg-moss px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-moss-dark"
            >
              View sessions
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>

            <div className="mt-10 max-w-xs">
              <WaveDivider />
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-stone-light">
            <Image
              src="/images/profile-hero1.jpeg"
              alt="Portrait of Sharath Kancherla"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
