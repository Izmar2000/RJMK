import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Calendar, ArrowRight } from 'lucide-react';
import { nieuwsArtikelen } from '@/lib/nieuwsData';

export default function NieuwsPage() {
  const t = useTranslations('NieuwsArticles');
  const ui = useTranslations('NieuwsUI');

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
            {nieuwsArtikelen.map((article) => (
              <article key={article.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group">
                
                {/* Image Header */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={t(`${article.slug}.title`)} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-white bg-rjmk-blue/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      {t(`${article.slug}.category`)}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col items-start h-full">
                  <div className="flex items-center text-sm text-slate-400 mb-4 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>

                  <h2 className="text-2xl font-display font-bold text-rjmk-dark mb-4 leading-tight group-hover:text-rjmk-blue transition-colors">
                    {t(`${article.slug}.title`)}
                  </h2>
                  
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {t(`${article.slug}.summary`)}
                  </p>

                  <Link href={`/nieuws/${article.slug}`} className="mt-auto inline-flex items-center text-rjmk-blue font-bold uppercase tracking-widest text-sm hover:text-rjmk-accent transition-colors group/btn">
                    {ui('readMore')}
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
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
