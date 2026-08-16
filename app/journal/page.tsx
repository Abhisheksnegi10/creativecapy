import { Navbar } from '@/app/components/layout/Navbar';
import { PageHeader } from '@/app/components/layout/PageHeader';
import { JournalSection, NewsletterSection } from '@/app/components/journal';
import { Footer } from '@/app/components/footer';

export const metadata = {
  title: 'Journal | CreativeCapy',
  description: 'Thoughts, ideas, and insights from our studio on design, development, and branding.',
};

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PageHeader 
          eyebrow="From Our Journal"
          title="Thoughts, ideas and insights."
          subtitle="Stories and perspectives from our studio on design, development, branding, and everything in between."
          theme="light"
        />
        <JournalSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
