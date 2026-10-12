"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { INSIGHTS_POSTS } from "@/data/cisContent";

interface InsightsSectionProps {
  onOpenConsultation: () => void;
}

export function InsightsSection({ onOpenConsultation }: InsightsSectionProps) {
  return (
    <section id="insights" className="relative py-24 sm:py-32 bg-[#040814] overflow-hidden border-t border-white/10">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-[700px] h-[400px] bg-[#0066cc]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#fbbf24]/10 text-[#fbbf24] border border-[#fbbf24]/20 mb-4"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>SECTION 15 • THOUGHT LEADERSHIP</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              What&apos;s next in technology.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-slate-400 max-w-md font-light leading-relaxed"
          >
            Engineering blueprints, AI architecture analyses, and startup playbooks authored by our principal architects.
          </motion.p>
        </div>

        {/* 4 Featured Insights Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSIGHTS_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group hover:-translate-y-1 bg-[#081224]/80"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-[11px] font-mono text-slate-400">
                  <span className="text-[#00e5ff] font-semibold">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#00e5ff] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed font-light">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-mono">
                  {post.author}
                </span>
                <span className="text-[#00e5ff] flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform">
                  Read <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
