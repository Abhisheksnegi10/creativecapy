'use client';

import { useRef } from 'react';
import { useScroll, useTransform, type MotionValue } from 'framer-motion';

/* ————————————————————————————————————————————
   useParallax (Design System §12, §13)
   
   Scroll-linked translateY at configurable speed.
   Used for hero backgrounds, ambient glows, and 
   decorative elements.
   
   Usage:
     const { ref, y } = useParallax({ speed: 0.2 });
     <motion.div ref={ref} style={{ y }}>
   ———————————————————————————————————————————— */

interface UseParallaxOptions {
  /** Parallax speed multiplier. 0.1 = subtle, 0.3 = noticeable. Default: 0.15 */
  speed?: number;
  /** Scroll offset range in px. Default: [-300, 300] */
  offset?: [number, number];
}

interface UseParallaxReturn {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
}

export function useParallax({
  speed = 0.15,
  offset = [-300, 300],
}: UseParallaxOptions = {}): UseParallaxReturn {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offset[0] * speed, offset[1] * speed]
  );

  return { ref, y };
}
