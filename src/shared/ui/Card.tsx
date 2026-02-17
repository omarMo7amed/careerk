import { cn } from "../lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  const baseStyles =
    "p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border/50 bg-white rounded-lg";

  return <div className={cn(baseStyles, className)}>{children}</div>;
}

export default Card;
