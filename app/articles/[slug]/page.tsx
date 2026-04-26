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

const bodyStyle: React.CSSProperties = {
  fontFamily: "thmanyah-serif-text, serif",
  fontSize: "clamp(17px, 2.5vw, 19px)",
  lineHeight: 2,
  color: "var(--foreground)",
  margin: "0 0 24px 0",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "thmanyah-serif-display, serif",
  fontSize: "clamp(20px, 3vw, 24px)",
  fontWeight: 700,
  color: "var(--foreground)",
  margin: "40px 0 16px 0",
  lineHeight: 1.4,
};

const listStyle: React.CSSProperties = {
  fontFamily: "thmanyah-serif-text, serif",
  fontSize: "clamp(17px, 2.5vw, 19px)",
  lineHeight: 2,
  color: "var(--foreground)",
  margin: "0 0 24px 0",
  paddingRight: 24,
  paddingLeft: 0,
  listStylePosition: "outside",
};

function UnixRootsContent() {
  return (
    <>
      <p style={bodyStyle}>
        تعتمد المعامل الجامعية لمادة &quot;أنظمة التشغيل&quot; على بيئة لينكس (Linux)، وبما أنني أستخدم جهاز{" "}
        <strong>MacBook Pro</strong>، فقد دفعني ذلك لتثبيت محاكي <strong> UTM </strong> لتشغيل توزيعة أوبنتو.
        واجهتُ تساؤلاً في البداية: لماذا أحتاج لمحاكاة نظام كامل بينما يبدو &quot;تيرمنال&quot; الماك مألوفاً
        ويقبل أغلب الأوامر؟
      </p>

      <h2 style={headingStyle}>التمايز التقني: عائلة &quot;Unix&quot;</h2>
      <p style={bodyStyle}>
        تكمن الإجابة في الجذور التقنية المشتركة؛ فنظام الماك مبني في جوهره على نواة <strong>Darwin</strong>{" "}
        المشتقة من <strong>BSD</strong>، وهو وريث مباشر لنظام &quot;يونكس&quot; (Unix) الأصلي. أما لينكس، فهو بناء
        مستقل &quot;شبيه بيونكس&quot; (Unix-like)، يحاكي منطقه وأوامره دون الارتهان لكوده المصدري. هذا الترابط
        التاريخي هو ما يمنح مبرمج الماك شعوراً بالألفة مع &quot;التيرمنال&quot;، لكنه لا يغني عن بيئة لينكس
        الصرفة عند التعامل مع موارد النظام العميقة (Kernel) المطلوبة في المعامل.
      </p>

      <h2 style={headingStyle}>من السيطرة الفردية إلى السيادة الوطنية</h2>
      <p style={bodyStyle}>
        لعلنا سمعنا مؤخراً عن هجرة حكومات كبرى —مثل <strong>فرنسا وألمانيا</strong>— نحو أنظمة لينكس
        والبرمجيات مفتوحة المصدر. هذا التوجه يتجاوز فكرة &quot;تغيير نظام التشغيل&quot;؛ فهو سعيٌ لامتلاك
        السيادة الرقمية وفك الارتباط بالشركات التي تفرض أنظمة مغلقة لا نعرف يقيناً ما يدور في كواليسها.
      </p>
      <p style={{ ...bodyStyle, marginBottom: 12 }}>وهذا التحول تحركه ثلاثة دوافع أساسية:</p>
      <ul style={listStyle}>
        <li style={{ marginBottom: 12 }}>
          <strong>أمنٌ مكشوف:</strong> القدرة على فحص الكود المصدري لضمان خلو النظام من &quot;أبواب خلفية&quot;
          للتجسس؛ وهي ميزة مستحيلة في الأنظمة المغلقة.
        </li>
        <li style={{ marginBottom: 12 }}>
          <strong>استقلالٌ تقني:</strong> التحرر من تبعية الشركات الكبرى، وضمان تشغيل الأنظمة الحيوية للدولة
          بعيداً عن أي ضغوط أو قيود خارجية.
        </li>
        <li style={{ marginBottom: 12 }}>
          <strong>خصوصية مطلقة:</strong> منح الدولة التحكم الكامل في تدفق بياناتها، وإمكانية إغلاق التتبع
          (Telemetry) نهائياً.
        </li>
      </ul>

      <h2 style={headingStyle}>الخلاصة</h2>
      <p style={bodyStyle}>
        سواء كان الهدف تنفيذ تمرين في معمل الجامعة أو حماية أسرار دولة، يظل &quot;لينكس&quot; هو المعيار العالمي
        للسيادة الرقمية؛ فالحرية في عالم التقنية تبدأ بامتلاك &quot;النواة&quot; والقدرة على التحكم في كل سطر كود.
      </p>
    </>
  );
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
          maxWidth: 760,
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
            margin: "0 0 32px 0",
            lineHeight: 1.3,
          }}
        >
          {article.title}
        </h1>

        {slug === "unix-roots-linux-engineers-governments" ? (
          <UnixRootsContent />
        ) : (
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
        )}
      </main>

      <SiteFooter />
    </>
  );
}
