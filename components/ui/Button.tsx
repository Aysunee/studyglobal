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
  const variants: Record<string, string> = {
    primary: "btn btn-primary",
    secondary: "btn btn-secondary",
    outline: "btn btn-outline",
  };
  const cls = `${variants[variant]}${className ? ` ${className}` : ""}`;

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
