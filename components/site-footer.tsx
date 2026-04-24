import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { theme } from "@/theme.config";

export function SiteFooter() {
  return (
    <>
      <style>{`
        .footer-icon-link {
          color: var(--muted-foreground);
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
        }
        .footer-icon-link:hover { color: var(--accent); }
        @media (max-width: 600px) {
          .footer-inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <footer
        style={{
          marginTop: 80,
          padding: "40px 32px",
          borderTop: "1px solid var(--border)",
          background: "var(--background)",
          fontFamily: "thmanyah-sans, sans-serif",
        }}
      >
        <div
          className="footer-inner"
          style={{
            maxWidth: 980,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <span style={{ fontSize: 13, color: "var(--muted-foreground)" }}>
            © 2026 رياض الشهري
          </span>

          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a
              href={theme.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={theme.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={`mailto:${theme.social.email}`}
              className="footer-icon-link"
              aria-label="البريد الإلكتروني"
            >
              <FaEnvelope size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
