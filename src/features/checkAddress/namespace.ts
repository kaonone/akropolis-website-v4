import { IUser } from 'shared/types/models';

export type CheckType = 'tokenSwap';

export interface IRegistrationFormData {
  address: string;
  isNotResident: boolean;
  isConfirmTerms: boolean;
  isUnderstandPersonalData: boolean;
  recaptcha: string | null;
}

export interface ICheckAddressFormData {
  address: string;
  recaptcha: string | null;
}

export interface IRegisterUserApi {
  registerUser(address: string, captcha: string): Promise<IUser>;
}
