import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageSquare, Phone } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* WhatsApp Quick Chat Button */}
      <a
        href="https://wa.me/919323801367?text=Hello%20Gayatri%20Fabrication%20Works%2C%20I%20am%20inquiring%20about%20commercial%20kitchen%20equipments"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex items-center justify-center group"
        title="Chat on WhatsApp (+91 93238 01367)"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
          WhatsApp Us
        </span>
      </a>

      {/* Live Site's Scroll To Top Button (ssttbutton) */}
      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          id="ssttbutton"
          className="bg-[#2979FF] hover:bg-[#EE1B24] text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
};
