import { IRecaptchaRequest } from './common';

export interface IServerUser {
  address: string;
  tokens: number;
}

export interface IRegisterUserRequest extends IRecaptchaRequest {
  address: string;
  not_resident: boolean;
  terms: boolean;
}
