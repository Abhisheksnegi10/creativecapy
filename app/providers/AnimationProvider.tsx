'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

/* ————————————————————————————————————————————
   Animation Provider (Design System §12, §16)
   
   Provides shared animation context:
   - Reduced motion detection
   - Global animation readiness
   
   Components use `useAnimation()` to respect
   the user's motion preferences.
   ———————————————————————————————————————————— */

interface AnimationContextValue {
  /** True when the user prefers reduced motion */
  prefersReducedMotion: boolean;
  /** True after the initial page load animation completes */
  isReady: boolean;
  /** Mark the app as ready (called after loading screen) */
  setReady: () => void;
}

const AnimationContext = createContext<AnimationContextValue>({
  prefersReducedMotion: false,
  isReady: false,
  setReady: () => {},
});

export function useAnimation() {
  return useContext(AnimationContext);
}

interface AnimationProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const setReady = () => setIsReady(true);

  return (
    <AnimationContext.Provider value={{ prefersReducedMotion, isReady, setReady }}>
      {children}
    </AnimationContext.Provider>
  );
}
