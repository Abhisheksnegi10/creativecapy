'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';
import { Button } from '@/app/components/ui/Button';

/* ————————————————————————————————————————————
   Framer Motion Variants (Awwwards Smooth Easing)
   ———————————————————————————————————————————— */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
};

const capyBreathing = {
  animate: {
    y: [0, -6, 0],
    scale: [1, 1.008, 1],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

/* ————————————————————————————————————————————
   HeroSection Component
   Elevated Awwwards-quality luxury editorial hero.
   ———————————————————————————————————————————— */
export function HeroSection() {
  return (
    <section className="relative w-full bg-dark text-cream pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-12 sm:pb-16 md:pb-24 overflow-hidden select-none">
      {/* Background Layers — Vignette, Radial Glows, Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-dark/40 to-dark pointer-events-none z-10" />

      {/* Main Capybara Backlight Glow */}
      <div className="absolute top-1/4 right-1/6 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[650px] lg:h-[650px] bg-copper/20 rounded-full blur-[80px] sm:blur-[120px] lg:blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/12 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-warm-beige/5 rounded-full blur-[60px] sm:blur-[90px] lg:blur-[120px] pointer-events-none" />

      {/* Subtle Grain & Matte Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-10 mix-blend-overlay"
        style={{
          backgroundImage: `url('/textures/soft grain.png')`,
          backgroundSize: '240px',
        }}
      />

      <Container className="px-4 sm:px-6 md:px-10 lg:px-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center min-h-[72vh]">
          {/* Left Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col gap-5 md:gap-6 relative z-30"
          >


            {/* Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-[2.25rem] sm:text-[2.75rem] md:text-7xl lg:text-[5.5rem] font-light leading-[0.93] sm:leading-[0.92] tracking-[-0.03em] text-balance text-cream"
            >
              Websites.
              <br />
              Brands.
              <br />
              <span className="bg-gradient-to-r from-[#D88A50] via-[#B87443] to-[#92562B] bg-clip-text text-transparent font-normal italic drop-shadow-sm">
                Experiences.
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-[1.0625rem] sm:text-[1.125rem] text-cream/75 max-w-[500px] leading-[1.75] font-light tracking-wide pt-1"
            >
              We help ambitious businesses create digital experiences that people
              remember—and trust.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 sm:gap-7 mt-1 sm:mt-2"
            >
              {/* Primary Button — Luxurious Copper Gradient */}
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-[#B87443] via-[#C87F4A] to-[#9A5F35] hover:from-[#C87F4A] hover:to-[#B87443] text-white shadow-[0_6px_24px_rgba(184,116,67,0.28)] hover:shadow-[0_10px_35px_rgba(184,116,67,0.45)] hover:-translate-y-0.5 transition-all duration-300 ease-out-expo text-[0.9375rem] px-8 h-13 rounded-md"
              >
                <span>Start a Project</span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Button>

              {/* Secondary Button — Underline & Animated Arrow */}
              <Button
                href="/work"
                variant="link"
                size="lg"
                className="group relative text-cream/85 hover:text-cream text-[0.9375rem] font-medium gap-2.5 py-1 px-0 h-auto"
              >
                <span className="relative">
                  View Our Work
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-copper scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out-expo origin-left" />
                </span>
                <span className="text-sm text-copper group-hover:translate-x-1 transition-transform duration-300 ease-out-expo">
                  →
                </span>
              </Button>
            </motion.div>

            {/* Handwritten Sticky Note */}
            <motion.div
              variants={itemVariants}
              className="mt-5 sm:mt-6 hidden sm:inline-flex items-start gap-3 p-4 bg-[#FAF6EE] text-dark rounded-md shadow-[0_12px_32px_rgba(0,0,0,0.14)] transform -rotate-[2.5deg] max-w-[200px] border border-amber-200/50 relative hover:rotate-0 transition-transform duration-300 ease-out-expo"
            >
              {/* Pin */}
              <div className="absolute -top-1.5 left-5 w-3.5 h-3.5 rounded-full bg-copper shadow-[0_2px_6px_rgba(184,116,67,0.5)]" />
              <div className="flex flex-col pt-1">
                <p className="font-serif italic text-[0.85rem] text-dark/90 leading-snug">
                  Currently obsessed with pixel perfect details.
                </p>
                <span className="text-copper text-[0.75rem] mt-2 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Column — Hero BG + Capybara Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.19, 1, 0.22, 1] as const }}
            className="lg:col-span-7 relative flex justify-center items-center min-h-[360px] sm:min-h-[460px] md:min-h-[560px] lg:min-h-[640px]"
          >
            {/* Warm copper ambient glow behind the mascot */}
            <div className="absolute z-10 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] rounded-full bg-copper/12 blur-[50px] sm:blur-[80px] md:blur-[100px] pointer-events-none translate-y-[-15%]" />

            {/* Capybara Mascot — positioned so head aligns with upper-center of copper ring */}
            <motion.div
              variants={capyBreathing}
              animate="animate"
              className="relative z-20 w-[240px] h-[280px] sm:w-[300px] sm:h-[350px] md:w-[400px] md:h-[460px] lg:w-[480px] lg:h-[540px] xl:w-[520px] xl:h-[580px] shrink-0 -translate-x-[4%] lg:-translate-x-[6%] -translate-y-[12%] sm:-translate-y-[10%] lg:-translate-y-[9%]"
              style={{
                filter: 'drop-shadow(0 6px 20px rgba(184,116,67,0.2)) drop-shadow(0 16px 40px rgba(0,0,0,0.35))',
              }}
            >
              <Image
                src="/Capy's/hero.png"
                alt="CreativeCapy 3D Mascot holding a pencil"
                fill
                priority
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 520px"
                className="object-contain object-bottom transform hover:scale-[1.02] transition-transform duration-500 ease-out-expo"
              />
            </motion.div>

            {/* Hero Background — placed in front (z-30) so the laptop, books, and mug overlap the mascot */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
              <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[540px] md:h-[540px] lg:w-[660px] lg:h-[660px] xl:w-[720px] xl:h-[720px]">
                <Image
                  src="/Capy's/hero bg.png"
                  alt="Creative workspace with floating UI cards, laptop, and design elements"
                  fill
                  sizes="(max-width: 640px) 380px, (max-width: 1024px) 540px, 720px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mouse Scroll Indicator */}
        <div className="flex flex-col items-center justify-center pt-10 pb-6 gap-2 text-center">
          <div className="w-4 h-7 rounded-full border border-cream/25 flex items-start justify-center p-0.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const }}
              className="w-1 h-1.5 rounded-full bg-copper"
            />
          </div>
          <span className="text-[9px] font-mono tracking-[0.2em] text-muted/70 uppercase">
            Scroll to Explore
          </span>
        </div>


      </Container>
    </section>
  );
}
