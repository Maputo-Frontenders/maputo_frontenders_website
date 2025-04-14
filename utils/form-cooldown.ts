export const DEFAULT_FORM_COOLDOWN = 5 * 60 * 1000; // 5 minutes

export function setFormSubmissionTime(formId: string = "contact"): void {
  localStorage.setItem(`lastFormSubmission_${formId}`, Date.now().toString());
}

export function getFormCooldownRemaining(
  formId: string = "contact",
  cooldownMs: number = DEFAULT_FORM_COOLDOWN
): number {
  const lastSubmission = localStorage.getItem(`lastFormSubmission_${formId}`);

  if (!lastSubmission) {
    return 0;
  }

  const timeSinceSubmission = Date.now() - parseInt(lastSubmission, 10);
  return Math.max(0, cooldownMs - timeSinceSubmission);
}

export function formatCooldownTime(cooldownMs: number): string {
  if (cooldownMs <= 0) return "0:00";

  const minutes = Math.floor(cooldownMs / 60000);
  const seconds = Math.floor((cooldownMs % 60000) / 1000);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function clearFormCooldown(formId: string = "contact"): void {
  localStorage.removeItem(`lastFormSubmission_${formId}`);
}
