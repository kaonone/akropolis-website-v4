export interface IHeaders {
  [key: string]: string;
}

export interface IErrorPayload {
  statusCode: string;
  message: string;
}

export type DomainServerError = 'domain_already_exists';

export type ServerError = DomainServerError;
