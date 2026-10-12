"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Cpu,
  Cloud,
  Workflow,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  accentBg: string;
  details: string;
  capabilities: string[];
}

const ECOSYSTEM_NODES: NodeItem[] = [
  {
    id: "ai",
    name: "AI",
    subtitle: "Intelligence Core",
    icon: <Brain className="w-5 h-5" />,
    color: "#00e5ff",
    accentBg: "rgba(0, 229, 255, 0.12)",
    details:
      "Autonomous agents, custom-trained LLMs, domain-specific RAG pipelines, and vision models embedded into core logic.",
    capabilities: ["Agentic Multi-Step Reasoning", "Enterprise RAG & Vector Indexing", "Edge Model Quantization"],
  },
  {
    id: "data",
    name: "DATA",
    subtitle: "Real-Time Pipeline",
    icon: <Database className="w-5 h-5" />,
    color: "#60a5fa",
    accentBg: "rgba(96, 165, 250, 0.12)",
    details:
      "High-throughput data ingestion, lakehouse architectures, and automated feature stores that feed live inference loops.",
    capabilities: ["Kafka & Flink Streaming", "Snowflake & Databricks Lakes", "Automated Data Quality & Lineage"],
  },
  {
    id: "product",
    name: "PRODUCT",
    subtitle: "Scalable Architecture",
    icon: <Cpu className="w-5 h-5" />,
    color: "#f15a24",
    accentBg: "rgba(241, 90, 36, 0.12)",
    details:
      "Engineered for high concurrency, sub-second latency, and frictionless user conversion from day zero.",
    capabilities: ["Multi-Tenant SaaS Backends", "Modern Next.js / Mobile Frontend", "Modular Microservices"],
  },
  {
    id: "cloud",
    name: "CLOUD",
    subtitle: "Resilient Infrastructure",
    icon: <Cloud className="w-5 h-5" />,
    color: "#38bdf8",
    accentBg: "rgba(56, 189, 248, 0.12)",
    details:
      "Multi-cloud Kubernetes clusters, automated zero-downtime CI/CD, and global edge delivery networks.",
    capabilities: ["AWS & Azure Well-Architected", "Terraform Infrastructure as Code", "99.99% Uptime SLA"],
  },
  {
    id: "automation",
    name: "AUTOMATION",
    subtitle: "Workflow Orchestration",
    icon: <Workflow className="w-5 h-5" />,
    color: "#a855f7",
    accentBg: "rgba(168, 85, 247, 0.12)",
    details:
      "Eliminate repetitive human overhead through autonomous tool-calling agents and end-to-end event triggers.",
    capabilities: ["Self-Healing Pipelines", "Intelligent Document Processing", "API Event Mesh Automation"],
  },
  {
    id: "experience",
    name: "EXPERIENCE",
    subtitle: "Human Interface",
    icon: <Sparkles className="w-5 h-5" />,
    color: "#34d399",
    accentBg: "rgba(52, 211, 153, 0.12)",
    details:
      "Ultra-responsive UI/UX, micro-interactions, and accessible design systems that make complex AI feel natural.",
    capabilities: ["Conversion-Optimized UX", "Design Tokens & WCAG AA", "Fluid Micro-Interactions"],
  },
];

export function AIPositioningSection() {
  const [activeNode, setActiveNode] = useState<NodeItem>(ECOSYSTEM_NODES[0]);

  return (
    <section className="relative py-24 sm:py-32 bg-[#050b18] overflow-hidden border-t border-b border-white/10">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0066cc]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#f15a24]/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20 mb-4"
          >
            <span>SECTION 02</span>
            <span>•</span>
            <span>THE PARADIGM SHIFT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            AI is changing how products are built.{" "}
            <span className="text-gradient-cyan block mt-1">
              We help you build for that future.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 font-light mt-5 leading-relaxed max-w-3xl"
          >
            CIS combines AI, product engineering, human experience design, and cloud resilience to help startups and enterprises turn ambitious ideas into production-ready digital products.
          </motion.p>
        </div>

        {/* Dynamic Connected Words Ecosystem */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 6 Interactive Connected Pillars */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {ECOSYSTEM_NODES.map((node) => {
              const isSelected = activeNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.08] border-white/30 shadow-xl scale-[1.03]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                  style={{
                    boxShadow: isSelected
                      ? `0 10px 30px -10px ${node.color}40`
                      : "none",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors"
                    style={{
                      backgroundColor: node.accentBg,
                      color: node.color,
                      border: `1px solid ${node.color}40`,
                    }}
                  >
                    {node.icon}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-black tracking-wider text-white">
                      {node.name}
                    </span>
                    {isSelected && (
                      <span
                        className="w-2 h-2 rounded-full animate-ping"
                        style={{ backgroundColor: node.color }}
                      />
                    )}
                  </div>

                  <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">
                    {node.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Pillar Intelligence Card */}
          <div className="lg:col-span-5">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/15 relative overflow-hidden"
              style={{
                borderColor: `${activeNode.color}40`,
                boxShadow: `0 20px 40px -15px ${activeNode.color}25`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    backgroundColor: activeNode.accentBg,
                    color: activeNode.color,
                  }}
                >
                  {activeNode.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {activeNode.name} Ecosystem
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    Integrated Core Pillar
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeNode.details}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                  Production Capabilities
                </span>
                {activeNode.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: activeNode.color }}
                    />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  CIS Unified Engineering Stack
                </span>
                <a
                  href="#services"
                  className="text-xs font-bold flex items-center gap-1 hover:underline"
                  style={{ color: activeNode.color }}
                >
                  <span>Explore in Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
