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
    <div className="grid-3">
      {items.map((t) => (
        <article key={t.name} className="testimonial">
          <div className="avatar">{t.initials}</div>
          <h3>
            {t.name} &mdash; {t.uni}
          </h3>
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p>{t.text}</p>
        </article>
      ))}
    </div>
  );
}
