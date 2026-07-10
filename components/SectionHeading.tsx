export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <h2 className="mb-8 flex items-baseline gap-3 text-2xl font-semibold text-slate-100 sm:text-3xl">
      <span className="font-mono text-lg text-teal-400 sm:text-xl">
        {index}.
      </span>
      {title}
      <span className="ml-4 hidden h-px flex-1 bg-slate-800 sm:block" aria-hidden />
    </h2>
  );
}
