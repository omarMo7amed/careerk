"use client";

import { useState, useEffect, useRef } from "react";
import type { ImprovementReport } from "../types/types";
import { mockImprovementReport } from "../mock-data/mockImprovementReport";

type ReportState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "data"; report: ImprovementReport }
  | { status: "error"; message: string };

export function useImprovementReport() {
  const [state, setState] = useState<ReportState>({ status: "idle" });
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  function clearTimers() {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }

  useEffect(() => {
    return () => clearTimers();
  }, []);

  function getReport() {
    clearTimers();
    setState({ status: "loading" });

    // Simulate network latency → then show PROCESSING
    const t1 = setTimeout(() => {
      setState({
        status: "data",
        report: {
          ...mockImprovementReport,
          status: "PROCESSING",
          completedAt: null,
        },
      });

      // Simulate backend processing → then COMPLETED
      const t2 = setTimeout(() => {
        setState({ status: "data", report: mockImprovementReport });
      }, 0);

      timersRef.current.push(t2);
    }, 0);

    timersRef.current.push(t1);
  }

  function retry() {
    clearTimers();
    getReport();
  }

  return { state, getReport, retry };
}
