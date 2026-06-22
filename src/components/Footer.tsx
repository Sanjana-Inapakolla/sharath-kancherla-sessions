import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-stone bg-paper">
      <Container className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <p className="text-xs tracking-wider uppercase text-ink-soft/80">
          &copy; {new Date().getFullYear()} Sharath Chandra Kancherla &middot; Hyderabad, India
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/sharathkancherla?igsh=MWtvZXI1a3czbzdlYg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-ink-soft hover:text-ink transition-colors duration-200"
          >
            <FaInstagram className="h-5 w-5" />
          </a>

          <a
            href="https://youtube.com/@sharathkancherla?si=d8kXq71Z1eJ0e18K"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
            className="text-ink-soft hover:text-ink transition-colors duration-200"
          >
            <FaYoutube className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/sharath-chandra-kancherla-b38422108?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-soft hover:text-ink transition-colors duration-200"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
