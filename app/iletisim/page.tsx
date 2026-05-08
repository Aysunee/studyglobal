import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Study Global",
  description:
    "Study Global ile iletişime geçin. Yurt dışı eğitim danışmanlığı için ücretsiz başvurunuzu yapın.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-deep text-white pt-32 pb-16">
        <div className="mx-auto max-w-[var(--max-width-site)] px-5">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-study-red mb-4">
            İletişim
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-white/70 max-w-xl text-lg leading-relaxed">
            Yurt dışı eğitim hedefiniz için uzman danışmanlarımızla görüşün.
            Size en uygun programı birlikte belirleyelim.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--max-width-site)] px-5 grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <ContactForm />

          {/* Right: Office Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                İstanbul Ofis
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-sm font-semibold text-navy mb-1">
                    Adres
                  </h3>
                  <p className="text-muted-slate text-sm leading-relaxed">
                    Büyükdere Caddesi No: 185<br />
                    Kanyon Ofis, Kat: 6<br />
                    Levent, Beşiktaş / İstanbul
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy mb-1">
                    Telefon
                  </h3>
                  <p className="text-muted-slate text-sm">
                    <a
                      href="tel:+902121234567"
                      className="hover:text-navy transition-colors"
                    >
                      +90 (212) 123 45 67
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy mb-1">
                    E-posta
                  </h3>
                  <p className="text-muted-slate text-sm">
                    <a
                      href="mailto:info@studyglobal.com.tr"
                      className="hover:text-navy transition-colors"
                    >
                      info@studyglobal.com.tr
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy mb-1">
                    Çalışma Saatleri
                  </h3>
                  <p className="text-muted-slate text-sm">
                    Pazartesi &ndash; Cumartesi: 09:30 &ndash; 18:30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
