"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MatrixRain from "./matrix-rain";
import Typewriter from "./typewriter";
import TerminalCard from "./terminal-card";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <MatrixRain opacity={0.18} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-void-950/60 to-void-950" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono-hack text-sm text-matrix-400"
          >
            <span className="text-matrix-600">$</span> whoami
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-4 text-5xl font-bold leading-tight text-white sm:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="glow-text text-matrix-400">{profile.shortName}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-4 h-8 text-xl sm:text-2xl"
          >
            <Typewriter words={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-6 max-w-xl leading-relaxed text-gray-400"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded border border-matrix-400 bg-matrix-400/10 px-7 py-3 font-mono-hack text-matrix-300 transition-all hover:bg-matrix-400 hover:text-void-950 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]"
            >
              <span className="relative z-10">./hire-me.sh</span>
            </a>
            <a
              href="#projects"
              className="rounded border border-gray-700 px-7 py-3 font-mono-hack text-gray-300 transition-all hover:border-matrix-400/50 hover:text-matrix-300"
            >
              view --projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-8 flex items-center gap-5"
          >
            {(
              [
                ["github", profile.social.github, "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"],
                ["linkedin", profile.social.linkedin, "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"],
                ["twitter", profile.social.twitter, "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"],
              ] as const
            ).map(([name, href, d]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-gray-500 transition-all hover:scale-125 hover:text-matrix-400"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={d} />
                </svg>
              </a>
            ))}
            <span className="ml-2 flex items-center gap-2 font-mono-hack text-xs text-gray-500">
              <span className="status-dot inline-block h-2 w-2 rounded-full bg-matrix-400" />
              open to opportunities
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="profile-ring glow-box"
          >
            <div className="overflow-hidden rounded-full bg-void-900">
              <Image
                src="/images/sanan.png"
                alt="Sanan Ali — Senior Software Engineer"
                width={280}
                height={280}
                priority
                className="h-56 w-56 object-cover sm:h-64 sm:w-64"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="w-full max-w-md"
          >
            <TerminalCard />
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono-hack text-xs text-matrix-600 hover:text-matrix-400"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex flex-col items-center gap-1"
        >
          scroll ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
