import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Study Global",
  description:
    "Study Global olarak 6698 sayılı KVKK kapsamında kişisel verilerinizin işlenmesine dair aydınlatma metnimiz.",
};

export default function KvkkPage() {
  return (
    <main className="legal-page">
      <div className="container">
        <Link className="text-link" href="/" style={{ marginBottom: 24, display: "inline-block" }}>
          ← Ana sayfaya dön
        </Link>
        <span className="eyebrow" style={{ display: "block", marginBottom: 8 }}>Yasal</span>
        <h1>KVKK Aydınlatma Metni</h1>
        <p className="legal-meta">
          Son güncelleme: <strong>10 Mayıs 2026</strong>
        </p>

        <section>
          <h2>1. Veri Sorumlusunun Kimliği</h2>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, kişisel verileriniz; veri sorumlusu sıfatıyla{" "}
            <strong>Study Global Yurtdışı Eğitim Danışmanlığı</strong> (&quot;Şirket&quot;) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
          </p>
          <ul>
            <li><strong>Adres:</strong> Nişantaşı Mah. Teşvikiye Cd. No: 45/12, Şişli / İstanbul</li>
            <li><strong>E-posta:</strong> <a href="mailto:info@studyglobal.com.tr">info@studyglobal.com.tr</a></li>
            <li><strong>Telefon:</strong> <a href="tel:+902121234567">+90 212 123 45 67</a></li>
          </ul>
        </section>

        <section>
          <h2>2. İşlenen Kişisel Veri Kategorileri</h2>
          <p>Web sitemiz ve danışmanlık hizmetlerimiz aracılığıyla aşağıdaki kişisel verileriniz işlenebilmektedir:</p>
          <ul>
            <li><strong>Kimlik bilgileri:</strong> Ad, soyad</li>
            <li><strong>İletişim bilgileri:</strong> Telefon numarası, e-posta adresi, WhatsApp numarası</li>
            <li><strong>Müşteri işlem bilgileri:</strong> İlgilendiğiniz ülke, program ve sınav tercihleri; eğitim hedefleri; mesajınız</li>
            <li><strong>İşlem güvenliği bilgileri:</strong> IP adresi, çerez bilgileri, tarayıcı bilgileri</li>
          </ul>
        </section>

        <section>
          <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
          <p>Kişisel verileriniz aşağıdaki amaçlarla, açık rızanıza istinaden işlenmektedir:</p>
          <ul>
            <li>Yurtdışı eğitim danışmanlık hizmetlerinin sunulması</li>
            <li>Talep ve sorularınızın cevaplanması</li>
            <li>Size en uygun ülke, üniversite, program ve sınav önerilerinin oluşturulması</li>
            <li>Başvuru süreçlerinin yönetilmesi</li>
            <li>İletişim faaliyetlerinin yürütülmesi</li>
            <li>Hizmet kalitesinin iyileştirilmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>
        </section>

        <section>
          <h2>4. Kişisel Verilerin Aktarılması</h2>
          <p>
            Kişisel verileriniz; KVKK&apos;nın 8. ve 9. maddelerinde belirtilen şartlar dahilinde, hizmetin gerektirdiği ölçüde ve yalnızca aşağıdaki amaçlarla üçüncü taraflarla paylaşılabilir:
          </p>
          <ul>
            <li>Başvuru yaptığınız yurtdışı üniversite ve eğitim kurumları (yalnızca açık rızanız ile)</li>
            <li>Vize başvurusu yapılan resmi kurumlar</li>
            <li>Yasal yükümlülükler kapsamında yetkili kamu kurum ve kuruluşları</li>
          </ul>
          <p>Verileriniz pazarlama amacıyla üçüncü taraflarla paylaşılmamaktadır.</p>
        </section>

        <section>
          <h2>5. Kişisel Verilerin Toplanma Yöntemi</h2>
          <p>
            Kişisel verileriniz; web sitemizdeki iletişim formları, telefon, e-posta, WhatsApp, yüz yüze görüşme ve sosyal medya kanalları aracılığıyla otomatik veya otomatik olmayan yollarla toplanmaktadır.
          </p>
        </section>

        <section>
          <h2>6. KVKK Madde 11 Kapsamındaki Haklarınız</h2>
          <p>KVKK&apos;nın 11. maddesi uyarınca kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
            <li>KVKK&apos;da öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
            <li>Düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
          </ul>
        </section>

        <section>
          <h2>7. Başvuru Yöntemi</h2>
          <p>
            Yukarıda sayılan haklarınızı kullanmak için taleplerinizi aşağıdaki kanallar üzerinden Şirketimize iletebilirsiniz:
          </p>
          <ul>
            <li>E-posta: <a href="mailto:info@studyglobal.com.tr">info@studyglobal.com.tr</a></li>
            <li>Posta: Nişantaşı Mah. Teşvikiye Cd. No: 45/12, Şişli / İstanbul</li>
          </ul>
          <p>
            Başvurunuz, KVKK&apos;nın 13. maddesi uyarınca en geç 30 (otuz) gün içinde sonuçlandırılacaktır.
          </p>
        </section>

        <section>
          <h2>8. Açık Rıza</h2>
          <p>
            İletişim formlarımızdaki onay kutusunu işaretleyerek, yukarıda belirtilen kişisel verilerinizin işbu Aydınlatma Metni&apos;nde belirtilen amaçlarla işlenmesine açık rıza vermiş sayılırsınız.
          </p>
        </section>

        <p className="legal-footer">
          Sorularınız için <a href="mailto:info@studyglobal.com.tr">info@studyglobal.com.tr</a> adresinden bize ulaşabilirsiniz.
        </p>
      </div>
    </main>
  );
}
