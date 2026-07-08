"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="relative mx-auto max-w-4xl px-5">
        <SectionHeading
          command="git log --work-history"
          title="Work Experience"
          subtitle="6+ years of commits to production."
        />

        <div className="relative ml-3 border-l-2 border-matrix-400/20 pl-8 sm:ml-6">
          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.05 * i }}
              className="relative pb-12 last:pb-0"
            >
              {/* timeline node */}
              <span
                className={`absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                  job.current
                    ? "border-matrix-400 bg-matrix-400/30"
                    : "border-matrix-700 bg-void-900"
                }`}
              >
                {job.current && (
                  <span className="status-dot h-2 w-2 rounded-full bg-matrix-400" />
                )}
              </span>

              <div className="hacker-card rounded-xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">
                    {job.role}{" "}
                    <span className="text-matrix-400">@ {job.company}</span>
                  </h3>
                  {job.current && (
                    <span className="rounded-full border border-matrix-400/40 bg-matrix-400/10 px-3 py-0.5 font-mono-hack text-xs text-matrix-300">
                      current
                    </span>
                  )}
                </div>
                <p className="mt-1 font-mono-hack text-xs text-matrix-500">
                  {job.period} · {job.location}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-gray-400">
                      <span className="mt-0.5 shrink-0 font-mono-hack text-matrix-400">
                        &gt;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
