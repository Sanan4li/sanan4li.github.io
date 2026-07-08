"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectCategories } from "@/data/portfolio";

export default function Projects() {
  const [activeId, setActiveId] = useState(projectCategories[0].id);
  const active =
    projectCategories.find((c) => c.id === activeId) ?? projectCategories[0];

  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          command="find ./projects -type f"
          title="Projects"
          subtitle="Some of the things I've designed, built and shipped."
        />

        {/* tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`relative rounded-md px-5 py-2.5 font-mono-hack text-sm transition-all ${
                cat.id === activeId
                  ? "text-void-950"
                  : "border border-matrix-400/20 text-gray-400 hover:border-matrix-400/50 hover:text-matrix-300"
              }`}
            >
              {cat.id === activeId && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-md bg-matrix-400 shadow-[0_0_25px_rgba(0,255,65,0.4)]"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className={`grid gap-6 sm:grid-cols-2 ${
              active.id === "mobile" ? "lg:grid-cols-3" : "lg:grid-cols-3"
            }`}
          >
            {active.projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group hacker-card overflow-hidden rounded-xl"
              >
                <div
                  className={`relative overflow-hidden ${
                    active.id === "mobile" ? "aspect-[3/4]" : "aspect-video"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      active.id === "mobile"
                        ? "object-contain p-2"
                        : "object-cover object-top"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-950/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white transition-colors group-hover:text-matrix-300">
                    {project.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-matrix-400/15 bg-matrix-400/5 px-2 py-0.5 font-mono-hack text-[11px] text-matrix-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
