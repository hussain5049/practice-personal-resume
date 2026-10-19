import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "./Brand.jsx";
import { hud, profile, stats } from "../data/resume.js";
import { Magnetic, Tilt } from "./ui.jsx";
import { Orbs } from "./Effects.jsx";

const ease = [0.16, 1, 0.3, 1];

/** Types and deletes the role titles in a loop. */
function Typewriter({ items }) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(reduce ? items[0] : "");
  useEffect(() => {
    if (reduce) return;
    let i = 0;
    let c = 0;
    let deleting = false;
    let t;
    const tick = () => {
      const cur = items[i];
      c = deleting ? c - 1 : c + 1;
      setText(cur.slice(0, c));
      let delay = deleting ? 32 : 68;
      if (!deleting && c === cur.length) {
        delay = 2000;
        deleting = true;
      } else if (deleting && c === 0) {
        deleting = false;
        i = (i + 1) % items.length;
        delay = 350;
      }
      t = setTimeout(tick, delay);
    };
    t = setTimeout(tick, 900);
    return () => clearTimeout(t);
  }, [items, reduce]);
  return (
    <span className="text-mint">
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}

function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setVal(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to, reduce]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function Line({ children, delay }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Bar({ label, level, delay }) {
  const reduce = useReducedMotion();
  return (
    <div>
      <div className="mb-1 flex justify-between font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-mint">
        <span>{label}</span>
        <span>{level}%</span>
      </div>
      <div className="h-[7px] overflow-hidden rounded-full bg-white/[0.07]">
        <motion.div
          initial={reduce ? { width: `${level}%` } : { width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.3, ease, delay }}
          className="h-full rounded-full bg-gradient-to-r from-mint to-violet"
        />
      </div>
    </div>
  );
}

const accentClass = { cyan: "text-mint", purple: "text-[#e9d5ff]", green: "text-[#6ee7b7]" };

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <Orbs />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            {...fade(0.1)}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-2xl sm:rounded-full border border-mint/35 bg-mint/[0.08] px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-mint"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            <span className="leading-snug">Founder-led studio &amp; academy // Kolkata • Downtown Dubai</span>
          </motion.div>

          <h1 className="font-display text-[2.6rem] font-bold uppercase leading-[1.05] tracking-[0.03em] text-white sm:text-6xl lg:text-[4.4rem]">
            <Line delay={0.2}>{profile.headline[0]}</Line>
            <Line delay={0.32}>
              <span className="gradient-text">{profile.headline[1]}</span>
            </Line>
            <Line delay={0.44}>{profile.headline[2]}</Line>
          </h1>

          <motion.p {...fade(0.8)} className="mt-6 min-h-[2.2rem] text-lg text-fog sm:text-xl">
            I'm <strong className="text-white">{profile.name}</strong> <span className="text-mist">—</span>{" "}
            <span className="font-semibold">
              <Typewriter items={profile.roles} />
            </span>
          </motion.p>

          <motion.p {...fade(0.95)} className="mt-5 max-w-2xl leading-relaxed text-mist">
            {profile.tagline}
          </motion.p>

          <motion.div {...fade(1.1)} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#contact" className="btn btn-primary">
                <Mail size={16} /> Hire me
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.website} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Omebly.com ↗
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#projects" className="btn btn-ghost">
                See my work <ArrowDown size={16} />
              </a>
            </Magnetic>
            <div className="ml-1 flex items-center gap-1">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-3 text-mist transition hover:bg-white/5 hover:text-mint">
                <Github size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-3 text-mist transition hover:bg-white/5 hover:text-mint">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.p {...fade(1.2)} className="mt-6 flex items-center gap-2 text-sm text-mist">
            <MapPin size={14} className="text-mint" /> {profile.location}
          </motion.p>
        </div>

        {/* Holographic identity card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          <Tilt className="group" strength={7}>
            <motion.div
              animate={reduce ? {} : { y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div aria-hidden="true" className="absolute -inset-1 rounded-[1.6rem] bg-gradient-to-br from-mint via-violet to-mint opacity-50 blur-2xl" />
              <div className="glass relative rounded-[1.4rem] p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between border-b border-mint/20 pb-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.12em] text-mint">OMEBLY_EXEC_HUD // v2026</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div aria-hidden="true" className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-mint to-violet opacity-80" />
                    <img
                      src={profile.photo}
                      alt={`Portrait of ${profile.name}`}
                      width="112"
                      height="112"
                      className="relative h-24 w-24 rounded-2xl object-cover md:h-28 md:w-28"
                      fetchPriority="high"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-xl font-bold text-white md:text-2xl">{profile.name}</p>
                    <p className="text-sm font-semibold text-mint">{profile.title}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <img src={profile.omeblyIcon} alt="" width="22" height="22" className="h-[22px] w-[22px] rounded-md" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">omebly.com</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  {hud.rows.map((r) => (
                    <div key={r.k} className="hud-row">
                      <span className="shrink-0 font-mono text-[11px] text-mist">&gt; {r.k}:</span>
                      <span className={`text-right text-[13px] font-semibold ${r.accent ? accentClass[r.accent] : "text-white"}`}>{r.v}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-3">
                  {hud.bars.map((b, i) => (
                    <Bar key={b.label} {...b} delay={1 + i * 0.15} />
                  ))}
                </div>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
      </div>

      <motion.ul
        {...fade(1.4)}
        className="container-x relative mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 md:mt-20 md:grid-cols-4"
        aria-label="Highlights"
      >
        {stats.map((s) => (
          <li key={s.label}>
            <p className="font-display text-3xl font-bold text-mint md:text-4xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-mist">{s.label}</p>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
