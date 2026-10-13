"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import {
  Brain,
  Code2,
  Smartphone,
  Palette,
  CheckCircle2,
  Kanban,
  Boxes,
  Cloud,
  Glasses,
  Activity,
  Server,
  GraduationCap,
  ShoppingBag,
  Factory,
  Landmark,
  UtensilsCrossed,
  Car,
  Trophy,
  Bot,
  Globe,
  ShieldCheck,
  LineChart,
  Workflow,
  Sparkles,
  Network,
  GitBranch,
  Cpu,
} from "lucide-react";

interface PartnersSectionProps {
  onOpenConsultation?: () => void;
}

interface CardItem {
  name: string;
  icon: React.ReactNode;
  badgeBg: string;
  badgeHover: string;
  iconColor: string;
}

interface SectionCategory {
  id: string;
  title: string;
  subtitle: string;
  cards: CardItem[];
}

const CATEGORIES: SectionCategory[] = [
  {
    id: "services",
    title: "Services",
    subtitle: "End-to-end digital engineering & innovation capabilities",
    cards: [
      {
        name: "AI Services",
        icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-purple-50 border-purple-100",
        badgeHover: "group-hover:bg-purple-600 group-hover:border-purple-600",
        iconColor: "text-purple-600 group-hover:text-white",
      },
      {
        name: "Software Development",
        icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-blue-50 border-blue-100",
        badgeHover: "group-hover:bg-blue-600 group-hover:border-blue-600",
        iconColor: "text-blue-600 group-hover:text-white",
      },
      {
        name: "Application Development",
        icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-indigo-50 border-indigo-100",
        badgeHover: "group-hover:bg-indigo-600 group-hover:border-indigo-600",
        iconColor: "text-indigo-600 group-hover:text-white",
      },
      {
        name: "Product Design & UX",
        icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-pink-50 border-pink-100",
        badgeHover: "group-hover:bg-pink-600 group-hover:border-pink-600",
        iconColor: "text-pink-600 group-hover:text-white",
      },
      {
        name: "QA & Testing",
        icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-emerald-50 border-emerald-100",
        badgeHover: "group-hover:bg-emerald-600 group-hover:border-emerald-600",
        iconColor: "text-emerald-600 group-hover:text-white",
      },
      {
        name: "Product Management",
        icon: <Kanban className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-amber-50 border-amber-100",
        badgeHover: "group-hover:bg-amber-600 group-hover:border-amber-600",
        iconColor: "text-amber-600 group-hover:text-white",
      },
      {
        name: "Blockchain & Web3",
        icon: <Boxes className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-cyan-50 border-cyan-100",
        badgeHover: "group-hover:bg-cyan-600 group-hover:border-cyan-600",
        iconColor: "text-cyan-600 group-hover:text-white",
      },
      {
        name: "Modernisation & Cloud",
        icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-sky-50 border-sky-100",
        badgeHover: "group-hover:bg-sky-600 group-hover:border-sky-600",
        iconColor: "text-sky-600 group-hover:text-white",
      },
      {
        name: "AR/VR Development",
        icon: <Glasses className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-violet-50 border-violet-100",
        badgeHover: "group-hover:bg-violet-600 group-hover:border-violet-600",
        iconColor: "text-violet-600 group-hover:text-white",
      },
    ],
  },
  {
    id: "industry-domains",
    title: "Industry/Domains",
    subtitle: "Tailored enterprise solutions across global sectors",
    cards: [
      {
        name: "Healthcare & Medical",
        icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-rose-50 border-rose-100",
        badgeHover: "group-hover:bg-rose-600 group-hover:border-rose-600",
        iconColor: "text-rose-600 group-hover:text-white",
      },
      {
        name: "IT & Technology",
        icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-blue-50 border-blue-100",
        badgeHover: "group-hover:bg-blue-600 group-hover:border-blue-600",
        iconColor: "text-blue-600 group-hover:text-white",
      },
      {
        name: "Education & E-Learning",
        icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-amber-50 border-amber-100",
        badgeHover: "group-hover:bg-amber-600 group-hover:border-amber-600",
        iconColor: "text-amber-600 group-hover:text-white",
      },
      {
        name: "Retail & E-Commerce",
        icon: <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-orange-50 border-orange-100",
        badgeHover: "group-hover:bg-orange-600 group-hover:border-orange-600",
        iconColor: "text-orange-600 group-hover:text-white",
      },
      {
        name: "Manufacturing & Industrial",
        icon: <Factory className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-slate-100 border-slate-200",
        badgeHover: "group-hover:bg-slate-800 group-hover:border-slate-800",
        iconColor: "text-slate-700 group-hover:text-white",
      },
      {
        name: "Banking & Finance",
        icon: <Landmark className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-emerald-50 border-emerald-100",
        badgeHover: "group-hover:bg-emerald-600 group-hover:border-emerald-600",
        iconColor: "text-emerald-600 group-hover:text-white",
      },
      {
        name: "Food & Beverage",
        icon: <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-yellow-50 border-yellow-100",
        badgeHover: "group-hover:bg-yellow-600 group-hover:border-yellow-600",
        iconColor: "text-yellow-700 group-hover:text-white",
      },
      {
        name: "Automotive & Transportation",
        icon: <Car className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-cyan-50 border-cyan-100",
        badgeHover: "group-hover:bg-cyan-600 group-hover:border-cyan-600",
        iconColor: "text-cyan-600 group-hover:text-white",
      },
      {
        name: "Sports & Fitness",
        icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-violet-50 border-violet-100",
        badgeHover: "group-hover:bg-violet-600 group-hover:border-violet-600",
        iconColor: "text-violet-600 group-hover:text-white",
      },
    ],
  },
  {
    id: "technologies",
    title: "Technologies",
    subtitle: "Next-generation stacks & intelligent systems",
    cards: [
      {
        name: "Artificial Intelligence (AI)",
        icon: <Bot className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-indigo-50 border-indigo-100",
        badgeHover: "group-hover:bg-indigo-600 group-hover:border-indigo-600",
        iconColor: "text-indigo-600 group-hover:text-white",
      },
      {
        name: "Modern Web Development",
        icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-blue-50 border-blue-100",
        badgeHover: "group-hover:bg-blue-600 group-hover:border-blue-600",
        iconColor: "text-blue-600 group-hover:text-white",
      },
      {
        name: "Cybersecurity",
        icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-red-50 border-red-100",
        badgeHover: "group-hover:bg-red-600 group-hover:border-red-600",
        iconColor: "text-red-600 group-hover:text-white",
      },
      {
        name: "Data Science & Analytics",
        icon: <LineChart className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-violet-50 border-violet-100",
        badgeHover: "group-hover:bg-violet-600 group-hover:border-violet-600",
        iconColor: "text-violet-600 group-hover:text-white",
      },
      {
        name: "Robotics & Automation",
        icon: <Workflow className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-orange-50 border-orange-100",
        badgeHover: "group-hover:bg-orange-600 group-hover:border-orange-600",
        iconColor: "text-orange-600 group-hover:text-white",
      },
      {
        name: "Generative AI",
        icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-purple-50 border-purple-100",
        badgeHover: "group-hover:bg-purple-600 group-hover:border-purple-600",
        iconColor: "text-purple-600 group-hover:text-white",
      },
      {
        name: "Agentic AI",
        icon: <Network className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-emerald-50 border-emerald-100",
        badgeHover: "group-hover:bg-emerald-600 group-hover:border-emerald-600",
        iconColor: "text-emerald-600 group-hover:text-white",
      },
      {
        name: "DevOps & Platform Engineering",
        icon: <GitBranch className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-cyan-50 border-cyan-100",
        badgeHover: "group-hover:bg-cyan-600 group-hover:border-cyan-600",
        iconColor: "text-cyan-600 group-hover:text-white",
      },
      {
        name: "AI-Powered Robotics",
        icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
        badgeBg: "bg-amber-50 border-amber-100",
        badgeHover: "group-hover:bg-amber-600 group-hover:border-amber-600",
        iconColor: "text-amber-600 group-hover:text-white",
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
      id="services-domains-technologies"
      className="relative h-[270vh] bg-white text-slate-900 select-none border-t border-slate-200/80"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Background Lighting for clean white theme */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-blue-100/40 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[450px] bg-orange-100/35 blur-[150px] rounded-full" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: 3 Clean Minimalist Text Lines (Services, Industry/Domains, Technologies) */}
            <div className="lg:col-span-5 relative pl-6 sm:pl-8">
              {/* Vertical Animated Accent Indicator Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="w-full bg-gradient-to-b from-[#0066cc] via-[#f15a24] to-[#00c5e6] rounded-full shadow-sm"
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
                        className={`text-3xl sm:text-5xl font-semibold tracking-[-0.035em] transition-all duration-300 ${
                          isActive
                            ? "text-slate-900 scale-[1.02] origin-left"
                            : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      >
                        {cat.title}
                      </h2>
                      <p
                        className={`text-sm sm:text-base mt-2 font-normal transition-colors duration-300 ${
                          isActive
                            ? "text-slate-600 font-medium"
                            : "text-slate-400 group-hover:text-slate-500"
                        }`}
                      >
                        {cat.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Sliding / Floating Pure White Squircle Cards with Icons and Text */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.id}
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4.5"
                  >
                    {activeCategory.cards.map((card, cIdx) => (
                      <motion.div
                        key={card.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: cIdx * 0.03,
                          ease: "easeOut",
                        }}
                        onClick={() => onOpenConsultation?.()}
                        className="aspect-[1.05/1] sm:aspect-square rounded-3xl p-3 sm:p-4.5 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(15,23,42,0.04)] border border-slate-200/90 bg-white hover:bg-white hover:shadow-[0_16px_36px_rgba(15,23,42,0.09)] hover:border-slate-300 transition-all duration-300 hover:scale-[1.04] cursor-pointer text-slate-900 group"
                      >
                        {/* Interactive Themed Icon Badge */}
                        <div
                          className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center mb-2.5 sm:mb-3 transition-all duration-300 group-hover:scale-110 shadow-sm border ${card.badgeBg} ${card.badgeHover} ${card.iconColor}`}
                        >
                          {card.icon}
                        </div>

                        {/* Title Text */}
                        <span className="text-xs sm:text-[13px] md:text-sm font-semibold text-slate-800 group-hover:text-slate-950 transition-colors leading-snug px-1">
                          {card.name}
                        </span>
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
