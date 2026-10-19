import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/resume.js";
import { Section } from "./ui.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Education() {
  const { container, item } = useReveal({ stagger: 0.12 });
  return (
    <Section id="education" eyebrow="// 05 · Education & teaching" title={<>Learning, <span className="gradient-text">teaching, writing</span></>}>
      <motion.ul {...container} className="grid gap-5 md:grid-cols-3">
        {education.map((e) => (
          <motion.li key={e.title} {...item} className="glass card-hover print-flat print-avoid rounded-3xl p-6">
            <span className="mb-5 inline-grid h-11 w-11 place-items-center rounded-xl bg-violet/15 text-violet">
              <GraduationCap size={20} />
            </span>
            <h3 className="font-display text-lg font-bold text-white">{e.title}</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-mint">{e.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">{e.text}</p>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
