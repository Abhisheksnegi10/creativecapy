'use client';

import { useRef } from 'react';
import { useInView, type UseInViewOptions } from 'framer-motion';

/* ————————————————————————————————————————————
   useScrollReveal (Design System §12, §13)
   
   Reusable hook for intersection-based scroll reveal.
   Returns a ref to attach and a boolean for visibility.
   
   Usage:
     const { ref, isInView } = useScrollReveal();
     <motion.div ref={ref} animate={isInView ? 'visible' : 'hidden'}>
   ———————————————————————————————————————————— */

interface UseScrollRevealOptions {
  /** Trigger only once. Default: true */
  once?: boolean;
  /** Amount of element visible before triggering. Default: 0.15 */
  amount?: UseInViewOptions['amount'];
  /** Margin around the element. Default: '0px 0px -80px 0px' */
  margin?: UseInViewOptions['margin'];
}

export function useScrollReveal({
  once = true,
  amount = 0.15,
  margin = '0px 0px -80px 0px',
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount, margin });

  return { ref, isInView };
}
