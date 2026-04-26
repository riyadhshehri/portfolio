import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getProjectsSorted } from "@/lib/projects";

const techLabels: Record<string, string> = {
  react: "React",
  nextjs: "Next.js",
  typescript: "TypeScript",
  tailwind: "Tailwind CSS",
  anthropic: "Anthropic API",
  python: "Python",
  fastapi: "FastAPI",
  postgresql: "PostgreSQL",
  mdx: "MDX",
  github: "GitHub",
};

export function generateStaticParams() {
  return getProjectsSorted().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectsSorted().find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.description };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectsSorted().find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <style>{`
        .project-detail-main {
          padding-top: 80px;
          padding-bottom: 120px;
          padding-inline: 24px;
          max-width: 720px;
          margin: 0 auto;
        }

        .project-detail-header {
          margin-bottom: 56px;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border);
        }

        .project-detail-title {
          font-family: thmanyah-serif-display, serif;
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 700;
          font-feature-settings: "salt" on;
          margin: 0 0 32px;
          line-height: 1.18;
          color: var(--foreground);
        }

        .project-detail-desc {
          font-family: thmanyah-sans, sans-serif;
          font-size: 16px;
          color: var(--muted-foreground);
          margin: 0;
          line-height: 1.8;
        }

        .project-detail-section {
          margin-bottom: 48px;
        }

        .project-detail-section-title {
          font-family: thmanyah-serif-display, serif;
          font-size: clamp(20px, 3vw, 26px);
          font-weight: 600;
          font-feature-settings: "salt" on;
          margin: 0 0 20px;
          color: var(--foreground);
        }

        .project-detail-text {
          font-family: thmanyah-sans, sans-serif;
          font-size: 15px;
          line-height: 1.85;
          color: var(--foreground);
          margin: 0;
        }

        .project-detail-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }

        .project-detail-list li {
          font-family: thmanyah-sans, sans-serif;
          font-size: 15px;
          color: var(--foreground);
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .project-detail-list li::before {
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }

        .project-detail-list li:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-chip {
          font-family: thmanyah-sans, sans-serif;
          font-size: 13px;
          padding: 5px 14px;
          border-radius: 999px;
          border: 1px solid var(--border);
          color: var(--muted-foreground);
          background: transparent;
        }

        .project-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .project-link-btn {
          font-family: thmanyah-sans, sans-serif;
          font-size: 14px;
          padding: 10px 22px;
          border-radius: 999px;
          border: 1px solid var(--border);
          color: var(--foreground);
          background: transparent;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .project-link-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
      `}</style>

      <SiteHeader />

      <main className="project-detail-main">
        <header className="project-detail-header">
          <h1 className="project-detail-title">الموقع الشخصي</h1>
          <p className="project-detail-desc">{project.description}</p>
        </header>

        <section className="project-detail-section">
          <h2 className="project-detail-section-title">عن المشروع</h2>
          <p className="project-detail-text">
            هذا الموقع هو مساحة شخصية أعرض فيها المقالات والمشاريع، أتطور من خلالها
          </p>
        </section>

        <section className="project-detail-section">
          <h2 className="project-detail-section-title">ما الذي يحتويه؟</h2>
          <ul className="project-detail-list">
            <li>صفحة رئيسية بهوية عربية</li>
            <li>صفحة للمقالات</li>
            <li>صفحة للمشاريع</li>
            <li>صفحة للسيرة الذاتية</li>
            <li>دعم الوضع الفاتح والداكن</li>
            <li>نشر تلقائي عبر Vercel</li>
          </ul>
        </section>

        <section className="project-detail-section">
          <h2 className="project-detail-section-title">التقنيات</h2>
          <div className="tech-chips">
            {project.tech.map((key) => (
              <span key={key} className="tech-chip">
                {techLabels[key] ?? key}
              </span>
            ))}
          </div>
        </section>

        {(project.github || project.demo) && (
          <section className="project-detail-section">
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  الموقع المباشر →
                </a>
              )}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
