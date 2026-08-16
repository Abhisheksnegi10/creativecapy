import { forwardRef, type HTMLAttributes, type ElementType } from 'react';
import { cn } from '@/lib/utils';

/* ————————————————————————————————————————————
   Container
   Constrains content to the design grid.
   Desktop: 1440px max-width, 80px margins (from brand guideline §12).
   ———————————————————————————————————————————— */
interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Render as a different HTML element. Default: `div` */
  as?: ElementType;
  /** Narrower container for text-heavy layouts */
  narrow?: boolean;
}

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ as: Tag = 'div', className, narrow = false, children, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(
          'mx-auto w-full',
          'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20',
          narrow ? 'max-w-[960px]' : 'max-w-[1440px]',
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Container.displayName = 'Container';

export { Container };
export type { ContainerProps };
