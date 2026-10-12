"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Cpu,
  Layers,
  Cloud,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SERVICE_CATEGORIES, ServiceCategory } from "@/data/cisContent";

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    SERVICE_CATEGORIES[0].id
  );

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain":
        return <Brain className="w-5 h-5" />;
      case "Cpu":
        return <Cpu className="w-5 h-5" />;
      case "Layers":
        return <Layers className="w-5 h-5" />;
      case "Cloud":
        return <Cloud className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const activeCategory =
    SERVICE_CATEGORIES.find((c) => c.id === activeCategoryId) ||
    SERVICE_CATEGORIES[0];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#050b18] overflow-hidden border-t border-white/10">
      {/* Background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#0066cc]/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#60a5fa]/10 text-[#60a5fa] border border-[#60a5fa]/20 mb-4"
            >
              <span>SECTION 06</span>
              <span>•</span>
              <span>SERVICE ARCHITECTURE</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              Everything you need to <br />
              <span className="text-gradient-white">build, launch and scale.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-slate-400 max-w-md font-light leading-relaxed"
          >
            Structured across 5 strategic engineering practices with 1,000+ vetted in-house experts operating under CMMI Level 5 quality standards.
          </motion.p>
        </div>

        {/* 5 Strategic Category Selectors (Accordion & Detailed Display) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Category Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-white/10 border-[#00e5ff] shadow-xl shadow-cyan-500/10"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-lg font-mono font-black ${
                        isActive ? "text-[#00e5ff]" : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    >
                      {category.num}
                    </span>
                    <div>
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors ${
                          isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {category.tagline}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`p-2 rounded-xl transition-transform duration-300 ${
                      isActive
                        ? "bg-[#00e5ff]/20 text-[#00e5ff] rotate-90"
                        : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Category Offerings Detail Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl bg-[#081224]/90"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#00e5ff] mb-1">
                      <span>PRACTICE {activeCategory.num}</span>
                      <span>•</span>
                      <span>ENTERPRISE & STARTUP CAPABLE</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {activeCategory.title}
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      {activeCategory.description}
                    </p>
                  </div>
                </div>

                {/* Sub-Offerings Grid */}
                <div className="mt-6 space-y-4">
                  {activeCategory.offerings.map((offering, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white">
                          {offering.name}
                        </h4>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                        {offering.description}
                      </p>

                      {/* Deliverables */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/5">
                        {offering.deliverables.map((del, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00e5ff] shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                        {offering.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Need a custom solution in <strong>{activeCategory.title}</strong>?
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#f15a24] to-[#ff7a45] hover:opacity-95 transition-all shadow-md shadow-[#f15a24]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Engineering Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
