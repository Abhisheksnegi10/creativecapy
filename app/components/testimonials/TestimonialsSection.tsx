'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';

/* ————————————————————————————————————————————
   Testimonial Data
   ———————————————————————————————————————————— */
const TESTIMONIALS = [
  {
    quote:
      'CreativeCapy delivered a stunning real estate platform that elevated our brand. The attention to detail and cinematic design truly sets them apart.',
    name: 'Maisai Team',
    title: 'Founder, Maisai Realty',
    brand: 'Maisai',
    brandSub: 'REALTY',
  },
  {
    quote:
      'They turned our pizza shop into a digital experience. Live status, WhatsApp ordering — everything just works and looks incredible.',
    name: 'TPS Team',
    title: 'Owner, The Pizza Slice',
    brand: 'The Pizza Slice',
    brandSub: 'BHOPAL',
  },
  {
    quote:
      'From design to development, CreativeCapy handled everything with precision and creativity. Our café website captures exactly who we are.',
    name: 'Poppin Team',
    title: "Founder, Poppin' Deli",
    brand: "Poppin'",
    brandSub: 'DELI',
  },
];

const BRAND_LOGOS = [
  { name: 'Maisai', sub: 'REALTY', fontClass: 'font-sans font-medium text-[0.875rem] tracking-wide' },
  { name: 'The Pizza Slice', sub: '', fontClass: 'font-serif font-bold italic text-lg' },
  { name: 'OKAPI', sub: '', fontClass: 'font-sans font-extrabold text-[0.8rem] tracking-widest' },
  { name: "Poppin'", sub: 'DELI', fontClass: 'font-serif font-semibold text-lg tracking-wide' },
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

const cardStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

/* ————————————————————————————————————————————
   TestimonialsSection Component
   ———————————————————————————————————————————— */
export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
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

      {/* ——— Ambient Glows ——— */}
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#B87443]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-8%] w-[350px] h-[350px] bg-[#E7D7C3]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* ——— Separator ——— */}
      <Container className="px-6 sm:px-10 lg:px-16 relative z-[2]">
        <div className="w-full h-[1px] bg-[#E2DDD5]" />
      </Container>

      <Container className="relative z-[2] px-6 sm:px-10 lg:px-16 pt-24 sm:pt-32 md:pt-40 pb-24 md:pb-32">

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
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B87443]" />
              <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-[#B87443]">
                Kind Words
              </span>
            </div>

            <motion.h2
              variants={headlineReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="font-display text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.5rem] font-light leading-[0.97] tracking-[-0.03em] text-[#111111]"
            >
              <motion.span variants={lineReveal} className="block">
                Trusted by founders
              </motion.span>
              <motion.span variants={lineReveal} className="block">
                and teams{' '}
                <span className="bg-gradient-to-r from-[#D88A50] via-[#B87443] to-[#92562B] bg-clip-text text-transparent font-normal italic">
                  worldwide.
                </span>
              </motion.span>
            </motion.h2>
          </div>

          {/* Right — Description + Link */}
          <div className="lg:col-span-6 flex flex-col gap-5 lg:pb-2">
            <p className="text-[1.0625rem] leading-[1.8] text-[#4B463F]/80 font-light max-w-[440px]">
              We&apos;re fortunate to collaborate with amazing people and help
              their ideas come to life.
            </p>
            <a
              href="#testimonials"
              className="group inline-flex items-center gap-2 text-[#B87443] font-medium text-[0.9375rem] w-fit"
            >
              <span className="relative">
                View All Testimonials
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B87443] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left" />
              </span>
              <span className="text-sm group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
                →
              </span>
            </a>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
           TESTIMONIAL CARDS
           ════════════════════════════════════════════ */}
        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardFadeUp}
              className="group relative flex flex-col rounded-[16px] sm:rounded-[20px] border border-[#E2DDD5]/80 bg-[#FFFDF8] p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
            >
              {/* Quote Mark */}
              <span className="font-display text-[4rem] sm:text-[5rem] leading-none text-[#B87443] -mt-2 mb-2 select-none">
                &ldquo;
              </span>

              {/* Quote Text */}
              <p className="text-[1rem] sm:text-[1.0625rem] leading-[1.8] text-[#4B463F]/85 font-light flex-1 mb-8">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#E2DDD5] mb-6" />

              {/* Client Info */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E7D7C3] to-[#C9A87C] flex items-center justify-center shrink-0">
                    <span className="text-white font-medium text-[0.8rem]">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-[0.875rem] font-medium text-[#111111]">
                      {testimonial.name}
                    </p>
                    <p className="text-[0.75rem] text-[#4B463F]/60 font-light">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Brand Logo (text) */}
                <div className="text-right shrink-0">
                  <span className="font-sans font-bold text-[0.85rem] text-[#111111]/70 tracking-wide">
                    {testimonial.brand}
                  </span>
                  {testimonial.brandSub && (
                    <span className="block font-mono text-[0.55rem] tracking-[0.18em] uppercase text-[#111111]/40">
                      {testimonial.brandSub}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ════════════════════════════════════════════
           BOTTOM BRAND LOGOS
           ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
          className="mt-16 md:mt-24 pt-10 border-t border-[#E2DDD5]"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {BRAND_LOGOS.map((brand) => (
              <div key={brand.name} className="flex flex-col items-center text-center opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-default">
                <span className={`${brand.fontClass} text-[#111111]`}>
                  {brand.name}
                </span>
                {brand.sub && (
                  <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-[#111111]/60">
                    {brand.sub}
                  </span>
                )}
              </div>
            ))}
            <span className="text-[0.8125rem] text-[#4B463F]/50 font-light italic">
              and many more amazing brands
            </span>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
