"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Send, X, PenLine } from "lucide-react";
import { TenityRibbedBackground } from "./TenityRibbedBackground";

interface HeroProps {
  onOpenConsultation: (track?: "startup" | "enterprise") => void;
  onOpenChatWithQuery?: (query: string) => void;
}

const TARGET_AUDIENCES = [
  "the Enterprise",
  "New Startups",
  "Fast-Growing Scaleups",
  "Visionary Founders",
  "Global Brands",
  "Future Unicorns",
  "Industry Leaders",
];

const SAMPLE_PROMPTS = [
  "What can CIS solve for you?",
  "How to modernize our core platform with AI?",
  "Build autonomous AI agents for operations",
  "Launch a venture-scale AI MVP in 8 weeks",
  "Scale dedicated AI engineering teams (1000+ ninjas)",
  "Calculate ROI for enterprise AI automation",
];

const QUICK_PILLS = [
  { label: "⚡ AI Agent Orchestration", query: "How can we build and scale autonomous AI agents for our business workflows?" },
  { label: "🔄 Legacy Modernization", query: "How does CIS modernize monolithic legacy systems using AI platforms?" },
  { label: "🚀 Startup 0 → 1 MVP", query: "How fast can CIS design and launch a production-ready AI MVP?" },
  { label: "🛡️ Enterprise AI Security", query: "What are CIS enterprise security, ISO & CMMI Level 5 standards?" },
  { label: "☁️ Cloud & DevOps Scale", query: "How do we migrate to multi-cloud infrastructure with automated AI pipelines?" },
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

  // 2. Typewriter for Prompt Input Bar
  const [promptIdx, setPromptIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userQuery) return;
    const currentFullText = SAMPLE_PROMPTS[promptIdx];
    const typingSpeed = isDeleting ? 30 : 60;
    const pauseDuration = isDeleting ? 500 : 2200;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setPromptIdx((prev) => (prev + 1) % SAMPLE_PROMPTS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, promptIdx, userQuery]);

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
    } else if (displayedText) {
      handleSearch(displayedText);
    }
  };

  const handlePillClick = (query: string) => {
    setUserQuery(query);
    handleSearch(query);
  };

  const handleClear = () => {
    setUserQuery("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center pt-32 pb-24 sm:pt-36 sm:pb-28 overflow-hidden bg-[#0b0c0f] text-white select-none">
      {/* Exact Graphic Image with Cursor Movement Animation */}
      <TenityRibbedBackground side="right" opacity={1.0} imageSrc="/tenity-ribbed-bg.png" />

      {/* Subtle Edge Gradient for smooth section transition */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0c0d10] to-transparent pointer-events-none z-[2]" />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10 space-y-7 sm:space-y-9">
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

            {/* Input with Typewriter / Custom Prompt */}
            <div className="relative flex-1 flex items-center overflow-hidden">
              <input
                ref={inputRef}
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder=""
                className="w-full bg-transparent text-sm sm:text-base md:text-lg font-normal text-neutral-900 outline-none placeholder:text-neutral-400 tracking-tight"
                aria-label="Ask CIS AI about your engineering needs"
              />

              {/* Animated Typewriter Placeholder */}
              {!userQuery && (
                <div
                  onClick={() => inputRef.current?.focus()}
                  className="absolute inset-0 flex items-center pointer-events-none text-neutral-600 text-sm sm:text-base md:text-lg font-normal tracking-tight"
                >
                  <span>{displayedText}</span>
                  <span className="inline-block w-[1.5px] h-5 bg-[#0080ff] ml-0.5 animate-pulse" />
                </div>
              )}
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
    </section>
  );
}
