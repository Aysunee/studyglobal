import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { CTASection } from "@/components/sections/CTASection";
import { CountryCardGrid } from "@/components/sections/CountryCardGrid";
import { SectionHead } from "@/components/ui/SectionHead";
import { StepList } from "@/components/sections/StepList";
import { countries } from "@/data/countries";

export const metadata: Metadata = {
  title: "Yurt Disi Egitim | Study Global",
  description:
    "Ingiltere universitelarine basvuru, UCAS destegi, burs firsatlari ve ucretsiz danismanlik. Study Global ile yurt disi egitim hayalinizi gercege donusturun.",
};

const trustMetrics = [
  { value: "142", label: "Universite" },
  { value: "50+", label: "Partner Kurum" },
  { value: "14+", label: "Yil Deneyim" },
  { value: "UCAS", label: "Yetkili Merkez" },
];

const serviceCards = [
  {
    slug: "ingiltere-basvuru",
    title: "Ingiltere Universitelerine Basvuru",
    text: "Ingiltere Universitelerinde Lisans ve Yuksek Lisans bolumlerine nasil basvuruldugu, son basvuru tarihleri, dosya hazirligi gibi bircok bilgi.",
  },
  {
    slug: "iskocya-egitim",
    title: "Iskocya'da Egitim",
    text: "Iskocya universiteleri ve dil okullarina nasil basvuru yapilir? Guncel okul siralamalari, basvuru surecinde gerekli belgeler ve basvuru surecine dair bilgiler.",
  },
  {
    slug: "irlanda-egitim",
    title: "Irlanda'da Egitim",
    text: "Irlanda universiteleri ve dil okullarina nasil basvuru yapilir? Guncel okul siralamalari, basvuru surecinde gerekli belgeler ve basvuru surecine dair bilgiler.",
  },
  {
    slug: "basvuru-belgeleri",
    title: "Basvuru Belgeleri Nelerdir?",
    text: "Ingiltere universitelerine basvururken kullanmaniz gereken belgeler onemlidir. Bu belgelerin basinda transkript, diploma ve niyet mektubunuz gelir.",
  },
  {
    slug: "ucas-basvuru",
    title: "UCAS Basvuru Destegi",
    text: "Ingiltere'de Lisans egitimi basvurulari UCAS sistemi uzerinden gerceklesir. Deneyimli kadromuz ile UCAS basvurulari ve tarihleri hakkinda destek alin.",
  },
  {
    slug: "ucas-clearing",
    title: "UCAS Clearing Basvurulari",
    text: "UCAS uzerinden basvurulariniza bir cevap alamamis ya da istediginiz okuldan kabul alamamis olabilirsiniz. UCAS Clearing size bir sans daha veriyor.",
  },
];

const rankingCards = [
  {
    title: "Universite Siralamasi",
    text: "Ingiltere, Iskocya, Irlanda ve Galler'i de kapsayan en guncel universite siralamasi.",
    linkText: "Siralamayi Gor",
  },
  {
    title: "Bolumlere Gore Siralamalar",
    text: "Guncel universite siralamarina gore hazirlanmis 50 farkli bolumde okul siralamasi.",
    linkText: "Bolum Siralamalarini Gor",
  },
  {
    title: "Burs Basvurulari",
    text: "Ingiltere universiteleri icin en guncel burs basvurulari listesi.",
    linkText: "Burs Bilgilerini Gor",
  },
];

const advisoryBenefits = [
  { title: "Okul Basari Analizi", text: "Hangi okul hangi bolumde daha basarili? Veriye dayali analiz yapiyoruz." },
  { title: "Mezuniyet Sonrasi Destek", text: "Universitenin mezuniyet sonrasi size saglayacagi destegi degerlendiriyoruz." },
  { title: "Bolum Uyumu", text: "Bolum dersleri sizin icin ideal mi? Mufredati birlikte inceliyoruz." },
  { title: "Sehir & Maliyet", text: "Okul bulundugu sehir ve maliyetleri ile sizin icin ideal mi degerlendiriyoruz." },
];

const journeySteps = [
  { title: "Kesfif & Danismanlik", text: "Hedefinizi ve universite seceneklerini netlestiririz." },
  { title: "Basvuru & Evrak", text: "Okul listesi, UCAS basvurusu ve evrak hazirligini yonetiriz." },
  { title: "Kabul & Vize", text: "Kabul sonrasi vize evraklari ve zamanlamayi planariz." },
  { title: "Hazirlik & Ugurlama", text: "Konaklama, seyahat ve baslangic hazirliklarinda destek oluruz." },
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
        eyebrow="Ingiltere'de Egitim ve Basvuru"
        title="Ingiltere'de Egitim"
        text="Her yil binlerce ogrencinin yurtdisi egitimde ilk tercihi Birlesik Krallik olmaktadir. Ingiltere'de egitim gormeye karar verdiyseniz, bir sonraki adimda basvuru sureci ve gerekli olan belgelerle ilgili bilgi sahibi olmalisiniz."
        points={[
          "UCAS Yetkili Danismanlik",
          "142 Universite",
          "Ucretsiz Danismanlik",
        ]}
        primaryCta={{ label: "Hizmetleri Incele", href: "#hizmetler" }}
        secondaryCta={{ label: "WhatsApp'tan Sor", href: "https://wa.me/" }}
      />

      <TrustStrip metrics={trustMetrics} />

      {/* Service cards */}
      <section id="hizmetler">
        <div className="container">
          <SectionHead
            eyebrow="Hizmetlerimiz"
            title="Ingiltere'de Egitim Hizmetleri"
            description="Lisans ve yuksek lisans basvurularindan burs sureclerine kadar tum asamalarda yaninizdayiz."
          />
          <div className="grid-3">
            {serviceCards.map((s) => (
              <article key={s.slug} className="spotlight has-photo">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a className="text-link" href="#">
                  Detaylari Incele
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
            eyebrow="Siralamalar & Burslar"
            title="Universite Siralamalari ve Burs Firsatlari"
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

      {/* Advisory dark band */}
      <section className="dark-band country-decision-section">
        <div className="container">
          <SectionHead
            eyebrow="Danismanlik"
            title="Basvuru Surecinde Nasil Yardimci Oluyoruz?"
          />
          <div className="decision-visual">
            <div>
              <strong>Ingiltere&apos;de 142 universite bulunmaktadir</strong>
              <span>
                Bu universitelerin tamami tercihinize uygun olmayabilir. Dogru
                secimi birlikte yapalim.
              </span>
            </div>
            <Link className="btn btn-primary" href="/iletisim">
              Ucretsiz Danismanlik Al
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

      {/* Country card grid with filters */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Ulkeler"
            title="Egitim icin populer ulkeler"
            description="Hedefinize uygun ulkeyi secin, detayli bilgi alin."
          />
          <CountryCardGrid countries={countryCards} />
        </div>
      </section>

      <StepList
        eyebrow="Yolculuk"
        title="Basvuru Yolculugu"
        items={journeySteps}
      />

      <CTASection
        title="Ingiltere'de egitim hayalinizi gercege donusturun"
        text="Study Global ile universite secimi, basvuru ve vize surecinizi birlikte planlayin. Danismanlik hizmetimiz Turk ogrenciler icin ucretsizdir."
      />
    </main>
  );
}
