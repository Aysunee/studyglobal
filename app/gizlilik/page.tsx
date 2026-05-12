import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Study Global",
  description:
    "Study Global Yurtdışı Eğitim Danışmanlığı gizlilik politikası: kişisel verileriniz nasıl toplanır, işlenir, korunur ve haklarınızı nasıl kullanırsınız.",
};

export default function GizlilikPage() {
  return (
    <main className="legal-page">
      <div className="container">
        <Link className="text-link" href="/" style={{ marginBottom: 24, display: "inline-block" }}>
          ← Ana sayfaya dön
        </Link>
        <span className="eyebrow" style={{ display: "block", marginBottom: 8 }}>Yasal</span>
        <h1>Gizlilik Politikası</h1>
        <p className="legal-meta">
          Son güncelleme: <strong>10 Mayıs 2026</strong>
        </p>

        <section>
          <h2>1. Giriş</h2>
          <p>
            <strong>Study Global Yurtdışı Eğitim Danışmanlığı</strong> (&quot;Şirket&quot;, &quot;biz&quot;) olarak, web sitemizi ziyaret eden ve hizmetlerimizden faydalanan kullanıcıların gizliliğine önem veriyoruz. Bu Gizlilik Politikası; sizden topladığımız bilgileri, bu bilgileri nasıl kullandığımızı, kimlerle paylaştığımızı ve haklarınızı açıklar.
          </p>
        </section>

        <section>
          <h2>2. Topladığımız Bilgiler</h2>
          <p>Web sitemiz ve danışmanlık hizmetimiz aracılığıyla aşağıdaki bilgileri topluyoruz:</p>
          <ul>
            <li><strong>Sizin sağladığınız bilgiler:</strong> Ad, soyad, e-posta, telefon, WhatsApp numarası, eğitim hedefleri, ilgilendiğiniz ülke ve programlar.</li>
            <li><strong>Otomatik olarak toplanan bilgiler:</strong> IP adresi, tarayıcı türü, ziyaret edilen sayfalar, ziyaret süresi, cihaz bilgisi, çerez verileri.</li>
            <li><strong>Üçüncü taraflardan alınan bilgiler:</strong> Sosyal medya entegrasyonları üzerinden (yalnızca sizin onayınız ile).</li>
          </ul>
        </section>

        <section>
          <h2>3. Bilgilerin Kullanım Amacı</h2>
          <ul>
            <li>Danışmanlık hizmetlerinin sunulması</li>
            <li>Talep ve sorularınızın yanıtlanması</li>
            <li>Hizmet kalitesinin iyileştirilmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>İletişim faaliyetlerinin yürütülmesi (yalnızca açık rızanızla)</li>
          </ul>
        </section>

        <section>
          <h2>4. Çerezler (Cookies)</h2>
          <p>
            Web sitemiz; deneyiminizi iyileştirmek, site kullanımını analiz etmek ve içerikleri kişiselleştirmek için çerezler kullanır. Çerezleri tarayıcı ayarlarınızdan istediğiniz zaman devre dışı bırakabilirsiniz; ancak bu durumda sitenin bazı özellikleri düzgün çalışmayabilir.
          </p>
          <p>Kullandığımız çerez tipleri:</p>
          <ul>
            <li><strong>Zorunlu çerezler:</strong> Sitenin çalışması için gerekli, kapatılamaz.</li>
            <li><strong>Analitik çerezler:</strong> Site performansı ve kullanıcı davranışını anlamak için.</li>
            <li><strong>İşlevsel çerezler:</strong> Tercihlerinizi hatırlamak için.</li>
          </ul>
        </section>

        <section>
          <h2>5. Bilgilerin Paylaşılması</h2>
          <p>Kişisel bilgileriniz, aşağıdaki durumlar dışında üçüncü taraflarla paylaşılmaz:</p>
          <ul>
            <li>Açık rızanızın bulunması durumunda (örn. başvuru yaptığınız üniversiteler)</li>
            <li>Yasal zorunluluk halinde yetkili kamu kurum ve kuruluşları</li>
            <li>Hizmetlerimizi sunmamıza yardımcı olan ve gizlilik anlaşması yapılmış teknik altyapı sağlayıcıları</li>
          </ul>
          <p>
            Bilgilerinizi reklam veya pazarlama amacıyla üçüncü taraflara <strong>satmıyoruz</strong>.
          </p>
        </section>

        <section>
          <h2>6. Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı teknik ve idari önlemler alıyoruz. Sunucularımız güvenli veri merkezlerinde barındırılır; iletişim TLS şifrelemesi ile korunur.
          </p>
        </section>

        <section>
          <h2>7. Veri Saklama Süresi</h2>
          <p>
            Kişisel verilerinizi, ilgili amaçların gerektirdiği süre ve yasal saklama süresi boyunca tutuyoruz. Bu sürenin sonunda verileriniz güvenli şekilde silinir veya anonimleştirilir.
          </p>
        </section>

        <section>
          <h2>8. Haklarınız</h2>
          <p>Kişisel veri sahibi olarak;</p>
          <ul>
            <li>Verilerinize erişme</li>
            <li>Düzeltme veya güncelleme talep etme</li>
            <li>Silme talep etme (&quot;unutulma hakkı&quot;)</li>
            <li>İşlemenin sınırlandırılmasını isteme</li>
            <li>İtiraz etme</li>
            <li>Veri taşınabilirliğini talep etme</li>
          </ul>
          <p>
            Detaylı bilgi için <Link href="/kvkk">KVKK Aydınlatma Metni</Link>&apos;ne göz atabilirsiniz.
          </p>
        </section>

        <section>
          <h2>9. Çocukların Gizliliği</h2>
          <p>
            Web sitemiz 18 yaş altı bireylerden bilinçli olarak veri toplamaz. Eğer 18 yaş altındaysanız, hizmetlerimizden faydalanmak için ebeveyn veya yasal vasinizin onayını almanız gerekmektedir.
          </p>
        </section>

        <section>
          <h2>10. Politikadaki Değişiklikler</h2>
          <p>
            Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler olduğunda web sitemizde bildirim yayınlanır. Son güncelleme tarihini sayfanın üst kısmında bulabilirsiniz.
          </p>
        </section>

        <section>
          <h2>11. İletişim</h2>
          <p>Gizlilik politikamız hakkında sorularınız için:</p>
          <ul>
            <li>E-posta: <a href="mailto:info@studyglobal.com.tr">info@studyglobal.com.tr</a></li>
            <li>Telefon: <a href="tel:+902121234567">+90 212 123 45 67</a></li>
            <li>Adres: Nişantaşı Mah. Teşvikiye Cd. No: 45/12, Şişli / İstanbul</li>
          </ul>
        </section>

        <p className="legal-footer">
          Verilerinizin işlenmesine dair detaylı yasal metnimiz için{" "}
          <Link href="/kvkk">KVKK Aydınlatma Metni</Link> sayfamızı inceleyin.
        </p>
      </div>
    </main>
  );
}
