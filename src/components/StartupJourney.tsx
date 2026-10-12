"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
  Building2,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { TenityRibbedBackground } from "./TenityRibbedBackground";

interface StartupJourneyProps {
  onOpenConsultation: () => void;
}

interface IndustryVertical {
  id: string;
  num: string;
  client: string;
  industry: string;
  slogan: string;
  description: string;
  imageSrc: string;
  brandColor: string;
  accentBg: string;
  accentBorder: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
}

const INDUSTRY_VERTICALS: IndustryVertical[] = [
  {
    id: "nokia",
    num: "01",
    client: "NOKIA",
    industry: "Telecom & Embedded 5G",
    slogan: "Creating Technology that Helps the World Act Together",
    description:
      "Engineered an ultra-low latency event-driven telemetry platform with distributed stream processing and intelligent AI anomaly detection models across global networks.",
    imageSrc: "/case-nokia.png",
    brandColor: "#0066cc",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    metrics: [
      { label: "Data Throughput", value: "10M+ ops/s" },
      { label: "Anomaly Detection", value: "< 2.4s latency" },
      { label: "Cloud TCO", value: "-38% reduction" },
    ],
    techStack: ["Agentic AI", "Kubernetes", "Apache Kafka", "Go", "React", "AWS"],
  },
  {
    id: "amcor",
    num: "02",
    client: "amcor",
    industry: "Packaging & Manufacturing",
    slogan: "Staff Management Platform & Edge Quality Automation",
    description:
      "Deployed automated enterprise staff management workflows alongside edge-based computer vision inference models on industrial lines with zero downtime tolerance.",
    imageSrc: "/case-amcor.png",
    brandColor: "#00a4ef",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",
    metrics: [
      { label: "Defect Accuracy", value: "99.94%" },
      { label: "Line Speed", value: "1,200 units/min" },
      { label: "Manual QA Overhead", value: "-75%" },
    ],
    techStack: ["Computer Vision", "TensorFlow", "Edge AI", "Azure IoT", "Next.js"],
  },
  {
    id: "careem",
    num: "03",
    client: "Careem",
    industry: "Mobility & Super App (Uber)",
    slogan: "Making Your Life Simpler!",
    description:
      "Implemented high-concurrency cloud backend pipelines with predictive geospatial AI models for algorithmic ride dispatching and multi-service order routing.",
    imageSrc: "/case-careem.png",
    brandColor: "#00c853",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    metrics: [
      { label: "Daily Active Users", value: "5M+" },
      { label: "Dispatch Response", value: "sub-100ms" },
      { label: "Fleet Utilization", value: "+24% increase" },
    ],
    techStack: ["Geospatial AI", "PyTorch", "Node.js", "Redis Cluster", "GCP"],
  },
  {
    id: "bcg",
    num: "04",
    client: "Boston Consulting Group",
    industry: "Strategic Analytics & Data",
    slogan: "Enterprise Strategy Analytics & Executive Intelligence Hub",
    description:
      "Built an enterprise intelligence platform with automated ETL pipelines, generative narrative summaries, and interactive multi-dimensional modeling for C-suite leaders.",
    imageSrc: "/case-bcg.png",
    brandColor: "#00875a",
    accentBg: "bg-teal-500/10",
    accentBorder: "border-teal-500/20",
    metrics: [
      { label: "Time to Insight", value: "Minutes vs Weeks" },
      { label: "Data Aggregation", value: "50TB+ scale" },
      { label: "Executive Adoption", value: "94% monthly" },
    ],
    techStack: ["Generative AI", "TypeScript", "Next.js", "Snowflake", "AWS"],
  },
  {
    id: "ups",
    num: "05",
    client: "UPS Supply Chain",
    industry: "Logistics & Freight",
    slogan: "The World's Largest Package Delivery system",
    description:
      "Created an intelligent orchestration platform combining automated customs document processing (LLM/OCR) and dynamic freight consolidation algorithms.",
    imageSrc: "/case-ups.png",
    brandColor: "#f59e0b",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    metrics: [
      { label: "Doc Processing Time", value: "45s vs 18min" },
      { label: "Routing Efficiency", value: "+19.2%" },
      { label: "Customs Compliance", value: "100% compliant" },
    ],
    techStack: ["Document AI", "Java Spring Boot", "Kafka", "Azure", "React"],
  },
  {
    id: "ebay",
    num: "06",
    client: "ebay",
    industry: "Global E-Commerce Marketplace",
    slogan: "A Global E-Commerce Platform at Multi-Million Scale",
    description:
      "Engineered high-velocity mobile e-commerce experiences with instant category browsing, coupon engines, personalized recommendations, and sub-second checkout.",
    imageSrc: "/case-ebay.png",
    brandColor: "#e53238",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/20",
    metrics: [
      { label: "Catalog Scale", value: "100M+ SKUs" },
      { label: "Checkout Speed", value: "sub-400ms" },
      { label: "Mobile Conversion", value: "+28% uplift" },
    ],
    techStack: ["React Native", "Next.js", "Node.js", "Elasticsearch", "AWS"],
  },
  {
    id: "liugong",
    num: "07",
    client: "LIUGONG",
    industry: "Industrial & Heavy Machinery",
    slogan: "Construction Machinery Manufacturing Global Portal",
    description:
      "Modernized industrial parts cataloging, dealer management portals, and IoT machine telemetry diagnostics for global heavy machinery manufacturing.",
    imageSrc: "/case-liugong.png",
    brandColor: "#00a4ef",
    accentBg: "bg-blue-600/10",
    accentBorder: "border-blue-600/20",
    metrics: [
      { label: "Dealer Networks", value: "140+ countries" },
      { label: "Telemetry Uptime", value: "99.98%" },
      { label: "Order Turnaround", value: "-45% faster" },
    ],
    techStack: ["IoT Telematics", ".NET Core", "Azure IoT", "PostgreSQL", "React"],
  },
  {
    id: "millioninone",
    num: "08",
    client: "MILLIONINONE",
    industry: "Social & Digital Media",
    slogan: "Simple and Powerful Social Media Platform",
    description:
      "Built a high-concurrency social video and networking ecosystem with real-time live streaming, interactive feeds, and peer-to-peer collaboration tools.",
    imageSrc: "/case-millioninone.png",
    brandColor: "#f15a24",
    accentBg: "bg-orange-500/10",
    accentBorder: "border-orange-500/20",
    metrics: [
      { label: "Concurrent Streams", value: "50K+ live" },
      { label: "Feed Latency", value: "< 80ms" },
      { label: "User Retention", value: "+36% 30-day" },
    ],
    techStack: ["WebRTC", "Go", "Redis", "Next.js", "AWS CloudFront"],
  },
  {
    id: "provoke",
    num: "09",
    client: "PROVOKE AERO",
    industry: "Travel & Aviation Commerce",
    slogan: "The Most Commercially Viable Travel Agency",
    description:
      "Created an omnichannel travel booking platform with real-time multi-carrier airline GDS integration, dynamic tour packaging, and instant hotel confirmations.",
    imageSrc: "/case-provoke.png",
    brandColor: "#0ea5e9",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/20",
    metrics: [
      { label: "Search Latency", value: "< 1.2s GDS" },
      { label: "Booking Growth", value: "+42% YoY" },
      { label: "Multi-Currency", value: "35+ fiat & crypto" },
    ],
    techStack: ["Travel APIs (GDS)", "Python FastAPI", "Next.js", "Redis", "Stripe"],
  },
];

export function StartupJourney({ onOpenConsultation }: StartupJourneyProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress throughout the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate active index based on scroll position in real time
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const count = INDUSTRY_VERTICALS.length;
    const index = Math.min(Math.floor(latest * count), count - 1);
    if (index !== activeIdx && index >= 0) {
      setActiveIdx(index);
    }
  });

  const handleTabClick = (idx: number) => {
    setActiveIdx(idx);
    if (containerRef.current) {
      const elementTop = containerRef.current.offsetTop;
      const elementHeight = containerRef.current.offsetHeight;
      const count = INDUSTRY_VERTICALS.length;
      const targetScroll = elementTop + (idx / count) * (elementHeight - window.innerHeight);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const activeVertical = INDUSTRY_VERTICALS[activeIdx];

  return (
    <section
      ref={containerRef}
      id="industry-verticals"
      className="relative h-[360vh] bg-[#040814] text-white select-none"
    >
      {/* Pinned Sticky Viewport Container */}
      <div className="sticky top-0 min-h-screen w-full flex flex-col justify-center overflow-hidden py-10 lg:py-6">
        {/* Dark Architectural Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040814] via-[#070d1e] to-[#040814] pointer-events-none" />

        {/* Atmospheric Top & Bottom Blend Overlays */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#040814] to-transparent pointer-events-none z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#040814] to-transparent pointer-events-none z-[1]" />

        {/* Inner Content Container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-[-0.035em] leading-[1.02]">
              You bring the vision. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#f15a24]">
                We bring the technology.
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-end">
            {/* Real-time progress bar indicator */}
            <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00e5ff] to-[#f15a24]"
                style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
              />
            </div>
          </div>
        </div>

        {/* Showcase Content with Smooth Slide-Up & Fade Transitions */}
        <div className="mt-10 relative min-h-[380px] sm:min-h-[440px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVertical.id}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Sliding Image with Smooth Upward Transition & Fade */}
              <div className="lg:col-span-6">
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl group/img"
                >
                  <Image
                    src={activeVertical.imageSrc}
                    alt={`${activeVertical.client} - ${activeVertical.slogan}`}
                    fill
                    priority
                    className="object-cover object-center group-hover/img:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle glass rim overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </div>

              {/* Right Column: Details, Metrics, Tech Stack, & Theme Capsule Button */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-2.5 border"
                    style={{
                      color: activeVertical.brandColor,
                      borderColor: `${activeVertical.brandColor}40`,
                      backgroundColor: `${activeVertical.brandColor}15`,
                    }}
                  >
                    <span>{activeVertical.client}</span>
                    <span>•</span>
                    <span>{activeVertical.industry}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {activeVertical.slogan}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed font-light line-clamp-3">
                    {activeVertical.description}
                  </p>
                </div>

                {/* 3 Verified Metric Outcome Boxes */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  {activeVertical.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3 rounded-2xl bg-white/[0.04] border border-white/10"
                    >
                      <div
                        className="text-base sm:text-xl font-black font-mono tracking-tight"
                        style={{ color: activeVertical.brandColor }}
                      >
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5 leading-tight truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeVertical.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-white/[0.06] text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Signature Theme Capsule Pill Button */}
                <div className="pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="group inline-flex items-center gap-4 pl-6 pr-2.5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-neutral-950 text-xs sm:text-sm font-extrabold transition-all duration-300 shadow-2xl active:scale-95 cursor-pointer border border-white"
                  >
                    <span className="tracking-tight">Discuss {activeVertical.client} Scale Solution</span>
                    <span className="w-7 h-7 rounded-full bg-[#f15a24] group-hover:bg-[#ff5520] text-white flex items-center justify-center transition-transform group-hover:rotate-45 shadow-md shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      </div>
    </section>
  );
}
