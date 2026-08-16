'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';

/* ————————————————————————————————————————————
   Process Steps Data
   ———————————————————————————————————————————— */
const STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'We understand your goals, audience and challenges deeply.',
    capybara: "/Capy's/checklist cappy.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We create a strategic plan and wireframes that set the direction.',
    capybara: "/Capy's/thinking cappy.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Design',
    description: 'We craft visuals and experiences that are beautiful and intuitive.',
    capybara: "/Capy's/designer cappy.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Develop',
    description: 'We build fast, secure and scalable websites with clean code.',
    capybara: "/Capy's/coding cappy.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Launch',
    description: 'We test, optimize and launch your product for real-world impact.',
    capybara: "/Capy's/rocket cappy.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

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
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
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

const stepsStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const stepFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.19, 1, 0.22, 1] as const },
  },
};

const capyBreathing = {
  animate: {
    y: [0, -4, 0],
    scale: [1, 1.006, 1],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

/* ————————————————————————————————————————————
   ProcessSection Component
   ———————————————————————————————————————————— */
export function ProcessSection() {
  return (
    <section
      id="process"
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
      <div className="absolute top-[10%] left-[-6%] w-[500px] h-[500px] bg-[#B87443]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-8%] w-[400px] h-[400px] bg-[#E7D7C3]/4 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-[2] px-4 sm:px-6 md:px-10 lg:px-16 pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-20 sm:pb-24 md:pb-32">

        {/* ════════════════════════════════════════════
           SECTION HEADER
           ════════════════════════════════════════════ */}
        <motion.div
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20 md:mb-28"
        >
          {/* Left — Headline */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B87443]" />
              <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-[#B87443]">
                How We Work
              </span>
            </div>

            {/* Headline */}
            <motion.h2
              variants={headlineReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="font-display text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] xl:text-[4.5rem] font-light leading-[0.97] tracking-[-0.03em] text-[#F8F2E8]"
            >
              <motion.span variants={lineReveal} className="block">
                A proven process.
              </motion.span>
              <motion.span variants={lineReveal} className="block">
                Built for{' '}
                <span className="bg-gradient-to-r from-[#D88A50] via-[#B87443] to-[#92562B] bg-clip-text text-transparent font-normal italic">
                  success.
                </span>
              </motion.span>
            </motion.h2>
          </div>

          {/* Right — Description + Badge */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-12">
            <p className="text-[1.0625rem] leading-[1.8] text-[#F8F2E8]/60 font-light max-w-[440px]">
              We follow a collaborative process that ensures clarity,
              creativity and results—every step of the way.
            </p>

            {/* Stamp Badge */}
            <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] relative self-end lg:self-start">
              <div className="w-full h-full rounded-full border border-[#B87443]/30 flex flex-col items-center justify-center relative">
                {/* Circular text — using SVG for the curved text */}
                <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
                  <defs>
                    <path id="circlePath" d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
                  </defs>
                  <text className="fill-[#B87443] text-[9px] uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-inter)' }}>
                    <textPath href="#circlePath" startOffset="0%">
                      Collaborative By Nature · Focused On Impact ·{' '}
                    </textPath>
                  </text>
                </svg>
                {/* Center capybara silhouette */}
                <div className="w-8 h-8 lg:w-10 lg:h-10 relative z-10">
                  <Image
                    src="/Brand/logo/capy icon.png"
                    alt="CreativeCapy stamp"
                    fill
                    className="object-contain opacity-60"
                    sizes="40px"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
           5-STEP TIMELINE
           ════════════════════════════════════════════ */}
        <motion.div
          variants={stepsStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="relative"
        >
          {/* Dashed connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[140px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-[#B87443]/25 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                variants={stepFadeUp}
                className="group flex flex-col items-center text-center relative"
              >
                {/* Number */}
                <span className="font-display text-[2rem] sm:text-[2.5rem] font-light text-[#B87443] leading-none mb-3">
                  {step.number}
                </span>

                {/* Dashed connector dot (desktop) */}
                <div className="hidden lg:block absolute top-[140px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#B87443] border-2 border-[#111111] z-10" />

                {/* Capybara */}
                <motion.div
                  variants={capyBreathing}
                  animate="animate"
                  className="relative w-[120px] h-[130px] sm:w-[140px] sm:h-[150px] md:w-[160px] md:h-[170px] lg:w-[150px] lg:h-[160px] mb-5"
                  style={{
                    filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.3))',
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  <Image
                    src={step.capybara}
                    alt={`Capybara mascot for ${step.title} step`}
                    fill
                    className="object-contain object-bottom"
                    sizes="160px"
                  />
                </motion.div>

                {/* Icon */}
                <div className="w-11 h-11 rounded-full border border-[#B87443]/30 bg-[#B87443]/10 flex items-center justify-center text-[#B87443] mb-4 group-hover:bg-[#B87443] group-hover:text-white group-hover:border-[#B87443] transition-all duration-300">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-[1.375rem] sm:text-[1.5rem] font-medium text-[#F8F2E8] mb-2 group-hover:text-[#B87443] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[0.875rem] leading-[1.7] text-[#F8F2E8]/50 font-light max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
           BOTTOM CTA
           ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
          className="mt-20 md:mt-28 flex justify-center"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 text-[#F8F2E8]/80 hover:text-[#F8F2E8] font-display text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] font-light tracking-[-0.01em] transition-colors duration-300"
          >
            <span className="relative">
              Let&apos;s build something amazing together
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B87443] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left" />
            </span>
            <span className="text-[#B87443] group-hover:translate-x-1.5 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
              →
            </span>
          </a>
        </motion.div>

      </Container>
    </section>
  );
}
