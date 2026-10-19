import { useEffect } from "react";
import { motion, useMotionValue, useScroll, useSpring, useReducedMotion } from "framer-motion";

/** Thin gradient progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="no-print fixed inset-x-0 top-0 z-[70] h-[3px] bg-gradient-to-r from-mint via-cyan to-violet"
    />
  );
}

/** Soft light that follows the cursor. Pointer devices only. */
export function CursorGlow() {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(-500), { stiffness: 80, damping: 20, mass: 0.6 });
  const y = useSpring(useMotionValue(-500), { stiffness: 80, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  if (reduce) return null;
  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      className="no-print pointer-events-none fixed left-0 top-0 z-0 hidden h-[520px] w-[520px] rounded-full md:block"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(46,242,181,0.10),rgba(56,189,248,0.05)_40%,transparent_70%)]" />
    </motion.div>
  );
}

/** Floating blurred orbs used behind the hero. */
export function Orbs() {
  const reduce = useReducedMotion();
  const anim = (dx, dy, dur) =>
    reduce
      ? {}
      : {
          animate: { x: [0, dx, 0], y: [0, dy, 0] },
          transition: { duration: dur, repeat: Infinity, ease: "easeInOut" },
        };
  return (
    <div aria-hidden="true" className="no-print pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div {...anim(60, 40, 14)} className="orb -left-20 top-10 h-[420px] w-[420px] bg-mint/30" />
      <motion.div {...anim(-50, 60, 18)} className="orb right-[-120px] top-[-60px] h-[520px] w-[520px] bg-cyan/25" />
      <motion.div {...anim(40, -50, 16)} className="orb bottom-[-160px] left-1/3 h-[460px] w-[460px] bg-violet/25" />
    </div>
  );
}
