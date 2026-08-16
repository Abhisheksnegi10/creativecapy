'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';
import { Button } from '@/app/components/ui/Button';
import { cn } from '@/lib/utils';

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] as const }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo',
        isScrolled
          ? 'bg-dark/85 backdrop-blur-md border-b border-border-dark/40 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent py-2 md:py-2',
        className
      )}
    >
      <Container className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Brand Logo with generous left padding */}
        <Link
          href="/"
          className="group relative flex items-center gap-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/40 rounded-sm py-1"
          aria-label="CreativeCapy — Home"
        >
          <div className="relative w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] overflow-hidden rounded-full transition-transform duration-300 ease-out-expo group-hover:scale-105">
            <Image
              src="/Brand/logo/capy icon.png"
              alt="CreativeCapy Mascot"
              fill
              sizes="80px"
              className="object-contain scale-[1.35]"
              priority
            />
          </div>
          <span className="-ml-1 sm:-ml-2 md:-ml-3 font-display text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-cream tracking-tight transition-colors duration-300 group-hover:text-copper-light">
            Creative<span className="text-copper font-medium">Capy</span>
          </span>
        </Link>

        {/* Desktop Navigation Links — 15% reduced spacing (gap-6 lg:gap-7) */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-7"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative text-[0.875rem] font-medium transition-colors duration-200 py-1 group tracking-wide",
                  isActive ? "text-copper" : "text-cream/75 hover:text-cream"
                )}
              >
                <span>{item.label}</span>
                {/* Thinner, more elegant underline indicator */}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[1px] transition-transform duration-300 ease-out-expo origin-left opacity-90",
                  isActive ? "bg-copper scale-x-100" : "bg-copper/90 scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button
              href="/contact"
              variant="outline"
              size="sm"
              className="border-copper/35 text-cream bg-dark/40 backdrop-blur-md hover:bg-copper hover:border-copper hover:text-white hover:shadow-[0_4px_20px_rgba(184,116,67,0.3)] transition-all duration-300 ease-out-expo text-[0.8125rem] px-5 h-9 rounded-md group"
            >
              <span>Start a Project</span>
              <span className="inline-block text-xs transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-cream/90 hover:text-copper transition-colors focus-visible:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
              <span
                className={cn(
                  'w-5 h-[1.5px] bg-current rounded-full transition-transform duration-300 ease-out-expo origin-center',
                  isMobileMenuOpen && 'translate-y-[7px] rotate-45'
                )}
              />
              <span
                className={cn(
                  'w-5 h-[1.5px] bg-current rounded-full transition-opacity duration-200',
                  isMobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'w-5 h-[1.5px] bg-current rounded-full transition-transform duration-300 ease-out-expo origin-center',
                  isMobileMenuOpen && '-translate-y-[7px] -rotate-45'
                )}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="fixed inset-0 top-0 z-40 bg-dark/95 backdrop-blur-2xl md:hidden flex flex-col justify-between px-6 pt-24 pb-12 overflow-y-auto"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-copper/10 via-transparent to-transparent pointer-events-none" />

            <nav aria-label="Mobile Navigation" className="flex flex-col gap-6 my-auto">
              <span className="overline text-copper/80 tracking-widest text-xs">
                Navigation
              </span>
              <ul className="flex flex-col gap-5">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05 * index,
                      ease: [0.19, 1, 0.22, 1] as const,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-display text-h2 text-cream hover:text-copper transition-colors duration-200 block"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.19, 1, 0.22, 1] as const }}
              className="flex flex-col gap-6 pt-6 border-t border-border-dark/60"
            >
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center justify-center text-body font-medium shadow-[0_4px_20px_rgba(184,116,67,0.3)]"
              >
                Start a Project ↗
              </Button>
              <div className="flex justify-between items-center text-caption text-muted">
                <span>hello@creativecapy.com</span>
                <span>© CreativeCapy</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
