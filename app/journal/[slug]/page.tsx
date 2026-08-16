import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/app/components/layout/Navbar';
import { Container } from '@/app/components/ui/Container';
import { NewsletterSection } from '@/app/components/journal';
import { Footer } from '@/app/components/footer';

export const metadata = {
  title: 'Journal Article | CreativeCapy',
  description: 'Thoughts, ideas, and insights from our studio on design, development, and branding.',
};

export default function ArticlePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F7F3EB]">
        
        {/* Article Header */}
        <section className="pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 relative">
          <Container className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-[800px] mx-auto text-center">
            
            {/* Back to Journal */}
            <Link 
              href="/journal"
              className="inline-flex items-center gap-2 text-[0.8125rem] font-medium text-[#B87443] hover:text-[#9A5F35] transition-colors mb-8 sm:mb-12 uppercase tracking-[0.1em]"
            >
              <span className="text-lg leading-none transform -translate-y-[1px]">←</span>
              Back to Journal
            </Link>

            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-[#4B463F]">Design</span>
              <span className="w-1 h-1 rounded-full bg-[#B87443]/50" />
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-[#4B463F]">May 20, 2025</span>
            </div>

            <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] font-light leading-[1.05] tracking-[-0.03em] text-[#111111] mb-8">
              Designing with purpose: Beyond just aesthetics
            </h1>

            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.8] text-[#4B463F]/80 max-w-[640px] mx-auto font-light">
              Why meaningful design goes beyond how something looks and focuses on the impact it creates for businesses and users alike.
            </p>
          </Container>
        </section>

        {/* Hero Image */}
        <Container className="px-4 sm:px-6 md:px-10 lg:px-16 mb-16 sm:mb-24">
          <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#E2DDD5]/30">
            <div className="absolute inset-0 bg-[#B87443]/5" />
            <Image
              src="/Capy's/creative cappy.png"
              alt="Creative Capybara"
              fill
              className="object-contain p-12 sm:p-20"
            />
          </div>
        </Container>

        {/* Article Body */}
        <Container className="px-4 sm:px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[720px] mx-auto prose prose-lg prose-headings:font-display prose-headings:font-light prose-headings:text-[#111111] prose-p:text-[#4B463F]/90 prose-p:font-light prose-p:leading-[1.9] prose-a:text-[#B87443] hover:prose-a:text-[#9A5F35]">
            <p>
              In today's digital landscape, the phrase "good design" is often synonymous with visual appeal. We admire websites with sleek animations, vibrant gradients, and perfectly balanced layouts. But at CreativeCapy, we believe that aesthetics are only the surface layer of a truly successful digital product.
            </p>

            <h2>The function behind the form</h2>
            <p>
              Every design decision should serve a specific purpose. When we start a new project, our first question isn't "what colors should we use?" but rather, "what problem are we solving?" A beautiful button that users can't find or don't understand how to interact with is ultimately a failure in design, regardless of how good it looks.
            </p>
            <p>
              Purposeful design requires deep empathy for the end-user. It means understanding their goals, their frustrations, and the context in which they are interacting with your product.
            </p>

            <blockquote>
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>

            <h2>Building for longevity</h2>
            <p>
              Trends come and go. What looks cutting-edge today might feel dated in two years. Purposeful design, however, stands the test of time because it is rooted in solid usability principles and clear communication. 
            </p>
            <ul>
              <li><strong>Clarity over cleverness:</strong> Ensure the user always knows what to do next.</li>
              <li><strong>Performance is design:</strong> A fast-loading site creates a better user experience than a slow, visually complex one.</li>
              <li><strong>Accessibility matters:</strong> Design for everyone, not just those with perfect vision or high-speed internet.</li>
            </ul>

            <h2>The takeaway</h2>
            <p>
              The next time you evaluate a digital experience, look past the initial visual impact. Ask yourself: Is this easy to use? Does it communicate clearly? Does it respect my time? That is where the true beauty of purposeful design lies.
            </p>
          </div>

          {/* Author Box */}
          <div className="max-w-[720px] mx-auto mt-16 pt-10 border-t border-[#E2DDD5]/80 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#E2DDD5]/50 overflow-hidden relative border border-[#E2DDD5]">
              <Image 
                src="/Capy's/capy icon.png"
                alt="CreativeCapy Team"
                fill
                className="object-contain p-2"
              />
            </div>
            <div>
              <h4 className="font-medium text-[#111111] text-[1.0625rem]">The CreativeCapy Team</h4>
              <p className="text-[0.9375rem] text-[#4B463F]/70 font-light mt-1">Digital Design & Strategy</p>
            </div>
          </div>
        </Container>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
