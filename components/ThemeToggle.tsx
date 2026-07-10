"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={`flex items-center justify-center rounded border border-[var(--border-strong)] p-2 text-[var(--text)] transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent)] ${className}`}
    >
      <SunIcon className="theme-icon-sun h-4 w-4" />
      <MoonIcon className="theme-icon-moon h-4 w-4" />
    </button>
  );
}
