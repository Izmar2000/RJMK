import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Phone, ArrowRight, Truck, Recycle, Euro, MapPin, CheckCircle2, Factory, ShieldCheck, AlertCircle, Wrench } from 'lucide-react';
import FaqSection from '@/components/FaqSection';
import { Info } from 'lucide-react';
import PrijzenWidget from '@/components/PrijzenWidget';
import { locaties } from '@/lib/locaties';
import { useTranslations, useLocale } from 'next-intl';

export default function Home() {
  const t = useTranslations('Homepage');
  const locale = useLocale();
  
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/rjmk-gebouw.png"
            alt="RJMK gebouw Venlo"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rjmk-blue/90 via-rjmk-blue/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-rjmk-blue/60 via-transparent to-transparent"></div>
          <div className="grain-overlay"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold mb-6 backdrop-blur-md uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-rjmk-accent mr-2 animate-pulse"></span>
              {t('heroSpecialist')}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-6 tracking-tighter uppercase">
              {t('heroTitle1')} <br />
              <span className="text-rjmk-accent">{t('heroTitle2')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed font-medium">
              {t('heroDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0651352095" className="btn-primary px-8 py-4 flex items-center justify-center gap-4 hover:-translate-y-1 transition-all duration-300 group">
                <Phone className="w-8 h-8 text-white shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col items-center text-center">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-80 mb-0.5">{t('btnCallSub')}</span>
                  <span className="text-xl md:text-2xl font-display font-bold leading-tight">{t('btnCallMain')}</span>
                </div>
              </a>
              <Link href="/diensten/container-plaatsing" className="inline-flex items-center justify-center px-8 py-4 rounded-md border-2 border-white text-white font-bold transition-all duration-300 hover:bg-white hover:text-rjmk-blue backdrop-blur-md hover:-translate-y-1 group">
                <div className="flex flex-col items-center text-center mr-4">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-80 mb-0.5">{t('btnTrendsSub')}</span>
                  <span className="text-xl md:text-2xl font-display font-bold leading-tight">{t('btnTrendsMain')}</span>
                </div>
                <ArrowRight className="w-8 h-8 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-blue-100 font-medium">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-badge-green mr-2" /> {t('trust1')}
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-badge-green mr-2" /> {t('trust2')}
              </div>
              <div className="flex items-center text-badge-green font-medium text-sm">
                <ShieldCheck className="w-5 h-5 mr-2" />
                {t('trust3')}
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagonal Bottom Edge */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-slate-50 clip-diagonal-top z-20"></div>
      </section>

      {/* DIENSTEN GRID */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-rjmk-dark mb-4 uppercase tracking-wide">{t('servicesTitle')}</h2>
            <div className="w-24 h-1 bg-rjmk-accent mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">
              {t('servicesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Link href="/diensten/oud-ijzer-ophalen" className="glass-card p-8 rounded-xl group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rjmk-accent/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              <Truck className="w-12 h-12 text-rjmk-accent mb-6 relative z-10" />
              <h3 className="text-xl font-display font-bold text-rjmk-dark mb-3 uppercase relative z-10">{t('service1Title')}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow relative z-10">
                {t('service1Desc')}
              </p>
              <div className="flex items-center text-rjmk-accent font-medium text-sm mt-auto relative z-10">
                {t('readMore')} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/diensten/metalen-inkoop" className="glass-card p-8 rounded-xl group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rjmk-gold/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              <Euro className="w-12 h-12 text-rjmk-gold mb-6 relative z-10" />
              <h3 className="text-xl font-display font-bold text-rjmk-dark mb-3 uppercase relative z-10">{t('service2Title')}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow relative z-10">
                {t('service2Desc')}
              </p>
              <div className="flex items-center text-rjmk-gold font-medium text-sm mt-auto relative z-10">
                {t('readMore')} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/diensten/container-plaatsing" className="glass-card p-8 rounded-xl group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rjmk-blue/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              <Factory className="w-12 h-12 text-rjmk-blue mb-6 relative z-10" />
              <h3 className="text-xl font-display font-bold text-rjmk-dark mb-3 uppercase relative z-10">{t('service3Title')}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow relative z-10">
                {t('service3Desc')}
              </p>
              <div className="flex items-center text-rjmk-blue font-medium text-sm mt-auto relative z-10">
                {t('readMore')} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/diensten/bedrijfsontruiming" className="glass-card p-8 rounded-xl group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-badge-green/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              <Wrench className="w-12 h-12 text-badge-green mb-6 relative z-10" />
              <h3 className="text-xl font-display font-bold text-rjmk-dark mb-3 uppercase relative z-10">{t('service4Title')}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow relative z-10">
                {t('service4Desc')}
              </p>
              <div className="flex items-center text-badge-green font-medium text-sm mt-auto relative z-10">
                {t('readMore')} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* DAGPRIJZEN WIDGET SECTION */}
      <section className="py-24 bg-white relative">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-rjmk-dark uppercase tracking-wide">
                {t('pricesTitle')} <span className="text-rjmk-accent">{t('pricesTitleHighlight')}</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {t('pricesDesc1')}
              </p>
              <p className="text-slate-600 lg:text-lg leading-relaxed">
                {t('pricesDesc2')}
              </p>
              <div className="pt-4">
                <Link href="/inkoop-producten" className="btn-primary">
                  {t('btnAllProducts')}
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="text-sm text-slate-600 flex items-center mb-4">
                <span>{t('marketStatus')}</span> <span className="text-rjmk-dark font-mono font-bold ml-2">{t('marketActual')}</span>
              </div>
              <PrijzenWidget />
            </div>
          </div>
        </div>
      </section>

      {/* WERKGEBIED SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-rjmk-dark mb-4 uppercase tracking-wide">{t('regionTitle')}</h2>
            <div className="w-24 h-1 bg-rjmk-accent mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">
              {t('regionDesc')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {locaties.map((loc) => (
              <Link 
                key={loc.slug} 
                href={`/locaties/${loc.slug}`}
                className="flex items-center px-6 py-3 bg-white border border-slate-200 rounded-full text-rjmk-dark font-medium hover:bg-rjmk-blue hover:border-rjmk-blue hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <MapPin className="w-4 h-4 mr-2 text-rjmk-accent group-hover:text-white" />
                {loc.naam}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTIEKEN */}
      <section className="py-20 bg-rjmk-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-rjmk-blue/95"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-display font-bold text-white">25+</div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">{t('stat1')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-display font-bold text-white">10k+</div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">{t('stat2')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-display font-bold text-white">50k</div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">{t('stat3')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-display font-bold text-white">100%</div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">{t('stat4')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* OVER RJMK */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative border border-slate-200 shadow-xl">
                <Image
                  src="/rjmk-gebouw2.png"
                  alt="RJMK terrein"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-rjmk-blue/10"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center space-x-4">
                  <ShieldCheck className="w-12 h-12 text-badge-green" />
                  <div>
                    <div className="text-rjmk-dark font-bold font-display uppercase">{t('trust3')}</div>
                    <div className="text-slate-600 text-sm">{t('heroSpecialist')}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-rjmk-dark uppercase tracking-wide">
                {t('aboutTitle')} <span className="text-rjmk-accent">{t('aboutTitleRJMK')}</span>
              </h2>
              <div className="w-24 h-1 bg-rjmk-accent mb-6"></div>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>{t('aboutP1')}</p>
                <p>{t('aboutP2')}</p>
                <p>{t('aboutP4')}</p>
              </div>
              <div className="pt-6">
                <Link href="/contact" className="btn-outline">
                  {t('btnContact')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTAINER CTA BANNER */}
      <section className="relative py-32 bg-slate-100 clip-diagonal overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rjmk-gebouw.png"
            alt="RJMK container plaatsing"
            fill
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rjmk-blue via-rjmk-blue/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wide">
              {t('ctaTitle1')} <br />
              <span className="text-rjmk-accent">{t('ctaTitle2')}</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              {t('ctaDesc')}
            </p>
            <Link href="/diensten/container-plaatsing" className="btn-primary text-lg px-8 py-4">
              {t('btnCta')} <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>
      {/* SEO FAQ SECTION */}
      <FaqSection locale={locale} />
    </>
  );
}
