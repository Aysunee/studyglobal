import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { SectionHead } from "@/components/ui/SectionHead";
import { StepList } from "@/components/sections/StepList";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Yüksek Lisans & MBA | Study Global",
  description:
    "Yurt dışında yüksek lisans ve MBA başvurularında ülke, okul, GMAT/GRE/IELTS planı, niyet mektubu ve burs stratejisi danışmanlığı.",
};

const trustMetrics = [
  { value: "300+", label: "Master mezunu" },
  { value: "12+", label: "Hedef ülke" },
  { value: "QS / THE", label: "Sıralama analizi" },
  { value: "GMAT · GRE · IELTS", label: "Sınav rotası" },
];

const trackCards = [
  {
    title: "MBA Başvurusu",
    text: "Iş deneyimi, kariyer hedefi ve hedef okul kriterlerini tek başvuru stratejisinde topluyoruz. GMAT/GRE planından essay'lere kadar uçtan uca destek.",
  },
  {
    title: "Master (MSc / MA)",
    text: "Bölüm uyumu, akademik referans, niyet mektubu ve sınav skorunu hedef program kriterlerine göre planlıyoruz.",
  },
  {
    title: "Araştırma Odaklı / PhD Hazırlık",
    text: "Araştırma proposal'ı, akademik portfolyo ve hoca seçimini birlikte yapılandırıyoruz. PhD geçişi için doğru master programı seçimi.",
  },
  {
    title: "Executive / Online MBA",
    text: "Kariyerinizi sürdürürken alabileceğiniz online ve hibrit programları akreditasyon, network ve maliyet ekseninde karşılaştırıyoruz.",
  },
];

const destinationItems = [
  {
    title: "İngiltere",
    text: "1 yıllık master programları, güçlü işveren ağı ve Graduate Route 2 yıl çalışma vizesi.",
  },
  {
    title: "Amerika",
    text: "STEM uzantılı programlarda 3 yıla kadar OPT, geniş burs ağı ve kariyer fırsatları.",
  },
  {
    title: "Hollanda",
    text: "İngilizce master programları, görece düşük öğrenim maliyeti ve güçlü Avrupa kariyer pazarı.",
  },
  {
    title: "Almanya",
    text: "Teknik ve mühendislik master'larında ücretsiz devlet üniversiteleri ve güçlü endüstri ağı.",
  },
  {
    title: "Kanada",
    text: "Mezuniyet sonrası 3 yıllık çalışma vizesi ve göçmenlik kolaylığı sunan rota.",
  },
  {
    title: "İtalya & İspanya",
    text: "İşletme, tasarım ve sanat alanlarında güçlü programlar, makul yaşam maliyeti.",
  },
];

const steps = [
  {
    title: "Profil & Hedef",
    text: "Lisans transcript, iş deneyimi, kariyer hedefi ve bütçenizi birlikte değerlendiriyoruz.",
  },
  {
    title: "Sınav & Skor",
    text: "GMAT, GRE, IELTS, TOEFL veya bölüme özel testler için doğru zamanlamayı planlıyoruz.",
  },
  {
    title: "Okul Listesi",
    text: "Reach, match, safe dengesinde 6-10 program kısa listesi çıkarıyoruz.",
  },
  {
    title: "Başvuru Dosyası",
    text: "CV, niyet mektubu, essay, referanslar ve burs başvurularını profesyonel hazırlıyoruz.",
  },
];

export default function YuksekLisansPage() {
  return (
    <main>
      <Hero
        eyebrow="Yüksek Lisans & MBA"
        title="Kariyerinizi global bir master programıyla taçlandırın"
        text="MBA, master ve araştırma programları için ülke, okul, sınav ve başvuru stratejisini Study Global rehberliğinde birlikte kuruyoruz. Akademik geçmişinize ve kariyer hedefinize uygun en güçlü rotayı netleştirelim."
        points={[
          "GMAT / GRE / IELTS planlaması",
          "Niyet mektubu & essay desteği",
          "Burs ve fonlama stratejisi",
        ]}
        primaryCta={{ label: "Profilimi Değerlendir", href: "/iletisim" }}
        secondaryCta={{ label: "WhatsApp'tan Sor", href: "https://wa.me/" }}
      />

      <TrustStrip metrics={trustMetrics} />

      <section>
        <div className="container">
          <SectionHead
            eyebrow="Program Türleri"
            title="Hangi yüksek lisans rotası size uygun?"
            description="Hedef sektör, kariyer aşaması ve akademik profilinize göre doğru programı birlikte seçiyoruz."
          />
          <BenefitGrid items={trackCards} />
        </div>
      </section>

      <section className="dark-band">
        <div className="container">
          <SectionHead
            eyebrow="Hedef Ülkeler"
            title="Yüksek lisans için popüler destinasyonlar"
          />
          <BenefitGrid items={destinationItems} />
        </div>
      </section>

      <StepList eyebrow="Süreç" title="Master / MBA başvuru yolculuğu" items={steps} />

      <CTASection
        title="Yüksek lisans başvurunuzu birlikte planlayalım"
        text="Study Global danışmanlarıyla ücretsiz ön görüşme yapın, doğru programı ve doğru zamanlamayı netleştirelim."
      />
    </main>
  );
}
