import { cn } from "../lib/cn";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export function DeleteButton({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "text-error border border-error hover:border-error/20 hover:bg-error/10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 px-4 py-2",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
