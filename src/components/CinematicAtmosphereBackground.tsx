"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface CinematicAtmosphereBackgroundProps {
  side?: "right" | "left" | "center";
  opacity?: number;
  className?: string;
  themeColor?: "hero" | "footer" | "blue" | "default";
  imageSrc?: string;
  showImage?: boolean;
}

type RGBA = [number, number, number, number];

interface ColorStop {
  x: number;
  core: RGBA;
  mid: RGBA;
  top: RGBA;
  accent: RGBA;
}

// Hero chromatic anchors: Blue -> Purple -> Red (Zero Green, soft low-contrast)
const HERO_COLOR_STOPS: ColorStop[] = [
  // 1. Blue (Left: 0.15) - Soft Sapphire Blue
  {
    x: 0.15,
    core: [32, 95, 215, 0.26],
    mid: [22, 65, 165, 0.18],
    top: [40, 130, 220, 0.16],
    accent: [55, 45, 180, 0.14],
  },
  // 2. Purple (Center: 0.50) - Soft Electric Purple & Amethyst
  {
    x: 0.50,
    core: [152, 45, 205, 0.26],
    mid: [110, 28, 165, 0.18],
    top: [180, 55, 220, 0.16],
    accent: [98, 35, 175, 0.14],
  },
  // 3. Red (Right: 0.82 / Screenshot 1 Anchor) - Soft Crimson Ruby Red
  {
    x: 0.82,
    core: [205, 36, 62, 0.28],
    mid: [148, 22, 50, 0.18],
    top: [220, 58, 55, 0.16],
    accent: [140, 26, 85, 0.14],
  },
];

// Footer chromatic anchors: Dark Brown & Warm Bronze Palette
const FOOTER_COLOR_STOPS: ColorStop[] = [
  // 1. Deep Espresso / Dark Chocolate (Left: 0.20)
  {
    x: 0.20,
    core: [95, 50, 24, 0.28],
    mid: [65, 32, 14, 0.20],
    top: [125, 70, 32, 0.18],
    accent: [78, 40, 18, 0.14],
  },
  // 2. Warm Bronze / Dark Amber Brown (Center: 0.52)
  {
    x: 0.52,
    core: [125, 66, 28, 0.30],
    mid: [88, 45, 20, 0.22],
    top: [160, 88, 38, 0.20],
    accent: [102, 54, 22, 0.16],
  },
  // 3. Rich Mahogany / Dark Brown (Right: 0.85)
  {
    x: 0.85,
    core: [108, 54, 24, 0.28],
    mid: [75, 36, 16, 0.20],
    top: [140, 75, 34, 0.18],
    accent: [90, 44, 18, 0.14],
  },
];

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function lerpRgba(c1: RGBA, c2: RGBA, t: number): string {
  const easedT = easeInOut(Math.max(0, Math.min(1, t)));
  const r = Math.min(255, Math.max(0, Math.round(lerp(c1[0], c2[0], easedT))));
  const g = Math.min(255, Math.max(0, Math.round(lerp(c1[1], c2[1], easedT))));
  const b = Math.min(255, Math.max(0, Math.round(lerp(c1[2], c2[2], easedT))));
  const a = Math.min(1, Math.max(0, +(lerp(c1[3], c2[3], easedT)).toFixed(3)));
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function interpolateAtmosphericColors(x: number, isFooter: boolean) {
  const stops = isFooter ? FOOTER_COLOR_STOPS : HERO_COLOR_STOPS;
  let s0 = stops[0];
  let s1 = stops[1];

  if (x <= stops[0].x) {
    s0 = stops[0];
    s1 = stops[0];
  } else if (x >= stops[stops.length - 1].x) {
    s0 = stops[stops.length - 1];
    s1 = stops[stops.length - 1];
  } else {
    for (let i = 0; i < stops.length - 1; i++) {
      if (x >= stops[i].x && x <= stops[i + 1].x) {
        s0 = stops[i];
        s1 = stops[i + 1];
        break;
      }
    }
  }

  const range = s1.x - s0.x;
  const t = range > 0.0001 ? Math.max(0, Math.min(1, (x - s0.x) / range)) : 0;

  return {
    core: lerpRgba(s0.core, s1.core, t),
    mid: lerpRgba(s0.mid, s1.mid, t),
    top: lerpRgba(s0.top, s1.top, t),
    accent: lerpRgba(s0.accent, s1.accent, t),
  };
}

/**
 * CinematicAtmosphereBackground
 * - Renders the user-provided ribbed atmospheric image (/cis-hero-slats-bg.png)
 * - Moves slightly with cursor movement (parallax translate3d)
 * - Supports different color theme for Footer vs Hero
 * - Soft, low-contrast, diffused chromatic glow shifting smoothly
 */
export function CinematicAtmosphereBackground({
  side = "right",
  opacity = 1,
  className = "",
  themeColor = "hero",
  imageSrc = "/cis-hero-slats-bg.png",
  showImage = true,
}: CinematicAtmosphereBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const imgWrapperRef = useRef<HTMLDivElement | null>(null);

  const isFooter = themeColor === "footer" || themeColor === "blue" || side === "left";
  const defaultAnchorX = side === "left" ? 0.35 : side === "center" ? 0.5 : 0.65;
  const defaultAnchorY = 0.46;

  const mouseState = useRef({
    targetX: defaultAnchorX,
    targetY: defaultAnchorY,
    currentX: defaultAnchorX,
    currentY: defaultAnchorY,
    isHovering: false,
    ambientAngle: 0,
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let isMounted = true;
    let lastTime = performance.now();

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        if (e.clientY >= rect.top - 250 && e.clientY <= rect.bottom + 250) {
          mouseState.current.targetX = Math.max(0.04, Math.min(0.96, (e.clientX - rect.left) / rect.width));
          mouseState.current.targetY = Math.max(0.04, Math.min(0.96, (e.clientY - rect.top) / rect.height));
          mouseState.current.isHovering = true;
          return;
        }
      }

      const w = window.innerWidth || 1920;
      const h = window.innerHeight || 1080;
      mouseState.current.targetX = Math.max(0.04, Math.min(0.96, e.clientX / w));
      mouseState.current.targetY = Math.max(0.04, Math.min(0.96, e.clientY / h));
      mouseState.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseState.current.targetX = defaultAnchorX;
      mouseState.current.targetY = defaultAnchorY;
      mouseState.current.isHovering = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const animate = (now: number) => {
      if (!isMounted) return;

      const dt = Math.min((now - lastTime) * 0.001, 0.1);
      lastTime = now;

      const state = mouseState.current;

      if (!state.isHovering) {
        state.ambientAngle += dt * 0.7;
        state.targetX = defaultAnchorX + Math.sin(state.ambientAngle) * 0.05;
        state.targetY = defaultAnchorY + Math.cos(state.ambientAngle * 0.8) * 0.03;
      }

      // Smooth liquid easing
      state.currentX += (state.targetX - state.currentX) * 0.06;
      state.currentY += (state.targetY - state.currentY) * 0.06;

      // 1. Move background image a little bit with cursor movement
      if (imgWrapperRef.current) {
        // Subtle offset: -24px to +24px horizontally, -16px to +16px vertically
        const shiftX = ((state.currentX - defaultAnchorX) * 24).toFixed(2);
        const shiftY = ((state.currentY - defaultAnchorY) * 16).toFixed(2);
        const flip = side === "left" ? "scaleX(-1) " : "";
        imgWrapperRef.current.style.transform = `${flip}translate3d(${shiftX}px, ${shiftY}px, 0) scale(1.06)`;
      }

      // 2. Update dynamic atmospheric glow colors
      const glow = glowRef.current;
      if (glow) {
        const posX = (state.currentX * 100).toFixed(2);
        const posY = (state.currentY * 100).toFixed(2);
        const colors = interpolateAtmosphericColors(state.currentX, isFooter);

        glow.style.setProperty("--cursor-x", `${posX}%`);
        glow.style.setProperty("--cursor-y", `${posY}%`);
        glow.style.setProperty("--color-core", colors.core);
        glow.style.setProperty("--color-mid", colors.mid);
        glow.style.setProperty("--color-top", colors.top);
        glow.style.setProperty("--color-accent", colors.accent);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [defaultAnchorX, defaultAnchorY, isFooter, side, prefersReducedMotion]);

  const initialColors = interpolateAtmosphericColors(defaultAnchorX, isFooter);

  return (
    <div
      ref={containerRef}
      style={{ opacity: opacity ?? 1 }}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none bg-[#07080a] ${className}`}
      aria-hidden="true"
    >
      {/* ── 0. Exact Uploaded Graphic Texture (Moves with cursor a little bit) ── */}
      {showImage && (
        <div
          ref={imgWrapperRef}
          className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
          style={{
            transform: `${side === "left" ? "scaleX(-1) " : ""}translate3d(0px, 0px, 0) scale(1.06)`,
            transformOrigin: "center center",
            filter: isFooter
              ? "sepia(0.85) hue-rotate(345deg) saturate(1.2) brightness(0.65) contrast(1.15)"
              : "contrast(1.02) brightness(0.98)",
          }}
        >
          <Image
            src={imageSrc}
            alt="Atmospheric ribbed background"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center opacity-85 select-none"
          />
          {isFooter && (
            <div className="absolute inset-0 bg-[#3a1d08]/30 mix-blend-multiply pointer-events-none" />
          )}
        </div>
      )}

      {/* ── 1. Fluid Low-Contrast Cursor-Reactive Glow Layer ── */}
      <div
        ref={glowRef}
        className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-out"
        style={
          {
            "--cursor-x": `${(defaultAnchorX * 100).toFixed(1)}%`,
            "--cursor-y": `${(defaultAnchorY * 100).toFixed(1)}%`,
            "--color-core": initialColors.core,
            "--color-mid": initialColors.mid,
            "--color-top": initialColors.top,
            "--color-accent": initialColors.accent,
            background: `
              radial-gradient(circle 540px at var(--cursor-x) var(--cursor-y), var(--color-core) 0%, var(--color-mid) 38%, transparent 74%),
              radial-gradient(circle 480px at calc(var(--cursor-x) + 4%) calc(var(--cursor-y) - 14%), var(--color-top) 0%, transparent 75%),
              radial-gradient(circle 380px at calc(var(--cursor-x) - 6%) calc(var(--cursor-y) - 5%), var(--color-accent) 0%, transparent 68%)
            `,
            mixBlendMode: "screen",
            filter: "blur(70px)",
          } as React.CSSProperties
        }
      />

      {/* ── 2. Cinematic Dark Edge Vignettes (Fades naturally into deep #07080a) ── */}
      <div className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-[#07080a] via-[#07080a]/60 to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-gradient-to-t from-[#07080a] via-[#07080a]/70 to-transparent pointer-events-none z-[2]" />
      {side === "right" && (
        <div className="absolute inset-y-0 left-0 w-1/3 max-w-xl bg-gradient-to-r from-[#07080a] via-[#07080a]/80 to-transparent pointer-events-none z-[2]" />
      )}
      {side === "left" && (
        <div className="absolute inset-y-0 right-0 w-1/3 max-w-xl bg-gradient-to-l from-[#07080a] via-[#07080a]/80 to-transparent pointer-events-none z-[2]" />
      )}
      <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-[#07080a] to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-[#07080a] to-transparent pointer-events-none z-[2]" />

      {/* ── 3. Ultra-Fine Cinematic Micro-Grain ── */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.024] pointer-events-none mix-blend-overlay z-[3]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

export default CinematicAtmosphereBackground;
