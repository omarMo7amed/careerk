import { File } from "lucide-react";

export default function PreviewArea({
  previewUrl,
  file,
}: {
  previewUrl: string;
  file: File;
}) {
  const isPdf = file.type === "application/pdf";
  return (
    <div className="flex-1 overflow-y-auto bg-bg-muted p-4 min-h-[400px]">
      {isPdf ? (
        <iframe
          src={previewUrl}
          className="w-full h-[500px] rounded-lg border border-border bg-bg-surface"
          title="CV Preview"
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-[300px] gap-4 text-text-muted">
          <File size={48} />
          <div className="text-center">
            <p className="font-medium text-foreground text-base">{file.name}</p>
            <p className="text-sm mt-1">
              Word documents cannot be previewed in the browser.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
