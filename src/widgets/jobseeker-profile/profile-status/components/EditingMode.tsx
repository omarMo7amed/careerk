import {
  JOB_TYPE_LABELS,
  WORK_PREFERENCE_LABELS,
  JobType,
  WorkPreference,
} from "@/entities/job-seeker";
import { AVAILABILITY_OPTIONS, AvailabilityStatus } from "@/shared";
import { useProfileStatusContext } from "../model/ProfileStatusContext";

export function EditingMode() {
  const {
    state,
    isPending,
    setField,
    onToggleJobType,
    handleSave,
    cancelEdit,
  } = useProfileStatusContext();

  if (state.status !== "editing") return null;

  const availability = state.availabilityStatus;
  const workPreference = state.workPreference;
  const preferredJobTypes = state.preferredJobTypes;
  const expectedSalary = state.expectedSalary;
  const noticePeriod = state.noticePeriod;

  return (
    <div className="flex flex-col gap-4">
      {/* Availability */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-text-muted font-medium">
          Availability
        </label>
        <select
          value={availability}
          onChange={(e) =>
            setField(
              "availabilityStatus",
              e.target.value as AvailabilityStatus | "",
            )
          }
          className="rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">— none —</option>
          {AVAILABILITY_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      {/* Work preference */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-text-muted font-medium">
          Work Preference
        </label>
        <select
          value={workPreference}
          onChange={(e) =>
            setField("workPreference", e.target.value as WorkPreference | "")
          }
          className="rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">— none —</option>
          {(Object.keys(WORK_PREFERENCE_LABELS) as WorkPreference[]).map(
            (o) => (
              <option key={o} value={o}>
                {WORK_PREFERENCE_LABELS[o]}
              </option>
            ),
          )}
        </select>
      </div>

      {/* Job types */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-text-muted font-medium">Job Types</label>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(JOB_TYPE_LABELS) as JobType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => onToggleJobType(type)}
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                preferredJobTypes.includes(type)
                  ? "bg-primary text-white border-primary"
                  : "border-border text-text-secondary hover:border-primary"
              }`}
            >
              {JOB_TYPE_LABELS[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Expected salary */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-text-muted font-medium">
          Expected Salary (USD / year)
        </label>
        <input
          type="number"
          min={0}
          value={expectedSalary ?? ""}
          onChange={(e) =>
            setField(
              "expectedSalary",
              e.target.value ? Number(e.target.value) : null,
            )
          }
          placeholder="e.g. 90000"
          className="rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Notice period */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-text-muted font-medium">
          Notice Period
        </label>
        <input
          type="text"
          value={noticePeriod}
          onChange={(e) => setField("noticePeriod", e.target.value)}
          placeholder="e.g. 2 weeks"
          className="rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex gap-2 justify-end">
        <button
          onClick={cancelEdit}
          className="px-3 py-1.5 text-sm rounded-lg border border-border hover:bg-bg-muted transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={isPending}
          className="px-3 py-1.5 text-sm rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-60"
        >
          {isPending ? "Saving…" : "Save"}
        </button>
      </div>
    </div>
  );
}
