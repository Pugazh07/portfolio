import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { profile, projects } from "@/lib/resume";
import { ExternalLinkIcon } from "@/components/icons";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <Reveal>
        <SectionHeading index="04" title="Projects" />
      </Reveal>

      <div className="max-w-2xl space-y-4">
        {projects.map((project, i) => (
          <Reveal delay={i * 100} key={project.name}>
            <div className="spotlight-card group rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]/70 p-6 backdrop-blur-sm">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-[var(--text-strong)] transition-colors group-hover:text-[var(--accent)]">
                  {project.name}
                </h3>
                {"liveUrl" in project && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex shrink-0 items-center gap-1 rounded-full border border-[var(--accent)]/40 px-3 py-1 font-mono text-xs text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/10"
                  >
                    Live site
                    <ExternalLinkIcon className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--accent)]/10 px-3 py-1 font-mono text-xs text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={projects.length * 100}>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-sm text-[var(--accent)]"
          >
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
              More on GitHub
            </span>
            <ExternalLinkIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
