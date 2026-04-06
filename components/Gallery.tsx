"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=800&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Moments <span className="text-gradient">Captured</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Glimpses of joy from our previous trips.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                idx === 0 || idx === 3 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="aspect-square w-full h-full">
                <img 
                  src={src} 
                  alt={`Travel moment ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white border border-white/30 backdrop-blur-sm px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  View Source
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
