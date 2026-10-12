"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Lock,
  Users,
  Cloud,
  CheckCircle2,
} from "lucide-react";
import { TRUST_CREDENTIALS } from "@/data/cisContent";

export function TrustSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#040814] overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0066cc]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20 mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SECTION 13 • GLOBAL CREDIBILITY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Institutional trust & engineering discipline.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-400 mt-4 font-light"
          >
            Operating with verified global certifications that guarantee data privacy, bank-grade information security, and predictable software delivery.
          </motion.p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TRUST_CREDENTIALS.map((cred, idx) => (
            <motion.div
              key={cred.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between bg-[#081224]/90"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <span className="text-xs font-mono font-black text-[#00e5ff]">
                    {cred.code}
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {cred.badge}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white leading-snug">
                  {cred.title}
                </h3>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  {cred.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified Compliance</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
