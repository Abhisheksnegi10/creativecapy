import { Navbar } from '@/app/components/layout/Navbar';
import { PageHeader } from '@/app/components/layout/PageHeader';
import { SelectedWorkSection } from '@/app/components/work';
import { CtaSection } from '@/app/components/cta';
import { Footer } from '@/app/components/footer';

export const metadata = {
  title: 'Selected Work | CreativeCapy',
  description: 'Explore our portfolio of premium websites, digital experiences, and brand transformations.',
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PageHeader 
          eyebrow="Portfolio"
          title="Work that speaks for itself."
          subtitle="From early-stage startups to established industry leaders, we build digital experiences that inspire and perform."
          theme="light"
        />
        {/* We reuse the SelectedWorkSection, it has its own padding/styling */}
        <SelectedWorkSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
