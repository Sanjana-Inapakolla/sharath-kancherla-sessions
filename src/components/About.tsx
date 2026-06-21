import Container from "@/components/ui/Container";

const credentials = [
  "Life skills Facilitator & Breath Expert",
  "Diploma + double PG in Bio Dynamic Cranio Sacral Therapy",
  "Advance Rakheno & Music Therapist",
  "S-YASA Certified Music Therapist",
  "NLP Master Practitioner & Research Astrologer",
  "Professional Singer",
];

export default function About() {
  return (
    <section id="about" className="border-t border-stone py-16 sm:py-20">
      <Container>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-moss">
          About
        </p>
        <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
          A practice built on listening
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
          <p className="max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
            I touched more than 55,000+ lives with 10+ years experience as a
            Holistic Wellness and Mind Coach. Taught more than 100's of students
            in Carnatic and light music. Trained 30,000+ of IT employees from
            organisations like BIDCO Africa, Bayobab Africa, Infosys, IBM,
            Microsoft, Google, Cognizant, TCS & Mylan laboratories with my
            expertise in YOGA and LIFE COACH.
          </p>

          <ul className="space-y-3 border-l border-stone pl-6">
            {credentials.map((item) => (
              <li key={item} className="text-sm text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
