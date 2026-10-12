"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Globe2,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface FooterProps {
  onOpenConsultation: (track?: "startup" | "enterprise") => void;
}

export function Footer({ onOpenConsultation }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#02050e] border-t border-white/10 text-slate-400 text-xs relative overflow-hidden">
      {/* Top Global Hubs Bar */}
      <div className="border-b border-white/5 py-8 bg-[#040814]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Globe2 className="w-5 h-5 text-[#00e5ff]" />
              <div>
                <span className="text-white font-bold block text-sm">
                  Global Delivery & Solution Hubs
                </span>
                <span className="text-slate-400 text-xs">
                  United States • United Kingdom • Australia • Singapore • India
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#f15a24]" />
                <a
                  href="mailto:contact@cisin.com"
                  className="hover:text-white transition-colors"
                >
                  contact@cisin.com
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#00e5ff]" />
                <span className="text-slate-300">+1 (888) 572-3991 (US Toll Free)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-white/95 px-3 py-1.5 rounded-xl border border-white/20">
              <Image
                src="/cis-logo.png"
                alt="CIS - We make IT possible"
                width={128}
                height={44}
                className="h-7 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-300 text-sm font-medium mt-3">
              AI-first technology. Human-led partnership.
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              CIS (Cyber Infrastructure) is the technology partner behind the next generation of startups, intelligent products, and global enterprises.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#0066cc]/20 border border-[#0066cc]/40 text-[#38bdf8]">
                CMMI Level 5
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-slate-300">
                ISO 27001
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-slate-300">
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* AI & Innovation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              AI & Innovation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#ai-capabilities" className="hover:text-[#00e5ff] transition-colors">
                  Agentic AI Workflows
                </a>
              </li>
              <li>
                <a href="#ai-capabilities" className="hover:text-[#00e5ff] transition-colors">
                  Generative AI & LLMs
                </a>
              </li>
              <li>
                <a href="#ai-capabilities" className="hover:text-[#00e5ff] transition-colors">
                  Computer Vision
                </a>
              </li>
              <li>
                <a href="#ai-capabilities" className="hover:text-[#00e5ff] transition-colors">
                  Conversational Voice AI
                </a>
              </li>
              <li>
                <a href="#ai-capabilities" className="hover:text-[#00e5ff] transition-colors">
                  MLOps & Governance
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Product Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Full-Stack Web & SaaS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cloud & Kubernetes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  UI/UX Design Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Focus */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Practice
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#startup-journey" className="hover:text-[#f15a24] transition-colors">
                  Startups (0 → 1)
                </a>
              </li>
              <li>
                <a href="#startup-journey" className="hover:text-[#f15a24] transition-colors">
                  Technical Co-Founder
                </a>
              </li>
              <li>
                <a href="#enterprise" className="hover:text-[#00e5ff] transition-colors">
                  Enterprise Modernization
                </a>
              </li>
              <li>
                <a href="#enterprise" className="hover:text-[#00e5ff] transition-colors">
                  Dedicated Pods / Teams
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Client Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Industry Verticals
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Insights & AI Radar
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Company History (20+ Yrs)
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation()}
                  className="hover:text-[#00e5ff] transition-colors text-left"
                >
                  Careers (1,000+ Team)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation()}
                  className="text-[#f15a24] font-semibold hover:underline flex items-center gap-1"
                >
                  Contact Us <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Addresses Matrix */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[11px] text-slate-400">
          <div>
            <span className="text-white font-bold block mb-1">USA — Silicon Valley</span>
            <p>San Jose, California, United States</p>
            <p className="text-slate-500 mt-0.5">Phone: +1 (888) 572-3991</p>
          </div>
          <div>
            <span className="text-white font-bold block mb-1">UK & EMEA HQ</span>
            <p>London, United Kingdom</p>
            <p className="text-slate-500 mt-0.5">Phone: +44 20 8090 0000</p>
          </div>
          <div>
            <span className="text-white font-bold block mb-1">APAC — Singapore</span>
            <p>Marina Bay Financial Centre, Singapore</p>
            <p className="text-slate-500 mt-0.5">APAC Partner Network</p>
          </div>
          <div>
            <span className="text-white font-bold block mb-1">India Development Campus</span>
            <p>CIS World, Crystal IT Park / Indore & Bengaluru</p>
            <p className="text-slate-500 mt-0.5">100% In-House Engineering Campus</p>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Cyber Infrastructure (CIS). All rights reserved. &ldquo;We make IT possible&rdquo; is a registered trademark of CISIN.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Security & Compliance
            </a>
            <button
              onClick={scrollToTop}
              className="text-[#00e5ff] hover:underline font-mono"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
