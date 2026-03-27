import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, Truck, Recycle, Euro, MapPin, CheckCircle2, Factory, ShieldCheck } from 'lucide-react';
import PrijzenWidget from '@/components/PrijzenWidget';
import { locaties } from '@/lib/locaties';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/industrial-metal/1920/1080"
            alt="Industriële metaalverwerking en schroot"
            fill
            className="object-cover object-center"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rjmk-blue via-rjmk-blue/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-rjmk-blue via-transparent to-transparent"></div>
          <div className="grain-overlay"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-rjmk-accent text-sm font-medium mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-rjmk-accent mr-2 animate-pulse"></span>
              Dé Metaalrecycling Specialist in Venlo & Omstreken
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
              UW OUD IJZER IS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rjmk-accent to-rjmk-blue">GELD WAARD.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed">
              RJMK BV is uw betrouwbare partner voor de inkoop van ferro en non-ferro metalen, kabelverwerking en gratis container plaatsing. Wij bieden de scherpste dagprijzen, direct uitbetaald.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0651352095" className="btn-primary text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-3" /> Bel 06-513 520 95
              </a>
              <Link href="/dagprijzen" className="btn-outline text-lg px-8 py-4 bg-rjmk-dark/50 backdrop-blur-md">
                Bekijk Actuele Prijzen <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-text-secondary font-medium">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-badge-green mr-2" /> Directe Uitbetaling
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-badge-green mr-2" /> Eigen Ophaaldienst
              </div>
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-badge-green mr-2" /> MRF Gecertificeerd
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-rjmk-dark mb-4 uppercase tracking-wide">Onze Diensten</h2>
            <div className="w-24 h-1 bg-rjmk-accent mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">
              Van het ophalen van oud ijzer tot grootschalige container plaatsing voor bedrijven. RJMK BV biedt een totaaloplossing voor al uw metaalafval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Link href="/diensten/oud-ijzer-ophalen" className="glass-card p-8 rounded-xl group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rjmk-accent/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              <Truck className="w-12 h-12 text-rjmk-accent mb-6 relative z-10" />
              <h3 className="text-xl font-display font-bold text-rjmk-dark mb-3 uppercase relative z-10">Oud IJzer Ophalen</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow relative z-10">
                Wij halen uw oud ijzer en metalen snel en vakkundig op in Venlo en de wijde omtrek. Beschikbaar voor zowel particulieren als bedrijven.
              </p>
              <div className="flex items-center text-rjmk-accent font-medium text-sm mt-auto relative z-10">
                Lees meer <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/diensten/metalen-inkoop" className="glass-card p-8 rounded-xl group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rjmk-gold/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              <Euro className="w-12 h-12 text-rjmk-gold mb-6 relative z-10" />
              <h3 className="text-xl font-display font-bold text-rjmk-dark mb-3 uppercase relative z-10">Metalen Inkoop</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow relative z-10">
                Inkoop van alle soorten non-ferro metalen zoals koper, messing, aluminium, lood en zink tegen de beste dagprijzen.
              </p>
              <div className="flex items-center text-rjmk-gold font-medium text-sm mt-auto relative z-10">
                Lees meer <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/diensten/container-plaatsing" className="glass-card p-8 rounded-xl group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rjmk-blue/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              <Factory className="w-12 h-12 text-rjmk-blue mb-6 relative z-10" />
              <h3 className="text-xl font-display font-bold text-rjmk-dark mb-3 uppercase relative z-10">Container Plaatsing</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow relative z-10">
                Gratis plaatsing van containers voor uw metaalafval. Ideaal voor bouwplaatsen, sloopwerken en industriële bedrijven.
              </p>
              <div className="flex items-center text-rjmk-blue font-medium text-sm mt-auto relative z-10">
                Lees meer <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/diensten/kabelverwerking" className="glass-card p-8 rounded-xl group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-badge-green/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              <Recycle className="w-12 h-12 text-badge-green mb-6 relative z-10" />
              <h3 className="text-xl font-display font-bold text-rjmk-dark mb-3 uppercase relative z-10">Kabelverwerking</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow relative z-10">
                Met onze eigen professionele kabelshredder verwerken wij koper- en aluminiumkabels efficiënt en milieuvriendelijk.
              </p>
              <div className="flex items-center text-badge-green font-medium text-sm mt-auto relative z-10">
                Lees meer <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
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
                Transparante <span className="text-rjmk-accent">Dagprijzen</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Bij RJMK BV geloven we in eerlijk zaken doen. Daarom zijn onze inkoopprijzen direct gekoppeld aan de actuele koersen van de London Metal Exchange (LME). 
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Zo weet u zeker dat u altijd de beste en meest eerlijke prijs krijgt voor uw oud ijzer, koper, aluminium en andere metalen. Grote partij? Neem contact op voor een speciale projectprijs.
              </p>
              <div className="pt-4">
                <Link href="/inkoop-producten" className="btn-primary">
                  Bekijk Alle Producten
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <PrijzenWidget />
            </div>
          </div>
        </div>
      </section>

      {/* WERKGEBIED SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-rjmk-dark mb-4 uppercase tracking-wide">Ons Werkgebied</h2>
            <div className="w-24 h-1 bg-rjmk-accent mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">
              Vanuit onze vestiging in Venlo bedienen wij de gehele regio. Klik op uw locatie voor meer informatie over onze diensten bij u in de buurt.
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
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/metal-texture/1920/1080')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-display font-bold text-white">25+</div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">Jaar Ervaring</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-display font-bold text-white">10k+</div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">Tevreden Klanten</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-display font-bold text-white">50k</div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">Ton Gerecycled per jaar</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-display font-bold text-white">100%</div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">MRF Gecertificeerd</div>
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
                  src="https://picsum.photos/seed/truck-scrap/800/600"
                  alt="RJMK Vrachtwagen en materieel"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-rjmk-blue/10"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center space-x-4">
                  <ShieldCheck className="w-12 h-12 text-badge-green" />
                  <div>
                    <div className="text-rjmk-dark font-bold font-display uppercase">Erkend & Gecertificeerd</div>
                    <div className="text-slate-600 text-sm">Metaal Recycling Federatie</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-rjmk-dark uppercase tracking-wide">
                Over <span className="text-rjmk-accent">RJMK BV</span>
              </h2>
              <div className="w-24 h-1 bg-rjmk-accent mb-6"></div>
              <p className="text-slate-600 text-lg leading-relaxed">
                R. Janssen Metalen & Kabels (RJMK BV) is een begrip in Venlo en omstreken als het gaat om metaalrecycling. Met ons moderne wagenpark, waaronder Volvo FM en DAF vrachtwagens, en geavanceerd materieel zoals onze Fuchs hydraulische kraan, kunnen wij elke klus aan.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Wij beschikken over een eigen professionele kabelshredder op onze locatie aan de Groot Echtenrayseweg, waardoor we kabels direct en efficiënt kunnen verwerken. Duurzaamheid, eerlijke prijzen en snelle service staan bij ons voorop.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center text-rjmk-dark font-medium">
                  <CheckCircle2 className="w-5 h-5 text-rjmk-accent mr-3" /> Eigen modern wagenpark
                </li>
                <li className="flex items-center text-rjmk-dark font-medium">
                  <CheckCircle2 className="w-5 h-5 text-rjmk-accent mr-3" /> Geavanceerde kabelshredder
                </li>
                <li className="flex items-center text-rjmk-dark font-medium">
                  <CheckCircle2 className="w-5 h-5 text-rjmk-accent mr-3" /> Directe en eerlijke afhandeling
                </li>
              </ul>
              <div className="pt-6">
                <Link href="/contact" className="btn-outline">
                  Neem Contact Op
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
            src="https://picsum.photos/seed/industrial-container/1920/1080"
            alt="Metaal container"
            fill
            className="object-cover object-center opacity-20 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rjmk-blue via-rjmk-blue/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wide">
              Gratis Container <br />
              <span className="text-rjmk-accent">Voor Uw Bedrijf?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Heeft u regelmatig metaalafval? Wij plaatsen gratis een container op maat. Vol? Eén telefoontje en wij wisselen hem binnen 24 uur om.
            </p>
            <Link href="/diensten/container-plaatsing" className="btn-primary text-lg px-8 py-4">
              Vraag Direct Een Container Aan <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
