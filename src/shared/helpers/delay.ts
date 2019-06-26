export default function delay(time: number) {
  return new Promise((res) => setTimeout(() => res(), time));
}
