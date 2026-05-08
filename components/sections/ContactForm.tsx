"use client";

import { useState, type FormEvent } from "react";

const countries = [
  "İngiltere",
  "İskoçya",
  "İrlanda",
  "Almanya",
  "Kanada",
  "Amerika",
  "Hollanda",
  "İtalya",
  "Finlandiya",
  "İsviçre",
  "Avusturya",
  "Belçika",
  "İspanya",
  "Japonya",
  "Polonya",
  "Çin",
  "Diğer",
];

const educationLevels = ["Lisans", "Yüksek Lisans", "Doktora", "Dil Okulu"];

const trustBadges = [
  { label: "Bilgileriniz gizli tutulur", color: "text-green-600 bg-green-50" },
  { label: "24 saat içinde dönüş", color: "text-blue-600 bg-blue-50" },
  { label: "Ücretsiz danışmanlık", color: "text-amber-600 bg-amber-50" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    console.log("Contact form data:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <aside className="rounded-[var(--radius)] bg-white border border-border-soft shadow-card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <span className="text-green-600 text-3xl">&#10003;</span>
        </div>
        <h2 className="text-xl font-bold text-navy mb-2">Talebiniz Alındı!</h2>
        <p className="text-muted-slate text-sm leading-relaxed">
          Danışmanlarımız en kısa sürede sizinle iletişime geçecek.
        </p>
      </aside>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border-soft bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-slate outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 transition-colors";

  return (
    <aside className="rounded-[var(--radius)] bg-white border border-border-soft shadow-card p-6 md:p-8">
      {/* Trust badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {trustBadges.map((badge) => (
          <span
            key={badge.label}
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${badge.color}`}
          >
            <span>&#10003;</span> {badge.label}
          </span>
        ))}
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          required
          name="name"
          type="text"
          placeholder="Ad Soyad"
          className={inputClass}
        />
        <input
          required
          name="email"
          type="email"
          placeholder="E-posta"
          className={inputClass}
        />
        <input
          required
          name="phone"
          type="tel"
          placeholder="Telefon"
          className={inputClass}
        />
        <select
          required
          name="country"
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Hedef Ülke Seçin
          </option>
          {countries.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          required
          name="education"
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Eğitim Seviyesi Seçin
          </option>
          {educationLevels.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
        <textarea
          name="message"
          rows={4}
          placeholder="Mesajınız"
          className={inputClass}
        />
        <button
          type="submit"
          className="w-full rounded-[var(--radius)] bg-study-red text-white font-semibold py-3 text-sm hover:bg-soft-red transition-colors cursor-pointer"
        >
          Ücretsiz Danışmanlık İsteyin &rarr;
        </button>
      </form>
    </aside>
  );
}
