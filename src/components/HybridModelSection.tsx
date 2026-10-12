"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface HybridModelSectionProps {
  onOpenConsultation: () => void;
}

export function HybridModelSection({
  onOpenConsultation,
}: HybridModelSectionProps) {
  return (
    <section className="relative py-24 sm:py-36 bg-white text-neutral-900 overflow-hidden border-t border-b border-neutral-200 select-none">
      {/* Subtle ambient gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 via-white to-neutral-50/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Exact Tenity 3-Column Floating Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Card 01 - Top Left Floating */}
          <div className="lg:col-span-3 space-y-6 lg:-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#f8f9fa] border border-neutral-200/90 hover:border-neutral-900 hover:bg-white hover:shadow-2xl transition-all duration-300 shadow-md"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-bold font-mono text-neutral-900">01.</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#f15a24]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-normal text-neutral-950 tracking-[-0.035em] leading-tight">
                Architecting <br />
                what&apos;s next
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 mt-4 leading-relaxed font-normal">
                AI opportunity assessment, technical co-founder advisory & architecture feasibility.
              </p>
            </motion.div>
          </div>

          {/* Center Card - Hero Featured Card with Authentic CIS Times Square Photo */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative min-h-[500px] sm:min-h-[580px] rounded-3xl overflow-hidden border border-neutral-300 p-8 sm:p-12 flex flex-col justify-between shadow-2xl group"
            >
              {/* Authentic Times Square Team Photo in Background */}
              <div className="absolute inset-0 -z-20">
                <Image
                  src="/cis-times-square.png"
                  alt="CIS Team at Times Square New York Billboard"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.7] contrast-[1.1]"
                />
              </div>

              {/* Gradient Scrim Overlay for Crystal-Clear Typography Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/70 -z-10" />

              {/* Top Badge */}
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-black/60 text-white border border-white/20 backdrop-blur-md">
                  CIS CORE SLOGAN & MISSION
                </span>
              </div>

              {/* Center Kinetic Headline + Slogan */}
              <div className="text-center my-auto py-6 space-y-4">
                <h2 className="text-3xl sm:text-5xl md:text-5xl font-normal text-white tracking-[-0.035em] leading-[1.1] drop-shadow-xl">
                  Think Big. <br />
                  <span className="text-[#f15a24]">We make IT, Possible!</span>
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-slate-200 font-light leading-relaxed max-w-md mx-auto drop-shadow-md">
                  On the mission to Enhance the lives of Billions of users through Profound technology solutions.
                </p>
              </div>

              {/* Bottom Pill CTA */}
              <div className="flex justify-center">
                <button
                  onClick={onOpenConsultation}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/40 bg-black/60 hover:bg-white hover:text-black text-white text-xs sm:text-sm font-bold transition-all duration-300 backdrop-blur-md cursor-pointer shadow-2xl active:scale-95"
                >
                  <span>Our approach</span>
                  <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center">
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Card 02 & Card 03 - Right & Bottom Floating */}
          <div className="lg:col-span-3 space-y-6 lg:mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#f8f9fa] border border-neutral-200/90 hover:border-neutral-900 hover:bg-white hover:shadow-2xl transition-all duration-300 shadow-md"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-bold font-mono text-neutral-900">02.</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066cc]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-normal text-neutral-950 tracking-[-0.035em] leading-tight">
                Creating <br />
                what&apos;s next
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 mt-4 leading-relaxed font-normal">
                Rapid 6–8 week MVP sprints, agentic AI workflows, and bespoke product engineering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#f8f9fa] border border-neutral-200/90 hover:border-neutral-900 hover:bg-white hover:shadow-2xl transition-all duration-300 shadow-md"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-bold font-mono text-neutral-900">03.</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-normal text-neutral-950 tracking-[-0.035em] leading-tight">
                Scaling <br />
                what&apos;s next
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 mt-4 leading-relaxed font-normal">
                CMMI Level 5 delivery governance, Kubernetes multi-cloud, and dedicated engineering pods.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
