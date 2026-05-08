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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((s, i) => {
        const isFirst = i === 0;
        const card = (
          <div
            className={`group relative rounded-[var(--radius)] overflow-hidden ${
              isFirst ? "sm:col-span-2 sm:row-span-2 min-h-[360px]" : "min-h-[220px]"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-study-red mb-1 block">
                {s.label}
              </span>
              <strong className="text-white text-base font-semibold block mb-1">{s.title}</strong>
              <small className="text-white/70 text-xs leading-relaxed block">{s.text}</small>
            </div>
          </div>
        );

        if (s.href === "#") {
          return <div key={s.title} className={isFirst ? "sm:col-span-2 sm:row-span-2" : ""}>{card}</div>;
        }

        return (
          <Link key={s.title} href={s.href} className={isFirst ? "sm:col-span-2 sm:row-span-2" : ""}>
            {card}
          </Link>
        );
      })}
    </div>
  );
}
