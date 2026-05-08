import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { countries } from "@/data/countries";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { SpotlightGrid } from "@/components/sections/SpotlightGrid";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return {};
  return {
    title: `${country.name}\u2019de \u00DCniversite E\u011Fitimi | Study Global`,
    description: `${country.name}\u2019de \u00FCniversite e\u011Fitimi, burs f\u0131rsatlar\u0131 ve ba\u015Fvuru s\u00FCreci. \u00DCcretsiz dan\u0131\u015Fmanl\u0131k i\u00E7in hemen ba\u015Fvurun.`,
  };
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  return (
    <>
      <Hero
        eyebrow={country.eyebrow}
        title={`${country.flag} ${country.name}\u2019de \u00DCniversite E\u011Fitimi`}
        text={country.heroText}
        points={country.heroPoints}
        primaryCta={{ label: "\u00DCcretsiz Dan\u0131\u015Fmanl\u0131k Al", href: "/iletisim" }}
      />

      <TrustStrip metrics={country.metrics} />

      <BenefitGrid
        eyebrow={`Neden ${country.name}?`}
        title={`${country.name}\u2019de E\u011Fitimin Avantajlar\u0131`}
        items={country.benefits}
      />

      <SpotlightGrid
        eyebrow="\u00DCniversiteler"
        title={`\u00D6ne \u00C7\u0131kan ${country.name} \u00DCniversiteleri`}
        items={country.universities}
      />

      <BenefitGrid
        eyebrow="Maliyet & Burs"
        title="E\u011Fitim Maliyetleri ve Burslar"
        items={country.costs}
        dark
      />

      <CTASection title={country.ctaTitle} text={country.ctaText} />
    </>
  );
}
