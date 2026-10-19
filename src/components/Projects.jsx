import { motion } from "framer-motion";
import { ArrowUpRight, Check, Download, Shield } from "lucide-react";
import { Github } from "./Brand.jsx";
import { featuredProject as fp, repos, ventures } from "../data/resume.js";
import { Section, Tags, Tilt } from "./ui.jsx";
import { useReveal } from "../hooks/useReveal.js";

function Featured() {
  const { container, item } = useReveal({ stagger: 0.07 });
  return (
    <motion.div {...container} className="relative mb-8 overflow-hidden rounded-[1.6rem] border border-mint/30 bg-ink-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_0%,rgba(0,243,255,0.12),transparent_60%),radial-gradient(600px_300px_at_100%_100%,rgba(188,19,254,0.12),transparent_60%)]"
      />
      <div className="relative grid gap-10 p-7 md:p-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div {...item} className="flex items-center gap-4">
            <img src={fp.icon} alt="Omebly Downloader icon" width="64" height="64" className="h-16 w-16 rounded-2xl shadow-lg" />
            <div>
              <p className="section-eyebrow">Open source · founder &amp; developer</p>
              <h3 className="font-display text-3xl font-bold text-white md:text-4xl">{fp.name}</h3>
            </div>
          </motion.div>
          <motion.p {...item} className="mt-6 font-display text-xl font-semibold text-fog">
            {fp.tagline}
          </motion.p>
          <motion.p {...item} className="mt-4 leading-relaxed text-mist">
            {fp.description}
          </motion.p>
          <motion.div {...item} className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs text-mist">
            <span className="rounded-full bg-white/5 px-3 py-1">{fp.version}</span>
            <span className="rounded-full bg-white/5 px-3 py-1">{fp.licence}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
              <Shield size={12} className="text-mint" /> Code-signed · No tracking
            </span>
          </motion.div>
          <motion.div {...item} className="mt-8 flex flex-wrap gap-3">
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
            <motion.li key={f.title} {...item} className="glass rounded-2xl p-4">
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
  const v = useReveal({ stagger: 0.1 });
  const r = useReveal({ stagger: 0.1 });
  return (
    <>
      <Section
        id="projects"
        eyebrow="// 04 · Global portfolio & leadership"
        title={
          <>
            Ventures &amp; <span className="gradient-text">enterprise work</span>
          </>
        }
      >
        <motion.ul {...v.container} className="grid gap-6 lg:grid-cols-3">
          {ventures.map((x) => (
            <motion.li key={x.name} {...v.item} className="glass card-hover rounded-2xl p-6 md:p-7">
              <span className={`badge badge-${x.accent}`}>{x.badge}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">{x.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">{x.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      <Section
        id="labs"
        className="border-t border-mint/10 bg-ink-2/60"
        eyebrow="// 05 · Open-source repositories"
        title={
          <>
            GitHub <span className="gradient-text">engineering labs</span>
          </>
        }
      >
        <Featured />
        <motion.ul {...r.container} className="grid gap-5 md:grid-cols-3">
          {repos.map((p) => (
            <motion.li key={p.name} {...r.item} className="group h-full">
              <Tilt className="h-full" strength={6}>
                <article className="glass card-hover flex h-full flex-col rounded-2xl p-6">
                  <span className="badge badge-cyan self-start">{p.badge}</span>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <h3 className="font-mono text-base font-bold text-white">hussain5049 / {p.name}</h3>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.name}`}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-mist transition group-hover:border-mint group-hover:text-mint"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{p.text}</p>
                  <Tags items={p.tags} className="mt-5" />
                </article>
              </Tilt>
            </motion.li>
          ))}
        </motion.ul>
      </Section>
    </>
  );
}
