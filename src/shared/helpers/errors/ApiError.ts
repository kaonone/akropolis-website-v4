import { IHeaders, IErrorPayload } from './types';

interface IApiError<T> {
  data: T;
  status: string;
  code: number;
  headers: IHeaders;
  request: XMLHttpRequest;
  response: any;
  payload?: T;
}

export default class ApiError<T extends IErrorPayload> extends Error {
  public status: string;
  public code: number;
  public headers: IHeaders;
  public request: XMLHttpRequest;
  public response: any;
  public payload?: T;

  constructor(params: IApiError<T>) {
    const { data, code, status, headers, request, response, payload } = params;
    super(data.message || response.data);
    this.status = status;
    this.code = code;
    this.headers = headers;
    this.request = request;
    this.response = response;
    this.payload = payload;
  }
}
