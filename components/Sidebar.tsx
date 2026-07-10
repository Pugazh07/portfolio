"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/resume";
import {
  CloseIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
} from "@/components/icons";

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

  const closeAndScroll = () => setOpen(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-6 py-4 backdrop-blur lg:hidden">
        <a href="#top" className="font-mono text-sm text-slate-200">
          {profile.initials}
          <span className="text-teal-400">.</span>
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-slate-300"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-slate-950/98 backdrop-blur lg:hidden">
          <nav className="flex flex-col items-center gap-6">
            {nav.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeAndScroll}
                className="font-mono text-lg text-slate-200"
              >
                <span className="mr-2 text-teal-400">
                  0{i + 1}.
                </span>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.resumeUrl}
            download
            className="mt-4 flex items-center gap-2 rounded border border-teal-400/60 px-4 py-2 font-mono text-sm text-teal-300"
          >
            <DownloadIcon className="h-4 w-4" />
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
          <h1 className="text-3xl font-bold tracking-tight text-slate-100 xl:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-teal-400">
            {profile.title}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

          <nav className="mt-14">
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
                        className={`h-px transition-all ${
                          isActive
                            ? "w-10 bg-teal-400"
                            : "w-5 bg-slate-700 group-hover:w-10 group-hover:bg-slate-400"
                        }`}
                      />
                      <span
                        className={`font-mono text-xs tracking-widest transition-colors ${
                          isActive
                            ? "text-teal-300"
                            : "text-slate-500 group-hover:text-slate-300"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`text-sm font-medium transition-colors ${
                          isActive
                            ? "text-slate-100"
                            : "text-slate-500 group-hover:text-slate-200"
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
            download
            className="mt-10 inline-flex items-center gap-2 rounded border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-teal-400/60 hover:text-teal-300"
          >
            <DownloadIcon className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        <div className="flex items-center gap-5 text-slate-400">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-teal-300"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-teal-300"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-teal-300"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </header>
    </>
  );
}
