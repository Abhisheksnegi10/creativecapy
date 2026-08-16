import { type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* ————————————————————————————————————————————
   Section Variants (CVA)
   Consistent vertical rhythm using the 8-point spacing system.
   ———————————————————————————————————————————— */
const sectionVariants = cva('relative w-full', {
  variants: {
    /** Vertical padding size */
    spacing: {
      none: 'py-0',
      sm: 'py-12 md:py-16',
      md: 'py-16 md:py-24',
      lg: 'py-24 md:py-32',
      xl: 'py-32 md:py-48',
    },
    /** Background theme */
    background: {
      default: 'bg-background text-foreground',
      cream: 'bg-cream text-foreground',
      dark: 'bg-dark text-cream',
      'warm-beige': 'bg-warm-beige text-dark',
      surface: 'bg-surface text-foreground',
    },
  },
  defaultVariants: {
    spacing: 'lg',
    background: 'default',
  },
});

/* ————————————————————————————————————————————
   Section Component
   Semantic wrapper for page sections.
   ———————————————————————————————————————————— */
interface SectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  /** Optional section ID for anchor navigation */
  id?: string;
  /** Render as a different element (e.g. `article`, `aside`) */
  as?: 'section' | 'article' | 'aside' | 'header' | 'footer' | 'div';
}

function Section({
  className,
  spacing,
  background,
  as: Tag = 'section',
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(sectionVariants({ spacing, background, className }))}
      {...props}
    >
      {children}
    </Tag>
  );
}

Section.displayName = 'Section';

export { Section, sectionVariants };
export type { SectionProps };

