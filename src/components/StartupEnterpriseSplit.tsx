"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Cpu,
  Layers,
  Users,
} from "lucide-react";

interface StartupEnterpriseSplitProps {
  onOpenConsultation: (track: "startup" | "enterprise") => void;
}

export function StartupEnterpriseSplit({
  onOpenConsultation,
}: StartupEnterpriseSplitProps) {
  const [activeSide, setActiveSide] = useState<"startup" | "enterprise" | null>(
    null
  );

  const startupPoints = [
    { text: "Idea Validation & Technical Co-Founder advisory", badge: "0 → 1" },
    { text: "Rapid 6–8 Week MVP Delivery to market", badge: "Speed" },
    { text: "High-Fidelity UI/UX & Interactive Design Systems", badge: "Design" },
    { text: "Native & Agentic AI Workflow Integration", badge: "AI Core" },
    { text: "Full-Stack Web (Next.js) & Mobile (iOS/Android)", badge: "Mobile" },
    { text: "Elastic engineering squads that scale with funding rounds", badge: "Scale" },
  ];

  const enterprisePoints = [
    { text: "Enterprise AI Transformation & Agent Orchestration", badge: "AI Scale" },
    { text: "Zero-Downtime Legacy Monolith Modernization", badge: "Strangler" },
    { text: "CMMI Level 5 & ISO 27001 Bank-Grade Quality Standard", badge: "Security" },
    { text: "Cloud Native & Microservices (AWS / Azure / GCP)", badge: "Multi-Cloud" },
    { text: "Enterprise Data Lakehouses & Real-Time Streaming", badge: "Data" },
    { text: "Dedicated 50+ Senior Engineering Squads under SLA", badge: "Governance" },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#040814] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#f15a24]/10 blur-[160px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#0066cc]/15 blur-[160px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/15 text-slate-300 mb-4"
          >
            <span>SECTION 03</span>
            <span>•</span>
            <span>TWO WORLDS. ONE TECHNOLOGY PARTNER.</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Whether you&apos;re building the next unicorn or modernizing a global enterprise.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-400 mt-4"
          >
            We deploy tailored engineering practices, squads, and governance models built for your exact stage of growth.
          </motion.p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: STARTUPS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setActiveSide("startup")}
            onMouseLeave={() => setActiveSide(null)}
            className={`glass-panel rounded-3xl p-8 sm:p-10 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
              activeSide === "startup" || activeSide === null
                ? "border-[#f15a24]/40 bg-[#0d1527]/90 shadow-2xl shadow-[#f15a24]/10"
                : "border-white/10 opacity-75"
            }`}
          >
            {/* Top accent badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#f15a24]/15 border border-[#f15a24]/30 text-[#f15a24] text-xs font-bold uppercase tracking-wider">
                <Rocket className="w-4 h-4" /> Startups & Scaleups
              </div>
              <span className="text-xs font-mono text-slate-400">
                0 → 1 to Series B+
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Build your startup with a <span className="text-gradient-orange">technology partner</span>.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                From napkin sketch to product-market fit. We act as your fractional technical co-founder and rapid engineering squad to turn your idea into a venture-grade digital product.
              </p>

              {/* Startup Checklist */}
              <div className="mt-8 space-y-3.5">
                {startupPoints.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm text-slate-200">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#f15a24] shrink-0" />
                      <span>{item.text}</span>
                    </div>
                    <span className="hidden sm:inline text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">
                  AVERAGE MVP TIMELINE
                </span>
                <span className="text-base font-bold text-white">
                  6–8 Weeks to Production
                </span>
              </div>
              <button
                onClick={() => onOpenConsultation("startup")}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#f15a24] to-[#ff7a45] hover:opacity-95 transition-all shadow-lg shadow-[#f15a24]/20 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Build My Startup</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: ENTERPRISES */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setActiveSide("enterprise")}
            onMouseLeave={() => setActiveSide(null)}
            className={`glass-panel rounded-3xl p-8 sm:p-10 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
              activeSide === "enterprise" || activeSide === null
                ? "border-[#00e5ff]/40 bg-[#08152c]/90 shadow-2xl shadow-cyan-500/10"
                : "border-white/10 opacity-75"
            }`}
          >
            {/* Top accent badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#0066cc]/20 border border-[#0066cc]/40 text-[#38bdf8] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" /> Global Enterprises
              </div>
              <span className="text-xs font-mono text-slate-400">
                Fortune 500 & Global 2000
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Modernize, automate and scale with <span className="text-gradient-cyan">CIS</span>.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                Transform mission-critical legacy systems into agile, AI-augmented architectures. Governed by CMMI Level 5 delivery discipline and ISO 27001 data protection.
              </p>

              {/* Enterprise Checklist */}
              <div className="mt-8 space-y-3.5">
                {enterprisePoints.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm text-slate-200">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#00e5ff] shrink-0" />
                      <span>{item.text}</span>
                    </div>
                    <span className="hidden sm:inline text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">
                  DELIVERY MATURITY
                </span>
                <span className="text-base font-bold text-white">
                  CMMI Level 5 Appraised
                </span>
              </div>
              <button
                onClick={() => onOpenConsultation("enterprise")}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#0066cc] to-[#00a3ff] hover:opacity-95 transition-all shadow-lg shadow-[#0066cc]/20 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Transform My Business</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
