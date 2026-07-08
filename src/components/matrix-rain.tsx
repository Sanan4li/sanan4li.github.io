"use client";

import { useEffect, useRef } from "react";

const CHARS =
  "アァカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]$#@!*&";

export default function MatrixRain({ opacity = 0.4 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let drops: number[] = [];
    const fontSize = 14;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns)
        .fill(0)
        .map(() => Math.floor((Math.random() * canvas.height) / fontSize));
    };
    resize();
    window.addEventListener("resize", resize);

    let lastTime = 0;
    const draw = (time: number) => {
      animationId = requestAnimationFrame(draw);
      // throttle to ~20fps for a calmer rain and lower CPU
      if (time - lastTime < 50) return;
      lastTime = time;

      ctx.fillStyle = "rgba(5, 10, 7, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // bright head, dimmer trail handled by fade fill
        ctx.fillStyle = Math.random() > 0.975 ? "#c6ffd9" : "#00ff41";
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
