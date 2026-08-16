import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from './providers/Providers';

/* ————————————————————————————————————————————
   Font Loading (Design System §7)
   next/font injects CSS vars consumed by our @theme tokens.
   --font-cormorant → picked up by --font-display
   --font-jakarta   → picked up by --font-body
   ———————————————————————————————————————————— */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

/* ————————————————————————————————————————————
   Metadata
   ———————————————————————————————————————————— */
export const metadata: Metadata = {
  title: {
    default: 'CreativeCapy — Digital Design Studio',
    template: '%s | CreativeCapy',
  },
  description:
    'We build thoughtful digital experiences that help businesses stand out through exceptional design, technology, and strategy.',
  keywords: [
    'web design',
    'digital studio',
    'creative agency',
    'brand design',
    'UI/UX',
    'web development',
  ],
  authors: [{ name: 'CreativeCapy' }],
  creator: 'CreativeCapy',
  metadataBase: new URL('https://creativecapy.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CreativeCapy',
    title: 'CreativeCapy — Digital Design Studio',
    description:
      'Thoughtful digital experiences crafted with care. We build websites people actually enjoy using.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CreativeCapy — Digital Design Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreativeCapy — Digital Design Studio',
    description:
      'Thoughtful digital experiences crafted with care.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#F7F3EB',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

/* ————————————————————————————————————————————
   Root Layout
   ———————————————————————————————————————————— */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

