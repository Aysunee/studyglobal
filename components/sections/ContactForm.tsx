"use client";

import { useState, type FormEvent } from "react";

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
      <div className="form-card" style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>&#10003;</div>
        <h2>Talebiniz Alindi!</h2>
        <p>Danismanlarimiz en kisa surede sizinle iletisime gececek.</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} data-contact-form="" data-primary-form="">
      <div className="form-head">
        <strong>Bilgi isteyin, danismanlarimiz sizi arasin.</strong>
        <span>
          Formu doldurun; hedef ulke, okul ve basvuru sureciniz icin ekibimiz en
          kisa surede size donus yapsin.
        </span>
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="fullName">Ad Soyad</label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder="Adiniz ve soyadiniz"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="phone">Telefon</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+90"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="ornek@mail.com"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="service">Ilgilendiginiz Program</label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>
              Seciniz
            </option>
            <option>Universite Egitimi</option>
            <option>Yuksek Lisans / MBA</option>
            <option>Dil Okullari</option>
            <option>Lise Egitimi</option>
            <option>Sinav Hazirligi</option>
            <option>Akademik Programlar</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="country">Gitmek Istediginiz Ulke</label>
          <select id="country" name="country" required defaultValue="">
            <option value="" disabled>
              Seciniz
            </option>
            <option>Ingiltere</option>
            <option>Kanada</option>
            <option>Amerika</option>
            <option>Almanya</option>
            <option>Hollanda</option>
            <option>Italya</option>
            <option>Diger</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="contactTime">Size ne zaman ulasalim?</label>
          <select id="contactTime" name="contactTime" required defaultValue="">
            <option value="" disabled>
              Seciniz
            </option>
            <option>Bugun</option>
            <option>Yarin</option>
            <option>Hafta ici</option>
            <option>Hafta sonu</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="message">Mesajiniz</label>
          <textarea
            id="message"
            name="message"
            placeholder="Sorularinizi veya hedeflediginiz bolum/programi yazabilirsiniz."
          />
        </div>
      </div>
      <div className="form-actions">
        <button className="btn btn-primary" type="submit">
          Bilgi Iste
        </button>
        <a className="btn btn-whatsapp" href="#" data-whatsapp="">
          WhatsApp&apos;tan Yazin
        </a>
      </div>
      <p className="privacy">
        Bilgileriniz gizlidir. Danismanlarimiz yalnizca basvurunuz hakkinda
        iletisim kurmak icin kullanir.
      </p>
    </form>
  );
}
