import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { SectionHead } from "@/components/ui/SectionHead";
import { StepList } from "@/components/sections/StepList";
import { CTASection } from "@/components/sections/CTASection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Üniversite | Study Global",
  description:
    "Study Global ile yurt dışında üniversite başvurusu, ülke seçimi, okul listesi ve kabul stratejisi danışmanlığı.",
};

const trustMetrics = [
  { value: "1.000+", label: "Öğrenci rotası" },
  { value: "50+", label: "Partner kurum" },
  { value: "14+", label: "Yıl deneyim" },
  { value: "UCAS", label: "Başvuru - Vize - Sınav" },
];

const applicationRoutes = [
  {
    title: "Lisans Başvurusu",
    text: "Okul listesi, bölüm seçimi, sınav gereklilikleri ve başvuru dosyasını tek planda toplarız.",
  },
  {
    title: "Foundation / Pathway",
    text: "Akademik geçiş yılına ihtiyaç duyan adaylar için doğru program ve ülke alternatiflerini belirleriz.",
  },
  {
    title: "Transfer Planı",
    text: "Mevcut eğitiminizi yurt dışına taşıma olasılığını kredi, ders uyumu ve kabul şartlarıyla değerlendiririz.",
  },
  {
    title: "Burs Stratejisi",
    text: "Akademik başarı, portfolyo, sınav skoru ve başvuru zamanlamasına göre burs fırsatlarını planlarız.",
  },
];

const countryCards = [
  { flag: "\ud83c\uddec\ud83c\udde7", name: "İngiltere", text: "Kısa eğitim süreleri, UCAS süreci ve köklü üniversite ağıyla güçlü bir rota.", visual: "visual-uk" },
  { flag: "\ud83c\udde8\ud83c\udde6", name: "Kanada", text: "Çok kültürlü kampüsler, yaşam kalitesi ve mezuniyet sonrası kariyer seçenekleri.", visual: "visual-canada" },
  { flag: "\ud83c\uddfa\ud83c\uddf8", name: "Amerika", text: "Geniş bölüm alternatifi, burs olanakları ve esnek akademik yapı.", visual: "visual-america" },
  { flag: "\ud83c\uddf3\ud83c\uddf1", name: "Hollanda", text: "İngilizce lisans programları ve Avrupa içinde güçlü akademik bağlantılar.", visual: "visual-holland" },
  { flag: "\ud83c\udde9\ud83c\uddea", name: "Almanya", text: "Teknik ve araştırma odaklı bölümlerde güçlü üniversite seçenekleri.", visual: "visual-germany" },
  { flag: "\ud83c\uddee\ud83c\uddf9", name: "İtalya", text: "Tasarım, mimarlık, sanat ve işletme alanlarında dikkat çeken programlar.", visual: "visual-italy" },
];

const applicationFileItems = [
  {
    title: "Akademik Profil",
    text: "Not ortalaması, ders seçimi, sınav skorları ve hedef bölüm uyumunu analiz ederiz.",
  },
  {
    title: "Okul Kısa Listesi",
    text: "Reach, match ve safe okul dengesini gerçekçi bir başvuru listesine çeviririz.",
  },
  {
    title: "Niyet & Referans",
    text: "Kişisel hikaye, motivasyon ve referans dosyasını hedef programa göre güçlendiririz.",
  },
  {
    title: "Takvim Yönetimi",
    text: "Son başvuru tarihleri, evrak, sınav ve vize adımlarını tek takvimde yönetiriz.",
  },
];

const steps = [
  {
    title: "Profil Analizi",
    text: "Akademik geçmiş, hedef bölüm, bütçe ve ülke beklentilerini netleştiririz.",
  },
  {
    title: "Üniversite Listesi",
    text: "Başvuru şansı ve kariyer hedefinize göre kısa liste oluşturuz.",
  },
  {
    title: "Dosya Hazırlığı",
    text: "Başvuru formları, niyet mektubu, referans ve sınav planını yönetiriz.",
  },
  {
    title: "Kabul & Vize",
    text: "Kabul sonrası depozito, konaklama ve vize hazırlığını planlarız.",
  },
];

export default function UniversitePage() {
  return (
    <main>
      <Hero
        eyebrow="Yurt dışında üniversite"
        title="Üniversite başvurunuzu doğru okul listesiyle güçlendirin"
        text="Hedef bölümünüz, akademik profiliniz, bütçeniz ve kariyer planınıza göre ülke ve üniversite seçeneklerini birlikte netleştiriyoruz. Doğru okul listesi, güçlü başvuru dosyası ve kontrollü kabul süreci."
        points={["Okul Kısa Listesi", "Başvuru Dosyası", "Kabul & Vize Planı"]}
        primaryCta={{ label: "Başvurumu Değerlendir", href: "/iletisim" }}
        secondaryCta={{ label: "WhatsApp'tan Sor", href: "https://wa.me/" }}
      />

      <TrustStrip metrics={trustMetrics} />

      <BenefitGrid
        eyebrow="Başvuru rotaları"
        title="Size uygun üniversite yolunu seçelim"
        description="Akademik geçmişinize, hedef bölümünüze ve takviminize göre en doğru başvuru stratejisini birlikte oluşturuyoruz."
        items={applicationRoutes}
      />

      {/* Country cards - dark band */}
      <RevealOnScroll as="section" className="dark-band">
        <div className="container">
          <SectionHead
            eyebrow="Popüler ülkeler"
            title="Üniversite hedefinizi global seçeneklerle karşılaştırın"
            description="Bölüm gücü, maliyet, kampüs deneyimi ve mezuniyet sonrası fırsatları birlikte okuyoruz."
          />
          <div className="country-grid">
            {countryCards.map((c) => (
              <article key={c.name} className="country-card has-visual">
                <div className={`country-visual ${c.visual}`} />
                <span className="country-flag">{c.flag}</span>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
                <Link className="text-link" href="/yurt-disi-egitim">
                  Ülke Detayları
                </Link>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Application file grid */}
      <RevealOnScroll as="section">
        <div className="container">
          <SectionHead
            eyebrow="Başvuru dosyası"
            title="Güçlü başvuru için neleri birlikte hazırlıyoruz?"
          />
          <div className="grid-4">
            {applicationFileItems.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <StepList
        eyebrow="Süreç"
        title="Üniversite başvuru yolculuğu"
        items={steps}
      />

      <CTASection
        title="Üniversite hedefiniz için ilk okul listenizi çıkaralım"
        text="Study Global danışmanlarıyla ücretsiz ön görüşme yapın, ülke ve bölüm seçeneklerinizi netleştirin."
      />
    </main>
  );
}
