# Study Global Next.js Migration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the Study Global static HTML education site to a Next.js App Router project with Tailwind CSS, preserving all content and visual design.

**Architecture:** Next.js 15 App Router with server-first rendering. Dynamic routes for 14 countries and 6 services powered by TypeScript data files. Tailwind CSS replaces 2800-line custom CSS. Client components only for interactive features (hero slider, country filters, chat widget, mobile menu).

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, next/image, next/font

**Source site:** `/Users/mertaysune/Desktop/studyglobal 1 /` (note trailing space in directory name)

---

### Task 1: Project Scaffolding & Config

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tailwind.config.ts`
- Create: `tsconfig.json`
- Create: `app/globals.css`
- Create: `.env.local`
- Create: `.gitignore`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd ~/Desktop
npx create-next-app@latest studyglobal-next --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack
```

Accept defaults. This creates the base project structure.

- [ ] **Step 2: Configure Tailwind with design tokens**

Replace `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#252d66",
          deep: "#11183f",
          card: "#1f2a5c",
        },
        "study-red": "#c7372f",
        "soft-red": "#e14a3f",
        ivory: "#f7f8fb",
        "muted-slate": "#667085",
        "border-soft": "#e5e7eb",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        site: "1180px",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      boxShadow: {
        card: "0 22px 60px rgba(2, 11, 31, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 3: Set up globals.css**

Replace `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply text-navy bg-ivory leading-relaxed;
    text-rendering: geometricPrecision;
  }
}
```

- [ ] **Step 4: Create .env.local**

```
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=902121234567
```

- [ ] **Step 5: Copy assets**

```bash
cp -r "/Users/mertaysune/Desktop/studyglobal 1 /assets" ~/Desktop/studyglobal-next/public/assets
cp "/Users/mertaysune/Desktop/studyglobal 1 /logo.png" ~/Desktop/studyglobal-next/public/logo.png
cp "/Users/mertaysune/Desktop/studyglobal 1 /study-global-flag.png" ~/Desktop/studyglobal-next/public/study-global-flag.png
```

- [ ] **Step 6: Verify dev server starts**

```bash
cd ~/Desktop/studyglobal-next && npm run dev
```

Expected: Dev server starts on localhost:3000 with default Next.js page.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "chore: scaffold Next.js project with Tailwind config and assets"
```

---

### Task 2: UI Components (Button, SectionHead, FilterChip)

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `components/ui/SectionHead.tsx`
- Create: `components/ui/FilterChip.tsx`

- [ ] **Step 1: Create Button component**

```typescript
// components/ui/Button.tsx
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  children: React.ReactNode;
  className?: string;
};

export function Button({ variant = "primary", href, onClick, type = "button", children, className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-study-red text-white hover:bg-soft-red shadow-md hover:shadow-lg",
    secondary: "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm",
    outline: "border border-border-soft text-navy hover:bg-navy hover:text-white",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
```

- [ ] **Step 2: Create SectionHead component**

```typescript
// components/ui/SectionHead.tsx
type SectionHeadProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function SectionHead({ eyebrow, title, description, children }: SectionHeadProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-study-red mb-2 block">{eyebrow}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-navy-deep leading-tight">{title}</h2>
      </div>
      {description && <p className="text-muted-slate max-w-md text-sm leading-relaxed">{description}</p>}
      {children}
    </div>
  );
}
```

- [ ] **Step 3: Create FilterChip component**

```typescript
// components/ui/FilterChip.tsx
"use client";

type FilterChipProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-navy text-white shadow-md"
          : "bg-white text-muted-slate border border-border-soft hover:border-navy hover:text-navy"
      }`}
    >
      {label}
    </button>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/ui/ && git commit -m "feat: add Button, SectionHead, FilterChip UI components"
```

---

### Task 3: Layout Components (Header, Footer, ChatWidget)

**Files:**
- Create: `components/layout/Header.tsx`
- Create: `components/layout/Footer.tsx`
- Create: `components/layout/ChatWidget.tsx`
- Create: `app/layout.tsx`

- [ ] **Step 1: Create Header**

```typescript
// components/layout/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Üniversite", href: "/universite" },
  { label: "Yüksek Lisans", href: "#", disabled: true },
  { label: "Dil Okulları", href: "#", disabled: true },
  { label: "Akademik Programlar", href: "/akademik-programlar" },
  { label: "Sınavlar", href: "/sinavlar" },
  { label: "Yurt Dışı Eğitim", href: "/yurt-disi-egitim" },
  { label: "Blog", href: "#", disabled: true },
  { label: "İletişim", href: "/iletisim" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-3.5 left-0 right-0 z-50 pointer-events-none animate-[headerDrop_480ms_ease_both]">
      <div className="w-full max-w-site mx-auto px-5 pointer-events-auto">
        <div className="flex items-center justify-between bg-white/90 backdrop-blur-md rounded-2xl shadow-card px-5 py-2.5">
          <Link href="/" aria-label="Study Global ana sayfa">
            <Image src="/logo.png" alt="Study Global" width={140} height={40} className="h-10 w-auto" priority />
          </Link>

          <nav className={`${open ? "flex" : "hidden"} lg:flex flex-col lg:flex-row absolute lg:static top-full left-0 right-0 bg-white lg:bg-transparent rounded-xl lg:rounded-none shadow-card lg:shadow-none mt-2 lg:mt-0 p-4 lg:p-0 gap-1 lg:gap-0 z-40`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              if (link.disabled) {
                return (
                  <span key={link.label} className="px-3 py-2 text-sm text-muted-slate/50 cursor-not-allowed">
                    {link.label}
                  </span>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive ? "text-study-red font-semibold" : "text-navy hover:text-study-red"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/iletisim" className="hidden sm:inline-flex !text-xs !px-4 !py-2">
              Ücretsiz Ön Görüşme
            </Button>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menüyü aç"
            >
              <span className={`w-5 h-0.5 bg-navy transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-5 h-0.5 bg-navy transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-navy transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Create Footer**

```typescript
// components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Üniversite", href: "/universite" },
  { label: "Akademik Programlar", href: "/akademik-programlar" },
  { label: "Sınavlar", href: "/sinavlar" },
  { label: "Yurt Dışı Eğitim", href: "/yurt-disi-egitim" },
  { label: "İletişim", href: "/iletisim" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 pt-16 pb-8">
      <div className="max-w-site mx-auto px-5 grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <Image src="/logo.png" alt="Study Global" width={120} height={34} className="h-9 w-auto mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed">
            Study Global, öğrencilerin hedeflerine en uygun ülke, program ve başvuru stratejisini belirlemelerine yardımcı olan yurtdışı eğitim danışmanlığı markasıdır.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">İstanbul Ofis</h3>
          <p className="text-sm leading-relaxed">
            Nişantaşı Mah. Teşvikiye Cd.<br />No: 45/12, Şişli / İstanbul
          </p>
          <p className="text-sm mt-3">Telefon<br />+90 212 123 45 67</p>
          <p className="text-sm mt-3">E-posta<br />info@studyglobal.com.tr</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Bağlantılar</h3>
          <div className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-site mx-auto px-5 pt-6 border-t border-white/10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Study Global. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Create ChatWidget**

```typescript
// components/layout/ChatWidget.tsx
"use client";

import { useState } from "react";

const quickReplies = [
  "Hangi ülke bana uygun?",
  "IELTS mi OET mi?",
  "Yaz Okulları",
  "Başvuru Süreci",
  "Bütçe & Maliyet",
  "Vize Süreci",
];

const mockResponses: Record<string, string> = {
  "Hangi ülke bana uygun?": "Hedeflerinize, bütçenize ve istediğiniz programa göre size en uygun ülkeleri birlikte belirleyebiliriz.",
  "IELTS mi OET mi?": "Hedef ülkenize ve programınıza bağlı olarak IELTS veya OET arasında seçim yapmanızda yardımcı olabiliriz.",
  "Yaz Okulları": "Oxford, Cambridge ve Ivy League üniversitelerinde akademik yaz programları mevcuttur.",
  "Başvuru Süreci": "Başvuru sürecinizi adım adım planlıyoruz: okul seçimi, evrak hazırlığı, başvuru ve kabul.",
  "Bütçe & Maliyet": "Ülke, şehir ve program türüne göre detaylı bütçe analizi yapıyoruz.",
  "Vize Süreci": "Kabul sonrası vize evrakları, zamanlama ve başvuru sürecinde yanınızdayız.",
};

type Message = { role: "bot" | "user"; text: string };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Merhaba! Study Global Asistan'a hoş geldiniz. Size program, sınav veya ülke seçimi konusunda yardımcı olabilirim." },
  ]);
  const [input, setInput] = useState("");

  function send(text: string) {
    const userMsg: Message = { role: "user", text };
    const botMsg: Message = { role: "bot", text: mockResponses[text] || "Detaylı bilgi için danışmanlarımızla iletişime geçin." };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      <div className={`fixed bottom-20 right-5 z-50 w-80 bg-white rounded-2xl shadow-card transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <div className="bg-navy-deep text-white p-4 rounded-t-2xl">
          <strong className="block text-sm">Study Global Asistan</strong>
          <span className="text-xs text-white/60">Programlar, sınavlar ve ülke seçimi hakkında sorabilirsiniz.</span>
        </div>
        <div className="h-64 overflow-y-auto p-4 flex flex-col gap-3">
          {messages.map((msg, i) => (
            <div key={i} className={`text-sm px-3 py-2 rounded-xl max-w-[85%] ${msg.role === "bot" ? "bg-ivory self-start" : "bg-navy text-white self-end"}`}>
              {msg.text}
            </div>
          ))}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {quickReplies.map((qr) => (
                <button key={qr} onClick={() => send(qr)} className="text-xs bg-ivory border border-border-soft rounded-full px-3 py-1.5 hover:border-navy transition-colors">
                  {qr}
                </button>
              ))}
            </div>
          )}
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); if (input.trim()) send(input.trim()); }}
          className="flex border-t border-border-soft"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Mesajınızı yazın..."
            className="flex-1 px-4 py-3 text-sm outline-none rounded-bl-2xl"
          />
          <button type="submit" className="px-4 text-study-red font-bold">➤</button>
        </form>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 bg-navy-deep text-white px-5 py-3 rounded-full shadow-card flex items-center gap-2 hover:bg-navy transition-colors"
      >
        ✦ <span className="text-sm font-medium">Study Global Asistan</span>
      </button>
    </>
  );
}
```

- [ ] **Step 4: Create root layout**

```typescript
// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/layout/ChatWidget";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Study Global | Yurtdışı Eğitim Danışmanlığı",
    template: "%s | Study Global",
  },
  description: "Study Global ile yurtdışı eğitim, sınav hazırlığı ve akademik program danışmanlığı.",
  metadataBase: new URL("https://studyglobal.com.tr"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Verify layout renders**

```bash
npm run dev
```

Visit localhost:3000 — should show header, empty main content area, footer, and chat widget.

- [ ] **Step 6: Commit**

```bash
git add components/layout/ app/layout.tsx && git commit -m "feat: add Header, Footer, ChatWidget and root layout"
```

---

### Task 4: Section Components

**Files:**
- Create: `components/sections/Hero.tsx`
- Create: `components/sections/HeroSlider.tsx`
- Create: `components/sections/TrustStrip.tsx`
- Create: `components/sections/BenefitGrid.tsx`
- Create: `components/sections/SpotlightGrid.tsx`
- Create: `components/sections/StepList.tsx`
- Create: `components/sections/DarkSection.tsx`
- Create: `components/sections/CTASection.tsx`

- [ ] **Step 1: Create Hero (simple variant for subpages)**

```typescript
// components/sections/Hero.tsx
import { Button } from "@/components/ui/Button";

type HeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  points?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function Hero({ eyebrow, title, text, points, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative bg-navy-deep text-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-deep/90" />
      <div className="relative max-w-site mx-auto px-5">
        <span className="text-xs font-bold uppercase tracking-widest text-soft-red mb-3 block">{eyebrow}</span>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 max-w-2xl">{title}</h1>
        <p className="text-white/70 max-w-xl leading-relaxed mb-8">{text}</p>
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-3 mb-8">
            {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
            {secondaryCta && <Button variant="secondary" href={secondaryCta.href}>{secondaryCta.label}</Button>}
          </div>
        )}
        {points && points.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {points.map((p) => (
              <div key={p} className="flex items-center gap-2 text-sm text-white/60">
                <span className="w-1.5 h-1.5 bg-study-red rounded-full" />
                {p}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create HeroSlider (client component for home)**

```typescript
// components/sections/HeroSlider.tsx
"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  "/assets/hero-study-desk.jpg",
  "/assets/global-education-hero.jpg",
  "/assets/country-decision-banner.jpg",
  "/assets/destination-collage.jpg",
  "/assets/academic-programs-collage.jpg",
];

export function HeroSlider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (transitioning) return;
    setTransitioning(true);
    setActive((prev) => (prev + 1) % slides.length);
    setTimeout(() => setTransitioning(false), 1520);
  }, [transitioning]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const timer = setInterval(nextSlide, 6400);
    const onVisibility = () => {
      if (document.hidden) clearInterval(timer);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [nextSlide]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-[background-image] duration-[1500ms] ease-in-out"
        style={{ backgroundImage: `url("${slides[active]}")` }}
      />
      <div className="absolute inset-0 bg-navy-deep/70" />
      <div className="relative max-w-site mx-auto px-5 w-full py-32">
        {children}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create TrustStrip**

```typescript
// components/sections/TrustStrip.tsx
type Metric = { value: string; label: string };

export function TrustStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <section className="bg-white border-y border-border-soft">
      <div className="max-w-site mx-auto px-5 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col">
            <strong className="text-xl md:text-2xl font-bold text-navy">{m.value}</strong>
            <span className="text-xs text-muted-slate">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create BenefitGrid**

```typescript
// components/sections/BenefitGrid.tsx
import { SectionHead } from "@/components/ui/SectionHead";

type BenefitItem = { title: string; text: string };

type BenefitGridProps = {
  eyebrow: string;
  title: string;
  description?: string;
  items: BenefitItem[];
  dark?: boolean;
};

export function BenefitGrid({ eyebrow, title, description, items, dark }: BenefitGridProps) {
  return (
    <section className={dark ? "bg-navy-deep text-white py-16" : "py-16"}>
      <div className="max-w-site mx-auto px-5">
        <SectionHead eyebrow={eyebrow} title={title} description={description} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <article key={item.title} className={`p-6 rounded-xl ${dark ? "bg-navy-card" : "bg-white shadow-card"}`}>
              <h3 className={`font-semibold mb-2 ${dark ? "text-white" : "text-navy-deep"}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-white/60" : "text-muted-slate"}`}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create SpotlightGrid**

```typescript
// components/sections/SpotlightGrid.tsx
import { SectionHead } from "@/components/ui/SectionHead";

type SpotlightItem = { title: string; text: string };

export function SpotlightGrid({ eyebrow, title, items }: { eyebrow: string; title: string; items: SpotlightItem[] }) {
  return (
    <section className="py-16">
      <div className="max-w-site mx-auto px-5">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="bg-white rounded-xl shadow-card p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-navy-deep mb-2">{item.title}</h3>
              <p className="text-sm text-muted-slate leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Create StepList**

```typescript
// components/sections/StepList.tsx
import { SectionHead } from "@/components/ui/SectionHead";

type StepItem = { title: string; text: string };

export function StepList({ eyebrow, title, items, dark }: { eyebrow: string; title: string; items: StepItem[]; dark?: boolean }) {
  return (
    <section className={dark ? "bg-navy-deep text-white py-16" : "py-16"}>
      <div className="max-w-site mx-auto px-5">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <article key={item.title} className={`relative p-6 rounded-xl ${dark ? "bg-navy-card" : "bg-white shadow-card"}`}>
              <span className={`text-4xl font-bold absolute top-4 right-4 ${dark ? "text-white/10" : "text-navy/5"}`}>{i + 1}</span>
              <h3 className={`font-semibold mb-2 ${dark ? "text-white" : "text-navy-deep"}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-white/60" : "text-muted-slate"}`}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Create CTASection**

```typescript
// components/sections/CTASection.tsx
import { Button } from "@/components/ui/Button";

type CTAProps = { title: string; text: string };

export function CTASection({ title, text }: CTAProps) {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return (
    <section className="bg-gradient-to-br from-navy-deep to-navy py-20 text-white text-center">
      <div className="max-w-site mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-white/60 mb-8 max-w-lg mx-auto">{text}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/iletisim">Ücretsiz Danışmanlık Al</Button>
          <Button variant="secondary" href={`https://wa.me/${whatsapp}`}>WhatsApp&apos;tan Hemen Yazın</Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 8: Commit**

```bash
git add components/sections/ && git commit -m "feat: add Hero, HeroSlider, TrustStrip, BenefitGrid, SpotlightGrid, StepList, CTASection"
```

---

### Task 5: Country Data & Dynamic Route

**Files:**
- Create: `data/countries.ts`
- Create: `app/ulkeler/[slug]/page.tsx`

- [ ] **Step 1: Create country data file**

Create `data/countries.ts` with the full Country type definition and all 14 country objects. Extract data from the existing HTML files at `/Users/mertaysune/Desktop/studyglobal 1 /`. Each country object should include: slug, name, flag, eyebrow, heroText, region, premium, metrics (4 items), benefits (4 items), universities (6 items), costs (4 items), heroPoints (3 items), ctaTitle, ctaText, image.

Read each country HTML file and extract the data into TypeScript objects. Example for the first country:

```typescript
import type { Country } from "./types";

export const countries: Country[] = [
  {
    slug: "ingiltere",
    name: "İngiltere",
    flag: "🇬🇧",
    eyebrow: "Birleşik Krallık",
    heroText: "İngiltere, köklü üniversiteleri, kısa program süreleri ve yüksek akademik prestiji ile her yıl binlerce Türk öğrencinin ilk tercihi. Oxford ve Cambridge gibi dünya devleri ile 142 üniversite arasından seçim yapın.",
    region: "europe",
    premium: true,
    metrics: [
      { value: "142", label: "Üniversite" },
      { value: "3 Yıl", label: "Lisans Süresi" },
      { value: "1 Yıl", label: "Yüksek Lisans" },
      { value: "2 Yıl", label: "Graduate Route Vizesi" },
    ],
    benefits: [
      { title: "Kısa Program Süresi", text: "Lisans 3 yıl, yüksek lisans 1 yıl. Diğer ülkelere göre hem zaman hem maliyet tasarrufu." },
      { title: "Akademik Prestij", text: "Dünya sıralamalarında ilk 10'da 4 İngiliz üniversitesi. Oxford, Cambridge, Imperial, UCL." },
      { title: "Graduate Route", text: "Mezuniyet sonrası 2 yıl (doktora 3 yıl) çalışma vizesi. İngiltere'de kariyer yapma imkanı." },
      { title: "Küresel Tanınırlık", text: "İngiliz diplomaları dünya genelinde en yüksek tanınırlığa sahip. Global kariyer için güçlü temel." },
    ],
    universities: [
      { name: "University of Oxford", text: "Dünyanın en eski İngilizce eğitim veren üniversitesi. Tüm alanlarda dünya zirvesi." },
      { name: "University of Cambridge", text: "800 yıllık tarihi, 100+ Nobel ödüllü mezun. Bilim, mühendislik ve beşeri bilimlerde zirve." },
      { name: "Imperial College London", text: "Bilim, mühendislik, tıp ve işletme odaklı. Dünya sıralamalarında sürekli ilk 10." },
      { name: "UCL", text: "Londra'nın en büyük üniversitesi. Mimarlık, eğitim ve sosyal bilimler alanlarında dünya lideri." },
      { name: "University of Edinburgh", text: "İskoçya'nın başkentinde. AI, veri bilimi ve tıp alanlarında güçlü araştırma üniversitesi." },
      { name: "LSE", text: "Ekonomi, siyaset ve sosyal bilimler alanında dünyanın en iyi üniversitelerinden." },
    ],
    costs: [
      { title: "Lisans Ücreti", text: "Uluslararası öğrenciler: £15.000-£38.000/yıl. Tıp programları £38.000+ olabilir." },
      { title: "Yüksek Lisans", text: "£12.000-£35.000 (1 yıl toplam). MBA programları £40.000+ olabilir." },
      { title: "Yaşam Maliyeti", text: "£1.000-£1.500/ay. Londra dışında daha uygun. Vize için £1.334/ay kanıtlanmalı." },
      { title: "Chevening Bursu", text: "İngiliz hükümetinin tam bursu: eğitim ücreti, yaşam giderleri, uçak bileti dahil." },
    ],
    heroPoints: ["UCAS Yetkili Merkez", "3 Yıl Lisans", "Graduate Route 2 Yıl Vize"],
    ctaTitle: "İngiltere'de eğitim hayalinizi gerçeğe dönüştürün",
    ctaText: "Study Global UCAS yetkili merkezi olarak başvuru sürecinizin her aşamasında yanınızdayız. Danışmanlık hizmetimiz ücretsizdir.",
    image: "/assets/countries/uk.jpg",
  },
  // ... remaining 13 countries extracted from HTML files
];
```

Repeat for all 14 countries: ingiltere, iskocya, irlanda, finlandiya, isvicre, avusturya, belcika, ispanya, japonya, polonya, cin, almanya, kanada, amerika, hollanda, italya.

- [ ] **Step 2: Create country dynamic route page**

```typescript
// app/ulkeler/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { countries } from "@/data/countries";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { SpotlightGrid } from "@/components/sections/SpotlightGrid";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return {};
  return {
    title: `${country.name}'de Üniversite Eğitimi`,
    description: country.heroText.slice(0, 160),
  };
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  return (
    <>
      <Hero
        eyebrow={country.eyebrow}
        title={`${country.name}'de Üniversite Eğitimi`}
        text={country.heroText}
        points={country.heroPoints}
        primaryCta={{ label: "Ücretsiz Danışmanlık Al", href: "/iletisim" }}
        secondaryCta={{ label: "WhatsApp'tan Sor", href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}` }}
      />
      <TrustStrip metrics={country.metrics} />
      <BenefitGrid eyebrow={`Neden ${country.name}?`} title={`${country.name}'de Eğitimin Avantajları`} items={country.benefits} />
      <SpotlightGrid eyebrow="Üniversiteler" title={`Öne Çıkan ${country.name} Üniversiteleri`} items={country.universities} />
      <BenefitGrid eyebrow="Maliyet & Burs" title="Eğitim Maliyetleri ve Burslar" items={country.costs} dark />
      <CTASection title={country.ctaTitle} text={country.ctaText} />
    </>
  );
}
```

- [ ] **Step 3: Verify a country page renders**

```bash
npm run dev
```

Visit localhost:3000/ulkeler/ingiltere — should show full country page with all sections.

- [ ] **Step 4: Commit**

```bash
git add data/countries.ts app/ulkeler/ && git commit -m "feat: add country data and dynamic route for 14 countries"
```

---

### Task 6: Service Data & Dynamic Route

**Files:**
- Create: `data/services.ts`
- Create: `app/hizmetler/[slug]/page.tsx`

- [ ] **Step 1: Create service data file**

Create `data/services.ts` with the Service type and 6 service objects. Extract data from: `ingiltere-basvuru.html`, `iskocya-egitim.html` (as service), `irlanda-egitim.html` (as service), `basvuru-belgeleri.html`, `ucas-basvuru.html`, `ucas-clearing.html`.

Each service has a `sections` array with flexible section types. Extract all content from the HTML files.

- [ ] **Step 2: Create service dynamic route page**

```typescript
// app/hizmetler/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { services } from "@/data/services";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { SpotlightGrid } from "@/components/sections/SpotlightGrid";
import { StepList } from "@/components/sections/StepList";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.heroText.slice(0, 160),
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Hero
        eyebrow={service.eyebrow}
        title={service.title}
        text={service.heroText}
        points={service.heroPoints}
        primaryCta={{ label: "Ücretsiz Danışmanlık Al", href: "/iletisim" }}
        secondaryCta={{ label: "WhatsApp'tan Sor", href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}` }}
      />
      <TrustStrip metrics={service.metrics} />
      {service.sections.map((section, i) => {
        switch (section.type) {
          case "benefits":
            return <BenefitGrid key={i} eyebrow={section.eyebrow} title={section.title} items={section.items} />;
          case "dark-benefits":
            return <BenefitGrid key={i} eyebrow={section.eyebrow} title={section.title} items={section.items} dark />;
          case "spotlights":
            return <SpotlightGrid key={i} eyebrow={section.eyebrow} title={section.title} items={section.items} />;
          case "steps":
            return <StepList key={i} eyebrow={section.eyebrow} title={section.title} items={section.items} />;
        }
      })}
      <CTASection title={service.ctaTitle} text={service.ctaText} />
    </>
  );
}
```

- [ ] **Step 3: Verify a service page renders**

Visit localhost:3000/hizmetler/ucas-basvuru.

- [ ] **Step 4: Commit**

```bash
git add data/services.ts app/hizmetler/ && git commit -m "feat: add service data and dynamic route for 6 services"
```

---

### Task 7: Home Page

**Files:**
- Create: `app/page.tsx`
- Create: `components/sections/CountryCardGrid.tsx`
- Create: `components/sections/ServiceGrid.tsx`
- Create: `components/sections/TestimonialGrid.tsx`
- Create: `components/sections/LeadForm.tsx`

- [ ] **Step 1: Create LeadForm component**

```typescript
// components/sections/LeadForm.tsx
"use client";

import { useState } from "react";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Lead form submission:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <aside className="bg-white rounded-2xl shadow-card p-8 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h2 className="text-lg font-bold text-navy-deep mb-2">Talebiniz alındı</h2>
        <p className="text-sm text-muted-slate">Danışmanlarımız en kısa sürede sizinle iletişime geçecek.</p>
      </aside>
    );
  }

  return (
    <aside className="bg-white rounded-2xl shadow-card p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-navy-deep text-white flex items-center justify-center font-bold text-sm">SG</div>
        <h2 className="font-bold text-navy-deep">Sizi arayalım.</h2>
      </div>
      <p className="text-sm text-muted-slate mb-4">Yurt dışı eğitim hedefinizi paylaşın, danışmanlarımız en kısa sürede sizinle iletişime geçsin.</p>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <input name="name" required placeholder="Ad Soyad" className="w-full px-4 py-3 rounded-lg border border-border-soft text-sm outline-none focus:border-navy transition-colors" />
        <input name="phone" required type="tel" placeholder="Telefon / WhatsApp" className="w-full px-4 py-3 rounded-lg border border-border-soft text-sm outline-none focus:border-navy transition-colors" />
        <select name="interest" required className="w-full px-4 py-3 rounded-lg border border-border-soft text-sm outline-none focus:border-navy transition-colors bg-white">
          <option value="">İlgi Alanı Seçin</option>
          <option>Üniversite</option>
          <option>Yüksek Lisans / MBA</option>
          <option>Sınav Hazırlığı</option>
          <option>Akademik Programlar</option>
        </select>
        <select name="country" required className="w-full px-4 py-3 rounded-lg border border-border-soft text-sm outline-none focus:border-navy transition-colors bg-white">
          <option value="">Hedef Ülke Seçin</option>
          <option>İngiltere</option>
          <option>Kanada</option>
          <option>Amerika</option>
          <option>Almanya</option>
          <option>Hollanda</option>
          <option>İtalya</option>
        </select>
        <button type="submit" className="w-full bg-study-red text-white py-3 rounded-lg font-semibold hover:bg-soft-red transition-colors">
          Beni Arayın
        </button>
      </form>
      <div className="flex flex-wrap gap-3 mt-4 text-xs text-muted-slate">
        <span>24 saat içinde dönüş</span>
        <span>Ücretsiz ön analiz</span>
        <span>KVKK uyumlu süreç</span>
      </div>
    </aside>
  );
}
```

- [ ] **Step 2: Create CountryCardGrid (client component with filters)**

```typescript
// components/sections/CountryCardGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FilterChip } from "@/components/ui/FilterChip";

type CountryCard = {
  slug: string;
  name: string;
  flag: string;
  region: string;
  premium: boolean;
  image: string;
  description: string;
};

const filters = [
  { key: "all", label: "Tüm ülkeler" },
  { key: "europe", label: "Avrupa" },
  { key: "north-america", label: "Kuzey Amerika" },
  { key: "asia", label: "Asya" },
  { key: "premium", label: "Premium hedefler" },
];

export function CountryCardGrid({ countries }: { countries: CountryCard[] }) {
  const [active, setActive] = useState("all");

  const filtered = countries.filter((c) => {
    if (active === "all") return true;
    if (active === "premium") return c.premium;
    return c.region === active;
  });

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <FilterChip key={f.key} label={f.label} active={active === f.key} onClick={() => setActive(f.key)} />
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c) => (
          <Link key={c.slug} href={`/ulkeler/${c.slug}`} className="group bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-40 overflow-hidden">
              <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5">
              <span className="text-lg mr-2">{c.flag}</span>
              <h3 className="inline font-semibold text-navy-deep">{c.name}&apos;de Üniversite Eğitimi</h3>
              <p className="text-sm text-muted-slate mt-2">{c.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create ServiceGrid component**

```typescript
// components/sections/ServiceGrid.tsx
import Image from "next/image";
import Link from "next/link";

type ServiceCard = { image: string; label: string; title: string; text: string; href: string };

export function ServiceGrid({ services }: { services: ServiceCard[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <Link key={s.href} href={s.href} className="group bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-44 overflow-hidden">
            <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded">{s.label}</span>
              <strong className="block text-sm mt-2">{s.title}</strong>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-slate">{s.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Create TestimonialGrid**

```typescript
// components/sections/TestimonialGrid.tsx
type Testimonial = { initials: string; name: string; uni: string; text: string };

export function TestimonialGrid({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((t) => (
        <article key={t.name} className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">{t.initials}</div>
            <div>
              <h3 className="font-semibold text-sm text-navy-deep">{t.name}</h3>
              <span className="text-xs text-muted-slate">{t.uni}</span>
            </div>
          </div>
          <div className="text-study-red text-sm mb-2">★★★★★</div>
          <p className="text-sm text-muted-slate leading-relaxed">{t.text}</p>
        </article>
      ))}
    </div>
  );
}
```

- [ ] **Step 5: Create home page**

Build `app/page.tsx` assembling all components: HeroSlider with LeadForm inside, TrustStrip, ServiceGrid, road map (StepList), country destinations section, testimonials, content hub, and CTASection. Content extracted from existing `index.html`.

- [ ] **Step 6: Verify home page**

Visit localhost:3000 — full home page with hero slider, lead form, services, countries, testimonials, CTA.

- [ ] **Step 7: Commit**

```bash
git add app/page.tsx components/sections/CountryCardGrid.tsx components/sections/ServiceGrid.tsx components/sections/TestimonialGrid.tsx components/sections/LeadForm.tsx && git commit -m "feat: add home page with all sections"
```

---

### Task 8: Static Pages (Üniversite, Sınavlar, Akademik Programlar, Yurt Dışı Eğitim)

**Files:**
- Create: `app/universite/page.tsx`
- Create: `app/sinavlar/page.tsx`
- Create: `app/akademik-programlar/page.tsx`
- Create: `app/yurt-disi-egitim/page.tsx`

- [ ] **Step 1: Create each static page**

Read each corresponding HTML file from the source site and create the Next.js page using the shared section components (Hero, TrustStrip, BenefitGrid, SpotlightGrid, StepList, CTASection). Each page exports its own `metadata`.

For `yurt-disi-egitim/page.tsx`, import `CountryCardGrid` and pass country data with descriptions extracted from the existing country cards. Also include service cards linking to `/hizmetler/[slug]`.

- [ ] **Step 2: Verify all static pages render**

Visit each URL: `/universite`, `/sinavlar`, `/akademik-programlar`, `/yurt-disi-egitim`.

- [ ] **Step 3: Commit**

```bash
git add app/universite/ app/sinavlar/ app/akademik-programlar/ app/yurt-disi-egitim/ && git commit -m "feat: add universite, sinavlar, akademik-programlar, yurt-disi-egitim pages"
```

---

### Task 9: Contact Page

**Files:**
- Create: `app/iletisim/page.tsx`
- Create: `components/sections/ContactForm.tsx`

- [ ] **Step 1: Create ContactForm component**

```typescript
// components/sections/ContactForm.tsx
"use client";

import { useState } from "react";

const countries = [
  "İngiltere", "İskoçya", "İrlanda", "Almanya", "Kanada", "Amerika",
  "Hollanda", "İtalya", "Finlandiya", "İsviçre", "Avusturya", "Belçika",
  "İspanya", "Japonya", "Polonya", "Çin", "Diğer",
];

const levels = ["Lisans", "Yüksek Lisans", "Doktora", "Dil Okulu"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Contact form:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-card p-10 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-navy-deep mb-2">Mesajınız alındı</h3>
        <p className="text-muted-slate">Danışmanlarımız 24 saat içinde sizinle iletişime geçecek.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3.5 rounded-lg border border-border-soft text-sm outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-all bg-white";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-card p-8 grid gap-4">
      <div className="flex flex-wrap gap-3 mb-2 text-xs text-muted-slate">
        <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">Bilgileriniz gizli tutulur</span>
        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">24 saat içinde dönüş</span>
        <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full">Ücretsiz danışmanlık</span>
      </div>
      <input name="name" required placeholder="Ad Soyad" className={inputClass} />
      <input name="email" required type="email" placeholder="E-posta" className={inputClass} />
      <input name="phone" required type="tel" placeholder="Telefon" className={inputClass} />
      <select name="country" required className={inputClass}>
        <option value="">Hedef Ülke</option>
        {countries.map((c) => <option key={c}>{c}</option>)}
      </select>
      <select name="level" required className={inputClass}>
        <option value="">Eğitim Seviyesi</option>
        {levels.map((l) => <option key={l}>{l}</option>)}
      </select>
      <textarea name="message" rows={4} placeholder="Mesajınız" className={`${inputClass} resize-none`} />
      <button type="submit" className="w-full bg-study-red text-white py-4 rounded-lg font-semibold text-base hover:bg-soft-red transition-colors flex items-center justify-center gap-2">
        Ücretsiz Danışmanlık İsteyin →
      </button>
    </form>
  );
}
```

- [ ] **Step 2: Create contact page**

```typescript
// app/iletisim/page.tsx
import { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Study Global ile iletişime geçin. Ücretsiz danışmanlık için formu doldurun veya ofisimizi ziyaret edin.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-deep text-white pt-32 pb-16">
        <div className="max-w-site mx-auto px-5">
          <span className="text-xs font-bold uppercase tracking-widest text-soft-red mb-3 block">İletişim</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Bizimle İletişime Geçin</h1>
          <p className="text-white/70 max-w-lg">Yurt dışı eğitim hedefinizi paylaşın, uzman danışmanlarımız sizinle iletişime geçsin.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-site mx-auto px-5 grid lg:grid-cols-2 gap-10">
          <ContactForm />
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-navy-deep mb-3">İstanbul Ofis</h3>
              <p className="text-sm text-muted-slate leading-relaxed">
                Nişantaşı Mah. Teşvikiye Cd.<br />No: 45/12, Şişli / İstanbul
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy-deep mb-3">Telefon</h3>
              <p className="text-sm text-muted-slate">+90 212 123 45 67</p>
            </div>
            <div>
              <h3 className="font-bold text-navy-deep mb-3">E-posta</h3>
              <p className="text-sm text-muted-slate">info@studyglobal.com.tr</p>
            </div>
            <div>
              <h3 className="font-bold text-navy-deep mb-3">Çalışma Saatleri</h3>
              <p className="text-sm text-muted-slate">Pazartesi - Cumartesi: 09:30 - 18:30</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify contact page**

Visit localhost:3000/iletisim. Test form submission — should log to console and show success state.

- [ ] **Step 4: Commit**

```bash
git add app/iletisim/ components/sections/ContactForm.tsx && git commit -m "feat: add contact page with premium form"
```

---

### Task 10: SEO (Sitemap, Robots, Schema)

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`

- [ ] **Step 1: Create sitemap**

```typescript
// app/sitemap.ts
import { MetadataRoute } from "next";
import { countries } from "@/data/countries";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://studyglobal.com.tr";
  const staticPages = [
    { url: base, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${base}/universite`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/akademik-programlar`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/sinavlar`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/yurt-disi-egitim`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/iletisim`, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const countryPages = countries.map((c) => ({
    url: `${base}/ulkeler/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/hizmetler/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...countryPages, ...servicePages];
}
```

- [ ] **Step 2: Create robots.txt**

```typescript
// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://studyglobal.com.tr/sitemap.xml",
  };
}
```

- [ ] **Step 3: Verify SEO files**

Visit localhost:3000/sitemap.xml and localhost:3000/robots.txt.

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts app/robots.ts && git commit -m "feat: add sitemap.xml and robots.txt generation"
```

---

### Task 11: Analytics Component

**Files:**
- Create: `components/Analytics.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create Analytics component**

```typescript
// components/Analytics.tsx
import Script from "next/script";

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}
      {pixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
```

- [ ] **Step 2: Add Analytics to layout**

Add `<Analytics />` inside `<body>` in `app/layout.tsx`, after `<ChatWidget />`.

- [ ] **Step 3: Commit**

```bash
git add components/Analytics.tsx app/layout.tsx && git commit -m "feat: add GA4 and Meta Pixel analytics"
```

---

### Task 12: Final Verification & Build

- [ ] **Step 1: Run build**

```bash
cd ~/Desktop/studyglobal-next && npm run build
```

Expected: Build succeeds with all pages statically generated.

- [ ] **Step 2: Verify all routes**

```bash
npm start
```

Check each route manually:
- `/` — home page with hero slider, lead form, services, countries
- `/universite` — university page
- `/akademik-programlar` — academic programs
- `/sinavlar` — exams page
- `/yurt-disi-egitim` — country listing with filters
- `/iletisim` — contact form
- `/ulkeler/ingiltere` — country detail
- `/ulkeler/finlandiya` — country detail
- `/hizmetler/ucas-basvuru` — service detail
- `/sitemap.xml` — sitemap
- `/robots.txt` — robots

- [ ] **Step 3: Commit final state**

```bash
git add -A && git commit -m "chore: final build verification — all pages render correctly"
```
