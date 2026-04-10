import { Metadata } from 'next';
import { locaties } from '@/lib/locaties';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
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
    title: `Oud IJzer Ophalen ${loc.naam} | Gratis & Snel | RJMK`,
    description: `Wilt u oud ijzer of metalen laten ophalen in ${loc.naam}? RJMK biedt een snelle, gratis ophaalservice voor bedrijven. Bel direct: 06-513 520 95.`,
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
    "name": `RJMK - Oud IJzer Ophalen ${loc.naam}`,
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
        <div className="absolute inset-0 bg-rjmk-blue/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-md">
            <MapPin className="w-4 h-4 mr-2" /> Actief in {loc.naam} en omstreken
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wide">
            Oud IJzer Ophalen <br />
            <span className="text-rjmk-accent">{loc.naam}</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Heeft u oud ijzer, koper, aluminium of andere metalen liggen in {loc.naam}? RJMK komt het snel en vakkundig bij u ophalen. Het mooie is dat wij het gratis komen ophalen en we alles direct van A tot Z regelen.
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
                  Woont u of is uw bedrijf gevestigd in {loc.naam} en wilt u van uw metaalafval af? RJMK is dé specialist in de regio voor het ophalen en verwerken van oud ijzer en alle soorten non-ferro metalen. Met ons eigen, moderne wagenpark zijn wij dagelijks te vinden in {loc.naam} en omliggende wijken.
                </p>
                <p className="mb-4">
                  Of het nu gaat om een partij koperleidingen na een verbouwing, of structureel industrieel metaalafval; wij bieden een passende oplossing. Voor bedrijven in {loc.naam} bieden wij een snelle ophaalservice en de mogelijkheid voor gratis container plaatsing.
                </p>
                <h3 className="text-xl font-display font-bold text-rjmk-dark mt-8 mb-4 uppercase">Hoe werkt het ophalen in {loc.naam}?</h3>
                <ol className="list-decimal list-inside space-y-3 mb-6">
                  <li><strong>Neem contact op:</strong> Bel ons of stuur een bericht met wat u heeft liggen.</li>
                  <li><strong>Afspraak inplannen:</strong> Wij plannen een moment in dat u goed uitkomt. Vaak kunnen wij al binnen 24 uur in {loc.naam} zijn.</li>
                  <li><strong>Ophalen & Wegen:</strong> Onze chauffeur komt langs, weegt de materialen (indien nodig) en laadt alles netjes in.</li>
                  <li><strong>Directe Afwikkeling:</strong> U ontvangt direct een correcte verwerking en afgesproken vergoeding.</li>
                </ol>
                <h3 className="text-xl font-display font-bold text-rjmk-dark mt-8 mb-4 uppercase">Stappenplan voor Bedrijven in {loc.naam}</h3>
                <div className="space-y-4">
                  <p>
                    Bent u een hovenier, installateur, aannemer of runt u een productiebedrijf in {loc.naam}? Wij begrijpen dat uw tijd kostbaar is. Daarom bieden wij een gestroomlijnd proces voor uw metaalafval:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-rjmk-accent mr-2" /> <strong>Container op maat:</strong> Van 1m³ voor koper tot 40m³ voor zwaar ijzer.
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-rjmk-accent mr-2" /> <strong>Wisselgarantie:</strong> Binnen 24 uur na uw verzoek wordt de container gewisseld.
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-rjmk-accent mr-2" /> <strong>Transparant proces:</strong> Eerlijke afwikkeling op basis van actuele markttrends.
                    </li>
                  </ul>
                  <p>
                    Heeft u een eenmalige grote partij oud ijzer of metaal? Geen probleem. Onze ophaalservice met eigen kraanwagen zorgt ervoor dat we alles in {loc.naam} direct van de werkvloer of het buitenterrein kunnen laden.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              <div className="glass-card p-8 rounded-xl border-slate-200">
                <h3 className="text-xl font-display font-bold text-rjmk-dark mb-6 uppercase border-b border-slate-200 pb-4">Waarom RJMK?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-600">Snelle ophaalservice in {loc.naam}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-600">Eerlijke, LME-gekoppelde markttrends</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-600">Bespaar op afval- en stortkosten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-600">Erkend & Milieubewust</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <a href="https://wa.me/31651352095" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition-colors shadow-md text-sm">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    WhatsApp even een foto
                  </a>
                </div>
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
