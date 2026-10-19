import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useReveal } from "../hooks/useReveal.js";

/** Section wrapper with eyebrow + title and a staggered reveal. */
export function Section({ id, eyebrow, title, intro, children, className = "" }) {
  const { container, item } = useReveal();
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 md:py-32 ${className}`}>
      <div className="container-x">
        <motion.div {...container} className="mb-12 max-w-3xl md:mb-16">
          {eyebrow && (
            <motion.p {...item} className="section-eyebrow mb-3">
              {eyebrow}
            </motion.p>
          )}
          {title && (
            <motion.h2 {...item} className="section-title">
              {title}
            </motion.h2>
          )}
          {intro && (
            <motion.p {...item} className="mt-5 text-lg leading-relaxed text-mist">
              {intro}
            </motion.p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/** 3D tilt card that follows the pointer. Falls back to a static card. */
export function Tilt({ children, className = "", strength = 10, glare = true }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [strength, -strength]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-strength, strength]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(my, [0, 1], ["0%", "100%"]);

  function onMove(e) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX: reduce ? 0 : rx, rotateY: reduce ? 0 : ry, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
      {glare && !reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at var(--gx) var(--gy), rgba(255,255,255,0.08), transparent 45%)`,
            "--gx": glareX,
            "--gy": glareY,
          }}
        />
      )}
    </motion.div>
  );
}

/** Button/link that is subtly attracted to the cursor. */
export function Magnetic({ children, className = "", range = 0.3 }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });

  function onMove(e) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * range);
    y.set((e.clientY - (r.top + r.height / 2)) * range);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} style={{ x, y }} className={`inline-block ${className}`}>
      {children}
    </motion.div>
  );
}

/** Small tag chip list. */
export function Tags({ items, className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((t) => (
        <li key={t} className="tag">
          {t}
        </li>
      ))}
    </ul>
  );
}
