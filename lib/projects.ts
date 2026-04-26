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
  descriptionAr?: string;
  descriptionEn?: string;
  tech: TechKey[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
  order: number;
}

// ─── بيانات المشاريع ──────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "personal-portfolio",
    name: "الموقع الشخصي",
    description: "موقعي الشخصي الذي تتصفّحه الآن — مبني بـ Next.js وخط ثمانية.",
    tech: ["nextjs", "typescript", "tailwind"],
    status: "completed",
    github: "https://github.com/riyadhshehri/portfolio",
    demo: "https://portfolio-puce-five-25.vercel.app",
    order: 1,
  },
];

// ─── دوال مساعدة ──────────────────────────────────────────────────────────────
export function getProjectsSorted(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}
