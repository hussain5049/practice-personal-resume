import { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { ticker } from "../data/resume.js";

/** Thin gradient progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-gradient-to-r from-mint via-violet to-mint"
    />
  );
}

/** Horizontal scanline sweeping down the page. */
export function Scanline() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return <div aria-hidden="true" className="scanline" />;
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
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[560px] w-[560px] rounded-full md:block"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(0,243,255,0.09),rgba(188,19,254,0.05)_40%,transparent_70%)]" />
    </motion.div>
  );
}

/** Interactive particle network drawn on a fixed canvas behind the page. */
export function NeuralCanvas() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const mouse = { x: null, y: null };
    let nodes = [];
    let raf = 0;
    let w = 0;
    let h = 0;

    const count = () => (window.innerWidth < 768 ? 32 : 64);

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = count();
      nodes = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 1.8 + 0.7,
        c: i % 3 === 0 ? "#bc13fe" : "#00f3ff",
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.c;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const d = Math.hypot(n.x - m.x, n.y - m.y);
          if (d < 135) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(0, 243, 255, ${0.16 * (1 - d / 135)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        if (mouse.x !== null) {
          const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (d < 170) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(188, 19, 254, ${0.32 * (1 - d / 170)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduce]);

  if (reduce) return null;
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />;
}

/** Infinite ticker of capabilities. */
export function Marquee() {
  const items = [...ticker, ...ticker];
  return (
    <div
      aria-hidden="true"
      className="relative z-10 overflow-hidden border-y border-mint/15 bg-mint/[0.04] py-3.5"
    >
      <div className="marquee-track font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-mint">
        {items.map((t, i) => (
          <span key={i} className="whitespace-nowrap">
            ✦ {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Floating blurred orbs used behind the hero. */
export function Orbs() {
  const reduce = useReducedMotion();
  const anim = (dx, dy, dur) =>
    reduce ? {} : { animate: { x: [0, dx, 0], y: [0, dy, 0] }, transition: { duration: dur, repeat: Infinity, ease: "easeInOut" } };
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div {...anim(60, 40, 14)} className="orb -left-24 top-10 h-[460px] w-[460px] bg-mint/25" />
      <motion.div {...anim(-50, 60, 18)} className="orb right-[-140px] top-[-80px] h-[560px] w-[560px] bg-violet/25" />
      <motion.div {...anim(40, -50, 16)} className="orb bottom-[-180px] left-1/3 h-[460px] w-[460px] bg-cyan/20" />
    </div>
  );
}
