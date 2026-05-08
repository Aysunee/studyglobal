import { Button } from "@/components/ui/Button";

type CTASectionProps = {
  title: string;
  text: string;
};

export function CTASection({ title, text }: CTASectionProps) {
  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/";

  return (
    <section className="bg-gradient-to-r from-navy-deep to-navy py-20">
      <div className="mx-auto max-w-[var(--max-width-site)] px-5 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/80 max-w-xl mx-auto text-base leading-relaxed mb-8">{text}</p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" href="/iletisim">
            Ücretsiz Danışmanlık Al
          </Button>
          <Button variant="secondary" href={whatsappLink}>
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
