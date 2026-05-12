"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [contactError, setContactError] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    if (!phone && !email) {
      setContactError(true);
      return;
    }
    setContactError(false);
    const data = Object.fromEntries(fd.entries());
    console.log("Lead form data:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <aside className="lead-card" style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>&#10003;</div>
        <h2>Talebiniz alındı!</h2>
        <p>Danışmanlarımız en kısa sürede sizinle iletişime geçecek.</p>
      </aside>
    );
  }

  return (
    <aside className="lead-card" data-primary-form="">
      <div className="lead-card-top">
        <div>
          <h2>Danışmanımız sizi arasın.</h2>
        </div>
      </div>
      <p>
        Yurt dışı eğitim hedefinizi paylaşın, danışmanlarımız en kısa sürede
        sizinle iletişime geçsin.
      </p>
      <form className="form-grid" onSubmit={handleSubmit}>
        <input required name="name" type="text" placeholder="Ad Soyad" />
        <input
          name="phone"
          type="tel"
          placeholder="Telefon / WhatsApp"
        />
        <input
          name="email"
          type="email"
          placeholder="E-posta"
        />
        {contactError && (
          <small style={{ color: "#ffb8b3", marginTop: "-4px" }}>
            Lütfen telefon ya da e-posta bilgilerinden en az birini girin.
          </small>
        )}
        <select required name="interest" defaultValue="">
          <option value="" disabled>
            İlgi Alanı Seçin
          </option>
          <option>Üniversite</option>
          <option>Yüksek Lisans / MBA</option>
          <option>Sınav Hazırlığı</option>
          <option>Akademik Programlar</option>
        </select>
        <select required name="country" defaultValue="">
          <option value="" disabled>
            Hedef Ülke Seçin
          </option>
          <option>İngiltere</option>
          <option>Kanada</option>
          <option>Amerika</option>
          <option>Almanya</option>
          <option>Hollanda</option>
          <option>İtalya</option>
        </select>
        <div className="lead-form-actions">
          <label className="kvkk-consent">
            <input required name="kvkk" type="checkbox" />
            <span>
              <Link href="/kvkk" target="_blank" rel="noopener noreferrer"><strong>KVKK</strong></Link> kapsamında verilerimin işlenmesini onaylıyorum.
            </span>
          </label>
          <button className="btn btn-primary" type="submit">
            Beni Arayın
          </button>
        </div>
      </form>
      <div className="lead-benefits">
        <span>24 saat içinde dönüş</span>
        <span>Ücretsiz ön analiz</span>
        <span>KVKK uyumlu süreç</span>
      </div>
      <small className="form-note">
        Bilgileriniz gizlidir. Sadece sizinle iletişim için kullanılır.
      </small>
    </aside>
  );
}
