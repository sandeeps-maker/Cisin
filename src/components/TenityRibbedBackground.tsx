"use client";

import React, { useEffect, useRef } from "react";

export interface TenityRibbedBackgroundProps {
  theme?: "tenity" | "cyan" | "purple" | "blue" | "amber";
  side?: "left" | "right";
  className?: string;
  opacity?: number;
  imageSrc?: string;
}

/**
 * TenityRibbedBackground
 * Uses the exact graphic texture from user reference with interactive cursor movement
 * and ambient fluid breathing motion across the vertical corrugated louvers.
 */
export function TenityRibbedBackground({
  side = "right",
  className = "",
  opacity = 1,
  imageSrc = "/tenity-ribbed-bg.png",
}: TenityRibbedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    let animationFrameId: number;
    let isMounted = true;

    const vertexSrc = `
      attribute vec2 a_pos;
      varying vec2 vUv;
      void main() {
        vUv = a_pos * 0.5 + 0.5;
        gl_Position = vec4(a_pos, 0.0, 1.0);
      }
    `;

    const fragSrc = `
      precision mediump float;
      varying vec2 vUv;

      uniform sampler2D uTexture;
      uniform float uTextureLoaded;
      uniform float uSide;        // 0=right (hero), 1=left (footer/middle)
      uniform float uNumStripes;  // 32 desktop, 10 mobile
      uniform vec2  uMouse;       // primary cursor eased (0..1)
      uniform vec2  uMouse2;      // fake mouse orbit (0..1)
      uniform float uPulsation;   // subtle dynamic breathing

      const float PI = 3.14159265358979;

      float hash21(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      void main() {
        vec2 uv = vUv;
        vec2 mc = uMouse;
        vec2 m2 = uMouse2;

        // Mirror orientation if side === "left"
        if (uSide > 0.5) {
          uv.x = 1.0 - uv.x;
          mc.x = 1.0 - mc.x;
          m2.x = 1.0 - m2.x;
        }

        // Louver parameters
        float N        = uNumStripes;
        float STRIPE_W = 1.0 / N;
        float MIN_S    = 1.0;
        float MAX_S    = 2.2;
        float EFF_R    = 0.20;
        float R        = 1.5;
        float M        = 2.0 * R + 1.0;

        // 1. Stripe ID & local coordinate inside stripe
        float k      = floor(uv.x * N);
        float local  = fract(uv.x * N);
        float stripX = (k * STRIPE_W) + (0.5 * STRIPE_W);

        // 2. Weights: mouse cursor displacement + gentle ambient orbit
        float w1 = clamp(1.0 - abs(mc.x - stripX) / EFF_R, 0.0, 1.0);
        float w2 = clamp(1.0 - abs(m2.x - stripX) / EFF_R, 0.0, 1.0) * 0.8;
        float w  = clamp(w1 + w2, 0.0, 1.0);
        float yS = mix(MIN_S, MAX_S, w);

        // 3. Slat slicing & x-displacement
        float seg      = floor(local * M);
        float tInSeg   = fract(local * M);
        float sliceIdx = clamp(k + (seg - R), 0.0, N - 1.0);
        float finalX   = (sliceIdx + tInSeg) * STRIPE_W;

        // 4. Pivot Y coordinate displacement following cursor
        float wSum   = w1 + w2;
        float wPivot = (mc.y * w1 + m2.y * w2) / max(wSum, 0.0001);
        float pivotY = mix(mc.y, wPivot, step(0.0001, wSum));
        float finalY = (uv.y - pivotY) / yS + pivotY;

        // Sample texture using WebGL texture coordinates (inverted Y for image loading)
        vec2 texUv = vec2(clamp(finalX, 0.0, 1.0), clamp(1.0 - finalY, 0.0, 1.0));
        
        vec4 color;
        if (uTextureLoaded > 0.5) {
          color = texture2D(uTexture, texUv);
        } else {
          color = vec4(0.04, 0.05, 0.07, 1.0);
        }

        // Louver edge depth & bevel shading
        float sE    = smoothstep(0.0, 0.08, local) * smoothstep(1.0, 0.92, local);
        float bevel = mix(0.75, 1.05, sE);
        color.rgb  *= bevel * uPulsation;

        // Subtle film grain
        float noise = hash21(vUv * 800.0);
        color.rgb  += (noise - 0.5) * 0.015;

        gl_FragColor = vec4(color.rgb, color.a);
      }
    `;

    function mkShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error("Shader error:", gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    }

    const vs = mkShader(gl.VERTEX_SHADER, vertexSrc);
    const fs = mkShader(gl.FRAGMENT_SHADER, fragSrc);
    if (!vs || !fs) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("Link error:", gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    // Full-screen quad
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

    // Uniform locations
    const uTextureLoc    = gl.getUniformLocation(prog, "uTexture");
    const uTexLoadedLoc  = gl.getUniformLocation(prog, "uTextureLoaded");
    const uSideLoc       = gl.getUniformLocation(prog, "uSide");
    const uStripesLoc    = gl.getUniformLocation(prog, "uNumStripes");
    const uMouseLoc      = gl.getUniformLocation(prog, "uMouse");
    const uMouse2Loc     = gl.getUniformLocation(prog, "uMouse2");
    const uPulsationLoc  = gl.getUniformLocation(prog, "uPulsation");

    // Create & bind texture
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    // Temporary 1x1 black pixel while loading image
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([11, 12, 15, 255])
    );

    let isTextureLoaded = false;
    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (!isMounted || !gl) return;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      isTextureLoaded = true;
    };

    // Mouse coordinates tracking with smooth 0.02 easing
    let mx = 0.5, my = 0.5;
    let tx = 0.5, ty = 0.5;
    let fakeAngle = 0;
    let last = performance.now();

    const onMouseMove = (e: MouseEvent) => {
      tx = Math.max(0, Math.min(1, e.clientX / window.innerWidth));
      ty = Math.max(0, Math.min(1, 1.0 - e.clientY / window.innerHeight));
    };

    const onResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const p = canvas.parentElement;
      canvas.width  = Math.floor((p ? p.clientWidth : window.innerWidth) * dpr);
      canvas.height = Math.floor((p ? p.clientHeight : window.innerHeight) * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    onResize();

    const loop = (now: number) => {
      if (!isMounted) return;
      const dt = Math.min((now - last) * 0.001, 0.1);
      last = now;

      // Mouse easing: 0.02
      mx += (tx - mx) * 0.025;
      my += (ty - my) * 0.025;

      // Gentle ambient orbit
      fakeAngle += dt * (2.0 * Math.PI / 15.0);
      const fmx = 0.5 + 0.18 * Math.cos(fakeAngle);
      const fmy = 0.5 + 0.18 * Math.sin(fakeAngle) * 0.5;

      // Breathing pulsation factor: [0.97 .. 1.03]
      const pulseT = (now * 0.001) / 5.0;
      const pulsation = 0.97 + 0.06 * (0.5 + 0.5 * Math.sin(pulseT * 2.0 * Math.PI));

      const N = window.innerWidth < 768 ? 14 : 32;

      gl.useProgram(prog);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(uTextureLoc, 0);
      gl.uniform1f(uTexLoadedLoc, isTextureLoaded ? 1.0 : 0.0);

      gl.uniform1f(uSideLoc, side === "left" ? 1 : 0);
      gl.uniform1f(uStripesLoc, N);
      gl.uniform2f(uMouseLoc, mx, my);
      gl.uniform2f(uMouse2Loc, fmx, fmy);
      gl.uniform1f(uPulsationLoc, pulsation);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      if (gl) {
        gl.deleteTexture(texture);
      }
    };
  }, [side, imageSrc]);

  return (
    <canvas
      ref={canvasRef}
      style={{ opacity: opacity ?? 1 }}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 object-cover ${className}`}
    />
  );
}
