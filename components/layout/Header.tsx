"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Üniversite", href: "/universite" },
  { label: "Yüksek Lisans", href: null },
  { label: "Dil Okulları", href: null },
  { label: "Akademik Programlar", href: "/akademik-programlar" },
  { label: "Sınavlar", href: "/sinavlar" },
  { label: "Yurt Dışı Eğitim", href: "/yurt-disi-egitim" },
  { label: "Blog", href: null },
  { label: "İletişim", href: "/iletisim" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  const updateHeaderState = useCallback(() => {
    const scrollY = window.scrollY;
    setIsTop(scrollY < 120);
    setIsHidden(scrollY > 180 && !open);
  }, [open]);

  useEffect(() => {
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    return () => window.removeEventListener("scroll", updateHeaderState);
  }, [updateHeaderState]);

  const headerClass = [
    "site-header",
    isTop ? "is-top" : "",
    isHidden ? "is-hidden" : "",
  ].filter(Boolean).join(" ");

  return (
    <header className={headerClass}>
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="Study Global ana sayfa">
          <Image src="/logo.png" alt="Study Global Yurtdışı Eğitim Danışmanlığı" width={140} height={40} priority />
        </Link>

        <nav className={`nav-links${open ? " active" : ""}`} data-nav="">
          {navLinks.map((link) =>
            link.href ? (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link${pathname === link.href ? " active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <span key={link.label} className="nav-link" style={{ opacity: 0.5, cursor: "not-allowed" }}>
                {link.label}
              </span>
            )
          )}
        </nav>

        <div className="nav-actions">
          <Link href="/iletisim" className="btn btn-primary nav-cta">
            Ücretsiz Ön Görüşme
          </Link>
          <button
            className={`hamburger${open ? " active" : ""}`}
            data-hamburger=""
            aria-label="Menüyü aç"
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
