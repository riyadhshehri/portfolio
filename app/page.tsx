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
  { icon: <FileText size={16} />, label: "السيرة الذاتية", href: theme.social.cv },
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
      aria-label="العودة إلى الأعلى"
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

export default function Home() {
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

        .hero-section {
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

        .hero-section::after {
          content: "";
          position: absolute;
          inset: auto 0 0 0;
          height: 220px;
          background: linear-gradient(to top, var(--background), transparent);
          pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          animation: heroEnter 900ms ease both;
        }

        @keyframes heroEnter {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .scroll-cue {
          position: absolute;
          bottom: 28px;
          right: 50%;
          transform: translateX(50%);
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
          animation: cueFloat 1.8s ease-in-out infinite;
        }

        @keyframes cueFloat {
          0%, 100% {
            transform: translateX(50%) translateY(0);
          }
          50% {
            transform: translateX(50%) translateY(8px);
          }
        }

        .scroll-cue:hover {
          opacity: 1;
          color: var(--foreground);
        }

        .real-site {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          margin-top: -1px;
          border-top: 1px solid var(--border);
          border-radius: 32px 32px 0 0;
          background:
            radial-gradient(circle at top right, color-mix(in srgb, var(--accent) 10%, transparent), transparent 30rem),
            var(--background);
          box-shadow: 0 -24px 80px rgba(0, 0, 0, 0.18);
          animation: siteReveal linear both;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        @keyframes siteReveal {
          from {
            opacity: 0.72;
            transform: translateY(56px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .home-content {
          max-width: 980px;
          margin: 0 auto;
          padding: 88px 24px 120px;
        }

        .home-section {
          margin-bottom: 96px;
          animation: sectionFade linear both;
          animation-timeline: view();
          animation-range: entry 0% cover 32%;
        }

        @keyframes sectionFade {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin-bottom: 32px;
        }

        .section-title {
          font-family: thmanyah-serif-display, serif;
          font-size: clamp(34px, 5vw, 54px);
          font-weight: 700;
          line-height: 1.1;
          margin: 0;
          font-feature-settings: "salt" on;
        }

        .section-link {
          color: var(--muted-foreground);
          text-decoration: none;
          font-family: thmanyah-sans, sans-serif;
          font-size: 14px;
          white-space: nowrap;
          transition: color 0.2s;
        }

        .section-link:hover {
          color: var(--accent);
        }

        .mukhtar-label {
          font-family: thmanyah-sans, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: var(--muted-foreground);
          margin: 0 0 4px;
        }

        .mukhtar-list {
          list-style: none;
          padding: 0;
          margin: 0;
          border-top: 1px solid var(--border);
        }

        .mukhtar-row {
          display: grid;
          grid-template-columns: 36px 1fr auto;
          align-items: center;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
          color: inherit;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .mukhtar-row:hover {
          opacity: 0.72;
        }

        .mukhtar-row:hover .mukhtar-title {
          color: var(--accent);
        }

        .mukhtar-num {
          font-family: thmanyah-sans, sans-serif;
          font-size: 13px;
          color: var(--accent);
          opacity: 0.7;
        }

        .mukhtar-title {
          font-family: thmanyah-serif-display, serif;
          font-size: clamp(18px, 2.4vw, 24px);
          font-weight: 500;
          line-height: 1.3;
          margin: 0;
          font-feature-settings: "salt" on;
          color: var(--foreground);
          transition: color 0.2s;
        }

        .mukhtar-type {
          font-family: thmanyah-sans, sans-serif;
          font-size: 12px;
          color: var(--muted-foreground);
          white-space: nowrap;
        }

        @media (max-width: 760px) {
          .mukhtar-row {
            grid-template-columns: 28px 1fr auto;
            gap: 12px;
          }
        }

        .article-preview {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 24px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
          color: inherit;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .article-preview:hover {
          opacity: 0.72;
        }

        .article-number {
          font-family: thmanyah-sans, sans-serif;
          font-size: 13px;
          color: var(--muted-foreground);
          padding-top: 7px;
        }

        .article-title {
          font-family: thmanyah-serif-display, serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 500;
          line-height: 1.3;
          margin: 0 0 10px;
          font-feature-settings: "salt" on;
        }

        .article-meta {
          font-family: thmanyah-sans, sans-serif;
          font-size: 13px;
          color: var(--muted-foreground);
          margin: 0;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .projects-preview {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .project-preview-link {
          color: inherit;
          text-decoration: none;
          display: block;
          border-radius: 18px;
          cursor: pointer;
          transition: transform 0.2s, opacity 0.2s;
        }

        .project-preview-link:hover {
          transform: translateY(-2px);
          opacity: 0.96;
        }

        .project-preview-link:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 4px;
        }

        @supports not (animation-timeline: view()) {
          .real-site,
          .home-section {
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .hero-inner,
          .scroll-cue,
          .real-site,
          .home-section {
            animation: none;
          }
        }

        @media (max-width: 760px) {
          .real-site {
            border-radius: 24px 24px 0 0;
          }

          .section-header {
            flex-direction: column;
            align-items: start;
          }

          .projects-preview {
            grid-template-columns: 1fr;
          }

          .article-preview {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>

      <section className="hero-section" aria-label="Hero">
        <div className="hero-inner">
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
            رياض الشهري
          </h1>

          <h2
            style={{
              fontFamily: '"thmanyah-serif-display", serif',
              fontSize: "clamp(18px, 2.8vw, 24px)",
              fontWeight: 400,
              color: "var(--muted-foreground)",
              margin: 0,
              letterSpacing: "0.01em",
              direction: "ltr",
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

        <a className="scroll-cue" href="#site">
          <ArrowDown size={14} />
          <span>استكشف الموقع</span>
        </a>
      </section>

      <section id="site" className="real-site" aria-label="Website">
        <SiteHeader />

        <main className="home-content">
          <section className="home-section">
            <div className="section-header">
              <div>
                <h2 className="section-title">ما أبنيه وأتعلمه</h2>
              </div>
            </div>

            <div>
              <p className="mukhtar-label">مختارات</p>
              <ul className="mukhtar-list">
                <li>
                  <Link href="/articles/unix-roots-linux-engineers-governments" className="mukhtar-row">
                    <span className="mukhtar-num">01</span>
                    <h3 className="mukhtar-title">جذور يونكس: لماذا يظل لينكس خيار المهندسين والدول؟</h3>
                    <span className="mukhtar-type">مقال</span>
                  </Link>
                </li>
                <li>
                  <Link href="/projects/personal-portfolio" className="mukhtar-row">
                    <span className="mukhtar-num">02</span>
                    <h3 className="mukhtar-title">الموقع الشخصي</h3>
                    <span className="mukhtar-type">مشروع</span>
                  </Link>
                </li>
                <li>
                  <Link href="/cv" className="mukhtar-row">
                    <span className="mukhtar-num">03</span>
                    <h3 className="mukhtar-title">السيرة الذاتية</h3>
                    <span className="mukhtar-type">قريبًا</span>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section className="home-section">
            <div className="section-header">
              <div>
                <h2 className="section-title">المقالات</h2>
              </div>

              <Link className="section-link" href="/articles">
                كل المقالات ←
              </Link>
            </div>

            <div>
              {articles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="article-preview"
                >
                  <span className="article-number">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-meta">
                      <span>{article.date}</span>
                      <span>
                        {article.readingMinutes} {article.lang === "ar" ? "دقائق" : "min read"}
                      </span>
                      <span>{article.lang === "ar" ? "عربي" : "English"}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="home-section" style={{ marginBottom: 0 }}>
            <div className="section-header">
              <div>
                <h2 className="section-title">المشاريع</h2>
              </div>

              <Link className="section-link" href="/projects">
                كل المشاريع ←
              </Link>
            </div>

            <div className="projects-preview">
              {projects.map((project, index) => (
                <div
                  key={project.slug}
                  className="project-preview-link"
                  role="link"
                  tabIndex={0}
                  aria-label={`عرض مشروع: ${project.name}`}
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest("a")) return;
                    window.location.href = `/projects/${project.slug}`;
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      window.location.href = `/projects/${project.slug}`;
                    }
                  }}
                >
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </section>
        </main>
      </section>

      <ScrollToTop />
    </>
  );
}
