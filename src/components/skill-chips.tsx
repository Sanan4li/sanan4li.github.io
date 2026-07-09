const chips = [
  { label: "React", icon: "◈", position: "top-10 left-[4%]", float: "floating-1" },
  { label: "Node.js", icon: "◆", position: "top-28 right-[6%]", float: "floating-2" },
  { label: "TypeScript", icon: "TS", position: "bottom-32 left-[6%]", float: "floating-3" },
  { label: "Tailwind CSS", icon: "≈", position: "bottom-16 right-[8%]", float: "floating-4" },
  { label: "Next.js", icon: "▲", position: "top-[46%] left-[1%]", float: "floating-2" },
  { label: "Electron", icon: "⌁", position: "top-[52%] right-[2%]", float: "floating-1" },
];

export default function SkillChips() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden lg:block"
      aria-hidden="true"
    >
      {chips.map((chip, i) => (
        <div
          key={chip.label}
          className={`absolute ${chip.position} ${chip.float}`}
        >
          <div
            className="chip-pulse flex items-center gap-2 rounded-full border border-matrix-400/30 bg-void-900/70 px-3 py-1.5 font-mono-hack text-xs text-matrix-300 backdrop-blur-sm"
            style={{ animationDelay: `${i * 0.35}s` }}
          >
            <span className="text-matrix-400">{chip.icon}</span>
            {chip.label}
          </div>
        </div>
      ))}
    </div>
  );
}
