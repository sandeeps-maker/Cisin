"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { FraudAlertBanner } from "@/components/FraudAlertBanner";
import { FloatingStoryVideoWidget } from "@/components/FloatingStoryVideoWidget";
import { Hero } from "@/components/Hero";
import { StylistCredibilitySection } from "@/components/StylistCredibilitySection";
import { PartnersSection } from "@/components/PartnersSection";
import { FAQSection } from "@/components/FAQSection";
import { ClientTestimonialsSection } from "@/components/ClientTestimonialsSection";
import { StartupJourney } from "@/components/StartupJourney";
import { WhiteCaseStudiesSection } from "@/components/WhiteCaseStudiesSection";
import { EnterpriseSection } from "@/components/EnterpriseSection";
import { OrbitFooter } from "@/components/OrbitFooter";
import { ConsultationModal } from "@/components/ConsultationModal";
import { DirectoryMegaMenu } from "@/components/DirectoryMegaMenu";
import { CISAIChatbot } from "@/components/CISAIChatbot";
import { BackToTopButton } from "@/components/BackToTopButton";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTrack, setModalTrack] = useState<"startup" | "enterprise" | "general">("general");
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInitialQuery, setChatInitialQuery] = useState("");

  const handleOpenConsultation = (track: "startup" | "enterprise" | "general" = "general") => {
    setModalTrack(track);
    setModalOpen(true);
  };

  const handleOpenChatWithQuery = (query: string) => {
    setChatInitialQuery(query);
    setChatOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0c0d10] text-slate-100 relative selection:bg-[#f15a24] selection:text-white">
      {/* 00 Animated Fraud Alert Strip at the Very Top of the Website */}
      <FraudAlertBanner />

      {/* 01 Full-Width Top Header Bar + Clean Navbar with Mega Menu Toggle */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onToggleMegaMenu={() => setMegaMenuOpen(true)}
      />

      {/* 02 First Fold Hero */}
      <Hero
        onOpenConsultation={handleOpenConsultation}
        onOpenChatWithQuery={handleOpenChatWithQuery}
      />

      {/* 03 Second Slide: Stylist Credibility & Verified Scale Metrics */}
      <StylistCredibilitySection />

      {/* 04 Services, Industry/Domains & Technologies */}
      <PartnersSection onOpenConsultation={() => handleOpenConsultation("general")} />

      {/* 05 Global Client Case Studies ("Innovation, Engineered by CIS") */}
      <StartupJourney onOpenConsultation={() => handleOpenConsultation("startup")} />

      {/* 06 Client Video Testimonials ("Secure, Streamline, and Succeed with Confidence") */}
      <ClientTestimonialsSection onOpenConsultation={() => handleOpenConsultation("general")} />

      {/* 08 Middle White Section 2: Custom Software Development Services Slider */}
      <WhiteCaseStudiesSection onOpenConsultation={() => handleOpenConsultation("general")} />

      {/* 09 Enterprise Complexity & CMMI Level 5 Scale (Dark) */}
      <EnterpriseSection onOpenConsultation={() => handleOpenConsultation("enterprise")} />

      {/* 10 Side-by-Side Contact Form & Accordion FAQ Section */}
      <FAQSection onOpenConsultation={() => handleOpenConsultation("general")} />

      {/* 11 Tenity-Style Orbit Footer (Image 3: "Stay in our orbit" + Newsletter + Hubs) */}
      <OrbitFooter onOpenConsultation={handleOpenConsultation} />

      {/* Full-Screen Directory Mega Menu Drawer (Slides in from the right side) */}
      <AnimatePresence>
        {megaMenuOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
            {/* Smooth Dimming Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMegaMenuOpen(false)}
              className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm transition-all"
            />

            {/* Right Sliding Mega Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative z-10 w-full max-w-7xl h-full overflow-hidden bg-white shadow-2xl flex flex-col no-scrollbar"
            >
              <DirectoryMegaMenu
                onClose={() => setMegaMenuOpen(false)}
                onOpenConsultation={() => {
                  setMegaMenuOpen(false);
                  handleOpenConsultation("general");
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Interactive Project Scope & Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTrack={modalTrack === "general" ? "startup" : modalTrack}
      />

      {/* 24/7 Live CIS AI Architecture Chatbot */}
      <CISAIChatbot
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        onOpen={() => setChatOpen(true)}
        initialQuery={chatInitialQuery}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Floating Story Video Widget (Appears after 10s with Cancel/Remove Button) */}
      <FloatingStoryVideoWidget />

      {/* Floating Back to Top Arrow Button on the Right Side */}
      <BackToTopButton />
    </main>
  );
}
