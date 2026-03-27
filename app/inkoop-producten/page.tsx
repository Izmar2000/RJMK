import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inkoop Koper, Aluminium, RVS & Oud IJzer | RJMK BV',
  description: 'Overzicht van alle metalen die RJMK BV inkoopt: rood koper, messing, brons, aluminium, RVS, lood, zink, kabels, accu\'s en oud ijzer.',
};

const producten = [
  { naam: 'Rood Koper', img: 'https://picsum.photos/seed/copper/400/300', desc: 'Zuiver rood koper van leidingen, platen of draad.' },
  { naam: 'Messing', img: 'https://picsum.photos/seed/brass/400/300', desc: 'Geel koper, vaak gebruikt in kranen en koppelingen.' },
  { naam: 'Brons', img: 'https://picsum.photos/seed/bronze/400/300', desc: 'Legering van koper en tin, zwaar en slijtvast.' },
  { naam: 'Aluminium', img: 'https://picsum.photos/seed/aluminum/400/300', desc: 'Profielen, platen, velgen of gegoten aluminium.' },
  { naam: 'RVS', img: 'https://picsum.photos/seed/stainless-steel/400/300', desc: 'Roestvast staal (o.a. 304 en 316) uit keukens of industrie.' },
  { naam: 'Lood', img: 'https://picsum.photos/seed/lead/400/300', desc: 'Daklood, bladlood of oude loden pijpen.' },
  { naam: 'Zink', img: 'https://picsum.photos/seed/zinc/400/300', desc: 'Oude dakgoten, regenpijpen of zinken platen.' },
  { naam: 'Kabels', img: 'https://picsum.photos/seed/cables/400/300', desc: 'Koper- en aluminiumkabels, met of zonder isolatie.' },
  { naam: 'Accu\'s', img: 'https://picsum.photos/seed/batteries/400/300', desc: 'Loodaccu\'s uit auto\'s, vrachtwagens of heftrucks.' },
  { naam: 'Elektromotoren', img: 'https://picsum.photos/seed/motors/400/300', desc: 'Oude motoren, dynamo\'s en startmotoren.' },
  { naam: 'Oud IJzer', img: 'https://picsum.photos/seed/scrap-iron/400/300', desc: 'Balkijzer, knipijzer, gruis en gemengd schroot.' },
  { naam: 'Raffineer', img: 'https://picsum.photos/seed/raffineer/400/300', desc: 'Gemengde metalen met ijzer-aanhechting.' },
];

export default function InkoopProductenPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-rjmk-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/metal-products/1920/1080')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wide">
            Wat Wij <span className="text-rjmk-accent">Inkopen</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            RJMK BV is gespecialiseerd in de inkoop en verwerking van vrijwel alle ferro en non-ferro metalen. Bekijk ons overzicht.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 bg-slate-50 relative">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {producten.map((product, idx) => (
              <div key={idx} className="glass-card rounded-xl overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.naam}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rjmk-dark to-transparent opacity-80"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-display font-bold text-white uppercase tracking-wide">
                    {product.naam}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm mb-4">
                    {product.desc}
                  </p>
                  <Link href="/dagprijzen" className="text-rjmk-blue text-sm font-medium flex items-center hover:text-rjmk-accent transition-colors">
                    Bekijk dagprijs <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
