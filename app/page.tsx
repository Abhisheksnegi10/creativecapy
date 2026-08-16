import { Navbar } from '@/app/components/layout/Navbar';
import { HeroSection } from '@/app/components/hero/HeroSection';
import { SelectedWorkSection } from '@/app/components/work';
import { ServicesSection } from '@/app/components/services';
import { ProcessSection } from '@/app/components/process';
import { CtaSection } from '@/app/components/cta';
import { JournalSection, NewsletterSection } from '@/app/components/journal';
import { Footer } from '@/app/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SelectedWorkSection />
        <ServicesSection />
        <ProcessSection />
        <CtaSection />
        <JournalSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
