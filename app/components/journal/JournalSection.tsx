'use client';

import Image from 'next/image';
import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';

/* ————————————————————————————————————————————
   Journal Articles Data
   ———————————————————————————————————————————— */
const ARTICLES = [
  {
    category: 'Design',
    date: 'May 20, 2025',
    title: 'Designing with purpose: Beyond just aesthetics',
    excerpt:
      'Why meaningful design goes beyond how something looks and focuses on the impact it creates.',
    image: "/Capy's/creative cappy.png",
    href: '/journal/designing-with-purpose',
  },
  {
    category: 'Development',
    date: 'May 15, 2025',
    title: 'Clean code. Better web experiences.',
    excerpt:
      'How writing clean and scalable code helps us build faster, perform better and grow effortlessly.',
    image: "/Capy's/coding cappy.png",
    href: '/journal/clean-code',
  },
  {
    category: 'Branding',
    date: 'May 19, 2025',
    title: 'Building brands that people remember',
    excerpt:
      'The elements that go into building a strong brand identity that stands the test of time.',
    image: "/Capy's/heart cappy.png",
    href: '/journal/building-memorable-brands',
  },
  {
    category: 'Studio Life',
    date: 'May 05, 2025',
    title: 'Lessons from the studio: Growth & gratitude',
    excerpt:
      'A peek into our journey, learnings and the little things that keep us inspired every day.',
    image: "/Capy's/coffee cappy.png",
    href: '/journal/lessons-from-the-studio',
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
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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
   JournalSection Component
   ———————————————————————————————————————————— */
export function JournalSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Update active dot based on scroll position
    const cardWidth = el.scrollWidth / ARTICLES.length;
    const newIndex = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, ARTICLES.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('a')?.offsetWidth ?? 320;
    const gap = 24;
    el.scrollBy({
      left: direction === 'left' ? -(cardWidth + gap) : cardWidth + gap,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="journal"
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
      <div className="absolute top-[15%] right-[-5%] w-[400px] h-[400px] bg-[#B87443]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-8%] w-[350px] h-[350px] bg-[#E7D7C3]/4 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-[2] px-4 sm:px-6 md:px-10 lg:px-16 pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-20 sm:pb-24 md:pb-32">

        {/* ════════════════════════════════════════════
           SECTION HEADER
           ════════════════════════════════════════════ */}
        <motion.div
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 md:mb-20"
        >
          {/* Left — Headline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B87443]" />
              <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-[#B87443]">
                From Our Journal
              </span>
            </div>

            <motion.h2
              variants={headlineReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="font-display text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] xl:text-[4.5rem] font-light leading-[0.97] tracking-[-0.03em] text-[#F8F2E8]"
            >
              <motion.span variants={lineReveal} className="block">
                Thoughts, ideas
              </motion.span>
              <motion.span variants={lineReveal} className="block">
                and{' '}
                <span className="bg-gradient-to-r from-[#D88A50] via-[#B87443] to-[#92562B] bg-clip-text text-transparent font-normal italic">
                  insights.
                </span>
              </motion.span>
            </motion.h2>
          </div>

          {/* Right — Description + Link */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:pb-2">
            <p className="text-[1.0625rem] leading-[1.8] text-[#F8F2E8]/60 font-light max-w-[440px]">
              Stories and perspectives from our studio on design, development,
              branding and everything in between.
            </p>
            <a
              href="/journal"
              className="group inline-flex items-center gap-2 text-[#B87443] font-medium text-[0.9375rem] w-fit"
            >
              <span className="relative">
                Explore All Articles
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B87443] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left" />
              </span>
              <span className="text-sm group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
                →
              </span>
            </a>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
           ARTICLE CARDS CAROUSEL
           ════════════════════════════════════════════ */}
        <div className="relative">
          {/* Prev / Next Arrows */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? 'border-[#F8F2E8]/20 text-[#F8F2E8]/70 hover:border-[#B87443] hover:text-[#B87443] hover:bg-[#B87443]/10 cursor-pointer'
                : 'border-[#F8F2E8]/5 text-[#F8F2E8]/15 cursor-default'
            } hidden lg:flex`}
            aria-label="Previous articles"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? 'border-[#F8F2E8]/20 text-[#F8F2E8]/70 hover:border-[#B87443] hover:text-[#B87443] hover:bg-[#B87443]/10 cursor-pointer'
                : 'border-[#F8F2E8]/5 text-[#F8F2E8]/15 cursor-default'
            } hidden lg:flex`}
            aria-label="Next articles"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Scrollable Cards Container */}
          <motion.div
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {ARTICLES.map((article) => (
              <motion.a
                key={article.title}
                href={article.href}
                variants={cardFadeUp}
                className="group flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[calc(25%-18px)] flex flex-col rounded-[16px] sm:rounded-[20px] overflow-hidden border border-[#F8F2E8]/8 bg-[#1A1A1A] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] hover:border-[#B87443]/20 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] snap-start cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#2A2A2A]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-contain object-center p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="300px"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6 sm:p-7 flex-1">
                  {/* Category + Date */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-[#B87443] font-semibold">
                      {article.category}
                    </span>
                    <span className="text-[0.75rem] text-[#F8F2E8]/35 font-light">
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-[1.125rem] sm:text-[1.25rem] font-medium leading-[1.25] text-[#F8F2E8] group-hover:text-[#B87443] transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[0.8125rem] leading-[1.7] text-[#F8F2E8]/45 font-light flex-1">
                    {article.excerpt}
                  </p>

                  {/* Read More CTA */}
                  <div className="flex items-center gap-2 mt-2 text-[#B87443] text-[0.8125rem] font-medium">
                    <span className="relative">
                      Read More
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B87443] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left" />
                    </span>
                    <span className="text-xs group-hover:translate-x-1.5 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
                      →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {ARTICLES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / ARTICLES.length;
                  el.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'bg-[#B87443] w-5'
                    : 'bg-[#F8F2E8]/20 hover:bg-[#F8F2E8]/40'
                }`}
                aria-label={`Go to article ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
