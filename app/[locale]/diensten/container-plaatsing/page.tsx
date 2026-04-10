'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Factory, Send, CheckCircle2, Truck, Calendar, Clock, Phone, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const containerSchema = z.object({
  bedrijfsnaam: z.string().min(2, 'Bedrijfsnaam is verplicht'),
  contactpersoon: z.string().min(2, 'Contactpersoon is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  telefoon: z.string().min(8, 'Telefoonnummer is verplicht'),
  postcode: z.string().min(6, 'Postcode is verplicht'),
  plaats: z.string().min(2, 'Plaats is verplicht'),
  materiaal: z.string().min(1, 'Selecteer een materiaal'),
  frequentie: z.string().min(1, 'Selecteer een frequentie'),
  containerMaat: z.string().min(1, 'Selecteer een containermaat'),
  opmerkingen: z.string().optional(),
});

type ContainerFormValues = z.infer<typeof containerSchema>;

const containerTypes = [
  {
    id: '20m3',
    name: '20m³ Container',
    description: 'Ideaal voor zwaarder metaalafval zoals ijzer, staal en gemengd schroot.',
    dimensions: 'L: 6.0m | B: 2.3m | H: 1.5m',
    image: '/rjmk-gebouw.png', // Using existing building image as fallback for now
    color: '#009FE3',
  },
  {
    id: '30m3',
    name: '30m³ Container',
    description: 'De standaardmaat voor middelgrote industriële projecten en restmetalen.',
    dimensions: 'L: 6.5m | B: 2.3m | H: 2.0m',
    image: '/rjmk-gebouw.png',
    color: '#005596',
  },
  {
    id: '40m3',
    name: '40m³ Container',
    description: 'Voor de grootste volumes en lichte, volumineuze metaalstromen.',
    dimensions: 'L: 7.0m | B: 2.3m | H: 2.4m',
    image: '/rjmk-gebouw.png',
    color: '#0F172A',
  },
  {
    id: 'palletbox',
    name: 'Palletbox / Vloeistofdicht',
    description: 'Perfect voor spanen, kleine restanten of materialen die vloeistofdicht opgeborgen moeten worden.',
    dimensions: 'L: 1.2m | B: 1.0m | H: 0.8m',
    image: '/rjmk-accu.jpg',
    color: '#EAB308',
  }
];

export default function ContainerPlaatsingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContainerFormValues>({
    resolver: zodResolver(containerSchema),
  });

  const onSubmit = async (data: ContainerFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const selectContainer = (id: string) => {
    setSelectedSize(id);
    setValue('containerMaat', id);
    // Scroll to form
    const formElement = document.getElementById('aanvraag-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-44 pb-32 bg-rjmk-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rjmk-gebouw.png"
            alt="RJMK Container Venlo"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rjmk-blue/40 to-rjmk-dark"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-rjmk-accent/20 border border-rjmk-accent/30 text-rjmk-accent text-sm font-bold mb-8 uppercase tracking-widest">
              <MapPin className="w-4 h-4 mr-2" /> Venlo & Regio
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[1] uppercase tracking-tighter">
              Gratis <span className="text-rjmk-accent">Container</span> <br />
              Plaatsing.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed mb-12">
              Voor elke hoeveelheid metaalafval de juiste oplossing. Gratis geplaatst bij uw bedrijf in de regio Venlo. Binnen 24 uur geregeld.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#types" className="btn-primary text-xl px-10 py-5">
                Onze Containers <ArrowRight className="w-6 h-6 ml-3" />
              </a>
              <a href="https://wa.me/31651352095" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-md transition-all shadow-xl text-xl">
                <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTAINER TYPES GRID */}
      <section id="types" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-tight">Onze Container Maten</h2>
            <p className="text-slate-600 text-lg">
              Voor elke metaalstroom en elk volume hebben wij de passende container. Van compacte palletboxen tot grote 40m³ containers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {containerTypes.map((type) => (
              <div 
                key={type.id} 
                className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 border shadow-sm hover:shadow-2xl hover:-translate-y-2 ${selectedSize === type.id ? 'border-rjmk-accent ring-2 ring-rjmk-accent/20 bg-white' : 'border-slate-200 bg-white'}`}
              >
                <div className="relative h-64 bg-slate-100 flex items-center justify-center p-8">
                  {/* Stylized Container SVG representation */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       {/* Container visualization based on size */}
                       <div className={`rounded-md border-b-4 border-slate-900 transition-all duration-500`} style={{ 
                         backgroundColor: type.color,
                         width: type.id === 'palletbox' ? '60px' : type.id === '20m3' ? '140px' : type.id === '30m3' ? '160px' : '180px',
                         height: type.id === 'palletbox' ? '50px' : type.id === '20m3' ? '40px' : type.id === '30m3' ? '60px' : '80px',
                       }}>
                         <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl opacity-80 uppercase tracking-tighter">
                           {type.id.replace('m3', ' m³')}
                         </div>
                       </div>
                       <div className="w-full h-1 bg-slate-300 mt-2 rounded-full max-w-[200px]"></div>
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-rjmk-dark text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                    Beschikbaar
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-display font-bold text-rjmk-dark mb-3 uppercase">{type.name}</h3>
                  <div className="text-rjmk-accent text-xs font-bold mb-4 flex items-center uppercase tracking-wider">
                    <Factory className="w-3 h-3 mr-2" /> {type.dimensions}
                  </div>
                  <p className="text-slate-600 text-sm mb-10 flex-grow leading-relaxed">
                    {type.description}
                  </p>
                  <button 
                    onClick={() => selectContainer(type.id)}
                    className={`w-full py-4 text-sm font-bold uppercase tracking-widest rounded-md transition-all ${
                      selectedSize === type.id 
                        ? 'bg-rjmk-accent text-white' 
                        : 'bg-rjmk-blue text-white hover:bg-rjmk-dark'
                    }`}
                  >
                    Selecteer Deze Maat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / STEPS */}
      <section className="py-32 bg-rjmk-dark text-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tight">Hoe wij werken</h2>
            <p className="text-blue-100 text-lg">
              Maximale service met minimale moeite voor uw bedrijf. Zo regelen wij de container plaatsing in Venlo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-rjmk-accent/0 via-rjmk-accent/50 to-rjmk-accent/0 z-0"></div>
            
            <div className="relative z-10 text-center flex flex-col items-center group">
              <div className="w-24 h-24 rounded-2xl bg-rjmk-accent/10 border border-rjmk-accent/30 flex items-center justify-center mb-8 transition-transform group-hover:-translate-y-2 group-hover:bg-rjmk-accent/20">
                <Calendar className="w-10 h-10 text-rjmk-accent" />
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-rjmk-accent text-rjmk-dark flex items-center justify-center font-bold text-lg">1</div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 uppercase">Directe Aanvraag</h3>
              <p className="text-blue-100/70 leading-relaxed">
                Vul het formulier in of stuur een foto via WhatsApp. Wij adviseren u direct over de juiste container en frequentie.
              </p>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center group">
              <div className="w-24 h-24 rounded-2xl bg-rjmk-accent/10 border border-rjmk-accent/30 flex items-center justify-center mb-8 transition-transform group-hover:-translate-y-2 group-hover:bg-rjmk-accent/20">
                <Truck className="w-10 h-10 text-rjmk-accent" />
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-rjmk-accent text-rjmk-dark flex items-center justify-center font-bold text-lg">2</div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 uppercase">Gratis Plaatsing</h3>
              <p className="text-blue-100/70 leading-relaxed">
                Wij plaatsen de gewenste container binnen 24 uur op uw locatie in Venlo. Geen plaatsingskosten, geen huur bij regelmatige afvoer.
              </p>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center group">
              <div className="w-24 h-24 rounded-2xl bg-rjmk-accent/10 border border-rjmk-accent/30 flex items-center justify-center mb-8 transition-transform group-hover:-translate-y-2 group-hover:bg-rjmk-accent/20">
                <Clock className="w-10 h-10 text-rjmk-accent" />
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-rjmk-accent text-rjmk-dark flex items-center justify-center font-bold text-lg">3</div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 uppercase">Snel Omwisselen</h3>
              <p className="text-blue-100/70 leading-relaxed">
                Is de container vol? Eén telefoontje of appje en wij komen hem binnen 24 uur legen of omwisselen. Altijd continuïteit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <section id="aanvraag-form" className="py-32 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Info Column */}
            <div className="lg:w-1/3 space-y-10 sticky top-32">
              <div>
                <h2 className="text-4xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-tight">Klaar voor <br /> een <span className="text-rjmk-accent">container</span>?</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Vul de gegevens in voor een vrijblijvende aanvraag. Wij nemen binnen 4 kantooruren contact met u op.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center p-6 rounded-xl border border-slate-100 bg-slate-50">
                  <div className="w-12 h-12 rounded-full bg-rjmk-blue/10 flex items-center justify-center mr-6 text-rjmk-blue">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-rjmk-dark uppercase tracking-wide">Gratis Plaatsing & Huur</div>
                </div>
                <div className="flex items-center p-6 rounded-xl border border-slate-100 bg-slate-50">
                  <div className="w-12 h-12 rounded-full bg-rjmk-blue/10 flex items-center justify-center mr-6 text-rjmk-blue">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-rjmk-dark uppercase tracking-wide">Snelle Wisseling (24u)</div>
                </div>
                <div className="flex items-center p-6 rounded-xl border border-slate-100 bg-slate-50">
                  <div className="w-12 h-12 rounded-full bg-rjmk-blue/10 flex items-center justify-center mr-6 text-rjmk-blue">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-rjmk-dark uppercase tracking-wide">Eerlijke Markttrends</div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-rjmk-blue text-white">
                <h4 className="text-xl font-display font-bold mb-4 uppercase">Liever direct contact?</h4>
                <a href="tel:0651352095" className="flex items-center text-3xl font-display font-bold mb-2 hover:text-rjmk-accent transition-colors">
                  <Phone className="w-8 h-8 mr-4" /> 06-513 520 95
                </a>
                <p className="text-blue-100 text-sm">Bereikbaar van ma t/m za.</p>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:w-2/3">
              <div className="glass-card p-10 lg:p-16 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rjmk-accent/5 rounded-bl-full -mr-20 -mt-20"></div>
                
                {isSuccess ? (
                  <div className="text-center py-20 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-badge-green/20 flex items-center justify-center mb-8 animate-bounce">
                      <CheckCircle2 className="w-12 h-12 text-badge-green" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-rjmk-dark mb-4 uppercase">Aanvraag Verzonden!</h3>
                    <p className="text-slate-600 text-lg max-w-md mx-auto">
                      Bedankt voor uw interesse. We hebben uw aanvraag voor een <span className="font-bold text-rjmk-blue uppercase tracking-wide">{selectedSize}</span> ontvangen en nemen snel contact op.
                    </p>
                    <button onClick={() => setIsSuccess(false)} className="mt-10 text-rjmk-blue font-bold uppercase tracking-widest text-sm hover:text-rjmk-accent">
                      Nieuwe aanvraag &rarr;
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Bedrijfsnaam *</label>
                        <input
                          {...register('bedrijfsnaam')}
                          type="text"
                          placeholder="Uw bedrijfsnaam"
                          className={`w-full bg-slate-50 border-0 border-b-2 ${errors.bedrijfsnaam ? 'border-red-500' : 'border-slate-200'} focus:border-rjmk-blue focus:bg-white px-4 py-4 text-rjmk-dark transition-all outline-none rounded-t-md`}
                        />
                        {errors.bedrijfsnaam && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.bedrijfsnaam.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Contactpersoon *</label>
                        <input
                          {...register('contactpersoon')}
                          type="text"
                          placeholder="Naam contactpersoon"
                          className={`w-full bg-slate-50 border-0 border-b-2 ${errors.contactpersoon ? 'border-red-500' : 'border-slate-200'} focus:border-rjmk-blue focus:bg-white px-4 py-4 text-rjmk-dark transition-all outline-none rounded-t-md`}
                        />
                        {errors.contactpersoon && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.contactpersoon.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">E-mailadres *</label>
                        <input
                          {...register('email')}
                          type="email"
                          placeholder="email@voorbeeld.nl"
                          className={`w-full bg-slate-50 border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:border-rjmk-blue focus:bg-white px-4 py-4 text-rjmk-dark transition-all outline-none rounded-t-md`}
                        />
                        {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Telefoon *</label>
                        <input
                          {...register('telefoon')}
                          type="tel"
                          placeholder="06-12345678"
                          className={`w-full bg-slate-50 border-0 border-b-2 ${errors.telefoon ? 'border-red-500' : 'border-slate-200'} focus:border-rjmk-blue focus:bg-white px-4 py-4 text-rjmk-dark transition-all outline-none rounded-t-md`}
                        />
                        {errors.telefoon && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.telefoon.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Gekozen Maat *</label>
                        <select
                          {...register('containerMaat')}
                          className={`w-full bg-slate-50 border-0 border-b-2 ${errors.containerMaat ? 'border-red-500' : 'border-slate-200'} focus:border-rjmk-blue focus:bg-white px-4 py-4 text-rjmk-dark transition-all outline-none rounded-t-md appearance-none`}
                        >
                          <option value="">Kies container maat...</option>
                          <option value="20m3">20 m³ Container</option>
                          <option value="30m3">30 m³ Container</option>
                          <option value="40m3">40 m³ Container</option>
                          <option value="palletbox">Palletbox / Vloeistofdicht</option>
                        </select>
                        {errors.containerMaat && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.containerMaat.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Frequentie *</label>
                        <select
                          {...register('frequentie')}
                          className={`w-full bg-slate-50 border-0 border-b-2 ${errors.frequentie ? 'border-red-500' : 'border-slate-200'} focus:border-rjmk-blue focus:bg-white px-4 py-4 text-rjmk-dark transition-all outline-none rounded-t-md appearance-none`}
                        >
                          <option value="">Kies frequentie...</option>
                          <option value="eenmalig">Eenmalig (Project)</option>
                          <option value="wekelijks">Wekelijks</option>
                          <option value="maandelijks">Maandelijks</option>
                          <option value="op-afroep">Op afroep</option>
                        </select>
                        {errors.frequentie && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.frequentie.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Opmerkingen</label>
                      <textarea
                        {...register('opmerkingen')}
                        rows={3}
                        placeholder="Specifieke wensen of info over de locatie..."
                        className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-rjmk-blue focus:bg-white px-4 py-4 text-rjmk-dark transition-all outline-none rounded-t-md resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-rjmk-blue hover:bg-rjmk-dark text-white font-bold py-5 rounded-md transition-all shadow-xl flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Verwerken...
                        </span>
                      ) : (
                        <span className="flex items-center text-xl uppercase tracking-widest">
                          Aanvraag Bevestigen <Send className="w-5 h-5 ml-4 transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
                        </span>
                      )}
                    </button>
                    
                    <div className="text-center pt-4">
                      <p className="text-xs text-slate-400 font-medium">Of stuur direct een WhatsApp naar <span className="text-rjmk-blue font-bold">06-513 520 95</span></p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FINAL CTA LOGO STRIP */}
      <section className="py-20 bg-slate-900 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center">
          <Image src="/logo-rjmk.png" alt="RJMK" width={180} height={90} className="opacity-40 grayscale brightness-200 mb-8" />
          <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px]">Uw betrouwbare partner in Venlo</p>
        </div>
      </section>
    </div>
  );
}
