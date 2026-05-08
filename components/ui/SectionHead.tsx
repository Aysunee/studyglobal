type SectionHeadProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function SectionHead({ eyebrow, title, description, children }: SectionHeadProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-study-red mb-2 block">{eyebrow}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-navy-deep leading-tight">{title}</h2>
      </div>
      {description && <p className="text-muted-slate max-w-md text-sm leading-relaxed">{description}</p>}
      {children}
    </div>
  );
}
