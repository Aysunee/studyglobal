"use client";

import { useState, useRef, type FormEvent, type MouseEvent } from "react";
import Link from "next/link";
import "./contact.css";

export default function ContactPage() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showToast(message: string) {
    setToastMessage(message);
    setToastVisible(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToastVisible(false), 3200);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    console.log("Contact form data:", data);
    e.currentTarget.reset();
    showToast("Talebiniz alındı. Danışmanlarımız en kısa sürede sizinle iletişime geçecek.");
  }

  function handleWhatsApp(e: MouseEvent) {
    e.preventDefault();
    showToast("WhatsApp bağlantısı burada açılacak.");
  }

  function handleDemo(e: MouseEvent) {
    e.preventDefault();
    showToast("Harita bağlantısı demo olarak gösterilmektedir.");
  }

  return (
    <>
      <main className="contact-page">
        <section className="brand-panel" aria-label="Study Global marka görseli">
          <video
            className="brand-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/study-global-flag.png"
            aria-hidden="true"
          >
            <source src="/assets/study-global-contact-flag.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="contact-panel" aria-labelledby="contact-title">
          <div className="contact-shell">
            <Link className="top-link" href="/">
              &larr; Ana sayfaya dön
            </Link>
            <span className="eyebrow">İletişim</span>
            <h2 id="contact-title">Bizimle İletişime Geçin</h2>
            <p className="intro">
              Yurtdışı eğitim hedeflerinizi birlikte planlayalım. Size en uygun
              ülke, okul ve başvuru süreci için ekibimizle iletişime geçin.
            </p>

            <div className="info-grid" aria-label="İletişim bilgileri">
              <a className="info-card" href="tel:+902121234567">
                <strong>Telefon</strong>
                <span>+90 212 123 45 67</span>
              </a>
              <a className="info-card" href="#" onClick={handleWhatsApp}>
                <strong>WhatsApp</strong>
                <span>+90 212 123 45 67</span>
              </a>
              <a className="info-card" href="mailto:info@studyglobal.com.tr">
                <strong>E-posta</strong>
                <span>info@studyglobal.com.tr</span>
              </a>
              <a className="info-card" href="#" onClick={handleDemo}>
                <strong>Ofis</strong>
                <span>Nişantaşı Mah. Teşvikiye Cd. Şişli / İstanbul</span>
              </a>
            </div>

            <form className="form-card" onSubmit={handleSubmit}>
              <div className="form-head">
                <strong>Bilgi isteyin, danışmanlarımız sizi arasın.</strong>
                <span>
                  Formu doldurun; hedef ülke, okul ve başvuru süreciniz için
                  ekibimiz en kısa sürede size dönüş yapsın.
                </span>
              </div>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="fullName">Ad Soyad</label>
                  <input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    placeholder="Adınız ve soyadınız"
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
                  <label htmlFor="service">İlgilendiğiniz Program</label>
                  <select id="service" name="service" required defaultValue="">
                    <option value="">Seçiniz</option>
                    <option>Üniversite Eğitimi</option>
                    <option>Yüksek Lisans / MBA</option>
                    <option>Dil Okulları</option>
                    <option>Lise Eğitimi</option>
                    <option>Sınav Hazırlığı</option>
                    <option>Akademik Programlar</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="country">Gitmek İstediğiniz Ülke</label>
                  <select id="country" name="country" required defaultValue="">
                    <option value="">Seçiniz</option>
                    <option>İngiltere</option>
                    <option>Kanada</option>
                    <option>Amerika</option>
                    <option>Almanya</option>
                    <option>Hollanda</option>
                    <option>İtalya</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="contactTime">Size ne zaman ulaşalım?</label>
                  <select id="contactTime" name="contactTime" required defaultValue="">
                    <option value="">Seçiniz</option>
                    <option>Bugün</option>
                    <option>Yarın</option>
                    <option>Hafta içi</option>
                    <option>Hafta sonu</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Sorularınızı veya hedeflediğiniz bölüm/programı yazabilirsiniz."
                  />
                </div>
              </div>
              <div className="form-actions">
                <button className="btn btn-primary" type="submit">
                  Bilgi İste
                </button>
                <a className="btn btn-whatsapp" href="#" onClick={handleWhatsApp}>
                  WhatsApp&apos;tan Yazın
                </a>
              </div>
              <p className="privacy">
                Bilgileriniz gizlidir. Danışmanlarımız yalnızca başvurunuz
                hakkında iletişim kurmak için kullanır.
              </p>
            </form>
          </div>
        </section>
      </main>

      <div className={`toast${toastVisible ? " show" : ""}`}>
        {toastMessage}
      </div>
    </>
  );
}
