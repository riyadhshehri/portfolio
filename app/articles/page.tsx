import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getArticlesSorted, type Article } from "@/lib/articles";

export const metadata = {
  title: "المقالات",
  description: "مقالات في هندسة البرمجيات والكتابة والتقنية.",
};

const ARABIC_MONTHS = [
  "يناير","فبراير","مارس","أبريل","مايو","يونيو",
  "يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",
];

function formatDateAr(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${parseInt(day)} ${ARABIC_MONTHS[parseInt(month) - 1]} ${year}`;
}

function formatReadingTime(minutes: number, lang: Article["lang"]): string {
  if (lang === "ar") return `${minutes} دقائق قراءة`;
  return `${minutes} min read`;
}

export default function ArticlesPage() {
  const articles = getArticlesSorted();

  return (
    <>
      <style>{`
        .articles-main {
          padding-top: 80px;
          padding-bottom: 120px;
          padding-inline: 24px;
          max-width: 820px;
          margin: 0 auto;
        }
        .article-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          padding: 32px 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          color: inherit;
          transition: opacity 0.2s;
        }
        .article-row:hover { opacity: 0.7; }
        @media (max-width: 640px) {
          .article-row { flex-direction: column; gap: 16px; }
          .article-meta { flex-direction: row !important; gap: 12px !important; align-items: center; }
        }
      `}</style>

      <SiteHeader />

      <main className="articles-main">
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
            المقالات
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
            مقالات في هندسة البرمجيات، الكتابة، والتقنية.
          </p>
        </header>

        <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {articles.map((article, index) => (
            <li key={article.slug}>
              <Link href={`/articles/${article.slug}`} className="article-row">

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "thmanyah-sans, sans-serif",
                      fontSize: 13,
                      color: "var(--muted-foreground)",
                      marginBottom: 8,
                    }}
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <h2
                    style={{
                      fontFamily: "thmanyah-serif-display, serif",
                      fontSize: "clamp(22px, 3vw, 30px)",
                      fontWeight: 500,
                      color: "var(--foreground)",
                      margin: "0 0 10px 0",
                      lineHeight: 1.3,
                      fontFeatureSettings: '"salt" on',
                    }}
                  >
                    {article.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "thmanyah-serif-text, serif",
                      fontSize: 15,
                      color: "var(--muted-foreground)",
                      lineHeight: 1.6,
                      margin: 0,
                      maxWidth: 580,
                    }}
                  >
                    {article.excerpt}
                  </p>
                </div>

                <div
                  className="article-meta"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 6,
                    fontFamily: "thmanyah-sans, sans-serif",
                    fontSize: 12,
                    color: "var(--muted-foreground)",
                    minWidth: 120,
                  }}
                >
                  <span>{formatDateAr(article.date)}</span>
                  <span>{formatReadingTime(article.readingMinutes, article.lang)}</span>
                  <span
                    style={{
                      padding: "2px 8px",
                      fontSize: 10,
                      borderRadius: 999,
                      border: "1px solid var(--border)",
                    }}
                  >
                    {article.lang === "ar" ? "العربية" : "English"}
                  </span>
                </div>

              </Link>
            </li>
          ))}
        </ol>
      </main>

      <SiteFooter />
    </>
  );
}
