'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';

export function ContactForm() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F3EB] py-16 md:py-24">
      <Container className="px-6 sm:px-10 lg:px-16">
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
          <div className="bg-[#FFFDF8] rounded-[24px] p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#E2DDD5]/80">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-[0.875rem] font-medium text-[#111111]">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    className="w-full bg-[#F7F3EB] border border-[#E2DDD5] rounded-lg px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-[#B87443] focus:ring-1 focus:ring-[#B87443] transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-[0.875rem] font-medium text-[#111111]">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
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
                  className="w-full bg-[#F7F3EB] border border-[#E2DDD5] rounded-lg px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-[#B87443] focus:ring-1 focus:ring-[#B87443] transition-all"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[0.875rem] font-medium text-[#111111]">Project Details</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-[#F7F3EB] border border-[#E2DDD5] rounded-lg px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-[#B87443] focus:ring-1 focus:ring-[#B87443] transition-all resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#B87443] to-[#9A5F35] hover:from-[#C87F4A] hover:to-[#B87443] text-white font-medium text-[0.9375rem] h-12 rounded-lg shadow-[0_4px_12px_rgba(184,116,67,0.2)] hover:shadow-[0_6px_20px_rgba(184,116,67,0.3)] transition-all duration-300 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
