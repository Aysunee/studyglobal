import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Üniversite", href: "/universite" },
  { label: "Akademik Programlar", href: "/akademik-programlar" },
  { label: "Sınavlar", href: "/sinavlar" },
  { label: "Yurt Dışı Eğitim", href: "/yurt-disi-egitim" },
  { label: "İletişim", href: "/iletisim" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 pt-16 pb-8">
      <div className="mx-auto max-w-[var(--max-width-site)] px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Col 1 - Logo & Description */}
        <div className="space-y-4">
          <Image
            src="/logo.png"
            alt="Study Global"
            width={140}
            height={40}
            className="brightness-0 invert"
          />
          <p className="text-sm leading-relaxed">
            Study Global, yurt dışında eğitim almak isteyen öğrencilere profesyonel
            danışmanlık hizmeti sunan uluslararası bir eğitim danışmanlık firmasıdır.
          </p>
        </div>

        {/* Col 2 - Contact */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-base">İletişim</h3>
          <address className="not-italic text-sm space-y-2">
            <p>
              Büyükdere Cad. No: 185, Kanyon Ofis Bloğu,
              <br />
              Levent, 34394 İstanbul
            </p>
            <p>
              <a href="tel:+902121234567" className="hover:text-white transition-colors">
                +90 212 123 45 67
              </a>
            </p>
            <p>
              <a href="mailto:info@studyglobal.com" className="hover:text-white transition-colors">
                info@studyglobal.com
              </a>
            </p>
          </address>
        </div>

        {/* Col 3 - Navigation */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-base">Sayfalar</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-[var(--max-width-site)] px-6 mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} Study Global. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
