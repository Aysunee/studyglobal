import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { SectionHead } from "@/components/ui/SectionHead";
import { StepList } from "@/components/sections/StepList";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Universite | Study Global",
  description:
    "Study Global ile yurt disinda universite basvurusu, ulke secimi, okul listesi ve kabul stratejisi danismanligi.",
};

const trustMetrics = [
  { value: "1.000+", label: "Ogrenci rotasi" },
  { value: "50+", label: "Partner kurum" },
  { value: "14+", label: "Yil deneyim" },
  { value: "UCAS", label: "Basvuru - Vize - Sinav" },
];

const applicationRoutes = [
  {
    title: "Lisans Basvurusu",
    text: "Okul listesi, bolum secimi, sinav gereklilikleri ve basvuru dosyasini tek planda toplariz.",
  },
  {
    title: "Foundation / Pathway",
    text: "Akademik gecis yilina ihtiyac duyan adaylar icin dogru program ve ulke alternatiflerini belirleriz.",
  },
  {
    title: "Transfer Plani",
    text: "Mevcut egitiminizi yurt disina tasima olasiligini kredi, ders uyumu ve kabul sartlariyla degerlendiririz.",
  },
  {
    title: "Burs Stratejisi",
    text: "Akademik basari, portfolyo, sinav skoru ve basvuru zamanlamasina gore burs firsatlarini planariz.",
  },
];

const countryCards = [
  { flag: "\ud83c\uddec\ud83c\udde7", name: "Ingiltere", text: "Kisa egitim sureleri, UCAS sureci ve koklu universite agiyla guclu bir rota.", visual: "visual-uk" },
  { flag: "\ud83c\udde8\ud83c\udde6", name: "Kanada", text: "Cok kulturlu kampusler, yasam kalitesi ve mezuniyet sonrasi kariyer secenekleri.", visual: "visual-canada" },
  { flag: "\ud83c\uddfa\ud83c\uddf8", name: "Amerika", text: "Genis bolum alternatifi, burs olanaklari ve esnek akademik yapi.", visual: "visual-america" },
  { flag: "\ud83c\uddf3\ud83c\uddf1", name: "Hollanda", text: "Ingilizce lisans programlari ve Avrupa icinde guclu akademik baglantilar.", visual: "visual-holland" },
  { flag: "\ud83c\udde9\ud83c\uddea", name: "Almanya", text: "Teknik ve arastirma odakli bolumlerde guclu universite secenekleri.", visual: "visual-germany" },
  { flag: "\ud83c\uddee\ud83c\uddf9", name: "Italya", text: "Tasarim, mimarlik, sanat ve isletme alanlarinda dikkat ceken programlar.", visual: "visual-italy" },
];

const applicationFileItems = [
  {
    title: "Akademik Profil",
    text: "Not ortalamasi, ders secimi, sinav skorlari ve hedef bolum uyumunu analiz ederiz.",
  },
  {
    title: "Okul Kisa Listesi",
    text: "Reach, match ve safe okul dengesini gercekci bir basvuru listesine ceviririz.",
  },
  {
    title: "Niyet & Referans",
    text: "Kisisel hikaye, motivasyon ve referans dosyasini hedef programa gore guclendiririz.",
  },
  {
    title: "Takvim Yonetimi",
    text: "Son basvuru tarihleri, evrak, sinav ve vize adimlarini tek takvimde yonetiriz.",
  },
];

const steps = [
  {
    title: "Profil Analizi",
    text: "Akademik gecmis, hedef bolum, butce ve ulke beklentilerini netlestiririz.",
  },
  {
    title: "Universite Listesi",
    text: "Basvuru sansi ve kariyer hedefinize gore kisa liste olusturuz.",
  },
  {
    title: "Dosya Hazirligi",
    text: "Basvuru formlari, niyet mektubu, referans ve sinav planini yonetiriz.",
  },
  {
    title: "Kabul & Vize",
    text: "Kabul sonrasi depozito, konaklama ve vize hazirligini planariz.",
  },
];

export default function UniversitePage() {
  return (
    <main>
      <Hero
        eyebrow="Yurt disinda universite"
        title="Universite basvurunuzu dogru okul listesiyle guclendirin"
        text="Hedef bolumunuz, akademik profiliniz, butceniz ve kariyer planiniza gore ulke ve universite seceneklerini birlikte netlestiriyoruz. Dogru okul listesi, guclu basvuru dosyasi ve kontrollu kabul sureci."
        points={["Okul Kisa Listesi", "Basvuru Dosyasi", "Kabul & Vize Plani"]}
        primaryCta={{ label: "Basvurumu Degerlendir", href: "/iletisim" }}
        secondaryCta={{ label: "WhatsApp'tan Sor", href: "https://wa.me/" }}
      />

      <TrustStrip metrics={trustMetrics} />

      <BenefitGrid
        eyebrow="Basvuru rotalari"
        title="Size uygun universite yolunu secelim"
        description="Akademik gecmisinize, hedef bolumunuze ve takviminize gore en dogru basvuru stratejisini birlikte olusturuyoruz."
        items={applicationRoutes}
      />

      {/* Country cards - dark band */}
      <section className="dark-band">
        <div className="container">
          <SectionHead
            eyebrow="Populer ulkeler"
            title="Universite hedefinizi global seceneklerle karsilastirin"
            description="Bolum gucu, maliyet, kampus deneyimi ve mezuniyet sonrasi firsatlari birlikte okuyoruz."
          />
          <div className="country-grid">
            {countryCards.map((c) => (
              <article key={c.name} className="country-card has-visual">
                <div className={`country-visual ${c.visual}`} />
                <span className="country-flag">{c.flag}</span>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
                <Link className="text-link" href="/yurt-disi-egitim">
                  Ulke Detaylari
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Application file grid */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Basvuru dosyasi"
            title="Guclu basvuru icin neleri birlikte hazirliyoruz?"
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
      </section>

      <StepList
        eyebrow="Surec"
        title="Universite basvuru yolculugu"
        items={steps}
      />

      <CTASection
        title="Universite hedefiniz icin ilk okul listenizi cikaralim"
        text="Study Global danismanlariyla ucretsiz on gorusme yapin, ulke ve bolum seceneklerinizi netlestirin."
      />
    </main>
  );
}
