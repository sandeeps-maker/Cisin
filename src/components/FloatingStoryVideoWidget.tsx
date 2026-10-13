"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Volume2, Sparkles } from "lucide-react";

export function FloatingStoryVideoWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPlayingModal, setIsPlayingModal] = useState(false);

  useEffect(() => {
    // Appear ONLY when user reaches the Culture Highlights section
    const handleScrollCheck = () => {
      const target =
        document.getElementById("culture-highlights") ||
        document.getElementById("enterprise");
      if (!target) return;

      const rect = target.getBoundingClientRect();
      // Trigger when the culture highlights section is within viewport range
      if (rect.top <= window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScrollCheck, { passive: true });
    window.addEventListener("resize", handleScrollCheck, { passive: true });

    // Check once on mount in case user reloaded at that scroll position
    handleScrollCheck();

    return () => {
      window.removeEventListener("scroll", handleScrollCheck);
      window.removeEventListener("resize", handleScrollCheck);
    };
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <>
      {/* Floating Video Bubble Card (Appears after 2.5s at bottom-left) */}
      <AnimatePresence>
        {isVisible && !isPlayingModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 260 }}
            onClick={() => setIsPlayingModal(true)}
            className="fixed bottom-6 left-6 z-40 w-[280px] sm:w-[320px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border-2 border-white/20 shadow-2xl shadow-black/60 cursor-pointer group hover:scale-[1.03] transition-transform duration-300 select-none"
          >
            {/* Video Thumbnail Screenshot (media_1791810209010_595dce58.png) */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
              <Image
                src="/cis-success-story-youtube.png"
                alt="CIS Story - Real-Life Success Story"
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* Dismiss / Cancel Button */}
              <button
                onClick={handleDismiss}
                className="absolute top-2 right-2 z-20 w-7 h-7 rounded-full bg-black/75 hover:bg-[#c4161c] text-white flex items-center justify-center transition-colors shadow-md cursor-pointer border border-white/20 group/btn"
                aria-label="Remove video"
                title="Remove video"
              >
                <X className="w-4 h-4 transition-transform group-hover/btn:rotate-90 duration-200" />
              </button>

              {/* Pulsing Play Badge */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom pill caption */}
              <div className="absolute bottom-2 inset-x-2 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-[10px] text-white font-medium flex items-center justify-between pointer-events-none">
                <span className="truncate">CIS Success Story</span>
                <span className="text-amber-400 font-mono font-bold text-[9px] uppercase">Watch Story</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Video Playback Modal */}
      <AnimatePresence>
        {isPlayingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPlayingModal(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 w-full max-w-4xl bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPlayingModal(false)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-[#c4161c] text-white transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player Display */}
              <div className="relative aspect-[16/9] w-full bg-black">
                <Image
                  src="/cis-success-story-youtube.png"
                  alt="CIS Story - Real-Life Success Story"
                  fill
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white space-y-2">
                  <span className="text-xs font-mono font-bold text-[#f15a24] uppercase tracking-wider">
                    CIS CLIENT SUCCESS STORY
                  </span>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                    CIS Story - Real-Life Success Story: How CISIN&apos;s Strategy Grew a Small Business
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                    Watch our engineering and leadership team break down how we turn ambitious technical challenges into production-scale market winners.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
