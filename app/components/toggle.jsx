"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  if (!theme) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative inline-flex h-7 w-14 items-center
        rounded-full
        transition-colors
        ${isDark ? "bg-primary" : "bg-muted"}
      `}
      aria-label="Toggle theme"
    >
      {/* Moon icon (left) */}
      <Sun
        className={`
          absolute left-1 h-4 w-4
          transition-opacity
          ${isDark ? "text-amber-500" : "opacity-40"}
        `}
      />

      {/* Sun icon (right) */}
      <Moon
        className={`
          absolute right-1 h-4 w-4
          transition-opacity
          ${isDark ? "opacity-40" : "opacity-100"}
        `}
      />

      {/* Knob */}
      <span
        className={`
          inline-block h-5 w-5
          transform rounded-full
          bg-background
          transition-transform
          ${isDark ? "translate-x-7" : "translate-x-1"}
        `}
      />
    </button>
  );
}
