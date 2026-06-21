"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import type { Session } from "@/types/session";

export default function SessionRow({ session }: { session: Session }) {
  const [expanded, setExpanded] = useState(false);

  const meta = [session.duration, session.format, session.mode]
    .filter(Boolean)
    .join(" · ");

  const panelId = `${session.id}-additional-info`;

  return (
    <div
      id={session.id}
      className="border-t border-stone py-6 first:border-t-0"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-medium text-ink">{session.name}</h3>

          <p className="mt-1 text-sm text-ink-soft">{session.description}</p>

          {meta && (
            <p className="mt-2 text-xs uppercase tracking-wide text-ink-soft/80">
              {meta}
            </p>
          )}

          {session.additionalInfo && (
            <button
              type="button"
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
              aria-controls={panelId}
              className="mt-3 flex items-center gap-1 text-xs font-medium text-moss transition-colors hover:text-moss-dark"
            >
              {expanded ? "Read less" : "Read more"}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
          )}
        </div>

        <a
          href={session.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center justify-center gap-2 self-start rounded border border-clay px-5 py-2.5 text-sm font-medium text-clay transition-colors hover:bg-clay hover:text-paper sm:self-auto"
        >
          Register
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      {session.additionalInfo && (
        <div
          id={panelId}
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            expanded
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <p className="ml-10 mt-3 max-w-prose text-sm leading-relaxed text-ink-soft">
              {session.additionalInfo}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
