'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';

/* ————————————————————————————————————————————
   Service Data
   ———————————————————————————————————————————— */
const SERVICES = [
  {
    number: '01',
    title: 'UI / UX Design',
    description:
      'Human-centered interfaces designed to be elegant, intuitive and conversion-focused.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    capybara: "/Capy's/designer cappy.png",
    href: '/services',
  },
  {
    number: '02',
    title: 'Web Development',
    description:
      'Fast, scalable websites built with modern technologies and exceptional performance.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    capybara: "/Capy's/coding cappy.png",
    href: '/services',
  },
  {
    number: '03',
    title: 'Brand Identity',
    description:
      'Distinct visual identities that help brands become memorable and trusted.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z" />
        <path d="M2 17l5-5 4 4 4-4 7 7" />
      </svg>
    ),
    capybara: "/Capy's/creative cappy.png",
    href: '/services',
  },
  {
    number: '04',
    title: 'Digital Marketing',
    description:
      'Performance marketing strategies that increase visibility, traffic and qualified leads.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    capybara: "/Capy's/SEO cappy.png",
    href: '/services',
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

const cardStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.19, 1, 0.22, 1] as const },
  },
};

const capyBreathing = {
  animate: {
    y: [0, -5, 0],
    scale: [1, 1.008, 1],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

const ctaFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] as const, delay: 0.2 },
  },
};

/* ————————————————————————————————————————————
   ServicesSection Component
   ———————————————————————————————————————————— */
export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#F7F2EB' }}
    >
      {/* ——— Paper Texture Overlay ——— */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1] mix-blend-multiply"
        style={{
          backgroundImage: `url('/textures/paper grain.png')`,
          backgroundSize: '300px',
        }}
      />

      {/* ——— Decorative Ambient Glows ——— */}
      <div className="absolute top-[15%] left-[-8%] w-[500px] h-[500px] bg-[#B87443]/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-[#E7D7C3]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* ——— Subtle Separator Line ——— */}
      <Container className="px-4 sm:px-6 md:px-10 lg:px-16 relative z-[2]">
        <div className="w-full h-[1px] bg-[#E2DDD5]" />
      </Container>

      <Container className="relative z-[2] px-4 sm:px-6 md:px-10 lg:px-16 pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-20 sm:pb-24 md:pb-32">

        {/* ════════════════════════════════════════════
           SECTION HEADER
           ════════════════════════════════════════════ */}
        <motion.div
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 md:mb-24"
        >
          {/* Left — Headline */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B87443]" />
              <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-[#B87443]">
                What We Do
              </span>
            </div>

            {/* Headline */}
            <motion.h2
              variants={headlineReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="font-display text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] xl:text-[4.5rem] font-light leading-[0.97] tracking-[-0.03em] text-[#111111]"
            >
              <motion.span variants={lineReveal} className="block">
                End-to-end digital
              </motion.span>
              <motion.span variants={lineReveal} className="block">
                solutions crafted
              </motion.span>
              <motion.span variants={lineReveal} className="block">
                for{' '}
                <span className="bg-gradient-to-r from-[#D88A50] via-[#B87443] to-[#92562B] bg-clip-text text-transparent font-normal italic">
                  ambitious brands.
                </span>
              </motion.span>
            </motion.h2>
          </div>

          {/* Right — Description */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:pb-2">
            <p className="text-[1.0625rem] leading-[1.8] text-[#4B463F]/80 font-light max-w-[440px]">
              From strategy and branding to design, development and
              marketing—we create digital experiences that help businesses
              grow with confidence.
            </p>
            <a
              href="/services"
              className="group inline-flex items-center gap-2 text-[#B87443] font-medium text-[0.9375rem] w-fit"
            >
              <span className="relative">
                View All Services
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B87443] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left" />
              </span>
              <span className="text-sm group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
                →
              </span>
            </a>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
           SERVICE CARDS
           ════════════════════════════════════════════ */}
        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.a
              key={service.title}
              href={service.href}
              variants={cardFadeUp}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[#E2DDD5]/80 bg-[#FFFDF8] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:-translate-y-2.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08),0_0_40px_rgba(184,116,67,0.04)] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-pointer"
            >
              {/* Left — Service Info */}
              <div className={`lg:col-span-7 flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-14 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex flex-col gap-5">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full border border-[#E2DDD5] bg-[#F7F3EB] flex items-center justify-center text-[#B87443] group-hover:bg-[#B87443] group-hover:text-white group-hover:border-[#B87443] group-hover:rotate-[8deg] transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="font-display text-[2rem] font-light text-[#E2DDD5] leading-none">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-light leading-[1.15] tracking-[-0.02em] text-[#111111] group-hover:text-[#B87443] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-10 h-[1px] bg-[#E2DDD5] group-hover:bg-[#B87443] group-hover:w-16 transition-all duration-400" />

                  {/* Description */}
                  <p className="text-[1rem] leading-[1.8] text-[#4B463F]/70 font-light max-w-[420px]">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 mt-2 text-[#B87443] text-[0.875rem] font-medium">
                    <span className="relative">
                      Explore Service
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B87443] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left" />
                    </span>
                    <span className="text-xs group-hover:translate-x-1.5 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* Right — Capybara Mascot */}
              <div className={`lg:col-span-5 relative flex items-end justify-center p-4 sm:p-6 md:p-8 lg:p-10 min-h-[200px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                {/* Warm ambient glow */}
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-[#B87443]/5 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Wooden Platform */}
                <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-[70%] max-w-[260px]">
                  {/* Platform shadow */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[80%] h-[6px] bg-[#4B463F]/8 rounded-full blur-[4px]" />
                  {/* Platform surface */}
                  <div className="w-full h-[8px] bg-gradient-to-b from-[#C9A87C] to-[#B8956B] rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.3)]" />
                </div>

                {/* Tiny Plants */}
                <div className="absolute bottom-7 sm:bottom-9 right-8 sm:right-12 flex items-end gap-1.5 pointer-events-none opacity-60">
                  <div className="w-1.5 h-4 bg-[#4B6B58] rounded-full" />
                  <div className="w-1 h-3 bg-[#5B7B68] rounded-full -translate-y-0.5" />
                  <div className="w-2 h-2 rounded-full bg-[#A39E97]/40" />
                </div>

                {/* Capybara Mascot */}
                <motion.div
                  variants={capyBreathing}
                  animate="animate"
                  className="relative z-10 w-[160px] h-[180px] sm:w-[200px] sm:h-[220px] lg:w-[220px] lg:h-[240px] mb-3 sm:mb-4 group-hover:-translate-y-1 transition-transform duration-500"
                  style={{
                    filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.1))',
                  }}
                >
                  <Image
                    src={service.capybara}
                    alt={`CreativeCapy mascot for ${service.title}`}
                    fill
                    className="object-contain object-bottom"
                    sizes="220px"
                  />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* ════════════════════════════════════════════
           BOTTOM CTA
           ════════════════════════════════════════════ */}
        <motion.div
          variants={ctaFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 md:mt-32 flex flex-col items-center text-center"
        >
          {/* Decorative Botanical Lines */}
          <div className="flex items-center gap-6 sm:gap-8 mb-8">
            {/* Left botanical */}
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="text-[#B87443]/25 hidden sm:block">
              <path d="M78 12C60 12 50 2 30 2S10 12 2 12" stroke="currentColor" strokeWidth="1" />
              <path d="M78 12C60 12 50 22 30 22S10 12 2 12" stroke="currentColor" strokeWidth="1" />
              <circle cx="40" cy="4" r="2" fill="currentColor" opacity="0.4" />
              <circle cx="25" cy="8" r="1.5" fill="currentColor" opacity="0.3" />
              <circle cx="55" cy="8" r="1.5" fill="currentColor" opacity="0.3" />
            </svg>

            <div className="w-2 h-2 rounded-full bg-[#B87443]/30" />

            {/* Right botanical */}
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="text-[#B87443]/25 hidden sm:block">
              <path d="M2 12C20 12 30 2 50 2S70 12 78 12" stroke="currentColor" strokeWidth="1" />
              <path d="M2 12C20 12 30 22 50 22S70 12 78 12" stroke="currentColor" strokeWidth="1" />
              <circle cx="40" cy="4" r="2" fill="currentColor" opacity="0.4" />
              <circle cx="25" cy="8" r="1.5" fill="currentColor" opacity="0.3" />
              <circle cx="55" cy="8" r="1.5" fill="currentColor" opacity="0.3" />
            </svg>
          </div>

          {/* CTA Text */}
          <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#B87443] font-semibold mb-3">
            Need something custom?
          </p>
          <p className="font-display text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-light text-[#111111] tracking-[-0.02em] mb-8 max-w-[480px] leading-[1.25]">
            We love solving unique business problems.
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#B87443] via-[#C87F4A] to-[#9A5F35] hover:from-[#C87F4A] hover:to-[#B87443] text-white font-medium text-[0.9375rem] px-8 py-4 rounded-[10px] shadow-[0_6px_24px_rgba(184,116,67,0.2)] hover:shadow-[0_12px_40px_rgba(184,116,67,0.35)] hover:-translate-y-0.5 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]"
          >
            <span>Let&apos;s Build Together</span>
            <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>

      </Container>
    </section>
  );
}
