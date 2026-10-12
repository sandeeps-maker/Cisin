"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Clock, Cloud, CreditCard, ChevronRight, ArrowUpRight } from "lucide-react";

interface BetterSoftwareSectionProps {
  onOpenConsultation: (track?: "startup" | "enterprise" | "general") => void;
}

interface FeaturePillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PILLARS: FeaturePillar[] = [
  {
    id: "high-perf",
    icon: <Zap className="w-5 h-5 text-[#f15a24]" />,
    title: "High-Performance Mobile & Web Solutions",
    description:
      "Custom native iOS & Android development, cross-platform React Native architectures, and high-frequency web platforms built for speed and security.",
  },
  {
    id: "agile",
    icon: <Clock className="w-5 h-5 text-[#f15a24]" />,
    title: "Full-Cycle Agile Delivery",
    description:
      "Predictable 2-week sprint cadence with continuous integration, automated QA test suites, and transparent daily burndown telemetry.",
  },
  {
    id: "mvp-enterprise",
    icon: <Cloud className="w-5 h-5 text-[#f15a24]" />,
    title: "From enterprise modernization to rapid MVPs",
    description:
      "Scale effortlessly from 6-week YC-style startup validation sprints to multi-region CMMI Level 5 enterprise cloud microservices.",
  },
  {
    id: "pricing",
    icon: <CreditCard className="w-5 h-5 text-[#f15a24]" />,
    title: "Transparent, cost-effective pricing",
    description:
      "Flexible engagement models from dedicated engineering pods to fixed-scope milestone deliverables with zero hidden overheads.",
  },
];

export function BetterSoftwareSection({ onOpenConsultation }: BetterSoftwareSectionProps) {
  const [activeId, setActiveId] = useState<string>("high-perf");

  return (
    <section className="relative py-28 sm:py-36 bg-white text-neutral-900 overflow-hidden border-t border-b border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Feature List & CTA Buttons */}
          <div className="lg:col-span-6 space-y-8">
            {/* Editorial Headline with Signature Orange Underline */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.1]">
                <span className="relative inline-block pb-1.5">
                  Better software
                  <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#f15a24] rounded-full" />
                </span>{" "}
                <br className="hidden sm:block" />
                starts with CIS:
              </h2>
            </div>

            {/* 4 Feature Pillars */}
            <div className="space-y-4 pt-2">
              {PILLARS.map((pillar) => {
                const isActive = activeId === pillar.id;
                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActiveId(pillar.id)}
                    className={`p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? "bg-[#fafafa] border-neutral-300 shadow-md border-l-4 border-l-[#f15a24]"
                        : "bg-transparent border-transparent hover:bg-neutral-50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 shrink-0 mt-0.5">
                        {pillar.icon}
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-base sm:text-lg font-bold text-neutral-950 leading-snug">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Dual Capsule Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Solid Orange Pill Button */}
              <button
                onClick={() => onOpenConsultation("general")}
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#f15a24] hover:bg-[#d94816] text-white text-xs sm:text-sm font-extrabold transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-95 cursor-pointer"
              >
                <span>See your pricing</span>
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </button>

              {/* Outlined Pill Button */}
              <button
                onClick={() => onOpenConsultation("startup")}
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-950 hover:text-white text-neutral-900 text-xs sm:text-sm font-extrabold transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
              >
                <span>Get started</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Quality Engineering Pod Collaboration Photo */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl group"
            >
              <Image
                src="/cis-team-collaboration.png"
                alt="CIS Engineering Squad Collaborating"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Bottom Subtle Overlay Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#00e5ff] font-bold block">
                    1000+ IN-HOUSE TALENT
                  </span>
                  <span className="text-sm font-bold block">
                    Zero Freelancers • Dedicated Pod Governance
                  </span>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#f15a24] text-white flex items-center justify-center text-xs font-black shadow-md">
                  CIS
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
