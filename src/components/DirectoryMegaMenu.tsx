"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Phone, MessageSquare, Briefcase, ChevronRight, X } from "lucide-react";
import { MEGA_MENU_DATA, MenuCategory } from "@/data/menuData";

interface DirectoryMegaMenuProps {
  onClose?: () => void;
  onOpenConsultation?: () => void;
}

export function DirectoryMegaMenu({
  onClose,
  onOpenConsultation,
}: DirectoryMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ai-services");

  const currentCategory =
    MEGA_MENU_DATA.find((c) => c.id === activeCategory) || MEGA_MENU_DATA[0];

  return (
    <div className="h-full max-h-screen bg-white text-neutral-900 flex flex-col justify-between select-none font-sans overflow-hidden">
      {/* Top Header Bar */}
      <div className="border-b border-neutral-200 px-4 sm:px-8 py-3 sm:py-3.5 bg-white shrink-0 z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm sm:text-base font-semibold text-neutral-800">
          {/* Back to Home Link / Close Button */}
          {onClose ? (
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-neutral-950 hover:text-[#f15a24] text-sm sm:text-base font-extrabold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          ) : (
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-neutral-950 hover:text-[#f15a24] text-sm sm:text-base font-extrabold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          )}

          {/* Center / Right Links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm">
            <a
              href="tel:+14358000086"
              className="hover:text-[#f15a24] transition-colors flex items-center gap-2 font-medium"
            >
              <Phone className="w-4 h-4 text-[#f15a24]" />
              <span className="font-bold">+1 435 800 0086</span>
            </a>

            <button
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else if (onClose) {
                  onClose();
                }
              }}
              className="hover:text-[#f15a24] transition-colors cursor-pointer font-bold"
            >
              Request A Consultation
            </button>

            <button
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation();
                }
              }}
              className="hover:text-[#f15a24] transition-colors flex items-center gap-2 cursor-pointer font-bold"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Sales Live Chat</span>
            </button>

            {onClose && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-900 transition-colors ml-2"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Body (Compact & scrollable if screen is very short) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 w-full flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Sidebar Menu Categories */}
          <div className="lg:col-span-3 space-y-4">
            <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {MEGA_MENU_DATA.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left py-2.5 px-3 flex items-center justify-between text-sm sm:text-base font-bold transition-all cursor-pointer ${
                      isActive
                        ? "text-[#c4161c] bg-red-50/70 font-extrabold pl-4 border-l-4 border-[#c4161c]"
                        : "text-neutral-800 hover:text-[#c4161c] hover:bg-neutral-50"
                    }`}
                  >
                    <span>{cat.name}</span>
                    {isActive && <ChevronRight className="w-4 h-4 text-[#c4161c]" />}
                  </button>
                );
              })}
            </div>

            {/* Red "Our Work" Callout Box */}
            <div className="bg-[#a6191c] text-white rounded-2xl p-4 sm:p-5 shadow-lg relative overflow-hidden">
              <h4 className="text-base sm:text-lg font-black">Our Work</h4>
              <p className="text-xs text-white/90 mt-1.5 leading-relaxed">
                We strive to deliver the best work for every single project. Here&apos;s a few of them we&apos;d like you to see.
              </p>
              <div className="mt-3.5">
                {onClose ? (
                  <button
                    onClick={onClose}
                    className="bg-white text-neutral-900 hover:bg-neutral-100 text-xs font-extrabold px-5 py-2 rounded-full transition-all shadow-md cursor-pointer"
                  >
                    Our Work
                  </button>
                ) : (
                  <Link
                    href="/#work"
                    className="inline-block bg-white text-neutral-900 hover:bg-neutral-100 text-xs font-extrabold px-5 py-2 rounded-full transition-all shadow-md"
                  >
                    Our Work
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right Sub-Columns Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentCategory.columns.map((col, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-sm sm:text-base font-extrabold text-[#c4161c] border-b border-red-100 pb-1.5">
                    {col.title}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                    {col.items.map((item, iIdx) => (
                      <li key={iIdx}>
                        <button
                          onClick={() => {
                            if (onOpenConsultation) onOpenConsultation();
                          }}
                          className="hover:text-[#c4161c] transition-colors text-left font-medium block leading-snug cursor-pointer"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: 4 Colored Stat Boxes + Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 w-full border-t border-neutral-200 bg-white shrink-0 space-y-4">
        {/* 4 Pastel Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Pink - $10 B+ Client Revenues */}
          <div className="px-5 py-3.5 rounded-2xl bg-[#fee2e2]/70 border border-red-100/90 flex items-center gap-4">
            {/* Coin & Chart Icon */}
            <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
              <path d="M8 32L20 20L28 28L40 14" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32 14H40V22" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <ellipse cx="14" cy="36" rx="7" ry="3.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5"/>
              <ellipse cx="14" cy="32" rx="7" ry="3.5" fill="#fcd34d" stroke="#d97706" strokeWidth="1.5"/>
              <ellipse cx="26" cy="36" rx="7" ry="3.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5"/>
            </svg>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#b91c1c] tracking-tight leading-none">
                $10 B+
              </div>
              <div className="text-xs font-bold text-neutral-800 mt-1 leading-tight">
                Client Revenues
              </div>
            </div>
          </div>

          {/* Card 2: Yellow / Cream - 12+ Successful Years */}
          <div className="px-5 py-3.5 rounded-2xl bg-[#fef3c7]/70 border border-amber-100/90 flex items-center gap-4">
            {/* Gold Ribbon Medal Icon */}
            <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
              <path d="M16 26L12 40L24 34L36 40L32 26" fill="#f87171" stroke="#ef4444" strokeWidth="1.5"/>
              <circle cx="24" cy="18" r="13" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5"/>
              <circle cx="24" cy="18" r="9" fill="#fef3c7"/>
              <path d="M24 13L25.5 16.5L29 17L26.5 19.5L27 23L24 21.5L21 23L21.5 19.5L19 17L22.5 16.5L24 13Z" fill="#f59e0b"/>
            </svg>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#b45309] tracking-tight leading-none">
                12+
              </div>
              <div className="text-xs font-bold text-neutral-800 mt-1 leading-tight">
                Successful Years
              </div>
            </div>
          </div>

          {/* Card 3: Mint Green - 1000+ IT Ninjas */}
          <div className="px-5 py-3.5 rounded-2xl bg-[#dcfce7]/70 border border-emerald-100/90 flex items-center gap-4">
            {/* IT Ninja Icon */}
            <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="16" fill="#334155"/>
              <path d="M14 23C14 19 18 17 24 17C30 17 34 19 34 23C34 25 30 27 24 27C18 27 14 25 14 23Z" fill="#fed7aa"/>
              <circle cx="20" cy="23" r="2" fill="#0f172a"/>
              <circle cx="28" cy="23" r="2" fill="#0f172a"/>
              <path d="M12 19H36V21H12V19Z" fill="#10b981"/>
              <path d="M16 38C16 33 19 31 24 31C29 31 32 33 32 38" fill="#10b981"/>
            </svg>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#15803d] tracking-tight leading-none">
                1000+
              </div>
              <div className="text-xs font-bold text-neutral-800 mt-1 leading-tight">
                IT Ninjas
              </div>
            </div>
          </div>

          {/* Card 4: Lavender - 5000+ Projects */}
          <div className="px-5 py-3.5 rounded-2xl bg-[#f3e8ff]/70 border border-purple-100/90 flex items-center gap-4">
            {/* Project Nodes Icon */}
            <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
              <rect x="8" y="12" width="12" height="7" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5"/>
              <rect x="8" y="28" width="12" height="7" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5"/>
              <path d="M20 15H28C32 15 34 19 34 24C34 29 32 32 28 32H20" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="36" cy="32" r="5" fill="#ef4444"/>
              <path d="M33.5 32L35.5 34L39 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#6b21a8] tracking-tight leading-none">
                5000+
              </div>
              <div className="text-xs font-bold text-neutral-800 mt-1 leading-tight">
                Projects
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Quick Links Row with Blue Arrows */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 pt-1 text-xs sm:text-sm font-bold text-neutral-700 border-t border-neutral-100">
          <a
            href="https://www.cisin.com/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f15a24] transition-colors inline-flex items-center gap-1.5 group"
          >
            <span>Careers Site</span>
            <span className="text-[#0284c7] group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <a
            href="mailto:pr@cisin.com"
            className="hover:text-[#f15a24] transition-colors inline-flex items-center gap-1.5 group"
          >
            <span className="text-neutral-500 font-normal">(Marketing)</span>
            <span>pr@cisin.com</span>
            <span className="text-[#0284c7] group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <a
            href="mailto:hr@cisin.com"
            className="hover:text-[#f15a24] transition-colors inline-flex items-center gap-1.5 group"
          >
            <span className="text-neutral-500 font-normal">(HR)</span>
            <span>hr@cisin.com</span>
            <span className="text-[#0284c7] group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <button
            onClick={() => {
              if (onOpenConsultation) onOpenConsultation();
            }}
            className="hover:text-[#f15a24] transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Global Locations</span>
            <span className="text-[#0284c7] group-hover:translate-x-0.5 transition-transform">→</span>
          </button>

          <button
            onClick={() => {
              if (onOpenConsultation) onOpenConsultation();
            }}
            className="hover:text-[#f15a24] transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Become a Partner</span>
            <span className="text-[#0284c7] group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
