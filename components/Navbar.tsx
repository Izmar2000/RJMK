'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Menu, X, Phone, Mail, ChevronDown, ShieldCheck } from 'lucide-react';
import { locaties } from '@/lib/locaties';
import LocaleSwitcher from './LocaleSwitcher';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-1' : 'bg-white shadow-sm pt-1 pb-1'}`}>
      {/* Top Bar */}
      <div className={`hidden lg:block border-b border-slate-200 text-sm text-slate-600 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden border-none' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center py-1">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@rjmk.nl" className="flex items-center hover:text-rjmk-accent transition-colors">
              <Mail className="w-4 h-4 mr-2" /> info@rjmk.nl
            </a>
            <a href="tel:0651352095" className="flex items-center font-semibold text-rjmk-accent">
              <Phone className="w-4 h-4 mr-2" /> 06-513 520 95
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-3 border-l border-slate-300 pl-4 transition-all duration-500`}>
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 lg:px-8 pt-2 pb-1">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image src="/logo-rjmk.png" alt="RJMK" width={120} height={60} className="h-12 w-auto object-contain" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors uppercase tracking-wide">{t('home')}</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors py-2 uppercase tracking-wide">
                {t('diensten')} <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className={`absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-md shadow-xl transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="py-2">
                  <Link href="/diensten/oud-ijzer-ophalen" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-rjmk-accent transition-colors">Oud IJzer Ophalen</Link>
                  <Link href="/diensten/metalen-inkoop" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-rjmk-accent transition-colors">Metalen Inkoop</Link>
                  <Link href="/diensten/container-plaatsing" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-rjmk-accent transition-colors">Container Plaatsing</Link>
                  <Link href="/diensten/kabelverwerking" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-rjmk-accent transition-colors">Kabelverwerking</Link>
                </div>
              </div>
            </div>

            <Link href="/particulieren" className="text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors uppercase tracking-wide underline-offset-4 decoration-2 decoration-rjmk-accent hover:underline">{t('particulieren')}</Link>
            <Link href="/dagprijzen" className="text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors uppercase tracking-wide">{t('dagprijzen')}</Link>
            <Link href="/inkoop-producten" className="text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors uppercase tracking-wide">{t('inkoopProducten')}</Link>
            <Link href="/nieuws" className="text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors uppercase tracking-wide flex items-center">
              <span className="relative">
                {t('nieuws')}
                <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-badge-green rounded-full animate-pulse"></span>
              </span>
            </Link>

            {/* Region Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsRegionOpen(true)}
              onMouseLeave={() => setIsRegionOpen(false)}
            >
              <button className="flex items-center text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors py-2 uppercase tracking-wide">
                Regio <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className={`absolute top-full left-0 w-48 bg-white border border-slate-200 rounded-md shadow-xl transition-all duration-200 ${isRegionOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="py-2 max-h-64 overflow-y-auto">
                  {locaties.map((loc) => (
                    <Link key={loc.slug} href={`/locaties/${loc.slug}`} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-rjmk-accent transition-colors">
                      {loc.naam}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors uppercase tracking-wide">{t('contact')}</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block shrink-0">
            <a href="tel:0651352095" className="inline-flex items-center rounded-md bg-[#009FE3] text-white font-bold py-1.5 px-4 text-xs hover:bg-[#007bbf] transition-colors shadow-sm whitespace-nowrap tracking-wide uppercase">
              <Phone className="w-3.5 h-3.5 mr-2" /> Bel Nu
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-rjmk-dark p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 px-6 overflow-y-auto`}>
        <nav className="flex flex-col space-y-6 text-lg">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-bold text-2xl text-rjmk-dark border-b border-slate-200 pb-4">{t('home')}</Link>
          
          <div className="space-y-4 border-b border-slate-200 pb-4">
            <div className="font-display font-bold text-2xl text-rjmk-accent">{t('diensten')}</div>
            <Link href="/diensten/oud-ijzer-ophalen" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 text-slate-600 hover:text-rjmk-blue">Oud IJzer Ophalen</Link>
            <Link href="/diensten/metalen-inkoop" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 text-slate-600 hover:text-rjmk-blue">Metalen Inkoop</Link>
            <Link href="/diensten/container-plaatsing" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 text-slate-600 hover:text-rjmk-blue">Container Plaatsing</Link>
            <Link href="/diensten/kabelverwerking" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 text-slate-600 hover:text-rjmk-blue">Kabelverwerking</Link>
          </div>

          <Link href="/particulieren" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-bold text-2xl text-rjmk-dark border-b border-slate-200 pb-4">{t('particulieren')}</Link>
          <Link href="/dagprijzen" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-bold text-2xl text-rjmk-dark border-b border-slate-200 pb-4">{t('dagprijzen')}</Link>
          <Link href="/inkoop-producten" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-bold text-2xl text-rjmk-dark border-b border-slate-200 pb-4">{t('inkoopProducten')}</Link>
          <div className="border-b border-slate-200 pb-4 flex items-center">
             <Link href="/nieuws" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-bold text-2xl text-rjmk-dark">{t('nieuws')} & Kennisbank</Link>
             <span className="w-2 h-2 bg-badge-green rounded-full animate-pulse ml-3"></span>
          </div>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-bold text-2xl text-rjmk-dark border-b border-slate-200 pb-4">{t('contact')}</Link>

          <div className="glass-card p-8 rounded-xl bg-blue-50 border-blue-200">
            <h3 className="text-xl font-display font-bold text-rjmk-dark mb-4 uppercase">Direct een afspraak maken?</h3>
            <p className="text-slate-600 mb-6">
              Bel of stuur een bericht via WhatsApp voor een snelle ophaalafspraak.
            </p>
            <div className="space-y-3">
              <a href="tel:0651352095" className="btn-primary w-full justify-center text-lg py-4">
                <Phone className="w-5 h-5 mr-3" /> 06-513 520 95
              </a>
              <a href="https://wa.me/31651352095" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-md transition-colors shadow-md text-lg">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp ons
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
