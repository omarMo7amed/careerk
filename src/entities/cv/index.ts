export { uploadCVToServer } from "./api/uploadCV";
export { confirmCVParse } from "./api/confirmCVParse";
export { mockCVParseResponse } from "./mock-data/mockCVInfo";

export { FIELD_META } from "./config/config";

export type { PersonalInfo } from "./types/cvInfo";
export type { FieldMeta } from "./types/fieldMeta";
export type {
  CVParseResponse,
  CVConfirmPayload,
  ParseStatus,
} from "./types/cvParseResponse";

export { useCV, useCVInfo, useConfirmCVParse } from "./model/useCv";
export { getMyCVInfo } from "./api/getMyCVInfo";
