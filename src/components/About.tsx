import Container from "@/components/ui/Container";

const credentials = [
  "Life skills Facilitator & Breath Expert",
  "Diploma + double PG in Biodynamic CranioSacral Therapy",
  "Advanced Rakkenho & Music Therapist",
  "S-VYASA Certified Music Therapist",
  "NLP Master Practitioner & Research Astrologer",
  "Professional Singer & Vocalist",
];

export default function About() {
  return (
    <section id="about" className="border-t border-stone py-20 sm:py-28 bg-paper">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Bio Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink-soft bg-stone-light px-3 py-1 rounded">
                The Coach
              </span>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                A holistic practice built on <span className="font-serif italic font-normal">deep listening</span> and wisdom.
              </h2>
              
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                As a Holistic Wellness and Mind Coach, I have dedicated over a decade to helping individuals restore physical health and find emotional balance. Having touched more than 1.5 lakh lives, my work integrates the restorative power of sound, hands-on biodynamic touch, and cosmic alignments to bring profound peace.
              </p>
              
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                I have trained over 30,000 corporate professionals from global organizations like Infosys, IBM, Microsoft, Google, Cognizant, TCS, and BIDCO Africa in stress-management, yoga, and purposeful living.
              </p>
            </div>

            <div className="mt-10 border-t border-stone pt-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-ink-soft">Inspiration</span>
              <p className="mt-2 font-display text-lg font-medium text-ink">
                &ldquo;My work and life find their path in the grace and guidance of <span className="font-serif italic text-xl">Gurudev Sri Sri Ravi Shankar</span>.&rdquo;
              </p>
            </div>
          </div>

          {/* Vision/Mission/Credentials Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border border-ink p-6 sm:p-8 bg-paper relative">
              <div className="absolute top-0 right-0 bg-ink text-paper text-[8px] uppercase tracking-widest font-bold px-3 py-1">
                Foundations
              </div>
              
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-widest font-bold text-ink mb-2">Our Vision</h3>
                <p className="text-xs leading-relaxed text-ink-soft">
                  To inspire and uplift one billion lives through healing, wisdom, music, and conscious living—nurturing a world that lives as one global family.
                </p>
              </div>

              <div className="border-t border-stone pt-6">
                <h3 className="text-xs uppercase tracking-widest font-bold text-ink mb-2">Our Mission</h3>
                <p className="text-xs leading-relaxed text-ink-soft">
                  To empower individuals with practical tools for holistic well-being through meditation, yoga, breathwork, music, education, and timeless wisdom, enabling them to live healthier, happier, and more purposeful lives.
                </p>
              </div>
            </div>

            <div className="border border-stone p-6 sm:p-8 bg-stone-light/50">
              <h3 className="text-xs uppercase tracking-widest font-bold text-ink mb-4">Credentials &amp; Expertise</h3>
              <ul className="space-y-3">
                {credentials.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-soft leading-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
