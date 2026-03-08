"use client";
import { Button } from "@/shared";
import { DEGREE_LABELS } from "@/entities/education";
import { useEducationContext } from "../model/EducationContext";

export function EditEducationForm() {
  const { editForm, setEditFormField, submitEditForm, cancelEditEntry } =
    useEducationContext();

  if (!editForm) return null;

  return (
    <div className="flex flex-col gap-3 border border-primary/40 rounded-lg p-4 bg-bg-muted mt-2">
      <h3 className="text-sm font-semibold text-foreground">
        Edit Education Entry
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-text-muted">Institution *</label>
          <input
            className="rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={editForm.institutionName}
            onChange={(e) =>
              setEditFormField("institutionName", e.target.value)
            }
            placeholder="University / School name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-text-muted">Field of Study *</label>
          <input
            className="rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={editForm.fieldOfStudy}
            onChange={(e) => setEditFormField("fieldOfStudy", e.target.value)}
            placeholder="e.g. Computer Science"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-text-muted">Degree</label>
          <select
            className="rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={editForm.degreeType ?? ""}
            onChange={(e) =>
              setEditFormField(
                "degreeType",
                (e.target.value as typeof editForm.degreeType) || null,
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
            value={editForm.gpa}
            onChange={(e) => setEditFormField("gpa", e.target.value)}
            placeholder="e.g. 3.8"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-text-muted">Start Date</label>
          <input
            type="date"
            className="rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={editForm.startDate}
            onChange={(e) => setEditFormField("startDate", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-text-muted">End Date</label>
          <input
            type="date"
            disabled={editForm.isCurrent}
            className="rounded-lg border border-border bg-bg-surface px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            value={editForm.endDate}
            onChange={(e) => setEditFormField("endDate", e.target.value)}
          />
          <label className="flex items-center gap-2 text-xs text-text-muted mt-1 cursor-pointer">
            <input
              type="checkbox"
              checked={editForm.isCurrent}
              onChange={(e) => setEditFormField("isCurrent", e.target.checked)}
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
          value={editForm.description}
          onChange={(e) => setEditFormField("description", e.target.value)}
          placeholder="Brief description…"
        />
      </div>

      <div className="flex gap-2 justify-end">
        <Button variant="outline" onClick={cancelEditEntry}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={submitEditForm}
          disabled={
            !editForm.institutionName.trim() || !editForm.fieldOfStudy.trim()
          }
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
