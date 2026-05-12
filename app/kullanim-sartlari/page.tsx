import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Şartları | Study Global",
  description:
    "Study Global Yurtdışı Eğitim Danışmanlığı web sitesi ve hizmetlerinin kullanım şartları, sorumluluklar ve telif hakları.",
};

export default function KullanimSartlariPage() {
  return (
    <main className="legal-page">
      <div className="container">
        <Link className="text-link" href="/" style={{ marginBottom: 24, display: "inline-block" }}>
          ← Ana sayfaya dön
        </Link>
        <span className="eyebrow" style={{ display: "block", marginBottom: 8 }}>Yasal</span>
        <h1>Kullanım Şartları</h1>
        <p className="legal-meta">
          Son güncelleme: <strong>10 Mayıs 2026</strong>
        </p>

        <section>
          <h2>1. Genel Hükümler</h2>
          <p>
            Bu Kullanım Şartları, <strong>Study Global Yurtdışı Eğitim Danışmanlığı</strong> (&quot;Şirket&quot;) tarafından işletilen{" "}
            <strong>studyglobal.com.tr</strong> web sitesini ziyaret eden veya hizmetlerimizden yararlanan tüm kullanıcılar için geçerlidir. Web sitemizi kullanarak bu şartları kabul etmiş sayılırsınız.
          </p>
        </section>

        <section>
          <h2>2. Hizmetlerin Tanımı</h2>
          <p>Study Global aşağıdaki danışmanlık hizmetlerini sunar:</p>
          <ul>
            <li>Yurt dışı üniversite başvuru danışmanlığı</li>
            <li>Yüksek lisans ve MBA başvuru danışmanlığı</li>
            <li>Dil okulu seçim ve kayıt danışmanlığı</li>
            <li>Sınav hazırlık ve strateji danışmanlığı</li>
            <li>Akademik program ve staj danışmanlığı</li>
            <li>Vize ve evrak hazırlık desteği</li>
          </ul>
          <p>
            Hizmetlerimiz, kabul ya da vize garantisi <strong>içermez</strong>. Kabul ve vize kararları ilgili kurumların ve resmi makamların takdirindedir.
          </p>
        </section>

        <section>
          <h2>3. Kullanıcı Yükümlülükleri</h2>
          <ul>
            <li>Web sitesini ve hizmetlerimizi yalnızca yasal amaçlarla kullanmayı kabul edersiniz.</li>
            <li>Sağladığınız bilgilerin doğru, güncel ve eksiksiz olduğundan emin olursunuz.</li>
            <li>Üçüncü tarafların haklarını ihlal eden içerik paylaşmamayı taahhüt edersiniz.</li>
            <li>Site güvenliğini tehlikeye atacak girişimlerde bulunmazsınız.</li>
            <li>Otomatik veri toplama (scraping) veya tersine mühendislik yapmamayı kabul edersiniz.</li>
          </ul>
        </section>

        <section>
          <h2>4. Fikri Mülkiyet Hakları</h2>
          <p>
            Web sitesindeki tüm metinler, görseller, logolar, marka adları, video içerikleri ve yazılım; Study Global&apos;in veya lisansörlerinin mülkiyetindedir ve telif hakkı yasalarıyla korunmaktadır. İzinsiz kopyalama, dağıtma, değiştirme veya ticari kullanım yasaktır.
          </p>
        </section>

        <section>
          <h2>5. Hizmet Kullanılabilirliği</h2>
          <p>
            Web sitesi ve hizmetlerin kesintisiz veya hatasız çalışacağını garanti etmiyoruz. Bakım çalışmaları, teknik sorunlar veya mücbir sebepler nedeniyle hizmetler geçici olarak durdurulabilir.
          </p>
        </section>

        <section>
          <h2>6. Sorumluluk Sınırlamaları</h2>
          <p>
            Study Global; danışmanlık sürecinde paylaşılan bilgilerin doğruluğu ve güncelliği için makul özeni gösterir. Ancak;
          </p>
          <ul>
            <li>Üniversite, vize ve resmi kurum süreçlerindeki nihai kararlardan sorumlu tutulamaz.</li>
            <li>Üçüncü taraf web siteleri ve içeriklerinden kaynaklanan zararlardan sorumlu değildir.</li>
            <li>Kullanıcının yanlış veya eksik bilgi vermesi sonucu doğacak sonuçlardan sorumlu değildir.</li>
            <li>Dolaylı, arızi veya sonuçsal zararlardan sorumlu tutulamaz.</li>
          </ul>
        </section>

        <section>
          <h2>7. Üçüncü Taraf Bağlantıları</h2>
          <p>
            Web sitemiz; üniversite siteleri, sınav merkezleri ve resmi kurumlar gibi üçüncü taraflara bağlantılar içerebilir. Bu bağlantılar bilgi amaçlıdır; ilgili sitelerin içerik veya güvenliğinden Study Global sorumlu değildir.
          </p>
        </section>

        <section>
          <h2>8. Hizmet Bedeli ve Ödeme</h2>
          <p>
            Danışmanlık hizmetlerimizin kapsamı ve ücreti, hizmet sözleşmesinde detaylı olarak belirlenir. Türk öğrenciler için temel ön görüşme ve danışmanlık hizmetimiz <strong>ücretsizdir</strong>. Ek hizmetler için ödeme koşulları ayrıca yazılı olarak iletilir.
          </p>
        </section>

        <section>
          <h2>9. İptal ve İade</h2>
          <p>
            Ücretli hizmet alan kullanıcıların iptal ve iade hakları, hizmet sözleşmesinde ve ilgili tüketici mevzuatı çerçevesinde düzenlenir. Mesafeli Sözleşmeler Yönetmeliği uyarınca cayma hakkınızı kullanabilirsiniz.
          </p>
        </section>

        <section>
          <h2>10. Hesap ve İletişim</h2>
          <p>
            Web sitesi üzerinden iletişim formları aracılığıyla kişisel bilgilerinizi paylaştığınızda{" "}
            <Link href="/kvkk">KVKK Aydınlatma Metni</Link> ve{" "}
            <Link href="/gizlilik">Gizlilik Politikası</Link>&apos;nı kabul etmiş sayılırsınız.
          </p>
        </section>

        <section>
          <h2>11. Şartlardaki Değişiklikler</h2>
          <p>
            Study Global, bu Kullanım Şartları&apos;nı önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar. Önemli değişikliklerde site üzerinden duyuru yapılır. Şartlardaki güncellemeleri takip etmek kullanıcının sorumluluğundadır.
          </p>
        </section>

        <section>
          <h2>12. Uygulanacak Hukuk ve Yetkili Mahkeme</h2>
          <p>
            Bu Kullanım Şartları&apos;nın yorumlanması ve uygulanmasında <strong>Türkiye Cumhuriyeti yasaları</strong> geçerlidir. Doğabilecek uyuşmazlıklarda <strong>İstanbul Merkez Mahkemeleri ve İcra Daireleri</strong> yetkilidir.
          </p>
        </section>

        <section>
          <h2>13. İletişim</h2>
          <ul>
            <li>E-posta: <a href="mailto:info@studyglobal.com.tr">info@studyglobal.com.tr</a></li>
            <li>Telefon: <a href="tel:+902121234567">+90 212 123 45 67</a></li>
            <li>Adres: Nişantaşı Mah. Teşvikiye Cd. No: 45/12, Şişli / İstanbul</li>
          </ul>
        </section>

        <p className="legal-footer">
          Web sitemizi kullanarak bu Kullanım Şartları&apos;nı,{" "}
          <Link href="/gizlilik">Gizlilik Politikası</Link>&apos;nı ve{" "}
          <Link href="/kvkk">KVKK Aydınlatma Metni</Link>&apos;ni kabul etmiş sayılırsınız.
        </p>
      </div>
    </main>
  );
}
