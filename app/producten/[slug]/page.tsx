'use client';

import { useParams, notFound } from 'next/navigation';
import { materials, getMaterialBySlug } from '@/lib/materials';
import { metaalPrijzen } from '@/lib/prices';
import Image from 'next/image';
import { Phone, ArrowRight, MessageCircle, CheckCircle2, Factory, Recycle, ShieldCheck, ChevronRight, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const material = getMaterialBySlug(slug);

  if (!material) {
    notFound();
  }

  // Find corresponding price trend
  const priceTrend = metaalPrijzen.find(p => p.id === material.id || p.id === material.slug);

  return (
    <div className="bg-white">
      {/* Dynamic SEO Head - handled in a separate metadata expert, but for client component we focus on structure */}
      
      {/* HERO SECTION */}
      <section className="relative pt-44 pb-32 bg-rjmk-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={material.image}
            alt={material.name}
            fill
            className="object-cover opacity-20 blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rjmk-dark via-rjmk-dark/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-rjmk-accent/20 border border-rjmk-accent/30 text-rjmk-accent text-sm font-bold mb-8 uppercase tracking-widest">
                <Recycle className="w-4 h-4 mr-2" /> Metaal Recycling Venlo
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[1] uppercase tracking-tighter">
                {material.nl.name} <br />
                <span className="text-rjmk-accent font-sans italic lowercase font-medium tracking-normal text-3xl md:text-5xl block mt-2 opacity-80">
                  {material.id === 'rood-koper' ? 'inkoop & verwerking' : 'duurzame recycling'}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed mb-12">
                {material.nl.shortDesc}
              </p>
              
              <div className="flex flex-wrap gap-6">
                <a 
                  href={`https://wa.me/31651352095?text=Hallo RJMK, wat is de actuele trend voor ${material.nl.name}?`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-md transition-all shadow-xl text-xl"
                >
                  <MessageCircle className="w-7 h-7 mr-3" /> WhatsApp Trend
                </a>
                <a href="tel:0651352095" className="flex items-center justify-center bg-white text-rjmk-dark font-bold py-5 px-10 rounded-md transition-all shadow-xl text-xl hover:bg-slate-100">
                  <Phone className="w-6 h-6 mr-3 text-rjmk-blue" /> Direct Bellen
                </a>
              </div>
            </div>

            {/* Price Trend Card */}
            {priceTrend && (
              <div className="lg:w-2/5 w-full">
                <div className="glass-card p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-rjmk-accent/10 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-blue-100/60 text-xs font-bold uppercase tracking-[0.3em] mb-4">Marktomstandigheden</div>
                    <div className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">Markt Trend</div>
                    
                    <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/5 mb-8">
                       {priceTrend.trend === 'up' && (
                         <div className="flex flex-col items-center">
                           <TrendingUp className="w-20 h-20 text-badge-green mb-4 animate-bounce" />
                           <span className="text-badge-green font-bold text-2xl uppercase tracking-widest">Stijgend</span>
                         </div>
                       )}
                       {priceTrend.trend === 'down' && (
                         <div className="flex flex-col items-center">
                           <TrendingDown className="w-20 h-20 text-red-500 mb-4 animate-pulse" />
                           <span className="text-red-500 font-bold text-2xl uppercase tracking-widest">Dalend</span>
                         </div>
                       )}
                       {priceTrend.trend === 'stable' && (
                         <div className="flex flex-col items-center">
                           <Minus className="w-20 h-20 text-slate-400 mb-4" />
                           <span className="text-slate-400 font-bold text-2xl uppercase tracking-widest">Stabiel</span>
                         </div>
                       )}
                       <p className="text-blue-100/40 text-xs mt-6 uppercase tracking-widest">LME-gekoppeld</p>
                    </div>

                    <p className="text-blue-100 text-sm leading-relaxed mb-0 font-medium italic">
                      "Wij bieden altijd een eerlijke marktwaarde op basis van transparante dagkoersen."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Main Column */}
            <div className="lg:w-2/3 space-y-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-rjmk-dark mb-8 uppercase tracking-tight">Expertise in {material.nl.name}</h2>
                <div className="prose prose-lg prose-slate max-w-none">
                  {material.nl.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-slate-600 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Properties Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {material.nl.properties.map((prop, i) => (
                  <div key={i} className="flex items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-rjmk-accent transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-rjmk-blue/10 flex items-center justify-center mr-6 text-rjmk-blue group-hover:bg-rjmk-accent group-hover:text-white transition-all">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-rjmk-dark font-bold uppercase tracking-wider text-sm">{prop}</span>
                  </div>
                ))}
              </div>

              {/* Recycling Box */}
              <div className="p-10 lg:p-14 rounded-[2rem] bg-rjmk-dark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rjmk-accent/5 rounded-full -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-rjmk-accent/10 border border-rjmk-accent/30 flex items-center justify-center mr-6">
                      <Recycle className="w-8 h-8 text-rjmk-accent" />
                    </div>
                    <h3 className="text-3xl font-display font-bold uppercase tracking-tight">Het Recycling Proces</h3>
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    {material.nl.recyclingProcess}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:w-1/3 space-y-12">
              {/* Trust Card */}
              <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-12 h-12 text-rjmk-accent mb-6" />
                <h3 className="text-2xl font-display font-bold text-rjmk-dark mb-4 uppercase">Onze Reputatie</h3>
                <p className="text-slate-600 mb-8 leading-relaxed italic border-l-4 border-rjmk-accent pl-6">
                  {material.nl.whyRJMK}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-sm font-bold text-rjmk-dark uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-rjmk-accent rounded-full mr-3"></div>
                    Transparante weging
                  </div>
                  <div className="flex items-center text-sm font-bold text-rjmk-dark uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-rjmk-accent rounded-full mr-3"></div>
                    Directe afrekening
                  </div>
                  <div className="flex items-center text-sm font-bold text-rjmk-dark uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-rjmk-accent rounded-full mr-3"></div>
                    LME Markttrends
                  </div>
                </div>
              </div>

              {/* Contact Sidebar */}
              <div className="p-10 rounded-3xl bg-rjmk-blue text-white shadow-xl">
                <h3 className="text-2xl font-display font-bold mb-6 uppercase">Wilt u {material.nl.name} inleveren?</h3>
                <p className="text-blue-100 mb-10">
                  Neem contact op voor de actuele trend en een vakkundige afhandeling in Venlo.
                </p>
                <a href="tel:0651352095" className="flex items-center justify-center w-full bg-white text-rjmk-blue font-bold py-4 rounded-xl mb-4 hover:bg-slate-100 transition-colors">
                  <Phone className="w-5 h-5 mr-3" /> Direct Bellen
                </a>
                <a href={`https://wa.me/31651352095?text=Afspraak inplannen voor ${material.nl.name}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-green-500 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-5 h-5 mr-3" /> WhatsApp Bericht
                </a>
              </div>

              {/* Related Products List */}
              <div className="p-10 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <h3 className="text-xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-tight">Andere Producten</h3>
                <div className="space-y-4">
                  {materials.filter(m => m.slug !== slug).slice(0, 4).map((m) => (
                    <Link key={m.slug} href={`/producten/${m.slug}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                      <span className="font-bold text-slate-500 group-hover:text-rjmk-dark transition-colors uppercase tracking-widest text-xs">{m.nl.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-rjmk-accent transition-all group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <Factory className="w-16 h-16 text-rjmk-blue mx-auto mb-8 opacity-40" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-tight">RJMK: Uw Partner in Metaalrecycling</h2>
          <p className="text-slate-600 text-lg mb-12">
            Met jarenlange ervaring en een zeer goede naam in Venlo zijn wij uw betrouwbare partner voor elk type metaalafval. Transparant, eerlijk en vakkundig.
          </p>
          <Link href="/contact" className="btn-primary text-xl px-12 py-5">
            Neem Nu Contact Op <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
}
