"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-md relative bg-dark-800 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Design accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-bl-full pointer-events-none" />

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Gift className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Wait! Don't leave yet.</h3>
              <p className="text-gray-400 mb-6 font-medium">
                Get <span className="text-primary-400 font-bold">₹500 OFF</span> on your very first trip with Drift & Discover.
              </p>
              
              <div className="bg-dark-900 border border-white/5 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-500 mb-1">Use Code at Checkout</p>
                <p className="text-2xl font-mono font-bold tracking-widest text-white">DRIFT500</p>
              </div>
              
              <a 
                href="#contact"
                onClick={() => setIsVisible(false)}
                className="block w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold transition-colors"
              >
                Claim My Discount
              </a>
              <button 
                onClick={() => setIsVisible(false)}
                className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                No thanks, I'll pay full price.
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
