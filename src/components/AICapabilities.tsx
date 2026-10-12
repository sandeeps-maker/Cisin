"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Bot,
  Eye,
  MessageSquareCode,
  LineChart,
  Workflow,
  Sparkles,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  CheckCircle2,
} from "lucide-react";

interface AICapability {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  badge: string;
  architectures: string[];
  techStack: string[];
  interactiveDemo: {
    prompt: string;
    outputTitle: string;
    outputDetail: string;
    latency: string;
  };
}

const AI_CAPABILITIES: AICapability[] = [
  {
    id: "agentic-ai",
    name: "Agentic AI & Multi-Agent Swarms",
    tagline: "Autonomous Task Planning, Tool Execution & Self-Correction",
    description:
      "We build multi-agent architectures where specialized AI agents collaborate, query external APIs, execute code in secure sandboxes, and solve multi-step operational problems autonomously.",
    icon: <Bot className="w-5 h-5" />,
    color: "#00e5ff",
    badge: "Next-Gen AI",
    architectures: [
      "Autonomous Multi-Agent Orchestration",
      "Dynamic Tool Calling & API Function Invocation",
      "Persistent Long-Term Memory & Reflection Graphs",
      "Human-in-the-Loop Approval Checkpoints",
    ],
    techStack: ["LangGraph", "AutoGPT", "CrewAI", "Anthropic Claude", "OpenAI Tool APIs"],
    interactiveDemo: {
      prompt: "Goal: Analyze Q3 enterprise cloud bill, identify unused GPU clusters, generate Terraform fix and file Jira ticket.",
      outputTitle: "Agent Execution Swarm Output",
      outputDetail: "Agent[Cost_Analyst] detected 3 idle AWS p4de instances (-$14,200/mo) → Agent[Terraform_Coder] generated PR #412 → Agent[Jira_Bot] created OPS-892 with automated rollback guard.",
      latency: "1.4s autonomous execution",
    },
  },
  {
    id: "generative-ai",
    name: "Enterprise Generative AI & RAG",
    tagline: "Fine-Tuned LLMs, Secure Enterprise Search & Custom Models",
    description:
      "Transform unstructured corporate knowledge into lightning-fast semantic search, domain copilots, and multi-modal generative platforms with zero data leakage.",
    icon: <Brain className="w-5 h-5" />,
    color: "#f15a24",
    badge: "Core Enterprise",
    architectures: [
      "Hybrid Semantic & Vector Search (Pinecone / Milvus)",
      "Domain-Specific Model Fine-Tuning (LoRA / QLoRA)",
      "Strict Enterprise Data Privacy & PII Masking",
      "Multi-Modal Document Parsing (PDFs, Tables, Blueprints)",
    ],
    techStack: ["Llama 3.3", "DeepSeek", "Mistral", "Pinecone", "Unstructured.io"],
    interactiveDemo: {
      prompt: "Query: Extract all indemnification liabilities and termination penalties from the 240-page vendor Master Services Agreement.",
      outputTitle: "Semantic RAG Extraction Result",
      outputDetail: "Clause 14.2 & 18.4 flagged: Uncapped liability on data breach detected. Suggested counter-clause generated according to Company Playbook standard.",
      latency: "420ms retrieval latency",
    },
  },
  {
    id: "computer-vision",
    name: "Computer Vision & Edge Intelligence",
    tagline: "Industrial Defect Inspection, Video Analytics & Spatial AI",
    description:
      "Deploy ultra-fast computer vision models running on embedded edge cameras and cloud pipelines. From high-speed packaging QA to smart retail heatmaps.",
    icon: <Eye className="w-5 h-5" />,
    color: "#38bdf8",
    badge: "Edge Ready",
    architectures: [
      "High-Frame-Rate Industrial Defect Detection (1,200+ fps)",
      "Real-Time Video Stream Telemetry & Spatial Heatmaps",
      "TensorRT & ONNX Runtime Edge Optimization",
      "Automated Active Learning & Re-Annotation Loops",
    ],
    techStack: ["YOLOv10", "TensorRT", "OpenCV", "DeepStream", "NVIDIA Jetson"],
    interactiveDemo: {
      prompt: "Inference Stream: Packaging Line Camera #04 (1,200 parts/min)",
      outputTitle: "Edge Inference Detection",
      outputDetail: "Micro-fracture detected on Seal #8491 (Confidence: 99.82%). Automated pneumatic diverter triggered in 1.8ms. Zero line disruption.",
      latency: "1.8ms edge inference",
    },
  },
  {
    id: "conversational-ai",
    name: "Conversational AI & Voice Agents",
    tagline: "Sub-Second Ultra-Realistic Speech & Omnichannel Assistants",
    description:
      "Next-generation voice bots and text assistants with human-like emotional cadence, multilingual fluency, and seamless CRM integrations.",
    icon: <MessageSquareCode className="w-5 h-5" />,
    color: "#a855f7",
    badge: "Real-Time Voice",
    architectures: [
      "Low-Latency WebRTC Speech-to-Speech Streaming",
      "Dynamic Sentiment & Tone Modulation",
      "Multi-Turn Contextual Dialogue State Tracking",
      "Deep CRM & Ticketing Synchronization (Salesforce, Zendesk)",
    ],
    techStack: ["WebRTC", "Whisper", "ElevenLabs", "Cartesia", "LiveKit"],
    interactiveDemo: {
      prompt: "Customer Voice: 'I need to urgently reschedule my freight pickup from Chicago to Dallas due to warehouse closure.'",
      outputTitle: "Real-Time Voice Agent Response",
      outputDetail: "Synthesized natural voice response delivered in 280ms. Route updated in TMS, driver notified, new confirmation SMS sent.",
      latency: "280ms end-to-end voice latency",
    },
  },
  {
    id: "mlops-governance",
    name: "MLOps, Data Pipelines & Governance",
    tagline: "Continuous Training, Model Drift Monitoring & Cost Control",
    description:
      "Enterprise infrastructure that keeps AI models reliable, fast, and cost-effective. Automated evaluations, data versioning, and latency profiling.",
    icon: <LineChart className="w-5 h-5" />,
    color: "#34d399",
    badge: "Production MLOps",
    architectures: [
      "Automated CI/CD for Model Packaging & Deployment",
      "Real-Time Model Drift & Hallucination Guardrails",
      "GPU Cluster Orchestration & Cost Optimization (FinOps)",
      "Model Registry, Lineage & Compliance Auditing",
    ],
    techStack: ["Kubeflow", "MLflow", "Prometheus", "Triton Server", "Weights & Biases"],
    interactiveDemo: {
      prompt: "Drift Monitor: Production Sentiment Classifier Model v3.2",
      outputTitle: "Automated MLOps Telemetry",
      outputDetail: "Concept drift detected in fintech domain queries. Shadow deployment of FineTuned-v4 initiated with A/B canary testing on 10% traffic.",
      latency: "Automated Continuous Delivery",
    },
  },
];

export function AICapabilities() {
  const [selectedCap, setSelectedCap] = useState<AICapability>(
    AI_CAPABILITIES[0]
  );

  return (
    <section id="ai-capabilities" className="relative py-24 sm:py-32 bg-[#040814] overflow-hidden">
      {/* Background glowing aura */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#00e5ff]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#f15a24]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#f15a24]/10 text-[#f15a24] border border-[#f15a24]/20 mb-4"
          >
            <span>SECTION 05</span>
            <span>•</span>
            <span>AI CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            AI isn&apos;t a feature. <br />
            <span className="text-gradient-cyan">It&apos;s the foundation.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl text-slate-300 font-light mt-4 leading-relaxed"
          >
            From custom generative copilots to autonomous multi-agent task swarms, we build production AI systems designed for scale, speed, and real enterprise ROI.
          </motion.p>
        </div>

        {/* Interactive Capability Selector Tabs */}
        <div className="mt-12 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {AI_CAPABILITIES.map((cap) => {
            const isSelected = selectedCap.id === cap.id;
            return (
              <button
                key={cap.id}
                onClick={() => setSelectedCap(cap)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-white/10 text-white border-white/30 shadow-lg shadow-cyan-500/10"
                    : "bg-white/[0.02] text-slate-400 border-white/5 hover:text-slate-200 hover:bg-white/[0.05]"
                }`}
                style={{
                  borderColor: isSelected ? cap.color : undefined,
                }}
              >
                <span
                  className="p-1 rounded-md"
                  style={{
                    backgroundColor: `${cap.color}20`,
                    color: cap.color,
                  }}
                >
                  {cap.icon}
                </span>
                <span>{cap.name}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-300 hidden sm:inline">
                  {cap.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Capability Deep-Dive Interactive Panel */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left info */}
          <motion.div
            key={selectedCap.id + "-info"}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold"
                  style={{
                    backgroundColor: `${selectedCap.color}20`,
                    color: selectedCap.color,
                  }}
                >
                  {selectedCap.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  CIS AI Engineering Practice
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {selectedCap.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                {selectedCap.tagline}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mt-4">
                {selectedCap.description}
              </p>

              {/* Architectures list */}
              <div className="mt-6 space-y-2.5">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                  Key Architectural Patterns
                </span>
                {selectedCap.architectures.map((arch, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: selectedCap.color }}
                    />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[11px] font-mono text-slate-400 block mb-2">
                TECHNOLOGY ECOSYSTEM:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedCap.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Live Simulation Playground */}
          <motion.div
            key={selectedCap.id + "-demo"}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-[#020612] border border-white/15 flex flex-col justify-between shadow-2xl relative overflow-hidden font-mono"
            style={{
              boxShadow: `0 20px 50px -20px ${selectedCap.color}25`,
            }}
          >
            {/* Terminal Header */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-slate-400 ml-2">
                    cis_ai_runtime_simulator.ts
                  </span>
                </div>
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${selectedCap.color}20`,
                    color: selectedCap.color,
                  }}
                >
                  LIVE SIMULATION
                </span>
              </div>

              {/* Prompt box */}
              <div className="mt-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">
                  Input Scenario / Prompt Trigger:
                </span>
                <p className="text-xs text-[#00e5ff] mt-1 font-mono leading-relaxed">
                  &gt; {selectedCap.interactiveDemo.prompt}
                </p>
              </div>

              {/* Output log */}
              <div className="mt-4 p-4 rounded-xl bg-black/50 border border-white/10 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    {selectedCap.interactiveDemo.outputTitle}
                  </span>
                  <span className="text-[10px] text-emerald-400">● 200 OK</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {selectedCap.interactiveDemo.outputDetail}
                </p>
              </div>
            </div>

            {/* Performance Metric Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400">Simulated Latency:</span>
              <span
                className="font-bold text-sm"
                style={{ color: selectedCap.color }}
              >
                {selectedCap.interactiveDemo.latency}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
