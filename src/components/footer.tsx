import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-matrix-400/10 bg-void-900/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
        <p className="font-mono-hack text-xs text-gray-500">
          <span className="text-matrix-400">$</span> echo &quot;Designed &amp;
          built by {profile.shortName} — all rights reserved&quot;
        </p>
        <p className="font-mono-hack text-[11px] text-gray-600">
          Next.js · TypeScript · Tailwind CSS · Framer Motion — deployed on
          GitHub Pages
        </p>
      </div>
    </footer>
  );
}
