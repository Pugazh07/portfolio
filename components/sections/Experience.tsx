import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { education, experience } from "@/lib/resume";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <Reveal>
        <SectionHeading index="02" title="Experience" />
      </Reveal>

      <ol className="max-w-2xl space-y-10 border-l border-slate-800">
        {experience.map((job, i) => (
          <Reveal delay={i * 100} key={job.company}>
            <li className="relative pl-8">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-teal-400 bg-slate-950" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-slate-100">
                  {job.role}{" "}
                  <span className="text-teal-300">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-slate-500">
                  {job.period}
                </span>
              </div>
              <ul className="mt-3 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm leading-relaxed text-slate-400"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={experience.length * 100}>
        <div className="mt-10 max-w-2xl border-t border-slate-800 pt-6">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
            Education
          </p>
          <p className="mt-2 text-sm text-slate-300">
            {education.degree} — {education.school}
          </p>
          <p className="font-mono text-xs text-slate-500">{education.period}</p>
        </div>
      </Reveal>
    </section>
  );
}
