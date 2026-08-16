import { Navbar } from '@/app/components/layout/Navbar';
import { PageHeader } from '@/app/components/layout/PageHeader';
import { ContactForm } from '@/app/components/contact';
import { Footer } from '@/app/components/footer';

export const metadata = {
  title: 'Contact Us | CreativeCapy',
  description: 'Get in touch with our studio to start your next digital project.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PageHeader 
          eyebrow="Contact"
          title="Let's create together."
          subtitle="Whether you have a specific project in mind or just want to explore possibilities, our team is ready to listen."
          theme="light"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
