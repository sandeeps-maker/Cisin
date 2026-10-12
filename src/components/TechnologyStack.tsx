"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  Layout,
  Server,
  Database,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";
import { TECH_STACK } from "@/data/cisContent";

export function TechnologyStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...TECH_STACK.map((t) => t.category)];

  const filteredTechs =
    activeCategory === "All"
      ? TECH_STACK
      : TECH_STACK.filter((t) => t.category === activeCategory);

  return (
    <section className="relative py-24 sm:py-32 bg-[#040814] overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0066cc]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/15 text-slate-300 mb-4"
          >
            <span>SECTION 09</span>
            <span>•</span>
            <span>ENGINEERING STACK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            An interconnected technology ecosystem.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-400 mt-4 font-light"
          >
            We select modern, battle-tested technologies that eliminate vendor lock-in and optimize for long-term maintainability.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#00e5ff]/15 text-[#00e5ff] border border-[#00e5ff]/40 shadow-lg shadow-cyan-500/10"
                    : "bg-white/5 text-slate-400 border border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechs.map((categoryGroup, idx) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/25 transition-all bg-[#070f20]/70 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                    {categoryGroup.category}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400">
                    {categoryGroup.techs.length} Technologies
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categoryGroup.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-white/[0.04] border border-white/10 hover:border-[#00e5ff]/40 hover:text-white hover:bg-white/[0.08] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
                100% In-House Certified Competency
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
