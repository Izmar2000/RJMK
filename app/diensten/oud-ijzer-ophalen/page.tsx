import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight, Truck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oud IJzer Ophalen Venlo & Regio | Gratis Ophaalservice | RJMK BV',
  description: 'RJMK BV haalt gratis uw oud ijzer en metalen op in Venlo en omstreken. Snelle service, eerlijke prijzen en directe uitbetaling. Bel 06-513 520 95.',
};

export default function OudIjzerOphalenPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Komen jullie gratis oud ijzer ophalen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden een gratis ophaalservice voor oud ijzer en andere metalen in Venlo en de wijde omtrek. Neem contact op om de mogelijkheden te bespreken."
        }
      },
      {
        "@type": "Question",
        "name": "Welke soorten metaal halen jullie op?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wij halen vrijwel alle ferro en non-ferro metalen op, waaronder oud ijzer, koper, aluminium, lood, zink, RVS, kabels en accu's."
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
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/truck-scrap/1920/1080')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <Truck className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wide">
            Oud IJzer <span className="text-cyan-400">Ophalen</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Snel, vakkundig en gratis uw oud ijzer en metalen laten ophalen in Venlo en omstreken. Wij bieden de beste dagprijzen en directe uitbetaling.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-50 relative">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed">
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-display font-bold text-rjmk-dark mb-4 uppercase">Uw Metaal, Onze Zorg</h2>
                <p className="mb-4">
                  Heeft u na een verbouwing, opruiming of bedrijfsactiviteit een hoeveelheid oud ijzer of andere metalen over? RJMK BV neemt u het zware werk graag uit handen. Met onze eigen ophaaldienst komen wij uw metaalafval snel en efficiënt ophalen.
                </p>
                <p className="mb-4">
                  Wij beschikken over een modern wagenpark, waaronder vrachtwagens met autolaadkraan, waardoor wij ook grote en zware stukken probleemloos kunnen laden en afvoeren. U hoeft zelf niets te doen; wij regelen alles van A tot Z.
                </p>
                <h3 className="text-xl font-display font-bold text-rjmk-dark mt-8 mb-4 uppercase">Hoe werkt onze ophaalservice?</h3>
                <ol className="list-decimal list-inside space-y-3 mb-6">
                  <li><strong>Contact:</strong> Bel ons op 06-513 520 95 of stuur een bericht via het contactformulier. Geef aan om wat voor materiaal het gaat en de geschatte hoeveelheid.</li>
                  <li><strong>Afspraak:</strong> Wij plannen in overleg met u een ophaalmoment in. Vaak kunnen wij al binnen 24 uur ter plaatse zijn.</li>
                  <li><strong>Ophalen:</strong> Onze ervaren chauffeur komt bij u langs, weegt de materialen (indien gewenst/mogelijk op locatie of op onze gecertificeerde weegbrug) en laadt alles in.</li>
                  <li><strong>Uitbetaling:</strong> U ontvangt direct de afgesproken vergoeding, gebaseerd op de actuele en eerlijke LME-dagprijzen. Contant of per bankoverschrijving, wat u wenst.</li>
                </ol>
                <div className="mt-8 p-6 bg-slate-100 border border-slate-200 rounded-lg">
                  <h4 className="text-lg font-bold text-rjmk-dark mb-2">Voor Particulieren & Bedrijven</h4>
                  <p className="text-sm">
                    Onze ophaalservice is beschikbaar voor zowel particulieren als bedrijven. Voor bedrijven met structureel metaalafval bieden wij tevens een gratis <Link href="/diensten/container-plaatsing" className="text-rjmk-accent hover:underline">container service</Link> aan.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              <div className="glass-card p-8 rounded-xl bg-blue-50 border-blue-200">
                <h3 className="text-xl font-display font-bold text-rjmk-dark mb-4 uppercase">Direct een afspraak maken?</h3>
                <p className="text-slate-600 mb-6">
                  Bel ons direct om een ophaalafspraak in te plannen. Wij zijn bereikbaar van maandag t/m zaterdag.
                </p>
                <a href="tel:0651352095" className="btn-primary w-full justify-center text-lg py-4">
                  <Phone className="w-5 h-5 mr-3" /> 06-513 520 95
                </a>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-display font-bold text-rjmk-dark mb-6 uppercase border-b border-slate-200 pb-4">Onze Voordelen</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-600">Gratis ophaalservice in de regio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-600">Eerlijke dagprijzen (LME)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-600">Directe uitbetaling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-600">Eigen modern materieel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
