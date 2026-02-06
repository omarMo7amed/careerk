type Option = {
  label: string;
  value: string;
};

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: Option[];
}

function Select({ label, value, onChange, options }: SelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1">
        {label}
      </label>
      <select
        name="companySize"
        className="w-full h-12 px-4 bg-bg-surface border border-border rounded-lg text-text-secondary focus:ring-primary focus:border-transparent"
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

export default Select;
