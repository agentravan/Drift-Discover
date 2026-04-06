"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Corporate Traveler",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "The Manali trip was perfectly organized. From the AC Volvo to the premium stay, everything exceeded our expectations. Highly recommended!",
  },
  {
    name: "Priya Patel",
    role: "Solo Traveler",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "I was a bit skeptical about group trips, but Drift & Discover made it so comfortable and safe. The itinerary was packed yet relaxing.",
  },
  {
    name: "Rohan Kapoor",
    role: "Weekend Explorer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    text: "Booked the Goa package for our friend group. The deal we got was unbeatable, and the property was barely 5 mins from the beach.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-dark-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-600/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16"
        >
          Travelers <span className="text-gradient">Love Us</span>
        </motion.h2>

        <div className="relative h-[300px] md:h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <Quote className="w-12 h-12 text-white/10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#fbbf24] fill-[#fbbf24]" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 max-w-3xl leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-12 h-12 rounded-full border-2 border-primary-500 object-cover"
                />
                <div className="text-left">
                  <h4 className="text-white font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary-400 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentIndex ? "bg-primary-500 w-8" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
