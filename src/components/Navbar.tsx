"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Menu, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: (track?: "startup" | "enterprise") => void;
  onToggleMegaMenu: () => void;
}

export function Navbar({ onOpenConsultation, onToggleMegaMenu }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-40 w-full transition-all duration-300 ease-in-out pointer-events-auto ${
        isScrolled
          ? "top-0 bg-white/95 backdrop-blur-md shadow-sm py-3 sm:py-3.5 text-neutral-900 border-b border-neutral-100"
          : "top-7 sm:top-7 bg-transparent py-3 sm:py-4 text-white"
      }`}
    >
      {/* Full-Width Header Container */}
      <div className="w-full px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="w-full flex items-center justify-between">
          {/* Very Left: CIS Official Logo (White on Dark Hero, Color on Scroll) */}
          <Link href="/" className="flex items-center group relative shrink-0">
            <div className="relative h-10 sm:h-12 md:h-13 w-44 sm:w-52 md:w-60 flex items-center">
              {isScrolled ? (
                <Image
                  src="/cis-logo.png"
                  alt="CIS - Cyber Infrastructure"
                  width={260}
                  height={80}
                  priority
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <Image
                  src="/cis-logo-white.png"
                  alt="CIS - Cyber Infrastructure"
                  width={260}
                  height={80}
                  priority
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </div>
          </Link>

          {/* Very Right: Contact Info + "Let's Talk" Capsule Button + Toggle Icon */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Email and Phone Contact Info */}
            <div
              className={`hidden lg:flex items-center gap-4 text-xs sm:text-sm font-semibold font-mono transition-colors duration-300 ${
                isScrolled ? "text-neutral-800" : "text-slate-100"
              }`}
            >
              <a
                href="mailto:info@cisin.com"
                className="flex items-center gap-1.5 hover:text-[#f15a24] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#f15a24]" />
                <span className="font-bold">info@cisin.com</span>
              </a>
              <span className={isScrolled ? "text-neutral-300" : "text-white/40"}>|</span>
              <a
                href="tel:+14358000086"
                className="flex items-center gap-1.5 hover:text-[#f15a24] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00e5ff]" />
                <span className="font-bold">+1-435-800-0086</span>
              </a>
            </div>

            {/* "Let's Talk" Capsule Pill Button with Circle Arrow */}
            <button
              onClick={() => onOpenConsultation("startup")}
              className={`group flex items-center gap-3 pl-5 sm:pl-6 pr-2 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 shadow-md active:scale-95 cursor-pointer border ${
                isScrolled
                  ? "bg-neutral-950 hover:bg-neutral-800 text-white border-neutral-900 shadow-neutral-950/20"
                  : "bg-white hover:bg-neutral-100 text-neutral-950 border-white shadow-lg"
              }`}
            >
              <span className="tracking-tight whitespace-nowrap">Let&apos;s Talk</span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shadow-sm ${
                  isScrolled
                    ? "bg-[#f15a24] text-white"
                    : "bg-[#f15a24] text-white"
                }`}
              >
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </button>

            {/* Toggle Menu Icon Button */}
            <button
              onClick={onToggleMegaMenu}
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm group active:scale-95 shrink-0 border ${
                isScrolled
                  ? "border-neutral-200 bg-neutral-100 hover:bg-neutral-900 text-neutral-900 hover:text-white"
                  : "border-white/25 bg-white/15 hover:bg-white/30 text-white backdrop-blur-md"
              }`}
              aria-label="Toggle Menu"
              title="Toggle Menu"
            >
              <Menu className="w-5 h-5 transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
