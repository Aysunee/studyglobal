type TestimonialItem = {
  initials: string;
  name: string;
  uni: string;
  text: string;
};

type TestimonialGridProps = {
  items: TestimonialItem[];
};

export function TestimonialGrid({ items }: TestimonialGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((t) => (
        <article
          key={t.name}
          className="rounded-[var(--radius)] bg-white shadow-card p-6 flex flex-col"
        >
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-navy-deep text-white flex items-center justify-center text-sm font-bold mb-4">
            {t.initials}
          </div>

          {/* Name & uni */}
          <h3 className="text-sm font-semibold text-navy-deep mb-0.5">
            {t.name}
          </h3>
          <p className="text-xs text-muted-slate mb-3">{t.uni}</p>

          {/* Stars */}
          <div className="text-study-red text-sm mb-3" aria-label="5 yildiz">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </div>

          {/* Quote */}
          <p className="text-sm text-muted-slate leading-relaxed flex-1">
            &ldquo;{t.text}&rdquo;
          </p>
        </article>
      ))}
    </div>
  );
}
