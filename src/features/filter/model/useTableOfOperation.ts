import { useMemo, useState } from "react";
import type { OptionShape } from "@/features/filter/types/filterItem";
import type { UseTableOfOperationOptions } from "@/features/filter/types/useTableOfOperation";

export function useTableOfOperation({
  options = [],
  selected: controlledSelected,
  onChange,
}: UseTableOfOperationOptions) {
  const normalized = useMemo<OptionShape[]>(() => {
    return (options || []).map((o) =>
      typeof o === "string" ? { label: o, value: o } : o,
    );
  }, [options]);

  const [internalSelected, setInternalSelected] = useState<string[]>(
    controlledSelected ?? [],
  );
  const selected = controlledSelected ?? internalSelected;

  function toggle(value: string) {
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    if (controlledSelected !== undefined) onChange?.(next);
    else {
      setInternalSelected(next);
      onChange?.(next);
    }
  }

  function clearAll() {
    if (controlledSelected !== undefined) onChange?.([]);
    else {
      setInternalSelected([]);
      onChange?.([]);
    }
  }

  function selectAll() {
    const next = normalized.map((o) => o.value);
    if (controlledSelected !== undefined) onChange?.(next);
    else {
      setInternalSelected(next);
      onChange?.(next);
    }
  }

  return {
    normalized,
    selected,
    toggle,
    clearAll,
    selectAll,
  } as const;
}
