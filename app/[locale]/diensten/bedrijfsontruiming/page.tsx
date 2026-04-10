import { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Hammer, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sloop & Bedrijfsontruiming Venlo | RJMK',
  description: 'Gespecialiseerd in bedrijfsontruimingen en het demonteren van zware stellages of machines. Wij nemen al het industriële metaalafval veilig uit handen in Venlo.',
};

export default function BedrijfsontruimingPage() {
  return (
    <>
      <section className="pt-44 pb-16 bg-rjmk-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-rjmk-dark/80"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <Hammer className="w-16 h-16 text-badge-green mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wide">
            Sloop & <span className="text-badge-green">Ontruiming</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Professionele bedrijfsontruimingen en demontage van industriële (staal)constructies, rechtstreeks afgevoerd en eerlijk uitbetaald.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 relative">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8 text-slate-600 leading-relaxed">
              <div className="glass-card p-8 rounded-xl border border-slate-200">
                <h2 className="text-2xl font-display font-bold text-rjmk-dark mb-4 uppercase">Zakelijke Ontruimingen in Venlo</h2>
                <p className="mb-4">
                  Heeft u te maken met een bedrijfsverplaatsing, faillissement, of gaat u simpelweg oude machines en stellingen vervangen? Het afvoeren van zware industriële materialen en metaalafval kan een enorme logistieke uitdaging zijn. Bij RJMK nemen we dit proces volledig voor u uit handen.
                </p>
                <p className="mb-4">
                  Wij zijn gespecialiseerd in het vakkundig demonteren van magazijnstellingen, oude fabriekslijnen en zware staalconstructies. Vervolgens verzorgen wij direct de afvoer, scheiding en recycling, waarbij u te allen tijde gegarandeerd bent van actuele inkoopprijzen op basis van LME koersen.
                </p>
                
                <h3 className="text-xl font-display font-bold text-rjmk-dark mt-8 mb-4 uppercase">Wat doen wij?</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-badge-green mr-3 shrink-0 mt-0.5" />
                    <span><strong>Magazijn Ontruimen:</strong> Demontage van palletstellingen en entresolvloeren.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-badge-green mr-3 shrink-0 mt-0.5" />
                    <span><strong>Machine Sloop:</strong> Veilig ontmantelen en afvoeren van oude bedrijfsinstallaties.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-badge-green mr-3 shrink-0 mt-0.5" />
                    <span><strong>Fabrieksopruiming:</strong> Compleet veegschoon opleveren van loodsen inclusief schrootafvoer.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-badge-green mr-3 shrink-0 mt-0.5" />
                    <span><strong>Kabels & Leidingwerk:</strong> Verwijderen van oude industriële bekabeling en koperbuizen.</span>
                  </li>
                </ul>

                <div className="mt-8 flex gap-4">
                  <Link href="/contact" className="btn-primary">
                    Vraag Offerte Aan <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative border border-slate-200 shadow-2xl">
                <Image
                  src="/rjmk-staal.png"
                  alt="Industriële bedrijfsontruiming en metaal demontage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-rjmk-dark/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
