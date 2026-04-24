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
    slug: "al-aranjiyya-in-writing",
    title: "العَرنَجِيّة: كيف تتسلل الإنجليزية إلى جملنا العربية",
    excerpt: "قراءة في ظاهرة لغوية ابتلعت الكتابة العربية المعاصرة — ومحاولة لاختبارها.",
    date: "2026-04-12",
    readingMinutes: 8,
    lang: "ar",
    tags: ["لغة", "كتابة"],
  },
  {
    slug: "why-backend-first",
    title: "لماذا أبدأ بـ Backend قبل أي شيء",
    excerpt: "فلسفة شخصية في اختيار مسار المهندس في سنواته الأولى.",
    date: "2026-03-28",
    readingMinutes: 5,
    lang: "ar",
    tags: ["هندسة", "مسار مهني"],
  },
  {
    slug: "notion-as-second-brain",
    title: "Notion as a Second Brain for Engineers",
    excerpt: "How I restructured my technical notes into a system that actually compounds.",
    date: "2026-03-10",
    readingMinutes: 6,
    lang: "en",
    tags: ["productivity", "tools"],
  },
  {
    slug: "arabic-typography-on-web",
    title: "طباعة عربية على الويب — ما تعلّمته من ثمانية",
    excerpt: "كيف يبني المصممون تجربة قراءة عربية تنافس أفضل المواقع الإنجليزية.",
    date: "2026-02-22",
    readingMinutes: 7,
    lang: "ar",
    tags: ["تصميم", "ويب"],
  },
  {
    slug: "leetcode-discipline",
    title: "The Quiet Discipline of Daily LeetCode",
    excerpt: "Not for interviews — for thinking. One problem a day, for a year.",
    date: "2026-02-05",
    readingMinutes: 4,
    lang: "en",
    tags: ["algorithms", "discipline"],
  },
];

// ─── دوال مساعدة ──────────────────────────────────────────────────────────────
export function getArticlesSorted(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
