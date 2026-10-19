import { motion } from "framer-motion";
import { ArrowUpRight, Check, Download, Shield } from "lucide-react";
import { Github } from "./Brand.jsx";
import { featuredProject as fp, projects } from "../data/resume.js";
import { Section, Tags, Tilt } from "./ui.jsx";
import { useReveal } from "../hooks/useReveal.js";

function Featured() {
  const { container, item } = useReveal({ stagger: 0.07 });
  return (
    <motion.div {...container} className="relative mb-10 overflow-hidden rounded-[2rem] border border-mint/20 bg-ink-2 print-flat">
      <div
        aria-hidden="true"
        className="no-print pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_0%,rgba(46,242,181,0.12),transparent_60%),radial-gradient(600px_300px_at_100%_100%,rgba(56,189,248,0.10),transparent_60%)]"
      />
      <div className="relative grid gap-10 p-7 md:p-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div {...item} className="flex items-center gap-4">
            <img src={fp.icon} alt="Omebly Downloader icon" width="64" height="64" className="h-16 w-16 rounded-2xl shadow-lg" />
            <div>
              <p className="section-eyebrow">Featured product · Founder &amp; developer</p>
              <h3 className="font-display text-3xl font-bold text-white md:text-4xl">{fp.name}</h3>
            </div>
          </motion.div>
          <motion.p {...item} className="mt-6 font-display text-xl font-semibold text-fog">
            {fp.tagline}
          </motion.p>
          <motion.p {...item} className="mt-4 leading-relaxed text-mist">
            {fp.description}
          </motion.p>
          <motion.div {...item} className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono text-mist">
            <span className="rounded-full bg-white/5 px-3 py-1">{fp.version}</span>
            <span className="rounded-full bg-white/5 px-3 py-1">{fp.licence}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
              <Shield size={12} className="text-mint" /> Code-signed · No tracking
            </span>
          </motion.div>
          <motion.div {...item} className="no-print mt-8 flex flex-wrap gap-3">
            <a href={fp.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Download size={16} /> Product page
            </a>
            <a href={fp.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Github size={16} /> Source on GitHub
            </a>
          </motion.div>
          <motion.div {...item} className="mt-8">
            <Tags items={fp.stack} />
          </motion.div>
        </div>

        <motion.ul {...container} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {fp.features.map((f) => (
            <motion.li key={f.title} {...item} className="glass print-flat print-avoid rounded-2xl p-4">
              <p className="flex items-center gap-2 font-semibold text-white">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-mint/15 text-mint">
                  <Check size={14} />
                </span>
                {f.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{f.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { container, item } = useReveal();
  return (
    <Section
      id="projects"
      eyebrow="04 · Projects"
      title="Things I have shipped."
      intro="Real software with real users, plus the tooling I built along the way."
    >
      <Featured />
      <motion.ul {...container} className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <motion.li key={p.name} {...item} className="group h-full">
            <Tilt className="h-full" strength={6}>
              <article className="glass card-hover print-flat print-avoid flex h-full flex-col rounded-3xl p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.name}`}
                      className="no-print grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-mist transition group-hover:border-mint group-hover:text-mint"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
                <p className="mt-3 flex-1 leading-relaxed text-mist">{p.description}</p>
                <Tags items={p.tags} className="mt-5" />
              </article>
            </Tilt>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
