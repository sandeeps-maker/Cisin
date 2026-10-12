"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

interface PartnersSectionProps {
  onOpenConsultation?: () => void;
}

interface CardItem {
  name: string;
  logo: React.ReactNode;
}

interface SectionCategory {
  id: string;
  title: string;
  subtitle: string;
  cards: CardItem[];
}

const CATEGORIES: SectionCategory[] = [
  {
    id: "clients",
    title: "Clients",
    subtitle: "Helping leaders hire smarter",
    cards: [
      {
        name: "Careem",
        logo: (
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-1">
            <Image
              src="/logos/logo-careem.png"
              alt="Careem"
              width={260}
              height={100}
              className="object-contain max-h-16 sm:max-h-20 max-w-[88%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "amcor",
        logo: (
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-1">
            <Image
              src="/logos/logo-amcor.png"
              alt="amcor"
              width={260}
              height={100}
              className="object-contain max-h-16 sm:max-h-20 max-w-[88%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "BCG",
        logo: (
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-1">
            <Image
              src="/logos/logo-bcg.png"
              alt="BCG"
              width={240}
              height={100}
              className="object-contain max-h-14 sm:max-h-18 max-w-[85%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "NOKIA",
        logo: (
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-1">
            <Image
              src="/logos/logo-nokia.png"
              alt="NOKIA"
              width={260}
              height={100}
              className="object-contain max-h-14 sm:max-h-18 max-w-[88%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "ups",
        logo: (
          <div className="flex flex-col items-center justify-center text-center py-2">
            <div className="w-16 h-18 sm:w-20 sm:h-22 bg-[#351c15] rounded-b-2xl rounded-t-md border-2 border-[#ffb500] flex items-center justify-center shadow-lg">
              <span className="text-xl sm:text-2xl font-black text-[#ffb500] font-sans lowercase tracking-tight">
                ups
              </span>
            </div>
          </div>
        ),
      },
      {
        name: "ebay",
        logo: (
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-1">
            <Image
              src="/logos/logo-ebay.png"
              alt="eBay"
              width={240}
              height={100}
              className="object-contain max-h-16 sm:max-h-20 max-w-[88%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "World Vision",
        logo: (
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-1">
            <Image
              src="/logos/logo-worldvision.png"
              alt="World Vision"
              width={260}
              height={100}
              className="object-contain max-h-16 sm:max-h-20 max-w-[90%] w-auto h-auto"
            />
          </div>
        ),
      },
    ],
  },
  {
    id: "awards",
    title: "Awards",
    subtitle: "Recognition for breaking the mold",
    cards: [
      {
        name: "GoodFirms",
        logo: (
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-1">
            <Image
              src="/logos/logo-goodfirms.png"
              alt="GoodFirms"
              width={260}
              height={100}
              className="object-contain max-h-16 sm:max-h-20 max-w-[90%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "WADLINE",
        logo: (
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-1">
            <Image
              src="/logos/logo-wadline.png"
              alt="WADLINE"
              width={260}
              height={100}
              className="object-contain max-h-14 sm:max-h-18 max-w-[90%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "TopDevelopers",
        logo: (
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-1">
            <Image
              src="/logos/logo-topdevelopers.png"
              alt="TopDevelopers"
              width={260}
              height={100}
              className="object-contain max-h-16 sm:max-h-20 max-w-[90%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "DESIGNRUSH",
        logo: (
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-1">
            <Image
              src="/logos/logo-designrush.png"
              alt="DESIGNRUSH"
              width={260}
              height={100}
              className="object-contain max-h-14 sm:max-h-18 max-w-[90%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "CrunchBase",
        logo: (
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-1">
            <Image
              src="/logos/logo-crunchbase.png"
              alt="CrunchBase"
              width={260}
              height={100}
              className="object-contain max-h-14 sm:max-h-18 max-w-[90%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "Forbes",
        logo: (
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-1">
            <Image
              src="/logos/logo-forbes.png"
              alt="Forbes Technology Council"
              width={260}
              height={100}
              className="object-contain max-h-16 sm:max-h-20 max-w-[92%] w-auto h-auto"
            />
          </div>
        ),
      },
    ],
  },
  {
    id: "accreditations",
    title: "Accreditations",
    subtitle: "Backed by the best",
    cards: [
      {
        name: "Microsoft Gold Certified",
        logo: (
          <div className="relative w-full h-24 sm:h-28 flex items-center justify-center p-2">
            <Image
              src="/accreditations/microsoft-gold.png"
              alt="Microsoft Gold Certified Partner"
              width={260}
              height={120}
              className="object-contain max-h-16 sm:max-h-20 max-w-[92%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "CMMI Level 5",
        logo: (
          <div className="relative w-full h-24 sm:h-28 flex items-center justify-center p-2">
            <Image
              src="/accreditations/cmmi-level-5.png"
              alt="CMMIDEV/5 and CMMISVC/5 Appraised"
              width={260}
              height={120}
              className="object-contain max-h-16 sm:max-h-20 max-w-[92%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "ISO 9001:2015",
        logo: (
          <div className="relative w-full h-24 sm:h-28 flex items-center justify-center p-2">
            <Image
              src="/accreditations/iso-9001.png"
              alt="ISO 9001:2015 Certified"
              width={260}
              height={120}
              className="object-contain max-h-16 sm:max-h-20 max-w-[92%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "ISO/IEC 27001:2013",
        logo: (
          <div className="relative w-full h-24 sm:h-28 flex items-center justify-center p-2">
            <Image
              src="/accreditations/iso-27001.png"
              alt="ISO/IEC 27001:2013 Certified"
              width={260}
              height={120}
              className="object-contain max-h-16 sm:max-h-20 max-w-[92%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "Privacy Guaranteed",
        logo: (
          <div className="relative w-full h-24 sm:h-28 flex items-center justify-center p-2">
            <Image
              src="/accreditations/privacy-guaranteed.png"
              alt="Privacy Guaranteed"
              width={260}
              height={120}
              className="object-contain max-h-16 sm:max-h-20 max-w-[92%] w-auto h-auto"
            />
          </div>
        ),
      },
      {
        name: "SOC 2 Type II",
        logo: (
          <div className="flex flex-col items-center justify-center text-center p-2">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#0066cc]">
              SOC 2
            </span>
            <span className="text-[11px] font-mono text-neutral-600 mt-1 font-bold">
              TYPE II AUDITED
            </span>
          </div>
        ),
      },
    ],
  },
];

export function PartnersSection({ onOpenConsultation }: PartnersSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Scroll tracking across the sticky section height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamically update active tab based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveIdx(0);
    } else if (latest < 0.66) {
      setActiveIdx(1);
    } else {
      setActiveIdx(2);
    }
  });

  const handleTabClick = (idx: number) => {
    setActiveIdx(idx);
    if (containerRef.current) {
      const top = containerRef.current.offsetTop;
      const height = containerRef.current.offsetHeight;
      const targetScroll = top + (idx / 3) * (height - window.innerHeight);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const activeCategory = CATEGORIES[activeIdx];

  return (
    <section
      ref={containerRef}
      id="partners-recognition"
      className="relative h-[280vh] bg-[#0c0d10] text-white select-none"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/3 left-1/4 w-[550px] h-[380px] bg-[#9333ea]/10 blur-[180px] rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-[550px] h-[380px] bg-[#f15a24]/10 blur-[180px] rounded-full" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: 3 Clean Minimalist Text Lines (Clients, Awards, Accreditations) */}
            <div className="lg:col-span-5 relative pl-6">
              {/* Vertical Animated Accent Indicator Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 rounded-full">
                <motion.div
                  className="w-full bg-gradient-to-b from-[#a855f7] via-[#f15a24] to-[#00e5ff] rounded-full shadow-sm shadow-[#a855f7]"
                  animate={{
                    top: `${(activeIdx / 3) * 100}%`,
                    height: "33.33%",
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: "absolute" }}
                />
              </div>

              <div className="space-y-10 sm:space-y-12">
                {CATEGORIES.map((cat, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => handleTabClick(idx)}
                      className="cursor-pointer group transition-all duration-300"
                    >
                      <h2
                        className={`text-3xl sm:text-5xl font-normal tracking-[-0.035em] transition-all duration-300 ${
                          isActive
                            ? "text-white scale-[1.02] origin-left"
                            : "text-neutral-600 group-hover:text-neutral-400"
                        }`}
                      >
                        {cat.title}
                      </h2>
                      <p
                        className={`text-sm sm:text-base mt-2 font-normal transition-colors duration-300 ${
                          isActive
                            ? "text-slate-200"
                            : "text-neutral-700 group-hover:text-neutral-500"
                        }`}
                      >
                        {cat.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Sliding / Floating Pure White Squircle Logo Cards */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.id}
                    initial={{ opacity: 0, y: 40, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -40, scale: 0.94 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
                  >
                    {activeCategory.cards.map((card, cIdx) => (
                      <motion.div
                        key={cIdx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: cIdx * 0.04,
                          ease: "easeOut",
                        }}
                        className="aspect-square rounded-3xl p-3 sm:p-4 flex flex-col items-center justify-center shadow-lg border border-neutral-200/90 bg-white hover:bg-white hover:shadow-2xl hover:border-neutral-300 transition-all duration-300 hover:scale-105 cursor-pointer text-neutral-900 overflow-hidden"
                      >
                        {card.logo}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
