"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-matrix-400/10 bg-void-950/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          className="glitch font-mono-hack text-lg font-bold text-matrix-400 glow-text"
        >
          ~/sanan<span className="cursor-blink">_</span>
        </a>

        {/* desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded px-3 py-2 font-mono-hack text-sm transition-colors ${
                  active === link.href
                    ? "text-matrix-400"
                    : "text-gray-400 hover:text-matrix-300"
                }`}
              >
                <span className="text-matrix-700">./</span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-3 rounded border border-matrix-400/40 bg-matrix-400/10 px-4 py-2 font-mono-hack text-sm text-matrix-300 transition-all hover:bg-matrix-400/20 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]"
            >
              hire --me
            </a>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-matrix-400 md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-matrix-400/10 bg-void-950/95 px-5 pb-4 backdrop-blur-lg md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-mono-hack text-sm text-gray-300 hover:text-matrix-400"
              >
                <span className="text-matrix-700">./</span>
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
