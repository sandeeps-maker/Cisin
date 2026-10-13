"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TransformCTASectionProps {
  onOpenConsultation: () => void;
}

export function TransformCTASection({ onOpenConsultation }: TransformCTASectionProps) {
  return (
    <section className="relative bg-white text-neutral-900 overflow-hidden border-t border-neutral-100 select-none py-16 sm:py-24 lg:py-28 flex justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center justify-between">
          {/* Left Column: Typography & Button */}
          <div className="lg:col-span-6 space-y-5 max-w-xl">
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
              {/* Button matching Screenshot 2: Clean dark pill with "Let's talk →" */}
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
              >
                <span>Let&apos;s talk</span>
                <span className="transition-transform group-hover:translate-x-1 duration-300">
                  →
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Prominent Pointing Woman Image */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[340px] sm:min-h-[420px]">
            {/* Luminous Warm Background Glow Circles */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none">
              <div className="w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-[#f15a24]/18 via-[#f59e0b]/22 to-[#fbbf24]/18 blur-3xl opacity-80" />
            </div>

            {/* Decorative Minimal Floating Ring Accent */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 rounded-full border border-orange-200/50 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />

            {/* Pointing Woman Cut-out: Permanently visible (never hides) with smooth subtle float */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, 4, 0],
                rotate: [0, 0.8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[580px] aspect-[500/350] flex items-center justify-center cursor-pointer group"
              onClick={onOpenConsultation}
            >
              <Image
                src="/indian-girl-pointing.png"
                alt="Ready to Transform Your IT Infrastructure"
                fill
                sizes="(max-width: 768px) 480px, 580px"
                className="object-contain object-center filter drop-shadow-[0_25px_40px_rgba(241,90,36,0.22)] group-hover:scale-105 transition-transform duration-500 ease-out"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
