import React from 'react';
import { Award } from 'lucide-react';
import { CLIENT_LOGOS } from '../data/siteData.ts';
import { handleImageError } from '../utils/imageHelper.ts';

interface ClienteleSectionProps {
  onNavigateTab: (tab: string) => void;
}

export const ClienteleSection: React.FC<ClienteleSectionProps> = ({ onNavigateTab }) => {
  return (
    <div className="bg-neutral-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header matching live site */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EE1B24] block mb-2">
            browse our list
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Clients
          </h2>
          <div className="w-16 h-1 bg-[#EE1B24] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600">
            Trusted by top hotels, renowned restaurants, luxury lounges, prestigious hospitals, and multinational industrial cafeterias across India.
          </p>
        </div>

        {/* Client Logos Grid without text titles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.id}
              className="group bg-white p-5 rounded-sm border border-gray-200 hover:border-[#2979FF] hover:shadow-md transition-all duration-200 flex items-center justify-center min-h-[120px] sm:min-h-[130px]"
            >
              <div className="w-full h-20 sm:h-24 flex items-center justify-center overflow-hidden">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="max-h-full max-w-full object-contain grayscale-0 sm:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-14 bg-white border border-gray-200 p-8 rounded-sm text-center shadow-xs">
          <Award className="w-10 h-10 text-[#EE1B24] mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-900">
            Join Our Growing Network of Satisfied Kitchen Owners
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-2 mb-5">
            Whether you need a single heavy-duty burner range or a complete 5-star hotel kitchen setup, we bring 30 years of industrial expertise to your project.
          </p>
          <button
            onClick={() => onNavigateTab('contact-us')}
            className="bg-[#EE1B24] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-colors shadow-xs"
          >
            Partner With Us
          </button>
        </div>

      </div>
    </div>
  );
};
