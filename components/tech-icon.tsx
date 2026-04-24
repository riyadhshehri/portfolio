"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { techRegistry } from "@/lib/tech-icons";
import type { TechKey } from "@/lib/projects";

interface Props {
  techKey: TechKey;
  size?: number;
}

export function TechIcon({ techKey, size = 20 }: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const meta = techRegistry[techKey];
  const isDark = mounted && resolvedTheme === "dark";
  const color = meta.invertOnDark && isDark ? "#ffffff" : meta.color;

  return (
    <span
      title={meta.label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.15s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLSpanElement).style.transform = "scale(1.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLSpanElement).style.transform = "scale(1)";
      }}
    >
      <meta.Icon size={size} color={color} />
    </span>
  );
}
