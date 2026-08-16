import { Navbar } from '@/app/components/layout/Navbar';
import { PageHeader } from '@/app/components/layout/PageHeader';
import { Container } from '@/app/components/ui/Container';
import { Footer } from '@/app/components/footer';

export const metadata = {
  title: 'Privacy Policy | CreativeCapy',
  description: 'Learn how CreativeCapy handles your data and protects your privacy.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PageHeader
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="Your privacy matters to us. Here's how we handle your data."
          theme="light"
        />

        <section className="bg-[#F7F3EB] py-16 md:py-24">
          <Container className="px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-[780px] mx-auto">
              <div className="prose prose-lg text-[#4B463F] font-light leading-[1.9] space-y-10">

                <div>
                  <h2 className="font-display text-[1.75rem] font-light text-[#111111] mb-4">Information We Collect</h2>
                  <p className="text-[1rem] leading-[1.9] text-[#4B463F]/80">
                    When you use our contact form, we collect your name, email address, and project details you provide.
                    When you subscribe to our newsletter, we collect your email address. We do not collect any other
                    personal information unless you voluntarily provide it.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-[1.75rem] font-light text-[#111111] mb-4">How We Use Your Information</h2>
                  <p className="text-[1rem] leading-[1.9] text-[#4B463F]/80">
                    We use the information you provide to respond to your project inquiries, send newsletter updates
                    you&apos;ve opted into, and improve our services. We will never sell, rent, or share your personal
                    information with third parties for marketing purposes.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-[1.75rem] font-light text-[#111111] mb-4">Cookies & Analytics</h2>
                  <p className="text-[1rem] leading-[1.9] text-[#4B463F]/80">
                    Our website may use essential cookies required for proper functionality. We may use analytics
                    tools to understand how visitors interact with our site. These tools collect anonymous usage
                    data and do not personally identify you.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-[1.75rem] font-light text-[#111111] mb-4">Data Security</h2>
                  <p className="text-[1rem] leading-[1.9] text-[#4B463F]/80">
                    We implement appropriate security measures to protect your personal information. Our website
                    uses HTTPS encryption for all data transmission. However, no method of electronic transmission
                    is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-[1.75rem] font-light text-[#111111] mb-4">Your Rights</h2>
                  <p className="text-[1rem] leading-[1.9] text-[#4B463F]/80">
                    You have the right to request access to, correction of, or deletion of your personal data at
                    any time. You can unsubscribe from our newsletter at any time by clicking the unsubscribe link
                    in any email or by contacting us directly.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-[1.75rem] font-light text-[#111111] mb-4">Contact Us</h2>
                  <p className="text-[1rem] leading-[1.9] text-[#4B463F]/80">
                    If you have any questions about this privacy policy or how we handle your data, please contact
                    us at{' '}
                    <a href="mailto:hello@creativecapy.com" className="text-[#B87443] hover:text-[#9A5F35] transition-colors underline underline-offset-4">
                      hello@creativecapy.com
                    </a>.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E2DDD5]">
                  <p className="text-[0.875rem] text-[#4B463F]/50 italic">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>

              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
