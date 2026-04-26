"use client";

// ─── زر تبديل الوضع الفاتح/الداكن ────────────────────────────────────────────
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // انتظر التحميل لتجنب عدم تطابق الهيدريشن
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div style={{ width: 36, height: 36 }} />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "التبديل إلى الوضع الفاتح" : "التبديل إلى الوضع الداكن"}
      style={{
        width: 36,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        border: "1px solid var(--border)",
        background: "transparent",
        color: "var(--muted-foreground)",
        cursor: "pointer",
        transition: "background 0.2s, color 0.2s, border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = "transparent";
        el.style.color = "var(--accent)";
        el.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = "transparent";
        el.style.color = "var(--muted-foreground)";
        el.style.borderColor = "var(--border)";
      }}
      onFocus={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = "transparent";
        el.style.color = "var(--accent)";
        el.style.borderColor = "var(--accent)";
      }}
      onBlur={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = "transparent";
        el.style.color = "var(--muted-foreground)";
        el.style.borderColor = "var(--border)";
      }}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
