import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ClienteleSection } from './components/ClienteleSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null);
  const [quoteSubject, setQuoteSubject] = useState<string>('');

  // Sync with window hash for realistic browser history & sharing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash) {
        if (hash.startsWith('category-')) {
          setCurrentTab('products');
          setSelectedCategorySlug(hash.replace('category-', ''));
        } else if (['home', 'about-us', 'products', 'services', 'clientele', 'contact-us'].includes(hash)) {
          setCurrentTab(hash);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (catSlug: string | null) => {
    setSelectedCategorySlug(catSlug);
    setSelectedProductSlug(null);
    setCurrentTab('products');
    if (catSlug) {
      window.location.hash = `category-${catSlug}`;
    } else {
      window.location.hash = 'products';
    }
  };

  const handleProductSelect = (prodSlug: string | null) => {
    setSelectedProductSlug(prodSlug);
    setCurrentTab('products');
  };

  const handleRequestQuote = (subjectName: string) => {
    setQuoteSubject(subjectName);
    setCurrentTab('contact-us');
    window.location.hash = 'contact-us';
    // Scroll to form
    setTimeout(() => {
      const el = document.getElementById('contact-form-container');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-red-500 selection:text-white">
      {/* Header with Navigation & Dropdowns */}
      <Header
        currentTab={currentTab}
        setCurrentTab={handleTabChange}
        onSelectCategory={handleCategorySelect}
        onSelectProduct={handleProductSelect}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <HeroSection
              onNavigateTab={handleTabChange}
              onSelectCategory={handleCategorySelect}
            />
            <div id="contact-form-container">
              <ContactSection initialSubject={quoteSubject} />
            </div>
          </>
        )}

        {currentTab === 'about-us' && (
          <>
            <AboutSection onNavigateTab={handleTabChange} />
            <div id="contact-form-container">
              <ContactSection initialSubject={quoteSubject} />
            </div>
          </>
        )}

        {currentTab === 'products' && (
          <>
            <ProductsSection
              selectedCategorySlug={selectedCategorySlug}
              selectedProductSlug={selectedProductSlug}
              onSelectCategory={handleCategorySelect}
              onSelectProduct={handleProductSelect}
              onRequestQuote={handleRequestQuote}
            />
            <div id="contact-form-container">
              <ContactSection initialSubject={quoteSubject} />
            </div>
          </>
        )}

        {currentTab === 'services' && (
          <>
            <ServicesSection
              onNavigateTab={handleTabChange}
              onRequestQuote={handleRequestQuote}
            />
            <div id="contact-form-container">
              <ContactSection initialSubject={quoteSubject} />
            </div>
          </>
        )}

        {currentTab === 'clientele' && (
          <>
            <ClienteleSection onNavigateTab={handleTabChange} />
            <div id="contact-form-container">
              <ContactSection initialSubject={quoteSubject} />
            </div>
          </>
        )}

        {currentTab === 'contact-us' && (
          <div id="contact-form-container">
            <ContactSection initialSubject={quoteSubject} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateTab={handleTabChange}
        onSelectCategory={handleCategorySelect}
      />

      {/* Floating WhatsApp and Scroll-To-Top Button */}
      <ScrollToTop />
    </div>
  );
}
