"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

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
  const pathname = usePathname();

  return (
    <header className="fixed top-3.5 left-0 right-0 z-50 px-4">
      <nav className="mx-auto max-w-[var(--max-width-site)] bg-white/90 backdrop-blur-md rounded-2xl shadow-card px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src="/logo.png" alt="Study Global" width={140} height={40} priority />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {navLinks.map((link) =>
            link.href ? (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    pathname === link.href
                      ? "text-study-red font-semibold"
                      : "text-navy hover:text-study-red"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.label}>
                <span className="px-3 py-2 text-muted-slate/50 cursor-not-allowed select-none">
                  {link.label}
                </span>
              </li>
            )
          )}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Button href="/iletisim" className="hidden lg:inline-flex">
            Danışmanlık Al
          </Button>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Menüyü aç/kapat"
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-0.5 w-6 bg-navy rounded transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-navy rounded transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-navy rounded transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden mx-auto max-w-[var(--max-width-site)] mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-card overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 text-sm">
          {navLinks.map((link) =>
            link.href ? (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    pathname === link.href
                      ? "text-study-red font-semibold"
                      : "text-navy hover:text-study-red"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.label}>
                <span className="block px-4 py-3 text-muted-slate/50 cursor-not-allowed select-none">
                  {link.label}
                </span>
              </li>
            )
          )}
          <li className="mt-2">
            <Button href="/iletisim" className="w-full">
              Danışmanlık Al
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
