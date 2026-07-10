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
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-6 transition-colors hover:border-teal-400/40">
              <h3 className="text-lg font-semibold text-slate-100">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 px-3 py-1 font-mono text-xs text-slate-400"
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
            className="inline-flex items-center gap-2 font-mono text-sm text-teal-300 transition-colors hover:text-teal-200"
          >
            More on GitHub
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
