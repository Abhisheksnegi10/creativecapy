'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';

/* ————————————————————————————————————————————
   Footer Links Data
   ———————————————————————————————————————————— */
const FOOTER_LINKS = {
  studio: [
    { label: 'About Us', href: '/process' },
    { label: 'Our Process', href: '/process' },
    { label: 'Careers', href: '/contact' },
  ],
  services: [
    { label: 'UI/UX Design', href: '/services' },
    { label: 'Web Development', href: '/services' },
    { label: 'Branding', href: '/services' },
    { label: 'Digital Marketing', href: '/services' },
  ],
  resources: [
    { label: 'Journal', href: '/journal' },
    { label: 'Case Studies', href: '/work' },
    { label: 'FAQs', href: '/contact' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

const SOCIALS = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/* ————————————————————————————————————————————
   Framer Motion Variants
   ———————————————————————————————————————————— */
const footerFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] as const },
  },
};

/* ————————————————————————————————————————————
   Footer Component
   ———————————————————————————————————————————— */
export function Footer() {
  return (
    <footer
      id="contact"
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

      <Container className="relative z-[2] px-4 sm:px-6 md:px-10 lg:px-16 pt-16 sm:pt-20 md:pt-28 pb-8">

        {/* ——— Separator ——— */}
        <div className="w-full h-[1px] bg-[#F8F2E8]/8 mb-16 md:mb-20" />

        {/* ════════════════════════════════════════════
           MAIN FOOTER GRID
           ════════════════════════════════════════════ */}
        <motion.div
          variants={footerFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-8 mb-12 sm:mb-16 md:mb-20"
        >
          {/* Logo + Tagline */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="relative w-[180px] h-[40px]">
              <Image
                src="/Brand/logo/white vers.png"
                alt="CreativeCapy logo"
                fill
                className="object-contain object-left"
                sizes="180px"
              />
            </div>
            <p className="text-[0.9375rem] leading-[1.8] text-[#F8F2E8]/50 font-light max-w-[320px]">
              A digital studio crafting websites, brands and experiences that
              leave a lasting impact.
            </p>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-[0.8125rem] font-semibold text-[#F8F2E8] uppercase tracking-[0.1em] mb-5">
              Studio
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.studio.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.875rem] text-[#F8F2E8]/50 font-light hover:text-[#B87443] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans text-[0.8125rem] font-semibold text-[#F8F2E8] uppercase tracking-[0.1em] mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.875rem] text-[#F8F2E8]/50 font-light hover:text-[#B87443] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans text-[0.8125rem] font-semibold text-[#F8F2E8] uppercase tracking-[0.1em] mb-5">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.875rem] text-[#F8F2E8]/50 font-light hover:text-[#B87443] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Socials */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <p className="text-[0.9375rem] text-[#F8F2E8]/80 font-light leading-[1.6] mb-3">
                Let&apos;s create something amazing together.
              </p>
              <a
                href="mailto:hello@creativecapy.com"
                className="text-[#B87443] text-[0.875rem] font-medium hover:text-[#D88A50] transition-colors duration-200"
              >
                hello@creativecapy.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-[#F8F2E8]/10 flex items-center justify-center text-[#F8F2E8]/50 hover:border-[#B87443] hover:text-[#B87443] hover:bg-[#B87443]/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════
           BOTTOM BAR
           ════════════════════════════════════════════ */}
        <div className="border-t border-[#F8F2E8]/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — Copyright */}
          <p className="text-[0.75rem] text-[#F8F2E8]/30 font-light">
            © {new Date().getFullYear()} CreativeCapy. All rights reserved.
          </p>

          {/* Center — Tiny Capybara */}
          <div className="relative w-6 h-6 opacity-30">
            <Image
              src="/Brand/logo/capy icon.png"
              alt="CreativeCapy"
              fill
              className="object-contain"
              sizes="24px"
            />
          </div>

          {/* Right — Tagline */}
          <p className="text-[0.75rem] text-[#F8F2E8]/30 font-light italic">
            Crafted with purpose. Built to last.
          </p>
        </div>

      </Container>
    </footer>
  );
}
