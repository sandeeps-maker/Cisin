"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export function FraudAlertBanner() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Smoothly hide banner once user starts scrolling
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const alertText =
    "Be aware! Online job fraud is on the rise. We do Not outsource to any vendor. CIS and its affiliates, Never ask Money for any Interview, Job offer or Task. Our official websites are www.cisin.com and career.cisin.com Only!";

  return (
    <AnimatePresence>
      {!isScrolled && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="fixed top-0 inset-x-0 z-50 py-1 px-2 overflow-hidden select-none text-[11px] sm:text-xs font-sans pointer-events-auto bg-transparent"
        >
          {/* Continuous Right-to-Left marquee showing ONLY ONE single instance across the screen */}
          <div className="w-full overflow-hidden flex items-center">
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 45, // Slow, relaxed gliding speed
                ease: "linear",
                repeat: Infinity,
              }}
              className="whitespace-nowrap shrink-0 flex items-center gap-2 text-white font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] tracking-tight"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 inline-block animate-pulse" />
              <span>{alertText}</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
