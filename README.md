# رياض الشهري — الموقع الشخصي

موقع شخصي لرياض الشهري — مقالات في هندسة البرمجيات والتقنية، ومشاريع برمجية، بالعربية والإنجليزية.

**رابط الموقع:** [riyadhshehri.com](https://riyadhshehri.com)

---

## التقنيات المستخدمة

| التقنية | الاستخدام |
|---|---|
| Next.js 15 + App Router | الإطار الرئيسي |
| TypeScript | لغة البرمجة |
| Tailwind CSS v4 | التنسيق |
| shadcn/ui | مكونات الواجهة |
| next-themes | Dark Mode |
| react-icons | أيقونات التقنيات |
| خطوط ثمانية | الطباعة العربية |
| IBM Plex | الطباعة الإنجليزية |

---

## المميزات

- تصميم RTL — العربية أولاً
- Dark Mode كامل مع حفظ تفضيل المستخدم
- خطوط ثمانية (Display / Text / Sans) للعناوين والنصوص
- صفحة مقالات بتصميم أدبي — قائمة رأسية مرقمة مع بيانات وصفية
- صفحة مشاريع — شبكة بطاقات مع أيقونات تقنية بألوانها الرسمية
- SEO كامل: title template، OpenGraph، Twitter Card
- تصميم متجاوب

---

## بيئة التطوير المحلية

```bash
# استنسخ المستودع
git clone https://github.com/riyadhshehri/portfolio.git
cd portfolio

# ثبّت الحزم
npm install

# انسخ ملف البيئة
cp .env.example .env.local

# ابدأ خادم التطوير
npm run dev
```

الموقع سيعمل على: `http://localhost:3000`

---

## بنية المشروع

```
portfolio/
├── app/
│   ├── layout.tsx                  # التخطيط الجذري + Metadata
│   ├── page.tsx                    # الصفحة الرئيسية (Hero sticky + content)
│   ├── articles/
│   │   ├── page.tsx                # قائمة المقالات
│   │   └── [slug]/page.tsx         # مقال فردي
│   └── projects/
│       └── page.tsx                # شبكة المشاريع
├── components/
│   ├── site-header.tsx             # الهيدر الثابت (inner pages only)
│   ├── site-footer.tsx             # الفوتر
│   ├── theme-toggle.tsx            # زر Dark Mode
│   ├── tech-icon.tsx               # أيقونة تقنية مفردة
│   └── project-card.tsx            # بطاقة المشروع
├── lib/
│   ├── articles.ts                 # بيانات المقالات + types
│   ├── projects.ts                 # بيانات المشاريع + types
│   └── tech-icons.ts               # registry الأيقونات التقنية
├── public/fonts/thmanyah/          # خطوط ثمانية (woff2)
├── theme.config.ts                 # المصدر الوحيد لإعدادات الموقع
└── app/globals.css                 # CSS variables + @font-face
```

---

## النشر على Vercel

```bash
# تأكد من أن الكود على GitHub أولاً
git push origin main
```

1. افتح [vercel.com/new](https://vercel.com/new) واربط المستودع
2. أضف متغيرات البيئة من `.env.example` في إعدادات المشروع
3. Vercel يكتشف Next.js تلقائياً ويبني المشروع عند كل push

**ربط دومين مخصص:**
- اشترِ الدومين (Hostinger, Namecheap, إلخ)
- في Vercel: Settings → Domains → أضف دومينك
- اتبع تعليمات DNS الخاصة بـ Vercel

---

## الترخيص

MIT License — استخدم الكود بحرية مع الإشارة إلى المصدر.

---

## المؤلف

**رياض الشهري** — طالب هندسة برمجيات، جامعة أم القرى

- LinkedIn: [riyadh-alshehri](https://www.linkedin.com/in/riyadh-alshehri-665482363)
- GitHub: [riyadhshehri](https://github.com/riyadhshehri)
- الموقع: [riyadhshehri.com](https://riyadhshehri.com)
