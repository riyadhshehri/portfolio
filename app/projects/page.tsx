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

        .projects-header {
          margin-bottom: 48px;
          text-align: right;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .project-anchor {
          scroll-margin-top: 96px;
        }

        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .card-ext-link:hover {
          color: var(--accent);
        }

        @media (max-width: 720px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <SiteHeader />

      <main className="projects-main">
        <header className="projects-header">
          <h1
            style={{
              fontFamily: "thmanyah-serif-display, serif",
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 700,
              fontFeatureSettings: '"salt" on',
              margin: 0,
              lineHeight: 1.1,
              color: "var(--foreground)",
            }}
          >
            المشاريع
          </h1>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              id={project.slug}
              className="project-anchor"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}