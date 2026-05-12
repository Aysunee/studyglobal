import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { StepList } from "@/components/sections/StepList";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHead } from "@/components/ui/SectionHead";

export const metadata: Metadata = {
  title: "Akademik Programlar | Study Global",
  description:
    "Study Global Akademik Programlar ile staj, proje, yaz okulu ve global akademik deneyim fırsatları.",
};

const programs = [
  {
    number: "01",
    title: "Staj + Proje Çalışmaları",
    text: "Uluslararası kurumlarda staj ve proje fırsatlarıyla pratik deneyim kazanın, kariyerinizde öne geçin.",
    features: [
      "Alanınızda gerçek proje deneyimi",
      "CV'nizi güçlendiren uluslararası stajlar",
      "Akademik ve profesyonel mentorluk",
    ],
    visual: "program-internship",
  },
  {
    number: "02",
    title: "Akademik Yaz Okulları",
    text: "Dünyanın önde gelen üniversitelerinde yaz döneminde akademik programlara katılın, global bakış açısı kazanın.",
    features: [
      "Lisans kredisi ve sertifika imkanı",
      "Kültürel etkileşim ve network fırsatı",
      "Alanında uzman akademisyenlerden eğitim",
    ],
    visual: "program-summer",
  },
  {
    number: "03",
    title: "GAC - GBC - WLE",
    text: "Global Academic Camp, Global Business Camp ve Work & Leadership Experience programları ile liderlik ve iş dünyasına hazırlanın.",
    features: [
      "Liderlik ve takım çalışması gelişimi",
      "İş dünyası simulasyonları ve vaka çalışmaları",
      "Uluslararası sertifika ve referans desteği",
    ],
    visual: "program-leadership",
  },
];

const valueItems = [
  { title: "Akademik Zenginleşme", text: "Başvuru profilinizi güçlendiren program seçenekleri." },
  { title: "Uluslararası Deneyim", text: "Kampüs, kurum ve global network deneyimi." },
  { title: "Kariyer ve Portfolyo Güçlendirme", text: "CV, portfolyo ve akademik hikayenizi destekleyen çıktı." },
  { title: "Uzman Rehberlik", text: "Program seçimi ve başvuru süreci için uçtan uca danışmanlık." },
];

const audienceItems = [
  { title: "Lise Öğrencileri", text: "Üniversite başvurusu öncesi akademik profilini güçlendirmek isteyenler." },
  { title: "Üniversite Öğrencileri", text: "Alan deneyimi ve uluslararası referans kazanmak isteyenler." },
  { title: "Hedef Odaklı Adaylar", text: "Belirli bir kariyer veya okul hedefi için stratejik hazırlık yapanlar." },
];

const processSteps = [
  { title: "İhtiyaç Analizi", text: "Hedef ve akademik profilinizi değerlendiririz." },
  { title: "Program Seçimi", text: "Yaş, alan ve hedefe göre doğru programı belirleriz." },
  { title: "Başvuru Yönetimi", text: "Evrak, niyet ve takvim sürecini takip ederiz." },
  { title: "Katılım ve Takip", text: "Program öncesi hazırlık ve sonrasında çıktı planı yaparız." },
];

export default function AkademikProgramlarPage() {
  return (
    <main>
      <Hero
        eyebrow="Akademik Programlar"
        title="Akademik Programlar ile akademik hedeflerinizi güçlendirin"
        text="Kariyerinizi güçlendirecek uluslararası akademik fırsatları keşfedin. Alanınıza uygun programları inceleyin, başvuru ve kabul süreçlerinde uzman rehberliğimizle akademik yolculuğunuzu zenginleştirin."
        primaryCta={{ label: "Programımı Planla", href: "/iletisim" }}
        secondaryCta={{ label: "WhatsApp'tan Sor", href: "https://wa.me/" }}
      />

      {/* Programs section */}
      <section>
        <div className="container">
          <SectionHead eyebrow="Programlar" title="Kariyerinizi güçlendiren akademik fırsatlar" />
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
                  Detayları İncele
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BenefitGrid
        eyebrow="Değer"
        title="Neler sunuyoruz?"
        items={valueItems}
        dark
      />

      {/* Audience section */}
      <section>
        <div className="container">
          <SectionHead eyebrow="Uygunluk" title="Kimler için uygun?" />
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
        eyebrow="Süreç"
        title="Nasıl çalışıyoruz?"
        items={processSteps}
      />

      <CTASection
        title="Akademik profilinizi global ölçekte güçlendirin"
        text="Study Global ile hedefinize uygun programları netleştirin."
      />
    </main>
  );
}
