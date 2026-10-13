"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface FAQSectionProps {
  onOpenConsultation?: () => void;
}

interface FAQItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "digital-engineering-transformation",
    num: "[1]",
    question: "What is digital product engineering and how does it drive business transformation?",
    answer:
      "Digital product engineering is the comprehensive practice of conceptualizing, designing, building, and continuously evolving scalable software systems. Unlike traditional IT maintenance, product engineering centers on user-focused innovation, modern microservices architectures, cloud-native scalability, and rapid continuous delivery to drive measurable ROI and market leadership.",
  },
  {
    id: "product-discovery-mvp",
    num: "[2]",
    question: "How does CIS approach end-to-end product discovery and MVP development?",
    answer:
      "We begin every engagement with intensive Product Discovery sprints to de-risk investments and validate user journeys, technical feasibility, and market demand. Our architects deliver interactive Figma prototypes, technical PRD blueprints, and prioritized MVP roadmaps, allowing startups and enterprises to launch market-ready products within 8 to 12 weeks.",
  },
  {
    id: "scale-digital-products",
    num: "[3]",
    question: "How can existing digital products be scaled effectively?",
    answer:
      "Scaling existing software requires a multi-tier architectural approach: decomposing legacy monoliths into containerized microservices (Docker/Kubernetes), implementing horizontal cloud auto-scaling, optimizing database queries and caching layers (Redis), and establishing automated CI/CD pipelines to support millions of concurrent users without service degradation.",
  },
  {
    id: "strategic-technology-partners",
    num: "[4]",
    question: "Who are CIS's strategic technology partners?",
    answer:
      "CIS maintains Tier-1 strategic enterprise partnerships with global technology leaders including Microsoft (Gold Certified Partner), Amazon Web Services (AWS Advanced Tier), Google Cloud Platform (GCP), and leading AI ecosystem providers. These alliances grant our clients validated architectural frameworks, dedicated tier-3 cloud support, and exclusive infrastructure benefits.",
  },
  {
    id: "security-quality-compliance",
    num: "[5]",
    question: "How is software security, quality, and compliance ensured during development?",
    answer:
      "As a CMMI Level 5 and ISO 27001 accredited organization, security and quality are embedded into every sprint of our SDLC. We enforce automated SonarQube static code analysis, OWASP Top 10 vulnerability scans, automated regression testing (Playwright/Cypress), strict role-based access control (RBAC), and rigorous end-to-end data encryption.",
  },
  {
    id: "cost-timeline-enterprise",
    num: "[6]",
    question: "What is the average cost and timeline for building an enterprise-grade digital product engineering?",
    answer:
      "Project costs and timelines reflect functional scope, architectural complexity, and compliance requirements. Rapid MVPs generally range from 8 to 12 weeks ($25,000–$50,000). Full-scale enterprise platforms with distributed backends, AI models, and multi-tenant architectures typically span 3 to 6 months ($60,000–$150,000+), backed by guaranteed milestone-based acceptance.",
  },
  {
    id: "compare-digital-engineering",
    num: "[7]",
    question: "How does CIS compare with other digital product engineering companies?",
    answer:
      "With over 20+ years of engineering excellence, 5,000+ shipped digital solutions, CMMI Level 5 maturity, and an in-house squad of 1,000+ vetted engineers, CIS pairs Silicon Valley architecture standards with up to 60% offshore cost efficiency. We guarantee 100% intellectual property (IP) transfer, zero vendor lock-in, and full source code ownership.",
  },
  {
    id: "dedicated-developers-augmentation",
    num: "[8]",
    question: "Can dedicated developers or team augmentation be hired for a project?",
    answer:
      "Yes. In addition to turnkey fixed-scope projects, we offer Dedicated Engineering Squads and Staff Augmentation models. You can onboard pre-vetted senior software engineers, solution architects, UI/UX designers, and QA specialists within 48 to 72 hours, fully aligned to your time zone and managed directly through your internal sprint workflows.",
  },
  {
    id: "slas-post-launch-support",
    num: "[9]",
    question: "Are SLAs and 24/7 post-launch support available at CIS?",
    answer:
      "Yes. Every production deployment is supported by comprehensive Service Level Agreements (SLAs). We offer tiered 24/7 L1–L3 production monitoring, automated uptime alerts, preventative security patching, cloud performance optimization, and dedicated on-call engineering squads to guarantee uninterrupted business continuity.",
  },
];

export function FAQSection({ onOpenConsultation }: FAQSectionProps) {
  // FAQ Accordion State (defaults to question 3 open as in reference screenshot)
  const [openId, setOpenId] = useState<string | null>("scale-digital-products");

  // Consultation Form State matching the reference screenshot
  const [formData, setFormData] = useState({
    projectDetail: "",
    fullName: "",
    workEmail: "",
    mobileNumber: "",
    captchaAnswer: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.captchaAnswer.trim() !== "8") {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="faq-contact-section"
      className="relative py-16 sm:py-24 bg-[#08090c] text-white overflow-hidden select-none border-t border-white/5"
    >
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-[#f15a24]/15 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-[550px] h-[550px] bg-[#ea580c]/12 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-Column Side-by-Side: Consultation Form (Left) & FAQ Accordion (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          {/* ── LEFT COLUMN: High-Converting Orange Consultation Form Card ── */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="w-full h-full bg-gradient-to-br from-[#f15a24] via-[#ea580c] to-[#c2410c] rounded-3xl p-6 sm:p-8 lg:p-9 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-orange-400/40">
              {/* Subtle Ambient Radial Highlights */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/25 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header from Screenshot */}
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-white font-sans leading-tight">
                  Request A Free Consultation
                </h3>

                {/* Subtitle / Value Propositions from Screenshot */}
                <p className="text-xs sm:text-sm font-bold text-amber-100 tracking-tight mt-2">
                  Transform Your Team In 48 Hours — Get Results, Or Free Replacement!
                </p>
                <p className="text-[11px] sm:text-xs text-white/90 mt-1 leading-relaxed font-normal">
                  Gain Exclusive Access To <strong>Top-Tier Talent</strong>, Tailored To Your Needs. Enjoy A <strong>Risk-Free Trial</strong> And Expert Guidance To Kickstart Your Success <strong>Today!</strong>
                </p>

                {/* Question / Tab Section with Orange Active Accent Line */}
                <div className="mt-4 pt-3 border-t border-white/20">
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    How can we help you today?
                  </span>
                  <div className="h-[2.5px] w-14 bg-white rounded-full mt-1" />
                </div>

                {/* Form Body */}
                {isSubmitted ? (
                  <div className="my-10 p-6 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-300 mx-auto" />
                    <h4 className="text-lg font-bold text-white">Consultation Request Received!</h4>
                    <p className="text-xs text-white/90 leading-relaxed">
                      Thank you! One of our senior solutions architects will connect with you within 48 hours for your free assessment and risk-free trial.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-2 px-5 py-2 rounded-full bg-white text-[#ea580c] text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="mt-4 space-y-3.5">
                    {/* Top Multiline Field */}
                    <div>
                      <textarea
                        rows={3}
                        required
                        placeholder="Free consultation first. Paid projects usually start from $10,000. Please share enough detail so we can assess fit and respond quickly. *"
                        value={formData.projectDetail}
                        onChange={(e) => setFormData({ ...formData, projectDetail: e.target.value })}
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-[13px] rounded-xl p-3 sm:p-3.5 border border-orange-200/60 focus:outline-none focus:ring-2 focus:ring-white shadow-sm resize-none"
                      />
                    </div>

                    {/* 2-Column Row: Full Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your full name (e.g., John Doe) *"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-[13px] rounded-xl px-3.5 py-2.5 border border-orange-200/60 focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Your Work Email (e.g., name@company.com) *"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          className="w-full bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-[13px] rounded-xl px-3.5 py-2.5 border border-orange-200/60 focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Mobile Number Field */}
                    <div>
                      <input
                        type="tel"
                        placeholder="Your Mobile Number (e.g., +1 452 XXX YYYY)"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-[13px] rounded-xl px-3.5 py-2.5 border border-orange-200/60 focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
                      />
                    </div>

                    {/* Fast Response & NDA Banner */}
                    <div className="rounded-xl bg-black/20 backdrop-blur-sm border border-white/20 px-3.5 py-2 flex items-center gap-2 text-xs text-white font-medium">
                      <ShieldCheck className="w-4 h-4 text-amber-200 shrink-0" />
                      <span>Fast 2-minute response • Fully NDA-protected • Zero commitment</span>
                    </div>

                    {/* Bottom Row: Captcha & Red-Crimson Submit Button from Screenshot */}
                    <div className="flex items-center justify-between pt-2 gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-white font-mono">3 + 5 =</span>
                        <input
                          type="text"
                          required
                          placeholder=""
                          value={formData.captchaAnswer}
                          onChange={(e) => {
                            setFormData({ ...formData, captchaAnswer: e.target.value });
                            setCaptchaError(false);
                          }}
                          className={`w-12 h-9 rounded-lg bg-white text-slate-900 font-mono font-bold text-sm text-center border focus:outline-none shadow-sm ${
                            captchaError ? "border-red-400 ring-2 ring-red-400" : "border-white"
                          }`}
                        />
                        {captchaError && (
                          <span className="text-[10px] text-amber-200 font-mono font-bold">Enter 8</span>
                        )}
                      </div>

                      {/* Submit Request → Button Styled as Screenshot */}
                      <button
                        type="submit"
                        className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-[#8c1d1d] hover:bg-[#a62222] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer border border-white/25 flex items-center gap-2 shrink-0"
                      >
                        <span>Submit Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Clean White Accordion FAQ Card ── */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="w-full h-full bg-white text-slate-900 rounded-3xl p-5 sm:p-7 lg:p-8 shadow-2xl border border-slate-200/90 flex flex-col justify-between">
              {/* Scrollable Accordion Container */}
              <div className="divide-y divide-slate-100 overflow-y-auto max-h-[610px] pr-1 sm:pr-2">
                {FAQ_ITEMS.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <div key={item.id} className="transition-colors">
                      <button
                        type="button"
                        onClick={() => toggleFAQ(item.id)}
                        className="w-full py-4 sm:py-4.5 flex items-start justify-between gap-3 sm:gap-4 text-left group cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start gap-3 sm:gap-3.5 min-w-0">
                          {/* Number Badge [1], [2], [3] */}
                          <span className="text-xs sm:text-sm font-mono font-bold text-slate-400 group-hover:text-[#f15a24] transition-colors shrink-0 mt-0.5">
                            {item.num}
                          </span>
                          {/* Question Text */}
                          <h4 className="text-xs sm:text-sm md:text-[15px] font-semibold text-slate-900 group-hover:text-[#f15a24] transition-colors leading-snug">
                            {item.question}
                          </h4>
                        </div>

                        {/* Chevron Indicator */}
                        <div className="shrink-0 mt-0.5 ml-2 text-slate-400 group-hover:text-slate-700 transition-colors">
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-[#f15a24]" : ""
                            }`}
                          />
                        </div>
                      </button>

                      {/* Expandable Answer */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-7 sm:pl-8 pr-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Subtle Trust Note */}
              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Enterprise Architecture &amp; CMMI Level 5 SLA</span>
                <span>CIS Tech Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
