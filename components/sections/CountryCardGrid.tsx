"use client";

import { useState } from "react";
import Link from "next/link";

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
  { key: "all", label: "Tüm ülkeler" },
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
      <div className="filter-bar">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`filter-chip${active === f.key ? " active" : ""}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="country-grid">
        {filtered.map((c) => (
          <Link
            key={c.slug}
            href={`/ulkeler/${c.slug}`}
            className="country-card no-visual"
          >
            <div className="country-visual country-visual-flag">
              <span className="country-visual-flag-emoji">{c.flag}</span>
              {c.premium && <span className="country-premium-badge">Premium</span>}
            </div>
            <h3>{c.name}</h3>
            <p>{c.description}</p>
            <span className="text-link">Detayları İncele</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
