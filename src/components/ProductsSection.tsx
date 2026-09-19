import React, { useState, useMemo } from 'react';
import { Search, ChevronRight, ChevronDown, Filter, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/siteData.ts';
import { ProductItem, ProductCategory } from '../types.ts';
import { ProductModal } from './ProductModal.tsx';
import { handleImageError } from '../utils/imageHelper.ts';

interface ProductsSectionProps {
  selectedCategorySlug?: string | null;
  selectedProductSlug?: string | null;
  onSelectCategory: (catSlug: string | null) => void;
  onSelectProduct: (prodSlug: string | null) => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  selectedCategorySlug,
  selectedProductSlug,
  onSelectCategory,
  onSelectProduct,
  onRequestQuote
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'bakery-confectionery': true,
    'cooking-equipments': true
  });
  const [modalProduct, setModalProduct] = useState<{ item: ProductItem; catTitle: string } | null>(null);

  // Toggle category expansion in the Bellows accordion menu
  const toggleCategoryExpand = (catId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // Flatten all products with category data
  const allProductsList = useMemo(() => {
    const list: { item: ProductItem; category: ProductCategory }[] = [];
    PRODUCT_CATEGORIES.forEach(cat => {
      cat.items.forEach(item => {
        list.push({ item, category: cat });
      });
    });
    return list;
  }, []);

  // Filtered products based on search or selected category/product
  const filteredDisplay = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return allProductsList.filter(
        p => p.item.title.toLowerCase().includes(q) ||
             p.item.description.toLowerCase().includes(q) ||
             p.category.title.toLowerCase().includes(q)
      );
    }

    if (selectedCategorySlug) {
      const cat = PRODUCT_CATEGORIES.find(c => c.slug === selectedCategorySlug);
      if (!cat) return [];
      return cat.items.map(item => ({ item, category: cat }));
    }

    return allProductsList;
  }, [searchQuery, selectedCategorySlug, allProductsList]);

  // Current active category object
  const activeCategory = selectedCategorySlug 
    ? PRODUCT_CATEGORIES.find(c => c.slug === selectedCategorySlug)
    : null;

  return (
    <section className="bg-neutral-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb / Title Bar */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <button 
                onClick={() => { onSelectCategory(null); onSelectProduct(null); }}
                className="hover:text-[#EE1B24]"
              >
                Our Products
              </button>
              {activeCategory && (
                <>
                  <span>/</span>
                  <span className="font-semibold text-gray-800">{activeCategory.title}</span>
                </>
              )}
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              {activeCategory ? activeCategory.title : 'Complete Kitchen Equipment Range'}
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              Manufactured in Mumbai using heavy gauge food-grade stainless steel
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search equipment (e.g., Burner, Kneader)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (selectedCategorySlug) onSelectCategory(null);
              }}
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-[#EE1B24] focus:ring-1 focus:ring-[#EE1B24]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 2-Column Layout matching live site's Bellows menu + Content structure */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Column: Bellows Blue Material Accordion Menu */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-sm border border-gray-200 shadow-xs overflow-hidden sticky top-20">
              
              {/* Menu Title */}
              <div className="bg-[#2979FF] text-white px-4 py-3 flex items-center justify-between">
                <span className="font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Product Categories
                </span>
                <button
                  onClick={() => {
                    onSelectCategory(null);
                    onSelectProduct(null);
                    setSearchQuery('');
                  }}
                  className="text-xs bg-blue-800/40 hover:bg-blue-800 px-2 py-0.5 rounded-sm"
                >
                  View All
                </button>
              </div>

              {/* Accordion Categories List */}
              <div className="divide-y divide-gray-100 max-h-[75vh] overflow-y-auto">
                {PRODUCT_CATEGORIES.map((cat) => {
                  const isExpanded = expandedCategories[cat.id];
                  const isSelected = selectedCategorySlug === cat.slug;

                  return (
                    <div key={cat.id} className="text-sm">
                      <div className={`flex items-center justify-between px-3.5 py-2.5 transition-colors ${
                        isSelected ? 'bg-red-50 text-[#EE1B24] font-bold' : 'hover:bg-gray-50 text-gray-800'
                      }`}>
                        <button
                          onClick={() => onSelectCategory(cat.slug)}
                          className="flex-1 text-left truncate hover:text-[#EE1B24]"
                        >
                          {cat.title}
                        </button>
                        <button
                          onClick={() => toggleCategoryExpand(cat.id)}
                          className="p-1 text-gray-400 hover:text-gray-700 ml-1"
                          aria-label={`Toggle ${cat.title}`}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      </div>

                      {/* Submenu items (Individual Products) */}
                      {isExpanded && (
                        <ul className="bg-gray-50/60 pl-6 pr-3 py-1 space-y-1 text-xs border-t border-gray-100/60">
                          {cat.items.map((item) => (
                            <li key={item.slug}>
                              <button
                                onClick={() => {
                                  onSelectCategory(cat.slug);
                                  setModalProduct({ item, catTitle: cat.title });
                                }}
                                className="w-full text-left py-1 text-gray-600 hover:text-[#2979FF] truncate flex items-center gap-1.5 transition-colors"
                              >
                                <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                                <span className="truncate">{item.title}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Sidebar Quick Quote Box */}
              <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
                <p className="text-xs font-semibold text-gray-800">Need Custom Sizes or AutoCAD Plan?</p>
                <p className="text-[11px] text-gray-500 mt-0.5">We fabricate custom dimensions for any kitchen footprint.</p>
                <a
                  href="tel:+919323801367"
                  className="mt-2.5 inline-flex items-center justify-center gap-1.5 w-full bg-[#EE1B24] hover:bg-red-700 text-white text-xs font-bold py-2 rounded-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call +91 93238 01367</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Product Cards Grid */}
          <main className="lg:col-span-3">
            {filteredDisplay.length === 0 ? (
              <div className="bg-white rounded-sm border border-gray-200 p-12 text-center">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-800">No products found</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Try checking your search terms or select another category from the sidebar.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    onSelectCategory(null);
                  }}
                  className="mt-4 inline-block bg-[#EE1B24] text-white text-xs font-bold px-4 py-2 rounded-sm"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                
                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filteredDisplay.map(({ item, category }) => (
                    <div
                      key={item.slug}
                      className="group bg-white rounded-sm border border-gray-200 hover:border-[#EE1B24] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
                    >
                      {/* Image Container */}
                      <div 
                        onClick={() => setModalProduct({ item, catTitle: category.title })}
                        className="h-48 bg-white p-4 flex items-center justify-center cursor-pointer border-b border-gray-100 overflow-hidden relative"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={handleImageError}
                        />
                        <span className="absolute top-2 right-2 bg-gray-900/60 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          Quick View
                        </span>
                      </div>

                      {/* Content details */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[11px] font-bold text-[#2979FF] uppercase tracking-wider block mb-1">
                            {category.title}
                          </span>
                          <h3 
                            onClick={() => setModalProduct({ item, catTitle: category.title })}
                            className="font-bold text-base text-gray-900 group-hover:text-[#EE1B24] cursor-pointer transition-colors leading-snug"
                          >
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                            {item.description || 'Stainless steel commercial kitchen equipment manufactured for reliable heavy-duty operation.'}
                          </p>
                        </div>

                        {/* Card Actions */}
                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                          <button
                            onClick={() => setModalProduct({ item, catTitle: category.title })}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold py-2 px-2.5 rounded-sm text-center transition-colors"
                          >
                            Details &amp; Specs
                          </button>
                          <button
                            onClick={() => onRequestQuote(item.title)}
                            className="flex-1 bg-[#EE1B24] hover:bg-red-700 text-white text-xs font-bold py-2 px-2.5 rounded-sm text-center transition-colors"
                          >
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footnote reassurance */}
                <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-900">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>All units can be customized to your specific kitchen dimensions and burner specifications.</span>
                  </div>
                  <button
                    onClick={() => onRequestQuote('Custom Fabrication Consultation')}
                    className="bg-[#2979FF] hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded-sm whitespace-nowrap"
                  >
                    Custom Size Request
                  </button>
                </div>
              </div>
            )}
          </main>

        </div>
      </div>

      {/* Product Detail Modal */}
      {modalProduct && (
        <ProductModal
          product={modalProduct.item}
          categoryTitle={modalProduct.catTitle}
          onClose={() => setModalProduct(null)}
          onRequestQuote={onRequestQuote}
        />
      )}
    </section>
  );
};
