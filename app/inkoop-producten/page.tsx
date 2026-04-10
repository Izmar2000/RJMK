'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, TrendingDown, Minus, Info } from 'lucide-react';
import { materials } from '@/lib/materials';
import { metaalPrijzen } from '@/lib/prices';

export default function InkoopProductenPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-44 pb-24 bg-rjmk-dark relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-rjmk-blue/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-rjmk-accent/20 border border-rjmk-accent/30 text-rjmk-accent text-sm font-bold mb-8 uppercase tracking-widest">
            Expertise & Transparantie
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 uppercase tracking-tighter">
            Wat Wij <span className="text-rjmk-accent">Inkopen</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium">
            RJMK is gespecialiseerd in de inkoop en vakkundige verwerking van alle soorten ferro en non-ferro metalen in de regio Venlo.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-32 bg-slate-50 relative">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {materials.map((material, idx) => {
              const trend = metaalPrijzen.find(p => p.id === material.id);
              return (
                <div key={idx} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={material.image}
                      alt={material.nl.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rjmk-dark via-rjmk-dark/20 to-transparent"></div>
                    
                    {/* Trend Flag */}
                    {trend && (
                      <div className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center">
                        <span className="text-white text-[10px] uppercase font-bold tracking-widest mr-3">Trend</span>
                        {trend.trend === 'up' && <TrendingUp className="w-4 h-4 text-badge-green" />}
                        {trend.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
                        {trend.trend === 'stable' && <Minus className="w-4 h-4 text-slate-300" />}
                      </div>
                    )}

                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight">
                        {material.nl.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-grow">
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed flex-grow">
                      {material.nl.shortDesc}
                    </p>
                    
                    <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                      <Link 
                        href={`/producten/${material.slug}`} 
                        className="inline-flex items-center text-rjmk-blue font-bold uppercase tracking-widest text-sm hover:text-rjmk-accent transition-colors"
                      >
                        Bekijk Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                        <Info className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REPUTATION FOOTER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-tight">Zekerheid bij inkoop</h2>
          <p className="text-slate-600 text-lg mb-12">
            Met onze jarenlange ervaring in Venlo en een zeer goede naam bieden wij u de zekerheid van eerlijke markttrends, transparante weging en de beste service. 
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             <Link href="/contact" className="btn-primary px-10 py-5 text-xl">
               Partij Aanmelden
             </Link>
             <a href="tel:0651352095" className="flex items-center justify-center bg-slate-100 text-rjmk-dark font-bold py-5 px-10 rounded-md transition-all text-xl hover:bg-slate-200">
                06-513 520 95
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
