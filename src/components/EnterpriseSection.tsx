"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink, Video, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  youtubeQuery: string;
  channel: string;
  tag: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: "office-indore",
    title: "CIS New Office Indore",
    subtitle: "One Of The Big IT Companies In Central India: 12+ Years",
    thumbnail: "/videos/video-office.png",
    youtubeQuery: "Cyber Infrastructure CIS New Office Indore",
    channel: "Cyber Infrastructure",
    tag: "Campus & Tech Hub",
  },
  {
    id: "ceo-speaks",
    title: "CEO Speaks",
    subtitle: "Interview Of Our Founder & CEO, Kuldeep Kundal",
    thumbnail: "/videos/video-ceo.png",
    youtubeQuery: "Cyber Infrastructure Kuldeep Kundal CEO Interview",
    channel: "Cyber Infrastructure",
    tag: "Leadership Vision",
  },
  {
    id: "spark-2019",
    title: "CIS Spark 2019",
    subtitle: "CIS Spark 2019, A New Milestone In Employee Reorganization And Entertainment.",
    thumbnail: "/videos/video-spark2019.png",
    youtubeQuery: "Cyber Infrastructure CIS Spark 2019",
    channel: "Cyber Infrastructure",
    tag: "Annual Milestone",
  },
  {
    id: "spark-2016",
    title: "CIS Spark 2016",
    subtitle: "CIS Spark 2016, A New Milestone In Employee Reorganization And Entertainment.",
    thumbnail: "/videos/video-spark2016.png",
    youtubeQuery: "Cyber Infrastructure CIS Spark 2016",
    channel: "Cyber Infrastructure",
    tag: "Annual Celebration",
  },
  {
    id: "cfo-speaks",
    title: "CFO Speaks",
    subtitle: "Interview Of Our Founder & CFO, Abhishek Pareek",
    thumbnail: "/videos/video-cfo.png",
    youtubeQuery: "Cyber Infrastructure Abhishek Pareek CFO Interview",
    channel: "Cyber Infrastructure",
    tag: "Financial & Strategy",
  },
  {
    id: "coo-speaks",
    title: "COO Speaks",
    subtitle: "Interview Of Our Founder & COO, Amit Agrawal",
    thumbnail: "/videos/video-coo.png",
    youtubeQuery: "Cyber Infrastructure Amit Agrawal COO Interview",
    channel: "Cyber Infrastructure",
    tag: "Operations & Delivery",
  },
];

interface EnterpriseSectionProps {
  onOpenConsultation?: () => void;
}

export function EnterpriseSection({ onOpenConsultation }: EnterpriseSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else if (window.innerWidth < 1360) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, VIDEOS.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (diff > 50) {
      handlePrev();
    } else if (diff < -50) {
      handleNext();
    }
    touchStartXRef.current = null;
  };

  return (
    <section
      id="culture-highlights"
      className="relative py-20 sm:py-28 bg-[#080b12] text-white overflow-hidden border-t border-white/10 select-none"
    >
      {/* Anchor for backward-compatible #enterprise links */}
      <div id="enterprise" className="absolute -top-24 pointer-events-none" />

      {/* Animated Floating Orange Ambient Glow Circles */}
      <motion.div
        animate={{
          x: [0, 35, -20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/3 w-[650px] h-[450px] bg-gradient-to-tr from-[#f15a24]/20 via-[#fb923c]/18 to-[#ea580c]/12 blur-[170px] rounded-full pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 20, -25, 0],
          scale: [1, 1.18, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-[550px] h-[400px] bg-gradient-to-bl from-[#f97316]/18 via-[#f15a24]/14 to-transparent blur-[160px] rounded-full pointer-events-none"
      />

      <div className="w-full max-w-[1850px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Clean Header: Title on Left, Arrow Buttons on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#f15a24]/15 text-[#f15a24] border border-[#f15a24]/30 mb-3 uppercase tracking-wider">
              Life at CIS
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.035em] capitalize font-sans">
              Culture Highlights
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal mt-2 font-sans">
              We Believe in Work hard, Party harder!
            </p>
          </div>

          {/* Clean Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#f15a24] text-white border border-white/15 hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous video"
              title="Previous video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#f15a24] text-white border border-white/15 hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next video"
              title="Next video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Clean, Simple Horizontal Slider Track */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            animate={{
              x: `-${currentIndex * (100 / cardsPerView)}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 30,
            }}
            className="flex"
          >
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 shrink-0 px-2.5 sm:px-3"
              >
                <div
                  onClick={() => setSelectedVideo(video)}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-200/90 text-neutral-900 group cursor-pointer hover:shadow-2xl hover:border-[#f15a24]/40 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Top Tag Badge */}
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20">
                        {video.tag}
                      </span>
                    </div>

                    {/* Red YouTube Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-10 bg-[#ff0000] group-hover:bg-[#cc0000] rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-950 font-sans tracking-tight group-hover:text-[#f15a24] transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-2 line-clamp-2">
                        {video.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#f15a24] font-bold">Watch on YouTube</span>
                      <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#f15a24] transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-[#12151d] rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f15a24]/20 flex items-center justify-center text-[#f15a24] border border-[#f15a24]/30">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Cyber Infrastructure Official Media
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Embed / Thumbnail Showcase */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                <Image
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 flex flex-col items-center justify-center p-6 text-center">
                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                      selectedVideo.youtubeQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-sm sm:text-base shadow-2xl shadow-red-600/50 hover:scale-105 transition-all duration-300"
                  >
                    <Play className="w-5 h-5 fill-white" />
                    <span>Watch &quot;{selectedVideo.title}&quot; on YouTube</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>

                  <p className="text-xs sm:text-sm text-slate-300 mt-4 max-w-md font-light">
                    {selectedVideo.subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-black/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <span>Verified Cyber Infrastructure (CIS) Production</span>
                {onOpenConsultation && (
                  <button
                    onClick={() => {
                      setSelectedVideo(null);
                      onOpenConsultation();
                    }}
                    className="text-[#f15a24] hover:underline font-semibold"
                  >
                    Book a Consultation with Our Leadership →
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
