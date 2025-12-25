import { Link } from "wouter";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent text-white flex items-center justify-center rounded font-bold">E</div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-none">EURO</span>
                <span className="text-[10px] font-semibold tracking-widest text-accent">MARKETING</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              The premier distributor of international food and beverage brands in the Maldives. Serving resorts, hotels, and local markets since 1997.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Brands", href: "/brands" },
                { label: "Branch Locations", href: "/branches" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center gap-2 hover:text-accent transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent/50 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">
              Head Office
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span className="text-sm">Ma. Favorite, Chaandhanee Magu, Malé, Maldives</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm">+960 331 6688</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm">info@euromarketing.com.mv</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (Visual Only) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">
              Newsletter
            </h3>
            <p className="text-sm text-slate-400 mb-4">Subscribe to get updates on new products and offers.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-800 border-slate-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-white font-bold py-3 rounded-md hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Euro Marketing Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
