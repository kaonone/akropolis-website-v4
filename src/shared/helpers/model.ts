import { EventTense } from 'shared/types/models';

export function getEventTense(from: string, to?: string): EventTense {
  const now = Date.now();
  const fromDate = new Date(from).getTime();
  const dueDate = new Date(to || from).getTime() + 24 * 60 * 60 * 1000;

  if (dueDate <= now) {
    return 'past';
  }
  if (fromDate <= now && now < dueDate) {
    return 'current';
  }
  return 'future';
}
