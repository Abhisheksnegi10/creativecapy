'use client';

import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* ————————————————————————————————————————————
   Button Variants (CVA)
   Matches brand motion language: 180ms hover, smooth easing.
   ———————————————————————————————————————————— */
const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-body font-medium whitespace-nowrap',
    'transition-all duration-[180ms] ease-smooth',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-50',
    'active:scale-[0.98]',
    'cursor-pointer select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-copper text-white',
          'hover:bg-copper-dark',
          'shadow-sm hover:shadow-soft',
        ],
        secondary: [
          'bg-dark text-cream',
          'hover:bg-soft-graphite',
        ],
        outline: [
          'border border-border bg-transparent text-foreground',
          'hover:border-copper hover:text-copper',
        ],
        ghost: [
          'bg-transparent text-foreground',
          'hover:bg-warm-beige/40 hover:text-copper',
        ],
        link: [
          'bg-transparent text-copper',
          'underline-offset-4 hover:underline',
          'h-auto px-0 py-0',
        ],
      },
      size: {
        sm: 'h-10 px-5 text-caption rounded-md',
        md: 'h-12 px-8 text-body-sm rounded-md',
        lg: 'h-14 px-10 text-body rounded-md',
        icon: 'h-10 w-10 rounded-md p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

/* ————————————————————————————————————————————
   Button Props
   ———————————————————————————————————————————— */
type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/* ————————————————————————————————————————————
   Button Component
   Renders <button> by default, <a> when href is provided.
   ———————————————————————————————————————————— */
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));

    if ('href' in props && props.href !== undefined) {
      const { href, ...rest } = props as ButtonAsLink;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...rest}
        />
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonAsButton)}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
