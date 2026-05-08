import { SectionHead } from "@/components/ui/SectionHead";

type StepListProps = {
  eyebrow: string;
  title: string;
  items: { title: string; text: string }[];
  dark?: boolean;
};

export function StepList({ eyebrow, title, items, dark = false }: StepListProps) {
  return (
    <section className={`py-20 ${dark ? "bg-navy-deep text-white" : "bg-ivory"}`}>
      <div className="mx-auto max-w-[var(--max-width-site)] px-5">
        <SectionHead eyebrow={eyebrow} title={title} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`relative rounded-[var(--radius)] p-6 overflow-hidden ${
                dark ? "bg-navy-card" : "bg-white shadow-card"
              }`}
            >
              {/* Faded step number */}
              <span
                className={`absolute top-2 right-4 text-6xl font-bold leading-none select-none pointer-events-none ${
                  dark ? "text-white/5" : "text-navy-deep/5"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className={`relative text-base font-semibold mb-2 ${dark ? "text-white" : "text-navy-deep"}`}>
                {item.title}
              </h3>
              <p className={`relative text-sm leading-relaxed ${dark ? "text-white/70" : "text-muted-slate"}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
