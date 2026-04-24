import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <>
      <SiteHeader />
      <main
        style={{
          paddingTop: 80,
          paddingBottom: 120,
          paddingInline: 24,
          maxWidth: 820,
          margin: "0 auto",
          textAlign: "right",
        }}
      >
        <h1
          style={{
            fontFamily: "thmanyah-serif-display, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            color: "var(--foreground)",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
          }}
        >
          {article.title}
        </h1>
        <p
          style={{
            fontFamily: "thmanyah-serif-text, serif",
            fontSize: 16,
            color: "var(--muted-foreground)",
            margin: 0,
          }}
        >
          محتوى المقال قريباً.
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
