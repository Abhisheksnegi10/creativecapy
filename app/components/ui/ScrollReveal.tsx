'use client';

import { type ReactNode } from 'react';
import { motion, type Variant } from 'framer-motion';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { useAnimation } from '@/app/providers/AnimationProvider';
import { cn } from '@/lib/utils';

/* ————————————————————————————————————————————
   ScrollReveal (Design System §12, §13)
   
   Declarative wrapper for scroll-triggered animations.
   Standardizes all section entrances across the site.
   
   Usage:
     <ScrollReveal>
       <h2>This fades up on scroll</h2>
     </ScrollReveal>
     
     <ScrollReveal direction="left" delay={0.2} stagger={0.1}>
       {cards.map(card => <Card key={card.id} />)}
     </ScrollReveal>
   ———————————————————————————————————————————— */

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  /** Direction the element slides from. Default: 'up' */
  direction?: RevealDirection;
  /** Delay before animation starts (seconds). Default: 0 */
  delay?: number;
  /** Duration of the reveal (seconds). Default: 0.9 */
  duration?: number;
  /** Fire only once. Default: true */
  once?: boolean;
  /** Amount of element visible before triggering. Default: 0.15 */
  amount?: number;
  /** If true, staggers children instead of animating as one block */
  stagger?: number;
  /** Additional className */
  className?: string;
  /** HTML element to render as */
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'ul' | 'ol';
}

/* ————— Direction → initial offset map ————— */
const directionOffset: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.9,
  once = true,
  amount = 0.15,
  stagger,
  className,
  as = 'div',
}: ScrollRevealProps) {
  const { ref, isInView } = useScrollReveal({ once, amount });
  const { prefersReducedMotion } = useAnimation();

  const offset = directionOffset[direction];

  // If reduced motion, show immediately
  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  // Stagger mode: animate container with staggered children
  if (stagger !== undefined) {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: stagger,
          delayChildren: delay,
        },
      },
    };

    const childVariants: Record<string, Variant> = {
      hidden: { opacity: 0, x: offset.x, y: offset.y },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          ease: [0.19, 1, 0.22, 1] as const,
        },
      },
    };

    const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

    return (
      <MotionTag
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={className}
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div key={i} variants={childVariants}>
                {child}
              </motion.div>
            ))
          : children}
      </MotionTag>
    );
  }

  // Single block mode
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                duration,
                delay,
                ease: [0.19, 1, 0.22, 1] as const,
              },
            }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
