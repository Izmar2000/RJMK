'use client';

import { Metadata } from 'next';
import PrijzenWidget from '@/components/PrijzenWidget';
import { Link } from '@/i18n/routing';
import { ArrowRight, Phone, ShieldCheck, TrendingUp, Info, CheckCircle2, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function DagprijzenPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hoe worden de dagprijzen voor oud ijzer bepaald?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Onze prijzen zijn direct gekoppeld aan de actuele koersen van de London Metal Exchange (LME). Hierdoor garanderen we altijd een eerlijke en marktconforme prijs voor uw metalen op basis van de transparante dagkoersen."
        }
      },
      {
        "@type": "Question",
        "name": "Waarom tonen jullie geen vaste prijzen op de website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Metaalprijzen fluctueren dagelijks op de wereldmarkt. Om u altijd de meest actuele en eerlijke waarde te kunnen bieden, werken wij op basis van de dagelijkse trend. Neem contact op voor de exacte prijs van vandaag."
        }
      },
      {
        "@type": "Question",
        "name": "Wanneer krijg ik uitbetaald voor mijn oud ijzer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bij RJMK zorgen wij voor een directe en vlotte afhandeling. U ontvangt uw geld direct bij inlevering of na het wegen van de opgehaalde materialen. Wij hanteren een snelle financiële afwikkeling."
        }
      }
    ]
  };

  return (
    <div className="bg-white">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      
      {/* HEADER SECTION */}
      <section className="relative pt-44 pb-32 bg-rjmk-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rjmk-gebouw.png"
            alt="RJMK Dagprijzen Venlo"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rjmk-blue/30 to-rjmk-dark"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-rjmk-accent/20 border border-rjmk-accent/30 text-rjmk-accent text-sm font-bold mb-8 uppercase tracking-widest">
            <TrendingUp className="w-4 h-4 mr-2" /> Marktanalyse Venlo
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 uppercase tracking-tighter">
            Eerlijke <span className="text-rjmk-accent">Dagprijzen</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Geen verborgen kosten, maar transparante trends direct gekoppeld aan de London Metal Exchange (LME).
          </p>
        </div>
      </section>

      {/* REPUTATION STRIP */}
      <section className="py-10 bg-rjmk-blue">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white text-center md:text-left">
            <div className="flex items-center">
              <ShieldCheck className="w-8 h-8 text-rjmk-accent mr-4 shrink-0" />
              <div>
                <div className="font-display font-bold text-lg uppercase">Uitstekende Reputatie</div>
                <div className="text-blue-100/70 text-sm">Al jarenlang een begrip in de regio Venlo</div>
              </div>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-8 h-8 text-rjmk-accent mr-4 shrink-0" />
              <div>
                <div className="font-display font-bold text-lg uppercase">100% Transparant</div>
                <div className="text-blue-100/70 text-sm">Eerlijke weging & marktomstandigheden</div>
              </div>
            </div>
            <div className="flex items-center">
              <Info className="w-8 h-8 text-rjmk-accent mr-4 shrink-0" />
              <div>
                <div className="font-display font-bold text-lg uppercase">Persoonlijk Advies</div>
                <div className="text-blue-100/70 text-sm">Bel direct voor grote volumes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WIDGET SECTION */}
      <section className="py-24 bg-slate-50 relative">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Main Widget */}
              <div className="lg:col-span-12">
                <PrijzenWidget />
              </div>

              {/* Text Blocks after Widget */}
              <div className="lg:col-span-7 space-y-10">
                <div className="glass-card p-10 rounded-3xl">
                  <h2 className="text-3xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-wide">Onze Prijsfilosofie</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Bij RJMK geloven we in het opbouwen van langdurige relaties met onze partners. Dat begint met eerlijkheid. Wij tonen geen lokprijzen die niet waargemaakt worden. In plaats daarvan bieden we een real-time inzicht in de markttrend van elk type metaal.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Nadat u contact met ons heeft opgenomen, kunnen we op basis van volume, kwaliteit en actuele LME koers de meest scherpe en transparante prijs voor u vaststellen. Zo weet u zeker dat u krijgt waar u recht op heeft.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div className="glass-card p-10 rounded-3xl bg-rjmk-dark text-white">
                  <h3 className="text-2xl font-display font-bold mb-6 uppercase tracking-tight">Direct Actuele Prijs?</h3>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    Stuur een foto van uw materiaal via WhatsApp of bel ons direct voor de meest actuele prijs van dit moment.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:0651352095" className="flex items-center justify-center w-full bg-white text-rjmk-dark font-bold py-4 rounded-xl hover:bg-slate-100 transition-colors">
                      <Phone className="w-5 h-5 mr-3 text-rjmk-blue" /> 06-513 520 95
                    </a>
                    <a href="https://wa.me/31651352095" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-green-500 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-colors">
                      <MessageCircle className="w-5 h-5 mr-3" /> WhatsApp Bericht
                    </a>
                  </div>
                </div>

                <div className="glass-card p-10 rounded-3xl border border-slate-200">
                  <h3 className="text-xl font-display font-bold text-rjmk-dark mb-4 uppercase tracking-tight">Grote Volumes?</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Voor industriële partners en herhaaldelijke grote partijen bieden we speciale tarieven en complete logistieke ontzorging.
                  </p>
                  <Link href="/diensten/container-plaatsing" className="inline-flex items-center text-rjmk-blue font-bold uppercase tracking-widest text-sm hover:text-rjmk-accent transition-colors">
                    Container aanvragen <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL LOGO STRIP */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center">
          <Image src="/logo-rjmk.png" alt="RJMK" width={180} height={90} className="grayscale opacity-20 mb-8" />
          <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]">Al jarenlang een begrip in metaalrecycling</p>
        </div>
      </section>
    </div>
  );
}
