"use client";

import { useEffect, useState } from "react";
import { LeadModal } from "./LeadModal";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const footerThreshold = docH - viewportH * 2;

      setVisible(scrollY > viewportH && scrollY < footerThreshold);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`sticky-cta${visible ? " is-visible" : ""}`}>
        <button
          className="sticky-cta-btn"
          onClick={() => setModalOpen(true)}
          aria-label="Ücretsiz Danışmanlık Al"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>Ücretsiz Danışmanlık</span>
        </button>
      </div>

      {/* Mobile fixed bar */}
      <div className={`sticky-cta-mobile${visible ? " is-visible" : ""}`}>
        <button
          className="sticky-cta-mobile-btn"
          onClick={() => setModalOpen(true)}
        >
          Ücretsiz Danışmanlık Al
        </button>
      </div>

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
