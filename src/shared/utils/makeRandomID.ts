export function makeRandomID(label: string) {
  return `${label}_${Math.floor(Math.random() * 1000000000)}`;
}
