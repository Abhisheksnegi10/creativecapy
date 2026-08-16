'use client';

import { useRef, useCallback, useState, useEffect } from 'react';

/* ————————————————————————————————————————————
   useMagneticButton (Design System §13)
   
   Cursor-following effect within a configurable radius.
   Desktop only — falls back to standard hover on touch.
   
   Usage:
     const { ref, style } = useMagneticButton();
     <button ref={ref} style={style}>
   ———————————————————————————————————————————— */

interface UseMagneticButtonOptions {
  /** Maximum pixel displacement. Default: 12 */
  strength?: number;
  /** Transition duration in ms. Default: 150 */
  duration?: number;
}

export function useMagneticButton({
  strength = 12,
  duration = 150,
}: UseMagneticButtonOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isTouchDevice || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      setPosition({
        x: deltaX * strength,
        y: deltaY * strength,
      });
    },
    [isTouchDevice, strength]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const style: React.CSSProperties = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: `transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`,
  };

  return {
    ref,
    style,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}
