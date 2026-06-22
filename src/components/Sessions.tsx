"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SessionCard from "@/components/SessionCard";
import { sessions } from "@/data/sessions";

type CategoryFilter = "all" | "therapy" | "consultation" | "classes_workshops";

const filterTabs: { label: string; value: CategoryFilter }[] = [
  { label: "All Offerings", value: "all" },
  { label: "Therapies", value: "therapy" },
  { label: "1-on-1 Consultations", value: "consultation" },
  { label: "Classes & Workshops", value: "classes_workshops" },
];

export default function Sessions() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Filtering Logic
  const filteredSessions = sessions.filter((session) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "therapy") return session.category === "therapy";
    if (activeCategory === "consultation") return session.category === "consultation";
    if (activeCategory === "classes_workshops") {
      return session.category === "class" || session.category === "workshop";
    }
    return true;
  });

  return (
    <section id="sessions" className="border-t border-stone py-20 sm:py-28 bg-paper">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink-soft bg-stone-light px-3 py-1 rounded">
            Services
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Choose a <span className="font-serif italic font-normal">Session</span> or Workshop
          </h2>
          <p className="mt-4 max-w-prose text-xs sm:text-sm text-ink-soft leading-relaxed">
            Select a pathway to wellness. Hover over a session card to focus details. All session pricing is available inside the registration forms.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 border-b border-stone/50 pb-4">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => {
                  setActiveCategory(tab.value);
                  setHoveredId(null); // Reset hover state on tab switch
                }}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-ink text-paper"
                    : "bg-transparent text-ink-soft hover:text-ink hover:bg-stone-light"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Sessions Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]">
          {filteredSessions.map((session) => (
            <div key={session.id} className="h-full">
              <SessionCard
                session={session}
                isHovered={hoveredId === session.id}
                isAnyHovered={hoveredId !== null}
                onHover={() => setHoveredId(session.id)}
                onLeave={() => setHoveredId(null)}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
