import { SectionHead } from "@/components/ui/SectionHead";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type BenefitGridProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: { title: string; text: string }[];
  dark?: boolean;
};

export function BenefitGrid({ eyebrow, title, description, items, dark = false }: BenefitGridProps) {
  const content = (
    <div className="container">
      {(eyebrow || title || description) && (
        <SectionHead eyebrow={eyebrow ?? ""} title={title ?? ""} description={description} />
      )}

      <div className="grid-4">
        {items.map((item) => (
          <article key={item.title} className="benefit">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <RevealOnScroll as="section" className={dark ? "dark-band" : ""}>
      {content}
    </RevealOnScroll>
  );
}
