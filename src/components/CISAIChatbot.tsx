"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  Phone,
  Mail,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Minus,
  MessageSquare,
} from "lucide-react";
import AIAvatarAlive from "./AIAvatarAlive";

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  quickReplies?: string[];
  showSalesContact?: boolean;
}

interface CISAIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  initialQuery?: string;
  onOpenConsultation: (track?: "startup" | "enterprise" | "general") => void;
}

const SALES_PHONE = "+1-435-800-0086";
const SALES_EMAIL = "info@cisin.com";

const INITIAL_GREETING: ChatMessage = {
  id: "greeting",
  sender: "bot",
  text: "Hello! Welcome to CIS. I am your **Direct Connection to our Sales & Solutions Engineering Team**.\n\nYou can chat with us live right here, or reach our sales leadership directly by phone at **+1-435-800-0086** to discuss your project right away with zero delay!",
  timestamp: "Just now",
  showSalesContact: true,
  quickReplies: [
    "📞 Call Sales Team Directly",
    "🚀 Build an AI MVP in 8 weeks",
    "👥 Hire dedicated AI engineers",
    "💰 Pricing & sprint estimates",
    "🔄 Legacy system modernization",
  ],
};

function generateAIResponse(query: string): {
  text: string;
  quickReplies: string[];
  showSalesContact?: boolean;
} {
  const q = query.toLowerCase();

  // 1. Phone number / Mobile number / Contact sales requests
  if (
    q.includes("mobile") ||
    q.includes("phone") ||
    q.includes("number") ||
    q.includes("call") ||
    q.includes("contact") ||
    q.includes("sales") ||
    q.includes("talk") ||
    q.includes("speak") ||
    q.includes("human") ||
    q.includes("dial") ||
    q.includes("reach")
  ) {
    return {
      text: "Here is our direct Sales & Solutions Engineering contact to discuss your project immediately:\n\n• 📞 **Direct Sales Phone**: **+1-435-800-0086** (Toll-Free / Global Line)\n• ✉️ **Direct Sales Email**: **info@cisin.com**\n• 🕒 **Availability**: 24/7 Global Response (Silicon Valley, London, Singapore, India)\n\nOur sales directors and principal architects are available right now to discuss your scope, tech stack, and timeline with no waiting.",
      quickReplies: ["📞 Call +1-435-800-0086 Now", "✉️ Send Direct Email", "🚀 0-to-1 MVP Details", "💰 Pricing Overview"],
      showSalesContact: true,
    };
  }

  // 2. MVP / Startup
  if (q.includes("mvp") || q.includes("startup") || q.includes("0 to 1") || q.includes("launch") || q.includes("co-founder")) {
    return {
      text: "✅ **Your request has been routed directly to our Startup Solutions Squad**.\n\n• **MVP Delivery**: Rapid 6–8 week sprints from prototype to production.\n• **Tech Stack**: Next.js, Python FastAPI/Node.js, PostgreSQL/Supabase, AWS/GCP.\n• **Co-Founder Advisory**: Architecture feasibility, AI model selection, and venture readiness.\n\nCall our sales team right now at **+1-435-800-0086** to lock in an engineering pod for your launch.",
      quickReplies: ["📞 Call Sales: +1-435-800-0086", "💡 MVP Pricing Estimate", "🏆 Startup Case Studies"],
      showSalesContact: true,
    };
  }

  // 3. AI & Autonomous Agents
  if (q.includes("agent") || q.includes("workflow") || q.includes("autonomous") || q.includes("rag") || q.includes("llm")) {
    return {
      text: "✅ **Your AI requirements have been shared with our Chief AI Architect**.\n\n• **Multi-Agent Systems**: LangGraph, CrewAI, AutoGen with tool-calling.\n• **Enterprise RAG**: Sub-second context-aware semantic retrieval.\n• **Privacy & Security**: Private VPC LLM deployment with zero data leakage.\n\nConnect with our AI leadership directly at **+1-435-800-0086**.",
      quickReplies: ["📞 Call +1-435-800-0086", "⚡ Nokia Case Study (10M+ ops/s)", "🔒 Enterprise VPC LLMs"],
      showSalesContact: true,
    };
  }

  // 4. Legacy Modernization
  if (q.includes("legacy") || q.includes("modern") || q.includes("monolith") || q.includes("slingshot") || q.includes("migrate")) {
    return {
      text: "✅ **Your legacy modernization inquiry has been submitted to our Enterprise Architects**.\n\n• **CIS Slingshot AI**: Automated reverse engineering and dependency mapping.\n• **Zero Downtime**: Decoupled cloud microservices migration.\n• **45% Faster Migration**: Drastic reduction in legacy TCO.\n\nSpeak with our modernization directors at **+1-435-800-0086**.",
      quickReplies: ["📞 Call +1-435-800-0086", "📊 Request Legacy Audit", "🏢 CMMI Level 5 SLA"],
      showSalesContact: true,
    };
  }

  // 5. Cost & Pricing
  if (q.includes("cost") || q.includes("price") || q.includes("pricing") || q.includes("estimate") || q.includes("budget") || q.includes("rates")) {
    return {
      text: "Here is our transparent engagement framework:\n\n• **Startup 0 → 1 MVP**: Fixed-price milestones ($20k–$45k depending on scope).\n• **Dedicated AI Engineering Pods**: Senior engineers from $35–$65/hr with 100% time-zone overlap.\n• **Enterprise SLA Contracts**: Custom outcome-based engagement.\n\nFor an immediate customized quotation, call our sales team directly at **+1-435-800-0086**.",
      quickReplies: ["📞 Call +1-435-800-0086", "✉️ Email info@cisin.com", "📝 Discuss Scope"],
      showSalesContact: true,
    };
  }

  // 6. Dedicated Engineers / Staffing
  if (q.includes("engineer") || q.includes("team") || q.includes("hire") || q.includes("staff") || q.includes("ninja") || q.includes("developers")) {
    return {
      text: "✅ **CIS has 1,000+ In-House Certified IT Ninjas & AI Engineers**:\n\n• **Vetted Top 1%**: Full-stack, AI/ML, Cloud/DevOps, and QA engineers.\n• **Institutional Certifications**: Microsoft Gold Partner, CMMI Level 5, ISO 27001, SOC 2 Type II.\n• **Fast Deployment**: Dedicated pods onboarded in 48–72 hours.\n\nCall our staffing desk immediately at **+1-435-800-0086**.",
      quickReplies: ["📞 Call Sales: +1-435-800-0086", "👥 Request Team Profiles", "🔒 Security & IP Protection"],
      showSalesContact: true,
    };
  }

  // Default synthesis
  return {
    text: `✅ **Your message has been dispatched immediately to our Sales & Solutions Engineering Leadership.**\n\n• **Direct Sales Line**: **+1-435-800-0086**\n• **Direct Email**: **info@cisin.com**\n• **Scope Evaluation**: Our principal architects are reviewing your inquiry right now to prepare architecture recommendations, feasibility, and sprint estimates.\n\nYou can call us directly right now for immediate verbal discussion!`,
    quickReplies: ["📞 Call Sales: +1-435-800-0086", "✉️ Email info@cisin.com", "🔍 Explore Services"],
    showSalesContact: true,
  };
}

export function CISAIChatbot({
  isOpen,
  onClose,
  onOpen,
  initialQuery,
  onOpenConsultation,
}: CISAIChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showAdvisorCard, setShowAdvisorCard] = useState(true);
  const [isChatReady, setIsChatReady] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastProcessedQueryRef = useRef<string | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 15 seconds delay on initial load before revealing the girl chat window
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatReady(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (initialQuery && initialQuery !== lastProcessedQueryRef.current) {
      lastProcessedQueryRef.current = initialQuery;
      handleSendMessage(initialQuery);
    }
  }, [initialQuery]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAIResponse(text);
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        quickReplies: response.quickReplies,
        showSalesContact: response.showSalesContact,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 550);
  };

  const handleQuickReply = (replyText: string) => {
    if (replyText.includes("Call") || replyText.includes("435")) {
      window.location.href = `tel:${SALES_PHONE}`;
      return;
    }
    if (replyText.includes("Email")) {
      window.location.href = `mailto:${SALES_EMAIL}`;
      return;
    }
    handleSendMessage(replyText);
  };

  const handleResetChat = () => {
    setMessages([INITIAL_GREETING]);
  };

  return (
    <>
      {/* 1. Interactive "SPEAK TO A REAL HUMAN" Card Widget in Bottom-Right Corner (Only appears after 15 seconds) */}
      {!isOpen && isChatReady && showAdvisorCard && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-50 w-[190px] sm:w-[210px] h-[280px] sm:h-[300px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-neutral-800 bg-[#0c0d10] text-white select-none group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
        >
          {/* Authentic Real Human & AI Sales Advisor Model with Realistic Blinking Eyes */}
          <div className="absolute inset-0 z-0">
            <AIAvatarAlive showBadge={true} />
          </div>

          {/* Top-Right Minimize Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowAdvisorCard(false);
            }}
            className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/20"
            title="Minimize"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>

          {/* Subtle Bottom Gradient Scrim for crystal clear readability */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Bottom Card Content: "SPEAK TO A REAL HUMAN" + CIS Short Logo Emblem + "Get Started" Button */}
          <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 z-20 space-y-2.5">
            <div className="text-left">
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-white block uppercase drop-shadow-md">
                SPEAK TO A <br />
                REAL HUMAN
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* CIS Short Emblem / Rounded Logo */}
              <div className="w-9 h-9 rounded-xl bg-neutral-900/90 border border-white/20 flex items-center justify-center shrink-0 shadow-md">
                <div className="w-5 h-5 rounded-full border-2 border-[#f15a24] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#f15a24]" />
                </div>
              </div>

              {/* Orange "Get Started" Pill Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen();
                }}
                className="flex-1 py-2 px-3 rounded-full bg-[#f15a24] hover:bg-[#ff6834] text-white text-xs font-bold transition-all duration-200 shadow-lg shadow-orange-500/30 active:scale-95 cursor-pointer text-center whitespace-nowrap"
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Reopen Launcher when minimized card was closed (also only after 15 seconds) */}
      {!isOpen && isChatReady && !showAdvisorCard && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setShowAdvisorCard(true);
            onOpen();
          }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-full bg-white text-neutral-900 shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_50px_rgba(241,90,36,0.35)] transition-shadow duration-300 border border-neutral-200 cursor-pointer group"
          aria-label="Open CIS Chat"
        >
          <div className="relative flex items-center justify-center text-[#f15a24]">
            <Sparkles className="w-5 h-5 fill-[#f15a24] animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-tight text-neutral-950">Speak to Sales</span>
        </motion.button>
      )}

      {/* 2. Interactive Direct Chat Window (White Theme, Instant Sales Connectivity) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[430px] h-[590px] max-h-[85vh] bg-white text-neutral-900 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.25)] border border-neutral-200/90 flex flex-col overflow-hidden select-none"
          >
            {/* Header: CIS Logo + AI Sales Advisor + Direct Sales Status + Action Controls */}
            <div className="px-4 sm:px-5 py-3 bg-neutral-50/95 border-b border-neutral-200/80 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Official CIS Logo */}
                <div className="relative h-7 w-24 sm:w-28 flex items-center">
                  <Image
                    src="/cis-logo.png"
                    alt="CIS - Cyber Infrastructure"
                    width={180}
                    height={55}
                    priority
                    className="h-6 sm:h-7 w-auto object-contain object-left"
                  />
                </div>

                {/* AI Sales Advisor Avatar with Live Ping */}
                <div className="flex items-center gap-1.5 pl-1 border-l border-neutral-200">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#f15a24]/40 ring-1 ring-emerald-500/40">
                    <Image
                      src="/cis-advisor-call.png"
                      alt="CIS AI Sales Advisor"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    AI SALES LIVE
                  </span>
                </div>
              </div>

              {/* Header Action Icons */}
              <div className="flex items-center gap-1 text-neutral-400">
                <button
                  onClick={handleResetChat}
                  className="p-1.5 rounded-lg hover:bg-neutral-200 hover:text-neutral-800 transition-colors cursor-pointer"
                  title="Reset conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-neutral-200 hover:text-neutral-800 transition-colors cursor-pointer"
                  title="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Direct Sales Team Banner at top of chat */}
            <div className="px-4 py-2 bg-[#f15a24]/10 border-b border-[#f15a24]/20 flex items-center justify-between text-xs text-neutral-800">
              <span className="font-semibold text-neutral-900">Direct Sales Line:</span>
              <a
                href={`tel:${SALES_PHONE}`}
                className="font-bold text-[#f15a24] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>{SALES_PHONE}</span>
              </a>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-3.5 no-scrollbar bg-[#fbfbfd]">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2.5 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#f15a24]/50 shrink-0 mt-1 shadow-xs">
                      <Image
                        src="/cis-advisor-human.png"
                        alt="CIS AI Advisor"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm font-normal leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#f15a24] text-white rounded-tr-xs shadow-sm"
                        : "bg-white border border-neutral-200/90 text-neutral-800 rounded-tl-xs shadow-2xs"
                    }`}
                  >
                    {/* Message Content */}
                    <div className="space-y-1.5">
                      {msg.text.split("\n\n").map((paragraph, pIdx) => (
                        <p key={pIdx}>
                          {paragraph.split("\n").map((line, lIdx) => (
                            <span key={lIdx} className="block">
                              {line.startsWith("• ") ? (
                                <span className="flex items-start gap-1.5 pl-1 my-0.5">
                                  <span className="text-[#f15a24] font-bold">•</span>
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: line
                                        .replace(/^• /, "")
                                        .replace(
                                          /\*\*(.*?)\*\*/g,
                                          msg.sender === "user"
                                            ? "<strong class='text-white font-semibold'>$1</strong>"
                                            : "<strong class='text-neutral-950 font-semibold'>$1</strong>"
                                        ),
                                    }}
                                  />
                                </span>
                              ) : (
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: line.replace(
                                      /\*\*(.*?)\*\*/g,
                                      msg.sender === "user"
                                        ? "<strong class='text-white font-semibold'>$1</strong>"
                                        : "<strong class='text-neutral-950 font-semibold'>$1</strong>"
                                    ),
                                  }}
                                />
                              )}
                            </span>
                          ))}
                        </p>
                      ))}
                    </div>

                    {/* Direct Click-to-Call Buttons (Zero Form Requirement) */}
                    {msg.showSalesContact && (
                      <div className="mt-3 pt-2.5 border-t border-neutral-100 flex flex-wrap items-center gap-2">
                        <a
                          href={`tel:${SALES_PHONE}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f15a24] hover:bg-[#ff6834] text-white font-bold text-xs transition-all shadow-sm active:scale-95"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call {SALES_PHONE}</span>
                        </a>

                        <a
                          href={`mailto:${SALES_EMAIL}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs transition-all border border-neutral-200"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#0066cc]" />
                          <span>Email Sales</span>
                        </a>
                      </div>
                    )}

                    {/* Quick Replies chips */}
                    {msg.quickReplies && msg.quickReplies.length > 0 && (
                      <div className="mt-3 pt-2.5 flex flex-wrap gap-1.5 border-t border-neutral-100">
                        {msg.quickReplies.map((reply, rIdx) => (
                          <button
                            key={rIdx}
                            onClick={() => handleQuickReply(reply)}
                            className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-[#f15a24]/10 hover:border-[#f15a24]/40 text-neutral-700 hover:text-[#f15a24] border border-neutral-200 transition-all cursor-pointer font-medium"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    )}

                    <span
                      className={`text-[10px] block mt-1.5 ${
                        msg.sender === "user" ? "text-white/80 text-right" : "text-neutral-400"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2.5 items-center">
                  <div className="w-7 h-7 rounded-full bg-[#f15a24] text-white flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-xs bg-white border border-neutral-200 shadow-2xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#f15a24] animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-[#f15a24] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-[#f15a24] animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat Footer Input: Instant Dispatch to Sales Team */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 sm:p-3.5 bg-white border-t border-neutral-200 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message or project question..."
                className="flex-1 px-4 py-2.5 rounded-full bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#f15a24] focus:bg-white transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="w-9 h-9 rounded-full bg-[#f15a24] hover:bg-[#ff6834] disabled:opacity-40 disabled:hover:bg-[#f15a24] text-white flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-md active:scale-95"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
