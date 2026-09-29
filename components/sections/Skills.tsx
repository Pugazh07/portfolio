import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/lib/resume";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <Reveal>
        <SectionHeading index="03" title="Skills" />
      </Reveal>

      <div className="grid max-w-2xl gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal delay={i * 80} key={group.title}>
            <div className="spotlight-card h-full rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]/70 p-5 backdrop-blur-sm">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--text-strong)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-[var(--border-strong)] px-3 py-1 font-mono text-xs text-[var(--text-muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/60 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
