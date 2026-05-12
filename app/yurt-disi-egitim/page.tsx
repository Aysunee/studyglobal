import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTASection } from "@/components/sections/CTASection";
import { CountryCardGrid } from "@/components/sections/CountryCardGrid";
import { SectionHead } from "@/components/ui/SectionHead";
import { StepList } from "@/components/sections/StepList";
import { countries } from "@/data/countries";

export const metadata: Metadata = {
  title: "Yurt Dışı Eğitim | Study Global",
  description:
    "16 ülkede üniversite, dil okulu ve sınav hazırlığı seçenekleri. UCAS desteği, burs fırsatları ve ücretsiz danışmanlık ile yurt dışı eğitim rotanızı birlikte planlayalım.",
};

const trustMetrics = [
  { value: "16", label: "Ülke" },
  { value: "1.000+", label: "Öğrenci" },
  { value: "14+", label: "Yıl Deneyim" },
  { value: "UCAS", label: "Yetkili Merkez" },
];

const serviceCards = [
  {
    slug: "ingiltere-basvuru",
    title: "İngiltere Üniversitelerine Başvuru",
    text: "İngiltere Üniversitelerinde Lisans ve Yüksek Lisans bölümlerine nasıl başvurulduğu, son başvuru tarihleri, dosya hazırlığı gibi birçok bilgi.",
  },
  {
    slug: "iskocya-egitim",
    title: "İskoçya'da Eğitim",
    text: "İskoçya üniversiteleri ve dil okullarına nasıl başvuru yapılır? Güncel okul sıralamaları, başvuru sürecinde gerekli belgeler ve başvuru sürecine dair bilgiler.",
  },
  {
    slug: "irlanda-egitim",
    title: "İrlanda'da Eğitim",
    text: "İrlanda üniversiteleri ve dil okullarına nasıl başvuru yapılır? Güncel okul sıralamaları, başvuru sürecinde gerekli belgeler ve başvuru sürecine dair bilgiler.",
  },
  {
    slug: "basvuru-belgeleri",
    title: "Başvuru Belgeleri Nelerdir?",
    text: "İngiltere üniversitelerine başvururken kullanmanız gereken belgeler önemlidir. Bu belgelerin başında transkript, diploma ve niyet mektubunuz gelir.",
  },
  {
    slug: "ucas-basvuru",
    title: "UCAS Başvuru Desteği",
    text: "İngiltere'de Lisans eğitimi başvuruları UCAS sistemi üzerinden gerçekleşir. Deneyimli kadromuz ile UCAS başvuruları ve tarihleri hakkında destek alın.",
  },
  {
    slug: "ucas-clearing",
    title: "UCAS Clearing Başvuruları",
    text: "UCAS üzerinden başvurularınıza bir cevap alamamış ya da istediğiniz okuldan kabul alamamış olabilirsiniz. UCAS Clearing size bir şans daha veriyor.",
  },
];

const rankingCards = [
  {
    title: "Üniversite Sıralaması",
    text: "İngiltere, İskoçya, İrlanda ve Galler'i de kapsayan en güncel üniversite sıralaması.",
    linkText: "Sıralamayı Gör",
  },
  {
    title: "Bölümlere Göre Sıralamalar",
    text: "Güncel üniversite sıralamalarına göre hazırlanmış 50 farklı bölümde okul sıralaması.",
    linkText: "Bölüm Sıralamalarını Gör",
  },
  {
    title: "Burs Başvuruları",
    text: "İngiltere üniversiteleri için en güncel burs başvuruları listesi.",
    linkText: "Burs Bilgilerini Gör",
  },
];

const advisoryBenefits = [
  { title: "Okul Başarı Analizi", text: "Hangi okul hangi bölümde daha başarılı? Veriye dayalı analiz yapıyoruz." },
  { title: "Mezuniyet Sonrası Destek", text: "Üniversitenin mezuniyet sonrası size sağlayacağı desteği değerlendiriyoruz." },
  { title: "Bölüm Uyumu", text: "Bölüm dersleri sizin için ideal mi? Müfredatı birlikte inceliyoruz." },
  { title: "Şehir & Maliyet", text: "Okul bulunduğu şehir ve maliyetleri ile sizin için ideal mi değerlendiriyoruz." },
];

const journeySteps = [
  { title: "Keşif & Danışmanlık", text: "Hedefinizi ve üniversite seçeneklerini netleştiririz." },
  { title: "Başvuru & Evrak", text: "Okul listesi, UCAS başvurusu ve evrak hazırlığını yönetiriz." },
  { title: "Kabul & Vize", text: "Kabul sonrası vize evrakları ve zamanlamayı planlarız." },
  { title: "Hazırlık & Uğurlama", text: "Konaklama, seyahat ve başlangıç hazırlıklarında destek oluruz." },
];

function getFirstSentence(text: string): string {
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : text;
}

const countryCards = countries.map((c) => ({
  slug: c.slug,
  name: c.name,
  flag: c.flag,
  region: c.region,
  premium: c.premium,
  image: c.image,
  description: getFirstSentence(c.heroText),
}));

export default function YurtDisiEgitimPage() {
  return (
    <main>
      <Hero
        eyebrow="Yurt Dışı Eğitim"
        title="Hedefinize uygun ülke ve programı birlikte bulalım"
        text="Üniversite, dil okulları, sınav hazırlığı ve vize süreçlerinde 16 ülke için Study Global rehberliğinde rota çıkaralım. Akademik geçmişiniz, bütçeniz ve kariyer hedefinize göre doğru tercihi netleştirelim."
        points={[
          "16 Ülke seçeneği",
          "1.000+ Öğrenci yolculuğu",
          "UCAS Yetkili Merkez",
        ]}
        primaryCta={{ label: "Ücretsiz Ön Görüşme", href: "/iletisim" }}
        secondaryCta={{ label: "Ülke Seçeneklerini Gör", href: "#ulkeler" }}
      />

      <TrustStrip metrics={trustMetrics} />

      {/* Country card grid — primary content */}
      <section id="ulkeler">
        <div className="container">
          <SectionHead
            eyebrow="Ülke Desteği"
            title="16 ülkede yurt dışı eğitim desteği veriyoruz"
            description="Hedef ülkenizi seçin; üniversite, dil okulu, sınav hazırlığı ve vize süreçlerinde danışmanlarımız uçtan uca yanınızda olsun."
          />
          <CountryCardGrid countries={countryCards} />
        </div>
      </section>

      {/* Advisory dark band */}
      <section className="dark-band country-decision-section">
        <div className="container">
          <SectionHead
            eyebrow="Danışmanlık"
            title="Başvuru sürecinde nasıl yardımcı oluyoruz?"
          />
          <div className="decision-visual">
            <div>
              <strong>16 ülkede 2.000+ üniversite arasından doğru seçim</strong>
              <span>
                Tüm üniversiteler tercihinize uygun olmayabilir. Akademik hedef,
                bütçe ve yaşam tarzınıza göre doğru rotayı birlikte çıkaralım.
              </span>
            </div>
            <Link className="btn btn-primary" href="/iletisim">
              Ücretsiz Danışmanlık Al
            </Link>
          </div>
          <div className="grid-4">
            {advisoryBenefits.map((item) => (
              <article key={item.title} className="benefit">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* UK & UCAS detailed support */}
      <section id="hizmetler">
        <div className="container">
          <SectionHead
            eyebrow="İngiltere & UK"
            title="UK için detaylı UCAS desteği"
            description="UCAS yetkili danışman olarak İngiltere, İskoçya ve İrlanda başvurularında uçtan uca destek veriyoruz."
          />
          <div className="grid-3">
            {serviceCards.map((s) => (
              <article key={s.slug} className="spotlight has-photo">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a className="text-link" href="#">
                  Detayları İncele
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings & scholarships */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Sıralamalar & Burslar"
            title="Üniversite Sıralamaları ve Burs Fırsatları"
          />
          <div className="grid-3">
            {rankingCards.map((r) => (
              <article key={r.title} className="spotlight has-photo">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <a className="text-link" href="#">
                  {r.linkText}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StepList
        eyebrow="Yolculuk"
        title="Başvuru Yolculuğu"
        items={journeySteps}
      />

      <CTASection
        title="Yurt dışı eğitim yolculuğunuza birlikte başlayalım"
        text="16 ülkede üniversite, dil okulu ve sınav hazırlığı seçeneklerini birlikte değerlendirelim. Danışmanlık hizmetimiz Türk öğrenciler için ücretsizdir."
      />
    </main>
  );
}
