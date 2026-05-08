import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Üniversite", href: "/universite" },
  { label: "Yüksek Lisans", href: null },
  { label: "Dil Okulları", href: null },
  { label: "Akademik Programlar", href: "/akademik-programlar" },
  { label: "Sınavlar", href: "/sinavlar" },
  { label: "Yurt Dışı Eğitim", href: "/yurt-disi-egitim" },
  { label: "Blog", href: null },
  { label: "İletişim", href: "/iletisim" },
  { label: "Gizlilik Politikası", href: null },
  { label: "KVKK", href: null },
  { label: "Kullanım Şartları", href: null },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Image
            className="footer-logo"
            src="/logo.png"
            alt="Study Global"
            width={140}
            height={40}
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
                <span key={link.label} style={{ opacity: 0.5, cursor: "not-allowed" }}>
                  {link.label}
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
