import Link from "next/link";
import { EditableRowProps } from "../types/editableTable";

export function EditableRow({
  fieldKey,
  value,
  label,
  Icon,
  isLink,
  handleChange,
  confirmed,
  isEven,
}: EditableRowProps) {
  return (
    <tr className={` group ${isEven ? "bg-bg-surface" : "bg-bg-muted"}`}>
      <td className="p-4  whitespace-nowrap">
        <span className="inline-flex items-center gap-2 text-text-secondary font-medium">
          <span className="text-primary">{<Icon size={20} />}</span>
          {label}
        </span>
      </td>
      <td className="px-4 py-2">
        {confirmed ? (
          value ? (
            isLink ? (
              <Link
                href={value as string}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline truncate block"
              >
                {value}
              </Link>
            ) : (
              <span className="text-foreground">
                {typeof value === "number" ? `+${value}` : value}
              </span>
            )
          ) : (
            <span className="text-text-muted italic">—</span>
          )
        ) : (
          <input
            type="text"
            disabled={confirmed || typeof value === "number"}
            value={typeof value === "number" ? `+${value}` : (value ?? "")}
            onChange={(e) => handleChange(fieldKey, e.target.value)}
            className="w-full bg-transparent outline-none text-foreground placeholder:text-text-muted focus:bg-primary/5 rounded px-1.5 py-1 transition-colors border border-transparent focus:border-primary/30"
          />
        )}
      </td>
    </tr>
  );
}
