import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectCard } from "@/components/project-card";
import { getProjectsSorted } from "@/lib/projects";

export const metadata = {
  title: "المشاريع",
  description: "مجموعة من المشاريع التي بنيتها أو أبنيها حالياً.",
};

export default function ProjectsPage() {
  const projects = getProjectsSorted();

  return (
    <>
      <style>{`
        .projects-main {
          padding-top: 80px;
          padding-bottom: 120px;
          padding-inline: 24px;
          max-width: 980px;
          margin: 0 auto;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .card-ext-link:hover { color: var(--accent); }
        @media (max-width: 720px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <SiteHeader />

      <main className="projects-main">
        <header style={{ marginBottom: 48, textAlign: "right" }}>
          <h1
            style={{
              fontFamily: "thmanyah-serif-display, serif",
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 700,
              fontFeatureSettings: '"salt" on',
              margin: "0 0 12px 0",
              lineHeight: 1.1,
              color: "var(--foreground)",
            }}
          >
            المشاريع
          </h1>
          <p
            style={{
              fontFamily: "thmanyah-serif-text, serif",
              fontSize: 16,
              color: "var(--muted-foreground)",
              margin: 0,
              maxWidth: 520,
            }}
          >
            مجموعة من المشاريع التي بنيتها أو أبنيها حالياً.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
