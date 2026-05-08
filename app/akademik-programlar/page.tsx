import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
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
    visual: "program-internship",
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
    visual: "program-summer",
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
    visual: "program-leadership",
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
      <section>
        <div className="container">
          <SectionHead eyebrow="Programlar" title="Kariyerinizi guclendiren akademik firsatlar" />
          <div className="grid-3">
            {programs.map((p, i) => (
              <article
                key={p.title}
                className={`card program-card${i === 0 ? " featured" : ""}`}
              >
                <div className={`program-visual ${p.visual}`} />
                <span className="icon">{p.number}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a className="text-link" href="#">
                  Detaylari Incele
                </a>
              </article>
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

      {/* Audience section */}
      <section>
        <div className="container">
          <SectionHead eyebrow="Uygunluk" title="Kimler icin uygun?" />
          <div className="grid-3">
            {audienceItems.map((item) => (
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
