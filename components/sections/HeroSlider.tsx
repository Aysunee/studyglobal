"use client";

import { useEffect, useState, type ReactNode } from "react";

type Slide =
  | { type: "video"; src: string; poster: string }
  | { type: "image"; src: string };

const slides: Slide[] = [
  { type: "video", src: "/assets/hero-video.mp4", poster: "/assets/hero1.png" },
  { type: "image", src: "/assets/hero1.png" },
  { type: "image", src: "/assets/hero2.png" },
  { type: "image", src: "/assets/hero3.jpg" },
];

const INTERVAL = 6400;

type HeroSliderProps = {
  children: ReactNode;
};

function getShouldPlayVideo() {
  if (typeof window === "undefined") return false;
  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  type ConnectionLike = { saveData?: boolean };
  type NavWithConn = Navigator & { connection?: ConnectionLike };
  const conn = (navigator as NavWithConn).connection;
  const saveData = conn?.saveData === true;
  return !isMobile && !reduce && !saveData;
}

export function HeroSlider({ children }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  // Start false on both server and client to avoid hydration mismatch,
  // then flip to true on the client after mount if the device qualifies.
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

  useEffect(() => {
    if (getShouldPlayVideo()) setShouldPlayVideo(true);
  }, []);

  // Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      if (slide.type === "image") {
        const img = new window.Image();
        img.src = slide.src;
      }
    });
  }, []);

  // Auto-advance
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {/* Background slides — all rendered, opacity-controlled */}
      <div className="hero-bg-stack">
        {slides.map((slide, i) => {
          const isActive = i === active;
          const className = `hero-slide${isActive ? " is-active" : ""}`;

          if (slide.type === "video") {
            // On mobile / save-data / reduced motion → fall back to poster image only
            if (!shouldPlayVideo) {
              return (
                <div
                  key={`slide-${i}`}
                  className={className}
                  style={{ backgroundImage: `url("${slide.poster}")` }}
                />
              );
            }
            return (
              <video
                key={`slide-${i}`}
                className={className}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={slide.poster}
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            );
          }
          return (
            <div
              key={`slide-${i}`}
              className={className}
              style={{ backgroundImage: `url("${slide.src}")` }}
            />
          );
        })}
      </div>
      <div className="hero-overlay" />

      {/* Content */}
      <div className="container">
        {children}
      </div>
    </section>
  );
}
