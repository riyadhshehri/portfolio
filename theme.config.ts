// ─── معلومات الموقع ──────────────────────────────────────────────────────────
const site = {
  name: "Riyadh Al-Shehri",
  nameAr: "رياض الشهري",
  tagline: "Software Engineering Student",
  taglineAr: "طالب هندسة برمجيات",
  description:
    "Personal portfolio of Riyadh Al-Shehri — articles on software engineering and technology, in Arabic and English.",
  descriptionAr:
    "موقع رياض الشهري الشخصي — مقالات في هندسة البرمجيات والتقنية، بالعربية والإنجليزية.",
  url: "https://riyadhshehri.com",
} as const;

// ─── روابط التواصل ───────────────────────────────────────────────────────────
const social = {
  github: "https://github.com/riyadhshehri",
  linkedin: "https://www.linkedin.com/in/riyadh-alshehri-665482363",
  email: "riyadh.m.shehri@gmail.com",
  cv: "/cv", // مؤقت — يُحدَّث لاحقاً بنسخة PDF للتحميل
} as const;

// ─── الألوان ─────────────────────────────────────────────────────────────────
const colors = {
  light: {
    background: "#faf8f3",
    foreground: "#1a1a1a",
    muted: "#6b6b6b",
    subtle: "#9a9a9a",
    border: "rgba(26,26,26,0.12)",
    accent: "#4a6741",
    accentHover: "#3a5331",
  },
  dark: {
    background: "#1a1a1a",
    foreground: "#f5f1e8",
    muted: "#a8a8a8",
    subtle: "#6b6b6b",
    border: "rgba(245,241,232,0.12)",
    accent: "#7a9970",
    accentHover: "#94b48a",
  },
} as const;

// ─── الخطوط ──────────────────────────────────────────────────────────────────
const fonts = {
  arabicDisplay: "thmanyah-serif-display",
  arabicText: "thmanyah-serif-text",
  arabicSans: "thmanyah-sans",
  englishSerif: "var(--font-ibm-plex-serif)",
  englishSans: "var(--font-ibm-plex-sans)",
  englishMono: "var(--font-ibm-plex-mono)",
} as const;

// ─── إعدادات الموقع ──────────────────────────────────────────────────────────
const settings = {
  defaultLocale: "ar" as "ar" | "en",
  defaultTheme: "auto" as "light" | "dark" | "auto",
  showDarkModeToggle: true,
} as const;

// ─── التصدير ─────────────────────────────────────────────────────────────────
export const theme = {
  site,
  social,
  colors,
  fonts,
  settings,
} as const;

export type Theme = typeof theme;
