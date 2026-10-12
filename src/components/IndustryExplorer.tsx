"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { INDUSTRIES_DATA, IndustryItem } from "@/data/cisContent";

interface IndustryExplorerProps {
  onOpenConsultation: () => void;
}

export function IndustryExplorer({
  onOpenConsultation,
}: IndustryExplorerProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(
    INDUSTRIES_DATA[0]
  );

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-[#040814] overflow-hidden border-t border-white/10">
      {/* Dynamic Background Glow changing according to selected industry */}
      <div
        className="absolute top-1/2 right-10 w-[700px] h-[500px] blur-[180px] rounded-full pointer-events-none transition-all duration-700 -translate-y-1/2 opacity-20"
        style={{ backgroundColor: selectedIndustry.color }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/20 mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>SECTION 11 • DOMAIN INTELLIGENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Technology for every ambition.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl text-slate-300 font-light mt-4 leading-relaxed"
          >
            Deep vertical knowledge combining industry compliance, domain architectures, and AI innovation.
          </motion.p>
        </div>

        {/* Industry Interactive Selector & Explorer */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Industry Selector List */}
          <div className="lg:col-span-4 space-y-2">
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? "bg-white/10 text-white border-white/30 shadow-xl"
                      : "bg-white/[0.02] text-slate-400 border-white/5 hover:text-slate-200 hover:bg-white/[0.05]"
                  }`}
                  style={{
                    borderColor: isSelected ? ind.color : undefined,
                  }}
                >
                  <div>
                    <span className="text-sm sm:text-base font-bold block">
                      {ind.name}
                    </span>
                    <span className="text-[11px] text-slate-400 block line-clamp-1 mt-0.5">
                      {ind.tagline}
                    </span>
                  </div>

                  <span
                    className={`w-2 h-2 rounded-full transition-transform ${
                      isSelected ? "scale-125" : "opacity-0 group-hover:opacity-50"
                    }`}
                    style={{ backgroundColor: ind.color }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Active Industry Deep Dive */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 bg-[#081224]/90 shadow-2xl relative overflow-hidden"
                style={{
                  boxShadow: `0 20px 50px -20px ${selectedIndustry.color}20`,
                }}
              >
                {/* Industry Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <span
                      className="text-xs font-mono font-bold uppercase tracking-wider block"
                      style={{ color: selectedIndustry.color }}
                    >
                      INDUSTRY VERTICAL
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {selectedIndustry.name}
                    </h3>
                  </div>

                  {/* Highlight Metric */}
                  <div
                    className="p-3.5 rounded-2xl border text-right sm:text-left bg-white/[0.03]"
                    style={{ borderColor: `${selectedIndustry.color}35` }}
                  >
                    <span
                      className="text-2xl font-black font-mono block"
                      style={{ color: selectedIndustry.color }}
                    >
                      {selectedIndustry.highlightMetric}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      {selectedIndustry.highlightText}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-6 font-light">
                  {selectedIndustry.description}
                </p>

                {/* Capabilities list */}
                <div className="mt-8">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-4">
                    Specialized Engineering Capabilities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedIndustry.capabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0"
                          style={{ color: selectedIndustry.color }}
                        />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Use Cases */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                    Production Solution Deployments:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedIndustry.sampleUseCases.map((uc) => (
                      <span
                        key={uc}
                        className="text-xs px-3 py-1.5 rounded-xl bg-white/5 text-slate-200 border border-white/10"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                  <button
                    onClick={onOpenConsultation}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#f15a24] to-[#ff7a45] hover:opacity-95 transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Discuss {selectedIndustry.name} Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
