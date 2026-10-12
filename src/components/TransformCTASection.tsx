"use client";

import React from "react";
import { motion } from "framer-motion";

interface TransformCTASectionProps {
  onOpenConsultation: () => void;
}

export function TransformCTASection({ onOpenConsultation }: TransformCTASectionProps) {
  return (
    <section className="relative bg-white text-neutral-900 overflow-hidden border-t border-neutral-100 select-none py-16 sm:py-24 lg:py-28 flex justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center justify-center">
          {/* Left Column: Typography & Button */}
          <div className="lg:col-span-7 space-y-5 max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 tracking-[-0.035em] leading-[1.12] font-sans"
            >
              Ready to Transform <br className="hidden sm:block" />
              Your IT Infrastructure?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-neutral-600 font-normal font-sans"
            >
              Take Control of Your Technology Today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-2"
            >
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-neutral-950 hover:bg-[#f15a24] text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-orange-500/20 active:scale-95 cursor-pointer"
              >
                <span>Let&apos;s talk</span>
                <span className="transition-transform group-hover:translate-x-1 duration-300">
                  →
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Luminous Overlapping Glass Spheres */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[240px] sm:min-h-[280px]">
            {/* Ambient Background Aura in CIS Brand Orange */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-tr from-[#f15a24]/30 via-[#fb923c]/35 to-[#fbbf24]/25 blur-3xl opacity-80" />
            </div>

            {/* Overlapping Glassmorphic Circles */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Circle 1: Left Translucent Gradient Sphere */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-2 sm:left-6 w-44 sm:w-56 h-44 sm:h-56 rounded-full bg-gradient-to-br from-[#fed7aa]/80 via-[#fdba74]/60 to-[#f97316]/40 backdrop-blur-md border border-white/60 shadow-xl"
              />

              {/* Circle 2: Right Overlapping Glass Lens Sphere */}
              <motion.div
                animate={{
                  y: [0, 6, 0],
                  scale: [1, 0.98, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-2 sm:right-6 w-48 sm:w-60 h-48 sm:h-60 rounded-full bg-gradient-to-tl from-[#ffedd5]/70 via-[#fed7aa]/50 to-transparent backdrop-blur-lg border border-[#f97316]/30 shadow-2xl flex items-center justify-center"
              >
                {/* Inner Concentric Glow Ring */}
                <div className="w-36 sm:w-44 h-36 sm:h-44 rounded-full border border-orange-300/40 bg-white/10" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
