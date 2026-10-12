"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Award, CheckCircle2, TrendingUp, Users, Cpu, Lock, Sparkles } from "lucide-react";

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: boolean;
}

function StatCounter({ end, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StylistCredibilitySection() {
  return (
    <section className="relative pt-12 sm:pt-16 pb-20 sm:pb-28 bg-[#0c0d10] text-white overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#f15a24]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#0066cc]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid: Left Big Headline + Right Certification Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-white/10 items-center">
          {/* Left: Headline & Statement */}
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#f15a24]/15 text-[#f15a24] border border-[#f15a24]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GLOBAL ENGINEERING STANDARD</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.035em] leading-[1.08] font-sans">
              Top IT & Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#f15a24]">
                Development Services!
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed pt-1 font-sans">
              With <strong className="text-white font-medium">exceptional customer partnership</strong> and guaranteed delivery predictability.
            </p>
          </div>

          {/* Right: Large Gray-Shaded Institutional Certification Icons (No Boxes) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center justify-items-center">
            {/* Microsoft Gold */}
            <div className="flex items-center justify-center w-full group">
              <Image
                src="/accreditations/ms-gold-clean.png"
                alt="Microsoft Gold Certified Partner"
                width={280}
                height={100}
                className="object-contain h-14 sm:h-16 lg:h-20 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
              />
            </div>

            {/* CMMI Level 5 */}
            <div className="flex items-center justify-center w-full group">
              <Image
                src="/accreditations/cmmi-clean.png"
                alt="CMMIDEV/5 and CMMISVC/5"
                width={280}
                height={110}
                className="object-contain h-14 sm:h-16 lg:h-20 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
              />
            </div>

            {/* ISO 9001 */}
            <div className="flex items-center justify-center w-full group">
              <Image
                src="/accreditations/iso-9001-clean.png"
                alt="ISO 9001:2015"
                width={240}
                height={95}
                className="object-contain h-12 sm:h-14 lg:h-16 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
              />
            </div>

            {/* ISO 27001 */}
            <div className="flex items-center justify-center w-full group">
              <Image
                src="/accreditations/iso-27001-clean.png"
                alt="ISO/IEC 27001:2013"
                width={240}
                height={95}
                className="object-contain h-12 sm:h-14 lg:h-16 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Bottom 4 Stylist Counter Cards */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: $10B+ */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#f15a24]/40 transition-all duration-300 shadow-xl group">
            <div className="w-10 h-10 rounded-2xl bg-[#f15a24]/15 border border-[#f15a24]/30 text-[#f15a24] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-white group-hover:text-[#f15a24] transition-colors">
              <StatCounter end={10} prefix="$" suffix="B+" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-200 mt-2">
              Client Revenues Generated
            </h3>
          </div>

          {/* Card 2: 20+ Years */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#f59e0b]/40 transition-all duration-300 shadow-xl group">
            <div className="w-10 h-10 rounded-2xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[#f59e0b] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-white group-hover:text-[#f59e0b] transition-colors">
              <StatCounter end={20} suffix="+ Yrs" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-200 mt-2">
              Successful Heritage
            </h3>
          </div>

          {/* Card 3: 1000+ Ninjas */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-emerald-400/40 transition-all duration-300 shadow-xl group">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              <StatCounter end={1000} suffix="+" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-200 mt-2">
              In-House IT Ninjas & Experts
            </h3>
          </div>

          {/* Card 4: 5000+ Projects */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#a855f7]/40 transition-all duration-300 shadow-xl group">
            <div className="w-10 h-10 rounded-2xl bg-[#a855f7]/15 border border-[#a855f7]/30 text-[#a855f7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-white group-hover:text-[#a855f7] transition-colors">
              <StatCounter end={5000} suffix="+" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-200 mt-2">
              Projects Shipped
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
