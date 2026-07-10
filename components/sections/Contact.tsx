import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/resume";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pb-32">
      <Reveal>
        <SectionHeading index="05" title="Contact" />
      </Reveal>

      <Reveal delay={100}>
        <p className="max-w-xl text-base leading-relaxed text-slate-400">
          I&apos;m always open to interesting conversations — new roles,
          collaborations, or just talking shop about frontend architecture and
          AI-assisted development. Reach out and I&apos;ll get back to you.
        </p>
      </Reveal>

      <Reveal delay={200}>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-teal-400/60 px-6 py-3 font-mono text-sm text-teal-300 transition-colors hover:bg-teal-400/10"
        >
          <MailIcon className="h-4 w-4" />
          Say Hello
        </a>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-10 flex flex-col gap-3 text-sm text-slate-400">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 transition-colors hover:text-teal-300"
          >
            <MailIcon className="h-4 w-4 shrink-0" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 transition-colors hover:text-teal-300"
          >
            <PhoneIcon className="h-4 w-4 shrink-0" />
            {profile.phone}
          </a>
          <span className="flex items-center gap-3">
            <MapPinIcon className="h-4 w-4 shrink-0" />
            {profile.location}
          </span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-teal-300"
          >
            <GithubIcon className="h-4 w-4 shrink-0" />
            github.com/Pugazh07
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-teal-300"
          >
            <LinkedinIcon className="h-4 w-4 shrink-0" />
            linkedin.com/in/pugazhenthiran
          </a>
        </div>
      </Reveal>
    </section>
  );
}
