import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type CTASectionProps = {
  title: string;
  text: string;
};

export function CTASection({ title, text }: CTASectionProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "/iletisim";

  return (
    <RevealOnScroll as="section" className="cta-section">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>

        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Button variant="primary" href="/iletisim">
            Ücretsiz Danışmanlık Al
          </Button>
          <Button variant="secondary" href={whatsappLink}>
            WhatsApp&apos;tan Hemen Yazın
          </Button>
        </div>
      </div>
    </RevealOnScroll>
  );
}
