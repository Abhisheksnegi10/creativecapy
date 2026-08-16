'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';

/* ————————————————————————————————————————————
   Framer Motion Variants
   ———————————————————————————————————————————— */
const sectionFadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.19, 1, 0.22, 1] as const },
  },
};

const headlineReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const lineReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] as const },
  },
};

const capyBreathing = {
  animate: {
    y: [0, -5, 0],
    scale: [1, 1.008, 1],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

/* ————————————————————————————————————————————
   CtaSection Component
   ———————————————————————————————————————————— */
export function CtaSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#111111' }}
    >
      {/* ——— Texture Overlay ——— */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1] mix-blend-overlay"
        style={{
          backgroundImage: `url('/textures/soft grain.png')`,
          backgroundSize: '240px',
        }}
      />

      {/* ——— Ambient Glows ——— */}
      <div className="absolute top-[10%] left-[-6%] w-[400px] h-[400px] bg-[#B87443]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-8%] w-[350px] h-[350px] bg-[#E7D7C3]/4 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-[2] px-4 sm:px-6 md:px-10 lg:px-16 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-32 md:pb-32">
        <div className="bg-[#1A1A1A] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-[#2A2A2A]/20 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Left — Content */}
            <motion.div
              variants={sectionFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-7 flex flex-col p-6 sm:p-10 md:p-14 lg:p-20 z-10"
            >
              {/* Stamp / Badge */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#B87443]" />
                <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-[#B87443]">
                  Quality Work · Happy Clients
                </span>
              </div>

              {/* Headline */}
              <motion.h2
                variants={headlineReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="font-display text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-light leading-[1.05] tracking-[-0.03em] text-[#F8F2E8] mb-6"
              >
                <motion.span variants={lineReveal} className="block">
                  Great work happens
                </motion.span>
                <motion.span variants={lineReveal} className="block">
                  when we work{' '}
                  <span className="bg-gradient-to-r from-[#D88A50] via-[#B87443] to-[#92562B] bg-clip-text text-transparent font-normal italic">
                    together.
                  </span>
                </motion.span>
              </motion.h2>

              {/* Subtext */}
              <p className="text-[1.0625rem] leading-[1.8] text-[#F8F2E8]/60 font-light max-w-[440px] mb-10">
                Have a project in mind? Let&apos;s create something amazing and meaningful together.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-7">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#B87443] via-[#C87F4A] to-[#9A5F35] hover:from-[#C87F4A] hover:to-[#B87443] text-white font-medium text-[0.9375rem] px-8 h-13 rounded-[10px] shadow-[0_6px_24px_rgba(184,116,67,0.28)] hover:shadow-[0_10px_35px_rgba(184,116,67,0.45)] hover:-translate-y-0.5 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                  <span>Start a Project</span>
                  <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    ↗
                  </span>
                </a>
                
                <a
                  href="mailto:hello@creativecapy.com"
                  className="group relative inline-flex items-center gap-2 text-[#F8F2E8]/85 hover:text-[#F8F2E8] text-[0.9375rem] font-medium transition-colors duration-300"
                >
                  <span className="relative">
                    Let&apos;s talk
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B87443] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left" />
                  </span>
                  <span className="text-sm text-[#B87443] group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
                    →
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right — Visual Capybara */}
            <div className="lg:col-span-5 relative flex items-end justify-center min-h-[240px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[100%]">
              {/* Decorative radial gradient behind capybara */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#B87443]/10 rounded-full blur-[80px] pointer-events-none" />
              
              <motion.div
                variants={capyBreathing}
                animate="animate"
                className="relative z-10 w-[240px] h-[280px] sm:w-[320px] sm:h-[360px] lg:w-[380px] lg:h-[420px] -mb-4 lg:-mb-10 lg:ml-10"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))' }}
              >
                <Image
                  src="/Capy's/coding cappy.png"
                  alt="CreativeCapy mascot wearing a code shirt"
                  fill
                  className="object-contain object-bottom"
                  sizes="400px"
                />
              </motion.div>
            </div>
            
          </div>
        </div>
      </Container>
    </section>
  );
}
