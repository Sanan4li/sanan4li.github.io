"use client";

import { useState } from "react";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { profile } from "@/data/portfolio";

const contactLinks = [
  {
    label: "email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "github",
    value: "github.com/Sanan4li",
    href: profile.social.github,
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/Sanan4li",
    href: profile.social.linkedin,
  },
  {
    label: "twitter",
    value: "twitter.com/Sanan4li",
    href: profile.social.twitter,
  },
  {
    label: "facebook",
    value: "facebook.com/Sanan4li",
    href: profile.social.facebook,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          command="ssh sanan@lahore.pk"
          title="Get In Touch"
          subtitle="Have an idea? Let's build it together."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="hacker-card h-full rounded-xl p-8">
              <h3 className="font-mono-hack text-lg text-matrix-400">
                # connection channels
              </h3>
              <div className="mt-6 space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 font-mono-hack text-sm"
                  >
                    <span className="text-matrix-600 transition-colors group-hover:text-matrix-400">
                      ${" "}
                    </span>
                    <span className="text-gray-500">open --{link.label}</span>
                    <span className="text-matrix-300 underline-offset-4 transition-all group-hover:text-matrix-400 group-hover:underline">
                      {link.value}
                    </span>
                  </a>
                ))}
              </div>
              <p className="mt-8 border-t border-matrix-400/10 pt-6 font-mono-hack text-xs leading-relaxed text-gray-500">
                <span className="text-matrix-400">◉</span> {profile.location} ·{" "}
                {profile.phone}
                <br />
                Response time: usually &lt; 24h
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="hacker-card flex h-full flex-col rounded-xl p-8"
            >
              <h3 className="font-mono-hack text-lg text-matrix-400">
                # send transmission
              </h3>
              <label className="mt-6 font-mono-hack text-xs text-gray-500">
                your_name:
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="mt-2 rounded-md border border-matrix-400/20 bg-void-950/80 px-4 py-3 text-sm text-gray-200 outline-none transition-all placeholder:text-gray-600 focus:border-matrix-400/70 focus:shadow-[0_0_15px_rgba(0,255,65,0.15)]"
              />
              <label className="mt-5 font-mono-hack text-xs text-gray-500">
                message:
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Let's talk about your project..."
                className="mt-2 flex-1 resize-none rounded-md border border-matrix-400/20 bg-void-950/80 px-4 py-3 text-sm text-gray-200 outline-none transition-all placeholder:text-gray-600 focus:border-matrix-400/70 focus:shadow-[0_0_15px_rgba(0,255,65,0.15)]"
              />
              <button
                type="submit"
                className="mt-6 rounded-md border border-matrix-400 bg-matrix-400/10 px-6 py-3 font-mono-hack text-sm text-matrix-300 transition-all hover:bg-matrix-400 hover:text-void-950 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]"
              >
                ./send-message.sh --now
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
