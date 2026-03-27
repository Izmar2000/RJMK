import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Recycle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kabelverwerking & Kabelshredder Venlo | RJMK BV',
  description: 'RJMK BV beschikt over een eigen kabelshredder voor het efficiënt en milieuvriendelijk verwerken van koper- en aluminiumkabels. Beste prijzen in Venlo.',
};

export default function KabelverwerkingPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-rjmk-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/cable-shredder/1920/1080')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <Recycle className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wide">
            Kabel<span className="text-green-400">verwerking</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Efficiënte, milieuvriendelijke verwerking van koper- en aluminiumkabels met onze eigen geavanceerde kabelshredder.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-50 relative">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8 text-slate-600 leading-relaxed">
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-display font-bold text-rjmk-dark mb-4 uppercase">Eigen Kabelshredder in Venlo</h2>
                <p className="mb-4">
                  Oude kabels bevatten waardevolle metalen zoals koper en aluminium, maar het scheiden van het metaal en de kunststof isolatie is een specialistisch proces. Bij RJMK BV beschikken wij over een eigen, geavanceerde kabelshredder op onze locatie in Venlo.
                </p>
                <p className="mb-4">
                  Hierdoor hoeven wij kabels niet door te verkopen aan derden, maar verwerken wij deze zelf. Dit betekent dat we efficiënter werken, minder transportkosten hebben en u daardoor een <strong>hogere inkoopprijs</strong> kunnen bieden voor uw oude kabels.
                </p>
                
                <h3 className="text-xl font-display font-bold text-rjmk-dark mt-8 mb-4 uppercase">Welke kabels verwerken wij?</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span><strong>Koperkabels:</strong> Installatiedraad, grondkabels, datakabels, stroomkabels.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span><strong>Aluminiumkabels:</strong> Grondkabels, hoogspanningskabels.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span><strong>Loodkabels:</strong> Oude kabels met een loden mantel.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span><strong>Pelkabels:</strong> Dikke kabels die geschikt zijn om machinaal te pellen.</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link href="/dagprijzen" className="btn-primary !bg-green-600 hover:!bg-green-700">
                    Bekijk Kabel Prijzen <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative border border-slate-200 shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/copper-wire/800/600"
                  alt="Koperdraad en kabelverwerking"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-rjmk-blue/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
