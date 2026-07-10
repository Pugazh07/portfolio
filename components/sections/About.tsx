import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { achievements, highlights, profile } from "@/lib/resume";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>

      <Reveal delay={100}>
        <p className="max-w-2xl text-base leading-relaxed text-slate-400">
          {profile.summary}
        </p>
      </Reveal>

      <Reveal delay={200}>
        <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-slate-800 bg-slate-900/40 p-4"
            >
              <dt className="text-xs text-slate-500">{item.label}</dt>
              <dd className="mt-1 font-mono text-2xl font-semibold text-teal-300">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={300}>
        <ul className="mt-8 max-w-2xl space-y-2">
          {achievements.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-slate-400"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
