import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Üniversite", href: "/universite" },
  { label: "Yüksek Lisans", href: "/yuksek-lisans" },
  { label: "Dil Okulları", href: "/dil-okullari" },
  { label: "Akademik Programlar", href: "/akademik-programlar" },
  { label: "Sınavlar", href: "/sinavlar" },
  { label: "Yurt Dışı Eğitim", href: "/yurt-disi-egitim" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Gizlilik Politikası", href: "/gizlilik" },
  { label: "KVKK", href: "/kvkk" },
  { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Image
            className="footer-logo"
            src="/logo-v2.png"
            alt="Study Global"
            width={320}
            height={96}
            style={{ height: "auto", maxWidth: "260px", background: "white", padding: "10px 14px", borderRadius: "10px" }}
            unoptimized
          />
          <p>
            Study Global, öğrencilerin hedeflerine en uygun ülke, program ve başvuru
            stratejisini belirlemelerine yardımcı olan yurtdışı eğitim danışmanlığı
            markasıdır.
          </p>
        </div>

        <div>
          <h3>İstanbul Ofis</h3>
          <p>
            Nişantaşı Mah. Teşvikiye Cd.<br />
            No: 45/12, Şişli / İstanbul
          </p>
          <p>
            Telefon<br />
            +90 212 123 45 67
          </p>
          <p>
            E-posta<br />
            info@studyglobal.com.tr
          </p>
        </div>

        <div>
          <h3>Bağlantılar</h3>
          <div className="footer-links">
            {footerLinks.map((link) =>
              link.href ? (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ) : (
                <span key={link.label} className="footer-link-soon" title="Yakında">
                  {link.label} <em>Yakında</em>
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="container copyright">
        &copy; {new Date().getFullYear()} Study Global. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
