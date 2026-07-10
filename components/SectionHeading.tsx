export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <h2 className="mb-8 flex items-baseline gap-3 text-2xl font-semibold text-[var(--text-strong)] sm:text-3xl">
      <span className="font-mono text-lg text-[var(--accent)] sm:text-xl">
        {index}.
      </span>
      {title}
      <span className="ml-4 hidden h-px flex-1 bg-[var(--border)] sm:block" aria-hidden />
    </h2>
  );
}
