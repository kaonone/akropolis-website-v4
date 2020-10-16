import { BehaviorSubject } from 'rxjs';

export function getCurrentValueOrThrow<T>(
  subject: BehaviorSubject<T | null>,
  msg?: string,
): NonNullable<T> {
  const value = subject.getValue();

  if (value === null || value === undefined) {
    throw new Error(msg || 'Subject is not contain non nullable value');
  }

  return value as NonNullable<T>;
}
