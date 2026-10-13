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
  // 1. Blue (Left: 0.15)
  {
    x: 0.15,
    core: [32, 95, 215, 0.26],
    mid: [22, 65, 165, 0.18],
    top: [40, 130, 220, 0.16],
    accent: [55, 45, 180, 0.14],
  },
  // 2. Purple (Center: 0.50)
  {
    x: 0.50,
    core: [152, 45, 205, 0.26],
    mid: [110, 28, 165, 0.18],
    top: [180, 55, 220, 0.16],
    accent: [98, 35, 175, 0.14],
  },
  // 3. Red (Right: 0.82 / Screenshot 1 Anchor)
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

interface MoveableLine {
  x: number;
  currentDeflection: number;
}

/**
 * CinematicAtmosphereBackground
 * - Renders user-provided ribbed atmospheric image (/cis-hero-slats-bg.png)
 * - Interactive subtle fluid wave / ripple distortion with cursor (WebGL hardware accelerated)
 * - Moveable elastic vertical lines reacting gently to cursor animation ("not much", max ~7.5px bend)
 * - Supports dark brown theme for Footer and red/purple/blue for Hero/Middle
 * - Soft, low-contrast, diffused chromatic glow
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
  const linesCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const glCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [hasGl, setHasGl] = useState(false);

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

  const linesState = useRef<MoveableLine[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let isMounted = true;
    let lastTime = performance.now();
    let prevX = defaultAnchorX;
    let prevY = defaultAnchorY;
    let mouseSpeed = 0;

    // ── 1. WebGL Wave Shader Setup ──
    const glCanvas = glCanvasRef.current;
    let gl: WebGLRenderingContext | null = null;
    let texture: WebGLTexture | null = null;
    let prog: WebGLProgram | null = null;
    let uMouseLoc: WebGLUniformLocation | null = null;
    let uMouseSpeedLoc: WebGLUniformLocation | null = null;
    let uTimeLoc: WebGLUniformLocation | null = null;
    let uResolutionLoc: WebGLUniformLocation | null = null;
    let uTextureLoadedLoc: WebGLUniformLocation | null = null;
    let uSideLoc: WebGLUniformLocation | null = null;
    let uIsFooterLoc: WebGLUniformLocation | null = null;
    let isTextureLoaded = false;

    if (glCanvas && showImage) {
      try {
        gl = glCanvas.getContext("webgl", {
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });

        if (gl) {
          const vsSource = `
            attribute vec2 a_pos;
            varying vec2 vUv;
            void main() {
              vUv = a_pos * 0.5 + 0.5;
              gl_Position = vec4(a_pos, 0.0, 1.0);
            }
          `;

          const fsSource = `
            precision mediump float;
            varying vec2 vUv;

            uniform sampler2D uTexture;
            uniform float uTextureLoaded;
            uniform vec2 uMouse;
            uniform float uMouseSpeed;
            uniform float uTime;
            uniform float uSide;
            uniform float uIsFooter;
            uniform vec2 uResolution;

            void main() {
              vec2 uv = vUv;

              // Invert Y for WebGL texture
              vec2 texUv = vec2(uv.x, 1.0 - uv.y);

              // Flip horizontally if side == left (footer)
              if (uSide > 0.5) {
                texUv.x = 1.0 - texUv.x;
              }

              // Aspect ratio correction for circular ripples
              float aspect = uResolution.x / max(uResolution.y, 1.0);
              vec2 aspectVec = vec2(aspect, 1.0);

              vec2 mouseNorm = vec2(uMouse.x, 1.0 - uMouse.y);
              if (uSide > 0.5) {
                mouseNorm.x = 1.0 - mouseNorm.x;
              }

              vec2 delta = (texUv - mouseNorm) * aspectVec;
              float dist = length(delta);

              // Wave envelope around cursor
              float radius = 0.28;
              float env = exp(-dist * dist / (2.0 * radius * radius));

              // Gentle slow organic ripple (slower, graceful wave)
              float wavePhase = dist * 18.0 - uTime * 1.35;
              float waveStrength = 0.006 + min(uMouseSpeed * 0.008, 0.007);
              float wave = sin(wavePhase) * env * waveStrength;

              // Displace UV along direction
              vec2 dir = dist > 0.0001 ? normalize(delta) : vec2(0.0);
              dir.x /= aspect;
              vec2 displacedUv = clamp(texUv + dir * wave, 0.001, 0.999);

              vec4 color;
              if (uTextureLoaded > 0.5) {
                color = texture2D(uTexture, displacedUv);
              } else {
                color = vec4(0.027, 0.031, 0.039, 1.0);
              }

              // If footer, apply rich dark brown / warm bronze color grading
              if (uIsFooter > 0.5) {
                float lum = dot(color.rgb, vec3(0.299, 0.587, 0.114));
                vec3 darkBrown = vec3(0.18, 0.09, 0.04);
                vec3 warmBronze = vec3(0.58, 0.29, 0.12);
                vec3 highlightBronze = vec3(0.74, 0.44, 0.22);
                vec3 brownColor = mix(darkBrown, warmBronze, smoothstep(0.08, 0.45, lum));
                brownColor = mix(brownColor, highlightBronze, smoothstep(0.45, 0.85, lum));
                color.rgb = brownColor * 0.88;
              }

              gl_FragColor = color;
            }
          `;

          const compileShader = (type: number, src: string) => {
            if (!gl) return null;
            const s = gl.createShader(type)!;
            gl.shaderSource(s, src);
            gl.compileShader(s);
            if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
              console.warn("Shader compile error:", gl.getShaderInfoLog(s));
              return null;
            }
            return s;
          };

          const vs = compileShader(gl.VERTEX_SHADER, vsSource);
          const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);

          if (vs && fs) {
            prog = gl.createProgram()!;
            gl.attachShader(prog, vs);
            gl.attachShader(prog, fs);
            gl.linkProgram(prog);

            if (gl.getProgramParameter(prog, gl.LINK_STATUS)) {
              gl.useProgram(prog);

              const buf = gl.createBuffer();
              gl.bindBuffer(gl.ARRAY_BUFFER, buf);
              gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                gl.STATIC_DRAW
              );

              const posLoc = gl.getAttribLocation(prog, "a_pos");
              gl.enableVertexAttribArray(posLoc);
              gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

              uMouseLoc = gl.getUniformLocation(prog, "uMouse");
              uMouseSpeedLoc = gl.getUniformLocation(prog, "uMouseSpeed");
              uTimeLoc = gl.getUniformLocation(prog, "uTime");
              uResolutionLoc = gl.getUniformLocation(prog, "uResolution");
              uTextureLoadedLoc = gl.getUniformLocation(prog, "uTextureLoaded");
              uSideLoc = gl.getUniformLocation(prog, "uSide");
              uIsFooterLoc = gl.getUniformLocation(prog, "uIsFooter");

              texture = gl.createTexture();
              gl.bindTexture(gl.TEXTURE_2D, texture);
              gl.texImage2D(
                gl.TEXTURE_2D,
                0,
                gl.RGBA,
                1,
                1,
                0,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                new Uint8Array([8, 9, 12, 255])
              );

              const img = new window.Image();
              img.src = imageSrc;
              img.crossOrigin = "anonymous";
              img.onload = () => {
                if (!isMounted || !gl || !texture) return;
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
                isTextureLoaded = true;
              };

              setHasGl(true);
            }
          }
        }
      } catch (err) {
        console.warn("WebGL background init fallback:", err);
      }
    }

    // ── 2. Moveable Vertical Lines Setup ──
    const initLines = () => {
      const cvs = linesCanvasRef.current;
      if (!cvs) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = cvs.getBoundingClientRect();
      const w = rect.width || window.innerWidth || 1920;
      const h = rect.height || window.innerHeight || 1080;
      cvs.width = Math.floor(w * dpr);
      cvs.height = Math.floor(h * dpr);

      if (glCanvas && gl) {
        glCanvas.width = Math.floor(w * dpr);
        glCanvas.height = Math.floor(h * dpr);
        gl.viewport(0, 0, glCanvas.width, glCanvas.height);
      }

      const count = Math.max(14, Math.min(32, Math.floor(w / 52)));
      const step = w / (count + 1);
      linesState.current = [];
      for (let i = 1; i <= count; i++) {
        linesState.current.push({
          x: i * step,
          currentDeflection: 0,
        });
      }
    };

    initLines();
    window.addEventListener("resize", initLines, { passive: true });

    if (prefersReducedMotion) return;

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
        state.ambientAngle += dt * 0.35; // Slower, calmer ambient wave cycle
        state.targetX = defaultAnchorX + Math.sin(state.ambientAngle) * 0.04;
        state.targetY = defaultAnchorY + Math.cos(state.ambientAngle * 0.8) * 0.025;
      }

      // Slower, smoother liquid easing
      state.currentX += (state.targetX - state.currentX) * 0.045;
      state.currentY += (state.targetY - state.currentY) * 0.045;

      // Calculate cursor movement speed for organic wave dynamics
      const distDelta = Math.sqrt(
        (state.currentX - prevX) * (state.currentX - prevX) +
        (state.currentY - prevY) * (state.currentY - prevY)
      );
      const instantSpeed = distDelta / Math.max(dt, 0.001);
      mouseSpeed += (instantSpeed - mouseSpeed) * 0.12;
      prevX = state.currentX;
      prevY = state.currentY;

      // ── Render WebGL Image Wave Effect ──
      if (gl && prog && glCanvas) {
        gl.useProgram(prog);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        if (uMouseLoc) gl.uniform2f(uMouseLoc, state.currentX, state.currentY);
        if (uMouseSpeedLoc) gl.uniform1f(uMouseSpeedLoc, Math.min(mouseSpeed, 1.2));
        if (uTimeLoc) gl.uniform1f(uTimeLoc, now * 0.001);
        if (uResolutionLoc) gl.uniform2f(uResolutionLoc, glCanvas.width, glCanvas.height);
        if (uTextureLoadedLoc) gl.uniform1f(uTextureLoadedLoc, isTextureLoaded ? 1.0 : 0.0);
        if (uSideLoc) gl.uniform1f(uSideLoc, side === "left" ? 1.0 : 0.0);
        if (uIsFooterLoc) gl.uniform1f(uIsFooterLoc, isFooter ? 1.0 : 0.0);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      // ── Render Moveable Lines (Subtle elastic bend near cursor, not much) ──
      const cvs = linesCanvasRef.current;
      if (cvs) {
        const ctx = cvs.getContext("2d");
        if (ctx) {
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const w = cvs.width / dpr;
          const h = cvs.height / dpr;
          ctx.clearRect(0, 0, cvs.width, cvs.height);
          ctx.save();
          ctx.scale(dpr, dpr);

          const mousePxX = state.currentX * w;
          const mousePxY = state.currentY * h;

          const baseR = isFooter ? 145 : 205;
          const baseG = isFooter ? 75 : 45;
          const baseB = isFooter ? 30 : 85;

          const lines = linesState.current;
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const dist = mousePxX - line.x;
            const maxReach = 190;

            let targetDeflection = 0;
            if (Math.abs(dist) < maxReach) {
              const factor = Math.cos((dist / maxReach) * (Math.PI / 2));
              const yEnvelope = Math.sin(Math.max(0.05, Math.min(0.95, mousePxY / h)) * Math.PI);
              targetDeflection = Math.sign(dist) * factor * 7.5 * yEnvelope;
            }

            line.currentDeflection += (targetDeflection - line.currentDeflection) * 0.048; // Slower, calmer line deflection
            const bend = line.currentDeflection;

            const isNear = Math.abs(dist) < maxReach;
            const alpha = isNear ? 0.08 + 0.11 * Math.cos((dist / maxReach) * (Math.PI / 2)) : 0.04;

            ctx.beginPath();
            ctx.moveTo(line.x, 0);
            ctx.quadraticCurveTo(line.x + bend * 1.5, mousePxY, line.x, h);

            const grad = ctx.createLinearGradient(0, 0, 0, h);
            grad.addColorStop(0, `rgba(${baseR}, ${baseG}, ${baseB}, 0)`);
            grad.addColorStop(0.25, `rgba(${baseR}, ${baseG}, ${baseB}, ${alpha * 0.6})`);
            grad.addColorStop(0.5, `rgba(${baseR}, ${baseG}, ${baseB}, ${alpha})`);
            grad.addColorStop(0.75, `rgba(${baseR}, ${baseG}, ${baseB}, ${alpha * 0.6})`);
            grad.addColorStop(1, `rgba(${baseR}, ${baseG}, ${baseB}, 0)`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }

          ctx.restore();
        }
      }

      // ── Update Dynamic Atmospheric Glow Colors ──
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
      window.removeEventListener("resize", initLines);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (gl && texture) {
        gl.deleteTexture(texture);
      }
    };
  }, [defaultAnchorX, defaultAnchorY, isFooter, side, showImage, imageSrc, prefersReducedMotion]);

  const initialColors = interpolateAtmosphericColors(defaultAnchorX, isFooter);

  return (
    <div
      ref={containerRef}
      style={{ opacity: opacity ?? 1 }}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none bg-[#07080a] ${className}`}
      aria-hidden="true"
    >
      {/* ── 0. Exact Uploaded Graphic Texture with Interactive Wave Effect ── */}
      {showImage && (
        <div
          ref={imgWrapperRef}
          className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
        >
          {/* Interactive WebGL Wave Canvas */}
          <canvas
            ref={glCanvasRef}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />

          {/* Fallback Static Image if WebGL is unavailable */}
          {!hasGl && (
            <Image
              src={imageSrc}
              alt="Atmospheric ribbed background"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-center opacity-85 select-none"
              style={{
                transform: `${side === "left" ? "scaleX(-1) " : ""}scale(1.04)`,
                filter: isFooter
                  ? "sepia(0.85) hue-rotate(345deg) saturate(1.2) brightness(0.65) contrast(1.15)"
                  : "contrast(1.02) brightness(0.98)",
              }}
            />
          )}

          {isFooter && !hasGl && (
            <div className="absolute inset-0 bg-[#3a1d08]/30 mix-blend-multiply pointer-events-none" />
          )}
        </div>
      )}

      {/* ── 0.5 Moveable Elastic Lines Layer (Subtle flex with cursor animation, not much) ── */}
      <canvas
        ref={linesCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      />

      {/* ── 1. Fluid Low-Contrast Cursor-Reactive Glow Layer ── */}
      <div
        ref={glowRef}
        className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-out z-[2]"
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
      <div className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-[#07080a] via-[#07080a]/60 to-transparent pointer-events-none z-[3]" />
      <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-gradient-to-t from-[#07080a] via-[#07080a]/70 to-transparent pointer-events-none z-[3]" />
      {side === "right" && (
        <div className="absolute inset-y-0 left-0 w-1/3 max-w-xl bg-gradient-to-r from-[#07080a] via-[#07080a]/80 to-transparent pointer-events-none z-[3]" />
      )}
      {side === "left" && (
        <div className="absolute inset-y-0 right-0 w-1/3 max-w-xl bg-gradient-to-l from-[#07080a] via-[#07080a]/80 to-transparent pointer-events-none z-[3]" />
      )}
      <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-[#07080a] to-transparent pointer-events-none z-[3]" />
      <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-[#07080a] to-transparent pointer-events-none z-[3]" />

      {/* ── 3. Ultra-Fine Cinematic Micro-Grain ── */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.024] pointer-events-none mix-blend-overlay z-[4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

export default CinematicAtmosphereBackground;
