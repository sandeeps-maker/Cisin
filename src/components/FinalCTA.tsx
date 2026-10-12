"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Zap,
} from "lucide-react";

interface FinalCTAProps {
  onOpenConsultation: (track?: "startup" | "enterprise") => void;
}

export function FinalCTA({ onOpenConsultation }: FinalCTAProps) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#040814] overflow-hidden border-t border-white/10">
      {/* Background massive glowing nebula */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[500px] bg-gradient-to-r from-[#0066cc]/25 via-[#00e5ff]/20 to-[#f15a24]/20 blur-[180px] rounded-full pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/15 text-slate-200 mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-[#00e5ff]" />
          <span>LET&apos;S CO-CREATE YOUR NEXT DIGITAL ADVANTAGE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05]"
        >
          Have an idea worth building? <br />
          <span className="text-gradient-orange">Let&apos;s turn it into something real.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base sm:text-xl text-slate-300 font-light mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          From AI concept to production scale — let&apos;s build what&apos;s next. Our solution architects will prepare a comprehensive technical feasibility blueprint within 24 hours.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => onOpenConsultation("startup")}
            className="group px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-[#f15a24] via-[#ff6a38] to-[#0066cc] hover:opacity-95 transition-all shadow-2xl shadow-[#f15a24]/30 hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onOpenConsultation("enterprise")}
            className="px-8 py-4 rounded-xl font-bold text-base text-white glass-panel hover:bg-white/10 transition-all border border-white/20 flex items-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#00e5ff]" />
            <span>Book a Technical Consultation</span>
          </button>
        </motion.div>

        {/* Trust Badges under CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400"
        >
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#00e5ff]" /> Mutual NDA Protected
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Zap className="w-4 h-4 text-[#f15a24]" /> 24h Response SLA
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            CMMI Level 5 Quality Standard
          </span>
        </motion.div>
      </div>
    </section>
  );
}
