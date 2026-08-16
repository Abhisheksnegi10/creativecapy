import { Navbar } from '@/app/components/layout/Navbar';
import { PageHeader } from '@/app/components/layout/PageHeader';
import { ProcessSection } from '@/app/components/process';
import { CtaSection } from '@/app/components/cta';
import { Footer } from '@/app/components/footer';

export const metadata = {
  title: 'Our Process | CreativeCapy',
  description: 'A proven, collaborative approach to building successful digital products and brands.',
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PageHeader 
          eyebrow="Our Process"
          title="Built for clarity and results."
          subtitle="We believe that a transparent, structured process is the foundation of any great digital product. Here is how we bring ideas to life."
          theme="dark"
        />
        <ProcessSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
