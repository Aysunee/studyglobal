import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { SpotlightGrid } from "@/components/sections/SpotlightGrid";
import { StepList } from "@/components/sections/StepList";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHead } from "@/components/ui/SectionHead";

export const metadata: Metadata = {
  title: "Sinavlar | Study Global",
  description:
    "IELTS, OET, SAT, AP, TMUA ve Cambridge Exams icin Study Global sinav danismanligi.",
};

const examCards = [
  { icon: "T", title: "TARA", text: "Akademik yonelim ve basvuru hedeflerini netlestiren degerlendirme sureci." },
  { icon: "M", title: "TMUA", text: "Matematik ve istatistik becerilerinizi olcen admission testi." },
  { icon: "C", title: "CENTs", text: "Okul ve program hedeflerine gore desteklenen akademik sinav hazirligi." },
  { icon: "AP", title: "AP", text: "Universite kredisi ve guclu akademik profil icin Advanced Placement." },
  { icon: "S", title: "SAT", text: "Kolej basvurularinda kabul edilen akademik yeterlilik sinavi." },
  { icon: "I", title: "IELTS", text: "Uluslararasi gecerllige sahip Ingilizce yeterlilik sinavi." },
  { icon: "O", title: "OET", text: "Saglik profesyonelleri icin Ingilizce yeterlilik sinavi." },
  { icon: "OX", title: "Oxford Test of English", text: "Esnek yapisiyla Ingilizce yeterliligini olcen modern sinav alternatifi." },
  { icon: "CE", title: "Cambridge Exams", text: "Akademik ve profesyonel Ingilizce yeterliligi icin guclu sinav ailesi." },
];

const strategicExams = [
  { title: "IELTS", text: "Dil yeterliligi, basvuru ve vize surecleri icin kritik skor plani." },
  { title: "SAT", text: "Amerika hedefli lisans basvurularinda akademik profil destegi." },
  { title: "AP", text: "Universite kredisi ve secici okullar icin ileri akademik gosterge." },
  { title: "TMUA", text: "Matematik agirlikli bolumlerde guclu kabul stratejisi." },
];

const prepSteps = [
  { title: "Seviye Analizi", text: "Mevcut skor potansiyelinizi ve zaman cizelgenizi degerlendiririz." },
  { title: "Plan Olusturma", text: "Haftalik hedefler ve deneme takvimiyle ilerleriz." },
  { title: "Materyal & Deneme", text: "Dogru kaynak ve olcum sistemiyle performansi takip ederiz." },
  { title: "Basvuru & Kayit Destegi", text: "Sinav kaydi, tarih secimi ve skor kullaniminda destek oluruz." },
];

const whyUsItems = [
  { title: "Uzman Rehberlik", text: "Sinav ve okul hedeflerini ayni stratejide bulusturuz." },
  { title: "Bireysel Yol Haritasi", text: "Seviyenize gore gercekci bir calisma plani kurariz." },
  { title: "Sinav Stratejisi", text: "Skor hedefi, sure yonetimi ve tekrar planini netlestiririz." },
  { title: "Hizli Destek", text: "Takvim ve basvuru sorularinizda hizli yonlendirme sağlariz." },
];

export default function SinavlarPage() {
  return (
    <main>
      <Hero
        eyebrow="Sinav danismanligi"
        title="Sinav hazirligini dogru stratejiyle yonetin"
        text="Yurt disinda egitim, lisans ve yuksek lisans basvurularinda ihtiyac duydugunuz uluslararasi sinavlar icin dogru planlama, etkili calisma stratejileri ve basvuru destegi sagliyoruz."
        primaryCta={{ label: "Sinav Stratejimi Olustur", href: "/iletisim" }}
        secondaryCta={{ label: "WhatsApp'tan Sor", href: "https://wa.me/" }}
      />

      {/* Exam categories grid */}
      <section className="py-20 bg-ivory">
        <div className="mx-auto max-w-[var(--max-width-site)] px-5">
          <SectionHead eyebrow="Kategoriler" title="Sinav kategorileri" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {examCards.map((exam) => (
              <div
                key={exam.title}
                className="rounded-[var(--radius)] bg-white p-6 shadow-card hover:shadow-lg transition-shadow"
              >
                <span className="inline-flex items-center justify-center size-10 rounded-full bg-navy-deep text-white text-sm font-bold mb-3">
                  {exam.icon}
                </span>
                <h3 className="text-base font-semibold text-navy-deep mb-2">{exam.title}</h3>
                <p className="text-sm leading-relaxed text-muted-slate">{exam.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitGrid
        eyebrow="One cikanlar"
        title="Stratejik sinav rotalari"
        items={strategicExams}
        dark
      />

      <StepList
        eyebrow="Hazirlik"
        title="Hazirlik sureci"
        items={prepSteps}
      />

      <BenefitGrid
        eyebrow="Neden biz?"
        title="Sinav hedefiniz icin net rehberlik"
        items={whyUsItems}
      />

      <CTASection
        title="Sinav stratejinizi bugun netlestirin"
        text="Hedef skorunuza uygun plani birlikte olusturalim."
      />
    </main>
  );
}
