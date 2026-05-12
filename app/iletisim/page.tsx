"use client";

import { useState, useRef, type FormEvent, type MouseEvent } from "react";
import Link from "next/link";
import "./contact.css";

export default function ContactPage() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "#";

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
    if (whatsappNumber) return;
    e.preventDefault();
    showToast("WhatsApp bağlantısı için numara tanımlanmalı.");
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

        <section className="contact-panel" aria-label="İletişim bilgileri ve başvuru formu">
          <div className="contact-shell">
            <p className="intro">
              Yurtdışı eğitim hedeflerinizi birlikte planlayalım. Size en uygun
              ülke, okul ve başvuru süreci için ekibimizle iletişime geçin.
            </p>

            <div className="info-grid" aria-label="İletişim bilgileri">
              <a className="info-card" href="tel:+902121234567">
                <strong>Telefon</strong>
                <span>+90 212 123 45 67</span>
              </a>
              <a className="info-card info-card-whatsapp" href={whatsappHref} onClick={handleWhatsApp}>
                <strong>WhatsApp</strong>
                <span>Hemen yazın →</span>
              </a>
              <a className="info-card" href="mailto:info@studyglobal.com.tr">
                <strong>E-posta</strong>
                <span>info@studyglobal.com.tr</span>
              </a>
              <a className="info-card" href="#" onClick={handleDemo}>
                <strong>Ofis</strong>
                <span>Nişantaşı Mah. Teşvikiye Cd. Şişli / İstanbul</span>
              </a>
              <div className="info-card info-card-static">
                <strong>Çalışma Saatleri</strong>
                <span>Hafta içi 09:00–18:00</span>
              </div>
              <div className="info-card info-card-social">
                <strong>Sosyal Medya</strong>
                <div className="social-row">
                  <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
                      <path d="M12 2.16c3.2 0 3.58.012 4.85.07 1.17.054 1.8.247 2.22.41.56.217.96.477 1.38.896.42.42.68.819.896 1.38.163.42.356 1.05.41 2.22.058 1.27.07 1.65.07 4.85s-.012 3.58-.07 4.85c-.054 1.17-.247 1.8-.41 2.22-.217.56-.477.96-.896 1.38-.42.42-.819.68-1.38.896-.42.163-1.05.356-2.22.41-1.27.058-1.65.07-4.85.07s-3.58-.012-4.85-.07c-1.17-.054-1.8-.247-2.22-.41a3.71 3.71 0 0 1-1.38-.896 3.71 3.71 0 0 1-.896-1.38c-.163-.42-.356-1.05-.41-2.22-.058-1.27-.07-1.65-.07-4.85s.012-3.58.07-4.85c.054-1.17.247-1.8.41-2.22.217-.56.477-.96.896-1.38.42-.42.819-.68 1.38-.896.42-.163 1.05-.356 2.22-.41 1.27-.058 1.65-.07 4.85-.07M12 0C8.74 0 8.33.014 7.05.072c-1.28.058-2.15.26-2.91.555a5.87 5.87 0 0 0-2.13 1.38A5.87 5.87 0 0 0 .627 4.14C.332 4.9.13 5.77.072 7.05.014 8.33 0 8.74 0 12s.014 3.67.072 4.95c.058 1.28.26 2.15.555 2.91.305.79.713 1.46 1.38 2.13a5.87 5.87 0 0 0 2.13 1.38c.76.295 1.63.497 2.91.555 1.28.058 1.69.072 4.95.072s3.67-.014 4.95-.072c1.28-.058 2.15-.26 2.91-.555a5.87 5.87 0 0 0 2.13-1.38 5.87 5.87 0 0 0 1.38-2.13c.295-.76.497-1.63.555-2.91.058-1.28.072-1.69.072-4.95s-.014-3.67-.072-4.95c-.058-1.28-.26-2.15-.555-2.91a5.87 5.87 0 0 0-1.38-2.13A5.87 5.87 0 0 0 19.86.627C19.1.332 18.23.13 16.95.072 15.67.014 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32m0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8m6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  </a>
                </div>
              </div>
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
              <label className="kvkk-consent kvkk-consent-contact">
                <input required name="kvkk" type="checkbox" />
                <span>
                  <Link href="/kvkk" target="_blank" rel="noopener noreferrer"><strong>KVKK</strong></Link> kapsamında verilerimin işlenmesini onaylıyorum.
                </span>
              </label>
              <div className="form-actions">
                <button className="btn btn-primary" type="submit">
                  Bilgi İste
                </button>
                <a className="btn btn-whatsapp" href={whatsappHref} onClick={handleWhatsApp}>
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
