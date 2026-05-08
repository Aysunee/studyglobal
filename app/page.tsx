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
import { LetterTitle } from "@/components/ui/LetterTitle";

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
    linkText: "Tum programlari incele",
    featured: true,
  },
  {
    icon: "S",
    title: "Sinavlar",
    text: "Hedef sinavlara hazirlanin, puaninizi birlikte yukseltelim.",
    items: ["IELTS, OET, SAT, AP", "TMUA", "Cambridge Exams"],
    href: "/sinavlar",
    linkText: "Tum sinavlari incele",
    featured: false,
  },
  {
    icon: "G",
    title: "Yurt Disi Egitim",
    text: "Hayalinizdeki ulkede dogru universite ve programi bulun.",
    items: ["Ingiltere, Kanada, Amerika", "Hollanda, Almanya, Italya", "ve daha fazlasi"],
    href: "/yurt-disi-egitim",
    linkText: "Ulkeleri kesfet",
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
        <div className="hero-copy">
          <LetterTitle text="Global eğitim yolculuğunu birlikte tasarlayalım" />
          <p>
            Universite basvurularindan dil okullarina, sinav hazirligindan akademik programlara ve
            ulke secimine kadar her adimda yaninizdayiz. Dogru tercih, guclu basvuru, basarili
            gelecek.
          </p>
          <div className="hero-actions">
            <Button variant="primary" href="/iletisim">
              Ucretsiz Danismanlik Al
            </Button>
            <Button variant="secondary" href={process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/"}>
              WhatsApp&apos;tan Sor
            </Button>
          </div>
          <div className="hero-points">
            <div className="point">14+ Yil Deneyim</div>
            <div className="point">Global Egitim Danismanligi</div>
            <div className="point">Guvenli ve Seffaf Surec</div>
          </div>
        </div>
        <div className="hero-side">
          <LeadForm />
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
      <section className="service-visual-section">
        <div className="container">
          <SectionHead
            eyebrow="Hizmetlerimiz"
            title="Yurt disi egitim surecinizde yaninizdayiz"
            description="Universite, lise, dil egitimi, sinav hazirligi ve basvuru sureclerinde Study Global danismanlariyla ilerleyin."
          />
          <ServiceGrid services={services} />
        </div>
      </section>

      {/* 4 ---- Roadmap cards ---- */}
      <section>
        <div className="container">
          <SectionHead eyebrow="Yol haritaniz" title="Size en uygun yolu birlikte planlayalim" />
          <div className="grid-3">
            {roadmapCards.map((card) => (
              <article
                key={card.title}
                className={card.featured ? "card featured" : "card"}
              >
                <span className="icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="text-link" href={card.href}>
                  {card.linkText}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ---- Destination strip (dark band) ---- */}
      <section id="global-secenekler" className="dark-band destinations-showcase">
        <div className="container">
          <SectionHead
            eyebrow="Populer hedefler"
            title="Global secenekleri karsilastirin"
            description="Ulke, okul, butce ve kariyer hedeflerinizi birlikte degerlendirerek gercekci bir basvuru plani olusturuyoruz."
          />
          <div className="destination-strip" aria-label="Study Global populer ulke gorselleri">
            <div className="destination-copy">
              <strong>Ulke rotanizi tek ekranda gorun</strong>
              <span>
                Akademik hedef, butce, yasam tarzi ve vize surecine gore en guclu secenekleri
                karsilastiriyoruz.
              </span>
              <Button variant="primary" href="/iletisim">
                Ulke Rotami Planla
              </Button>
            </div>
            <div className="destination-mini-viewport" aria-label="Kayan populer ulke kartlari">
              <div className="destination-mini-grid">
                {/* First set */}
                {destinations.map((d) => {
                  const tile = (
                    <>
                      <Image src={d.image} alt={d.name} width={120} height={160} className="object-cover" />
                      <span>{d.name}</span>
                    </>
                  );
                  if (!d.slug) {
                    return (
                      <div key={d.name} className="destination-tile">
                        {tile}
                      </div>
                    );
                  }
                  return (
                    <Link key={d.name} href={`/ulkeler/${d.slug}`} className="destination-tile">
                      {tile}
                    </Link>
                  );
                })}
                {/* Duplicate set for infinite scroll */}
                {destinations.map((d) => {
                  const tile = (
                    <>
                      <Image src={d.image} alt={d.name} width={120} height={160} className="object-cover" />
                      <span>{d.name}</span>
                    </>
                  );
                  if (!d.slug) {
                    return (
                      <div key={`dup-${d.name}`} className="destination-tile">
                        {tile}
                      </div>
                    );
                  }
                  return (
                    <Link key={`dup-${d.name}`} href={`/ulkeler/${d.slug}`} className="destination-tile">
                      {tile}
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
      <section>
        <div className="container">
          <SectionHead eyebrow="Basari hikayeleri" title="Ogrencilerimizin yolculuklari" />
          <TestimonialGrid items={testimonials} />
        </div>
      </section>

      {/* 8 ---- Content hub ---- */}
      <section className="content-hub">
        <div className="container">
          <SectionHead eyebrow="Bilgi merkezi" title="Basvurudan sinava, kararinizi guclendiren icerikler">
            <button className="btn btn-outline">Tum Icerikler</button>
          </SectionHead>
          <div className="hub-grid">
            {blogPreviews.map((b) => (
              <article key={b.title} className="hub-card">
                <span>{b.category}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
                <a className="text-link" href="#">
                  Devamini Oku
                </a>
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
