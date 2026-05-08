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
      <aside className="lead-card" style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>&#10003;</div>
        <h2>Talebiniz alindi!</h2>
        <p>Danismanlarimiz en kisa surede sizinle iletisime gececek.</p>
      </aside>
    );
  }

  return (
    <aside className="lead-card" data-primary-form="">
      <div className="lead-card-top">
        <div className="lead-icon">SG</div>
        <div>
          <h2>Sizi arayalim.</h2>
        </div>
      </div>
      <p>
        Yurt disi egitim hedefinizi paylasin, danismanlarimiz en kisa surede
        sizinle iletisime gecsin.
      </p>
      <form className="form-grid" onSubmit={handleSubmit}>
        <input required name="name" type="text" placeholder="Ad Soyad" />
        <input
          required
          name="phone"
          type="tel"
          placeholder="Telefon / WhatsApp"
        />
        <select required name="interest" defaultValue="">
          <option value="" disabled>
            Ilgi Alani Secin
          </option>
          <option>Universite</option>
          <option>Yuksek Lisans / MBA</option>
          <option>Sinav Hazirligi</option>
          <option>Akademik Programlar</option>
        </select>
        <select required name="country" defaultValue="">
          <option value="" disabled>
            Hedef Ulke Secin
          </option>
          <option>Ingiltere</option>
          <option>Kanada</option>
          <option>Amerika</option>
          <option>Almanya</option>
          <option>Hollanda</option>
          <option>Italya</option>
        </select>
        <button className="btn btn-primary" type="submit">
          Beni Arayin
        </button>
      </form>
      <div className="lead-benefits">
        <span>24 saat icinde donus</span>
        <span>Ucretsiz on analiz</span>
        <span>KVKK uyumlu surec</span>
      </div>
      <small className="form-note">
        Bilgileriniz gizlidir. Sadece sizinle iletisim icin kullanilir.
      </small>
    </aside>
  );
}
