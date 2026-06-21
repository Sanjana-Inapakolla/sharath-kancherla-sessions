import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-stone bg-stone-light">
      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-xs text-ink-soft">
          &copy; {new Date().getFullYear()} Sharath Kancherla &middot;
          Hyderabad, India
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/sharathkancherla?igsh=MWtvZXI1a3czbzdlYg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-ink-soft transition-colors hover:text-ink"
          >
            <FaInstagram className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/sharath-chandra-kancherla-b38422108?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-soft transition-colors hover:text-ink"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
