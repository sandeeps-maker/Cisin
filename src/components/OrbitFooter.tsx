"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Check, ArrowUpRight, ChevronRight, Sparkles, Building2 } from "lucide-react";
import { TenityRibbedBackground } from "./TenityRibbedBackground";

interface OrbitFooterProps {
  onOpenConsultation: (track?: "startup" | "enterprise") => void;
}

export function OrbitFooter({ onOpenConsultation }: OrbitFooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-[#0c0d10] text-white pt-24 sm:pt-32 pb-16 overflow-hidden select-none">
      {/* Exact Graphic Image with Cursor Movement Animation */}
      <TenityRibbedBackground side="left" opacity={0.9} imageSrc="/tenity-ribbed-bg.png" />

      {/* Atmospheric Top Blend Overlay */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0c0d10] to-transparent pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-16">
        {/* Main Grid: Stay in our orbit & Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 items-start">
          {/* Left Column: White CIS Logo, Stay in our orbit & Newsletter */}
          <div className="lg:col-span-6 space-y-8">
            {/* White Version CIS Official Logo */}
            <div className="relative h-12 sm:h-14 w-48 sm:w-56">
              <Image
                src="/cis-logo-white.png"
                alt="CIS - Cyber Infrastructure"
                fill
                sizes="224px"
                className="object-contain object-left"
                priority
              />
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-[-0.035em] leading-[0.93]">
              Stay in <br />
              our orbit
            </h2>

            <div className="space-y-4 max-w-md">
              <span className="text-xl sm:text-2xl font-normal text-white block">
                Join the newsletter
              </span>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <div className="flex-1">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="w-full px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#f15a24]"
                    />
                  </div>
                  {/* Signature Orange Pill Button with + icon */}
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f15a24] hover:bg-[#d94816] text-white font-bold text-sm transition-all shrink-0 cursor-pointer shadow-lg shadow-orange-500/20 active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Subscribe</span>
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <Check className="w-4 h-4" /> Subscribed to CIS Technology Radar!
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Prominent Call-to-Action with Big Capsule Button & Hubs */}
          <div className="lg:col-span-6 space-y-8 lg:pl-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#f15a24]/15 text-[#f15a24] border border-[#f15a24]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
                <span>LET&apos;S BUILD WHAT&apos;S NEXT</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-[-0.035em] leading-tight">
                Have an idea worth building?
              </h3>
              <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-lg">
                Get insights, stories, and scalable technology from across our global technology ecosystem.
              </p>
            </div>

            {/* Bolder, Bigger Signature Capsule CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation("startup")}
                className="group flex items-center gap-4 pl-7 pr-2.5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-neutral-950 text-sm sm:text-base font-extrabold transition-all duration-300 shadow-2xl hover:shadow-cyan-500/20 active:scale-95 cursor-pointer border border-white"
              >
                <span className="tracking-tight">Let&apos;s Talk</span>
                <span className="w-10 h-10 rounded-full bg-[#f15a24] group-hover:bg-[#ff5520] text-white flex items-center justify-center transition-transform group-hover:rotate-45 shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </button>

              <button
                onClick={() => onOpenConsultation("enterprise")}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/25 hover:border-white/60 bg-white/[0.04] hover:bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
              >
                <span>Explore Solutions</span>
                <span className="w-7 h-7 rounded-full border border-white/30 group-hover:border-white group-hover:bg-white group-hover:text-neutral-900 flex items-center justify-center transition-all">
                  <ChevronRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            </div>

            {/* Global Hubs */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono font-bold text-slate-400 block mb-3 uppercase tracking-wider">
                Global Technology Hubs
              </span>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-200">
                <span className="hover:text-white transition-colors cursor-pointer">Silicon Valley</span>
                <span className="hover:text-white transition-colors cursor-pointer">London</span>
                <span className="hover:text-white transition-colors cursor-pointer">Singapore</span>
                <span className="hover:text-white transition-colors cursor-pointer">Melbourne</span>
                <span className="hover:text-white transition-colors cursor-pointer">India (HQ)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Socials + Copyright + Legal Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-6 font-medium">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Linkedin
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Twitter / X
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              YouTube
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span>© 2026 Cyber Infrastructure (CIS). All rights reserved.</span>
            <span className="text-white/20">—</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Security & Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
