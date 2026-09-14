import React, { useState } from 'react';
import { X, Check, Phone, MessageSquare, Mail, Share2 } from 'lucide-react';
import { ProductItem } from '../types.ts';
import { COMPANY_INFO } from '../data/siteData.ts';

interface ProductModalProps {
  product: ProductItem | null;
  categoryTitle?: string;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  categoryTitle,
  onClose,
  onRequestQuote
}) => {
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Gayatri Fabrication Works, I am interested in getting a price quote and technical details for: ${product.title}`
  );
  const whatsappUrl = `https://wa.me/919323801367?text=${whatsappMessage}`;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden border border-gray-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-neutral-50">
          <div>
            <span className="text-xs uppercase font-bold text-[#EE1B24] tracking-wider">
              {categoryTitle || 'Commercial Kitchen Equipment'}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mt-0.5">
              {product.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Image Container with high fidelity presentation */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 flex items-center justify-center min-h-[260px]">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-72 max-w-full object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Details & Specs */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Product Description &amp; Specifications
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mt-2">
                  {product.description || 'High-durability commercial grade stainless steel equipment fabricated with top-notch craftsmanship to withstand heavy continuous use in professional kitchens.'}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-3 text-xs space-y-1.5 text-gray-600">
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="font-semibold text-gray-700">Material Grade:</span>
                  <span>AISI 304 / Heavy Gauge Stainless Steel</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="font-semibold text-gray-700">Application:</span>
                  <span>Hotels, Restaurants, Bars &amp; Industrial Canteens</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="font-semibold text-gray-700">Customization:</span>
                  <span>Available in Standard &amp; Custom Built Sizes</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-gray-700">Manufacturer:</span>
                  <span>Gayatri Fabrication Works (Mumbai, India)</span>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-2 space-y-2">
                <div className="flex gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <button
                    onClick={() => {
                      onClose();
                      onRequestQuote(product.title);
                    }}
                    className="flex-1 bg-[#EE1B24] hover:bg-red-700 text-white font-bold text-xs py-2.5 px-3 rounded-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Request Quote</span>
                  </button>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-500 pt-1">
                  <a 
                    href="tel:+919323801367"
                    className="hover:text-blue-600 flex items-center gap-1 font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    Call: +91 93238 01367
                  </a>

                  <button
                    onClick={handleShare}
                    className="hover:text-gray-900 flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Link Copied' : 'Share Item'}</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer info strip */}
        <div className="bg-gray-100 px-6 py-2.5 border-t border-gray-200 text-[11px] text-gray-500 flex justify-between items-center">
          <span>Gayatri Fabrication Works • Andheri East, Mumbai</span>
          <span className="font-semibold text-gray-700">Genuine Stainless Steel Equipment</span>
        </div>
      </div>
    </div>
  );
};
