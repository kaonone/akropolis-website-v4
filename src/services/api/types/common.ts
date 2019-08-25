import { SubSet } from '_helpers';

export interface IRecaptchaRequest {
  recaptcha: string;
}

export interface IServerError<T> {
  code: T;
  message: string;
}

export type CheckUserActionType = keyof PayloadByCheckUserActionType;

// tslint:disable-next-line: interface-name
export type PayloadByCheckUserActionType = SubSet<Record<string, Record<string, string> | undefined>, {
  start_registration: {
    page: 'bounty' | 'tokenSwap';
  };
  accept_terms: {
    nextValue: string;
  };
  accept_is_not_resident: {
    nextValue: string;
  };
  accept_personal_data_processing: {
    nextValue: string;
  };
  enter_address: {
    address: string;
  };
  submit_form: {
    address: string;
  };
  submit_form_succeeded: {
    address: string;
    tokens: string;
  };
  submit_form_failed: {
    code: string;
  };
  reset_form: {},
  change_page: {
    toPage: string;
  };
}>;
