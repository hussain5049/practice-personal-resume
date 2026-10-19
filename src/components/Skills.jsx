import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BarChart3, Bot, Code2, Sparkles } from "lucide-react";
import { skillGroups } from "../data/resume.js";
import { Section, Tags } from "./ui.jsx";

const icons = { Code2, Bot, BarChart3, Sparkles };

function Bar({ name, level, index }) {
  const reduce = useReducedMotion();
  return (
    <li>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-fog">{name}</span>
        <span className="font-mono text-xs text-mist">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={reduce ? { width: `${level}%` } : { width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 0.05 * index }}
          className="h-full rounded-full bg-gradient-to-r from-mint via-cyan to-violet"
        />
      </div>
    </li>
  );
}

export default function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const active = skillGroups.find((g) => g.id === activeId);

  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title="One person, three job descriptions."
      intro="I am targeting AI automation, web / app development and data analyst roles. Pick a track to see how I measure up."
    >
      {/* Interactive tabs (screen) */}
      <div className="no-print">
        <div role="tablist" aria-label="Skill tracks" className="mb-8 flex flex-wrap gap-2">
          {skillGroups.map((g) => {
            const Icon = icons[g.icon];
            const selected = g.id === activeId;
            return (
              <button
                key={g.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(g.id)}
                className={`relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  selected ? "text-ink" : "text-mist hover:text-white"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="skill-pill"
                    className="absolute inset-0 rounded-full bg-mint"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-2">
                  <Icon size={16} /> {g.label}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="glass grid gap-10 rounded-3xl p-6 md:p-10 lg:grid-cols-[1fr_1.2fr]"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white">{active.label}</h3>
              <p className="mt-3 text-mist">{active.blurb}</p>
              <p className="section-eyebrow mt-8 mb-3">Toolbox</p>
              <Tags items={active.tags} />
            </div>
            <ul className="grid gap-5">
              {active.skills.map((s, i) => (
                <Bar key={s.name} {...s} index={i} />
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

    </Section>
  );
}
