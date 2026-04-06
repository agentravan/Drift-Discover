"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Map } from "lucide-react";
import { useState, useEffect } from "react";

const weekendTrips = [
  { name: "Manali", duration: "3 Days", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800&auto=format&fit=crop" },
  { name: "Shimla", duration: "2 Days", image: "https://images.unsplash.com/photo-1525256241312-d3aefffd2825?q=80&w=800&auto=format&fit=crop" },
  { name: "Mussoorie", duration: "2 Days", image: "https://images.unsplash.com/photo-1626296720888-348232c91823?q=80&w=800&auto=format&fit=crop" },
  { name: "Kasol", duration: "3 Days", image: "https://images.unsplash.com/photo-1643194095694-ba46b6ee6d30?q=80&w=800&auto=format&fit=crop" },
  { name: "Dharamshala", duration: "3 Days", image: "https://images.unsplash.com/photo-1616140411831-2bedcd35becc?q=80&w=800&auto=format&fit=crop" },
  { name: "Dalhousie", duration: "3 Days", image: "https://images.unsplash.com/photo-1594895897071-87a414909a80?q=80&w=800&auto=format&fit=crop" },
  { name: "Nainital", duration: "2 Days", image: "https://images.unsplash.com/photo-1598226065545-e6c986968853?q=80&w=800&auto=format&fit=crop" },
  { name: "Jibhi & Tirthan Valley", duration: "3 Days", image: "https://images.unsplash.com/photo-1601007212002-da0e6afed8df?q=80&w=800&auto=format&fit=crop" },
];

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Dummy target date (next 2nd/4th Friday)
    const target = new Date();
    target.setDate(target.getDate() + 5);
    target.setHours(18, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Mins", value: timeLeft.minutes },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-xl glass flex items-center justify-center text-2xl font-bold font-poppins text-white border border-primary-500/30 shadow-[0_0_15px_rgba(79,70,229,0.2)]">
            {item.value.toString().padStart(2, "0")}
          </div>
          <span className="text-xs text-gray-400 mt-2 uppercase tracking-wider">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function FixedTrips() {
  return (
    <section id="trips" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 text-center md:text-left">
          <div className="w-full md:w-auto flex flex-col items-center md:items-start">
            <span className="text-accent-400 text-sm font-bold tracking-widest uppercase mb-2 block">High Priority</span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Fixed Weekend Group Trips<br />
              <span className="text-gray-400 text-2xl md:text-3xl mt-2 block font-normal">from Delhi NCR</span>
            </motion.h2>
          </div>
          
          <div className="glass-card p-6 rounded-2xl border border-white/5 w-full md:w-auto">
            <h4 className="text-white text-sm font-medium mb-4 flex items-center justify-center md:justify-start">
              <Clock className="w-4 h-4 mr-2 text-primary-400" /> Next Departure In:
            </h4>
            <div className="flex justify-center md:justify-start">
              <Countdown />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Calendar, title: "Frequency", desc: "Every 2nd & 4th Saturday" },
            { icon: Clock, title: "Departure", desc: "Friday Evening" },
            { icon: Map, title: "Return", desc: "Sunday Evening" },
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          {weekendTrips.map((trip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/5]"
            >
              <img src={trip.image} alt={trip.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
              
              <div className="absolute top-3 left-3 bg-accent-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider backdrop-blur-md">
                Upcoming Batch
              </div>

              <div className="absolute bottom-0 left-0 w-full p-4 md:p-5 flex justify-between items-end">
                <div>
                  <h3 className="text-white font-bold text-xl md:text-2xl font-poppins mb-1">{trip.name}</h3>
                  <p className="text-primary-300 text-sm font-medium">{trip.duration}</p>
                </div>
                <a 
                  href="https://forms.gle/1miEZ4Qx2orwSfUx8" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-primary-600 hover:bg-primary-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-lg"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
