import { motion } from "framer-motion";
import { Target, Lightbulb, Clock, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Page Header */}
      <div className="bg-primary text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            About Euro Marketing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Pioneering the distribution of premium food and beverage brands in the Maldives since 1997.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Our Story</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">A Legacy of Quality & Trust</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Euro Marketing Pvt Ltd was established in August 1997 with a singular vision: to bring the world's finest products to the shores of the Maldives. What began as a modest operation has grown into the nation's premier distributor for the tourism sector and local markets.
                </p>
                <p>
                  Over the past two decades, we have built enduring partnerships with globally recognized brands. Our success stems from our deep understanding of the unique logistics of the Maldives and our unwavering commitment to service excellence.
                </p>
                <p>
                  Today, we are proud to be the trusted partner for luxury resorts, boutique hotels, restaurants, and retailers across the archipelago.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* warehouse or logistics team image */}
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Operations" 
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-4xl font-bold mb-1">27+</p>
                <p className="text-sm font-medium opacity-90">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide superior quality products and exceptional service to our customers, ensuring their success through reliable supply chains and innovative solutions tailored to the Maldivian market.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-accent rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the undisputed leader in food and beverage distribution in the Maldives, recognized for our integrity, quality portfolio, and contribution to the nation's tourism and retail sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <TimelineItem year="1997" title="Company Founded" description="Euro Marketing Pvt Ltd established in Male', focusing on confectionery imports." />
            <TimelineItem year="2005" title="Expansion to Resorts" description="Launched dedicated division to serve the growing luxury resort market." />
            <TimelineItem year="2012" title="New Warehousing Facility" description="Opened state-of-the-art temperature controlled warehouse to ensure product quality." />
            <TimelineItem year="2020" title="Digital Transformation" description="Modernized logistics and ordering systems to better serve our partners." />
            <TimelineItem year="2024" title="Market Leadership" description="Representing over 60 global brands with nationwide distribution coverage." />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ year, title, description }: { year: string, title: string, description: string }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 relative">
      <div className="md:w-32 flex-shrink-0 text-left md:text-right">
        <span className="text-2xl font-bold text-primary">{year}</span>
      </div>
      
      <div className="hidden md:block absolute left-32 top-0 bottom-0 w-px bg-slate-300 ml-4"></div>
      <div className="hidden md:flex absolute left-32 ml-2.5 w-3 h-3 rounded-full bg-accent mt-2.5"></div>
      
      <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
