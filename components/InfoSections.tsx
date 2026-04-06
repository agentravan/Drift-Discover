"use client";

import { motion } from "framer-motion";
import { Coffee, Utensils, ShieldCheck, HeartHandshake, CreditCard, Clock, PlaneTakeoff, Info } from "lucide-react";

export default function InfoSections() {
  return (
    <section className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-primary-900/40 via-accent-900/40 to-primary-900/40 border border-primary-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left shadow-lg">
          <Info className="w-8 h-8 text-primary-400 flex-shrink-0" />
          <p className="text-white text-lg font-medium">
            <strong className="text-primary-300 font-bold">Important:</strong> Trip details (hotel, pickup, itinerary) will be shared exactly <span className="underline decoration-primary-500 font-bold">4 days before</span> departure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Meal Plan & Payments */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Utensils className="w-8 h-8 text-primary-500 mr-4" /> Meal Plan
              </h3>
              <div className="space-y-4">
                <div className="glass-card p-5 rounded-xl flex items-center justify-between">
                  <div className="flex items-center text-white font-medium">
                    <span className="w-8 h-8 rounded bg-primary-500/20 text-primary-400 flex items-center justify-center mr-4">D1</span>
                    Day 1
                  </div>
                  <div className="text-gray-300 flex items-center gap-2 text-sm md:text-base">
                    <Coffee className="w-4 h-4" /> Breakfast + <Utensils className="w-4 h-4 ml-2" /> Dinner
                  </div>
                </div>
                <div className="glass-card p-5 rounded-xl flex items-center justify-between">
                  <div className="flex items-center text-white font-medium">
                    <span className="w-8 h-8 rounded bg-primary-500/20 text-primary-400 flex items-center justify-center mr-4">D2</span>
                    Day 2
                  </div>
                  <div className="text-gray-300 flex items-center gap-2 text-sm md:text-base">
                    <Coffee className="w-4 h-4" /> Breakfast
                  </div>
                </div>
              </div>
              <p className="text-accent-400 mt-4 text-sm font-medium pl-2">* Stay and Travel are fully included in all plans.</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <CreditCard className="w-8 h-8 text-primary-500 mr-4" /> Payment Terms
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-xl border border-primary-500/20 text-center">
                  <div className="text-3xl font-bold text-white mb-2">40%</div>
                  <div className="text-gray-400 text-sm">Advance at Booking</div>
                </div>
                <div className="glass-card p-6 rounded-xl border border-white/5 text-center">
                  <div className="text-3xl font-bold text-white mb-2">60%</div>
                  <div className="text-gray-400 text-sm">Before Departure</div>
                </div>
              </div>
              <div className="flex justify-center gap-6 mt-8">
                {/* Trust Badges placeholders */}
                <div className="flex items-center text-gray-500 gap-2"><ShieldCheck className="w-6 h-6"/> Secure</div>
                <div className="flex items-center text-gray-500 gap-2"><svg className="w-8 h-6" viewBox="0 0 24 16" fill="currentColor"><path d="M1..."></path></svg> Verified</div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <HeartHandshake className="w-8 h-8 text-primary-500 mr-4" /> Why Choose Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: IndianRupee, title: "Affordable Packages", desc: "Premium experience without breaking the bank." },
                { icon: HeartHandshake, title: "500+ Happy Travelers", desc: "Trusted by hundreds across Delhi NCR." },
                { icon: PlaneTakeoff, title: "End-to-End Planning", desc: "We handle logistics, you enjoy the trip." },
                { icon: Clock, title: "24/7 Support", desc: "Always available to assist you on your journey." },
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />
                  <feature.icon className="w-10 h-10 text-primary-400 mb-4 relative z-10" />
                  <h4 className="text-white font-bold text-lg mb-2 relative z-10">{feature.title}</h4>
                  <p className="text-gray-400 text-sm relative z-10">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
