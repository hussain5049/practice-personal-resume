import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ecosystem, pillars } from "../data/resume.js";
import { Section, Tags, Tilt } from "./ui.jsx";
import { useReveal } from "../hooks/useReveal.js";

const accentText = { cyan: "text-mint", purple: "text-[#e9d5ff]", green: "text-[#6ee7b7]" };

export default function Ecosystem() {
  const { container, item } = useReveal({ stagger: 0.1 });
  const pil = useReveal({ stagger: 0.06, y: 20 });

  return (
    <>
      <Section
        id="ecosystem"
        eyebrow="// 01 · Proprietary platforms & products"
        title={
          <>
            The <span className="gradient-text">Omebly ecosystem</span>
          </>
        }
        intro="I don't only build digital products for clients. At Omebly we engineer and operate our own flagship app, a privacy-first browser tool suite and a live mentorship academy."
      >
        <motion.ul {...container} className="grid gap-6 lg:grid-cols-3">
          {ecosystem.map((p) => (
            <motion.li key={p.name} {...item} className="group h-full">
              <Tilt className="h-full" strength={6}>
                <article className="glass card-hover flex h-full flex-col rounded-2xl p-6 md:p-7">
                  <span className={`badge badge-${p.accent} self-start`}>{p.badge}</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-white md:text-2xl">{p.name}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-mist">{p.text}</p>
                  <Tags items={p.chips} className="mt-5" />
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold ${accentText[p.accent]} hover:underline`}
                  >
                    {p.link.label} <ArrowUpRight size={15} />
                  </a>
                </article>
              </Tilt>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      <Section
        id="pillars"
        className="border-y border-mint/10 bg-ink-2/60"
        eyebrow="// 02 · Agency capabilities · fixed quote in 48 hours"
        title={
          <>
            8 pillars of <span className="gradient-text">digital engineering</span>
          </>
        }
        intro="Every website, mobile app, web app and SaaS product ships with full code ownership, weekly live demos and lifetime bug-fix support."
      >
        <motion.ul {...pil.container} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <motion.li key={p.n} {...pil.item} className="glass card-hover rounded-2xl p-5">
              <p className={`font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${accentText[p.accent]}`}>
                {p.n} // {p.tag}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{p.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Section>
    </>
  );
}
