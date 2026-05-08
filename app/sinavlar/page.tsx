import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { StepList } from "@/components/sections/StepList";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHead } from "@/components/ui/SectionHead";

export const metadata: Metadata = {
  title: "Sinavlar | Study Global",
  description:
    "IELTS, OET, SAT, AP, TMUA ve Cambridge Exams icin Study Global sinav danismanligi.",
};

const examCards = [
  { icon: "T", title: "TARA", text: "Akademik yonelim ve basvuru hedeflerini netlestiren degerlendirme sureci.", visual: "exam-tara" },
  { icon: "M", title: "TMUA", text: "Matematik ve istatistik becerilerinizi olcen admission testi.", visual: "exam-tmua" },
  { icon: "C", title: "CENTs", text: "Okul ve program hedeflerine gore desteklenen akademik sinav hazirligi.", visual: "exam-cents" },
  { icon: "AP", title: "AP", text: "Universite kredisi ve guclu akademik profil icin Advanced Placement.", visual: "exam-ap" },
  { icon: "S", title: "SAT", text: "Kolej basvurularinda kabul edilen akademik yeterlilik sinavi.", visual: "exam-sat" },
  { icon: "I", title: "IELTS", text: "Uluslararasi gecerllige sahip Ingilizce yeterlilik sinavi.", visual: "exam-ielts" },
  { icon: "O", title: "OET", text: "Saglik profesyonelleri icin Ingilizce yeterlilik sinavi.", visual: "exam-oet" },
  { icon: "OX", title: "Oxford Test of English", text: "Esnek yapisiyla Ingilizce yeterliligini olcen modern sinav alternatifi.", visual: "exam-oxford" },
  { icon: "CE", title: "Cambridge Exams", text: "Akademik ve profesyonel Ingilizce yeterliligi icin guclu sinav ailesi.", visual: "exam-cambridge" },
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
  { title: "Hizli Destek", text: "Takvim ve basvuru sorularinizda hizli yonlendirme saglariz." },
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
      <section>
        <div className="container">
          <SectionHead eyebrow="Kategoriler" title="Sinav kategorileri" />
          <div className="exam-grid">
            {examCards.map((exam) => (
              <article key={exam.title} className="exam-card has-visual">
                <div className={`exam-visual ${exam.visual}`} />
                <span className="icon">{exam.icon}</span>
                <h3>{exam.title}</h3>
                <p>{exam.text}</p>
                <a className="text-link" href="#">
                  Detayli Incele
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic exams - dark band */}
      <section className="dark-band">
        <div className="container">
          <SectionHead eyebrow="One cikanlar" title="Stratejik sinav rotalari" />
          <div className="grid-4">
            {strategicExams.map((exam) => (
              <article key={exam.title} className="spotlight exam-photo">
                <h3>{exam.title}</h3>
                <p>{exam.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
