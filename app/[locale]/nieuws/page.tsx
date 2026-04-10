import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight, Calendar, Newspaper, BarChart3, Recycle, Zap } from 'lucide-react';

export const metadata = {
  title: 'Nieuws & Kennisbank Metaalrecycling | RJMK Venlo',
  description: 'Lees de laatste feiten, marktinformatie en nieuwsartikelen over metaalrecycling, LME koersen en duurzaamheid in de regio Venlo.',
};

export default function NieuwsPage() {
  const articles = [
    {
      id: 1,
      title: "De Circulaire Kracht van Rood Koper: Vervalvrij Recyclen",
      date: "10 April 2026",
      category: "Marktnieuws",
      icon: <Zap className="w-6 h-6 text-rjmk-accent" />,
      content: `
        Koper is een van de weinige grondstoffen ter wereld die 100% gerecycled kan worden zonder enig verlies van materiaaleigenschappen of geleidbaarheid. Dit vermogen tot oneindige recycling is de reden waarom rood koper een extreem hoge restwaarde vertegenwoordigt op de London Metal Exchange (LME). 
        
        Volgens internationale schattingen wordt tot wel 80% van al het koper dat ooit is gemijnd, vandaag de dag nog steeds gebruikt. Vanuit een duurzaamheidsperspectief is koperrecycling essentieel: het omzetten van oud koper in nieuw materiaal vergt ongeveer 85% minder energie ten opzichte van het winnen van kopererts. 
        
        In regio's met een sterke industriële en logistieke infrastructuur, waaronder Venlo, spelen gespecialiseerde recyclingbedrijven een onmisbare rol door koperresten uit sloop- en installatiewerk efficiënt terug in de keten te brengen. Dit helpt lokale bedrijven niet alleen aan een transparantere financiële afwikkeling, maar dringt ook direct de wereldwijde CO2-voetafdruk terug.
      `
    },
    {
      id: 2,
      title: "Staal: Het Meest Gerecyclede Materiaal ter Wereld",
      date: "28 Maart 2026",
      category: "Duurzaamheid",
      icon: <Recycle className="w-6 h-6 text-rjmk-blue" />,
      content: `
        Oud ijzer en staalschroot vormen wereldwijd de ruggengraat van de metaalrecycling. Staal is het meest gerecyclede materiaal ter wereld, deels dankzij de magnetische eigenschappen die machinale scheiding uiterst efficiënt maken. 
        
        Het gebruik van staalschroot in hoogovens in plaats van ijzererts en steenkool bespaart ongeveer 74% van de benodigde energie, wat neerkomt op massale verminderingen van CO2-emissies. Een moderne staalfabriek gebruikt doorlopend oud ijzer als basislaag voor nieuwe producties.
        
        Vooral bij bouw- en constructiewerken of in de logistieke machinebouw rondom Venlo komt veel schroot vrij. Betrouwbare ophaaldiensten en strak gecoördineerde containerplaatsingen zorgen ervoor dat dit zogenaamde 'secundaire staal' binnen de kortste keren wordt geshredderd, geknipt en naar gieterijen wordt getransporteerd. Het is een cyclus die puur op feitelijke efficiëntie is gebouwd.
      `
    },
    {
      id: 3,
      title: "Loodaccu's: Een Slagingspercentage van bijna 99%",
      date: "14 Februari 2026",
      category: "Industrie & Milieu",
      icon: <BarChart3 className="w-6 h-6 text-badge-green" />,
      content: `
        Hoewel loodzuuraccu's als gevaarlijk afval (chemisch afval) worden geclassificeerd vanwege het toxische lood en batterijzuur, vormen ze paradoxaal genoeg een van de grootste succesverhalen binnen de recyclingindustrie. In Europa wordt inmiddels bijna 99% van de afgedankte loodaccu's met succes gerecycled.
        
        Tijdens het mechanische verwerkingsproces worden accu's verbrijzeld in bassins. De loodcomponenten zijn aanzienlijk zwaarder en zinken, terwijl de kunststof behuizing (meestal polypropyleen) naar de oppervlakte drijft. Het zwavelzuur wordt intussen veilig getapt en chemisch geneutraliseerd tot onschadelijk residu en water. 
        
        Zowel het gerecyclede lood als de kunststof behuizing vormen de primaire grondstof voor het produceren van gloednieuwe accu's. Omdat strenge milieuwetgeving de inname en verwerking reguleert, is het cruciaal om samen te werken met MRF-gecertificeerde inzamelingsstations in Venlo en omstreken die de protocollen voor veilige afvoer strikt naleven.
      `
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-44 pb-32 bg-rjmk-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rjmk-gebouw.png"
            alt="RJMK Metaalrecycling Nieuws"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rjmk-blue/60 to-rjmk-dark"></div>
          <div className="grain-overlay opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-8 uppercase tracking-[0.2em] backdrop-blur-md">
              Kennisbank & Actueel
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[0.9] uppercase tracking-tighter">
              Blijf op de <span className="text-rjmk-accent">Hoogte.</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-6 font-medium">
              Feitelijke artikelen, marktinzichten en informatie over de recyclingindustrie en LME markttrends in Venlo en Europa.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group">
                <div className="p-10 flex flex-col h-full relative">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {article.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      {article.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-display font-bold text-rjmk-dark mb-4 leading-tight group-hover:text-rjmk-blue transition-colors">
                    {article.title}
                  </h2>
                  
                  <div className="flex items-center text-sm text-slate-400 mb-8 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>

                  {/* Prose specific to exact formatting */}
                  <div className="text-slate-600 leading-relaxed space-y-4 mb-8 flex-grow text-[0.95rem]">
                    {article.content.trim().split('\\n\\n').map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))}
                  </div>

                  {/* Trust Badge at bottom of card to denote factual basis */}
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs font-bold tracking-widest uppercase text-badge-green flex items-center">
                      <Newspaper className="w-4 h-4 mr-2" />
                      Geverifieerd Feit
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA BANNER */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-tight">Klaar om duurzaam af te voeren?</h2>
          <p className="text-slate-600 text-lg mb-12">
            Bij RJMK in Venlo dragen we dagelijks bij aan de circulaire economie. Wij bieden transparante verwerking op basis van LME beurskoersen voor particulieren en bedrijven.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             <Link href="/contact" className="btn-primary px-10 py-5 text-lg">
               Neem Contact Op
             </Link>
             <Link href="/inkoop-producten" className="btn-outline px-10 py-5 text-lg">
               Bekijk Onze Materialen
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
