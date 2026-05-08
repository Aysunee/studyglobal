import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Iletisim | Study Global",
  description:
    "Study Global ile iletisime gecin. Yurt disi egitim danismanligi icin ucretsiz basvurunuzu yapin.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* Brand panel (left side) */}
      <section className="brand-panel" aria-label="Study Global marka gorseli">
        {/* Video/visual handled by CSS background */}
      </section>

      {/* Contact panel (right side) */}
      <section className="contact-panel" aria-labelledby="contact-title">
        <div className="contact-shell">
          <Link className="top-link" href="/">
            &larr; Ana sayfaya don
          </Link>
          <span className="eyebrow">Iletisim</span>
          <h2 id="contact-title">Bizimle Iletisime Gecin</h2>
          <p className="intro">
            Yurtdisi egitim hedeflerinizi birlikte planlayalim. Size en uygun
            ulke, okul ve basvuru sureci icin ekibimizle iletisime gecin.
          </p>

          <div className="info-grid" aria-label="Iletisim bilgileri">
            <a className="info-card" href="tel:+902121234567">
              <strong>Telefon</strong>
              <span>+90 212 123 45 67</span>
            </a>
            <a className="info-card" href="#" data-whatsapp="">
              <strong>WhatsApp</strong>
              <span>+90 212 123 45 67</span>
            </a>
            <a className="info-card" href="mailto:info@studyglobal.com.tr">
              <strong>E-posta</strong>
              <span>info@studyglobal.com.tr</span>
            </a>
            <a className="info-card" href="#">
              <strong>Ofis</strong>
              <span>Nisantasi Mah. Tesvikiye Cd. Sisli / Istanbul</span>
            </a>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
