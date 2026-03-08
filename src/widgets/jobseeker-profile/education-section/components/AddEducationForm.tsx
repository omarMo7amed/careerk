import { Button } from "@/shared";
import { DEGREE_LABELS } from "@/entities/education";
import { useEducationContext } from "../model/EducationContext";

export function AddEducationForm() {
  const { form, setFormField, submitForm, closeForm } = useEducationContext();

  if (!form) return null;

  return (
    <div className="flex flex-col gap-3 border border-border rounded-lg p-4 bg-bg-muted">
      <h3 className="text-sm font-semibold text-foreground">
        New Education Entry
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-text-muted">Institution *</label>
          <input
            className="rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.institutionName}
            onChange={(e) => setFormField("institutionName", e.target.value)}
            placeholder="University / School name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-text-muted">Field of Study *</label>
          <input
            className="rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.fieldOfStudy}
            onChange={(e) => setFormField("fieldOfStudy", e.target.value)}
            placeholder="e.g. Computer Science"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-text-muted">Degree</label>
          <select
            className="rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.degreeType ?? ""}
            onChange={(e) =>
              setFormField(
                "degreeType",
                (e.target.value as typeof form.degreeType) || null,
              )
            }
          >
            <option value="">— Select —</option>
            {Object.entries(DEGREE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-text-muted">GPA</label>
          <input
            type="number"
            min={0}
            max={4}
            step={0.01}
            className="rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.gpa}
            onChange={(e) => setFormField("gpa", e.target.value)}
            placeholder="e.g. 3.8"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-text-muted">Start Date</label>
          <input
            type="date"
            className="rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.startDate}
            onChange={(e) => setFormField("startDate", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-text-muted">End Date</label>
          <input
            type="date"
            disabled={form.isCurrent}
            className="rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            value={form.endDate}
            onChange={(e) => setFormField("endDate", e.target.value)}
          />
          <label className="flex items-center gap-2 text-xs text-text-muted mt-1 cursor-pointer">
            <input
              type="checkbox"
              checked={form.isCurrent}
              onChange={(e) => setFormField("isCurrent", e.target.checked)}
            />
            Currently studying here
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-text-muted">Description</label>
        <textarea
          rows={2}
          className="rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          value={form.description}
          onChange={(e) => setFormField("description", e.target.value)}
          placeholder="Brief description…"
        />
      </div>

      <div className="flex gap-2 justify-end">
        <Button variant="outline" onClick={closeForm}>
          Discard
        </Button>
        <Button
          variant="primary"
          onClick={submitForm}
          disabled={!form.institutionName.trim() || !form.fieldOfStudy.trim()}
        >
          Add Entry
        </Button>
      </div>
    </div>
  );
}
