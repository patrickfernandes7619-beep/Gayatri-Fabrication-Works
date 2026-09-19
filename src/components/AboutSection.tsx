import React from 'react';
import { Award, CheckCircle, Factory, Shield, Users, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData.ts';

interface AboutSectionProps {
  onNavigateTab: (tab: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateTab }) => {
  return (
    <div className="bg-neutral-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EE1B24] block mb-2">
            Company Overview
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            About Gayatri Fabrication Works
          </h2>
          <div className="w-16 h-1 bg-[#EE1B24] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600">
            Pioneers in manufacturing commercial kitchen &amp; cooking equipments for hotels, restaurants, bars, and industrial canteens since 1996.
          </p>
        </div>

        {/* Story & Factory Image (Untitled-1.jpg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white p-6 sm:p-10 rounded-sm border border-gray-200 shadow-xs mb-14">
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl font-bold text-gray-900 leading-snug">
              Founded in 1996 with an unwavering commitment to engineering excellence.
            </h3>
            <p>
              <strong className="text-gray-900">GAYATRI FABRICATION WORKS</strong> was established in 1996 by 
              <strong className="text-gray-900"> Mr. Pankaj Panchal</strong> and <strong className="text-gray-900">Mr. Vipul Panchal</strong>. 
              Over nearly three decades, we have emerged as one of Mumbai&apos;s most trusted manufacturers and suppliers 
              of a complete range of commercial kitchen cooking equipments.
            </p>
            <p>
              Our diverse ranges of kitchen equipments are widely utilized across premier Hotels, Multi-cuisine Restaurants, 
              Banquets, Bars, Clubs, Bakeries, and heavy-duty Industrial Canteens across India.
            </p>
            <p>
              The company has a state-of-the-art manufacturing unit situated in Andheri East, Mumbai, which enables us 
              to produce the latest and most innovative kitchen equipments conforming to rigorous hygiene, fire-safety, 
              and energy-efficiency standards. Our sound and robust infrastructure is equipped with precision machinery 
              to fabricate custom stainless steel solutions tailored to every client&apos;s exact floor plan.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigateTab('contact-us')}
                className="inline-flex items-center gap-2 bg-[#EE1B24] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-sm transition-colors"
              >
                <span>Visit Our Factory / Meet Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Authentic Workshop Image Untitled-1.jpg */}
          <div className="relative group">
            <div className="rounded-sm overflow-hidden border-2 border-gray-200 shadow-md bg-gray-100">
              <img
                src="./images/Untitled-1.jpg"
                alt="Gayatri Fabrication Works Workshop & Production Facility"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div className="absolute bottom-3 left-3 right-3 bg-neutral-900/85 backdrop-blur-xs text-white p-3 rounded-xs text-xs">
              <p className="font-bold text-amber-400">Gala No 10, Tarun Plastic Industrial Estate</p>
              <p className="text-gray-300 text-[11px]">Mogra Road, Andheri East, Mumbai - 400069</p>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-xs">
            <div className="w-12 h-12 bg-red-100 rounded-sm flex items-center justify-center text-[#EE1B24] mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-2">A Brand Built on Quality</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              We exclusively use certified AISI 304 food-grade stainless steel with heavy gauge thicknesses, guaranteeing corrosion resistance, structural rigidity, and longevity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-xs">
            <div className="w-12 h-12 bg-blue-100 rounded-sm flex items-center justify-center text-[#2979FF] mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-2">Hygiene &amp; Safety First</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every unit is crafted with seamless tig welding, coved corners, and perfectly sound-deadened worktops to prevent bacterial contamination and facilitate rapid sanitization.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-xs">
            <div className="w-12 h-12 bg-amber-100 rounded-sm flex items-center justify-center text-amber-600 mb-4">
              <Factory className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-2">Modern Infrastructure</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Equipped with hydraulic shears, press brakes, argon tig welders, and finishing stations to deliver laser-precise tolerances on complex custom jobs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-xs">
            <div className="w-12 h-12 bg-emerald-100 rounded-sm flex items-center justify-center text-emerald-600 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-2">Dependable After-Sales</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              From on-site kitchen commissioning and burner nozzle calibration to emergency maintenance, our technical staff delivers dependable support.
            </p>
          </div>
        </div>

        {/* Leadership Callout */}
        <div className="bg-neutral-900 text-white p-8 rounded-sm shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#2979FF] font-bold block mb-1">
              Founders &amp; Management
            </span>
            <h3 className="text-xl font-bold text-white">Direct Guidance from Industry Veterans</h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
              Connect directly with our partners Mr. Pankaj Panchal (+91 93238 01367) and Mr. Vipul Panchal (+91 98703 53537) for specialized commercial kitchen turnkey project discussions.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => onNavigateTab('products')}
              className="bg-[#EE1B24] hover:bg-red-700 text-white text-xs font-bold px-4 py-3 rounded-sm transition-colors uppercase tracking-wider"
            >
              Browse Products
            </button>
            <button
              onClick={() => onNavigateTab('clientele')}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-3 rounded-sm transition-colors uppercase tracking-wider"
            >
              View Clientele
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
