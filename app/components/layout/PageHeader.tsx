'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  theme?: 'dark' | 'light';
}

/* ————————————————————————————————————————————
   Framer Motion Variants
   ———————————————————————————————————————————— */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

/* ————————————————————————————————————————————
   PageHeader Component
   ———————————————————————————————————————————— */
export function PageHeader({ title, subtitle, eyebrow, theme = 'dark' }: PageHeaderProps) {
  const isDark = theme === 'dark';

  return (
    <section
      className={`relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden ${
        isDark ? 'bg-[#111111] text-[#F8F2E8]' : 'bg-[#F7F3EB] text-[#111111]'
      }`}
    >
      {/* ——— Paper Texture Overlay ——— */}
      <div
        className={`absolute inset-0 pointer-events-none z-[1] ${
          isDark ? 'opacity-[0.03] mix-blend-overlay' : 'opacity-[0.04] mix-blend-multiply'
        }`}
        style={{
          backgroundImage: `url('/textures/soft grain.png')`,
          backgroundSize: '240px',
        }}
      />

      {/* ——— Ambient Glow (Dark Theme) ——— */}
      {isDark && (
        <>
          <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#B87443]/8 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-[#D88A50]/5 rounded-full blur-[100px] pointer-events-none" />
        </>
      )}

      {/* ——— Ambient Glow (Light Theme) ——— */}
      {!isDark && (
        <>
          <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#B87443]/4 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#E7D7C3]/15 rounded-full blur-[100px] pointer-events-none" />
        </>
      )}

      <Container className="relative z-[2] px-6 sm:px-10 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          {eyebrow && (
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B87443]" />
              <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-[#B87443]">
                {eyebrow}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#B87443]" />
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className={`font-display text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] font-light leading-[1.05] tracking-[-0.03em] mb-6 ${
              isDark ? 'text-[#F8F2E8]' : 'text-[#111111]'
            }`}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className={`text-[1.125rem] sm:text-[1.25rem] leading-[1.7] font-light max-w-2xl ${
              isDark ? 'text-[#A39E97]' : 'text-[#4B463F]/80'
            }`}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
