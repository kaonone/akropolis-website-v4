export interface IUser {
  address: string;
  tokens: string;
}

export type UserError = 'notConfirmed' | 'notExist' | 'unknown';
