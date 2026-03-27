import { Metadata } from 'next';
import { locaties } from '@/lib/locaties';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, Truck, MapPin, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
  return locaties.map((loc) => ({
    stad: loc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ stad: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const loc = locaties.find((l) => l.slug === resolvedParams.stad);
  
  if (!loc) {
    return { title: 'Locatie niet gevonden' };
  }

  return {
    title: `Oud IJzer Ophalen ${loc.naam} | Gratis & Snel | RJMK BV`,
    description: `Wilt u oud ijzer of metalen laten ophalen in ${loc.naam}? RJMK BV biedt een snelle, gratis ophaalservice en de beste dagprijzen. Bel direct: 06-513 520 95.`,
  };
}

export default async function LocatiePage({ params }: { params: Promise<{ stad: string }> }) {
  const resolvedParams = await params;
  const loc = locaties.find((l) => l.slug === resolvedParams.stad);
  
  if (!loc) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `RJMK BV - Oud IJzer Ophalen ${loc.naam}`,
    "description": `Inkoop ferro en non-ferro metalen en gratis container plaatsing in ${loc.naam}.`,
    "url": `https://www.rjmk.nl/locaties/${loc.slug}`,
    "telephone": "06-513 520 95",
    "areaServed": {
      "@type": "City",
      "name": loc.naam
    }
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      {/* Header */}
      <section className="pt-32 pb-16 bg-rjmk-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/truck-city/1920/1080')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-md">
            <MapPin className="w-4 h-4 mr-2" /> Actief in {loc.naam} en omstreken
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wide">
            Oud IJzer Ophalen <br />
            <span className="text-rjmk-accent">{loc.naam}</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Heeft u oud ijzer, koper, aluminium of andere metalen liggen in {loc.naam}? RJMK BV komt het snel en vakkundig bij u ophalen. Wij bieden de beste dagprijzen en directe uitbetaling.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:0651352095" className="btn-primary text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-3" /> Bel 06-513 520 95
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-slate-50 relative">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed">
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-display font-bold text-rjmk-dark mb-4 uppercase">Uw Metaalrecycling Partner in {loc.naam}</h2>
                <p className="mb-4">
                  Woont u of is uw bedrijf gevestigd in {loc.naam} en wilt u van uw metaalafval af? RJMK BV is dé specialist in de regio voor het ophalen en verwerken van oud ijzer en alle soorten non-ferro metalen. Met ons eigen, moderne wagenpark zijn wij dagelijks te vinden in {loc.naam} en omliggende wijken.
                </p>
                <p className="mb-4">
                  Of het nu gaat om een oude wasmachine, een partij koperleidingen na een verbouwing, of structureel industrieel metaalafval; wij bieden een passende oplossing. Voor particulieren komen wij graag langs om uw oude metalen op te halen. Voor bedrijven in {loc.naam} bieden wij bovendien een gratis container service aan.
                </p>
                <h3 className="text-xl font-display font-bold text-rjmk-dark mt-8 mb-4 uppercase">Hoe werkt het ophalen in {loc.naam}?</h3>
                <ol className="list-decimal list-inside space-y-3 mb-6">
                  <li><strong>Neem contact op:</strong> Bel ons of stuur een bericht met wat u heeft liggen.</li>
                  <li><strong>Afspraak inplannen:</strong> Wij plannen een moment in dat u goed uitkomt. Vaak kunnen wij al binnen 24 uur in {loc.naam} zijn.</li>
                  <li><strong>Ophalen & Wegen:</strong> Onze chauffeur komt langs, weegt de materialen (indien nodig) en laadt alles netjes in.</li>
                  <li><strong>Directe Uitbetaling:</strong> U ontvangt direct de afgesproken vergoeding op basis van de actuele dagprijzen.</li>
                </ol>
                <h3 className="text-xl font-display font-bold text-rjmk-dark mt-8 mb-4 uppercase">Gratis Container Plaatsing in {loc.naam}</h3>
                <p>
                  Heeft uw bedrijf in {loc.naam} regelmatig metaalafval? Maak dan gebruik van onze gratis container service. Wij plaatsen een container (variërend van 1m³ tot 40m³) op uw locatie. Zodra deze vol is, geeft u ons een seintje en komen wij deze binnen 24 uur legen of omwisselen.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              <div className="glass-card p-8 rounded-xl border-slate-200">
                <h3 className="text-xl font-display font-bold text-rjmk-dark mb-6 uppercase border-b border-slate-200 pb-4">Waarom RJMK BV?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-600">Snelle ophaalservice in {loc.naam}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-600">Eerlijke, LME-gekoppelde dagprijzen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-600">Directe uitbetaling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-600">MRF Gecertificeerd & Milieubewust</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl bg-slate-100 border-slate-200">
                <h3 className="text-xl font-display font-bold text-rjmk-dark mb-4 uppercase">Ook Actief In:</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.buurt.map((buurt) => {
                    const buurtLoc = locaties.find(l => l.naam === buurt);
                    if (buurtLoc) {
                      return (
                        <Link key={buurtLoc.slug} href={`/locaties/${buurtLoc.slug}`} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:text-rjmk-blue hover:border-rjmk-blue transition-colors">
                          {buurtLoc.naam}
                        </Link>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
