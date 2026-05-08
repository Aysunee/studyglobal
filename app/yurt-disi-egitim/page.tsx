import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTASection } from "@/components/sections/CTASection";
import { CountryCardGrid } from "@/components/sections/CountryCardGrid";
import { SectionHead } from "@/components/ui/SectionHead";
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
      <section id="hizmetler" className="py-20 bg-ivory">
        <div className="mx-auto max-w-[var(--max-width-site)] px-5">
          <SectionHead
            eyebrow="Hizmetlerimiz"
            title="Ingiltere'de Egitim Hizmetleri"
            description="Lisans ve yuksek lisans basvurularindan burs sureclerine kadar tum asamalarda yaninizdayiz."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="group rounded-[var(--radius)] bg-white p-6 shadow-card hover:shadow-lg transition-shadow block"
              >
                <h3 className="text-base font-semibold text-navy-deep mb-2 group-hover:text-study-red transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-slate">{s.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Country card grid with filters */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[var(--max-width-site)] px-5">
          <SectionHead
            eyebrow="Ulkeler"
            title="Egitim icin populer ulkeler"
            description="Hedefinize uygun ulkeyi secin, detayli bilgi alin."
          />
          <CountryCardGrid countries={countryCards} />
        </div>
      </section>

      <CTASection
        title="Ingiltere'de egitim hayalinizi gercege donusturun"
        text="Study Global ile universite secimi, basvuru ve vize surecinizi birlikte planlayin. Danismanlik hizmetimiz Turk ogrenciler icin ucretsizdir."
      />
    </main>
  );
}
