type TrustStripProps = {
  metrics: { value: string; label: string }[];
};

export function TrustStrip({ metrics }: TrustStripProps) {
  const stripItems = [...metrics, ...metrics];

  return (
    <section className="trust">
      <div className="trust-shell" aria-label="Study Global referansları">
        <div className="trust-marquee">
          <div className="trust-strip">
            {stripItems.map((m, index) => (
              <div
                key={`${m.value}-${m.label}-${index}`}
                className="metric"
                aria-hidden={index >= metrics.length}
              >
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
