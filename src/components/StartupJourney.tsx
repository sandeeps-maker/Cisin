"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { CinematicAtmosphereBackground } from "./CinematicAtmosphereBackground";

export interface CaseStudyItem {
  id: string;
  client: string;
  title: string;
  description: string;
  imageSrc: string;
  cardBg: string;
  cardBorder: string;
  badgeBg: string;
  badgeText: string;
  brandColor: string;
  metrics: {
    value: string;
    label: string;
  }[];
  tags: string[];
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "nokia",
    client: "Nokia",
    title: "Creating Technology that Helps the World Act Together",
    description:
      "Engineered an ultra-low latency event-driven telemetry platform with distributed stream processing and intelligent AI anomaly detection models across global networks.",
    imageSrc: "/case-studies/nokia-case-study.png",
    cardBg: "bg-[#eaf3fe]",
    cardBorder: "border-blue-200/80",
    badgeBg: "bg-blue-100 text-[#0b3a82]",
    badgeText: "Telecom & IoT",
    brandColor: "#0b3a82",
    metrics: [
      {
        value: "50M+",
        label: "connected devices worldwide",
      },
      {
        value: "99.99%",
        label: "telemetry reliability uptime",
      },
    ],
    tags: ["Distributed Systems", "Apache Kafka", "Go", "AWS Cloud"],
  },
  {
    id: "amcor",
    client: "amcor",
    title: "Staff Management Platform For Hospitality Businesses",
    description:
      "Deployed automated enterprise workforce management workflows with real-time shift scheduling, instant compliance tracking, and automated mobile shift coverage.",
    imageSrc: "/case-studies/amcor-case-study.png",
    cardBg: "bg-[#e6f7f5]",
    cardBorder: "border-teal-200/80",
    badgeBg: "bg-teal-100 text-[#007a87]",
    badgeText: "SaaS & Workforce",
    brandColor: "#007a87",
    metrics: [
      {
        value: "85%",
        label: "reduction in scheduling latency",
      },
      {
        value: "1,200+",
        label: "active hospitality locations",
      },
    ],
    tags: ["Workforce SaaS", "Next.js", "PostgreSQL", "Real-Time Sync"],
  },
  {
    id: "careem",
    client: "Careem",
    title: "Your One-Stop Solution to Your Everyday Cravings.",
    description:
      "Architected high-concurrency cloud backend pipelines with predictive geospatial AI models for lightning-fast food delivery routing and seamless merchant order routing.",
    imageSrc: "/case-studies/careem-case-study.png",
    cardBg: "bg-[#ecfaec]",
    cardBorder: "border-emerald-200/80",
    badgeBg: "bg-emerald-100 text-[#059669]",
    badgeText: "Mobility & QSR",
    brandColor: "#059669",
    metrics: [
      {
        value: "30M+",
        label: "everyday cravings delivered",
      },
      {
        value: "3.4x",
        label: "gross transaction volume surge",
      },
    ],
    tags: ["Geospatial AI", "Redis Cluster", "High-Concurrency", "GCP"],
  },
  {
    id: "bcg",
    client: "BCG",
    title: "Leverage Huge Business Opportunities to Touch the Glory of Success",
    description:
      "Built an enterprise intelligence hub with automated executive analytics, predictive financial modeling, and interactive multi-dimensional dashboards for C-suite leaders.",
    imageSrc: "/case-studies/bcg-case-study.png",
    cardBg: "bg-[#f8f9fa]",
    cardBorder: "border-slate-300/80",
    badgeBg: "bg-slate-200/80 text-slate-800",
    badgeText: "Executive Advisory",
    brandColor: "#047857",
    metrics: [
      {
        value: "40%",
        label: "faster decision velocity",
      },
      {
        value: "$1.2B+",
        label: "measurable enterprise value",
      },
    ],
    tags: ["Enterprise AI", "Snowflake", "Predictive Analytics", "TypeScript"],
  },
  {
    id: "ups",
    client: "UPS",
    title: "The World's Largest Package Delivery Company Offering Great Package Tracking Features",
    description:
      "Engineered mission-critical logistics dispatch infrastructure with real-time global package tracking, automated customs document OCR pipelines, and dynamic multi-depot route optimization.",
    imageSrc: "/case-studies/ups-case-study.png",
    cardBg: "bg-[#fffbeb]",
    cardBorder: "border-amber-300/80",
    badgeBg: "bg-amber-100 text-[#92400e]",
    badgeText: "Logistics & Freight",
    brandColor: "#d97706",
    metrics: [
      {
        value: "24M+",
        label: "daily global packages tracked",
      },
      {
        value: "45s vs 18m",
        label: "document OCR pipeline speed",
      },
    ],
    tags: ["Fleet Tracking", "Document AI", "Kafka", "Cloud Microservices"],
  },
  {
    id: "world-vision",
    client: "World Vision",
    title: "The World's Leading Child Sponsorship Organization, Helping Poor Children to Grow Up",
    description:
      "Developed an omnichannel child sponsorship and humanitarian donation platform featuring donor transparency portals, real-time field progress tracking, and global multi-currency payment rails.",
    imageSrc: "/case-studies/world-vision-case-study.png",
    cardBg: "bg-[#fff4ed]",
    cardBorder: "border-orange-200/90",
    badgeBg: "bg-orange-100 text-[#c2410c]",
    badgeText: "Humanitarian & NGO",
    brandColor: "#ea580c",
    metrics: [
      {
        value: "3.5M+",
        label: "sponsored children empowered",
      },
      {
        value: "100+",
        label: "global relief partner countries",
      },
    ],
    tags: ["Omnichannel Donation", "PCI-DSS Level 1", "Global Scale", "Mobile First"],
  },
  {
    id: "provoke-aero",
    client: "Provoke Aero",
    title: "The most commercially viable travel agency",
    description:
      "Architected a high-converting flight and adventure tourism booking engine with automated dynamic inventory pricing, multi-supplier GDS aggregation, and personalized travel recommendation algorithms.",
    imageSrc: "/case-studies/provoke-aero-case-study.png",
    cardBg: "bg-[#eef5fc]",
    cardBorder: "border-blue-200/90",
    badgeBg: "bg-blue-100 text-[#1e40af]",
    badgeText: "Aviation & Travel Tech",
    brandColor: "#1d4ed8",
    metrics: [
      {
        value: "300%+",
        label: "direct booking conversion surge",
      },
      {
        value: "< 120ms",
        label: "global flight search query latency",
      },
    ],
    tags: ["Travel Aggregator", "Dynamic Pricing", "GDS Integration", "Next.js"],
  },
  {
    id: "ebay",
    client: "ebay",
    title: "A Global E-Commerce Platform",
    description:
      "Modernized multi-tenant marketplace catalog services and high-scale checkout microservices with automated fraud detection heuristics and sub-second global product search indexing.",
    imageSrc: "/case-studies/ebay-case-study.png",
    cardBg: "bg-[#f8faff]",
    cardBorder: "border-neutral-200",
    badgeBg: "bg-neutral-100 text-neutral-800",
    badgeText: "Global Marketplace",
    brandColor: "#e11d48",
    metrics: [
      {
        value: "130M+",
        label: "active global marketplace buyers",
      },
      {
        value: "1.8B+",
        label: "live item listings indexed",
      },
    ],
    tags: ["Marketplace Core", "Elasticsearch", "Zero-Downtime", "Microservices"],
  },
  {
    id: "liugong",
    client: "LIUGONG",
    title: "Construction Machinery Manufacturing Company",
    description:
      "Constructed an industrial IoT telemetry and heavy machinery fleet management platform with predictive equipment maintenance analytics, CAN-bus sensor telemetry, and global dealer portal integrations.",
    imageSrc: "/case-studies/liugong-case-study.png",
    cardBg: "bg-[#edf2f8]",
    cardBorder: "border-slate-300/80",
    badgeBg: "bg-slate-200 text-[#002d62]",
    badgeText: "Industrial IoT",
    brandColor: "#002d62",
    metrics: [
      {
        value: "50k+",
        label: "heavy machinery units tracked",
      },
      {
        value: "62%",
        label: "reduction in unplanned field downtime",
      },
    ],
    tags: ["Industrial IoT", "Predictive Maintenance", "CAN-bus", "Fleet Telematics"],
  },
];

interface StartupJourneyProps {
  onOpenConsultation: () => void;
}

export function StartupJourney({ onOpenConsultation }: StartupJourneyProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const hasMounted = useRef(false);
  const total = CASE_STUDIES.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Safely scroll ONLY the horizontal pills container (NEVER scroll the browser window)
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const container = pillsContainerRef.current;
    const activePill = pillRefs.current[activeIndex];
    if (container && activePill) {
      const pillLeft = activePill.offsetLeft;
      const pillWidth = activePill.offsetWidth;
      const containerWidth = container.offsetWidth;
      const targetScroll = pillLeft - containerWidth / 2 + pillWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total]);

  // Full-width spacing and prominent gap matching Appinventiv reference screenshot
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const isLargeDesktop = windowWidth >= 1280;

  // Generous gap between cards: cardSpacing is noticeably larger than cardWidth
  const cardWidth = isMobile ? 310 : isTablet ? 370 : isLargeDesktop ? 420 : 390;
  const cardSpacing = isMobile ? 340 : isTablet ? 450 : isLargeDesktop ? 540 : 490;
  const tiltAngle = isMobile ? 8 : 14; // Visible tilt angle matching reference screenshot
  const yOffset = isMobile ? 24 : 44; // Gentle downward dip for flanking cards

  return (
    <section
      id="case-studies"
      className="relative py-24 sm:py-32 bg-[#090a0d] text-white overflow-hidden select-none w-full"
    >
      {/* Cinematic Ambient Background */}
      <CinematicAtmosphereBackground
        side="right"
        themeColor="default"
        imageSrc="/cis-hero-slats-bg.png"
        opacity={0.35}
      />

      {/* Centered Editorial Header & Nav Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-12 px-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#f15a24] block mb-3">
            CASE STUDIES • MEASURABLE CLIENT IMPACT
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-[-0.035em] leading-[1.15] font-sans whitespace-nowrap">
            Innovation, Engineered by CIS
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 max-w-2xl mx-auto font-sans leading-relaxed">
            Delivering high-concurrency cloud architectures, mission-critical IoT backends, and AI transformation for Fortune 500s and disruptive global innovators.
          </p>
        </div>

        {/* Navigation Bar: [←] [Pill 1] [Pill 2] ... [→] */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-14 sm:mb-16 max-w-5xl mx-auto">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Project"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Horizontally Scrollable Client Tab Pills Container */}
          <div
            ref={pillsContainerRef}
            className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
          >
            {CASE_STUDIES.map((study, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={study.id}
                  ref={(el) => {
                    pillRefs.current[idx] = el;
                  }}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-white text-neutral-950 shadow-lg shadow-white/20 scale-105"
                      : "bg-white/10 hover:bg-white/20 text-white/80 hover:text-white"
                  }`}
                >
                  {study.client}
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Project"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* FULL-WIDTH 3D STAGE CONTAINER: Unconstrained width with generous gap between cards */}
      <div className="w-full relative h-[640px] sm:h-[700px] md:h-[740px] lg:h-[760px] flex items-center justify-center overflow-hidden">
        {CASE_STUDIES.map((study, idx) => {
          // Calculate wrapped offset relative to active card
          let diff = idx - activeIndex;
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;

          const isCenter = diff === 0;
          const isLeft = diff === -1;
          const isRight = diff === 1;
          const isVisible = Math.abs(diff) <= 1;

          // Prominent gap between cards with 3D rotation matching reference screenshot
          const x = diff * cardSpacing;
          const y = isCenter ? 0 : yOffset;
          const rotateZ = isCenter ? 0 : diff < 0 ? -tiltAngle : tiltAngle;
          const scale = isCenter ? 1 : 0.93;
          const opacity = isCenter ? 1 : isVisible ? (isMobile ? 0.3 : 0.78) : 0;
          const zIndex = isCenter ? 30 : isVisible ? 15 : 0;

          return (
            <motion.div
              key={study.id}
              initial={false}
              animate={{
                x,
                y,
                rotateZ,
                scale,
                opacity,
                zIndex,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1], // Apple-smooth cubic-bezier ease for clean movement
              }}
              onClick={() => {
                if (isLeft) handlePrev();
                if (isRight) handleNext();
              }}
              drag={isCenter ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x < -40 || velocity.x < -300) handleNext();
                if (offset.x > 40 || velocity.x > 300) handlePrev();
              }}
              className={`absolute top-0 ${
                study.cardBg
              } ${study.cardBorder} border rounded-[30px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-shadow ${
                isCenter
                  ? "cursor-grab active:cursor-grabbing shadow-black/80 ring-1 ring-white/10"
                  : isVisible
                  ? "cursor-pointer hover:opacity-90 shadow-black/50"
                  : "pointer-events-none"
              }`}
              style={{
                left: "50%",
                marginLeft: -cardWidth / 2, // Anchors the card dead-center in the middle
                width: cardWidth,
                height: isMobile ? 570 : isTablet ? 630 : 670,
                transformOrigin: "center center",
              }}
            >
              {/* Top Section: Client Logo, Badge, Title, and Description */}
              <div>
                {/* Header Row: Client Name + Category Badge */}
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-white text-xs sm:text-sm shadow-sm"
                      style={{ backgroundColor: study.brandColor }}
                    >
                      {study.client.slice(0, 1).toUpperCase()}
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight font-sans">
                      {study.client}
                    </span>
                  </div>

                  <span
                    className={`text-[11px] font-mono font-semibold px-3 py-1 rounded-full ${study.badgeBg}`}
                  >
                    {study.badgeText}
                  </span>
                </div>

                {/* Slogan / Title from prompt */}
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-neutral-950 leading-snug tracking-tight font-sans mt-2 line-clamp-2">
                  {study.title}
                </h3>

                {/* Strategic Description */}
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 line-clamp-2 leading-relaxed font-sans">
                  {study.description}
                </p>

                {/* 2-Column Metrics */}
                <div className="grid grid-cols-2 gap-4 mt-3.5 pt-3 pb-3 border-t border-neutral-900/10">
                  {study.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="space-y-0.5">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-950 font-sans tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-[11px] sm:text-xs text-neutral-600 font-sans leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Mockup Artwork Image & View Project Action */}
              <div className="space-y-3.5">
                {/* Visual Artwork Container */}
                <div className="relative w-full h-[180px] sm:h-[220px] md:h-[240px] rounded-2xl overflow-hidden shadow-md border border-neutral-900/10 bg-neutral-900 group/img">
                  <Image
                    src={study.imageSrc}
                    alt={`${study.client} Case Study`}
                    fill
                    sizes="(max-width: 640px) 310px, (max-width: 1024px) 370px, 420px"
                    className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                    priority={isCenter}
                  />
                </div>

                {/* View Project Action */}
                <div className="flex items-center justify-between pt-0.5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenConsultation();
                    }}
                    className="group/btn inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-950 hover:text-[#f15a24] transition-colors cursor-pointer"
                  >
                    <span>View Project</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1 font-mono font-normal">
                      →
                    </span>
                  </button>

                  <span className="text-[11px] font-mono text-neutral-400">
                    CIS Architecture
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Helper Indicator */}
      <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-neutral-500">
        <span>Click arrows or select client pills to navigate</span>
      </div>
    </section>
  );
}
