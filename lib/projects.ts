// ─── الأنواع ───────────────────────────────────────────────────────────────────
export type TechKey =
  | "react" | "nextjs" | "typescript" | "tailwind"
  | "anthropic" | "python" | "fastapi" | "postgresql"
  | "mdx" | "github";

export type ProjectStatus = "in-progress" | "completed" | "archived";

export interface Project {
  slug: string;
  name: string;
  description: string;
  tech: TechKey[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
  order: number;
}

// ─── بيانات المشاريع ──────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "forge",
    name: "FORGE",
    description: "مخطط تمارين رياضية ذكي يولّد برامج شخصية بناءً على هدفك ومستواك، مدعوم بـ Anthropic API.",
    tech: ["react", "anthropic", "tailwind"],
    status: "in-progress",
    order: 1,
  },
  {
    slug: "personal-portfolio",
    name: "Personal Portfolio",
    description: "موقعي الشخصي الذي تتصفّحه الآن — مبني بـ Next.js وخط ثمانية.",
    tech: ["nextjs", "typescript", "tailwind"],
    status: "in-progress",
    order: 2,
  },
  {
    slug: "markdown-notes-sync",
    name: "Markdown Notes Sync",
    description: "تطبيق ملاحظات يحفظ كل ملاحظة كملف Markdown في مستودع GitHub خاص — للمزامنة بين الأجهزة.",
    tech: ["nextjs", "github", "mdx"],
    status: "completed",
    order: 3,
  },
  {
    slug: "leetcode-tracker",
    name: "LeetCode Tracker",
    description: "أداة لتتبّع تقدّمي في LeetCode، تخزّن الحلول وتحسب إحصائيات الأنماط الخوارزمية.",
    tech: ["python", "fastapi", "postgresql"],
    status: "completed",
    order: 4,
  },
];

// ─── دوال مساعدة ──────────────────────────────────────────────────────────────
export function getProjectsSorted(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}
