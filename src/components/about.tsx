import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { profile, work, education, achievements } from "@/data/portfolio";

const icons: Record<string, string> = {
  trophy:
    "M5 3h14v2h3v4a5 5 0 0 1-5 5h-.42A6 6 0 0 1 13 17.65V19h4v2H7v-2h4v-1.35A6 6 0 0 1 7.42 14H7a5 5 0 0 1-5-5V5h3V3zm0 4H4v2a3 3 0 0 0 3 3V7zm14 0v5a3 3 0 0 0 3-3V7h-3z",
  users:
    "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  book: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM6 4h5v8l-2.5-1.5L6 12V4z",
  briefcase:
    "M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm0 4h4V4h-4v2z",
};

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          command="cat ./about-me.md"
          title="About Me"
          subtitle="A quick scan of who I am and where I've been."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="hacker-card h-full rounded-xl p-8">
              <h3 className="font-mono-hack text-lg text-matrix-400">
                # {profile.name}
              </h3>
              <p className="mt-4 leading-relaxed text-gray-300">
                {profile.summary}
              </p>
              <p className="mt-4 leading-relaxed text-gray-400">
                Currently working as a{" "}
                <span className="text-matrix-300">{profile.title}</span> at
                ByteMage in {profile.location}, building products end-to-end —
                from pixel-perfect React frontends and cross-platform Electron
                desktop apps to AI-powered features with OpenAI, vector
                databases and RAG architectures.
              </p>

              <div className="mt-8">
                <h4 className="font-mono-hack text-sm text-matrix-600">
                  $ ls ./work
                </h4>
                <div className="mt-4 space-y-4">
                  {work.map((job) => (
                    <div
                      key={job.role}
                      className="border-l-2 border-matrix-400/40 pl-4 transition-colors hover:border-matrix-400"
                    >
                      <p className="font-semibold text-white">{job.role}</p>
                      <p className="font-mono-hack text-xs text-matrix-500">
                        {job.period}
                      </p>
                      <p className="text-sm text-gray-400">{job.place}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-mono-hack text-sm text-matrix-600">
                  $ ls ./education
                </h4>
                <div className="mt-4 space-y-4">
                  {education.map((edu) => (
                    <div
                      key={edu.degree}
                      className="border-l-2 border-matrix-400/40 pl-4 transition-colors hover:border-matrix-400"
                    >
                      <p className="font-semibold text-white">{edu.degree}</p>
                      <p className="font-mono-hack text-xs text-matrix-500">
                        {edu.period}
                      </p>
                      <p className="text-sm text-gray-400">{edu.school}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-2">
            <Reveal>
              <div className="hacker-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-matrix-400/30 bg-matrix-400/10 text-matrix-400">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={icons.briefcase} />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">
                      Senior Software Engineer at ByteMage
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">
                      Currently building AI-powered products, web platforms and
                      cross-platform desktop apps.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            {achievements.map((item, i) => (
              <Reveal key={item.title} delay={0.15 * (i + 1)}>
                <div className="hacker-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-matrix-400/30 bg-matrix-400/10 text-matrix-400">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={icons[item.icon]} />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
