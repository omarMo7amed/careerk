import { ALLOWED_FILE_TYPES, FILE_SIZE_LIMIT } from "../config/config";

export function validateCVFile(file: File): string | null {
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return "Only PDF and Word documents (.pdf, .doc, .docx) are allowed.";
  }
  if (file.size > FILE_SIZE_LIMIT) {
    return `File size must not exceed ${FILE_SIZE_LIMIT / (1024 * 1024)}MB.`;
  }
  return null;
}
