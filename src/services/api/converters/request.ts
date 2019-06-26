import { IRegisterUserRequest } from '../types/Note';

export function convertRegisterUserRequest(address: string, captcha: string): IRegisterUserRequest {
  return {
    address,
    recaptcha: captcha,
    terms: true,
    not_resident: true,
  };
}
