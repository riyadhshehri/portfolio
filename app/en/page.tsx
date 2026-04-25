"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FileText, ArrowDown } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ProjectCard } from "@/components/project-card";
import { getArticlesSorted } from "@/lib/articles";
import { getProjectsSorted } from "@/lib/projects";
import { theme } from "@/theme.config";

const links = [
  { icon: <FaLinkedin size={16} />, label: "LinkedIn", href: theme.social.linkedin },
  { icon: <FaGithub size={16} />, label: "GitHub", href: theme.social.github },
  { icon: <FileText size={16} />, label: "CV", href: theme.social.cv },
];

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        left: "2rem",
        zIndex: 40,
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: "1px solid var(--border)",
        background: "var(--background)",
        color: "var(--foreground)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: 18,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.2s, border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--foreground)";
      }}
    >
      ↑
    </button>
  );
}

export default function HomeEn() {
  const articles = getArticlesSorted().slice(0, 3);
  const projects = getProjectsSorted().slice(0, 2);

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
        }

        .en-hero-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          text-align: center;
          position: sticky;
          top: 0;
          z-index: 0;
          overflow: hidden;
        }

        .en-hero-section::after {
          content: "";
          position: absolute;
          inset: auto 0 0 0;
          height: 220px;
          background: linear-gradient(to top, var(--background), transparent);
          pointer-events: none;
        }

        .en-hero-inner {
          position: relative;
          z-index: 1;
          animation: enHeroEnter 900ms ease both;
        }

        @keyframes enHeroEnter {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .en-scroll-cue {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--muted-foreground);
          font-family: thmanyah-sans, sans-serif;
          font-size: 13px;
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.2s, color 0.2s;
          z-index: 2;
          animation: enCueFloat 1.8s ease-in-out infinite;
        }

        @keyframes enCueFloat {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(8px);
          }
        }

        .en-scroll-cue:hover {
          opacity: 1;
          color: var(--foreground);
        }

        .en-real-site {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          margin-top: -1px;
          border-top: 1px solid var(--border);
          border-radius: 32px 32px 0 0;
          background:
            radial-gradient(circle at top left, color-mix(in srgb, var(--accent) 10%, transparent), transparent 30rem),
            var(--background);
          box-shadow: 0 -24px 80px rgba(0, 0, 0, 0.18);
          animation: enSiteReveal linear both;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        @keyframes enSiteReveal {
          from {
            opacity: 0.72;
            transform: translateY(56px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .en-home-content {
          max-width: 980px;
          margin: 0 auto;
          padding: 88px 24px 120px;
        }

        .en-home-section {
          margin-bottom: 96px;
          animation: enSectionFade linear both;
          animation-timeline: view();
          animation-range: entry 0% cover 32%;
        }

        @keyframes enSectionFade {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .en-section-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin-bottom: 32px;
        }

        .en-section-title {
          font-family: thmanyah-serif-display, serif;
          font-size: clamp(34px, 5vw, 54px);
          font-weight: 700;
          line-height: 1.1;
          margin: 0;
          font-feature-settings: "salt" on;
        }

        .en-section-link {
          color: var(--muted-foreground);
          text-decoration: none;
          font-family: thmanyah-sans, sans-serif;
          font-size: 14px;
          white-space: nowrap;
          transition: color 0.2s;
        }

        .en-section-link:hover {
          color: var(--accent);
        }

        .en-intro-card {
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 32px;
        }

        .en-intro-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
          font-family: thmanyah-sans, sans-serif;
          font-size: 14px;
          color: var(--foreground);
        }

        .en-intro-list li {
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
        }

        .en-intro-list li:last-child {
          padding-bottom: 0;
          border-bottom: 0;
        }

        .en-article-preview {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 24px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
          color: inherit;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .en-article-preview:hover {
          opacity: 0.72;
        }

        .en-article-number {
          font-family: thmanyah-sans, sans-serif;
          font-size: 13px;
          color: var(--muted-foreground);
          padding-top: 7px;
        }

        .en-article-title {
          font-family: thmanyah-serif-display, serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 500;
          line-height: 1.3;
          margin: 0 0 10px;
          font-feature-settings: "salt" on;
        }

        .en-article-meta {
          font-family: thmanyah-sans, sans-serif;
          font-size: 13px;
          color: var(--muted-foreground);
          margin: 0;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .en-projects-preview {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .en-project-preview-link {
          color: inherit;
          text-decoration: none;
          display: block;
          border-radius: 18px;
          transition: transform 0.2s, opacity 0.2s;
        }

        .en-project-preview-link:hover {
          transform: translateY(-2px);
          opacity: 0.96;
        }

        @supports not (animation-timeline: view()) {
          .en-real-site,
          .en-home-section {
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .en-hero-inner,
          .en-scroll-cue,
          .en-real-site,
          .en-home-section {
            animation: none;
          }
        }

        @media (max-width: 760px) {
          .en-real-site {
            border-radius: 24px 24px 0 0;
          }

          .en-section-header {
            flex-direction: column;
            align-items: start;
          }

          .en-projects-preview {
            grid-template-columns: 1fr;
          }

          .en-article-preview {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>

      <section className="en-hero-section" aria-label="Hero" dir="ltr">
        <div className="en-hero-inner">
          <h1
            style={{
              fontFamily: '"thmanyah-serif-display", serif',
              fontSize: "clamp(42px, 8vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--foreground)",
              margin: "0 0 8px 0",
              fontFeatureSettings: '"salt" on',
            }}
          >
            Riyadh Al-Shehri
          </h1>

          <h2
            style={{
              fontFamily: '"thmanyah-serif-display", serif',
              fontSize: "clamp(18px, 2.8vw, 24px)",
              fontWeight: 400,
              color: "var(--muted-foreground)",
              margin: 0,
              letterSpacing: "0.01em",
            }}
          >
            Software Engineer
          </h2>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {links.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  borderRadius: 999,
                  border: "1px solid var(--border)",
                  backgroundColor: "transparent",
                  color: "var(--muted-foreground)",
                  fontSize: 14,
                  fontFamily: '"thmanyah-sans", sans-serif',
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--muted-foreground)";
                }}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>

        <a className="en-scroll-cue" href="#en-site">
          <ArrowDown size={14} />
          <span>Explore</span>
        </a>
      </section>

      <section id="en-site" className="en-real-site" aria-label="Website" dir="ltr">
        <SiteHeader />

        <main className="en-home-content">
          <section className="en-home-section">
            <div className="en-section-header">
              <div>
                <h2 className="en-section-title">What I build and learn</h2>
              </div>
            </div>

            <div className="en-intro-card">
              <ul className="en-intro-list">
                <li>Software Engineering Student</li>
                <li>Backend & Systems Learning Path</li>
                <li>Arabic-first technical writing</li>
              </ul>
            </div>
          </section>

          <section className="en-home-section">
            <div className="en-section-header">
              <div>
                <h2 className="en-section-title">Articles</h2>
              </div>

              <Link className="en-section-link" href="/articles">
                All articles &rarr;
              </Link>
            </div>

            <div>
              {articles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="en-article-preview"
                >
                  <span className="en-article-number">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="en-article-title">{article.title}</h3>
                    <p className="en-article-meta">
                      <span>{article.date}</span>
                      <span>
                        {article.readingMinutes} min read
                      </span>
                      <span>{article.lang === "ar" ? "Arabic" : "English"}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="en-home-section" style={{ marginBottom: 0 }}>
            <div className="en-section-header">
              <div>
                <h2 className="en-section-title">Projects</h2>
              </div>

              <Link className="en-section-link" href="/projects">
                All projects &rarr;
              </Link>
            </div>

            <div className="en-projects-preview">
              {projects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/projects#${project.slug}`}
                  className="en-project-preview-link"
                  aria-label={`View project: ${project.name}`}
                >
                  <ProjectCard project={project} index={index} />
                </Link>
              ))}
            </div>
          </section>
        </main>
      </section>

      <ScrollToTop />
    </>
  );
}
