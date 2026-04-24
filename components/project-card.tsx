"use client";

import { SiGithub } from "react-icons/si";
import { TechIcon } from "@/components/tech-icon";
import type { Project, ProjectStatus } from "@/lib/projects";

function StatusBadge({ status }: { status: ProjectStatus }) {
  const config: Record<ProjectStatus, { label: string; color: string; opacity?: number }> = {
    "in-progress": { label: "قيد البناء", color: "var(--accent)" },
    completed:     { label: "مكتمل",      color: "var(--muted-foreground)" },
    archived:      { label: "مؤرشف",      color: "var(--muted-foreground)", opacity: 0.6 },
  };
  const { label, color, opacity } = config[status];

  return (
    <span
      style={{
        padding: "3px 10px",
        borderRadius: 999,
        fontSize: 11,
        border: "1px solid currentColor",
        color,
        opacity: opacity ?? 1,
        fontFamily: "thmanyah-sans, sans-serif",
      }}
    >
      {label}
    </span>
  );
}

interface Props {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  const hasLinks = project.github || project.demo;

  return (
    <div
      className="project-card"
      style={{
        padding: 28,
        borderRadius: 12,
        border: "1px solid var(--border)",
        background: "var(--background)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        minHeight: 240,
        transition: "border-color 0.2s, transform 0.2s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "thmanyah-sans, sans-serif",
            fontSize: 13,
            color: "var(--muted-foreground)",
          }}
        >
          {(index + 1).toString().padStart(2, "0")}
        </span>
        <StatusBadge status={project.status} />
      </div>

      <h2
        style={{
          fontFamily: "thmanyah-serif-display, serif",
          fontSize: "clamp(20px, 2.4vw, 26px)",
          fontWeight: 600,
          color: "var(--foreground)",
          margin: 0,
        }}
      >
        {project.name}
      </h2>

      <p
        style={{
          fontFamily: "thmanyah-serif-text, serif",
          fontSize: 14,
          color: "var(--muted-foreground)",
          lineHeight: 1.6,
          margin: 0,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        {project.tech.map((key) => (
          <TechIcon key={key} techKey={key} size={22} />
        ))}
      </div>

      {hasLinks && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 14,
            display: "flex",
            gap: 16,
          }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-ext-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                color: "var(--muted-foreground)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              <SiGithub size={12} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="card-ext-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                color: "var(--muted-foreground)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              ↗ Live
            </a>
          )}
        </div>
      )}
    </div>
  );
}
