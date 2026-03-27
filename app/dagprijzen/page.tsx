import { Metadata } from 'next';
import PrijzenWidget from '@/components/PrijzenWidget';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Actuele Dagprijzen Oud IJzer & Metalen | RJMK BV Venlo',
  description: 'Bekijk de actuele dagprijzen voor oud ijzer, koper, aluminium, lood en zink. Eerlijke LME-gekoppelde prijzen bij RJMK BV in Venlo.',
};

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
          "text": "Onze dagprijzen zijn direct gekoppeld aan de actuele koersen van de London Metal Exchange (LME). Hierdoor garanderen wij altijd een eerlijke en marktconforme prijs voor uw metalen."
        }
      },
      {
        "@type": "Question",
        "name": "Wanneer krijg ik uitbetaald voor mijn oud ijzer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bij RJMK BV zorgen wij voor een directe en vlotte afhandeling. U ontvangt uw geld direct bij inlevering of na het wegen van de opgehaalde materialen."
        }
      }
    ]
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-rjmk-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/metal-prices/1920/1080')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wide">
            Actuele <span className="text-rjmk-accent">Dagprijzen</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Eerlijke, transparante prijzen direct gekoppeld aan de LME koersen. Bekijk hieronder wat uw metalen vandaag waard zijn.
          </p>
        </div>
      </section>

      {/* Widget Section */}
      <section className="py-16 bg-slate-50 relative">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <PrijzenWidget />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-display font-bold text-rjmk-dark mb-4">Grote Partijen?</h3>
                <p className="text-slate-600 mb-6">
                  Heeft u regelmatig grote hoeveelheden metaalafval of een eenmalig groot project? Wij maken graag een prijsafspraak op maat.
                </p>
                <a href="tel:0651352095" className="flex items-center text-rjmk-blue font-medium hover:text-rjmk-accent transition-colors">
                  <Phone className="w-5 h-5 mr-2" /> Bel voor een projectprijs
                </a>
              </div>
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-display font-bold text-rjmk-dark mb-4">Inkoop Producten</h3>
                <p className="text-slate-600 mb-6">
                  Bekijk een gedetailleerd overzicht van alle ferro en non-ferro metalen die wij inkopen en verwerken.
                </p>
                <Link href="/inkoop-producten" className="flex items-center text-rjmk-blue font-medium hover:text-rjmk-accent transition-colors">
                  Bekijk alle producten <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
