import { SectionHead } from "@/components/ui/SectionHead";

type SpotlightGridProps = {
  eyebrow: string;
  title: string;
  items: { title: string; text: string }[];
};

export function SpotlightGrid({ eyebrow, title, items }: SpotlightGridProps) {
  return (
    <section className="py-20 bg-ivory">
      <div className="mx-auto max-w-[var(--max-width-site)] px-5">
        <SectionHead eyebrow={eyebrow} title={title} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[var(--radius)] bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-lg"
            >
              <h3 className="text-base font-semibold text-navy-deep mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-slate">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
