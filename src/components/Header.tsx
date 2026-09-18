import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/siteData.ts';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onSelectCategory?: (categorySlug: string) => void;
  onSelectProduct?: (productSlug: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onSelectCategory,
  onSelectProduct
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to display company name and apply sticky elevation
  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolling past the top section
      setIsScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on tab change
  const handleNavClick = (tab: string) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (catSlug: string) => {
    setCurrentTab('products');
    if (onSelectCategory) {
      onSelectCategory(catSlug);
    }
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  const handleProductClick = (prodSlug: string) => {
    setCurrentTab('products');
    if (onSelectProduct) {
      onSelectProduct(prodSlug);
    }
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white shadow-xs">
        {/* Top Quick Contact Strip */}
        <div className="bg-neutral-900 text-neutral-300 text-xs py-1.5 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                Andheri East, Mumbai - 400069
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                022 266996268 / 022 28360120
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-red-500" />
                info@gayatrifabricationworks.com
              </span>
              <span className="text-amber-400 font-semibold tracking-wide">
                Est. 1996 • 10/10 Quality Rating
              </span>
            </div>
          </div>
        </div>

        {/* Main Branding Section */}
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          {/* Mobile View (< md): Red & White Logo UP, Center Typography, Red & Blue Logo DOWN */}
          <div className="flex md:hidden flex-col items-center justify-center text-center gap-3 py-2">
            
            {/* 1. Red & White Logo UP (Gayatri circular logo) */}
            <div 
              className="cursor-pointer flex items-center justify-center"
              onClick={() => handleNavClick('home')}
              title="Gayatri Fabrication Works Logo"
            >
              <img 
                src="./images/gayatri-logo.jpg" 
                alt="Gayatri Fabrication Works Red and White Logo" 
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-xs"
              />
            </div>

            {/* 2. Center Typography */}
            <div className="px-2 max-w-sm">
              <h1 className="text-base sm:text-lg font-black text-black tracking-tight leading-tight uppercase font-sans">
                COMMERCIAL KITCHEN EQUIPMENTS
              </h1>
              <p className="text-[11px] sm:text-xs font-semibold text-[#8a8181] tracking-wider uppercase mt-1">
                FOR HOTELS, RESTAURANTS, BAR &amp; INDUSTRIAL CANTEENS
              </p>
            </div>

            {/* 3. Red & Blue Logo DOWN (GF logo symbol) */}
            <div 
              className="cursor-pointer flex items-center justify-center pt-0.5"
              onClick={() => handleNavClick('home')}
              title="GF Logo Symbol"
            >
              <img 
                src="./images/logo-2.jpg" 
                alt="GF Red and Blue Logo" 
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-xs"
              />
            </div>

          </div>

          {/* Desktop and Tablet Layout (md:flex): Gayatri logo left, Text center, GF logo right */}
          <div className="hidden md:flex flex-row items-center justify-between gap-3">
            {/* Logo 1 (Gayatri Logo) */}
            <div 
              className="cursor-pointer flex items-center gap-3"
              onClick={() => handleNavClick('home')}
            >
              <img 
                src="./images/gayatri-logo.jpg" 
                alt="Gayatri Fabrication Works Logo" 
                className="h-16 md:h-20 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* Central Title and Tagline */}
            <div className="text-center px-2">
              <h1 className="text-lg sm:text-2xl md:text-[25px] font-black text-black tracking-tight leading-tight uppercase font-sans">
                COMMERCIAL KITCHEN EQUIPMENTS
              </h1>
              <p className="text-xs sm:text-sm md:text-sm font-semibold text-[#8a8181] tracking-wider uppercase mt-0.5">
                FOR HOTELS, RESTAURANTS, BAR &amp; INDUSTRIAL CANTEENS
              </p>
            </div>

            {/* Logo 2 (GF Logo) */}
            <div 
              className="cursor-pointer flex items-center justify-end"
              onClick={() => handleNavClick('home')}
            >
              <img 
                src="./images/logo-2.jpg" 
                alt="GF Logo Symbol" 
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar (#EE1B24): Sticky on mobile, static/normal on desktop */}
      <nav className={`bg-[#EE1B24] text-white sticky md:static top-0 z-50 border-t border-red-700 transition-shadow duration-200 ${
        isScrolled ? 'shadow-xl md:shadow-none' : 'shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between md:justify-center relative min-h-12 md:min-h-14">

            {/* Centered Navigation Links for Desktop & Tablets (Normal static navbar, no extra scroll shift) */}
            <div className="hidden md:flex items-center justify-center space-x-1 md:space-x-1.5 lg:space-x-3 font-medium text-[15px] lg:text-[17px] text-center">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-3.5 lg:px-5 py-3 md:py-3.5 transition-colors duration-150 rounded-xs ${
                  currentTab === 'home' ? 'bg-[#2979FF] font-semibold text-white' : 'hover:bg-[#2979FF]'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavClick('about-us')}
                className={`px-3.5 lg:px-5 py-3 md:py-3.5 transition-colors duration-150 rounded-xs ${
                  currentTab === 'about-us' ? 'bg-[#2979FF] font-semibold text-white' : 'hover:bg-[#2979FF]'
                }`}
              >
                About us
              </button>

              {/* Our Products with Centered Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('products')}
                  className={`px-3.5 lg:px-5 py-3 md:py-3.5 flex items-center gap-1.5 transition-colors duration-150 rounded-xs ${
                    currentTab === 'products' ? 'bg-[#2979FF] font-semibold text-white' : 'hover:bg-[#2979FF]'
                  }`}
                >
                  Our Products
                  <ChevronDown className="w-4 h-4 opacity-80" />
                </button>

                {/* Mega Dropdown Menu - Centered below button */}
                {productsDropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[700px] lg:w-[840px] bg-white text-gray-800 shadow-2xl rounded-b-md border-t-2 border-[#2979FF] p-6 grid grid-cols-3 gap-6 z-50 text-left max-h-[80vh] overflow-y-auto">
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <div key={cat.id} className="space-y-1.5">
                        <button
                          onClick={() => handleCategoryClick(cat.slug)}
                          className="font-bold text-sm text-[#EE1B24] hover:text-[#2979FF] block text-left transition-colors"
                        >
                          {cat.title}
                        </button>
                        <ul className="text-xs space-y-1 text-gray-600 pl-1 border-l-2 border-gray-100">
                          {cat.items.slice(0, 4).map((item) => (
                            <li key={item.slug}>
                              <button
                                onClick={() => handleProductClick(item.slug)}
                                className="hover:text-blue-600 truncate max-w-[220px] block text-left"
                              >
                                {item.title}
                              </button>
                            </li>
                          ))}
                          {cat.items.length > 4 && (
                            <li>
                              <button
                                onClick={() => handleCategoryClick(cat.slug)}
                                className="text-blue-600 font-semibold hover:underline"
                              >
                                + {cat.items.length - 4} more
                              </button>
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('services')}
                className={`px-3.5 lg:px-5 py-3 md:py-3.5 transition-colors duration-150 rounded-xs ${
                  currentTab === 'services' ? 'bg-[#2979FF] font-semibold text-white' : 'hover:bg-[#2979FF]'
                }`}
              >
                Services
              </button>

              <button
                onClick={() => handleNavClick('clientele')}
                className={`px-3.5 lg:px-5 py-3 md:py-3.5 transition-colors duration-150 rounded-xs ${
                  currentTab === 'clientele' ? 'bg-[#2979FF] font-semibold text-white' : 'hover:bg-[#2979FF]'
                }`}
              >
                Clientele
              </button>

              <button
                onClick={() => handleNavClick('contact-us')}
                className={`px-3.5 lg:px-5 py-3 md:py-3.5 transition-colors duration-150 rounded-xs ${
                  currentTab === 'contact-us' ? 'bg-[#2979FF] font-semibold text-white' : 'hover:bg-[#2979FF]'
                }`}
              >
                Contact us
              </button>
            </div>

            {/* Mobile Menu Bar - Only visible on small screens (< md) */}
            <div className="flex md:hidden w-full items-center py-2.5 min-h-12 relative">
              {isScrolled ? (
                <>
                  {/* Company name displayed in navigation bar when scrolling */}
                  <div 
                    onClick={() => handleNavClick('home')}
                    className="cursor-pointer transition-all duration-200 mr-auto pr-2"
                    title="Gayatri Fabrication Works"
                  >
                    <span className="font-black text-xs sm:text-sm tracking-tight text-white uppercase font-sans drop-shadow-xs truncate max-w-[200px] sm:max-w-xs block">
                      Gayatri Fabrication Works
                    </span>
                  </div>

                  {/* Menu toggle button on right when company name is visible */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-1.5 text-white hover:bg-red-700 rounded-sm focus:outline-none flex items-center gap-1.5 shrink-0 ml-auto"
                    aria-label="Toggle navigation menu"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider">Menu</span>
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </>
              ) : (
                /* Centered Menu toggle when at the top (not scrolled) */
                <div className="w-full flex items-center justify-center">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="px-4 py-1.5 text-white hover:bg-red-700 active:bg-red-800 rounded-sm focus:outline-none flex items-center justify-center gap-2 font-medium tracking-wide transition-colors"
                    aria-label="Toggle navigation menu"
                  >
                    <span className="text-sm font-bold uppercase tracking-wider">Menu</span>
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer - Only visible on mobile (< md) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#EE1B24] border-t border-red-600 px-4 pt-2 pb-6 space-y-1 text-sm font-medium max-h-[80vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2 rounded-sm ${currentTab === 'home' ? 'bg-[#2979FF]' : 'hover:bg-red-700'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about-us')}
              className={`w-full text-left px-3 py-2 rounded-sm ${currentTab === 'about-us' ? 'bg-[#2979FF]' : 'hover:bg-red-700'}`}
            >
              About us
            </button>

            {/* Mobile Products Accordion */}
            <div>
              <button
                onClick={() => setExpandedCategory(expandedCategory === 'all' ? null : 'all')}
                className="w-full text-left px-3 py-2 rounded-sm flex items-center justify-between hover:bg-red-700"
              >
                <span>Our Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${expandedCategory === 'all' ? 'rotate-180' : ''}`} />
              </button>

              {expandedCategory === 'all' && (
                <div className="pl-4 pr-2 py-2 space-y-2 bg-red-700/60 rounded-sm text-xs">
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left font-bold text-amber-300 py-1"
                  >
                    View All Products Catalog &rarr;
                  </button>
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="border-t border-red-600/40 pt-1">
                      <button
                        onClick={() => handleCategoryClick(cat.slug)}
                        className="w-full text-left font-semibold text-white hover:text-amber-200 py-1"
                      >
                        {cat.title}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('services')}
              className={`w-full text-left px-3 py-2 rounded-sm ${currentTab === 'services' ? 'bg-[#2979FF]' : 'hover:bg-red-700'}`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('clientele')}
              className={`w-full text-left px-3 py-2 rounded-sm ${currentTab === 'clientele' ? 'bg-[#2979FF]' : 'hover:bg-red-700'}`}
            >
              Clientele
            </button>
            <button
              onClick={() => handleNavClick('contact-us')}
              className={`w-full text-left px-3 py-2 rounded-sm ${currentTab === 'contact-us' ? 'bg-[#2979FF]' : 'hover:bg-red-700'}`}
            >
              Contact us
            </button>

            <div className="pt-3 border-t border-red-700 flex flex-col gap-2">
              <a 
                href="tel:+919323801367"
                className="bg-[#2979FF] text-white py-2 text-center rounded-sm font-semibold"
              >
                Call: +91 93238 01367
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
