'use client';

import { useActionState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';
import { subscribeNewsletter, type NewsletterFormState } from '@/app/actions/newsletter';

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

const initialState: NewsletterFormState = {
  success: false,
  error: null,
  message: null,
};

/* ————————————————————————————————————————————
   NewsletterSection Component
   ———————————————————————————————————————————— */
export function NewsletterSection() {
  const [state, formAction, isPending] = useActionState(subscribeNewsletter, initialState);

  return (
    <section
      id="newsletter"
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

      <Container className="relative z-[2] px-4 sm:px-6 md:px-10 lg:px-16 pb-20 sm:pb-24 md:pb-32">

        {/* ——— Separator ——— */}
        <div className="w-full h-[1px] bg-[#F8F2E8]/8 mb-20 md:mb-28" />

        <motion.div
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Left — CTA Content */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Envelope Icon */}
            <div className="w-14 h-14 rounded-2xl border border-[#B87443]/30 bg-[#B87443]/10 flex items-center justify-center text-[#B87443]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#B87443]" />
              <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-[#B87443]">
                Stay In The Loop
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-light leading-[1.05] tracking-[-0.02em] text-[#F8F2E8]">
              Ideas worth sharing,
              <br />
              straight to{' '}
              <span className="bg-gradient-to-r from-[#D88A50] via-[#B87443] to-[#92562B] bg-clip-text text-transparent font-normal italic">
                your inbox.
              </span>
            </h2>
          </div>

          {/* Center — Form */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <p className="text-[1rem] leading-[1.8] text-[#F8F2E8]/55 font-light">
              Join our newsletter for studio updates, insights and curated
              resources.
            </p>

            {/* Success State */}
            <AnimatePresence mode="wait">
              {state.success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                  className="flex items-center gap-3 p-4 rounded-[10px] bg-[#B87443]/10 border border-[#B87443]/20"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B87443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[0.9375rem] text-[#B87443] font-medium">
                    {state.message}
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {/* Email Form */}
                  <form action={formAction} className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email address"
                        className="flex-1 h-13 px-5 rounded-[10px] bg-[#1A1A1A] border border-[#F8F2E8]/10 text-[#F8F2E8] text-[0.9375rem] font-light placeholder:text-[#F8F2E8]/25 focus:outline-none focus:border-[#B87443]/50 focus:ring-1 focus:ring-[#B87443]/20 transition-all duration-300"
                      />
                      <button
                        type="submit"
                        disabled={isPending}
                        className="group inline-flex items-center justify-center gap-2 h-13 px-7 bg-gradient-to-r from-[#B87443] via-[#C87F4A] to-[#9A5F35] hover:from-[#C87F4A] hover:to-[#B87443] text-white font-medium text-[0.9375rem] rounded-[10px] shadow-[0_6px_24px_rgba(184,116,67,0.2)] hover:shadow-[0_12px_40px_rgba(184,116,67,0.35)] hover:-translate-y-0.5 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-pointer shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isPending ? (
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                        ) : (
                          <>
                            <span>Subscribe</span>
                            <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                              ↗
                            </span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Error message */}
                    <AnimatePresence>
                      {state.error && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-red-400 text-[0.8125rem]"
                        >
                          {state.error}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-[0.75rem] text-[#F8F2E8]/30 font-light">
              No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Right — Capybara Illustration */}
          <div className="lg:col-span-3 hidden md:flex items-end justify-center relative min-h-[240px] lg:min-h-[280px]">
            {/* Warm ambient glow */}
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[180px] h-[180px] bg-[#B87443]/6 rounded-full blur-[60px] pointer-events-none" />

            <motion.div
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.008, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-[200px] h-[240px]"
              style={{
                filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.4))',
              }}
            >
              <Image
                src="/Capy's/mail cappy.png"
                alt="CreativeCapy mascot with mail"
                fill
                className="object-contain object-bottom"
                sizes="200px"
              />
            </motion.div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
