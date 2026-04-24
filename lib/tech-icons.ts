import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAnthropic,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMdx,
  SiGithub,
} from "react-icons/si";
import type { ComponentType } from "react";
import type { IconBaseProps } from "react-icons";
import type { TechKey } from "./projects";

// ─── تسجيل الأيقونات ──────────────────────────────────────────────────────────
interface TechMeta {
  Icon: ComponentType<IconBaseProps>;
  label: string;
  color: string;
  invertOnDark: boolean;
}

export const techRegistry: Record<TechKey, TechMeta> = {
  react: {
    Icon: SiReact,
    label: "React",
    color: "#61DAFB",
    invertOnDark: false,
  },
  nextjs: {
    Icon: SiNextdotjs,
    label: "Next.js",
    color: "#000000",
    invertOnDark: true,
  },
  typescript: {
    Icon: SiTypescript,
    label: "TypeScript",
    color: "#3178C6",
    invertOnDark: false,
  },
  tailwind: {
    Icon: SiTailwindcss,
    label: "Tailwind CSS",
    color: "#06B6D4",
    invertOnDark: false,
  },
  anthropic: {
    Icon: SiAnthropic,
    label: "Anthropic",
    color: "#D4A27F",
    invertOnDark: false,
  },
  python: {
    Icon: SiPython,
    label: "Python",
    color: "#3776AB",
    invertOnDark: false,
  },
  fastapi: {
    Icon: SiFastapi,
    label: "FastAPI",
    color: "#009688",
    invertOnDark: false,
  },
  postgresql: {
    Icon: SiPostgresql,
    label: "PostgreSQL",
    color: "#4169E1",
    invertOnDark: false,
  },
  mdx: {
    Icon: SiMdx,
    label: "MDX",
    color: "#1B1F24",
    invertOnDark: true,
  },
  github: {
    Icon: SiGithub,
    label: "GitHub",
    color: "#181717",
    invertOnDark: true,
  },
};
