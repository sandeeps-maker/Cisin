"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Layers,
  Rocket,
  Shield,
  Users,
  Infinity as InfinityIcon,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface Pillar {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  color: string;
  accentBg: string;
  stats: string;
}

const PILLARS: Pillar[] = [
  {
    num: "01",
    title: "AI-Native Thinking",
    subtitle: "Built into product strategy, engineering & workflows",
    description:
      "We don't tack on AI as an afterthought. We architect autonomous agent reasoning, RAG pipelines, and automated intelligence directly into your core business logic.",
    icon: <Brain className="w-5 h-5" />,
    tag: "AI First",
    color: "#00e5ff",
    accentBg: "rgba(0, 229, 255, 0.12)",
    stats: "Sub-15ms AI inference pipelines",
  },
  {
    num: "02",
    title: "Product Engineering",
    subtitle: "From concept & UX to architecture, QA & cloud launch",
    description:
      "True end-to-end product craft. We handle complex UX workflows, high-concurrency cloud databases, and zero-defect automated testing suites.",
    icon: <Layers className="w-5 h-5" />,
    tag: "Full Lifecycle",
    color: "#60a5fa",
    accentBg: "rgba(96, 165, 250, 0.12)",
    stats: "5,000+ products shipped",
  },
  {
    num: "03",
    title: "Startup Partnership",
    subtitle: "Your fractional technical co-founder & high-speed squad",
    description:
      "For venture-backed founders, we provide CTO-level technical guidance, rapid MVP sprints, and elastic engineering squads that scale with your seed and Series A rounds.",
    icon: <Rocket className="w-5 h-5" />,
    tag: "0 to 1 Speed",
    color: "#f15a24",
    accentBg: "rgba(241, 90, 36, 0.12)",
    stats: "6–8 week MVP accelerator",
  },
  {
    num: "04",
    title: "Enterprise Scale",
    subtitle: "CMMI Level 5 & ISO 27001 bank-grade governance",
    description:
      "Proven architecture for organizations with complex compliance, security, and multi-cloud resilience needs. Zero business disruption during migrations.",
    icon: <Shield className="w-5 h-5" />,
    tag: "Bank Grade",
    color: "#38bdf8",
    accentBg: "rgba(56, 189, 248, 0.12)",
    stats: "Top 2% maturity globally",
  },
  {
    num: "05",
    title: "One Unified Team",
    subtitle: "Design, AI, Cloud, Engineering & QA under one roof",
    description:
      "100% in-house direct engineers. No disjointed subcontractors, no hand-off friction. Synchronized sprints with dedicated leadership.",
    icon: <Users className="w-5 h-5" />,
    tag: "100% In-House",
    color: "#a855f7",
    accentBg: "rgba(168, 85, 247, 0.12)",
    stats: "1,000+ dedicated technologists",
  },
  {
    num: "06",
    title: "Built for the Long Run",
    subtitle: "We don't disappear after launch. We help you evolve.",
    description:
      "Software isn't static. We partner for continuous performance tuning, architecture scaling, security updates, and new AI feature iterations.",
    icon: <InfinityIcon className="w-5 h-5" />,
    tag: "Long-Term",
    color: "#34d399",
    accentBg: "rgba(52, 211, 153, 0.12)",
    stats: "20+ years company stability",
  },
];

export function WhyCIS() {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <section className="relative py-24 sm:py-32 bg-[#050b18] overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0066cc]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20 mb-4"
          >
            <span>SECTION 04</span>
            <span>•</span>
            <span>THE CIS ADVANTAGE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            More than developers. <br />
            <span className="text-gradient-cyan">A technology partner.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl text-slate-300 font-light mt-4 leading-relaxed"
          >
            We don’t just write code to specification. We challenge assumptions, optimize architectures, and co-create digital products built to win.
          </motion.p>
        </div>

        {/* 6 Large Animated Editorial Statements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => {
            const isHovered = activePillar === idx;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => setActivePillar(idx)}
                onMouseLeave={() => setActivePillar(null)}
                className={`glass-panel rounded-2xl p-6 sm:p-7 border transition-all duration-300 relative flex flex-col justify-between group ${
                  isHovered
                    ? "bg-[#0c162c] border-white/30 -translate-y-1.5 shadow-xl"
                    : "bg-white/[0.02] border-white/10"
                }`}
                style={{
                  boxShadow: isHovered
                    ? `0 14px 35px -10px ${pillar.color}35`
                    : "none",
                }}
              >
                <div>
                  {/* Card Top Row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono tracking-wider text-slate-500 group-hover:text-white transition-colors">
                      {pillar.num}
                    </span>
                    <div
                      className="p-2.5 rounded-xl transition-colors"
                      style={{
                        backgroundColor: pillar.accentBg,
                        color: pillar.color,
                        border: `1px solid ${pillar.color}40`,
                      }}
                    >
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00e5ff] transition-colors tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Footer stat tag */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400">Metric:</span>
                  <span
                    className="font-semibold font-mono"
                    style={{ color: pillar.color }}
                  >
                    {pillar.stats}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
