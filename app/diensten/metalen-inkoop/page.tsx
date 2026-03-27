import { Metadata } from 'next';
import Link from 'next/link';
import { Euro, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Metalen Inkoop Venlo | Beste Dagprijzen Koper, Aluminium, RVS | RJMK BV',
  description: 'RJMK BV koopt alle soorten ferro en non-ferro metalen in tegen de scherpste dagprijzen. Directe uitbetaling en eerlijke weging in Venlo.',
};

export default function MetalenInkoopPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-rjmk-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/metal-scrap/1920/1080')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <Euro className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wide">
            Metalen <span className="text-yellow-400">Inkoop</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Inkoop van alle soorten ferro en non-ferro metalen tegen de beste, LME-gekoppelde dagprijzen. Eerlijke weging en directe uitbetaling.
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
                <h2 className="text-2xl font-display font-bold text-rjmk-dark mb-4 uppercase">Uw Metalen, Onze Expertise</h2>
                <p className="mb-4">
                  Bij RJMK BV bent u aan het juiste adres voor de inkoop van vrijwel alle soorten metalen. Wij zijn gespecialiseerd in zowel ferro als non-ferro metalen en bieden u altijd een eerlijke, transparante prijs gebaseerd op de actuele koersen van de London Metal Exchange (LME).
                </p>
                <p className="mb-4">
                  Of u nu een particulier bent met een kleine hoeveelheid koper, of een bedrijf met wekelijks tonnen aan aluminium of RVS afval; wij verwerken het efficiënt en milieuvriendelijk. Onze gecertificeerde weegbruggen zorgen voor een exacte weging, zodat u precies krijgt waar u recht op heeft.
                </p>
                
                <h3 className="text-xl font-display font-bold text-rjmk-dark mt-8 mb-4 uppercase">Wat kopen wij in?</h3>
                <p className="mb-4">
                  Wij kopen een breed scala aan metalen in, waaronder:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Rood Koper & Messing:</strong> Leidingen, draad, koppelingen, kranen.</li>
                  <li><strong>Aluminium & RVS:</strong> Profielen, platen, velgen, keukenapparatuur.</li>
                  <li><strong>Lood & Zink:</strong> Daklood, oude dakgoten, regenpijpen.</li>
                  <li><strong>Kabels:</strong> Koper- en aluminiumkabels (wij beschikken over een eigen kabelshredder).</li>
                  <li><strong>Accu&apos;s & Elektromotoren:</strong> Loodaccu&apos;s, oude motoren, dynamo&apos;s.</li>
                  <li><strong>Oud IJzer & Staal:</strong> Balkijzer, knipijzer, gruis, gemengd schroot.</li>
                </ul>

                <div className="mt-8 p-6 bg-slate-100 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-rjmk-dark mb-1">Bekijk onze actuele inkoopprijzen</h4>
                    <p className="text-sm">Onze prijzen worden dagelijks geüpdatet.</p>
                  </div>
                  <Link href="/dagprijzen" className="btn-primary whitespace-nowrap">
                    Naar Dagprijzen <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              <div className="glass-card p-8 rounded-xl bg-yellow-50 border-yellow-200">
                <h3 className="text-xl font-display font-bold text-rjmk-dark mb-4 uppercase">Grote Partijen?</h3>
                <p className="text-slate-600 mb-6">
                  Heeft u regelmatig grote hoeveelheden metaalafval of een eenmalig groot project? Wij maken graag een prijsafspraak op maat.
                </p>
                <Link href="/contact" className="btn-outline w-full justify-center text-yellow-600 border-yellow-600 hover:bg-yellow-600 hover:text-white">
                  Neem Contact Op
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
