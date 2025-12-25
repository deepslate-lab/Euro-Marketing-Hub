import { useBranches } from "@/hooks/use-branches";
import { MapPin, Phone, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Branches() {
  const { data: branches, isLoading } = useBranches();

  // Mock data if DB empty
  const displayBranches = branches?.length ? branches : [
    { id: 1, name: "Euro Store - Male'", address: "Chaandhanee Magu, Male'", phone: "+960 331 6688", location: null },
    { id: 2, name: "Euro Store - Hulhumale'", address: "Nirolhu Magu, Hulhumale'", phone: "+960 335 6688", location: null },
    { id: 3, name: "Wholesale Center", address: "M. Favorite, Male'", phone: "+960 332 5599", location: null },
    { id: 4, name: "Addu Branch", address: "Hithadhoo, Addu City", phone: "+960 688 5588", location: null },
    { id: 5, name: "Fuvahmulah Branch", address: "Maadhadu, Fuvahmulah", phone: "+960 686 4488", location: null },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Header */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Locations</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Conveniently located outlets and distribution centers across the Maldives.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        
        {/* Map Placeholder */}
        <div className="bg-slate-200 w-full h-80 rounded-xl shadow-lg mb-12 overflow-hidden relative">
          {/* scenic maldives aerial view map placeholder */}
          <img 
            src="https://pixabay.com/get/g8e2f034346c135853707dc5065aad087f052d87898fcb422b5f85044d235c430f4399fe4366754c499fddb4429c28c72_1280.jpg" 
            alt="Map View" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
             <div className="bg-white/90 px-6 py-3 rounded-full shadow-lg text-slate-700 font-medium flex items-center gap-2">
                <MapPin className="text-accent" /> Interactive Map Coming Soon
             </div>
          </div>
        </div>

        {/* Branch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-full flex justify-center py-10">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          ) : (
            displayBranches.map((branch, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.1 } }}
                key={branch.id}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded">
                    OPEN
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{branch.name}</h3>
                
                <div className="space-y-3 mt-4 text-sm text-slate-600">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {branch.address}
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent shrink-0" />
                    <a href={`tel:${branch.phone}`} className="hover:text-primary transition-colors">{branch.phone}</a>
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center">
                   <span className="text-xs text-slate-400">08:30 - 22:00</span>
                   <button className="text-sm font-bold text-primary hover:text-accent transition-colors">
                     Get Directions
                   </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
