'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown, ShieldCheck } from 'lucide-react';
import { locaties } from '@/lib/locaties';

export default function Navbar() {
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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-4'}`}>
      {/* Top Bar */}
      <div className={`hidden lg:flex justify-between items-center px-8 pb-2 border-b border-slate-200 text-sm text-slate-600 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden pb-0 border-none' : 'h-auto opacity-100'}`}>
        <div className="flex items-center space-x-6">
          <a href="mailto:info@rjmk.nl" className="flex items-center hover:text-rjmk-accent transition-colors">
            <Mail className="w-4 h-4 mr-2" /> info@rjmk.nl
          </a>
          <a href="tel:0651352095" className="flex items-center hover:text-rjmk-accent transition-colors">
            <Phone className="w-4 h-4 mr-2" /> 06-513 520 95
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-badge-green font-medium">
            <ShieldCheck className="w-4 h-4 mr-1" /> MRF Gecertificeerd
          </span>
          <div className="flex items-center space-x-2 border-l border-slate-300 pl-4">
            <span className="cursor-pointer text-rjmk-dark font-medium">NL</span>
            <span className="cursor-pointer hover:text-rjmk-accent transition-colors">DE</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-3xl font-display font-bold text-rjmk-blue tracking-wider">
              RJMK <span className="text-rjmk-accent">BV</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors uppercase tracking-wide">Home</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors py-2 uppercase tracking-wide">
                Diensten <ChevronDown className="w-4 h-4 ml-1" />
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

            <Link href="/dagprijzen" className="text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors uppercase tracking-wide">Dagprijzen</Link>
            <Link href="/inkoop-producten" className="text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors uppercase tracking-wide">Inkoop Producten</Link>

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

            <Link href="/contact" className="text-sm font-bold text-rjmk-dark hover:text-rjmk-accent transition-colors uppercase tracking-wide">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="tel:0651352095" className="btn-primary py-2 px-5 text-sm">
              <Phone className="w-4 h-4 mr-2" /> Bel Nu
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
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-bold text-2xl text-rjmk-dark border-b border-slate-200 pb-4">Home</Link>
          
          <div className="space-y-4 border-b border-slate-200 pb-4">
            <div className="font-display font-bold text-2xl text-rjmk-accent">Diensten</div>
            <Link href="/diensten/oud-ijzer-ophalen" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 text-slate-600 hover:text-rjmk-blue">Oud IJzer Ophalen</Link>
            <Link href="/diensten/metalen-inkoop" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 text-slate-600 hover:text-rjmk-blue">Metalen Inkoop</Link>
            <Link href="/diensten/container-plaatsing" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 text-slate-600 hover:text-rjmk-blue">Container Plaatsing</Link>
            <Link href="/diensten/kabelverwerking" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 text-slate-600 hover:text-rjmk-blue">Kabelverwerking</Link>
          </div>

          <Link href="/dagprijzen" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-bold text-2xl text-rjmk-dark border-b border-slate-200 pb-4">Dagprijzen</Link>
          <Link href="/inkoop-producten" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-bold text-2xl text-rjmk-dark border-b border-slate-200 pb-4">Inkoop Producten</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="font-display font-bold text-2xl text-rjmk-dark border-b border-slate-200 pb-4">Contact</Link>

          <div className="pt-6">
            <a href="tel:0651352095" className="btn-primary w-full justify-center text-lg py-4">
              <Phone className="w-5 h-5 mr-2" /> 06-513 520 95
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
