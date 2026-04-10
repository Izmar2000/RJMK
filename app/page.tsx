import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, Truck, Recycle, Euro, MapPin, CheckCircle2, Factory, ShieldCheck, AlertCircle } from 'lucide-react';
import { Info } from 'lucide-react';
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
            src="/rjmk-gebouw.png"
            alt="RJMK gebouw Venlo"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rjmk-blue/90 via-rjmk-blue/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-rjmk-blue/60 via-transparent to-transparent"></div>
          <div className="grain-overlay"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold mb-6 backdrop-blur-md uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-rjmk-accent mr-2 animate-pulse"></span>
              Specialist in Venlo & Omstreken
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-6 tracking-tighter uppercase">
              Oud IJzer <br />
              <span className="text-rjmk-accent">Service Venlo</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed font-medium">
              RJMK is uw betrouwbare partner voor metalen inkoop, kabelverwerking en gratis container plaatsing. Wij bieden eerlijke markttrends, volledige transparantie en een vakkundige afhandeling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0651352095" className="btn-primary text-xl px-10 py-5">
                <Phone className="w-6 h-6 mr-3" /> Direct Bellen
              </a>
              <Link href="/dagprijzen" className="inline-flex items-center justify-center text-xl px-10 py-5 rounded-md border-2 border-white text-white font-bold transition-all duration-300 hover:bg-white hover:text-rjmk-blue backdrop-blur-md hover:-translate-y-1">
                Bekijk Markttrends <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-blue-100 font-medium">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-badge-green mr-2" /> Snelle Afwikkeling
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-badge-green mr-2" /> Gratis Ophaaldienst
              </div>
              <div className="flex items-center text-badge-green font-medium text-sm">
                <ShieldCheck className="w-5 h-5 mr-2" />
                Erkend & Betrouwbaar
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
              Van het ophalen van oud ijzer tot grootschalige container plaatsing voor bedrijven. RJMK biedt een totaaloplossing voor al uw metaalafval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Link href="/diensten/oud-ijzer-ophalen" className="glass-card p-8 rounded-xl group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rjmk-accent/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              <Truck className="w-12 h-12 text-rjmk-accent mb-6 relative z-10" />
              <h3 className="text-xl font-display font-bold text-rjmk-dark mb-3 uppercase relative z-10">Oud IJzer Ophalen</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow relative z-10">
                Wij halen uw oud ijzer en metalen snel en vakkundig op in Venlo en de wijde omtrek. Uitsluitend beschikbaar voor zowel particulier als zakelijk.
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
                Bij RJMK geloven we in eerlijk zaken doen. Daarom zijn onze inkoopprijzen direct gekoppeld aan de actuele koersen van de London Metal Exchange (LME). 
              </p>
              <p className="text-slate-600 lg:text-lg leading-relaxed">
                Zo weet u zeker dat u altijd de beste en meest eerlijke prijs krijgt voor uw oud ijzer, koper, aluminium en andere metalen. Wij hanteren een snelle financiële afwikkeling. Grote partij? Neem contact op voor een speciale projectprijs.
              </p>
              <div className="pt-4">
                <Link href="/inkoop-producten" className="btn-primary">
                  Bekijk Alle Producten
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="text-sm text-slate-600 flex items-center mb-4">
                <span>Marktomstandigheden:</span> <span className="text-rjmk-dark font-mono font-bold ml-2">Actueel</span>
              </div>
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
        <div className="absolute inset-0 bg-rjmk-blue/95"></div>
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
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">Betrouwbaar</div>
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
                  src="/rjmk-gebouw2.png"
                  alt="RJMK terrein"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-rjmk-blue/10"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center space-x-4">
                  <ShieldCheck className="w-12 h-12 text-badge-green" />
                  <div>
                    <div className="text-rjmk-dark font-bold font-display uppercase">Erkend & Betrouwbaar</div>
                    <div className="text-slate-600 text-sm">Metaalrecycling Specialist</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-rjmk-dark uppercase tracking-wide">
                Welkom bij <span className="text-rjmk-accent">RJMK</span>
              </h2>
              <div className="w-24 h-1 bg-rjmk-accent mb-6"></div>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Wij zijn een gespecialiseerd metaalrecyclingsbedrijf in de regio Venlo dat al jarenlang een vaste waarde is als het gaat om de in- en verkoop van oud ijzer en diverse metalen. Wij halen op bij zowel particulier als zakelijk. Om de inzameling van uw metaalafval zo efficiënt mogelijk te maken, bieden wij de mogelijkheid om gratis containers of kleinere bakken op locatie te plaatsen.
                </p>
                <p>
                  Dankzij ons eigen wagenpark en transportservice zijn we uiterst flexibel en garanderen wij korte wachttijden voor het ophalen van uw materialen. Zoekt u een partner met jarenlange ervaring die snel en betrouwbaar schakelt? Wij staan graag voor u klaar.
                </p>
                <p>
                  Wij begrijpen dat u mogelijk al samenwerkt met een vaste partij. Onze insteek is dan ook niet om u actief weg te halen bij onze collega-bedrijven. Echter, mocht u momenteel niet volledig tevreden zijn of in de toekomst behoefte hebben aan een betrouwbaar alternatief, dan maken wij graag nader kennis met u.
                </p>
                <p>
                  Bent u benieuwd naar de mogelijkheden of wilt u vrijblijvend meer informatie? Neem dan gerust contact met ons op.
                </p>
              </div>
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
            src="/rjmk-gebouw.png"
            alt="RJMK container plaatsing"
            fill
            className="object-cover object-center opacity-30"
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
