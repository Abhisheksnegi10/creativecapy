'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimation } from '@/app/providers/AnimationProvider';

/* ————————————————————————————————————————————
   LoadingScreen (Design System §14, §12)
   
   Full-page loader with the loading capybara mascot.
   Shows on initial page load, fades out after 
   content is ready.
   ———————————————————————————————————————————— */

export function LoadingScreen() {
  const { isReady, setReady } = useAnimation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Minimum display time for the loading animation
    const minTimer = setTimeout(() => {
      setReady();
    }, 1800);

    return () => clearTimeout(minTimer);
  }, [setReady]);

  useEffect(() => {
    if (isReady) {
      // Small delay to let the exit animation play
      const hideTimer = setTimeout(() => setShow(false), 600);
      return () => clearTimeout(hideTimer);
    }
  }, [isReady]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] as const }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111111]"
          style={{ pointerEvents: isReady ? 'none' : 'all' }}
        >
          {/* Subtle grain texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url('/textures/soft grain.png')`,
              backgroundSize: '240px',
            }}
          />

          {/* Mascot — breathing animation */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-[160px] h-[180px] sm:w-[200px] sm:h-[220px] mb-8"
            style={{
              filter: 'drop-shadow(0 6px 20px rgba(184, 116, 67, 0.2)) drop-shadow(0 16px 40px rgba(0, 0, 0, 0.35))',
            }}
          >
            <Image
              src="/Capy's/loading.png"
              alt="CreativeCapy loading"
              fill
              className="object-contain"
              sizes="200px"
              priority
            />
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.19, 1, 0.22, 1] as const }}
            className="flex flex-col items-center gap-4"
          >
            <span className="font-display text-[1.5rem] sm:text-[1.75rem] font-light text-[#F8F2E8] tracking-[-0.02em]">
              Creative<span className="text-[#B87443]">Capy</span>
            </span>

            {/* Progress bar */}
            <div className="w-32 h-[2px] bg-[#F8F2E8]/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.6, ease: [0.19, 1, 0.22, 1] as const }}
                className="h-full bg-gradient-to-r from-[#B87443] to-[#D4956A] origin-left"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
