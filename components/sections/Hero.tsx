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
    <section className="relative bg-navy-deep text-white pt-32 pb-20 overflow-hidden">
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/80 via-navy/60 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-[var(--max-width-site)] px-5">
        <span className="text-xs font-bold uppercase tracking-widest text-study-red mb-3 block">
          {eyebrow}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mb-5">
          {title}
        </h1>
        <p className="text-white/80 max-w-2xl text-base leading-relaxed mb-6">
          {text}
        </p>

        {points && points.length > 0 && (
          <ul className="flex flex-col gap-2 mb-8">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-white/90">
                <span className="size-1.5 rounded-full bg-study-red shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-4">
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
      </div>
    </section>
  );
}
