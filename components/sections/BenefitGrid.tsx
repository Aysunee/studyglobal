import { SectionHead } from "@/components/ui/SectionHead";

type BenefitGridProps = {
  eyebrow: string;
  title: string;
  description?: string;
  items: { title: string; text: string }[];
  dark?: boolean;
};

export function BenefitGrid({ eyebrow, title, description, items, dark = false }: BenefitGridProps) {
  return (
    <section className={`py-20 ${dark ? "bg-navy-deep text-white" : "bg-ivory"}`}>
      <div className="mx-auto max-w-[var(--max-width-site)] px-5">
        <SectionHead eyebrow={eyebrow} title={title} description={description} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className={`rounded-[var(--radius)] p-6 ${
                dark
                  ? "bg-navy-card"
                  : "bg-white shadow-card"
              }`}
            >
              <h3 className={`text-base font-semibold mb-2 ${dark ? "text-white" : "text-navy-deep"}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-white/70" : "text-muted-slate"}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
