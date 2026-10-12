"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ArrowRight,
  Sparkles,
  TrendingUp,
  X,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";
import { CASE_STUDIES, CaseStudy } from "@/data/cisContent";

interface CaseStudyShowcaseProps {
  onOpenConsultation: () => void;
}

export function CaseStudyShowcase({
  onOpenConsultation,
}: CaseStudyShowcaseProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[#050b18] overflow-hidden border-t border-white/10">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[500px] bg-[#0066cc]/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 mb-4"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>SECTION 10 • PROVEN TRACK RECORD</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              Ideas we&apos;ve turned <br />
              <span className="text-gradient-cyan">into impact.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-slate-400 max-w-md font-light leading-relaxed"
          >
            Engineering mission-critical products for Fortune 500 enterprises, venture-backed tech startups, and global institutions.
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 bg-[#081224]/80 shadow-xl"
              style={{
                boxShadow: `0 15px 35px -15px ${item.accentColor}25`,
              }}
            >
              <div>
                {/* Card Top: Client & Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div>
                    <span className="text-xl font-black text-white group-hover:text-[#00e5ff] transition-colors tracking-tight">
                      {item.client}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      {item.industry}
                    </span>
                  </div>
                  <span
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full border font-semibold"
                    style={{
                      borderColor: `${item.accentColor}40`,
                      color: item.accentColor,
                      backgroundColor: `${item.accentColor}15`,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-3 line-clamp-3 leading-relaxed font-light">
                  {item.challenge}
                </p>

                {/* Metrics Highlight Box */}
                <div className="mt-5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 grid grid-cols-3 gap-2 text-center">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span
                        className="text-xs sm:text-sm font-black font-mono block truncate"
                        style={{ color: item.accentColor }}
                      >
                        {m.value}
                      </span>
                      <span className="text-[9px] text-slate-400 truncate block mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech tags & Action */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1 max-w-[65%]">
                  {item.technology.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCase(item)}
                  className="text-xs font-bold text-white group-hover:text-[#00e5ff] flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-[#040814]/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl bg-[#081224] z-10 my-8"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-black text-white">
                  {selectedCase.client}
                </span>
                <span
                  className="text-xs font-mono px-3 py-1 rounded-full font-bold"
                  style={{
                    backgroundColor: `${selectedCase.accentColor}20`,
                    color: selectedCase.accentColor,
                  }}
                >
                  {selectedCase.badge}
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400">
                Industry: {selectedCase.industry}
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-white mt-4 leading-tight">
                {selectedCase.title}
              </h3>

              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs font-mono font-bold text-[#f15a24] block uppercase mb-1">
                    The Challenge:
                  </span>
                  <p className="leading-relaxed">{selectedCase.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs font-mono font-bold text-[#00e5ff] block uppercase mb-1">
                    CIS Solution & Architecture:
                  </span>
                  <p className="leading-relaxed">{selectedCase.solution}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-6">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Verified Project Outcomes:
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {selectedCase.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-center"
                    >
                      <span
                        className="text-base sm:text-lg font-black font-mono block"
                        style={{ color: selectedCase.accentColor }}
                      >
                        {m.value}
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {selectedCase.technology.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedCase(null);
                    onOpenConsultation();
                  }}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-[#f15a24] hover:bg-[#ff6b38] transition-all shadow-md"
                >
                  Build a Similar Architecture →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
