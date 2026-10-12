"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Sparkles, Phone, ShieldCheck, Clock, Zap, Users, Code, Cpu, Layers, CheckCircle2 } from "lucide-react";

interface WonderfulTeamSectionProps {
  onOpenConsultation: (track?: "startup" | "enterprise" | "general") => void;
}

interface TeamRole {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  shape: string;
  accentColor: string;
  bgGlow: string;
  availableCount: number;
  timeToStaff: string;
  matchRate: string;
  description: string;
  skills: string[];
  capabilities: string[];
}

const TEAM_ROLES: TeamRole[] = [
  {
    id: "devs",
    title: "Software developers",
    subtitle: "Full-Stack, Cloud & Systems Engineers",
    image: "/team-dev.png",
    shape: "Wedge Circle",
    accentColor: "#f15a24",
    bgGlow: "rgba(241, 90, 36, 0.15)",
    availableCount: 42,
    timeToStaff: "48 Hours",
    matchRate: "Top 1% Vetted",
    description:
      "Senior architects and software developers specializing in modern web, microservices, cloud infra, and enterprise AI integrations with full IP protection.",
    skills: ["React / Next.js", "Python / FastAPI", "Node.js / TypeScript", "Golang", "AWS / GCP", "Docker / Kubernetes", "PostgreSQL", "GraphQL"],
    capabilities: ["Full-Stack Architecture", "High-Throughput Microservices", "CI/CD & DevOps Automation", "AI Model API Integrations"],
  },
  {
    id: "qa",
    title: "QA engineers",
    subtitle: "Automated & Performance Quality Engineers",
    image: "/team-qa.png",
    shape: "Blue Square",
    accentColor: "#3b82f6",
    bgGlow: "rgba(59, 130, 246, 0.15)",
    availableCount: 24,
    timeToStaff: "48 Hours",
    matchRate: "99.9% Bug-Free",
    description:
      "Full-lifecycle QA engineers building robust automated test suites, end-to-end regression pipelines, and high-load security stress testing.",
    skills: ["Playwright", "Cypress", "Selenium", "Jest / Vitest", "JMeter", "Postman", "CI/CD Test Pipelines", "Security & OWASP"],
    capabilities: ["Automated E2E Testing", "Load & Stress Validation", "Regression Pipeline Setup", "API & Performance Audits"],
  },
  {
    id: "ux",
    title: "UX designers",
    subtitle: "Product Designers & Design System Leads",
    image: "/team-ux.png",
    shape: "Coral Circle",
    accentColor: "#f43f5e",
    bgGlow: "rgba(244, 63, 94, 0.15)",
    availableCount: 18,
    timeToStaff: "72 Hours",
    matchRate: "Pixel-Perfect",
    description:
      "Design leaders who craft intuitive user journeys, high-converting product interfaces, and scalable multi-brand design systems in Figma.",
    skills: ["Figma & FigJam", "Design Systems", "User Journey Mapping", "Interactive Prototypes", "Design Tokens", "WCAG 2.1 AA", "Storybook"],
    capabilities: ["End-to-End UX Research", "Enterprise UI Design Systems", "Interactive SaaS Prototyping", "Design-to-Code Handoff"],
  },
  {
    id: "data",
    title: "Data scientists",
    subtitle: "AI, LLM & Machine Learning Specialists",
    image: "/team-data.png",
    shape: "Yellow Triangle",
    accentColor: "#eab308",
    bgGlow: "rgba(234, 179, 8, 0.15)",
    availableCount: 16,
    timeToStaff: "48 Hours",
    matchRate: "PhD & MSc Leads",
    description:
      "AI practitioners and data scientists creating production RAG systems, autonomous multi-agent pipelines, fine-tuned models, and real-time big data pipelines.",
    skills: ["PyTorch / TensorFlow", "LangChain / LangGraph", "Vector DBs (Pinecone, pgvector)", "OpenAI / Claude / Llama", "BigQuery / Snowflake", "Python"],
    capabilities: ["Enterprise RAG Pipelines", "Autonomous Multi-Agent Workflows", "Predictive Analytics Models", "Custom LLM Fine-Tuning"],
  },
  {
    id: "pm",
    title: "Project managers",
    subtitle: "Certified Scrum Masters & Delivery Leads",
    image: "/team-pm.png",
    shape: "Teal Arch",
    accentColor: "#14b8a6",
    bgGlow: "rgba(20, 184, 166, 0.15)",
    availableCount: 19,
    timeToStaff: "24 Hours",
    matchRate: "Certified CSM / PMP",
    description:
      "Agile leaders who manage sprint velocity, synchronize distributed teams in real-time, eliminate blockers, and guarantee on-time delivery.",
    skills: ["Agile / Scrum / Kanban", "Jira & Confluence", "Sprint Velocity Tracking", "Risk Mitigation", "Stakeholder Communication", "Linear / Asana"],
    capabilities: ["Cross-Functional Pod Leadership", "Transparent Weekly Sprint Cadence", "Real-Time Timezone Overlap", "Resource & Budget Optimization"],
  },
];

const VALUE_PROPS = [
  {
    title: "The right people",
    text: "Our rigorous hiring process ensures only skilled, AI-fluent candidates make it through.",
  },
  {
    title: "The right team",
    text: "From a single engineer to multiple pods, structured however your work demands.",
  },
  {
    title: "The right place",
    text: "Our nearshore teams are online when you are. Clear communication in English.",
  },
  {
    title: "The right time",
    text: "Teams that start when you need them. Scale up or down with ease.",
  },
];

export function WonderfulTeamSection({ onOpenConsultation }: WonderfulTeamSectionProps) {
  const [selectedRole, setSelectedRole] = useState<TeamRole>(TEAM_ROLES[0]);
  const [hoveredRoleId, setHoveredRoleId] = useState<string | null>(null);

  const activeRole = TEAM_ROLES.find((r) => r.id === hoveredRoleId) || selectedRole;

  return (
    <section className="relative w-full py-24 sm:py-32 bg-white text-neutral-900 overflow-hidden select-none border-b border-neutral-100">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-neutral-50 to-transparent pointer-events-none" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: activeRole.accentColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header: BairesDev Exact Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-neutral-950 leading-[1.12]"
          >
            No need to wonder. <br />
            Working with us is wonderful<span className="text-[#f15a24]">.</span>
          </motion.h2>
        </div>

        {/* 4 Value Checkmarks Grid (Exact match with reference screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 sm:gap-x-16 gap-y-8 sm:gap-y-10 max-w-4xl mx-auto mb-20 sm:mb-24"
        >
          {VALUE_PROPS.map((prop, idx) => (
            <div key={idx} className="flex items-start gap-3.5">
              {/* Orange Square Checkmark matching reference */}
              <div className="w-5 h-5 rounded-xs bg-[#f15a24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {prop.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 5 Team Member Role Avatars with Geometric Backgrounds */}
        <div className="relative mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-end justify-center">
            {TEAM_ROLES.map((role) => {
              const isCurrent = activeRole.id === role.id;
              return (
                <div
                  key={role.id}
                  onClick={() => setSelectedRole(role)}
                  onMouseEnter={() => setHoveredRoleId(role.id)}
                  onMouseLeave={() => setHoveredRoleId(null)}
                  className="group flex flex-col items-center cursor-pointer transition-all duration-300"
                >
                  {/* Portrait Avatar with Geometric Graphic */}
                  <div className="relative w-full max-w-[160px] sm:max-w-[175px] h-[175px] sm:h-[190px] flex items-end justify-center">
                    <motion.div
                      animate={{
                        y: isCurrent ? -8 : 0,
                        scale: isCurrent ? 1.05 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="relative w-full h-full flex items-end justify-center"
                    >
                      <Image
                        src={role.image}
                        alt={role.title}
                        width={200}
                        height={200}
                        priority
                        className={`w-full h-full object-contain object-bottom transition-all duration-300 ${
                          isCurrent ? "drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]" : "opacity-90 group-hover:opacity-100"
                        }`}
                      />
                    </motion.div>

                    {/* Active Bottom Glow Indicator */}
                    {isCurrent && (
                      <motion.div
                        layoutId="activeRoleGlow"
                        className="absolute -bottom-2 w-12 h-1 rounded-full bg-[#f15a24]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </div>

                  {/* Role Title Under Avatar (Exact match with reference) */}
                  <div className="mt-4 text-center">
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors duration-200 block ${
                        isCurrent
                          ? "text-[#f15a24]"
                          : "text-neutral-700 group-hover:text-neutral-950"
                      }`}
                    >
                      {role.title}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400 block mt-0.5">
                      {role.availableCount} engineers ready
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive BairesDev-Style Talent Deep Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-8 rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-200/90 shadow-[0_15px_45px_rgba(0,0,0,0.06)] bg-white relative overflow-hidden"
          >
            {/* Top Border Accent Line */}
            <div
              className="absolute top-0 inset-x-0 h-1.5 transition-colors duration-300"
              style={{ backgroundColor: activeRole.accentColor }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Role Details, Description & Stats */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-xs"
                    style={{ backgroundColor: activeRole.accentColor }}
                  >
                    {activeRole.title}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {activeRole.availableCount} Available for Immediate Pod
                  </span>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">
                    {activeRole.subtitle}
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {activeRole.description}
                  </p>
                </div>

                {/* Core Stack Pills */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                    Core Tech Stack & Tools:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeRole.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 text-xs font-medium transition-colors border border-neutral-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {activeRole.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-[#f15a24] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Speed-to-Hire Box + Direct Action Buttons */}
              <div className="lg:col-span-5 bg-neutral-50 rounded-2xl p-6 border border-neutral-200/80 space-y-5">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-neutral-200">
                  <div>
                    <span className="text-xs font-mono text-neutral-500 block">Time-to-Staff</span>
                    <span className="text-lg sm:text-xl font-black text-neutral-950 block mt-0.5">
                      ⚡ {activeRole.timeToStaff}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-500 block">Talent Caliber</span>
                    <span className="text-lg sm:text-xl font-black text-[#f15a24] block mt-0.5">
                      🏆 {activeRole.matchRate}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#f15a24]" />
                    <span>Same-timezone real-time collaboration (US & Global)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>2-Week Risk-Free Trial with full IP protection</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => onOpenConsultation("general")}
                    className="w-full py-3.5 px-5 rounded-xl bg-[#f15a24] hover:bg-[#ff6834] text-white font-bold text-sm transition-all shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                  >
                    <span>Hire {activeRole.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+14358000086"
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#f15a24]" />
                    <span>Speak with Sales: +1-435-800-0086</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
