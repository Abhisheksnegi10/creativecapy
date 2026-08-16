import { Navbar } from '@/app/components/layout/Navbar';
import { PageHeader } from '@/app/components/layout/PageHeader';
import { ServicesSection } from '@/app/components/services';
import { CtaSection } from '@/app/components/cta';
import { Footer } from '@/app/components/footer';

export const metadata = {
  title: 'Services | CreativeCapy',
  description: 'End-to-end digital solutions tailored to elevate your brand, from UI/UX design to full-stack development.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PageHeader 
          eyebrow="What We Do"
          title="Digital solutions crafted for growth."
          subtitle="We combine strategic thinking, beautiful design, and robust engineering to help your business scale."
          theme="light"
        />
        <ServicesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
