import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, ExternalLink, MapPin } from "lucide-react";
import { experience } from "../data/resume.js";
import { Section, Tags } from "./ui.jsx";
import { useReveal } from "../hooks/useReveal.js";

function Entry({ e, index }) {
  const { container, item } = useReveal({ y: 24, amount: 0.25 });
  const side = index % 2 === 0 ? "lg:pr-16 lg:text-right lg:col-start-1" : "lg:pl-16 lg:col-start-2";
  return (
    <motion.li {...container} className="relative grid lg:grid-cols-2">
      {/* Dot on the spine */}
      <span
        aria-hidden="true"
        className={`absolute left-[11px] top-7 z-10 h-4 w-4 rounded-full border-4 border-ink lg:left-1/2 lg:-translate-x-1/2 ${
          e.current ? "bg-mint shadow-[0_0_0_6px_rgba(46,242,181,0.2)]" : "bg-cyan"
        }`}
      />
      <motion.article
        {...item}
        className={`glass card-hover print-flat print-avoid ml-10 rounded-3xl p-6 md:p-8 lg:ml-0 ${side}`}
      >
        <div className={`flex flex-wrap items-center gap-2 text-xs font-mono ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
          <span className={`rounded-full px-3 py-1 ${e.current ? "bg-mint/15 text-mint" : "bg-white/5 text-mist"}`}>
            {e.period}
          </span>
          <span className="inline-flex items-center gap-1 text-mist">
            <MapPin size={12} /> {e.location}
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-white md:text-2xl">{e.role}</h3>
        <p className={`mt-1 flex items-center gap-2 text-base font-semibold text-mint ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
          <Briefcase size={15} className="shrink-0" />
          {e.url ? (
            <a href={e.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
              {e.company} <ExternalLink size={13} />
            </a>
          ) : (
            e.company
          )}
        </p>
        <p className="mt-4 text-mist">{e.summary}</p>
        <ul className={`mt-4 space-y-2 text-sm text-fog ${index % 2 === 0 ? "lg:text-right" : ""}`}>
          {e.bullets.map((b) => (
            <li key={b} className="relative pl-4 lg:pl-0">
              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-cyan lg:hidden" />
              {b}
            </li>
          ))}
        </ul>
        <Tags items={e.tech} className={`mt-5 ${index % 2 === 0 ? "lg:justify-end" : ""}`} />
      </motion.article>
    </motion.li>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <Section
      id="experience"
      eyebrow="03 · Experience"
      title="From the field to the codebase."
      intro="Ten years that moved from pharmaceutical sales to performance marketing to building and shipping my own software."
    >
      <div ref={ref} className="relative">
        <div aria-hidden="true" className="no-print absolute left-[18px] top-0 bottom-0 w-[2px] bg-white/5 lg:left-1/2 lg:-translate-x-1/2" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY, transformOrigin: "top" }}
          className="no-print absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-mint via-cyan to-violet lg:left-1/2 lg:-translate-x-1/2"
        />
        <ol className="space-y-10 lg:space-y-14">
          {experience.map((e, i) => (
            <Entry key={`${e.company}-${e.period}`} e={e} index={i} />
          ))}
        </ol>
      </div>
    </Section>
  );
}
