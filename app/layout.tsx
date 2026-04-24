// ─── استيراد الخطوط والأنماط والإعدادات ──────────────────────────────────────
import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { theme } from "@/theme.config";
import "./globals.css";

// ─── تحميل خطوط IBM Plex عبر next/font ───────────────────────────────────────
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

// ─── البيانات الوصفية للموقع ──────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(theme.site.url),
  title: {
    default: theme.site.nameAr,
    template: `%s — ${theme.site.nameAr}`,
  },
  description: theme.site.descriptionAr,
  keywords: ["رياض الشهري", "Software Engineering Student", "هندسة برمجيات", "Backend"],
  authors: [{ name: theme.site.name, url: theme.site.url }],
  openGraph: {
    title: theme.site.nameAr,
    description: theme.site.descriptionAr,
    url: theme.site.url,
    siteName: theme.site.nameAr,
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: theme.site.nameAr,
    description: theme.site.descriptionAr,
  },
};

// ─── التخطيط الجذري ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body
        style={{
          fontFamily: '"thmanyah-sans", "Noto Naskh Arabic", system-ui, sans-serif',
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
