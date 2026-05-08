import { Button } from "@/components/ui/Button";

type HeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  points?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function Hero({ eyebrow, title, text, points, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="hero hero-simple">
      <div className="container">
        <div className="hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>

          {(primaryCta || secondaryCta) && (
            <div className="hero-actions">
              {primaryCta && (
                <Button variant="primary" href={primaryCta.href}>
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button variant="secondary" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}

          {points && points.length > 0 && (
            <div className="hero-points">
              {points.map((point) => (
                <div key={point} className="point">
                  {point}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
