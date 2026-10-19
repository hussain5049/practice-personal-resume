import { motion } from "framer-motion";
import { Bot, BarChart3, Code2, Rocket } from "lucide-react";
import { about, languages } from "../data/resume.js";
import { Section } from "./ui.jsx";
import { useReveal } from "../hooks/useReveal.js";

const icons = [Code2, Bot, BarChart3, Rocket];

export default function About() {
  const { container, item } = useReveal({ stagger: 0.1 });
  return (
    <Section id="about" eyebrow="01 · About" title="A builder with a business brain.">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <motion.div {...container} className="space-y-5 text-lg leading-relaxed text-mist">
          <motion.p {...item} className="text-xl text-fog">
            {about.intro}
          </motion.p>
          {about.paragraphs.map((p) => (
            <motion.p key={p} {...item}>
              {p}
            </motion.p>
          ))}
          <motion.div {...item} className="pt-2">
            <p className="section-eyebrow mb-3">Languages</p>
            <ul className="flex flex-wrap gap-2">
              {languages.map((l) => (
                <li key={l} className="tag">
                  {l}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.ul {...container} className="grid gap-4 sm:grid-cols-2">
          {about.highlights.map((h, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.li key={h.title} {...item} className="glass card-hover print-avoid rounded-2xl p-5">
                <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-mint/10 text-mint">
                  <Icon size={20} />
                </span>
                <h3 className="font-display text-base font-semibold text-white">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{h.text}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </Section>
  );
}
