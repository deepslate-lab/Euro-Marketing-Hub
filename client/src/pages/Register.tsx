import { motion } from "framer-motion";
import { Upload, Building2, User, FileText, CreditCard, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Register() {
  const [formStep, setFormStep] = useState<"form" | "success">("form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep("success");
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Page Header */}
      <div className="bg-primary text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Become Our Partner
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="text-lg text-blue-100 max-w-2xl mx-auto"
          >
            Register your business to access Euro Marketing's premium products and wholesale pricing.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {formStep === "form" ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Company Information Section */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Company Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your company name"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Industry Type *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      >
                        <option value="">Select industry type</option>
                        <option value="retail">Retail Store</option>
                        <option value="wholesale">Wholesale Distributor</option>
                        <option value="hotel">Hotel/Resort</option>
                        <option value="restaurant">Restaurant/Cafe</option>
                        <option value="supermarket">Supermarket</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Company Registration Number *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Registration number"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        GST/Tax ID Number *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="GST number"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Registered Address *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full address"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+960 123 4567"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Point of Contact Section */}
                <div className="border-t border-slate-200 pt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-accent text-white rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Primary Contact Person</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contact person name"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Manager, Owner"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contact@company.com"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+960 123 4567"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Terms Section */}
                <div className="border-t border-slate-200 pt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/80 text-white rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Business Terms</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Required Credit Period *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      >
                        <option value="">Select credit period</option>
                        <option value="cash">Cash/COD</option>
                        <option value="7days">7 Days</option>
                        <option value="15days">15 Days</option>
                        <option value="30days">30 Days</option>
                        <option value="45days">45 Days</option>
                        <option value="60days">60 Days</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Estimated Monthly Purchase Value *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      >
                        <option value="">Select range</option>
                        <option value="5k">$5,000 - $10,000</option>
                        <option value="10k">$10,000 - $25,000</option>
                        <option value="25k">$25,000 - $50,000</option>
                        <option value="50k">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Product Categories of Interest (Select All That Apply) *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["Beverages", "Confectionery", "Dairy", "Grocery", "Snacks", "Other"].map((cat) => (
                        <label key={cat} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                          <input
                            type="checkbox"
                            className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary/20"
                          />
                          <span className="text-slate-700">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Document Upload Section */}
                <div className="border-t border-slate-200 pt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-accent/80 text-white rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Required Documents</h2>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Company Registration Certificate", name: "registration_cert" },
                      { label: "GST/Tax Certificate", name: "gst_cert" },
                      { label: "Bank Details (Cancelled Cheque)", name: "bank_cheque" },
                      { label: "Trade License/Business Permit", name: "trade_license" },
                    ].map((doc) => (
                      <div key={doc.name}>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          {doc.label} *
                        </label>
                        <div className="relative border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                          <input
                            type="file"
                            required
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                          />
                          <div className="flex flex-col items-center">
                            <Upload className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors mb-2" />
                            <p className="text-slate-600 font-medium">Click to upload or drag and drop</p>
                            <p className="text-xs text-slate-500 mt-1">PDF, JPG, PNG, DOC up to 10MB</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="border-t border-slate-200 pt-8">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Additional Information or Special Requests
                  </label>
                  <textarea
                    placeholder="Tell us about your business and any special requirements..."
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>

                {/* Agreements */}
                <div className="border-t border-slate-200 pt-8">
                  <label className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="w-5 h-5 text-primary rounded mt-1 focus:ring-2 focus:ring-primary/20 flex-shrink-0"
                    />
                    <span className="text-sm text-slate-700">
                      I agree to Euro Marketing's terms and conditions, and authorize the company to verify the information provided.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Submit Registration
                  </button>
                </div>

                <p className="text-xs text-slate-500 text-center">
                  Our sales team will review your application and contact you within 2 business days.
                </p>
              </form>
            </div>
          </motion.div>
        ) : (
          /* Success Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-6"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </motion.div>
              
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Application Submitted!</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                Thank you for registering with Euro Marketing. We have received your application and our sales team will review it shortly.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-bold text-slate-900 mb-3">What happens next?</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span>Our team will verify your documents and business information</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span>We'll contact you via email or phone within 2 business days</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <span>Once approved, you'll receive your account credentials and can start ordering</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-600 mb-6">
                For immediate assistance, contact us at <span className="font-bold text-primary">+960 331 6688</span> or <span className="font-bold">sales@euromarketing.com.mv</span>
              </p>

              <button
                onClick={() => window.location.href = "/"}
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-all"
              >
                Return to Home
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
