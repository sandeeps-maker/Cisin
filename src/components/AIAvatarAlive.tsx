"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Headphones } from "lucide-react";

interface AIAvatarAliveProps {
  className?: string;
  showBadge?: boolean;
}

export default function AIAvatarAlive({ className = "", showBadge = true }: AIAvatarAliveProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden select-none ${className}`}>
      {/* 1. Subtle Life Motion Container (Gentle breathing and natural presence) */}
      <motion.div
        animate={{
          scale: [1, 1.012, 1],
          y: [0, -1.5, 0],
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full h-full"
      >
        {/* Photorealistic CIS Client Solutions Advisor on Call with Headset in CIS Infrastructure Lobby */}
        <Image
          src="/cis-advisor-call.png"
          alt="CIS Client Solutions Advisor on Call"
          fill
          priority
          sizes="(max-width: 768px) 210px, 240px"
          className="object-cover object-top brightness-[1.03] contrast-[1.04]"
        />
      </motion.div>

      {/* 2. Live On-Call Status Badge with Pulsing Emerald Light & Headset Emblem */}
      {showBadge && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white shadow-lg pointer-events-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <Headphones className="w-3 h-3 text-emerald-400" />
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-100">
            Live On Call
          </span>
        </div>
      )}
    </div>
  );
}
