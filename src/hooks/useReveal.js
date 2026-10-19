import { useReducedMotion } from "framer-motion";

/**
 * Shared scroll-reveal presets. Returns Framer Motion props for a container
 * and its children so sections animate in once as they enter the viewport.
 * Respects the user's reduced-motion preference.
 */
export function useReveal(options = {}) {
  const reduce = useReducedMotion();
  const { y = 28, stagger = 0.08, delay = 0, once = true, amount = 0.2 } = options;

  const container = {
    initial: "hidden",
    whileInView: "show",
    viewport: { once, amount },
    variants: {
      hidden: {},
      show: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: reduce ? 0 : delay } },
    },
  };

  const item = {
    variants: {
      hidden: { opacity: 0, y: reduce ? 0 : y, filter: reduce ? "none" : "blur(6px)" },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: reduce ? 0 : 0.7, ease: [0.2, 0.8, 0.2, 1] },
      },
    },
  };

  return { container, item, reduce };
}
