import Image from "next/image";
import Link from "next/link";

type ServiceItem = {
  image: string;
  label: string;
  title: string;
  text: string;
  href: string;
};

type ServiceGridProps = {
  services: ServiceItem[];
};

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="service-visual-grid">
      {services.map((s, i) => {
        const isFirst = i === 0;
        const cardClass = isFirst
          ? "service-visual-card service-visual-card-large"
          : "service-visual-card";

        const inner = (
          <>
            <Image
              src={s.image}
              alt={`${s.title} hizmet gorseli`}
              fill
              className="object-cover"
            />
            <div className="service-visual-copy">
              <span>{s.label}</span>
              <strong>{s.title}</strong>
              <small>{s.text}</small>
            </div>
          </>
        );

        if (s.href === "#") {
          return (
            <div key={s.title} className={cardClass}>
              {inner}
            </div>
          );
        }

        return (
          <Link key={s.title} href={s.href} className={cardClass}>
            {inner}
          </Link>
        );
      })}
    </div>
  );
}
