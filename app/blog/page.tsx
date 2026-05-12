import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHead } from "@/components/ui/SectionHead";

export const metadata: Metadata = {
  title: "Blog | Study Global",
  description:
    "Yurt dışı eğitim, üniversite başvuruları, dil okulları, sınav hazırlığı ve vize süreçleri için Study Global rehberleri.",
};

const featuredPost = {
  category: "Başvuru Stratejisi",
  title: "2026 yurt dışı eğitim başvuru takvimi nasıl planlanmalı?",
  excerpt:
    "Okul listesi, sınav skorları, niyet mektubu, referanslar ve vize zamanlamasını tek bir yol haritasına yerleştirin.",
  readTime: "6 dk okuma",
  href: "/iletisim",
};

const categories = [
  { title: "Üniversite", count: "8 rehber", href: "/universite" },
  { title: "Yüksek Lisans", count: "5 rehber", href: "/yuksek-lisans" },
  { title: "Dil Okulları", count: "6 rehber", href: "/dil-okullari" },
  { title: "Sınavlar", count: "7 rehber", href: "/sinavlar" },
];

const posts = [
  {
    category: "Üniversite",
    title: "Okul listesi hazırlarken sadece sıralamaya bakmak neden yetmez?",
    excerpt:
      "Bölüm içeriği, şehir, maliyet, mezuniyet sonrası imkanlar ve kabul ihtimalini birlikte değerlendirmenin yolu.",
    readTime: "5 dk",
    href: "/universite",
  },
  {
    category: "Yüksek Lisans",
    title: "Master ve MBA başvurusunda güçlü CV nasıl kurgulanır?",
    excerpt:
      "Akademik geçmiş, iş deneyimi, niyet mektubu ve referansların aynı hikayeyi anlatmasını sağlayın.",
    readTime: "7 dk",
    href: "/yuksek-lisans",
  },
  {
    category: "Dil Okulları",
    title: "Dil okulu seçerken şehir, süre ve bütçe dengesi",
    excerpt:
      "Hedef seviye, konaklama, çalışma izni ve günlük yaşam maliyetlerini karşılaştırarak program seçin.",
    readTime: "4 dk",
    href: "/dil-okullari",
  },
  {
    category: "Sınavlar",
    title: "IELTS, OET, SAT ve AP arasında doğru sınavı seçmek",
    excerpt:
      "Hedef ülke, bölüm ve başvuru seviyenize göre hangi sınavın başvuru dosyanıza değer katacağını görün.",
    readTime: "6 dk",
    href: "/sinavlar",
  },
  {
    category: "Vize & Hazırlık",
    title: "Kabul aldıktan sonra vize ve konaklama planı nasıl ilerler?",
    excerpt:
      "Kabul mektubu sonrası evrak, finansal kanıt, konaklama ve seyahat hazırlığını zamanında tamamlayın.",
    readTime: "5 dk",
    href: "/yurt-disi-egitim",
  },
  {
    category: "Burslar",
    title: "Burs araştırmasına ne zaman başlanmalı?",
    excerpt:
      "Başvuru takviminizi burs koşullarıyla birlikte planlayarak kaçırılmaması gereken tarihleri netleştirin.",
    readTime: "4 dk",
    href: "/iletisim",
  },
];

const questions = [
  "Yurt dışı eğitim başvurularına ne zaman başlamalıyım?",
  "Hangi ülke bütçeme ve hedefime daha uygun?",
  "IELTS mi, TOEFL mı, yoksa farklı bir sınav mı gerekir?",
  "Danışmanlık sürecinde hangi evrakları birlikte hazırlıyoruz?",
];

export default function BlogPage() {
  return (
    <main>
      <Hero
        eyebrow="Bilgi Merkezi"
        title="Yurt dışı eğitim kararınızı güçlendiren rehberler"
        text="Ülke seçimi, okul listesi, sınav hazırlığı, başvuru dosyası, burs ve vize süreçlerini daha net planlamanız için hazırladığımız içerikleri keşfedin."
        points={["Başvuru takvimi", "Ülke karşılaştırmaları", "Sınav ve vize rehberleri"]}
        primaryCta={{ label: "Ücretsiz Ön Görüşme", href: "/iletisim" }}
        secondaryCta={{ label: "Popüler Rehberleri Gör", href: "#rehberler" }}
      />

      <section className="blog-feature-section">
        <div className="container blog-feature-grid">
          <article className="blog-feature-card">
            <span>{featuredPost.category}</span>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <div className="blog-card-meta">
              <small>{featuredPost.readTime}</small>
              <Link className="text-link" href={featuredPost.href}>
                Yol haritamı çıkar
              </Link>
            </div>
          </article>

          <aside className="blog-category-panel" aria-label="Blog kategorileri">
            <strong>Kategoriler</strong>
            <div className="blog-category-list">
              {categories.map((category) => (
                <Link key={category.title} href={category.href}>
                  <span>{category.title}</span>
                  <small>{category.count}</small>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="rehberler" className="content-hub">
        <div className="container">
          <SectionHead
            eyebrow="Popüler Rehberler"
            title="Başvuru kararına yardımcı içerikler"
            description="Her içerik sizi ilgili hizmet sayfasına ya da danışmanlık görüşmesine taşır; böylece okumadan aksiyona geçiş kolay kalır."
          />
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.title} className="blog-card">
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-card-meta">
                  <small>{post.readTime}</small>
                  <Link className="text-link" href={post.href}>
                    Detayları incele
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-question-section">
        <div className="container">
          <SectionHead
            eyebrow="Sık Sorulanlar"
            title="Blogdan sonra aklınızda kalabilecek sorular"
            description="Yanıtları kişisel profilinize göre değişen konuları ücretsiz ön görüşmede netleştiriyoruz."
          />
          <div className="blog-question-grid">
            {questions.map((question) => (
              <article key={question} className="blog-question-card">
                <h3>{question}</h3>
                <Link className="text-link" href="/iletisim">
                  Danışmana sor
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Hangi rehberin sizin için doğru olduğunu birlikte seçelim"
        text="Hedef ülke, bölüm ve bütçenize göre başvuru yol haritanızı ücretsiz ön görüşmede netleştirelim."
      />
    </main>
  );
}
