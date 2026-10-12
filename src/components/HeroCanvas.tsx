"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  pulsePhase: number;
  activityLevel: number;
  connections: number[];
}

interface Particle {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const colors = ["#00e5ff", "#38bdf8", "#f15a24", "#60a5fa", "#ffffff"];
    let nodes: Node[] = [];
    let particles: Particle[] = [];

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 28 : 55;
    const maxConnectionDistance = isMobile ? 130 : 180;

    function initNodes() {
      nodes = [];
      particles = [];
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const baseRadius = Math.random() * 2.2 + 1.2;

        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseRadius,
          baseRadius,
          color,
          pulsePhase: Math.random() * Math.PI * 2,
          activityLevel: Math.random() * 0.6 + 0.4,
          connections: [],
        });
      }
    }

    initNodes();

    let lastParticleTime = 0;

    const render = (time: number) => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Create subtle radial dark glow behind active area
      const bgGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        width * 0.7
      );
      bgGrad.addColorStop(0, "rgba(0, 102, 204, 0.08)");
      bgGrad.addColorStop(0.5, "rgba(241, 90, 36, 0.03)");
      bgGrad.addColorStop(1, "rgba(4, 8, 20, 0)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Update and connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse attraction / repulsion effect
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dy + dy * dy);
        if (dist < 220) {
          const force = (1 - dist / 220) * 0.02;
          node.vx -= dx * force * 0.05;
          node.vy -= dy * force * 0.05;
          node.radius = node.baseRadius * (1 + (1 - dist / 220) * 1.5);
        } else {
          node.radius = node.baseRadius;
        }

        // Pulse
        node.pulsePhase += 0.03;
        node.connections = [];
      }

      // Draw Connection Lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeA = nodes[i];
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDistance) {
            nodeA.connections.push(j);
            nodeB.connections.push(i);

            const alpha = (1 - dist / maxConnectionDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);

            // Subtle gradient line
            const lineGrad = ctx.createLinearGradient(
              nodeA.x,
              nodeA.y,
              nodeB.x,
              nodeB.y
            );
            lineGrad.addColorStop(0, nodeA.color);
            lineGrad.addColorStop(1, nodeB.color);

            ctx.strokeStyle = lineGrad;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      }

      // Spawn Data Stream Particles
      if (time - lastParticleTime > 180 && particles.length < 35) {
        lastParticleTime = time;
        const fromIdx = Math.floor(Math.random() * nodes.length);
        const fromNode = nodes[fromIdx];
        if (fromNode.connections.length > 0) {
          const toIdx =
            fromNode.connections[
              Math.floor(Math.random() * fromNode.connections.length)
            ];
          particles.push({
            fromNode: fromIdx,
            toNode: toIdx,
            progress: 0,
            speed: Math.random() * 0.012 + 0.008,
            color: Math.random() > 0.4 ? "#00e5ff" : "#f15a24",
          });
        }
      }

      // Render Particles along lines
      for (let k = particles.length - 1; k >= 0; k--) {
        const p = particles[k];
        p.progress += p.speed;

        const nodeFrom = nodes[p.fromNode];
        const nodeTo = nodes[p.toNode];

        if (!nodeFrom || !nodeTo || p.progress >= 1) {
          particles.splice(k, 1);
          continue;
        }

        const px = nodeFrom.x + (nodeTo.x - nodeFrom.x) * p.progress;
        const py = nodeFrom.y + (nodeTo.y - nodeFrom.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Render Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.25;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.9;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-0 opacity-100"
    />
  );
}
