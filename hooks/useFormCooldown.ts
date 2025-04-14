"use client";

import {
  LAST_FORM_SUBMISSION_KEY,
  DEFAULT_FORM_COOLDOWN,
} from "@/utils/constants";
import { useState, useEffect } from "react";

interface UseFormCooldownProps {
  cooldownDuration?: number;
  storageKey?: string;
}

interface UseFormCooldownReturn {
  cooldownRemaining: number;
  isInCooldown: boolean;
  startCooldown: () => void;
  formattedTime: string | null;
  clearCooldown: () => void;
  minutesRemaining: number;
}

export function useFormCooldown({
  cooldownDuration = DEFAULT_FORM_COOLDOWN,
  storageKey = LAST_FORM_SUBMISSION_KEY,
}: UseFormCooldownProps = {}): UseFormCooldownReturn {
  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);

  useEffect(() => {
    const checkCooldown = () => {
      try {
        const lastSubmission = localStorage.getItem(storageKey);
        if (lastSubmission) {
          const timeSinceSubmission = Date.now() - parseInt(lastSubmission, 10);
          const remaining = Math.max(0, cooldownDuration - timeSinceSubmission);
          setCooldownRemaining(remaining);
        }
      } catch (error) {
        console.error("Error checking cooldown:", error);
        setCooldownRemaining(0);
      }
    };

    checkCooldown();

    let interval: NodeJS.Timeout | null = null;
    if (cooldownRemaining > 0) {
      interval = setInterval(checkCooldown, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [cooldownDuration, storageKey, cooldownRemaining]);

  const startCooldown = () => {
    try {
      localStorage.setItem(storageKey, Date.now().toString());
      setCooldownRemaining(cooldownDuration);
    } catch (error) {
      console.error("Error starting cooldown:", error);
    }
  };

  const clearCooldown = () => {
    try {
      localStorage.removeItem(storageKey);
      setCooldownRemaining(0);
    } catch (error) {
      console.error("Error clearing cooldown:", error);
    }
  };

  const formatTime = (ms: number): string | null => {
    if (ms <= 0) return null;
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const minutesRemaining = Math.ceil(cooldownRemaining / 60000);

  return {
    cooldownRemaining,
    isInCooldown: cooldownRemaining > 0,
    startCooldown,
    formattedTime: formatTime(cooldownRemaining),
    clearCooldown,
    minutesRemaining,
  };
}
