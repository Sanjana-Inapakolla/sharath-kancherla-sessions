import Container from "@/components/ui/Container";
import SessionRow from "@/components/SessionRow";
import { sessions } from "@/data/sessions";

export default function Sessions() {
  return (
    <section id="sessions" className="border-t border-stone py-16 sm:py-20">
      <Container>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-moss">
          Sessions
        </p>
        <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
          Choose a Session
        </h2>

        <div className="mt-8">
          {sessions.map((session) => (
            <SessionRow key={session.id} session={session} />
          ))}
        </div>
      </Container>
    </section>
  );
}
