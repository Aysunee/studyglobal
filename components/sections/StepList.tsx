import { SectionHead } from "@/components/ui/SectionHead";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type StepListProps = {
  eyebrow: string;
  title: string;
  items: { title: string; text: string }[];
};

export function StepList({ eyebrow, title, items }: StepListProps) {
  return (
    <RevealOnScroll as="section">
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} />

        <div className="steps">
          {items.map((item) => (
            <article key={item.title} className="step">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
