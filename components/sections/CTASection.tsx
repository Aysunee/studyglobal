import { Button } from "@/components/ui/Button";

type CTASectionProps = {
  title: string;
  text: string;
};

export function CTASection({ title, text }: CTASectionProps) {
  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/";

  return (
    <section className="cta-section">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>

        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Button variant="primary" href="/iletisim">
            Ücretsiz Danışmanlık Al
          </Button>
          <Button variant="secondary" href={whatsappLink}>
            WhatsApp&apos;tan Hemen Yazin
          </Button>
        </div>
      </div>
    </section>
  );
}
