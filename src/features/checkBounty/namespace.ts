export interface IRegistrationFormData {
  address: string;
  isNotResident: boolean;
  isConfirmTerms: boolean;
  recaptcha: string | null;
}

export interface ICheckAddressFormData {
  address: string;
  recaptcha: string | null;
}
