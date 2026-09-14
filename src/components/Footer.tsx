import React from 'react';
import { Phone, Mail, MapPin, Clock, ChevronRight, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/siteData.ts';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
  onSelectCategory: (catSlug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab, onSelectCategory }) => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t-4 border-[#EE1B24]">
      
      {/* Top Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="bg-white p-2 rounded-sm inline-block">
              <img
                src="/images/gayatri-logo.jpg"
                alt="Gayatri Fabrication Works"
                className="h-14 w-auto object-contain"
              />
            </div>
            <h3 className="text-white font-bold text-base uppercase tracking-tight">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Leading manufacturers and suppliers of complete commercial kitchen cooking equipments for Hotels, Restaurants, Bars, Bakeries and Industrial Canteens since 1996.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified AISI 304 Food-Grade Stainless Steel</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-neutral-800 pb-2">
              Quick Links
            </h4>
            <ul className="text-xs space-y-2">
              <li>
                <button
                  onClick={() => onNavigateTab('home')}
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#EE1B24]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('about-us')}
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#EE1B24]" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('products')}
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#EE1B24]" />
                  <span>Our Products Catalog</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('services')}
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#EE1B24]" />
                  <span>Services &amp; What We Do</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('clientele')}
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#EE1B24]" />
                  <span>Clientele</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('contact-us')}
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#EE1B24]" />
                  <span>Contact Us &amp; Quotations</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-neutral-800 pb-2">
              Equipment Range
            </h4>
            <ul className="text-xs space-y-1.5">
              {PRODUCT_CATEGORIES.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onNavigateTab('products');
                      onSelectCategory(cat.slug);
                    }}
                    className="hover:text-white truncate max-w-xs text-left block transition-colors"
                  >
                    • {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Reach Us / Factory Address */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-neutral-800 pb-2">
              Factory &amp; Works
            </h4>
            <div className="text-xs space-y-2 text-neutral-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#EE1B24] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2979FF] shrink-0" />
                <span>022 266996268 / 022 28360120</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>+91 93238 01367 / +91 98703 53537</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@gayatrifabricationworks.com</span>
              </p>
              <div className="flex items-start gap-2 pt-1 border-t border-neutral-800 text-[11px] text-neutral-400">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-neutral-200 font-medium">{COMPANY_INFO.workingHours.weekdays}</p>
                  <p className="text-neutral-400">{COMPANY_INFO.workingHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-neutral-950 py-4 border-t border-neutral-800 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>
            {COMPANY_INFO.copyright}. All Rights Reserved.
          </p>
          <p className="text-neutral-400">
            Commercial Kitchen Equipments for Hotels, Restaurants, Bar &amp; Industrial Canteens
          </p>
        </div>
      </div>

    </footer>
  );
};
