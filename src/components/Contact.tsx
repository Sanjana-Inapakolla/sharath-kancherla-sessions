import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

const contactItems = [
  {
    icon: Mail,
    label: "sharathchandra.kancherla@gmail.com",
    href: "sharathchandra.kancherla@gmail.com",
  },
  { icon: Phone, label: "+91 9700477529", href: "tel:+919700477529" },
  { icon: MapPin, label: "Hyderabad, Telangana", href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-stone py-16 sm:py-20">
      <Container>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-moss">
          Contact
        </p>
        <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
          Questions before you book?
        </h2>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
          Reach out directly and I&apos;ll help you figure out which session
          fits what you&apos;re looking for.
        </p>

        <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-10">
          {contactItems.map(({ icon: Icon, label, href }) => (
            <li key={label} className="flex items-center gap-2.5">
              <Icon className="h-4 w-4 text-moss" aria-hidden="true" />
              {href ? (
                <a
                  href={href}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {label}
                </a>
              ) : (
                <span className="text-sm text-ink-soft">{label}</span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
