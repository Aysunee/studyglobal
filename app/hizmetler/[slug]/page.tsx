import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/data/services";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { SpotlightGrid } from "@/components/sections/SpotlightGrid";
import { StepList } from "@/components/sections/StepList";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Study Global`,
    description: service.heroText.slice(0, 160),
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Hero
        eyebrow={service.eyebrow}
        title={service.title}
        text={service.heroText}
        points={service.heroPoints}
        primaryCta={{ label: "\u00DCcretsiz Dan\u0131\u015Fmanl\u0131k Al", href: "/iletisim" }}
      />

      <TrustStrip metrics={service.metrics} />

      {service.sections.map((section) => {
        switch (section.type) {
          case "benefits":
            return (
              <BenefitGrid
                key={section.title}
                eyebrow={section.eyebrow}
                title={section.title}
                items={section.items}
              />
            );
          case "dark-benefits":
            return (
              <BenefitGrid
                key={section.title}
                eyebrow={section.eyebrow}
                title={section.title}
                items={section.items}
                dark
              />
            );
          case "spotlights":
            return (
              <SpotlightGrid
                key={section.title}
                eyebrow={section.eyebrow}
                title={section.title}
                items={section.items}
              />
            );
          case "steps":
            return (
              <StepList
                key={section.title}
                eyebrow={section.eyebrow}
                title={section.title}
                items={section.items}
              />
            );
        }
      })}

      <CTASection title={service.ctaTitle} text={service.ctaText} />
    </>
  );
}
