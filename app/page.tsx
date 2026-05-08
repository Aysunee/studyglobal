import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { HeroSlider } from "@/components/sections/HeroSlider";
import { LeadForm } from "@/components/sections/LeadForm";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { StepList } from "@/components/sections/StepList";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Study Global | Yurtdisi Egitim Danismanligi",
  description:
    "Study Global ile yurtdisi egitim, sinav hazirligi ve akademik program danismanligi.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    image: "/assets/services/university-education.png",
    label: "Universite",
    title: "Yurt disinda universite egitimi",
    text: "Lisans, yuksek lisans, foundation ve okul secimi.",
    href: "/universite",
  },
  {
    image: "/assets/services/high-school-education.png",
    label: "Lise",
    title: "Yurt disinda lise egitimi",
    text: "Okul secimi, aile danismanligi ve basvuru takibi.",
    href: "#",
  },
  {
    image: "/assets/services/language-education.png",
    label: "Dil Okullari",
    title: "Yurt disinda dil egitimi",
    text: "Ulke, sehir, okul ve program suresi secimi.",
    href: "#",
  },
  {
    image: "/assets/services/exam-prep-service.png",
    label: "Sinavlar",
    title: "Sinav hazirlik ve basvuru",
    text: "IELTS, OET, SAT, AP ve Cambridge surecleri.",
    href: "/sinavlar",
  },
  {
    image: "/assets/services/application-visa.png",
    label: "Destek",
    title: "Basvuru, vize ve konaklama",
    text: "Evrak, kabul, vize ve yerlesim planlamasi.",
    href: "/yurt-disi-egitim",
  },
];

const roadmapCards = [
  {
    icon: "A",
    title: "Akademik Programlar",
    text: "Kariyerinizi guclendirecek akademik firsatlari kesfedin.",
    items: ["Staj + Proje Calismalari", "Akademik Yaz Okullari", "GAC - GBC - WLE"],
    href: "/akademik-programlar",
    featured: true,
  },
  {
    icon: "S",
    title: "Sinavlar",
    text: "Hedef sinavlara hazirlanin, puaninizi birlikte yukseltelim.",
    items: ["IELTS, OET, SAT, AP", "TMUA", "Cambridge Exams"],
    href: "/sinavlar",
    featured: false,
  },
  {
    icon: "G",
    title: "Yurt Disi Egitim",
    text: "Hayalinizdeki ulkede dogru universite ve programi bulun.",
    items: ["Ingiltere, Kanada, Amerika", "Hollanda, Almanya, Italya", "ve daha fazlasi"],
    href: "/yurt-disi-egitim",
    featured: false,
  },
];

const destinations = [
  { name: "Ingiltere", image: "/assets/countries/uk.jpg", slug: "ingiltere" },
  { name: "Kanada", image: "/assets/countries/canada.jpg", slug: "kanada" },
  { name: "Amerika", image: "/assets/countries/america.jpg", slug: "amerika" },
  { name: "Hollanda", image: "/assets/countries/holland.jpg", slug: "hollanda" },
  { name: "Almanya", image: "/assets/countries/germany.jpg", slug: "almanya" },
  { name: "Italya", image: "/assets/countries/italy.jpg", slug: "italya" },
  { name: "Irlanda", image: "/assets/countries/ireland.jpg", slug: "irlanda" },
  { name: "Malta", image: "/assets/countries/malta.jpg", slug: "" },
  { name: "Finlandiya", image: "/assets/countries/finland.jpg", slug: "finlandiya" },
  { name: "Isvicre", image: "/assets/countries/switzerland.jpg", slug: "isvicre" },
  { name: "Ispanya", image: "/assets/countries/spain.jpg", slug: "ispanya" },
  { name: "Japonya", image: "/assets/countries/japan.jpg", slug: "japonya" },
];

const testimonials = [
  {
    initials: "ZA",
    name: "Zeynep A.",
    uni: "University of Manchester",
    text: "Basvuru surecinde hangi adimi ne zaman atacagimi biliyordum. Cok guvenli ilerledik.",
  },
  {
    initials: "MK",
    name: "Mert K.",
    uni: "University of Edinburgh",
    text: "Program secimi ve niyet mektubu destegi kabul almamda belirleyici oldu.",
  },
  {
    initials: "ED",
    name: "Ece D.",
    uni: "University of Bristol",
    text: "IELTS planimdan vize kontrol listesine kadar butun surec cok netti.",
  },
];

const blogPreviews = [
  {
    category: "Universiteler",
    title: "2026 basvuru takvimi nasil planlanmali?",
    text: "Okul listesi, evrak hazirligi, sinav skorlari ve vize zamanlamasini tek planda toplayin.",
  },
  {
    category: "Sinavlar",
    title: "IELTS, OET ve SAT arasinda dogru secim",
    text: "Hedef ulke, bolum ve basvuru seviyenize gore hangi sinavin daha dogru oldugunu karsilastirin.",
  },
  {
    category: "Akademik Programlar",
    title: "Yaz okulu ve staj programlari CV'ye nasil katki saglar?",
    text: "Akademik profilinizi guclendirecek kisa donem programlari stratejik sekilde secin.",
  },
];

const steps = [
  {
    title: "Profil Analizi",
    text: "Akademik gecmisinizi, hedeflerinizi ve butcenizi netlestiririz.",
  },
  {
    title: "Program / Sinav Secimi",
    text: "Size en uygun ulke, okul, program ve sinav rotasini belirleriz.",
  },
  {
    title: "Basvuru Plani",
    text: "Evrak, takvim, referans ve niyet mektubu surecini yonetiriz.",
  },
  {
    title: "Kabul & Vize",
    text: "Kabul sonrasi vize ve hazirlik surecinde yaninizda oluruz.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* 1 ---- Hero ---- */}
      <HeroSlider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Global egitim yolculugunu birlikte tasarlayalim
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Universite basvurularindan dil okullarina, sinav hazirligindan akademik programlara ve
              ulke secimine kadar her adimda yaninizdayiz. Dogru tercih, guclu basvuru, basarili
              gelecek.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="primary" href="/iletisim">
                Ucretsiz Danismanlik Al
              </Button>
              <Button variant="secondary" href={process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/"}>
                WhatsApp&apos;tan Sor
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              {["14+ Yil Deneyim", "Global Egitim Danismanligi", "Guvenli ve Seffaf Surec"].map(
                (point) => (
                  <span
                    key={point}
                    className="text-xs text-white/70 border border-white/20 rounded-full px-3 py-1"
                  >
                    {point}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Right form */}
          <div>
            <LeadForm />
          </div>
        </div>
      </HeroSlider>

      {/* 2 ---- Trust strip ---- */}
      <TrustStrip
        metrics={[
          { value: "1.000+", label: "Ogrenci" },
          { value: "50+", label: "Partner Kurum" },
          { value: "14+", label: "Yil Deneyim" },
          { value: "UCAS", label: "Vize \u2022 IELTS \u2022 OET" },
        ]}
      />

      {/* 3 ---- Services ---- */}
      <section className="py-20 bg-ivory">
        <div className="mx-auto max-w-[var(--max-width-site)] px-5">
          <SectionHead
            eyebrow="Hizmetlerimiz"
            title="Yurt disi egitim surecinizde yaninizdayiz"
            description="Universite, lise, dil egitimi, sinav hazirligi ve basvuru sureclerinde Study Global danismanlariyla ilerleyin."
          />
          <ServiceGrid services={services} />
        </div>
      </section>

      {/* 4 ---- Roadmap cards ---- */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[var(--max-width-site)] px-5">
          <SectionHead eyebrow="Yol haritaniz" title="Size en uygun yolu birlikte planlayalim" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmapCards.map((card) => (
              <article
                key={card.title}
                className={`rounded-[var(--radius)] p-6 flex flex-col ${
                  card.featured
                    ? "bg-navy-deep text-white"
                    : "bg-white border border-border-soft shadow-card"
                }`}
              >
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-4 ${
                    card.featured ? "bg-study-red text-white" : "bg-ivory text-navy-deep"
                  }`}
                >
                  {card.icon}
                </span>
                <h3
                  className={`text-base font-semibold mb-2 ${
                    card.featured ? "text-white" : "text-navy-deep"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    card.featured ? "text-white/70" : "text-muted-slate"
                  }`}
                >
                  {card.text}
                </p>
                <ul className="text-sm space-y-1 mb-5 flex-1">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className={card.featured ? "text-white/60" : "text-muted-slate"}
                    >
                      &bull; {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={card.href}
                  className={`text-sm font-medium hover:underline ${
                    card.featured ? "text-study-red" : "text-study-red"
                  }`}
                >
                  {card.title === "Akademik Programlar"
                    ? "Tum programlari incele"
                    : card.title === "Sinavlar"
                      ? "Tum sinavlari incele"
                      : "Ulkeleri kesfet"}
                  {" \u2192"}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ---- Destination strip (dark band) ---- */}
      <section className="py-20 bg-navy-deep text-white">
        <div className="mx-auto max-w-[var(--max-width-site)] px-5">
          <SectionHead eyebrow="Populer hedefler" title="Global secenekleri karsilastirin" />
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left copy */}
            <div className="lg:w-1/3 shrink-0">
              <strong className="text-white text-lg font-semibold block mb-2">
                Ulke rotanizi tek ekranda gorun
              </strong>
              <span className="text-white/70 text-sm leading-relaxed block mb-5">
                Akademik hedef, butce, yasam tarzi ve vize surecine gore en guclu secenekleri
                karsilastiriyoruz.
              </span>
              <Button variant="primary" href="/iletisim">
                Ulke Rotami Planla
              </Button>
            </div>

            {/* Right scrolling tiles */}
            <div className="flex-1 overflow-x-auto pb-3 -mr-5 lg:mr-0">
              <div className="flex gap-4" style={{ minWidth: "max-content" }}>
                {destinations.map((d) => {
                  const inner = (
                    <div className="relative w-28 h-36 rounded-[var(--radius)] overflow-hidden shrink-0 group">
                      <Image
                        src={d.image}
                        alt={d.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                      <span className="absolute bottom-2 left-0 right-0 text-center text-xs font-semibold text-white">
                        {d.name}
                      </span>
                    </div>
                  );

                  if (!d.slug) {
                    return <div key={d.name}>{inner}</div>;
                  }

                  return (
                    <Link key={d.name} href={`/ulkeler/${d.slug}`}>
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 ---- Steps ---- */}
      <StepList eyebrow="Surec" title="Nasil calisiyoruz?" items={steps} />

      {/* 7 ---- Testimonials ---- */}
      <section className="py-20 bg-ivory">
        <div className="mx-auto max-w-[var(--max-width-site)] px-5">
          <SectionHead eyebrow="Basari hikayeleri" title="Ogrencilerimizin yolculuklari" />
          <TestimonialGrid items={testimonials} />
        </div>
      </section>

      {/* 8 ---- Content hub ---- */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[var(--max-width-site)] px-5">
          <SectionHead eyebrow="Bilgi merkezi" title="Basvurudan sinava, kararinizi guclendiren icerikler">
            <Button variant="outline" href="#">
              Tum Icerikler
            </Button>
          </SectionHead>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPreviews.map((b) => (
              <article
                key={b.title}
                className="rounded-[var(--radius)] bg-ivory border border-border-soft p-6 flex flex-col"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-study-red mb-2">
                  {b.category}
                </span>
                <h3 className="text-base font-semibold text-navy-deep mb-2">{b.title}</h3>
                <p className="text-sm text-muted-slate leading-relaxed mb-4 flex-1">{b.text}</p>
                <span className="text-sm font-medium text-study-red cursor-default">
                  Devamini Oku {"\u2192"}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9 ---- CTA ---- */}
      <CTASection
        title="Hayallerinizdeki egitime bir adim daha yaklasin!"
        text="Study Global danismanlariyla ucretsiz on gorusme yapin, ulke ve program seceneklerinizi netlestirin."
      />
    </>
  );
}
