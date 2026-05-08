"use client";

type FilterChipProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`filter-chip${active ? " active" : ""}`}
    >
      {label}
    </button>
  );
}
