import React from 'react';
import { Wrench, Compass, Flame, ShieldAlert, Cpu, Sparkles, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_GALLERY, COMPANY_INFO } from '../data/siteData.ts';

interface ServicesSectionProps {
  onNavigateTab: (tab: string) => void;
  onRequestQuote: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigateTab,
  onRequestQuote
}) => {
  const servicesList = [
    {
      title: 'Commercial Kitchen Planning & AutoCAD Design',
      icon: Compass,
      desc: 'Optimized ergonomic workflow layout designs complying with HACCP and municipal food hygiene guidelines. We minimize cross-contamination and maximize chef efficiency.'
    },
    {
      title: 'Custom Stainless Steel Fabrication',
      icon: Wrench,
      desc: 'Bespoke manufacturing of heavy-duty worktables, sink units, bain-maries, storage racks, and cooking ranges built to fit your exact kitchen dimensions.'
    },
    {
      title: 'Exhaust & Fresh Air Ventilation Systems',
      icon: Cpu,
      desc: 'High-performance commercial kitchen hoods, grease baffle filters, centrifugal exhaust blowers, and fresh air supply ducting to keep kitchens cool and smoke-free.'
    },
    {
      title: 'Gas Pipeline & Safety Manifolds',
      icon: Flame,
      desc: 'Tested LPG / PNG commercial pipeline installations with industrial gas regulators, pressure gauges, emergency shut-off valves, and individual burner NCV controls.'
    },
    {
      title: 'Preventative Maintenance & Rapid Servicing',
      icon: ShieldAlert,
      desc: 'Periodic inspection, burner nozzle cleaning, thermostat calibration, refrigeration re-gassing, and on-site emergency repairs across Mumbai and Maharashtra.'
    },
    {
      title: 'Turnkey Commercial Kitchen Setup',
      icon: Sparkles,
      desc: 'End-to-end commercial kitchen outfitting for newly launching restaurants, cloud kitchens, hotel banquets, and industrial office cafeterias.'
    }
  ];

  return (
    <div className="bg-neutral-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading matching live site */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EE1B24] block mb-2">
            WHAT WE DO !
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Kitchen Equipments Expert. The Best Quality in Town.
          </h2>
          <div className="w-16 h-1 bg-[#EE1B24] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600">
            From initial conceptual drawings to turnkey fabrication, installation, and after-sales support.
          </p>
        </div>

        {/* Services Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-sm border border-gray-200 hover:border-[#2979FF] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-blue-50 text-[#2979FF] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onRequestQuote(service.title)}
                    className="text-xs font-bold text-[#EE1B24] hover:text-red-700 flex items-center gap-1"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-gray-400 font-mono">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services & Fabrication Photo Gallery */}
        <div className="bg-white p-6 sm:p-8 rounded-sm border border-gray-200 shadow-xs mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-3 border-b border-gray-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2979FF] block">
                Fabrication Showcase
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Company Products - Stainless Steel Equipments
              </h3>
            </div>
            <button
              onClick={() => onNavigateTab('products')}
              className="text-xs font-bold text-[#EE1B24] hover:underline"
            >
              Explore Catalog &rarr;
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICES_GALLERY.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-gray-50 border border-gray-200 rounded-sm overflow-hidden flex flex-col"
              >
                <div className="h-32 p-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="bg-gray-100 p-2 text-center border-t border-gray-200">
                  <p className="text-[11px] font-semibold text-gray-800 truncate">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner matching live site: "Get your quote!" */}
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-sm p-8 sm:p-10 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="bg-[#EE1B24] text-white text-[11px] font-bold uppercase px-2.5 py-1 rounded-xs tracking-wider inline-block">
              Rapid Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Get Your Commercial Kitchen Quote Today!
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
              Send us your floor plan or equipment list. Our engineers will provide a comprehensive estimate and layout drawings within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigateTab('contact-us')}
              className="bg-[#EE1B24] hover:bg-red-700 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-sm shadow-md transition-colors uppercase tracking-wider"
            >
              Get Your Quote
            </button>
            <a
              href="tel:+919323801367"
              className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+91 93238 01367</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
