"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Star, CheckCircle2, ArrowRight, X, Sparkles, Building2, Quote } from "lucide-react";

interface ClientTestimonialsSectionProps {
  onOpenConsultation: () => void;
}

interface TestimonialItem {
  id: string;
  title: string;
  clientName: string;
  clientRole: string;
  company: string;
  location: string;
  imageSrc: string;
  videoUrl?: string;
  quote: string;
  tags: string[];
  metrics?: { label: string; value: string };
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "elearning",
    title: "E-Learning Management Solution",
    clientName: "David Sterling",
    clientRole: "VP of Digital Education",
    company: "EduSphere Global",
    location: "United States",
    imageSrc: "/testimonials/elearning.jpg",
    quote:
      "I'm really amazed by such a professional and efficient elearning management system offered by CIS. Now it is quite easy for our team to create and publish training programs and courses in a seamless manner.",
    tags: ["EdTech", "Enterprise LMS", "Next.js", "AWS"],
    metrics: { label: "Course Engagement", value: "+340%" },
  },
  {
    id: "danish-ecommerce",
    title: "Jesper Morgensen – Beliezzal/S, Denmark",
    clientName: "Jesper Morgensen",
    clientRole: "Founder & CEO",
    company: "Beliezzal/S",
    location: "Copenhagen, Denmark",
    imageSrc: "/testimonials/danish.jpg",
    quote:
      "I have been working with CIS for the past few years and therefore I would highly recommend them to any individual or any company who would need an eCommerce system or showcase of a business card online.",
    tags: ["E-Commerce", "Web Architecture", "Omnichannel", "Europe"],
    metrics: { label: "Checkout Velocity", value: "< 420ms" },
  },
  {
    id: "physician-app",
    title: "Mobile Software To Schedule Physicians",
    clientName: "Dr. Marcus Vance",
    clientRole: "Chief Medical Officer",
    company: "MedTech Innovations",
    location: "California, USA",
    imageSrc: "/testimonials/physician.jpg",
    quote:
      "I have a good working relationship with my lead programmer Atul Khare. We discuss the project daily through email or Skype and Cyber Infrastructure's unique project management system. Atul is very knowledgeable and has the exact experience I was looking for.",
    tags: ["HealthTech", "HIPAA Compliant", "React Native", "Dedicated Squad"],
    metrics: { label: "Scheduling Efficiency", value: "99.9%" },
  },
  {
    id: "food-startup",
    title: "Website Development For A Food Startup Company",
    clientName: "Elena Rostova",
    clientRole: "Co-Founder & COO",
    company: "FreshBite Direct",
    location: "Johannesburg / London",
    imageSrc: "/testimonials/foodstartup.jpg",
    quote:
      "I'm super happy with the services provided by CIS. My website is up and running and it's really done well. The work provided by CIS is really outstanding because this team is customer-centric and they try to find solutions to my problems. So for me, it's really positive. So, Thank you, CIS.",
    tags: ["FoodTech", "High Concurrency", "Custom Platform", "Stripe"],
    metrics: { label: "Active Subscribers", value: "120K+" },
  },
];

export function ClientTestimonialsSection({
  onOpenConsultation,
}: ClientTestimonialsSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<TestimonialItem | null>(null);

  return (
    <section className="relative bg-[#fdfcfb] text-neutral-900 py-24 sm:py-32 border-t border-b border-neutral-200/80 select-none">
      {/* Luminous Organic Orange & Amber Backdrop Aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing aura spheres in CIS Brand Warm Orange */}
        <div className="absolute top-10 -left-20 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#f15a24]/30 via-[#fb923c]/25 to-[#fef08a]/20 blur-3xl opacity-75" />
        <div className="absolute bottom-10 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#fed7aa]/45 via-[#f15a24]/20 to-transparent blur-3xl opacity-70" />
        
        {/* Subtle geometric ring watermark */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full border border-orange-400/20 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] rounded-full border border-[#f15a24]/15 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Sticky Title & Credibility Highlights */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#f15a24]/10 text-[#f15a24] border border-[#f15a24]/25">
                <Sparkles className="w-3.5 h-3.5 text-[#f15a24]" />
                <span>CLIENT VOICES & VIDEO TESTIMONIALS</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-950 tracking-[-0.035em] leading-[1.08] font-sans">
                Secure, Streamline, and Succeed with Confidence
              </h2>

              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed pt-2 font-sans">
                Discover firsthand how global enterprises, visionary scale-ups, and technology founders scale with CIS as their trusted engineering engine.
              </p>
            </div>

            {/* Key Trust Metrics */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black font-sans text-[#f15a24]">
                  98.4%
                </div>
                <div className="text-xs font-bold text-neutral-700 mt-1">
                  Client Retention Rate
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black font-sans text-[#ea580c]">
                  5000+
                </div>
                <div className="text-xs font-bold text-neutral-700 mt-1">
                  Projects Delivered
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-950 hover:bg-[#f15a24] text-white text-sm sm:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-orange-500/20 active:scale-95 cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Vertical Stream of Video Testimonial Cards */}
          <div className="lg:col-span-7 space-y-8">
            {TESTIMONIALS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Video Preview Frame */}
                <div
                  onClick={() => setSelectedVideo(item)}
                  className="relative aspect-[16/9] w-full bg-neutral-900 cursor-pointer overflow-hidden group/vid"
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover/vid:scale-105 transition-transform duration-500"
                  />

                  {/* YouTube Style Red Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover/vid:bg-black/30 transition-colors">
                    <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-2xl bg-[#ff0000] text-white flex items-center justify-center shadow-2xl group-hover/vid:scale-110 group-hover/vid:bg-[#cc0000] transition-all">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Top CIS Tag on Video */}
                  <div className="absolute top-3 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
                    <span>Verified Video Review</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 group-hover:text-[#f15a24] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-0.5">
                        {item.clientName} • {item.clientRole} ({item.location})
                      </p>
                    </div>

                    {item.metrics && (
                      <div className="text-right">
                        <span className="text-lg sm:text-xl font-black font-mono text-[#15803d]">
                          {item.metrics.value}
                        </span>
                        <span className="block text-[10px] uppercase font-mono text-neutral-400">
                          {item.metrics.label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Quote text */}
                  <div className="relative pl-6">
                    <Quote className="w-4 h-4 text-emerald-600/40 absolute left-0 top-0.5" />
                    <p className="text-sm sm:text-base text-neutral-700 font-normal leading-relaxed italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-3 py-1 rounded-lg bg-neutral-100 text-neutral-700 font-semibold border border-neutral-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 w-full max-w-4xl bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-[#f15a24] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player Display */}
              <div className="relative aspect-[16/9] w-full bg-black">
                <Image
                  src={selectedVideo.imageSrc}
                  alt={selectedVideo.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white space-y-2">
                  <span className="text-xs font-mono font-bold text-[#10b981] uppercase tracking-wider">
                    {selectedVideo.company} • {selectedVideo.location}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold">
                    {selectedVideo.title}
                  </h4>
                  <p className="text-sm text-slate-200 max-w-2xl leading-relaxed">
                    &ldquo;{selectedVideo.quote}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
