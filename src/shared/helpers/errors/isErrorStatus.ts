export default function isErrorStatus(status: number): boolean {
  return status >= 400 && status <= 503;
}
