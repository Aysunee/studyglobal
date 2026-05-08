type TrustStripProps = {
  metrics: { value: string; label: string }[];
};

export function TrustStrip({ metrics }: TrustStripProps) {
  return (
    <section className="bg-white border-y border-border-soft py-10">
      <div className="mx-auto max-w-[var(--max-width-site)] px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((m) => (
          <div key={m.label}>
            <p className="text-2xl md:text-3xl font-bold text-navy-deep">{m.value}</p>
            <p className="text-xs text-muted-slate mt-1 uppercase tracking-wide">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
