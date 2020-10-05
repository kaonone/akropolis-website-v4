export function isRequired(value: string | null) {
  return !value ? 'Field is required' : undefined;
}
