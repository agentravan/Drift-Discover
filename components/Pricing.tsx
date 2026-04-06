"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Map, MountainSnow } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      title: "Uttarakhand Trips",
      price: "5,999",
      icon: MountainSnow,
      color: "from-blue-500 to-cyan-400",
      features: ["Weekend Getaways", "Hotel Stay Included", "Breakfast & Dinner", "Sightseeing", "Guided Tour"],
      popular: false,
    },
    {
      title: "Himachal Trips",
      price: "6,999",
      icon: Map,
      color: "from-primary-500 to-accent-500",
      features: ["3 Days / 2 Nights", "Premium Stay", "Breakfast & Dinner", "AC Volvo Travel", "Bonfire & Music", "Trekking Setup"],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium experiences without the premium price tag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative rounded-3xl backdrop-blur-xl border ${
                plan.popular ? "border-primary-500/50 bg-dark-800/80 shadow-[0_0_40px_rgba(79,70,229,0.15)] scale-100 md:scale-105 z-10" : "border-white/10 bg-dark-800/30"
              } p-8 flex flex-col items-center text-center`}
            >
              {plan.popular && (
                <div className="absolute top-0 transform -translate-y-1/2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${plan.color}`}>
                <plan.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
              <div className="flex items-end justify-center mb-6">
                <span className="text-gray-400 text-lg mr-2 font-medium">onwards</span>
                <span className="text-4xl md:text-5xl font-bold text-white flex items-center">
                  <span className="text-3xl mr-1 text-primary-400">₹</span>{plan.price}
                </span>
              </div>
              
              <ul className="w-full space-y-4 mb-8 text-left">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className={`mt-auto w-full py-4 rounded-xl font-bold text-lg transition-all ${
                plan.popular 
                ? "bg-primary-600 hover:bg-primary-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]" 
                : "bg-white/10 hover:bg-white/20 text-white"
              }`}>
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
