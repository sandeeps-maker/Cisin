"use client";

import React, { useState } from "react";
import {
  Brain,
  Link as LinkIcon,
  Glasses,
  Radio,
  Bot,
  Globe,
  Megaphone,
  GitBranch,
  Layers,
  Palette,
  Gamepad2,
  Smartphone,
  Cloud,
  Database,
  Building,
  Server,
  Code2,
  Users,
  ShieldCheck,
  Cpu,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

interface CustomService {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  hexColor: string;
  color: string;
  bgLight: string;
  borderLight: string;
}

const CUSTOM_SERVICES: CustomService[] = [
  {
    title: "Artificial Intelligence",
    description:
      "We use data-driven algorithms, machine learning, neural networks, and evolving artificial intelligence technologies.",
    icon: <Brain className="w-5 h-5 text-[#f15a24]" />,
    tag: "AI & ML",
    hexColor: "#f15a24",
    color: "text-[#f15a24]",
    bgLight: "bg-orange-500/10",
    borderLight: "border-orange-500/20",
  },
  {
    title: "Blockchain Development",
    description:
      "We develop decentralized ledger, cryptography, consensus, smart contracts, and digital wallets for secure transactions.",
    icon: <LinkIcon className="w-5 h-5 text-[#0066cc]" />,
    tag: "Web3 & Crypto",
    hexColor: "#0066cc",
    color: "text-[#0066cc]",
    bgLight: "bg-blue-500/10",
    borderLight: "border-blue-500/20",
  },
  {
    title: "Augmented & Virtual Reality",
    description:
      "We develop virtual environments, immersive AR experiences, 3D graphics, AR/VR sensors, and interactive simulations.",
    icon: <Glasses className="w-5 h-5 text-[#8b5cf6]" />,
    tag: "AR / VR / 3D",
    hexColor: "#8b5cf6",
    color: "text-[#8b5cf6]",
    bgLight: "bg-purple-500/10",
    borderLight: "border-purple-500/20",
  },
  {
    title: "IoT And AIoTs",
    description:
      "Digital solutions for interconnected devices, seamless communication, APIs, and real-time edge IoT sensor telemetry.",
    icon: <Radio className="w-5 h-5 text-[#10b981]" />,
    tag: "Connected Hardware",
    hexColor: "#10b981",
    color: "text-[#10b981]",
    bgLight: "bg-emerald-500/10",
    borderLight: "border-emerald-500/20",
  },
  {
    title: "Robotic Process Automation",
    description:
      "We develop solutions for automating tasks, bots for automated response and increased workflow efficiency and rule-based processing.",
    icon: <Bot className="w-5 h-5 text-[#f59e0b]" />,
    tag: "RPA & Agents",
    hexColor: "#f59e0b",
    color: "text-[#f59e0b]",
    bgLight: "bg-amber-500/10",
    borderLight: "border-amber-500/20",
  },
  {
    title: "Web Development",
    description:
      "Crafting exceptional high-performance websites and Next.js platforms for a digital presence that captivates audiences.",
    icon: <Globe className="w-5 h-5 text-[#0ea5e9]" />,
    tag: "Next.js & React",
    hexColor: "#0ea5e9",
    color: "text-[#0ea5e9]",
    bgLight: "bg-sky-500/10",
    borderLight: "border-sky-500/20",
  },
  {
    title: "Branding And Marketing",
    description:
      "Elevate your brand with strategic design, resonating design systems, and captivating experiences for lasting success.",
    icon: <Megaphone className="w-5 h-5 text-[#ec4899]" />,
    tag: "Digital Strategy",
    hexColor: "#ec4899",
    color: "text-[#ec4899]",
    bgLight: "bg-pink-500/10",
    borderLight: "border-pink-500/20",
  },
  {
    title: "DevOps Services",
    description:
      "Efficient DevOps solutions for seamless cloud infrastructure, automated continuous delivery (CI/CD), and 99.99% uptime.",
    icon: <GitBranch className="w-5 h-5 text-[#6366f1]" />,
    tag: "CI/CD & Cloud",
    hexColor: "#6366f1",
    color: "text-[#6366f1]",
    bgLight: "bg-indigo-500/10",
    borderLight: "border-indigo-500/20",
  },
  {
    title: "Microsoft Development",
    description:
      "Innovative certified Microsoft Gold solutions (.NET Core, Azure, Dynamics 365, Power Apps) tailored for business growth.",
    icon: <Layers className="w-5 h-5 text-[#00a4ef]" />,
    tag: "Microsoft Gold",
    hexColor: "#00a4ef",
    color: "text-[#00a4ef]",
    bgLight: "bg-cyan-500/10",
    borderLight: "border-cyan-500/20",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive user interfaces and engaging user journeys to elevate your brand and maximize conversion rates.",
    icon: <Palette className="w-5 h-5 text-[#f15a24]" />,
    tag: "Design Systems",
    hexColor: "#f15a24",
    color: "text-[#f15a24]",
    bgLight: "bg-orange-500/10",
    borderLight: "border-orange-500/20",
  },
  {
    title: "Game Development",
    description:
      "Immersing players in captivating worlds with high-performance game engineering across Unity, Unreal Engine, and WebGL.",
    icon: <Gamepad2 className="w-5 h-5 text-[#14b8a6]" />,
    tag: "Gaming & Physics",
    hexColor: "#14b8a6",
    color: "text-[#14b8a6]",
    bgLight: "bg-teal-500/10",
    borderLight: "border-teal-500/20",
  },
  {
    title: "Mobile App Development",
    description:
      "Transform ideas into seamless native iOS (Swift) and Android (Kotlin / React Native) experiences with fluid animations.",
    icon: <Smartphone className="w-5 h-5 text-[#3b82f6]" />,
    tag: "iOS & Android",
    hexColor: "#3b82f6",
    color: "text-[#3b82f6]",
    bgLight: "bg-blue-600/10",
    borderLight: "border-blue-600/20",
  },
  {
    title: "Cloud Integration Services",
    description:
      "Reliable cloud architecture across AWS, Azure, and Google Cloud Platform empowering businesses with scalability and security.",
    icon: <Cloud className="w-5 h-5 text-[#0284c7]" />,
    tag: "Multi-Cloud",
    hexColor: "#0284c7",
    color: "text-[#0284c7]",
    bgLight: "bg-sky-600/10",
    borderLight: "border-sky-600/20",
  },
  {
    title: "Big Data Engineering",
    description:
      "Unlock insights, real-time analytics, and predictive data pipelines powered by Snowflake, Databricks, and Apache Kafka.",
    icon: <Database className="w-5 h-5 text-[#8b5cf6]" />,
    tag: "Data Lakehouses",
    hexColor: "#8b5cf6",
    color: "text-[#8b5cf6]",
    bgLight: "bg-violet-500/10",
    borderLight: "border-violet-500/20",
  },
  {
    title: "SAP Implementation",
    description:
      "Elevate operational efficiency and streamline enterprise workflows with certified SAP ERP implementation services.",
    icon: <Building className="w-5 h-5 text-[#059669]" />,
    tag: "SAP Solutions",
    hexColor: "#059669",
    color: "text-[#059669]",
    bgLight: "bg-emerald-600/10",
    borderLight: "border-emerald-600/20",
  },
  {
    title: "Azure Integration & Apps",
    description:
      "Empower your business with cutting-edge cloud apps built on Microsoft Azure enterprise architecture.",
    icon: <Server className="w-5 h-5 text-[#0284c7]" />,
    tag: "Azure Cloud",
    hexColor: "#0284c7",
    color: "text-[#0284c7]",
    bgLight: "bg-cyan-600/10",
    borderLight: "border-cyan-600/20",
  },
  {
    title: "Custom Software Development",
    description:
      "We craft bespoke software tailored for your exact business logic with robust architecture designed to scale.",
    icon: <Code2 className="w-5 h-5 text-[#c4161c]" />,
    tag: "Custom Code",
    hexColor: "#c4161c",
    color: "text-[#c4161c]",
    bgLight: "bg-red-500/10",
    borderLight: "border-red-500/20",
  },
  {
    title: "CRM Development",
    description:
      "Enhance customer relationships with custom CRM development and Salesforce / HubSpot integration pipelines.",
    icon: <Users className="w-5 h-5 text-[#f97316]" />,
    tag: "CRM & Pipelines",
    hexColor: "#f97316",
    color: "text-[#f97316]",
    bgLight: "bg-orange-600/10",
    borderLight: "border-orange-600/20",
  },
  {
    title: "Cyber Security Services",
    description:
      "Fortify your digital infrastructure with ISO 27001 certified penetration testing, encryption, and threat audits.",
    icon: <ShieldCheck className="w-5 h-5 text-[#10b981]" />,
    tag: "ISO 27001 Security",
    hexColor: "#10b981",
    color: "text-[#10b981]",
    bgLight: "bg-emerald-500/10",
    borderLight: "border-emerald-500/20",
  },
  {
    title: "ERP System Development",
    description:
      "Comprehensive ERP solutions that optimize multi-department operations, supply chain tracking, and financial reconciliation.",
    icon: <Cpu className="w-5 h-5 text-[#6366f1]" />,
    tag: "Enterprise ERP",
    hexColor: "#6366f1",
    color: "text-[#6366f1]",
    bgLight: "bg-indigo-500/10",
    borderLight: "border-indigo-500/20",
  },
];

interface WhiteCaseStudiesSectionProps {
  onOpenConsultation: () => void;
}

export function WhiteCaseStudiesSection({
  onOpenConsultation,
}: WhiteCaseStudiesSectionProps) {
  // Split into 2 rows for double horizontal slider
  const row1 = [
    ...CUSTOM_SERVICES.slice(0, 10),
    ...CUSTOM_SERVICES.slice(0, 10),
    ...CUSTOM_SERVICES.slice(0, 10),
  ];
  const row2 = [
    ...CUSTOM_SERVICES.slice(10),
    ...CUSTOM_SERVICES.slice(10),
    ...CUSTOM_SERVICES.slice(10),
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#f8f9fa] text-neutral-900 overflow-hidden border-t border-b border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-neutral-300">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-950 tracking-[-0.035em] leading-tight font-sans">
              Custom Software Development Services
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-normal font-sans">
              Awarded <strong className="text-neutral-900 font-medium">Custom software development company</strong> with 5000+ Successfully completed Projects Globally.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#c4161c] hover:text-black transition-colors shrink-0 cursor-pointer"
          >
            <span>Discuss your custom project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Row 1: Left-to-Right Slow Motion Slider (Stops on hover) */}
      <div className="relative w-full overflow-hidden py-3 group">
        {/* Left & Right Edge Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-ltr-slow gap-5 sm:gap-6 items-stretch hover:[animation-play-state:paused]">
          {row1.map((item, idx) => (
            <div
              key={idx}
              style={{ "--card-accent": item.hexColor } as React.CSSProperties}
              className="w-[280px] sm:w-[340px] bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-md hover:shadow-2xl hover:border-[var(--card-accent)]/60 transition-all duration-300 flex flex-col justify-between shrink-0 group/card cursor-pointer"
            >
              <div>
                {/* Palm/Pastel Translucent Header Box */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${item.bgLight} border ${item.borderLight} group-hover/card:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-mono px-3 py-1 rounded-full ${item.bgLight} ${item.color} border ${item.borderLight} font-bold`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 group-hover/card:[color:var(--card-accent)] transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed line-clamp-3 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Signature Theme Capsule Pill Button */}
              <div className="mt-6 pt-4 border-t border-neutral-100">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 pl-5 pr-2 rounded-full border border-neutral-200 group-hover/card:border-neutral-900 bg-neutral-50 group-hover/card:bg-neutral-950 text-neutral-900 group-hover/card:text-white hover:!bg-[var(--card-accent)] hover:!border-[var(--card-accent)] hover:!text-white font-extrabold text-xs transition-all duration-300 flex items-center justify-between shadow-sm active:scale-95 cursor-pointer group/btn"
                >
                  <span className="tracking-tight">Know More</span>
                  <span
                    style={{ backgroundColor: item.hexColor }}
                    className="w-6 h-6 rounded-full text-white flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5 shadow-sm shrink-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Opposite Direction (Right-to-Left Slow Motion Slider, Stops on hover) */}
      <div className="relative w-full overflow-hidden py-3 mt-4 group">
        {/* Left & Right Edge Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-slow gap-5 sm:gap-6 items-stretch hover:[animation-play-state:paused]">
          {row2.map((item, idx) => (
            <div
              key={idx}
              style={{ "--card-accent": item.hexColor } as React.CSSProperties}
              className="w-[280px] sm:w-[340px] bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-md hover:shadow-2xl hover:border-[var(--card-accent)]/60 transition-all duration-300 flex flex-col justify-between shrink-0 group/card cursor-pointer"
            >
              <div>
                {/* Palm/Pastel Translucent Header Box */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${item.bgLight} border ${item.borderLight} group-hover/card:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-mono px-3 py-1 rounded-full ${item.bgLight} ${item.color} border ${item.borderLight} font-bold`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 group-hover/card:[color:var(--card-accent)] transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed line-clamp-3 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Signature Theme Capsule Pill Button */}
              <div className="mt-6 pt-4 border-t border-neutral-100">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 pl-5 pr-2 rounded-full border border-neutral-200 group-hover/card:border-neutral-900 bg-neutral-50 group-hover/card:bg-neutral-950 text-neutral-900 group-hover/card:text-white hover:!bg-[var(--card-accent)] hover:!border-[var(--card-accent)] hover:!text-white font-extrabold text-xs transition-all duration-300 flex items-center justify-between shadow-sm active:scale-95 cursor-pointer group/btn"
                >
                  <span className="tracking-tight">Know More</span>
                  <span
                    style={{ backgroundColor: item.hexColor }}
                    className="w-6 h-6 rounded-full text-white flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5 shadow-sm shrink-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
