"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CIS_METRICS } from "@/data/cisContent";

function CounterItem({
  item,
}: {
  item: (typeof CIS_METRICS)[0];
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = item.value;
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * end);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, item.value]);

  return (
    <div ref={ref} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 text-center relative overflow-hidden bg-[#081224]/80 group hover:border-[#00e5ff]/30 transition-all">
      <div className="text-3xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight text-white group-hover:text-gradient-cyan transition-all">
        {item.prefix || ""}
        {count.toLocaleString()}
        {item.suffix || ""}
      </div>
      <h3 className="text-sm sm:text-base font-bold text-white mt-3">
        {item.label}
      </h3>
      <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">
        {item.subtext}
      </p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#050b18] overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/15 text-slate-300 mb-3"
          >
            <span>SECTION 12 • CIS BY THE NUMBERS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Proven at global scale.
          </motion.h2>
        </div>

        {/* 4 Large Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CIS_METRICS.map((metric, idx) => (
            <CounterItem key={idx} item={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
