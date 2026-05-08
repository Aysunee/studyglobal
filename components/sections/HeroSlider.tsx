"use client";

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";

const slides = [
  "/assets/hero-study-desk.jpg",
  "/assets/global-education-hero.jpg",
  "/assets/country-decision-banner.jpg",
  "/assets/destination-collage.jpg",
  "/assets/academic-programs-collage.jpg",
];

const INTERVAL = 6400;
const TRANSITION_DURATION = 1520;

type HeroSliderProps = {
  children: ReactNode;
};

export function HeroSlider({ children }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [bgImage, setBgImage] = useState(slides[0]);
  const [nextImage, setNextImage] = useState("");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useRef(false);
  const activeRef = useRef(0);

  const setSlide = useCallback((index: number) => {
    if (index === activeRef.current || isTransitioning) return;

    activeRef.current = index;
    setActive(index);
    setNextImage(slides[index]);
    setIsTransitioning(true);

    transitionTimerRef.current = setTimeout(() => {
      setBgImage(slides[index]);
      setIsTransitioning(false);
      setNextImage("");
    }, TRANSITION_DURATION);
  }, [isTransitioning]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Preload images
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    function start() {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (!prefersReducedMotion.current) {
          const next = (activeRef.current + 1) % slides.length;
          setSlide(next);
        }
      }, INTERVAL);
    }

    function handleVisibility() {
      if (timerRef.current) clearInterval(timerRef.current);
      if (!document.hidden) start();
    }

    start();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [setSlide]);

  const sceneIndex = active % slides.length;

  return (
    <section className={`hero${isTransitioning ? " is-transitioning" : ""}`}>
      {/* Background layers matching old site structure */}
      <div
        className={`hero-bg${!isTransitioning ? " is-live" : ""}`}
        data-scene={String(sceneIndex)}
        style={{ backgroundImage: `url("${bgImage}")` }}
      />
      <div
        className="hero-bg-next"
        data-scene={String(sceneIndex)}
        style={nextImage ? { backgroundImage: `url("${nextImage}")` } : undefined}
      />
      <div className="hero-overlay" />

      {/* Content */}
      <div className="container">
        {children}
      </div>
    </section>
  );
}
