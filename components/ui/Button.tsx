import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  children: React.ReactNode;
  className?: string;
};

export function Button({ variant = "primary", href, onClick, type = "button", children, className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-study-red text-white hover:bg-soft-red shadow-md hover:shadow-lg",
    secondary: "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm",
    outline: "border border-border-soft text-navy hover:bg-navy hover:text-white",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
