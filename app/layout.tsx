import type { Metadata } from 'next';
import { Inter, Barlow_Condensed, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const barlow = Barlow_Condensed({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Oud IJzer Ophalen Venlo | RJMK BV — Metalen & Kabels Inkoop',
  description: 'RJMK BV haalt oud ijzer, schroot en alle metalen op in Venlo en omgeving. Gratis container plaatsing. Scherpe dagprijzen. Bel: 06-513 520 95.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "RJMK BV",
    "description": "Inkoop ferro en non-ferro metalen, kabelverwerking en gratis container plaatsing in Venlo en regio.",
    "url": "https://www.rjmk.nl",
    "telephone": "06-513 520 95",
    "email": "info@rjmk.nl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Groot Echtenrayseweg 42",
      "addressLocality": "Venlo",
      "postalCode": "5928 PA",
      "addressCountry": "NL"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 51.3704, "longitude": 6.1731 },
    "areaServed": ["Venlo","Tegelen","Belfeld","Velden","Boekend","Reuver","Arcen","Lomm","Blerick","Horst","Sevenum","Venray"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Metaaldiensten",
      "itemListElement": [
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Oud ijzer ophalen"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Aluminium inkoop"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Koper inkoop"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Gratis container plaatsing"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Kabelverwerking"}}
      ]
    }
  };

  return (
    <html lang="nl" className={`${inter.variable} ${barlow.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
