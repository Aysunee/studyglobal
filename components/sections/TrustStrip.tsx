type TrustStripProps = {
  metrics: { value: string; label: string }[];
};

export function TrustStrip({ metrics }: TrustStripProps) {
  return (
    <section className="trust">
      <div className="container trust-strip">
        {metrics.map((m) => (
          <div key={m.label} className="metric">
            <strong>{m.value}</strong>{m.label}
          </div>
        ))}
      </div>
    </section>
  );
}
