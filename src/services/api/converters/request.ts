import { IRegisterUserRequest } from '../types/Note';

export function convertRegisterUserRequest(address: string, captcha: string): IRegisterUserRequest {
  return {
    address,
    recaptcha: captcha,
    terms: true,
    not_resident: true,
  };
}

// export function convertCheckUserQueryString(address: string, captcha: string): string {
//   return `?address=${address}&recaptcha=${captcha}`;
// }
