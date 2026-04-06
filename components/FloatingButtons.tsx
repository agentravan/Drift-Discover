"use client";

import { MessageCircle, Navigation2 } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        href="https://wa.me/918699246801"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.4)] text-white transition-colors group relative"
      >
        <span className="absolute right-full mr-4 bg-dark-800 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 font-medium">
          Chat on WhatsApp
        </span>
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        href="#contact"
        className="w-14 h-14 bg-primary-600 hover:bg-primary-500 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(79,70,229,0.4)] text-white transition-colors group relative"
      >
        <span className="absolute right-full mr-4 bg-dark-800 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 font-medium">
          Book Now
        </span>
        <Navigation2 className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
