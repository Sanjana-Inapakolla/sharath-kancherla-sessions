import { Session } from "@/types/session";

export const sessions: Session[] = [
  {
    id: "cst",
    name: "Craniosacral Therapy (cst)",
    description:
      "Light-touch bodywork that supports the nervous system and eases tension held in the body.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    additionalInfo:
      "Practitioners use light pressure to evaluate and release tension in the soft tissues surrounding the brain and spinal cord.",
    duration: "45 min",
    format: "1-on-1",
    mode: "In-person",
  },

  {
    id: "rakkenho",
    name: "Rakkenho",
    description:
      "A gentle hands-on practice that helps the body settle out of stress and into rest.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    additionalInfo:
      "Japanese full-body therapy. Uses soles of the feet to gently massage various pressure points on the body. It simulates the vagus nerve and promotes healing.",
    duration: "45 min",
    format: "1-on-1",
    mode: "In-person",
  },

  {
    id: "music-therapy",
    name: "Music Therapy",
    description:
      "Guided sessions using rhythm, voice, and listening to support emotional regulation and release.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    additionalInfo: "Use of music and/or elements of music to reduce stress or improving quality of life.",
    duration: "60 min",
    format: "1-on-1",
    mode: "In-person or Online",
  },
];
