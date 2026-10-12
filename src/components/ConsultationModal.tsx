"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Rocket,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrack?: "startup" | "enterprise" | "general";
}

export function ConsultationModal({
  isOpen,
  onClose,
  defaultTrack = "general",
}: ConsultationModalProps) {
  const [track, setTrack] = useState<"startup" | "enterprise">(
    defaultTrack === "enterprise" ? "enterprise" : "startup"
  );
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "AI & Autonomous Agents",
  ]);
  const [budget, setBudget] = useState<string>("$25k - $50k");
  const [timeline, setTimeline] = useState<string>("Within 1-2 Months");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectOverview: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00e5ff", "#f15a24", "#0066cc", "#10b981"],
      });
    } catch {}
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Smooth Dimming Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/75 backdrop-blur-md transition-all"
          />

          {/* Right Sliding Stylish Drawer Window */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="relative z-10 w-full max-w-2xl sm:max-w-3xl h-full overflow-y-auto bg-white text-neutral-900 shadow-2xl p-6 sm:p-10 md:p-12 flex flex-col justify-between font-sans no-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer z-20"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <div>
                {/* Header Badge & Title with Bigger Poppins Typography */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold bg-orange-50 text-[#f15a24] border border-orange-200/80">
                    <Sparkles className="w-4 h-4" /> Direct Technical Partner Access
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-500 font-mono hidden sm:inline">
                    • 24h Response Under NDA
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
                  Let&apos;s Build <span className="text-[#f15a24]">What&apos;s Next</span>
                </h2>
                <p className="text-neutral-600 text-base sm:text-lg mt-2 leading-relaxed font-normal">
                  Tell us about your product or enterprise initiative. Our solution architects will prepare a technical blueprint and feasibility review.
                </p>

                {/* Track Switcher */}
                <div className="grid grid-cols-2 gap-3 mt-8 p-1.5 bg-neutral-100 rounded-2xl border border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setTrack("startup")}
                    className={`flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm sm:text-base font-extrabold transition-all cursor-pointer ${
                      track === "startup"
                        ? "bg-[#f15a24] text-white shadow-lg shadow-orange-500/25"
                        : "text-neutral-600 hover:text-neutral-950 hover:bg-white/70"
                    }`}
                  >
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5" /> Startup / Tech Co-Founder
                  </button>
                  <button
                    type="button"
                    onClick={() => setTrack("enterprise")}
                    className={`flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm sm:text-base font-extrabold transition-all cursor-pointer ${
                      track === "enterprise"
                        ? "bg-[#0066cc] text-white shadow-lg shadow-blue-500/25"
                        : "text-neutral-600 hover:text-neutral-950 hover:bg-white/70"
                    }`}
                  >
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" /> Enterprise / Scale
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Capabilities Tags */}
                  <div>
                    <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-neutral-800 mb-3">
                      Select Capabilities You Need
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        "AI & Autonomous Agents",
                        "Full-Stack Web & Mobile",
                        "MVP 0-to-1 Accelerator",
                        "Cloud & DevOps Architecture",
                        "Legacy Monolith Modernization",
                        "UI/UX Product Design",
                        "Dedicated Engineering Squad",
                      ].map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`text-xs sm:text-sm px-4 py-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                              isSelected
                                ? "bg-orange-500/15 text-[#f15a24] border-orange-500/50 shadow-sm"
                                : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100"
                            }`}
                          >
                            {isSelected && "✓ "}
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-neutral-800 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Connor"
                        className="w-full px-5 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-950 placeholder-neutral-400 text-sm sm:text-base focus:bg-white focus:outline-none focus:border-[#f15a24] focus:ring-2 focus:ring-[#f15a24]/15 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-neutral-800 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-5 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-950 placeholder-neutral-400 text-sm sm:text-base focus:bg-white focus:outline-none focus:border-[#f15a24] focus:ring-2 focus:ring-[#f15a24]/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company, Budget, and Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-neutral-800 uppercase tracking-wider mb-2">
                        Company / Venture
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. NextGen AI"
                        className="w-full px-5 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-950 placeholder-neutral-400 text-sm sm:text-base focus:bg-white focus:outline-none focus:border-[#f15a24] focus:ring-2 focus:ring-[#f15a24]/15 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-neutral-800 uppercase tracking-wider mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-950 text-sm sm:text-base focus:bg-white focus:outline-none focus:border-[#f15a24] focus:ring-2 focus:ring-[#f15a24]/15 transition-all"
                      >
                        <option>$10k - $25k (Pilot / Discovery)</option>
                        <option>$25k - $50k (MVP Sprint)</option>
                        <option>$50k - $150k (Full Product Launch)</option>
                        <option>$150k+ (Enterprise Scale)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-neutral-800 uppercase tracking-wider mb-2">
                        Target Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-950 text-sm sm:text-base focus:bg-white focus:outline-none focus:border-[#f15a24] focus:ring-2 focus:ring-[#f15a24]/15 transition-all"
                      >
                        <option>Immediate / ASAP</option>
                        <option>Within 1-2 Months</option>
                        <option>Quarterly Planning</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-neutral-800 uppercase tracking-wider mb-2">
                      Project Vision or Technical Goal
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectOverview}
                      onChange={(e) =>
                        setFormData({ ...formData, projectOverview: e.target.value })
                      }
                      placeholder="Describe your product idea, architecture requirements, or modernization goal..."
                      className="w-full px-5 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-950 placeholder-neutral-400 text-sm sm:text-base focus:bg-white focus:outline-none focus:border-[#f15a24] focus:ring-2 focus:ring-[#f15a24]/15 transition-all resize-none"
                    />
                  </div>

                  {/* Trust line */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-xs sm:text-sm text-neutral-500">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066cc]" />
                      <span className="font-semibold">Protected by Mutual NDA</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 font-semibold text-neutral-600">
                      <Zap className="w-4 h-4 text-[#f15a24]" /> CMMI Level 5 Quality
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 sm:py-4.5 px-8 rounded-full font-black text-white bg-[#f15a24] hover:bg-[#ff6834] transition-all shadow-xl shadow-orange-500/25 flex items-center justify-center gap-3 text-base sm:text-lg cursor-pointer active:scale-[0.99]"
                  >
                    <span>Request Technical Blueprint & Proposal</span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-16 px-4 my-auto">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-neutral-950">
                  Brief Received & Assigned to Solution Squad
                </h3>
                <p className="text-neutral-600 max-w-md mx-auto mt-4 text-base leading-relaxed">
                  Thank you, <strong className="text-neutral-900">{formData.name || "partner"}</strong>. A senior CIS Principal Architect is reviewing your requirements. We will connect within 24 business hours.
                </p>
                <div className="mt-8 p-6 rounded-3xl bg-neutral-50 border border-neutral-200 text-left max-w-md mx-auto text-sm space-y-2 text-neutral-700">
                  <p><strong>Track:</strong> {track === "startup" ? "Startup Technical Partner" : "Enterprise Transformation"}</p>
                  <p><strong>Timeline:</strong> {timeline}</p>
                  <p><strong>Selected Focus:</strong> {selectedServices.join(", ")}</p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-8 px-10 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-base font-extrabold transition-all cursor-pointer shadow-lg"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
