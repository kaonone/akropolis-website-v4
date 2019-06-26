export interface IRecaptchaRequest {
  recaptcha: string;
}

export interface IServerError<T> {
  code: T;
  message: string;
}
