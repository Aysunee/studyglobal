import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { SpotlightGrid } from "@/components/sections/SpotlightGrid";
import { StepList } from "@/components/sections/StepList";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHead } from "@/components/ui/SectionHead";

export const metadata: Metadata = {
  title: "Akademik Programlar | Study Global",
  description:
    "Study Global Akademik Programlar ile staj, proje, yaz okulu ve global akademik deneyim firsatlari.",
};

const programs = [
  {
    number: "01",
    title: "Staj + Proje Calismalari",
    text: "Uluslararasi kurumlarda staj ve proje firsatlariyla pratik deneyim kazanin, kariyerinizde one gecin.",
    features: [
      "Alaninizda gercek proje deneyimi",
      "CV'nizi guclendiren uluslararasi stajlar",
      "Akademik ve profesyonel mentorluk",
    ],
  },
  {
    number: "02",
    title: "Akademik Yaz Okullari",
    text: "Dunyanin onde gelen universitelerinde yaz doneminde akademik programlara katilin, global bakis acisi kazanin.",
    features: [
      "Lisans kredisi ve sertifika imkani",
      "Kulturel etkilesim ve network firsati",
      "Alaninda uzman akademisyenlerden egitim",
    ],
  },
  {
    number: "03",
    title: "GAC - GBC - WLE",
    text: "Global Academic Camp, Global Business Camp ve Work & Leadership Experience programlari ile liderlik ve is dunyasina hazirlanin.",
    features: [
      "Liderlik ve takim calismasi gelisimi",
      "Is dunyasi simulasyonlari ve vaka calismalari",
      "Uluslararasi sertifika ve referans destegi",
    ],
  },
];

const valueItems = [
  { title: "Akademik Zenginlesme", text: "Basvuru profilinizi guclendiren program secenekleri." },
  { title: "Uluslararasi Deneyim", text: "Kampus, kurum ve global network deneyimi." },
  { title: "Kariyer ve Portfolyo Guclendirme", text: "CV, portfolyo ve akademik hikayenizi destekleyen cikti." },
  { title: "Uzman Rehberlik", text: "Program secimi ve basvuru sureci icin uctan uca danismanlik." },
];

const audienceItems = [
  { title: "Lise Ogrencileri", text: "Universite basvurusu oncesi akademik profilini guclendirmek isteyenler." },
  { title: "Universite Ogrencileri", text: "Alan deneyimi ve uluslararasi referans kazanmak isteyenler." },
  { title: "Hedef Odakli Adaylar", text: "Belirli bir kariyer veya okul hedefi icin stratejik hazirlik yapanlar." },
];

const processSteps = [
  { title: "Ihtiyac Analizi", text: "Hedef ve akademik profilinizi degerlendiririz." },
  { title: "Program Secimi", text: "Yas, alan ve hedefe gore dogru programi belirleriz." },
  { title: "Basvuru Yonetimi", text: "Evrak, niyet ve takvim surecini takip ederiz." },
  { title: "Katilim ve Takip", text: "Program oncesi hazirlik ve sonrasinda cikti plani yapariz." },
];

export default function AkademikProgramlarPage() {
  return (
    <main>
      <Hero
        eyebrow="Akademik Programlar"
        title="Akademik Programlar ile akademik hedeflerinizi guclendirin"
        text="Kariyerinizi guclendirecek uluslararasi akademik firsatlari kesfedin. Alaniniza uygun programlari inceleyin, basvuru ve kabul sureclerinde uzman rehberligimizle akademik yolculugunuzu zenginlestirin."
        primaryCta={{ label: "Programimi Planla", href: "/iletisim" }}
        secondaryCta={{ label: "WhatsApp'tan Sor", href: "https://wa.me/" }}
      />

      {/* Programs section */}
      <section className="py-20 bg-ivory">
        <div className="mx-auto max-w-[var(--max-width-site)] px-5">
          <SectionHead eyebrow="Programlar" title="Kariyerinizi guclendiren akademik firsatlar" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div
                key={p.title}
                className="rounded-[var(--radius)] bg-white p-6 shadow-card hover:shadow-lg transition-shadow"
              >
                <span className="inline-flex items-center justify-center size-10 rounded-full bg-navy-deep text-white text-sm font-bold mb-3">
                  {p.number}
                </span>
                <h3 className="text-base font-semibold text-navy-deep mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-slate mb-4">{p.text}</p>
                <ul className="space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-slate">
                      <span className="size-1.5 rounded-full bg-study-red mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitGrid
        eyebrow="Deger"
        title="Neler sunuyoruz?"
        items={valueItems}
        dark
      />

      <SpotlightGrid
        eyebrow="Uygunluk"
        title="Kimler icin uygun?"
        items={audienceItems}
      />

      <StepList
        eyebrow="Surec"
        title="Nasil calisiyoruz?"
        items={processSteps}
      />

      <CTASection
        title="Akademik profilinizi global olcekte guclendirin"
        text="Study Global ile hedefinize uygun programlari netlestirin."
      />
    </main>
  );
}
