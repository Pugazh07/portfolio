import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { education, experience } from "@/lib/resume";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <Reveal>
        <SectionHeading index="02" title="Experience" />
      </Reveal>

      <div className="relative max-w-2xl">
        <span
          aria-hidden
          className="absolute left-0 top-0 h-40 w-px bg-gradient-to-b from-[var(--accent)] to-transparent"
        />
        <ol className="space-y-10 border-l border-[var(--border)]">
          {experience.map((job, i) => (
            <Reveal delay={i * 100} key={job.company}>
              <li className="group relative pl-8">
                <span
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[var(--accent)] ${
                    i === 0 ? "pulse-dot" : ""
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-[var(--text-strong)]">
                    {job.role}{" "}
                    <span className="text-[var(--accent)]">· {job.company}</span>
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-xs ${
                      i === 0
                        ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                        : "text-[var(--text-faint)]"
                    }`}
                  >
                    {job.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-[var(--text-muted)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-faint)] transition-colors group-hover:bg-[var(--accent)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={experience.length * 100}>
        <div className="mt-10 max-w-2xl border-t border-[var(--border)] pt-6">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-faint)]">
            Education
          </p>
          <p className="mt-2 text-sm text-[var(--text)]">
            {education.degree} — {education.school}
          </p>
          <p className="font-mono text-xs text-[var(--text-faint)]">{education.period}</p>
        </div>
      </Reveal>
    </section>
  );
}
