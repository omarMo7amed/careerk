import { RefObject } from "react";

export interface ScrollProgressState {
  visibleCharCount: number;
  textTranslateY: number;
}

export interface AnimatedTextProps {
  text: string;
  visibleCharCount: number;
  textTranslateY: number;
}

export interface PlatformIcon {
  id: string;
  type: "svg" | "text";
  left: string;
  top: string;
  z: number;
  svg?: string;
  text?: string;
}

export type ScrollProgressReturn = [
  ScrollProgressState,
  RefObject<HTMLDivElement | null>,
];
