import { IRecaptchaRequest } from './common';

export interface IServerUser {
  address: string;
  amount: number;
}

export interface IRegisterUserRequest extends IRecaptchaRequest {
  address: string;
  not_resident: boolean;
  terms: boolean;
}

export type ServerUserErrorCode = '404' | '901' | '902';

export interface IServerUserError {
  code: ServerUserErrorCode;
  message: string;
}
