import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Import global UI components
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";

const inter = Inter({ subsets: ['latin'] });

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://greenrider.in',
  name: 'GreenRider Enterprises',
  description:
    'Authorized multi-brand agricultural machinery dealer. Power weeders, brush cutters, sprayers, water pumps, dairy equipment. SMAM subsidy assistance.',
  url: 'https://greenrider.in',
  telephone: '+919844107053',
  email: 'sales@greenrider.in',
  foundingDate: '2017',
  priceRange: '₹₹',
  image: 'https://greenrider.in/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bettahalli, Senthepete, Hutridurga',
    addressLocality: 'Kunigal',
    addressRegion: 'Karnataka',
    postalCode: '572126',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.950889,
    longitude: 77.115981,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://greenrider.in'),
  title: {
    default:
      'GreenRider Enterprises | Agricultural Machinery Dealer Kunigal Karnataka',
    template: '%s | GreenRider Enterprises',
  },
  description:
    'Authorized dealer for Honda, Stihl, VST Shakti & more. Power weeders, brush cutters, sprayers, water pumps & dairy equipment. Subsidy assistance available. Serving Kunigal, Tumkur, Bangalore Rural.',
  keywords: [
    'agricultural machinery dealer Kunigal',
    'power weeder dealer Karnataka',
    'brush cutter Kunigal',
    'Honda weeder dealer Tumkur',
    'farm equipment Bangalore Rural',
    'SMAM subsidy Karnataka',
    'GreenRider Enterprises',
    'Hutridurga farm machinery',
    'dairy equipment Karnataka',
  ],
  authors: [{ name: 'GreenRider Enterprises' }],
  creator: 'GreenRider Enterprises',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://greenrider.in',
    siteName: 'GreenRider Enterprises',
    title:
      'GreenRider Enterprises | Agricultural Machinery Dealer Kunigal',
    description:
      'Authorized multi-brand dealer for power weeders, brush cutters, sprayers & dairy equipment. SMAM subsidy assistance. Kunigal, Karnataka.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GreenRider Enterprises — Agricultural Machinery Dealer Kunigal Karnataka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'GreenRider Enterprises | Agricultural Machinery Dealer Kunigal',
    description:
      'Authorized multi-brand dealer for power weeders, brush cutters & dairy equipment. Kunigal, Karnataka.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  verification: {
    google: 'PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}
      >
        {/* Schema.org JSON-LD for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Global Navigation */}
        <Navbar />
        
        {/* Main Page Content */}
        {children}
        
        {/* Global Footer */}
        <Footer />
        
        {/* Floating Action Buttons (WhatsApp & Map Scroll) */}
        <FloatingActions />
        
      </body>
    </html>
  );
}