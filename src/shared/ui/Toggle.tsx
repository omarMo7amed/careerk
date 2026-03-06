"use client";

interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  disabled?: boolean;
}

export function Toggle({ enabled, onChange, disabled }: ToggleProps) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      disabled={disabled}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors
        ${enabled ? "bg-primary" : "bg-gray-300"}
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      role="switch"
      aria-checked={enabled}
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-bg-surface transition-transform
          ${enabled ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
}
