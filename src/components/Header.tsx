"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Sessions", href: "#sessions" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="font-display text-lg font-medium text-ink">
          Sharath Chandra Kancherla
        </a>

        <nav className="hidden gap-8 sm:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-ink" />
          ) : (
            <Menu className="h-6 w-6 text-ink" />
          )}
        </button>
      </Container>

      {menuOpen && (
        <nav
          className="border-t border-stone bg-paper sm:hidden"
          aria-label="Primary mobile"
        >
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-ink-soft transition-colors hover:bg-stone-light hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
