"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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

type MenuItem = [string, string | null]; // [label, href]

const menus: Record<string, { title: string; text: string; items: MenuItem[] }> = {
  "Üniversite": {
    title: "Üniversite başvurusu",
    text: "Okul listesi, bölüm uyumu ve kabul stratejisini birlikte netleştirin.",
    items: [
      ["Lisans rotası", "/universite"],
      ["Foundation", "/universite"],
      ["Burs planı", "/universite"],
      ["Okul listesi", "/universite"],
    ],
  },
  "Yüksek Lisans": {
    title: "Yüksek lisans planı",
    text: "MBA, master ve kariyer odaklı programları ülke ve bütçe kriterleriyle karşılaştırın.",
    items: [
      ["MBA seçenekleri", null],
      ["Master başvurusu", null],
      ["CV & niyet", null],
      ["Burs kontrolü", null],
    ],
  },
  "Dil Okulları": {
    title: "Dil okulu seçenekleri",
    text: "Hedef şehir, süre ve bütçeye göre İngilizce program alternatiflerini görün.",
    items: [
      ["İngiltere", null],
      ["Kanada", null],
      ["Malta", null],
      ["Seviye planı", null],
    ],
  },
  "Akademik Programlar": {
    title: "Akademik Programlar",
    text: "Staj, yaz okulu ve liderlik programlarıyla akademik profilinizi güçlendirin.",
    items: [
      ["Staj + Proje", "/akademik-programlar"],
      ["Yaz Okulları", "/akademik-programlar"],
      ["GAC / GBC", "/akademik-programlar"],
      ["Program eşleşmesi", "/akademik-programlar"],
    ],
  },
  "Sınavlar": {
    title: "Sınav stratejisi",
    text: "IELTS, OET, SAT, AP ve TMUA için hedef skora uygun çalışma planı oluşturun.",
    items: [
      ["IELTS", "/sinavlar"],
      ["OET", "/sinavlar"],
      ["SAT / AP", "/sinavlar"],
      ["TMUA", "/sinavlar"],
    ],
  },
  "Yurt Dışı Eğitim": {
    title: "Ülke karşılaştırma",
    text: "Ülke, bütçe, yaşam tarzı ve vize uyumunu tek rotada değerlendirin.",
    items: [
      ["İngiltere", "/yurt-disi-egitim"],
      ["Kanada", "/yurt-disi-egitim"],
      ["Amerika", "/yurt-disi-egitim"],
      ["Avrupa", "/yurt-disi-egitim"],
    ],
  },
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const [activeBubble, setActiveBubble] = useState<string | null>(null);
  const [bubblePos, setBubblePos] = useState({ x: 0, y: 0 });
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  const showBubble = (label: string, linkEl: HTMLElement) => {
    const menu = menus[label];
    if (!menu || window.matchMedia("(max-width: 1060px)").matches) return;
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    const rect = linkEl.getBoundingClientRect();
    const x = Math.min(window.innerWidth - 210, Math.max(210, rect.left + rect.width / 2));
    const y = rect.bottom + 18;
    setBubblePos({ x, y });
    setActiveBubble(label);
  };

  const hideBubble = () => {
    hideTimerRef.current = setTimeout(() => setActiveBubble(null), 130);
  };

  const keepBubble = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  const headerClass = [
    "site-header",
    isTop ? "is-top" : "",
    isHidden ? "is-hidden" : "",
  ].filter(Boolean).join(" ");

  const activeMenu = activeBubble ? menus[activeBubble] : null;

  return (
    <header className={headerClass}>
      <div className="nav-wrap" onMouseLeave={hideBubble}>
        <Link className="brand" href="/" aria-label="Study Global ana sayfa">
          <Image src="/logo.png" alt="Study Global Yurtdışı Eğitim Danışmanlığı" width={164} height={40} priority />
        </Link>

        <nav className={`nav-links${open ? " active" : ""}`} data-nav="">
          {navLinks.map((link) =>
            link.href ? (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link${pathname === link.href ? " active" : ""}`}
                onClick={() => setOpen(false)}
                onMouseEnter={(e) => showBubble(link.label, e.currentTarget)}
                onFocus={(e) => showBubble(link.label, e.currentTarget)}
              >
                {link.label}
              </Link>
            ) : (
              <span
                key={link.label}
                className="nav-link"
                style={{ opacity: 0.5, cursor: "not-allowed" }}
                onMouseEnter={(e) => showBubble(link.label, e.currentTarget)}
              >
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

        {activeMenu && (
          <div
            className="nav-bubble show"
            data-nav-bubble=""
            style={{
              "--bubble-x": `${bubblePos.x}px`,
              "--bubble-y": `${bubblePos.y}px`,
            } as React.CSSProperties}
            onMouseEnter={keepBubble}
            onMouseLeave={hideBubble}
          >
            <strong>{activeMenu.title}</strong>
            <span>{activeMenu.text}</span>
            <div className="nav-bubble-grid">
              {activeMenu.items.map(([label, href]) =>
                href ? (
                  <Link key={label} href={href} onClick={() => setActiveBubble(null)}>
                    {label}
                  </Link>
                ) : (
                  <button key={label} type="button" style={{ opacity: 0.5 }}>
                    {label}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
