import { useMemo, useState } from "react";
import { OptionShape } from "../types/filterItem";
import { UseTableOfOperationOptions } from "../types/useTableOfOperation";

/**
 * here i use two patterns:
 * 1. if selectedValues is provided, then it's a controlled component and onChange is required
 * 2. if selectedValues is not provided, then it's an uncontrolled component and onChange is optional
 *
 * this way the component can be used in both controlled and uncontrolled way without any issues
 */

export function useTableOfOperation({
  options,
  selected: controlledSelected,
  onChange,
}: UseTableOfOperationOptions) {
  const normalized = useMemo<OptionShape[]>(() => {
    return options.map((option) =>
      typeof option === "string" ? { label: option, value: option } : option,
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
