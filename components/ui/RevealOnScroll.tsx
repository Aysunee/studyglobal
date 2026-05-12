"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
  id?: string;
};

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  id,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      el.classList.add("is-visible");
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Trigger when element top crosses ~88% of viewport height
      if (r.top < vh * 0.88 && r.bottom > 0) reveal();
    };

    // Try IntersectionObserver first (efficient, accurate)
    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            reveal();
            observer?.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
      );
      observer.observe(el);
    }

    // Always-on scroll fallback (covers IO edge cases / headless preview)
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    // Initial check (in case element is already in view on mount)
    check();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      id={id}
      className={`reveal ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
