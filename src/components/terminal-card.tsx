"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const lines = [
  { prompt: true, text: "cat sanan.json" },
  { prompt: false, text: "{" },
  { prompt: false, text: `  "name": "${profile.name}",` },
  { prompt: false, text: `  "role": "${profile.title}",` },
  { prompt: false, text: `  "location": "${profile.location}",` },
  { prompt: false, text: `  "experience": "6+ years",` },
  { prompt: false, text: `  "status": "open_to_work" ✔` },
  { prompt: false, text: "}" },
];

export default function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => setStarted(true), 1200);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (!started || visibleLines >= lines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 280);
    return () => clearTimeout(t);
  }, [started, visibleLines]);

  return (
    <div className="glow-box overflow-hidden rounded-lg border border-matrix-400/20 bg-void-900/90 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-matrix-400/10 bg-void-800/80 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-matrix-500/80" />
        <span className="ml-2 font-mono-hack text-xs text-gray-500">
          sanan@portfolio: ~
        </span>
      </div>
      <div className="min-h-[210px] p-4 font-mono-hack text-[13px] leading-6">
        {lines.slice(0, visibleLines).map((line, i) => (
          <p key={i} className={line.prompt ? "text-matrix-300" : "text-gray-400"}>
            {line.prompt && <span className="text-matrix-400">$ </span>}
            {line.text}
          </p>
        ))}
        {visibleLines >= lines.length && (
          <p className="text-matrix-300">
            <span className="text-matrix-400">$ </span>
            <span className="cursor-blink">▌</span>
          </p>
        )}
      </div>
    </div>
  );
}
