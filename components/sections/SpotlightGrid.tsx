import { SectionHead } from "@/components/ui/SectionHead";

type SpotlightGridProps = {
  eyebrow: string;
  title: string;
  items: { title: string; text: string }[];
};

export function SpotlightGrid({ eyebrow, title, items }: SpotlightGridProps) {
  return (
    <section>
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} />

        <div className="grid-3">
          {items.map((item) => (
            <article key={item.title} className="spotlight has-photo">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
