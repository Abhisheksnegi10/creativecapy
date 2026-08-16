'use client';

import { useActionState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';
import { submitContactForm, type ContactFormState } from '@/app/actions/contact';

/* ————————————————————————————————————————————
   ContactForm Component
   Now fully functional with:
   - Server Action submission
   - Client-side validation feedback
   - Loading spinner
   - Success / Error states with animations
   ———————————————————————————————————————————— */

const initialState: ContactFormState = {
  success: false,
  error: null,
  message: null,
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F3EB] py-16 md:py-24">
      <Container className="px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left: Contact Info */}
          <div className="flex flex-col">
            <h2 className="font-display text-[2rem] sm:text-[2.5rem] font-light text-[#111111] mb-6">
              Let&apos;s build something <span className="text-[#B87443] italic">amazing.</span>
            </h2>
            <p className="text-[#4B463F]/80 text-[1.0625rem] leading-[1.8] mb-10 max-w-[440px]">
              Fill out the form and our team will get back to you within 24 hours. We can&apos;t wait to hear about your project.
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[#B87443] mb-2">Email</h4>
                <a href="mailto:hello@creativecapy.com" className="text-[1.125rem] text-[#111111] font-medium hover:text-[#B87443] transition-colors">
                  hello@creativecapy.com
                </a>
              </div>
              
              <div>
                <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[#B87443] mb-2">Studio</h4>
                <p className="text-[1.125rem] text-[#111111] font-medium leading-[1.5]">
                  123 Innovation Drive<br />
                  Tech District, CA 94103
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#FFFDF8] rounded-[24px] p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#E2DDD5]/80">
            
            {/* Success State */}
            <AnimatePresence mode="wait">
              {state.success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-5"
                >
                  {/* Checkmark */}
                  <div className="w-16 h-16 rounded-full bg-[#B87443]/10 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B87443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[1.75rem] font-light text-[#111111]">
                    Message <span className="text-[#B87443] italic">sent!</span>
                  </h3>
                  <p className="text-[#4B463F]/70 text-[0.9375rem] leading-[1.7] max-w-[340px]">
                    {state.message}
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 text-[#B87443] text-[0.875rem] font-medium hover:text-[#9A5F35] transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <form ref={formRef} action={formAction} className="flex flex-col gap-6">
                    {/* Error Banner */}
                    <AnimatePresence>
                      {state.error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          className="bg-red-50 border border-red-200 text-red-700 text-[0.875rem] px-4 py-3 rounded-lg"
                        >
                          {state.error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="firstName" className="text-[0.875rem] font-medium text-[#111111]">First Name</label>
                        <input 
                          type="text" 
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full bg-[#F7F3EB] border border-[#E2DDD5] rounded-lg px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-[#B87443] focus:ring-1 focus:ring-[#B87443] transition-all"
                          placeholder="Jane"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="lastName" className="text-[0.875rem] font-medium text-[#111111]">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full bg-[#F7F3EB] border border-[#E2DDD5] rounded-lg px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-[#B87443] focus:ring-1 focus:ring-[#B87443] transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[0.875rem] font-medium text-[#111111]">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        className="w-full bg-[#F7F3EB] border border-[#E2DDD5] rounded-lg px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-[#B87443] focus:ring-1 focus:ring-[#B87443] transition-all"
                        placeholder="jane@company.com"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[0.875rem] font-medium text-[#111111]">Project Details</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        required
                        minLength={10}
                        className="w-full bg-[#F7F3EB] border border-[#E2DDD5] rounded-lg px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-[#B87443] focus:ring-1 focus:ring-[#B87443] transition-all resize-none"
                        placeholder="Tell us about your goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-gradient-to-r from-[#B87443] to-[#9A5F35] hover:from-[#C87F4A] hover:to-[#B87443] text-white font-medium text-[0.9375rem] h-12 rounded-lg shadow-[0_4px_12px_rgba(184,116,67,0.2)] hover:shadow-[0_6px_20px_rgba(184,116,67,0.3)] transition-all duration-300 mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isPending ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
