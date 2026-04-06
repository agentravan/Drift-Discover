"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import toast from "react-hot-toast";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "",
    date: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    toast.success("Query submitted! Redirecting to WhatsApp...");
    
    setTimeout(() => {
        // Construct WhatsApp message
        const text = `Hi, I'm ${formData.name}. I'm interested in traveling to ${formData.destination} around ${formData.date}. My budget is ${formData.budget}. Phone: ${formData.phone}`;
        const encodedText = encodeURIComponent(text);
        
        // WhatsApp numbers: 8699246801 or 9149262139
        window.open(`https://wa.me/918699246801?text=${encodedText}`, "_blank");
        
        setFormData({ name: "", phone: "", destination: "", date: "", budget: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Ready for your next <br /><span className="text-gradient">Adventure?</span>
            </motion.h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Fill out the form to get a personalized free quote within 2 hours. Our travel experts are ready to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 glass-card p-4 rounded-xl border border-white/5 max-w-sm">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Call Us Directly</p>
                  <p className="text-white font-bold text-lg">+91 86992 46801</p>
                  <p className="text-white font-bold text-lg">+91 91492 62139</p>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-sm text-gray-500 mb-2">Prefer Google Forms?</p>
                <a href="https://forms.gle/1miEZ4Qx2orwSfUx8" target="_blank" rel="noreferrer" className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors">
                  Open Google Form <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            {/* Glowing effect behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur opacity-20 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Get Free Quote</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Phone</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Destination</label>
                <input required name="destination" value={formData.destination} onChange={handleChange} type="text" className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="e.g. Manali, Goa, Dubai" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Travel Date</label>
                  <input required name="date" value={formData.date} onChange={handleChange} type="month" className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors color-scheme-dark" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Budget Target</label>
                  <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none">
                    <option value="" disabled>Select Budget...</option>
                    <option value="Under ₹10,000">Under ₹10,000</option>
                    <option value="₹10,000 - ₹30,000">₹10,000 - ₹30,000</option>
                    <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
                    <option value="Above ₹50,000">Above ₹50,000</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold rounded-xl py-4 flex items-center justify-center group transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                Get Free Quote <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
