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
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Study Global | Yurtdışı Eğitim Danışmanlığı",
  description:
    "Study Global ile yurtdışı eğitim, sınav hazırlığı ve akademik program danışmanlığı.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    image: "/assets/services/university-education.png",
    label: "Üniversite",
    title: "Yurt dışında üniversite eğitimi",
    text: "Lisans, yüksek lisans, foundation ve okul seçimi.",
    href: "/universite",
  },
  {
    image: "/assets/services/high-school-education.png",
    label: "Lise",
    title: "Yurt dışında lise eğitimi",
    text: "Okul seçimi, aile danışmanlığı ve başvuru takibi.",
    href: "/iletisim",
  },
  {
    image: "/assets/services/language-education.png",
    label: "Dil Okulları",
    title: "Yurt dışında dil eğitimi",
    text: "Ülke, şehir, okul ve program süresi seçimi.",
    href: "/iletisim",
  },
  {
    image: "/assets/services/exam-prep-service.png",
    label: "Sınavlar",
    title: "Sınav hazırlık ve başvuru",
    text: "IELTS, OET, SAT, AP ve Cambridge süreçleri.",
    href: "/sinavlar",
  },
  {
    image: "/assets/services/application-visa.png",
    label: "Destek",
    title: "Başvuru, vize ve konaklama",
    text: "Evrak, kabul, vize ve yerleşim planlaması.",
    href: "/yurt-disi-egitim",
  },
];

const roadmapCards = [
  {
    icon: "A",
    title: "Akademik Programlar",
    text: "Kariyerinizi güçlendirecek akademik fırsatları keşfedin.",
    items: ["Staj + Proje Çalışmaları", "Akademik Yaz Okulları", "GAC · GBC · WLE"],
    href: "/akademik-programlar",
    linkText: "Tüm programları incele",
    featured: true,
  },
  {
    icon: "S",
    title: "Sınavlar",
    text: "Hedef sınavlara hazırlanın, puanınızı birlikte yükseltelim.",
    items: ["IELTS, OET, SAT, AP", "TMUA", "Cambridge Exams"],
    href: "/sinavlar",
    linkText: "Tüm sınavları incele",
    featured: false,
  },
  {
    icon: "G",
    title: "Yurt Dışı Eğitim",
    text: "Hayalinizdeki ülkede doğru üniversite ve programı bulun.",
    items: ["İngiltere, Kanada, Amerika", "Hollanda, Almanya, İtalya", "ve daha fazlası"],
    href: "/yurt-disi-egitim",
    linkText: "Ülkeleri keşfet",
    featured: false,
  },
];

const destinations = [
  { name: "İngiltere", image: "/assets/countries/uk.jpg", slug: "ingiltere" },
  { name: "Kanada", image: "/assets/countries/canada.jpg", slug: "kanada" },
  { name: "Amerika", image: "/assets/countries/america.jpg", slug: "amerika" },
  { name: "Hollanda", image: "/assets/countries/holland.jpg", slug: "hollanda" },
  { name: "Almanya", image: "/assets/countries/germany.jpg", slug: "almanya" },
  { name: "İtalya", image: "/assets/countries/italy.jpg", slug: "italya" },
  { name: "İrlanda", image: "/assets/countries/ireland.jpg", slug: "irlanda" },
  { name: "Malta", image: "/assets/countries/malta.jpg", slug: "" },
  { name: "Finlandiya", image: "/assets/countries/finland.jpg", slug: "finlandiya" },
  { name: "İsviçre", image: "/assets/countries/switzerland.jpg", slug: "isvicre" },
  { name: "İspanya", image: "/assets/countries/spain.jpg", slug: "ispanya" },
  { name: "Japonya", image: "/assets/countries/japan.jpg", slug: "japonya" },
];

const testimonials = [
  {
    initials: "ZA",
    name: "Zeynep A.",
    uni: "University of Manchester",
    text: "Başvuru sürecinde hangi adımı ne zaman atacağımı biliyordum. Çok güvenli ilerledik.",
  },
  {
    initials: "MK",
    name: "Mert K.",
    uni: "University of Edinburgh",
    text: "Program seçimi ve niyet mektubu desteği kabul almamda belirleyici oldu.",
  },
  {
    initials: "ED",
    name: "Ece D.",
    uni: "University of Bristol",
    text: "IELTS planımdan vize kontrol listesine kadar bütün süreç çok netti.",
  },
];

const blogPreviews = [
  {
    category: "Üniversiteler",
    title: "2026 başvuru takvimi nasıl planlanmalı?",
    text: "Okul listesi, evrak hazırlığı, sınav skorları ve vize zamanlamasını tek planda toplayın.",
  },
  {
    category: "Sınavlar",
    title: "IELTS, OET ve SAT arasında doğru seçim",
    text: "Hedef ülke, bölüm ve başvuru seviyenize göre hangi sınavın daha doğru olduğunu karşılaştırın.",
  },
  {
    category: "Akademik Programlar",
    title: "Yaz okulu ve staj programları CV'ye nasıl katkı sağlar?",
    text: "Akademik profilinizi güçlendirecek kısa dönem programları stratejik şekilde seçin.",
  },
];

const steps = [
  {
    title: "Profil Analizi",
    text: "Akademik geçmişinizi, hedeflerinizi ve bütçenizi netleştiririz.",
  },
  {
    title: "Program / Sınav Seçimi",
    text: "Size en uygun ülke, okul, program ve sınav rotasını belirleriz.",
  },
  {
    title: "Başvuru Planı",
    text: "Evrak, takvim, referans ve niyet mektubu sürecini yönetiriz.",
  },
  {
    title: "Kabul & Vize",
    text: "Kabul sonrası vize ve hazırlık sürecinde yanınızda oluruz.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "/iletisim";

  return (
    <>
      {/* 1 ---- Hero ---- */}
      <HeroSlider>
        <div className="hero-copy">
          <LetterTitle text="Global eğitim yolculuğunu birlikte tasarlayalım" />
          <p>
            Üniversite başvurularından dil okullarına, sınav hazırlığından akademik programlara ve
            ülke seçimine kadar her adımda yanınızdayız. Doğru tercih, güçlü başvuru, başarılı
            gelecek.
          </p>
          <div className="hero-actions">
            <Button variant="primary" href="/iletisim">
              Ücretsiz Danışmanlık Al
            </Button>
            <Link
              href={whatsappHref}
              className="hero-whatsapp-icon"
              aria-label="WhatsApp'tan yazın"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="hero-side">
          <LeadForm />
        </div>
      </HeroSlider>

      {/* 2 ---- Trust strip ---- */}
      <TrustStrip
        metrics={[
          { value: "20.000+", label: "Öğrenci" },
          { value: "90+", label: "Partner Kurum" },
          { value: "14", label: "Yıl Deneyim" },
          { value: "IELTS & OET", label: "Sınav Merkezleri" },
          { value: "Vize", label: "Danışmanlığı" },
          { value: "UCAS", label: "Başvuru Desteği" },
        ]}
      />

      {/* 3 ---- Services ---- */}
      <RevealOnScroll as="section" className="service-visual-section">
        <div className="container">
          <SectionHead
            eyebrow="Hizmetlerimiz"
            title="Yurt dışı eğitim sürecinizde yanınızdayız"
            description="Üniversite, lise, dil eğitimi, sınav hazırlığı ve başvuru süreçlerinde Study Global danışmanlarıyla ilerleyin."
          />
          <ServiceGrid services={services} />
        </div>
      </RevealOnScroll>

      {/* 4 ---- Roadmap cards ---- */}
      <RevealOnScroll as="section">
        <div className="container">
          <SectionHead eyebrow="Yol haritanız" title="Size en uygun yolu birlikte planlayalım" />
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
      </RevealOnScroll>

      {/* 5 ---- Destination strip (dark band) ---- */}
      <RevealOnScroll as="section" id="global-secenekler" className="dark-band destinations-showcase">
        <div className="container">
          <SectionHead
            eyebrow="Popüler hedefler"
            title="Global seçenekleri karşılaştırın"
            description="Ülke, okul, bütçe ve kariyer hedeflerinizi birlikte değerlendirerek gerçekçi bir başvuru planı oluşturuyoruz."
          />
          <div className="destination-strip" aria-label="Study Global popüler ülke görselleri">
            <div className="destination-copy">
              <strong>Ülke rotanızı tek ekranda görün</strong>
              <span>
                Akademik hedef, bütçe, yaşam tarzı ve vize sürecine göre en güçlü seçenekleri
                karşılaştırıyoruz.
              </span>
              <Button variant="primary" href="/iletisim">
                Ülke Rotamı Planla
              </Button>
            </div>
            <div className="destination-mini-viewport" aria-label="Kayan popüler ülke kartları">
              <div className="destination-mini-grid">
                {/* First set */}
                {destinations.map((d) => {
                  const tile = (
                    <>
                      <Image src={d.image} alt={d.name} width={120} height={160} className="object-cover" />
                      <span>{d.name}</span>
                    </>
                  );
                  return (
                    <Link
                      key={d.name}
                      href={d.slug ? `/ulkeler/${d.slug}` : "/yurt-disi-egitim"}
                      className="destination-tile"
                    >
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
                  return (
                    <Link
                      key={`dup-${d.name}`}
                      href={d.slug ? `/ulkeler/${d.slug}` : "/yurt-disi-egitim"}
                      className="destination-tile"
                    >
                      {tile}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* 6 ---- Steps ---- */}
      <StepList eyebrow="Süreç" title="Nasıl çalışıyoruz?" items={steps} />

      {/* 7 ---- Testimonials ---- */}
      <RevealOnScroll as="section">
        <div className="container">
          <SectionHead eyebrow="Başarı hikayeleri" title="Öğrencilerimizin yolculukları" />
          <TestimonialGrid items={testimonials} />
        </div>
      </RevealOnScroll>

      {/* 8 ---- Content hub ---- */}
      <RevealOnScroll as="section" className="content-hub">
        <div className="container">
          <SectionHead eyebrow="Bilgi merkezi" title="Başvurudan sınava, kararınızı güçlendiren içerikler">
            <Link className="btn btn-outline" href="/blog">
              Tüm İçerikler
            </Link>
          </SectionHead>
          <div className="hub-grid">
            {blogPreviews.map((b) => (
              <article key={b.title} className="hub-card">
                <span>{b.category}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
                <Link className="text-link" href="/blog">
                  Devamını oku
                </Link>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* 9 ---- CTA ---- */}
      <CTASection
        title="Hayallerinizdeki eğitime bir adım daha yaklaşın!"
        text="Study Global danışmanlarıyla ücretsiz ön görüşme yapın, ülke ve program seçeneklerinizi netleştirin."
      />
    </>
  );
}
