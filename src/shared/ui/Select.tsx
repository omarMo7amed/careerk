import { cn } from "../lib/cn";

type Option = {
  label: string;
  value: string;
};

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: Option[];
}

export function Select({
  name,
  label,
  value,
  onChange,
  options,
  className,
}: SelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1">
        {label}
      </label>
      <select
        name={name}
        className={cn(
          "w-full h-12 px-4 bg-bg-surface border border-border rounded-lg text-text-secondary focus:ring-primary",
          className,
        )}
        value={value}
        onChange={onChange}
      >
        {options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
