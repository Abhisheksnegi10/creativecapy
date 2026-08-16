'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/app/components/ui/Container';

/* ————————————————————————————————————————————
   Project Data — Real CreativeCapy work
   ———————————————————————————————————————————— */
const FEATURED_PROJECT = {
  number: '01',
  name: 'Maisai Realty',
  industry: 'Luxury Real Estate',
  headline: 'Where luxury finds its address.',
  description:
    'A premium real estate landing experience with cinematic Ken Burns hero, property carousel, and split-screen editorial layout. Designed to communicate trust and exclusivity from the very first scroll.',
  tags: ['Real Estate', 'UI Design', 'Development', 'Branding'],
  image: '/projects/maisai.png',
  capybara: "/Capy's/builder cappy.png",
  href: 'https://maisai.vercel.app/',
};

const SECONDARY_PROJECTS = [
  {
    number: '02',
    name: 'The Pizza Slice',
    industry: 'Food & Dining',
    description: 'A local pizza restaurant in Bhopal brought online with live venue status, WhatsApp pre-ordering, and a warm, appetizing digital presence.',
    image: '/projects/tps.png',
    capybara: "/Capy's/coffee cappy.png",
    href: 'https://tps-pink.vercel.app/',
  },
  {
    number: '03',
    name: 'Okapi',
    industry: 'Fashion & E-commerce',
    description: 'A minimalist streetwear brand built for motion. Performance wear e-commerce with Sanity CMS, clean typography, and a quiet confidence in every pixel.',
    image: '/projects/okapi.png',
    capybara: "/Capy's/designer cappy.png",
    href: 'https://okapi-five.vercel.app/',
  },
  {
    number: '04',
    name: "Poppin' Deli",
    industry: 'Café & Dining',
    description: 'A cozy deli café brought to life digitally — brunch-forward aesthetic with online ordering, reservations, and a warm, inviting vibe.',
    image: '/projects/poppin-deli.png',
    capybara: "/Capy's/creative cappy.png",
    href: 'https://poppin-deli-demo.vercel.app/',
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

const featuredSlideIn = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: [0.19, 1, 0.22, 1] as const, delay: 0.3 },
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

const macbookFloat = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' as const },
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
   SelectedWorkSection Component
   ———————————————————————————————————————————— */
export function SelectedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#F7F3EB' }}
    >
      {/* ——— Torn Paper Divider ——— */}
      <div className="absolute top-0 left-0 right-0 z-10 -translate-y-[1px]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[50px] sm:h-[60px] md:h-[80px]"
          fill="#F7F3EB"
        >
          <path d="M0,0 L0,45 Q30,42 60,48 T120,43 T180,50 T240,44 T300,47 T360,42 T420,49 T480,45 T540,48 T600,43 T660,50 T720,44 T780,47 T840,42 T900,49 T960,45 T1020,48 T1080,43 T1140,50 T1200,44 T1260,47 T1320,42 T1380,49 T1440,45 L1440,0 Z" />
        </svg>
      </div>

      {/* ——— Paper Texture Overlay ——— */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1] mix-blend-multiply"
        style={{
          backgroundImage: `url('/textures/paper grain.png')`,
          backgroundSize: '300px',
        }}
      />

      {/* ——— Warm Decorative Glow ——— */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#B87443]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#E7D7C3]/20 rounded-full blur-[120px] pointer-events-none" />

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
                Selected Work
              </span>
            </div>

            {/* Headline */}
            <motion.h2
              variants={headlineReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="font-display text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] font-light leading-[0.95] tracking-[-0.03em] text-[#111111]"
            >
              <motion.span variants={lineReveal} className="block">
                Work that speaks
              </motion.span>
              <motion.span variants={lineReveal} className="block">
                for{' '}
                <span className="bg-gradient-to-r from-[#D88A50] via-[#B87443] to-[#92562B] bg-clip-text text-transparent font-normal italic">
                  itself.
                </span>
              </motion.span>
            </motion.h2>
          </div>

          {/* Right — Description */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:pb-2">
            <p className="text-[1.0625rem] leading-[1.8] text-[#4B463F]/80 font-light max-w-[440px]">
              From startups to established brands, we build digital
              experiences that convert visitors into customers.
            </p>
            <a
              href="/work"
              className="group inline-flex items-center gap-2 text-[#B87443] font-medium text-[0.9375rem] w-fit"
            >
              <span className="relative">
                View All Projects
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B87443] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left" />
              </span>
              <span className="text-sm group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
                →
              </span>
            </a>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
           FEATURED PROJECT
           ════════════════════════════════════════════ */}
        <motion.div
          variants={featuredSlideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mb-16 md:mb-24"
        >
          <div className="bg-[#111111] rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-[#2A2A2A]/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

              {/* Left — Project Info */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 order-2 lg:order-1">
                <div className="flex flex-col gap-6">
                  {/* Project Number & Industry */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[#A39E97]">
                      {FEATURED_PROJECT.industry}
                    </span>
                    <span className="font-display text-[2.5rem] font-light text-[#F8F2E8]/10 leading-none">
                      {FEATURED_PROJECT.number}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-[1.25rem] text-[#D4956A] font-medium tracking-wide">
                    {FEATURED_PROJECT.name}
                  </h3>

                  {/* Divider */}
                  <div className="w-10 h-[1px] bg-[#3A3A3A]" />

                  {/* Headline */}
                  <h4 className="font-display text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-light leading-[1.15] tracking-[-0.02em] text-[#F8F2E8]">
                    {FEATURED_PROJECT.headline}
                  </h4>

                  {/* Description */}
                  <p className="text-[0.9375rem] leading-[1.8] text-[#A39E97] font-light max-w-[380px]">
                    {FEATURED_PROJECT.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {FEATURED_PROJECT.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#3A3A3A]/50 text-[0.75rem] font-mono tracking-wide text-[#A39E97]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA + Nav */}
                <div className="flex items-center justify-between mt-10 lg:mt-12">
                  <a
                    href={FEATURED_PROJECT.href}
                    className="group inline-flex items-center gap-2 text-[#F8F2E8] font-medium text-[0.9375rem]"
                  >
                    <span className="relative">
                      View Case Study
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B87443] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left" />
                    </span>
                    <span className="text-sm text-[#B87443] group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
                      →
                    </span>
                  </a>

                  {/* Prev/Next Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      className="w-10 h-10 rounded-full border border-[#3A3A3A] flex items-center justify-center text-[#A39E97] hover:border-[#B87443] hover:text-[#B87443] transition-all duration-200"
                      aria-label="Previous project"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      className="w-10 h-10 rounded-full border border-[#3A3A3A] flex items-center justify-center text-[#A39E97] hover:border-[#B87443] hover:text-[#B87443] transition-all duration-200"
                      aria-label="Next project"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right — MacBook Mockup + Capybara */}
              <div className="lg:col-span-7 relative flex items-end justify-center p-6 sm:p-8 lg:p-10 xl:p-12 order-1 lg:order-2 min-h-[300px] sm:min-h-[380px] lg:min-h-[460px]">

                {/* Warm backlight glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#B87443]/8 rounded-full blur-[100px] pointer-events-none" />

                {/* MacBook with Maisai Realty Website — featured project image */}
                <motion.div
                  variants={macbookFloat}
                  animate="animate"
                  className="relative z-10 w-full max-w-[520px] lg:max-w-[580px]"
                >
                  <Image
                    src={FEATURED_PROJECT.image}
                    alt={`${FEATURED_PROJECT.name} website preview`}
                    width={580}
                    height={380}
                    className="w-full h-auto rounded-xl"
                    priority
                  />
                </motion.div>

                {/* Capybara Mascot — sitting beside the MacBook */}
                <motion.div
                  variants={capyBreathing}
                  animate="animate"
                  className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-20 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]"
                  style={{
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
                  }}
                >
                  <Image
                    src={FEATURED_PROJECT.capybara}
                    alt="CreativeCapy mascot"
                    fill
                    className="object-contain"
                    sizes="120px"
                  />
                </motion.div>

                {/* Decorative Elements — minimal leaves and rocks */}
                <div className="absolute bottom-2 left-8 lg:bottom-4 lg:left-12 flex items-end gap-3 opacity-30 pointer-events-none">
                  <div className="w-3 h-3 rounded-full bg-[#4B6B58]" />
                  <div className="w-2 h-2 rounded-full bg-[#A39E97]" />
                  <div className="w-4 h-2 rounded-full bg-[#4B6B58]/60" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
           SECONDARY PROJECTS
           ════════════════════════════════════════════ */}
        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {SECONDARY_PROJECTS.map((project) => (
            <motion.a
              key={project.name}
              href={project.href}
              variants={cardFadeUp}
              className="group relative bg-[#111111] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-[#2A2A2A]/15 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.14)] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-pointer"
            >
              {/* Preview Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} website preview`}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />

                {/* Tiny Capybara */}
                <motion.div
                  variants={capyBreathing}
                  animate="animate"
                  className="absolute bottom-3 right-3 w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] z-10"
                  style={{
                    filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.4))',
                  }}
                >
                  <Image
                    src={project.capybara}
                    alt="Tiny capybara mascot"
                    fill
                    className="object-contain"
                    sizes="56px"
                  />
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 lg:p-8 flex flex-col gap-4">
                {/* Number + Industry */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#A39E97]/70">
                    {project.industry}
                  </span>
                  <span className="font-display text-[1.5rem] font-light text-[#F8F2E8]/8 leading-none">
                    {project.number}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display text-[1.375rem] font-medium text-[#F8F2E8] tracking-wide group-hover:text-[#D4956A] transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-[0.875rem] leading-[1.7] text-[#A39E97]/80 font-light line-clamp-2">
                  {project.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 mt-2 text-[#B87443] text-[0.8125rem] font-medium">
                  <span className="relative">
                    View Project
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B87443] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left" />
                  </span>
                  <span className="text-xs group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}
