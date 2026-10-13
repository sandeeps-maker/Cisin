"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Send, X, PenLine } from "lucide-react";
import { CinematicAtmosphereBackground } from "./CinematicAtmosphereBackground";

interface HeroProps {
  onOpenConsultation: (track?: "startup" | "enterprise") => void;
  onOpenChatWithQuery?: (query: string) => void;
}

const CLIENT_LOGOS = [
  { name: "Claude Partner Network", src: "/logos/logo-claude-partner-gray.png", width: 240, height: 70 },
  { name: "Microsoft Gold Certified Partner", src: "/accreditations/ms-gold-clean-gray.png", width: 250, height: 70 },
  { name: "eBay", src: "/logos/logo-ebay-gray.png", width: 170, height: 65 },
  { name: "Amcor", src: "/logos/logo-amcor-gray.png", width: 185, height: 65 },
  { name: "BCG", src: "/logos/logo-bcg-gray.png", width: 170, height: 65 },
  { name: "Careem", src: "/logos/logo-careem-gray.png", width: 190, height: 65 },
  { name: "Crunchbase", src: "/logos/logo-crunchbase-gray.png", width: 205, height: 65 },
  { name: "Nokia", src: "/logos/logo-nokia-gray.png", width: 180, height: 65 },
  { name: "World Vision", src: "/logos/logo-worldvision-gray.png", width: 195, height: 65 },
  { name: "CMMI Level 5", src: "/accreditations/cmmi-gray.png", width: 195, height: 65 },
  { name: "ISO 27001", src: "/accreditations/iso-27001-gray.png", width: 195, height: 65 },
];

const TARGET_AUDIENCES = [
  "the Enterprise",
  "New Startups",
  "Fast-Growing Scaleups",
  "Visionary Founders",
  "Global Brands",
  "Future Unicorns",
  "Industry Leaders",
];



export function Hero({ onOpenConsultation, onOpenChatWithQuery }: HeroProps) {
  // 1. Smooth Pen-Writing Target Animator (Zero Layout Shifts)
  const [targetIdx, setTargetIdx] = useState(0);
  const [writtenTarget, setWrittenTarget] = useState("");
  const [isTargetDeleting, setIsTargetDeleting] = useState(false);

  useEffect(() => {
    const fullTarget = TARGET_AUDIENCES[targetIdx];
    const typingSpeed = isTargetDeleting ? 30 : 65;
    const pauseDuration = isTargetDeleting ? 350 : 2600;

    const timer = setTimeout(() => {
      if (!isTargetDeleting) {
        if (writtenTarget.length < fullTarget.length) {
          setWrittenTarget(fullTarget.slice(0, writtenTarget.length + 1));
        } else {
          setTimeout(() => setIsTargetDeleting(true), pauseDuration);
        }
      } else {
        if (writtenTarget.length > 0) {
          setWrittenTarget(fullTarget.slice(0, writtenTarget.length - 1));
        } else {
          setIsTargetDeleting(false);
          setTargetIdx((prev) => {
            let next = Math.floor(Math.random() * TARGET_AUDIENCES.length);
            while (next === prev && TARGET_AUDIENCES.length > 1) {
              next = Math.floor(Math.random() * TARGET_AUDIENCES.length);
            }
            return next;
          });
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [writtenTarget, isTargetDeleting, targetIdx]);

  // 2. Fixed Search Prompt: "What can CIS solve for you?"
  const STATIC_PROMPT = "What can CIS solve for you?";
  const [userQuery, setUserQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (queryToSearch: string) => {
    const q = queryToSearch.trim();
    if (!q) return;

    setUserQuery(q);
    setIsLoading(true);

    // Immediately trigger the interactive Chatbot window
    if (onOpenChatWithQuery) {
      onOpenChatWithQuery(q);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userQuery) {
      handleSearch(userQuery);
    } else {
      handleSearch(STATIC_PROMPT);
    }
  };


  const handleClear = () => {
    setUserQuery("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center pt-28 sm:pt-32 pb-0 overflow-hidden bg-[#0b0c0f] text-white select-none">
      {/* Uploaded Ribbed Graphic Background with Parallax Movement & Low-Contrast Color Glow */}
      <CinematicAtmosphereBackground side="right" themeColor="hero" imageSrc="/cis-hero-slats-bg.png" opacity={1.0} />

      {/* Subtle Edge Gradient for smooth section transition */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0c0d10] to-transparent pointer-events-none z-[2]" />

      {/* Main Content Area */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10 space-y-7 sm:space-y-9 my-auto pt-6">
        {/* Main Centered Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-4xl w-full"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] leading-[1.08] select-none">
            {/* Fixed Top Line */}
            <span className="block font-medium text-white">
              We Build AI Solutions for
            </span>

            {/* Stable Dedicated Row for Bold White Writing Target + Pen */}
            <span className="block font-bold text-white mt-1.5 sm:mt-2.5 min-h-[1.12em] flex items-center justify-center">
              <span className="inline-flex items-center whitespace-nowrap">
                <span>{writtenTarget}</span>
                {/* Pen Writing Nib Indicator */}
                <span className="inline-flex items-center ml-2.5 text-[#f15a24]">
                  <motion.span
                    animate={{
                      y: [0, -3, 0],
                      rotate: [-45, -38, -45],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.75,
                      ease: "easeInOut",
                    }}
                    className="inline-flex items-center"
                  >
                    <PenLine className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#f15a24] drop-shadow-[0_0_16px_rgba(241,90,36,0.8)]" />
                  </motion.span>
                </span>
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto tracking-[-0.01em] pt-1">
            CIS brings the experts who understand your business and the platforms to modernize systems, scale AI agents and keep operations resilient.
          </p>
        </motion.div>

        {/* Signature AI Chat / Prompt Search Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl"
        >
          <form
            onSubmit={handleFormSubmit}
            className={`relative flex items-center w-full min-h-[56px] sm:min-h-[62px] px-5 sm:px-6 rounded-full bg-white text-neutral-900 border-2 transition-all duration-300 ${
              isFocused
                ? "border-[#0080ff] ring-4 ring-[#0080ff]/20 shadow-[0_12px_45px_rgba(0,128,255,0.25)]"
                : "border-[#0080ff]/80 hover:border-[#0080ff] shadow-[0_10px_35px_rgba(0,0,0,0.35)]"
            }`}
          >
            {/* Left AI Sparkle Icon */}
            <div className="flex items-center justify-center shrink-0 mr-3.5 text-[#e52e2e]">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 fill-[#e52e2e]" />
            </div>

            {/* Input with Static Prompt Placeholder: What can CIS solve for you? */}
            <div className="relative flex-1 flex items-center overflow-hidden">
              <input
                ref={inputRef}
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="What can CIS solve for you?"
                className="w-full bg-transparent text-sm sm:text-base md:text-lg font-normal text-neutral-900 outline-none placeholder:text-neutral-500 tracking-tight"
                aria-label="Ask CIS AI about your engineering needs"
              />
            </div>

            {/* Clear Button (if user entered text) */}
            {userQuery && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1.5 text-neutral-400 hover:text-neutral-700 transition-colors mr-1 cursor-pointer"
                title="Clear input"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Submit / Send Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-100 hover:bg-[#0080ff] text-neutral-700 hover:text-white transition-all duration-200 shrink-0 cursor-pointer shadow-sm active:scale-95 group"
              aria-label="Submit search"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4 sm:w-4.5 sm:h-4.5 ml-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* ── Client Logos Clean Transparent Strip (Planted at Exact Bottom Highlighted Area, Enlarged, Slow Left-to-Right Marquee) ── */}
      <div className="w-full relative z-10 pt-4 pb-6 sm:pb-8 mt-auto">
        {/* Soft edge fade masks on sides */}
        <div className="absolute left-0 inset-y-0 w-28 sm:w-44 bg-gradient-to-r from-[#0b0c0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-28 sm:w-44 bg-gradient-to-l from-[#0b0c0f] to-transparent z-10 pointer-events-none" />

        <div className="w-full overflow-hidden flex items-center">
          {/* Left-to-right slow marquee track */}
          <div className="flex items-center gap-16 sm:gap-24 shrink-0 animate-marquee-ltr-slower">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-12 sm:max-h-14 md:max-h-16 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
