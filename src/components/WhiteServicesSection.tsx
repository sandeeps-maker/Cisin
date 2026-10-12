"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Bot,
  Eye,
  ShieldCheck,
  Globe,
  Smartphone,
  Rocket,
  Code,
  Palette,
  Layers,
  Compass,
  Cloud,
  Workflow,
  Database,
  RefreshCw,
  Cpu,
  Lock,
} from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/cisContent";

interface WhiteServicesSectionProps {
  onOpenConsultation: () => void;
}

// Visual theme definitions for each offering card to give vivid, beautiful pastel colors
interface OfferingTheme {
  icon: React.ReactNode;
  bgGradient: string;
  borderColor: string;
  hoverBorder: string;
  iconBg: string;
  badgeBg: string;
  badgeText: string;
  tagBg: string;
  tagText: string;
  tagBorder: string;
  accentBar: string;
}

const THEME_PALETTES: Record<string, OfferingTheme> = {
  // Category 01: AI & Intelligent Systems
  "Generative AI & LLM Engineering": {
    icon: <Sparkles className="w-5 h-5 text-orange-600" />,
    bgGradient: "bg-gradient-to-br from-orange-500/[0.12] via-amber-500/[0.06] to-rose-500/[0.10]",
    borderColor: "border-orange-500/30",
    hoverBorder: "hover:border-orange-500/60 hover:shadow-orange-500/15",
    iconBg: "bg-orange-500/15 text-orange-600",
    badgeBg: "bg-orange-100 text-orange-800",
    badgeText: "GenAI & LLMs",
    tagBg: "bg-orange-50/90",
    tagText: "text-orange-900 font-medium",
    tagBorder: "border-orange-200/80",
    accentBar: "bg-gradient-to-r from-orange-500 to-amber-500",
  },
  "Agentic AI & Autonomous Workflows": {
    icon: <Bot className="w-5 h-5 text-violet-600" />,
    bgGradient: "bg-gradient-to-br from-violet-500/[0.12] via-purple-500/[0.06] to-indigo-500/[0.10]",
    borderColor: "border-violet-500/30",
    hoverBorder: "hover:border-violet-500/60 hover:shadow-violet-500/15",
    iconBg: "bg-violet-500/15 text-violet-600",
    badgeBg: "bg-violet-100 text-violet-800",
    badgeText: "Autonomous Agents",
    tagBg: "bg-violet-50/90",
    tagText: "text-violet-900 font-medium",
    tagBorder: "border-violet-200/80",
    accentBar: "bg-gradient-to-r from-violet-500 to-indigo-500",
  },
  "Computer Vision & Edge Intelligence": {
    icon: <Eye className="w-5 h-5 text-teal-600" />,
    bgGradient: "bg-gradient-to-br from-cyan-500/[0.12] via-teal-500/[0.06] to-emerald-500/[0.10]",
    borderColor: "border-teal-500/30",
    hoverBorder: "hover:border-teal-500/60 hover:shadow-teal-500/15",
    iconBg: "bg-teal-500/15 text-teal-600",
    badgeBg: "bg-teal-100 text-teal-800",
    badgeText: "Vision & Edge AI",
    tagBg: "bg-teal-50/90",
    tagText: "text-teal-900 font-medium",
    tagBorder: "border-teal-200/80",
    accentBar: "bg-gradient-to-r from-cyan-500 to-teal-500",
  },
  "AI Strategy, Governance & MLOps": {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    bgGradient: "bg-gradient-to-br from-emerald-500/[0.12] via-green-500/[0.06] to-teal-500/[0.10]",
    borderColor: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-500/60 hover:shadow-emerald-500/15",
    iconBg: "bg-emerald-500/15 text-emerald-600",
    badgeBg: "bg-emerald-100 text-emerald-800",
    badgeText: "MLOps & Governance",
    tagBg: "bg-emerald-50/90",
    tagText: "text-emerald-900 font-medium",
    tagBorder: "border-emerald-200/80",
    accentBar: "bg-gradient-to-r from-emerald-500 to-green-500",
  },

  // Category 02: Product Engineering
  "Full-Stack Web & SaaS Platforms": {
    icon: <Globe className="w-5 h-5 text-blue-600" />,
    bgGradient: "bg-gradient-to-br from-blue-500/[0.12] via-sky-500/[0.06] to-indigo-500/[0.10]",
    borderColor: "border-blue-500/30",
    hoverBorder: "hover:border-blue-500/60 hover:shadow-blue-500/15",
    iconBg: "bg-blue-500/15 text-blue-600",
    badgeBg: "bg-blue-100 text-blue-800",
    badgeText: "Web & SaaS",
    tagBg: "bg-blue-50/90",
    tagText: "text-blue-900 font-medium",
    tagBorder: "border-blue-200/80",
    accentBar: "bg-gradient-to-r from-blue-500 to-sky-500",
  },
  "Mobile App Engineering (iOS & Android)": {
    icon: <Smartphone className="w-5 h-5 text-rose-600" />,
    bgGradient: "bg-gradient-to-br from-rose-500/[0.12] via-pink-500/[0.06] to-red-500/[0.10]",
    borderColor: "border-rose-500/30",
    hoverBorder: "hover:border-rose-500/60 hover:shadow-rose-500/15",
    iconBg: "bg-rose-500/15 text-rose-600",
    badgeBg: "bg-rose-100 text-rose-800",
    badgeText: "iOS & Android",
    tagBg: "bg-rose-50/90",
    tagText: "text-rose-900 font-medium",
    tagBorder: "border-rose-200/80",
    accentBar: "bg-gradient-to-r from-rose-500 to-pink-500",
  },
  "Startup MVP Accelerator": {
    icon: <Rocket className="w-5 h-5 text-amber-600" />,
    bgGradient: "bg-gradient-to-br from-amber-500/[0.12] via-yellow-500/[0.06] to-orange-500/[0.10]",
    borderColor: "border-amber-500/30",
    hoverBorder: "hover:border-amber-500/60 hover:shadow-amber-500/15",
    iconBg: "bg-amber-500/15 text-amber-600",
    badgeBg: "bg-amber-100 text-amber-800",
    badgeText: "Rapid MVP",
    tagBg: "bg-amber-50/90",
    tagText: "text-amber-900 font-medium",
    tagBorder: "border-amber-200/80",
    accentBar: "bg-gradient-to-r from-amber-500 to-yellow-500",
  },
  "Custom Software & API Ecosystems": {
    icon: <Code className="w-5 h-5 text-indigo-600" />,
    bgGradient: "bg-gradient-to-br from-indigo-500/[0.12] via-violet-500/[0.06] to-blue-500/[0.10]",
    borderColor: "border-indigo-500/30",
    hoverBorder: "hover:border-indigo-500/60 hover:shadow-indigo-500/15",
    iconBg: "bg-indigo-500/15 text-indigo-600",
    badgeBg: "bg-indigo-100 text-indigo-800",
    badgeText: "APIs & Core",
    tagBg: "bg-indigo-50/90",
    tagText: "text-indigo-900 font-medium",
    tagBorder: "border-indigo-200/80",
    accentBar: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },

  // Category 03: Experience & Design
  "UI/UX & Product Design": {
    icon: <Palette className="w-5 h-5 text-fuchsia-600" />,
    bgGradient: "bg-gradient-to-br from-fuchsia-500/[0.12] via-pink-500/[0.06] to-purple-500/[0.10]",
    borderColor: "border-fuchsia-500/30",
    hoverBorder: "hover:border-fuchsia-500/60 hover:shadow-fuchsia-500/15",
    iconBg: "bg-fuchsia-500/15 text-fuchsia-600",
    badgeBg: "bg-fuchsia-100 text-fuchsia-800",
    badgeText: "Product UI/UX",
    tagBg: "bg-fuchsia-50/90",
    tagText: "text-fuchsia-900 font-medium",
    tagBorder: "border-fuchsia-200/80",
    accentBar: "bg-gradient-to-r from-fuchsia-500 to-pink-500",
  },
  "Scalable Design Systems": {
    icon: <Layers className="w-5 h-5 text-purple-600" />,
    bgGradient: "bg-gradient-to-br from-purple-500/[0.12] via-violet-500/[0.06] to-indigo-500/[0.10]",
    borderColor: "border-purple-500/30",
    hoverBorder: "hover:border-purple-500/60 hover:shadow-purple-500/15",
    iconBg: "bg-purple-500/15 text-purple-600",
    badgeBg: "bg-purple-100 text-purple-800",
    badgeText: "Design Systems",
    tagBg: "bg-purple-50/90",
    tagText: "text-purple-900 font-medium",
    tagBorder: "border-purple-200/80",
    accentBar: "bg-gradient-to-r from-purple-500 to-violet-500",
  },
  "Product Strategy & UX Audits": {
    icon: <Compass className="w-5 h-5 text-amber-600" />,
    bgGradient: "bg-gradient-to-br from-amber-500/[0.12] via-orange-500/[0.06] to-yellow-500/[0.10]",
    borderColor: "border-amber-500/30",
    hoverBorder: "hover:border-amber-500/60 hover:shadow-amber-500/15",
    iconBg: "bg-amber-500/15 text-amber-600",
    badgeBg: "bg-amber-100 text-amber-800",
    badgeText: "Strategy & Audits",
    tagBg: "bg-amber-50/90",
    tagText: "text-amber-900 font-medium",
    tagBorder: "border-amber-200/80",
    accentBar: "bg-gradient-to-r from-amber-500 to-orange-500",
  },

  // Category 04: Cloud & Digital Engineering
  "Cloud Native Architecture & Migration": {
    icon: <Cloud className="w-5 h-5 text-sky-600" />,
    bgGradient: "bg-gradient-to-br from-sky-500/[0.12] via-cyan-500/[0.06] to-blue-500/[0.10]",
    borderColor: "border-sky-500/30",
    hoverBorder: "hover:border-sky-500/60 hover:shadow-sky-500/15",
    iconBg: "bg-sky-500/15 text-sky-600",
    badgeBg: "bg-sky-100 text-sky-800",
    badgeText: "Cloud Architecture",
    tagBg: "bg-sky-50/90",
    tagText: "text-sky-900 font-medium",
    tagBorder: "border-sky-200/80",
    accentBar: "bg-gradient-to-r from-sky-500 to-cyan-500",
  },
  "DevOps & Continuous Delivery (CI/CD)": {
    icon: <Workflow className="w-5 h-5 text-emerald-600" />,
    bgGradient: "bg-gradient-to-br from-emerald-500/[0.12] via-teal-500/[0.06] to-green-500/[0.10]",
    borderColor: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-500/60 hover:shadow-emerald-500/15",
    iconBg: "bg-emerald-500/15 text-emerald-600",
    badgeBg: "bg-emerald-100 text-emerald-800",
    badgeText: "CI/CD & DevOps",
    tagBg: "bg-emerald-50/90",
    tagText: "text-emerald-900 font-medium",
    tagBorder: "border-emerald-200/80",
    accentBar: "bg-gradient-to-r from-emerald-500 to-teal-500",
  },
  "Data Engineering & Real-Time Streaming": {
    icon: <Database className="w-5 h-5 text-violet-600" />,
    bgGradient: "bg-gradient-to-br from-violet-500/[0.12] via-indigo-500/[0.06] to-purple-500/[0.10]",
    borderColor: "border-violet-500/30",
    hoverBorder: "hover:border-violet-500/60 hover:shadow-violet-500/15",
    iconBg: "bg-violet-500/15 text-violet-600",
    badgeBg: "bg-violet-100 text-violet-800",
    badgeText: "Data & Streaming",
    tagBg: "bg-violet-50/90",
    tagText: "text-violet-900 font-medium",
    tagBorder: "border-violet-200/80",
    accentBar: "bg-gradient-to-r from-violet-500 to-indigo-500",
  },

  // Category 05: Enterprise Transformation
  "Legacy Monolith Modernization": {
    icon: <RefreshCw className="w-5 h-5 text-orange-600" />,
    bgGradient: "bg-gradient-to-br from-orange-500/[0.12] via-amber-500/[0.06] to-rose-500/[0.10]",
    borderColor: "border-orange-500/30",
    hoverBorder: "hover:border-orange-500/60 hover:shadow-orange-500/15",
    iconBg: "bg-orange-500/15 text-orange-600",
    badgeBg: "bg-orange-100 text-orange-800",
    badgeText: "Modernization",
    tagBg: "bg-orange-50/90",
    tagText: "text-orange-900 font-medium",
    tagBorder: "border-orange-200/80",
    accentBar: "bg-gradient-to-r from-orange-500 to-amber-500",
  },
  "Microsoft Enterprise Solutions": {
    icon: <Cpu className="w-5 h-5 text-blue-600" />,
    bgGradient: "bg-gradient-to-br from-blue-500/[0.12] via-sky-500/[0.06] to-indigo-500/[0.10]",
    borderColor: "border-blue-500/30",
    hoverBorder: "hover:border-blue-500/60 hover:shadow-blue-500/15",
    iconBg: "bg-blue-500/15 text-blue-600",
    badgeBg: "bg-blue-100 text-blue-800",
    badgeText: "Microsoft 365 / .NET",
    tagBg: "bg-blue-50/90",
    tagText: "text-blue-900 font-medium",
    tagBorder: "border-blue-200/80",
    accentBar: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  "Enterprise Cybersecurity & Compliance": {
    icon: <Lock className="w-5 h-5 text-emerald-600" />,
    bgGradient: "bg-gradient-to-br from-emerald-500/[0.12] via-teal-500/[0.06] to-cyan-500/[0.10]",
    borderColor: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-500/60 hover:shadow-emerald-500/15",
    iconBg: "bg-emerald-500/15 text-emerald-600",
    badgeBg: "bg-emerald-100 text-emerald-800",
    badgeText: "Security & ISO 27001",
    tagBg: "bg-emerald-50/90",
    tagText: "text-emerald-900 font-medium",
    tagBorder: "border-emerald-200/80",
    accentBar: "bg-gradient-to-r from-emerald-500 to-teal-500",
  },
};

// Default fallback palette in case of unmapped items
const DEFAULT_PALETTE: OfferingTheme = {
  icon: <Sparkles className="w-5 h-5 text-[#f15a24]" />,
  bgGradient: "bg-gradient-to-br from-orange-500/[0.12] via-amber-500/[0.06] to-rose-500/[0.10]",
  borderColor: "border-orange-500/30",
  hoverBorder: "hover:border-orange-500/60 hover:shadow-orange-500/15",
  iconBg: "bg-orange-500/15 text-orange-600",
  badgeBg: "bg-orange-100 text-orange-800",
  badgeText: "Innovation",
  tagBg: "bg-orange-50/90",
  tagText: "text-orange-900 font-medium",
  tagBorder: "border-orange-200/80",
  accentBar: "bg-[#f15a24]",
};

export function WhiteServicesSection({
  onOpenConsultation,
}: WhiteServicesSectionProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="relative py-28 sm:py-36 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-neutral-200">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#f15a24] block mb-3">
              WHAT WE DO • INNOVATION PRACTICES
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-neutral-950 tracking-[-0.035em] leading-[1.05] font-sans">
              Engineering the next <br />
              generation of products.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-neutral-600 max-w-md font-normal leading-relaxed font-sans">
            From technical co-founder advisory for high-growth startups to mission-critical AI transformation for global enterprises.
          </p>
        </div>

        {/* High-Contrast Interactive Service Rows */}
        <div className="mt-12 divide-y divide-neutral-200">
          {SERVICE_CATEGORIES.map((category, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div
                key={category.id}
                className="py-8 sm:py-10 transition-all group"
              >
                <button
                  onClick={() => setActiveIdx(isOpen ? -1 : idx)}
                  className="w-full text-left flex items-start sm:items-center justify-between gap-6 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-6 sm:gap-12">
                    <span className="text-lg sm:text-2xl font-mono font-black text-neutral-400 group-hover:text-[#f15a24] transition-colors">
                      {category.num}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-bold text-neutral-900 group-hover:text-[#f15a24] transition-colors tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-500 mt-1">
                        {category.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-full border border-neutral-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all shrink-0">
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Details */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 pt-6 border-t border-neutral-100 pl-0 sm:pl-20"
                  >
                    <p className="text-base text-neutral-700 max-w-3xl leading-relaxed">
                      {category.description}
                    </p>

                    {/* Colorful Palm-Style Offering Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
                      {category.offerings.map((offering, oIdx) => {
                        const theme = THEME_PALETTES[offering.name] || DEFAULT_PALETTE;

                        return (
                          <div
                            key={oIdx}
                            className={`relative p-6 rounded-2xl border ${theme.borderColor} ${theme.bgGradient} ${theme.hoverBorder} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between overflow-hidden group/card backdrop-blur-sm`}
                          >
                            {/* Subtle Top Accent Glow Bar */}
                            <div className={`absolute top-0 left-0 right-0 h-1 ${theme.accentBar}`} />

                            <div>
                              {/* Header with Icon and Badge */}
                              <div className="flex items-center justify-between gap-3 mb-3">
                                <div className={`p-2.5 rounded-xl ${theme.iconBg} shrink-0 transition-transform duration-300 group-hover/card:scale-110`}>
                                  {theme.icon}
                                </div>
                                <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${theme.badgeBg}`}>
                                  {theme.badgeText}
                                </span>
                              </div>

                              <h4 className="text-lg font-bold text-neutral-950 tracking-tight leading-snug">
                                {offering.name}
                              </h4>
                              <p className="text-xs sm:text-sm text-neutral-700 mt-2 leading-relaxed">
                                {offering.description}
                              </p>
                            </div>

                            {/* Tags with Matching Theme Colors */}
                            <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-neutral-900/5">
                              {offering.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${theme.tagBg} ${theme.tagText} ${theme.tagBorder} transition-colors shadow-xs`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-8 flex items-center justify-between pt-4 border-t border-neutral-100">
                      <span className="text-xs text-neutral-500 font-mono">
                        CMMI Level 5 Standardized Delivery
                      </span>
                      <button
                        onClick={onOpenConsultation}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#f15a24] hover:text-neutral-950 transition-colors"
                      >
                        <span>Request Architecture Scope</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

