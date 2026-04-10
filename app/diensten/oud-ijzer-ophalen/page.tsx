'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, ArrowRight, Truck, CheckCircle2, MapPin, Send, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const collectionSchema = z.object({
  naam: z.string().min(2, 'Naam is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  telefoon: z.string().min(8, 'Telefoonnummer is verplicht'),
  plaats: z.string().min(2, 'Plaats is verplicht'),
  materiaal: z.string().min(1, 'Selecteer een materiaal'),
  hoeveelheid: z.string().min(1, 'Geef een indicatie van de hoeveelheid'),
  opmerkingen: z.string().optional(),
});

type CollectionFormValues = z.infer<typeof collectionSchema>;

const materials = [
  {
    name: 'Koper & Messing',
    slug: 'koper-messing',
    image: '/materials/copper.png',
    description: 'Handgepeld koper, koperen buizen en messing restanten uit installatiewerk of industrie.',
  },
  {
    name: 'Aluminium',
    slug: 'aluminium',
    image: '/materials/aluminum.png',
    description: 'Aluminium profielen, platen, velgen en gietaluminium van bouw of industrie.',
  },
  {
    name: 'Kabels & Snoeren',
    slug: 'kabels',
    image: '/materials/cables.png',
    description: 'Grondkabels, loodkabels, PVC kabels en huishoudelijke snoeren voor recycling.',
  },
  {
    name: 'Oud IJzer & Schroot',
    slug: 'ijzer',
    image: '/materials/iron.png',
    description: 'Constructiestaal, witgoed, rails, balken en algemeen schrootafval.',
  },
  {
    name: 'Accu\'s & Lood',
    slug: 'accus',
    image: '/materials/batteries.png',
    description: 'Oude auto-accu\'s, tractiebatterijen en lood uit dakbedekking of leidingen.',
  }
];

export default function OudIjzerOphalenPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CollectionFormValues>({
    resolver: zodResolver(collectionSchema),
  });

  const onSubmit = async (data: CollectionFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-44 pb-32 bg-rjmk-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rjmk-gebouw2.png"
            alt="Oud IJzer Ophalen Venlo"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rjmk-dark via-rjmk-dark/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-rjmk-accent/20 border border-rjmk-accent/30 text-rjmk-accent text-sm font-bold mb-8 uppercase tracking-widest">
              <MapPin className="w-4 h-4 mr-2" /> Gratis Service in Venlo
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[1] uppercase tracking-tighter">
              Uw Metaal <br />
              <span className="text-rjmk-accent">Snel Opgehaald.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed mb-12">
              Voor zowel particulier als zakelijk de meest betrouwbare ophaalservice in de regio. Wij halen gratis uw oud ijzer en metalen op.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#afspraak" className="btn-primary text-xl px-10 py-5">
                Afspraak inplannen <ArrowRight className="w-6 h-6 ml-3" />
              </a>
              <a href="https://wa.me/31651352095" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-md transition-all shadow-xl text-xl">
                <MessageCircle className="w-7 h-7 mr-3" /> WhatsApp Foto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS STRIP */}
      <section className="bg-rjmk-blue py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-white">
            <div className="flex items-center justify-center md:justify-start py-4 md:py-0 md:px-8">
              <CheckCircle2 className="w-8 h-8 text-rjmk-accent mr-4" />
              <div className="text-left">
                <div className="font-bold text-lg uppercase tracking-wider">Gratis Ophalen</div>
                <div className="text-blue-100 text-sm">Geen voorrijkosten in Venlo</div>
              </div>
            </div>
            <div className="flex items-center justify-center py-4 md:py-0 md:px-8">
              <Clock className="w-8 h-8 text-rjmk-accent mr-4" />
              {/* Note: Clock is not imported above, I'll add it to the imports if missing, wait I see Lucide-react above. */}
              {/* Ah, Clock was missing in the list above, let me fix imports too. */}
              <div className="text-left">
                <div className="font-bold text-lg uppercase tracking-wider">Binnen 24 Uur</div>
                <div className="text-blue-100 text-sm">Snelle schakeling bij melding</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end py-4 md:py-0 md:px-8">
              <Truck className="w-8 h-8 text-rjmk-accent mr-4" />
              <div className="text-left">
                <div className="font-bold text-lg uppercase tracking-wider">Particulier & Zakelijk</div>
                <div className="text-blue-100 text-sm">Alle volumes zijn welkom</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS GRID */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-tight">Wat halen wij op?</h2>
            <p className="text-slate-600 text-lg">
              Of het nu gaat om een enkele oude wasmachine of een complete industriële stroom; wij zorgen voor vakkundige afvoer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {materials.map((mat, idx) => (
              <div key={idx} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={mat.image} 
                    alt={mat.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rjmk-dark/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{mat.name}</h3>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                    {mat.description}
                  </p>
                  
                  {/* DUAL CTA BUTTONS - Compact and clean */}
                  <div className="grid grid-cols-2 gap-3 pb-2">
                    <a 
                      href={`https://wa.me/31651352095?text=Hallo RJMK, ik heb een vraag over het ophalen van ${mat.name}.`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                    </a>
                    <a 
                      href="tel:0651352095" 
                      className="flex items-center justify-center bg-rjmk-blue hover:bg-rjmk-dark text-white py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                      <Phone className="w-4 h-4 mr-2" /> Bellen
                    </a>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Link href={`/producten/${mat.slug}`} className="inline-flex items-center text-slate-400 hover:text-rjmk-blue font-bold uppercase tracking-widest text-[10px] transition-colors">
                      Meer informatie & details over {mat.name} <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / WORK METHOD */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/rjmk-gebouw.png" alt="RJMK Ophaalservice" fill className="object-cover" />
                <div className="absolute inset-0 bg-rjmk-blue/20"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-rjmk-accent rounded-full flex flex-col items-center justify-center text-rjmk-dark font-bold text-center p-6 border-8 border-white shadow-xl rotate-12">
                <div className="text-4xl">24u</div>
                <div className="text-xs uppercase tracking-widest">Service Garantie</div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-tight">Onze Werkwijze</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Wij houden van korte lijnen en snelle actie. Zo regelen we uw ophaalafspraak in Venlo.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  { step: '01', title: 'Meld uw metaal aan', desc: 'Via het formulier, WhatsApp of telefoon. Stuur bij voorkeur een foto mee voor een snelle beoordeling.' },
                  { step: '02', title: 'Wij plannen u in', desc: 'Onze planner neemt contact op om een ophaalmoment af te spreken dat u uitkomt. Vaak al binnen 24 uur.' },
                  { step: '03', title: 'Vakkundige afvoer', desc: 'Onze chauffeur komt langs met het juiste materieel en laadt alles vakkundig in. U bent direct overal van af.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="text-5xl font-display font-bold text-rjmk-blue/10 transition-colors group-hover:text-rjmk-accent/30">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold text-rjmk-dark mb-2 uppercase tracking-wide">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <section id="afspraak" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rjmk-accent/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">Klaar om op te <span className="text-rjmk-accent">ruimen?</span></h2>
              <p className="text-blue-100 text-xl leading-relaxed">
                Heeft u oude metalen, accu's of kabels liggen? Vul het formulier in en we komen het gratis bij u ophalen. 
              </p>
              
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-6 flex items-center uppercase">
                  <Phone className="w-5 h-5 text-rjmk-accent mr-3" /> Telefonisch Contact
                </h4>
                <a href="tel:0651352095" className="text-3xl md:text-5xl font-display font-bold hover:text-rjmk-accent transition-colors">
                  06-513 520 95
                </a>
                <p className="mt-4 text-blue-100/60 font-medium">Binnen 4 kantooruren reactie gegarandeerd.</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="p-8 lg:p-12 rounded-3xl bg-white text-rjmk-dark shadow-2xl">
                {isSuccess ? (
                  <div className="text-center py-16 flex flex-col items-center">
                    <CheckCircle2 className="w-20 h-20 text-badge-green mb-8" />
                    <h3 className="text-3xl font-display font-bold mb-4 uppercase">Aanvraag Verzonden</h3>
                    <p className="text-slate-600 max-w-sm mx-auto">
                      Bedankt! We hebben uw aanmelding ontvangen en bellen u snel om de afspraak te bevestigen.
                    </p>
                    <button onClick={() => setIsSuccess(false)} className="mt-8 text-rjmk-blue font-bold uppercase tracking-widest text-sm">
                      Nog een ophaalverzoek &rarr;
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Uw Naam *</label>
                        <input
                          {...register('naam')}
                          type="text"
                          className={`w-full bg-slate-50 border-0 border-b-2 ${errors.naam ? 'border-red-500' : 'border-slate-200'} focus:border-rjmk-blue px-4 py-4 outline-none transition-all rounded-t-md`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Telefoonnummer *</label>
                        <input
                          {...register('telefoon')}
                          type="tel"
                          className={`w-full bg-slate-50 border-0 border-b-2 ${errors.telefoon ? 'border-red-500' : 'border-slate-200'} focus:border-rjmk-blue px-4 py-4 outline-none transition-all rounded-t-md`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Plaats *</label>
                        <input
                          {...register('plaats')}
                          type="text"
                          className={`w-full bg-slate-50 border-0 border-b-2 ${errors.plaats ? 'border-red-500' : 'border-slate-200'} focus:border-rjmk-blue px-4 py-4 outline-none transition-all rounded-t-md`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Soort Metaal *</label>
                        <select
                          {...register('materiaal')}
                          className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-rjmk-blue px-4 py-4 outline-none transition-all rounded-t-md appearance-none"
                        >
                          <option value="">Kies materiaal...</option>
                          <option value="ijzer">Oud IJzer</option>
                          <option value="koper">Koper / Messing</option>
                          <option value="aluminium">Aluminium</option>
                          <option value="kabels">Kabels</option>
                          <option value="accus">Accu's</option>
                          <option value="anders">Anders...</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Schatting Hoeveelheid *</label>
                      <input
                        {...register('hoeveelheid')}
                        type="text"
                        placeholder="Bijv. 1 aanhanger of 2 bigbags"
                        className={`w-full bg-slate-50 border-0 border-b-2 ${errors.hoeveelheid ? 'border-red-500' : 'border-slate-200'} focus:border-rjmk-blue px-4 py-4 outline-none transition-all rounded-t-md`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-rjmk-blue hover:bg-rjmk-dark text-white font-bold py-5 rounded-md transition-all shadow-xl flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? 'Verwerken...' : <span className="flex items-center text-xl uppercase tracking-widest">Afspraak Aanvragen <Send className="w-5 h-5 ml-4" /></span>}
                    </button>
                    
                    <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">Wij reageren doorgaans binnen 4 uur</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Fixed missing import
import { Clock } from 'lucide-react';
