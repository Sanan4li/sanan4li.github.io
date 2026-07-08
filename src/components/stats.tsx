"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "./reveal";
import { stats } from "@/data/portfolio";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref} className="glow-text font-mono-hack text-4xl font-bold text-matrix-400">
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-matrix-400/10 bg-void-900/50 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1} className="text-center">
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
