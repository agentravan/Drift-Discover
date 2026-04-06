"use client";

import { motion } from "framer-motion";
import { MapPin, IndianRupee } from "lucide-react";

const destinations = [
  {
    name: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop",
    price: "12,999",
    desc: "Sun, Sand, and Seclusion",
  },
  {
    name: "Manali",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
    price: "6,999",
    desc: "Snow-capped magic in the Himalayas",
  },
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    price: "49,999",
    desc: "Luxury in the desert metropolis",
  },
  {
    name: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
    price: "35,999",
    desc: "Tropical paradise retreats",
  },
  {
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop",
    price: "29,999",
    desc: "Vibrant culture and stunning beaches",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Featured <span className="text-gradient">Destinations</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our handpicked premium locations for your next unforgettable journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              className="group rounded-2xl overflow-hidden glass-card relative cursor-pointer"
              style={{ transformPerspective: 1000 }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-all z-10 duration-500" />
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dark-900 to-transparent z-10" />
              </div>
              
              <div className="p-6 relative z-20 -mt-10">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-2xl font-bold text-white font-poppins">{dest.name}</h3>
                  <div className="flex items-center text-primary-400 font-semibold bg-primary-900/30 px-3 py-1 rounded-lg backdrop-blur-sm border border-primary-500/20">
                    <IndianRupee className="w-4 h-4 mr-1" />
                    {dest.price} <span className="text-xs text-gray-400 ml-1 font-normal">onwards</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {dest.desc}
                </p>
                <div className="w-full border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="text-primary-400 font-medium group-hover:text-primary-300 transition-colors">View Details</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
