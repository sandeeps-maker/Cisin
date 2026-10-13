"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Check, ArrowUpRight, ChevronRight, Sparkles, Building2 } from "lucide-react";
import { CinematicAtmosphereBackground } from "./CinematicAtmosphereBackground";

interface OrbitFooterProps {
  onOpenConsultation: (track?: "startup" | "enterprise" | "general") => void;
}

export function OrbitFooter({ onOpenConsultation }: OrbitFooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-[#0c0d10] text-white overflow-hidden select-none">
      {/* Uploaded Ribbed Graphic Background with Rich Chocolate Theme & Soft Cinematic Visibility */}
      <CinematicAtmosphereBackground side="left" themeColor="footer" imageSrc="/cis-hero-slats-bg.png" opacity={0.34} />

      {/* Atmospheric Contrast Blend Overlay so foreground text and links pop with maximum clarity */}
      <div className="absolute inset-0 bg-[#0c0d10]/25 pointer-events-none z-[1]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0c0d10] to-transparent pointer-events-none z-[1]" />

      {/* 01 Independent Global Countries Strip Above Main Footer (Matches Screenshot 1 top bar) */}
      <div className="relative z-20 border-y border-white/10 bg-transparent py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/10 items-center">
            {/* USA */}
            <a
              href="tel:+18556730247"
              className="flex items-center gap-3.5 px-3 sm:px-6 py-2 group/flag cursor-pointer transition-all rounded-xl hover:bg-white/[0.04]"
            >
              <span className="text-2xl sm:text-3xl shrink-0 drop-shadow-sm select-none">🇺🇸</span>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-white block tracking-tight">
                  USA
                </span>
                <span className="text-white/70 group-hover/flag:text-white font-mono text-[11px] sm:text-xs block transition-colors truncate">
                  +1-855-673-0247
                </span>
              </div>
            </a>

            {/* Singapore */}
            <a
              href="tel:+61361460000"
              className="flex items-center gap-3.5 px-3 sm:px-6 py-2 group/flag cursor-pointer transition-all rounded-xl hover:bg-white/[0.04]"
            >
              <span className="text-2xl sm:text-3xl shrink-0 drop-shadow-sm select-none">🇸🇬</span>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-white block tracking-tight">
                  Singapore
                </span>
                <span className="text-white/70 group-hover/flag:text-white font-mono text-[11px] sm:text-xs block transition-colors truncate">
                  +61-3-6146-0000
                </span>
              </div>
            </a>

            {/* UK/EU */}
            <a
              href="tel:+447401250008"
              className="flex items-center gap-3.5 px-3 sm:px-6 py-2 group/flag cursor-pointer transition-all rounded-xl hover:bg-white/[0.04]"
            >
              <span className="text-2xl sm:text-3xl shrink-0 drop-shadow-sm select-none">🇬🇧</span>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-white block tracking-tight">
                  UK/EU
                </span>
                <span className="text-white/70 group-hover/flag:text-white font-mono text-[11px] sm:text-xs block transition-colors truncate">
                  +44-7401-250008
                </span>
              </div>
            </a>

            {/* IND */}
            <a
              href="tel:+917313564000"
              className="flex items-center gap-3.5 px-3 sm:px-6 py-2 group/flag cursor-pointer transition-all rounded-xl hover:bg-white/[0.04]"
            >
              <span className="text-2xl sm:text-3xl shrink-0 drop-shadow-sm select-none">🇮🇳</span>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-white block tracking-tight">
                  IND
                </span>
                <span className="text-white/70 group-hover/flag:text-white font-mono text-[11px] sm:text-xs block transition-colors truncate">
                  +91-731-356-4000
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 02 Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 pt-16 sm:pt-20 pb-16 space-y-16">
        {/* Main Grid: Stay in our orbit & Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 items-start border-b border-white/10">
          {/* Left Column: White CIS Logo, Stay in our orbit & Social Media Icons */}
          <div className="lg:col-span-6 space-y-8">
            {/* White Version CIS Official Logo */}
            <div className="relative h-12 sm:h-14 w-48 sm:w-56 cursor-pointer">
              <Link href="/" className="cursor-pointer">
                <Image
                  src="/cis-logo-white.png"
                  alt="CIS - Cyber Infrastructure"
                  fill
                  sizes="224px"
                  className="object-contain object-left cursor-pointer"
                  priority
                />
              </Link>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-[-0.035em] leading-[0.93]">
              Stay in <br />
              our orbit
            </h2>

            {/* Social Media Media-Icons Only (Replaced Newsletter with Follow Our Work Media Icons) */}
            <div className="space-y-4 pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold block">
                Follow Our Work
              </span>
              <div className="flex items-center gap-3.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com/cisin"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-[#1877f2] border border-white/10 hover:border-transparent text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/cisin"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-[#0a66c2] border border-white/10 hover:border-transparent text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.761-2.239-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com/cisin"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter X"
                  className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-neutral-900 border border-white/10 hover:border-white/30 text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/cisin"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-white/10 hover:border-transparent text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/cisin"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-[#ff0000] border border-white/10 hover:border-transparent text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Call-to-Action with Big Capsule Button & Hubs */}
          <div className="lg:col-span-6 space-y-8 lg:pl-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#f15a24]/15 text-[#f15a24] border border-[#f15a24]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
                <span>LET&apos;S BUILD WHAT&apos;S NEXT</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-[-0.035em] leading-tight">
                Have an idea worth building?
              </h3>
              <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed max-w-lg">
                Get insights, stories, and scalable technology from across our global technology ecosystem.
              </p>
            </div>

            {/* Consistent Signature Capsule CTA Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenConsultation("startup")}
                className="group flex items-center gap-3.5 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 text-sm sm:text-base font-extrabold transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer border border-white"
              >
                <span className="tracking-tight">Let&apos;s talk</span>
                <span className="transition-transform group-hover:translate-x-1 duration-300 text-neutral-950 font-bold">
                  →
                </span>
              </button>

              <button
                onClick={() => onOpenConsultation("enterprise")}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/25 hover:border-white/60 bg-white/[0.04] hover:bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
              >
                <span>Explore Solutions</span>
                <span className="w-6 h-6 rounded-full border border-white/30 group-hover:border-white group-hover:bg-white group-hover:text-neutral-900 flex items-center justify-center transition-all">
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 03 CIS Information & Navigation Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 text-xs text-white">
          {/* Col 1: Headquarters & Certified Workplace */}
          <div className="lg:col-span-4 space-y-4 max-w-sm">
            <p className="text-white text-sm font-semibold leading-relaxed">
              Exceptional Technology Solutions on latest tech.
            </p>
            <p className="text-white/80 text-xs leading-relaxed">
              2880 Zanker Road, #203, San Jose, CA 95134, USA
            </p>

            <div className="pt-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-white block mb-2 font-bold">
                CERTIFIED WORKPLACES
              </span>
              <div className="inline-block bg-[#e11d2a] text-white px-3.5 py-1.5 rounded-lg font-bold text-xs shadow-md tracking-tight cursor-default">
                Great Place To Work<sup className="text-[9px]">®</sup>
              </div>
            </div>
          </div>

          {/* Directory Columns shifted to the right side for clean alignment */}
          <div className="lg:col-span-8 lg:pl-10 xl:pl-16 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            {/* Col 2: Hire Services */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-tight border-b border-white/10 pb-2.5">
                Hire Services
              </h4>
              <ul className="space-y-3.5 sm:space-y-4 text-white/75 text-xs sm:text-[13px] pt-1">
                <li>
                  <button onClick={() => onOpenConsultation("enterprise")} className="text-white/75 hover:text-white transition-all duration-200 text-left cursor-pointer leading-relaxed block hover:translate-x-1">
                    Hire Big Data Analytics Company
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation("enterprise")} className="text-white/75 hover:text-white transition-all duration-200 text-left cursor-pointer leading-relaxed block hover:translate-x-1">
                    Hire Business Intelligence Analysts Services
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation("enterprise")} className="text-white/75 hover:text-white transition-all duration-200 text-left cursor-pointer leading-relaxed block hover:translate-x-1">
                    Hire Business Technology Consultants
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation("enterprise")} className="text-white/75 hover:text-white transition-all duration-200 text-left cursor-pointer leading-relaxed block hover:translate-x-1">
                    Hire Cyber Security Services Company
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation("enterprise")} className="text-white/75 hover:text-white transition-all duration-200 text-left cursor-pointer leading-relaxed block hover:translate-x-1">
                    Custom Software Development Company
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact Us */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-tight border-b border-white/10 pb-2.5">
                Contact Us
              </h4>
              <ul className="space-y-3.5 sm:space-y-4 text-white/75 text-xs sm:text-[13px] pt-1">
                <li>
                  <a href="mailto:info@cisin.com" className="text-white/85 hover:text-[#f15a24] transition-colors duration-200 flex items-center gap-1.5 font-mono text-[11px] sm:text-xs cursor-pointer leading-relaxed block hover:translate-x-1">
                    E-MAIL: info@cisin.com
                  </a>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation("general")} className="text-white/75 hover:text-white transition-all duration-200 text-left cursor-pointer leading-relaxed block hover:translate-x-1">
                    Contact Us - Global Offices
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation("general")} className="text-white/75 hover:text-white transition-all duration-200 text-left cursor-pointer leading-relaxed block hover:translate-x-1">
                    Management Team
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation("general")} className="text-white/75 hover:text-white transition-all duration-200 text-left cursor-pointer leading-relaxed block hover:translate-x-1">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation("general")} className="text-white/75 hover:text-white transition-all duration-200 text-left cursor-pointer leading-relaxed block hover:translate-x-1">
                    Our Story
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation("general")} className="text-white/75 hover:text-white transition-all duration-200 text-left cursor-pointer leading-relaxed block hover:translate-x-1">
                    Our Awards
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Information */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-tight border-b border-white/10 pb-2.5">
                Information
              </h4>
              <ul className="space-y-3.5 sm:space-y-4 text-white/75 text-xs sm:text-[13px] pt-1">
                <li>
                  <a href="#insights" className="text-white/75 hover:text-white transition-all duration-200 cursor-pointer leading-relaxed block hover:translate-x-1">
                    In The News
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-white/75 hover:text-white transition-all duration-200 cursor-pointer leading-relaxed block hover:translate-x-1">
                    Our Portfolio
                  </a>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation("general")} className="text-white/75 hover:text-white transition-all duration-200 text-left cursor-pointer leading-relaxed block hover:translate-x-1">
                    CSR
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation("general")} className="text-white/75 hover:text-white transition-all duration-200 text-left cursor-pointer leading-relaxed block hover:translate-x-1">
                    Career / Jobs
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenConsultation("general")} className="text-white/75 hover:text-white transition-all duration-200 text-left font-medium cursor-pointer leading-relaxed block hover:translate-x-1">
                    Coffee @ CIS
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 04 Bottom Bar: Copyright & Legal Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white">
          <div className="text-white/80">
            Trademark &amp; Copyright © Since 2003 - Cyber Infrastructure, &ldquo;CIS&rdquo; - Largest Technology Services Company.
          </div>

          <div className="flex flex-wrap items-center gap-5 text-white/70">
            <a href="https://www.cisin.com/blog" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer">
              CIS Blog
            </a>
            <button onClick={() => onOpenConsultation("general")} className="text-white/70 hover:text-white transition-colors duration-200 font-medium cursor-pointer">
              Get A Quote, Now
            </button>
            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer">
              Privacy Statement
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer">
              Terms Of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
