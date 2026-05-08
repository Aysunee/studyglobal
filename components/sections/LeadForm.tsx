"use client";

import { useState, type FormEvent } from "react";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    console.log("Lead form data:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <aside className="rounded-[var(--radius)] bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h2 className="text-xl font-bold text-white mb-2">Talebiniz alindi!</h2>
        <p className="text-white/80 text-sm leading-relaxed">
          Danismanlarimiz en kisa surede sizinle iletisime gececek.
        </p>
      </aside>
    );
  }

  return (
    <aside className="rounded-[var(--radius)] bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-study-red flex items-center justify-center text-white text-xs font-bold">
          SG
        </div>
        <h2 className="text-lg font-bold text-white">Sizi arayalim.</h2>
      </div>
      <p className="text-white/70 text-sm mb-5 leading-relaxed">
        Yurt disi egitim hedefinizi paylasin, danismanlarimiz en kisa surede sizinle iletisime gecsin.
      </p>

      {/* Form */}
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          required
          name="name"
          type="text"
          placeholder="Ad Soyad"
          className="w-full rounded-[var(--radius)] bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/50 transition-colors"
        />
        <input
          required
          name="phone"
          type="tel"
          placeholder="Telefon / WhatsApp"
          className="w-full rounded-[var(--radius)] bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/50 transition-colors"
        />
        <select
          required
          name="interest"
          defaultValue=""
          className="w-full rounded-[var(--radius)] bg-white/10 border border-white/20 px-4 py-3 text-sm text-white outline-none focus:border-white/50 transition-colors [&>option]:text-navy"
        >
          <option value="" disabled>Ilgi Alani Secin</option>
          <option>Universite</option>
          <option>Yuksek Lisans / MBA</option>
          <option>Sinav Hazirligi</option>
          <option>Akademik Programlar</option>
        </select>
        <select
          required
          name="country"
          defaultValue=""
          className="w-full rounded-[var(--radius)] bg-white/10 border border-white/20 px-4 py-3 text-sm text-white outline-none focus:border-white/50 transition-colors [&>option]:text-navy"
        >
          <option value="" disabled>Hedef Ulke Secin</option>
          <option>Ingiltere</option>
          <option>Kanada</option>
          <option>Amerika</option>
          <option>Almanya</option>
          <option>Hollanda</option>
          <option>Italya</option>
        </select>
        <button
          type="submit"
          className="w-full rounded-[var(--radius)] bg-study-red text-white font-semibold py-3 text-sm hover:bg-soft-red transition-colors cursor-pointer"
        >
          Beni Arayin
        </button>
      </form>

      {/* Trust badges */}
      <div className="flex flex-wrap gap-3 mt-5 justify-center">
        {["24 saat icinde donus", "Ucretsiz on analiz", "KVKK uyumlu surec"].map((badge) => (
          <span key={badge} className="text-[11px] text-white/60 flex items-center gap-1">
            <span className="text-study-red">&#10003;</span> {badge}
          </span>
        ))}
      </div>
      <p className="text-[10px] text-white/40 text-center mt-3">
        Bilgileriniz gizlidir. Sadece sizinle iletisim icin kullanilir.
      </p>
    </aside>
  );
}
