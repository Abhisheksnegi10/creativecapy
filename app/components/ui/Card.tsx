'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* ————————————————————————————————————————————
   Card Variants (CVA)
   Brand radius: 24px. Shadows: soft & diffused.
   Motion: 240ms card hover (brand guideline §17).
   ———————————————————————————————————————————— */
const cardVariants = cva(
  [
    'relative overflow-hidden',
    'transition-all duration-[240ms] ease-smooth',
  ],
  {
    variants: {
      /** Visual style */
      variant: {
        default: [
          'bg-surface border border-border',
          'rounded-lg',
          'shadow-card',
        ],
        elevated: [
          'bg-surface',
          'rounded-lg',
          'shadow-soft',
        ],
        outlined: [
          'bg-transparent border border-border',
          'rounded-lg',
        ],
        dark: [
          'bg-soft-graphite text-cream border border-border-dark',
          'rounded-lg',
        ],
        ghost: [
          'bg-transparent',
          'rounded-lg',
        ],
      },
      /** Internal padding */
      padding: {
        none: 'p-0',
        sm: 'p-4 md:p-6',
        md: 'p-6 md:p-8',
        lg: 'p-8 md:p-10',
      },
      /** Hover interaction */
      hover: {
        true: 'hover:-translate-y-1 hover:shadow-elevated cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: false,
    },
  }
);

/* ————————————————————————————————————————————
   Card Component
   ———————————————————————————————————————————— */
interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, hover, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/* ————————————————————————————————————————————
   Card Sub-components
   ———————————————————————————————————————————— */
const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-2', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-4', className)}
    {...props}
  />
));
CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-4 pt-4', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

const CardImage = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative overflow-hidden rounded-xl -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6',
      className
    )}
    {...props}
  >
    {children}
  </div>
));
CardImage.displayName = 'CardImage';

export { Card, CardHeader, CardContent, CardFooter, CardImage, cardVariants };
export type { CardProps };
