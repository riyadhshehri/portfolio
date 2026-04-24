import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { theme } from "@/theme.config";

export const metadata: Metadata = {
  title: "السيرة الذاتية",
  description:
    "السيرة الذاتية لرياض الشهري — طالب هندسة برمجيات في جامعة أم القرى.",
};

const upcomingItems = [
  "التعليم والمسار الأكاديمي",
  "المشاريع التقنية المختارة",
  "المهارات والأدوات",
  "الاهتمامات المهنية",
  "تحميل نسخة ATS بصيغة PDF",
];

export default function CVPage() {
  return (
    <>
      <style>{`
        .cv-main {
          padding-top: 80px;
          padding-bottom: 120px;
          padding-inline: 24px;
          max-width: 720px;
          margin: 0 auto;
          text-align: right;
        }
        .cv-social-link {
          display: inline-flex;
          align-items: center;
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--muted-foreground);
          font-family: thmanyah-sans, sans-serif;
          font-size: 14px;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .cv-social-link:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .cv-upcoming-item {
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
          font-family: thmanyah-serif-text, serif;
          font-size: 15px;
          color: var(--muted-foreground);
          line-height: 1.6;
        }
        .cv-upcoming-item:first-child {
          border-top: 1px solid var(--border);
        }
      `}</style>

      <SiteHeader />

      <main className="cv-main">
        <header style={{ marginBottom: 48 }}>
          <h1
            style={{
              fontFamily: "thmanyah-serif-display, serif",
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 700,
              fontFeatureSettings: '"salt" on',
              margin: "0 0 16px 0",
              lineHeight: 1.1,
              color: "var(--foreground)",
            }}
          >
            السيرة الذاتية
          </h1>
          <p
            style={{
              fontFamily: "thmanyah-serif-text, serif",
              fontSize: 16,
              color: "var(--muted-foreground)",
              margin: 0,
              lineHeight: 1.8,
              maxWidth: 560,
            }}
          >
            أعمل حاليًا على إعداد نسخة أدق من سيرتي المهنية. ستتضمن هذه الصفحة
            قريبًا ملخصًا منظّمًا للتعليم، المشاريع، المهارات، وروابط التحميل
            بصيغة مناسبة للقراءة البشرية ونسخة ATS للتقديمات الرسمية.
          </p>
        </header>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 72,
          }}
        >
          <a
            href={theme.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-social-link"
          >
            GitHub
          </a>
          <a
            href={theme.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-social-link"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${theme.social.email}`}
            className="cv-social-link"
          >
            البريد الإلكتروني
          </a>
        </div>

        <section>
          <h2
            style={{
              fontFamily: "thmanyah-serif-display, serif",
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 500,
              fontFeatureSettings: '"salt" on',
              color: "var(--accent)",
              margin: "0 0 0 0",
            }}
          >
            ما الذي سيُضاف هنا؟
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {upcomingItems.map((item) => (
              <li key={item} className="cv-upcoming-item">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
