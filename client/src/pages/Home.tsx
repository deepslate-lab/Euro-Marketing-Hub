import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Truck, Utensils, Award, MapPin, Calendar } from "lucide-react";

export default function Home() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[800px] flex items-center overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* scenic maldives resort dining table with ocean view */}
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
            alt="Maldives Dining" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl text-white"
          >
            <motion.div variants={fadeIn} className="inline-block bg-accent/20 border border-accent/40 text-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6">
              ESTABLISHED 1997
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Premium Quality <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Global Brands</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              We connect the world's finest food and beverage producers with the Maldives' luxury resorts, hotels, and local markets.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/brands" className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-accent/20 hover:-translate-y-1 flex items-center justify-center gap-2">
                View Our Brands <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center">
                Contact Sales
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter */}
      <div className="bg-primary text-white py-12 relative z-20 -mt-10 mx-4 lg:mx-auto max-w-6xl rounded-2xl shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="p-4">
            <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">60+</h3>
            <p className="text-lg text-blue-100 font-medium">Premium Brands</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">10+</h3>
            <p className="text-lg text-blue-100 font-medium">Retail Locations</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">27</h3>
            <p className="text-lg text-blue-100 font-medium">Years of Excellence</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Distribution Solutions</h3>
            <p className="text-slate-600">Serving every sector of the Maldivian market with efficiency and reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<ShoppingBag className="w-8 h-8" />}
              title="Retail Distribution"
              description="Managing our own chain of specialized outlets providing direct access to premium products for consumers."
              img="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop"
            />
            <ServiceCard 
              icon={<Truck className="w-8 h-8" />}
              title="Wholesale Supply"
              description="Reliable bulk supply chain management for supermarkets, local shops, and island traders across the nation."
              img="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
            />
            <ServiceCard 
              icon={<Utensils className="w-8 h-8" />}
              title="Food Service"
              description="Dedicated partner to luxury resorts, hotels, and restaurants, ensuring consistent supply of gourmet ingredients."
              img="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Featured Brands - Simple Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Our Partner Brands</h2>
              <p className="text-slate-600">Representing world-renowned manufacturers.</p>
            </div>
            <Link href="/brands" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              View All Brands <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Placeholder Brand Logos - In a real app these would be images */}
            {['Lavazza', 'Toblerone', 'Red Bull', 'Cadbury', 'Ferrero', 'Rauch', 'Barilla', 'San Pellegrino', 'Heinz', 'Kraft', 'Mars', 'Nestlé'].map((brand, i) => (
              <div key={i} className="aspect-video bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center p-4 hover:shadow-lg transition-all hover:border-accent/20 grayscale hover:grayscale-0 group cursor-pointer">
                <span className="font-bold text-slate-400 group-hover:text-primary text-lg">{brand}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/brands" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              View All Brands <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Whether you're a resort looking for premium supplies or a brand seeking distribution in the Maldives, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-accent/20 hover:-translate-y-1">
              Contact Our Team
            </Link>
            <Link href="/branches" className="px-8 py-4 bg-white hover:bg-slate-50 text-primary rounded-lg font-bold transition-all shadow-lg hover:-translate-y-1">
              Find a Location
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

function ServiceCard({ icon, title, description, img }: { icon: any, title: string, description: string, img: string }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-accent/20">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      <div className="p-8">
        <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
