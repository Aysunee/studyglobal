import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { SectionHead } from "@/components/ui/SectionHead";
import { StepList } from "@/components/sections/StepList";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Dil Okulları | Study Global",
  description:
    "Yurt dışında dil eğitimi için ülke, şehir, okul ve süre seçimi danışmanlığı. Genel İngilizce, sınav hazırlığı ve akademik İngilizce programları.",
};

const trustMetrics = [
  { value: "12+", label: "Hedef ülke" },
  { value: "200+", label: "Anlaşmalı okul" },
  { value: "2-52", label: "Hafta program" },
  { value: "Konaklama", label: "Aile / rezidans" },
];

const programItems = [
  {
    title: "Genel İngilizce",
    text: "Günlük yaşam, akademik ortam ve iş hayatında kendinizi rahat ifade edebileceğiniz seviyeye taşır.",
  },
  {
    title: "Akademik İngilizce",
    text: "Üniversite ve master başvuruları öncesi yazma, dinleme, sunum ve akademik referans becerilerini geliştirir.",
  },
  {
    title: "Sınav Hazırlığı",
    text: "IELTS, TOEFL, Cambridge ve OET odaklı yoğun programlar; hedef skora özel çalışma planı.",
  },
  {
    title: "Kariyer & İş İngilizcesi",
    text: "Sektöre özel terminoloji, mülakat ve sunum hazırlığı; profesyonel iletişim becerisi.",
  },
];

const cityCards = [
  {
    title: "İngiltere – Londra, Manchester, Brighton",
    text: "Klasik İngilizce aksanı, geniş okul ağı ve zengin kültürel hayat. UCAS hazırlığı için ideal.",
  },
  {
    title: "Malta – St. Julian's, Sliema, Gzira",
    text: "Avrupa'nın en uygun bütçeli İngilizce destinasyonu, sıcak iklim ve denize sıfır okullar.",
  },
  {
    title: "Kanada – Toronto, Vancouver, Montreal",
    text: "Çok kültürlü kampüsler, çalışma izinli uzun süreli programlar.",
  },
  {
    title: "ABD – New York, Boston, San Diego",
    text: "Akademik İngilizce odaklı kampüs programları, geniş üniversite köprüsü.",
  },
  {
    title: "İrlanda – Dublin, Cork, Galway",
    text: "Çalışma izinli (20 saat/hafta) program seçenekleri ve düşük maliyet.",
  },
  {
    title: "Avustralya – Sydney, Melbourne, Brisbane",
    text: "Uzun süreli programlar, çalışma izni ve plaj-kampüs yaşamı.",
  },
];

const planningCards = [
  {
    title: "Süre Seçimi",
    text: "2 hafta yaz okulundan 12 ay akademik yıla kadar hedefe uygun süre planı.",
  },
  {
    title: "Konaklama",
    text: "Aile yanı, öğrenci rezidansı veya paylaşımlı daire; ülkeye göre güvenli seçenekler.",
  },
  {
    title: "Vize",
    text: "Turistik vize, öğrenci vizesi veya çalışma izni; ülkeye göre evrak ve süreç yönetimi.",
  },
  {
    title: "Bütçe Planı",
    text: "Eğitim, konaklama, ulaşım ve harcama kalemlerini tek bütçe planında topluyoruz.",
  },
];

const steps = [
  {
    title: "Hedef Belirleme",
    text: "Seviye, hedef sınav skoru, üniversite hedefi ve süre tercihinizi netleştiriyoruz.",
  },
  {
    title: "Ülke & Şehir",
    text: "Bütçe, iklim, çalışma izni ve yaşam tarzına göre doğru destinasyonu seçiyoruz.",
  },
  {
    title: "Okul & Program",
    text: "Akredite okullar arasından program tipi ve süresine uygun seçenekleri kısa listeye alıyoruz.",
  },
  {
    title: "Kayıt & Vize",
    text: "Okul kaydı, konaklama rezervasyonu ve vize başvurusunu yönetiyoruz.",
  },
];

export default function DilOkullariPage() {
  return (
    <main>
      <Hero
        eyebrow="Dil Okulları"
        title="Yurt dışında dil eğitimi rotanızı birlikte planlayalım"
        text="Genel İngilizce, akademik hazırlık veya sınav odaklı program; ülke, şehir, okul ve süre seçimini Study Global rehberliğinde netleştiriyoruz. Konaklama, vize ve bütçe yönetimi dahil uçtan uca destek."
        points={[
          "Akredite okul ağı",
          "Konaklama & vize desteği",
          "2 hafta - 52 hafta program",
        ]}
        primaryCta={{ label: "Bana Uygun Programı Bul", href: "/iletisim" }}
        secondaryCta={{ label: "WhatsApp'tan Sor", href: "https://wa.me/" }}
      />

      <TrustStrip metrics={trustMetrics} />

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Program Türleri"
            title="Hedefinize uygun dil programı"
            description="Seviyenize, sınav hedefinize veya kariyer planınıza göre doğru program tipini birlikte seçelim."
          />
          <BenefitGrid items={programItems} />
        </div>
      </section>

      <section className="dark-band">
        <div className="container">
          <SectionHead
            eyebrow="Popüler Şehirler"
            title="Dil eğitimi için tercih edilen destinasyonlar"
          />
          <BenefitGrid items={cityCards} />
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Planlama"
            title="Dil eğitimi süreci nasıl planlanır?"
          />
          <BenefitGrid items={planningCards} />
        </div>
      </section>

      <StepList eyebrow="Süreç" title="Dil okulu yolculuğu" items={steps} />

      <CTASection
        title="Dil eğitimi planınızı birlikte hazırlayalım"
        text="Hedef ülke, süre ve bütçenize göre size en uygun dil okulunu seçelim. Ücretsiz ön görüşme için iletişime geçin."
      />
    </main>
  );
}
