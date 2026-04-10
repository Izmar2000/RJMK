import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { locaties } from '@/lib/locaties';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rjmk-blue border-t border-rjmk-blue pt-16 pb-8 relative overflow-hidden">
      <div className="grain-overlay"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src="/logo-rjmk.png" alt="RJMK" width={120} height={60} className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">
              R. Janssen Metalen & Kabels is uw betrouwbare partner voor de inkoop van ferro en non-ferro metalen, kabelverwerking en gratis container plaatsing in Venlo en omstreken.
            </p>
            <div className="flex items-center text-badge-green font-medium text-sm">
              <ShieldCheck className="w-5 h-5 mr-2" />
              Erkend & Betrouwbaar
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-display font-bold text-white uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4 text-blue-100 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-rjmk-accent shrink-0 mt-0.5" />
                <span>Groot Echtenrayseweg 42<br />5928 PA Venlo</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-rjmk-accent shrink-0" />
                <a href="tel:0651352095" className="hover:text-white transition-colors">06-513 520 95</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-rjmk-accent shrink-0" />
                <a href="mailto:info@rjmk.nl" className="hover:text-white transition-colors">info@rjmk.nl</a>
              </li>
            </ul>
          </div>

          {/* Diensten */}
          <div className="space-y-6">
            <h4 className="text-xl font-display font-bold text-white uppercase tracking-wide">Diensten</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li>
                <Link href="/diensten/oud-ijzer-ophalen" className="flex items-center hover:text-rjmk-accent transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-rjmk-accent/50" /> Oud IJzer Ophalen
                </Link>
              </li>
              <li>
                <Link href="/particulieren" className="flex items-center hover:text-rjmk-accent transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-rjmk-accent/50" /> Particulieren
                </Link>
              </li>
              <li>
                <Link href="/diensten/metalen-inkoop" className="flex items-center hover:text-rjmk-accent transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-rjmk-accent/50" /> Metalen Inkoop
                </Link>
              </li>
              <li>
                <Link href="/diensten/container-plaatsing" className="flex items-center hover:text-rjmk-accent transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-rjmk-accent/50" /> Container Plaatsing
                </Link>
              </li>
              <li>
                <Link href="/diensten/kabelverwerking" className="flex items-center hover:text-rjmk-accent transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-rjmk-accent/50" /> Kabelverwerking
                </Link>
              </li>
              <li>
                <Link href="/dagprijzen" className="flex items-center hover:text-rjmk-accent transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-rjmk-accent/50" /> Actuele Dagprijzen
                </Link>
              </li>
              <li>
                <Link href="/nieuws" className="flex items-center hover:text-rjmk-accent transition-colors text-badge-green font-medium">
                  <ChevronRight className="w-4 h-4 mr-2 text-badge-green/50" /> Kennisbank & Nieuws
                </Link>
              </li>
            </ul>
          </div>

          {/* Werkgebied */}
          <div className="space-y-6">
            <h4 className="text-xl font-display font-bold text-white uppercase tracking-wide">Werkgebied</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-blue-100 text-sm">
              {locaties.slice(0, 8).map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/locaties/${loc.slug}`} className="hover:text-rjmk-accent transition-colors">
                    {loc.naam}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-block text-sm text-rjmk-accent hover:text-white transition-colors mt-2">
              Bekijk alle locaties &rarr;
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-blue-200">
          <div>
            &copy; {currentYear} RJMK. Alle rechten voorbehouden. KVK: 86030924 | BTW: NL860309241B01
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacybeleid</Link>
            <Link href="/voorwaarden" className="hover:text-white transition-colors">Algemene Voorwaarden</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
