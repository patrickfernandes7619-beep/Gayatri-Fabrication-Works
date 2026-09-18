import React from 'react';
import { Star, ShieldCheck, Flame, Wrench, Sparkles, ArrowRight, PhoneCall, Award } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/siteData.ts';

interface HeroSectionProps {
  onNavigateTab: (tab: string) => void;
  onSelectCategory: (categorySlug: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateTab,
  onSelectCategory
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-100 py-12 md:py-16">
      
      {/* Decorative SVG curve divider at bottom like Elementor shape divider */}
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        {/* Main Title matching live site exactly: "gAYATRI FABRICATION WORKS" */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222222] tracking-wide uppercase font-sans">
          gAYATRI FABRICATION WORKS
        </h2>

        {/* 10/10 Stars Rating */}
        <div className="flex items-center justify-center gap-1 my-4" title="10/10 Rating">
          {Array.from({ length: 10 }).map((_, i) => (
            <Star 
              key={i} 
              className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 text-amber-400 drop-shadow-xs" 
            />
          ))}
          <span className="ml-2.5 text-sm sm:text-base font-bold text-gray-800 bg-amber-100 px-2 py-0.5 rounded-sm border border-amber-300">
            10/10
          </span>
        </div>

        {/* Primary intro text exactly as written on live website */}
        <div className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed space-y-4 font-normal mt-6 text-center">
          <p>
            Manufactures and supplies complete range of kitchen cooking equipments. 
            The diverse ranges of kitchen equipments are widely used in Hotels, Restaurants and Industrial canteens.
          </p>
          <p>
            The Company has state-of-the-art manufacturing unit, which helps to produce the latest and 
            innovative kitchen equipments. The Company has sound and robust infrastructure, which is well equipped 
            with modern technology and standard machines in order to manufacture premium range of kitchen/cooking equipments.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={() => onNavigateTab('products')}
            className="bg-[#EE1B24] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-sm shadow-md transition-all duration-200 flex items-center gap-2"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigateTab('contact-us')}
            className="bg-[#2979FF] hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-sm shadow-md transition-all duration-200 flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Request Fast Quote</span>
          </button>
        </div>

        {/* Key Manufacturing Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200">
          <div className="bg-white p-4 rounded-sm border border-gray-200 shadow-xs flex flex-col items-center text-center">
            <Award className="w-7 h-7 text-[#EE1B24] mb-2" />
            <h4 className="font-bold text-gray-900 text-sm">Founded in 1996</h4>
            <p className="text-xs text-gray-600 mt-0.5">30+ Years of Quality Craftsmanship</p>
          </div>

          <div className="bg-white p-4 rounded-sm border border-gray-200 shadow-xs flex flex-col items-center text-center">
            <ShieldCheck className="w-7 h-7 text-[#2979FF] mb-2" />
            <h4 className="font-bold text-gray-900 text-sm">Heavy Gauge S.S.</h4>
            <p className="text-xs text-gray-600 mt-0.5">Food Grade Stainless Steel 304/316</p>
          </div>

          <div className="bg-white p-4 rounded-sm border border-gray-200 shadow-xs flex flex-col items-center text-center">
            <Wrench className="w-7 h-7 text-[#EE1B24] mb-2" />
            <h4 className="font-bold text-gray-900 text-sm">Custom Fabrication</h4>
            <p className="text-xs text-gray-600 mt-0.5">AutoCAD Layouts &amp; Tailored Sizes</p>
          </div>

          <div className="bg-white p-4 rounded-sm border border-gray-200 shadow-xs flex flex-col items-center text-center">
            <Flame className="w-7 h-7 text-[#2979FF] mb-2" />
            <h4 className="font-bold text-gray-900 text-sm">Commercial Kitchens</h4>
            <p className="text-xs text-gray-600 mt-0.5">Hotels, Restaurants, Bars &amp; Canteens</p>
          </div>
        </div>
      </div>

      {/* Featured Categories Carousel / Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Featured Equipment Categories</h3>
            <p className="text-xs text-gray-500">Discover our standard &amp; custom fabricated stainless steel ranges</p>
          </div>
          <button
            onClick={() => onNavigateTab('products')}
            className="text-sm font-semibold text-[#EE1B24] hover:text-[#2979FF] flex items-center gap-1"
          >
            View Full Catalog &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {PRODUCT_CATEGORIES.slice(0, 10).map((cat) => {
            const previewImg = cat.items[0]?.image || './images/gayatri-logo.jpg';
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug)}
                className="group bg-white rounded-sm border border-gray-200 hover:border-[#EE1B24] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden flex flex-col"
              >
                <div className="w-full h-36 bg-gray-50 p-2 flex items-center justify-center overflow-hidden border-b border-gray-100">
                  <img
                    src={previewImg}
                    alt={cat.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#EE1B24] transition-colors leading-tight">
                    {cat.title}
                  </h4>
                  <span className="text-[11px] text-gray-500 mt-1 block">
                    {cat.items.length} {cat.items.length === 1 ? 'Product' : 'Products'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
