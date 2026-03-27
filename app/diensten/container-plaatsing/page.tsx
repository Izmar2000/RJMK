'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Factory, Send, CheckCircle2 } from 'lucide-react';

const containerSchema = z.object({
  bedrijfsnaam: z.string().min(2, 'Bedrijfsnaam is verplicht'),
  contactpersoon: z.string().min(2, 'Contactpersoon is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  telefoon: z.string().min(8, 'Telefoonnummer is verplicht'),
  postcode: z.string().min(6, 'Postcode is verplicht'),
  plaats: z.string().min(2, 'Plaats is verplicht'),
  materiaal: z.string().min(1, 'Selecteer een materiaal'),
  frequentie: z.string().min(1, 'Selecteer een frequentie'),
  opmerkingen: z.string().optional(),
});

type ContainerFormValues = z.infer<typeof containerSchema>;

export default function ContainerPlaatsingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContainerFormValues>({
    resolver: zodResolver(containerSchema),
  });

  const onSubmit = async (data: ContainerFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-rjmk-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/industrial-container/1920/1080')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <Factory className="w-16 h-16 text-rjmk-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wide">
            Container <span className="text-rjmk-accent">Plaatsing</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Gratis plaatsing van containers voor uw metaalafval. Ideaal voor bouwplaatsen, sloopwerken en industriële bedrijven in Venlo en omstreken.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-50 relative">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 space-y-8 text-slate-600 leading-relaxed">
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-display font-bold text-rjmk-dark mb-4 uppercase">Efficiënt Afvalbeheer voor Bedrijven</h2>
                <p className="mb-4">
                  Heeft uw bedrijf regelmatig te maken met metaalafval? RJMK BV biedt een efficiënte en kosteloze oplossing: onze gratis container service. Wij plaatsen een container op maat op uw locatie, zodat u uw metaalafval veilig en overzichtelijk kunt verzamelen.
                </p>
                <p className="mb-4">
                  Zodra de container vol is, geeft u ons een seintje. Wij komen de container binnen 24 uur legen of omwisselen voor een leeg exemplaar. Zo heeft u er geen omkijken meer naar en blijft uw werkterrein schoon en veilig.
                </p>
                
                <h3 className="text-xl font-display font-bold text-rjmk-dark mt-8 mb-4 uppercase">Containers op Maat</h3>
                <p className="mb-4">
                  Wij beschikken over een divers aanbod aan containers, variërend van 1m³ tot 40m³. Afhankelijk van de hoeveelheid en het soort metaalafval adviseren wij u graag over de meest geschikte container voor uw situatie.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Kleine bakken (1-3m³):</strong> Ideaal voor werkplaatsen en kleinere hoeveelheden zware metalen.</li>
                  <li><strong>Middelgrote containers (10-15m³):</strong> Geschikt voor bouw- en sloopafval, gemengd schroot.</li>
                  <li><strong>Grote volume containers (20-40m³):</strong> Voor grootschalige industriële projecten en licht, volumineus materiaal.</li>
                </ul>
              </div>
            </div>

            {/* Container Form */}
            <div className="lg:w-1/2">
              <div className="glass-card p-8 rounded-xl h-full border-slate-200">
                <h2 className="text-2xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-wide">Vraag een container aan</h2>
                
                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center h-full flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
                    <h3 className="text-xl font-bold text-rjmk-dark mb-2">Aanvraag Verzonden!</h3>
                    <p className="text-slate-600">
                      Bedankt voor uw aanvraag. Wij nemen zo spoedig mogelijk contact met u op om de plaatsing in te plannen.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Bedrijfsnaam *</label>
                        <input
                          {...register('bedrijfsnaam')}
                          type="text"
                          className={`w-full bg-slate-50 border ${errors.bedrijfsnaam ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors`}
                        />
                        {errors.bedrijfsnaam && <p className="text-red-500 text-xs mt-1">{errors.bedrijfsnaam.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Contactpersoon *</label>
                        <input
                          {...register('contactpersoon')}
                          type="text"
                          className={`w-full bg-slate-50 border ${errors.contactpersoon ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors`}
                        />
                        {errors.contactpersoon && <p className="text-red-500 text-xs mt-1">{errors.contactpersoon.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">E-mailadres *</label>
                        <input
                          {...register('email')}
                          type="email"
                          className={`w-full bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Telefoonnummer *</label>
                        <input
                          {...register('telefoon')}
                          type="tel"
                          className={`w-full bg-slate-50 border ${errors.telefoon ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors`}
                        />
                        {errors.telefoon && <p className="text-red-500 text-xs mt-1">{errors.telefoon.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Postcode *</label>
                        <input
                          {...register('postcode')}
                          type="text"
                          className={`w-full bg-slate-50 border ${errors.postcode ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors`}
                        />
                        {errors.postcode && <p className="text-red-500 text-xs mt-1">{errors.postcode.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Plaats *</label>
                        <input
                          {...register('plaats')}
                          type="text"
                          className={`w-full bg-slate-50 border ${errors.plaats ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors`}
                        />
                        {errors.plaats && <p className="text-red-500 text-xs mt-1">{errors.plaats.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Soort Materiaal *</label>
                        <select
                          {...register('materiaal')}
                          className={`w-full bg-slate-50 border ${errors.materiaal ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors`}
                        >
                          <option value="">Selecteer materiaal...</option>
                          <option value="oud-ijzer">Oud IJzer / Schroot</option>
                          <option value="koper-messing">Koper / Messing</option>
                          <option value="aluminium">Aluminium</option>
                          <option value="kabels">Kabels</option>
                          <option value="gemengd">Gemengd Metaal</option>
                        </select>
                        {errors.materiaal && <p className="text-red-500 text-xs mt-1">{errors.materiaal.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Verwachte Frequentie *</label>
                        <select
                          {...register('frequentie')}
                          className={`w-full bg-slate-50 border ${errors.frequentie ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors`}
                        >
                          <option value="">Selecteer frequentie...</option>
                          <option value="eenmalig">Eenmalig (Project)</option>
                          <option value="wekelijks">Wekelijks</option>
                          <option value="maandelijks">Maandelijks</option>
                          <option value="op-afroep">Op afroep</option>
                        </select>
                        {errors.frequentie && <p className="text-red-500 text-xs mt-1">{errors.frequentie.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-2">Opmerkingen (Optioneel)</label>
                      <textarea
                        {...register('opmerkingen')}
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors resize-none"
                        placeholder="Bijzonderheden m.b.t. bereikbaarheid of plaatsing..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed !bg-rjmk-blue hover:!bg-rjmk-accent"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Verzenden...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Aanvraag Versturen <Send className="w-5 h-5 ml-2" />
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
