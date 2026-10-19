import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, animate } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "./Brand.jsx";
import { profile, stats } from "../data/resume.js";
import { Magnetic, Tilt } from "./ui.jsx";
import { Orbs } from "./Effects.jsx";

const ease = [0.2, 0.8, 0.2, 1];

function RotatingRole() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);
  return (
    <span className="relative inline-grid h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="gradient-text col-start-1 row-start-1 whitespace-nowrap"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function SplitText({ text, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  const letters = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {letters.map((ch, idx) => (
        <motion.span
          key={idx}
          aria-hidden="true"
          className="inline-block"
          initial={reduce ? false : { y: "110%", opacity: 0, rotate: 6 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease, delay: delay + idx * 0.035 }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <Orbs />
      <div aria-hidden="true" className="grid-bg absolute inset-0" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-mint"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            {profile.availability}
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            <span className="block overflow-hidden pb-1">
              <SplitText text={profile.name} delay={0.2} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.9 }}
            className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.05 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-mist"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.2 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a href="#contact" className="btn btn-primary">
                <Mail size={16} /> Hire me
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#projects" className="btn btn-ghost">
                See my work <ArrowDown size={16} />
              </a>
            </Magnetic>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full p-3 text-mist transition hover:bg-white/5 hover:text-white"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-3 text-mist transition hover:bg-white/5 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.35 }}
            className="mt-6 flex items-center gap-2 text-sm text-mist"
          >
            <MapPin size={14} className="text-mint" /> {profile.location}
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="relative mx-auto w-full max-w-[380px] lg:max-w-none"
        >
          <Tilt className="group" strength={8}>
            <motion.div
              animate={reduce ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-mint via-cyan to-violet opacity-70 blur-xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 p-2">
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width="560"
                  height="560"
                  className="aspect-square w-full rounded-[1.6rem] object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl glass px-4 py-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mint">Founder</p>
                    <p className="font-display text-sm font-semibold text-white">Omebly · omebly.com</p>
                  </div>
                  <img
                    src={`${import.meta.env.BASE_URL}omebly-icon.png`}
                    alt="Omebly logo"
                    width="36"
                    height="36"
                    className="h-9 w-9 rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
      </div>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 1.5 }}
        className="container-x relative mt-16 grid grid-cols-2 gap-4 md:mt-24 md:grid-cols-4"
        aria-label="Highlights"
      >
        {stats.map((s) => (
          <li key={s.label} className="glass print-flat rounded-2xl p-5">
            <p className="font-display text-3xl font-bold text-white md:text-4xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-xs leading-snug text-mist md:text-sm">{s.label}</p>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
