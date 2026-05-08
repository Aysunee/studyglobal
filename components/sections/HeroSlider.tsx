"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

const slides = [
  "/assets/hero-study-desk.jpg",
  "/assets/global-education-hero.jpg",
  "/assets/country-decision-banner.jpg",
  "/assets/destination-collage.jpg",
  "/assets/academic-programs-collage.jpg",
];

const INTERVAL = 6400;

type HeroSliderProps = {
  children: ReactNode;
};

export function HeroSlider({ children }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;

    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    function start() {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (!prefersReducedMotion.current) {
          setCurrent((prev) => (prev + 1) % slides.length);
        }
      }, INTERVAL);
    }

    function handleVisibility() {
      if (document.hidden) {
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        start();
      }
    }

    start();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section className="relative bg-navy-deep text-white pt-32 pb-20 min-h-[600px] overflow-hidden">
      {/* Background slides */}
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-30" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/90 via-navy/70 to-navy-deep/80 pointer-events-none" />

      {/* Content */}
      <div className="relative mx-auto max-w-[var(--max-width-site)] px-5">
        {children}
      </div>
    </section>
  );
}
