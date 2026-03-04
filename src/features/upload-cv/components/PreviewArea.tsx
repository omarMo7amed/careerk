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
    <div className="flex-1 overflow-y-auto bg-gray-50 p-4 min-h-[400px]">
      {isPdf ? (
        <iframe
          src={previewUrl}
          className="w-full h-[500px] rounded-lg border border-gray-200 bg-white"
          title="CV Preview"
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-[300px] gap-4 text-gray-400">
          <File size={48} />
          <div className="text-center">
            <p className="font-medium text-gray-600 text-base">{file.name}</p>
            <p className="text-sm mt-1">
              Word documents cannot be previewed in the browser.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
