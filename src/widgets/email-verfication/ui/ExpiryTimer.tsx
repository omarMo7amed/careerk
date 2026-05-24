"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Clock } from "lucide-react";

interface ExpiryTimerProps {
  duration?: number;
  onExpire?: () => void;
}

export function ExpiryTimer({ duration = 600, onExpire }: ExpiryTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasExpiredRef = useRef(false);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    hasExpiredRef.current = false;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearTimer();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  }, [clearTimer]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  useEffect(() => {
    if (timeLeft === 0 && !hasExpiredRef.current) {
      hasExpiredRef.current = true;
      onExpire?.();
    }
  }, [timeLeft, onExpire]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (timeLeft <= 0) {
    return (
      <div className="flex items-center justify-center gap-2 text-sm text-error">
        <Clock className="w-4 h-4" />
        <span className="font-semibold">Code expired</span>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center gap-2 text-sm ${
        timeLeft < 60 ? "text-error" : "text-text-secondary"
      }`}
    >
      <Clock className="w-4 h-4" />
      <span>
        Code expires in {minutes}:{seconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
}
