"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/articles", label: "المقالات" },
  { href: "/projects", label: "المشاريع" },
];

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <style>{`
        .site-header { padding: 0 32px; }
        .site-header-nav { gap: 28px; }
        @media (max-width: 600px) {
          .site-header { padding: 0 20px; }
          .site-header-nav { gap: 20px; }
        }
      `}</style>

      <header
        className="site-header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "var(--background)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--border)",
          fontFamily: "thmanyah-sans, sans-serif",
        }}
      >
        <Link
          href="/#top"
          style={{
            fontFamily: "thmanyah-serif-display, serif",
            fontSize: 18,
            fontWeight: 500,
            color: "var(--foreground)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
          }}
          onFocus={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
          }}
          onBlur={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
          }}
        >
          رياض الشهري
        </Link>

        <nav
          className="site-header-nav"
          style={{ display: "flex", flexDirection: "row" }}
        >
          {navLinks.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: 14,
                  color: active ? "var(--accent)" : "var(--muted-foreground)",
                  fontWeight: active ? 500 : 400,
                  textDecoration: "none",
                  padding: "6px 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = active
                    ? "var(--accent)"
                    : "var(--muted-foreground)";
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = active
                    ? "var(--accent)"
                    : "var(--muted-foreground)";
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <ThemeToggle />
      </header>
    </>
  );
}
