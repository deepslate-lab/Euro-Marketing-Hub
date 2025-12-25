import { useState } from "react";
import { useBrands } from "@/hooks/use-brands";
import { Search, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Brands() {
  const { data: brands, isLoading } = useBrands();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Confectionery", "Beverages", "Dairy", "Grocery", "Snacks"];

  // Mock data fallback if DB is empty
  const displayBrands = brands?.length ? brands : [
    { id: 1, name: "Lavazza", category: "Beverages", url: "#", logoUrl: null },
    { id: 2, name: "Toblerone", category: "Confectionery", url: "#", logoUrl: null },
    { id: 3, name: "Red Bull", category: "Beverages", url: "#", logoUrl: null },
    { id: 4, name: "Cadbury", category: "Confectionery", url: "#", logoUrl: null },
    { id: 5, name: "Kraft", category: "Grocery", url: "#", logoUrl: null },
    { id: 6, name: "Heinz", category: "Grocery", url: "#", logoUrl: null },
    { id: 7, name: "Rauch", category: "Beverages", url: "#", logoUrl: null },
    { id: 8, name: "Happy Cow", category: "Dairy", url: "#", logoUrl: null },
    { id: 9, name: "Barilla", category: "Grocery", url: "#", logoUrl: null },
    { id: 10, name: "Ferrero", category: "Confectionery", url: "#", logoUrl: null },
    { id: 11, name: "San Pellegrino", category: "Beverages", url: "#", logoUrl: null },
    { id: 12, name: "Lindt", category: "Confectionery", url: "#", logoUrl: null },
  ];

  const filteredBrands = displayBrands.filter(brand => {
    const matchesCategory = filter === "All" || brand.category === filter;
    const matchesSearch = brand.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Header */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Brands</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            We are proud to represent some of the world's most trusted and beloved food and beverage brands in the Maldives.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search brands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                      ? "bg-primary text-white shadow-md" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <AnimatePresence>
              {filteredBrands.map((brand) => (
                <motion.a
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={brand.id}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all flex flex-col items-center justify-center gap-4 group aspect-square text-center"
                >
                  {brand.logoUrl ? (
                    <img src={brand.logoUrl} alt={brand.name} className="max-w-full max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <span className="text-2xl font-bold">{brand.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-slate-700 group-hover:text-primary transition-colors">{brand.name}</h3>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">{brand.category}</span>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filteredBrands.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg">No brands found matching your criteria.</p>
            <button 
              onClick={() => {setFilter("All"); setSearch("");}}
              className="mt-4 text-primary font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
