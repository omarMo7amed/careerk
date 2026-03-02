export type HeaderState =
  | { status: "idle" }
  | { status: "editing"; title: string; location: string; fullName: string };

export type HeaderAction =
  | { type: "START_EDIT"; title: string; location: string; fullName: string }
  | {
      type: "SET_FIELD";
      field: "title" | "location" | "fullName";
      value: string;
    }
  | { type: "CANCEL" }
  | { type: "SAVE_SUCCESS" };
