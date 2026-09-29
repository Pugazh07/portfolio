"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/resume";
import {
  CloseIcon,
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
} from "@/components/icons";
import ThemeToggle from "@/components/ThemeToggle";

export default function Sidebar() {
  const [active, setActive] = useState<string>(nav[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive(topMost.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeAndScroll = () => setOpen(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg)]/90 px-6 py-4 backdrop-blur lg:hidden">
        <a href="#top" className="font-mono text-sm text-[var(--text-strong)]">
          {profile.initials}
          <span className="text-[var(--accent)]">.</span>
        </a>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative h-6 w-6 text-[var(--text)]"
          >
            <MenuIcon
              className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <CloseIcon
              className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="menu-overlay fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-[var(--bg)]/95 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col items-center gap-6">
            {nav.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeAndScroll}
                style={{ animationDelay: `${80 + i * 60}ms` }}
                className={`fade-up font-mono text-lg transition-colors hover:text-[var(--accent)] ${
                  active === item.id ? "text-[var(--accent)]" : "text-[var(--text-strong)]"
                }`}
              >
                <span className="mr-2 text-[var(--accent)]">
                  0{i + 1}.
                </span>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${80 + nav.length * 60}ms` }}
            className="fade-up btn-shine mt-4 flex items-center gap-2 rounded-full border border-[var(--accent)]/60 px-5 py-2 font-mono text-sm text-[var(--accent)]"
          >
            <ExternalLinkIcon className="h-4 w-4" />
            Resume
          </a>
        </div>
      )}

      {/* Desktop sidebar */}
      <header
        id="top"
        className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[26rem] lg:flex-col lg:justify-between lg:px-16 lg:py-20 xl:px-24"
      >
        <div>
          <div
            className="fade-up flex items-start justify-between gap-4"
            style={{ animationDelay: "0ms" }}
          >
            <h1 className="text-gradient text-3xl font-bold tracking-tight xl:text-4xl">
              {profile.name}
            </h1>
            <ThemeToggle className="mt-1 shrink-0" />
          </div>
          <p
            className="fade-up mt-3 text-lg font-medium text-[var(--accent)]"
            style={{ animationDelay: "200ms" }}
          >
            {profile.title}
          </p>
          <p
            className="fade-up mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]"
            style={{ animationDelay: "300ms" }}
          >
            {profile.tagline}
          </p>

          <nav className="fade-up mt-14" style={{ animationDelay: "400ms" }}>
            <ul className="flex flex-col gap-4">
              {nav.map((item, i) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group flex items-center gap-3"
                    >
                      <span
                        className={`h-px transition-all duration-300 ease-out ${
                          isActive
                            ? "w-14 bg-[var(--accent)]"
                            : "w-5 bg-[var(--border-strong)] group-hover:w-10 group-hover:bg-[var(--text-muted)]"
                        }`}
                      />
                      <span
                        className={`font-mono text-xs tracking-widest transition-colors ${
                          isActive
                            ? "text-[var(--accent)]"
                            : "text-[var(--text-faint)] group-hover:text-[var(--text)]"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`text-sm font-medium transition-colors ${
                          isActive
                            ? "text-[var(--text-strong)]"
                            : "text-[var(--text-faint)] group-hover:text-[var(--text-strong)]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: "500ms" }}
            className="fade-up btn-shine group mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
          >
            <ExternalLinkIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            View Resume
          </a>
        </div>

        <div
          className="fade-up flex items-center gap-5 text-[var(--text-muted)]"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-all duration-200 hover:-translate-y-1 hover:text-[var(--accent)]"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-all duration-200 hover:-translate-y-1 hover:text-[var(--accent)]"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-all duration-200 hover:-translate-y-1 hover:text-[var(--accent)]"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </header>
    </>
  );
}
