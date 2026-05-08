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
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-navy text-white shadow-md"
          : "bg-white text-muted-slate border border-border-soft hover:border-navy hover:text-navy"
      }`}
    >
      {label}
    </button>
  );
}
