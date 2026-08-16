import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* ————————————————————————————————————————————
   Heading Variants (CVA)
   Display font: Cormorant Garamond.
   Type scale from brand guideline §09.
   ———————————————————————————————————————————— */
const headingVariants = cva('font-display text-balance', {
  variants: {
    /** Visual size (decoupled from semantic tag) */
    size: {
      'display-xl': 'text-h1 md:text-display lg:text-display-xl font-light',
      display: 'text-h2 md:text-h1 lg:text-display font-light',
      h1: 'text-h3 md:text-h2 lg:text-h1 font-medium',
      h2: 'text-h3 md:text-h2 font-medium',
      h3: 'text-h4 md:text-h3 font-medium',
      h4: 'text-body-lg md:text-h4 font-semibold',
    },
    /** Text tone — named 'tone' to avoid collision with HTML color attr */
    tone: {
      default: 'text-dark',
      cream: 'text-cream',
      copper: 'text-copper',
      foreground: 'text-foreground',
      inherit: 'text-inherit',
    },
  },
  defaultVariants: {
    size: 'h2',
    tone: 'default',
  },
});

/* ————————————————————————————————————————————
   Heading Component
   Semantic tag is independent of visual size.
   Use `as` for SEO structure, `size` for visual scale.
   ———————————————————————————————————————————— */
interface HeadingProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  /** Semantic HTML heading tag. Defaults to `h2`. */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
  /** Show a copper accent line above the heading */
  accent?: boolean;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as: Tag = 'h2',
      size,
      tone,
      accent = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {accent && (
          <span
            className="block w-12 h-0.5 bg-copper mb-6"
            aria-hidden="true"
          />
        )}
        <Tag
          ref={ref as React.Ref<HTMLHeadingElement>}
          className={cn(headingVariants({ size, tone, className }))}
          {...props}
        >
          {children}
        </Tag>
      </>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading, headingVariants };
export type { HeadingProps };
