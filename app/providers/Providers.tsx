'use client';

import { type ReactNode } from 'react';
import { SmoothScrollProvider } from './SmoothScrollProvider';
import { AnimationProvider } from './AnimationProvider';
import { PageTransition } from '@/app/components/ui/PageTransition';
import { LoadingScreen } from '@/app/components/ui/LoadingScreen';

/* ————————————————————————————————————————————
   Combined Providers
   
   Single wrapper that composes all providers
   and the motion infrastructure.
   Keeps layout.tsx clean and readable.
   ———————————————————————————————————————————— */

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AnimationProvider>
      <SmoothScrollProvider>
        <LoadingScreen />
        <PageTransition>
          {children}
        </PageTransition>
      </SmoothScrollProvider>
    </AnimationProvider>
  );
}
