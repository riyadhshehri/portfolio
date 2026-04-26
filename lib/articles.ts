// ─── نوع المقال ───────────────────────────────────────────────────────────────
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  lang: "ar" | "en";
  tags: string[];
}

// ─── بيانات المقالات ──────────────────────────────────────────────────────────
export const articles: Article[] = [
  {
    slug: "unix-roots-linux-engineers-governments",
    title: "جذور يونكس: لماذا يظل لينكس خيار المهندسين والدول؟",
    excerpt: "تأمل قصير في الجذور المشتركة بين macOS ولينكس، ولماذا تتجه المؤسسات والدول إلى الأنظمة مفتوحة المصدر.",
    date: "2026-04-26",
    readingMinutes: 4,
    lang: "ar",
    tags: ["لينكس", "أنظمة التشغيل"],
  },
];

// ─── دوال مساعدة ──────────────────────────────────────────────────────────────
export function getArticlesSorted(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
