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
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="text-sm font-semibold text-slate-200">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 px-3 py-1 font-mono text-xs text-slate-400"
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
