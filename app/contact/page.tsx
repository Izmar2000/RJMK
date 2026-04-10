'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const contactSchema = z.object({
  naam: z.string().min(2, 'Naam is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  telefoon: z.string().min(8, 'Telefoonnummer is verplicht'),
  bericht: z.string().min(10, 'Bericht moet minimaal 10 tekens bevatten'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
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
      <section className="pt-44 pb-16 bg-rjmk-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-rjmk-blue/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wide">
            Neem <span className="text-rjmk-accent">Contact</span> Op
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Heeft u vragen over onze diensten, dagprijzen of wilt u een container aanvragen? Wij staan voor u klaar.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50 relative">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Info & Map */}
            <div className="lg:w-1/2 space-y-8">
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-wide">Bedrijfsgegevens</h2>
                <ul className="space-y-6 text-slate-600">
                  <li className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 text-rjmk-blue shrink-0 mt-1" />
                    <div>
                      <strong className="block text-rjmk-dark mb-1">Bezoekadres</strong>
                      Groot Echtenrayseweg 42<br />
                      5928 PA Venlo
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 text-rjmk-blue shrink-0 mt-1" />
                    <div>
                      <strong className="block text-rjmk-dark mb-1">Telefoon</strong>
                      <a href="tel:0651352095" className="hover:text-rjmk-accent transition-colors">06-513 520 95</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 text-rjmk-blue shrink-0 mt-1" />
                    <div>
                      <strong className="block text-rjmk-dark mb-1">E-mail</strong>
                      <a href="mailto:info@rjmk.nl" className="hover:text-rjmk-accent transition-colors">info@rjmk.nl</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-6 h-6 mr-4 text-rjmk-blue shrink-0 mt-1" />
                    <div>
                      <strong className="block text-rjmk-dark mb-1">Openingstijden</strong>
                      Maandag t/m Vrijdag: 08:00 - 17:00<br />
                      Zaterdag: 08:00 - 12:00<br />
                      Zondag: Gesloten
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Embed */}
              <div className="glass-card rounded-xl overflow-hidden h-64 border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.483167191391!2d6.17091131575458!3d51.37040097961239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c745b3b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sGroot%20Echtenrayseweg%2042%2C%205928%20PA%20Venlo!5e0!3m2!1snl!2snl!4v1620000000000!5m2!1snl!2snl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Google Maps Locatie RJMK"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="glass-card p-8 rounded-xl h-full">
                <h2 className="text-2xl font-display font-bold text-rjmk-dark mb-6 uppercase tracking-wide">Stuur een bericht</h2>
                
                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center h-full flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
                    <h3 className="text-xl font-bold text-rjmk-dark mb-2">Bericht Verzonden!</h3>
                    <p className="text-slate-600">
                      Bedankt voor uw bericht. Wij nemen zo spoedig mogelijk contact met u op.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="naam" className="block text-sm font-medium text-slate-600 mb-2">Naam *</label>
                      <input
                        {...register('naam')}
                        type="text"
                        id="naam"
                        className={`w-full bg-slate-50 border ${errors.naam ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors`}
                        placeholder="Uw naam"
                      />
                      {errors.naam && <p className="text-red-500 text-xs mt-1">{errors.naam.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">E-mailadres *</label>
                        <input
                          {...register('email')}
                          type="email"
                          id="email"
                          className={`w-full bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors`}
                          placeholder="uw@email.nl"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="telefoon" className="block text-sm font-medium text-slate-600 mb-2">Telefoonnummer *</label>
                        <input
                          {...register('telefoon')}
                          type="tel"
                          id="telefoon"
                          className={`w-full bg-slate-50 border ${errors.telefoon ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors`}
                          placeholder="06 12345678"
                        />
                        {errors.telefoon && <p className="text-red-500 text-xs mt-1">{errors.telefoon.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="bericht" className="block text-sm font-medium text-slate-600 mb-2">Bericht *</label>
                      <textarea
                        {...register('bericht')}
                        id="bericht"
                        rows={5}
                        className={`w-full bg-slate-50 border ${errors.bericht ? 'border-red-500' : 'border-slate-200'} rounded-md px-4 py-3 text-rjmk-dark focus:outline-none focus:border-rjmk-blue transition-colors resize-none`}
                        placeholder="Hoe kunnen wij u helpen?"
                      ></textarea>
                      {errors.bericht && <p className="text-red-500 text-xs mt-1">{errors.bericht.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
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
                          Verstuur Bericht <Send className="w-5 h-5 ml-2" />
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
