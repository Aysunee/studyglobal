import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { StepList } from "@/components/sections/StepList";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHead } from "@/components/ui/SectionHead";

export const metadata: Metadata = {
  title: "Sınavlar | Study Global",
  description:
    "IELTS, OET, SAT, AP, TMUA ve Cambridge Exams için Study Global sınav danışmanlığı.",
};

const examCards = [
  { icon: "T", title: "TARA", text: "Akademik yönelim ve başvuru hedeflerini netleştiren değerlendirme süreci.", visual: "exam-tara" },
  { icon: "M", title: "TMUA", text: "Matematik ve istatistik becerilerinizi ölçen admission testi.", visual: "exam-tmua" },
  { icon: "C", title: "CENTs", text: "Okul ve program hedeflerine göre desteklenen akademik sınav hazırlığı.", visual: "exam-cents" },
  { icon: "AP", title: "AP", text: "Üniversite kredisi ve güçlü akademik profil için Advanced Placement.", visual: "exam-ap" },
  { icon: "S", title: "SAT", text: "Kolej başvurularında kabul edilen akademik yeterlilik sınavı.", visual: "exam-sat" },
  { icon: "I", title: "IELTS", text: "Uluslararası geçerliliğe sahip İngilizce yeterlilik sınavı.", visual: "exam-ielts" },
  { icon: "O", title: "OET", text: "Sağlık profesyonelleri için İngilizce yeterlilik sınavı.", visual: "exam-oet" },
  { icon: "OX", title: "Oxford Test of English", text: "Esnek yapısıyla İngilizce yeterliliğini ölçen modern sınav alternatifi.", visual: "exam-oxford" },
  { icon: "CE", title: "Cambridge Exams", text: "Akademik ve profesyonel İngilizce yeterliliği için güçlü sınav ailesi.", visual: "exam-cambridge" },
];

const strategicExams = [
  { title: "IELTS", text: "Dil yeterliliği, başvuru ve vize süreçleri için kritik skor planı." },
  { title: "SAT", text: "Amerika hedefli lisans başvurularında akademik profil desteği." },
  { title: "AP", text: "Üniversite kredisi ve seçici okullar için ileri akademik gösterge." },
  { title: "TMUA", text: "Matematik ağırlıklı bölümlerde güçlü kabul stratejisi." },
];

const prepSteps = [
  { title: "Seviye Analizi", text: "Mevcut skor potansiyelinizi ve zaman çizelgenizi değerlendiririz." },
  { title: "Plan Oluşturma", text: "Haftalık hedefler ve deneme takvimiyle ilerleriz." },
  { title: "Materyal & Deneme", text: "Doğru kaynak ve ölçüm sistemiyle performansı takip ederiz." },
  { title: "Başvuru & Kayıt Desteği", text: "Sınav kaydı, tarih seçimi ve skor kullanımında destek oluruz." },
];

const whyUsItems = [
  { title: "Uzman Rehberlik", text: "Sınav ve okul hedeflerini aynı stratejide buluştururuz." },
  { title: "Bireysel Yol Haritası", text: "Seviyenize göre gerçekçi bir çalışma planı kurarız." },
  { title: "Sınav Stratejisi", text: "Skor hedefi, süre yönetimi ve tekrar planını netleştiririz." },
  { title: "Hızlı Destek", text: "Takvim ve başvuru sorularınızda hızlı yönlendirme sağlarız." },
];

export default function SinavlarPage() {
  return (
    <main>
      <Hero
        eyebrow="Sınav danışmanlığı"
        title="Sınav hazırlığını doğru stratejiyle yönetin"
        text="Yurt dışında eğitim, lisans ve yüksek lisans başvurularında ihtiyaç duyduğunuz uluslararası sınavlar için doğru planlama, etkili çalışma stratejileri ve başvuru desteği sağlıyoruz."
        primaryCta={{ label: "Sınav Stratejimi Oluştur", href: "/iletisim" }}
        secondaryCta={{ label: "WhatsApp'tan Sor", href: "https://wa.me/" }}
      />

      {/* Exam categories grid */}
      <section>
        <div className="container">
          <SectionHead eyebrow="Kategoriler" title="Sınav kategorileri" />
          <div className="exam-grid">
            {examCards.map((exam) => (
              <article key={exam.title} className="exam-card has-visual">
                <div className={`exam-visual ${exam.visual}`} />
                <span className="icon">{exam.icon}</span>
                <h3>{exam.title}</h3>
                <p>{exam.text}</p>
                <a className="text-link" href="#">
                  Detaylı İncele
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic exams - dark band */}
      <section className="dark-band">
        <div className="container">
          <SectionHead eyebrow="Öne çıkanlar" title="Stratejik sınav rotaları" />
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
        eyebrow="Hazırlık"
        title="Hazırlık süreci"
        items={prepSteps}
      />

      <BenefitGrid
        eyebrow="Neden biz?"
        title="Sınav hedefiniz için net rehberlik"
        items={whyUsItems}
      />

      <CTASection
        title="Sınav stratejinizi bugün netleştirin"
        text="Hedef skorunuza uygun planı birlikte oluşturalım."
      />
    </main>
  );
}
