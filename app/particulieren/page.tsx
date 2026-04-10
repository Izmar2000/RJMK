'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Truck, MapPin, Phone, MessageCircle, ArrowRight, CheckCircle2, Recycle, Info, Scale, ShieldCheck } from 'lucide-react';

export default function ParticulierenPage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-44 pb-32 bg-rjmk-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rjmk-gebouw.png"
            alt="RJMK Venlo Particulieren"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rjmk-blue/40 to-rjmk-dark"></div>
          <div className="grain-overlay opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-rjmk-accent/20 border border-rjmk-accent/30 text-rjmk-accent text-sm font-bold mb-8 uppercase tracking-[0.2em] backdrop-blur-md">
               Betrouwbare recycling voor particulieren
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[0.9] uppercase tracking-tighter">
              Zelf inleveren <br />
              <span className="text-rjmk-accent">of laten ophalen.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
              RJMK biedt particulieren in Venlo en omstreken de makkelijkste manier om van oud ijzer en metalen af te komen. Altijd een eerlijke marktwaarde en vakkundige service.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#mogelijkheden" className="btn-primary text-xl px-10 py-5">
                Onze Mogelijkheden <ArrowRight className="w-6 h-6 ml-3" />
              </a>
              <a href="https://wa.me/31651352095" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-md transition-all shadow-xl text-xl">
                <MessageCircle className="w-7 h-7 mr-3" /> WhatsApp Foto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MOGELIJKHEDEN / CARDS */}
      <section id="mogelijkheden" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* ZELF INLEVEREN */}
            <div className="group relative bg-white p-12 lg:p-16 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rjmk-blue/5 rounded-bl-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-rjmk-blue/10 flex items-center justify-center mb-10 text-rjmk-blue group-hover:bg-rjmk-blue group-hover:text-white transition-all duration-300">
                  <MapPin className="w-10 h-10" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-tight">Zelf <span className="text-rjmk-blue">Inleveren</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  Heeft u kleine hoeveelheden oud ijzer of kostbare metalen zoals koper of koperkabel? U bent van harte welkom bij onze vestiging in Venlo. 
                </p>
                
                <ul className="space-y-6 mb-12">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-badge-green mr-4 shrink-0 mt-1" />
                    <div>
                      <span className="block font-bold text-rjmk-dark uppercase tracking-wide">Direct Wegen</span>
                      <p className="text-slate-500 text-sm">Op onze geijkte weegschalen voor een eerlijke afhandeling.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-badge-green mr-4 shrink-0 mt-1" />
                    <div>
                      <span className="block font-bold text-rjmk-dark uppercase tracking-wide">Transparante Trends</span>
                      <p className="text-slate-500 text-sm">Altijd een eerlijke marktwaarde voor uw materiaal.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-badge-green mr-4 shrink-0 mt-1" />
                    <div>
                      <span className="block font-bold text-rjmk-dark uppercase tracking-wide">Geen Afspraak Nodig</span>
                      <p className="text-slate-500 text-sm">Rij gewoon het terrein op binnen onze openingstijden.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-auto space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-600">
                    "Groot Echtenrayseweg 42, 5928 PA Venlo. Maandag t/m Zaterdag geopend."
                  </div>
                  <Link href="/contact" className="inline-flex items-center text-rjmk-blue font-bold uppercase tracking-widest text-sm group-hover:translate-x-2 transition-transform">
                    Onze Locatie Bekijken <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* LATEN OPHALEN */}
            <div className="group relative bg-rjmk-blue p-12 lg:p-16 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="relative z-10 font-medium">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-10 text-rjmk-accent group-hover:bg-rjmk-accent group-hover:text-rjmk-dark transition-all duration-300">
                  <Truck className="w-10 h-10" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">Gratis <span className="text-rjmk-accent">Ophalen</span></h2>
                <p className="text-blue-50 text-lg leading-relaxed mb-10">
                  Geen sjouwwerk? Wij komen ook bij u langs om oud ijzer en metalen op te halen. Helemaal gratis, mits het volume rendabel is voor een rit.
                </p>
                
                <ul className="space-y-6 mb-12 text-blue-100">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-rjmk-accent mr-4 shrink-0 mt-1" />
                    <div>
                      <span className="block font-bold text-white uppercase tracking-wide">Vanaf Voldoende Volume</span>
                      <p className="text-blue-200/70 text-sm italic">Wij beoordelen per situatie of ophalen mogelijk is.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-rjmk-accent mr-4 shrink-0 mt-1" />
                    <div>
                      <span className="block font-bold text-white uppercase tracking-wide">WhatsApp Foto Selectie</span>
                      <p className="text-blue-200/70 text-sm">Stuur een foto en u hoort direct of we langskomen.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-rjmk-accent mr-4 shrink-0 mt-1" />
                    <div>
                      <span className="block font-bold text-white uppercase tracking-wide">Binnen 24-48 uur</span>
                      <p className="text-blue-200/70 text-sm">Vaak kunnen we al zeer snel een afspraak inplannen.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <a href="https://wa.me/31651352095?text=Hallo RJMK, kunt u dit ophalen? [stuur foto]" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full bg-rjmk-accent text-rjmk-dark font-display font-bold text-xl py-6 rounded-2xl hover:scale-[1.02] transition-all shadow-lg uppercase tracking-wide">
                    <MessageCircle className="w-7 h-7 mr-3" /> WhatsApp Foto Sturen
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTAINER OPTIE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="p-12 lg:p-20 rounded-[3rem] bg-rjmk-dark text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rjmk-accent/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            
            <div className="lg:w-3/5 space-y-8 relative z-10 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight leading-[1]">
                 Grote opruiming of <br />
                 <span className="text-rjmk-accent">Verbouwing?</span>
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Heeft u structureel veel oud ijzer liggen door een verbouwing of een grootschalige opruiming? Wij plaatsen ook gratis containers bij particulieren voor grotere hoeveelheden.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                 <Link href="/diensten/container-plaatsing" className="btn-primary px-10">
                   Container Aanvragen
                 </Link>
                 <a href="tel:0651352095" className="flex items-center text-rjmk-accent hover:text-white transition-colors font-bold uppercase tracking-widest text-sm">
                   <Phone className="w-4 h-4 mr-2" /> Bel Voor Advies
                 </a>
              </div>
            </div>
            
            <div className="lg:w-2/5 flex justify-center">
               <div className="relative w-72 h-72">
                 <div className="absolute inset-0 bg-rjmk-accent/10 rounded-full animate-pulse"></div>
                 <Truck className="relative w-full h-full text-rjmk-accent p-12" strokeWidth={1} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* REPUTATIE / TRUST */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <Scale className="w-12 h-12 text-rjmk-accent mx-auto" />
                <h3 className="text-xl font-display font-bold text-rjmk-dark uppercase tracking-tight">Geijkt & Eerlijk</h3>
                <p className="text-slate-500 text-sm">Onze weegschalen worden periodiek geijkt volgens de hoogste normen.</p>
              </div>
              <div className="space-y-4">
                <ShieldCheck className="w-12 h-12 text-badge-green mx-auto" />
                <h3 className="text-xl font-display font-bold text-rjmk-dark uppercase tracking-tight">MRF Gecertificeerd</h3>
                <p className="text-slate-500 text-sm">U werkt met een officieel erkend en gecertificeerd recyclingbedrijf.</p>
              </div>
              <div className="space-y-4">
                <Recycle className="w-12 h-12 text-rjmk-blue mx-auto" />
                <h3 className="text-xl font-display font-bold text-rjmk-dark uppercase tracking-tight">LME Markttrends</h3>
                <p className="text-slate-500 text-sm">Altijd een actuele en marktconforme trend op basis van de beurskoersen.</p>
              </div>
           </div>
        </div>
      </section>

      {/* FINAL CTA CONTACT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-tight">Vragen over uw materiaal?</h2>
          <p className="text-slate-600 text-lg mb-12">
            Twijfelt u welk type metaal u heeft, of de hoeveelheid voldoende is om op te halen? Neem contact met ons op via WhatsApp of bel direct. Wij helpen u graag verder.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             <a href="tel:0651352095" className="btn-primary px-10 py-5 text-xl">
               <Phone className="w-6 h-6 mr-3" /> 06-513 520 95
             </a>
             <a href="https://wa.me/31651352095" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-md transition-all shadow-xl text-xl">
                <MessageCircle className="w-7 h-7 mr-3" /> WhatsApp Bericht
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
