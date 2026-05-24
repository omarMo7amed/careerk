import { toast } from "react-hot-toast";
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_IMAGE_SIZE_MB,
  MAX_IMAGE_SIZE_BYTES,
} from "@/shared/config/media";

export function handleFileChange(
  e: React.ChangeEvent<HTMLInputElement>,
  upload: (file: File) => void,
) {
  const file = e.target.files?.[0];
  e.target.value = "";
  if (!file) return;

  if (
    !ACCEPTED_IMAGE_TYPES.includes(
      file.type as (typeof ACCEPTED_IMAGE_TYPES)[number],
    )
  ) {
    toast.error("Only JPEG, PNG, WebP or GIF images are supported.");
    return;
  }
  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    toast.error(`Image must be smaller than ${MAX_IMAGE_SIZE_MB} MB.`);
    return;
  }

  upload(file);
}
