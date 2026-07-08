import Reveal from "./reveal";

export default function SectionHeading({
  command,
  title,
  subtitle,
}: {
  command: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="font-mono-hack text-sm text-matrix-600">
        <span className="text-matrix-400">$</span> {command}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-gray-400">{subtitle}</p>}
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-matrix-400 to-transparent" />
    </Reveal>
  );
}
