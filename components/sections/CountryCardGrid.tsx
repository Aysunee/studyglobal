"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FilterChip } from "@/components/ui/FilterChip";

type CountryCard = {
  slug: string;
  name: string;
  flag: string;
  region: string;
  premium: boolean;
  image: string;
  description: string;
};

type CountryCardGridProps = {
  countries: CountryCard[];
};

const filters = [
  { key: "all", label: "Tum ulkeler" },
  { key: "europe", label: "Avrupa" },
  { key: "north-america", label: "Kuzey Amerika" },
  { key: "asia", label: "Asya" },
  { key: "premium", label: "Premium hedefler" },
];

export function CountryCardGrid({ countries }: CountryCardGridProps) {
  const [active, setActive] = useState("all");

  const filtered = countries.filter((c) => {
    if (active === "all") return true;
    if (active === "premium") return c.premium;
    return c.region === active;
  });

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <FilterChip
            key={f.key}
            label={f.label}
            active={active === f.key}
            onClick={() => setActive(f.key)}
          />
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.map((c) => (
          <Link
            key={c.slug}
            href={`/ulkeler/${c.slug}`}
            className="group rounded-[var(--radius)] overflow-hidden bg-white shadow-card hover:shadow-lg transition-shadow"
          >
            <div className="relative h-36">
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-2xl">{c.flag}</span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-navy-deep mb-1">{c.name}</h3>
              <p className="text-xs text-muted-slate leading-relaxed line-clamp-2">{c.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
