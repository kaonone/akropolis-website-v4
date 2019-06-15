/**
 * @summary
 * Checks error, caught in try/catch block and returns correct error representation of that
 */
function getErrorMsg(error: any): string {
  return String(error);
}

export default getErrorMsg;
