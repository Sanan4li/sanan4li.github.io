"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          command="npm list --global"
          title="Skills & Technologies"
          subtitle="The stack I build, ship and scale with."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="hacker-card rounded-xl p-6"
            >
              <p className="font-mono-hack text-xs text-matrix-600">
                <span className="text-matrix-400">$</span> {group.command}
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="chip cursor-default rounded-md px-3 py-1.5 font-mono-hack text-xs text-matrix-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
