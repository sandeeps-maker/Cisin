"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Play, X, Sparkles } from "lucide-react";

interface ExpertAdviceVideoSectionProps {
  onOpenConsultation: () => void;
}

export function ExpertAdviceVideoSection({
  onOpenConsultation,
}: ExpertAdviceVideoSectionProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-white text-neutral-900 select-none overflow-hidden pt-20 sm:pt-28">
      {/* Top Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Eyebrow + Headline + CTA Buttons */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#f15a24]">
              <span className="w-2 h-2 rounded-full bg-[#f15a24] animate-pulse" />
              <span className="uppercase tracking-wider">Strategy & Advisory</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-950 tracking-[-0.035em] leading-[1.08] font-sans">
              Get <span className="text-[#f15a24] font-medium">Expert Advice</span> on <br className="hidden sm:block" />
              your technology journey.
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-3.5 rounded-full bg-[#f15a24] hover:bg-[#ff6834] text-white text-sm sm:text-base font-bold transition-all shadow-lg shadow-orange-500/25 active:scale-95 cursor-pointer"
              >
                Connect us
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-neutral-800 hover:text-[#f15a24] text-sm sm:text-base font-semibold transition-colors cursor-pointer group"
              >
                <span>View more</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Subtitle Description */}
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed font-sans">
              Accelerate your digital evolution with vetted technology advisory, AI architecture feasibility, and battle-tested engineering teams. We believe in empowering our clients to make informed, future-proof decisions about their software and technology investments.
            </p>
          </div>
        </div>
      </div>

      {/* Video Showcase Card with Orange Split Bottom Background */}
      <div className="relative pt-4 sm:pt-8 pb-20 sm:pb-28">
        {/* Bottom Half Orange Split Background (replacing the blue in reference) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-[#f15a24] via-[#ff6128] to-[#ea580c] z-0">
          {/* Subtle wave light pattern */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        {/* Overlapping Prominent Video Card Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setVideoModalOpen(true)}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl sm:rounded-[36px] overflow-hidden shadow-2xl border-4 sm:border-8 border-white/95 bg-neutral-900 cursor-pointer group"
          >
            {/* Video Image Asset Provided by User */}
            <Image
              src="/cis-success-story-video.png"
              alt="CIS Story - Real-Life Success Story"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />

            {/* Centered Circular Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white/30 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-[#f15a24] group-hover:border-[#f15a24] transition-all duration-300">
                <Play className="w-7 h-7 sm:w-10 sm:h-10 text-white fill-white translate-x-1" />
              </div>
            </div>

            {/* Subtle Glass Rim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Video Modal Display */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVideoModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative z-10 w-full max-w-4xl bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-[#f15a24] transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player Display */}
              <div className="relative aspect-[16/9] w-full bg-black">
                <Image
                  src="/cis-success-story-video.png"
                  alt="CIS Success Story"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white space-y-2">
                  <span className="text-xs font-mono font-bold text-[#f15a24] uppercase tracking-wider">
                    CIS CLIENT SUCCESS STORY
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold">
                    How CISIN&apos;s Engineering Strategy Scaled Growth for Global Clients
                  </h4>
                  <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                    Watch our engineering and leadership team break down how we turn ambitious technical challenges into production-scale market winners.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
