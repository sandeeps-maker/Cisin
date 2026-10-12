"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { TESTIMONIALS } from "@/data/cisContent";

export function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrentIdx((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const item = TESTIMONIALS[currentIdx];

  return (
    <section className="relative py-24 sm:py-32 bg-[#050b18] overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#f15a24]/8 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#f15a24]/10 text-[#f15a24] border border-[#f15a24]/20 mb-3">
              <span>SECTION 14 • CLIENT VOICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Endorsed by engineering leaders.
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Big Editorial Quote Container */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="glass-panel rounded-3xl p-8 sm:p-14 border border-white/15 bg-[#081224]/90 shadow-2xl relative"
            >
              <Quote className="w-12 h-12 text-[#f15a24]/40 mb-6" />

              <p className="text-xl sm:text-3xl md:text-4xl text-white font-light leading-snug tracking-tight">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {item.author}
                  </h3>
                  <p className="text-sm text-[#00e5ff] font-medium">
                    {item.company}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Sector: {item.industry}
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.verified}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
