import { IRegisterUserRequest } from '../types/Note';

export function convertRegisterUserRequest(address: string, captcha: string): IRegisterUserRequest {
  return {
    address: address.toLowerCase(),
    recaptcha: captcha,
    terms: true,
    not_resident: true,
  };
}
