import { X, Plus } from "lucide-react";
import { Button } from "@/shared";
import { useSkillsContext } from "../model/SkillsContext";
import { JobSeekerSkill } from "@/entities/skill";

export function EditingMode() {
  const {
    skills,
    input,
    setInput,
    addSkill,
    removeSkill,
    handleSave,
    cancelEdit,
    isPending,
  } = useSkillsContext();

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {skills.map((s: JobSeekerSkill) => (
          <span
            key={s.skillId}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-bg-muted border border-border text-foreground"
          >
            {s.name}
            <button
              onClick={() => {
                removeSkill(s.skillId);
                console.log("Removing skill:", s.skillId);
              }}
              className="text-text-muted hover:text-error transition-colors ml-0.5"
              aria-label={`Remove ${s.name}`}
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>

      {/* Add new skill input */}
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-lg border border-border bg-bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a skill and press Enter…"
        />
        <Button
          variant="outline"
          onClick={addSkill}
          disabled={!input.trim()}
          aria-label="Add skill"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex gap-2 justify-end">
        <Button variant="outline" onClick={cancelEdit} disabled={isPending}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave} disabled={isPending}>
          {isPending ? "Saving…" : "Save"}
        </Button>
      </div>
    </div>
  );
}
